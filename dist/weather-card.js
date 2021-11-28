(()=>{var t=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,e="[1-9]\\d?",n="\\d\\d",a="[^\\s]+",i=/\[([^]*?)\]/gm;function r(t,e){for(var n=[],a=0,i=t.length;a<i;a++)n.push(t[a].substr(0,e));return n}var o=function(t){return function(e,n){var a=n[t].map((function(t){return t.toLowerCase()})).indexOf(e.toLowerCase());return a>-1?a:null}};function s(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];for(var a=0,i=e;a<i.length;a++){var r=i[a];for(var o in r)t[o]=r[o]}return t}var l=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],m=["January","February","March","April","May","June","July","August","September","October","November","December"],c=r(m,3),f={dayNamesShort:r(l,3),dayNames:l,monthNamesShort:c,monthNames:m,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},u=s({},f),d=function(t){return t.replace(/[|\\{()[^$+*?.-]/g,"\\$&")},h=function(t,e){for(void 0===e&&(e=2),t=String(t);t.length<e;)t="0"+t;return t},p={D:function(t){return String(t.getDate())},DD:function(t){return h(t.getDate())},Do:function(t,e){return e.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return h(t.getDay())},ddd:function(t,e){return e.dayNamesShort[t.getDay()]},dddd:function(t,e){return e.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return h(t.getMonth()+1)},MMM:function(t,e){return e.monthNamesShort[t.getMonth()]},MMMM:function(t,e){return e.monthNames[t.getMonth()]},YY:function(t){return h(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return h(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return h(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return h(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return h(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return h(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return h(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return h(t.getMilliseconds(),3)},a:function(t,e){return t.getHours()<12?e.amPm[0]:e.amPm[1]},A:function(t,e){return t.getHours()<12?e.amPm[0].toUpperCase():e.amPm[1].toUpperCase()},ZZ:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+h(100*Math.floor(Math.abs(e)/60)+Math.abs(e)%60,4)},Z:function(t){var e=t.getTimezoneOffset();return(e>0?"-":"+")+h(Math.floor(Math.abs(e)/60),2)+":"+h(Math.abs(e)%60,2)}},g=function(t){return+t-1},w=[null,e],x=[null,a],y=["isPm",a,function(t,e){var n=t.toLowerCase();return n===e.amPm[0]?0:n===e.amPm[1]?1:null}],v=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var e=(t+"").match(/([+-]|\d\d)/gi);if(e){var n=60*+e[1]+parseInt(e[2],10);return"+"===e[0]?n:-n}return 0}],k={D:["day",e],DD:["day",n],Do:["day","[1-9]\\d?[^\\s]+",function(t){return parseInt(t,10)}],M:["month",e,g],MM:["month",n,g],YY:["year",n,function(t){var e=+(""+(new Date).getFullYear()).substr(0,2);return+(""+(+t>68?e-1:e)+t)}],h:["hour",e,void 0,"isPm"],hh:["hour",n,void 0,"isPm"],H:["hour",e],HH:["hour",n],m:["minute",e],mm:["minute",n],s:["second",e],ss:["second",n],YYYY:["year","\\d{4}"],S:["millisecond","\\d",function(t){return 100*+t}],SS:["millisecond",n,function(t){return 10*+t}],SSS:["millisecond","\\d{3}"],d:w,dd:w,ddd:x,dddd:x,MMM:["month",a,o("monthNamesShort")],MMMM:["month",a,o("monthNames")],a:y,A:y,ZZ:v,Z:v},b={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"};var $={format:function(e,n,a){if(void 0===n&&(n=b.default),void 0===a&&(a={}),"number"==typeof e&&(e=new Date(e)),"[object Date]"!==Object.prototype.toString.call(e)||isNaN(e.getTime()))throw new Error("Invalid Date pass to format");var r=[];n=(n=b[n]||n).replace(i,(function(t,e){return r.push(e),"@@@"}));var o=s(s({},u),a);return(n=n.replace(t,(function(t){return p[t](e,o)}))).replace(/@@@/g,(function(){return r.shift()}))},parse:function(e,n,a){if(void 0===a&&(a={}),"string"!=typeof n)throw new Error("Invalid format in fecha parse");if(n=b[n]||n,e.length>1e3)return null;var r={year:(new Date).getFullYear(),month:0,day:1,hour:0,minute:0,second:0,millisecond:0,isPm:null,timezoneOffset:null},o=[],l=[],m=n.replace(i,(function(t,e){return l.push(d(e)),"@@@"})),c={},f={};m=d(m).replace(t,(function(t){var e=k[t],n=e[0],a=e[1],i=e[3];if(c[n])throw new Error("Invalid format. "+n+" specified twice in format");return c[n]=!0,i&&(f[i]=!0),o.push(e),"("+a+")"})),Object.keys(f).forEach((function(t){if(!c[t])throw new Error("Invalid format. "+t+" is required in specified format")})),m=m.replace(/@@@/g,(function(){return l.shift()}));var h=e.match(new RegExp(m,"i"));if(!h)return null;for(var p=s(s({},u),a),g=1;g<h.length;g++){var w=o[g-1],x=w[0],y=w[2],v=y?y(h[g],p):+h[g];if(null==v)return null;r[x]=v}1===r.isPm&&null!=r.hour&&12!=+r.hour?r.hour=+r.hour+12:0===r.isPm&&12==+r.hour&&(r.hour=0);for(var $=new Date(r.year,r.month,r.day,r.hour,r.minute,r.second,r.millisecond),_=[["month","getMonth"],["day","getDate"],["hour","getHours"],["minute","getMinutes"],["second","getSeconds"]],A=(g=0,_.length);g<A;g++)if(c[_[g][0]]&&r[_[g][0]]!==$[_[g][1]]())return null;return null==r.timezoneOffset?$:new Date(Date.UTC(r.year,r.month,r.day,r.hour,r.minute-r.timezoneOffset,r.second,r.millisecond))},defaultI18n:f,setGlobalDateI18n:function(t){return u=s(u,t)},setGlobalDateMasks:function(t){return s(b,t)}};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();var _,A,S;function E(t){return t.substr(0,t.indexOf("."))}(S=_||(_={})).language="language",S.system="system",S.comma_decimal="comma_decimal",S.decimal_comma="decimal_comma",S.space_comma="space_comma",S.none="none",function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(A||(A={}));new Set(["fan","input_boolean","light","switch","group","automation"]);var M=function(t,e,n,a){a=a||{},n=null==n?{}:n;var i=new Event(e,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return i.detail=n,t.dispatchEvent(i),i};new Set(["call-service","divider","section","weblink","cast","select"]);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const z=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,C=Symbol(),D=new Map;class T{constructor(t,e){if(this._$cssResult$=!0,e!==C)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=D.get(this.cssText);return z&&void 0===t&&(D.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const Y=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,n,a)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[a+1]),t[0]);return new T(n,C)},N=z?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return(t=>new T("string"==typeof t?t:t+"",C))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var O;const H=window.trustedTypes,P=H?H.emptyScript:"",U=window.reactiveElementPolyfillSupport,R={toAttribute(t,e){switch(e){case Boolean:t=t?P:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},F=(t,e)=>e!==t&&(e==e||t==t),j={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:F};class X extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,n)=>{const a=this._$Eh(n,e);void 0!==a&&(this._$Eu.set(a,n),t.push(a))})),t}static createProperty(t,e=j){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const n="symbol"==typeof t?Symbol():"__"+t,a=this.getPropertyDescriptor(t,n,e);void 0!==a&&Object.defineProperty(this.prototype,t,a)}}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(a){const i=this[t];this[e]=a,this.requestUpdate(t,i,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||j}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of e)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(N(t))}else void 0!==t&&e.push(N(t));return e}static _$Eh(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,n;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(n=t.hostConnected)||void 0===n||n.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{z?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const n=document.createElement("style"),a=window.litNonce;void 0!==a&&n.setAttribute("nonce",a),n.textContent=e.cssText,t.appendChild(n)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ES(t,e,n=j){var a,i;const r=this.constructor._$Eh(t,n);if(void 0!==r&&!0===n.reflect){const o=(null!==(i=null===(a=n.converter)||void 0===a?void 0:a.toAttribute)&&void 0!==i?i:R.toAttribute)(e,n.type);this._$Ei=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Ei=null}}_$AK(t,e){var n,a,i;const r=this.constructor,o=r._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=r.getPropertyOptions(o),s=t.converter,l=null!==(i=null!==(a=null===(n=s)||void 0===n?void 0:n.fromAttribute)&&void 0!==a?a:"function"==typeof s?s:null)&&void 0!==i?i:R.fromAttribute;this._$Ei=o,this[o]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,n){let a=!0;void 0!==t&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||F)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===n.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,n))):a=!1),!this.isUpdatePending&&a&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(n)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(n)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var B;X.finalized=!0,X.elementProperties=new Map,X.elementStyles=[],X.shadowRootOptions={mode:"open"},null==U||U({ReactiveElement:X}),(null!==(O=globalThis.reactiveElementVersions)&&void 0!==O?O:globalThis.reactiveElementVersions=[]).push("1.0.2");const I=globalThis.trustedTypes,L=I?I.createPolicy("lit-html",{createHTML:t=>t}):void 0,G=`lit$${(Math.random()+"").slice(9)}$`,Z="?"+G,W=`<${Z}>`,V=document,J=(t="")=>V.createComment(t),q=t=>null===t||"object"!=typeof t&&"function"!=typeof t,K=Array.isArray,Q=t=>{var e;return K(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},tt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,et=/-->/g,nt=/>/g,at=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,it=/'/g,rt=/"/g,ot=/^(?:script|style|textarea)$/i,st=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),lt=st(1),mt=st(2),ct=Symbol.for("lit-noChange"),ft=Symbol.for("lit-nothing"),ut=new WeakMap,dt=V.createTreeWalker(V,129,null,!1),ht=(t,e)=>{const n=t.length-1,a=[];let i,r=2===e?"<svg>":"",o=tt;for(let e=0;e<n;e++){const n=t[e];let s,l,m=-1,c=0;for(;c<n.length&&(o.lastIndex=c,l=o.exec(n),null!==l);)c=o.lastIndex,o===tt?"!--"===l[1]?o=et:void 0!==l[1]?o=nt:void 0!==l[2]?(ot.test(l[2])&&(i=RegExp("</"+l[2],"g")),o=at):void 0!==l[3]&&(o=at):o===at?">"===l[0]?(o=null!=i?i:tt,m=-1):void 0===l[1]?m=-2:(m=o.lastIndex-l[2].length,s=l[1],o=void 0===l[3]?at:'"'===l[3]?rt:it):o===rt||o===it?o=at:o===et||o===nt?o=tt:(o=at,i=void 0);const f=o===at&&t[e+1].startsWith("/>")?" ":"";r+=o===tt?n+W:m>=0?(a.push(s),n.slice(0,m)+"$lit$"+n.slice(m)+G+f):n+G+(-2===m?(a.push(void 0),e):f)}const s=r+(t[n]||"<?>")+(2===e?"</svg>":"");return[void 0!==L?L.createHTML(s):s,a]};class pt{constructor({strings:t,_$litType$:e},n){let a;this.parts=[];let i=0,r=0;const o=t.length-1,s=this.parts,[l,m]=ht(t,e);if(this.el=pt.createElement(l,n),dt.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(a=dt.nextNode())&&s.length<o;){if(1===a.nodeType){if(a.hasAttributes()){const t=[];for(const e of a.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(G)){const n=m[r++];if(t.push(e),void 0!==n){const t=a.getAttribute(n.toLowerCase()+"$lit$").split(G),e=/([.?@])?(.*)/.exec(n);s.push({type:1,index:i,name:e[2],strings:t,ctor:"."===e[1]?vt:"?"===e[1]?bt:"@"===e[1]?$t:yt})}else s.push({type:6,index:i})}for(const e of t)a.removeAttribute(e)}if(ot.test(a.tagName)){const t=a.textContent.split(G),e=t.length-1;if(e>0){a.textContent=I?I.emptyScript:"";for(let n=0;n<e;n++)a.append(t[n],J()),dt.nextNode(),s.push({type:2,index:++i});a.append(t[e],J())}}}else if(8===a.nodeType)if(a.data===Z)s.push({type:2,index:i});else{let t=-1;for(;-1!==(t=a.data.indexOf(G,t+1));)s.push({type:7,index:i}),t+=G.length-1}i++}}static createElement(t,e){const n=V.createElement("template");return n.innerHTML=t,n}}function gt(t,e,n=t,a){var i,r,o,s;if(e===ct)return e;let l=void 0!==a?null===(i=n._$Cl)||void 0===i?void 0:i[a]:n._$Cu;const m=q(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==m&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===m?l=void 0:(l=new m(t),l._$AT(t,n,a)),void 0!==a?(null!==(o=(s=n)._$Cl)&&void 0!==o?o:s._$Cl=[])[a]=l:n._$Cu=l),void 0!==l&&(e=gt(t,l._$AS(t,e.values),l,a)),e}class wt{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:n},parts:a}=this._$AD,i=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:V).importNode(n,!0);dt.currentNode=i;let r=dt.nextNode(),o=0,s=0,l=a[0];for(;void 0!==l;){if(o===l.index){let e;2===l.type?e=new xt(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new _t(r,this,t)),this.v.push(e),l=a[++s]}o!==(null==l?void 0:l.index)&&(r=dt.nextNode(),o++)}return i}m(t){let e=0;for(const n of this.v)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class xt{constructor(t,e,n,a){var i;this.type=2,this._$AH=ft,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=a,this._$Cg=null===(i=null==a?void 0:a.isConnected)||void 0===i||i}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=gt(this,t,e),q(t)?t===ft||null==t||""===t?(this._$AH!==ft&&this._$AR(),this._$AH=ft):t!==this._$AH&&t!==ct&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):Q(t)?this.M(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==ft&&q(this._$AH)?this._$AA.nextSibling.data=t:this.S(V.createTextNode(t)),this._$AH=t}T(t){var e;const{values:n,_$litType$:a}=t,i="number"==typeof a?this._$AC(t):(void 0===a.el&&(a.el=pt.createElement(a.h,this.options)),a);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===i)this._$AH.m(n);else{const t=new wt(i,this),e=t.p(this.options);t.m(n),this.S(e),this._$AH=t}}_$AC(t){let e=ut.get(t.strings);return void 0===e&&ut.set(t.strings,e=new pt(t)),e}M(t){K(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,a=0;for(const i of t)a===e.length?e.push(n=new xt(this.A(J()),this.A(J()),this,this.options)):n=e[a],n._$AI(i),a++;a<e.length&&(this._$AR(n&&n._$AB.nextSibling,a),e.length=a)}_$AR(t=this._$AA.nextSibling,e){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class yt{constructor(t,e,n,a,i){this.type=1,this._$AH=ft,this._$AN=void 0,this.element=t,this.name=e,this._$AM=a,this.options=i,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=ft}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,n,a){const i=this.strings;let r=!1;if(void 0===i)t=gt(this,t,e,0),r=!q(t)||t!==this._$AH&&t!==ct,r&&(this._$AH=t);else{const a=t;let o,s;for(t=i[0],o=0;o<i.length-1;o++)s=gt(this,a[n+o],e,o),s===ct&&(s=this._$AH[o]),r||(r=!q(s)||s!==this._$AH[o]),s===ft?t=ft:t!==ft&&(t+=(null!=s?s:"")+i[o+1]),this._$AH[o]=s}r&&!a&&this.k(t)}k(t){t===ft?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class vt extends yt{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===ft?void 0:t}}const kt=I?I.emptyScript:"";class bt extends yt{constructor(){super(...arguments),this.type=4}k(t){t&&t!==ft?this.element.setAttribute(this.name,kt):this.element.removeAttribute(this.name)}}class $t extends yt{constructor(t,e,n,a,i){super(t,e,n,a,i),this.type=5}_$AI(t,e=this){var n;if((t=null!==(n=gt(this,t,e,0))&&void 0!==n?n:ft)===ct)return;const a=this._$AH,i=t===ft&&a!==ft||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,r=t!==ft&&(a===ft||i);i&&this.element.removeEventListener(this.name,this,a),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==n?n:this.element,t):this._$AH.handleEvent(t)}}class _t{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){gt(this,t)}}const At=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var St,Et;null==At||At(pt,xt),(null!==(B=globalThis.litHtmlVersions)&&void 0!==B?B:globalThis.litHtmlVersions=[]).push("2.0.2");class Mt extends X{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const n=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=n.firstChild),n}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,n)=>{var a,i;const r=null!==(a=null==n?void 0:n.renderBefore)&&void 0!==a?a:e;let o=r._$litPart$;if(void 0===o){const t=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:null;r._$litPart$=o=new xt(e.insertBefore(J(),t),t,void 0,null!=n?n:{})}return o._$AI(t),o})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return ct}}Mt.finalized=!0,Mt._$litElement$=!0,null===(St=globalThis.litElementHydrateSupport)||void 0===St||St.call(globalThis,{LitElement:Mt});const zt=globalThis.litElementPolyfillSupport;null==zt||zt({LitElement:Mt});(null!==(Et=globalThis.litElementVersions)&&void 0!==Et?Et:globalThis.litElementVersions=[]).push("3.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Ct=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:a}=e;return{kind:n,elements:a,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Dt=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function Tt(t){return(e,n)=>void 0!==n?((t,e,n)=>{e.constructor.createProperty(n,t)})(t,e,n):Dt(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Yt(t){return Tt({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Nt(t,e){return t.states[e]}function Ot(t){return t.state}function Ht(t,e){return t.config.unit_system[e]}const Pt="sun.sun";var Ut,Rt;(Rt=Ut||(Ut={})).AboveHorizon="above_horizon",Rt.BelowHorizon="below_horizon";var Ft=mt`
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="100%"
    height="100%"
    viewbox="0 0 42 42">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
        <feMerge> 
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/> 
        </feMerge>
        </filter>
    </defs>
    <g filter="url(#blur)" id="cloudy">
        <g transform="translate(9,2)">
            <g class="am-weather-cloud-1">
                <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-10,-8), scale(0.6)"/>
            </g>
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
    </g>
