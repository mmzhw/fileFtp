(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23616bc0"],{"05b4":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.currentStep===e.steps.findIndex((function(e){return"identifyCardPage"===e.key}))?a("identify-card-page"):e._e(),e.currentStep===e.steps.findIndex((function(e){return"faceYitu"===e.key}))?a("face-yitu"):e._e(),e.currentStep===e.steps.findIndex((function(e){return"contrast"===e.key}))?a("contrast"):e._e(),e.currentStep===e.steps.findIndex((function(e){return"process"===e.key}))?a("process",{attrs:{type:1,"handle-business":e.handleBusiness}}):e._e(),e.currentStep===e.steps.findIndex((function(e){return"inputName"===e.key}))?a("input-name"):e._e(),e.currentStep===e.steps.findIndex((function(e){return"result"===e.key}))?a("result"):e._e()],1)},n=[],s=(a("96cf"),a("1da1")),c=a("5530"),r=a("2f62"),o=a("f7ef"),u=a("943e"),d=a("f5a9"),p=a("8a93"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"kd-page-title"},[e._v(" 请输入您的姓名，点击查询 ")]),a("div",{staticClass:"kd-page-content-wrapper"},[a("div",{staticClass:"inputWrap"},[a("kd-full-input",{ref:"inputName",attrs:{placeholder:"请输入您的姓名","watch-data":e.getName}}),a("p",{staticClass:"error-tip"},[e._v(" "+e._s(e.errorMsg)+" ")])],1)]),e.$store.state.common.visibleTip?e._e():a("div",{staticClass:"kd-foot-button kd-foot-button-position"},[a("kd-button",{attrs:{icon:"kedaIcon-policework",text:"返回首页","type-class":"home"}}),a("kd-button",{attrs:{icon:"kedaIcon-circleright",text:"下一步","button-handle":e.nextStep,"but-disable":!e.name}})],1)])},m=[],f=(a("b0c0"),a("b775")),b=function(e){return f["a"].ajax("/ssm/duplicateName/faceRecognition","post",e)},h=function(e){return f["a"].ajax("/ssm/duplicateName/getResult","get",e)},v=a("b893"),g=a("faf3"),j=a("d20c"),_=a.n(j),O=a("541b"),k={name:"DuplicationNameInputName",data:function(){return{name:"",errorMsg:""}},computed:Object(c["a"])({},Object(r["d"])("common",{identifyCard:"identifyCard"}),{},Object(r["d"])("duplicateName",{})),mounted:function(){this.audioObj=Object(O["a"])(_.a),this.audioObj.play(),this.$refs.inputName.changeData(this.identifyCard.partyName)},methods:Object(c["a"])({},Object(r["c"])("common",["changeStep","changeTipPage"]),{},Object(r["c"])("duplicateName",["setDuplicateResult"]),{getName:function(e){this.name=e},nextStep:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!Object(v["e"])(e.name)){t.next=7;break}return t.next=3,h({name:e.name});case 3:a=t.sent,a&&"0"===a.code?a.result?(e.setDuplicateResult(a.result),e.changeStep("down")):e.changeTipPage({message:"未查到重名！",enableBack:!0}):e.changeTipPage({message:a.message,enableBack:!0}),t.next=8;break;case 7:e.errorMsg="姓名格式书写有误";case 8:case"end":return t.stop()}}),t)})))()}}),beforeDestroy:function(){this.audioObj.destroy(),Object(g["t"])()}},y=k,x=(a("5538"),a("2877")),C=Object(x["a"])(y,l,m,!1,null,"5db4731e",null),w=C.exports,S=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"kd-page-title"},[e._v(" 查询结果 ")]),a("div",{staticClass:"kd-page-content-wrapper wrap-info"},[a("div",{staticClass:"title"},[e._v(" "+e._s(e.CONSTANT.locationName)+"常住人口中"),a("span",[e._v(e._s(e.duplicateResult.name))]),e._v("共有"),a("span",[e._v(e._s(e.duplicateResult.total))]),e._v("人同名 ")]),a("ul",[a("li",[a("div",[a("img",{attrs:{src:e.imgMan}})]),a("p",[e._v("男性"),a("span",[e._v(e._s(e.duplicateResult.maleNum))]),e._v("位")])]),a("li",[a("div",[a("img",{attrs:{src:e.imgWoman}})]),a("p",[e._v("女性"),a("span",[e._v(e._s(e.duplicateResult.femaleNum))]),e._v("位")])])])]),e.$store.state.common.visibleTip?e._e():a("div",{staticClass:"kd-foot-button kd-foot-button-position"},[a("kd-button",{attrs:{icon:"kedaIcon-policework",text:"返回首页","type-class":"home"}}),a("kd-button",{attrs:{icon:"kedaIcon-circleleft",text:"上一步","button-handle":e.preStep}})],1)])},N=[],T=a("80f1"),I=a.n(T),R=a("9f4c"),P=a.n(R),B={name:"DuplicationNameResult",data:function(){return{name:"",imgMan:I.a,imgWoman:P.a}},computed:Object(c["a"])({},Object(r["d"])("duplicateName",{duplicateResult:"duplicateResult"})),methods:Object(c["a"])({},Object(r["c"])("common",["changeStep","changeTipPage"]),{getName:function(e){this.name=e},preStep:function(){this.changeStep("up")}})},D=B,A=(a("9177"),Object(x["a"])(D,S,N,!1,null,"7dbf0eec",null)),$=A.exports,M={name:"DuplicationNameIndex",components:{identifyCardPage:o["a"],faceYitu:u["a"],contrast:d["a"],process:p["a"],inputName:w,result:$},computed:Object(c["a"])({},Object(r["d"])("common",{steps:"steps",currentStep:"currentStep",identifyCard:"identifyCard",binocularCamera:"binocularCamera"})),methods:Object(c["a"])({},Object(r["c"])("common",["changeStep","changeTipPage","setSteps"]),{handleBusiness:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b({idNum:e.identifyCard.certNumber,identifiedPhoto:e.binocularCamera});case 2:a=t.sent,a&&"0"===a.code?e.changeStep("down"):a&&e.changeTipPage({message:a.message});case 4:case"end":return t.stop()}}),t)})))()}}),beforeMount:function(){this.setSteps([{name:"身份识别",isActive:!0,visible:!0,key:"identifyCardPage"},{name:"身份识别",isActive:!1,visible:!1,key:"faceYitu"},{name:"身份识别",isActive:!1,visible:!1,key:"contrast"},{name:"身份识别",isActive:!1,visible:!1,key:"process"},{name:"输入姓名",isActive:!1,visible:!0,key:"inputName"},{name:"查询结果",isActive:!1,visible:!0,key:"result"}])}},W=M,E=Object(x["a"])(W,i,n,!1,null,"6ce9d59a",null);t["default"]=E.exports},"2fda":function(e,t,a){e.exports=a.p+"static/media/15.6d872395.mp3"},"3bf6":function(e,t,a){"use strict";var i=a("b414"),n=a.n(i);n.a},5538:function(e,t,a){"use strict";var i=a("a8fd"),n=a.n(i);n.a},"5c37":function(e,t,a){},"80f1":function(e,t,a){e.exports=a.p+"static/img/man.3e4e4a79.png"},"83b7":function(e,t,a){e.exports=a.p+"static/img/wait_card.aa7211fb.png"},"8a93":function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.visibleTip?e._e():a("div",{staticClass:"progress-div"},[a("div",{staticClass:"middle"},[a("div",{staticClass:"topWrap"},[a("img",{staticClass:"waitImg",attrs:{src:e.img,alt:""}}),a("div",{staticClass:"timeWrap"},[e._v(e._s(e.time))])]),a("div",{staticClass:"process-static"},[a("div",{staticClass:"process-active",style:{width:e.percent+"%"}})]),a("p",{staticClass:"text"},[e._v(" "+e._s(e.waitText)+" ")])])])},n=[],s=(a("a9e3"),a("5530")),c=a("83b7"),r=a.n(c),o=a("2f62"),u=a("2fda"),d=a.n(u),p=a("541b"),l={name:"Process",props:{audio:{default:""},goToRoute:{type:String},type:{type:Number},img:{default:r.a},waitText:{default:"正在处理中, 请耐心等待......"},percent:{default:100},handleBusiness:{default:null}},data:function(){return{time:1,intervalId:null}},methods:Object(s["a"])({},Object(o["c"])("common",["changeStep"]),{startTime:function(){var e=this;this.time=1,this.intervalId&&clearInterval(this.intervalId),this.intervalId=setInterval((function(){e.time++}),1e3)}}),computed:Object(s["a"])({},Object(o["d"])("common",{visibleTip:"visibleTip"})),beforeDestroy:function(){this.audioObj.destroy(),clearInterval(this.intervalId)},watch:{type:function(){this.audioObj&&(this.audioObj.destroy(),this.audioObj=null),this.audioObj=Object(p["a"])(this.audio||d.a),this.audioObj.play(),this.handleBusiness?(this.startTime(),this.handleBusiness()):this.changeStep("down")},visibleTip:function(){this.visibleTip||(this.goToRoute?this.changeStep(this.goToRoute):this.changeStep("up"))}},mounted:function(){this.audioObj=Object(p["a"])(this.audio||d.a),this.audioObj.play(),this.handleBusiness?(this.startTime(),this.handleBusiness()):this.changeStep("down")}},m=l,f=(a("3bf6"),a("2877")),b=Object(f["a"])(m,i,n,!1,null,"1fc51ae4",null);t["a"]=b.exports},9177:function(e,t,a){"use strict";var i=a("5c37"),n=a.n(i);n.a},"9f4c":function(e,t,a){e.exports=a.p+"static/img/woman.d65fc07f.png"},a8fd:function(e,t,a){},b414:function(e,t,a){},d20c:function(e,t,a){e.exports=a.p+"static/media/16.17dd2c9f.mp3"}}]);
//# sourceMappingURL=chunk-23616bc0.032a1c65.js.map