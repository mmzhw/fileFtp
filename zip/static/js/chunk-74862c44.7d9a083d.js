(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74862c44"],{1983:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"kd-page-title"},[e._v("业务须知")]),n("div",{staticClass:"kd-page-content-wrapper wrap-info"},[n("div",{staticClass:"serverinfo-content"},[n("div",{staticClass:"introduce-info"},[n("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"text-info",class:e.onePage?"onePageTextInfo":"",style:{top:e.changeTop+"px"}},[n("div",{ref:"textInfo",domProps:{innerHTML:e._s(e.text)}})]),e.onePage||e.loading?e._e():n("div",{staticClass:"change-page"},[n("el-button",{attrs:{disabled:e.downDisable},on:{click:function(t){return e.changePage("down")}}},[e._v(" 上 翻 ")]),n("el-button",{attrs:{disabled:e.upDisable},on:{click:function(t){return e.changePage("up")}}},[e._v(" 下 翻 ")])],1)]),e.loading?e._e():n("div",{staticClass:"checked-info"},[n("el-checkbox-group",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[n("el-checkbox",{attrs:{label:"阅读并同意"}},[e._v(" 阅读并同意 ")])],1)],1)]),n("img",{staticClass:"policeImg",attrs:{src:e.animalPic}})]),e.$store.state.common.visibleTip?e._e():n("div",{staticClass:"kd-foot-button kd-foot-button-position"},[n("kd-button",{attrs:{icon:"kedaIcon-policework",text:"返回首页","type-class":"home"}}),n("kd-button",{attrs:{icon:"kedaIcon-zhongzhi",text:"返回","button-handle":e.backMenu}}),e.loading?e._e():n("kd-button",{attrs:{icon:"kedaIcon-circleright",text:"下一步","button-handle":e.nextStep,"but-disable":!e.checked}})],1)])},s=[],a=(n("96cf"),n("1da1")),c=n("5530"),o=n("2f62"),r=n("faf3"),u=n("ed08"),l=n("c63e"),d=n.n(l),p=n("541b"),h=n("8e23"),f={name:"ServerInfo",props:{onePage:{type:Boolean,default:!1}},computed:Object(c["a"])({},Object(o["d"])("common",{businessTypeCode:"businessTypeCode"})),data:function(){return{loading:!1,checked:!1,downDisable:!0,upDisable:!1,changeTop:0,limitTop:"",text:"",animalPic:Object(h["d"])(this.CONSTANT.location)}},mounted:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.audioCar=Object(p["a"])(d.a),e.audioCar.play(),e.loading=!0,t.next=5,Object(r["n"])({type:e.businessTypeCode});case 5:n=t.sent,e.loading=!1,n&&"0"===n.code?e.text=n.result.content:n&&e.changeTipPage({message:n.message}),e.$nextTick((function(){e.limitTop=0-e.$refs.textInfo.offsetHeight}));case 9:case"end":return t.stop()}}),t)})))()},beforeDestroy:function(){this.audioCar.destroy()},watch:{changeTop:{handler:function(e,t){this.limitTop=0-this.$refs.textInfo.offsetHeight,this.upDisable=!(e>this.limitTop),this.downDisable=!(e<0)},deep:!0}},methods:Object(c["a"])({},Object(o["c"])("common",["changeStep","changeTipPage","changeVisible"]),{backMenu:function(){this.changeVisible({visibleSteps:!1,visibleTip:!1,visibleBusinessName:!1,visibleJurisdiction:!1}),Object(u["a"])("/")},nextStep:function(){this.checked&&this.changeStep("down")},preStep:function(){this.changeStep("up")},changePage:function(e){"up"===e?this.changeTop-=40:this.changeTop+=40}})},b=f,m=(n("54ed"),n("2877")),g=Object(m["a"])(b,i,s,!1,null,"419f90d8",null);t["a"]=g.exports},"2fda":function(e,t,n){e.exports=n.p+"static/media/15.6d872395.mp3"},3682:function(e,t,n){},"3bf6":function(e,t,n){"use strict";var i=n("b414"),s=n.n(i);s.a},"541b":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var i=function(e){var t=new Audio;return t.src=e,t.isCanPlay=!1,t.oncanplaythrough=function(){t.isCanPlay=!0},t.timeId=null,{play:function(){t&&(t.isCanPlay?(t.currentTime=0,t.play()):t.timeId||(t.timeId=setTimeout((function(){t.timeId=null,t.play()}),100)))},pause:function(){t&&(t.timeId&&clearTimeout(t.timeId),t.pause())},destroy:function(){t&&(t.timeId&&clearTimeout(t.timeId),t.pause(),t.pause(),t.src=null,t.oncanplaythrough=null,t=null)}}}},"54ed":function(e,t,n){"use strict";var i=n("3682"),s=n.n(i);s.a},8250:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.currentStep===e.steps.findIndex((function(e){return"serverInfo"===e.key}))?n("introduce-info"):e._e(),e.currentStep===e.steps.findIndex((function(e){return"process"===e.key}))?n("process",{attrs:{type:1,"handle-business":e.handleBusiness,"wait-text":"请在客户端处理"}}):e._e()],1)},s=[],a=(n("96cf"),n("1da1")),c=n("5530"),o=n("2f62"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("server-info",{attrs:{"one-page":!0}})],1)},u=[],l=n("1983"),d={name:"ClientHXIntroduceInfo",components:{serverInfo:l["a"]}},p=d,h=(n("d8d0"),n("2877")),f=Object(h["a"])(p,r,u,!1,null,"e9c46884",null),b=f.exports,m=n("8a93"),g=n("ed08"),v=n("b2eb"),y=n("faf3"),T=n("2ef0"),O={name:"ClientHXIndex",components:{introduceInfo:b,process:m["a"]},computed:Object(c["a"])({},Object(o["d"])("common",{steps:"steps",currentStep:"currentStep",businessTypeCode:"businessTypeCode",binocularCamera:"binocularCamera",identifyCard:"identifyCard"}),{},Object(o["d"])("permanent",{HXWebSocket:"HXWebSocket",lightWebSocket:"lightWebSocket",manufacturerType:"manufacturerType",BUSINESS_EN_NAME_CODE:"BUSINESS_EN_NAME_CODE"}),{},Object(o["d"])("entryAndExit",{personInfo:"personInfo",entryAndExitApplyInfo:"entryAndExitApplyInfo"})),data:function(){return{imgUrl:"",intervalId:""}},mounted:function(){var e=[];e=this.businessTypeCode===this.BUSINESS_EN_NAME_CODE.exitEntryApply?[{name:"业务须知",isActive:!0,visible:!0,key:"serverInfo"},{name:"客户端处理",isActive:!1,visible:!0,key:"process"}]:[{name:"客户端处理",isActive:!1,visible:!0,key:"process"}],this.setSteps(e)},methods:Object(c["a"])({},Object(o["c"])("common",["setSteps","changeStep","changeTipPage"]),{handleBusiness:function(){var e=this;Object(v["b"])(this.lightWebSocket,"lightCtrl@B3:ON"),this.clientHandle(),this.intervalId=setInterval(Object(a["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.clientQuery();case 1:case"end":return t.stop()}}),t)}))),1e3)},clientHandle:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={ACTION:"callFuncs",DATA:{FunName:"BtnVisa"}},e.businessTypeCode===e.BUSINESS_EN_NAME_CODE.exitEntryApply?n.DATA.FunName="BtnVisa":e.businessTypeCode===e.BUSINESS_EN_NAME_CODE.exitEntryCheck&&(n.DATA.FunName="BtnRead"),t.next=4,Object(y["o"])({json:JSON.stringify(n)});case 4:i=t.sent,i&&0===i.RESULT?console.log("航信客户端开启成功"):i&&e.changeTipPage({message:"出现了点意外，请联系管理员！"});case 6:case"end":return t.stop()}}),t)})))()},clientQuery:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(y["o"])({json:JSON.stringify({ACTION:"queryDisplay",DATA:{isDisplay:"false"}})});case 2:n=t.sent,n&&0===n.RESULT&&(n&&Object(T["isEqual"])(n.DATA,{})&&Object(g["d"])(),n.DATA&&"F_Main_Choose"===n.DATA.DISPLAYWINDOW&&e.clientHidden(),n.DATA&&n.DATA.DISPLAYWINDOW);case 4:case"end":return t.stop()}}),t)})))()},clientHidden:function(){return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(y["o"])({json:JSON.stringify({ACTION:"setDisplay",DATA:{isDisplay:"false"}})});case 2:Object(g["d"])();case 3:case"end":return e.stop()}}),e)})))()}}),beforeDestroy:function(){Object(v["b"])(this.lightWebSocket,"lightCtrl@B3:OFF"),clearInterval(this.intervalId)}},I=O,C=Object(h["a"])(I,i,s,!1,null,null,null);t["default"]=C.exports},"83b7":function(e,t,n){e.exports=n.p+"static/img/wait_card.aa7211fb.png"},"8a93":function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.visibleTip?e._e():n("div",{staticClass:"progress-div"},[n("div",{staticClass:"middle"},[n("div",{staticClass:"topWrap"},[n("img",{staticClass:"waitImg",attrs:{src:e.img,alt:""}}),n("div",{staticClass:"timeWrap"},[e._v(e._s(e.time))])]),n("div",{staticClass:"process-static"},[n("div",{staticClass:"process-active",style:{width:e.percent+"%"}})]),n("p",{staticClass:"text"},[e._v(" "+e._s(e.waitText)+" ")])])])},s=[],a=(n("a9e3"),n("5530")),c=n("83b7"),o=n.n(c),r=n("2f62"),u=n("2fda"),l=n.n(u),d=n("541b"),p={name:"Process",props:{audio:{default:""},goToRoute:{type:String},type:{type:Number},img:{default:o.a},waitText:{default:"正在处理中, 请耐心等待......"},percent:{default:100},handleBusiness:{default:null}},data:function(){return{time:1,intervalId:null}},methods:Object(a["a"])({},Object(r["c"])("common",["changeStep"]),{startTime:function(){var e=this;this.time=1,this.intervalId&&clearInterval(this.intervalId),this.intervalId=setInterval((function(){e.time++}),1e3)}}),computed:Object(a["a"])({},Object(r["d"])("common",{visibleTip:"visibleTip"})),beforeDestroy:function(){this.audioObj.destroy(),clearInterval(this.intervalId)},watch:{type:function(){this.audioObj&&(this.audioObj.destroy(),this.audioObj=null),this.audioObj=Object(d["a"])(this.audio||l.a),this.audioObj.play(),this.handleBusiness?(this.startTime(),this.handleBusiness()):this.changeStep("down")},visibleTip:function(){this.visibleTip||(this.goToRoute?this.changeStep(this.goToRoute):this.changeStep("up"))}},mounted:function(){this.audioObj=Object(d["a"])(this.audio||l.a),this.audioObj.play(),this.handleBusiness?(this.startTime(),this.handleBusiness()):this.changeStep("down")}},h=p,f=(n("3bf6"),n("2877")),b=Object(f["a"])(h,i,s,!1,null,"1fc51ae4",null);t["a"]=b.exports},b414:function(e,t,n){},c63e:function(e,t,n){e.exports=n.p+"static/media/8.8db5e962.mp3"},d8d0:function(e,t,n){"use strict";var i=n("e099"),s=n.n(i);s.a},e099:function(e,t,n){}}]);
//# sourceMappingURL=chunk-74862c44.7d9a083d.js.map