(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-75f33070"],{2647:function(e,t,a){"use strict";var n=a("9e00"),s=a.n(n);s.a},"2fda":function(e,t,a){e.exports=a.p+"static/media/15.6d872395.mp3"},"3bf6":function(e,t,a){"use strict";var n=a("b414"),s=a.n(n);s.a},"3e39":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.currentStep===e.steps.findIndex((function(e){return"identifyCardPage"===e.key}))?a("identify-card-page",{attrs:{"disable-read-card":!0}}):e._e(),e.currentStep===e.steps.findIndex((function(e){return"getIdCardPhoto"===e.key}))?a("process",{attrs:{type:2,"handle-business":e.getIdCardPhoto,"wait-text":"正在处理中，请稍等"}}):e._e(),e.currentStep===e.steps.findIndex((function(e){return"faceYitu"===e.key}))?a("face-yitu"):e._e(),e.currentStep===e.steps.findIndex((function(e){return"contrast"===e.key}))?a("contrast"):e._e(),e.currentStep===e.steps.findIndex((function(e){return"reasonsType"===e.key}))?a("reasons-type"):e._e(),e.currentStep===e.steps.findIndex((function(e){return"personInfo"===e.key}))?a("person-info"):e._e(),e.currentStep===e.steps.findIndex((function(e){return"printProcess"===e.key}))?a("process",{attrs:{type:1,"handle-business":e.handlePrint,"wait-text":"正在打印中，请稍等"}}):e._e(),e.currentStep===e.steps.findIndex((function(e){return"complete"===e.key}))?a("complete",{attrs:{"page-title":"办理完成",data:e.temporaryCompleteRes}}):e._e()],1)},s=[],i=(a("ac1f"),a("5319"),a("96cf"),a("1da1")),r=a("5530"),o=a("2f62"),c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"kd-page-title"},[e._v(" 核对信息 ")]),a("div",{staticClass:"kd-page-content-wrapper kd-page-padding wrap-info flex-col"},[a("img",{attrs:{src:e.printImgUrls[0],alt:""}})]),e.$store.state.common.visibleTip?e._e():a("div",{staticClass:"kd-foot-button kd-foot-button-position"},[a("kd-button",{attrs:{icon:"kedaIcon-policework",text:"返回首页","type-class":"home"}}),a("kd-button",{attrs:{icon:"kedaIcon-circleright",text:"下一步","button-handle":e.nextStep}})],1)])},u=[],p={name:"TemporaryCardYinchuanInfo",computed:Object(r["a"])({},Object(o["d"])("common",{printImgUrls:"printImgUrls"})),methods:Object(r["a"])({},Object(o["c"])("common",["changeStep","changeTipPage"]),{nextStep:function(){this.changeStep("down")}})},d=p,l=(a("ad38"),a("2877")),f=Object(l["a"])(d,c,u,!1,null,"248d5490",null),m=f.exports,b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"kd-page-title"},[e._v(" 选择开具事由 ")]),a("div",{staticClass:"kd-page-content-wrapper"},[a("el-form",{staticClass:"uploadLabel search-form",attrs:{"label-width":"15vw"}},[a("el-form-item",{attrs:{label:"开具事由："}},[a("el-radio-group",{model:{value:e.searchType,callback:function(t){e.searchType=t},expression:"searchType"}},e._l(e.searchTypes,(function(t,n){return a("el-radio",{key:n,staticClass:"uploadChoose",attrs:{label:t.type,border:""}},[e._v(" "+e._s(t.value)+" ")])})),1)],1)],1)],1),e.$store.state.common.visibleTip?e._e():a("div",{staticClass:"kd-foot-button kd-foot-button-position"},[a("kd-button",{attrs:{icon:"kedaIcon-policework",text:"返回首页","type-class":"home"}}),a("kd-button",{attrs:{icon:"kedaIcon-circleright",text:"下一步","button-handle":e.nextStep,"but-disable":!e.searchType}})],1)])},h=[],g=a("926f"),v=a("b893"),y={name:"TemporaryCardYinchuanReasonsType",computed:Object(r["a"])({},Object(o["d"])("common",{identifyCard:"identifyCard"})),data:function(){return{searchType:"",searchTypes:[{type:"1",value:"购票"},{type:"2",value:"住宿"}]}},methods:Object(r["a"])({},Object(o["c"])("common",["changeStep","changeTipPage","setPrintImgUrls"]),{},Object(o["c"])("temporary",["setPdfUrl"]),{nextStep:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(g["i"])({idNum:e.identifyCard.certNumber,useType:e.searchType,businessType:"lssfzzm"});case 2:a=t.sent,a&&"0"===a.code?(e.setPrintImgUrls(Object(v["a"])(a.result.pdfImage)),e.setPdfUrl(a.result.pdfUrl),e.changeStep("down")):a&&e.changeTipPage({message:a.message,enableBack:!0});case 4:case"end":return t.stop()}}),t)})))()},preStep:function(){this.changeStep("up")}})},C=y,j=(a("94c2"),Object(l["a"])(C,b,h,!1,null,"669642a7",null)),_=j.exports,x=a("f7ef"),w=a("8a93"),O=a("c4c3"),T=a("943e"),k=a("f5a9"),I=a("faf3"),S=a("ed08"),P=a("2061"),R={name:"TemporaryCardYinchuanIndex",components:{personInfo:m,identifyCardPage:x["a"],process:w["a"],complete:O["a"],reasonsType:_,faceYitu:T["a"],contrast:k["a"]},computed:Object(r["a"])({},Object(o["d"])("common",{steps:"steps",currentStep:"currentStep",identifyCard:"identifyCard"}),{},Object(o["d"])("temporary",{pdfUrl:"pdfUrl"})),data:function(){return{temporaryCompleteRes:{}}},methods:Object(r["a"])({},Object(o["c"])("common",["changeStep","changeTipPage","setSteps","setIdentifyCardPhoto"]),{getIdCardPhoto:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(g["a"])({idNum:e.identifyCard.certNumber,businessType:"lssfzzm"});case 2:a=t.sent,a&&"0"===a.code?e.identifyCard.partyName!==a.result.xm?e.changeTipPage({message:"未查到该人员信息，请确认重试",enableBack:!0}):(e.setIdentifyCardPhoto(a.result.xp.replace(/ /g,"+")),e.changeStep("down")):a&&e.changeTipPage({message:a.message,enableBack:!0});case 4:case"end":return t.stop()}}),t)})))()},handlePrint:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(I["y"])({path:Object(S["b"])(e.pdfUrl)});case 2:a=t.sent,a&&1===a.code?e.complete():e.changeTipPage({message:"打印机出故障啦，请稍后重试"});case 4:case"end":return t.stop()}}),t)})))()},complete:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(g["f"])({});case 2:a=t.sent,a&&"0"===a.code?(e.temporaryCompleteRes=a.result,e.changeStep("down")):a&&e.changeTipPage({message:a.message});case 4:case"end":return t.stop()}}),t)})))()}}),mounted:function(){this.setSteps(P["r"])}},N=R,z=Object(l["a"])(N,n,s,!1,null,null,null);t["default"]=z.exports},5821:function(e,t,a){},"83b7":function(e,t,a){e.exports=a.p+"static/img/wait_card.aa7211fb.png"},"8a93":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.visibleTip?e._e():a("div",{staticClass:"progress-div"},[a("div",{staticClass:"middle"},[a("div",{staticClass:"topWrap"},[a("img",{staticClass:"waitImg",attrs:{src:e.img,alt:""}}),a("div",{staticClass:"timeWrap"},[e._v(e._s(e.time))])]),a("div",{staticClass:"process-static"},[a("div",{staticClass:"process-active",style:{width:e.percent+"%"}})]),a("p",{staticClass:"text"},[e._v(" "+e._s(e.waitText)+" ")])])])},s=[],i=(a("a9e3"),a("5530")),r=a("83b7"),o=a.n(r),c=a("2f62"),u=a("2fda"),p=a.n(u),d=a("541b"),l={name:"Process",props:{audio:{default:""},goToRoute:{type:String},type:{type:Number},img:{default:o.a},waitText:{default:"正在处理中, 请耐心等待......"},percent:{default:100},handleBusiness:{default:null}},data:function(){return{time:1,intervalId:null}},methods:Object(i["a"])({},Object(c["c"])("common",["changeStep"]),{startTime:function(){var e=this;this.time=1,this.intervalId&&clearInterval(this.intervalId),this.intervalId=setInterval((function(){e.time++}),1e3)}}),computed:Object(i["a"])({},Object(c["d"])("common",{visibleTip:"visibleTip"})),beforeDestroy:function(){this.audioObj.destroy(),clearInterval(this.intervalId)},watch:{type:function(){this.audioObj&&(this.audioObj.destroy(),this.audioObj=null),this.audioObj=Object(d["a"])(this.audio||p.a),this.audioObj.play(),this.handleBusiness?(this.startTime(),this.handleBusiness()):this.changeStep("down")},visibleTip:function(){this.visibleTip||(this.goToRoute?this.changeStep(this.goToRoute):this.changeStep("up"))}},mounted:function(){this.audioObj=Object(d["a"])(this.audio||p.a),this.audioObj.play(),this.handleBusiness?(this.startTime(),this.handleBusiness()):this.changeStep("down")}},f=l,m=(a("3bf6"),a("2877")),b=Object(m["a"])(f,n,s,!1,null,"1fc51ae4",null);t["a"]=b.exports},"926f":function(e,t,a){"use strict";a.d(t,"i",(function(){return s})),a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return o})),a.d(t,"f",(function(){return c})),a.d(t,"j",(function(){return u})),a.d(t,"d",(function(){return p})),a.d(t,"e",(function(){return d})),a.d(t,"h",(function(){return l})),a.d(t,"g",(function(){return f}));var n=a("b775"),s=function(e){return n["a"].ajax("/ssm/zw/population/provingFaceRecognition","post",e)},i=function(e){return n["a"].ajax("/ssm/zw/population/wfzUsages","get",e)},r=function(e){return n["a"].ajax("/ssm/zw/population/getProvingResult","post",e)},o=function(e){return n["a"].ajax("/ssm/zw/population/preCheck","post",e)},c=function(e){return n["a"].ajax("/ssm/zw/population/finishProving","post",e)},u=function(e){return n["a"].ajax("/ssm/zw/population/saveRecommendPhoto","post",e)},p=function(e){return n["a"].ajax("/ssm/commonzwapi/precheck","post",e)},d=function(e){return n["a"].ajax("/ssm/zw/population/noCriminalFaceRecognition","post",e)},l=function(e){return n["a"].ajax("/ssm/zw/population/pushPersonInfo","post",e)},f=function(e){return n["a"].ajax("/ssm/zw/population/finish","post",e)}},"94c2":function(e,t,a){"use strict";var n=a("bc08"),s=a.n(n);s.a},"9e00":function(e,t,a){},ad38:function(e,t,a){"use strict";var n=a("5821"),s=a.n(n);s.a},b414:function(e,t,a){},bc08:function(e,t,a){},c4c3:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"kd-page-title"},[e._v(" "+e._s(e.pageTitle)+" ")]),a("div",{staticClass:"kd-page-content-wrapper wrap-info"},[e.identifyCard.partyName?a("div",{staticClass:"item"},[a("span",{staticClass:"label"},[e._v("办理人：")]),a("span",{staticClass:"message"},[e._v(e._s(e.identifyCard.partyName))])]):e._e(),e.data.name?a("div",{staticClass:"item"},[a("span",{staticClass:"label"},[e._v("申请人：")]),a("span",{staticClass:"message"},[e._v(e._s(e.data.name?e.data.name:e.data.applyName?e.data.applyName:e.identifyCard.partyName))]),a("span",{staticClass:"label"},[e._v("申请业务：")]),a("span",{staticClass:"message"},[e._v(e._s(e.businessTypeName))])]):e._e(),e.data.slh?a("div",{staticClass:"item"},[a("span",{staticClass:"label"},[e._v("业务受理号：")]),a("span",{staticClass:"message"},[e._v(e._s(e.data.slh))])]):e._e(),e.data.serialNumber?a("div",{staticClass:"item"},[a("span",{staticClass:"label"},[e._v("业务流水号：")]),a("span",{staticClass:"message"},[e._v(e._s(e.data.serialNumber))])]):e._e(),a("div",{staticClass:"item"},[a("span",{staticClass:"label"},[e._v("申请日期：")]),a("span",{staticClass:"message"},[e._v(e._s(e.$momentFormat(e.data.applyTime)))])]),e.footTexts?a("div",{staticClass:"footer",domProps:{innerHTML:e._s(e.footTexts)}}):e._e()]),e.$store.state.common.visibleTip?e._e():a("div",{staticClass:"kd-foot-button kd-foot-button-position"},[e.printBut?a("kd-button",{attrs:{icon:"kedaIcon-duigou",text:"打印","button-handle":e.nextStep}}):a("kd-button",{attrs:{icon:"kedaIcon-policework",text:"业务完成",typeClass:"complete"}})],1)])},s=[],i=(a("96cf"),a("1da1")),r=a("5530"),o=a("2f62"),c=a("f23e"),u=a.n(c),p=a("541b"),d=a("b893"),l=a("ed08"),f=a("faf3"),m={name:"Complete",props:{data:{default:{}},footTexts:{default:"温馨提示：业务已受理，请耐心等待！"},pageTitle:{default:"提交完成"},mp3:{default:""},printBut:{default:!1}},computed:Object(r["a"])({},Object(o["d"])("common",{identifyCard:"identifyCard",businessTypeCode:"businessTypeCode",businessTypeName:"businessTypeName",dogHandlePic:"dogHandlePic"}),{},Object(o["d"])("permanent",{BUSINESS_CODE_NAME:"BUSINESS_CODE_NAME"})),mounted:function(){this.audioObj=Object(p["a"])(this.mp3||u.a),this.audioObj.play()},beforeDestroy:function(){this.audioObj.destroy()},methods:{nextStep:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["v"])({printCount:1,base64:Object(d["b"])(e.dogHandlePic)});case 2:a=t.sent,a&&1===a.code?Object(l["d"])():e.changeTipPage({message:a.message,enableBack:!0});case 4:case"end":return t.stop()}}),t)})))()}}},b=m,h=(a("2647"),a("2877")),g=Object(h["a"])(b,n,s,!1,null,"59e28f6f",null);t["a"]=g.exports},f23e:function(e,t,a){e.exports=a.p+"static/media/10.4d0df920.mp3"}}]);
//# sourceMappingURL=chunk-75f33070.29572391.js.map