</svg>
`,jt=mt`
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="100%"
    height="100%"
    viewbox="0 0 48 48">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
    </defs>
    <g filter="url(#blur)" id="cloudy-day-3">
        <g transform="translate(16,6)">
            <g transform="translate(0,14)">
                <g class="am-weather-sun">
                    <g>
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(45)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(90)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(135)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(180)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(225)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(270)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                    <g transform="rotate(315)">
                        <line fill="none" stroke="orange" stroke-linecap="round" stroke-width="2" transform="translate(0,9)" x1="0" x2="0" y1="0" y2="3"/>
                    </g>
                </g>
                <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2"/>
            </g>
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
    </g>
</svg>
`,Xt=mt`
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="100%"
    height="100%"
    viewbox="0 0 48 48">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
    </defs>
    <g filter="url(#blur)" id="cloudy-night-3">
        <g transform="translate(9,5)">
            <g transform="translate(16,4), scale(0.8)">
                <g class="am-weather-moon-star-1">
                    <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10"/>
                </g>
                <g class="am-weather-moon-star-2">
                    <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10" transform="translate(20,10)"/>
                </g>
                <g class="am-weather-moon">
                    <path d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z" fill="orange" stroke="orange" stroke-linejoin="round" stroke-width="2"/>
                </g>
            </g>
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4    c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
    </g>
