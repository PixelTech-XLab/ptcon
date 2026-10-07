import{l as Je,_ as be,k as we,m as xe,o as ke,p as $e,a as V,c as D,b as m,f as gt,t as L,q as j,s as Ut,v as Gt,F as wt,g as xt,x as vt,i as U,r as G,y as H,w as Qe,n as mt,z as tn,A as en,d as St,e as zt,h as nn,B as on,T as rn,u as an,j as sn,C as ln}from"./index-DAUWZU3-.js";import{t as re,f as pt,a as cn,b as dn}from"./format-DcCgK5LT.js";/*!
 * artplayer.js v5.4.0
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2026 Harvey Zhao
 * Released under the MIT License.
 */function pn(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Pt={exports:{}},un=Pt.exports,ae;function hn(){return ae||(ae=1,(function(n,t){(function(e,i){n.exports=i()})(un,function(){function e(l){return(e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(d){return typeof d}:function(d){return d&&typeof Symbol=="function"&&d.constructor===Symbol&&d!==Symbol.prototype?"symbol":typeof d})(l)}var i=Object.prototype.toString,o=function(l){if(l===void 0)return"undefined";if(l===null)return"null";var d=e(l);if(d==="boolean")return"boolean";if(d==="string")return"string";if(d==="number")return"number";if(d==="symbol")return"symbol";if(d==="function")return(function(p){return r(p)==="GeneratorFunction"})(l)?"generatorfunction":"function";if((function(p){return Array.isArray?Array.isArray(p):p instanceof Array})(l))return"array";if((function(p){return p.constructor&&typeof p.constructor.isBuffer=="function"?p.constructor.isBuffer(p):!1})(l))return"buffer";if((function(p){try{if(typeof p.length=="number"&&typeof p.callee=="function")return!0}catch(h){if(h.message.indexOf("callee")!==-1)return!0}return!1})(l))return"arguments";if((function(p){return p instanceof Date||typeof p.toDateString=="function"&&typeof p.getDate=="function"&&typeof p.setDate=="function"})(l))return"date";if((function(p){return p instanceof Error||typeof p.message=="string"&&p.constructor&&typeof p.constructor.stackTraceLimit=="number"})(l))return"error";if((function(p){return p instanceof RegExp||typeof p.flags=="string"&&typeof p.ignoreCase=="boolean"&&typeof p.multiline=="boolean"&&typeof p.global=="boolean"})(l))return"regexp";switch(r(l)){case"Symbol":return"symbol";case"Promise":return"promise";case"WeakMap":return"weakmap";case"WeakSet":return"weakset";case"Map":return"map";case"Set":return"set";case"Int8Array":return"int8array";case"Uint8Array":return"uint8array";case"Uint8ClampedArray":return"uint8clampedarray";case"Int16Array":return"int16array";case"Uint16Array":return"uint16array";case"Int32Array":return"int32array";case"Uint32Array":return"uint32array";case"Float32Array":return"float32array";case"Float64Array":return"float64array"}if((function(p){return typeof p.throw=="function"&&typeof p.return=="function"&&typeof p.next=="function"})(l))return"generator";switch(d=i.call(l)){case"[object Object]":return"object";case"[object Map Iterator]":return"mapiterator";case"[object Set Iterator]":return"setiterator";case"[object String Iterator]":return"stringiterator";case"[object Array Iterator]":return"arrayiterator"}return d.slice(8,-1).toLowerCase().replace(/\s/g,"")};function r(l){return l.constructor?l.constructor.name:null}function a(l,d){var p=2<arguments.length&&arguments[2]!==void 0?arguments[2]:["option"];return s(l,d,p),c(l,d,p),(function(h,g,f){var b=o(g),C=o(h);if(b==="object"){if(C!=="object")throw new Error("[Type Error]: '".concat(f.join("."),"' require 'object' type, but got '").concat(C,"'"));Object.keys(g).forEach(function(v){var w=h[v],x=g[v],y=f.slice();y.push(v),s(w,x,y),c(w,x,y),a(w,x,y)})}if(b==="array"){if(C!=="array")throw new Error("[Type Error]: '".concat(f.join("."),"' require 'array' type, but got '").concat(C,"'"));h.forEach(function(v,w){var x=h[w],y=g[w]||g[0],S=f.slice();S.push(w),s(x,y,S),c(x,y,S),a(x,y,S)})}})(l,d,p),l}function s(l,d,p){if(o(d)==="string"){var h=o(l);if(d[0]==="?"&&(d=d.slice(1)+"|undefined"),!(-1<d.indexOf("|")?d.split("|").map(function(g){return g.toLowerCase().trim()}).filter(Boolean).some(function(g){return h===g}):d.toLowerCase().trim()===h))throw new Error("[Type Error]: '".concat(p.join("."),"' require '").concat(d,"' type, but got '").concat(h,"'"))}}function c(l,d,p){if(o(d)==="function"){var h=d(l,o(l),p);if(h!==!0){var g=o(h);throw g==="string"?new Error(h):g==="error"?h:new Error("[Validator Error]: The scheme for '".concat(p.join("."),"' validator require return true, but got '").concat(h,"'"))}}}return a.kindOf=o,a})})(Pt)),Pt.exports}var fn=hn();const kt=pn(fn),Jt="5.4.0",$t={properties:["audioTracks","autoplay","buffered","controller","controls","crossOrigin","currentSrc","currentTime","defaultMuted","defaultPlaybackRate","duration","ended","error","loop","mediaGroup","muted","networkState","paused","playbackRate","played","preload","readyState","seekable","seeking","src","startDate","textTracks","videoTracks","volume"],methods:["addTextTrack","canPlayType","load","play","pause"],events:["abort","canplay","canplaythrough","durationchange","emptied","ended","error","loadeddata","loadedmetadata","loadstart","pause","play","playing","progress","ratechange","seeked","seeking","stalled","suspend","timeupdate","volumechange","waiting"],prototypes:["width","height","videoWidth","videoHeight","poster","webkitDecodedFrameCount","webkitDroppedFrameCount","playsInline","webkitSupportsFullscreen","webkitDisplayingFullscreen","onenterpictureinpicture","onleavepictureinpicture","disablePictureInPicture","cancelVideoFrameCallback","requestVideoFrameCallback","getVideoPlaybackQuality","requestPictureInPicture","webkitEnterFullScreen","webkitEnterFullscreen","webkitExitFullScreen","webkitExitFullscreen"]},Et=(globalThis==null?void 0:globalThis.CUSTOM_USER_AGENT)??(typeof navigator<"u"?navigator.userAgent:""),Ce=/^(?:(?!chrome|android).)*safari/i.test(Et),Te=/iPad|iPhone|iPod/i.test(Et)&&!window.MSStream,Ee=Te||Et.includes("Macintosh")&&navigator.maxTouchPoints>=1,O=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(Et)||Ee,Ot=typeof window<"u"&&typeof document<"u";function q(n,t=document){return t.querySelector(n)}function Mt(n,t=document){return Array.from(t.querySelectorAll(n))}function E(n,t){return n.classList.add(t)}function W(n,t){return n.classList.remove(t)}function ot(n,t){return n.classList.contains(t)}function k(n,t){return t instanceof Element?n.appendChild(t):n.insertAdjacentHTML("beforeend",String(t)),n.lastElementChild||n.lastChild}function Ft(n){return n.parentNode.removeChild(n)}function u(n,t,e){return n.style[t]=e,n}function Vt(n,t){for(const e in t)u(n,e,t[e]);return n}function mn(n,t,e=!0){const i=window.getComputedStyle(n,null).getPropertyValue(t);return e?Number.parseFloat(i):i}function Me(n){return Array.from(n.parentElement.children).filter(t=>t!==n)}function Q(n,t){Me(n).forEach(e=>W(e,t)),E(n,t)}function rt(n,t,e="top"){O||(n.setAttribute("aria-label",t),E(n,"hint--rounded"),E(n,`hint--${e}`))}function Qt(n,t=0){const e=n.getBoundingClientRect(),i=window.innerHeight||document.documentElement.clientHeight,o=window.innerWidth||document.documentElement.clientWidth,r=e.top-t<=i&&e.top+e.height+t>=0,a=e.left-t<=o+t&&e.left+e.width+t>=0;return r&&a}function dt(n,t){return ee(n).includes(t)}function te(n,t){return t.parentNode.replaceChild(n,t),n}function N(n){return document.createElement(n)}function Se(n="",t=""){const e=N("i");return E(e,"art-icon"),E(e,`art-icon-${n}`),k(e,t),e}function ze(n,t){let e=document.getElementById(n);e||(e=document.createElement("style"),e.id=n,document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{document.head.appendChild(e)}):(document.head||document.documentElement).appendChild(e)),e.textContent=t}function _e(){const n=document.createElement("div");return n.style.display="flex",n.style.display==="flex"}function tt(n){return n.getBoundingClientRect()}function Le(n,t){return new Promise((e,i)=>{const o=new Image;o.onload=function(){if(!t||t===1)e(o);else{const r=document.createElement("canvas"),a=r.getContext("2d");r.width=o.width*t,r.height=o.height*t,a.drawImage(o,0,0,r.width,r.height),r.toBlob(s=>{const c=URL.createObjectURL(s),l=new Image;l.onload=function(){e(l)},l.onerror=function(){URL.revokeObjectURL(c),i(new Error(`Image load failed: ${n}`))},l.src=c})}},o.onerror=function(){i(new Error(`Image load failed: ${n}`))},o.src=n})}function ee(n){if(n.composedPath)return n.composedPath();const t=[];let e=n.target;for(;e;)t.push(e),e=e.parentNode;return!t.includes(window)&&window!==void 0&&t.push(window),t}class Ie extends Error{constructor(t,e){super(t),typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,e||this.constructor),this.name="ArtPlayerError"}}function Z(n,t){if(!n)throw new Ie(t);return n}function Tt(n){return n.includes("?")?Tt(n.split("?")[0]):n.includes("#")?Tt(n.split("#")[0]):n.trim().toLowerCase().split(".").pop()}function Pe(n,t){const e=document.createElement("a");e.style.display="none",e.href=n,e.download=t,document.body.appendChild(e),e.click(),document.body.removeChild(e)}function X(n,t,e){return Math.max(Math.min(n,Math.max(t,e)),Math.min(t,e))}function Dt(n){return n.charAt(0).toUpperCase()+n.slice(1)}function et(n){if(!n)return"00:00";const t=r=>r<10?`0${r}`:String(r),e=Math.floor(n/3600),i=Math.floor((n-e*3600)/60),o=Math.floor(n-e*3600-i*60);return(e>0?[e,i,o]:[i,o]).map(t).join(":")}function Re(n){return n.replace(/[&<>'"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"})[t]||t)}function gn(n){const t={"&amp;":"&","&lt;":"<","&gt;":">","&#39;":"'","&quot;":'"'},e=new RegExp(`(${Object.keys(t).join("|")})`,"g");return n.replace(e,i=>t[i]||i)}const $=Object.defineProperty,{hasOwnProperty:vn}=Object.prototype;function Ct(n,t){return vn.call(n,t)}function Ae(n,t){return Object.getOwnPropertyDescriptor(n,t)}function Ht(...n){const t=e=>e&&typeof e=="object"&&!Array.isArray(e);return n.reduce((e,i)=>(Object.keys(i).forEach(o=>{const r=e[o],a=i[o];Array.isArray(r)&&Array.isArray(a)?e[o]=r.concat(...a):t(r)&&t(a)?e[o]=Ht(r,a):e[o]=a}),e),{})}function yn(n){return n.replace(/(\d\d:\d\d:\d\d)[,.](\d+)/g,(t,e,i)=>{let o=i.slice(0,3);return i.length===1&&(o=`${i}00`),i.length===2&&(o=`${i}0`),`${e},${o}`})}function Oe(n){return`WEBVTT \r
\r
`.concat(yn(n).replace(/\{\\([ibu])\}/g,"</$1>").replace(/\{\\([ibu])1\}/g,"<$1>").replace(/\{([ibu])\}/g,"<$1>").replace(/\{\/([ibu])\}/g,"</$1>").replace(/(\d\d:\d\d:\d\d),(\d\d\d)/g,"$1.$2").replace(/\{[\s\S]*?\}/g,"").concat(`\r
\r
`))}function Rt(n){return URL.createObjectURL(new Blob([n],{type:"text/vtt"}))}function Fe(n){const t=new RegExp("Dialogue:\\s\\d,(\\d+:\\d\\d:\\d\\d.\\d\\d),(\\d+:\\d\\d:\\d\\d.\\d\\d),([^,]*),([^,]*),(?:[^,]*,){4}([\\s\\S]*)$","i");function e(i=""){return i.split(/[:.]/).map((o,r,a)=>{if(r===a.length-1){if(o.length===1)return`.${o}00`;if(o.length===2)return`.${o}0`}else if(o.length===1)return(r===0?"0":":0")+o;return r===0?o:r===a.length-1?`.${o}`:`:${o}`}).join("")}return`WEBVTT

${n.split(/\r?\n/).map(i=>{const o=i.match(t);return o?{start:e(o[1].trim()),end:e(o[2].trim()),text:o[5].replace(/\{[\s\S]*?\}/g,"").replace(/(\\N)/g,`
`).trim().split(/\r?\n/).map(r=>r.trim()).join(`
`)}:null}).filter(i=>i).map((i,o)=>i?`${o+1}
${i.start} --> ${i.end}
${i.text}`:"").filter(i=>i.trim()).join(`

`)}`}function ft(n=0){return new Promise(t=>setTimeout(t,n))}function Ve(n,t){let e;return function(...i){const o=()=>(e=null,n.apply(this,i));clearTimeout(e),e=setTimeout(o,t)}}function De(n,t){let e=!1;return function(...i){e||(n.apply(this,i),e=!0,setTimeout(()=>{e=!1},t))}}const bn=Object.freeze(Object.defineProperty({__proto__:null,ArtPlayerError:Ie,addClass:E,append:k,assToVtt:Fe,capitalize:Dt,clamp:X,createElement:N,debounce:Ve,def:$,download:Pe,errorHandle:Z,escape:Re,get:Ae,getComposedPath:ee,getExt:Tt,getIcon:Se,getRect:tt,getStyle:mn,has:Ct,hasClass:ot,includeFromEvent:dt,inverseClass:Q,isBrowser:Ot,isIOS:Te,isIOS13:Ee,isInViewport:Qt,isMobile:O,isSafari:Ce,loadImg:Le,mergeDeep:Ht,query:q,queryAll:Mt,remove:Ft,removeClass:W,replaceElement:te,secondToTime:et,setStyle:u,setStyleText:ze,setStyles:Vt,siblings:Me,sleep:ft,srtToVtt:Oe,supportsFlex:_e,throttle:De,tooltip:rt,unescape:gn,userAgent:Et,vttToBlob:Rt},Symbol.toStringTag,{value:"Module"})),se="array",P="boolean",Y="string",K="number",ct="object",at="function";function He(n,t,e){return Z(t===Y||t===K||n instanceof Element,`${e.join(".")} require '${Y}' or 'Element' type`)}const yt={html:He,disable:`?${P}`,name:`?${Y}`,index:`?${K}`,style:`?${ct}`,click:`?${at}`,mounted:`?${at}`,tooltip:`?${Y}|${K}`,width:`?${K}`,selector:`?${se}`,onSelect:`?${at}`,switch:`?${P}`,onSwitch:`?${at}`,range:`?${se}`,onRange:`?${at}`,onChange:`?${at}`},Zt={id:Y,container:He,url:Y,poster:Y,type:Y,theme:Y,lang:Y,volume:K,isLive:P,muted:P,autoplay:P,autoSize:P,autoMini:P,loop:P,flip:P,playbackRate:P,aspectRatio:P,screenshot:P,setting:P,hotkey:P,pip:P,mutex:P,backdrop:P,fullscreen:P,fullscreenWeb:P,subtitleOffset:P,miniProgressBar:P,useSSR:P,playsInline:P,lock:P,gesture:P,fastForward:P,autoPlayback:P,autoOrientation:P,airplay:P,proxy:`?${at}`,plugins:[at],layers:[yt],contextmenu:[yt],settings:[yt],controls:[{...yt,position:(n,t,e)=>{const i=["top","left","right"];return Z(i.includes(n),`${e.join(".")} only accept ${i.toString()} as parameters`)}}],quality:[{default:`?${P}`,html:Y,url:Y}],highlight:[{time:K,text:Y}],thumbnails:{url:Y,number:K,column:K,width:K,height:K,scale:K},subtitle:{url:Y,name:Y,type:Y,style:ct,escape:P,encoding:Y,onVttLoad:at},moreVideoAttr:ct,i18n:ct,icons:ct,cssVar:ct,customType:ct};class lt{constructor(t){this.id=0,this.art=t,this.cache=new Map,this.add=this.add.bind(this),this.remove=this.remove.bind(this),this.update=this.update.bind(this)}get show(){return ot(this.art.template.$player,`art-${this.name}-show`)}set show(t){const{$player:e}=this.art.template,i=`art-${this.name}-show`;t?E(e,i):W(e,i),this.art.emit(this.name,t)}toggle(){this.show=!this.show}add(t){const e=typeof t=="function"?t(this.art):t;if(e.html=e.html||"",kt(e,yt),!this.$parent||!this.name||e.disable)return;const i=e.name||`${this.name}${this.id}`;Z(!this.cache.has(i),`Can't add an existing [${i}] to the [${this.name}]`),this.id+=1;const o=N("div");E(o,`art-${this.name}`),E(o,`art-${this.name}-${i}`);const r=Array.from(this.$parent.children);o.dataset.index=e.index||this.id;const a=r.find(c=>Number(c.dataset.index)>=Number(o.dataset.index));a?a.insertAdjacentElement("beforebegin",o):k(this.$parent,o),e.html&&k(o,e.html),e.style&&Vt(o,e.style),e.tooltip&&rt(o,e.tooltip);const s=[];if(e.click){const c=this.art.events.proxy(o,"click",l=>{l.preventDefault(),e.click.call(this.art,this,l)});s.push(c)}return e.selector&&["left","right"].includes(e.position)&&this.selector(e,o,s),this[i]=o,this.cache.set(i,{$ref:o,events:s,option:e}),e.mounted&&e.mounted.call(this.art,o),o}remove(t){Z(this.cache.has(t),`Can't find [${t}] from the [${this.name}]`);const e=this.cache.get(t);e.option.beforeUnmount&&e.option.beforeUnmount.call(this.art,e.$ref);for(const i of e.events)this.art.events.remove(i);this.cache.delete(t),delete this[t],Ft(e.$ref)}update(t){if(this.cache.has(t.name)){const e=this.cache.get(t.name);t=Object.assign(e.option,t),this.remove(t.name)}return this.add(t)}}function wn(n){return t=>{const{i18n:e,constructor:{ASPECT_RATIO:i}}=t,o=i.map(r=>`<span data-value="${r}">${r==="default"?e.get("Default"):r}</span>`).join("");return{...n,html:`${e.get("Aspect Ratio")}: ${o}`,click:(r,a)=>{const{value:s}=a.target.dataset;s&&(t.aspectRatio=s,r.show=!1)},mounted:r=>{const a=q('[data-value="default"]',r);a&&Q(a,"art-current"),t.on("aspectRatio",s=>{const c=Mt("span",r).find(l=>l.dataset.value===s);c&&Q(c,"art-current")})}}}}function xn(n){return t=>({...n,html:t.i18n.get("Close"),click:e=>{e.show=!1}})}function kn(n){return t=>{const{i18n:e,constructor:{FLIP:i}}=t,o=i.map(r=>`<span data-value="${r}">${e.get(Dt(r))}</span>`).join("");return{...n,html:`${e.get("Video Flip")}: ${o}`,click:(r,a)=>{const{value:s}=a.target.dataset;s&&(t.flip=s.toLowerCase(),r.show=!1)},mounted:r=>{const a=q('[data-value="normal"]',r);a&&Q(a,"art-current"),t.on("flip",s=>{const c=Mt("span",r).find(l=>l.dataset.value===s);c&&Q(c,"art-current")})}}}}function $n(n){return t=>({...n,html:t.i18n.get("Video Info"),click:e=>{t.info.show=!0,e.show=!1}})}function Cn(n){return t=>{const{i18n:e,constructor:{PLAYBACK_RATE:i}}=t,o=i.map(r=>`<span data-value="${r}">${r===1?e.get("Normal"):r.toFixed(1)}</span>`).join("");return{...n,html:`${e.get("Play Speed")}: ${o}`,click:(r,a)=>{const{value:s}=a.target.dataset;s&&(t.playbackRate=Number(s),r.show=!1)},mounted:r=>{const a=q('[data-value="1"]',r);a&&Q(a,"art-current"),t.on("video:ratechange",()=>{const s=Mt("span",r).find(c=>Number(c.dataset.value)===t.playbackRate);s&&Q(s,"art-current")})}}}}function Tn(n){const t=Ot?location.href:"";return{...n,html:`<a href="https://artplayer.org?ref=${encodeURIComponent(t)}" target="_blank" style="width:100%;">ArtPlayer ${Jt}</a>`}}class En extends lt{constructor(t){super(t),this.name="contextmenu",this.$parent=t.template.$contextmenu,O||this.init()}init(){const{option:t,proxy:e,template:{$player:i,$contextmenu:o}}=this.art;t.playbackRate&&this.add(Cn({name:"playbackRate",index:10})),t.aspectRatio&&this.add(wn({name:"aspectRatio",index:20})),t.flip&&this.add(kn({name:"flip",index:30})),this.add($n({name:"info",index:40})),this.add(Tn({name:"version",index:50})),this.add(xn({name:"close",index:60}));for(let r=0;r<t.contextmenu.length;r++)this.add(t.contextmenu[r]);e(i,"contextmenu",r=>{if(!this.art.constructor.CONTEXTMENU)return;r.preventDefault(),this.show=!0;const a=r.clientX,s=r.clientY,{height:c,width:l,left:d,top:p}=tt(i),{height:h,width:g}=tt(o);let f=a-d,b=s-p;a+g>d+l&&(f=l-g),s+h>p+c&&(b=c-h),Vt(o,{top:`${b}px`,left:`${f}px`})}),e(i,"click",r=>{dt(r,o)||(this.show=!1)}),this.art.on("blur",()=>{this.show=!1})}}function Mn(n){return t=>({...n,tooltip:t.i18n.get("AirPlay"),mounted:e=>{const{proxy:i,icons:o}=t;k(e,o.airplay),i(e,"click",()=>t.airplay())}})}function Sn(n){return t=>({...n,tooltip:t.i18n.get("Fullscreen"),mounted:e=>{const{proxy:i,icons:o,i18n:r}=t,a=k(e,o.fullscreenOn),s=k(e,o.fullscreenOff);u(s,"display","none"),i(e,"click",()=>{t.fullscreen=!t.fullscreen}),t.on("fullscreen",c=>{c?(rt(e,r.get("Exit Fullscreen")),u(a,"display","none"),u(s,"display","inline-flex")):(rt(e,r.get("Fullscreen")),u(a,"display","inline-flex"),u(s,"display","none"))})}})}function zn(n){return t=>({...n,tooltip:t.i18n.get("Web Fullscreen"),mounted:e=>{const{proxy:i,icons:o,i18n:r}=t,a=k(e,o.fullscreenWebOn),s=k(e,o.fullscreenWebOff);u(s,"display","none"),i(e,"click",()=>{t.fullscreenWeb=!t.fullscreenWeb}),t.on("fullscreenWeb",c=>{c?(rt(e,r.get("Exit Web Fullscreen")),u(a,"display","none"),u(s,"display","inline-flex")):(rt(e,r.get("Web Fullscreen")),u(a,"display","inline-flex"),u(s,"display","none"))})}})}function _n(n){return t=>({...n,tooltip:t.i18n.get("PIP Mode"),mounted:e=>{const{proxy:i,icons:o,i18n:r}=t;k(e,o.pip),i(e,"click",()=>{t.pip=!t.pip}),t.on("pip",a=>{rt(e,r.get(a?"Exit PIP Mode":"PIP Mode"))})}})}function Ln(n){return t=>({...n,mounted:e=>{const{proxy:i,icons:o,i18n:r}=t,a=k(e,o.play),s=k(e,o.pause);rt(a,r.get("Play")),rt(s,r.get("Pause")),i(a,"click",()=>{t.play()}),i(s,"click",()=>{t.pause()});function c(){u(a,"display","flex"),u(s,"display","none")}function l(){u(a,"display","none"),u(s,"display","flex")}t.playing?l():c(),t.on("video:playing",()=>{l()}),t.on("video:pause",()=>{c()})}})}function bt(n,t){const{$progress:e}=n.template,{left:i}=tt(e),o=O?t.touches[0].clientX:t.clientX,r=X(o-i,0,e.clientWidth),a=r/e.clientWidth*n.duration,s=et(a),c=X(r/e.clientWidth,0,1);return{second:a,time:s,width:r,percentage:c}}function Ne(n,t){if(n.isRotate){const e=t.touches[0].clientY/n.height,i=e*n.duration;n.emit("setBar","played",e,t),n.seek=i}else{const{second:e,percentage:i}=bt(n,t);n.emit("setBar","played",i,t),n.seek=e}}function In(n){return t=>{const{icons:e,option:i,proxy:o}=t,{$player:r,$progress:a}=t.template;return{...n,html:`
                <div class="art-control-progress-inner">
                    <div class="art-progress-hover"></div>
                    <div class="art-progress-loaded"></div>
                    <div class="art-progress-played"></div>
                    <div class="art-progress-highlight"></div>
                    <div class="art-progress-indicator"></div>
                    <div class="art-progress-tip">00:00</div>
                </div>
            `,mounted:s=>{let c=null,l=!1;const d=q(".art-progress-hover",s),p=q(".art-progress-loaded",s),h=q(".art-progress-played",s),g=q(".art-progress-highlight",s),f=q(".art-progress-indicator",s),b=q(".art-progress-tip",s);e.indicator?k(f,e.indicator):u(f,"backgroundColor","var(--art-theme)");function C(y){const{width:S}=bt(t,y),{text:A}=y.target.dataset;b.textContent=A;const _=b.clientWidth;S<=_/2?u(b,"left",0):S>s.clientWidth-_/2?u(b,"left",`${s.clientWidth-_}px`):u(b,"left",`${S-_/2}px`)}function v(y,S){const{width:A,time:_}=S||bt(t,y);b.textContent=_||"00:00";const I=b.clientWidth;A<=I/2?u(b,"left",0):A>s.clientWidth-I/2?u(b,"left",`${s.clientWidth-I}px`):u(b,"left",`${A-I/2}px`)}function w(){g.textContent="";for(let y=0;y<i.highlight.length;y++){const S=i.highlight[y],A=X(S.time,0,t.duration)/t.duration*100,_=`<span data-text="${S.text}" data-time="${S.time}" style="left: ${A}%"></span>`;k(g,_)}}function x(y,S,A){const _=y==="played"&&A&&O;if(y==="loaded"&&u(p,"width",`${S*100}%`),y==="hover"&&(u(d,"width",`${S*100}%`),dt(A,g)?C(A):v(A),S===0?W(r,"art-progress-hover"):E(r,"art-progress-hover")),y==="played"&&(u(h,"width",`${S*100}%`),u(f,"left",`${S*100}%`)),_){E(r,"art-progress-hover");const I=s.clientWidth*S,F=et(S*t.duration);v(A,{width:I,time:F}),clearTimeout(c),c=setTimeout(()=>{W(r,"art-progress-hover")},500)}}t.on("setBar",x),t.on("video:loadedmetadata",w),t.constructor.USE_RAF?t.on("raf",()=>{t.emit("setBar","played",t.played),t.emit("setBar","loaded",t.loaded)}):(t.on("video:timeupdate",()=>{t.emit("setBar","played",t.played)}),t.on("video:progress",()=>{t.emit("setBar","loaded",t.loaded)}),t.on("video:ended",()=>{t.emit("setBar","played",1)})),t.emit("setBar","loaded",t.loaded||0),O||(o(a,"click",y=>{y.target!==f&&Ne(t,y)}),o(a,"mousemove",y=>{const{percentage:S}=bt(t,y);t.emit("setBar","hover",S,y)}),o(a,"mouseleave",y=>{t.emit("setBar","hover",0,y)}),o(a,"mousedown",y=>{l=y.button===0}),t.on("document:mousemove",y=>{if(l){const{second:S,percentage:A}=bt(t,y);t.emit("setBar","played",A,y),t.seek=S}}),t.on("document:mouseup",()=>{l&&(l=!1)}))}}}}function Pn(n){return t=>({...n,tooltip:t.i18n.get("Screenshot"),mounted:e=>{const{proxy:i,icons:o}=t;k(e,o.screenshot),i(e,"click",()=>{t.screenshot()})}})}function Rn(n){return t=>({...n,tooltip:t.i18n.get("Show Setting"),mounted:e=>{const{proxy:i,icons:o,i18n:r}=t;k(e,o.setting),i(e,"click",()=>{t.setting.toggle(),t.setting.resize()}),t.on("setting",a=>{rt(e,r.get(a?"Hide Setting":"Show Setting"))})}})}function An(n){return t=>({...n,style:O?{fontSize:"12px",padding:"0 5px"}:{cursor:"auto",padding:"0 10px"},mounted:e=>{function i(){const r=`${et(t.currentTime)} / ${et(t.duration)}`;r!==e.textContent&&(e.textContent=r)}i();const o=["video:loadedmetadata","video:timeupdate","video:progress"];for(let r=0;r<o.length;r++)t.on(o[r],i)}})}function On(n){return t=>({...n,mounted:e=>{const{proxy:i,icons:o}=t,r=k(e,o.volume),a=k(e,o.volumeClose),s=k(e,'<div class="art-volume-panel"></div>'),c=k(s,'<div class="art-volume-inner"></div>'),l=k(c,'<div class="art-volume-val"></div>'),d=k(c,'<div class="art-volume-slider"></div>'),p=k(d,'<div class="art-volume-handle"></div>'),h=k(p,'<div class="art-volume-loaded"></div>'),g=k(d,'<div class="art-volume-indicator"></div>');function f(C){const{top:v,height:w}=tt(d);return 1-(C.clientY-v)/w}function b(){if(t.muted||t.volume===0)u(r,"display","none"),u(a,"display","flex"),u(g,"top","100%"),u(h,"top","100%"),l.textContent=0;else{const C=t.volume*100;u(r,"display","flex"),u(a,"display","none"),u(g,"top",`${100-C}%`),u(h,"top",`${100-C}%`),l.textContent=Math.floor(C)}}if(b(),t.on("video:volumechange",b),i(r,"click",()=>{t.muted=!0}),i(a,"click",()=>{t.muted=!1}),O)u(s,"display","none");else{let C=!1;i(d,"mousedown",v=>{C=v.button===0,t.volume=f(v)}),t.on("document:mousemove",v=>{C&&(t.muted=!1,t.volume=f(v))}),t.on("document:mouseup",()=>{C&&(C=!1)})}}})}class Fn extends lt{constructor(t){super(t),this.isHover=!1,this.name="control",this.timer=Date.now();const{constructor:e}=t,{$player:i,$bottom:o}=this.art.template;t.on("mousemove",()=>{O||(this.show=!0)}),t.on("click",()=>{O?this.toggle():this.show=!0}),t.on("document:mousemove",r=>{this.isHover=dt(r,o)}),t.on("video:timeupdate",()=>{!t.setting.show&&!this.isHover&&!t.isInput&&t.playing&&this.show&&Date.now()-this.timer>=e.CONTROL_HIDE_TIME&&(this.show=!1)}),t.on("control",r=>{r?(W(i,"art-hide-cursor"),E(i,"art-hover"),this.timer=Date.now()):(E(i,"art-hide-cursor"),W(i,"art-hover"))}),this.init()}init(){const{option:t}=this.art;t.isLive||this.add(In({name:"progress",position:"top",index:10})),this.add({name:"thumbnails",position:"top",index:20}),this.add(Ln({name:"playAndPause",position:"left",index:10})),this.add(On({name:"volume",position:"left",index:20})),t.isLive||this.add(An({name:"time",position:"left",index:30})),t.quality.length&&ft().then(()=>{this.art.quality=t.quality}),t.screenshot&&!O&&this.add(Pn({name:"screenshot",position:"right",index:20})),t.setting&&this.add(Rn({name:"setting",position:"right",index:30})),t.pip&&this.add(_n({name:"pip",position:"right",index:40})),t.airplay&&window.WebKitPlaybackTargetAvailabilityEvent&&this.add(Mn({name:"airplay",position:"right",index:50})),t.fullscreenWeb&&this.add(zn({name:"fullscreenWeb",position:"right",index:60})),t.fullscreen&&this.add(Sn({name:"fullscreen",position:"right",index:70}));for(let e=0;e<t.controls.length;e++)this.add(t.controls[e])}add(t){const e=typeof t=="function"?t(this.art):t,{$progress:i,$controlsLeft:o,$controlsRight:r}=this.art.template;switch(e.position){case"top":this.$parent=i;break;case"left":this.$parent=o;break;case"right":this.$parent=r;break;default:Z(!1,"Control option.position must one of 'top', 'left', 'right'");break}super.add(e)}check(t){if(t){t.$control_value.innerHTML=t.html;for(let e=0;e<t.$control_option.length;e++){const i=t.$control_option[e];i.default=i===t,i.default&&Q(i.$control_item,"art-current")}}}selector(t,e,i){const{proxy:o}=this.art.events;E(e,"art-control-selector");const r=N("div");E(r,"art-selector-value"),k(r,t.html),e.textContent="",k(e,r);const a=N("div");E(a,"art-selector-list"),k(e,a);for(let c=0;c<t.selector.length;c++){const l=t.selector[c],d=N("div");E(d,"art-selector-item"),l.default&&E(d,"art-current"),d.dataset.index=c,d.dataset.value=l.value,d.innerHTML=l.html,k(a,d),$(l,"$control_option",{get:()=>t.selector}),$(l,"$control_item",{get:()=>d}),$(l,"$control_value",{get:()=>r})}const s=o(a,"click",async c=>{const l=ee(c),d=t.selector.find(p=>p.$control_item===l.find(h=>p.$control_item===h));this.check(d),t.onSelect&&(r.innerHTML=await t.onSelect.call(this.art,d,d.$control_item,c))});i.push(s)}}function Vn(n,t){const{constructor:e,template:{$player:i,$video:o}}=n;function r(s){dt(s,i)?(n.isInput=s.target.tagName==="INPUT",n.isFocus=!0,n.emit("focus",s)):(n.isInput=!1,n.isFocus=!1,n.emit("blur",s))}n.on("document:click",r),n.on("document:contextmenu",r);let a=[];t.proxy(o,"click",s=>{const c=Date.now();a.push(c);const{MOBILE_CLICK_PLAY:l,DBCLICK_TIME:d,MOBILE_DBCLICK_PLAY:p,DBCLICK_FULLSCREEN:h}=e,g=a.filter(f=>c-f<=d);switch(g.length){case 1:n.emit("click",s),O?!n.isLock&&l&&n.toggle():n.toggle(),a=g;break;case 2:n.emit("dblclick",s),O?!n.isLock&&p&&n.toggle():h&&(n.fullscreen=!n.fullscreen),a=[];break;default:a=[]}})}function Dn(n,t){return Math.atan2(t,n)*180/Math.PI}function Hn(n,t,e,i){const o=t-i,r=e-n;let a=0;if(Math.abs(r)<2&&Math.abs(o)<2)return a;const s=Dn(r,o);return s>=-45&&s<45?a=4:s>=45&&s<135?a=1:s>=-135&&s<-45?a=2:(s>=135&&s<=180||s>=-180&&s<-135)&&(a=3),a}function Nn(n,t){if(O&&!n.option.isLive){const{$video:e,$progress:i}=n.template;let o=null,r=!1,a=0,s=0,c=0;const l=h=>{if(h.touches.length===1&&!n.isLock){o===i&&Ne(n,h),r=!0;const{pageX:g,pageY:f}=h.touches[0];a=g,s=f,c=n.currentTime}},d=h=>{if(h.touches.length===1&&r&&n.duration){const{pageX:g,pageY:f}=h.touches[0],b=Hn(a,s,g,f),C=[3,4].includes(b),v=[1,2].includes(b);if(C&&!n.isRotate||v&&n.isRotate){const x=X((g-a)/n.width,-1,1),y=X((f-s)/n.height,-1,1),S=n.isRotate?y:x,A=o===e?n.constructor.TOUCH_MOVE_RATIO:1,_=X(c+n.duration*S*A,0,n.duration);n.seek=_,n.emit("setBar","played",X(_/n.duration,0,1),h),n.notice.show=`${et(_)} / ${et(n.duration)}`}}},p=()=>{r&&(a=0,s=0,c=0,r=!1,o=null)};n.option.gesture&&(t.proxy(e,"touchstart",h=>{o=e,l(h)}),t.proxy(e,"touchmove",d)),t.proxy(i,"touchstart",h=>{o=i,l(h)}),t.proxy(i,"touchmove",d),n.on("document:touchend",p)}}function Bn(n,t){const e=["click","mouseup","keydown","touchend","touchmove","mousemove","pointerup","contextmenu","pointermove","visibilitychange","webkitfullscreenchange"],i=["resize","scroll","orientationchange"],o=[];function r(a={}){for(let c=0;c<o.length;c++)t.remove(o[c]);o.length=0;const{$player:s}=n.template;e.forEach(c=>{const l=a.document||s.ownerDocument||document,d=t.proxy(l,c,p=>{n.emit(`document:${c}`,p)});o.push(d)}),i.forEach(c=>{var p;const l=a.window||((p=s.ownerDocument)==null?void 0:p.defaultView)||window,d=t.proxy(l,c,h=>{n.emit(`window:${c}`,h)});o.push(d)})}r(),t.bindGlobalEvents=r}function Wn(n,t){const{$player:e}=n.template;t.hover(e,i=>{E(e,"art-hover"),n.emit("hover",!0,i)},i=>{W(e,"art-hover"),n.emit("hover",!1,i)})}function Yn(n,t){const{$player:e}=n.template;t.proxy(e,"mousemove",i=>{n.emit("mousemove",i)})}function jn(n,t){const{option:e,constructor:i}=n;n.on("resize",()=>{const{aspectRatio:r,notice:a}=n;n.state==="standard"&&e.autoSize&&n.autoSize(),n.aspectRatio=r,a.show=""});const o=Ve(()=>n.emit("resize"),i.RESIZE_TIME);n.on("window:orientationchange",()=>o()),n.on("window:resize",()=>o()),screen&&screen.orientation&&screen.orientation.onchange&&t.proxy(screen.orientation,"change",()=>o())}function qn(n){if(n.constructor.USE_RAF){let t=null;(function e(){n.playing&&n.emit("raf"),n.isDestroy||(t=requestAnimationFrame(e))})(),n.on("destroy",()=>{cancelAnimationFrame(t)})}}function Xn(n){const{option:t,constructor:e,template:{$container:i}}=n,o=De(()=>{n.emit("view",Qt(i,e.SCROLL_GAP))},e.SCROLL_TIME);n.on("window:scroll",()=>o()),n.on("view",r=>{t.autoMini&&(n.mini=!r)})}class Un{constructor(t){this.destroyEvents=new Set,this.proxy=this.proxy.bind(this),this.hover=this.hover.bind(this),Vn(t,this),Wn(t,this),Yn(t,this),jn(t,this),Nn(t,this),Xn(t),Bn(t,this),qn(t)}proxy(t,e,i,o={}){if(Array.isArray(e))return e.map(a=>this.proxy(t,a,i,o));t.addEventListener(e,i,o);const r=()=>t.removeEventListener(e,i,o);return this.destroyEvents.add(r),r}hover(t,e,i){e&&this.proxy(t,"mouseenter",e),i&&this.proxy(t,"mouseleave",i)}remove(t){if(this.destroyEvents.has(t))try{t()}catch(e){console.warn("Failed to remove event listener:",e)}finally{this.destroyEvents.delete(t)}}destroy(){for(const t of this.destroyEvents)try{t()}catch(e){console.warn("Failed to destroy event listener:",e)}this.destroyEvents.clear()}}class Gn{constructor(t){this.art=t,this.keys={},O||this.init()}init(){const{constructor:t}=this.art;this.art.option.hotkey&&(this.add("Escape",()=>{this.art.fullscreenWeb&&(this.art.fullscreenWeb=!1)}),this.add("Space",()=>{this.art.toggle()}),this.add("ArrowLeft",()=>{this.art.backward=t.SEEK_STEP}),this.add("ArrowUp",()=>{this.art.volume+=t.VOLUME_STEP}),this.add("ArrowRight",()=>{this.art.forward=t.SEEK_STEP}),this.add("ArrowDown",()=>{this.art.volume-=t.VOLUME_STEP})),this.art.on("document:keydown",e=>{if(this.art.isFocus){const i=document.activeElement.tagName.toUpperCase(),o=document.activeElement.getAttribute("contenteditable");if(i!=="INPUT"&&i!=="TEXTAREA"&&o!==""&&o!=="true"&&!e.altKey&&!e.ctrlKey&&!e.metaKey&&!e.shiftKey){const r=this.keys[e.code];if(r){e.preventDefault();for(let a=0;a<r.length;a++)r[a].call(this.art,e);this.art.emit("hotkey",e)}}}this.art.emit("keydown",e)})}add(t,e){return this.keys[t]?this.keys[t].includes(e)||this.keys[t].push(e):this.keys[t]=[e],this}remove(t,e){if(this.keys[t]){const i=this.keys[t].indexOf(e);i!==-1&&this.keys[t].splice(i,1),this.keys[t].length===0&&delete this.keys[t]}return this}}const Be={"Video Info":"统计信息",Close:"关闭","Video Load Failed":"加载失败",Volume:"音量",Play:"播放",Pause:"暂停",Rate:"速度",Mute:"静音","Video Flip":"画面翻转",Horizontal:"水平",Vertical:"垂直",Reconnect:"重新连接","Show Setting":"显示设置","Hide Setting":"隐藏设置",Screenshot:"截图","Play Speed":"播放速度","Aspect Ratio":"画面比例",Default:"默认",Normal:"正常",Open:"打开","Switch Video":"切换","Switch Subtitle":"切换字幕",Fullscreen:"全屏","Exit Fullscreen":"退出全屏","Web Fullscreen":"网页全屏","Exit Web Fullscreen":"退出网页全屏","Mini Player":"迷你播放器","PIP Mode":"开启画中画","Exit PIP Mode":"退出画中画","PIP Not Supported":"不支持画中画","Fullscreen Not Supported":"不支持全屏","Subtitle Offset":"字幕偏移","Last Seen":"上次看到","Jump Play":"跳转播放",AirPlay:"隔空播放","AirPlay Not Available":"隔空播放不可用"};typeof window<"u"&&(window["artplayer-i18n-zh-cn"]=Be);class Zn{constructor(t){this.art=t,this.languages={"zh-cn":Be},this.language={},this.update(t.option.i18n)}init(){const t=this.art.option.lang.toLowerCase();this.language=this.languages[t]||{}}get(t){return this.language[t]||t}update(t){this.languages=Ht(this.languages,t),this.init()}}const Kn=`<svg width="18px" height="18px" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
    <g>
        <path d="M16,1 L2,1 C1.447,1 1,1.447 1,2 L1,12 C1,12.553 1.447,13 2,13 L5,13 L5,11 L3,11 L3,3 L15,3 L15,11 L13,11 L13,13 L16,13 C16.553,13 17,12.553 17,12 L17,2 C17,1.447 16.553,1 16,1 L16,1 Z"></path>
        <polygon points="4 17 14 17 9 11"></polygon>
    </g>
</svg>
`,Jn=`<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" version="1.1" viewBox="0 0 32 32">
    <path d="M 19.41,20.09 14.83,15.5 19.41,10.91 18,9.5 l -6,6 6,6 z" />
</svg>`,Qn=`<svg xmlns="http://www.w3.org/2000/svg" height="32" width="32" version="1.1" viewBox="0 0 32 32">
    <path d="m 12.59,20.34 4.58,-4.59 -4.58,-4.59 1.41,-1.41 6,6 -6,6 z" />
</svg>`,ti='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88" preserveAspectRatio="xMidYMid meet" style="width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px);"><defs><clipPath id="__lottie_element_216"><rect width="88" height="88" x="0" y="0"></rect></clipPath></defs><g clip-path="url(#__lottie_element_216)"><g transform="matrix(1,0,0,1,44,44)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill-opacity="1" d=" M12.437999725341797,-12.70199966430664 C12.437999725341797,-12.70199966430664 9.618000030517578,-9.881999969482422 9.618000030517578,-9.881999969482422 C8.82800006866455,-9.092000007629395 8.82800006866455,-7.831999778747559 9.618000030517578,-7.052000045776367 C9.618000030517578,-7.052000045776367 16.687999725341797,0.017999999225139618 16.687999725341797,0.017999999225139618 C16.687999725341797,0.017999999225139618 9.618000030517578,7.0879998207092285 9.618000030517578,7.0879998207092285 C8.82800006866455,7.877999782562256 8.82800006866455,9.137999534606934 9.618000030517578,9.918000221252441 C9.618000030517578,9.918000221252441 12.437999725341797,12.748000144958496 12.437999725341797,12.748000144958496 C13.227999687194824,13.527999877929688 14.48799991607666,13.527999877929688 15.267999649047852,12.748000144958496 C15.267999649047852,12.748000144958496 26.58799934387207,1.437999963760376 26.58799934387207,1.437999963760376 C27.368000030517578,0.6579999923706055 27.368000030517578,-0.6119999885559082 26.58799934387207,-1.3919999599456787 C26.58799934387207,-1.3919999599456787 15.267999649047852,-12.70199966430664 15.267999649047852,-12.70199966430664 C14.48799991607666,-13.491999626159668 13.227999687194824,-13.491999626159668 12.437999725341797,-12.70199966430664z M-12.442000389099121,-12.70199966430664 C-13.182000160217285,-13.442000389099121 -14.362000465393066,-13.482000350952148 -15.142000198364258,-12.821999549865723 C-15.142000198364258,-12.821999549865723 -15.272000312805176,-12.70199966430664 -15.272000312805176,-12.70199966430664 C-15.272000312805176,-12.70199966430664 -26.582000732421875,-1.3919999599456787 -26.582000732421875,-1.3919999599456787 C-27.32200050354004,-0.6520000100135803 -27.36199951171875,0.5180000066757202 -26.70199966430664,1.3079999685287476 C-26.70199966430664,1.3079999685287476 -26.582000732421875,1.437999963760376 -26.582000732421875,1.437999963760376 C-26.582000732421875,1.437999963760376 -15.272000312805176,12.748000144958496 -15.272000312805176,12.748000144958496 C-14.531999588012695,13.48799991607666 -13.362000465393066,13.527999877929688 -12.571999549865723,12.868000030517578 C-12.571999549865723,12.868000030517578 -12.442000389099121,12.748000144958496 -12.442000389099121,12.748000144958496 C-12.442000389099121,12.748000144958496 -9.612000465393066,9.918000221252441 -9.612000465393066,9.918000221252441 C-8.871999740600586,9.178000450134277 -8.831999778747559,8.008000373840332 -9.501999855041504,7.2179999351501465 C-9.501999855041504,7.2179999351501465 -9.612000465393066,7.0879998207092285 -9.612000465393066,7.0879998207092285 C-9.612000465393066,7.0879998207092285 -16.68199920654297,0.017999999225139618 -16.68199920654297,0.017999999225139618 C-16.68199920654297,0.017999999225139618 -9.612000465393066,-7.052000045776367 -9.612000465393066,-7.052000045776367 C-8.871999740600586,-7.791999816894531 -8.831999778747559,-8.961999893188477 -9.501999855041504,-9.751999855041504 C-9.501999855041504,-9.751999855041504 -9.612000465393066,-9.881999969482422 -9.612000465393066,-9.881999969482422 C-9.612000465393066,-9.881999969482422 -12.442000389099121,-12.70199966430664 -12.442000389099121,-12.70199966430664z M28,-28 C32.41999816894531,-28 36,-24.420000076293945 36,-20 C36,-20 36,20 36,20 C36,24.420000076293945 32.41999816894531,28 28,28 C28,28 -28,28 -28,28 C-32.41999816894531,28 -36,24.420000076293945 -36,20 C-36,20 -36,-20 -36,-20 C-36,-24.420000076293945 -32.41999816894531,-28 -28,-28 C-28,-28 28,-28 28,-28z" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#a8a6a4;"></path></g></g></g></svg>',ei=`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24" style="width: 100%; height: 100%;">
<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
</svg>`,ni=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg t="1655876154826" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="22" height="22">
<path d="M571.733333 512l268.8-268.8c17.066667-17.066667 17.066667-42.666667 0-59.733333-17.066667-17.066667-42.666667-17.066667-59.733333 0L512 452.266667 243.2 183.466667c-17.066667-17.066667-42.666667-17.066667-59.733333 0-17.066667 17.066667-17.066667 42.666667 0 59.733333L452.266667 512 183.466667 780.8c-17.066667 17.066667-17.066667 42.666667 0 59.733333 8.533333 8.533333 19.2 12.8 29.866666 12.8s21.333333-4.266667 29.866667-12.8L512 571.733333l268.8 268.8c8.533333 8.533333 19.2 12.8 29.866667 12.8s21.333333-4.266667 29.866666-12.8c17.066667-17.066667 17.066667-42.666667 0-59.733333L571.733333 512z" p-id="2131">
</path>
</svg>`,ii='<svg height="24" viewBox="0 0 24 24" width="24"><path d="M15,17h6v1h-6V17z M11,17H3v1h8v2h1v-2v-1v-2h-1V17z M14,8h1V6V5V3h-1v2H3v1h11V8z            M18,5v1h3V5H18z M6,14h1v-2v-1V9H6v2H3v1 h3V14z M10,12h11v-1H10V12z" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#a8a6a4;"></path></svg>',oi=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg t="1652850026663" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2749" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50">
<path d="M593.8176 168.5504l356.00384 595.21024c26.15296 43.74528 10.73152 99.7376-34.44736 125.05088-14.39744 8.06912-30.72 12.30848-47.37024 12.30848H155.97568C103.75168 901.12 61.44 860.16 61.44 809.61536c0-16.09728 4.38272-31.92832 12.71808-45.8752L430.16192 168.5504c26.17344-43.7248 84.00896-58.65472 129.20832-33.34144a93.0816 93.0816 0 0 1 34.44736 33.34144zM512 819.2a61.44 61.44 0 1 0 0-122.88 61.44 61.44 0 0 0 0 122.88z m0-512a72.31488 72.31488 0 0 0-71.76192 81.3056l25.72288 205.7216a46.40768 46.40768 0 0 0 92.07808 0l25.72288-205.74208A72.31488 72.31488 0 0 0 512 307.2z" p-id="2750">
</path>
</svg>`,ri=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg t="1652445277062" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24">
<path d="M554.666667 810.666667v85.333333h-85.333334v-85.333333h85.333334zM170.666667 178.005333a42.666667 42.666667 0 0 1 34.986666 18.218667l203.904 291.328a42.666667 42.666667 0 0 1 0 48.896l-203.946666 291.328A42.666667 42.666667 0 0 1 128 803.328V220.672a42.666667 42.666667 0 0 1 42.666667-42.666667z m682.666666 0a42.666667 42.666667 0 0 1 42.368 37.717334l0.298667 4.949333v582.656a42.666667 42.666667 0 0 1-74.24 28.629333l-3.413333-4.181333-203.904-291.328a42.666667 42.666667 0 0 1-3.029334-43.861333l3.029334-5.034667 203.946666-291.328A42.666667 42.666667 0 0 1 853.333333 178.005333zM554.666667 640v85.333333h-85.333334v-85.333333h85.333334zM196.266667 319.104V716.8L335.957333 512 196.309333 319.104zM554.666667 469.333333v85.333334h-85.333334v-85.333334h85.333334z m0-170.666666v85.333333h-85.333334V298.666667h85.333334z m0-170.666667v85.333333h-85.333334V128h85.333334z">
</path>
</svg>
`,ai=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg class="icon" width="22" height="22" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
<path d="M768 298.666667h170.666667v85.333333h-256V128h85.333333v170.666667zM341.333333 384H85.333333V298.666667h170.666667V128h85.333333v256z m426.666667 341.333333v170.666667h-85.333333v-256h256v85.333333h-170.666667zM341.333333 640v256H256v-170.666667H85.333333v-85.333333h256z" />
</svg>
`,si=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg class="icon" width="22" height="22" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
<path d="M625.777778 256h142.222222V398.222222h113.777778V142.222222H625.777778v113.777778zM256 398.222222V256H398.222222v-113.777778H142.222222V398.222222h113.777778zM768 625.777778v142.222222H625.777778v113.777778h256V625.777778h-113.777778zM398.222222 768H256V625.777778h-113.777778v256H398.222222v-113.777778z" />
</svg>
`,li=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg class="icon" width="18" height="18" viewBox="0 0 1152 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
<path d="M1075.2 0H76.8A76.8 76.8 0 0 0 0 76.8v870.4A76.8 76.8 0 0 0 76.8 1024h998.4a76.8 76.8 0 0 0 76.8-76.8V76.8A76.8 76.8 0 0 0 1075.2 0zM1024 128v768H128V128h896zM896 512a64 64 0 0 1 7.488 127.552L896 640h-128v128a64 64 0 0 1-56.512 63.552L704 832a64 64 0 0 1-63.552-56.512L640 768V582.592c0-34.496 25.024-66.112 61.632-70.208L709.632 512H896zM256 512a64 64 0 0 1-7.488-127.552L256 384h128V256a64 64 0 0 1 56.512-63.552L448 192a64 64 0 0 1 63.552 56.512L512 256v185.408c0 34.432-25.024 66.112-61.632 70.144L442.368 512H256z" />
</svg>
`,ci=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg class="icon" width="18" height="18" viewBox="0 0 1152 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
<path d="M1075.2 0H76.8A76.8 76.8 0 0 0 0 76.8v870.4A76.8 76.8 0 0 0 76.8 1024h998.4a76.8 76.8 0 0 0 76.8-76.8V76.8A76.8 76.8 0 0 0 1075.2 0zM1024 128v768H128V128h896zM448 192a64 64 0 0 1 7.488 127.552L448 320H320v128a64 64 0 0 1-56.512 63.552L256 512a64 64 0 0 1-63.552-56.512L192 448V262.592c0-34.432 25.024-66.112 61.632-70.144L261.632 192H448zM704 832a64 64 0 0 1-7.488-127.552L704 704h128V576a64 64 0 0 1 56.512-63.552L896 512a64 64 0 0 1 63.552 56.512L960 576v185.408c0 34.496-25.024 66.112-61.632 70.208l-8 0.384H704z" />
</svg>
`,di=`<svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-default">
  <rect x="0" y="0" width="100" height="100" fill="none" class="bk"/>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(0 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-1s" repeatCount="indefinite"/>
  </rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(30 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"/>
  </rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(60 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"/>
  </rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(90 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.75s" repeatCount="indefinite"/></rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(120 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"/>
  </rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(150 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"/>
  </rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(180 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.5s" repeatCount="indefinite"/></rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(210 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"/>
  </rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(240 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"/>
  </rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(270 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.25s" repeatCount="indefinite"/></rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(300 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"/>
  </rect>
  <rect x="47" y="40" width="6" height="20" rx="5" ry="5" transform="rotate(330 50 50) translate(0 -30)">
    <animate attributeName="opacity" from="1" to="0" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"/>
  </rect>
</svg>`,pi=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg t="1650612139149" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20">
<path d="M298.666667 426.666667V341.333333a213.333333 213.333333 0 1 1 426.666666 0v85.333334h42.666667a85.333333 85.333333 0 0 1 85.333333 85.333333v256a85.333333 85.333333 0 0 1-85.333333 85.333333H256a85.333333 85.333333 0 0 1-85.333333-85.333333v-256a85.333333 85.333333 0 0 1 85.333333-85.333333h42.666667z m213.333333-213.333334a128 128 0 0 0-128 128v85.333334h256V341.333333a128 128 0 0 0-128-128z"></path>
</svg>
`,ui=`<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22">
    <path d="M7 3a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2zM15 3a2 2 0 0 0-2 2v12a2 2 0 1 0 4 0V5a2 2 0 0 0-2-2z"></path>
</svg>`,hi=`<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="22" height="22">
<path d="M844.8 219.648h-665.6c-6.144 0-10.24 4.608-10.24 10.752v563.2c0 5.632 4.096 10.24 10.24 10.24h256v92.16h-256a102.4 102.4 0 0 1-102.4-102.4v-563.2c0-56.832 45.568-102.4 102.4-102.4h665.6a102.4 102.4 0 0 1 102.4 102.4v204.8h-92.16v-204.8c0-6.144-4.608-10.752-10.24-10.752zM614.4 588.8c-28.672 0-51.2 22.528-51.2 51.2v204.8c0 28.16 22.528 51.2 51.2 51.2h281.6c28.16 0 51.2-23.04 51.2-51.2v-204.8c0-28.672-23.04-51.2-51.2-51.2H614.4z"></path>
</svg>`,fi=`<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22">
  <path d="M17.982 9.275L8.06 3.27A2.013 2.013 0 0 0 5 4.994v12.011a2.017 2.017 0 0 0 3.06 1.725l9.922-6.005a2.017 2.017 0 0 0 0-3.45z"></path>
</svg>`,mi='<svg height="24" viewBox="0 0 24 24" width="24"><path d="M10,8v8l6-4L10,8L10,8z M6.3,5L5.7,4.2C7.2,3,9,2.2,11,2l0.1,1C9.3,3.2,7.7,3.9,6.3,5z            M5,6.3L4.2,5.7C3,7.2,2.2,9,2,11 l1,.1C3.2,9.3,3.9,7.7,5,6.3z            M5,17.7c-1.1-1.4-1.8-3.1-2-4.8L2,13c0.2,2,1,3.8,2.2,5.4L5,17.7z            M11.1,21c-1.8-0.2-3.4-0.9-4.8-2 l-0.6,.8C7.2,21,9,21.8,11,22L11.1,21z            M22,12c0-5.2-3.9-9.4-9-10l-0.1,1c4.6,.5,8.1,4.3,8.1,9s-3.5,8.5-8.1,9l0.1,1 C18.2,21.5,22,17.2,22,12z" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#a8a6a4;"></path></svg>',gi=`<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 50 50">
	<path d="M 19.402344 6 C 17.019531 6 14.96875 7.679688 14.5 10.011719 L 14.097656 12 L 9 12 C 6.238281 12 4 14.238281 4 17 L 4 38 C 4 40.761719 6.238281 43 9 43 L 41 43 C 43.761719 43 46 40.761719 46 38 L 46 17 C 46 14.238281 43.761719 12 41 12 L 35.902344 12 L 35.5 10.011719 C 35.03125 7.679688 32.980469 6 30.597656 6 Z M 25 17 C 30.519531 17 35 21.480469 35 27 C 35 32.519531 30.519531 37 25 37 C 19.480469 37 15 32.519531 15 27 C 15 21.480469 19.480469 17 25 17 Z M 25 19 C 20.589844 19 17 22.589844 17 27 C 17 31.410156 20.589844 35 25 35 C 29.410156 35 33 31.410156 33 27 C 33 22.589844 29.410156 19 25 19 Z "/>
</svg>
`,vi=`<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22">
    <circle cx="11" cy="11" r="2"></circle>
    <path d="M19.164 8.861L17.6 8.6a6.978 6.978 0 0 0-1.186-2.099l.574-1.533a1 1 0 0 0-.436-1.217l-1.997-1.153a1.001 1.001 0 0 0-1.272.23l-1.008 1.225a7.04 7.04 0 0 0-2.55.001L8.716 2.829a1 1 0 0 0-1.272-.23L5.447 3.751a1 1 0 0 0-.436 1.217l.574 1.533A6.997 6.997 0 0 0 4.4 8.6l-1.564.261A.999.999 0 0 0 2 9.847v2.306c0 .489.353.906.836.986l1.613.269a7 7 0 0 0 1.228 2.075l-.558 1.487a1 1 0 0 0 .436 1.217l1.997 1.153c.423.244.961.147 1.272-.23l1.04-1.263a7.089 7.089 0 0 0 2.272 0l1.04 1.263a1 1 0 0 0 1.272.23l1.997-1.153a1 1 0 0 0 .436-1.217l-.557-1.487c.521-.61.94-1.31 1.228-2.075l1.613-.269a.999.999 0 0 0 .835-.986V9.847a.999.999 0 0 0-.836-.986zM11 15a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"></path>
</svg>`,yi=`<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24">
<path d="M9.5 9.325v5.35q0 .575.525.875t1.025-.05l4.15-2.65q.475-.3.475-.85t-.475-.85L11.05 8.5q-.5-.35-1.025-.05t-.525.875ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Z"/>
</svg>
`,bi=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg class="icon" width="26" height="26" viewBox="0 0 1740 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path d="M511.8976 1024h670.5152c282.4192-0.4096 511.1808-229.4784 511.1808-511.8976 0-282.4192-228.7616-511.488-511.1808-511.8976H511.8976C229.4784 0.6144 0.7168 229.6832 0.7168 512.1024c0 282.4192 228.7616 511.488 511.1808 511.8976zM511.3344 48.64A464.5888 464.5888 0 1 1 48.0256 513.024 463.872 463.872 0 0 1 511.3344 48.4352V48.64z" />
</svg>
`,wi=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg class="icon" width="26" height="26" viewBox="0 0 1664 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <path fill="#648FFC" d="M1152 0H512a512 512 0 0 0 0 1024h640a512 512 0 0 0 0-1024z m0 960a448 448 0 1 1 448-448 448 448 0 0 1-448 448z"  />
</svg>`,xi=`<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg t="1650612464266" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="20" height="20"><path d="M666.752 194.517333L617.386667 268.629333A128 128 0 0 0 384 341.333333l0.042667 85.333334h384a85.333333 85.333333 0 0 1 85.333333 85.333333v256a85.333333 85.333333 0 0 1-85.333333 85.333333H256a85.333333 85.333333 0 0 1-85.333333-85.333333v-256a85.333333 85.333333 0 0 1 85.333333-85.333333h42.666667V341.333333a213.333333 213.333333 0 0 1 368.085333-146.816z"></path></svg>
`,ki=`<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22">
    <path d="M15 11a3.998 3.998 0 0 0-2-3.465v2.636l1.865 1.865A4.02 4.02 0 0 0 15 11z"></path>
    <path d="M13.583 5.583A5.998 5.998 0 0 1 17 11a6 6 0 0 1-.585 2.587l1.477 1.477a8.001 8.001 0 0 0-3.446-11.286 1 1 0 0 0-.863 1.805zM18.778 18.778l-2.121-2.121-1.414-1.414-1.415-1.415L13 13l-2-2-3.889-3.889-3.889-3.889a.999.999 0 1 0-1.414 1.414L5.172 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39v-3.131l2.587 2.587-.01.005a1 1 0 0 0 .86 1.806c.215-.102.424-.214.627-.333l2.3 2.3a1.001 1.001 0 0 0 1.414-1.416zM11 5.04a.5.5 0 0 0-.813-.39L8.682 5.854 11 8.172V5.04z"></path>
</svg>`,$i=`<svg xmlns="http://www.w3.org/2000/svg" height="22" width="22" viewBox="0 0 22 22">
    <path d="M10.188 4.65L6 8H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1l4.188 3.35a.5.5 0 0 0 .812-.39V5.04a.498.498 0 0 0-.812-.39zM14.446 3.778a1 1 0 0 0-.862 1.804 6.002 6.002 0 0 1-.007 10.838 1 1 0 0 0 .86 1.806A8.001 8.001 0 0 0 19 11a8.001 8.001 0 0 0-4.554-7.222z"></path>
    <path d="M15 11a3.998 3.998 0 0 0-2-3.465v6.93A3.998 3.998 0 0 0 15 11z"></path>
</svg>`;class Ci{constructor(t){const e={loading:di,state:yi,play:fi,pause:ui,check:ei,volume:$i,volumeClose:ki,screenshot:gi,setting:vi,pip:hi,arrowLeft:Jn,arrowRight:Qn,playbackRate:mi,aspectRatio:ti,config:ii,lock:pi,flip:ri,unlock:xi,fullscreenOff:ai,fullscreenOn:si,fullscreenWebOff:li,fullscreenWebOn:ci,switchOn:wi,switchOff:bi,error:oi,close:ni,airplay:Kn,...t.option.icons};for(const i in e)$(this,i,{get:()=>Se(i,e[i])})}}class Ti extends lt{constructor(t){super(t),this.name="info",O||this.init()}init(){const{proxy:t,constructor:e,template:{$infoPanel:i,$infoClose:o,$video:r}}=this.art;t(o,"click",()=>{this.show=!1});let a=null;const s=Mt("[data-video]",i)||[];this.art.on("destroy",()=>clearTimeout(a));function c(){for(let l=0;l<s.length;l++){const d=s[l],p=r[d.dataset.video],h=typeof p=="number"?p.toFixed(2):p;d.textContent!==h&&(d.textContent=h)}a=setTimeout(c,e.INFO_LOOP_TIME)}c()}}class Ei extends lt{constructor(t){super(t);const{option:e,template:{$layer:i}}=t;this.name="layer",this.$parent=i;for(let o=0;o<e.layers.length;o++)this.add(e.layers[o])}}class Mi extends lt{constructor(t){super(t),this.name="loading",k(t.template.$loading,t.icons.loading)}}class Si extends lt{constructor(t){super(t),this.name="mask";const{template:e,icons:i,events:o}=t,r=k(e.$state,i.state),a=k(e.$state,i.error);u(a,"display","none"),t.on("destroy",()=>{u(r,"display","none"),u(a,"display",null)}),o.proxy(e.$state,"click",()=>t.play())}}class zi{constructor(t){this.art=t,this.timer=null,t.on("destroy",()=>this.destroy())}destroy(){this.timer&&(clearTimeout(this.timer),this.timer=null)}set show(t){const{constructor:e,template:{$player:i,$noticeInner:o}}=this.art;t?(o.textContent=t instanceof Error?t.message.trim():t,E(i,"art-notice-show"),clearTimeout(this.timer),this.timer=setTimeout(()=>{o.textContent="",W(i,"art-notice-show")},e.NOTICE_TIME)):W(i,"art-notice-show")}get show(){const{template:{$player:t}}=this.art;return t.classList.contains("art-notice-show")}}function _i(n){const{i18n:t,notice:e,proxy:i,template:{$video:o}}=n;let r=!0;window.WebKitPlaybackTargetAvailabilityEvent&&o.webkitShowPlaybackTargetPicker?i(o,"webkitplaybacktargetavailabilitychanged",a=>{switch(a.availability){case"available":r=!0;break;case"not-available":r=!1;break}}):r=!1,$(n,"airplay",{value(){r?(o.webkitShowPlaybackTargetPicker(),n.emit("airplay")):e.show=t.get("AirPlay Not Available")}})}function Li(n){const{i18n:t,notice:e,template:{$video:i,$player:o}}=n;$(n,"aspectRatio",{get(){return o.dataset.aspectRatio||"default"},set(r){if(r||(r="default"),r==="default")u(i,"width",null),u(i,"height",null),u(i,"margin",null),delete o.dataset.aspectRatio;else{const a=r.split(":").map(Number),{clientWidth:s,clientHeight:c}=o,l=s/c,d=a[0]/a[1];l>d?(u(i,"width",`${d*c}px`),u(i,"height","100%"),u(i,"margin","0 auto")):(u(i,"width","100%"),u(i,"height",`${s/d}px`),u(i,"margin","auto 0")),o.dataset.aspectRatio=r}e.show=`${t.get("Aspect Ratio")}: ${r==="default"?t.get("Default"):r}`,n.emit("aspectRatio",r)}})}function Ii(n){const{template:{$video:t}}=n;$(n,"attr",{value(e,i){if(i===void 0)return t[e];t[e]=i}})}function Pi(n){const{template:{$container:t,$video:e}}=n;$(n,"autoHeight",{value(){const{clientWidth:i}=t,{videoHeight:o,videoWidth:r}=e,a=o*(i/r);u(t,"height",`${a}px`),n.emit("autoHeight",a)}})}function Ri(n){const{$container:t,$player:e,$video:i}=n.template;$(n,"autoSize",{value(){const{videoWidth:o,videoHeight:r}=i,{width:a,height:s}=tt(t),c=o/r;if(a/s>c){const d=s*c/a*100;u(e,"width",`${d}%`),u(e,"height","100%")}else{const d=a/c/s*100;u(e,"width","100%"),u(e,"height",`${d}%`)}n.emit("autoSize",{width:n.width,height:n.height})}})}function Ai(n){const{$player:t}=n.template;$(n,"cssVar",{value(e,i){return i?t.style.setProperty(e,i):getComputedStyle(t).getPropertyValue(e)}})}function Oi(n){const{$video:t}=n.template;$(n,"currentTime",{get:()=>t.currentTime||0,set:e=>{e=Number.parseFloat(e),!Number.isNaN(e)&&(t.currentTime=X(e,0,n.duration))}})}function Fi(n){$(n,"duration",{get:()=>{const{duration:t}=n.template.$video;return t===1/0?0:t||0}})}function Vi(n){const{i18n:t,notice:e,option:i,constructor:o,proxy:r,template:{$player:a,$video:s,$poster:c}}=n;let l=0;for(let d=0;d<$t.events.length;d++)r(s,$t.events[d],p=>{n.emit(`video:${p.type}`,p)});n.on("video:canplay",()=>{l=0,n.loading.show=!1}),n.once("video:canplay",()=>{n.loading.show=!1,n.controls.show=!0,n.mask.show=!0,n.isReady=!0,n.emit("ready")}),n.on("video:ended",()=>{i.loop?(n.seek=0,n.play(),n.controls.show=!1,n.mask.show=!1):(n.controls.show=!0,n.mask.show=!0)}),n.on("video:error",async d=>{l<o.RECONNECT_TIME_MAX?(await ft(o.RECONNECT_SLEEP_TIME),l+=1,n.url=i.url,e.show=`${t.get("Reconnect")}: ${l}`,n.emit("error",d,l)):(n.mask.show=!0,n.loading.show=!1,n.controls.show=!0,E(a,"art-error"),await ft(o.RECONNECT_SLEEP_TIME),e.show=t.get("Video Load Failed"))}),n.on("video:loadedmetadata",()=>{n.emit("resize"),O&&(n.loading.show=!1,n.controls.show=!0,n.mask.show=!0)}),n.on("video:loadstart",()=>{n.loading.show=!0,n.mask.show=!1,n.controls.show=!0}),n.on("video:pause",()=>{n.controls.show=!0,n.mask.show=!0}),n.on("video:play",()=>{n.mask.show=!1,u(c,"display","none")}),n.on("video:playing",()=>{n.mask.show=!1}),n.on("video:progress",()=>{n.playing&&(n.loading.show=!1)}),n.on("video:seeked",()=>{n.loading.show=!1,n.mask.show=!0}),n.on("video:seeking",()=>{n.loading.show=!0,n.mask.show=!1}),n.on("video:timeupdate",()=>{n.mask.show=!1}),n.on("video:waiting",()=>{n.loading.show=!0,n.mask.show=!1})}function Di(n){const{template:{$player:t},i18n:e,notice:i}=n;$(n,"flip",{get(){return t.dataset.flip||"normal"},set(o){o||(o="normal"),o==="normal"?delete t.dataset.flip:t.dataset.flip=o,i.show=`${e.get("Video Flip")}: ${e.get(Dt(o))}`,n.emit("flip",o)}})}const le=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],st=(()=>{if(typeof document>"u")return!1;const n=le[0],t={};for(const e of le)if(e[1]in document){for(const[o,r]of e.entries())t[n[o]]=r;return t}return!1})(),ce={change:st.fullscreenchange,error:st.fullscreenerror},B={request(n=document.documentElement,t){return new Promise((e,i)=>{const o=()=>{B.off("change",o),e()};B.on("change",o);const r=n[st.requestFullscreen](t);r instanceof Promise&&r.then(o).catch(i)})},exit(){return new Promise((n,t)=>{if(!B.isFullscreen){n();return}const e=()=>{B.off("change",e),n()};B.on("change",e);const i=document[st.exitFullscreen]();i instanceof Promise&&i.then(e).catch(t)})},toggle(n,t){return B.isFullscreen?B.exit():B.request(n,t)},onchange(n){B.on("change",n)},onerror(n){B.on("error",n)},on(n,t){const e=ce[n];e&&document.addEventListener(e,t,!1)},off(n,t){const e=ce[n];e&&document.removeEventListener(e,t,!1)},raw:st};Object.defineProperties(B,{isFullscreen:{get:()=>!!document[st.fullscreenElement]},element:{enumerable:!0,get:()=>document[st.fullscreenElement]},isEnabled:{enumerable:!0,get:()=>!!document[st.fullscreenEnabled]}});function Hi(n){const{i18n:t,notice:e,template:{$video:i,$player:o}}=n,r=s=>{B.on("change",()=>{s.emit("fullscreen",B.isFullscreen),B.isFullscreen?(s.state="fullscreen",E(o,"art-fullscreen")):W(o,"art-fullscreen"),s.emit("resize")}),B.on("error",c=>{s.emit("fullscreenError",c)}),$(s,"fullscreen",{get(){return B.isFullscreen},async set(c){c?await B.request(o):await B.exit()}})},a=s=>{s.on("document:webkitfullscreenchange",()=>{s.emit("fullscreen",s.fullscreen),s.emit("resize")}),$(s,"fullscreen",{get(){return document.fullscreenElement===i},set(c){c?(s.state="fullscreen",i.webkitEnterFullscreen()):i.webkitExitFullscreen()}})};n.once("video:loadedmetadata",()=>{B.isEnabled?r(n):i.webkitSupportsFullscreen?a(n):$(n,"fullscreen",{get(){return!1},set(){e.show=t.get("Fullscreen Not Supported")}}),$(n,"fullscreen",Ae(n,"fullscreen"))})}function Ni(n){const{constructor:t,template:{$container:e,$player:i}}=n;let o="";$(n,"fullscreenWeb",{get(){return ot(i,"art-fullscreen-web")},set(r){r?(o=i.style.cssText,t.FULLSCREEN_WEB_IN_BODY&&k(document.body,i),n.state="fullscreenWeb",u(i,"width","100%"),u(i,"height","100%"),E(i,"art-fullscreen-web"),n.emit("fullscreenWeb",!0)):(t.FULLSCREEN_WEB_IN_BODY&&k(e,i),o&&(i.style.cssText=o,o=""),W(i,"art-fullscreen-web"),n.emit("fullscreenWeb",!1)),n.emit("resize")}})}function Bi(n){const{$video:t}=n.template;$(n,"loaded",{get:()=>n.loadedTime/t.duration}),$(n,"loadedTime",{get:()=>t.buffered.length?t.buffered.end(t.buffered.length-1):0})}function Wi(n){const{icons:t,proxy:e,storage:i,template:{$player:o,$video:r}}=n;let a=!1,s=0,c=0;function l(){const{$mini:g}=n.template;g&&(W(o,"art-mini"),u(g,"display","none"),o.prepend(r),n.emit("mini",!1))}function d(g,f){n.playing?(u(g,"display","none"),u(f,"display","flex")):(u(g,"display","flex"),u(f,"display","none"))}function p(){const{$mini:g}=n.template;if(g)return k(g,r),u(g,"display","flex");{const f=N("div");E(f,"art-mini-popup"),k(document.body,f),n.template.$mini=f,k(f,r);const b=k(f,'<div class="art-mini-close"></div>');k(b,t.close),e(b,"click",l);const C=k(f,'<div class="art-mini-state"></div>'),v=k(C,t.play),w=k(C,t.pause);return e(v,"click",()=>n.play()),e(w,"click",()=>n.pause()),d(v,w),n.on("video:playing",()=>d(v,w)),n.on("video:pause",()=>d(v,w)),n.on("video:timeupdate",()=>d(v,w)),e(f,"mousedown",x=>{a=x.button===0,s=x.pageX,c=x.pageY}),n.on("document:mousemove",x=>{if(a){E(f,"art-mini-dragging");const y=x.pageX-s,S=x.pageY-c;u(f,"transform",`translate(${y}px, ${S}px)`)}}),n.on("document:mouseup",()=>{if(a){a=!1,W(f,"art-mini-dragging");const x=tt(f);i.set("left",x.left),i.set("top",x.top),u(f,"left",`${x.left}px`),u(f,"top",`${x.top}px`),u(f,"transform",null)}}),f}}function h(){const{$mini:g}=n.template,f=tt(g),b=window.innerHeight-f.height-50,C=window.innerWidth-f.width-50;i.set("top",b),i.set("left",C),u(g,"top",`${b}px`),u(g,"left",`${C}px`)}$(n,"mini",{get(){return ot(o,"art-mini")},set(g){if(g){n.state="mini",E(o,"art-mini");const f=p(),b=i.get("top"),C=i.get("left");typeof b=="number"&&typeof C=="number"?(u(f,"top",`${b}px`),u(f,"left",`${C}px`),Qt(f)||h()):h(),n.emit("mini",!0)}else l()}})}function Yi(n){const{option:t,storage:e,template:{$video:i,$poster:o}}=n;for(const a in t.moreVideoAttr)n.attr(a,t.moreVideoAttr[a]);t.muted&&(n.muted=t.muted),t.volume&&(i.volume=X(t.volume,0,1));const r=e.get("volume");typeof r=="number"&&(i.volume=X(r,0,1)),t.poster&&u(o,"backgroundImage",`url(${t.poster})`),t.autoplay&&(i.autoplay=t.autoplay),t.playsInline&&(i.playsInline=!0,i["webkit-playsinline"]=!0),t.theme&&(t.cssVar["--art-theme"]=t.theme);for(const a in t.cssVar)n.cssVar(a,t.cssVar[a]);n.url=t.url}function ji(n){const{template:{$video:t},i18n:e,notice:i}=n;$(n,"pause",{value(){const o=t.pause();return i.show=e.get("Pause"),n.emit("pause"),o}})}function qi(n){const{template:{$video:t},proxy:e,notice:i}=n;t.disablePictureInPicture=!1,$(n,"pip",{get(){return document.pictureInPictureElement},set(o){o?(n.state="pip",t.requestPictureInPicture().catch(r=>{throw i.show=r,r})):document.exitPictureInPicture().catch(r=>{throw i.show=r,r})}}),e(t,"enterpictureinpicture",()=>{n.emit("pip",!0)}),e(t,"leavepictureinpicture",()=>{n.emit("pip",!1)})}function Xi(n){const{$video:t}=n.template;t.webkitSetPresentationMode("inline"),$(n,"pip",{get(){return t.webkitPresentationMode==="picture-in-picture"},set(e){e?(n.state="pip",t.webkitSetPresentationMode("picture-in-picture"),n.emit("pip",!0)):(t.webkitSetPresentationMode("inline"),n.emit("pip",!1))}})}function Ui(n){const{i18n:t,notice:e,template:{$video:i}}=n;document.pictureInPictureEnabled?qi(n):i.webkitSupportsPresentationMode?Xi(n):$(n,"pip",{get(){return!1},set(){e.show=t.get("PIP Not Supported")}})}function Gi(n){const{template:{$video:t},i18n:e,notice:i}=n;$(n,"playbackRate",{get(){return t.playbackRate},set(o){if(o){if(o===t.playbackRate)return;t.playbackRate=o,i.show=`${e.get("Rate")}: ${o===1?e.get("Normal"):`${o}x`}`}else n.playbackRate=1}})}function Zi(n){$(n,"played",{get:()=>n.currentTime/n.duration})}function Ki(n){const{$video:t}=n.template;$(n,"playing",{get:()=>typeof t.playing=="boolean"?t.playing:t.currentTime>0&&!t.paused&&!t.ended&&t.readyState>2})}function Ji(n){const{i18n:t,notice:e,option:i,constructor:{instances:o},template:{$video:r}}=n;$(n,"play",{async value(){const a=await r.play();if(e.show=t.get("Play"),n.emit("play"),i.mutex)for(let s=0;s<o.length;s++){const c=o[s];c!==n&&c.pause()}return a}})}function Qi(n){const{template:{$poster:t}}=n;$(n,"poster",{get:()=>{try{return t.style.backgroundImage.match(/"(.*)"/)[1]}catch{return""}},set(e){u(t,"backgroundImage",`url(${e})`)}})}function to(n){$(n,"quality",{set(t){const{controls:e,notice:i,i18n:o}=n,r=t.find(a=>a.default)||t[0];e.update({name:"quality",position:"right",index:10,style:{marginRight:"10px"},html:(r==null?void 0:r.html)||"",selector:t,async onSelect(a){return await n.switchQuality(a.url),i.show=`${o.get("Switch Video")}: ${a.html}`,a.html}})}})}function eo(n){$(n,"rect",{get:()=>tt(n.template.$player)});const t=["bottom","height","left","right","top","width"];for(let e=0;e<t.length;e++){const i=t[e];$(n,i,{get:()=>n.rect[i]})}$(n,"x",{get:()=>n.left+window.pageXOffset}),$(n,"y",{get:()=>n.top+window.pageYOffset})}function no(n){const{notice:t,template:{$video:e}}=n,i=N("canvas");$(n,"getDataURL",{value:()=>new Promise((o,r)=>{try{i.width=e.videoWidth,i.height=e.videoHeight,i.getContext("2d").drawImage(e,0,0),o(i.toDataURL("image/png"))}catch(a){t.show=a,r(a)}})}),$(n,"getBlobUrl",{value:()=>new Promise((o,r)=>{try{i.width=e.videoWidth,i.height=e.videoHeight,i.getContext("2d").drawImage(e,0,0),i.toBlob(a=>{o(URL.createObjectURL(a))})}catch(a){t.show=a,r(a)}})}),$(n,"screenshot",{value:async o=>{const r=await n.getDataURL(),a=o||`artplayer_${et(e.currentTime)}`;return Pe(r,`${a}.png`),n.emit("screenshot",r),r}})}function io(n){const{notice:t}=n;$(n,"seek",{set(e){n.currentTime=e,n.duration&&(t.show=`${et(n.currentTime)} / ${et(n.duration)}`),n.emit("seek",n.currentTime,e)}}),$(n,"forward",{set(e){n.seek=n.currentTime+e}}),$(n,"backward",{set(e){n.seek=n.currentTime-e}})}function oo(n){const t=["mini","pip","fullscreen","fullscreenWeb"];$(n,"state",{get:()=>t.find(e=>n[e])||"standard",set(e){for(let i=0;i<t.length;i++){const o=t[i];o!==e&&n[o]&&(n[o]=!1)}}})}function ro(n){const{notice:t,i18n:e,template:i}=n;$(n,"subtitleOffset",{get(){var o;return((o=i.$track)==null?void 0:o.offset)||0},set(o){const{cues:r}=n.subtitle;if(!i.$track||r.length===0)return;const a=X(o,-10,10);i.$track.offset=a;for(let s=0;s<r.length;s++){const c=r[s];c.originalStartTime=c.originalStartTime??c.startTime,c.originalEndTime=c.originalEndTime??c.endTime,c.startTime=X(c.originalStartTime+a,0,n.duration),c.endTime=X(c.originalEndTime+a,0,n.duration)}n.subtitle.update(),t.show=`${e.get("Subtitle Offset")}: ${o}s`,n.emit("subtitleOffset",o)}})}function ao(n){function t(e,i){return new Promise((o,r)=>{if(e===n.url){o();return}const{playing:a,aspectRatio:s,playbackRate:c}=n;n.pause(),n.url=e,n.notice.show="";const l={};l.error=d=>{n.off("video:canplay",l.canplay),n.off("video:loadedmetadata",l.metadata),r(d)},l.metadata=()=>{n.currentTime=i},l.canplay=async()=>{n.off("video:error",l.error),n.playbackRate=c,n.aspectRatio=s,a&&await n.play(),n.notice.show="",o()},n.once("video:error",l.error),n.once("video:loadedmetadata",l.metadata),n.once("video:canplay",l.canplay)})}$(n,"switchQuality",{value:e=>t(e,n.currentTime)}),$(n,"switchUrl",{value:e=>t(e,0)}),$(n,"switch",{set:n.switchUrl})}function so(n){$(n,"theme",{get(){return n.cssVar("--art-theme")},set(t){n.cssVar("--art-theme",t)}})}function lo(n){const{option:t,template:{$progress:e,$video:i}}=n;let o=null,r=!1,a=null;function s(){clearTimeout(o),o=null,r=!1,a=null}function c(l){var A;const d=(A=n.controls)==null?void 0:A.thumbnails;if(!d)return;const{number:p,column:h,width:g,height:f,scale:b}=t.thumbnails,C=g*b||a.naturalWidth/h,v=f*b||C/(i.videoWidth/i.videoHeight),w=e.clientWidth/p,x=Math.floor(l/w),y=Math.ceil(x/h)-1,S=x%h||h-1;u(d,"backgroundImage",`url(${a.src})`),u(d,"height",`${v}px`),u(d,"width",`${C}px`),u(d,"backgroundPosition",`-${S*C}px -${y*v}px`),l<=C/2?u(d,"left",0):l>e.clientWidth-C/2?u(d,"left",`${e.clientWidth-C}px`):u(d,"left",`${l-C/2}px`)}n.on("setBar",async(l,d,p)=>{var C;const h=(C=n.controls)==null?void 0:C.thumbnails,{url:g,scale:f}=t.thumbnails;if(!h||!g)return;if(l==="hover"||l==="played"&&p&&O){if(!a&&!r&&(r=!0,a=await Le(g,f),r=!1),!a)return;const v=e.clientWidth*d;v>0&&v<e.clientWidth&&c(v)}}),$(n,"thumbnails",{get(){return n.option.thumbnails},set(l){l.url&&!n.option.isLive&&(n.option.thumbnails=l,s())}})}function co(n){$(n,"toggle",{value(){return n.playing?n.pause():n.play()}})}function po(n){$(n,"type",{get(){return n.option.type},set(t){n.option.type=t}})}function uo(n){const{option:t,template:{$video:e}}=n;$(n,"url",{get(){return e.src},async set(i){if(i){const o=n.url,r=t.type||Tt(i),a=t.customType[r];r&&a?(await ft(),n.loading.show=!0,a.call(n,e,i,n)):(URL.revokeObjectURL(o),e.src=i),o!==n.url&&(n.option.url=i,n.isReady&&o&&n.once("video:canplay",()=>{n.emit("restart",i)}))}else await ft(),n.loading.show=!0}})}function ho(n){const{template:{$video:t},i18n:e,notice:i,storage:o}=n;$(n,"volume",{get:()=>t.volume||0,set:r=>{t.volume=X(r,0,1),i.show=`${e.get("Volume")}: ${Number.parseInt(t.volume*100,10)}`,t.volume!==0&&o.set("volume",t.volume)}}),$(n,"muted",{get:()=>t.muted,set:r=>{t.muted=r,n.emit("muted",r)}})}class fo{constructor(t){uo(t),Ii(t),Ji(t),ji(t),co(t),io(t),ho(t),Oi(t),Fi(t),ao(t),Gi(t),Li(t),no(t),Hi(t),Ni(t),Ui(t),Bi(t),Zi(t),Ki(t),Ri(t),eo(t),Di(t),Wi(t),Qi(t),Pi(t),Ai(t),so(t),po(t),oo(t),ro(t),_i(t),to(t),lo(t),Vi(t),Yi(t)}}function mo(n){const{notice:t,constructor:e,template:{$player:i,$video:o}}=n,r="art-auto-orientation",a="art-auto-orientation-fullscreen";let s=!1;function c(){const p=document.documentElement.clientWidth,h=document.documentElement.clientHeight;u(i,"width",`${h}px`),u(i,"height",`${p}px`),u(i,"transform-origin","0 0"),u(i,"transform",`rotate(90deg) translate(0, -${p}px)`),E(i,r),n.isRotate=!0,n.emit("resize")}function l(){u(i,"width",""),u(i,"height",""),u(i,"transform-origin",""),u(i,"transform",""),W(i,r),n.isRotate=!1,n.emit("resize")}function d(){const{videoWidth:p,videoHeight:h}=o,g=document.documentElement.clientWidth,f=document.documentElement.clientHeight;return p>h&&g<f||p<h&&g>f}return n.on("fullscreenWeb",p=>{if(p){if(d()){const h=Number(e.AUTO_ORIENTATION_TIME??0);setTimeout(()=>{n.fullscreenWeb&&!ot(i,r)&&c()},h)}}else ot(i,r)&&l()}),n.on("fullscreen",async p=>{var g;const h=!!((g=screen==null?void 0:screen.orientation)!=null&&g.lock);if(p){if(h&&d())try{const b=screen.orientation.type.startsWith("portrait")?"landscape":"portrait";await screen.orientation.lock(b),s=!0,E(i,a)}catch(f){s=!1,t.show=f}}else if(ot(i,a)&&W(i,a),h&&s){try{screen.orientation.unlock()}catch{}s=!1}}),{name:"autoOrientation",get state(){return ot(i,r)}}}function go(n){const{i18n:t,icons:e,storage:i,constructor:o,proxy:r,template:{$poster:a}}=n,s=n.layers.add({name:"auto-playback",html:`
            <div class="art-auto-playback-close"></div>
            <div class="art-auto-playback-last"></div>
            <div class="art-auto-playback-jump"></div>
        `}),c=q(".art-auto-playback-last",s),l=q(".art-auto-playback-jump",s),d=q(".art-auto-playback-close",s);k(d,e.close);let p=null;n.on("video:timeupdate",()=>{if(n.playing){const g=i.get("times")||{},f=Object.keys(g);f.length>o.AUTO_PLAYBACK_MAX&&delete g[f[0]],g[n.option.id||n.option.url]=n.currentTime,i.set("times",g)}});function h(){const f=(i.get("times")||{})[n.option.id||n.option.url];clearTimeout(p),u(s,"display","none"),f&&f>=o.AUTO_PLAYBACK_MIN&&(u(s,"display","flex"),c.textContent=`${t.get("Last Seen")} ${et(f)}`,l.textContent=t.get("Jump Play"),r(d,"click",()=>{u(s,"display","none")}),r(l,"click",()=>{n.seek=f,n.play(),u(a,"display","none"),u(s,"display","none")}),n.once("video:timeupdate",()=>{p=setTimeout(()=>{u(s,"display","none")},o.AUTO_PLAYBACK_TIMEOUT)}))}return n.on("ready",h),n.on("restart",h),{name:"auto-playback",get times(){return i.get("times")||{}},clear(){return i.del("times")},delete(g){const f=i.get("times")||{};return delete f[g],i.set("times",f),f}}}function vo(n){const{constructor:t,proxy:e,template:{$player:i,$video:o}}=n;let r=null,a=!1,s=1;const c=d=>{d.touches.length===1&&n.playing&&!n.isLock&&(r=setTimeout(()=>{a=!0,s=n.playbackRate,n.playbackRate=t.FAST_FORWARD_VALUE,E(i,"art-fast-forward")},t.FAST_FORWARD_TIME))},l=()=>{clearTimeout(r),a&&(a=!1,n.playbackRate=s,W(i,"art-fast-forward"))};return e(o,"touchstart",c),n.on("document:touchmove",l),n.on("document:touchend",l),{name:"fastForward",get state(){return ot(i,"art-fast-forward")}}}function yo(n){const{layers:t,icons:e,template:{$player:i}}=n;function o(){return ot(i,"art-lock")}function r(){E(i,"art-lock"),n.isLock=!0,n.emit("lock",!0)}function a(){W(i,"art-lock"),n.isLock=!1,n.emit("lock",!1)}return t.add({name:"lock",mounted(s){const c=k(s,e.lock),l=k(s,e.unlock);u(c,"display","none"),n.on("lock",d=>{d?(u(c,"display","inline-flex"),u(l,"display","none")):(u(c,"display","none"),u(l,"display","inline-flex"))})},click(){o()?a():r()}}),{name:"lock",get state(){return o()},set state(s){s?r():a()}}}function bo(n){return n.on("control",t=>{t?W(n.template.$player,"art-mini-progress-bar"):E(n.template.$player,"art-mini-progress-bar")}),{name:"mini-progress-bar"}}class wo{constructor(t){this.art=t,this.id=0;const{option:e}=t;e.miniProgressBar&&!e.isLive&&this.add(bo),e.lock&&O&&this.add(yo),e.autoPlayback&&!e.isLive&&this.add(go),e.autoOrientation&&O&&this.add(mo),e.fastForward&&O&&!e.isLive&&this.add(vo);for(let i=0;i<e.plugins.length;i++)this.add(e.plugins[i])}add(t){this.id+=1;const e=t.call(this.art,this.art);return e instanceof Promise?e.then(i=>this.next(t,i)):this.next(t,e)}next(t,e){const i=e&&e.name||t.name||`plugin${this.id}`;return Z(!Ct(this,i),`Cannot add a plugin that already has the same name: ${i}`),$(this,i,{value:e}),this}}function xo(n){const{i18n:t,icons:e,constructor:{SETTING_ITEM_WIDTH:i,ASPECT_RATIO:o}}=n;function r(s){return s==="default"?t.get("Default"):s}function a(){const s=n.setting.find(`aspect-ratio-${n.aspectRatio}`);n.setting.check(s)}return{width:i,name:"aspect-ratio",html:t.get("Aspect Ratio"),icon:e.aspectRatio,tooltip:r(n.aspectRatio),selector:o.map(s=>({value:s,name:`aspect-ratio-${s}`,default:s===n.aspectRatio,html:r(s)})),onSelect(s){return n.aspectRatio=s.value,s.html},mounted:()=>{a(),n.on("aspectRatio",()=>a())}}}function ko(n){const{i18n:t,icons:e,constructor:{SETTING_ITEM_WIDTH:i,FLIP:o}}=n;function r(s){return t.get(Dt(s))}function a(){const s=n.setting.find(`flip-${n.flip}`);n.setting.check(s)}return{width:i,name:"flip",html:t.get("Video Flip"),tooltip:r(n.flip),icon:e.flip,selector:o.map(s=>({value:s,name:`flip-${s}`,default:s===n.flip,html:r(s)})),onSelect(s){return n.flip=s.value,s.html},mounted:()=>{a(),n.on("flip",()=>a())}}}function $o(n){const{i18n:t,icons:e,constructor:{SETTING_ITEM_WIDTH:i,PLAYBACK_RATE:o}}=n;function r(s){return s===1?t.get("Normal"):s.toFixed(1)}function a(){const s=n.setting.find(`playback-rate-${n.playbackRate}`);n.setting.check(s)}return{width:i,name:"playback-rate",html:t.get("Play Speed"),tooltip:r(n.playbackRate),icon:e.playbackRate,selector:o.map(s=>({value:s,name:`playback-rate-${s}`,default:s===n.playbackRate,html:r(s)})),onSelect(s){return n.playbackRate=s.value,s.html},mounted:()=>{a(),n.on("video:ratechange",()=>a())}}}function Co(n){const{i18n:t,icons:e,constructor:i}=n;return{width:i.SETTING_ITEM_WIDTH,name:"subtitle-offset",html:t.get("Subtitle Offset"),icon:e.subtitle,tooltip:"0s",range:[0,-10,10,.1],onChange(o){return n.subtitleOffset=o.range[0],`${o.range[0]}s`},mounted:(o,r)=>{n.on("subtitleOffset",a=>{r.$range.value=a,r.tooltip=`${a}s`})}}}let To=class extends lt{constructor(t){super(t);const{option:e,controls:i,template:{$setting:o}}=t;this.name="setting",this.$parent=o,this.id=0,this.active=null,this.cache=new Map,this.option=[...this.builtin,...e.settings],e.setting&&(this.format(),this.render(),t.on("blur",()=>{this.show&&(this.show=!1,this.render())}),t.on("focus",r=>{const a=dt(r,i.setting),s=dt(r,this.$parent);this.show&&!a&&!s&&(this.show=!1,this.render())}),t.on("resize",()=>this.resize()))}get builtin(){const t=[],{option:e}=this.art;return e.playbackRate&&t.push($o(this.art)),e.aspectRatio&&t.push(xo(this.art)),e.flip&&t.push(ko(this.art)),e.subtitleOffset&&t.push(Co(this.art)),t}traverse(t,e=this.option){var i;for(let o=0;o<e.length;o++){const r=e[o];t(r),(i=r.selector)!=null&&i.length&&this.traverse(t,r.selector)}}check(t){t&&(t.$parent.tooltip=t.html,this.traverse(e=>{e.default=e===t,e.default&&e.$item&&Q(e.$item,"art-current")},t.$option),this.render(t.$parents))}format(t=this.option,e,i,o=[]){for(let r=0;r<t.length;r++){const a=t[r];if(a!=null&&a.name?(Z(!o.includes(a.name),`The [${a.name}] already exists in [setting]`),o.push(a.name)):a.name=`setting-${this.id++}`,!a.$formatted){$(a,"$parent",{get:()=>e}),$(a,"$parents",{get:()=>i}),$(a,"$option",{get:()=>t});const s=[];$(a,"$events",{get:()=>s}),$(a,"$formatted",{get:()=>!0})}this.format(a.selector||[],a,t,o)}this.option=t}find(t=""){let e=null;return this.traverse(i=>{i.name===t&&(e=i)}),e}resize(){var a,s;const{controls:t,constructor:{SETTING_WIDTH:e,SETTING_ITEM_HEIGHT:i},template:{$player:o,$setting:r}}=this.art;if(t.setting&&this.show){const c=((s=(a=this.active[0])==null?void 0:a.$parent)==null?void 0:s.width)||e,{left:l,width:d}=tt(t.setting),{left:p,width:h}=tt(o),g=l-p+d/2-c/2,f=this.active===this.option?this.active.length*i:(this.active.length+1)*i;if(u(r,"height",`${f}px`),u(r,"width",`${c}px`),this.art.isRotate||O)return;g+c>h?(u(r,"left",null),u(r,"right",null)):(u(r,"left",`${g}px`),u(r,"right","auto"))}}inactivate(t){for(let e=0;e<t.$events.length;e++)this.art.events.remove(t.$events[e]);t.$events.length=0}remove(t){const e=this.find(t);Z(e,`Can't find [${t}] in the [setting]`);const i=e.$option.indexOf(e);e.$option.splice(i,1),this.inactivate(e),e.$item&&Ft(e.$item),this.render()}update(t){const e=this.find(t.name);return e?(this.inactivate(e),Object.assign(e,t),this.format(),this.createItem(e,!0),this.render(),e):this.add(t)}add(t,e=this.option){return e.push(t),this.format(),this.createItem(t),this.render(),t}createHeader(t){if(!this.cache.has(t.$option))return;const e=this.cache.get(t.$option),{proxy:i,icons:{arrowLeft:o},constructor:{SETTING_ITEM_HEIGHT:r}}=this.art,a=N("div");u(a,"height",`${r}px`),E(a,"art-setting-item"),E(a,"art-setting-item-back");const s=k(a,'<div class="art-setting-item-left"></div>'),c=N("div");E(c,"art-setting-item-left-icon"),k(c,o),k(s,c),k(s,t.$parent.html);const l=i(a,"click",()=>this.render(t.$parents));t.$parent.$events.push(l),k(e,a)}createItem(t,e=!1){var b,C;if(!this.cache.has(t.$option))return;const i=this.cache.get(t.$option),o=t.$item;let r="selector";Ct(t,"switch")&&(r="switch"),Ct(t,"range")&&(r="range"),Ct(t,"onClick")&&(r="button");const{icons:a,proxy:s,constructor:c}=this.art,l=N("div");E(l,"art-setting-item"),u(l,"height",`${c.SETTING_ITEM_HEIGHT}px`),l.dataset.name=t.name||"",l.dataset.value=t.value||"";const d=k(l,'<div class="art-setting-item-left"></div>'),p=k(l,'<div class="art-setting-item-right"></div>'),h=N("div");switch(E(h,"art-setting-item-left-icon"),r){case"button":case"switch":case"range":k(h,t.icon||a.config);break;case"selector":(b=t.selector)!=null&&b.length?k(h,t.icon||a.config):k(h,a.check);break}k(d,h),$(t,"$icon",{configurable:!0,get:()=>h}),$(t,"icon",{configurable:!0,get(){return h.innerHTML},set(v){h.innerHTML="",k(h,v)}});const g=N("div");E(g,"art-setting-item-left-text"),k(g,t.html||""),k(d,g),$(t,"$html",{configurable:!0,get:()=>g}),$(t,"html",{configurable:!0,get(){return g.innerHTML},set(v){g.innerHTML="",k(g,v)}});const f=N("div");switch(E(f,"art-setting-item-right-tooltip"),k(f,t.tooltip||""),k(p,f),$(t,"$tooltip",{configurable:!0,get:()=>f}),$(t,"tooltip",{configurable:!0,get(){return f.innerHTML},set(v){f.innerHTML="",k(f,v)}}),r){case"switch":{const v=N("div");E(v,"art-setting-item-right-icon");const w=k(v,a.switchOn),x=k(v,a.switchOff);u(t.switch?x:w,"display","none"),k(p,v),$(t,"$switch",{configurable:!0,get:()=>v});let y=t.switch;$(t,"switch",{configurable:!0,get:()=>y,set(S){y=S,S?(u(x,"display","none"),u(w,"display",null)):(u(x,"display",null),u(w,"display","none"))}});break}case"range":{const v=N("div");E(v,"art-setting-item-right-icon");const w=k(v,'<input type="range">');w.value=t.range[0],w.min=t.range[1],w.max=t.range[2],w.step=t.range[3],E(w,"art-setting-range"),k(p,v),$(t,"$range",{configurable:!0,get:()=>w});let x=[...t.range];$(t,"range",{configurable:!0,get:()=>x,set(y){x=[...y],w.value=y[0],w.min=y[1],w.max=y[2],w.step=y[3]}})}break;case"selector":if((C=t.selector)!=null&&C.length){const v=N("div");E(v,"art-setting-item-right-icon"),k(v,a.arrowRight),k(p,v)}break}switch(r){case"switch":{if(t.onSwitch){const v=s(l,"click",async w=>{t.switch=await t.onSwitch.call(this.art,t,l,w)});t.$events.push(v)}break}case"range":{if(t.$range){if(t.onRange){const v=s(t.$range,"change",async w=>{t.range[0]=t.$range.valueAsNumber,t.tooltip=await t.onRange.call(this.art,t,l,w)});t.$events.push(v)}if(t.onChange){const v=s(t.$range,"input",async w=>{t.range[0]=t.$range.valueAsNumber,t.tooltip=await t.onChange.call(this.art,t,l,w)});t.$events.push(v)}}break}case"selector":{const v=s(l,"click",async w=>{var x;(x=t.selector)!=null&&x.length?this.render(t.selector):(this.check(t),t.$parent.onSelect&&(t.$parent.tooltip=await t.$parent.onSelect.call(this.art,t,l,w)))});t.$events.push(v),t.default&&E(l,"art-current")}break;case"button":if(t.onClick){const v=s(l,"click",async w=>{t.tooltip=await t.onClick.call(this.art,t,l,w)});t.$events.push(v)}break}$(t,"$item",{configurable:!0,get:()=>l}),e?te(l,o):k(i,l),t.mounted&&setTimeout(()=>t.mounted.call(this.art,t.$item,t),0)}render(t=this.option){var e;if(this.active=t,this.cache.has(t)){const i=this.cache.get(t);Q(i,"art-current")}else{const i=N("div");this.cache.set(t,i),E(i,"art-setting-panel"),k(this.$parent,i),Q(i,"art-current"),(e=t[0])!=null&&e.$parent&&this.createHeader(t[0]);for(let o=0;o<t.length;o++)this.createItem(t[o])}this.resize()}};class Eo{constructor(){this.name="artplayer_settings",this.settings={}}get(t){try{const e=JSON.parse(window.localStorage.getItem(this.name))||{};return t?e[t]:e}catch{return t?this.settings[t]:this.settings}}set(t,e){try{const i=Object.assign({},this.get(),{[t]:e});window.localStorage.setItem(this.name,JSON.stringify(i))}catch{this.settings[t]=e}}del(t){try{const e=this.get();delete e[t],window.localStorage.setItem(this.name,JSON.stringify(e))}catch{delete this.settings[t]}}clear(){try{window.localStorage.removeItem(this.name)}catch{this.settings={}}}}const We=`.art-video-player {
  --art-theme: #f00;
  --art-font-color: #fff;
  --art-background-color: #000;
  --art-text-shadow-color: rgba(0, 0, 0, 0.5);
  --art-transition-duration: 0.2s;
  --art-padding: 10px;
  --art-border-radius: 3px;
  --art-progress-height: 6px;
  --art-progress-color: rgba(255, 255, 255, 0.25);
  --art-progress-top-gap: 10px;
  --art-hover-color: rgba(255, 255, 255, 0.25);
  --art-loaded-color: rgba(255, 255, 255, 0.25);
  --art-state-size: 80px;
  --art-state-opacity: 0.8;
  --art-bottom-height: 100px;
  --art-bottom-offset: 20px;
  --art-bottom-gap: 5px;
  --art-highlight-width: 8px;
  --art-highlight-color: rgba(255, 255, 255, 0.5);
  --art-control-height: 46px;
  --art-control-opacity: 0.75;
  --art-control-icon-size: 36px;
  --art-control-icon-scale: 1.1;
  --art-volume-height: 120px;
  --art-volume-handle-size: 14px;
  --art-lock-size: 36px;
  --art-indicator-scale: 0;
  --art-indicator-size: 16px;
  --art-fullscreen-web-index: 9999;
  --art-settings-icon-size: 24px;
  --art-settings-max-height: 300px;
  --art-selector-max-height: 300px;
  --art-contextmenus-min-width: 250px;
  --art-subtitle-font-size: 20px;
  --art-subtitle-gap: 5px;
  --art-subtitle-bottom: 15px;
  --art-subtitle-border: #000;
  --art-widget-background: rgba(0, 0, 0, 0.85);
  --art-tip-background: rgba(0, 0, 0, 0.7);
  --art-scrollbar-size: 4px;
  --art-scrollbar-background: rgba(255, 255, 255, 0.25);
  --art-scrollbar-background-hover: rgba(255, 255, 255, 0.5);
  --art-mini-progress-height: 2px;
}
.art-bg-cover {
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.art-bottom-gradient {
  background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0.4), transparent);
  background-repeat: repeat-x;
  background-position: center bottom;
}
.art-backdrop-filter {
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(0, 0, 0, 0.75) !important;
}
.art-truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.art-video-player {
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  outline: 0;
  zoom: 1;
  padding: 0;
  text-align: left;
  direction: ltr;
  font-size: 14px;
  line-height: 1.3;
  user-select: none;
  box-sizing: border-box;
  color: var(--art-font-color);
  background-color: var(--art-background-color);
  text-shadow: 0 0 2px var(--art-text-shadow-color);
  font-family: PingFang SC, Helvetica Neue, Microsoft YaHei, Roboto, Arial, sans-serif;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  -ms-high-contrast-adjust: none;
}
.art-video-player *,
.art-video-player *::before,
.art-video-player *::after {
  box-sizing: border-box;
}
.art-video-player ::-webkit-scrollbar {
  width: var(--art-scrollbar-size);
  height: var(--art-scrollbar-size);
}
.art-video-player ::-webkit-scrollbar-thumb {
  background-color: var(--art-scrollbar-background);
}
.art-video-player ::-webkit-scrollbar-thumb:hover {
  background-color: var(--art-scrollbar-background-hover);
}
.art-video-player img {
  max-width: 100%;
  vertical-align: top;
}
.art-video-player svg {
  fill: var(--art-font-color);
}
.art-video-player a {
  color: var(--art-font-color);
  text-decoration: none;
}
.art-icon {
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.art-video-player.art-backdrop .art-contextmenus,
.art-video-player.art-backdrop .art-info,
.art-video-player.art-backdrop .art-settings,
.art-video-player.art-backdrop .art-layer-auto-playback,
.art-video-player.art-backdrop .art-selector-list,
.art-video-player.art-backdrop .art-volume-inner {
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  backdrop-filter: saturate(180%) blur(20px);
  background-color: rgba(0, 0, 0, 0.75) !important;
}
.art-video {
  position: absolute;
  inset: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
}
.art-poster {
  position: absolute;
  inset: 0;
  z-index: 11;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  pointer-events: none;
}
.art-video-player .art-subtitle {
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  z-index: 20;
  width: 100%;
  padding: 0 5%;
  text-align: center;
  pointer-events: none;
  gap: var(--art-subtitle-gap);
  bottom: var(--art-subtitle-bottom);
  font-size: var(--art-subtitle-font-size);
  transition: bottom var(--art-transition-duration) ease;
  text-shadow: var(--art-subtitle-border) 1px 0 1px, var(--art-subtitle-border) 0 1px 1px, var(--art-subtitle-border) -1px 0 1px, var(--art-subtitle-border) 0 -1px 1px, var(--art-subtitle-border) 1px 1px 1px, var(--art-subtitle-border) -1px -1px 1px, var(--art-subtitle-border) 1px -1px 1px, var(--art-subtitle-border) -1px 1px 1px;
}
.art-video-player.art-subtitle-show .art-subtitle {
  display: flex;
}
.art-video-player.art-control-show .art-subtitle {
  bottom: calc(var(--art-control-height) + var(--art-subtitle-bottom));
}
.art-danmuku {
  position: absolute;
  inset: 0;
  z-index: 30;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}
.art-video-player .art-layers {
  position: absolute;
  inset: 0;
  z-index: 40;
  width: 100%;
  height: 100%;
  display: none;
  pointer-events: none;
}
.art-video-player .art-layers .art-layer {
  pointer-events: auto;
}
.art-video-player.art-layer-show .art-layers {
  display: flex;
}
.art-video-player .art-mask {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  inset: 0;
  z-index: 50;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.art-video-player .art-mask .art-state {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: scale(2);
  width: var(--art-state-size);
  height: var(--art-state-size);
  transition: all var(--art-transition-duration) ease;
}
.art-video-player.art-mask-show .art-state {
  pointer-events: auto;
  opacity: var(--art-state-opacity);
  transform: scale(1);
}
.art-video-player.art-loading-show .art-state {
  display: none;
}
.art-video-player .art-loading {
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  inset: 0;
  z-index: 70;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.art-video-player.art-loading-show .art-loading {
  display: flex;
}
.art-video-player.art-loading-show .art-mask {
  display: none;
}
.art-video-player .art-bottom {
  position: absolute;
  inset: 0;
  z-index: 60;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  padding: 0 var(--art-padding);
  transition: all var(--art-transition-duration) ease;
  background-size: 100% var(--art-bottom-height);
  background-image: linear-gradient(to top, #000, rgba(0, 0, 0, 0.4), transparent);
  background-repeat: repeat-x;
  background-position: center bottom;
}
.art-video-player .art-bottom .art-controls,
.art-video-player .art-bottom .art-progress {
  transform: translateY(var(--art-bottom-offset));
  transition: transform var(--art-transition-duration) ease;
}
.art-video-player.art-control-show .art-bottom,
.art-video-player.art-hover .art-bottom {
  opacity: 1;
}
.art-video-player.art-control-show .art-bottom .art-controls,
.art-video-player.art-hover .art-bottom .art-controls,
.art-video-player.art-control-show .art-bottom .art-progress,
.art-video-player.art-hover .art-bottom .art-progress {
  transform: translateY(0);
}
.art-bottom .art-progress {
  position: relative;
  z-index: 0;
  cursor: pointer;
  pointer-events: auto;
  padding-top: var(--art-progress-top-gap);
  padding-bottom: var(--art-bottom-gap);
}
.art-bottom .art-progress .art-control-progress {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--art-progress-height);
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner {
  display: flex;
  align-items: center;
  position: relative;
  height: 50%;
  width: 100%;
  transition: height var(--art-transition-duration) ease;
  background-color: var(--art-progress-color);
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-hover {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  width: 0%;
  background-color: var(--art-hover-color);
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-loaded {
  position: absolute;
  inset: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  width: 0%;
  background-color: var(--art-loaded-color);
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-played {
  position: absolute;
  inset: 0;
  z-index: 20;
  width: 100%;
  height: 100%;
  width: 0%;
  background-color: var(--art-theme);
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-highlight {
  position: absolute;
  inset: 0;
  z-index: 30;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-highlight span {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  right: auto;
  pointer-events: auto;
  width: var(--art-highlight-width) !important;
  transform: translateX(calc(var(--art-highlight-width) / -2));
  background-color: var(--art-highlight-color);
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 40;
  left: 0;
  border-radius: 50%;
  width: var(--art-indicator-size);
  height: var(--art-indicator-size);
  transform: scale(var(--art-indicator-scale));
  margin-left: calc(var(--art-indicator-size) / -2);
  transition: transform var(--art-transition-duration) ease;
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator .art-icon {
  width: 100%;
  height: 100%;
  pointer-events: none;
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator:hover {
  transform: scale(1.2) !important;
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator:active {
  transform: scale(1) !important;
}
.art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-tip {
  transform-origin: bottom center;
  transform: scale(0.5);
  opacity: 0;
  position: absolute;
  z-index: 50;
  top: -25px;
  left: 0;
  padding: 3px 5px;
  line-height: 1;
  font-size: 12px;
  border-radius: var(--art-border-radius);
  white-space: nowrap;
  background-color: var(--art-tip-background);
  transition: transform var(--art-transition-duration) ease, opacity var(--art-transition-duration) ease;
}
.art-bottom .art-progress .art-control-thumbnails {
  transform-origin: bottom center;
  transform: scale(0.5);
  opacity: 0;
  position: absolute;
  bottom: calc(var(--art-bottom-gap) + 10px);
  left: 0;
  border-radius: var(--art-border-radius);
  pointer-events: none;
  background-color: var(--art-widget-background);
  transition: transform var(--art-transition-duration) ease, opacity var(--art-transition-duration) ease;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 2px -1px rgba(0, 0, 0, 0.2);
}
.art-bottom .art-progress:hover .art-control-progress .art-control-progress-inner {
  height: 100%;
}
.art-bottom:hover .art-progress .art-control-progress .art-control-progress-inner .art-progress-indicator {
  transform: scale(1);
}
.art-progress-hover .art-bottom .art-progress .art-control-progress .art-control-progress-inner .art-progress-tip,
.art-progress-hover .art-bottom .art-progress .art-control-thumbnails {
  transform: scale(1);
  opacity: 1;
}
.art-video-player .art-controls {
  position: relative;
  z-index: 10;
  pointer-events: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--art-control-height);
}
.art-video-player .art-controls .art-controls-left,
.art-video-player .art-controls .art-controls-right {
  display: flex;
  height: 100%;
}
.art-video-player .art-controls .art-controls-center {
  display: none;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  padding: 0 10px;
}
.art-video-player .art-controls .art-controls-right {
  justify-content: flex-end;
}
.art-video-player .art-controls .art-control {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
  white-space: nowrap;
  opacity: var(--art-control-opacity);
  min-height: var(--art-control-height);
  min-width: var(--art-control-height);
  transition: opacity var(--art-transition-duration) ease;
}
.art-video-player .art-controls .art-control .art-icon {
  height: var(--art-control-icon-size);
  width: var(--art-control-icon-size);
  transform: scale(var(--art-control-icon-scale));
  transition: transform var(--art-transition-duration) ease;
}
.art-video-player .art-controls .art-control .art-icon:active {
  transform: scale(calc(var(--art-control-icon-scale) * 0.8));
}
.art-video-player .art-controls .art-control:hover {
  opacity: 1;
}
.art-control-volume {
  position: relative;
}
.art-control-volume .art-volume-panel {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  right: 0;
  padding: 0 5px;
  font-size: 12px;
  text-align: center;
  cursor: default;
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
  bottom: var(--art-control-height);
  width: var(--art-control-height);
  height: var(--art-volume-height);
  transition: all var(--art-transition-duration) ease;
}
.art-control-volume .art-volume-panel .art-volume-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  height: 100%;
  width: 100%;
  padding: 10px 0 12px;
  border-radius: var(--art-border-radius);
  background-color: var(--art-widget-background);
}
.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider {
  flex: 1;
  width: 100%;
  display: flex;
  cursor: pointer;
  position: relative;
  justify-content: center;
}
.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider .art-volume-handle {
  position: relative;
  display: flex;
  justify-content: center;
  width: 2px;
  border-radius: var(--art-border-radius);
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.25);
}
.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider .art-volume-handle .art-volume-loaded {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-color: var(--art-theme);
}
.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider .art-volume-indicator {
  position: absolute;
  width: var(--art-volume-handle-size);
  height: var(--art-volume-handle-size);
  margin-top: calc(var(--art-volume-handle-size) / -2);
  flex-shrink: 0;
  transform: scale(1);
  border-radius: 100%;
  background-color: var(--art-theme);
  transition: transform var(--art-transition-duration) ease;
}
.art-control-volume .art-volume-panel .art-volume-inner .art-volume-slider:active .art-volume-indicator {
  transform: scale(0.9);
}
.art-control-volume:hover .art-volume-panel {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
.art-video-player .art-notice {
  display: none;
  position: absolute;
  inset: 0;
  z-index: 80;
  width: 100%;
  height: 100%;
  height: auto;
  bottom: auto;
  padding: var(--art-padding);
  pointer-events: none;
}
.art-video-player .art-notice .art-notice-inner {
  display: inline-flex;
  padding: 5px;
  line-height: 1;
  border-radius: var(--art-border-radius);
  background-color: var(--art-tip-background);
}
.art-video-player.art-notice-show .art-notice {
  display: flex;
}
.art-video-player .art-contextmenus {
  display: none;
  flex-direction: column;
  position: absolute;
  z-index: 120;
  padding: 5px 0;
  border-radius: var(--art-border-radius);
  font-size: 12px;
  background-color: var(--art-widget-background);
  min-width: var(--art-contextmenus-min-width);
}
.art-video-player .art-contextmenus .art-contextmenu {
  cursor: pointer;
  display: flex;
  padding: 10px 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.art-video-player .art-contextmenus .art-contextmenu span {
  padding: 0 8px;
}
.art-video-player .art-contextmenus .art-contextmenu span:hover,
.art-video-player .art-contextmenus .art-contextmenu span.art-current {
  color: var(--art-theme);
}
.art-video-player .art-contextmenus .art-contextmenu:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.art-video-player .art-contextmenus .art-contextmenu:last-child {
  border-bottom: none;
}
.art-video-player.art-contextmenu-show .art-contextmenus {
  display: flex;
}
.art-video-player .art-settings {
  display: none;
  flex-direction: column;
  position: absolute;
  z-index: 90;
  left: auto;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: var(--art-border-radius);
  max-height: var(--art-settings-max-height);
  right: var(--art-padding);
  bottom: var(--art-control-height);
  transition: all var(--art-transition-duration) ease;
  background-color: var(--art-widget-background);
}
.art-video-player .art-settings .art-setting-panel {
  display: none;
  flex-direction: column;
}
.art-video-player .art-settings .art-setting-panel.art-current {
  display: flex;
}
.art-video-player .art-settings .art-setting-panel .art-setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5px;
  cursor: pointer;
  overflow: hidden;
  transition: background-color var(--art-transition-duration) ease;
}
.art-video-player .art-settings .art-setting-panel .art-setting-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.art-video-player .art-settings .art-setting-panel .art-setting-item.art-current {
  color: var(--art-theme);
}
.art-video-player .art-settings .art-setting-panel .art-setting-item .art-icon-check {
  visibility: hidden;
  height: 15px;
}
.art-video-player .art-settings .art-setting-panel .art-setting-item.art-current .art-icon-check {
  visibility: visible;
}
.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-left {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: 5px;
}
.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-left .art-setting-item-left-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: var(--art-settings-icon-size);
  width: var(--art-settings-icon-size);
}
.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 12px;
}
.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right .art-setting-item-right-tooltip {
  white-space: nowrap;
  color: rgba(255, 255, 255, 0.5);
}
.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right .art-setting-item-right-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  height: 24px;
}
.art-video-player .art-settings .art-setting-panel .art-setting-item .art-setting-item-right .art-setting-range {
  height: 3px;
  width: 80px;
  outline: none;
  appearance: none;
  background-color: rgba(255, 255, 255, 0.2);
}
.art-video-player .art-settings .art-setting-panel .art-setting-item-back {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
.art-video-player.art-setting-show .art-settings {
  display: flex;
}
.art-video-player .art-info {
  display: none;
  position: absolute;
  left: var(--art-padding);
  top: var(--art-padding);
  z-index: 100;
  padding: 10px;
  font-size: 12px;
  border-radius: var(--art-border-radius);
  background-color: var(--art-widget-background);
}
.art-video-player .art-info .art-info-panel {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.art-video-player .art-info .art-info-panel .art-info-item {
  display: flex;
  align-items: center;
  gap: 5px;
}
.art-video-player .art-info .art-info-panel .art-info-item .art-info-title {
  width: 100px;
  text-align: right;
}
.art-video-player .art-info .art-info-panel .art-info-item .art-info-content {
  width: 250px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  user-select: all;
}
.art-video-player .art-info .art-info-close {
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
}
.art-video-player.art-info-show .art-info {
  display: flex;
}
.art-hide-cursor * {
  cursor: none !important;
}
.art-video-player[data-aspect-ratio] {
  overflow: hidden;
}
.art-video-player[data-aspect-ratio] .art-video {
  object-fit: fill;
  box-sizing: content-box;
}
.art-fullscreen {
  --art-progress-height: 8px;
  --art-indicator-size: 20px;
  --art-control-height: 60px;
  --art-control-icon-scale: 1.3;
}
.art-fullscreen-web {
  --art-progress-height: 8px;
  --art-indicator-size: 20px;
  --art-control-height: 60px;
  --art-control-icon-scale: 1.3;
  position: fixed;
  inset: 0;
  z-index: var(--art-fullscreen-web-index);
  width: 100%;
  height: 100%;
}
.art-mini-popup {
  position: fixed;
  z-index: 9999;
  width: 320px;
  height: 180px;
  background: #000;
  border-radius: var(--art-border-radius);
  cursor: move;
  user-select: none;
  overflow: hidden;
  transition: opacity 0.2s ease;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
}
.art-mini-popup svg {
  fill: #fff;
}
.art-mini-popup .art-video {
  pointer-events: none;
}
.art-mini-popup .art-mini-close {
  position: absolute;
  z-index: 20;
  right: 10px;
  top: 10px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.2s ease;
}
.art-mini-popup .art-mini-state {
  position: absolute;
  inset: 0;
  z-index: 30;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.2s ease;
  background-color: rgba(0, 0, 0, 0.25);
}
.art-mini-popup .art-mini-state .art-icon {
  opacity: 0.75;
  cursor: pointer;
  transform: scale(3);
  pointer-events: auto;
  transition: transform 0.2s ease;
}
.art-mini-popup .art-mini-state .art-icon:active {
  transform: scale(2.5);
}
.art-mini-popup.art-mini-dragging {
  opacity: 0.9;
}
.art-mini-popup:hover .art-mini-close,
.art-mini-popup:hover .art-mini-state {
  opacity: 1;
}
.art-video-player[data-flip='horizontal'] .art-video {
  transform: scaleX(-1);
}
.art-video-player[data-flip='vertical'] .art-video {
  transform: scaleY(-1);
}
.art-video-player .art-layer-lock {
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  border-radius: 50%;
  transform: translateY(-50%);
  height: var(--art-lock-size);
  width: var(--art-lock-size);
  left: var(--art-padding);
  background-color: var(--art-tip-background);
}
.art-video-player .art-layer-auto-playback {
  display: none;
  gap: 10px;
  align-items: center;
  position: absolute;
  border-radius: var(--art-border-radius);
  padding: 10px;
  line-height: 1;
  left: var(--art-padding);
  bottom: calc(var(--art-control-height) + var(--art-bottom-gap) + 10px);
  background-color: var(--art-widget-background);
}
.art-video-player .art-layer-auto-playback .art-auto-playback-close {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.art-video-player .art-layer-auto-playback .art-auto-playback-close svg {
  width: 15px;
  height: 15px;
  fill: var(--art-theme);
}
.art-video-player .art-layer-auto-playback .art-auto-playback-jump {
  color: var(--art-theme);
  cursor: pointer;
}
.art-video-player.art-lock .art-subtitle {
  bottom: var(--art-subtitle-bottom) !important;
}
.art-video-player.art-mini-progress-bar .art-bottom,
.art-video-player.art-lock .art-bottom {
  opacity: 1;
  padding: 0;
  background-image: none;
}
.art-video-player.art-mini-progress-bar .art-bottom .art-controls,
.art-video-player.art-lock .art-bottom .art-controls,
.art-video-player.art-mini-progress-bar .art-bottom .art-progress,
.art-video-player.art-lock .art-bottom .art-progress {
  transform: translateY(calc(var(--art-control-height) + var(--art-bottom-gap) + var(--art-progress-height) / 4));
}
.art-video-player.art-mini-progress-bar .art-bottom .art-progress-indicator,
.art-video-player.art-lock .art-bottom .art-progress-indicator {
  display: none !important;
}
.art-video-player.art-control-show .art-layer-lock {
  display: flex;
}
.art-control-selector {
  position: relative;
  display: flex;
  justify-content: center;
}
.art-control-selector .art-selector-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: absolute;
  border-radius: var(--art-border-radius);
  overflow-y: auto;
  overflow-x: hidden;
  opacity: 0;
  transform: translateY(10px);
  pointer-events: none;
  bottom: var(--art-control-height);
  max-height: var(--art-selector-max-height);
  background-color: var(--art-widget-background);
  transition: all var(--art-transition-duration) ease;
}
.art-control-selector .art-selector-list .art-selector-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 10px 15px;
  flex-shrink: 0;
  line-height: 1;
}
.art-control-selector .art-selector-list .art-selector-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
}
.art-control-selector .art-selector-list .art-selector-item:hover,
.art-control-selector .art-selector-list .art-selector-item.art-current {
  color: var(--art-theme);
}
.art-control-selector:hover .art-selector-list {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
.art-video-player {
  /*! Hint.css - v2.7.0 - 2021-10-01
    * https://kushagra.dev/lab/hint/
    * Copyright (c) 2021 Kushagra Gour */
  /*-------------------------------------*\\
        HINT.css - A CSS tooltip library
    \\*-------------------------------------*/
  /**
    * HINT.css is a tooltip library made in pure CSS.
    *
    * Source: https://github.com/chinchang/hint.css
    * Demo: http://kushagragour.in/lab/hint/
    *
    */
  /**
    * source: hint-core.scss
    *
    * Defines the basic styling for the tooltip.
    * Each tooltip is made of 2 parts:
    * 	1) body (:after)
    * 	2) arrow (:before)
    *
    * Classes added:
    * 	1) hint
    */
  /**
    * source: hint-position.scss
    *
    * Defines the positoning logic for the tooltips.
    *
    * Classes added:
    * 	1) hint--top
    * 	2) hint--bottom
    * 	3) hint--left
    * 	4) hint--right
    */
  /**
    * set default color for tooltip arrows
    */
  /**
    * top tooltip
    */
  /**
    * bottom tooltip
    */
  /**
    * right tooltip
    */
  /**
    * left tooltip
    */
  /**
    * top-left tooltip
    */
  /**
    * top-right tooltip
    */
  /**
    * bottom-left tooltip
    */
  /**
    * bottom-right tooltip
    */
  /**
    * source: hint-sizes.scss
    *
    * Defines width restricted tooltips that can span
    * across multiple lines.
    *
    * Classes added:
    * 	1) hint--small
    * 	2) hint--medium
    * 	3) hint--large
    *
    */
  /**
    * source: hint-theme.scss
    *
    * Defines basic theme for tooltips.
    *
    */
  /**
    * source: hint-color-types.scss
    *
    * Contains tooltips of various types based on color differences.
    *
    * Classes added:
    * 	1) hint--error
    * 	2) hint--warning
    * 	3) hint--info
    * 	4) hint--success
    *
    */
  /**
    * Error
    */
  /**
    * Warning
    */
  /**
    * Info
    */
  /**
    * Success
    */
  /**
    * source: hint-always.scss
    *
    * Defines a persisted tooltip which shows always.
    *
    * Classes added:
    * 	1) hint--always
    *
    */
  /**
    * source: hint-rounded.scss
    *
    * Defines rounded corner tooltips.
    *
    * Classes added:
    * 	1) hint--rounded
    *
    */
  /**
    * source: hint-effects.scss
    *
    * Defines various transition effects for the tooltips.
    *
    * Classes added:
    * 	1) hint--no-animate
    * 	2) hint--bounce
    *
    */
}
.art-video-player [class*='hint--'] {
  position: relative;
  display: inline-block;
  font-style: normal;
  /**
        * tooltip arrow
        */
  /**
        * tooltip body
        */
}
.art-video-player [class*='hint--']:before,
.art-video-player [class*='hint--']:after {
  position: absolute;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  visibility: hidden;
  opacity: 0;
  z-index: 1000000;
  pointer-events: none;
  -webkit-transition: 0.3s ease;
  -moz-transition: 0.3s ease;
  transition: 0.3s ease;
  -webkit-transition-delay: 0ms;
  -moz-transition-delay: 0ms;
  transition-delay: 0ms;
}
.art-video-player [class*='hint--']:hover:before,
.art-video-player [class*='hint--']:hover:after {
  visibility: visible;
  opacity: 1;
}
.art-video-player [class*='hint--']:hover:before,
.art-video-player [class*='hint--']:hover:after {
  -webkit-transition-delay: 100ms;
  -moz-transition-delay: 100ms;
  transition-delay: 100ms;
}
.art-video-player [class*='hint--']:before {
  content: '';
  position: absolute;
  background: transparent;
  border: 6px solid transparent;
  z-index: 1000001;
}
.art-video-player [class*='hint--']:after {
  background: #000000;
  color: white;
  padding: 8px 10px;
  font-size: 12px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  line-height: 12px;
  white-space: nowrap;
}
.art-video-player [class*='hint--'][aria-label]:after {
  content: attr(aria-label);
}
.art-video-player [class*='hint--'][data-hint]:after {
  content: attr(data-hint);
}
.art-video-player [aria-label='']:before,
.art-video-player [aria-label='']:after,
.art-video-player [data-hint='']:before,
.art-video-player [data-hint='']:after {
  display: none !important;
}
.art-video-player .hint--top-left:before {
  border-top-color: #000000;
}
.art-video-player .hint--top-right:before {
  border-top-color: #000000;
}
.art-video-player .hint--top:before {
  border-top-color: #000000;
}
.art-video-player .hint--bottom-left:before {
  border-bottom-color: #000000;
}
.art-video-player .hint--bottom-right:before {
  border-bottom-color: #000000;
}
.art-video-player .hint--bottom:before {
  border-bottom-color: #000000;
}
.art-video-player .hint--left:before {
  border-left-color: #000000;
}
.art-video-player .hint--right:before {
  border-right-color: #000000;
}
.art-video-player .hint--top:before {
  margin-bottom: -11px;
}
.art-video-player .hint--top:before,
.art-video-player .hint--top:after {
  bottom: 100%;
  left: 50%;
}
.art-video-player .hint--top:before {
  left: calc(50% - 6px);
}
.art-video-player .hint--top:after {
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  transform: translateX(-50%);
}
.art-video-player .hint--top:hover:before {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px);
}
.art-video-player .hint--top:hover:after {
  -webkit-transform: translateX(-50%) translateY(-8px);
  -moz-transform: translateX(-50%) translateY(-8px);
  transform: translateX(-50%) translateY(-8px);
}
.art-video-player .hint--bottom:before {
  margin-top: -11px;
}
.art-video-player .hint--bottom:before,
.art-video-player .hint--bottom:after {
  top: 100%;
  left: 50%;
}
.art-video-player .hint--bottom:before {
  left: calc(50% - 6px);
}
.art-video-player .hint--bottom:after {
  -webkit-transform: translateX(-50%);
  -moz-transform: translateX(-50%);
  transform: translateX(-50%);
}
.art-video-player .hint--bottom:hover:before {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px);
}
.art-video-player .hint--bottom:hover:after {
  -webkit-transform: translateX(-50%) translateY(8px);
  -moz-transform: translateX(-50%) translateY(8px);
  transform: translateX(-50%) translateY(8px);
}
.art-video-player .hint--right:before {
  margin-left: -11px;
  margin-bottom: -6px;
}
.art-video-player .hint--right:after {
  margin-bottom: -14px;
}
.art-video-player .hint--right:before,
.art-video-player .hint--right:after {
  left: 100%;
  bottom: 50%;
}
.art-video-player .hint--right:hover:before {
  -webkit-transform: translateX(8px);
  -moz-transform: translateX(8px);
  transform: translateX(8px);
}
.art-video-player .hint--right:hover:after {
  -webkit-transform: translateX(8px);
  -moz-transform: translateX(8px);
  transform: translateX(8px);
}
.art-video-player .hint--left:before {
  margin-right: -11px;
  margin-bottom: -6px;
}
.art-video-player .hint--left:after {
  margin-bottom: -14px;
}
.art-video-player .hint--left:before,
.art-video-player .hint--left:after {
  right: 100%;
  bottom: 50%;
}
.art-video-player .hint--left:hover:before {
  -webkit-transform: translateX(-8px);
  -moz-transform: translateX(-8px);
  transform: translateX(-8px);
}
.art-video-player .hint--left:hover:after {
  -webkit-transform: translateX(-8px);
  -moz-transform: translateX(-8px);
  transform: translateX(-8px);
}
.art-video-player .hint--top-left:before {
  margin-bottom: -11px;
}
.art-video-player .hint--top-left:before,
.art-video-player .hint--top-left:after {
  bottom: 100%;
  left: 50%;
}
.art-video-player .hint--top-left:before {
  left: calc(50% - 6px);
}
.art-video-player .hint--top-left:after {
  -webkit-transform: translateX(-100%);
  -moz-transform: translateX(-100%);
  transform: translateX(-100%);
}
.art-video-player .hint--top-left:after {
  margin-left: 12px;
}
.art-video-player .hint--top-left:hover:before {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px);
}
.art-video-player .hint--top-left:hover:after {
  -webkit-transform: translateX(-100%) translateY(-8px);
  -moz-transform: translateX(-100%) translateY(-8px);
  transform: translateX(-100%) translateY(-8px);
}
.art-video-player .hint--top-right:before {
  margin-bottom: -11px;
}
.art-video-player .hint--top-right:before,
.art-video-player .hint--top-right:after {
  bottom: 100%;
  left: 50%;
}
.art-video-player .hint--top-right:before {
  left: calc(50% - 6px);
}
.art-video-player .hint--top-right:after {
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  transform: translateX(0);
}
.art-video-player .hint--top-right:after {
  margin-left: -12px;
}
.art-video-player .hint--top-right:hover:before {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px);
}
.art-video-player .hint--top-right:hover:after {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px);
}
.art-video-player .hint--bottom-left:before {
  margin-top: -11px;
}
.art-video-player .hint--bottom-left:before,
.art-video-player .hint--bottom-left:after {
  top: 100%;
  left: 50%;
}
.art-video-player .hint--bottom-left:before {
  left: calc(50% - 6px);
}
.art-video-player .hint--bottom-left:after {
  -webkit-transform: translateX(-100%);
  -moz-transform: translateX(-100%);
  transform: translateX(-100%);
}
.art-video-player .hint--bottom-left:after {
  margin-left: 12px;
}
.art-video-player .hint--bottom-left:hover:before {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px);
}
.art-video-player .hint--bottom-left:hover:after {
  -webkit-transform: translateX(-100%) translateY(8px);
  -moz-transform: translateX(-100%) translateY(8px);
  transform: translateX(-100%) translateY(8px);
}
.art-video-player .hint--bottom-right:before {
  margin-top: -11px;
}
.art-video-player .hint--bottom-right:before,
.art-video-player .hint--bottom-right:after {
  top: 100%;
  left: 50%;
}
.art-video-player .hint--bottom-right:before {
  left: calc(50% - 6px);
}
.art-video-player .hint--bottom-right:after {
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  transform: translateX(0);
}
.art-video-player .hint--bottom-right:after {
  margin-left: -12px;
}
.art-video-player .hint--bottom-right:hover:before {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px);
}
.art-video-player .hint--bottom-right:hover:after {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px);
}
.art-video-player .hint--small:after,
.art-video-player .hint--medium:after,
.art-video-player .hint--large:after {
  white-space: normal;
  line-height: 1.4em;
  word-wrap: break-word;
}
.art-video-player .hint--small:after {
  width: 80px;
}
.art-video-player .hint--medium:after {
  width: 150px;
}
.art-video-player .hint--large:after {
  width: 300px;
}
.art-video-player [class*='hint--'] {
  /**
        * tooltip body
        */
}
.art-video-player [class*='hint--']:after {
  text-shadow: 0 -1px 0px black;
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
}
.art-video-player .hint--error:after {
  background-color: #b34e4d;
  text-shadow: 0 -1px 0px #592726;
}
.art-video-player .hint--error.hint--top-left:before {
  border-top-color: #b34e4d;
}
.art-video-player .hint--error.hint--top-right:before {
  border-top-color: #b34e4d;
}
.art-video-player .hint--error.hint--top:before {
  border-top-color: #b34e4d;
}
.art-video-player .hint--error.hint--bottom-left:before {
  border-bottom-color: #b34e4d;
}
.art-video-player .hint--error.hint--bottom-right:before {
  border-bottom-color: #b34e4d;
}
.art-video-player .hint--error.hint--bottom:before {
  border-bottom-color: #b34e4d;
}
.art-video-player .hint--error.hint--left:before {
  border-left-color: #b34e4d;
}
.art-video-player .hint--error.hint--right:before {
  border-right-color: #b34e4d;
}
.art-video-player .hint--warning:after {
  background-color: #c09854;
  text-shadow: 0 -1px 0px #6c5328;
}
.art-video-player .hint--warning.hint--top-left:before {
  border-top-color: #c09854;
}
.art-video-player .hint--warning.hint--top-right:before {
  border-top-color: #c09854;
}
.art-video-player .hint--warning.hint--top:before {
  border-top-color: #c09854;
}
.art-video-player .hint--warning.hint--bottom-left:before {
  border-bottom-color: #c09854;
}
.art-video-player .hint--warning.hint--bottom-right:before {
  border-bottom-color: #c09854;
}
.art-video-player .hint--warning.hint--bottom:before {
  border-bottom-color: #c09854;
}
.art-video-player .hint--warning.hint--left:before {
  border-left-color: #c09854;
}
.art-video-player .hint--warning.hint--right:before {
  border-right-color: #c09854;
}
.art-video-player .hint--info:after {
  background-color: #3986ac;
  text-shadow: 0 -1px 0px #1a3c4d;
}
.art-video-player .hint--info.hint--top-left:before {
  border-top-color: #3986ac;
}
.art-video-player .hint--info.hint--top-right:before {
  border-top-color: #3986ac;
}
.art-video-player .hint--info.hint--top:before {
  border-top-color: #3986ac;
}
.art-video-player .hint--info.hint--bottom-left:before {
  border-bottom-color: #3986ac;
}
.art-video-player .hint--info.hint--bottom-right:before {
  border-bottom-color: #3986ac;
}
.art-video-player .hint--info.hint--bottom:before {
  border-bottom-color: #3986ac;
}
.art-video-player .hint--info.hint--left:before {
  border-left-color: #3986ac;
}
.art-video-player .hint--info.hint--right:before {
  border-right-color: #3986ac;
}
.art-video-player .hint--success:after {
  background-color: #458746;
  text-shadow: 0 -1px 0px #1a321a;
}
.art-video-player .hint--success.hint--top-left:before {
  border-top-color: #458746;
}
.art-video-player .hint--success.hint--top-right:before {
  border-top-color: #458746;
}
.art-video-player .hint--success.hint--top:before {
  border-top-color: #458746;
}
.art-video-player .hint--success.hint--bottom-left:before {
  border-bottom-color: #458746;
}
.art-video-player .hint--success.hint--bottom-right:before {
  border-bottom-color: #458746;
}
.art-video-player .hint--success.hint--bottom:before {
  border-bottom-color: #458746;
}
.art-video-player .hint--success.hint--left:before {
  border-left-color: #458746;
}
.art-video-player .hint--success.hint--right:before {
  border-right-color: #458746;
}
.art-video-player .hint--always:after,
.art-video-player .hint--always:before {
  opacity: 1;
  visibility: visible;
}
.art-video-player .hint--always.hint--top:before {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px);
}
.art-video-player .hint--always.hint--top:after {
  -webkit-transform: translateX(-50%) translateY(-8px);
  -moz-transform: translateX(-50%) translateY(-8px);
  transform: translateX(-50%) translateY(-8px);
}
.art-video-player .hint--always.hint--top-left:before {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px);
}
.art-video-player .hint--always.hint--top-left:after {
  -webkit-transform: translateX(-100%) translateY(-8px);
  -moz-transform: translateX(-100%) translateY(-8px);
  transform: translateX(-100%) translateY(-8px);
}
.art-video-player .hint--always.hint--top-right:before {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px);
}
.art-video-player .hint--always.hint--top-right:after {
  -webkit-transform: translateY(-8px);
  -moz-transform: translateY(-8px);
  transform: translateY(-8px);
}
.art-video-player .hint--always.hint--bottom:before {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px);
}
.art-video-player .hint--always.hint--bottom:after {
  -webkit-transform: translateX(-50%) translateY(8px);
  -moz-transform: translateX(-50%) translateY(8px);
  transform: translateX(-50%) translateY(8px);
}
.art-video-player .hint--always.hint--bottom-left:before {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px);
}
.art-video-player .hint--always.hint--bottom-left:after {
  -webkit-transform: translateX(-100%) translateY(8px);
  -moz-transform: translateX(-100%) translateY(8px);
  transform: translateX(-100%) translateY(8px);
}
.art-video-player .hint--always.hint--bottom-right:before {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px);
}
.art-video-player .hint--always.hint--bottom-right:after {
  -webkit-transform: translateY(8px);
  -moz-transform: translateY(8px);
  transform: translateY(8px);
}
.art-video-player .hint--always.hint--left:before {
  -webkit-transform: translateX(-8px);
  -moz-transform: translateX(-8px);
  transform: translateX(-8px);
}
.art-video-player .hint--always.hint--left:after {
  -webkit-transform: translateX(-8px);
  -moz-transform: translateX(-8px);
  transform: translateX(-8px);
}
.art-video-player .hint--always.hint--right:before {
  -webkit-transform: translateX(8px);
  -moz-transform: translateX(8px);
  transform: translateX(8px);
}
.art-video-player .hint--always.hint--right:after {
  -webkit-transform: translateX(8px);
  -moz-transform: translateX(8px);
  transform: translateX(8px);
}
.art-video-player .hint--rounded:after {
  border-radius: 4px;
}
.art-video-player .hint--no-animate:before,
.art-video-player .hint--no-animate:after {
  -webkit-transition-duration: 0ms;
  -moz-transition-duration: 0ms;
  transition-duration: 0ms;
}
.art-video-player .hint--bounce:before,
.art-video-player .hint--bounce:after {
  -webkit-transition: opacity 0.3s ease, visibility 0.3s ease, -webkit-transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24);
  -moz-transition: opacity 0.3s ease, visibility 0.3s ease, -moz-transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24);
  transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s cubic-bezier(0.71, 1.7, 0.77, 1.24);
}
.art-video-player .hint--no-shadow:before,
.art-video-player .hint--no-shadow:after {
  text-shadow: initial;
  box-shadow: initial;
}
.art-video-player .hint--no-arrow:before {
  display: none;
}
.art-video-player.art-mobile {
  --art-bottom-gap: 10px;
  --art-control-height: 38px;
  --art-control-icon-scale: 1;
  --art-state-size: 60px;
  --art-settings-max-height: 180px;
  --art-selector-max-height: 180px;
  --art-indicator-scale: 1;
  --art-control-opacity: 1;
}
.art-video-player.art-mobile .art-controls-left {
  margin-left: calc(var(--art-padding) / -1);
}
.art-video-player.art-mobile .art-controls-right {
  margin-right: calc(var(--art-padding) / -1);
}
`;class Mo extends lt{constructor(t){super(t),this.name="subtitle",this.option=null,this.destroyEvent=()=>null,this.init(t.option.subtitle);let e=!1;t.on("video:timeupdate",()=>{if(!this.url)return;const i=this.art.template.$video.webkitDisplayingFullscreen;typeof i=="boolean"&&i!==e&&(e=i,this.createTrack(i?"subtitles":"metadata",this.url))})}get url(){return this.art.template.$track.src}set url(t){this.switch(t)}get textTrack(){var t,e;return(e=(t=this.art.template.$video)==null?void 0:t.textTracks)==null?void 0:e[0]}get activeCues(){return this.textTrack?Array.from(this.textTrack.activeCues):[]}get cues(){return this.textTrack?Array.from(this.textTrack.cues):[]}style(t,e){const{$subtitle:i}=this.art.template;return typeof t=="object"?Vt(i,t):u(i,t,e)}update(){const{option:{subtitle:t},template:{$subtitle:e}}=this.art;e.innerHTML="",this.activeCues.length&&(this.art.emit("subtitleBeforeUpdate",this.activeCues),e.innerHTML=this.activeCues.map((i,o)=>i.text.split(/\r?\n/).filter(r=>r.trim()).map(r=>`<div class="art-subtitle-line" data-group="${o}">
                                ${t.escape?Re(r):r}
                            </div>`).join("")).join(""),this.art.emit("subtitleAfterUpdate",this.activeCues))}async switch(t,e={}){const{i18n:i,notice:o,option:r}=this.art,a={...r.subtitle,...e,url:t},s=await this.init(a);return e.name&&(o.show=`${i.get("Switch Subtitle")}: ${e.name}`),s}createTrack(t,e){const{template:i,proxy:o,option:r}=this.art,{$video:a,$track:s}=i,c=N("track");c.default=!0,c.kind=t,c.src=e,c.label=r.subtitle.name||"Artplayer",c.track.mode="hidden",c.onload=()=>{this.art.emit("subtitleLoad",this.cues,this.option)},this.art.events.remove(this.destroyEvent),s.onload=null,Ft(s),k(a,c),i.$track=c,this.destroyEvent=o(this.textTrack,"cuechange",()=>this.update())}async init(t){const{notice:e,template:{$subtitle:i}}=this.art;if(!this.textTrack)return null;if(kt(t,Zt.subtitle),!!t.url)return this.option=t,this.style(t.style),fetch(t.url).then(o=>o.arrayBuffer()).then(o=>{const a=new TextDecoder(t.encoding).decode(o);switch(t.type||Tt(t.url)){case"srt":{const s=Oe(a),c=t.onVttLoad(s);return Rt(c)}case"ass":{const s=Fe(a),c=t.onVttLoad(s);return Rt(c)}case"vtt":{const s=t.onVttLoad(a);return Rt(s)}default:return t.url}}).then(o=>(i.innerHTML="",this.url===o||(URL.revokeObjectURL(this.url),this.createTrack("metadata",o)),o)).catch(o=>{throw i.innerHTML="",e.show=o,o})}}class At{constructor(t){this.art=t;const{option:e,constructor:i}=t;e.container instanceof Element?this.$container=e.container:(this.$container=q(e.container),Z(this.$container,`No container element found by ${e.container}`)),Z(_e(),"The current browser does not support flex layout");const o=this.$container.tagName.toLowerCase();Z(o==="div",`Unsupported container element type, only support 'div' but got '${o}'`),Z(i.instances.every(r=>r.template.$container!==this.$container),"Cannot mount multiple instances on the same dom element"),this.query=this.query.bind(this),this.$container.dataset.artId=t.id,this.init()}static get html(){return`
          <div class="art-video-player art-subtitle-show art-layer-show art-control-show art-mask-show">
            <video class="art-video">
              <track default kind="metadata" src=""></track>
            </video>
            <div class="art-poster"></div>
            <div class="art-subtitle"></div>
            <div class="art-danmuku"></div>
            <div class="art-layers"></div>
            <div class="art-mask">
              <div class="art-state"></div>
            </div>
            <div class="art-bottom">
              <div class="art-progress"></div>
              <div class="art-controls">
                <div class="art-controls-left"></div>
                <div class="art-controls-center"></div>
                <div class="art-controls-right"></div>
              </div>
            </div>
            <div class="art-loading"></div>
            <div class="art-notice">
              <div class="art-notice-inner"></div>
            </div>
            <div class="art-settings"></div>
            <div class="art-info">
              <div class="art-info-panel">
                <div class="art-info-item">
                  <div class="art-info-title">Player version:</div>
                  <div class="art-info-content">${Jt}</div>
                </div>
                <div class="art-info-item">
                  <div class="art-info-title">Video url:</div>
                  <div class="art-info-content" data-video="currentSrc"></div>
                </div>
                <div class="art-info-item">
                  <div class="art-info-title">Video volume:</div>
                  <div class="art-info-content" data-video="volume"></div>
                </div>
                <div class="art-info-item">
                  <div class="art-info-title">Video time:</div>
                  <div class="art-info-content" data-video="currentTime"></div>
                </div>
                <div class="art-info-item">
                  <div class="art-info-title">Video duration:</div>
                  <div class="art-info-content" data-video="duration"></div>
                </div>
                <div class="art-info-item">
                  <div class="art-info-title">Video resolution:</div>
                  <div class="art-info-content">
                    <span data-video="videoWidth"></span> x <span data-video="videoHeight"></span>
                  </div>
                </div>
              </div>
              <div class="art-info-close">[x]</div>
            </div>
            <div class="art-contextmenus"></div>
          </div>
        `}query(t){return q(t,this.$container)}init(){const{option:t}=this.art;if(t.useSSR||(this.$container.innerHTML=At.html),this.$player=this.query(".art-video-player"),this.$video=this.query(".art-video"),this.$track=this.query("track"),this.$poster=this.query(".art-poster"),this.$subtitle=this.query(".art-subtitle"),this.$danmuku=this.query(".art-danmuku"),this.$bottom=this.query(".art-bottom"),this.$progress=this.query(".art-progress"),this.$controls=this.query(".art-controls"),this.$controlsLeft=this.query(".art-controls-left"),this.$controlsCenter=this.query(".art-controls-center"),this.$controlsRight=this.query(".art-controls-right"),this.$layer=this.query(".art-layers"),this.$loading=this.query(".art-loading"),this.$notice=this.query(".art-notice"),this.$noticeInner=this.query(".art-notice-inner"),this.$mask=this.query(".art-mask"),this.$state=this.query(".art-state"),this.$setting=this.query(".art-settings"),this.$info=this.query(".art-info"),this.$infoPanel=this.query(".art-info-panel"),this.$infoClose=this.query(".art-info-close"),this.$contextmenu=this.query(".art-contextmenus"),t.proxy){const e=t.proxy.call(this.art,this.art);Z(e instanceof HTMLVideoElement||e instanceof HTMLCanvasElement,"Function 'option.proxy' needs to return 'HTMLVideoElement' or 'HTMLCanvasElement'"),te(e,this.$video),e.className="art-video",this.$video=e}t.backdrop&&E(this.$player,"art-backdrop"),O&&E(this.$player,"art-mobile")}destroy(t){t?this.$container.innerHTML="":E(this.$player,"art-destroy")}}class de{on(t,e,i){const o=this.e||(this.e={});return(o[t]||(o[t]=[])).push({fn:e,ctx:i}),this}once(t,e,i){const o=this;function r(...a){o.off(t,r),e.apply(i,a)}return r._=e,this.on(t,r,i)}emit(t,...e){const i=((this.e||(this.e={}))[t]||[]).slice();for(let o=0;o<i.length;o+=1)i[o].fn.apply(i[o].ctx,e);return this}off(t,e){const i=this.e||(this.e={}),o=i[t],r=[];if(o&&e)for(let a=0,s=o.length;a<s;a+=1)o[a].fn!==e&&o[a].fn._!==e&&r.push(o[a]);return r.length?i[t]=r:delete i[t],this}}let So=0;const _t=[];class z extends de{constructor(t,e){if(super(),!Ot)throw new Error("Artplayer can only be used in the browser environment");this.id=++So;const i=Ht(z.option,t);if(i.container=t.container,this.option=kt(i,Zt),this.isLock=!1,this.isReady=!1,this.isFocus=!1,this.isInput=!1,this.isRotate=!1,this.isDestroy=!1,this.template=new At(this),this.events=new Un(this),this.storage=new Eo(this),this.icons=new Ci(this),this.i18n=new Zn(this),this.notice=new zi(this),this.player=new fo(this),this.layers=new Ei(this),this.controls=new Fn(this),this.contextmenu=new En(this),this.subtitle=new Mo(this),this.info=new Ti(this),this.loading=new Mi(this),this.hotkey=new Gn(this),this.mask=new Si(this),this.setting=new To(this),this.plugins=new wo(this),typeof e=="function"&&this.on("ready",()=>e.call(this,this)),z.DEBUG){const o=r=>console.log(`[ART.${this.id}] -> ${r}`);o(`Version@${z.version}`);for(let r=0;r<$t.events.length;r++)this.on(`video:${$t.events[r]}`,a=>o(`Event@${a.type}`))}_t.push(this)}static get instances(){return _t}static get version(){return Jt}static get config(){return $t}static get utils(){return bn}static get scheme(){return Zt}static get Emitter(){return de}static get validator(){return kt}static get kindOf(){return kt.kindOf}static get html(){return At.html}static get option(){return{id:"",container:"#artplayer",url:"",poster:"",type:"",theme:"#f00",volume:.7,isLive:!1,muted:!1,autoplay:!1,autoSize:!1,autoMini:!1,loop:!1,flip:!1,playbackRate:!1,aspectRatio:!1,screenshot:!1,setting:!1,hotkey:!0,pip:!1,mutex:!0,backdrop:!0,fullscreen:!1,fullscreenWeb:!1,subtitleOffset:!1,miniProgressBar:!1,useSSR:!1,playsInline:!0,lock:!1,gesture:!0,fastForward:!1,autoPlayback:!1,autoOrientation:!1,airplay:!1,proxy:void 0,layers:[],contextmenu:[],controls:[],settings:[],quality:[],highlight:[],plugins:[],thumbnails:{url:"",number:60,column:10,width:0,height:0,scale:1},subtitle:{url:"",type:"",style:{},name:"",escape:!0,encoding:"utf-8",onVttLoad:t=>t},moreVideoAttr:{controls:!1,preload:Ce?"auto":"metadata"},i18n:{},icons:{},cssVar:{},customType:{},lang:navigator==null?void 0:navigator.language.toLowerCase()}}get proxy(){return this.events.proxy}get query(){return this.template.query}get video(){return this.template.$video}reset(){this.video.removeAttribute("src"),this.video.load()}destroy(t=!0){z.REMOVE_SRC_WHEN_DESTROY&&this.reset(),this.events.destroy(),this.template.destroy(t),_t.splice(_t.indexOf(this),1),this.isDestroy=!0,this.emit("destroy")}}z.STYLE=We;z.DEBUG=!1;z.CONTEXTMENU=!0;z.NOTICE_TIME=2e3;z.SETTING_WIDTH=250;z.SETTING_ITEM_WIDTH=200;z.SETTING_ITEM_HEIGHT=35;z.RESIZE_TIME=200;z.SCROLL_TIME=200;z.SCROLL_GAP=50;z.AUTO_PLAYBACK_MAX=10;z.AUTO_PLAYBACK_MIN=5;z.AUTO_PLAYBACK_TIMEOUT=3e3;z.RECONNECT_TIME_MAX=5;z.RECONNECT_SLEEP_TIME=1e3;z.CONTROL_HIDE_TIME=3e3;z.DBCLICK_TIME=300;z.DBCLICK_FULLSCREEN=!0;z.MOBILE_DBCLICK_PLAY=!0;z.MOBILE_CLICK_PLAY=!1;z.AUTO_ORIENTATION_TIME=200;z.INFO_LOOP_TIME=1e3;z.FAST_FORWARD_VALUE=3;z.FAST_FORWARD_TIME=1e3;z.TOUCH_MOVE_RATIO=.5;z.VOLUME_STEP=.1;z.SEEK_STEP=5;z.PLAYBACK_RATE=[.5,.75,1,1.25,1.5,2];z.ASPECT_RATIO=["default","4:3","16:9"];z.FLIP=["normal","horizontal","vertical"];z.FULLSCREEN_WEB_IN_BODY=!0;z.LOG_VERSION=!0;z.USE_RAF=!1;z.REMOVE_SRC_WHEN_DESTROY=!0;Ot&&(ze("artplayer-style",We),setTimeout(()=>{z.LOG_VERSION&&console.log(`%c ArtPlayer %c ${z.version} %c https://artplayer.org`,"color: #fff; background: #5f5f5f","color: #fff; background: #4bc729","")},100));/*!
 * artplayer-plugin-danmuku.js v5.3.0
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2026 Harvey Zhao
 * Released under the MIT License.
 */function Ye(n){switch(n){case 1:case 2:case 3:return 0;case 4:return 2;case 5:return 1;default:return 0}}function ne(n){if(typeof n!="string")return[];const t=/<d[^>]*?p="(?<p>[^"]+)"[^>]*>(?<text>.*?)<\/d>/gs,e=n.matchAll(t);return Array.from(e).map(i=>{const o=i.groups.p.split(",");return o.length>=8?{text:i.groups.text.trim().replaceAll("&quot;",'"').replaceAll("&apos;","'").replaceAll("&lt;","<").replaceAll("&gt;",">").replaceAll("&amp;","&"),time:Number(o[0]),mode:Ye(Number(o[1])),fontSize:Number(o[2]),color:`#${Number(o[3]).toString(16)}`,timestamp:Number(o[4]),pool:Number(o[5]),userID:o[6],rowID:Number(o[7])}:null}).filter(Boolean)}function zo({data:n}){const{xml:t,id:e}=n;if(!e||!t)return;const i=ne(t);globalThis.postMessage({danmus:i,id:e})}function _o(){const n=`
        ${Ye.toString()}
        ${ne.toString()}
        onmessage = ${zo.toString()}
    `,t=new Blob([n],{type:"application/javascript"});return new Worker(URL.createObjectURL(t))}function Lo(n){return new Promise(async t=>{const i=await(await fetch(n)).text();try{const o=_o();o.onmessage=r=>{const{danmus:a,id:s}=r.data;!s||!a||(t(a),o.terminate())},o.postMessage({xml:i,id:Date.now()})}catch(o){console.error("Error parsing Bilibili Danmu:",o);const r=ne(i);t(r)}})}const je=`/*!
 * artplayer-plugin-danmuku.js v5.3.0
 * Github: https://github.com/zhw2590582/ArtPlayer
 * (c) 2017-2026 Harvey Zhao
 * Released under the MIT License.
 */
