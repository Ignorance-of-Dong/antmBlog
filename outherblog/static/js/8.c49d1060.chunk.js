(this["webpackJsonpantd-demo-ts"]=this["webpackJsonpantd-demo-ts"]||[]).push([[8],{105:function(e,a,t){"use strict";t(136);var n=t(141),c=(t(137),t(139)),r=t(0),l=t.n(r),o=t(72),i=t(183),s=t(45),u=(t(138),t(106),i.a.BgElement);a.a=function(e){var a=function(e){switch(e.index){case 0:return{rotate:90,opacity:0,y:-60};case 10:case 1:return{y:-60,x:-10,opacity:0};case 9:case 2:return{y:-60,x:20,opacity:0};case 3:return{y:60,opacity:0};case 8:case 4:return{x:30,opacity:0};case 5:return{enter:[{scale:2,opacity:0,type:"set"},{scale:1.2,opacity:1,duration:300},{scale:.9,duration:200},{scale:1.05,duration:150},{scale:1,duration:100}],leave:{opacity:0,scale:0}};case 6:return{scale:.8,x:30,y:-10,opacity:0};case 7:return{scale:.8,x:30,y:10,opacity:0};default:return{opacity:0}}};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"author-div comm-box"},l.a.createElement("div",null," ",l.a.createElement(c.a,{size:100,src:"http://my.ignorantscholar.cn/images/headers.png"})),l.a.createElement("div",{className:"author-introduction"},l.a.createElement(o.a,{enter:a,leave:a},"\u7a3b\u8349\u7a0b\u5e8f\u5458\uff0c\u4e13\u6ce8\u4e8eWEB\u548c\u79fb\u52a8\u524d\u7aef\u5f00\u53d1\u3002\u3002\u6b64\u5730\u7ef4\u6743\u65e0\u95e8\uff0c\u6b64\u65f6\u65e0\u80fd\u4e3a\u529b\uff0c\u6b64\u5fc3\u968f\u6ce2\u9010\u6d41\u3002"),l.a.createElement(n.a,null,"\u793e\u4ea4\u8d26\u53f7"),l.a.createElement(c.a,{size:28,icon:"github",className:"account"}),l.a.createElement(c.a,{size:28,icon:"qq",className:"account"}),l.a.createElement(c.a,{size:28,icon:"wechat",className:"account"}))),l.a.createElement(i.b,{prefixCls:"banner-user",autoPlay:!0},l.a.createElement(i.a,{prefixCls:"banner-user-elem",key:"0"},l.a.createElement(u,{key:"bg",className:"bg",style:{background:"#364D79"}}),l.a.createElement(s.c,{className:"banner-user-title",animation:{y:30,opacity:0,type:"from"}},"Ant Motion Banner"),l.a.createElement(s.c,{className:"banner-user-text",animation:{y:30,opacity:0,type:"from",delay:100}},"The Fast Way Use Animation In React")),l.a.createElement(i.a,{prefixCls:"banner-user-elem",key:"1"},l.a.createElement(u,{key:"bg",className:"bg",style:{background:"#64CBCC"}}),l.a.createElement(s.c,{className:"banner-user-title",animation:{y:30,opacity:0,type:"from"}},"Ant Motion Banner"),l.a.createElement(s.c,{className:"banner-user-text",animation:{y:30,opacity:0,type:"from",delay:100}},"The Fast Way Use Animation In React"))),l.a.createElement("div",{className:"auto"},l.a.createElement(o.a,{enter:a,leave:a},"\u7cfb\u7edf\u7531 React+Node+Ant D+Ant M\u9a71\u52a8")," "),l.a.createElement("div",{className:"auto"},l.a.createElement("a",{rel:"noopener noreferrer",href:"http://my.ignorantscholar.cn",target:"_blank"},l.a.createElement(o.a,{enter:a,leave:a},"my.ignorantscholar.cn"))))}},106:function(e,a,t){},107:function(e,a,t){"use strict";t(142);var n=t(181),c=(t(144),t(182)),r=(t(108),t(39)),l=(t(66),t(70)),o=t(71),i=(t(187),t(180)),s=t(0),u=t.n(s),m=(t(109),t(45)),d=t(52),p=i.a.Dragger,f=m.c.easing.path("M0,100 L25,100 C34,20 40,0 100,0"),y=m.c.easing.path("M0,100 C5,120 25,130 25,100 C30,60 40,75 58,90 C69,98.5 83,99.5 100,100");a.a=function(e){var a=[{repeatDelay:500,y:-70,repeat:-1,yoyo:!0,ease:f,duration:1e3},{repeatDelay:500,appearTo:0,scaleX:0,scaleY:2,repeat:-1,yoyo:!0,ease:y,duration:1e3}],t=Object(s.useState)(!1),i=Object(o.a)(t,2),E=i[0],g=i[1],h=Object(s.useState)(""),b=Object(o.a)(h,2),v=b[0],N=b[1],j=Object(s.useState)(""),x=Object(o.a)(j,2),O=x[0],k=x[1],C=Object(s.useState)(""),S=Object(o.a)(C,2),w=S[0],A=S[1],F=Object(s.useState)(""),T=Object(o.a)(F,2),z=T[0],D=T[1],I=Object(s.useState)(""),M=Object(o.a)(I,2),P=M[0],B=M[1],q=e.paused,R={name:"file",multiple:!0,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",onChange:function(e){var a=e.file.status;if("done"===a){l.a.success("".concat(e.file.name," file uploaded successfully."));var t=new FileReader;t.readAsText(e.file.originFileObj,'"UTF-8"'),t.onload=function(e){N(e.target.result)}}else"error"===a&&l.a.error("".concat(e.file.name," file upload failed."))}};return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",{className:"corner-dom",onClick:function(){g(!0)}},u.a.createElement(m.c,{animation:a,paused:q,className:"code-box-shape",style:{position:"absolute",transformOrigin:"center bottom"}},u.a.createElement(r.a,{type:"setting",spin:!0,style:{fontSize:"50px",color:"#08c"}}))),u.a.createElement(n.a,{title:"homepage"===e.page?"\u6dfb\u52a0\u6587\u7ae0":"\u6dfb\u52a0\u89c6\u9891\u7231\u597d",style:{top:20},visible:E,onOk:function(){!function(){if(""!==v&&""!==O&&""!==w&&""!==P&&""!==z){var a={mdfiletext:v,title:O,author:w,introduction:P,type:z};"homepage"===e.page?Object(d.a)(a).then((function(a){console.log(a),e.Submission(),g(!1)})):Object(d.b)(a).then((function(a){console.log(a),e.Submission(),g(!1)}))}else l.a.error("\u8b66\u544a\uff1a\u8bf7\u5b8c\u5584\u4e0a\u4f20\u4fe1\u606f\uff01\uff01\uff01\uff01")}()},onCancel:function(){return function(e){g(e)}(!1)}},u.a.createElement(c.a,{placeholder:"\u8bf7\u586b\u5199\u6587\u7ae0\u6807\u9898",onChange:function(e){k(e.target.value)}}),u.a.createElement("div",{className:"corner-line"}),u.a.createElement(c.a,{placeholder:"\u8bf7\u586b\u5199\u6587\u7ae0\u4f5c\u8005",onChange:function(e){A(e.target.value)}}),u.a.createElement("div",{className:"corner-line"}),u.a.createElement(c.a,{placeholder:"\u8bf7\u586b\u5199\u6587\u7ae0\u7c7b\u578b",onChange:function(e){D(e.target.value)}}),u.a.createElement("div",{className:"corner-line"}),u.a.createElement(c.a,{placeholder:"\u8bf7\u586b\u5199\u6587\u7ae0\u7b80\u4ecb",onChange:function(e){B(e.target.value)}}),u.a.createElement("div",{className:"corner-line"}),u.a.createElement(p,R,u.a.createElement("p",{className:"ant-upload-drag-icon"},u.a.createElement(r.a,{type:"inbox"})),u.a.createElement("p",{className:"ant-upload-text"}," ",u.a.createElement("span",{role:"img","aria-label":"\u751f\u6c14"},"\ud83d\ude08")," Click or drag to upload a file ",u.a.createElement("span",{role:"img","aria-label":"\u751f\u6c14"},"\ud83d\ude08")," "),u.a.createElement("p",{className:"ant-upload-hint"},"\u8bf7\u4f7f\u7528md\u7ed3\u5c3e\u7684\u6587\u4ef6\u4e0a\u4f20\uff0c\u6ce8\u610f\u89c4\u8303\uff01\uff01\uff01"))))}},109:function(e,a,t){},354:function(e,a,t){},362:function(e,a,t){"use strict";t.r(a);t(122);var n=t(185),c=t(71),r=t(0),l=t.n(r),o=t(61),i=t(120),s=t(105),u=t(107),m=t(52);t(354);a.default=function(e){var a=Object(r.useState)([]),t=Object(c.a)(a,2),d=t[0],p=t[1],f=Object(r.useState)(!0),y=Object(c.a)(f,2),E=y[0],g=y[1];return Object(r.useEffect)((function(){Object(m.d)().then((function(e){p(e.data.data)}))}),[E]),l.a.createElement("div",{className:"wrap-h"},l.a.createElement(i.a,{delay:1e3,className:"queue-simple"},l.a.createElement(o.a,Object.assign({selectIndex:0},e))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"container-left"},l.a.createElement(i.a,{delay:500,className:"queue-simple"},d.length?d.map((function(a){return l.a.createElement("div",{key:a.id,className:"c-l-tip",onClick:function(){e.history.push("/detailpage?activeid=".concat(a.activeid))}},l.a.createElement("div",{className:"header"},a.title),l.a.createElement("div",{className:"introduce"},l.a.createElement("span",null,"\u53d1\u5e03\u65f6\u95f4\uff1a",a.uploadate),l.a.createElement("span",null,"\u7c7b\u578b\uff1a",a.type),l.a.createElement("span",null,"\u4f5c\u8005\uff1a",a.author)),l.a.createElement("div",{className:"content"},a.introduction))})):l.a.createElement(n.a,{active:!0}))),l.a.createElement("div",{className:"container-right-h"},l.a.createElement(s.a,null))),l.a.createElement(u.a,{page:"homepage",Submission:function(){g(!E)}}))}},52:function(e,a,t){"use strict";t(66);var n=t(70),c="http://blogserver.ignorantscholar.cn",r={get:function(e,a){if(console.log(a),a){var t=[];Object.keys(a).forEach((function(e){t.push(e+"="+a[e])})),-1===e.search(/\?/)?e+="?"+t.join("&"):e+="&"+t.join("&")}var n={method:"get",headers:{authorization:window.sessionStorage.getItem("token")?window.sessionStorage.getItem("token"):null,"Content-Type":"application/json; charset=utf-8"},credentials:"include",mode:"cors"};return fetch(c+e,n).then((function(e){return e.json().then((function(a){return e.ok&&200===a.code?Promise.resolve(a):Promise.reject(a)}))}))},post:function(e,a){return console.log(a),fetch(c+e,{method:"post",headers:{"Content-Type":"application/json; charset=utf-8"},credentials:"include",mode:"cors",body:JSON.stringify(a)}).then((function(e){return e.json().then((function(a){return e.ok&&200===a.data.code?Promise.resolve(a):(n.a.error(a.data.msg),console.log(a,"000000000"),Promise.reject(a))}))}))}};function l(e){return r.post("/default/addActivelist",e)}function o(e){return r.post("/default/addArticlesCollection",e)}function i(e){return r.post("/default/getArticleList",e)}function s(e){return r.post("/default/getArticlesDetail",e)}function u(e){return r.post("/default/getArticlesCollection",e)}t.d(a,"a",(function(){return l})),t.d(a,"b",(function(){return o})),t.d(a,"d",(function(){return i})),t.d(a,"c",(function(){return s})),t.d(a,"e",(function(){return u}))},61:function(e,a,t){"use strict";var n=t(0),c=t.n(n),r=(t(62),t(72));a.a=function(e){var a=function(e){switch(e.index){case 0:return{rotate:90,opacity:0,y:-60};case 10:case 1:return{y:-60,x:-10,opacity:0};case 9:case 2:return{y:-60,x:20,opacity:0};case 3:return{y:60,opacity:0};case 8:case 4:return{x:30,opacity:0};case 5:return{enter:[{scale:2,opacity:0,type:"set"},{scale:1.2,opacity:1,duration:300},{scale:.9,duration:200},{scale:1.05,duration:150},{scale:1,duration:100}],leave:{opacity:0,scale:0}};case 6:return{scale:.8,x:30,y:-10,opacity:0};case 7:return{scale:.8,x:30,y:10,opacity:0};default:return{opacity:0}}},t=e.selectIndex,n=void 0===t?0:t;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"blog-header"},c.a.createElement("div",{className:"blog-text"},c.a.createElement("div",{className:"blog-left"},c.a.createElement(r.a,null,"\u5025\u4f97\u65e0\u77e5")),c.a.createElement("div",{className:"blog-other"},c.a.createElement(r.a,null,"Ant Motion.........."))),c.a.createElement("div",{className:"blog-tab"},c.a.createElement("div",{className:"tab",onClick:function(){e.history.push("/")}},c.a.createElement(r.a,{enter:a,leave:a},"Home Page"),c.a.createElement("div",{className:"line",style:{display:0===n?"block":"none"}})),c.a.createElement("div",{className:"tab"},c.a.createElement(r.a,{enter:a,leave:a},"Article"),c.a.createElement("div",{className:"line",style:{display:1===n?"block":"none"}})),c.a.createElement("div",{className:"tab",onClick:function(){e.history.push("/videopage")}},c.a.createElement(r.a,{enter:a,leave:a},"Video life"),c.a.createElement("div",{className:"line",style:{display:2===n?"block":"none"}})))))}},62:function(e,a,t){}}]);