</svg>
`,Bt=mt`
<svg
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
  width="100%"
  height="100%"
  viewbox="0 0 32 32"
>
  <defs>
    <filter id="blur" width="200%" height="200%">
      <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
      <feOffset dx="0" dy="4" result="offsetblur" />
      <feComponentTransfer>
        <feFuncA type="linear" slope="0.05" />
      </feComponentTransfer>
      <feMerge>
        <feMergeNode />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
  <g filter="url(#blur)" id="day">
    <g transform="translate(16,16)">
      <g class="am-weather-sun am-weather-sun-shiny am-weather-easing-ease-in-out">
        <g>
          <line
            fill="none"
            stroke="orange"
            stroke-linecap="round"
            stroke-width="2"
            transform="translate(0,9)"
            x1="0"
            x2="0"
            y1="0"
            y2="3"
          />
        </g>
        <g transform="rotate(45)">
          <line
            fill="none"
            stroke="orange"
            stroke-linecap="round"
            stroke-width="2"
            transform="translate(0,9)"
            x1="0"
            x2="0"
            y1="0"
            y2="3"
          />
        </g>
        <g transform="rotate(90)">
          <line
            fill="none"
            stroke="orange"
            stroke-linecap="round"
            stroke-width="2"
            transform="translate(0,9)"
            x1="0"
            x2="0"
            y1="0"
            y2="3"
          />
        </g>
        <g transform="rotate(135)">
          <line
            fill="none"
            stroke="orange"
            stroke-linecap="round"
            stroke-width="2"
            transform="translate(0,9)"
            x1="0"
            x2="0"
            y1="0"
            y2="3"
          />
        </g>
        <g transform="rotate(180)">
          <line
            fill="none"
            stroke="orange"
            stroke-linecap="round"
            stroke-width="2"
            transform="translate(0,9)"
            x1="0"
            x2="0"
            y1="0"
            y2="3"
          />
        </g>
        <g transform="rotate(225)">
          <line
            fill="none"
            stroke="orange"
            stroke-linecap="round"
            stroke-width="2"
            transform="translate(0,9)"
            x1="0"
            x2="0"
            y1="0"
            y2="3"
          />
        </g>
        <g transform="rotate(270)">
          <line
            fill="none"
            stroke="orange"
            stroke-linecap="round"
            stroke-width="2"
            transform="translate(0,9)"
            x1="0"
            x2="0"
            y1="0"
            y2="3"
          />
        </g>
        <g transform="rotate(315)">
          <line
            fill="none"
            stroke="orange"
            stroke-linecap="round"
            stroke-width="2"
            transform="translate(0,9)"
            x1="0"
            x2="0"
            y1="0"
            y2="3"
          />
        </g>
      </g>
      <circle cx="0" cy="0" fill="orange" r="5" stroke="orange" stroke-width="2" />
    </g>
  </g>
