const ftp = require('ftp');//连接FTP
const path = require('path');
const fs = require('fs');
// const md5 = require('md5');

const watch = require('node-watch');

let preveMd5 = null,
    fsWait = false

//列出目标目录
async function list(client, dirpath) {
    let {err: ea, dir} = await cwd(client, dirpath);
    return new Promise((resolve, reject) => {
        client.list((err, files) => {
            resolve({err: err, files: files})
        })
    });
}

//切换目录
function cwd(client, dirpath) {
    return new Promise((resolve, reject) => {
        client.cwd(dirpath, (err, dir) => {
            resolve({err: err, dir: dir});
        })
    });
}

//下载文件
async function get(client, filePath) {
    const dirpath = path.dirname(filePath);
    const fileName = path.basename(filePath);
    let {err: ea, dir} = await cwd(client, dirpath);
    return new Promise((resolve, reject) => {
        client.get(fileName, (err, rs) => {
            let ws = fs.createWriteStream(fileName);
            rs.pipe(ws);
            resolve({err: err});
        });
    });
}

//将文件上传到ftp目标地址
async function put(client, currentFile, targetFilePath) {
    const dirpath = path.dirname(targetFilePath);
    const fileName = path.basename(targetFilePath);
    const rs = fs.createReadStream(currentFile);
    let {err: ea, dir} = await cwd(client, dirpath);//此处应对err做处理
    if (ea) {
        return Promise.resolve({err: ea});
    }
    return new Promise((resolve, reject) => {
        client.put(rs, fileName, (err) => {
            resolve({err: err});
        })
    });
}

const filePath = 'D:\\code\\ytj-client\\dist\\'
watch(filePath, {recursive: true}, function (evt, name) {
    console.log('%s changed.', name);

    watchFtpUpload(name, 'yinchuanclient.zip', {
        host: '212.129.237.65',
        port: '21',
        user: 'test001',
        password: '5wBhTmPkbXnd4M7y'
    })

    watchFtpUpload(name, 'bengbuclient.zip', {
        host: '212.129.237.65',
        port: '21',
        user: 'test002',
        password: '35t2tMB7a6nbmY64'
    })

});

function watchFtpUpload(name, fileName, ftpParams) {
    if (name.match(fileName)) {
        fs.exists(filePath + fileName, function (exists) {
            if (exists) {
                const client = new ftp();
                client.on('ready', async () => {
                    console.log('ftp client is ready');

                    let {err: eb} = await put(client, filePath + fileName, fileName);
                    if (eb) {
                        console.log(eb);
                        return;
                    }
                    console.log('文件上传成功:', fileName)
                    client.end();
                });
                client.on('close', () => {
                    console.log('ftp client has close')
                });
                client.on('end', () => {
                    console.log('ftp client has end')
                });
                client.on('error', (err) => {
                    console.log('ftp client has an error : ' + JSON.stringify(err))
                });
                client.connect(ftpParams);
            }
        });
    }
}