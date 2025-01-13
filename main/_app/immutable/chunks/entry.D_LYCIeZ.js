import{o as ve}from"./index-client.DG6sJu1z.js";import{v as H,aH as yt,d as wt,R as L,g as T,K as x,ax as vt}from"./runtime.D3z8aTw2.js";import{s as He}from"./utils.DGwB4lI4.js";new URL("sveltekit-internal://");function bt(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function At(e){return e.split("%25").map(decodeURI).join("%25")}function kt(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function me({href:e}){return e.split("#")[0]}function St(e,t,n,r=!1){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return l=>(n(l),i[o](l));t();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return t(),e[i]},enumerable:!0,configurable:!0});return a}const Et="/__data.json",Rt=".html__data.json";function It(e){return e.endsWith(".html")?e.replace(/\.html$/,Rt):e.replace(/\/$/,"")+Et}function Ut(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)t=t*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function Lt(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}const Ke=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:t?.method||"GET")!=="GET"&&K.delete(Se(e)),Ke(e,t));const K=new Map;function Tt(e,t){const n=Se(e,t),r=document.querySelector(n);if(r?.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&K.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Lt(a)),Promise.resolve(new Response(a,s))}return window.fetch(e,t)}function xt(e,t,n){if(K.size>0){const r=Se(e,n),a=K.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n?.cache))return new Response(a.body,a.init);K.delete(r)}}return window.fetch(t,n)}function Se(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t?.headers||t?.body){const a=[];t.headers&&a.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&a.push(t.body),r+=`[data-hash="${Ut(...a)}"]`}return r}const Pt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Nt(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Ct(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return t.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return _e(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return _e(String.fromCharCode(...c.slice(2).split("-").map(p=>parseInt(p,16))));const d=Pt.exec(c),[,g,f,u,h]=d;return t.push({name:u,matcher:h,optional:!!g,rest:!!f,chained:f?l===1&&i[0]==="":!1}),f?"(.*?)":g?"([^/]*)?":"([^/]+?)"}return _e(c)}).join("")}).join("")}/?$`),params:t}}function Ot(e){return!/^\([^)]+\)$/.test(e)}function Ct(e){return e.slice(1).split("/").filter(Ot)}function jt(e,t,n){const r={},a=e.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<t.length;o+=1){const c=t[o];let l=a[o-i];if(c.chained&&c.rest&&i&&(l=a.slice(o-i,o+1).filter(d=>d).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const d=t[o+1],g=a[o+1];d&&!d.rest&&d.optional&&g&&c.chained&&(i=0),!d&&!g&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function _e(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function $t({nodes:e,server_loads:t,dictionary:n,matchers:r}){const a=new Set(t);return Object.entries(n).map(([o,[c,l,d]])=>{const{pattern:g,params:f}=Nt(o),u={id:o,exec:h=>{const p=g.exec(h);if(p)return jt(p,f,r)},errors:[1,...d||[]].map(h=>e[h]),layouts:[0,...l||[]].map(i),leaf:s(c)};return u.errors.length=u.layouts.length=Math.max(u.errors.length,u.layouts.length),u});function s(o){const c=o<0;return c&&(o=~o),[c,e[o]]}function i(o){return o===void 0?o:[a.has(o),e[o]]}}function We(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function je(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}const D=[];function Dt(e,t){return{subscribe:le(e,t).subscribe}}function le(e,t=H){let n=null;const r=new Set;function a(o){if(yt(e,o)&&(e=o,n)){const c=!D.length;for(const l of r)l[1](),D.push(l,e);if(c){for(let l=0;l<D.length;l+=2)D[l][0](D[l+1]);D.length=0}}}function s(o){a(o(e))}function i(o,c=H){const l=[o,c];return r.add(l),r.size===1&&(n=t(a,s)||H),o(e),()=>{r.delete(l),r.size===0&&n&&(n(),n=null)}}return{set:a,update:s,subscribe:i}}function vn(e,t,n){const r=!Array.isArray(e),a=r?[e]:e;if(!a.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const s=t.length<2;return Dt(n,(i,o)=>{let c=!1;const l=[];let d=0,g=H;const f=()=>{if(d)return;g();const h=t(r?l[0]:l,i,o);s?i(h):g=typeof h=="function"?h:H},u=a.map((h,p)=>He(h,A=>{l[p]=A,d&=~(1<<p),c&&f()},()=>{d|=1<<p}));return c=!0,f(),function(){wt(u),g(),c=!1}})}function bn(e){let t;return He(e,n=>t=n)(),t}const U=globalThis.__sveltekit_18sjhis?.base??"",Bt=globalThis.__sveltekit_18sjhis?.assets??U,Ft="72c66f3ef2b0d38bd4545fb6166b18d50850f846",Ye="sveltekit:snapshot",ze="sveltekit:scroll",Je="sveltekit:states",Vt="sveltekit:pageurl",F="sveltekit:history",Y="sveltekit:navigation",ee={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},Z=location.origin;function Xe(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function Ee(){return{x:pageXOffset,y:pageYOffset}}function B(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const $e={...ee,"":ee.hover};function Ze(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function Qe(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Ze(e)}}function be(e,t,n){let r;try{r=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,s=!r||!!a||ue(r,t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=r?.origin===Z&&e.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function te(e){let t=null,n=null,r=null,a=null,s=null,i=null,o=e;for(;o&&o!==document.documentElement;)r===null&&(r=B(o,"preload-code")),a===null&&(a=B(o,"preload-data")),t===null&&(t=B(o,"keepfocus")),n===null&&(n=B(o,"noscroll")),s===null&&(s=B(o,"reload")),i===null&&(i=B(o,"replacestate")),o=Ze(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:$e[r??"off"],preload_data:$e[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(s),replace_state:c(i)}}function De(e){const t=le(e);let n=!0;function r(){n=!0,t.update(i=>i)}function a(i){n=!1,t.set(i)}function s(i){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const et={v:()=>{}};function qt(){const{set:e,subscribe:t}=le(!1),n=3e4;let r;async function a(){clearTimeout(r),r=setTimeout(a,n);try{const s=await fetch(`${Bt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!s.ok)return!1;const o=(await s.json()).version!==Ft;return o&&(e(!0),et.v(),clearTimeout(r)),o}catch{return!1}}return r=setTimeout(a,n),{subscribe:t,check:a}}function ue(e,t,n){return e.origin!==Z||!e.pathname.startsWith(t)?!0:n?!(e.pathname===t+"/"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===t):!1}function Be(e){const t=Mt(e),n=new ArrayBuffer(t.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,t.charCodeAt(a));return n}const Gt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function Mt(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,r=0;for(let a=0;a<e.length;a++)n<<=6,n|=Gt.indexOf(e[a]),r+=6,r===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,t+=String.fromCharCode(n)):r===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const Ht=-1,Kt=-2,Wt=-3,Yt=-4,zt=-5,Jt=-6;function Xt(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function a(s,i=!1){if(s===Ht)return;if(s===Wt)return NaN;if(s===Yt)return 1/0;if(s===zt)return-1/0;if(s===Jt)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=t?.[c];if(l)return r[s]=l(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const d=new Set;r[s]=d;for(let u=1;u<o.length;u+=1)d.add(a(o[u]));break;case"Map":const g=new Map;r[s]=g;for(let u=1;u<o.length;u+=2)g.set(a(o[u]),a(o[u+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const f=Object.create(null);r[s]=f;for(let u=1;u<o.length;u+=2)f[o[u]]=a(o[u+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const u=globalThis[c],h=o[1],p=Be(h),A=new u(p);r[s]=A;break}case"ArrayBuffer":{const u=o[1],h=Be(u);r[s]=h;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let l=0;l<o.length;l+=1){const d=o[l];d!==Kt&&(c[l]=a(d))}}else{const c={};r[s]=c;for(const l in o){const d=o[l];c[l]=a(d)}}return r[s]}return a(0)}const tt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...tt];const Zt=new Set([...tt]);[...Zt];function Qt(e){return e.filter(t=>t!=null)}class fe{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class nt{constructor(t,n){this.status=t,this.location=n}}class Re extends Error{constructor(t,n,r){super(r),this.status=t,this.text=n}}const en="x-sveltekit-invalidated",tn="x-sveltekit-trailing-slash";function ne(e){return e instanceof fe||e instanceof Re?e.status:500}function nn(e){return e instanceof Re?e.text:"Internal Error"}let w,z,ye;const rn=ve.toString().includes("$$")||/function \w+\(\) \{\}/.test(ve.toString());rn?(w={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},z={current:null},ye={current:!1}):(w=new class{#e=L({});get data(){return T(this.#e)}set data(t){x(this.#e,t)}#t=L(null);get form(){return T(this.#t)}set form(t){x(this.#t,t)}#n=L(null);get error(){return T(this.#n)}set error(t){x(this.#n,t)}#r=L({});get params(){return T(this.#r)}set params(t){x(this.#r,t)}#a=L({id:null});get route(){return T(this.#a)}set route(t){x(this.#a,t)}#o=L({});get state(){return T(this.#o)}set state(t){x(this.#o,t)}#s=L(-1);get status(){return T(this.#s)}set status(t){x(this.#s,t)}#i=L(new URL("https://example.com"));get url(){return T(this.#i)}set url(t){x(this.#i,t)}},z=new class{#e=L(null);get current(){return T(this.#e)}set current(t){x(this.#e,t)}},ye=new class{#e=L(!1);get current(){return T(this.#e)}set current(t){x(this.#e,t)}},et.v=()=>ye.current=!0);function an(e){Object.assign(w,e)}const on=new Set(["icon","shortcut icon","apple-touch-icon"]),$=We(ze)??{},J=We(Ye)??{},C={url:De({}),page:De({}),navigating:le(null),updated:qt()};function Ie(e){$[e]=Ee()}function sn(e,t){let n=e+1;for(;$[n];)delete $[n],n+=1;for(n=t+1;J[n];)delete J[n],n+=1}function q(e){return location.href=e.href,new Promise(()=>{})}async function rt(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(U||"/");e&&await e.update()}}function Fe(){}let de,Ae,re,N,ke,b;const at=[],ae=[];let O=null;const Ue=[],ot=[];let j=[],_={branch:[],error:null,url:null},Le=!1,oe=!1,Ve=!0,X=!1,G=!1,st=!1,Te=!1,xe,k,I,se;const W=new Set;async function En(e,t,n){document.URL!==location.href&&(location.href=location.href),b=e,await e.hooks.init?.(),de=$t(e),N=document.documentElement,ke=t,Ae=e.nodes[0],re=e.nodes[1],Ae(),re(),k=history.state?.[F],I=history.state?.[Y],k||(k=I=Date.now(),history.replaceState({...history.state,[F]:k,[Y]:I},""));const r=$[k];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await gn(ke,n):hn(location.href,{replaceState:!0}),pn()}function cn(){at.length=0,Te=!1}function it(e){ae.some(t=>t?.snapshot)&&(J[e]=ae.map(t=>t?.snapshot?.capture()))}function ct(e){J[e]?.forEach((t,n)=>{ae[n]?.snapshot?.restore(t)})}function qe(){Ie(k),je(ze,$),it(I),je(Ye,J)}async function lt(e,t,n,r){return M({type:"goto",url:Xe(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(Te=!0)}})}async function ln(e){if(e.id!==O?.id){const t={};W.add(t),O={id:e.id,token:t,promise:ft({...e,preload:t}).then(n=>(W.delete(t),n.type==="loaded"&&n.state.error&&(O=null),n))}}return O.promise}async function we(e){const t=de.find(n=>n.exec(dt(e)));t&&await Promise.all([...t.layouts,t.leaf].map(n=>n?.[1]()))}function ut(e,t,n){_=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(w,e.props.page),xe=new b.root({target:t,props:{...e.props,stores:C,components:ae},hydrate:n,sync:!1}),ct(I);const a={from:null,to:{params:_.params,route:{id:_.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};j.forEach(s=>s(a)),oe=!0}function ie({url:e,params:t,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(U&&(e.pathname===U||e.pathname===U+"/"))o="always";else for(const u of n)u?.slash!==void 0&&(o=u.slash);e.pathname=bt(e.pathname,o),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:a,route:s},props:{constructors:Qt(n).map(u=>u.node.component),page:w}};i!==void 0&&(c.props.form=i);let l={},d=!w,g=0;for(let u=0;u<Math.max(n.length,_.branch.length);u+=1){const h=n[u],p=_.branch[u];h?.data!==p?.data&&(d=!0),h&&(l={...l,...h.data},d&&(c.props[`data_${g}`]=l),g+=1)}return(!_.url||e.href!==_.url.href||_.error!==a||i!==void 0&&i!==w.form||d)&&(c.props.page={error:a,params:t,route:{id:s?.id??null},state:{},status:r,url:new URL(e),form:i??null,data:d?l:w.data}),c}async function Pe({loader:e,parent:t,url:n,params:r,route:a,server_data_node:s}){let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if(l.universal?.load){let d=function(...f){for(const u of f){const{href:h}=new URL(u,n);c.dependencies.add(h)}};const g={route:new Proxy(a,{get:(f,u)=>(o&&(c.route=!0),f[u])}),params:new Proxy(r,{get:(f,u)=>(o&&c.params.add(u),f[u])}),data:s?.data??null,url:St(n,()=>{o&&(c.url=!0)},f=>{o&&c.search_params.add(f)},b.hash),async fetch(f,u){let h;f instanceof Request?(h=f.url,u={body:f.method==="GET"||f.method==="HEAD"?void 0:await f.blob(),cache:f.cache,credentials:f.credentials,headers:[...f.headers].length?f.headers:void 0,integrity:f.integrity,keepalive:f.keepalive,method:f.method,mode:f.mode,redirect:f.redirect,referrer:f.referrer,referrerPolicy:f.referrerPolicy,signal:f.signal,...u}):h=f;const p=new URL(h,n);return o&&d(p.href),p.origin===n.origin&&(h=p.href.slice(n.origin.length)),oe?xt(h,p.href,u):Tt(h,u)},setHeaders:()=>{},depends:d,parent(){return o&&(c.parent=!0),t()},untrack(f){o=!1;try{return f()}finally{o=!0}}};i=await l.universal.load.call(null,g)??null}return{node:l,loader:e,server:s,universal:l.universal?.load?{type:"data",data:i,uses:c}:null,data:i??s?.data??null,slash:l.universal?.trailingSlash??s?.slash}}function Ge(e,t,n,r,a,s){if(Te)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==_.params[i])return!0;for(const i of a.dependencies)if(at.some(o=>o(new URL(i))))return!0;return!1}function Ne(e,t){return e?.type==="data"?e:e?.type==="skip"?t??null:null}function un(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const a=e.searchParams.getAll(r),s=t.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function Me({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:w,constructors:[]}}}async function ft({id:e,invalidating:t,url:n,params:r,route:a,preload:s}){if(O?.id===e)return W.delete(O.token),O.promise;const{errors:i,layouts:o,leaf:c}=a,l=[...o,c];i.forEach(m=>m?.().catch(()=>{})),l.forEach(m=>m?.[1]().catch(()=>{}));let d=null;const g=_.url?e!==ce(_.url):!1,f=_.route?a.id!==_.route.id:!1,u=un(_.url,n);let h=!1;const p=l.map((m,y)=>{const R=_.branch[y],S=!!m?.[0]&&(R?.loader!==m[1]||Ge(h,f,g,u,R.server?.uses,r));return S&&(h=!0),S});if(p.some(Boolean)){try{d=await gt(n,p)}catch(m){const y=await V(m,{url:n,params:r,route:{id:e}});return W.has(s)?Me({error:y,url:n,params:r,route:a}):he({status:ne(m),error:y,url:n,route:a})}if(d.type==="redirect")return d}const A=d?.nodes;let E=!1;const P=l.map(async(m,y)=>{if(!m)return;const R=_.branch[y],S=A?.[y];if((!S||S.type==="skip")&&m[1]===R?.loader&&!Ge(E,f,g,u,R.universal?.uses,r))return R;if(E=!0,S?.type==="error")throw S;return Pe({loader:m[1],url:n,params:r,route:a,parent:async()=>{const pe={};for(let ge=0;ge<y;ge+=1)Object.assign(pe,(await P[ge])?.data);return pe},server_data_node:Ne(S===void 0&&m[0]?{type:"skip"}:S??null,m[0]?R?.server:void 0)})});for(const m of P)m.catch(()=>{});const v=[];for(let m=0;m<l.length;m+=1)if(l[m])try{v.push(await P[m])}catch(y){if(y instanceof nt)return{type:"redirect",location:y.location};if(W.has(s))return Me({error:await V(y,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let R=ne(y),S;if(A?.includes(y))R=y.status??R,S=y.error;else if(y instanceof fe)S=y.body;else{if(await C.updated.check())return await rt(),await q(n);S=await V(y,{params:r,url:n,route:{id:a.id}})}const Q=await fn(m,v,i);return Q?ie({url:n,params:r,branch:v.slice(0,Q.idx).concat(Q.node),status:R,error:S,route:a}):await pt(n,{id:a.id},S,R)}else v.push(void 0);return ie({url:n,params:r,branch:v,status:200,error:null,route:a,form:t?void 0:null})}async function fn(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function he({status:e,error:t,url:n,route:r}){const a={};let s=null;if(b.server_loads[0]===0)try{const l=await gt(n,[!0]);if(l.type!=="data"||l.nodes[0]&&l.nodes[0].type!=="data")throw 0;s=l.nodes[0]??null}catch{(n.origin!==Z||n.pathname!==location.pathname||Le)&&await q(n)}const o=await Pe({loader:Ae,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Ne(s)}),c={node:await re(),loader:re,universal:null,server:null,data:null};return ie({url:n,params:a,branch:[o,c],status:e,error:t,route:null})}function Oe(e,t){if(!e||ue(e,U,b.hash))return;let n;try{if(n=b.hooks.reroute({url:new URL(e)})??e,typeof n=="string"){const a=new URL(e);b.hash?a.hash=n:a.pathname=n,n=a}}catch{return}const r=dt(n);for(const a of de){const s=a.exec(r);if(s)return{id:ce(e),invalidating:t,route:a,params:kt(s),url:e}}}function dt(e){return At(b.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(U.length))||"/"}function ce(e){return(b.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function ht({url:e,type:t,intent:n,delta:r}){let a=!1;const s=_t(_,n,e,t);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return X||Ue.forEach(o=>o(i)),a?null:s}async function M({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=Fe,block:d=Fe}){const g=Oe(t,!1),f=ht({url:t,type:e,delta:n?.delta,intent:g});if(!f){d();return}const u=k,h=I;l(),X=!0,oe&&C.navigating.set(z.current=f.navigation),se=c;let p=g&&await ft(g);if(!p){if(ue(t,U,b.hash))return await q(t);p=await pt(t,{id:null},await V(new Re(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=g?.url||t,se!==c)return f.reject(new Error("navigation aborted")),!1;if(p.type==="redirect")if(o>=20)p=await he({status:500,error:await V(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return lt(new URL(p.location,t).href,{},o+1,c),!1;else p.props.page.status>=400&&await C.updated.check()&&(await rt(),await q(t));if(cn(),Ie(u),it(h),p.props.page.url.pathname!==t.pathname&&(t.pathname=p.props.page.url.pathname),i=n?n.state:i,!n){const v=s?0:1,m={[F]:k+=v,[Y]:I+=v,[Je]:i};(s?history.replaceState:history.pushState).call(history,m,"",t),s||sn(k,I)}if(O=null,p.props.page.state=i,oe){_=p.state,p.props.page&&(p.props.page.url=t);const v=(await Promise.all(ot.map(m=>m(f.navigation)))).filter(m=>typeof m=="function");if(v.length>0){let m=function(){j=j.filter(y=>!v.includes(y))};v.push(m),j.push(...v)}xe.$set(p.props),an(p.props.page),st=!0}else ut(p,ke,!1);const{activeElement:A}=document;await vt();const E=n?n.scroll:a?Ee():null;if(Ve){const v=t.hash&&document.getElementById(decodeURIComponent(b.hash?t.hash.split("#")[2]??"":t.hash.slice(1)));E?scrollTo(E.x,E.y):v?v.scrollIntoView():scrollTo(0,0)}const P=document.activeElement!==A&&document.activeElement!==document.body;!r&&!P&&mn(),Ve=!0,p.props.page&&Object.assign(w,p.props.page),X=!1,e==="popstate"&&ct(I),f.fulfil(void 0),j.forEach(v=>v(f.navigation)),C.navigating.set(z.current=null)}async function pt(e,t,n,r){return e.origin===Z&&e.pathname===location.pathname&&!Le?await he({status:r,error:n,url:e,route:t}):await q(e)}function dn(){let e;N.addEventListener("mousemove",s=>{const i=s.target;clearTimeout(e),e=setTimeout(()=>{r(i,2)},20)});function t(s){s.defaultPrevented||r(s.composedPath()[0],1)}N.addEventListener("mousedown",t),N.addEventListener("touchstart",t,{passive:!0});const n=new IntersectionObserver(s=>{for(const i of s)i.isIntersecting&&(we(new URL(i.target.href)),n.unobserve(i.target))},{threshold:0});function r(s,i){const o=Qe(s,N);if(!o)return;const{url:c,external:l,download:d}=be(o,U,b.hash);if(l||d)return;const g=te(o),f=c&&ce(_.url)===ce(c);if(!g.reload&&!f)if(i<=g.preload_data){const u=Oe(c,!1);u&&ln(u)}else i<=g.preload_code&&we(c)}function a(){n.disconnect();for(const s of N.querySelectorAll("a")){const{url:i,external:o,download:c}=be(s,U,b.hash);if(o||c)continue;const l=te(s);l.reload||(l.preload_code===ee.viewport&&n.observe(s),l.preload_code===ee.eager&&we(i))}}j.push(a),a()}function V(e,t){if(e instanceof fe)return e.body;const n=ne(e),r=nn(e);return b.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function Ce(e,t){ve(()=>(e.push(t),()=>{const n=e.indexOf(t);e.splice(n,1)}))}function Rn(e){Ce(j,e)}function In(e){Ce(Ue,e)}function Un(e){Ce(ot,e)}function hn(e,t={}){return e=new URL(Xe(e)),e.origin!==Z?Promise.reject(new Error("goto: invalid URL")):lt(e,t,0)}function pn(){history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let n=!1;if(qe(),!X){const r=_t(_,void 0,null,"leave"),a={...r.navigation,cancel:()=>{n=!0,r.reject(new Error("navigation cancelled"))}};Ue.forEach(s=>s(a))}n?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&qe()}),navigator.connection?.saveData||dn(),N.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const n=Qe(t.composedPath()[0],N);if(!n)return;const{url:r,external:a,target:s,download:i}=be(n,U,b.hash);if(!r)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const o=te(n);if(!(n instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||i)return;const[l,d]=(b.hash?r.hash.replace(/^#/,""):r.href).split("#"),g=l===me(location);if(a||o.reload&&(!g||!d)){ht({url:r,type:"link"})?X=!0:t.preventDefault();return}if(d!==void 0&&g){const[,f]=_.url.href.split("#");if(f===d){if(t.preventDefault(),d===""||d==="top"&&n.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const u=n.ownerDocument.getElementById(decodeURIComponent(d));u&&(u.scrollIntoView(),u.focus())}return}if(G=!0,Ie(k),e(r),!o.replace_state)return;G=!1}t.preventDefault(),await new Promise(f=>{requestAnimationFrame(()=>{setTimeout(f,0)}),setTimeout(f,100)}),M({type:"link",url:r,keepfocus:o.keepfocus,noscroll:o.noscroll,replace_state:o.replace_state??r.href===location.href})}),N.addEventListener("submit",t=>{if(t.defaultPrevented)return;const n=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if((r?.formTarget||n.target)==="_blank"||(r?.formMethod||n.method)!=="get")return;const i=new URL(r?.hasAttribute("formaction")&&r?.formAction||n.action);if(ue(i,U,!1))return;const o=t.target,c=te(o);if(c.reload)return;t.preventDefault(),t.stopPropagation();const l=new FormData(o),d=r?.getAttribute("name");d&&l.append(d,r?.getAttribute("value")??""),i.search=new URLSearchParams(l).toString(),M({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async t=>{if(t.state?.[F]){const n=t.state[F];if(se={},n===k)return;const r=$[n],a=t.state[Je]??{},s=new URL(t.state[Vt]??location.href),i=t.state[Y],o=me(location)===me(_.url);if(i===I&&(st||o)){e(s),$[k]=Ee(),r&&scrollTo(r.x,r.y),a!==w.state&&(w.state=a,xe.$set({page:w})),k=n;return}const l=n-k;await M({type:"popstate",url:s,popped:{state:a,scroll:r,delta:l},accept:()=>{k=n,I=i},block:()=>{history.go(-l)},nav_token:se})}else if(!G){const n=new URL(location.href);e(n)}}),addEventListener("hashchange",()=>{G?(G=!1,history.replaceState({...history.state,[F]:++k,[Y]:I},"",location.href)):b.hash&&_.url.hash===location.hash&&M({type:"goto",url:_.url})});for(const t of document.querySelectorAll("link"))on.has(t.rel)&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&C.navigating.set(z.current=null)});function e(t){_.url=w.url=t,C.page.set({data:w.data,error:w.error,form:w.form,params:w.params,route:w.route,state:w.state,status:w.status,url:t}),C.page.notify()}}async function gn(e,{status:t=200,error:n,node_ids:r,params:a,route:s,data:i,form:o}){Le=!0;const c=new URL(location.href);({params:a={},route:s={id:null}}=Oe(c,!1)||{});let l,d=!0;try{const g=r.map(async(h,p)=>{const A=i[p];return A?.uses&&(A.uses=mt(A.uses)),Pe({loader:b.nodes[h],url:c,params:a,route:s,parent:async()=>{const E={};for(let P=0;P<p;P+=1)Object.assign(E,(await g[P]).data);return E},server_data_node:Ne(A)})}),f=await Promise.all(g),u=de.find(({id:h})=>h===s.id);if(u){const h=u.layouts;for(let p=0;p<h.length;p++)h[p]||f.splice(p,0,void 0)}l=ie({url:c,params:a,branch:f,status:t,error:n,form:o,route:u??null})}catch(g){if(g instanceof nt){await q(new URL(g.location,location.href));return}l=await he({status:ne(g),error:await V(g,{url:c,params:a,route:s}),url:c,route:s}),e.textContent="",d=!1}l.props.page&&(l.props.page.state={}),ut(l,e,d)}async function gt(e,t){const n=new URL(e);n.pathname=It(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(tn,"1"),n.searchParams.append(en,t.map(a=>a?"1":"0").join(""));const r=await Ke(n.href);if(!r.ok){let a;throw r.headers.get("content-type")?.includes("application/json")?a=await r.json():r.status===404?a="Not Found":r.status===500&&(a="Internal Error"),new fe(r.status,a)}return new Promise(async a=>{const s=new Map,i=r.body.getReader(),o=new TextDecoder;function c(d){return Xt(d,{...b.decoders,Promise:g=>new Promise((f,u)=>{s.set(g,{fulfil:f,reject:u})})})}let l="";for(;;){const{done:d,value:g}=await i.read();if(d&&!l)break;for(l+=!g&&l?`
`:o.decode(g,{stream:!0});;){const f=l.indexOf(`
`);if(f===-1)break;const u=JSON.parse(l.slice(0,f));if(l=l.slice(f+1),u.type==="redirect")return a(u);if(u.type==="data")u.nodes?.forEach(h=>{h?.type==="data"&&(h.uses=mt(h.uses),h.data=c(h.data))}),a(u);else if(u.type==="chunk"){const{id:h,data:p,error:A}=u,E=s.get(h);s.delete(h),A?E.reject(c(A)):E.fulfil(c(p))}}}})}function mt(e){return{dependencies:new Set(e?.dependencies??[]),params:new Set(e?.params??[]),parent:!!e?.parent,route:!!e?.route,url:!!e?.url,search_params:new Set(e?.search_params??[])}}function mn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function _t(e,t,n,r){let a,s;const i=new Promise((c,l)=>{a=c,s=l});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:e.route?.id??null},url:e.url},to:n&&{params:t?.params??null,route:{id:t?.route?.id??null},url:n},willUnload:!t,type:r,complete:i},fulfil:a,reject:s}}export{Rn as a,In as b,En as c,vn as d,bn as g,Un as o,w as p,C as s,ye as u};
