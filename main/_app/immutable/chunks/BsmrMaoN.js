import{o as ye}from"./D0InkX-n.js";import{w as Ae}from"./C-aOd34k.js";import{T,g as x,K as P,ax as gt}from"./wub7L5-0.js";new URL("sveltekit-internal://");function mt(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function _t(e){return e.split("%25").map(decodeURI).join("%25")}function yt(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function pe({href:e}){return e.split("#")[0]}function wt(e,t,n,r=!1){const o=new URL(e);Object.defineProperty(o,"searchParams",{value:new Proxy(o.searchParams,{get(i,a){if(a==="get"||a==="getAll"||a==="has")return f=>(n(f),i[a](f));t();const c=Reflect.get(i,a);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(o,i,{get(){return t(),e[i]},enumerable:!0,configurable:!0});return o}function vt(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let o=r.length;for(;o;)t=t*33^r[--o]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function bt(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}const At=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:t?.method||"GET")!=="GET"&&K.delete(Se(e)),At(e,t));const K=new Map;function St(e,t){const n=Se(e,t),r=document.querySelector(n);if(r?.textContent){let{body:o,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&K.set(n,{body:o,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(o=bt(o)),Promise.resolve(new Response(o,s))}return window.fetch(e,t)}function kt(e,t,n){if(K.size>0){const r=Se(e,n),o=K.get(r);if(o){if(performance.now()<o.ttl&&["default","force-cache","only-if-cached",void 0].includes(n?.cache))return new Response(o.body,o.init);K.delete(r)}}return window.fetch(t,n)}function Se(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t?.headers||t?.body){const o=[];t.headers&&o.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&o.push(t.body),r+=`[data-hash="${vt(...o)}"]`}return r}const Et=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function Rt(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Ut(e).map(r=>{const o=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(o)return t.push({name:o[1],matcher:o[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return ge(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return ge(String.fromCharCode(...c.slice(2).split("-").map(m=>parseInt(m,16))));const d=Et.exec(c),[,g,u,l,h]=d;return t.push({name:l,matcher:h,optional:!!g,rest:!!u,chained:u?f===1&&i[0]==="":!1}),u?"(.*?)":g?"([^/]*)?":"([^/]+?)"}return ge(c)}).join("")}).join("")}/?$`),params:t}}function It(e){return!/^\([^)]+\)$/.test(e)}function Ut(e){return e.slice(1).split("/").filter(It)}function Lt(e,t,n){const r={},o=e.slice(1),s=o.filter(a=>a!==void 0);let i=0;for(let a=0;a<t.length;a+=1){const c=t[a];let f=o[a-i];if(c.chained&&c.rest&&i&&(f=o.slice(a-i,a+1).filter(d=>d).join("/"),i=0),f===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](f)){r[c.name]=f;const d=t[a+1],g=o[a+1];d&&!d.rest&&d.optional&&g&&c.chained&&(i=0),!d&&!g&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function ge(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Tt({nodes:e,server_loads:t,dictionary:n,matchers:r}){const o=new Set(t);return Object.entries(n).map(([a,[c,f,d]])=>{const{pattern:g,params:u}=Rt(a),l={id:a,exec:h=>{const m=g.exec(h);if(m)return Lt(m,u,r)},errors:[1,...d||[]].map(h=>e[h]),layouts:[0,...f||[]].map(i),leaf:s(c)};return l.errors.length=l.layouts.length=Math.max(l.errors.length,l.layouts.length),l});function s(a){const c=a<0;return c&&(a=~a),[c,e[a]]}function i(a){return a===void 0?a:[o.has(a),e[a]]}}function He(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function $e(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}const U=globalThis.__sveltekit_bca6m3?.base??"",xt=globalThis.__sveltekit_bca6m3?.assets??U,Pt="cf56a2c96d09b343908a039366f527ad52a12740",We="sveltekit:snapshot",Ye="sveltekit:scroll",Je="sveltekit:states",Nt="sveltekit:pageurl",F="sveltekit:history",W="sveltekit:navigation",Q={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},X=location.origin;function ze(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function ke(){return{x:pageXOffset,y:pageYOffset}}function D(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const De={...Q,"":Q.hover};function Xe(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function Ze(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Xe(e)}}function we(e,t,n){let r;try{if(r=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const a=location.hash.split("#")[1]||"/";r.hash=`#${a}${r.hash}`}}catch{}const o=e instanceof SVGAElement?e.target.baseVal:e.target,s=!r||!!o||ce(r,t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=r?.origin===X&&e.hasAttribute("download");return{url:r,external:s,target:o,download:i}}function ee(e){let t=null,n=null,r=null,o=null,s=null,i=null,a=e;for(;a&&a!==document.documentElement;)r===null&&(r=D(a,"preload-code")),o===null&&(o=D(a,"preload-data")),t===null&&(t=D(a,"keepfocus")),n===null&&(n=D(a,"noscroll")),s===null&&(s=D(a,"reload")),i===null&&(i=D(a,"replacestate")),a=Xe(a);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:De[r??"off"],preload_data:De[o??"off"],keepfocus:c(t),noscroll:c(n),reload:c(s),replace_state:c(i)}}function Fe(e){const t=Ae(e);let n=!0;function r(){n=!0,t.update(i=>i)}function o(i){n=!1,t.set(i)}function s(i){let a;return t.subscribe(c=>{(a===void 0||n&&c!==a)&&i(a=c)})}return{notify:r,set:o,subscribe:s}}const Qe={v:()=>{}};function Ct(){const{set:e,subscribe:t}=Ae(!1),n=3e4;let r;async function o(){clearTimeout(r),r=setTimeout(o,n);try{const s=await fetch(`${xt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!s.ok)return!1;const a=(await s.json()).version!==Pt;return a&&(e(!0),Qe.v(),clearTimeout(r)),a}catch{return!1}}return r=setTimeout(o,n),{subscribe:t,check:o}}function ce(e,t,n){return e.origin!==X||!e.pathname.startsWith(t)?!0:n?!(e.pathname===t+"/"||e.pathname===t+"/index.html"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===t):!1}function yn(e){}function Ve(e){const t=jt(e),n=new ArrayBuffer(t.length),r=new DataView(n);for(let o=0;o<n.byteLength;o++)r.setUint8(o,t.charCodeAt(o));return n}const Ot="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function jt(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,r=0;for(let o=0;o<e.length;o++)n<<=6,n|=Ot.indexOf(e[o]),r+=6,r===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,t+=String.fromCharCode(n)):r===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const $t=-1,Dt=-2,Ft=-3,Vt=-4,Bt=-5,Gt=-6;function Mt(e,t){if(typeof e=="number")return o(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function o(s,i=!1){if(s===$t)return;if(s===Ft)return NaN;if(s===Vt)return 1/0;if(s===Bt)return-1/0;if(s===Gt)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const a=n[s];if(!a||typeof a!="object")r[s]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const c=a[0],f=t?.[c];if(f)return r[s]=f(o(a[1]));switch(c){case"Date":r[s]=new Date(a[1]);break;case"Set":const d=new Set;r[s]=d;for(let l=1;l<a.length;l+=1)d.add(o(a[l]));break;case"Map":const g=new Map;r[s]=g;for(let l=1;l<a.length;l+=2)g.set(o(a[l]),o(a[l+1]));break;case"RegExp":r[s]=new RegExp(a[1],a[2]);break;case"Object":r[s]=Object(a[1]);break;case"BigInt":r[s]=BigInt(a[1]);break;case"null":const u=Object.create(null);r[s]=u;for(let l=1;l<a.length;l+=2)u[a[l]]=o(a[l+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const l=globalThis[c],h=a[1],m=Ve(h),_=new l(m);r[s]=_;break}case"ArrayBuffer":{const l=a[1],h=Ve(l);r[s]=h;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(a.length);r[s]=c;for(let f=0;f<a.length;f+=1){const d=a[f];d!==Dt&&(c[f]=o(d))}}else{const c={};r[s]=c;for(const f in a){const d=a[f];c[f]=o(d)}}return r[s]}return o(0)}const et=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...et];const qt=new Set([...et]);[...qt];function Kt(e){return e.filter(t=>t!=null)}class le{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class Ee{constructor(t,n){this.status=t,this.location=n}}class Re extends Error{constructor(t,n,r){super(r),this.status=t,this.text=n}}const Ht="x-sveltekit-invalidated",Wt="x-sveltekit-trailing-slash";function te(e){return e instanceof le||e instanceof Re?e.status:500}function Yt(e){return e instanceof Re?e.text:"Internal Error"}let k,Y,me;const Jt=ye.toString().includes("$$")||/function \w+\(\) \{\}/.test(ye.toString());Jt?(k={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},Y={current:null},me={current:!1}):(k=new class{#e=T({});get data(){return x(this.#e)}set data(t){P(this.#e,t)}#t=T(null);get form(){return x(this.#t)}set form(t){P(this.#t,t)}#n=T(null);get error(){return x(this.#n)}set error(t){P(this.#n,t)}#r=T({});get params(){return x(this.#r)}set params(t){P(this.#r,t)}#a=T({id:null});get route(){return x(this.#a)}set route(t){P(this.#a,t)}#o=T({});get state(){return x(this.#o)}set state(t){P(this.#o,t)}#s=T(-1);get status(){return x(this.#s)}set status(t){P(this.#s,t)}#i=T(new URL("https://example.com"));get url(){return x(this.#i)}set url(t){P(this.#i,t)}},Y=new class{#e=T(null);get current(){return x(this.#e)}set current(t){P(this.#e,t)}},me=new class{#e=T(!1);get current(){return x(this.#e)}set current(t){P(this.#e,t)}},Qe.v=()=>me.current=!0);function zt(e){Object.assign(k,e)}const Xt="/__data.json",Zt=".html__data.json";function Qt(e){return e.endsWith(".html")?e.replace(/\.html$/,Zt):e.replace(/\/$/,"")+Xt}const en=new Set(["icon","shortcut icon","apple-touch-icon"]),$=He(Ye)??{},J=He(We)??{},O={url:Fe({}),page:Fe({}),navigating:Ae(null),updated:Ct()};function Ie(e){$[e]=ke()}function tn(e,t){let n=e+1;for(;$[n];)delete $[n],n+=1;for(n=t+1;J[n];)delete J[n],n+=1}function G(e){return location.href=e.href,new Promise(()=>{})}async function tt(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(U||"/");e&&await e.update()}}function Be(){}let Ue,ve,ne,N,be,v;const re=[],ae=[];let C=null;const Le=new Set,nt=new Set,V=new Set;let w={branch:[],error:null,url:null},Te=!1,oe=!1,Ge=!0,z=!1,M=!1,rt=!1,xe=!1,at,A,I,j;const H=new Set;async function An(e,t,n){document.URL!==location.href&&(location.href=location.href),v=e,await e.hooks.init?.(),Ue=Tt(e),N=document.documentElement,be=t,ve=e.nodes[0],ne=e.nodes[1],ve(),ne(),A=history.state?.[F],I=history.state?.[W],A||(A=I=Date.now(),history.replaceState({...history.state,[F]:A,[W]:I},""));const r=$[A];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await hn(be,n):await fn(v.hash?pt(new URL(location.href)):location.href,{replaceState:!0}),dn()}function nn(){re.length=0,xe=!1}function ot(e){ae.some(t=>t?.snapshot)&&(J[e]=ae.map(t=>t?.snapshot?.capture()))}function st(e){J[e]?.forEach((t,n)=>{ae[n]?.snapshot?.restore(t)})}function Me(){Ie(A),$e(Ye,$),ot(I),$e(We,J)}async function Pe(e,t,n,r){return q({type:"goto",url:ze(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(xe=!0),t.invalidate&&t.invalidate.forEach(un)}})}async function rn(e){if(e.id!==C?.id){const t={};H.add(t),C={id:e.id,token:t,promise:ct({...e,preload:t}).then(n=>(H.delete(t),n.type==="loaded"&&n.state.error&&(C=null),n))}}return C.promise}async function _e(e){const t=(await ue(e,!1))?.route;t&&await Promise.all([...t.layouts,t.leaf].map(n=>n?.[1]()))}function it(e,t,n){w=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(k,e.props.page),at=new v.root({target:t,props:{...e.props,stores:O,components:ae},hydrate:n,sync:!1}),st(I);const o={from:null,to:{params:w.params,route:{id:w.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};V.forEach(s=>s(o)),oe=!0}function se({url:e,params:t,branch:n,status:r,error:o,route:s,form:i}){let a="never";if(U&&(e.pathname===U||e.pathname===U+"/"))a="always";else for(const l of n)l?.slash!==void 0&&(a=l.slash);e.pathname=mt(e.pathname,a),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:o,route:s},props:{constructors:Kt(n).map(l=>l.node.component),page:je(k)}};i!==void 0&&(c.props.form=i);let f={},d=!k,g=0;for(let l=0;l<Math.max(n.length,w.branch.length);l+=1){const h=n[l],m=w.branch[l];h?.data!==m?.data&&(d=!0),h&&(f={...f,...h.data},d&&(c.props[`data_${g}`]=f),g+=1)}return(!w.url||e.href!==w.url.href||w.error!==o||i!==void 0&&i!==k.form||d)&&(c.props.page={error:o,params:t,route:{id:s?.id??null},state:{},status:r,url:new URL(e),form:i??null,data:d?f:k.data}),c}async function Ne({loader:e,parent:t,url:n,params:r,route:o,server_data_node:s}){let i=null,a=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if(f.universal?.load){let d=function(...u){for(const l of u){const{href:h}=new URL(l,n);c.dependencies.add(h)}};const g={route:new Proxy(o,{get:(u,l)=>(a&&(c.route=!0),u[l])}),params:new Proxy(r,{get:(u,l)=>(a&&c.params.add(l),u[l])}),data:s?.data??null,url:wt(n,()=>{a&&(c.url=!0)},u=>{a&&c.search_params.add(u)},v.hash),async fetch(u,l){let h;u instanceof Request?(h=u.url,l={body:u.method==="GET"||u.method==="HEAD"?void 0:await u.blob(),cache:u.cache,credentials:u.credentials,headers:[...u.headers].length?u.headers:void 0,integrity:u.integrity,keepalive:u.keepalive,method:u.method,mode:u.mode,redirect:u.redirect,referrer:u.referrer,referrerPolicy:u.referrerPolicy,signal:u.signal,...l}):h=u;const m=new URL(h,n);return a&&d(m.href),m.origin===n.origin&&(h=m.href.slice(n.origin.length)),oe?kt(h,m.href,l):St(h,l)},setHeaders:()=>{},depends:d,parent(){return a&&(c.parent=!0),t()},untrack(u){a=!1;try{return u()}finally{a=!0}}};i=await f.universal.load.call(null,g)??null}return{node:f,loader:e,server:s,universal:f.universal?.load?{type:"data",data:i,uses:c}:null,data:i??s?.data??null,slash:f.universal?.trailingSlash??s?.slash}}function qe(e,t,n,r,o,s){if(xe)return!0;if(!o)return!1;if(o.parent&&e||o.route&&t||o.url&&n)return!0;for(const i of o.search_params)if(r.has(i))return!0;for(const i of o.params)if(s[i]!==w.params[i])return!0;for(const i of o.dependencies)if(re.some(a=>a(new URL(i))))return!0;return!1}function Ce(e,t){return e?.type==="data"?e:e?.type==="skip"?t??null:null}function an(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const o=e.searchParams.getAll(r),s=t.searchParams.getAll(r);o.every(i=>s.includes(i))&&s.every(i=>o.includes(i))&&n.delete(r)}return n}function Ke({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:je(k),constructors:[]}}}async function ct({id:e,invalidating:t,url:n,params:r,route:o,preload:s}){if(C?.id===e)return H.delete(C.token),C.promise;const{errors:i,layouts:a,leaf:c}=o,f=[...a,c];i.forEach(p=>p?.().catch(()=>{})),f.forEach(p=>p?.[1]().catch(()=>{}));let d=null;const g=w.url?e!==ie(w.url):!1,u=w.route?o.id!==w.route.id:!1,l=an(w.url,n);let h=!1;const m=f.map((p,y)=>{const b=w.branch[y],S=!!p?.[0]&&(b?.loader!==p[1]||qe(h,u,g,l,b.server?.uses,r));return S&&(h=!0),S});if(m.some(Boolean)){try{d=await ut(n,m)}catch(p){const y=await B(p,{url:n,params:r,route:{id:e}});return H.has(s)?Ke({error:y,url:n,params:r,route:o}):fe({status:te(p),error:y,url:n,route:o})}if(d.type==="redirect")return d}const _=d?.nodes;let R=!1;const E=f.map(async(p,y)=>{if(!p)return;const b=w.branch[y],S=_?.[y];if((!S||S.type==="skip")&&p[1]===b?.loader&&!qe(R,u,g,l,b.universal?.uses,r))return b;if(R=!0,S?.type==="error")throw S;return Ne({loader:p[1],url:n,params:r,route:o,parent:async()=>{const de={};for(let he=0;he<y;he+=1)Object.assign(de,(await E[he])?.data);return de},server_data_node:Ce(S===void 0&&p[0]?{type:"skip"}:S??null,p[0]?b?.server:void 0)})});for(const p of E)p.catch(()=>{});const L=[];for(let p=0;p<f.length;p+=1)if(f[p])try{L.push(await E[p])}catch(y){if(y instanceof Ee)return{type:"redirect",location:y.location};if(H.has(s))return Ke({error:await B(y,{params:r,url:n,route:{id:o.id}}),url:n,params:r,route:o});let b=te(y),S;if(_?.includes(y))b=y.status??b,S=y.error;else if(y instanceof le)S=y.body;else{if(await O.updated.check())return await tt(),await G(n);S=await B(y,{params:r,url:n,route:{id:o.id}})}const Z=await on(p,L,i);return Z?se({url:n,params:r,branch:L.slice(0,Z.idx).concat(Z.node),status:b,error:S,route:o}):await ft(n,{id:o.id},S,b)}else L.push(void 0);return se({url:n,params:r,branch:L,status:200,error:null,route:o,form:t?void 0:null})}async function on(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function fe({status:e,error:t,url:n,route:r}){const o={};let s=null;if(v.server_loads[0]===0)try{const a=await ut(n,[!0]);if(a.type!=="data"||a.nodes[0]&&a.nodes[0].type!=="data")throw 0;s=a.nodes[0]??null}catch{(n.origin!==X||n.pathname!==location.pathname||Te)&&await G(n)}try{const a=await Ne({loader:ve,url:n,params:o,route:r,parent:()=>Promise.resolve({}),server_data_node:Ce(s)}),c={node:await ne(),loader:ne,universal:null,server:null,data:null};return se({url:n,params:o,branch:[a,c],status:e,error:t,route:null})}catch(a){if(a instanceof Ee)return Pe(new URL(a.location,location.href),{},0);throw a}}function sn(e){let t;try{if(t=v.hooks.reroute({url:new URL(e)})??e,typeof t=="string"){const n=new URL(e);v.hash?n.hash=t:n.pathname=t,t=n}}catch{return}return t}async function ue(e,t){if(e&&!ce(e,U,v.hash)){const n=sn(e);if(!n)return;const r=cn(n);for(const o of Ue){const s=o.exec(r);if(s)return{id:ie(e),invalidating:t,route:o,params:yt(s),url:e}}}}function cn(e){return _t(v.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(U.length))||"/"}function ie(e){return(v.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function lt({url:e,type:t,intent:n,delta:r}){let o=!1;const s=ht(w,n,e,t);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{o=!0,s.reject(new Error("navigation cancelled"))}};return z||Le.forEach(a=>a(i)),o?null:s}async function q({type:e,url:t,popped:n,keepfocus:r,noscroll:o,replace_state:s,state:i={},redirect_count:a=0,nav_token:c={},accept:f=Be,block:d=Be}){const g=j;j=c;const u=await ue(t,!1),l=lt({url:t,type:e,delta:n?.delta,intent:u});if(!l){d(),j===c&&(j=g);return}const h=A,m=I;f(),z=!0,oe&&O.navigating.set(Y.current=l.navigation);let _=u&&await ct(u);if(!_){if(ce(t,U,v.hash))return await G(t);_=await ft(t,{id:null},await B(new Re(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=u?.url||t,j!==c)return l.reject(new Error("navigation aborted")),!1;if(_.type==="redirect")if(a>=20)_=await fe({status:500,error:await B(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return await Pe(new URL(_.location,t).href,{},a+1,c),!1;else _.props.page.status>=400&&await O.updated.check()&&(await tt(),await G(t));if(nn(),Ie(h),ot(m),_.props.page.url.pathname!==t.pathname&&(t.pathname=_.props.page.url.pathname),i=n?n.state:i,!n){const p=s?0:1,y={[F]:A+=p,[W]:I+=p,[Je]:i};(s?history.replaceState:history.pushState).call(history,y,"",t),s||tn(A,I)}if(C=null,_.props.page.state=i,oe){w=_.state,_.props.page&&(_.props.page.url=t);const p=(await Promise.all(Array.from(nt,y=>y(l.navigation)))).filter(y=>typeof y=="function");if(p.length>0){let y=function(){p.forEach(b=>{V.delete(b)})};p.push(y),p.forEach(b=>{V.add(b)})}at.$set(_.props),zt(_.props.page),rt=!0}else it(_,be,!1);const{activeElement:R}=document;await gt();const E=n?n.scroll:o?ke():null;if(Ge){const p=t.hash&&document.getElementById(decodeURIComponent(v.hash?t.hash.split("#")[2]??"":t.hash.slice(1)));E?scrollTo(E.x,E.y):p?p.scrollIntoView():scrollTo(0,0)}const L=document.activeElement!==R&&document.activeElement!==document.body;!r&&!L&&pn(),Ge=!0,_.props.page&&Object.assign(k,_.props.page),z=!1,e==="popstate"&&st(I),l.fulfil(void 0),V.forEach(p=>p(l.navigation)),O.navigating.set(Y.current=null)}async function ft(e,t,n,r){return e.origin===X&&e.pathname===location.pathname&&!Te?await fe({status:r,error:n,url:e,route:t}):await G(e)}function ln(){let e,t;N.addEventListener("mousemove",i=>{const a=i.target;clearTimeout(e),e=setTimeout(()=>{o(a,2)},20)});function n(i){i.defaultPrevented||o(i.composedPath()[0],1)}N.addEventListener("mousedown",n),N.addEventListener("touchstart",n,{passive:!0});const r=new IntersectionObserver(i=>{for(const a of i)a.isIntersecting&&(_e(new URL(a.target.href)),r.unobserve(a.target))},{threshold:0});async function o(i,a){const c=Ze(i,N);if(!c||c===t)return;const{url:f,external:d,download:g}=we(c,U,v.hash);if(d||g)return;const u=ee(c),l=f&&ie(w.url)===ie(f);if(!u.reload&&!l)if(a<=u.preload_data){t=c;const h=await ue(f,!1);h&&rn(h)}else a<=u.preload_code&&(t=c,_e(f))}function s(){r.disconnect();for(const i of N.querySelectorAll("a")){const{url:a,external:c,download:f}=we(i,U,v.hash);if(c||f)continue;const d=ee(i);d.reload||(d.preload_code===Q.viewport&&r.observe(i),d.preload_code===Q.eager&&_e(a))}}V.add(s),s()}function B(e,t){if(e instanceof le)return e.body;const n=te(e),r=Yt(e);return v.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function Oe(e,t){ye(()=>(e.add(t),()=>{e.delete(t)}))}function Sn(e){Oe(V,e)}function kn(e){Oe(Le,e)}function En(e){Oe(nt,e)}function fn(e,t={}){return e=new URL(ze(e)),e.origin!==X?Promise.reject(new Error("goto: invalid URL")):Pe(e,t,0)}function un(e){if(typeof e=="function")re.push(e);else{const{href:t}=new URL(e,location.href);re.push(n=>n.href===t)}}function dn(){history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let n=!1;if(Me(),!z){const r=ht(w,void 0,null,"leave"),o={...r.navigation,cancel:()=>{n=!0,r.reject(new Error("navigation cancelled"))}};Le.forEach(s=>s(o))}n?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Me()}),navigator.connection?.saveData||ln(),N.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const n=Ze(t.composedPath()[0],N);if(!n)return;const{url:r,external:o,target:s,download:i}=we(n,U,v.hash);if(!r)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const a=ee(n);if(!(n instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||i)return;const[f,d]=(v.hash?r.hash.replace(/^#/,""):r.href).split("#"),g=f===pe(location);if(o||a.reload&&(!g||!d)){lt({url:r,type:"link"})?z=!0:t.preventDefault();return}if(d!==void 0&&g){const[,u]=w.url.href.split("#");if(u===d){if(t.preventDefault(),d===""||d==="top"&&n.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const l=n.ownerDocument.getElementById(decodeURIComponent(d));l&&(l.scrollIntoView(),l.focus())}return}if(M=!0,Ie(A),e(r),!a.replace_state)return;M=!1}t.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),await q({type:"link",url:r,keepfocus:a.keepfocus,noscroll:a.noscroll,replace_state:a.replace_state??r.href===location.href})}),N.addEventListener("submit",t=>{if(t.defaultPrevented)return;const n=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if((r?.formTarget||n.target)==="_blank"||(r?.formMethod||n.method)!=="get")return;const i=new URL(r?.hasAttribute("formaction")&&r?.formAction||n.action);if(ce(i,U,!1))return;const a=t.target,c=ee(a);if(c.reload)return;t.preventDefault(),t.stopPropagation();const f=new FormData(a),d=r?.getAttribute("name");d&&f.append(d,r?.getAttribute("value")??""),i.search=new URLSearchParams(f).toString(),q({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async t=>{if(t.state?.[F]){const n=t.state[F];if(j={},n===A)return;const r=$[n],o=t.state[Je]??{},s=new URL(t.state[Nt]??location.href),i=t.state[W],a=w.url?pe(location)===pe(w.url):!1;if(i===I&&(rt||a)){o!==k.state&&(k.state=o),e(s),$[A]=ke(),r&&scrollTo(r.x,r.y),A=n;return}const f=n-A;await q({type:"popstate",url:s,popped:{state:o,scroll:r,delta:f},accept:()=>{A=n,I=i},block:()=>{history.go(-f)},nav_token:j})}else if(!M){const n=new URL(location.href);e(n)}}),addEventListener("hashchange",()=>{M?(M=!1,history.replaceState({...history.state,[F]:++A,[W]:I},"",location.href)):v.hash&&w.url.hash===location.hash&&q({type:"goto",url:pt(w.url)})});for(const t of document.querySelectorAll("link"))en.has(t.rel)&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&O.navigating.set(Y.current=null)});function e(t){w.url=k.url=t,O.page.set(je(k)),O.page.notify()}}async function hn(e,{status:t=200,error:n,node_ids:r,params:o,route:s,server_route:i,data:a,form:c}){Te=!0;const f=new URL(location.href);let d;({params:o={},route:s={id:null}}=await ue(f,!1)||{}),d=Ue.find(({id:l})=>l===s.id);let g,u=!0;try{const l=r.map(async(m,_)=>{const R=a[_];return R?.uses&&(R.uses=dt(R.uses)),Ne({loader:v.nodes[m],url:f,params:o,route:s,parent:async()=>{const E={};for(let L=0;L<_;L+=1)Object.assign(E,(await l[L]).data);return E},server_data_node:Ce(R)})}),h=await Promise.all(l);if(d){const m=d.layouts;for(let _=0;_<m.length;_++)m[_]||h.splice(_,0,void 0)}g=se({url:f,params:o,branch:h,status:t,error:n,form:c,route:d??null})}catch(l){if(l instanceof Ee){await G(new URL(l.location,location.href));return}g=await fe({status:te(l),error:await B(l,{url:f,params:o,route:s}),url:f,route:s}),e.textContent="",u=!1}g.props.page&&(g.props.page.state={}),it(g,e,u)}async function ut(e,t){const n=new URL(e);n.pathname=Qt(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(Wt,"1"),n.searchParams.append(Ht,t.map(s=>s?"1":"0").join(""));const r=window.fetch,o=await r(n.href,{});if(!o.ok){let s;throw o.headers.get("content-type")?.includes("application/json")?s=await o.json():o.status===404?s="Not Found":o.status===500&&(s="Internal Error"),new le(o.status,s)}return new Promise(async s=>{const i=new Map,a=o.body.getReader(),c=new TextDecoder;function f(g){return Mt(g,{...v.decoders,Promise:u=>new Promise((l,h)=>{i.set(u,{fulfil:l,reject:h})})})}let d="";for(;;){const{done:g,value:u}=await a.read();if(g&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const l=d.indexOf(`
`);if(l===-1)break;const h=JSON.parse(d.slice(0,l));if(d=d.slice(l+1),h.type==="redirect")return s(h);if(h.type==="data")h.nodes?.forEach(m=>{m?.type==="data"&&(m.uses=dt(m.uses),m.data=f(m.data))}),s(h);else if(h.type==="chunk"){const{id:m,data:_,error:R}=h,E=i.get(m);i.delete(m),R?E.reject(f(R)):E.fulfil(f(_))}}}})}function dt(e){return{dependencies:new Set(e?.dependencies??[]),params:new Set(e?.params??[]),parent:!!e?.parent,route:!!e?.route,url:!!e?.url,search_params:new Set(e?.search_params??[])}}function pn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const o=[];for(let s=0;s<r.rangeCount;s+=1)o.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===o.length){for(let s=0;s<r.rangeCount;s+=1){const i=o[s],a=r.getRangeAt(s);if(i.commonAncestorContainer!==a.commonAncestorContainer||i.startContainer!==a.startContainer||i.endContainer!==a.endContainer||i.startOffset!==a.startOffset||i.endOffset!==a.endOffset)return}r.removeAllRanges()}})}}}function ht(e,t,n,r){let o,s;const i=new Promise((c,f)=>{o=c,s=f});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:e.route?.id??null},url:e.url},to:n&&{params:t?.params??null,route:{id:t?.route?.id??null},url:n},willUnload:!t,type:r,complete:i},fulfil:o,reject:s}}function je(e){return{data:e.data,error:e.error,form:e.form,params:e.params,route:e.route,state:e.state,status:e.status,url:e.url}}function pt(e){const t=new URL(e);return t.hash=decodeURIComponent(e.hash),t}export{Sn as a,kn as b,An as c,yn as l,En as o,k as p,O as s};
