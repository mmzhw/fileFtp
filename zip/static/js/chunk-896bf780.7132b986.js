(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-896bf780"],{1983:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"kd-page-title"},[e._v("业务须知")]),n("div",{staticClass:"kd-page-content-wrapper wrap-info"},[n("div",{staticClass:"serverinfo-content"},[n("div",{staticClass:"introduce-info"},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"text-info",class:e.onePage?"onePageTextInfo":"",style:{top:e.changeTop+"px"}},[n("div",{ref:"textInfo",domProps:{innerHTML:e._s(e.text)}})]),e.onePage||e.loading?e._e():n("div",{staticClass:"change-page"},[n("el-button",{attrs:{disabled:e.downDisable},on:{click:function(t){return e.changePage("down")}}},[e._v(" 上 翻 ")]),n("el-button",{attrs:{disabled:e.upDisable},on:{click:function(t){return e.changePage("up")}}},[e._v(" 下 翻 ")])],1)]),e.loading?e._e():n("div",{staticClass:"checked-info"},[n("el-checkbox-group",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[n("el-checkbox",{attrs:{label:"阅读并同意"}},[e._v(" 阅读并同意 ")])],1)],1)]),n("img",{staticClass:"policeImg",attrs:{src:e.animalPic}})]),e.$store.state.common.visibleTip?e._e():n("div",{staticClass:"kd-foot-button kd-foot-button-position"},[n("kd-button",{attrs:{icon:"kedaIcon-policework",text:"返回首页","type-class":"home"}}),n("kd-button",{attrs:{icon:"kedaIcon-zhongzhi",text:"返回","button-handle":e.backMenu}}),e.loading?e._e():n("kd-button",{attrs:{icon:"kedaIcon-circleright",text:"下一步","button-handle":e.nextStep,"but-disable":!e.checked}})],1)])},a=[],s=(n("96cf"),n("1da1")),o=n("5530"),c=n("2f62"),r=n("faf3"),d=n("ed08"),l=n("c63e"),u=n.n(l),p=n("541b"),h=n("8e23"),f={name:"ServerInfo",props:{onePage:{type:Boolean,default:!1}},computed:Object(o["a"])({},Object(c["d"])("common",{businessTypeCode:"businessTypeCode"})),data:function(){return{loading:!1,checked:!1,downDisable:!0,upDisable:!1,changeTop:0,limitTop:"",text:"",animalPic:Object(h["d"])(this.CONSTANT.location)}},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.audioCar=Object(p["a"])(u.a),e.audioCar.play(),e.loading=!0,t.next=5,Object(r["n"])({type:e.businessTypeCode});case 5:n=t.sent,e.loading=!1,n&&"0"===n.code?e.text=n.result.content:n&&e.changeTipPage({message:n.message}),e.$nextTick((function(){e.limitTop=0-e.$refs.textInfo.offsetHeight}));case 9:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){this.audioCar.destroy()},watch:{changeTop:{handler:function(e,t){this.limitTop=0-this.$refs.textInfo.offsetHeight,this.upDisable=!(e>this.limitTop),this.downDisable=!(e<0)},deep:!0}},methods:Object(o["a"])({},Object(c["c"])("common",["changeStep","changeTipPage","changeVisible"]),{backMenu:function(){this.changeVisible({visibleSteps:!1,visibleTip:!1,visibleBusinessName:!1,visibleJurisdiction:!1}),Object(d["a"])("/")},nextStep:function(){this.checked&&this.changeStep("down")},preStep:function(){this.changeStep("up")},changePage:function(e){"up"===e?this.changeTop-=40:this.changeTop+=40}})},m=f,b=(n("54ed"),n("2877")),v=Object(b["a"])(m,i,a,!1,null,"419f90d8",null);t["a"]=v.exports},2647:function(e,t,n){"use strict";var i=n("9e00"),a=n.n(i);a.a},"28d0":function(e,t,n){},3682:function(e,t,n){},"3f46":function(e,t,n){e.exports=n.p+"static/media/37.70bc8fd3.mp3"},5365:function(e,t,n){"use strict";var i=n("28d0"),a=n.n(i);a.a},"54ed":function(e,t,n){"use strict";var i=n("3682"),a=n.n(i);a.a},"5c20":function(e,t,n){},"5efd":function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.currentStep===e.steps.findIndex((function(e){return"serverInfo"===e.key}))?n("server-info"):e._e(),e.currentStep===e.steps.findIndex((function(e){return"identifyCardPage"===e.key}))?n("identify-card-page"):e._e(),e.currentStep===e.steps.findIndex((function(e){return"faceYitu"===e.key}))?n("face-yitu"):e._e(),e.currentStep===e.steps.findIndex((function(e){return"contrast"===e.key}))?n("contrast"):e._e(),e.currentStep===e.steps.findIndex((function(e){return"confirmInfo"===e.key}))?n("confirm-info"):e._e(),e.currentStep===e.steps.findIndex((function(e){return"checkPhone"===e.key}))?n("check-phone"):e._e(),e.currentStep===e.steps.findIndex((function(e){return"reason"===e.key}))?n("reason"):e._e(),e.currentStep===e.steps.findIndex((function(e){return"complete"===e.key}))?n("complete",{attrs:{data:e.physicalRes}}):e._e()],1)},a=[],s=n("5530"),o=n("2f62"),c=n("f7ef"),r=n("943e"),d=n("f5a9"),l=n("1983"),u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"kd-title-content-wrapper kd-page-padding wrap-info"},[n("text-table",{attrs:{data:e.personInfo}})],1),e.$store.state.common.visibleTip?e._e():n("div",{staticClass:"kd-foot-button kd-foot-button-position"},[n("kd-button",{attrs:{icon:"kedaIcon-policework",text:"返回首页","type-class":"home"}}),n("kd-button",{attrs:{icon:"kedaIcon-circleleft",text:"上一步","button-handle":e.preStep}}),n("kd-button",{attrs:{icon:"kedaIcon-circleright",text:"下一步","button-handle":e.nextStep}})],1)])},p=[],h=n("7c33"),f={name:"PhysicalEvidenceConfirmInfo",components:{textTable:h["a"]},computed:Object(s["a"])({},Object(o["d"])("physicalEvidence",{personInfo:"personInfo"})),methods:Object(s["a"])({},Object(o["c"])("common",["changeStep"]),{nextStep:function(){this.changeStep("down")},preStep:function(){this.changeStep("up")}})},m=f,b=n("2877"),v=Object(b["a"])(m,u,p,!1,null,"48c1905c",null),g=v.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"kd-page-title"},[e._v(" 手机校验 ")]),n("div",{staticClass:"kd-page-content-wrapper wrap-info"},[n("verify-code",{ref:"verifyCode",on:{getVerifyCode:e.getVerifyCode}})],1),e.$store.state.common.visibleTip?e._e():n("div",{staticClass:"kd-foot-button kd-foot-button-position"},[n("kd-button",{attrs:{icon:"kedaIcon-policework",text:"返回首页","type-class":"home"}}),n("kd-button",{attrs:{icon:"kedaIcon-circleleft",text:"上一步","button-handle":e.goUp}}),n("kd-button",{attrs:{icon:"kedaIcon-circleright",text:"下一步","button-handle":e.goNext}})],1)])},k=[],C=(n("96cf"),n("1da1")),_=n("ea32"),x={name:"PhysicalEvidenceCheckPhone",components:{verifyCode:_["a"]},methods:Object(s["a"])({},Object(o["c"])("common",["changeStep"]),{getVerifyCode:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:setTimeout(e.mokeData(),100);case 1:case"end":return t.stop()}}),t)})))()},mokeData:function(){return"666666"},goUp:function(){this.changeStep("up")},goNext:function(){this.$refs.verifyCode.submission()&&this.changeStep("down")}})},I=x,w=(n("a835"),Object(b["a"])(I,y,k,!1,null,"5a87323b",null)),T=w.exports,P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"kd-page-title"},[e._v(" "+e._s(e.getTitle())+" ")]),0===e.step?n("div",{staticClass:"kd-page-content-wrapper wrap-info"},[n("el-form",{staticClass:"uploadLabel",attrs:{"label-width":"15vw"}},[n("el-form-item",{attrs:{label:"名称："}},[n("el-radio-group",{model:{value:e.delayTpe,callback:function(t){e.delayTpe=t},expression:"delayTpe"}},e._l(e.delayBusinessTypes,(function(t,i){return n("el-radio",{key:i,staticClass:"uploadChoose",attrs:{label:t.type,border:""}},[e._v(" "+e._s(t.value)+" ")])})),1)],1),n("el-form-item",{attrs:{label:"材料上传："}},[n("div",{staticClass:"imgListsWrap"},[e._l(e.delayMaterialPhoto,(function(t,i){return n("div",{key:i,staticClass:"uploadImg"},[n("img",{key:i,staticClass:"preImg",attrs:{src:t}}),n("i",{staticClass:"delImg",on:{click:function(t){return e.removeImg(i)}}})])})),n("div",{staticClass:"uploadButton",on:{click:e.goToPhoto}},[n("p",{class:e.isLoad?"kedaIconfont kedaIcon-zhaoxiangji":"el-icon-loading"})])],2)])],1)],1):e._e(),1===e.step?n("div",{staticClass:"kd-page-content-wrapper wrap-img"},[n("img",{attrs:{src:e.highPhotoImg,alt:"",width:"400",height:"300"}})]):e._e(),2===e.step?n("div",{staticClass:"kd-page-content-wrapper wrap-img"},[n("img",{attrs:{src:e.nowImg,alt:"",width:"400",height:"300"}})]):e._e(),e.$store.state.common.visibleTip?e._e():n("div",{staticClass:"kd-foot-button kd-foot-button-position"},[0===e.step?n("kd-button",{attrs:{icon:"kedaIcon-policework",text:"返回首页","type-class":"home"}}):e._e(),0===e.step?n("kd-button",{attrs:{icon:"kedaIcon-circleleft",text:"上一步","button-handle":e.goUp}}):e._e(),0===e.step?n("kd-button",{attrs:{icon:"kedaIcon-circleright",text:"下一步","button-handle":e.goNext,"but-disable":!e.delayTpe}}):e._e(),1===e.step?n("kd-button",{attrs:{icon:"kedaIcon-zhaoxiangji",text:"拍照","button-handle":e.startScan}}):e._e(),1===e.step?n("kd-button",{attrs:{icon:"kedaIcon-chexiao1",text:"返回","button-handle":e.goToIndex}}):e._e(),2===e.step?n("kd-button",{attrs:{icon:"kedaIcon-baocun",text:"保存","button-handle":e.save}}):e._e(),2===e.step?n("kd-button",{attrs:{icon:"kedaIcon-zhaoxiangji",text:"重拍","button-handle":e.goToPhoto}}):e._e()],1)])},S=[],N=(n("a434"),{name:"PhysicalEvidenceReason",data:function(){return{step:0,nowImg:"",isLoad:!1,delayMaterialPhoto:[],delayTpe:"",delayBusinessTypes:[{type:"0",value:"就业"},{type:"1",value:"服兵役"},{type:"2",value:"出国（境）"}]}},computed:Object(s["a"])({},Object(o["d"])("permanent",{dialog:"highPhotoDialog",lightWebSocket:"lightWebSocket",highPhotoDev:"highPhotoDev",highPhotoImg:"highPhotoImg"}),{},Object(o["d"])("physicalEvidence",{})),mounted:function(){var e=this;setTimeout((function(){e.isLoad=!0}),3e3),this.dialog.html_loaded("one")},beforeDestroy:function(){this.dialog.get_actionType("closeSignal")},methods:Object(s["a"])({},Object(o["c"])("common",["changeStep","changeTipPage"]),{},Object(o["c"])("physicalEvidence","setPhysicalRes"),{getTitle:function(){return 0===this.step?"延期原因及证明":1===this.step?"请将证明放置于照片识别区保持不动":2===this.step?"拍摄完成":void 0},goToIndex:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.step=0,e.$wsSend(e.lightWebSocket,"lightCtrl@B6:OFF");case 2:case"end":return t.stop()}}),t)})))()},goToPhoto:function(){this.isLoad&&(this.step=1,this.$wsSend(this.lightWebSocket,"lightCtrl@B6:ON"))},goUp:function(){this.changeStep("up")},goNext:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.changeStep("down");case 1:case"end":return t.stop()}}),t)})))()},startScan:function(){this.nowImg=this.highPhotoImg,this.step=2},save:function(){var e={applyName:"赵丽颖",types:"六年免检",serialNumber:4231424234,applyTime:"2019-4-1"};this.setPhysicalRes(e),this.step=0},removeImg:function(e){this.delayMaterialPhoto.splice(e,1),this.setDelayMaterialPhoto(this.delayMaterialPhoto)}})}),j=N,O=(n("93a5"),Object(b["a"])(j,P,S,!1,null,"db693c74",null)),E=O.exports,V=n("c4c3"),M={name:"PhysicalEvidenceIndex",components:{identifyCardPage:c["a"],faceYitu:r["a"],contrast:d["a"],serverInfo:l["a"],confirmInfo:g,checkPhone:T,complete:V["a"],reason:E},methods:Object(s["a"])({},Object(o["c"])("common",["setSteps"])),mounted:function(){this.setSteps([{name:"业务须知",isActive:!0,visible:!0,key:"serverInfo"},{name:"身份识别",isActive:!1,visible:!0,key:"identifyCardPage"},{name:"身份识别",isActive:!1,visible:!1,key:"faceYitu"},{name:"身份识别",isActive:!1,visible:!1,key:"contrast"},{name:"信息确认",isActive:!1,visible:!0,key:"confirmInfo"},{name:"手机校验",isActive:!1,visible:!0,key:"checkPhone"},{name:"选择原因",isActive:!1,visible:!0,key:"reason"},{name:"完成提交",isActive:!1,visible:!0,key:"complete"}])}},D=M,$=Object(b["a"])(D,i,a,!1,null,null,null);t["default"]=$.exports},"7c33":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrap"},[e.data&&e.data.length>0?n("div",{staticClass:"wrap-info",class:e.column?"flexRow":""},[e._l(e.data,(function(t,i){return[t.label?n("div",{key:i,staticClass:"item",style:{width:e.column?"100%":"50%"}},[n("span",{staticClass:"label",style:{width:e.column?"30%":"40%"},attrs:{title:t.label}},[e._v(e._s(t.label)+e._s(t.label?"：":""))]),n("span",{staticClass:"message"},[e._v(e._s(t.value))])]):e._e()]}))],2):n("i",{staticClass:"el-icon-loading"})])},a=[],s={name:"TextTable",props:{data:{default:[]}},data:function(){return{column:!1}},mounted:function(){this.data.length<9&&(this.column=!0)}},o=s,c=(n("5365"),n("2877")),r=Object(c["a"])(o,i,a,!1,null,"5692f04a",null);t["a"]=r.exports},"93a5":function(e,t,n){"use strict";var i=n("5c20"),a=n.n(i);a.a},9661:function(e,t,n){},"9df1":function(e,t,n){},"9e00":function(e,t,n){},a835:function(e,t,n){"use strict";var i=n("9661"),a=n.n(i);a.a},c0cf:function(e,t,n){},c4c3:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"kd-page-title"},[e._v(" "+e._s(e.pageTitle)+" ")]),n("div",{staticClass:"kd-page-content-wrapper wrap-info"},[e.identifyCard.partyName?n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[e._v("办理人：")]),n("span",{staticClass:"message"},[e._v(e._s(e.identifyCard.partyName))])]):e._e(),e.data.name?n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[e._v("申请人：")]),n("span",{staticClass:"message"},[e._v(e._s(e.data.name?e.data.name:e.data.applyName?e.data.applyName:e.identifyCard.partyName))]),n("span",{staticClass:"label"},[e._v("申请业务：")]),n("span",{staticClass:"message"},[e._v(e._s(e.businessTypeName))])]):e._e(),e.data.slh?n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[e._v("业务受理号：")]),n("span",{staticClass:"message"},[e._v(e._s(e.data.slh))])]):e._e(),e.data.serialNumber?n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[e._v("业务流水号：")]),n("span",{staticClass:"message"},[e._v(e._s(e.data.serialNumber))])]):e._e(),n("div",{staticClass:"item"},[n("span",{staticClass:"label"},[e._v("申请日期：")]),n("span",{staticClass:"message"},[e._v(e._s(e.$momentFormat(e.data.applyTime)))])]),e.footTexts?n("div",{staticClass:"footer",domProps:{innerHTML:e._s(e.footTexts)}}):e._e()]),e.$store.state.common.visibleTip?e._e():n("div",{staticClass:"kd-foot-button kd-foot-button-position"},[e.printBut?n("kd-button",{attrs:{icon:"kedaIcon-duigou",text:"打印","button-handle":e.nextStep}}):n("kd-button",{attrs:{icon:"kedaIcon-policework",text:"业务完成",typeClass:"complete"}})],1)])},a=[],s=(n("96cf"),n("1da1")),o=n("5530"),c=n("2f62"),r=n("f23e"),d=n.n(r),l=n("541b"),u=n("b893"),p=n("ed08"),h=n("faf3"),f={name:"Complete",props:{data:{default:{}},footTexts:{default:"温馨提示：业务已受理，请耐心等待！"},pageTitle:{default:"提交完成"},mp3:{default:""},printBut:{default:!1}},computed:Object(o["a"])({},Object(c["d"])("common",{identifyCard:"identifyCard",businessTypeCode:"businessTypeCode",businessTypeName:"businessTypeName",dogHandlePic:"dogHandlePic"}),{},Object(c["d"])("permanent",{BUSINESS_CODE_NAME:"BUSINESS_CODE_NAME"})),mounted:function(){this.audioObj=Object(l["a"])(this.mp3||d.a),this.audioObj.play()},beforeDestroy:function(){this.audioObj.destroy()},methods:{nextStep:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(h["v"])({printCount:1,base64:Object(u["b"])(e.dogHandlePic)});case 2:n=t.sent,n&&1===n.code?Object(p["d"])():e.changeTipPage({message:n.message,enableBack:!0});case 4:case"end":return t.stop()}}),t)})))()}}},m=f,b=(n("2647"),n("2877")),v=Object(b["a"])(m,i,a,!1,null,"59e28f6f",null);t["a"]=v.exports},c63e:function(e,t,n){e.exports=n.p+"static/media/8.8db5e962.mp3"},c640:function(e,t,n){e.exports=n.p+"static/media/6.9d10f929.mp3"},d2a2:function(e,t,n){"use strict";var i=n("9df1"),a=n.n(i);a.a},ea32:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrap-info"},[n("div",{staticClass:"left",class:e.styleType?"centerText":""},[e.needPhone?n("div",{staticClass:"text-top"},[e.isSendVeryCode?n("div",[e._v(e._s("您好，手机验证码已发送到您的手机，5分钟内有效， 请勿泄露！"))]):n("div",[!e.phoneBusinessTip&&e.changePhoneBusiness?n("div",[e._v(e._s("请输入您的新手机号码进行校验"))]):e._e(),e.phoneBusinessTip||e.changePhoneBusiness?e._e():n("div",[e._v(e._s("您好，请输入手机号进行验证！"))]),e.phoneBusinessTip?n("div",{domProps:{innerHTML:e._s(e.phoneBusinessTip)}}):e._e()])]):e._e(),n("div",{staticClass:"payMoney"},[e.needPhone?e._e():n("p",{staticClass:"text-top"},[e._v(e._s(e.defaultPhoneNumber?"验证码将发送至机动车预留手机号":"您好，请输入六位数手机验证码进行验证！"))]),e.payMoney?n("p",{staticClass:"payText"},[e._v("支付金额：￥"+e._s(e.payMoney))]):e._e()]),n("div",[!e.needPhone&&e.defaultPhoneNumber?n("p",{staticClass:"text-top"}):e._e(),e.needPhone?n("div",{staticClass:"input-item"},[n("kd-input",{ref:"inputNum",staticClass:"inputNum",attrs:{"ime-type":0,"watch-data":e.watchPhoneNumber,placeholder:"请输入您的手机号码","get-focus":e.getFocus,"limit-number":11}}),n("p",{staticClass:"errorTips"},[e._v(e._s(e.errorMsg.phoneNumber))])],1):e._e(),e.onlyNeedPhone?e._e():n("div",{staticClass:"input-item"},[n("div",[n("kd-input",{ref:"inputVer",staticClass:"inputVer",attrs:{"ime-type":0,"watch-data":e.watchVerifyCode,placeholder:"请输入验证码","get-focus":e.getFocus,"limit-number":6}}),n("div",{staticClass:"verifyBut",class:{verifyDis:e.isSendVeryCode},on:{click:e.getVerifyCode}},[e._v(e._s(e.isSendVeryCode?"重新获取("+e.timeClock+")":"获取验证码"))])],1),n("p",{staticClass:"errorTips"},[e._v(e._s(e.errorMsg.verifyCode))])])])]),n("keyboard-back",{attrs:{"get-keyboard-data":e.getKeyboardData}})],1)},a=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"keyboard"},e._l(e.number.split(","),(function(t,i){return n("div",{key:i,staticClass:"item",class:"del"===t?"del":"",on:{click:function(n){return e.setNum(t)}}},[n("div",{class:e.getIcon(t)},[e._v(" "+e._s(e.getText(t))+" ")])])})),0)},o=[],c={name:"KeyboardBack",data:function(){return{pingyin:"",number:"7,8,9,4,5,6,1,2,3,0,del"}},props:{getKeyboardData:{type:Function,required:!0},type:{default:1}},methods:{getIcon:function(e){return"del"===e?"kedaIconfont kedaIcon-backspace":"case"===e?this.pyState?"kedaIconfont kedaIcon-737bianjiqi_xiaoxie":"kedaIconfont kedaIcon-736bianjiqi_daxie":""},getText:function(e){return"del"===e||"case"===e?"":"empty"===e?" ":e},setNum:function(e){this.getKeyboardData&&this.getKeyboardData(e)},numMouseDown:function(e){return e&&e.preventDefault?e.preventDefault():window.event.returnValue=!1,!1}}},r=c,d=(n("d2a2"),n("2877")),l=Object(d["a"])(r,s,o,!1,null,"be1651f4",null),u=l.exports,p=n("c640"),h=n.n(p),f=n("3f46"),m=n.n(f),b=n("541b"),v=n("2435"),g={name:"VerifyCode",components:{keyboardBack:u},props:{styleType:{default:""},needPhone:{default:!0},onlyNeedPhone:{default:!1},payMoney:{default:0},changePhoneBusiness:{default:!1},phoneBusinessTip:{type:String,default:""},defaultPhoneNumber:{default:""}},data:function(){return{clickGetCodeFlag:!1,selectedItem:["phoneNumber","verifyCode"],currentItem:0,item:{phoneNumber:"请输入您的手机号码",verifyCode:"请输入验证码"},errorMsg:{phoneNumber:"",verifyCode:""},verifyCodeInterval:null,isSendVeryCode:!1,timeClock:60,inputVueEl:null}},mounted:function(){this.audioYes=Object(b["a"])(h.a),this.audioNo=Object(b["a"])(m.a),this.onlyNeedPhone?this.audioNo.play():this.audioYes.play(),this.$refs.inputNum?this.$refs.inputNum.startKeyBoard():this.$refs.inputVer&&this.$refs.inputVer.startKeyBoard(),this.needPhone||this.$refs.inputVer.startKeyBoard()},beforeDestroy:function(){this.audioYes.destroy(),this.audioNo.destroy()},methods:{watchPhoneNumber:function(e){this.item.phoneNumber=e,this.checkPhoneExistence()},watchVerifyCode:function(e){this.item.verifyCode=e,this.checkVerifyCodeExistence()},getKeyboardData:function(e){this.inputVueEl&&this.inputVueEl.mouseClick(e)},getFocus:function(e){this.inputVueEl=e},checkPhoneExistence:function(){return this.needPhone?this.item.phoneNumber?"请输入您的手机号码"===this.item.phoneNumber?(this.errorMsg.phoneNumber="手机号不能为空",!1):v["q"].phone.test(this.item.phoneNumber)?(this.errorMsg.phoneNumber="",!0):(this.errorMsg.phoneNumber="请输入正确的手机号码",!1):(this.errorMsg.phoneNumber="手机号不能为空",!1):(this.errorMsg.phoneNumber="",!0)},checkVerifyCodeExistence:function(){return this.item.verifyCode?this.clickGetCodeFlag?6!==this.item.verifyCode.length?(this.errorMsg.verifyCode="请输入正确的验证码",!1):"请输入验证码"===this.item.verifyCode?(this.errorMsg.verifyCode="验证码不能为空",!1):(this.errorMsg.verifyCode="",!0):(this.errorMsg.verifyCode="请点击获取验证码",!1):(this.errorMsg.verifyCode="验证码不能为空",!1)},getVerifyCode:function(){var e=this;this.clickGetCodeFlag=!0,!this.isSendVeryCode&&this.checkPhoneExistence()&&(this.currentItem=1,this.timeClock=60,this.isSendVeryCode=!0,clearInterval(this.verifyCodeInterval),this.verifyCodeInterval=setInterval((function(){0===e.timeClock?(clearInterval(e.verifyCodeInterval),e.isSendVeryCode=!1,e.verifyCodeInterval=null):e.timeClock--}),1e3),this.$emit("getVerifyCode",this.item.phoneNumber))},submission:function(){if(this.onlyNeedPhone)return this.checkPhoneExistence();if(this.needPhone){var e=this.checkVerifyCodeExistence(),t=this.checkPhoneExistence();return!(!e||!t)}return this.checkVerifyCodeExistence()}}},y=g,k=(n("f2a5"),Object(d["a"])(y,i,a,!1,null,"28bdf060",null));t["a"]=k.exports},f23e:function(e,t,n){e.exports=n.p+"static/media/10.4d0df920.mp3"},f2a5:function(e,t,n){"use strict";var i=n("c0cf"),a=n.n(i);a.a}}]);
//# sourceMappingURL=chunk-896bf780.7132b986.js.map