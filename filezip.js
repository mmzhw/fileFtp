const ftp = require('ftp');//连接FTP
const path = require('path');
const fs = require('fs');
// const md5 = require('md5');
const AdmZip = require('adm-zip-iconv')

const watch = require('node-watch');


const filePath = 'D:\\code\\ytj-client\\dist\\';
const destFilePath = 'D:\\code\\fileFtp\\zip\\';

watch(filePath, {recursive: true}, function (evt, name) {
    console.log('%s changed.', name);

    const fileName = 'yinchuanclient.zip'
    if (name.match(fileName)) {
        fs.exists(filePath + fileName, function (exists) {
            if (exists) {
                fs.rename(filePath + fileName, destFilePath + fileName, (err, data) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('已经移动并更改');
                        let unzip = new AdmZip(destFilePath + fileName, 'GBK')
                        unzip.extractAllTo(destFilePath, true)
                    }
                })
            }
        });
    }

});