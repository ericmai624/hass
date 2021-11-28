(()=>{var t=/d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,n="[1-9]\\d?",e="\\d\\d",a="[^\\s]+",i=/\[([^]*?)\]/gm;function r(t,n){for(var e=[],a=0,i=t.length;a<i;a++)e.push(t[a].substr(0,n));return e}var o=function(t){return function(n,e){var a=e[t].map((function(t){return t.toLowerCase()})).indexOf(n.toLowerCase());return a>-1?a:null}};function s(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];for(var a=0,i=n;a<i.length;a++){var r=i[a];for(var o in r)t[o]=r[o]}return t}var l=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],m=["January","February","March","April","May","June","July","August","September","October","November","December"],c=r(m,3),h={dayNamesShort:r(l,3),dayNames:l,monthNamesShort:c,monthNames:m,amPm:["am","pm"],DoFn:function(t){return t+["th","st","nd","rd"][t%10>3?0:(t-t%10!=10?1:0)*t%10]}},u=s({},h),d=function(t){return t.replace(/[|\\{()[^$+*?.-]/g,"\\$&")},f=function(t,n){for(void 0===n&&(n=2),t=String(t);t.length<n;)t="0"+t;return t},p={D:function(t){return String(t.getDate())},DD:function(t){return f(t.getDate())},Do:function(t,n){return n.DoFn(t.getDate())},d:function(t){return String(t.getDay())},dd:function(t){return f(t.getDay())},ddd:function(t,n){return n.dayNamesShort[t.getDay()]},dddd:function(t,n){return n.dayNames[t.getDay()]},M:function(t){return String(t.getMonth()+1)},MM:function(t){return f(t.getMonth()+1)},MMM:function(t,n){return n.monthNamesShort[t.getMonth()]},MMMM:function(t,n){return n.monthNames[t.getMonth()]},YY:function(t){return f(String(t.getFullYear()),4).substr(2)},YYYY:function(t){return f(t.getFullYear(),4)},h:function(t){return String(t.getHours()%12||12)},hh:function(t){return f(t.getHours()%12||12)},H:function(t){return String(t.getHours())},HH:function(t){return f(t.getHours())},m:function(t){return String(t.getMinutes())},mm:function(t){return f(t.getMinutes())},s:function(t){return String(t.getSeconds())},ss:function(t){return f(t.getSeconds())},S:function(t){return String(Math.round(t.getMilliseconds()/100))},SS:function(t){return f(Math.round(t.getMilliseconds()/10),2)},SSS:function(t){return f(t.getMilliseconds(),3)},a:function(t,n){return t.getHours()<12?n.amPm[0]:n.amPm[1]},A:function(t,n){return t.getHours()<12?n.amPm[0].toUpperCase():n.amPm[1].toUpperCase()},ZZ:function(t){var n=t.getTimezoneOffset();return(n>0?"-":"+")+f(100*Math.floor(Math.abs(n)/60)+Math.abs(n)%60,4)},Z:function(t){var n=t.getTimezoneOffset();return(n>0?"-":"+")+f(Math.floor(Math.abs(n)/60),2)+":"+f(Math.abs(n)%60,2)}},g=function(t){return+t-1},w=[null,n],x=[null,a],y=["isPm",a,function(t,n){var e=t.toLowerCase();return e===n.amPm[0]?0:e===n.amPm[1]?1:null}],k=["timezoneOffset","[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?",function(t){var n=(t+"").match(/([+-]|\d\d)/gi);if(n){var e=60*+n[1]+parseInt(n[2],10);return"+"===n[0]?e:-e}return 0}],v={D:["day",n],DD:["day",e],Do:["day","[1-9]\\d?[^\\s]+",function(t){return parseInt(t,10)}],M:["month",n,g],MM:["month",e,g],YY:["year",e,function(t){var n=+(""+(new Date).getFullYear()).substr(0,2);return+(""+(+t>68?n-1:n)+t)}],h:["hour",n,void 0,"isPm"],hh:["hour",e,void 0,"isPm"],H:["hour",n],HH:["hour",e],m:["minute",n],mm:["minute",e],s:["second",n],ss:["second",e],YYYY:["year","\\d{4}"],S:["millisecond","\\d",function(t){return 100*+t}],SS:["millisecond",e,function(t){return 10*+t}],SSS:["millisecond","\\d{3}"],d:w,dd:w,ddd:x,dddd:x,MMM:["month",a,o("monthNamesShort")],MMMM:["month",a,o("monthNames")],a:y,A:y,ZZ:k,Z:k},b={default:"ddd MMM DD YYYY HH:mm:ss",shortDate:"M/D/YY",mediumDate:"MMM D, YYYY",longDate:"MMMM D, YYYY",fullDate:"dddd, MMMM D, YYYY",isoDate:"YYYY-MM-DD",isoDateTime:"YYYY-MM-DDTHH:mm:ssZ",shortTime:"HH:mm",mediumTime:"HH:mm:ss",longTime:"HH:mm:ss.SSS"};var $={format:function(n,e,a){if(void 0===e&&(e=b.default),void 0===a&&(a={}),"number"==typeof n&&(n=new Date(n)),"[object Date]"!==Object.prototype.toString.call(n)||isNaN(n.getTime()))throw new Error("Invalid Date pass to format");var r=[];e=(e=b[e]||e).replace(i,(function(t,n){return r.push(n),"@@@"}));var o=s(s({},u),a);return(e=e.replace(t,(function(t){return p[t](n,o)}))).replace(/@@@/g,(function(){return r.shift()}))},parse:function(n,e,a){if(void 0===a&&(a={}),"string"!=typeof e)throw new Error("Invalid format in fecha parse");if(e=b[e]||e,n.length>1e3)return null;var r={year:(new Date).getFullYear(),month:0,day:1,hour:0,minute:0,second:0,millisecond:0,isPm:null,timezoneOffset:null},o=[],l=[],m=e.replace(i,(function(t,n){return l.push(d(n)),"@@@"})),c={},h={};m=d(m).replace(t,(function(t){var n=v[t],e=n[0],a=n[1],i=n[3];if(c[e])throw new Error("Invalid format. "+e+" specified twice in format");return c[e]=!0,i&&(h[i]=!0),o.push(n),"("+a+")"})),Object.keys(h).forEach((function(t){if(!c[t])throw new Error("Invalid format. "+t+" is required in specified format")})),m=m.replace(/@@@/g,(function(){return l.shift()}));var f=n.match(new RegExp(m,"i"));if(!f)return null;for(var p=s(s({},u),a),g=1;g<f.length;g++){var w=o[g-1],x=w[0],y=w[2],k=y?y(f[g],p):+f[g];if(null==k)return null;r[x]=k}1===r.isPm&&null!=r.hour&&12!=+r.hour?r.hour=+r.hour+12:0===r.isPm&&12==+r.hour&&(r.hour=0);for(var $=new Date(r.year,r.month,r.day,r.hour,r.minute,r.second,r.millisecond),_=[["month","getMonth"],["day","getDate"],["hour","getHours"],["minute","getMinutes"],["second","getSeconds"]],A=(g=0,_.length);g<A;g++)if(c[_[g][0]]&&r[_[g][0]]!==$[_[g][1]]())return null;return null==r.timezoneOffset?$:new Date(Date.UTC(r.year,r.month,r.day,r.hour,r.minute-r.timezoneOffset,r.second,r.millisecond))},defaultI18n:h,setGlobalDateI18n:function(t){return u=s(u,t)},setGlobalDateMasks:function(t){return s(b,t)}};(function(){try{(new Date).toLocaleDateString("i")}catch(t){return"RangeError"===t.name}})(),function(){try{(new Date).toLocaleString("i")}catch(t){return"RangeError"===t.name}}(),function(){try{(new Date).toLocaleTimeString("i")}catch(t){return"RangeError"===t.name}}();var _,A,E;function z(t){return t.substr(0,t.indexOf("."))}(E=_||(_={})).language="language",E.system="system",E.comma_decimal="comma_decimal",E.decimal_comma="decimal_comma",E.space_comma="space_comma",E.none="none",function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(A||(A={}));new Set(["fan","input_boolean","light","switch","group","automation"]);var S=function(t,n,e,a){a=a||{},e=null==e?{}:e;var i=new Event(n,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return i.detail=e,t.dispatchEvent(i),i};new Set(["call-service","divider","section","weblink","cast","select"]);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const C=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,M=Symbol(),Y=new Map;class D{constructor(t,n){if(this._$cssResult$=!0,n!==M)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=Y.get(this.cssText);return C&&void 0===t&&(Y.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const H=(t,...n)=>{const e=1===t.length?t[0]:n.reduce(((n,e,a)=>n+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+t[a+1]),t[0]);return new D(e,M)},P=C?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let n="";for(const e of t.cssRules)n+=e.cssText;return(t=>new D("string"==typeof t?t:t+"",M))(n)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var O;const T=window.trustedTypes,U=T?T.emptyScript:"",N=window.reactiveElementPolyfillSupport,R={toAttribute(t,n){switch(n){case Boolean:t=t?U:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,n){let e=t;switch(n){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},j=(t,n)=>n!==t&&(n==n||t==t),X={attribute:!0,type:String,converter:R,reflect:!1,hasChanged:j};class F extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var n;null!==(n=this.l)&&void 0!==n||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((n,e)=>{const a=this._$Eh(e,n);void 0!==a&&(this._$Eu.set(a,e),t.push(a))})),t}static createProperty(t,n=X){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(t,n),!n.noAccessor&&!this.prototype.hasOwnProperty(t)){const e="symbol"==typeof t?Symbol():"__"+t,a=this.getPropertyDescriptor(t,e,n);void 0!==a&&Object.defineProperty(this.prototype,t,a)}}static getPropertyDescriptor(t,n,e){return{get(){return this[n]},set(a){const i=this[t];this[n]=a,this.requestUpdate(t,i,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||X}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const e of n)this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)n.unshift(P(t))}else void 0!==t&&n.push(P(t));return n}static _$Eh(t,n){const e=n.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var n,e;(null!==(n=this._$Eg)&&void 0!==n?n:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(e=t.hostConnected)||void 0===e||e.call(t))}removeController(t){var n;null===(n=this._$Eg)||void 0===n||n.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,n)=>{this.hasOwnProperty(n)&&(this._$Et.set(n,this[n]),delete this[n])}))}createRenderRoot(){var t;const n=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{C?t.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((n=>{const e=document.createElement("style"),a=window.litNonce;void 0!==a&&e.setAttribute("nonce",a),e.textContent=n.cssText,t.appendChild(e)}))})(n,this.constructor.elementStyles),n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var n;return null===(n=t.hostConnected)||void 0===n?void 0:n.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var n;return null===(n=t.hostDisconnected)||void 0===n?void 0:n.call(t)}))}attributeChangedCallback(t,n,e){this._$AK(t,e)}_$ES(t,n,e=X){var a,i;const r=this.constructor._$Eh(t,e);if(void 0!==r&&!0===e.reflect){const o=(null!==(i=null===(a=e.converter)||void 0===a?void 0:a.toAttribute)&&void 0!==i?i:R.toAttribute)(n,e.type);this._$Ei=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Ei=null}}_$AK(t,n){var e,a,i;const r=this.constructor,o=r._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=r.getPropertyOptions(o),s=t.converter,l=null!==(i=null!==(a=null===(e=s)||void 0===e?void 0:e.fromAttribute)&&void 0!==a?a:"function"==typeof s?s:null)&&void 0!==i?i:R.fromAttribute;this._$Ei=o,this[o]=l(n,t.type),this._$Ei=null}}requestUpdate(t,n,e){let a=!0;void 0!==t&&(((e=e||this.constructor.getPropertyOptions(t)).hasChanged||j)(this[t],n)?(this._$AL.has(t)||this._$AL.set(t,n),!0===e.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,e))):a=!1),!this.isUpdatePending&&a&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,n)=>this[n]=t)),this._$Et=void 0);let n=!1;const e=this._$AL;try{n=this.shouldUpdate(e),n?(this.willUpdate(e),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var n;return null===(n=t.hostUpdate)||void 0===n?void 0:n.call(t)})),this.update(e)):this._$EU()}catch(t){throw n=!1,this._$EU(),t}n&&this._$AE(e)}willUpdate(t){}_$AE(t){var n;null===(n=this._$Eg)||void 0===n||n.forEach((t=>{var n;return null===(n=t.hostUpdated)||void 0===n?void 0:n.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,n)=>this._$ES(n,this[n],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var I;F.finalized=!0,F.elementProperties=new Map,F.elementStyles=[],F.shadowRootOptions={mode:"open"},null==N||N({ReactiveElement:F}),(null!==(O=globalThis.reactiveElementVersions)&&void 0!==O?O:globalThis.reactiveElementVersions=[]).push("1.0.2");const L=globalThis.trustedTypes,B=L?L.createPolicy("lit-html",{createHTML:t=>t}):void 0,Z=`lit$${(Math.random()+"").slice(9)}$`,W="?"+Z,V=`<${W}>`,J=document,q=(t="")=>J.createComment(t),G=t=>null===t||"object"!=typeof t&&"function"!=typeof t,K=Array.isArray,Q=t=>{var n;return K(t)||"function"==typeof(null===(n=t)||void 0===n?void 0:n[Symbol.iterator])},tt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,et=/>/g,at=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,it=/'/g,rt=/"/g,ot=/^(?:script|style|textarea)$/i,st=t=>(n,...e)=>({_$litType$:t,strings:n,values:e}),lt=st(1),mt=st(2),ct=Symbol.for("lit-noChange"),ht=Symbol.for("lit-nothing"),ut=new WeakMap,dt=J.createTreeWalker(J,129,null,!1),ft=(t,n)=>{const e=t.length-1,a=[];let i,r=2===n?"<svg>":"",o=tt;for(let n=0;n<e;n++){const e=t[n];let s,l,m=-1,c=0;for(;c<e.length&&(o.lastIndex=c,l=o.exec(e),null!==l);)c=o.lastIndex,o===tt?"!--"===l[1]?o=nt:void 0!==l[1]?o=et:void 0!==l[2]?(ot.test(l[2])&&(i=RegExp("</"+l[2],"g")),o=at):void 0!==l[3]&&(o=at):o===at?">"===l[0]?(o=null!=i?i:tt,m=-1):void 0===l[1]?m=-2:(m=o.lastIndex-l[2].length,s=l[1],o=void 0===l[3]?at:'"'===l[3]?rt:it):o===rt||o===it?o=at:o===nt||o===et?o=tt:(o=at,i=void 0);const h=o===at&&t[n+1].startsWith("/>")?" ":"";r+=o===tt?e+V:m>=0?(a.push(s),e.slice(0,m)+"$lit$"+e.slice(m)+Z+h):e+Z+(-2===m?(a.push(void 0),n):h)}const s=r+(t[e]||"<?>")+(2===n?"</svg>":"");return[void 0!==B?B.createHTML(s):s,a]};class pt{constructor({strings:t,_$litType$:n},e){let a;this.parts=[];let i=0,r=0;const o=t.length-1,s=this.parts,[l,m]=ft(t,n);if(this.el=pt.createElement(l,e),dt.currentNode=this.el.content,2===n){const t=this.el.content,n=t.firstChild;n.remove(),t.append(...n.childNodes)}for(;null!==(a=dt.nextNode())&&s.length<o;){if(1===a.nodeType){if(a.hasAttributes()){const t=[];for(const n of a.getAttributeNames())if(n.endsWith("$lit$")||n.startsWith(Z)){const e=m[r++];if(t.push(n),void 0!==e){const t=a.getAttribute(e.toLowerCase()+"$lit$").split(Z),n=/([.?@])?(.*)/.exec(e);s.push({type:1,index:i,name:n[2],strings:t,ctor:"."===n[1]?kt:"?"===n[1]?bt:"@"===n[1]?$t:yt})}else s.push({type:6,index:i})}for(const n of t)a.removeAttribute(n)}if(ot.test(a.tagName)){const t=a.textContent.split(Z),n=t.length-1;if(n>0){a.textContent=L?L.emptyScript:"";for(let e=0;e<n;e++)a.append(t[e],q()),dt.nextNode(),s.push({type:2,index:++i});a.append(t[n],q())}}}else if(8===a.nodeType)if(a.data===W)s.push({type:2,index:i});else{let t=-1;for(;-1!==(t=a.data.indexOf(Z,t+1));)s.push({type:7,index:i}),t+=Z.length-1}i++}}static createElement(t,n){const e=J.createElement("template");return e.innerHTML=t,e}}function gt(t,n,e=t,a){var i,r,o,s;if(n===ct)return n;let l=void 0!==a?null===(i=e._$Cl)||void 0===i?void 0:i[a]:e._$Cu;const m=G(n)?void 0:n._$litDirective$;return(null==l?void 0:l.constructor)!==m&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===m?l=void 0:(l=new m(t),l._$AT(t,e,a)),void 0!==a?(null!==(o=(s=e)._$Cl)&&void 0!==o?o:s._$Cl=[])[a]=l:e._$Cu=l),void 0!==l&&(n=gt(t,l._$AS(t,n.values),l,a)),n}class wt{constructor(t,n){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var n;const{el:{content:e},parts:a}=this._$AD,i=(null!==(n=null==t?void 0:t.creationScope)&&void 0!==n?n:J).importNode(e,!0);dt.currentNode=i;let r=dt.nextNode(),o=0,s=0,l=a[0];for(;void 0!==l;){if(o===l.index){let n;2===l.type?n=new xt(r,r.nextSibling,this,t):1===l.type?n=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(n=new _t(r,this,t)),this.v.push(n),l=a[++s]}o!==(null==l?void 0:l.index)&&(r=dt.nextNode(),o++)}return i}m(t){let n=0;for(const e of this.v)void 0!==e&&(void 0!==e.strings?(e._$AI(t,e,n),n+=e.strings.length-2):e._$AI(t[n])),n++}}class xt{constructor(t,n,e,a){var i;this.type=2,this._$AH=ht,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=e,this.options=a,this._$Cg=null===(i=null==a?void 0:a.isConnected)||void 0===i||i}get _$AU(){var t,n;return null!==(n=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==n?n:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return void 0!==n&&11===t.nodeType&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=gt(this,t,n),G(t)?t===ht||null==t||""===t?(this._$AH!==ht&&this._$AR(),this._$AH=ht):t!==this._$AH&&t!==ct&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):Q(t)?this.M(t):this.$(t)}A(t,n=this._$AB){return this._$AA.parentNode.insertBefore(t,n)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==ht&&G(this._$AH)?this._$AA.nextSibling.data=t:this.S(J.createTextNode(t)),this._$AH=t}T(t){var n;const{values:e,_$litType$:a}=t,i="number"==typeof a?this._$AC(t):(void 0===a.el&&(a.el=pt.createElement(a.h,this.options)),a);if((null===(n=this._$AH)||void 0===n?void 0:n._$AD)===i)this._$AH.m(e);else{const t=new wt(i,this),n=t.p(this.options);t.m(e),this.S(n),this._$AH=t}}_$AC(t){let n=ut.get(t.strings);return void 0===n&&ut.set(t.strings,n=new pt(t)),n}M(t){K(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let e,a=0;for(const i of t)a===n.length?n.push(e=new xt(this.A(q()),this.A(q()),this,this.options)):e=n[a],e._$AI(i),a++;a<n.length&&(this._$AR(e&&e._$AB.nextSibling,a),n.length=a)}_$AR(t=this._$AA.nextSibling,n){var e;for(null===(e=this._$AP)||void 0===e||e.call(this,!1,!0,n);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var n;void 0===this._$AM&&(this._$Cg=t,null===(n=this._$AP)||void 0===n||n.call(this,t))}}class yt{constructor(t,n,e,a,i){this.type=1,this._$AH=ht,this._$AN=void 0,this.element=t,this.name=n,this._$AM=a,this.options=i,e.length>2||""!==e[0]||""!==e[1]?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=ht}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,n=this,e,a){const i=this.strings;let r=!1;if(void 0===i)t=gt(this,t,n,0),r=!G(t)||t!==this._$AH&&t!==ct,r&&(this._$AH=t);else{const a=t;let o,s;for(t=i[0],o=0;o<i.length-1;o++)s=gt(this,a[e+o],n,o),s===ct&&(s=this._$AH[o]),r||(r=!G(s)||s!==this._$AH[o]),s===ht?t=ht:t!==ht&&(t+=(null!=s?s:"")+i[o+1]),this._$AH[o]=s}r&&!a&&this.k(t)}k(t){t===ht?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class kt extends yt{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===ht?void 0:t}}const vt=L?L.emptyScript:"";class bt extends yt{constructor(){super(...arguments),this.type=4}k(t){t&&t!==ht?this.element.setAttribute(this.name,vt):this.element.removeAttribute(this.name)}}class $t extends yt{constructor(t,n,e,a,i){super(t,n,e,a,i),this.type=5}_$AI(t,n=this){var e;if((t=null!==(e=gt(this,t,n,0))&&void 0!==e?e:ht)===ct)return;const a=this._$AH,i=t===ht&&a!==ht||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,r=t!==ht&&(a===ht||i);i&&this.element.removeEventListener(this.name,this,a),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n,e;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(n=this.options)||void 0===n?void 0:n.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}class _t{constructor(t,n,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){gt(this,t)}}const At=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Et,zt;null==At||At(pt,xt),(null!==(I=globalThis.litHtmlVersions)&&void 0!==I?I:globalThis.litHtmlVersions=[]).push("2.0.2");class St extends F{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,n;const e=super.createRenderRoot();return null!==(t=(n=this.renderOptions).renderBefore)&&void 0!==t||(n.renderBefore=e.firstChild),e}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,n,e)=>{var a,i;const r=null!==(a=null==e?void 0:e.renderBefore)&&void 0!==a?a:n;let o=r._$litPart$;if(void 0===o){const t=null!==(i=null==e?void 0:e.renderBefore)&&void 0!==i?i:null;r._$litPart$=o=new xt(n.insertBefore(q(),t),t,void 0,null!=e?e:{})}return o._$AI(t),o})(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return ct}}St.finalized=!0,St._$litElement$=!0,null===(Et=globalThis.litElementHydrateSupport)||void 0===Et||Et.call(globalThis,{LitElement:St});const Ct=globalThis.litElementPolyfillSupport;null==Ct||Ct({LitElement:St});(null!==(zt=globalThis.litElementVersions)&&void 0!==zt?zt:globalThis.litElementVersions=[]).push("3.0.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Mt=t=>n=>"function"==typeof n?((t,n)=>(window.customElements.define(t,n),n))(t,n):((t,n)=>{const{kind:e,elements:a}=n;return{kind:e,elements:a,finisher(n){window.customElements.define(t,n)}}})(t,n)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,Yt=(t,n)=>"method"===n.kind&&n.descriptor&&!("value"in n.descriptor)?{...n,finisher(e){e.createProperty(n.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:n.key,initializer(){"function"==typeof n.initializer&&(this[n.key]=n.initializer.call(this))},finisher(e){e.createProperty(n.key,t)}};function Dt(t){return(n,e)=>void 0!==e?((t,n,e)=>{n.constructor.createProperty(e,t)})(t,n,e):Yt(t,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Ht(t){return Dt({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Pt(t,n){return t.states[n]}function Ot(t){return t.state}function Tt(t,n){return t.config.unit_system[n]}const Ut="sun.sun";var Nt,Rt;(Rt=Nt||(Nt={})).AboveHorizon="above_horizon",Rt.BelowHorizon="below_horizon";var jt=mt`
<svg
    width="100%"
    height="100%"
    viewbox="0 0 42 42">
    <g id="cloudy">
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
`,Xt=mt`
<svg
    width="100%"
    height="100%"
    viewbox="0 0 48 48">
    <g id="cloudy-day-3">
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
`,Ft=mt`
<svg
    width="100%"
    height="100%"
    viewbox="0 0 48 48">
    <g id="cloudy-night-3">
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
`,It=mt`
<svg
  width="100%"
  height="100%"
  viewbox="0 0 32 32"
>
  <g id="day">
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
`,Lt=mt`
<svg
    width="100%"
    height="100%"
    viewbox="0 0 32 32">
    <g id="night">
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
`,Bt=mt`
<svg
    width="100%"
    height="100%"
    viewbox="0 0 44 44">
    <g id="rainy-5">
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
`,Zt=mt`
<svg
    width="100%"
    height="100%"
    viewbox="0 0 44 44">
    <g id="rainy-6">
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
`,Wt=mt`
<svg
    width="100%"
    height="100%"
    viewbox="0 0 44 44">
    <g id="rainy-7">
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
`,Vt=mt`
<svg
    width="100%"
    height="100%"
    viewbox="0 0 42 42">
    <g id="snowy-6">
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
`,Jt=mt`
<svg
    width="100%"
    height="100%"
    viewbox="0 0 42 42">
    <g id="thunder">
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
`;const qt="weather",Gt="weather-card";var Kt,Qt;function tn(t,n){switch(t){case Kt.Clear:case Kt.Sunny:return n===Nt.BelowHorizon?Lt:It;case Kt.ClearNight:return Lt;case Kt.Cloudy:case Kt.Fog:case Kt.Windy:return jt;case Kt.Hail:case Kt.SnowyRainy:return Wt;case Kt.Lightning:case Kt.LightningRainy:return Jt;case Kt.PartlyCloudy:case Kt.WindyVariant:return n===Nt.BelowHorizon?Ft:Xt;case Kt.Pouring:return Zt;case Kt.Rainy:return Bt;case Kt.Snowy:return Vt}}function nn(t){return z(t)===qt}(Qt=Kt||(Kt={})).Clear="clear",Qt.ClearNight="clear-night",Qt.Cloudy="cloudy",Qt.Exceptional="exceptional",Qt.Fog="fog",Qt.Hail="hail",Qt.Lightning="lightning",Qt.LightningRainy="lightning-rainy",Qt.PartlyCloudy="partlycloudy",Qt.Pouring="pouring",Qt.Rainy="rainy",Qt.Snowy="snowy",Qt.SnowyRainy="snowy-rainy",Qt.Sunny="sunny",Qt.Windy="windy",Qt.WindyVariant="windy-variant";var en=H`
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
`,an=function(t,n,e,a){var i,r=arguments.length,o=r<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,n,e,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(o=(r<3?i(o):r>3?i(n,e,o):i(n,e))||o);return r>3&&o&&Object.defineProperty(n,e,o),o};let rn=class extends St{setConfig(t){this.config=Object.assign({},t)}render(){var t;const n=this.hass,{current:e=!0,entity:a="",forecast:i,hourly_forecast:r,name:o="",number_of_forecasts:s=5}=null!==(t=this.config)&&void 0!==t?t:{},l=Object.keys(n.states).filter(nn);return lt`
      <div class="card-config">
        <div>
          <paper-input label="Name" .value="${o}" @value-changed="${this.handleChange("name")}"></paper-input>
          ${customElements.get("ha-entity-picker")?lt`
                <ha-entity-picker
                  .hass="${n}"
                  .value="${a}"
                  .includeDomains=${[qt]}
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
              <ha-switch .checked=${e} @change="${this.handleChange("current")}"></ha-switch
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
    `}handleChange(t){return n=>{var e;const a=this.config;if(null==a||null==this.hass)return;const i=n.target;if(null==i)return;const r=Object.assign({},a),o=null!==(e=i.checked)&&void 0!==e?e:i.value;"string"==typeof o&&""===o?delete r[t]:r[t]=o,S(this,"config-changed",{config:r})}}};rn.styles=en,an([Ht()],rn.prototype,"config",void 0),an([Dt()],rn.prototype,"hass",void 0),rn=an([Mt("weather-card-editor")],rn);var on=H`
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
`,sn=function(t,n,e,a){var i,r=arguments.length,o=r<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,n,e,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(o=(r<3?i(o):r>3?i(n,e,o):i(n,e))||o);return r>3&&o&&Object.defineProperty(n,e,o),o};let ln=class extends St{static getStubConfig(t,n,e){var a;return{entity:null!==(a=n.find(nn))&&void 0!==a?a:e.find(nn)}}static async getConfigElement(){return document.createElement("weather-card-editor")}setConfig(t){if(!t.entity)throw new Error("Please define a weather entity");this.config=t}shouldUpdate(t){return function(t,n,e){if(n.has("config")||e)return!0;if(t.config.entity){var a=n.get("hass");return!a||a.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}render(){const t=this.config.entity,n=Pt(this.hass,t);return n?lt`<ha-card class="container" @click=${this.handleClick}>
      ${this.renderCurrent(n)} ${this.renderForecasts(n)}
    </ha-card>`:lt`
        <ha-card>
          <div class="not-found">Entity not available: ${t}</div>
        </ha-card>
      `}renderCurrent(t){const{current:n,name:e}=this.config,{attributes:{humidity:a,temperature:i}}=t,r=Ot(Pt(this.hass,Ut)),o=Ot(t),s=this.getUnit("temperature");return!1===n?lt``:lt`<div class="grid grid-align-center current">
      <div class="flex-no-shrink icon">${tn(o,r)}</div>
      <div class="flex flex-column flex-justify-center">
        <div class="title">${l=o,l===Kt.PartlyCloudy?"Partly Cloudy":l.split("-").map((t=>t.replace(/^\w/,(t=>t.toUpperCase())))).join(" ")}</div>
        <div class="subtitle secondary-text">${null!=e?e:"Home"}</div>
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
    </div>`;var l}renderForecasts({attributes:t}){const{forecast:n=!1,number_of_forecasts:e=5,hourly_forecast:a}=this.config;if(!n)return lt``;const i=this.hass,{locale:r}=i,{language:o="en"}=null!=r?r:{},{attributes:{next_dawn:s,next_dusk:l}}=Pt(i,Ut),m=a?{hour:"2-digit"}:{weekday:"short"},c=t.forecast.slice(0,e).map((({condition:t,datetime:n,temperature:e,templow:i})=>{const r=new Date(n);return lt`<div class="flex flex-column forecast">
          <div>
            ${r.toLocaleString(o,m).replace(/^0/,"").replace(" ","")}
          </div>
          <div class="flex-no-shrink icon-small">
            ${tn(t,a?r>=new Date(l)&&r<new Date(s)?Nt.BelowHorizon:Nt.AboveHorizon:null)}
          </div>
          <span class="temp-high">${Math.round(e)}°</span>
          ${null!=i?lt`<span class="temp-low secondary-text">${Math.round(i)}°</span>`:lt``}
        </div>`}));return lt` <div class="flex forecasts">${c}</div> `}handleClick(){S(this,"hass-more-info",{entityId:this.config.entity})}getUnit(t){const n=this.hass,e="km"===Tt(n,"length");switch(t){case"air_pressure":return e?"hPa":"inHg";case"precipitation":return e?"mm":"in";case"precipitation_probability":return"%";default:return Tt(n,t)}}};ln.styles=on,sn([Ht()],ln.prototype,"config",void 0),sn([Dt()],ln.prototype,"hass",void 0),ln=sn([Mt(Gt)],ln),function(t){var n;window.customCards=null!==(n=window.customCards)&&void 0!==n?n:[];const e=window.customCards.findIndex((n=>n.type===t.type));-1===e?window.customCards.push(t):window.customCards[e]=t}({type:Gt,name:"custom-weather-card",description:"A custom weather card with animated SVG icons",preview:!0})})();