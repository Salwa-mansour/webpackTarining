!function(){"use strict";var e,t,n,r,o,i,a,c,s,p,u,f,l,d,x={582:function(e,t,n){var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap);"]),a.push([e.id,'*{-webkit-box-sizing:border-box;box-sizing:border-box}body{background-color:#2fa8cc;font-family:"Roboto",sans-serif;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100vh;overflow:hidden;margin:0;padding:20px}.container{background-color:#f4f4f4;border-radius:10px;-webkit-box-shadow:0 10px 20px rgba(0,0,0,.1),0 6px 6px rgba(0,0,0,.1);box-shadow:0 10px 20px rgba(0,0,0,.1),0 6px 6px rgba(0,0,0,.1);padding:50px 20px;text-align:center;max-width:100%;width:800px}h3{margin:0;opacity:.5;letter-spacing:2px}img{width:100px;margin-bottom:20px}.joke{font-size:30px;letter-spacing:1px;line-height:40px;margin:50px auto;max-width:600px}.btn{background-color:#2fa8cc;color:#f4f4f4;border:0;border-radius:10px;-webkit-box-shadow:0 5px 15px rgba(0,0,0,.1),0 6px 6px rgba(0,0,0,.1);box-shadow:0 5px 15px rgba(0,0,0,.1),0 6px 6px rgba(0,0,0,.1);padding:14px 40px;font-size:16px;cursor:pointer}.btn:active{-webkit-transform:scale(0.98);transform:scale(0.98)}.btn:focus{outline:0}.inial-rotate{-webkit-transform:translateX(10px) rotate(15deg);transform:translateX(10px) rotate(15deg);opacity:50%}',""]),t.Z=a},645:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var p=0;p<e.length;p++){var u=[].concat(e[p]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},81:function(e){e.exports=function(e){return e[1]}},379:function(e){var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],p=r.base?s[0]+r.base:s[0],u=i[p]||0,f="".concat(p," ").concat(u);i[p]=u+1;var l=n(f),d={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)t[l].references++,t[l].updater(d);else{var x=o(d,r);r.byIndex=c,t.splice(c,0,{identifier:f,updater:x,references:1})}a.push(f)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=r(e,o),p=0;p<i.length;p++){var u=n(i[p]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}i=s}}},569:function(e){var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:function(e){e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:function(e,t,n){e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:function(e){e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:function(e){e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},b={};function m(e){var t=b[e];if(void 0!==t)return t.exports;var n=b[e]={id:e,exports:{}};return x[e](n,n.exports,m),n.exports}m.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return m.d(t,{a:t}),t},m.d=function(e,t){for(var n in t)m.o(t,n)&&!m.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},m.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},m.nc=void 0,e=m(379),t=m.n(e),n=m(795),r=m.n(n),o=m(569),i=m.n(o),a=m(565),c=m.n(a),s=m(216),p=m.n(s),u=m(589),f=m.n(u),l=m(582),(d={}).styleTagTransform=f(),d.setAttributes=c(),d.insert=i().bind(null,"head"),d.domAPI=r(),d.insertStyleElement=p(),t()(l.Z,d),l.Z&&l.Z.locals&&l.Z.locals,console.log("Just laugh Man!")}();