(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{188:function(e,t,n){},195:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(13),c=n.n(o),l=(n(87),n(89),n(91),n(52),n(14)),i=n(15),s=n(17),u=n(16),m=n(18),d=n(201),p=n(196),h=n(9),f=n.n(h),b=n(41),g=n.n(b),v=n(72),E=n.n(v),w=(n(94),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleClose=function(e){n.setState({open:!1})},n.handleSubmit=function(e){e.preventDefault(),n.setState({open:!0});var t=n.props.history.push;e.preventDefault(),setTimeout(function(){return t("/welcome")},3e3)},n.state={open:!1,vertical:"center",horizontal:"center"},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.open,t=this.state.vertical,n=this.state.horizontal;return r.a.createElement("div",{className:"DashboardPage"},r.a.createElement(f.a,{onSubmit:this.handleSubmit},r.a.createElement(f.a.Group,{controlId:"email",bsSize:"large"},r.a.createElement(f.a.Label,null,"Username"),r.a.createElement(f.a.Control,{type:"text",placeholder:"Username"})),r.a.createElement(f.a.Group,{controlId:"password",bsSize:"large"},r.a.createElement(f.a.Label,null,"Password"),r.a.createElement(f.a.Control,{placeholder:"Password",type:"password"})),r.a.createElement(g.a,{block:!0,bsSize:"large",type:"submit"},"Login"),r.a.createElement(E.a,{anchorOrigin:{vertical:t,horizontal:n},key:"".concat(t,",").concat(n),open:e,onClose:this.handleClose,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},"Login Successful. Redirect after 3 seconds")})))}}]),t}(a.Component)),y=n(74),O=(n(188),function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=1e4+89999*Math.random(),a=Math.round(t);n.setState({random:"SVT"+a,open:"inline"})},n.state={random:0,open:"none"},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.random,t={display:this.state.open};return r.a.createElement("div",{className:"WelcomePage"},r.a.createElement(f.a,{onSubmit:this.handleSubmit},r.a.createElement(f.a.Group,{controlId:"name",bsSize:"large"},r.a.createElement(f.a.Control,{type:"text",placeholder:"H\u1ecd v\xe0 t\xean ch\u1ee7 h\u1ed9"})),r.a.createElement(f.a.Group,{controlId:"address",bsSize:"large"},r.a.createElement(f.a.Control,{placeholder:"\u0110\u1ecba ch\u1ec9",type:"text"})),r.a.createElement(f.a.Group,{controlId:"S\u1ed1 nh\xe2n kh\u1ea9u",bsSize:"large"},r.a.createElement(f.a.Control,{placeholder:"S\u1ed1 nh\xe2n kh\u1ea9u",type:"number"})),r.a.createElement(g.a,{block:!0,bsSize:"large",type:"submit"},"Submit"),r.a.createElement("br",null),r.a.createElement("div",{style:t},r.a.createElement(f.a.Label,null,"M\xe3 s\u1ed1 kh\xe1ch h\xe0ng: "),r.a.createElement(f.a.Control,{plaintext:!0,readOnly:!0,value:e}))),"// ",r.a.createElement("div",{className:"copy",style:t},"// ",r.a.createElement(y.CopyToClipboard,{text:this.state.random},"//   ",r.a.createElement("button",null,"Copy"),"// "),"// "))}}]),t}(a.Component)),j=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(p.a,{path:"/rpaweb",component:w}),r.a.createElement(p.a,{path:"/welcome",component:O}))}}]),t}(r.a.Component),k=n(8),S=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={collapse:!1},n.onClick=function(){n.setState({collapse:!n.state.collapse})},n.toggle=function(){n.setState({dropdownOpen:!n.state.dropdownOpen})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(k.e,{className:"flexible-navbar",light:!0,expand:"md",scrolling:!0},r.a.createElement(k.f,{href:"/"},r.a.createElement("strong",null,"RPA")),r.a.createElement(k.h,{onClick:this.onClick}),r.a.createElement(k.b,{isOpen:this.state.collapse,navbar:!0},r.a.createElement(k.g,{left:!0})))}}]),t}(a.Component),C=n(80),x=n.n(C),N=function(){return r.a.createElement("div",{className:"sidebar-fixed position-fixed"},r.a.createElement("a",{href:"#!",className:"logo-wrapper waves-effect"},r.a.createElement("img",{alt:"MDB React Logo",className:"img-fluid",src:x.a})))},z=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"flexible-content"},r.a.createElement(S,null),r.a.createElement(N,null),r.a.createElement("main",{id:"content",className:"p-5"},r.a.createElement(j,null)))}}]),t}(a.Component),L=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var P=n(200);c.a.render(r.a.createElement(P.a,null,r.a.createElement(z,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/rpaweb",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/rpaweb","/service-worker.js");L?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):I(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):I(e)})}}()},52:function(e,t,n){},80:function(e,t,n){e.exports=n.p+"static/media/mdb-react.750b5338.png"},82:function(e,t,n){e.exports=n(195)},94:function(e,t,n){}},[[82,2,1]]]);
//# sourceMappingURL=main.75130ccd.chunk.js.map