</svg>
`,It=mt`
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="100%"
    height="100%"
    viewbox="0 0 32 32">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
    </defs>
    <g filter="url(#blur)" id="night">
        <g transform="translate(4,4)">
            <g class="am-weather-moon-star-1">
                <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10"/>
            </g>
            <g class="am-weather-moon-star-2">
                <polygon fill="orange" points="3.3,1.5 4,2.7 5.2,3.3 4,4 3.3,5.2 2.7,4 1.5,3.3 2.7,2.7" stroke="none" stroke-miterlimit="10" transform="translate(20,10)"/>
            </g>
            <g class="am-weather-moon">
                <path d="M14.5,13.2c0-3.7,2-6.9,5-8.7   c-1.5-0.9-3.2-1.3-5-1.3c-5.5,0-10,4.5-10,10s4.5,10,10,10c1.8,0,3.5-0.5,5-1.3C16.5,20.2,14.5,16.9,14.5,13.2z" fill="orange" stroke="orange" stroke-linejoin="round" stroke-width="2"/>
            </g>
        </g>
    </g>
</svg>
`,Lt=mt`
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="100%"
    height="100%"
    viewbox="0 0 44 44">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
    </defs>
    <g filter="url(#blur)" id="rainy-5">
        <g transform="translate(10,-5)">
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
        <g transform="translate(24,33), rotate(10)">
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="4,7" stroke-linecap="round" stroke-width="2" transform="translate(-6,1)" x1="0" x2="0" y1="0" y2="8" />
            <line class="am-weather-rain-2" fill="none" stroke="#91C0F8" stroke-dasharray="4,7" stroke-linecap="round" stroke-width="2" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
        </g>
    </g>
</svg>
`,Gt=mt`
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="100%"
    height="100%"
    viewbox="0 0 44 44">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
    </defs>
    <g filter="url(#blur)" id="rainy-6">
        <g transform="translate(10,-5)">
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
        <g transform="translate(22,31), rotate(10)">
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="4,4" stroke-linecap="round" stroke-width="2" transform="translate(-4,1)" x1="0" x2="0" y1="0" y2="8" />
            <line class="am-weather-rain-2" fill="none" stroke="#91C0F8" stroke-dasharray="4,4" stroke-linecap="round" stroke-width="2" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="4,4" stroke-linecap="round" stroke-width="2" transform="translate(4,0)" x1="0" x2="0" y1="0" y2="8" />
        </g>
    </g>
</svg>
`,Zt=mt`
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="100%"
    height="100%"
    viewbox="0 0 44 44">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
    </defs>
    <g filter="url(#blur)" id="rainy-7">
        <g transform="translate(10,-5)">
            <g>
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
        </g>
        <g transform="translate(22,31), rotate(10)">
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="0.1,7" stroke-linecap="round" stroke-width="3" transform="translate(-5,1)" x1="0" x2="0" y1="0" y2="8" />
            <line class="am-weather-rain-2" fill="none" stroke="#91C0F8" stroke-dasharray="0.1,7" stroke-linecap="round" stroke-width="3" transform="translate(0,-1)" x1="0" x2="0" y1="0" y2="8" />
            <line class="am-weather-rain-1" fill="none" stroke="#91C0F8" stroke-dasharray="0.1,7" stroke-linecap="round" stroke-width="3" transform="translate(5,0)" x1="0" x2="0" y1="0" y2="8" />
        </g>
    </g>
