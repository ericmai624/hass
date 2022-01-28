(()=>{var t,n,e,a,i={};t=i,n="selectUnit",e=()=>o,a=t=>o=t,Object.defineProperty(t,n,{get:e,set:a,enumerable:!0,configurable:!0});var r=function(){return r=Object.assign||function(t){for(var n,e=1,a=arguments.length;e<a;e++)for(var i in n=arguments[e])Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i]);return t},r.apply(this,arguments)};function o(t,n,e){void 0===n&&(n=Date.now()),void 0===e&&(e={});var a=r(r({},m),e||{}),i=(+t-+n)/1e3;if(Math.abs(i)<a.second)return{value:Math.round(i),unit:"second"};var o=i/60;if(Math.abs(o)<a.minute)return{value:Math.round(o),unit:"minute"};var s=i/3600;if(Math.abs(s)<a.hour)return{value:Math.round(s),unit:"hour"};var l=i/86400;if(Math.abs(l)<a.day)return{value:Math.round(l),unit:"day"};var c=new Date(t),u=new Date(n),h=c.getFullYear()-u.getFullYear();if(Math.round(Math.abs(h))>0)return{value:Math.round(h),unit:"year"};var d=12*h+c.getMonth()-u.getMonth();if(Math.round(Math.abs(d))>0)return{value:Math.round(d),unit:"month"};var f=i/604800;return{value:Math.round(f),unit:"week"}}var s,l,m={second:45,minute:45,hour:22,day:5},c=function(t,n){return u(n).format(t)},u=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric"})};!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(s||(s={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(l||(l={}));var h=function(t){if(t.time_format===l.language||t.time_format===l.system){var n=t.time_format===l.language?t.language:void 0,e=(new Date).toLocaleString(n);return e.includes("AM")||e.includes("PM")}return t.time_format===l.am_pm},d=function(t,n){return f(n).format(t)},f=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric",hour:h(t)?"numeric":"2-digit",minute:"2-digit",hour12:h(t)})},p=function(t,n){return g(n).format(t)},g=function(t){return new Intl.DateTimeFormat(t.language,{hour:"numeric",minute:"2-digit",hour12:h(t)})};function w(){return(w=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t}).apply(this,arguments)}function x(t){return t.substr(0,t.indexOf("."))}var y=function(t,n,e){var a=n?function(t){switch(t.number_format){case s.comma_decimal:return["en-US","en"];case s.decimal_comma:return["de","es","it"];case s.space_comma:return["fr","sv","cs"];case s.system:return;default:return t.language}}(n):void 0;if(Number.isNaN=Number.isNaN||function t(n){return"number"==typeof n&&t(n)},(null==n?void 0:n.number_format)!==s.none&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(a,v(t,e)).format(Number(t))}catch(n){return console.error(n),new Intl.NumberFormat(void 0,v(t,e)).format(Number(t))}return"string"==typeof t?t:function(t,n){return void 0===n&&(n=2),Math.round(t*Math.pow(10,n))/Math.pow(10,n)}(t,null==e?void 0:e.maximumFractionDigits).toString()+("currency"===(null==e?void 0:e.style)?" "+e.currency:"")},v=function(t,n){var e=w({maximumFractionDigits:2},n);if("string"!=typeof t)return e;if(!n||!n.minimumFractionDigits&&!n.maximumFractionDigits){var a=t.indexOf(".")>-1?t.split(".")[1].length:0;e.minimumFractionDigits=a,e.maximumFractionDigits=a}return e},k=function(t,n,e,a){var i=void 0!==a?a:n.state;if("unknown"===i||"unavailable"===i)return t("state.default."+i);if(function(t){return!!t.attributes.unit_of_measurement||!!t.attributes.state_class}(n)){if("monetary"===n.attributes.device_class)try{return y(i,e,{style:"currency",currency:n.attributes.unit_of_measurement})}catch(t){}return y(i,e)+(n.attributes.unit_of_measurement?" "+n.attributes.unit_of_measurement:"")}var r=function(t){return x(t.entity_id)}(n);if("input_datetime"===r){var o;if(void 0===a)return n.attributes.has_date&&n.attributes.has_time?(o=new Date(n.attributes.year,n.attributes.month-1,n.attributes.day,n.attributes.hour,n.attributes.minute),d(o,e)):n.attributes.has_date?(o=new Date(n.attributes.year,n.attributes.month-1,n.attributes.day),c(o,e)):n.attributes.has_time?((o=new Date).setHours(n.attributes.hour,n.attributes.minute),p(o,e)):n.state;try{var s=a.split(" ");if(2===s.length)return d(new Date(s.join("T")),e);if(1===s.length){if(a.includes("-"))return c(new Date(a+"T00:00"),e);if(a.includes(":")){var l=new Date;return p(new Date(l.toISOString().split("T")[0]+"T"+a),e)}}return a}catch(t){return a}}return"humidifier"===r&&"on"===i&&n.attributes.humidity?n.attributes.humidity+" %":"counter"===r||"number"===r||"input_number"===r?y(i,e):n.attributes.device_class&&t("component."+r+".state."+n.attributes.device_class+"."+i)||t("component."+r+".state._."+i)||i},b=(new Set(["fan","input_boolean","light","switch","group","automation"]),function(t,n,e,a){a=a||{},e=null==e?{}:e;var i=new Event(n,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});return i.detail=e,t.dispatchEvent(i),i});new Set(["call-service","divider","section","weblink","cast","select"]);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const _=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,$=Symbol(),A=new Map;class E{constructor(t,n){if(this._$cssResult$=!0,n!==$)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=A.get(this.cssText);return _&&void 0===t&&(A.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const z=(t,...n)=>{const e=1===t.length?t[0]:n.reduce(((n,e,a)=>n+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(e)+t[a+1]),t[0]);return new E(e,$)},C=_?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let n="";for(const e of t.cssRules)n+=e.cssText;return(t=>new E("string"==typeof t?t:t+"",$))(n)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var S;const M=window.trustedTypes,O=M?M.emptyScript:"",N=window.reactiveElementPolyfillSupport,U={toAttribute(t,n){switch(n){case Boolean:t=t?O:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,n){let e=t;switch(n){case Boolean:e=null!==t;break;case Number:e=null===t?null:Number(t);break;case Object:case Array:try{e=JSON.parse(t)}catch(t){e=null}}return e}},P=(t,n)=>n!==t&&(n==n||t==t),T={attribute:!0,type:String,converter:U,reflect:!1,hasChanged:P};class H extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var n;null!==(n=this.l)&&void 0!==n||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((n,e)=>{const a=this._$Eh(e,n);void 0!==a&&(this._$Eu.set(a,e),t.push(a))})),t}static createProperty(t,n=T){if(n.state&&(n.attribute=!1),this.finalize(),this.elementProperties.set(t,n),!n.noAccessor&&!this.prototype.hasOwnProperty(t)){const e="symbol"==typeof t?Symbol():"__"+t,a=this.getPropertyDescriptor(t,e,n);void 0!==a&&Object.defineProperty(this.prototype,t,a)}}static getPropertyDescriptor(t,n,e){return{get(){return this[n]},set(a){const i=this[t];this[n]=a,this.requestUpdate(t,i,e)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||T}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const e of n)this.createProperty(e,t[e])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const e=new Set(t.flat(1/0).reverse());for(const t of e)n.unshift(C(t))}else void 0!==t&&n.push(C(t));return n}static _$Eh(t,n){const e=n.attribute;return!1===e?void 0:"string"==typeof e?e:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var n,e;(null!==(n=this._$Eg)&&void 0!==n?n:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(e=t.hostConnected)||void 0===e||e.call(t))}removeController(t){var n;null===(n=this._$Eg)||void 0===n||n.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,n)=>{this.hasOwnProperty(n)&&(this._$Et.set(n,this[n]),delete this[n])}))}createRenderRoot(){var t;const n=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,n)=>{_?t.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((n=>{const e=document.createElement("style"),a=window.litNonce;void 0!==a&&e.setAttribute("nonce",a),e.textContent=n.cssText,t.appendChild(e)}))})(n,this.constructor.elementStyles),n}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var n;return null===(n=t.hostConnected)||void 0===n?void 0:n.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var n;return null===(n=t.hostDisconnected)||void 0===n?void 0:n.call(t)}))}attributeChangedCallback(t,n,e){this._$AK(t,e)}_$ES(t,n,e=T){var a,i;const r=this.constructor._$Eh(t,e);if(void 0!==r&&!0===e.reflect){const o=(null!==(i=null===(a=e.converter)||void 0===a?void 0:a.toAttribute)&&void 0!==i?i:U.toAttribute)(n,e.type);this._$Ei=t,null==o?this.removeAttribute(r):this.setAttribute(r,o),this._$Ei=null}}_$AK(t,n){var e,a,i;const r=this.constructor,o=r._$Eu.get(t);if(void 0!==o&&this._$Ei!==o){const t=r.getPropertyOptions(o),s=t.converter,l=null!==(i=null!==(a=null===(e=s)||void 0===e?void 0:e.fromAttribute)&&void 0!==a?a:"function"==typeof s?s:null)&&void 0!==i?i:U.fromAttribute;this._$Ei=o,this[o]=l(n,t.type),this._$Ei=null}}requestUpdate(t,n,e){let a=!0;void 0!==t&&(((e=e||this.constructor.getPropertyOptions(t)).hasChanged||P)(this[t],n)?(this._$AL.has(t)||this._$AL.set(t,n),!0===e.reflect&&this._$Ei!==t&&(void 0===this._$E_&&(this._$E_=new Map),this._$E_.set(t,e))):a=!1),!this.isUpdatePending&&a&&(this._$Ep=this._$EC())}async _$EC(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,n)=>this[n]=t)),this._$Et=void 0);let n=!1;const e=this._$AL;try{n=this.shouldUpdate(e),n?(this.willUpdate(e),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var n;return null===(n=t.hostUpdate)||void 0===n?void 0:n.call(t)})),this.update(e)):this._$EU()}catch(t){throw n=!1,this._$EU(),t}n&&this._$AE(e)}willUpdate(t){}_$AE(t){var n;null===(n=this._$Eg)||void 0===n||n.forEach((t=>{var n;return null===(n=t.hostUpdated)||void 0===n?void 0:n.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$E_&&(this._$E_.forEach(((t,n)=>this._$ES(n,this[n],t))),this._$E_=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var R;H.finalized=!0,H.elementProperties=new Map,H.elementStyles=[],H.shadowRootOptions={mode:"open"},null==N||N({ReactiveElement:H}),(null!==(S=globalThis.reactiveElementVersions)&&void 0!==S?S:globalThis.reactiveElementVersions=[]).push("1.2.1");const D=globalThis.trustedTypes,j=D?D.createPolicy("lit-html",{createHTML:t=>t}):void 0,F=`lit$${(Math.random()+"").slice(9)}$`,Y="?"+F,X=`<${Y}>`,I=document,L=(t="")=>I.createComment(t),B=t=>null===t||"object"!=typeof t&&"function"!=typeof t,V=Array.isArray,W=t=>{var n;return V(t)||"function"==typeof(null===(n=t)||void 0===n?void 0:n[Symbol.iterator])},K=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,q=/-->/g,G=/>/g,J=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Z=/'/g,Q=/"/g,tt=/^(?:script|style|textarea)$/i,nt=t=>(n,...e)=>({_$litType$:t,strings:n,values:e}),et=nt(1),at=nt(2),it=Symbol.for("lit-noChange"),rt=Symbol.for("lit-nothing"),ot=new WeakMap,st=I.createTreeWalker(I,129,null,!1),lt=(t,n)=>{const e=t.length-1,a=[];let i,r=2===n?"<svg>":"",o=K;for(let n=0;n<e;n++){const e=t[n];let s,l,m=-1,c=0;for(;c<e.length&&(o.lastIndex=c,l=o.exec(e),null!==l);)c=o.lastIndex,o===K?"!--"===l[1]?o=q:void 0!==l[1]?o=G:void 0!==l[2]?(tt.test(l[2])&&(i=RegExp("</"+l[2],"g")),o=J):void 0!==l[3]&&(o=J):o===J?">"===l[0]?(o=null!=i?i:K,m=-1):void 0===l[1]?m=-2:(m=o.lastIndex-l[2].length,s=l[1],o=void 0===l[3]?J:'"'===l[3]?Q:Z):o===Q||o===Z?o=J:o===q||o===G?o=K:(o=J,i=void 0);const u=o===J&&t[n+1].startsWith("/>")?" ":"";r+=o===K?e+X:m>=0?(a.push(s),e.slice(0,m)+"$lit$"+e.slice(m)+F+u):e+F+(-2===m?(a.push(void 0),n):u)}const s=r+(t[e]||"<?>")+(2===n?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==j?j.createHTML(s):s,a]};class mt{constructor({strings:t,_$litType$:n},e){let a;this.parts=[];let i=0,r=0;const o=t.length-1,s=this.parts,[l,m]=lt(t,n);if(this.el=mt.createElement(l,e),st.currentNode=this.el.content,2===n){const t=this.el.content,n=t.firstChild;n.remove(),t.append(...n.childNodes)}for(;null!==(a=st.nextNode())&&s.length<o;){if(1===a.nodeType){if(a.hasAttributes()){const t=[];for(const n of a.getAttributeNames())if(n.endsWith("$lit$")||n.startsWith(F)){const e=m[r++];if(t.push(n),void 0!==e){const t=a.getAttribute(e.toLowerCase()+"$lit$").split(F),n=/([.?@])?(.*)/.exec(e);s.push({type:1,index:i,name:n[2],strings:t,ctor:"."===n[1]?ft:"?"===n[1]?gt:"@"===n[1]?wt:dt})}else s.push({type:6,index:i})}for(const n of t)a.removeAttribute(n)}if(tt.test(a.tagName)){const t=a.textContent.split(F),n=t.length-1;if(n>0){a.textContent=D?D.emptyScript:"";for(let e=0;e<n;e++)a.append(t[e],L()),st.nextNode(),s.push({type:2,index:++i});a.append(t[n],L())}}}else if(8===a.nodeType)if(a.data===Y)s.push({type:2,index:i});else{let t=-1;for(;-1!==(t=a.data.indexOf(F,t+1));)s.push({type:7,index:i}),t+=F.length-1}i++}}static createElement(t,n){const e=I.createElement("template");return e.innerHTML=t,e}}function ct(t,n,e=t,a){var i,r,o,s;if(n===it)return n;let l=void 0!==a?null===(i=e._$Cl)||void 0===i?void 0:i[a]:e._$Cu;const m=B(n)?void 0:n._$litDirective$;return(null==l?void 0:l.constructor)!==m&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===m?l=void 0:(l=new m(t),l._$AT(t,e,a)),void 0!==a?(null!==(o=(s=e)._$Cl)&&void 0!==o?o:s._$Cl=[])[a]=l:e._$Cu=l),void 0!==l&&(n=ct(t,l._$AS(t,n.values),l,a)),n}class ut{constructor(t,n){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var n;const{el:{content:e},parts:a}=this._$AD,i=(null!==(n=null==t?void 0:t.creationScope)&&void 0!==n?n:I).importNode(e,!0);st.currentNode=i;let r=st.nextNode(),o=0,s=0,l=a[0];for(;void 0!==l;){if(o===l.index){let n;2===l.type?n=new ht(r,r.nextSibling,this,t):1===l.type?n=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(n=new xt(r,this,t)),this.v.push(n),l=a[++s]}o!==(null==l?void 0:l.index)&&(r=st.nextNode(),o++)}return i}m(t){let n=0;for(const e of this.v)void 0!==e&&(void 0!==e.strings?(e._$AI(t,e,n),n+=e.strings.length-2):e._$AI(t[n])),n++}}class ht{constructor(t,n,e,a){var i;this.type=2,this._$AH=rt,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=e,this.options=a,this._$Cg=null===(i=null==a?void 0:a.isConnected)||void 0===i||i}get _$AU(){var t,n;return null!==(n=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==n?n:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return void 0!==n&&11===t.nodeType&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=ct(this,t,n),B(t)?t===rt||null==t||""===t?(this._$AH!==rt&&this._$AR(),this._$AH=rt):t!==this._$AH&&t!==it&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.S(t):W(t)?this.A(t):this.$(t)}M(t,n=this._$AB){return this._$AA.parentNode.insertBefore(t,n)}S(t){this._$AH!==t&&(this._$AR(),this._$AH=this.M(t))}$(t){this._$AH!==rt&&B(this._$AH)?this._$AA.nextSibling.data=t:this.S(I.createTextNode(t)),this._$AH=t}T(t){var n;const{values:e,_$litType$:a}=t,i="number"==typeof a?this._$AC(t):(void 0===a.el&&(a.el=mt.createElement(a.h,this.options)),a);if((null===(n=this._$AH)||void 0===n?void 0:n._$AD)===i)this._$AH.m(e);else{const t=new ut(i,this),n=t.p(this.options);t.m(e),this.S(n),this._$AH=t}}_$AC(t){let n=ot.get(t.strings);return void 0===n&&ot.set(t.strings,n=new mt(t)),n}A(t){V(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let e,a=0;for(const i of t)a===n.length?n.push(e=new ht(this.M(L()),this.M(L()),this,this.options)):e=n[a],e._$AI(i),a++;a<n.length&&(this._$AR(e&&e._$AB.nextSibling,a),n.length=a)}_$AR(t=this._$AA.nextSibling,n){var e;for(null===(e=this._$AP)||void 0===e||e.call(this,!1,!0,n);t&&t!==this._$AB;){const n=t.nextSibling;t.remove(),t=n}}setConnected(t){var n;void 0===this._$AM&&(this._$Cg=t,null===(n=this._$AP)||void 0===n||n.call(this,t))}}class dt{constructor(t,n,e,a,i){this.type=1,this._$AH=rt,this._$AN=void 0,this.element=t,this.name=n,this._$AM=a,this.options=i,e.length>2||""!==e[0]||""!==e[1]?(this._$AH=Array(e.length-1).fill(new String),this.strings=e):this._$AH=rt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,n=this,e,a){const i=this.strings;let r=!1;if(void 0===i)t=ct(this,t,n,0),r=!B(t)||t!==this._$AH&&t!==it,r&&(this._$AH=t);else{const a=t;let o,s;for(t=i[0],o=0;o<i.length-1;o++)s=ct(this,a[e+o],n,o),s===it&&(s=this._$AH[o]),r||(r=!B(s)||s!==this._$AH[o]),s===rt?t=rt:t!==rt&&(t+=(null!=s?s:"")+i[o+1]),this._$AH[o]=s}r&&!a&&this.k(t)}k(t){t===rt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class ft extends dt{constructor(){super(...arguments),this.type=3}k(t){this.element[this.name]=t===rt?void 0:t}}const pt=D?D.emptyScript:"";class gt extends dt{constructor(){super(...arguments),this.type=4}k(t){t&&t!==rt?this.element.setAttribute(this.name,pt):this.element.removeAttribute(this.name)}}class wt extends dt{constructor(t,n,e,a,i){super(t,n,e,a,i),this.type=5}_$AI(t,n=this){var e;if((t=null!==(e=ct(this,t,n,0))&&void 0!==e?e:rt)===it)return;const a=this._$AH,i=t===rt&&a!==rt||t.capture!==a.capture||t.once!==a.once||t.passive!==a.passive,r=t!==rt&&(a===rt||i);i&&this.element.removeEventListener(this.name,this,a),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var n,e;"function"==typeof this._$AH?this._$AH.call(null!==(e=null===(n=this.options)||void 0===n?void 0:n.host)&&void 0!==e?e:this.element,t):this._$AH.handleEvent(t)}}class xt{constructor(t,n,e){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=e}get _$AU(){return this._$AM._$AU}_$AI(t){ct(this,t)}}const yt=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var vt,kt;null==yt||yt(mt,ht),(null!==(R=globalThis.litHtmlVersions)&&void 0!==R?R:globalThis.litHtmlVersions=[]).push("2.1.2");class bt extends H{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,n;const e=super.createRenderRoot();return null!==(t=(n=this.renderOptions).renderBefore)&&void 0!==t||(n.renderBefore=e.firstChild),e}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,n,e)=>{var a,i;const r=null!==(a=null==e?void 0:e.renderBefore)&&void 0!==a?a:n;let o=r._$litPart$;if(void 0===o){const t=null!==(i=null==e?void 0:e.renderBefore)&&void 0!==i?i:null;r._$litPart$=o=new ht(n.insertBefore(L(),t),t,void 0,null!=e?e:{})}return o._$AI(t),o})(n,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return it}}bt.finalized=!0,bt._$litElement$=!0,null===(vt=globalThis.litElementHydrateSupport)||void 0===vt||vt.call(globalThis,{LitElement:bt});const _t=globalThis.litElementPolyfillSupport;null==_t||_t({LitElement:bt});(null!==(kt=globalThis.litElementVersions)&&void 0!==kt?kt:globalThis.litElementVersions=[]).push("3.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const $t=t=>n=>"function"==typeof n?((t,n)=>(window.customElements.define(t,n),n))(t,n):((t,n)=>{const{kind:e,elements:a}=n;return{kind:e,elements:a,finisher(n){window.customElements.define(t,n)}}})(t,n)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,At=(t,n)=>"method"===n.kind&&n.descriptor&&!("value"in n.descriptor)?{...n,finisher(e){e.createProperty(n.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:n.key,initializer(){"function"==typeof n.initializer&&(this[n.key]=n.initializer.call(this))},finisher(e){e.createProperty(n.key,t)}};function Et(t){return(n,e)=>void 0!==e?((t,n,e)=>{n.constructor.createProperty(e,t)})(t,n,e):At(t,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function zt(t){return Et({...t,state:!0})}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Ct;null===(Ct=window.HTMLSlotElement)||void 0===Ct||Ct.prototype.assignedElements;function St(t,n){const e=t.states[n];return null==e?null:e}function Mt(t,n){const e=St(t,n);if(null==e)throw new Error(`Unexpected null when trying to get ${n} from Home Assistant object`);return e}function Ot(t){return t.state}function Nt(t,n){return t.config.unit_system[n]}const Ut="sun.sun";var Pt;!function(t){t.AboveHorizon="above_horizon",t.BelowHorizon="below_horizon"}(Pt||(Pt={}));var Tt=at`
<svg
    width="100%"
    height="100%"
    viewbox="0 0 42 42">
    <g>
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
`,Ht=at`
<svg
    width="100%"
    height="100%"
    viewbox="0 0 48 48">
    <g>
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
`,Rt=at`
<svg
    width="100%"
    height="100%"
    viewbox="0 0 48 48">
    <g>
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
`,Dt=at`
<svg
  width="100%"
  height="100%"
  viewbox="0 0 32 32"
>
  <g>
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
`,jt=at`
<svg
    width="100%"
    height="100%"
    viewbox="0 0 32 32">
    <g>
        <g transform="translate(3,3)">
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
`,Ft=at`
<svg
    width="100%"
    height="100%"
    viewbox="0 0 44 44">
    <g>
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
`,Yt=at`
<svg
    width="100%"
    height="100%"
    viewbox="0 0 44 44">
    <g>
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
`,Xt=at`
<svg
    width="100%"
    height="100%"
    viewbox="0 0 44 44">
    <g>
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
`,It=at`
<svg
    width="100%"
    height="100%"
    viewbox="0 0 42 42">
    <g>
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
`,Lt=at`
<svg
    width="100%"
    height="100%"
    viewbox="0 0 42 42">
    <g>
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
`;const Bt="weather",Vt="weather-card";var Wt;function Kt(t,n){switch(t){case Wt.Clear:case Wt.Sunny:return n===Pt.BelowHorizon?jt:Dt;case Wt.ClearNight:return jt;case Wt.Cloudy:case Wt.Fog:case Wt.Windy:return Tt;case Wt.Hail:case Wt.SnowyRainy:return Xt;case Wt.Lightning:case Wt.LightningRainy:return Lt;case Wt.PartlyCloudy:case Wt.WindyVariant:return n===Pt.BelowHorizon?Rt:Ht;case Wt.Pouring:return Yt;case Wt.Rainy:return Ft;case Wt.Snowy:return It}}function qt(t){return x(t)===Bt}!function(t){t.Clear="clear",t.ClearNight="clear-night",t.Cloudy="cloudy",t.Exceptional="exceptional",t.Fog="fog",t.Hail="hail",t.Lightning="lightning",t.LightningRainy="lightning-rainy",t.PartlyCloudy="partlycloudy",t.Pouring="pouring",t.Rainy="rainy",t.Snowy="snowy",t.SnowyRainy="snowy-rainy",t.Sunny="sunny",t.Windy="windy",t.WindyVariant="windy-variant"}(Wt||(Wt={}));var Gt=z`
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
`,Jt=function(t,n,e,a){var i,r=arguments.length,o=r<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,n,e,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(o=(r<3?i(o):r>3?i(n,e,o):i(n,e))||o);return r>3&&o&&Object.defineProperty(n,e,o),o};let Zt=class extends bt{setConfig(t){this.config=Object.assign({},t)}render(){var t;const n=this.hass,{current:e=!0,entity:a="",forecast:i,hourly_forecast:r,name:o="",number_of_forecasts:s=5}=null!==(t=this.config)&&void 0!==t?t:{},l=Object.keys(n.states).filter(qt);return et`
      <div class="card-config">
        <div>
          <paper-input label="Name" .value="${o}" @value-changed="${this.handleChange("name")}"></paper-input>
          ${customElements.get("ha-entity-picker")?et`
                <ha-entity-picker
                  .hass="${n}"
                  .value="${a}"
                  .includeDomains=${[Bt]}
                  @change="${this.handleChange("entity")}"
                >
                </ha-entity-picker>
              `:et`
                <paper-dropdown-menu label="Entity" @value-changed="${this.handleChange("entity")}">
                  <paper-listbox slot="dropdown-content" .selected="${l.indexOf(a)}">
                    ${l.map((t=>et` <paper-item>${t}</paper-item> `))}
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
    `}handleChange(t){return n=>{var e;const a=this.config;if(null==a||null==this.hass)return;const i=n.target;if(null==i)return;const r=Object.assign({},a),o=null!==(e=i.checked)&&void 0!==e?e:i.value;"string"==typeof o&&""===o?delete r[t]:r[t]=o,b(this,"config-changed",{config:r})}}};Zt.styles=Gt,Jt([zt()],Zt.prototype,"config",void 0),Jt([Et()],Zt.prototype,"hass",void 0),Zt=Jt([$t("weather-card-editor")],Zt);var Qt=z`
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
`,tn=function(t,n,e,a){var i,r=arguments.length,o=r<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,n,e,a);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(o=(r<3?i(o):r>3?i(n,e,o):i(n,e))||o);return r>3&&o&&Object.defineProperty(n,e,o),o};let nn=class extends bt{static getStubConfig(t,n,e){var a;return{entity:null!==(a=n.find(qt))&&void 0!==a?a:e.find(qt)}}static async getConfigElement(){return document.createElement("weather-card-editor")}setConfig(t){if(!t.entity)throw new Error("Please define a weather entity");this.config=t}shouldUpdate(t){return function(t,n,e){if(n.has("config")||e)return!0;if(t.config.entity){var a=n.get("hass");return!a||a.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}render(){const t=this.config.entity,n=St(this.hass,t);return null==n?et`
        <ha-card>
          <div class="not-found">Entity not available: ${t}</div>
        </ha-card>
      `:et`<ha-card class="container" @click=${this.handleClick}>
      ${this.renderCurrent(n)} ${this.renderForecasts(n)}
    </ha-card>`}renderCurrent(t){const n=this.hass,{current:e,name:a}=this.config,{locale:i={language:n.language,number_format:s.system,time_format:l.system},localize:r}=n,{attributes:{humidity:o,temperature:m}}=t,c=Ot(Mt(n,Ut)),u=Ot(t),h=this.getUnit("temperature");return!1===e?et``:et`<div class="grid grid-align-center current">
      <div class="flex-no-shrink icon">${Kt(u,c)}</div>
      <div class="flex flex-column flex-justify-center">
        <div class="title">${k(r,t,i,u)}</div>
        <div class="subtitle secondary-text">${null!=a?a:"Home"}</div>
      </div>
      <div class="flex flex-column right-content">
        <div class="flex">
          <span class="temperature">${Math.round(m)}</span>
          <span class="unit">${h}</span>
        </div>
        <div class="flex flex-align-center secondary-text">
          <ha-icon icon="mdi:water-percent"></ha-icon>
          ${o}<span> % </span>
        </div>
      </div>
    </div>`}renderForecasts({attributes:t}){var n,e;const{forecast:a=!1,hourly_forecast:i,number_of_forecasts:r=5}=this.config;if(!a)return et``;const o=this.hass,s=null!==(e=null===(n=o.locale)||void 0===n?void 0:n.language)&&void 0!==e?e:o.selectedLanguage,{attributes:{next_dawn:l,next_dusk:m}}=Mt(o,Ut),c=i?{hour:"2-digit"}:{weekday:"short"},u=t.forecast.slice(0,r).map((({condition:t,datetime:n,temperature:e,templow:a},r)=>{const o=new Date(n);return et`<div class="flex flex-column forecast">
          <div>
            ${0!==r||i?o.toLocaleString(s,c).replace(/^0/,"").replace(" ",""):"Today"}
          </div>
          <div class="flex-no-shrink icon-small">
            ${Kt(t,i?o>=new Date(m)&&o<new Date(l)?Pt.BelowHorizon:Pt.AboveHorizon:null)}
          </div>
          <span class="temp-high">${Math.round(e)}°</span>
          ${null!=a?et`<span class="temp-low secondary-text">${Math.round(a)}°</span>`:et``}
        </div>`}));return et` <div class="flex forecasts">${u}</div> `}handleClick(){b(this,"hass-more-info",{entityId:this.config.entity})}getUnit(t){const n=this.hass,e="km"===Nt(n,"length");switch(t){case"air_pressure":return e?"hPa":"inHg";case"precipitation":return e?"mm":"in";case"precipitation_probability":return"%";default:return Nt(n,t)}}};nn.styles=Qt,tn([zt()],nn.prototype,"config",void 0),tn([Et()],nn.prototype,"hass",void 0),nn=tn([$t(Vt)],nn),function(t){var n;window.customCards=null!==(n=window.customCards)&&void 0!==n?n:[];const e=window.customCards.findIndex((n=>n.type===t.type));-1===e?window.customCards.push(t):window.customCards[e]=t}({type:Vt,name:"custom-weather-card",description:"A custom weather card with animated SVG icons",preview:!0})})();