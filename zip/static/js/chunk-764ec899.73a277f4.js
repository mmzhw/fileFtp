(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-764ec899"],{"093a":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACICAMAAAACj/MaAAAAOVBMVEX////r9P/2+v/nTlf///+CuP+eyP+82P/b6v/K4f/2ub385+j1+//te4Lz+v/2//9rq//y+f/iLDcFWNIMAAAAEHRSTlPM0c71AvXr4Nbc2tHu6WwbJYny2gAAA/ZJREFUeNrt3ImO4yAMAFDsFmx6zDD5/49dkjTNnZgUKCvFI1W7Gql9A8ZcVdT1ev2Bx9+X4wE/HqKuv/hQBcQDfz2mDEutuaqfQixe86NAFROoHuVgHuqvHMzfiTkxJ+bEnJj/HQOknXPa2NiY5wUHU+nlKXgfcl0YjIp5VtXl3v3nfqmqfY1xfZiomFvVa2pLddt7F+uGYWNisNfILEqPMCZuAj9fmsYiSJkxxkUeTa1GapliIC4Ga8aleZG8ixljOHKdaRqlGg6rL2LUvcWILIm7qR3fvmFuoncZW3Ts6aC1iMa1UuxSDu3eItKYOL20gmktz6dQQyZKAV7GvCxtuZFoOIpldW5qC8xrgN9CMBAX86zGc9N+EU6IaZrm3pebsBTmyBjfIG/ATVaDFXJX+aiENbBNVWcOhf5UExNjPq3BMTH06YyQpmUOlr6YmNHMjYWMpsMdFREzmbuxJIz9KkZvLrEwL8ZtLT4tWSwFA0RkS8FYj6FSMFQQBil3N+l1DGTHmHUM1xjOiaF1jM2Omewr3TR/ISdm/cgIv4Axa5gmZShrBZ72E04weRdXk37icf7azBizsoag/Bg2K2uIpuQJRnYsDNqJZIjh9BjWWhtD1ieE0W4pRikjGNnHMeh2w44wmBCj9zFmWPIkxwFHMewEAYP8tdEwPAufrz5ldPPqM6dO0Cb0vGk4Lqb923ZiaYWFfcpwwpaZBSz1Hr1LXkSMJMCa2RDXff5CNgyvlRp493GeTRyT3iw1LB7ZH2KAzPbgpi5/bVqMn460pO5RcgyQllQ9n8EgH0yHMCyUNBiWD6ZwDMglDcamw6BxQWE6DMbHoA6zOEKSj+xATGC7+MkJAgZTGAZDLabL3wQYDrRo7FKG42NsIIa7kicbTCkxmt9TdgrMUjfpd5h6zfda9lkfzTKHAkb2ZxhteLD8318GRsXAgGGIcbwx2girUg5tUrOD1a3gBBi1cha/i4GMmHrBDv6nfXltTQaLdekFy0GM3t3YHLneDsNoCYZzY1xJLVMWBr/fTUaCgVrDUAamuXY7tPs5ilEFYfSJGQfJ7vMzY6gkDBeAsbKvH+fF6JIwVAKGZd8AyYvBEjAg+/ZxVowpAoO7KeMX5PUNFNUbSsiSM2ufwva1tfWg9p+AyTCgN0oe2np/Mvh0bFdZmATTX4guUXjxc2shx8aMT6AXF+ErTYCib1vJMbNbCphbLGztFuJtb83SiVTIH+9/z7GOXtevZbuW2zmAwYh3B3YHA3vnDBDzigdMczzk90LtrcF0NsjZMo2n73OA+bDeSQmwnOC4PnGcmBNzYk5MekxRDzYp6JEvUNbDcIp6TFBZD1Aq6NFS/wAw26+nN+IWwwAAAABJRU5ErkJggg=="},"19e0":function(e,t,a){e.exports=a.p+"static/img/tipMask.169d5e9a.png"},"1d2e":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vueCropperWrap"},[a("div",{staticClass:"imgWrap",on:{click:e.getCropImg}},[e.isTaked?e._e():a("img",{staticClass:"takingImg",attrs:{alt:"",src:e.photoSrc}}),e.isTaked?a("img",{staticClass:"takingImg",attrs:{alt:"",src:e.resultSrc}}):e._e(),e.isTaked?e._e():a("img",{staticClass:"tipMask",attrs:{alt:"",src:e.tipMask}}),e.active?a("i",[a("img",{attrs:{alt:"",src:e.tick}})]):e._e()]),a("p",{staticClass:"time"},[e._v(e._s(e.isWorking?e.clockTime:""))]),e.takingSrc?a("vue-cropper",{ref:"cropper",staticClass:"vueCropper",style:{width:e.width,height:e.height},attrs:{img:e.takingSrc,"output-size":e.option.outputSize,"output-type":e.option.outputType,info:e.option.info,"can-scale":e.option.canScale,"auto-crop":e.option.autoCrop,"auto-crop-width":e.width,"auto-crop-height":e.height,fixed:e.getFixed(),"fixed-number":e.size}}):e._e()],1)},i=[],c=a("5530"),s=a("2f62"),r=a("7e79"),o=a("2435"),l=a("b2eb"),d=a("4b11"),u=a.n(d),p=a("19e0"),h=a.n(p),b={name:"CropPhoto",components:{VueCropper:r["VueCropper"]},props:["photoSrc","size","clickImg","id","takePhotoSrc","clearResPhoto"],computed:Object(c["a"])({},Object(s["d"])("permanent",{singleReflexWebSocket:"singleReflexWebSocket"})),data:function(){return{tick:u.a,tipMask:h.a,active:!1,takingSrc:"",resultSrc:"",isWorking:!1,isTaked:!1,waitImgBack:!1,clockTime:3,intervalObj:null,width:o["o"].WIDTH,height:o["o"].HEIGHT,option:{info:!1,outputSize:1,outputType:"jpeg",canScale:!1,autoCrop:!0,canMoveBox:!1,centerBox:!0,fixedBox:!0}}},watch:{takePhotoSrc:function(e){this.waitImgBack&&e&&this.getPhoto(e)}},methods:Object(c["a"])({},Object(s["c"])("permanent",["setSingleReflexTakeImgSrc"]),{getFixed:function(){return!this.CONSTANT.disableTailoring&&!!this.size},getCropImg:function(){this.clickImg(this.id,this.resultSrc)},changeActive:function(e){this.isTaked&&(this.active=e)},getImg:function(){var e=this;this.active=!1,this.clockTime=3,this.isTaked=!1,this.isWorking=!0,this.intervalObj=setInterval((function(){e.clockTime--,0===e.clockTime&&(clearInterval(e.intervalObj),e.intervalObj=null,e.isWorking=!1,e.waitImgBack=!0,Object(l["b"])(e.singleReflexWebSocket,{module:"Camera",directive:"takePhoto"}))}),1e3)},getPhoto:function(e){var t=this;this.waitImgBack=!1,this.takingSrc=e,this.CONSTANT.disableCompress?(this.isTaked=!0,this.resultSrc=this.takingSrc,this.$emit("startPhoto",this.id+1)):setTimeout((function(){t.$refs.cropper.getCropData((function(e){t.isTaked=!0,t.resultSrc=e,t.$emit("startPhoto",t.id+1)}))}),1e3)}}),beforeDestroy:function(){clearInterval(this.intervalObj)}},g=b,m=(a("b0ec"),a("2877")),f=Object(m["a"])(g,n,i,!1,null,"52b157d5",null);t["a"]=f.exports},2647:function(e,t,a){"use strict";var n=a("9e00"),i=a.n(n);i.a},"37a2":function(e,t,a){"use strict";a.d(t,"e",(function(){return l})),a.d(t,"c",(function(){return d})),a.d(t,"d",(function(){return u})),a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a("5530"),i=(a("96cf"),a("1da1")),c=a("faf3"),s=a("b893"),r=a("bc3a"),o=a.n(r),l=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,a){var i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a.disableDogHandle){e.next=11;break}return e.next=3,o.a.get("config/electronicDogData.json");case 3:return i=e.sent,r=i.data,e.next=7,Object(c["p"])(Object(n["a"])({base64:Object(s["b"])(t)},r));case 7:return i=e.sent,e.abrupt("return",i);case 11:return e.abrupt("return",{code:"0",obj:t});case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),d=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,a){var i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a.disableDogHandle){e.next=11;break}return e.next=3,o.a.get("config/driverPhoto.json");case 3:return i=e.sent,r=i.data,e.next=7,Object(c["p"])(Object(n["a"])({base64:Object(s["b"])(t)},r));case 7:return i=e.sent,e.abrupt("return",i);case 11:return e.abrupt("return",{code:"0",obj:t});case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),u=function(){var e=Object(i["a"])(regeneratorRuntime.mark((function e(t,a){var i,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a.disableDogHandle){e.next=11;break}return e.next=3,o.a.get("config/exitEntry.json");case 3:return i=e.sent,r=i.data,e.next=7,Object(c["p"])(Object(n["a"])({base64:Object(s["b"])(t)},r));case 7:return i=e.sent,e.abrupt("return",i);case 11:return e.abrupt("return",{code:"0",obj:t});case 12:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),p=function(e){var t={bgColor:"white",childTypes:[],eyeYMax:.72,eyeYMin:.5,faceWidthMax:-1,faceWidthMin:-1,headHeightMax:.7,headHeightMin:.5,headtopMarginMax:.25,headtopMarginMin:.05,height:368,id:20,layout:[{width:260,height:378,x:208,y:330,cornerX:78,cornerY:141,landscape:!1},{width:260,height:378,x:546,y:330,cornerX:416,cornerY:141,landscape:!1},{width:260,height:378,x:884,y:330,cornerX:754,cornerY:141,landscape:!1},{width:260,height:378,x:1222,y:330,cornerX:1092,cornerY:141,landscape:!1},{width:260,height:378,x:1560,y:330,cornerX:1430,cornerY:141,landscape:!1},{width:260,height:378,x:208,y:849,cornerX:78,cornerY:660,landscape:!1},{width:260,height:378,x:546,y:849,cornerX:416,cornerY:660,landscape:!1},{width:260,height:378,x:884,y:849,cornerX:754,cornerY:660,landscape:!1},{width:260,height:378,x:1222,y:849,cornerX:1092,cornerY:660,landscape:!1},{width:260,height:378,x:1560,y:849,cornerX:1430,cornerY:660,landscape:!1}],name:"驾驶证照相",price:.01,type:0,width:260};return e&&(t.base64=Object(s["b"])(e)),t},h=function(e){var t={bgColor:"white",eyeYMax:.7,eyeYMin:.55,faceWidthMax:-1,faceWidthMin:-1,headHeightMax:-1,headHeightMin:-1,headtopMarginMax:.074,headtopMarginMin:.025,height:472,width:354,layout:[{width:354,height:472,x:248,y:315,cornerX:71,cornerY:79,landscape:!1},{width:354,height:472,x:673,y:315,cornerX:496,cornerY:79,landscape:!1},{width:354,height:472,x:1098,y:315,cornerX:921,cornerY:79,landscape:!1},{width:354,height:472,x:1523,y:315,cornerX:1346,cornerY:79,landscape:!1},{width:354,height:472,x:248,y:866,cornerX:71,cornerY:630,landscape:!1},{width:354,height:472,x:673,y:866,cornerX:496,cornerY:630,landscape:!1},{width:354,height:472,x:1098,y:866,cornerX:921,cornerY:630,landscape:!1},{width:354,height:472,x:1523,y:866,cornerX:1346,cornerY:630,landscape:!1}],name:"出入境照相"};return t.base64=Object(s["b"])(e),t}},"3e60":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e.currentStep===e.steps.findIndex((function(e){return"identifyCardPage"===e.key}))?a("identify-card-page"):e._e(),e.currentStep===e.steps.findIndex((function(e){return"faceYitu"===e.key}))?a("face-yitu"):e._e(),e.currentStep===e.steps.findIndex((function(e){return"contrast"===e.key}))?a("contrast",{attrs:{"query-id-photo":"queryIdPhoto"}}):e._e(),e.currentStep===e.steps.findIndex((function(e){return"process"===e.key}))?a("process",{attrs:{type:1,"handle-business":e.updateIdPhoto}}):e._e(),e.currentStep===e.steps.findIndex((function(e){return"takePhoto"===e.key}))?a("take-photo"):e._e(),e.currentStep===e.steps.findIndex((function(e){return"complete"===e.key}))?a("complete",{attrs:{data:e.result,"foot-texts":"业务已受理，您的身份证照片已保存成功！"}}):e._e()],1)},i=[],c=(a("96cf"),a("1da1")),s=a("5530"),r=a("2f62"),o=a("f7ef"),l=a("943e"),d=a("f5a9"),u=a("8a93"),p=function(){var e=this,t=this,n=t.$createElement,i=t._self._c||n;return i("div",[1===t.step?i("div",[i("div",{staticClass:"kd-page-title"},[t._v(" 请调整好姿势 ")]),i("div",{staticClass:"kd-page-content-wrapper"},[i("div",{staticClass:"photo-collection-box"},[i("div",{staticClass:"left"},[t._m(0),t._m(1),i("div",{staticClass:"img"},[i("img",{attrs:{src:t.correctPosture,alt:""}}),i("img",{attrs:{src:t.wrongPosture,alt:""}})])]),i("div",{staticClass:"center"},[i("img",{attrs:{src:t.singleReflexImgSrc}})]),i("div",{staticClass:"right"},[t._m(2),t._m(3),i("div",{staticClass:"img"},[i("img",{attrs:{src:t.machine,alt:""}})])])])])]):t._e(),2===t.step?i("div",[i("div",{staticClass:"kd-page-title"},[t._v(" 照片采集 ")]),i("div",{staticClass:"kd-page-content-wrapper"},[i("div",{staticClass:"photo-collection-box"},t._l(3,(function(e,a){return i("crop",{key:a,ref:"photo",refInFor:!0,attrs:{id:a,"photo-src":t.singleReflexImgSrc,"take-photo-src":t.singleReflexTakeImgSrc,"click-img":t.clickImg},on:{startPhoto:t.startPhoto}})})),1),i("div",{staticClass:"finish-tip"},[t.finishTip?i("p",[t._v(" 温馨提示：请选择您最满意的照片。 ")]):t._e()])])]):t._e(),3===t.step?i("div",[i("div",{staticClass:"kd-page-title"},[t._v(" 确认照片 ")]),i("div",{staticClass:"kd-page-content-wrapper collect-complete-box"},[t.singleReflexHandlePhoto?i("img",{attrs:{src:t.singleReflexHandlePhoto,alt:""}}):i("img",{attrs:{src:a("d622"),alt:""}})])]):t._e(),t.$store.state.common.visibleTip?t._e():i("div",{staticClass:"kd-foot-button kd-foot-button-position"},[i("kd-button",{attrs:{icon:"kedaIcon-policework",text:"返回首页","type-class":"home"}}),1===t.step?i("kd-button",{attrs:{icon:"kedaIcon-circleleft",text:"上一步","button-handle":function(){e.changeStep("up")}}}):t._e(),1===t.step?i("kd-button",{attrs:{icon:"kedaIcon-circleleft",text:"下一步","button-handle":t.startTakePhoto}}):t._e(),2===t.step?i("kd-button",{attrs:{icon:"kedaIcon-circleleft",text:"上一步","button-handle":function(){e.step--}}}):t._e(),2===t.step?i("kd-button",{attrs:{icon:"kedaIcon-circleright",text:"确定","button-handle":t.goDownHandlePhoto,"but-disable":!t.chosePhoto}}):t._e(),3===t.step?i("kd-button",{attrs:{icon:"kedaIcon-circleleft",text:"重拍","button-handle":function(){e.step=1}}}):t._e(),3===t.step?i("kd-button",{attrs:{icon:"kedaIcon-circleleft",text:"保存","button-handle":t.goNext}}):t._e()],1)])},h=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title"},[a("p",[e._v("拍照须知")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"desc"},[a("p",[e._v("1.坐姿端正，双肩水平，平视镜头；")]),a("p",[e._v("2.不得化浓妆，脸部表情自然，眼睛自然睁开；")]),a("p",[e._v("3.头发不得遮挡眼睛，露出双耳，不得使用头部覆盖物；")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"title"},[a("p",[e._v("温馨提示")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"desc"},[a("p",[e._v("您可按机器上的上下箭头调整座椅高度。")])])}],b=(a("4160"),a("159b"),a("1d2e")),g=a("faf3"),m=a("b893"),f=a("2530"),k=a("b2eb"),v=a("a65b"),A=a.n(v),x=a("093a"),C=a.n(x),j=a("9e26"),w=a.n(j),I=a("37a2"),y={name:"IdCardPhotoCollectTakePhoto",components:{crop:b["a"]},data:function(){return{chosePhoto:"",step:1,finishTip:!1,correctPosture:A.a,wrongPosture:C.a,machine:w.a}},mounted:function(){this.setSingleReflexImgSrc(""),Object(k["b"])(this.singleReflexWebSocket,{module:"Camera",directive:"reOpen"}),Object(k["b"])(this.singleReflexWebSocket,{module:"Camera",directive:"start"}),Object(k["b"])(this.lightWebSocket,"lightCtrl@B5:ON")},computed:Object(s["a"])({},Object(r["d"])("common",{identifyCard:"identifyCard",businessTypeCode:"businessTypeCode",binocularCamera:"binocularCamera",singleReflexHandlePhoto:"singleReflexHandlePhoto"}),{},Object(r["d"])("permanent",{singleReflexImgSrc:"singleReflexImgSrc",singleReflexTakeImgSrc:"singleReflexTakeImgSrc",singleReflexWebSocket:"singleReflexWebSocket",lightWebSocket:"lightWebSocket"})),methods:Object(s["a"])({},Object(r["c"])("common",["changeStep","changeTipPage","setSingleReflexHandlePhoto","setSingleReflexImgSrc"]),{},Object(r["c"])("permanent",["setSingleReflexTakeImgSrc"]),{},Object(r["c"])("idCardProcessing",["setResult"]),{startTakePhoto:function(){var e=this;this.step=this.step+1,setTimeout((function(){e.startPhoto(0)}),1e3)},clickImg:function(e,t){this.$refs.photo.forEach((function(t,a){a===e?t.changeActive(!0):t.changeActive(!1)})),this.chosePhoto=t},startPhoto:function(e){this.$refs.photo[e]?this.$refs.photo[e].getImg():(this.finishTip=!0,Object(k["b"])(this.singleReflexWebSocket,{module:"Camera",directive:"stop"}))},goDownHandlePhoto:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(g["a"])({sfzmhm:e.identifyCard.certNumber,xm:e.identifyCard.partyName,photo:Object(m["b"])(e.binocularCamera),identityPic:Object(m["b"])(e.chosePhoto)},!0);case 2:if(a=t.sent,!(a&&a.result&&a.result.respData&&"0"===a.result.respData.code)){t.next=17;break}return t.next=6,Object(f["n"])({originPhoto:Object(m["b"])(e.chosePhoto)});case 6:if(a=t.sent,!a||"0"!==a.code){t.next=14;break}return t.next=10,Object(I["e"])(e.chosePhoto,e.CONSTANT);case 10:a=t.sent,a&&1===a.code?(e.setSingleReflexHandlePhoto(a.obj),e.step=3):e.changeTipPage({message:a.message,enableBack:!0}),t.next=15;break;case 14:e.changeTipPage({message:a.message,enableBack:!0});case 15:t.next=18;break;case 17:e.changeTipPage({message:"检测结果与身份证信息不匹配，请您重新检测…",imgName:"imgTexts"});case 18:case"end":return t.stop()}}),t)})))()},goNext:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(g["x"])({filePath:e.businessTypeCode,fileName:e.identifyCard.partyName+e.identifyCard.certNumber,base64:Object(m["b"])(e.singleReflexHandlePhoto)});case 2:if(a=t.sent,!a||1!==a.code){t.next=10;break}return t.next=6,Object(f["u"])({handlePhoto:Object(m["b"])(e.singleReflexHandlePhoto)});case 6:a=t.sent,a&&"0"===a.code?(e.setResult(a.result),e.changeStep("down")):e.changeTipPage({message:a.message,enableBack:!0}),t.next=11;break;case 10:e.changeTipPage({message:a.message,enableBack:!0});case 11:case"end":return t.stop()}}),t)})))()}}),beforeDestroy:function(){Object(k["b"])(this.singleReflexWebSocket,{module:"Camera",directive:"stop"}),Object(k["b"])(this.lightWebSocket,"lightCtrl@B5:OFF")}},M=y,O=(a("d1ab"),a("2877")),T=Object(O["a"])(M,p,h,!1,null,"051626a9",null),S=T.exports,R=a("c4c3"),Y={name:"IdCardPhotoCollectIndex",components:{identifyCardPage:o["a"],faceYitu:l["a"],contrast:d["a"],takePhoto:S,process:u["a"],complete:R["a"]},computed:Object(s["a"])({},Object(r["d"])("common",{steps:"steps",currentStep:"currentStep",identifyCard:"identifyCard",binocularCamera:"binocularCamera",businessTypeCode:"businessTypeCode"}),{},Object(r["d"])("idCardProcessing",{result:"result"})),mounted:function(){this.setSteps([{name:"身份识别",isActive:!0,visible:!0,key:"identifyCardPage"},{name:"身份识别",isActive:!1,visible:!1,key:"faceYitu"},{name:"身份识别",isActive:!1,visible:!1,key:"contrast"},{name:"身份识别",isActive:!1,visible:!1,key:"process"},{name:"照片采集",isActive:!1,visible:!0,key:"takePhoto"},{name:"办理完成",isActive:!1,visible:!0,key:"complete"}])},methods:Object(s["a"])({},Object(r["c"])("common",["changeStep","setSteps","changeTipPage"]),{updateIdPhoto:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(f["t"])({name:e.identifyCard.partyName,idNum:e.identifyCard.certNumber,identifiedPhoto:Object(m["b"])(e.binocularCamera)});case 2:a=t.sent,a&&"0"===a.code?e.changeStep("down"):a&&e.changeTipPage({message:a.message});case 4:case"end":return t.stop()}}),t)})))()}})},P=Y,N=Object(O["a"])(P,n,i,!1,null,null,null);t["default"]=N.exports},"4b11":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDIgNzkuMTYwOTI0LCAyMDE3LzA3LzEzLTAxOjA2OjM5ICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTAzLTIzVDE3OjI1OjEwKzA4OjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wNS0xOVQxMzo0Njo0OSswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wNS0xOVQxMzo0Njo0OSswODowMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxYTBlNGYxYy0wYjRl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"},"9e00":function(e,t,a){},"9e26":function(e,t,a){e.exports=a.p+"static/img/machine.3a3781cd.png"},a65b:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACICAMAAAACj/MaAAAAM1BMVEX///+QwP+pzv97tP/v9v/5//8Mvxi82P/b6v/J4f/S9NX1+/9O0Vfz+v+Z5J1rq//y+f9nA1sWAAAAD3RSTlPM8Of40Ab+4Nbc0+7ubN6fuYYkAAADy0lEQVR42u3cCa+jIBAAYI5pmelF//+vXdSq1WflkGOykWSzb5NN/B7MwABGcblcnnB/N253eDqIuFzgLhi0O3QYHpZeI55MLE7zFCDYNBB3Ppi7ePPBvE/MiTkxJ+bEnJhQzOsRt/oaqa3Vkgpgbo9rFMbYsUnIjXld4yzKzk3mxUCsBe13o5wYeERahFxgZEaMC5frFQ5gLGTD3BzlehNHMHgU8/gAUiyL+I0Mmi1MNzSv0fISbTE94jH+FdtyD9PAuKYMkhB6iTmeTb0maZBW00yW1P5o4gfpay2IzuyfqX1LHCRBi5gxeZaDW1rHuDk72bIz6d2SOmaJwVwYtxQIPpjUpnTaml2o7AT8eDS0x8wJLjlgMCmfCmGmKNbQHkNTDKv2mHka1s0xlFbQlEltnbZuF8Esij3dFoOptV4JzKrwNC0xq475YMhgC8xqezDMNGiMoQYYvdUzHcbUx4Ddwpg2GFpjqD8+ajNM65DpNwhsMFPIYHuMHBKbB0ZN8csAg2PIGGiO0VPI+JeF4hjFCUNT/FJzzFDNmOoYICXX69KQ2BCWTAcwKLWWyhC5MVBK/nWsVsmSGNh+uN1I7CFk/JmdjpFBluHkqjQGbQTGhGV2MkZZFzAuYPu4UaoLGvePbQwEJlMoBv2t7wNYhxJM8ZsNM/xunjb8142eocBkyt0zf2IJp5BB0XzSw6lboRoGzY9Jj8aQqYRBtTPnmAlTfkf5s0e+MBSaTEcwLkb8S4Ia47ckBkzYeqDG+MVSGFQ6cDVwJQSWxEC4pMdQcDJFY0DZqDZhCpzPgIyzuLLTFMNE9kv3akZ4MsViYi1WYTEMRmOIwpMpEkM2NWQYYCSMlRBUGSb9aVLLvnUlqOqCxLWuzIlIpoMYqVDMGyN/GZgVMx8eui74igPyWagoZvmrejEoSs4zihNGrgt2wPnPMDJ/ivXcGB1yi4QRnZEFo727LCaY6j1jGfSMDMFgdcxOgkCnQeCB6eYdEqI4RoW9ZVYZozlhJCeMYoAxYZfVlTHIAENhr2zWxUhOGMUBg2Fv6NTFCA4YCHtBpypGccLQXv2A/Wa/209ClZj59RQcbkYdhIbjB8JymPHO5MdRbPfwLyfEVlkxGFR79QNuPrcTYm7M8gR6swjH39GccxNHUnvemce9B0Lg8UwQRm7fyS7Ggva7NSxyQjB66+JmUVh4DmAg490BeTDgOyeDnFc8/Qm9lq6vsb+/WBcQNXtmmDO2fpxnXfDkYoHTzsLtxJyYE/OfYlh92ITVJ19YfQyH1WeCeH1AidGnpf4BxKKgUxsfLXoAAAAASUVORK5CYII="},b0ec:function(e,t,a){"use strict";var n=a("fb0f"),i=a.n(n);i.a},c4c3:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"kd-page-title"},[e._v(" "+e._s(e.pageTitle)+" ")]),a("div",{staticClass:"kd-page-content-wrapper wrap-info"},[e.identifyCard.partyName?a("div",{staticClass:"item"},[a("span",{staticClass:"label"},[e._v("办理人：")]),a("span",{staticClass:"message"},[e._v(e._s(e.identifyCard.partyName))])]):e._e(),e.data.name?a("div",{staticClass:"item"},[a("span",{staticClass:"label"},[e._v("申请人：")]),a("span",{staticClass:"message"},[e._v(e._s(e.data.name?e.data.name:e.data.applyName?e.data.applyName:e.identifyCard.partyName))]),a("span",{staticClass:"label"},[e._v("申请业务：")]),a("span",{staticClass:"message"},[e._v(e._s(e.businessTypeName))])]):e._e(),e.data.slh?a("div",{staticClass:"item"},[a("span",{staticClass:"label"},[e._v("业务受理号：")]),a("span",{staticClass:"message"},[e._v(e._s(e.data.slh))])]):e._e(),e.data.serialNumber?a("div",{staticClass:"item"},[a("span",{staticClass:"label"},[e._v("业务流水号：")]),a("span",{staticClass:"message"},[e._v(e._s(e.data.serialNumber))])]):e._e(),a("div",{staticClass:"item"},[a("span",{staticClass:"label"},[e._v("申请日期：")]),a("span",{staticClass:"message"},[e._v(e._s(e.$momentFormat(e.data.applyTime)))])]),e.footTexts?a("div",{staticClass:"footer",domProps:{innerHTML:e._s(e.footTexts)}}):e._e()]),e.$store.state.common.visibleTip?e._e():a("div",{staticClass:"kd-foot-button kd-foot-button-position"},[e.printBut?a("kd-button",{attrs:{icon:"kedaIcon-duigou",text:"打印","button-handle":e.nextStep}}):a("kd-button",{attrs:{icon:"kedaIcon-policework",text:"业务完成",typeClass:"complete"}})],1)])},i=[],c=(a("96cf"),a("1da1")),s=a("5530"),r=a("2f62"),o=a("f23e"),l=a.n(o),d=a("541b"),u=a("b893"),p=a("ed08"),h=a("faf3"),b={name:"Complete",props:{data:{default:{}},footTexts:{default:"温馨提示：业务已受理，请耐心等待！"},pageTitle:{default:"提交完成"},mp3:{default:""},printBut:{default:!1}},computed:Object(s["a"])({},Object(r["d"])("common",{identifyCard:"identifyCard",businessTypeCode:"businessTypeCode",businessTypeName:"businessTypeName",dogHandlePic:"dogHandlePic"}),{},Object(r["d"])("permanent",{BUSINESS_CODE_NAME:"BUSINESS_CODE_NAME"})),mounted:function(){this.audioObj=Object(d["a"])(this.mp3||l.a),this.audioObj.play()},beforeDestroy:function(){this.audioObj.destroy()},methods:{nextStep:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(h["v"])({printCount:1,base64:Object(u["b"])(e.dogHandlePic)});case 2:a=t.sent,a&&1===a.code?Object(p["d"])():e.changeTipPage({message:a.message,enableBack:!0});case 4:case"end":return t.stop()}}),t)})))()}}},g=b,m=(a("2647"),a("2877")),f=Object(m["a"])(g,n,i,!1,null,"59e28f6f",null);t["a"]=f.exports},d1ab:function(e,t,a){"use strict";var n=a("f53a"),i=a.n(n);i.a},d622:function(e,t,a){e.exports=a.p+"static/img/cameraDefault.f50c8814.png"},f23e:function(e,t,a){e.exports=a.p+"static/media/10.4d0df920.mp3"},f53a:function(e,t,a){},fb0f:function(e,t,a){}}]);
//# sourceMappingURL=chunk-764ec899.73a277f4.js.map