</svg>
`,Wt=mt`
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="100%"
    height="100%"
    viewbox="0 0 42 42">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
    </defs>
    <g filter="url(#blur)" id="snowy-6">
        <g transform="translate(9,-7)">
            <g class="am-weather-cloud-2">
                <path d="M47.7,35.4c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3    c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)"/>
            </g>
            <g class="am-weather-snow-1">
                <g transform="translate(4,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
            <g class="am-weather-snow-2">
                <g transform="translate(12,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
            <g class="am-weather-snow-3">
                <g transform="translate(21,28)">
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1.2" transform="translate(0,9), rotate(0)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(45)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(90)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                    <line fill="none" stroke="#57A0EE" stroke-linecap="round" stroke-width="1" transform="translate(0,9), rotate(135)" x1="0" x2="0" y1="-2.5" y2="2.5" />
                </g>
            </g>
        </g>
    </g>
</svg>
`,Vt=mt`
<svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="100%"
    height="100%"
    viewbox="0 0 42 42">
    <defs>
        <filter id="blur" width="200%" height="200%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
            <feOffset dx="0" dy="4" result="offsetblur"/>
            <feComponentTransfer>
                <feFuncA type="linear" slope="0.05"/>
            </feComponentTransfer>
            <feMerge> 
                <feMergeNode/>
                <feMergeNode in="SourceGraphic"/> 
            </feMerge>
        </filter>
    </defs>
    <g filter="url(#blur)" id="thunder">
        <g transform="translate(9,-4)">
            <g class="am-weather-cloud-1">
                <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#91C0F8" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-10,-6), scale(0.6)" />
            </g>
            <g>
                <path d="M47.7,35.4     c0-4.6-3.7-8.2-8.2-8.2c-1,0-1.9,0.2-2.8,0.5c-0.3-3.4-3.1-6.2-6.6-6.2c-3.7,0-6.7,3-6.7,6.7c0,0.8,0.2,1.6,0.4,2.3     c-0.3-0.1-0.7-0.1-1-0.1c-3.7,0-6.7,3-6.7,6.7c0,3.6,2.9,6.6,6.5,6.7l17.2,0C44.2,43.3,47.7,39.8,47.7,35.4z" fill="#57A0EE" stroke="white" stroke-linejoin="round" stroke-width="1.2" transform="translate(-20,-11)" />
            </g>
            <g transform="translate(-7,24), scale(1.2)">
                <polygon class="am-weather-stroke" fill="orange" stroke="white" stroke-width="1" points="14.3,-2.9 20.5,-2.9 16.4,4.3 20.3,4.3 11.5,14.6 14.9,6.9 11.1,6.9" />
            </g>
        </g>
    </g>
</svg>
`;const Jt="weather",qt="weather-card";var Kt,Qt;function te(t,e){switch(t){case Kt.Clear:case Kt.Sunny:return e===Ut.BelowHorizon?It:Bt;case Kt.ClearNight:return It;case Kt.Cloudy:case Kt.Fog:case Kt.Windy:return Ft;case Kt.Hail:case Kt.SnowyRainy:return Zt;case Kt.Lightning:case Kt.LightningRainy:return Vt;case Kt.PartlyCloudy:case Kt.WindyVariant:return e===Ut.BelowHorizon?Xt:jt;case Kt.Pouring:return Gt;case Kt.Rainy:return Lt;case Kt.Snowy:return Wt}}function ee(t){return E(t)===Jt}(Qt=Kt||(Kt={})).Clear="clear",Qt.ClearNight="clear-night",Qt.Cloudy="cloudy",Qt.Exceptional="exceptional",Qt.Fog="fog",Qt.Hail="hail",Qt.Lightning="lightning",Qt.LightningRainy="lightning-rainy",Qt.PartlyCloudy="partlycloudy",Qt.Pouring="pouring",Qt.Rainy="rainy",Qt.Snowy="snowy",Qt.SnowyRainy="snowy-rainy",Qt.Sunny="sunny",Qt.Windy="windy",Qt.WindyVariant="windy-variant";var ne=Y`
  .switches {
    margin: 8px 0;
    display: flex;
    justify-content: space-between;
  }
  .switch {
    display: flex;
    align-items: center;
    justify-items: center;
  }
  .switches span {
    padding: 0 16px;
  }