function getDanmuTop({ target, visibles, clientWidth, clientHeight, marginBottom, marginTop, antiOverlap }) {
  const maxTop = clientHeight - marginBottom;
  const danmus = visibles.filter((item) => item.mode === target.mode && item.top <= maxTop).sort((prev, next) => prev.top - next.top);
  if (danmus.length === 0) {
    if (target.mode === 2) {
      return maxTop - target.height;
    } else {
      return marginTop;
    }
  }
  danmus.unshift({
    type: "top",
    top: 0,
    left: 0,
    right: 0,
    height: marginTop,
    width: clientWidth,
    speed: 0,
    distance: clientWidth
  });
  danmus.push({
    type: "bottom",
    top: maxTop,
    left: 0,
    right: 0,
    height: marginBottom,
    width: clientWidth,
    speed: 0,
    distance: clientWidth
  });
  if (target.mode === 2) {
    for (let index = danmus.length - 2; index >= 0; index -= 1) {
      const item = danmus[index];
      const prev = danmus[index + 1];
      const itemBottom = item.top + item.height;
      const diff = prev.top - itemBottom;
      if (diff >= target.height) {
        return prev.top - target.height;
      }
    }
  } else {
    for (let index = 1; index < danmus.length; index += 1) {
      const item = danmus[index];
      const prev = danmus[index - 1];
      const prevBottom = prev.top + prev.height;
      const diff = item.top - prevBottom;
      if (diff >= target.height) {
        return prevBottom;
      }
    }
  }
  const topMap = [];
  for (let index = 1; index < danmus.length - 1; index += 1) {
    const item = danmus[index];
    if (topMap.length) {
      const last = topMap[topMap.length - 1];
      if (last[0].top === item.top) {
        last.push(item);
      } else {
        topMap.push([item]);
      }
    } else {
      topMap.push([item]);
    }
  }
  if (antiOverlap) {
    switch (target.mode) {
      case 0: {
        const result = topMap.find((list) => {
          return list.every((danmu) => {
            if (clientWidth < danmu.distance)
              return false;
            if (target.speed < danmu.speed)
              return true;
            const overlapTime = danmu.right / (target.speed - danmu.speed);
            if (overlapTime > danmu.time)
              return true;
            return false;
          });
        });
        return result && result[0] ? result[0].top : void 0;
      }
      // 静止弹幕没有重叠问题
      case 1:
      case 2:
        return void 0;
    }
  } else {
    switch (target.mode) {
      case 0:
        topMap.sort((prev, next) => {
          const nextMinRight = Math.min(...next.map((item) => item.right));
          const prevMinRight = Math.min(...prev.map((item) => item.right));
          return nextMinRight * next.length - prevMinRight * prev.length;
        });
        break;
      case 1:
      case 2:
        topMap.sort((prev, next) => {
          const nextMaxWidth = Math.max(...next.map((item) => item.width));
          const prevMaxWidth = Math.max(...prev.map((item) => item.width));
          return prevMaxWidth * prev.length - nextMaxWidth * next.length;
        });
        break;
    }
    return topMap[0][0].top;
  }
}
onmessage = (event) => {
  const { data } = event;
  if (!data.id || !data.type)
    return;
  const fns = { getDanmuTop };
  const fn = fns[data.type];
  const result = fn(data);
  globalThis.postMessage({
    result,
    id: data.id
  });
};
`,pe=typeof self<"u"&&self.Blob&&new Blob(["URL.revokeObjectURL(import.meta.url);",je],{type:"text/javascript;charset=utf-8"});function Io(n){let t;try{if(t=pe&&(self.URL||self.webkitURL).createObjectURL(pe),!t)throw"";const e=new Worker(t,{type:"module",name:n==null?void 0:n.name});return e.addEventListener("error",()=>{(self.URL||self.webkitURL).revokeObjectURL(t)}),e}catch{return new Worker("data:text/javascript;charset=utf-8,"+encodeURIComponent(je),{type:"module",name:n==null?void 0:n.name})}}class it{constructor(t,e){const{constructor:i,template:o}=t;this.utils=i.utils,this.validator=i.validator,this.$danmuku=o.$danmuku,this.$player=o.$player,this.art=t,this.queue=[],this.$refs=[],this.isStop=!1,this.isHide=!1,this.timer=null,this.index=0,this.option=it.option,this.states={wait:[],ready:[],emit:[],stop:[]},this.config(e,!0),this.worker=new Io,this.start=this.start.bind(this),this.stop=this.stop.bind(this),this.reset=this.reset.bind(this),this.resize=this.resize.bind(this),this.destroy=this.destroy.bind(this),t.on("video:play",this.start),t.on("video:playing",this.start),t.on("video:pause",this.stop),t.on("video:waiting",this.stop),t.on("destroy",this.destroy),t.on("resize",this.resize),this.load()}static get option(){return{danmuku:[],speed:5,margin:[10,"25%"],opacity:1,color:"#FFFFFF",mode:0,modes:[0,1,2],fontSize:25,antiOverlap:!0,synchronousPlayback:!1,mount:void 0,heatmap:!1,width:512,points:[],filter:()=>!0,beforeEmit:()=>!0,beforeVisible:()=>!0,visible:!0,emitter:!0,maxLength:200,lockTime:5,theme:"dark",OPACITY:{},FONT_SIZE:{},MARGIN:{},SPEED:{},COLOR:[]}}static get scheme(){return{danmuku:"array|function|string",speed:"number",margin:"array",opacity:"number",color:"string",mode:"number",modes:"array",fontSize:"number|string",antiOverlap:"boolean",synchronousPlayback:"boolean",mount:"?htmldivelement|string",heatmap:"object|boolean",width:"number",points:"array",filter:"function",beforeEmit:"function",beforeVisible:"function",visible:"boolean",emitter:"boolean",maxLength:"number",lockTime:"number",theme:"string",OPACITY:"object",FONT_SIZE:"object",MARGIN:"object",SPEED:"object",COLOR:"array"}}static get cssText(){return`
            user-select: none;
            position: absolute;
            white-space: pre;
            pointer-events: none;
            perspective: 500px;
            display: inline-block;
            will-change: transform;
            font-weight: normal;
            line-height: 1.125;
            visibility: hidden;
            font-family: SimHei, "Microsoft JhengHei", Arial, Helvetica, sans-serif;
            text-shadow: rgb(0, 0, 0) 1px 0px 1px, rgb(0, 0, 0) 0px 1px 1px, rgb(0, 0, 0) 0px -1px 1px, rgb(0, 0, 0) -1px 0px 1px;
        `}get isRotate(){var t,e;return(e=(t=this.art.plugins)==null?void 0:t.autoOrientation)==null?void 0:e.state}get marginTop(){const{clamp:t}=this.utils,e=this.option.margin[0],{clientHeight:i}=this.$player;if(typeof e=="number")return t(e,0,i);if(typeof e=="string"&&e.endsWith("%")){const o=Number.parseFloat(e)/100;return t(i*o,0,i)}return it.option.margin[0]}get marginBottom(){const{clamp:t}=this.utils,e=this.option.margin[1],{clientHeight:i}=this.$player;if(typeof e=="number")return t(e,0,i);if(typeof e=="string"&&e.endsWith("%")){const o=Number.parseFloat(e)/100;return t(i*o,0,i)}return it.option.margin[1]}get fontSize(){const{clamp:t}=this.utils,{clientHeight:e}=this.$player,i=this.option.fontSize;if(typeof i=="number")return Math.round(t(i,12,e));if(typeof i=="string"&&i.endsWith("%")){const o=Number.parseFloat(i)/100;return Math.round(t(e*o,12,e))}return it.option.fontSize}get $ref(){const t=this.$refs.pop()||document.createElement("div");return t.style.cssText=it.cssText,t.dataset.mode="",t.dataset.id="",t.className="",t}get readys(){const{currentTime:t}=this.art,e=[];return this.filter("ready",i=>e.push(i)),this.filter("wait",i=>{t+.1>=i.time&&i.time>=t-.1&&e.push(i)}),e}get visibles(){const t=[],{clientWidth:e}=this.$player,i=this.getLeft(this.$player);return this.filter("emit",o=>{const r=o.$ref.offsetTop,a=this.getLeft(o.$ref)-i,s=o.$ref.clientHeight,c=o.$ref.clientWidth,l=a+c,d=e-l,p=l/o.$restTime,h={};h.top=r,h.left=a,h.height=s,h.width=c,h.right=d,h.speed=p,h.distance=l,h.time=o.$restTime,h.mode=o.mode,t.push(h)}),t}get speed(){return this.option.synchronousPlayback&&this.art.playbackRate?this.option.speed/Number(this.art.playbackRate):this.option.speed}async load(t){const{errorHandle:e}=this.utils;let i=[];const o=t||this.option.danmuku;try{typeof o=="function"?i=await o():o instanceof Promise?i=await o:typeof o=="string"?i=await Lo(o):Array.isArray(o)&&(i=o),e(Array.isArray(i),"Danmuku need return an array as result"),t===void 0&&(this.reset(),this.queue=[],this.states={wait:[],ready:[],emit:[],stop:[]},this.$refs=[],this.$danmuku.textContent="");for(let r=0;r<i.length;r++){const a=i[r];await this.emit(a)}this.art.emit("artplayerPluginDanmuku:loaded",this.queue)}catch(r){throw this.art.emit("artplayerPluginDanmuku:error",r),r}return this}async emit(t){const{clamp:e}=this.utils;if(this.validator(t,{id:"?string",text:"string",mode:"?number",color:"?string",time:"?number",border:"?boolean",style:"?object"}),!t.text.trim())return this;if(t.time?t.time=e(t.time,0,1/0):t.time=this.art.currentTime+.5,t.mode===void 0&&(t.mode=this.option.mode),t.style===void 0&&(t.style={}),t.color===void 0&&(t.color=this.option.color),![0,1,2].includes(t.mode))return this;if(!this.option.filter(t))return this;const i={...t,$state:"wait",$index:this.index++,$ref:null,$restTime:0,$lastStartTime:0};return this.setState(i,"wait"),this.queue.push(i),this}config(t,e=!1){const{clamp:i}=this.utils,{$controlsCenter:o}=this.art.template;return!Object.keys(t).some(a=>JSON.stringify(this.option[a])!==JSON.stringify(t[a]))&&!e?this:(this.option=Object.assign({},it.option,this.option,t),this.validator(this.option,it.scheme),this.option.mode=i(this.option.mode,0,2),this.option.speed=i(this.option.speed,1,10),this.option.opacity=i(this.option.opacity,0,1),this.option.lockTime=i(this.option.lockTime,1,60),this.option.maxLength=i(this.option.maxLength,1,1e3),this.option.mount=this.option.mount||o,t.fontSize&&this.reset(),this.option.visible?this.show():this.hide(),this.art.emit("artplayerPluginDanmuku:config",this.option),this)}getLeft(t){const e=t.getBoundingClientRect();return this.isRotate?e.top:e.left}postMessage(t={}){return new Promise(e=>{t.id=Date.now(),this.worker.postMessage(t),this.worker.onmessage=i=>{const{data:o}=i;o.id===t.id&&e(o)}})}filter(t,e){const i=this.states[t]||[];for(let o=0;o<i.length;o++)e(i[o]);return i}setState(t,e){this.states[t.$state]=this.states[t.$state].filter(i=>i!==t),t.$state=e,t.$ref&&(t.$ref.dataset.state=e),this.states[e].push(t)}makeWait(t){this.setState(t,"wait"),t.$ref&&(t.$ref.style.cssText=it.cssText,t.$ref.style.visibility="hidden",t.$ref.style.marginLeft="0px",t.$ref.style.transform="translateX(0px)",t.$ref.style.transition="transform 0s linear 0s",this.$refs.push(t.$ref),t.$ref=null)}update(){const{setStyles:t}=this.utils;return this.timer=window.requestAnimationFrame(async()=>{if(this.art.playing&&!this.isHide){this.filter("emit",i=>{const o=(Date.now()-i.$lastStartTime)/1e3;i.$restTime-=o,i.$lastStartTime=Date.now(),i.$restTime<=0&&this.makeWait(i)});const e=this.readys;for(let i=0;i<e.length;i++){const o=e[i];if(await this.option.beforeVisible(o)){const{clientWidth:a,clientHeight:s}=this.$player;o.$ref=this.$ref,o.$ref.textContent=o.text,this.$danmuku.appendChild(o.$ref),o.$ref.style.opacity=this.option.opacity,o.$ref.style.fontSize=`${this.fontSize}px`,o.$ref.style.color=o.color,o.$ref.style.border=o.border?`1px solid ${o.color}`:null,o.$ref.style.backgroundColor=o.border?"rgb(0 0 0 / 50%)":null,t(o.$ref,o.style),o.$lastStartTime=Date.now(),o.$restTime=this.speed;const c=a+o.$ref.clientWidth,{result:l}=await this.postMessage({type:"getDanmuTop",target:{mode:o.mode,height:o.$ref.clientHeight,speed:c/o.$restTime},visibles:this.visibles,antiOverlap:this.option.antiOverlap,clientWidth:a,clientHeight:s,marginBottom:this.marginBottom,marginTop:this.marginTop});if(o.$ref)if(!this.isStop&&l!==void 0){switch(this.setState(o,"emit"),o.$ref.style.top=`${l}px`,o.$ref.style.visibility="visible",o.$ref.dataset.mode=o.mode,o.$ref.dataset.id=o.id||"",o.mode){case 0:{o.$ref.style.left=`${a}px`,o.$ref.style.marginLeft="0px",o.$ref.style.transform=`translateX(${-c}px)`,o.$ref.style.transition=`transform ${o.$restTime}s linear 0s`;break}case 1:case 2:o.$ref.style.left="50%",o.$ref.style.marginLeft=`-${o.$ref.clientWidth/2}px`;break}this.art.emit("artplayerPluginDanmuku:visible",o)}else this.setState(o,"ready"),this.$refs.push(o.$ref),o.$ref=null}}}this.isStop||this.update()}),this}resize(){const{clientWidth:t}=this.$player;this.filter("stop",e=>{switch(e.mode){case 0:e.$ref.style.left=`${t}px`;break}}),this.filter("emit",e=>{switch(e.$lastStartTime=Date.now(),e.mode){case 0:{const i=t+e.$ref.clientWidth;e.$ref.style.left=`${t}px`,e.$ref.style.transform=`translateX(${-i}px)`,e.$ref.style.transition=`transform ${e.$restTime}s linear 0s`;break}}})}continue(){const{clientWidth:t}=this.$player;return this.filter("stop",e=>{switch(this.setState(e,"emit"),e.$lastStartTime=Date.now(),e.mode){case 0:{const i=t+e.$ref.clientWidth;e.$ref.style.transform=`translateX(${-i}px)`,e.$ref.style.transition=`transform ${e.$restTime}s linear 0s`;break}}}),this}suspend(){const{clientWidth:t}=this.$player;return this.filter("emit",e=>{switch(this.setState(e,"stop"),e.mode){case 0:{const i=t-(this.getLeft(e.$ref)-this.getLeft(this.$player));e.$ref.style.transform=`translateX(${-i}px)`,e.$ref.style.transition="transform 0s linear 0s";break}}}),this}stop(){return this.isStop=!0,this.suspend(),window.cancelAnimationFrame(this.timer),this.art.emit("artplayerPluginDanmuku:stop"),this}start(){return this.isStop=!1,this.continue(),this.update(),this.art.emit("artplayerPluginDanmuku:start"),this}reset(){return this.queue.forEach(t=>this.makeWait(t)),this.art.emit("artplayerPluginDanmuku:reset"),this}show(){return this.isHide=!1,this.$danmuku.style.opacity=1,this.option.visible=!0,this.art.emit("artplayerPluginDanmuku:show"),this}hide(){return this.isHide=!0,this.$danmuku.style.opacity=0,this.option.visible=!1,this.art.emit("artplayerPluginDanmuku:hide"),this}destroy(){this.stop(),this.worker.terminate(),this.art.off("video:play",this.start),this.art.off("video:playing",this.start),this.art.off("video:pause",this.stop),this.art.off("video:waiting",this.stop),this.art.off("resize",this.reset),this.art.off("destroy",this.destroy),this.art.emit("artplayerPluginDanmuku:destroy")}}const Bt={map(n,t,e,i,o){return(n-t)*(o-i)/(e-t)+i},range(n,t,e){const i=Math.round(n/e)*e;return Array.from({length:Math.floor((t-n)/e)},(o,r)=>r*e+i)}};function Po(n,t){const e=t[0]-n[0],i=t[1]-n[1];return{length:Math.sqrt(e**2+i**2),angle:Math.atan2(i,e)}}function Ro(n,t,e){const{query:i}=n.constructor.utils;n.controls.add({name:"heatmap",position:"top",html:"",style:{position:"absolute",top:"-100px",left:"0px",right:"0px",height:"100px",width:"100%",pointerEvents:"none"},mounted(o){let r=null,a=null;function s(c=[]){if(r=null,a=null,o.innerHTML="",!n.duration||n.option.isLive)return;const l={w:o.offsetWidth,h:o.offsetHeight},d={xMin:0,xMax:l.w,yMin:0,yMax:128,scale:.25,opacity:.2,minHeight:Math.floor(l.h*.05),sampling:Math.floor(l.w/100),smoothing:.2,flattening:.2};typeof e=="object"&&Object.assign(d,e);let p=[];if(Array.isArray(c)&&c.length)p=[...c];else{const _=n.duration/l.w;for(let I=0;I<=l.w;I+=d.sampling){const F=t.queue.filter(({time:M})=>M>I*_&&M<=(I+d.sampling)*_).length;p.push([I,F])}}if(p.length===0)return;const h=p[p.length-1],g=h[0],f=h[1];g!==l.w&&p.push([l.w,f]);const b=p.map(_=>_[1]),C=Math.min(...b),v=Math.max(...b),w=(C+v)/2;for(let _=0;_<p.length;_++){const I=p[_],F=I[1];I[1]=F*(F>w?1+d.scale:1-d.scale)+d.minHeight}const x=(_,I,F,M)=>{const R=Po(I||_,F||_),Nt=Bt.map(Math.cos(R.angle)*d.flattening,0,1,1,0),ie=R.angle*Nt+(M?Math.PI:0),oe=R.length*d.smoothing,Ze=_[0]+Math.cos(ie)*oe,Ke=_[1]+Math.sin(ie)*oe;return[Ze,Ke]},y=(_,I,F)=>{const M=x(F[I-1],F[I-2],_),T=x(_,F[I-1],F[I+1],!0),nt=I===F.length-1?" z":"";return`C ${M[0]},${M[1]} ${T[0]},${T[1]} ${_[0]},${_[1]}${nt}`},A=p.map(_=>{const I=Bt.map(_[0],d.xMin,d.xMax,0,l.w),F=Bt.map(_[1],d.yMin,d.yMax,l.h,0);return[I,F]}).reduce((_,I,F,M)=>F===0?`M ${M[M.length-1][0]},${l.h} L ${I[0]},${l.h} L ${I[0]},${I[1]}`:`${_} ${y(I,F,M)}`,"");o.innerHTML=`
                    <svg viewBox="0 0 ${l.w} ${l.h}">
                        <defs>
                            <linearGradient id="heatmap-solids" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style="stop-color:var(--art-theme);stop-opacity:${d.opacity}" />
                                <stop offset="0%" style="stop-color:var(--art-theme);stop-opacity:${d.opacity}" id="heatmap-start" />
                                <stop offset="0%" style="stop-color:var(--art-progress-color);stop-opacity:1" id="heatmap-stop" />
                                <stop offset="100%" style="stop-color:var(--art-progress-color);stop-opacity:1" />
                            </linearGradient>
                        </defs>
                        <path fill="url(#heatmap-solids)" d="${A}"></path>
                    </svg>
                `,r=i("#heatmap-start",o),a=i("#heatmap-stop",o),r.setAttribute("offset",`${n.played*100}%`),a.setAttribute("offset",`${n.played*100}%`)}n.on("video:timeupdate",()=>{r&&a&&(r.setAttribute("offset",`${n.played*100}%`),a.setAttribute("offset",`${n.played*100}%`))}),n.on("setBar",(c,l)=>{r&&a&&c==="played"&&(r.setAttribute("offset",`${l*100}%`),a.setAttribute("offset",`${l*100}%`))}),n.on("ready",()=>s()),n.on("resize",()=>s()),n.on("artplayerPluginDanmuku:loaded",()=>s()),n.on("artplayerPluginDanmuku:points",c=>s(c))}})}const Wt='<svg  class="apd-icon apd-check-off" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" data-pointer="none" viewBox="0 0 32 32" width="32"  height="32" ><path d="M8 6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2H8zm0-2h16c2.21 0 4 1.79 4 4v16c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V8c0-2.21 1.79-4 4-4z" fill="#FFFFFF"></path></svg>',Yt='<svg class="apd-icon apd-check-on" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" data-pointer="none" viewBox="0 0 32 32" width="32"  height="32" ><path d="m13 18.25-1.8-1.8c-.6-.6-1.65-.6-2.25 0s-.6 1.5 0 2.25l2.85 2.85c.318.318.762.468 1.2.448.438.02.882-.13 1.2-.448l8.85-8.85c.6-.6.6-1.65 0-2.25s-1.65-.6-2.25 0l-7.8 7.8zM8 4h16c2.21 0 4 1.79 4 4v16c0 2.21-1.79 4-4 4H8c-2.21 0-4-1.79-4-4V8c0-2.21 1.79-4 4-4z" fill="#00AEEC"></path></svg>',ue='<svg class="apd-icon apd-config-icon" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" data-pointer="none" viewBox="0 0 24 24" width="24"  height="24" ><path fill-rule="evenodd" d="m15.645 4.881 1.06-1.473a.998.998 0 1 0-1.622-1.166L13.22 4.835a110.67 110.67 0 0 0-1.1-.007h-.131c-.47 0-.975.004-1.515.012L8.783 2.3A.998.998 0 0 0 7.12 3.408l.988 1.484c-.688.019-1.418.042-2.188.069a4.013 4.013 0 0 0-3.83 3.44c-.165 1.15-.245 2.545-.245 4.185 0 1.965.115 3.67.35 5.116a4.012 4.012 0 0 0 3.763 3.363c1.903.094 3.317.141 5.513.141a.988.988 0 0 0 0-1.975 97.58 97.58 0 0 1-5.416-.139 2.037 2.037 0 0 1-1.91-1.708c-.216-1.324-.325-2.924-.325-4.798 0-1.563.076-2.864.225-3.904.14-.977.96-1.713 1.945-1.747 2.444-.087 4.465-.13 6.063-.131 1.598 0 3.62.044 6.064.13.96.034 1.71.81 1.855 1.814.075.524.113 1.962.141 3.065v.002c.005.183.01.07.014-.038.004-.096.008-.189.011-.081a.987.987 0 1 0 1.974-.069c-.004-.105-.007-.009-.011.09-.002.056-.004.112-.007.135l-.002.01a.574.574 0 0 1-.005-.091v-.027c-.03-1.118-.073-2.663-.16-3.276-.273-1.906-1.783-3.438-3.74-3.507-.905-.032-1.752-.058-2.543-.079Zm-3.113 4.703h-1.307v4.643h2.2v.04l.651-1.234c.113-.215.281-.389.482-.509v-.11h.235c.137-.049.283-.074.433-.074h1.553V9.584h-1.264a8.5 8.5 0 0 0 .741-1.405l-1.078-.381c-.24.631-.501 1.23-.806 1.786h-1.503l.686-.305c-.228-.501-.5-.959-.806-1.394l-1.034.348c.294.392.566.839.817 1.35Zm-1.7 5.502h2.16l-.564 1.068h-1.595v-1.068Zm-2.498-1.863.152-1.561h1.96V8.289H7.277v.969h2.048v1.435h-1.84l-.306 3.51h2.254c0 1.155-.043 1.906-.12 2.255-.076.348-.38.523-.925.523-.305 0-.61-.022-.893-.055l.294 1.056.061.005c.282.02.546.039.81.039.991-.065 1.547-.414 1.677-1.046.11-.631.175-1.883.175-3.757H8.334Zm5.09-.8v.85h-1.188v-.85h1.187Zm-1.188-.955h1.187v-.893h-1.187v.893Zm2.322.007v-.893h1.241v.893h-1.241Zm.528 2.757a1.26 1.26 0 0 1 1.087-.627l4.003-.009a1.26 1.26 0 0 1 1.094.63l1.721 2.982c.226.39.225.872-.001 1.263l-1.743 3a1.26 1.26 0 0 1-1.086.628l-4.003.009a1.26 1.26 0 0 1-1.094-.63l-1.722-2.982a1.26 1.26 0 0 1 .002-1.263l1.742-3Zm1.967.858a1.26 1.26 0 0 0-1.08.614l-.903 1.513a1.26 1.26 0 0 0-.002 1.289l.885 1.492c.227.384.64.62 1.086.618l2.192-.005a1.26 1.26 0 0 0 1.08-.615l.904-1.518a1.26 1.26 0 0 0 .001-1.288l-.884-1.489a1.26 1.26 0 0 0-1.086-.616l-2.193.005Zm2.517 2.76a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0Z" clip-rule="evenodd"></path></svg>',he='<svg class="apd-icon apd-mode-0-off" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" style="enable-background:new 0 0 28 28" viewBox="0 0 28 28" width="28"  height="28" ><path d="M23 15c1.487 0 2.866.464 4 1.255V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h11.674A7 7 0 0 1 23 15zM11 9h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2zm-3 2H6V9h2v2zm4 4h-2v-2h2v2zm2-1a1 1 0 0 1 1-1h1a1 1 0 0 1 0 2h-1a1 1 0 0 1-1-1z" fill="#00AEEC"></path><path d="M26.536 18.464a5 5 0 0 0-7.071 0 5 5 0 0 0 0 7.071 5 5 0 1 0 7.071-7.071zm-5.657 5.657a3 3 0 0 1-.586-3.415l4.001 4.001a3 3 0 0 1-3.415-.586zm4.829-.827-4.001-4.001a3.002 3.002 0 0 1 4.001 4.001z" fill="#00AEEC"></path></svg>',jt='<svg class="apd-icon apd-mode-0-on" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" style="enable-background:new 0 0 28 28" viewBox="0 0 28 28" width="28"  height="28" ><path d="M23 3H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zM11 9h6a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2zm-3 2H6V9h2v2zm4 4h-2v-2h2v2zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z" fill="#FFFFFF"></path></svg>',fe='<svg class="apd-icon apd-mode-1-off" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" style="enable-background:new 0 0 28 28" viewBox="0 0 28 28" width="28"  height="28" ><path d="M23 15c1.487 0 2.866.464 4 1.255V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h11.674A7 7 0 0 1 23 15zm-4-8h2v2h-2V7zM9 9H7V7h2v2zm4 0h-2V7h2v2zm2-2h2v2h-2V7z" fill="#00AEEC"></path><path d="M26.536 18.464a5 5 0 0 0-7.071 0 5 5 0 0 0 0 7.071 5 5 0 1 0 7.071-7.071zm-5.657 5.657a3 3 0 0 1-.586-3.415l4.001 4.001a3 3 0 0 1-3.415-.586zm4.829-.827-4.001-4.001a3.002 3.002 0 0 1 4.001 4.001z" fill="#00AEEC"></path></svg>',qt='<svg class="apd-icon apd-mode-1-on" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" style="enable-background:new 0 0 28 28" viewBox="0 0 28 28" width="28"  height="28" ><path d="M23 3H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zM9 9H7V7h2v2zm4 0h-2V7h2v2zm4 0h-2V7h2v2zm4 0h-2V7h2v2z" fill="#FFFFFF"></path></svg>',me='<svg class="apd-icon apd-mode-2-off" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" style="enable-background:new 0 0 28 28" viewBox="0 0 28 28" width="28"  height="28" ><path d="M23 15c1.487 0 2.866.464 4 1.255V7a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h11.674A7 7 0 0 1 23 15zM9 21H7v-2h2v2zm4 0h-2v-2h2v2z" fill="#00AEEC"></path><path d="M26.536 18.464a5 5 0 0 0-7.071 0 5 5 0 0 0 0 7.071 5 5 0 1 0 7.071-7.071zm-5.657 5.657a3 3 0 0 1-.586-3.415l4.001 4.001a3 3 0 0 1-3.415-.586zm4.829-.827-4.001-4.001a3.002 3.002 0 0 1 4.001 4.001z" fill="#00AEEC"></path></svg>',Xt='<svg class="apd-icon apd-mode-2-on" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" style="enable-background:new 0 0 28 28" viewBox="0 0 28 28" width="28"  height="28" ><path d="M23 3H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h18a4 4 0 0 0 4-4V7a4 4 0 0 0-4-4zM9 21H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z" fill="#FFFFFF"></path></svg>',ge='<svg class="apd-icon apd-toggle-off" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" data-pointer="none" viewBox="0 0 24 24" width="24"  height="24" ><path fill-rule="evenodd" d="m8.085 4.891-.999-1.499a1.008 1.008 0 0 1 1.679-1.118l1.709 2.566c.54-.008 1.045-.012 1.515-.012h.13c.345 0 .707.003 1.088.007l1.862-2.59a1.008 1.008 0 0 1 1.637 1.177l-1.049 1.46c.788.02 1.631.046 2.53.078 1.958.069 3.468 1.6 3.74 3.507.088.613.13 2.158.16 3.276l.001.027c.01.333.017.63.025.856a.987.987 0 0 1-1.974.069c-.008-.23-.016-.539-.025-.881v-.002c-.028-1.103-.066-2.541-.142-3.065-.143-1.004-.895-1.78-1.854-1.813-2.444-.087-4.466-.13-6.064-.131-1.598 0-3.619.044-6.063.13a2.037 2.037 0 0 0-1.945 1.748c-.15 1.04-.225 2.341-.225 3.904 0 1.874.11 3.474.325 4.798.154.949.95 1.66 1.91 1.708a97.58 97.58 0 0 0 5.416.139.988.988 0 0 1 0 1.975c-2.196 0-3.61-.047-5.513-.141A4.012 4.012 0 0 1 2.197 17.7c-.236-1.446-.351-3.151-.351-5.116 0-1.64.08-3.035.245-4.184A4.013 4.013 0 0 1 5.92 4.96c.761-.027 1.483-.05 2.164-.069Zm4.436 4.707h-1.32v4.63h2.222v.848h-2.618v1.078h2.431a5.01 5.01 0 0 1 3.575-3.115V9.598h-1.276a8.59 8.59 0 0 0 .748-1.42l-1.089-.384a14.232 14.232 0 0 1-.814 1.804h-1.518l.693-.308a8.862 8.862 0 0 0-.814-1.408l-1.045.352c.297.396.572.847.825 1.364Zm-4.18 3.564.154-1.485h1.98V8.289h-3.2v.979h2.067v1.43H7.483l-.308 3.454h2.277c0 1.166-.044 1.925-.12 2.277-.078.352-.386.528-.936.528-.308 0-.616-.022-.902-.055l.297 1.067.062.004c.285.02.551.04.818.04 1.001-.066 1.562-.418 1.694-1.056.11-.638.176-1.903.176-3.795h-2.2Zm7.458.11v-.858h-1.254v.858H15.8Zm-2.376-.858v.858h-1.199v-.858h1.2Zm-1.199-.946h1.2v-.902h-1.2v.902Zm2.321 0v-.902H15.8v.902h-1.254Zm3.517 10.594a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-.002-1.502a2.5 2.5 0 0 1-2.217-3.657l3.326 3.398a2.49 2.49 0 0 1-1.109.259Zm2.5-2.5c0 .42-.103.815-.286 1.162l-3.328-3.401a2.5 2.5 0 0 1 3.614 2.239Z" clip-rule="evenodd"></path></svg>',ve='<svg class="apd-icon apd-toggle-on" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" data-pointer="none" viewBox="0 0 24 24" width="24"  height="24" ><path fill-rule="evenodd" d="M11.989 4.828c-.47 0-.975.004-1.515.012l-1.71-2.566a1.008 1.008 0 0 0-1.678 1.118l.999 1.5c-.681.018-1.403.04-2.164.068a4.013 4.013 0 0 0-3.83 3.44c-.165 1.15-.245 2.545-.245 4.185 0 1.965.115 3.67.35 5.116a4.012 4.012 0 0 0 3.763 3.363l.906.046c1.205.063 1.808.095 3.607.095a.988.988 0 0 0 0-1.975c-1.758 0-2.339-.03-3.501-.092l-.915-.047a2.037 2.037 0 0 1-1.91-1.708c-.216-1.324-.325-2.924-.325-4.798 0-1.563.076-2.864.225-3.904.14-.977.96-1.713 1.945-1.747 2.444-.087 4.465-.13 6.063-.131 1.598 0 3.62.044 6.064.13.96.034 1.71.81 1.855 1.814.075.524.113 1.962.141 3.065v.002c.01.342.017.65.025.88a.987.987 0 1 0 1.974-.068c-.008-.226-.016-.523-.025-.856v-.027c-.03-1.118-.073-2.663-.16-3.276-.273-1.906-1.783-3.438-3.74-3.507-.9-.032-1.743-.058-2.531-.078l1.05-1.46a1.008 1.008 0 0 0-1.638-1.177l-1.862 2.59c-.38-.004-.744-.007-1.088-.007h-.13Zm.521 4.775h-1.32v4.631h2.222v.847h-2.618v1.078h2.618l.003.678c.36.026.714.163 1.01.407h.11v-1.085h2.694v-1.078h-2.695v-.847H16.8v-4.63h-1.276a8.59 8.59 0 0 0 .748-1.42L15.183 7.8a14.232 14.232 0 0 1-.814 1.804h-1.518l.693-.308a8.862 8.862 0 0 0-.814-1.408l-1.045.352c.297.396.572.847.825 1.364Zm-4.18 3.564.154-1.485h1.98V8.294h-3.2v.98H9.33v1.43H7.472l-.308 3.453h2.277c0 1.166-.044 1.925-.12 2.277-.078.352-.386.528-.936.528-.308 0-.616-.022-.902-.055l.297 1.067.062.005c.285.02.551.04.818.04 1.001-.067 1.562-.419 1.694-1.057.11-.638.176-1.903.176-3.795h-2.2Zm7.458.11v-.858h-1.254v.858h1.254Zm-2.376-.858v.858h-1.199v-.858h1.2Zm-1.199-.946h1.2v-.902h-1.2v.902Zm2.321 0v-.902h1.254v.902h-1.254Z" clip-rule="evenodd"></path><path fill="#00AEEC" fill-rule="evenodd" d="M22.846 14.627a1 1 0 0 0-1.412.075l-5.091 5.703-2.216-2.275-.097-.086-.008-.005a1 1 0 0 0-1.322 1.493l2.963 3.041.093.083.007.005c.407.315 1 .27 1.354-.124l5.81-6.505.08-.102.005-.008a1 1 0 0 0-.166-1.295Z" clip-rule="evenodd"></path></svg>',ye='<svg class="apd-icon apd-style-icon" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" data-pointer="none" style="enable-background:new 0 0 22 22" viewBox="0 0 22 22" width="36"  height="24" ><path d="M17 16H5c-.55 0-1 .45-1 1s.45 1 1 1h12c.55 0 1-.45 1-1s-.45-1-1-1zM6.96 15c.39 0 .74-.24.89-.6l.65-1.6h5l.66 1.6c.15.36.5.6.89.6.69 0 1.15-.71.88-1.34l-3.88-8.97C11.87 4.27 11.46 4 11 4s-.87.27-1.05.69l-3.88 8.97c-.27.63.2 1.34.89 1.34zM11 5.98 12.87 11H9.13L11 5.98z"></path></svg>',Ao=`.artplayer-plugin-danmuku {
  display: flex;
  position: relative;
  z-index: 99;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  height: 32px;
  width: 100%;
  color: #fff;
  font-weight: 300;
  flex-shrink: 0;
  gap: 10px;
}
.artplayer-plugin-danmuku .apd-icon {
  cursor: pointer;
  opacity: 0.75;
  transition: all 0.2s ease;
  fill: #fff;
}
.artplayer-plugin-danmuku .apd-icon:hover {
  opacity: 1;
}
.artplayer-plugin-danmuku .apd-config {
  display: flex;
  position: relative;
}
.artplayer-plugin-danmuku .apd-config .apd-config-panel {
  position: absolute;
  bottom: 24px;
  left: 0;
  width: 320px;
  padding: 10px;
  opacity: 0;
  pointer-events: none;
}
.artplayer-plugin-danmuku .apd-config .apd-config-panel .apd-config-panel-inner {
  width: 100%;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.85);
  padding: 10px;
}
.artplayer-plugin-danmuku .apd-config:hover .apd-config-panel {
  opacity: 100;
  pointer-events: all;
}
.artplayer-plugin-danmuku .apd-config-mode,
.artplayer-plugin-danmuku .apd-config-slider,
.artplayer-plugin-danmuku .apd-config-other,
.artplayer-plugin-danmuku .apd-style-mode {
  margin-bottom: 15px;
}
.artplayer-plugin-danmuku .apd-modes {
  display: flex;
  align-items: center;
  margin-top: 5px;
  gap: 20px;
}
.artplayer-plugin-danmuku .apd-modes .apd-mode {
  cursor: pointer;
  text-align: center;
}
.artplayer-plugin-danmuku .apd-modes .apd-mode:hover {
  color: #00a1d6;
}
.artplayer-plugin-danmuku .apd-config-slider {
  display: flex;
  align-items: center;
  gap: 12px;
}
.artplayer-plugin-danmuku .apd-config-slider .apd-value {
  width: 32px;
  text-align: right;
}
.artplayer-plugin-danmuku .apd-slider {
  position: relative;
  flex: 1;
  display: flex;
  height: 20px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.artplayer-plugin-danmuku .apd-slider .apd-slider-line {
  position: relative;
  height: 2px;
  width: 100%;
  overflow: hidden;
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 0.25);
}
.artplayer-plugin-danmuku .apd-slider .apd-slider-points {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.artplayer-plugin-danmuku .apd-slider .apd-slider-points .apd-slider-point {
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
}
.artplayer-plugin-danmuku .apd-slider .apd-slider-progress {
  width: 0%;
  height: 100%;
  background-color: #00a1d6;
}
.artplayer-plugin-danmuku .apd-slider .apd-slider-dot {
  position: absolute;
  transform: translateX(-6px);
  left: 0%;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #00a1d6;
}
.artplayer-plugin-danmuku .apd-slider .apd-slider-steps {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: -12px;
  width: calc(100% + 32px);
  color: #777;
}
.artplayer-plugin-danmuku .apd-slider .apd-slider-steps .apd-slider-step {
  flex-shrink: 0;
  width: 36px;
  text-align: center;
  scale: 0.95;
}
.artplayer-plugin-danmuku .apd-config-other {
  display: flex;
  align-items: center;
  gap: 20px;
}
.artplayer-plugin-danmuku .apd-config-other .apd-check-off,
.artplayer-plugin-danmuku .apd-config-other .apd-check-on {
  width: 16px;
  height: 16px;
}
.artplayer-plugin-danmuku .apd-config-other .apd-other {
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 2px;
}
.artplayer-plugin-danmuku .apd-config-other .apd-other:hover {
  color: #00a1d6;
}
.artplayer-plugin-danmuku .apd-emitter {
  display: flex;
  flex: 1;
  align-items: center;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 5px;
}
.artplayer-plugin-danmuku .apd-style {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.artplayer-plugin-danmuku .apd-style .apd-style-panel {
  position: absolute;
  bottom: 24px;
  left: 0;
  width: 200px;
  padding: 10px;
  opacity: 0;
  pointer-events: none;
}
.artplayer-plugin-danmuku .apd-style .apd-style-panel .apd-style-panel-inner {
  width: 100%;
  border-radius: 3px;
  background-color: rgba(0, 0, 0, 0.85);
  padding: 10px;
}
.artplayer-plugin-danmuku .apd-style:hover .apd-style-panel {
  opacity: 100;
  pointer-events: all;
}
.artplayer-plugin-danmuku .apd-colors {
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
  gap: 8px;
}
.artplayer-plugin-danmuku .apd-colors .apd-color {
  width: 16px;
  height: 16px;
  border-radius: 2px;
  cursor: pointer;
}
.artplayer-plugin-danmuku .apd-colors .apd-color.apd-active {
  border: 1px solid black;
  box-shadow: 0 0 0 1px #fff;
}
.artplayer-plugin-danmuku .apd-input {
  outline: none;
  height: 100%;
  flex: 1;
  min-width: 0;
  width: auto;
  border: none;
  line-height: 1;
  color: #fff;
  background-color: transparent;
}
.artplayer-plugin-danmuku .apd-input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}
.artplayer-plugin-danmuku .apd-send {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 60px;
  flex-shrink: 0;
  cursor: pointer;
  text-shadow: none;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #00a1d6;
}
.artplayer-plugin-danmuku .apd-send.apd-lock {
  cursor: not-allowed;
  color: #666;
  background-color: #e7e7e7;
}
.art-controls-center .apd-emitter {
  width: 260px;
  flex: none;
}
.art-fullscreen .artplayer-plugin-danmuku,
.art-fullscreen-web .artplayer-plugin-danmuku {
  height: 38px;
  gap: 16px;
}
.art-fullscreen .artplayer-plugin-danmuku .apd-config-icon,
.art-fullscreen-web .artplayer-plugin-danmuku .apd-config-icon,
.art-fullscreen .artplayer-plugin-danmuku .apd-toggle-off,
.art-fullscreen-web .artplayer-plugin-danmuku .apd-toggle-off,
.art-fullscreen .artplayer-plugin-danmuku .apd-toggle-on,
.art-fullscreen-web .artplayer-plugin-danmuku .apd-toggle-on {
  width: 28px;
  height: 28px;
}
.art-fullscreen .artplayer-plugin-danmuku .apd-emitter,
.art-fullscreen-web .artplayer-plugin-danmuku .apd-emitter {
  width: 400px;
  flex: none;
}
.art-video-player > .artplayer-plugin-danmuku {
  position: absolute;
  left: 0;
  right: 0;
  bottom: -40px;
  padding: 0 10px;
}
.art-video-player:has(> .artplayer-plugin-danmuku) {
  margin-bottom: 40px;
}
[data-danmuku-emitter='false'] .apd-emitter {
  display: none !important;
}
[data-danmuku-emitter='false'] .art-controls-center .artplayer-plugin-danmuku {
  justify-content: flex-end;
  gap: 18px;
}
[data-danmuku-emitter='false'].art-fullscreen .art-controls-center .artplayer-plugin-danmuku,
[data-danmuku-emitter='false'].art-fullscreen-web .art-controls-center .artplayer-plugin-danmuku {
  gap: 24px;
}
[data-danmuku-theme='light'] > .artplayer-plugin-danmuku .apd-icon {
  fill: #333;
}
[data-danmuku-theme='light'] > .artplayer-plugin-danmuku .apd-emitter {
  background-color: #f1f2f3;
}
[data-danmuku-theme='light'] > .artplayer-plugin-danmuku .apd-input {
  color: #000;
}
[data-danmuku-theme='light'] > .artplayer-plugin-danmuku .apd-input::placeholder {
  color: rgba(0, 0, 0, 0.3);
}
[data-danmuku-visible='false'] .apd-toggle-off {
  display: block;
}
[data-danmuku-visible='false'] .apd-toggle-on {
  display: none;
}
[data-danmuku-visible='true'] .apd-toggle-off {
  display: none;
}
[data-danmuku-visible='true'] .apd-toggle-on {
  display: block;
}
[data-danmuku-anti-overlap='false'] .apd-anti-overlap .apd-check-on {
  display: none;
}
[data-danmuku-anti-overlap='false'] .apd-anti-overlap .apd-check-off {
  display: block;
}
[data-danmuku-anti-overlap='true'] .apd-anti-overlap .apd-check-on {
  display: block;
}
[data-danmuku-anti-overlap='true'] .apd-anti-overlap .apd-check-off {
  display: none;
}
[data-danmuku-sync-video='false'] .apd-sync-video .apd-check-on {
  display: none;
}
[data-danmuku-sync-video='false'] .apd-sync-video .apd-check-off {
  display: block;
}
[data-danmuku-sync-video='true'] .apd-sync-video .apd-check-on {
  display: block;
}
[data-danmuku-sync-video='true'] .apd-sync-video .apd-check-off {
  display: none;
}
[data-danmuku-mode0='false'] .apd-config-mode .apd-mode-0-off {
  display: block;
}
[data-danmuku-mode0='false'] .apd-config-mode .apd-mode-0-on {
  display: none;
}
[data-danmuku-mode0='false'] .art-danmuku [data-mode='0'] {
  opacity: 0 !important;
}
[data-danmuku-mode0='true'] .apd-config-mode .apd-mode-0-off {
  display: none;
}
[data-danmuku-mode0='true'] .apd-config-mode .apd-mode-0-on {
  display: block;
}
[data-danmuku-mode='0'] .apd-style-mode [data-mode='0'] {
  color: #00a1d6;
}
[data-danmuku-mode='0'] .apd-style-mode [data-mode='0'] path {
  fill: #00a1d6;
}
[data-danmuku-mode1='false'] .apd-config-mode .apd-mode-1-off {
  display: block;
}
[data-danmuku-mode1='false'] .apd-config-mode .apd-mode-1-on {
  display: none;
}
[data-danmuku-mode1='false'] .art-danmuku [data-mode='1'] {
  opacity: 0 !important;
}
[data-danmuku-mode1='true'] .apd-config-mode .apd-mode-1-off {
  display: none;
}
[data-danmuku-mode1='true'] .apd-config-mode .apd-mode-1-on {
  display: block;
}
[data-danmuku-mode='1'] .apd-style-mode [data-mode='1'] {
  color: #00a1d6;
}
[data-danmuku-mode='1'] .apd-style-mode [data-mode='1'] path {
  fill: #00a1d6;
}
[data-danmuku-mode2='false'] .apd-config-mode .apd-mode-2-off {
  display: block;
}
[data-danmuku-mode2='false'] .apd-config-mode .apd-mode-2-on {
  display: none;
}
[data-danmuku-mode2='false'] .art-danmuku [data-mode='2'] {
  opacity: 0 !important;
}
[data-danmuku-mode2='true'] .apd-config-mode .apd-mode-2-off {
  display: none;
}
[data-danmuku-mode2='true'] .apd-config-mode .apd-mode-2-on {
  display: block;
}
[data-danmuku-mode='2'] .apd-style-mode [data-mode='2'] {
  color: #00a1d6;
}
[data-danmuku-mode='2'] .apd-style-mode [data-mode='2'] path {
  fill: #00a1d6;
}
`;class qe{constructor(t,e){this.art=t,this.danmuku=e,this.utils=t.constructor.utils;const{setStyle:i}=this.utils,{$controlsCenter:o}=t.template;i(o,"display","flex"),this.template={$controlsCenter:o,$mount:o,$danmuku:null,$toggle:null,$config:null,$configPanel:null,$configModes:null,$style:null,$stylePanel:null,$styleModes:null,$colors:null,$opacitySlider:null,$opacityValue:null,$marginSlider:null,$marginValue:null,$fontSizeSlider:null,$fontSizeValue:null,$speedSlider:null,$speedValue:null,$input:null,$send:null},this.slider={opacity:null,margin:null,fontSize:null,speed:null},this.emitting=!1,this.isLock=!1,this.timer=null,this.createTemplate(),this.createSliders(),this.createEvents(),this.mount(this.option.mount),t.on("resize",()=>this.resize()),t.on("fullscreen",r=>this.onFullscreen(r)),t.on("fullscreenWeb",r=>this.onFullscreen(r)),t.proxy(this.template.$config,"mouseenter",()=>{this.onMouseEnter({$control:this.template.$config,$panel:this.template.$configPanel})}),t.proxy(this.template.$style,"mouseenter",()=>{this.onMouseEnter({$control:this.template.$style,$panel:this.template.$stylePanel})})}static get icons(){return{$on:ve,$off:ge,$config:ue,$style:ye,$mode_0_off:he,$mode_0_on:jt,$mode_1_off:fe,$mode_1_on:qt,$mode_2_off:me,$mode_2_on:Xt,$check_on:Yt,$check_off:Wt}}get option(){return this.danmuku.option}get outside(){return this.template.$mount!==this.template.$controlsCenter}get TEMPLATE(){const{option:t}=this;return`
            <div class="apd-toggle">
                ${ve}${ge}
            </div>
            <div class="apd-config">
                ${ue}
                <div class="apd-config-panel">
                    <div class="apd-config-panel-inner">
                        <div class="apd-config-mode">
                            按类型屏蔽
                            <div class="apd-modes">
                                <div data-mode="0" class="apd-mode">
                                    ${he}${jt}
                                    <div>滚动</div>
                                </div>
                                <div data-mode="1" class="apd-mode">
                                    ${fe}${qt}
                                    <div>顶部</div>
                                </div>
                                <div data-mode="2" class="apd-mode">
                                    ${me}${Xt}
                                    <div>底部</div>
                                </div>
                            </div>
                        </div>
                        <div class="apd-config-other">
                            <div class="apd-other apd-anti-overlap">
                                ${Yt}${Wt}
                                防止弹幕重叠
                            </div>
                            <div class="apd-other apd-sync-video">
                                ${Yt}${Wt}
                                同步视频速度
                            </div>
                        </div>
                        <div class="apd-config-slider apd-config-opacity">
                            不透明度
                            <div class="apd-slider"></div>
                            <div class="apd-value">未知</div>
                        </div>
                        <div class="apd-config-slider apd-config-margin">
                            显示区域
                            <div class="apd-slider"></div>
                            <div class="apd-value">未知</div>
                        </div>
                        <div class="apd-config-slider apd-config-fontSize">
                            弹幕字号
                            <div class="apd-slider"></div>
                            <div class="apd-value">未知</div>
                        </div>
                        <div class="apd-config-slider apd-config-speed">
                            弹幕速度
                            <div class="apd-slider"></div>
                            <div class="apd-value">未知</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="apd-emitter">
                <div class="apd-style">
                    ${ye}
                    <div class="apd-style-panel">
                        <div class="apd-style-panel-inner">
                            <div class="apd-style-mode">
                                模式
                                <div class="apd-modes">
                                    <div data-mode="0" class="apd-mode">
                                        ${jt}
                                        <div>滚动</div>
                                    </div>
                                    <div data-mode="1" class="apd-mode">
                                        ${qt}
                                        <div>顶部</div>
                                    </div>
                                    <div data-mode="2" class="apd-mode">
                                        ${Xt}
                                        <div>底部</div>
                                    </div>
                                </div>
                            </div>
                            <div class="apd-style-color">
                                颜色
                                <div class="apd-colors">
                                    ${this.COLOR.map(e=>`<div data-color="${e}" class="apd-color" style="background-color: ${e}"></div>`).join("")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <input class="apd-input" placeholder="发个友善的弹幕见证当下" autocomplete="off" maxLength="${t.maxLength}" />
                <div class="apd-send">发送</div>
            </div>
        `}get OPACITY(){return{min:0,max:100,steps:[],...this.option.OPACITY}}get FONT_SIZE(){return{min:12,max:120,steps:[],...this.option.FONT_SIZE}}get MARGIN(){return{min:0,max:3,steps:[{name:"1/4",value:[10,"75%"]},{name:"半屏",value:[10,"50%"]},{name:"3/4",value:[10,"25%"]},{name:"满屏",value:[10,10]}],...this.option.MARGIN}}get SPEED(){return{min:0,max:4,steps:[{name:"极慢",value:10},{name:"较慢",value:7.5,hide:!0},{name:"适中",value:5},{name:"较快",value:2.5,hide:!0},{name:"极快",value:1}],...this.option.SPEED}}get COLOR(){return this.option.COLOR.length?this.option.COLOR:["#FE0302","#FF7204","#FFAA02","#FFD302","#FFFF00","#A0EE00","#00CD00","#019899","#4266BE","#89D5FF","#CC0273","#222222","#9B9B9B","#FFFFFF"]}query(t){const{query:e}=this.utils,{$danmuku:i}=this.template;return e(t,i)}append(t,e){const{append:i}=this.utils;[...t.children].includes(e)||i(t,e)}setData(t,e){const{$player:i}=this.art.template,{$mount:o}=this.template;i.dataset[t]=e,this.outside&&(o.dataset[t]=e)}createTemplate(){const{createElement:t,tooltip:e}=this.utils,i=t("div");i.className="artplayer-plugin-danmuku",i.innerHTML=this.TEMPLATE,this.template.$danmuku=i,this.template.$toggle=this.query(".apd-toggle"),this.template.$config=this.query(".apd-config"),this.template.$configPanel=this.query(".apd-config-panel"),this.template.$configModes=this.query(".apd-config-mode .apd-modes"),this.template.$style=this.query(".apd-style"),this.template.$stylePanel=this.query(".apd-style-panel"),this.template.$styleModes=this.query(".apd-style-mode .apd-modes"),this.template.$colors=this.query(".apd-colors"),this.template.$antiOverlap=this.query(".apd-anti-overlap"),this.template.$syncVideo=this.query(".apd-sync-video"),this.template.$opacitySlider=this.query(".apd-config-opacity .apd-slider"),this.template.$opacityValue=this.query(".apd-config-opacity .apd-value"),this.template.$marginSlider=this.query(".apd-config-margin .apd-slider"),this.template.$marginValue=this.query(".apd-config-margin .apd-value"),this.template.$fontSizeSlider=this.query(".apd-config-fontSize .apd-slider"),this.template.$fontSizeValue=this.query(".apd-config-fontSize .apd-value"),this.template.$speedSlider=this.query(".apd-config-speed .apd-slider"),this.template.$speedValue=this.query(".apd-config-speed .apd-value"),this.template.$input=this.query(".apd-input"),this.template.$send=this.query(".apd-send");const{$toggle:o}=this.template;this.art.on("artplayerPluginDanmuku:show",()=>{e(o,"关闭弹幕")}),this.art.on("artplayerPluginDanmuku:hide",()=>{e(o,"打开弹幕")})}createEvents(){const{$toggle:t,$configModes:e,$styleModes:i,$colors:o,$antiOverlap:r,$syncVideo:a,$send:s,$input:c}=this.template;this.art.proxy(t,"click",()=>{this.danmuku.config({visible:!this.option.visible}),this.reset()}),this.art.proxy(e,"click",l=>{const d=l.target.closest(".apd-mode");if(!d)return;const p=Number(d.dataset.mode);this.option.modes.includes(p)?this.danmuku.config({modes:this.option.modes.filter(h=>h!==p)}):this.danmuku.config({modes:[...this.option.modes,p]}),this.reset()}),this.art.proxy(r,"click",()=>{this.danmuku.config({antiOverlap:!this.option.antiOverlap}),this.reset()}),this.art.proxy(a,"click",()=>{this.danmuku.config({synchronousPlayback:!this.option.synchronousPlayback}),this.reset()}),this.art.proxy(i,"click",l=>{const d=l.target.closest(".apd-mode");if(!d)return;const p=Number(d.dataset.mode);this.danmuku.config({mode:p}),this.reset()}),this.art.proxy(o,"click",l=>{const d=l.target.closest(".apd-color");d&&(this.danmuku.config({color:d.dataset.color}),this.reset())}),this.art.proxy(s,"click",()=>this.emit()),this.art.proxy(c,"keypress",l=>{l.key==="Enter"&&(l.preventDefault(),this.emit())})}createSliders(){this.slider.opacity=this.createSlider({...this.OPACITY,container:this.template.$opacitySlider,findIndex:()=>Math.round(this.option.opacity*100),onChange:t=>{const{$opacityValue:e}=this.template;e.textContent=`${t}%`,this.danmuku.config({opacity:t/100})}}),this.slider.margin=this.createSlider({...this.MARGIN,container:this.template.$marginSlider,findIndex:()=>this.MARGIN.steps.findIndex(t=>t.value[0]===this.option.margin[0]&&t.value[1]===this.option.margin[1]),onChange:t=>{const e=this.MARGIN.steps[t];if(!e)return;const{$marginValue:i}=this.template;i.textContent=e.name,this.danmuku.config({margin:e.value})}}),this.slider.fontSize=this.createSlider({...this.FONT_SIZE,container:this.template.$fontSizeSlider,findIndex:()=>this.danmuku.fontSize,onChange:t=>{const{$fontSizeValue:e}=this.template;e.textContent=`${t}px`,t!==this.danmuku.fontSize&&this.danmuku.config({fontSize:t})}}),this.slider.speed=this.createSlider({...this.SPEED,container:this.template.$speedSlider,findIndex:()=>this.SPEED.steps.findIndex(t=>t.value===this.option.speed),onChange:t=>{const e=this.SPEED.steps[t];if(!e)return;const{$speedValue:i}=this.template;i.textContent=e.name,this.danmuku.config({speed:e.value})}})}createSlider({min:t,max:e,container:i,findIndex:o,onChange:r,steps:a=[]}){const{query:s,clamp:c,setStyle:l}=this.utils;l(i,"touch-action","none"),i.innerHTML=`
            <div class="apd-slider-line">
                <div class="apd-slider-points">
                    ${a.map(()=>'<div class="apd-slider-point"></div>').join("")}
                </div>
                <div class="apd-slider-progress"></div>
            </div>
            <div class="apd-slider-dot"></div>
            <div class="apd-slider-steps">
                ${a.map(b=>b.hide?"":`<div class="apd-slider-step">${b.name}</div>`).join("")}
            </div>
        `;const d=s(".apd-slider-dot",i),p=s(".apd-slider-progress",i);let h=!1;function g(b=o()){if(b<t||b>e)return;const C=(b-t)/(e-t);d.style.left=`${C*100}%`,a.length===0&&(p.style.width=d.style.left),r(b)}function f(b){const{top:C,height:v,left:w,width:x}=i.getBoundingClientRect();if(this.art.isRotate){const y=c(b.clientY-C,0,v),S=Math.round(y/v*(e-t)+t);g(S)}else{const y=c(b.clientX-w,0,x),S=Math.round(y/x*(e-t)+t);g(S)}}return this.art.proxy(i,"click",b=>{f.call(this,b)}),this.art.proxy(i,"pointerdown",b=>{h=b.button===0}),this.art.on("document:pointermove",b=>{h&&f.call(this,b)}),this.art.on("document:pointerup",b=>{h&&(h=!1,f.call(this,b))}),{reset:g}}onFullscreen(t){const{$danmuku:e,$controlsCenter:i,$mount:o}=this.template;this.outside?t?this.append(i,e):this.append(o,e):this.append(i,e)}onMouseEnter({$control:t,$panel:e}){const{$player:i}=this.art.template,o=t.getBoundingClientRect(),r=e.getBoundingClientRect(),a=i.getBoundingClientRect(),s=r.width/2-o.width/2,c=a.left-(o.left-s),l=o.right+s-a.right;c>0?e.style.left=`${-s+c}px`:l>0?e.style.left=`${-s-l}px`:e.style.left=`${-s}px`}async emit(){const{$input:t}=this.template,e=t.value.trim();if(!e.length||this.isLock||this.emitting)return;const i={text:e,mode:this.option.mode,color:this.option.color,time:this.art.currentTime};try{this.emitting=!0;const o=await this.option.beforeEmit(i);if(this.emitting=!1,o!==!0)return;i.border=!0,delete i.time,this.danmuku.emit(i),t.value="",this.lock()}catch(o){console.error("Error emitting danmuku:",o),this.emitting=!1}}lock(){const{addClass:t}=this.utils,{$send:e}=this.template;this.isLock=!0;let i=this.option.lockTime;e.textContent=i,t(e,"apd-lock");const o=()=>{this.timer=setTimeout(()=>{i===0?this.unlock():(i-=1,e.textContent=i,o())},1e3)};o()}unlock(){const{removeClass:t}=this.utils,{$send:e}=this.template;clearTimeout(this.timer),this.isLock=!1,e.textContent="发送",t(e,"apd-lock")}resize(){if(this.outside||this.art.fullscreen||this.art.fullscreenWeb)return;const{$player:t,$controlsCenter:e}=this.art.template,{$danmuku:i}=this.template;this.art.width<this.option.width?this.append(t,i):this.append(e,i)}reset(){const{inverseClass:t,tooltip:e}=this.utils,{$toggle:i,$colors:o}=this.template;this.slider.opacity.reset(),this.slider.margin.reset(),this.slider.fontSize.reset(),this.slider.speed.reset(),this.setData("danmukuVisible",this.option.visible),this.setData("danmukuMode",this.option.mode),this.setData("danmukuColor",this.option.color),this.setData("danmukuMode0",this.option.modes.includes(0)),this.setData("danmukuMode1",this.option.modes.includes(1)),this.setData("danmukuMode2",this.option.modes.includes(2)),this.setData("danmukuAntiOverlap",this.option.antiOverlap),this.setData("danmukuSyncVideo",this.option.synchronousPlayback),this.setData("danmukuTheme",this.option.theme),this.setData("danmukuEmitter",this.option.emitter);const r=o.children,a=Array.from(r).find(s=>s.dataset.color===this.option.color.toUpperCase());a&&t(a,"apd-active"),e(i,this.option.visible?"关闭弹幕":"打开弹幕"),this.resize()}mount(t){const{errorHandle:e}=this.utils,i=typeof t=="string"?document.querySelector(t):t;e(i,`Can not find the mount point: ${t}`),this.append(i,this.template.$danmuku),this.template.$mount=i,this.reset()}}if(typeof document<"u"){const n="artplayer-plugin-danmuku";let t=document.getElementById(n);t||(t=document.createElement("style"),t.id=n,document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{document.head.appendChild(t)}):(document.head||document.documentElement).appendChild(t)),t.textContent=Ao}function Xe(n){return t=>{const e=new it(t,n),i=new qe(t,e);return e.option.heatmap&&Ro(t,e,e.option.heatmap),{name:"artplayerPluginDanmuku",emit:e.emit.bind(e),load:e.load.bind(e),config:e.config.bind(e),hide:e.hide.bind(e),show:e.show.bind(e),reset:e.reset.bind(e),mount:i.mount.bind(i),get option(){return e.option},get isHide(){return e.isHide},get isStop(){return e.isStop}}}}Xe.icons=qe.icons;let J=null,Lt=!1,It=500;const ut=new Map,ht=new Set;function Oo(){return Je().replace(/^http/,"ws")}function Ue(){if(J&&J.readyState<=1||Lt||ht.size===0)return;Lt=!0;const n=localStorage.getItem("ptcon:token")||"",t=new WebSocket(Oo()+"/ws?token="+encodeURIComponent(n));t.onopen=()=>{Lt=!1,It=500,J=t;for(const e of ht)t.send(JSON.stringify({type:"join",videoId:e}))},t.onmessage=e=>{let i;try{i=JSON.parse(e.data)}catch{return}if((i.type==="danmaku"||i.type==="comment")&&i.videoId){const o=ut.get(i.videoId);if(o)for(const r of o)r(i)}},t.onclose=()=>{Lt=!1,J===t&&(J=null),ht.size>0&&(setTimeout(Ue,It),It=Math.min(It*2,1e4))},t.onerror=()=>{try{t.close()}catch{}}}function Ge(n,t){ut.has(n)||ut.set(n,new Set),ut.get(n).add(t),ht.add(n),Ue(),J&&J.readyState===1&&J.send(JSON.stringify({type:"join",videoId:n}))}function Kt(n,t){const e=ut.get(n);if(e&&(t&&e.delete(t),(!t||e.size===0)&&(ut.delete(n),ht.delete(n))),ht.size===0&&J){const i=J;J=null;try{i.close()}catch{}}}const Fo={class:"comments"},Vo={class:"cm-title"},Do={class:"cm-count"},Ho={class:"cm-input-box"},No=["src"],Bo={key:1,class:"cm-avatar guest"},Wo={class:"cm-input-main"},Yo=["placeholder"],jo={class:"cm-input-foot"},qo={class:"cm-tip"},Xo={key:0,class:"cm-empty"},Uo={key:1,class:"cm-empty"},Go={key:2,class:"cm-list"},Zo=["src"],Ko={class:"cm-body"},Jo={class:"cm-name"},Qo={class:"cm-content"},tr={class:"cm-foot"},er={class:"cm-time"},nr=["onClick"],ir=["onClick"],or=["onClick"],rr={key:0,class:"cm-reply-box"},ar=["placeholder"],sr={class:"cm-input-foot"},lr=["onClick"],cr={key:1,class:"cm-replies"},dr=["src"],pr={class:"cm-body"},ur={class:"cm-name"},hr={class:"cm-content"},fr={class:"cm-foot"},mr={class:"cm-time"},gr=["onClick"],vr=["onClick"],yr={__name:"CommentSection",props:{videoId:{type:String,required:!0}},setup(n,{expose:t}){const e=n,i=we(),o=xe(),r=G([]),a=G(!1),s=G(""),c=G(""),l=G(null);async function d(){a.value=!0;try{r.value=await U.listComments(e.videoId)}finally{a.value=!1}}function p(){return o.user?!0:(H.error("请先登录"),i.push({name:"login",query:{redirect:i.currentRoute.value.fullPath}}),!1)}async function h(v){if(!p())return;const w=(v?c.value:s.value).trim();if(!w)return H.error("评论内容不能为空");try{await U.addComment({videoId:e.videoId,content:w,rootId:v}),v?(c.value="",l.value=null):s.value="",H.success("评论成功"),d()}catch(x){H.error(x.message)}}function g(v){p()&&(l.value=v.id,c.value="")}async function f(v){p()&&(v.likes=await U.likeComment(v.id))}async function b(v){try{await U.deleteComment(v.id),H.success("已删除"),d()}catch(w){H.error(w.message)}}function C(v){if(v.type!=="comment")return;const w=v.comment;if(w.rootId){const x=r.value.find(y=>y.id===w.rootId);if(x){x.replies||(x.replies=[]),x.replies.push(w);return}d();return}r.value.unshift({...w,replies:[]})}return ke(()=>{d(),Ge(e.videoId,C)}),$e(()=>{Kt(e.videoId,C)}),t({reload:d}),(v,w)=>(V(),D("section",Fo,[m("h3",Vo,[w[4]||(w[4]=gt("评论 ",-1)),m("span",Do,L(r.value.length),1)]),m("div",Ho,[j(o).user?(V(),D("img",{key:0,src:j(o).user.avatar,class:"cm-avatar"},null,8,No)):(V(),D("div",Bo,"?")),m("div",Wo,[Ut(m("textarea",{"onUpdate:modelValue":w[0]||(w[0]=x=>s.value=x),class:"field",rows:"3",placeholder:j(o).user?"发一条友善的评论吧～":"登录后即可发表评论",maxlength:"500"},null,8,Yo),[[Gt,s.value]]),m("div",jo,[m("span",qo,L(s.value.length)+"/500",1),m("button",{class:"btn btn-primary",onClick:w[1]||(w[1]=x=>h(null))},"发表评论")])])]),a.value?(V(),D("div",Xo,"加载中...")):r.value.length===0?(V(),D("div",Uo,"还没有评论，来抢沙发吧～")):(V(),D("div",Go,[(V(!0),D(wt,null,xt(r.value,x=>(V(),D("div",{key:x.id,class:"cm-item"},[m("img",{src:x.userAvatar,class:"cm-avatar",referrerpolicy:"no-referrer"},null,8,Zo),m("div",Ko,[m("div",Jo,L(x.userName),1),m("div",Qo,L(x.content),1),m("div",tr,[m("span",er,L(j(re)(x.createdAt)),1),m("button",{class:"cm-action",onClick:y=>f(x)}," ▲ "+L(x.likes>0?x.likes:"赞"),9,nr),m("button",{class:"cm-action",onClick:y=>g(x)},"回复",8,ir),j(o).user&&x.userId===j(o).user.id?(V(),D("button",{key:0,class:"cm-action danger",onClick:y=>b(x)}," 删除 ",8,or)):vt("",!0)]),l.value===x.id?(V(),D("div",rr,[Ut(m("textarea",{"onUpdate:modelValue":w[2]||(w[2]=y=>c.value=y),class:"field",rows:"2",placeholder:"回复 "+x.userName+"：",maxlength:"500"},null,8,ar),[[Gt,c.value]]),m("div",sr,[m("button",{class:"btn btn-ghost",onClick:w[3]||(w[3]=y=>l.value=null)},"取消"),m("button",{class:"btn btn-primary",onClick:y=>h(x.id)},"回复",8,lr)])])):vt("",!0),x.replies&&x.replies.length?(V(),D("div",cr,[(V(!0),D(wt,null,xt(x.replies,y=>(V(),D("div",{key:y.id,class:"cm-item sub"},[m("img",{src:y.userAvatar,class:"cm-avatar",referrerpolicy:"no-referrer"},null,8,dr),m("div",pr,[m("div",ur,L(y.userName),1),m("div",hr,L(y.content),1),m("div",fr,[m("span",mr,L(j(re)(y.createdAt)),1),m("button",{class:"cm-action",onClick:S=>f(y)},"▲ "+L(y.likes>0?y.likes:"赞"),9,gr),j(o).user&&y.userId===j(o).user.id?(V(),D("button",{key:0,class:"cm-action danger",onClick:S=>b(y)}," 删除 ",8,vr)):vt("",!0)])])]))),128))])):vt("",!0)])]))),128))]))]))}},br=be(yr,[["__scopeId","data-v-9891f52e"]]),wr={key:0,class:"container page watch"},xr={class:"watch-main"},kr={class:"dm-bar"},$r={class:"dm-modes"},Cr=["onClick","title"],Tr={class:"dm-colors"},Er=["onClick"],Mr={class:"v-title"},Sr={class:"v-meta"},zr={class:"v-cat"},_r={class:"action-card"},Lr=["src"],Ir={class:"up-text"},Pr={class:"up-name"},Rr={class:"up-bio"},Ar={class:"actions"},Or={class:"act-num"},Fr={class:"act-num"},Vr={class:"act-ico"},Dr={class:"act-num"},Hr={class:"desc-card"},Nr={class:"desc-text"},Br={class:"watch-side"},Wr={class:"side-card up-card"},Yr=["src"],jr={class:"side-up-name"},qr={class:"side-stats"},Xr={class:"side-card"},Ur={class:"rec-cover"},Gr=["src"],Zr={class:"rec-dur"},Kr={class:"rec-info"},Jr={class:"rec-title"},Qr={class:"rec-up"},ta={class:"rec-stat"},ea={class:"modal"},na={class:"coin-tip"},ia={class:"coin-options"},oa=["disabled"],ra=["disabled"],aa={key:1,class:"container page empty"},sa={__name:"VideoView",setup(n){const t=an(),e=we(),i=xe(),o=G(null),r=G(null),a=G({liked:!1,coined:0,favorited:!1,guest:!0}),s=G([]),c=G({}),l=[{value:0,label:"滚动"},{value:1,label:"顶部"},{value:2,label:"底部"}],d=["#ffffff","#FE0302","#FF7204","#FFAA02","#6DEA00","#00BFFF","#FF00FF"],p=G(""),h=G("#ffffff"),g=G(0),f=G(!1);let b=null;function C(M){if(M.type!=="danmaku"||!b)return;const T=b.plugins.artplayerPluginDanmuku;T&&typeof T.emit=="function"&&T.emit({...M.danmaku,userID:M.danmaku.userName}),r.value.danmakuCount+=1}async function v(){b&&(b.destroy(!1),b=null),await ln();const M=await U.listDanmaku(r.value.id);b=new z({container:o.value,url:r.value.src,poster:r.value.cover,volume:.8,autoplay:!1,pip:!0,setting:!0,fullscreen:!0,fullscreenWeb:!0,playbackRate:!0,aspectRatio:!0,flip:!0,playsInline:!0,theme:"#fb7299",plugins:[Xe({danmuku:M,speed:6,opacity:1,margin:[10,"25%"],synchronous:!1,beforeSend:()=>null})]}),b.on("error",()=>{H.error("视频加载失败，请检查网络")})}async function w(){try{r.value=await U.getVideo(t.params.id),a.value=await U.getInteraction(r.value.id),U.getProfile(r.value.userId).then(M=>c.value=M).catch(()=>{}),U.listVideos({category:r.value.category}).then(M=>{s.value=M.filter(T=>T.id!==r.value.id).slice(0,8)}),U.addHistory(r.value.id),await v()}catch(M){H.error(M.message)}}async function x(){if(!i.user)return H.error("请先登录后再发弹幕"),e.push({name:"login",query:{redirect:t.fullPath}});const M=p.value.trim();if(M)try{const T=await U.sendDanmaku({videoId:r.value.id,text:M,time:b?b.currentTime:0,color:h.value,mode:g.value}),nt=b.plugins.artplayerPluginDanmuku;nt&&typeof nt.emit=="function"&&nt.emit({...T,userID:i.user.name}),p.value="",r.value.danmakuCount+=1,H.success("弹幕已发送")}catch(T){H.error(T.message)}}function y(){return i.user?!0:(H.error("请先登录"),e.push({name:"login",query:{redirect:t.fullPath}}),!1)}async function S(){if(y())try{const M=await U.like(r.value.id);a.value=M,r.value.likes+=M.liked?1:-1}catch(M){H.error(M.message)}}function A(){if(y()){if(a.value.coined>=2)return H.error("该视频已经投满2个硬币啦");f.value=!0}}async function _(M){try{const T=await U.coin(r.value.id,M);a.value=T,r.value.coins+=M,i.user.coins-=M,f.value=!1,H.success("投币成功，感谢支持！")}catch(T){H.error(T.message)}}async function I(){if(y())try{const M=await U.favorite(r.value.id);a.value=M,r.value.favorites+=M.favorited?1:-1,H.success(M.favorited?"已加入收藏":"已取消收藏")}catch(M){H.error(M.message)}}function F(){H.success("分享链接已复制（演示）")}return Qe(()=>t.params.id,(M,T)=>{M&&M!==T&&(T&&Kt(T,C),w())}),ke(()=>{w(),Ge(t.params.id,C)}),$e(()=>{Kt(t.params.id,C),b&&b.destroy(!1)}),(M,T)=>{const nt=sn("router-link");return r.value?(V(),D("div",wr,[m("div",xr,[m("div",{ref_key:"playerRef",ref:o,class:"player"},null,512),m("div",kr,[m("div",$r,[(V(),D(wt,null,xt(l,R=>m("button",{key:R.value,class:mt(["dm-mode",{active:g.value===R.value}]),onClick:Nt=>g.value=R.value,title:R.label},L(R.label),11,Cr)),64))]),m("div",Tr,[(V(),D(wt,null,xt(d,R=>m("button",{key:R,class:mt(["dm-color",{active:h.value===R}]),style:tn({background:R}),onClick:Nt=>h.value=R},null,14,Er)),64))]),Ut(m("input",{"onUpdate:modelValue":T[0]||(T[0]=R=>p.value=R),class:"dm-input",maxlength:"50",placeholder:"发个弹幕见证当下～",onKeyup:en(x,["enter"])},null,544),[[Gt,p.value]]),m("button",{class:"btn btn-primary dm-send",onClick:x},"发送")]),m("h1",Mr,L(r.value.title),1),m("div",Sr,[m("span",zr,L(r.value.category),1),m("span",null,L(j(pt)(r.value.views))+" 次播放",1),m("span",null,L(r.value.danmakuCount)+" 弹幕",1),m("span",null,L(j(cn)(r.value.createdAt)),1)]),m("div",_r,[St(nt,{to:"/space/"+r.value.userId,class:"up-info"},{default:zt(()=>[m("img",{src:r.value.userAvatar,class:"up-avatar",referrerpolicy:"no-referrer"},null,8,Lr),m("div",Ir,[m("div",Pr,L(r.value.userName),1),m("div",Rr,L(r.value.userId.startsWith("u")&&r.value.userId.length<=2?"知名UP主":"PtCon UP主"),1)])]),_:1},8,["to"]),m("div",Ar,[m("button",{class:mt(["act",{on:a.value.liked}]),onClick:S},[T[5]||(T[5]=m("span",{class:"act-ico"},"👍",-1)),m("span",null,L(a.value.liked?"已赞":"点赞"),1),m("span",Or,L(j(pt)(r.value.likes)),1)],2),m("button",{class:mt(["act coin",{on:a.value.coined>0}]),onClick:A},[T[6]||(T[6]=m("span",{class:"act-ico"},"🪙",-1)),m("span",null,L(a.value.coined>0?`已投${a.value.coined}`:"投币"),1),m("span",Fr,L(j(pt)(r.value.coins)),1)],2),m("button",{class:mt(["act fav",{on:a.value.favorited}]),onClick:I},[m("span",Vr,L(a.value.favorited?"⭐":"☆"),1),m("span",null,L(a.value.favorited?"已收藏":"收藏"),1),m("span",Dr,L(j(pt)(r.value.favorites)),1)],2),m("button",{class:"act",onClick:F},[...T[7]||(T[7]=[m("span",{class:"act-ico"},"↗",-1),m("span",null,"分享",-1)])])])]),m("div",Hr,[m("div",Nr,L(r.value.desc),1)]),St(br,{"video-id":r.value.id},null,8,["video-id"])]),m("aside",Br,[m("div",Wr,[m("img",{src:r.value.userAvatar,class:"side-avatar",referrerpolicy:"no-referrer"},null,8,Yr),m("div",jr,L(r.value.userName),1),m("div",qr,[m("div",null,[m("b",null,L(c.value.fans?j(pt)(c.value.fans):"1.2万"),1),T[8]||(T[8]=m("span",null,"粉丝",-1))]),m("div",null,[m("b",null,L(c.value.videoCount||0),1),T[9]||(T[9]=m("span",null,"视频",-1))])]),St(nt,{to:"/space/"+r.value.userId,class:"btn btn-ghost btn-block"},{default:zt(()=>[...T[10]||(T[10]=[gt("进入主页",-1)])]),_:1},8,["to"])]),m("div",Xr,[T[11]||(T[11]=m("h4",{class:"side-title"},"相关推荐",-1)),(V(!0),D(wt,null,xt(s.value,R=>(V(),nn(nt,{key:R.id,to:"/video/"+R.id,class:"rec-item"},{default:zt(()=>[m("div",Ur,[m("img",{src:R.cover,loading:"lazy",referrerpolicy:"no-referrer"},null,8,Gr),m("span",Zr,L(j(dn)(R.duration)),1)]),m("div",Kr,[m("div",Jr,L(R.title),1),m("div",Qr,L(R.userName),1),m("div",ta,L(j(pt)(R.views))+"播放",1)])]),_:2},1032,["to"]))),128))])]),St(rn,{name:"fade"},{default:zt(()=>[f.value?(V(),D("div",{key:0,class:"modal-mask",onClick:T[4]||(T[4]=on(R=>f.value=!1,["self"]))},[m("div",ea,[T[14]||(T[14]=m("h3",null,"给UP主投硬币",-1)),m("p",na,[T[12]||(T[12]=gt("每个视频最多投2个硬币 · 你还可投 ",-1)),m("b",null,L(2-a.value.coined),1),T[13]||(T[13]=gt(" 个",-1))]),m("div",ia,[m("button",{class:"coin-opt",disabled:a.value.coined>1,onClick:T[1]||(T[1]=R=>_(1))},"投 1 枚",8,oa),m("button",{class:"coin-opt",disabled:a.value.coined>0,onClick:T[2]||(T[2]=R=>_(2))},"投 2 枚",8,ra)]),m("button",{class:"btn btn-ghost btn-block",onClick:T[3]||(T[3]=R=>f.value=!1)},"取消")])])):vt("",!0)]),_:1})])):(V(),D("div",aa,[...T[15]||(T[15]=[m("div",{class:"emoji"},"⏳",-1),gt("视频加载中...",-1)])]))}}},pa=be(sa,[["__scopeId","data-v-10c3895f"]]);export{pa as default};
