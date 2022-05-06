import{d as we,b as D,_ as Re,o as be,c as Oe,a as b,s as ke,e as ae,n as Me,w as Xe,f as We,t as Je,g as oe}from"./index.30034e00.js";const Ve=we({name:"XHandle",props:["XWide"],setup(){let r=D(!1),e=D();return{mouse:r,currentX:e}},mounted(){},methods:{mousedown(r){let e=this.$refs.XHandle;e.style.backgroundColor="#494949";let t=r.clientX;document.onmousemove=s=>{let n=s.clientX,i=this.XWide+(n-t);t=i,this.$emit("modify",i)},document.onmouseup=s=>{e.style.backgroundColor="",document.onmousemove=null,document.onmouseup=null}}}}),ze={ref:"XHandle"};function Ke(r,e,t,s,n,i){return be(),Oe("div",{class:"XHandle",onMousedown:e[0]||(e[0]=a=>r.mousedown(a))},[b("div",ze,null,512)],32)}var Qe=Re(Ve,[["render",Ke]]),Q={exports:{}},Ae=function(e,t){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return e.apply(t,n)}},Ye=Ae,Y=Object.prototype.toString,G=function(r){return function(e){var t=Y.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function _(r){return r=r.toLowerCase(),function(t){return G(t)===r}}function Z(r){return Array.isArray(r)}function F(r){return typeof r=="undefined"}function Ge(r){return r!==null&&!F(r)&&r.constructor!==null&&!F(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}var _e=_("ArrayBuffer");function Ze(r){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&_e(r.buffer),e}function er(r){return typeof r=="string"}function rr(r){return typeof r=="number"}function Ce(r){return r!==null&&typeof r=="object"}function g(r){if(G(r)!=="object")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}var tr=_("Date"),nr=_("File"),sr=_("Blob"),ir=_("FileList");function ee(r){return Y.call(r)==="[object Function]"}function ar(r){return Ce(r)&&ee(r.pipe)}function or(r){var e="[object FormData]";return r&&(typeof FormData=="function"&&r instanceof FormData||Y.call(r)===e||ee(r.toString)&&r.toString()===e)}var ur=_("URLSearchParams");function lr(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function fr(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function re(r,e){if(!(r===null||typeof r=="undefined"))if(typeof r!="object"&&(r=[r]),Z(r))for(var t=0,s=r.length;t<s;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function z(){var r={};function e(n,i){g(r[i])&&g(n)?r[i]=z(r[i],n):g(n)?r[i]=z({},n):Z(n)?r[i]=n.slice():r[i]=n}for(var t=0,s=arguments.length;t<s;t++)re(arguments[t],e);return r}function dr(r,e,t){return re(e,function(n,i){t&&typeof n=="function"?r[i]=Ye(n,t):r[i]=n}),r}function cr(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}function pr(r,e,t,s){r.prototype=Object.create(e.prototype,s),r.prototype.constructor=r,t&&Object.assign(r.prototype,t)}function hr(r,e,t){var s,n,i,a={};e=e||{};do{for(s=Object.getOwnPropertyNames(r),n=s.length;n-- >0;)i=s[n],a[i]||(e[i]=r[i],a[i]=!0);r=Object.getPrototypeOf(r)}while(r&&(!t||t(r,e))&&r!==Object.prototype);return e}function mr(r,e,t){r=String(r),(t===void 0||t>r.length)&&(t=r.length),t-=e.length;var s=r.indexOf(e,t);return s!==-1&&s===t}function vr(r){if(!r)return null;var e=r.length;if(F(e))return null;for(var t=new Array(e);e-- >0;)t[e]=r[e];return t}var Er=function(r){return function(e){return r&&e instanceof r}}(typeof Uint8Array!="undefined"&&Object.getPrototypeOf(Uint8Array)),p={isArray:Z,isArrayBuffer:_e,isBuffer:Ge,isFormData:or,isArrayBufferView:Ze,isString:er,isNumber:rr,isObject:Ce,isPlainObject:g,isUndefined:F,isDate:tr,isFile:nr,isBlob:sr,isFunction:ee,isStream:ar,isURLSearchParams:ur,isStandardBrowserEnv:fr,forEach:re,merge:z,extend:dr,trim:lr,stripBOM:cr,inherits:pr,toFlatObject:hr,kindOf:G,kindOfTest:_,endsWith:mr,toArray:vr,isTypedArray:Er,isFileList:ir},S=p;function ue(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var Se=function(e,t,s){if(!t)return e;var n;if(s)n=s(t);else if(S.isURLSearchParams(t))n=t.toString();else{var i=[];S.forEach(t,function(l,c){l===null||typeof l=="undefined"||(S.isArray(l)?c=c+"[]":l=[l],S.forEach(l,function(f){S.isDate(f)?f=f.toISOString():S.isObject(f)&&(f=JSON.stringify(f)),i.push(ue(c)+"="+ue(f))}))}),n=i.join("&")}if(n){var a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},yr=p;function j(){this.handlers=[]}j.prototype.use=function(e,t,s){return this.handlers.push({fulfilled:e,rejected:t,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1};j.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};j.prototype.forEach=function(e){yr.forEach(this.handlers,function(s){s!==null&&e(s)})};var wr=j,Rr=p,br=function(e,t){Rr.forEach(e,function(n,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[i])})},xe=p;function T(r,e,t,s,n){Error.call(this),this.message=r,this.name="AxiosError",e&&(this.code=e),t&&(this.config=t),s&&(this.request=s),n&&(this.response=n)}xe.inherits(T,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var Te=T.prototype,$e={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(r){$e[r]={value:r}});Object.defineProperties(T,$e);Object.defineProperty(Te,"isAxiosError",{value:!0});T.from=function(r,e,t,s,n,i){var a=Object.create(Te);return xe.toFlatObject(r,a,function(l){return l!==Error.prototype}),T.call(a,r.message,e,t,s,n),a.name=r.name,i&&Object.assign(a,i),a};var P=T,Ne={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},w=p;function Or(r,e){e=e||new FormData;var t=[];function s(i){return i===null?"":w.isDate(i)?i.toISOString():w.isArrayBuffer(i)||w.isTypedArray(i)?typeof Blob=="function"?new Blob([i]):Buffer.from(i):i}function n(i,a){if(w.isPlainObject(i)||w.isArray(i)){if(t.indexOf(i)!==-1)throw Error("Circular reference detected in "+a);t.push(i),w.forEach(i,function(l,c){if(!w.isUndefined(l)){var o=a?a+"."+c:c,f;if(l&&!a&&typeof l=="object"){if(w.endsWith(c,"{}"))l=JSON.stringify(l);else if(w.endsWith(c,"[]")&&(f=w.toArray(l))){f.forEach(function(v){!w.isUndefined(v)&&e.append(o,s(v))});return}}n(l,o)}}),t.pop()}else e.append(a,s(i))}return n(r),e}var Pe=Or,X=P,Ar=function(e,t,s){var n=s.config.validateStatus;!s.status||!n||n(s.status)?e(s):t(new X("Request failed with status code "+s.status,[X.ERR_BAD_REQUEST,X.ERR_BAD_RESPONSE][Math.floor(s.status/100)-4],s.config,s.request,s))},B=p,_r=B.isStandardBrowserEnv()?function(){return{write:function(t,s,n,i,a,u){var l=[];l.push(t+"="+encodeURIComponent(s)),B.isNumber(n)&&l.push("expires="+new Date(n).toGMTString()),B.isString(i)&&l.push("path="+i),B.isString(a)&&l.push("domain="+a),u===!0&&l.push("secure"),document.cookie=l.join("; ")},read:function(t){var s=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return s?decodeURIComponent(s[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),Cr=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},Sr=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},xr=Cr,Tr=Sr,Ue=function(e,t){return e&&!xr(t)?Tr(e,t):t},W=p,$r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],Nr=function(e){var t={},s,n,i;return e&&W.forEach(e.split(`
`),function(u){if(i=u.indexOf(":"),s=W.trim(u.substr(0,i)).toLowerCase(),n=W.trim(u.substr(i+1)),s){if(t[s]&&$r.indexOf(s)>=0)return;s==="set-cookie"?t[s]=(t[s]?t[s]:[]).concat([n]):t[s]=t[s]?t[s]+", "+n:n}}),t},le=p,Pr=le.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a"),s;function n(i){var a=i;return e&&(t.setAttribute("href",a),a=t.href),t.setAttribute("href",a),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:t.pathname.charAt(0)==="/"?t.pathname:"/"+t.pathname}}return s=n(window.location.href),function(a){var u=le.isString(a)?n(a):a;return u.protocol===s.protocol&&u.host===s.host}}():function(){return function(){return!0}}(),K=P,Ur=p;function De(r){K.call(this,r==null?"canceled":r,K.ERR_CANCELED),this.name="CanceledError"}Ur.inherits(De,K,{__CANCEL__:!0});var q=De,Dr=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""},U=p,Br=Ar,gr=_r,Lr=Se,Fr=Ue,jr=Nr,qr=Pr,Ir=Ne,R=P,Hr=q,kr=Dr,fe=function(e){return new Promise(function(s,n){var i=e.data,a=e.headers,u=e.responseType,l;function c(){e.cancelToken&&e.cancelToken.unsubscribe(l),e.signal&&e.signal.removeEventListener("abort",l)}U.isFormData(i)&&U.isStandardBrowserEnv()&&delete a["Content-Type"];var o=new XMLHttpRequest;if(e.auth){var f=e.auth.username||"",v=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";a.Authorization="Basic "+btoa(f+":"+v)}var h=Fr(e.baseURL,e.url);o.open(e.method.toUpperCase(),Lr(h,e.params,e.paramsSerializer),!0),o.timeout=e.timeout;function se(){if(!!o){var y="getAllResponseHeaders"in o?jr(o.getAllResponseHeaders()):null,C=!u||u==="text"||u==="json"?o.responseText:o.response,A={data:C,status:o.status,statusText:o.statusText,headers:y,config:e,request:o};Br(function(M){s(M),c()},function(M){n(M),c()},A),o=null}}if("onloadend"in o?o.onloadend=se:o.onreadystatechange=function(){!o||o.readyState!==4||o.status===0&&!(o.responseURL&&o.responseURL.indexOf("file:")===0)||setTimeout(se)},o.onabort=function(){!o||(n(new R("Request aborted",R.ECONNABORTED,e,o)),o=null)},o.onerror=function(){n(new R("Network Error",R.ERR_NETWORK,e,o,o)),o=null},o.ontimeout=function(){var C=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",A=e.transitional||Ir;e.timeoutErrorMessage&&(C=e.timeoutErrorMessage),n(new R(C,A.clarifyTimeoutError?R.ETIMEDOUT:R.ECONNABORTED,e,o)),o=null},U.isStandardBrowserEnv()){var ie=(e.withCredentials||qr(h))&&e.xsrfCookieName?gr.read(e.xsrfCookieName):void 0;ie&&(a[e.xsrfHeaderName]=ie)}"setRequestHeader"in o&&U.forEach(a,function(C,A){typeof i=="undefined"&&A.toLowerCase()==="content-type"?delete a[A]:o.setRequestHeader(A,C)}),U.isUndefined(e.withCredentials)||(o.withCredentials=!!e.withCredentials),u&&u!=="json"&&(o.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&o.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&o.upload&&o.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(l=function(y){!o||(n(!y||y&&y.type?new Hr:y),o.abort(),o=null)},e.cancelToken&&e.cancelToken.subscribe(l),e.signal&&(e.signal.aborted?l():e.signal.addEventListener("abort",l))),i||(i=null);var k=kr(h);if(k&&["http","https","file"].indexOf(k)===-1){n(new R("Unsupported protocol "+k+":",R.ERR_BAD_REQUEST,e));return}o.send(i)})},Mr=null,d=p,de=br,ce=P,Xr=Ne,Wr=Pe,Jr={"Content-Type":"application/x-www-form-urlencoded"};function pe(r,e){!d.isUndefined(r)&&d.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function Vr(){var r;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(r=fe),r}function zr(r,e,t){if(d.isString(r))try{return(e||JSON.parse)(r),d.trim(r)}catch(s){if(s.name!=="SyntaxError")throw s}return(t||JSON.stringify)(r)}var I={transitional:Xr,adapter:Vr(),transformRequest:[function(e,t){if(de(t,"Accept"),de(t,"Content-Type"),d.isFormData(e)||d.isArrayBuffer(e)||d.isBuffer(e)||d.isStream(e)||d.isFile(e)||d.isBlob(e))return e;if(d.isArrayBufferView(e))return e.buffer;if(d.isURLSearchParams(e))return pe(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var s=d.isObject(e),n=t&&t["Content-Type"],i;if((i=d.isFileList(e))||s&&n==="multipart/form-data"){var a=this.env&&this.env.FormData;return Wr(i?{"files[]":e}:e,a&&new a)}else if(s||n==="application/json")return pe(t,"application/json"),zr(e);return e}],transformResponse:[function(e){var t=this.transitional||I.transitional,s=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,i=!s&&this.responseType==="json";if(i||n&&d.isString(e)&&e.length)try{return JSON.parse(e)}catch(a){if(i)throw a.name==="SyntaxError"?ce.from(a,ce.ERR_BAD_RESPONSE,this,null,this.response):a}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Mr},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};d.forEach(["delete","get","head"],function(e){I.headers[e]={}});d.forEach(["post","put","patch"],function(e){I.headers[e]=d.merge(Jr)});var te=I,Kr=p,Qr=te,Yr=function(e,t,s){var n=this||Qr;return Kr.forEach(s,function(a){e=a.call(n,e,t)}),e},Be=function(e){return!!(e&&e.__CANCEL__)},he=p,J=Yr,Gr=Be,Zr=te,et=q;function V(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new et}var rt=function(e){V(e),e.headers=e.headers||{},e.data=J.call(e,e.data,e.headers,e.transformRequest),e.headers=he.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),he.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||Zr.adapter;return t(e).then(function(n){return V(e),n.data=J.call(e,n.data,n.headers,e.transformResponse),n},function(n){return Gr(n)||(V(e),n&&n.response&&(n.response.data=J.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},E=p,ge=function(e,t){t=t||{};var s={};function n(o,f){return E.isPlainObject(o)&&E.isPlainObject(f)?E.merge(o,f):E.isPlainObject(f)?E.merge({},f):E.isArray(f)?f.slice():f}function i(o){if(E.isUndefined(t[o])){if(!E.isUndefined(e[o]))return n(void 0,e[o])}else return n(e[o],t[o])}function a(o){if(!E.isUndefined(t[o]))return n(void 0,t[o])}function u(o){if(E.isUndefined(t[o])){if(!E.isUndefined(e[o]))return n(void 0,e[o])}else return n(void 0,t[o])}function l(o){if(o in t)return n(e[o],t[o]);if(o in e)return n(void 0,e[o])}var c={url:a,method:a,data:a,baseURL:u,transformRequest:u,transformResponse:u,paramsSerializer:u,timeout:u,timeoutMessage:u,withCredentials:u,adapter:u,responseType:u,xsrfCookieName:u,xsrfHeaderName:u,onUploadProgress:u,onDownloadProgress:u,decompress:u,maxContentLength:u,maxBodyLength:u,beforeRedirect:u,transport:u,httpAgent:u,httpsAgent:u,cancelToken:u,socketPath:u,responseEncoding:u,validateStatus:l};return E.forEach(Object.keys(e).concat(Object.keys(t)),function(f){var v=c[f]||i,h=v(f);E.isUndefined(h)&&v!==l||(s[f]=h)}),s},Le={version:"0.27.2"},tt=Le.version,O=P,ne={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){ne[r]=function(s){return typeof s===r||"a"+(e<1?"n ":" ")+r}});var me={};ne.transitional=function(e,t,s){function n(i,a){return"[Axios v"+tt+"] Transitional option '"+i+"'"+a+(s?". "+s:"")}return function(i,a,u){if(e===!1)throw new O(n(a," has been removed"+(t?" in "+t:"")),O.ERR_DEPRECATED);return t&&!me[a]&&(me[a]=!0,console.warn(n(a," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(i,a,u):!0}};function nt(r,e,t){if(typeof r!="object")throw new O("options must be an object",O.ERR_BAD_OPTION_VALUE);for(var s=Object.keys(r),n=s.length;n-- >0;){var i=s[n],a=e[i];if(a){var u=r[i],l=u===void 0||a(u,i,r);if(l!==!0)throw new O("option "+i+" must be "+l,O.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new O("Unknown option "+i,O.ERR_BAD_OPTION)}}var st={assertOptions:nt,validators:ne},Fe=p,it=Se,ve=wr,Ee=rt,H=ge,at=Ue,je=st,x=je.validators;function $(r){this.defaults=r,this.interceptors={request:new ve,response:new ve}}$.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=H(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var s=t.transitional;s!==void 0&&je.assertOptions(s,{silentJSONParsing:x.transitional(x.boolean),forcedJSONParsing:x.transitional(x.boolean),clarifyTimeoutError:x.transitional(x.boolean)},!1);var n=[],i=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(t)===!1||(i=i&&h.synchronous,n.unshift(h.fulfilled,h.rejected))});var a=[];this.interceptors.response.forEach(function(h){a.push(h.fulfilled,h.rejected)});var u;if(!i){var l=[Ee,void 0];for(Array.prototype.unshift.apply(l,n),l=l.concat(a),u=Promise.resolve(t);l.length;)u=u.then(l.shift(),l.shift());return u}for(var c=t;n.length;){var o=n.shift(),f=n.shift();try{c=o(c)}catch(v){f(v);break}}try{u=Ee(c)}catch(v){return Promise.reject(v)}for(;a.length;)u=u.then(a.shift(),a.shift());return u};$.prototype.getUri=function(e){e=H(this.defaults,e);var t=at(e.baseURL,e.url);return it(t,e.params,e.paramsSerializer)};Fe.forEach(["delete","get","head","options"],function(e){$.prototype[e]=function(t,s){return this.request(H(s||{},{method:e,url:t,data:(s||{}).data}))}});Fe.forEach(["post","put","patch"],function(e){function t(s){return function(i,a,u){return this.request(H(u||{},{method:e,headers:s?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}$.prototype[e]=t(),$.prototype[e+"Form"]=t(!0)});var ot=$,ut=q;function N(r){if(typeof r!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(n){e=n});var t=this;this.promise.then(function(s){if(!!t._listeners){var n,i=t._listeners.length;for(n=0;n<i;n++)t._listeners[n](s);t._listeners=null}}),this.promise.then=function(s){var n,i=new Promise(function(a){t.subscribe(a),n=a}).then(s);return i.cancel=function(){t.unsubscribe(n)},i},r(function(n){t.reason||(t.reason=new ut(n),e(t.reason))})}N.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};N.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};N.prototype.unsubscribe=function(e){if(!!this._listeners){var t=this._listeners.indexOf(e);t!==-1&&this._listeners.splice(t,1)}};N.source=function(){var e,t=new N(function(n){e=n});return{token:t,cancel:e}};var lt=N,ft=function(e){return function(s){return e.apply(null,s)}},dt=p,ct=function(e){return dt.isObject(e)&&e.isAxiosError===!0},ye=p,pt=Ae,L=ot,ht=ge,mt=te;function qe(r){var e=new L(r),t=pt(L.prototype.request,e);return ye.extend(t,L.prototype,e),ye.extend(t,e),t.create=function(n){return qe(ht(r,n))},t}var m=qe(mt);m.Axios=L;m.CanceledError=q;m.CancelToken=lt;m.isCancel=Be;m.VERSION=Le.version;m.toFormData=Pe;m.AxiosError=P;m.Cancel=m.CanceledError;m.all=function(e){return Promise.all(e)};m.spread=ft;m.isAxiosError=ct;Q.exports=m;Q.exports.default=m;var vt=Q.exports;function Et(r){return r.interceptors.request.use(e=>{return e.url,e.headers={"Content-Type":"application/json"},e;return e.headers={Token:"test","Content-Type":"application/json"},e},e=>Promise.reject(()=>{})),r.interceptors.response.use(e=>{const{data:t}=e;return console.log(t),t.code!==2e4?!1:(window.$result.show(t),t)},e=>Promise.reject(e.response)),r}const Ie=vt.create({baseURL:"http://localhost:5214",headers:{"Content-Type":"application/json"},timeout:100*1e3});Et(Ie);const yt=we({name:"index",components:{XHandle:Qe,JsonViewer:ke},setup(){let r=D("/v1/sys/getSysInfo"),e=D({}),t=D(230);return{inUrl:r,output:e,XWide:t}},mounted(){},methods:{res(){Ie.get(this.inUrl).then(r=>{console.log(r),this.output=r.data,window.$ipc.send("windows",{title:"\u4EFB\u52A1\u7BA1\u7406\u5668",name:"hover",width:600,height:500,alwaysOnTop:!0})})}}}),wt={class:"request"},Rt={class:"request-content"},bt={class:"urlInput"},Ot={class:"url"},At={class:"result"};function _t(r,e,t,s,n,i){const a=oe("XHandle"),u=oe("JsonViewer");return be(),Oe("div",wt,[b("div",{class:"request-list",style:Me({width:r.XWide+"px"})},[ae(a,{XWide:r.XWide,onModify:e[0]||(e[0]=l=>{this.XWide=l})},null,8,["XWide"])],4),b("div",Rt,[b("div",bt,[Xe(b("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=l=>r.inUrl=l)},null,512),[[We,r.inUrl]]),b("button",{onClick:e[2]||(e[2]=(...l)=>r.res&&r.res(...l))},"\u8BF7\u6C42"),b("div",Ot,"\u8BF7\u6C42\u5730\u5740\uFF1A"+Je(r.inUrl),1)]),b("div",At,[ae(u,{value:r.output,copyable:"",boxed:"",sort:"",theme:"light"},null,8,["value"])])])])}var St=Re(yt,[["render",_t]]);export{St as default};