`,ae=function(t,e,n,a){var i,r=arguments.length,o=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(o=(r<3?i(o):r>3?i(e,n,o):i(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o};let ie=class extends Mt{setConfig(t){this.config=Object.assign({},t)}render(){var t;const e=this.hass,{current:n=!0,entity:a="",forecast:i,hourly_forecast:r,name:o="",number_of_forecasts:s=5}=null!==(t=this.config)&&void 0!==t?t:{},l=Object.keys(e.states).filter(ee);return lt`
      <div class="card-config">
        <div>
          <paper-input label="Name" .value="${o}" @value-changed="${this.handleChange("name")}"></paper-input>
          ${customElements.get("ha-entity-picker")?lt`
                <ha-entity-picker
                  .hass="${e}"
                  .value="${a}"
                  .includeDomains=${[Jt]}
                  @change="${this.handleChange("entity")}"
                >
                </ha-entity-picker>
              `:lt`
                <paper-dropdown-menu label="Entity" @value-changed="${this.handleChange("entity")}">
                  <paper-listbox slot="dropdown-content" .selected="${l.indexOf(a)}">
                    ${l.map((t=>lt` <paper-item>${t}</paper-item> `))}
                  </paper-listbox>
                </paper-dropdown-menu>
              `}
          <div class="switches">
            <div class="switch">
              <ha-switch .checked=${n} @change="${this.handleChange("current")}"></ha-switch
              ><span>Show current</span>
            </div>
            <div class="switch">
              <ha-switch .checked=${i} @change="${this.handleChange("forecast")}"></ha-switch
              ><span>Show forecast</span>
            </div>
            <div class="switch">
              <ha-switch .checked=${r} @change="${this.handleChange("hourly_forecast")}"></ha-switch
              ><span>Show hourly forecast</span>
            </div>
          </div>
          <paper-input
            label="Number of future forcasts"
            type="number"
            min="1"
            max="5"
            value=${s}
            @value-changed="${this.handleChange("number_of_forecasts")}"
          ></paper-input>
        </div>
      </div>
    `}handleChange(t){return e=>{var n;const a=this.config;if(null==a||null==this.hass)return;const i=e.target;if(null==i)return;const r=Object.assign({},a),o=null!==(n=i.checked)&&void 0!==n?n:i.value;"string"==typeof o&&""===o?delete r[t]:r[t]=o,M(this,"config-changed",{config:r})}}};ie.styles=ne,ae([Yt()],ie.prototype,"config",void 0),ae([Tt()],ie.prototype,"hass",void 0),ie=ae([Ct("weather-card-editor")],ie);var re=Y`
  :root {
    --color-warn: #fffbe5;
  }
  .flex {
    display: flex;
  }
  .flex-align-center {
    align-items: center;
  }
  .flex-justify-center {
    justify-content: center;
  }
  .flex-column {
    flex-direction: column;
  }
  .flex-no-shrink {
    flex-shrink: 0;
  }
  .grid {
    display: grid;
  }
  .grid-align-center {
    align-items: center;
  }
  .secondary-text {
    color: var(--secondary-text-color);
  }
  .container {
    padding: 16px;
    cursor: pointer;
  }
  .not-found {
    flex: 1;
    background-color: var(--color-warn);
    padding: 8px;
  }
  .current {
    box-sizing: border-box;
    grid-template-columns: 64px 1fr min-content;
    grid-column-gap: 16px;
    line-height: 1.2;
  }
  .forecasts {
    justify-content: space-around;
    margin-top: 16px;
  }
  .forecast {
    align-items: center;
  }
  .forecast .icon-small {
    margin: 8px 0;
  }
  .icon {
    height: 64px;
    width: 64px;
  }
  .icon-small {
    height: 40px;
    width: 40px;
  }
  .title {
    font-size: 28px;
  }
  .subtitle {
    font-size: 14px;
  }
  .right-content {
    align-items: end;
    flex-shrink: 0;
    text-align: right;
  }
  .temperature {
    font-size: 28px;
  }
  .unit {
    font-size: 24px;
    margin-left: 4px;
  }
  .temp-high {
    font-size: 16px;
    margin: 4px 0;
  }
  .temp-low {
    font-size: 14px;
  }

  /**
  * CLOUDS
  */
  @keyframes am-weather-cloud-1 {
    0% {
      -webkit-transform: translate(-5px, 0px);
      -moz-transform: translate(-5px, 0px);
      -ms-transform: translate(-5px, 0px);
      transform: translate(-5px, 0px);
    }

    50% {
      -webkit-transform: translate(10px, 0px);
      -moz-transform: translate(10px, 0px);
      -ms-transform: translate(10px, 0px);
      transform: translate(10px, 0px);
    }

    100% {
      -webkit-transform: translate(-5px, 0px);
      -moz-transform: translate(-5px, 0px);
      -ms-transform: translate(-5px, 0px);
      transform: translate(-5px, 0px);
    }
  }

  .am-weather-cloud-1 {
    -webkit-animation-name: am-weather-cloud-1;
    -moz-animation-name: am-weather-cloud-1;
    animation-name: am-weather-cloud-1;
    -webkit-animation-duration: 7s;
    -moz-animation-duration: 7s;
    animation-duration: 7s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  @keyframes am-weather-cloud-2 {
    0% {
      -webkit-transform: translate(0px, 0px);
      -moz-transform: translate(0px, 0px);
      -ms-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }

    50% {
      -webkit-transform: translate(2px, 0px);
      -moz-transform: translate(2px, 0px);
      -ms-transform: translate(2px, 0px);
      transform: translate(2px, 0px);
    }

    100% {
      -webkit-transform: translate(0px, 0px);
      -moz-transform: translate(0px, 0px);
      -ms-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }
  }

  .am-weather-cloud-2 {
    -webkit-animation-name: am-weather-cloud-2;
    -moz-animation-name: am-weather-cloud-2;
    animation-name: am-weather-cloud-2;
    -webkit-animation-duration: 3s;
    -moz-animation-duration: 3s;
    animation-duration: 3s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  /**
  * SUN
  */
  @keyframes am-weather-sun {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .am-weather-sun {
    -webkit-animation-name: am-weather-sun;
    -moz-animation-name: am-weather-sun;
    -ms-animation-name: am-weather-sun;
    animation-name: am-weather-sun;
    -webkit-animation-duration: 9s;
    -moz-animation-duration: 9s;
    -ms-animation-duration: 9s;
    animation-duration: 9s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -ms-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  @keyframes am-weather-sun-shiny {
    0% {
      stroke-dasharray: 3px 10px;
      stroke-dashoffset: 0px;
    }

    50% {
      stroke-dasharray: 0.1px 10px;
      stroke-dashoffset: -1px;
    }

    100% {
      stroke-dasharray: 3px 10px;
      stroke-dashoffset: 0px;
    }
  }

  .am-weather-sun-shiny line {
    -webkit-animation-name: am-weather-sun-shiny;
    -moz-animation-name: am-weather-sun-shiny;
    -ms-animation-name: am-weather-sun-shiny;
    animation-name: am-weather-sun-shiny;
    -webkit-animation-duration: 2s;
    -moz-animation-duration: 2s;
    -ms-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -ms-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  /**
  *  MOON
  */
  @keyframes am-weather-moon {
    0% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }

    50% {
      -webkit-transform: rotate(15deg);
      -moz-transform: rotate(15deg);
      -ms-transform: rotate(15deg);
      transform: rotate(15deg);
    }

    100% {
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

  .am-weather-moon {
    -webkit-animation-name: am-weather-moon;
    -moz-animation-name: am-weather-moon;
    -ms-animation-name: am-weather-moon;
    animation-name: am-weather-moon;
    -webkit-animation-duration: 6s;
    -moz-animation-duration: 6s;
    -ms-animation-duration: 6s;
    animation-duration: 6s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -ms-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
    -moz-transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
    -ms-transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
    transform-origin: 12.5px 15.15px 0; /* TODO FF CENTER ISSUE */
  }

  @keyframes am-weather-moon-star-1 {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .am-weather-moon-star-1 {
    -webkit-animation-name: am-weather-moon-star-1;
    -moz-animation-name: am-weather-moon-star-1;
    -ms-animation-name: am-weather-moon-star-1;
    animation-name: am-weather-moon-star-1;
    -webkit-animation-delay: 3s;
    -moz-animation-delay: 3s;
    -ms-animation-delay: 3s;
    animation-delay: 3s;
    -webkit-animation-duration: 5s;
    -moz-animation-duration: 5s;
    -ms-animation-duration: 5s;
    animation-duration: 5s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -ms-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: 1;
    -moz-animation-iteration-count: 1;
    -ms-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }

  @keyframes am-weather-moon-star-2 {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .am-weather-moon-star-2 {
    -webkit-animation-name: am-weather-moon-star-2;
    -moz-animation-name: am-weather-moon-star-2;
    -ms-animation-name: am-weather-moon-star-2;
    animation-name: am-weather-moon-star-2;
    -webkit-animation-delay: 5s;
    -moz-animation-delay: 5s;
    -ms-animation-delay: 5s;
    animation-delay: 5s;
    -webkit-animation-duration: 4s;
    -moz-animation-duration: 4s;
    -ms-animation-duration: 4s;
    animation-duration: 4s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -ms-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: 1;
    -moz-animation-iteration-count: 1;
    -ms-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }

  /**
  * RAIN
  */
  @keyframes am-weather-rain {
    0% {
      stroke-dashoffset: 0;
    }

    100% {
      stroke-dashoffset: -100;
    }
  }

  .am-weather-rain-1 {
    -webkit-animation-name: am-weather-rain;
    -moz-animation-name: am-weather-rain;
    -ms-animation-name: am-weather-rain;
    animation-name: am-weather-rain;
    -webkit-animation-duration: 8s;
    -moz-animation-duration: 8s;
    -ms-animation-duration: 8s;
    animation-duration: 8s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -ms-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .am-weather-rain-2 {
    -webkit-animation-name: am-weather-rain;
    -moz-animation-name: am-weather-rain;
    -ms-animation-name: am-weather-rain;
    animation-name: am-weather-rain;
    -webkit-animation-delay: 0.25s;
    -moz-animation-delay: 0.25s;
    -ms-animation-delay: 0.25s;
    animation-delay: 0.25s;
    -webkit-animation-duration: 8s;
    -moz-animation-duration: 8s;
    -ms-animation-duration: 8s;
    animation-duration: 8s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -ms-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  /**
  * SNOW
  */
  @keyframes am-weather-snow {
    0% {
      -webkit-transform: translateX(0) translateY(0);
      -moz-transform: translateX(0) translateY(0);
      -ms-transform: translateX(0) translateY(0);
      transform: translateX(0) translateY(0);
    }

    33.33% {
      -webkit-transform: translateX(-1.2px) translateY(2px);
      -moz-transform: translateX(-1.2px) translateY(2px);
      -ms-transform: translateX(-1.2px) translateY(2px);
      transform: translateX(-1.2px) translateY(2px);
    }

    66.66% {
      -webkit-transform: translateX(1.4px) translateY(4px);
      -moz-transform: translateX(1.4px) translateY(4px);
      -ms-transform: translateX(1.4px) translateY(4px);
      transform: translateX(1.4px) translateY(4px);
      opacity: 1;
    }

    100% {
      -webkit-transform: translateX(-1.6px) translateY(6px);
      -moz-transform: translateX(-1.6px) translateY(6px);
      -ms-transform: translateX(-1.6px) translateY(6px);
      transform: translateX(-1.6px) translateY(6px);
      opacity: 0;
    }
  }

  @keyframes am-weather-snow-reverse {
    0% {
      -webkit-transform: translateX(0) translateY(0);
      -moz-transform: translateX(0) translateY(0);
      -ms-transform: translateX(0) translateY(0);
      transform: translateX(0) translateY(0);
    }

    33.33% {
      -webkit-transform: translateX(1.2px) translateY(2px);
      -moz-transform: translateX(1.2px) translateY(2px);
      -ms-transform: translateX(1.2px) translateY(2px);
      transform: translateX(1.2px) translateY(2px);
    }

    66.66% {
      -webkit-transform: translateX(-1.4px) translateY(4px);
      -moz-transform: translateX(-1.4px) translateY(4px);
      -ms-transform: translateX(-1.4px) translateY(4px);
      transform: translateX(-1.4px) translateY(4px);
      opacity: 1;
    }

    100% {
      -webkit-transform: translateX(1.6px) translateY(6px);
      -moz-transform: translateX(1.6px) translateY(6px);
      -ms-transform: translateX(1.6px) translateY(6px);
      transform: translateX(1.6px) translateY(6px);
      opacity: 0;
    }
  }

  .am-weather-snow-1 {
    -webkit-animation-name: am-weather-snow;
    -moz-animation-name: am-weather-snow;
    -ms-animation-name: am-weather-snow;
    animation-name: am-weather-snow;
    -webkit-animation-duration: 2s;
    -moz-animation-duration: 2s;
    -ms-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -ms-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .am-weather-snow-2 {
    -webkit-animation-name: am-weather-snow;
    -moz-animation-name: am-weather-snow;
    -ms-animation-name: am-weather-snow;
    animation-name: am-weather-snow;
    -webkit-animation-delay: 1.2s;
    -moz-animation-delay: 1.2s;
    -ms-animation-delay: 1.2s;
    animation-delay: 1.2s;
    -webkit-animation-duration: 2s;
    -moz-animation-duration: 2s;
    -ms-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -ms-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  .am-weather-snow-3 {
    -webkit-animation-name: am-weather-snow-reverse;
    -moz-animation-name: am-weather-snow-reverse;
    -ms-animation-name: am-weather-snow-reverse;
    animation-name: am-weather-snow-reverse;
    -webkit-animation-duration: 2s;
    -moz-animation-duration: 2s;
    -ms-animation-duration: 2s;
    animation-duration: 2s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    -ms-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -ms-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  /**
  * STROKE
  */
  @keyframes am-weather-stroke {
    0% {
      -webkit-transform: translate(0px, 0px);
      -moz-transform: translate(0px, 0px);
      -ms-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }

    2% {
      -webkit-transform: translate(0.3px, 0px);
      -moz-transform: translate(0.3px, 0px);
      -ms-transform: translate(0.3px, 0px);
      transform: translate(0.3px, 0px);
    }

    4% {
      -webkit-transform: translate(0px, 0px);
      -moz-transform: translate(0px, 0px);
      -ms-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }

    6% {
      -webkit-transform: translate(0.5px, 0.4px);
      -moz-transform: translate(0.5px, 0.4px);
      -ms-transform: translate(0.5px, 0.4px);
      transform: translate(0.5px, 0.4px);
    }

    8% {
      -webkit-transform: translate(0px, 0px);
      -moz-transform: translate(0px, 0px);
      -ms-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }

    10% {
      -webkit-transform: translate(0.3px, 0px);
      -moz-transform: translate(0.3px, 0px);
      -ms-transform: translate(0.3px, 0px);
      transform: translate(0.3px, 0px);
    }

    12% {
      -webkit-transform: translate(0px, 0px);
      -moz-transform: translate(0px, 0px);
      -ms-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }

    14% {
      -webkit-transform: translate(0.3px, 0px);
      -moz-transform: translate(0.3px, 0px);
      -ms-transform: translate(0.3px, 0px);
      transform: translate(0.3px, 0px);
    }

    16% {
      -webkit-transform: translate(0px, 0px);
      -moz-transform: translate(0px, 0px);
      -ms-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }

    18% {
      -webkit-transform: translate(0.3px, 0px);
      -moz-transform: translate(0.3px, 0px);
      -ms-transform: translate(0.3px, 0px);
      transform: translate(0.3px, 0px);
    }

    20% {
      -webkit-transform: translate(0px, 0px);
      -moz-transform: translate(0px, 0px);
      -ms-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }

    22% {
      -webkit-transform: translate(1px, 0px);
      -moz-transform: translate(1px, 0px);
      -ms-transform: translate(1px, 0px);
      transform: translate(1px, 0px);
    }

    24% {
      -webkit-transform: translate(0px, 0px);
      -moz-transform: translate(0px, 0px);
      -ms-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }

    26% {
      -webkit-transform: translate(-1px, 0px);
      -moz-transform: translate(-1px, 0px);
      -ms-transform: translate(-1px, 0px);
      transform: translate(-1px, 0px);
    }

    28% {
      -webkit-transform: translate(0px, 0px);
      -moz-transform: translate(0px, 0px);
      -ms-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }

    40% {
      fill: orange;
      -webkit-transform: translate(0px, 0px);
      -moz-transform: translate(0px, 0px);
      -ms-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }

    65% {
      fill: white;
      -webkit-transform: translate(-1px, 5px);
      -moz-transform: translate(-1px, 5px);
      -ms-transform: translate(-1px, 5px);
      transform: translate(-1px, 5px);
    }
    61% {
      fill: orange;
    }

    100% {
      -webkit-transform: translate(0px, 0px);
      -moz-transform: translate(0px, 0px);
      -ms-transform: translate(0px, 0px);
      transform: translate(0px, 0px);
    }
  }

  .am-weather-stroke {
    -webkit-animation-name: am-weather-stroke;
    -moz-animation-name: am-weather-stroke;
    animation-name: am-weather-stroke;
    -webkit-animation-duration: 1.11s;
    -moz-animation-duration: 1.11s;
    animation-duration: 1.11s;
    -webkit-animation-timing-function: linear;
    -moz-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
  }

  /**
  * EASING
  */
  .am-weather-easing-ease-in-out {
    -webkit-animation-timing-function: ease-in-out;
    -moz-animation-timing-function: ease-in-out;
    -ms-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
  }
`,oe=function(t,e,n,a){var i,r=arguments.length,o=r<3?e:null===a?a=Object.getOwnPropertyDescriptor(e,n):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,n,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(o=(r<3?i(o):r>3?i(e,n,o):i(e,n))||o);return r>3&&o&&Object.defineProperty(e,n,o),o};let se=class extends Mt{static getStubConfig(t,e,n){var a;return{entity:null!==(a=e.find(ee))&&void 0!==a?a:n.find(ee)}}static async getConfigElement(){return document.createElement("weather-card-editor")}setConfig(t){if(!t.entity)throw new Error("Please define a weather entity");this.config=t}shouldUpdate(t){return function(t,e,n){if(e.has("config")||n)return!0;if(t.config.entity){var a=e.get("hass");return!a||a.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}render(){const t=this.config.entity,e=Nt(this.hass,t);return e?lt`<ha-card class="container" @click=${this.handleClick}>
      ${this.renderCurrent(e)} ${this.renderForecasts(e)}
    </ha-card>`:lt`
        <ha-card>
          <div class="not-found">Entity not available: ${t}</div>
        </ha-card>
      `}renderCurrent(t){const{current:e,name:n}=this.config,{attributes:{humidity:a,temperature:i}}=t,r=Ot(Nt(this.hass,Pt)),o=Ot(t),s=this.getUnit("temperature");return!1===e?lt``:lt`<div class="grid grid-align-center current">
      <div class="flex-no-shrink icon">${te(o,r)}</div>
      <div class="flex flex-column flex-justify-center">
        <div class="title">${l=o,l===Kt.PartlyCloudy?"Partly Cloudy":l.split("-").map((t=>t.replace(/^\w/,(t=>t.toUpperCase())))).join(" ")}</div>
        <div class="subtitle secondary-text">${null!=n?n:"Home"}</div>
      </div>
      <div class="flex flex-column right-content">
        <div class="flex">
          <span class="temperature">${Math.round(i)}</span>
          <span class="unit">${s}</span>
        </div>
        <div class="flex flex-align-center secondary-text">
          <ha-icon icon="mdi:water-percent"></ha-icon>
          ${a}<span> % </span>
        </div>
      </div>
    </div>`;var l}renderForecasts({attributes:t}){const{forecast:e=!1,number_of_forecasts:n=5,hourly_forecast:a}=this.config;if(!e)return lt``;const i=this.hass,{locale:r}=i,{language:o="en"}=null!=r?r:{},{attributes:{next_dawn:s,next_dusk:l}}=Nt(i,Pt),m=a?{hour:"2-digit"}:{weekday:"short"},c=t.forecast.slice(0,n).map((({condition:t,datetime:e,temperature:n,templow:i})=>{const r=new Date(e);return lt`<div class="flex flex-column forecast">
          <div>
            ${r.toLocaleString(o,m).replace(/^0/,"").replace(" ","")}
          </div>
          <div class="flex-no-shrink icon-small">
            ${te(t,a?r>=new Date(l)&&r<new Date(s)?Ut.BelowHorizon:Ut.AboveHorizon:null)}
          </div>
          <span class="temp-high">${Math.round(n)}°</span>
          ${null!=i?lt`<span class="temp-low secondary-text">${Math.round(i)}°</span>`:lt``}
        </div>`}));return lt` <div class="flex forecasts">${c}</div> `}handleClick(){M(this,"hass-more-info",{entityId:this.config.entity})}getUnit(t){const e=this.hass,n="km"===Ht(e,"length");switch(t){case"air_pressure":return n?"hPa":"inHg";case"precipitation":return n?"mm":"in";case"precipitation_probability":return"%";default:return Ht(e,t)}}};se.styles=re,oe([Yt()],se.prototype,"config",void 0),oe([Tt()],se.prototype,"hass",void 0),se=oe([Ct(qt)],se),function(t){var e;window.customCards=null!==(e=window.customCards)&&void 0!==e?e:[];const n=window.customCards.findIndex((e=>e.type===t.type));-1===n?window.customCards.push(t):window.customCards[n]=t}({type:qt,name:"custom-weather-card",description:"A custom weather card with animated SVG icons",preview:!0})})();