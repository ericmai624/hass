(()=>{var t,e,n,i,a={};t=a,e="selectUnit",n=()=>s,i=t=>s=t,Object.defineProperty(t,e,{get:n,set:i,enumerable:!0,configurable:!0});var r=function(){return r=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t},r.apply(this,arguments)};function s(t,e,n){void 0===e&&(e=Date.now()),void 0===n&&(n={});var i=r(r({},m),n||{}),a=(+t-+e)/1e3;if(Math.abs(a)<i.second)return{value:Math.round(a),unit:"second"};var s=a/60;if(Math.abs(s)<i.minute)return{value:Math.round(s),unit:"minute"};var o=a/3600;if(Math.abs(o)<i.hour)return{value:Math.round(o),unit:"hour"};var l=a/86400;if(Math.abs(l)<i.day)return{value:Math.round(l),unit:"day"};var c=new Date(t),h=new Date(e),u=c.getFullYear()-h.getFullYear();if(Math.round(Math.abs(u))>0)return{value:Math.round(u),unit:"year"};var d=12*u+c.getMonth()-h.getMonth();if(Math.round(Math.abs(d))>0)return{value:Math.round(d),unit:"month"};var p=a/604800;return{value:Math.round(p),unit:"week"}}var o,l,m={second:45,minute:45,hour:22,day:5},c=function(t,e){return h(e).format(t)},h=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric"})};!function(t){t.language="language",t.system="system",t.comma_decimal="comma_decimal",t.decimal_comma="decimal_comma",t.space_comma="space_comma",t.none="none"}(o||(o={})),function(t){t.language="language",t.system="system",t.am_pm="12",t.twenty_four="24"}(l||(l={}));var u=function(t){if(t.time_format===l.language||t.time_format===l.system){var e=t.time_format===l.language?t.language:void 0,n=(new Date).toLocaleString(e);return n.includes("AM")||n.includes("PM")}return t.time_format===l.am_pm},d=function(t,e){return p(e).format(t)},p=function(t){return new Intl.DateTimeFormat(t.language,{year:"numeric",month:"long",day:"numeric",hour:u(t)?"numeric":"2-digit",minute:"2-digit",hour12:u(t)})},f=function(t,e){return g(e).format(t)},g=function(t){return new Intl.DateTimeFormat(t.language,{hour:"numeric",minute:"2-digit",hour12:u(t)})};function w(){return(w=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t}).apply(this,arguments)}function v(t){return t.substr(0,t.indexOf("."))}var y=function(t,e,n){var i=e?function(t){switch(t.number_format){case o.comma_decimal:return["en-US","en"];case o.decimal_comma:return["de","es","it"];case o.space_comma:return["fr","sv","cs"];case o.system:return;default:return t.language}}(e):void 0;if(Number.isNaN=Number.isNaN||function t(e){return"number"==typeof e&&t(e)},(null==e?void 0:e.number_format)!==o.none&&!Number.isNaN(Number(t))&&Intl)try{return new Intl.NumberFormat(i,x(t,n)).format(Number(t))}catch(e){return console.error(e),new Intl.NumberFormat(void 0,x(t,n)).format(Number(t))}return"string"==typeof t?t:function(t,e){return void 0===e&&(e=2),Math.round(t*Math.pow(10,e))/Math.pow(10,e)}(t,null==n?void 0:n.maximumFractionDigits).toString()+("currency"===(null==n?void 0:n.style)?" "+n.currency:"")},x=function(t,e){var n=w({maximumFractionDigits:2},e);if("string"!=typeof t)return n;if(!e||!e.minimumFractionDigits&&!e.maximumFractionDigits){var i=t.indexOf(".")>-1?t.split(".")[1].length:0;n.minimumFractionDigits=i,n.maximumFractionDigits=i}return n},$=function(t,e,n,i){var a=void 0!==i?i:e.state;if("unknown"===a||"unavailable"===a)return t("state.default."+a);if(function(t){return!!t.attributes.unit_of_measurement||!!t.attributes.state_class}(e)){if("monetary"===e.attributes.device_class)try{return y(a,n,{style:"currency",currency:e.attributes.unit_of_measurement})}catch(t){}return y(a,n)+(e.attributes.unit_of_measurement?" "+e.attributes.unit_of_measurement:"")}var r=function(t){return v(t.entity_id)}(e);if("input_datetime"===r){var s;if(void 0===i)return e.attributes.has_date&&e.attributes.has_time?(s=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day,e.attributes.hour,e.attributes.minute),d(s,n)):e.attributes.has_date?(s=new Date(e.attributes.year,e.attributes.month-1,e.attributes.day),c(s,n)):e.attributes.has_time?((s=new Date).setHours(e.attributes.hour,e.attributes.minute),f(s,n)):e.state;try{var o=i.split(" ");if(2===o.length)return d(new Date(o.join("T")),n);if(1===o.length){if(i.includes("-"))return c(new Date(i+"T00:00"),n);if(i.includes(":")){var l=new Date;return f(new Date(l.toISOString().split("T")[0]+"T"+i),n)}}return i}catch(t){return i}}return"humidifier"===r&&"on"===a&&e.attributes.humidity?e.attributes.humidity+" %":"counter"===r||"number"===r||"input_number"===r?y(a,n):e.attributes.device_class&&t("component."+r+".state."+e.attributes.device_class+"."+a)||t("component."+r+".state._."+a)||a},_=(new Set(["fan","input_boolean","light","switch","group","automation"]),function(t,e,n,i){i=i||{},n=null==n?{}:n;var a=new Event(e,{bubbles:void 0===i.bubbles||i.bubbles,cancelable:Boolean(i.cancelable),composed:void 0===i.composed||i.composed});return a.detail=n,t.dispatchEvent(a),a});new Set(["call-service","divider","section","weblink","cast","select"]);
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const b=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,k=Symbol(),A=new Map;class E{constructor(t,e){if(this._$cssResult$=!0,e!==k)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=A.get(this.cssText);return b&&void 0===t&&(A.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const S=b?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return(t=>new E("string"==typeof t?t:t+"",k))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var C;const z=window.trustedTypes,U=z?z.emptyScript:"",P=window.reactiveElementPolyfillSupport,M={toAttribute(t,e){switch(e){case Boolean:t=t?U:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},N=(t,e)=>e!==t&&(e==e||t==t),T={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:N};class O extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,n)=>{const i=this._$Eh(n,e);void 0!==i&&(this._$Eu.set(i,n),t.push(i))})),t}static createProperty(t,e=T){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const n="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,n,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(i){const a=this[t];this[e]=i,this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||T}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of e)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(S(t))}else void 0!==t&&e.push(S(t));return e}static _$Eh(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,n;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(n=t.hostConnected)||void 0===n||n.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{b?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const n=document.createElement("style"),i=window.litNonce;void 0!==i&&n.setAttribute("nonce",i),n.textContent=e.cssText,t.appendChild(n)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ES(t,e,n=T){var i,a;const r=this.constructor._$Eh(t,n);if(void 0!==r&&!0===n.reflect){const s=(null!==(a=null===(i=n.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==a?a:M.toAttribute)(e,n.type);this._$Ei=t,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$Ei=null}}_$AK(t,e){var n,i,a;const r=this.constructor,s=r._$Eu.get(t);if(void 0!==s&&this._$Ei!==s){const t=r.getPropertyOptions(s),o=t.converter,l=null!==(a=null!==(i=null===(n=o)||void 0===n?void 0:n.fromAttribute)&&void 0!==i?i:"function"==typeof o?o:null)&&void 0!==a?a:M.fromAttribute;this._$Ei=s,this[s]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,n){let i=!0;void 0!==t&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||N)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===n.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,n))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(n)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(n)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var H;O.finalized=!0,O.elementProperties=new Map,O.elementStyles=[],O.shadowRootOptions={mode:"open"},null==P||P({ReactiveElement:O}),(null!==(C=globalThis.reactiveElementVersions)&&void 0!==C?C:globalThis.reactiveElementVersions=[]).push("1.3.0");const R=globalThis.trustedTypes,D=R?R.createPolicy("lit-html",{createHTML:t=>t}):void 0,j=`lit$${(Math.random()+"").slice(9)}$`,I="?"+j,L=`<${I}>`,F=document,Y=(t="")=>F.createComment(t),X=t=>null===t||"object"!=typeof t&&"function"!=typeof t,B=Array.isArray,W=t=>{var e;return B(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},V=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,q=/-->/g,K=/>/g,J=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Z=/'/g,G=/"/g,Q=/^(?:script|style|textarea|title)$/i,tt=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),et=(tt(1),tt(2),Symbol.for("lit-noChange")),nt=Symbol.for("lit-nothing"),it=new WeakMap,at=F.createTreeWalker(F,129,null,!1),rt=(t,e)=>{const n=t.length-1,i=[];let a,r=2===e?"<svg>":"",s=V;for(let e=0;e<n;e++){const n=t[e];let o,l,m=-1,c=0;for(;c<n.length&&(s.lastIndex=c,l=s.exec(n),null!==l);)c=s.lastIndex,s===V?"!--"===l[1]?s=q:void 0!==l[1]?s=K:void 0!==l[2]?(Q.test(l[2])&&(a=RegExp("</"+l[2],"g")),s=J):void 0!==l[3]&&(s=J):s===J?">"===l[0]?(s=null!=a?a:V,m=-1):void 0===l[1]?m=-2:(m=s.lastIndex-l[2].length,o=l[1],s=void 0===l[3]?J:'"'===l[3]?G:Z):s===G||s===Z?s=J:s===q||s===K?s=V:(s=J,a=void 0);const h=s===J&&t[e+1].startsWith("/>")?" ":"";r+=s===V?n+L:m>=0?(i.push(o),n.slice(0,m)+"$lit$"+n.slice(m)+j+h):n+j+(-2===m?(i.push(void 0),e):h)}const o=r+(t[n]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==D?D.createHTML(o):o,i]};class st{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let a=0,r=0;const s=t.length-1,o=this.parts,[l,m]=rt(t,e);if(this.el=st.createElement(l,n),at.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=at.nextNode())&&o.length<s;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(j)){const n=m[r++];if(t.push(e),void 0!==n){const t=i.getAttribute(n.toLowerCase()+"$lit$").split(j),e=/([.?@])?(.*)/.exec(n);o.push({type:1,index:a,name:e[2],strings:t,ctor:"."===e[1]?ht:"?"===e[1]?dt:"@"===e[1]?pt:ct})}else o.push({type:6,index:a})}for(const e of t)i.removeAttribute(e)}if(Q.test(i.tagName)){const t=i.textContent.split(j),e=t.length-1;if(e>0){i.textContent=R?R.emptyScript:"";for(let n=0;n<e;n++)i.append(t[n],Y()),at.nextNode(),o.push({type:2,index:++a});i.append(t[e],Y())}}}else if(8===i.nodeType)if(i.data===I)o.push({type:2,index:a});else{let t=-1;for(;-1!==(t=i.data.indexOf(j,t+1));)o.push({type:7,index:a}),t+=j.length-1}a++}}static createElement(t,e){const n=F.createElement("template");return n.innerHTML=t,n}}function ot(t,e,n=t,i){var a,r,s,o;if(e===et)return e;let l=void 0!==i?null===(a=n._$Cl)||void 0===a?void 0:a[i]:n._$Cu;const m=X(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==m&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===m?l=void 0:(l=new m(t),l._$AT(t,n,i)),void 0!==i?(null!==(s=(o=n)._$Cl)&&void 0!==s?s:o._$Cl=[])[i]=l:n._$Cu=l),void 0!==l&&(e=ot(t,l._$AS(t,e.values),l,i)),e}class lt{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:n},parts:i}=this._$AD,a=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:F).importNode(n,!0);at.currentNode=a;let r=at.nextNode(),s=0,o=0,l=i[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new mt(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new ft(r,this,t)),this.v.push(e),l=i[++o]}s!==(null==l?void 0:l.index)&&(r=at.nextNode(),s++)}return a}m(t){let e=0;for(const n of this.v)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class mt{constructor(t,e,n,i){var a;this.type=2,this._$AH=nt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cg=null===(a=null==i?void 0:i.isConnected)||void 0===a||a}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ot(this,t,e),X(t)?t===nt||null==t||""===t?(this._$AH!==nt&&this._$AR(),this._$AH=nt):t!==this._$AH&&t!==et&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):W(t)?this.S(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==nt&&X(this._$AH)?this._$AA.nextSibling.data=t:this.k(F.createTextNode(t)),this._$AH=t}T(t){var e;const{values:n,_$litType$:i}=t,a="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=st.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===a)this._$AH.m(n);else{const t=new lt(a,this),e=t.p(this.options);t.m(n),this.k(e),this._$AH=t}}_$AC(t){let e=it.get(t.strings);return void 0===e&&it.set(t.strings,e=new st(t)),e}S(t){B(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,i=0;for(const a of t)i===e.length?e.push(n=new mt(this.A(Y()),this.A(Y()),this,this.options)):n=e[i],n._$AI(a),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class ct{constructor(t,e,n,i,a){this.type=1,this._$AH=nt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=a,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=nt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,n,i){const a=this.strings;let r=!1;if(void 0===a)t=ot(this,t,e,0),r=!X(t)||t!==this._$AH&&t!==et,r&&(this._$AH=t);else{const i=t;let s,o;for(t=a[0],s=0;s<a.length-1;s++)o=ot(this,i[n+s],e,s),o===et&&(o=this._$AH[s]),r||(r=!X(o)||o!==this._$AH[s]),o===nt?t=nt:t!==nt&&(t+=(null!=o?o:"")+a[s+1]),this._$AH[s]=o}r&&!i&&this.C(t)}C(t){t===nt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class ht extends ct{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===nt?void 0:t}}const ut=R?R.emptyScript:"";class dt extends ct{constructor(){super(...arguments),this.type=4}C(t){t&&t!==nt?this.element.setAttribute(this.name,ut):this.element.removeAttribute(this.name)}}class pt extends ct{constructor(t,e,n,i,a){super(t,e,n,i,a),this.type=5}_$AI(t,e=this){var n;if((t=null!==(n=ot(this,t,e,0))&&void 0!==n?n:nt)===et)return;const i=this._$AH,a=t===nt&&i!==nt||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==nt&&(i===nt||a);a&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==n?n:this.element,t):this._$AH.handleEvent(t)}}class ft{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){ot(this,t)}}const gt=window.litHtmlPolyfillSupport;null==gt||gt(st,mt),(null!==(H=globalThis.litHtmlVersions)&&void 0!==H?H:globalThis.litHtmlVersions=[]).push("2.2.0");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const wt=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,vt=Symbol(),yt=new Map;class xt{constructor(t,e){if(this._$cssResult$=!0,e!==vt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){let t=yt.get(this.cssText);return wt&&void 0===t&&(yt.set(this.cssText,t=new CSSStyleSheet),t.replaceSync(this.cssText)),t}toString(){return this.cssText}}const $t=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,n,i)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+t[i+1]),t[0]);return new xt(n,vt)},_t=wt?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const n of t.cssRules)e+=n.cssText;return(t=>new xt("string"==typeof t?t:t+"",vt))(e)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var bt;const kt=window.trustedTypes,At=kt?kt.emptyScript:"",Et=window.reactiveElementPolyfillSupport,St={toAttribute(t,e){switch(e){case Boolean:t=t?At:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let n=t;switch(e){case Boolean:n=null!==t;break;case Number:n=null===t?null:Number(t);break;case Object:case Array:try{n=JSON.parse(t)}catch(t){n=null}}return n}},Ct=(t,e)=>e!==t&&(e==e||t==t),zt={attribute:!0,type:String,converter:St,reflect:!1,hasChanged:Ct};class Ut extends HTMLElement{constructor(){super(),this._$Et=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Ei=null,this.o()}static addInitializer(t){var e;null!==(e=this.l)&&void 0!==e||(this.l=[]),this.l.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,n)=>{const i=this._$Eh(n,e);void 0!==i&&(this._$Eu.set(i,n),t.push(i))})),t}static createProperty(t,e=zt){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const n="symbol"==typeof t?Symbol():"__"+t,i=this.getPropertyDescriptor(t,n,e);void 0!==i&&Object.defineProperty(this.prototype,t,i)}}static getPropertyDescriptor(t,e,n){return{get(){return this[e]},set(i){const a=this[t];this[e]=i,this.requestUpdate(t,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||zt}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this._$Eu=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const n of e)this.createProperty(n,t[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const n=new Set(t.flat(1/0).reverse());for(const t of n)e.unshift(_t(t))}else void 0!==t&&e.push(_t(t));return e}static _$Eh(t,e){const n=e.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof t?t.toLowerCase():void 0}o(){var t;this._$Ep=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Em(),this.requestUpdate(),null===(t=this.constructor.l)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,n;(null!==(e=this._$Eg)&&void 0!==e?e:this._$Eg=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(n=t.hostConnected)||void 0===n||n.call(t))}removeController(t){var e;null===(e=this._$Eg)||void 0===e||e.splice(this._$Eg.indexOf(t)>>>0,1)}_$Em(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Et.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,e)=>{wt?t.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((e=>{const n=document.createElement("style"),i=window.litNonce;void 0!==i&&n.setAttribute("nonce",i),n.textContent=e.cssText,t.appendChild(n)}))})(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,n){this._$AK(t,n)}_$ES(t,e,n=zt){var i,a;const r=this.constructor._$Eh(t,n);if(void 0!==r&&!0===n.reflect){const s=(null!==(a=null===(i=n.converter)||void 0===i?void 0:i.toAttribute)&&void 0!==a?a:St.toAttribute)(e,n.type);this._$Ei=t,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$Ei=null}}_$AK(t,e){var n,i,a;const r=this.constructor,s=r._$Eu.get(t);if(void 0!==s&&this._$Ei!==s){const t=r.getPropertyOptions(s),o=t.converter,l=null!==(a=null!==(i=null===(n=o)||void 0===n?void 0:n.fromAttribute)&&void 0!==i?i:"function"==typeof o?o:null)&&void 0!==a?a:St.fromAttribute;this._$Ei=s,this[s]=l(e,t.type),this._$Ei=null}}requestUpdate(t,e,n){let i=!0;void 0!==t&&(((n=n||this.constructor.getPropertyOptions(t)).hasChanged||Ct)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===n.reflect&&this._$Ei!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,n))):i=!1),!this.isUpdatePending&&i&&(this._$Ep=this._$E_())}async _$E_(){this.isUpdatePending=!0;try{await this._$Ep}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Et&&(this._$Et.forEach(((t,e)=>this[e]=t)),this._$Et=void 0);let e=!1;const n=this._$AL;try{e=this.shouldUpdate(n),e?(this.willUpdate(n),null===(t=this._$Eg)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(n)):this._$EU()}catch(t){throw e=!1,this._$EU(),t}e&&this._$AE(n)}willUpdate(t){}_$AE(t){var e;null===(e=this._$Eg)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Ep}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$ES(e,this[e],t))),this._$EC=void 0),this._$EU()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Pt;Ut.finalized=!0,Ut.elementProperties=new Map,Ut.elementStyles=[],Ut.shadowRootOptions={mode:"open"},null==Et||Et({ReactiveElement:Ut}),(null!==(bt=globalThis.reactiveElementVersions)&&void 0!==bt?bt:globalThis.reactiveElementVersions=[]).push("1.3.0");const Mt=globalThis.trustedTypes,Nt=Mt?Mt.createPolicy("lit-html",{createHTML:t=>t}):void 0,Tt=`lit$${(Math.random()+"").slice(9)}$`,Ot="?"+Tt,Ht=`<${Ot}>`,Rt=document,Dt=(t="")=>Rt.createComment(t),jt=t=>null===t||"object"!=typeof t&&"function"!=typeof t,It=Array.isArray,Lt=t=>{var e;return It(t)||"function"==typeof(null===(e=t)||void 0===e?void 0:e[Symbol.iterator])},Ft=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Yt=/-->/g,Xt=/>/g,Bt=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,Wt=/'/g,Vt=/"/g,qt=/^(?:script|style|textarea|title)$/i,Kt=t=>(e,...n)=>({_$litType$:t,strings:e,values:n}),Jt=Kt(1),Zt=Kt(2),Gt=Symbol.for("lit-noChange"),Qt=Symbol.for("lit-nothing"),te=new WeakMap,ee=Rt.createTreeWalker(Rt,129,null,!1),ne=(t,e)=>{const n=t.length-1,i=[];let a,r=2===e?"<svg>":"",s=Ft;for(let e=0;e<n;e++){const n=t[e];let o,l,m=-1,c=0;for(;c<n.length&&(s.lastIndex=c,l=s.exec(n),null!==l);)c=s.lastIndex,s===Ft?"!--"===l[1]?s=Yt:void 0!==l[1]?s=Xt:void 0!==l[2]?(qt.test(l[2])&&(a=RegExp("</"+l[2],"g")),s=Bt):void 0!==l[3]&&(s=Bt):s===Bt?">"===l[0]?(s=null!=a?a:Ft,m=-1):void 0===l[1]?m=-2:(m=s.lastIndex-l[2].length,o=l[1],s=void 0===l[3]?Bt:'"'===l[3]?Vt:Wt):s===Vt||s===Wt?s=Bt:s===Yt||s===Xt?s=Ft:(s=Bt,a=void 0);const h=s===Bt&&t[e+1].startsWith("/>")?" ":"";r+=s===Ft?n+Ht:m>=0?(i.push(o),n.slice(0,m)+"$lit$"+n.slice(m)+Tt+h):n+Tt+(-2===m?(i.push(void 0),e):h)}const o=r+(t[n]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==Nt?Nt.createHTML(o):o,i]};class ie{constructor({strings:t,_$litType$:e},n){let i;this.parts=[];let a=0,r=0;const s=t.length-1,o=this.parts,[l,m]=ne(t,e);if(this.el=ie.createElement(l,n),ee.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(i=ee.nextNode())&&o.length<s;){if(1===i.nodeType){if(i.hasAttributes()){const t=[];for(const e of i.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(Tt)){const n=m[r++];if(t.push(e),void 0!==n){const t=i.getAttribute(n.toLowerCase()+"$lit$").split(Tt),e=/([.?@])?(.*)/.exec(n);o.push({type:1,index:a,name:e[2],strings:t,ctor:"."===e[1]?le:"?"===e[1]?ce:"@"===e[1]?he:oe})}else o.push({type:6,index:a})}for(const e of t)i.removeAttribute(e)}if(qt.test(i.tagName)){const t=i.textContent.split(Tt),e=t.length-1;if(e>0){i.textContent=Mt?Mt.emptyScript:"";for(let n=0;n<e;n++)i.append(t[n],Dt()),ee.nextNode(),o.push({type:2,index:++a});i.append(t[e],Dt())}}}else if(8===i.nodeType)if(i.data===Ot)o.push({type:2,index:a});else{let t=-1;for(;-1!==(t=i.data.indexOf(Tt,t+1));)o.push({type:7,index:a}),t+=Tt.length-1}a++}}static createElement(t,e){const n=Rt.createElement("template");return n.innerHTML=t,n}}function ae(t,e,n=t,i){var a,r,s,o;if(e===Gt)return e;let l=void 0!==i?null===(a=n._$Cl)||void 0===a?void 0:a[i]:n._$Cu;const m=jt(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==m&&(null===(r=null==l?void 0:l._$AO)||void 0===r||r.call(l,!1),void 0===m?l=void 0:(l=new m(t),l._$AT(t,n,i)),void 0!==i?(null!==(s=(o=n)._$Cl)&&void 0!==s?s:o._$Cl=[])[i]=l:n._$Cu=l),void 0!==l&&(e=ae(t,l._$AS(t,e.values),l,i)),e}class re{constructor(t,e){this.v=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}p(t){var e;const{el:{content:n},parts:i}=this._$AD,a=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:Rt).importNode(n,!0);ee.currentNode=a;let r=ee.nextNode(),s=0,o=0,l=i[0];for(;void 0!==l;){if(s===l.index){let e;2===l.type?e=new se(r,r.nextSibling,this,t):1===l.type?e=new l.ctor(r,l.name,l.strings,this,t):6===l.type&&(e=new ue(r,this,t)),this.v.push(e),l=i[++o]}s!==(null==l?void 0:l.index)&&(r=ee.nextNode(),s++)}return a}m(t){let e=0;for(const n of this.v)void 0!==n&&(void 0!==n.strings?(n._$AI(t,n,e),e+=n.strings.length-2):n._$AI(t[e])),e++}}class se{constructor(t,e,n,i){var a;this.type=2,this._$AH=Qt,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=n,this.options=i,this._$Cg=null===(a=null==i?void 0:i.isConnected)||void 0===a||a}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cg}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=ae(this,t,e),jt(t)?t===Qt||null==t||""===t?(this._$AH!==Qt&&this._$AR(),this._$AH=Qt):t!==this._$AH&&t!==Gt&&this.$(t):void 0!==t._$litType$?this.T(t):void 0!==t.nodeType?this.k(t):Lt(t)?this.S(t):this.$(t)}A(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}k(t){this._$AH!==t&&(this._$AR(),this._$AH=this.A(t))}$(t){this._$AH!==Qt&&jt(this._$AH)?this._$AA.nextSibling.data=t:this.k(Rt.createTextNode(t)),this._$AH=t}T(t){var e;const{values:n,_$litType$:i}=t,a="number"==typeof i?this._$AC(t):(void 0===i.el&&(i.el=ie.createElement(i.h,this.options)),i);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===a)this._$AH.m(n);else{const t=new re(a,this),e=t.p(this.options);t.m(n),this.k(e),this._$AH=t}}_$AC(t){let e=te.get(t.strings);return void 0===e&&te.set(t.strings,e=new ie(t)),e}S(t){It(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let n,i=0;for(const a of t)i===e.length?e.push(n=new se(this.A(Dt()),this.A(Dt()),this,this.options)):n=e[i],n._$AI(a),i++;i<e.length&&(this._$AR(n&&n._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cg=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class oe{constructor(t,e,n,i,a){this.type=1,this._$AH=Qt,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=a,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Qt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,n,i){const a=this.strings;let r=!1;if(void 0===a)t=ae(this,t,e,0),r=!jt(t)||t!==this._$AH&&t!==Gt,r&&(this._$AH=t);else{const i=t;let s,o;for(t=a[0],s=0;s<a.length-1;s++)o=ae(this,i[n+s],e,s),o===Gt&&(o=this._$AH[s]),r||(r=!jt(o)||o!==this._$AH[s]),o===Qt?t=Qt:t!==Qt&&(t+=(null!=o?o:"")+a[s+1]),this._$AH[s]=o}r&&!i&&this.C(t)}C(t){t===Qt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class le extends oe{constructor(){super(...arguments),this.type=3}C(t){this.element[this.name]=t===Qt?void 0:t}}const me=Mt?Mt.emptyScript:"";class ce extends oe{constructor(){super(...arguments),this.type=4}C(t){t&&t!==Qt?this.element.setAttribute(this.name,me):this.element.removeAttribute(this.name)}}class he extends oe{constructor(t,e,n,i,a){super(t,e,n,i,a),this.type=5}_$AI(t,e=this){var n;if((t=null!==(n=ae(this,t,e,0))&&void 0!==n?n:Qt)===Gt)return;const i=this._$AH,a=t===Qt&&i!==Qt||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==Qt&&(i===Qt||a);a&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==n?n:this.element,t):this._$AH.handleEvent(t)}}class ue{constructor(t,e,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){ae(this,t)}}const de=window.litHtmlPolyfillSupport;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var pe,fe;null==de||de(ie,se),(null!==(Pt=globalThis.litHtmlVersions)&&void 0!==Pt?Pt:globalThis.litHtmlVersions=[]).push("2.2.0");class ge extends Ut{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var t,e;const n=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=n.firstChild),n}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Dt=((t,e,n)=>{var i,a;const r=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:e;let s=r._$litPart$;if(void 0===s){const t=null!==(a=null==n?void 0:n.renderBefore)&&void 0!==a?a:null;r._$litPart$=s=new se(e.insertBefore(Dt(),t),t,void 0,null!=n?n:{})}return s._$AI(t),s})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Dt)||void 0===t||t.setConnected(!1)}render(){return Gt}}ge.finalized=!0,ge._$litElement$=!0,null===(pe=globalThis.litElementHydrateSupport)||void 0===pe||pe.call(globalThis,{LitElement:ge});const we=globalThis.litElementPolyfillSupport;null==we||we({LitElement:ge});(null!==(fe=globalThis.litElementVersions)&&void 0!==fe?fe:globalThis.litElementVersions=[]).push("3.2.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ve=t=>e=>"function"==typeof e?((t,e)=>(window.customElements.define(t,e),e))(t,e):((t,e)=>{const{kind:n,elements:i}=e;return{kind:n,elements:i,finisher(e){window.customElements.define(t,e)}}})(t,e)
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */,ye=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(n){n.createProperty(e.key,t)}};function xe(t){return(e,n)=>void 0!==n?((t,e,n)=>{e.constructor.createProperty(n,t)})(t,e,n):ye(t,e)}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function $e(t){return xe({...t,state:!0})}
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
var _e;null===(_e=window.HTMLSlotElement)||void 0===_e||_e.prototype.assignedElements;function be(t,e){const n=t.states[e];return null==n?null:n}function ke(t,e){const n=be(t,e);if(null==n)throw new Error(`Unexpected null when trying to get ${e} from Home Assistant object`);return n}function Ae(t){return t.state}function Ee(t,e){return t.config.unit_system[e]}const Se="sun.sun";var Ce;!function(t){t.AboveHorizon="above_horizon",t.BelowHorizon="below_horizon"}(Ce||(Ce={}));var ze=Zt`
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
`,Ue=Zt`
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
`,Pe=Zt`
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
`,Me=Zt`
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
`,Ne=Zt`
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
`,Te=Zt`
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
`,Oe=Zt`
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
`,He=Zt`
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
`,Re=Zt`
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
`,De=Zt`
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
`;const je="weather",Ie="weather-card";var Le;function Fe(t,e){switch(t){case Le.Clear:case Le.Sunny:return e===Ce.BelowHorizon?Ne:Me;case Le.ClearNight:return Ne;case Le.Cloudy:case Le.Fog:case Le.Windy:return ze;case Le.Hail:case Le.SnowyRainy:return He;case Le.Lightning:case Le.LightningRainy:return De;case Le.PartlyCloudy:case Le.WindyVariant:return e===Ce.BelowHorizon?Pe:Ue;case Le.Pouring:return Oe;case Le.Rainy:return Te;case Le.Snowy:return Re}}function Ye(t){return v(t)===je}!function(t){t.Clear="clear",t.ClearNight="clear-night",t.Cloudy="cloudy",t.Exceptional="exceptional",t.Fog="fog",t.Hail="hail",t.Lightning="lightning",t.LightningRainy="lightning-rainy",t.PartlyCloudy="partlycloudy",t.Pouring="pouring",t.Rainy="rainy",t.Snowy="snowy",t.SnowyRainy="snowy-rainy",t.Sunny="sunny",t.Windy="windy",t.WindyVariant="windy-variant"}(Le||(Le={}));var Xe=$t`
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
`,Be=function(t,e,n,i){var a,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(s=(r<3?a(s):r>3?a(e,n,s):a(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s};let We=class extends ge{setConfig(t){this.config=Object.assign({},t)}render(){var t;const e=this.hass,{current:n=!0,entity:i="",forecast:a,hourly_forecast:r,name:s="",number_of_forecasts:o=5}=null!==(t=this.config)&&void 0!==t?t:{},l=Object.keys(e.states).filter(Ye);return Jt`
      <div class="card-config">
        <div>
          <paper-input label="Name" .value="${s}" @value-changed="${this.handleChange("name")}"></paper-input>
          ${customElements.get("ha-entity-picker")?Jt`
                <ha-entity-picker
                  .hass="${e}"
                  .value="${i}"
                  .includeDomains=${[je]}
                  @change="${this.handleChange("entity")}"
                >
                </ha-entity-picker>
              `:Jt`
                <paper-dropdown-menu label="Entity" @value-changed="${this.handleChange("entity")}">
                  <paper-listbox slot="dropdown-content" .selected="${l.indexOf(i)}">
                    ${l.map((t=>Jt` <paper-item>${t}</paper-item> `))}
                  </paper-listbox>
                </paper-dropdown-menu>
              `}
          <div class="switches">
            <div class="switch">
              <ha-switch .checked=${n} @change="${this.handleChange("current")}"></ha-switch
              ><span>Show current</span>
            </div>
            <div class="switch">
              <ha-switch .checked=${a} @change="${this.handleChange("forecast")}"></ha-switch
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
            value=${o}
            @value-changed="${this.handleChange("number_of_forecasts")}"
          ></paper-input>
        </div>
      </div>
    `}handleChange(t){return e=>{var n;const i=this.config;if(null==i||null==this.hass)return;const a=e.target;if(null==a)return;const r=Object.assign({},i),s=null!==(n=a.checked)&&void 0!==n?n:a.value;"string"==typeof s&&""===s?delete r[t]:r[t]=s,_(this,"config-changed",{config:r})}}};We.styles=Xe,Be([$e()],We.prototype,"config",void 0),Be([xe()],We.prototype,"hass",void 0),We=Be([ve("weather-card-editor")],We);var Ve=$t`
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
`,qe=function(t,e,n,i){var a,r=arguments.length,s=r<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,n):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(t,e,n,i);else for(var o=t.length-1;o>=0;o--)(a=t[o])&&(s=(r<3?a(s):r>3?a(e,n,s):a(e,n))||s);return r>3&&s&&Object.defineProperty(e,n,s),s};let Ke=class extends ge{static getStubConfig(t,e,n){var i;return{entity:null!==(i=e.find(Ye))&&void 0!==i?i:n.find(Ye)}}static async getConfigElement(){return document.createElement("weather-card-editor")}setConfig(t){if(!t.entity)throw new Error("Please define a weather entity");this.config=t}shouldUpdate(t){return function(t,e,n){if(e.has("config")||n)return!0;if(t.config.entity){var i=e.get("hass");return!i||i.states[t.config.entity]!==t.hass.states[t.config.entity]}return!1}(this,t,!1)}render(){const t=this.config.entity,e=be(this.hass,t);return null==e?Jt`
        <ha-card>
          <div class="not-found">Entity not available: ${t}</div>
        </ha-card>
      `:Jt`<ha-card class="container" @click=${this.handleClick}>
      ${this.renderCurrent(e)} ${this.renderForecasts(e)}
    </ha-card>`}renderCurrent(t){const e=this.hass,{current:n,name:i}=this.config,{locale:a={language:e.language,number_format:o.system,time_format:l.system},localize:r}=e,{attributes:{humidity:s,temperature:m}}=t,c=Ae(ke(e,Se)),h=Ae(t),u=this.getUnit("temperature");return!1===n?Jt``:Jt`<div class="grid grid-align-center current">
      <div class="flex-no-shrink icon">${Fe(h,c)}</div>
      <div class="flex flex-column flex-justify-center">
        <div class="title">${$(r,t,a,h)}</div>
        <div class="subtitle secondary-text">${null!=i?i:"Home"}</div>
      </div>
      <div class="flex flex-column right-content">
        <div class="flex">
          <span class="temperature">${Math.round(m)}</span>
          <span class="unit">${u}</span>
        </div>
        <div class="flex flex-align-center secondary-text">
          <ha-icon icon="mdi:water-percent"></ha-icon>
          ${s}<span> % </span>
        </div>
      </div>
    </div>`}renderForecasts({attributes:t}){var e,n;const{forecast:i=!1,hourly_forecast:a,number_of_forecasts:r=5}=this.config;if(!i)return Jt``;const s=this.hass,o=null!==(n=null===(e=s.locale)||void 0===e?void 0:e.language)&&void 0!==n?n:s.selectedLanguage,{attributes:{next_dawn:l,next_dusk:m}}=ke(s,Se),c=a?{hour:"2-digit"}:{weekday:"short"},h=t.forecast.slice(0,r).map((({condition:t,datetime:e,temperature:n,templow:i},r)=>{const s=new Date(e);return Jt`<div class="flex flex-column forecast">
          <div>
            ${0!==r||a?s.toLocaleString(o,c).replace(/^0/,"").replace(" ",""):"Today"}
          </div>
          <div class="flex-no-shrink icon-small">
            ${Fe(t,a?s>=new Date(m)&&s<new Date(l)?Ce.BelowHorizon:Ce.AboveHorizon:null)}
          </div>
          <span class="temp-high">${Math.round(n)}°</span>
          ${null!=i?Jt`<span class="temp-low secondary-text">${Math.round(i)}°</span>`:Jt``}
        </div>`}));return Jt` <div class="flex forecasts">${h}</div> `}handleClick(){_(this,"hass-more-info",{entityId:this.config.entity})}getUnit(t){const e=this.hass,n="km"===Ee(e,"length");switch(t){case"air_pressure":return n?"hPa":"inHg";case"precipitation":return n?"mm":"in";case"precipitation_probability":return"%";default:return Ee(e,t)}}};Ke.styles=Ve,qe([$e()],Ke.prototype,"config",void 0),qe([xe()],Ke.prototype,"hass",void 0),Ke=qe([ve(Ie)],Ke),function(t){var e;window.customCards=null!==(e=window.customCards)&&void 0!==e?e:[];const n=window.customCards.findIndex((e=>e.type===t.type));-1===n?window.customCards.push(t):window.customCards[n]=t}({type:Ie,name:"custom-weather-card",description:"A custom weather card with animated SVG icons",preview:!0})})();