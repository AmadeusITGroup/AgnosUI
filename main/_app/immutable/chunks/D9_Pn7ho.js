import{o as we}from"./m-zeG_tB.js";import{w as ke}from"./XamJyj7b.js";import{a7 as T,g as x,Q as P,az as mt}from"./YLwudSZN.js";new URL("sveltekit-internal://");function _t(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function yt(e){return e.split("%25").map(decodeURI).join("%25")}function wt(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function ge({href:e}){return e.split("#")[0]}function vt(e,t,n,r=!1){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return f=>(n(f),i[o](f));t();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return t(),e[i]},enumerable:!0,configurable:!0});return a}function bt(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)t=t*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function At(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}const kt=window.fetch;window.fetch=(e,t)=>((e instanceof Request?e.method:t?.method||"GET")!=="GET"&&H.delete(Se(e)),kt(e,t));const H=new Map;function St(e,t){const n=Se(e,t),r=document.querySelector(n);if(r?.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&H.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=At(a)),Promise.resolve(new Response(a,s))}return window.fetch(e,t)}function Et(e,t,n){if(H.size>0){const r=Se(e,n),a=H.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n?.cache))return new Response(a.body,a.init);H.delete(r)}}return window.fetch(t,n)}function Se(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t?.headers||t?.body){const a=[];t.headers&&a.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&a.push(t.body),r+=`[data-hash="${bt(...a)}"]`}return r}const Rt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function It(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Lt(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return t.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return me(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return me(String.fromCharCode(...c.slice(2).split("-").map(_=>parseInt(_,16))));const d=Rt.exec(c),[,h,u,l,p]=d;return t.push({name:l,matcher:p,optional:!!h,rest:!!u,chained:u?f===1&&i[0]==="":!1}),u?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return me(c)}).join("")}).join("")}/?$`),params:t}}function Ut(e){return!/^\([^)]+\)$/.test(e)}function Lt(e){return e.slice(1).split("/").filter(Ut)}function Tt(e,t,n){const r={},a=e.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<t.length;o+=1){const c=t[o];let f=a[o-i];if(c.chained&&c.rest&&i&&(f=a.slice(o-i,o+1).filter(d=>d).join("/"),i=0),f===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](f)){r[c.name]=f;const d=t[o+1],h=a[o+1];d&&!d.rest&&d.optional&&h&&c.chained&&(i=0),!d&&!h&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function me(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function xt({nodes:e,server_loads:t,dictionary:n,matchers:r}){const a=new Set(t);return Object.entries(n).map(([o,[c,f,d]])=>{const{pattern:h,params:u}=It(o),l={id:o,exec:p=>{const _=h.exec(p);if(_)return Tt(_,u,r)},errors:[1,...d||[]].map(p=>e[p]),layouts:[0,...f||[]].map(i),leaf:s(c)};return l.errors.length=l.layouts.length=Math.max(l.errors.length,l.layouts.length),l});function s(o){const c=o<0;return c&&(o=~o),[c,e[o]]}function i(o){return o===void 0?o:[a.has(o),e[o]]}}function ze(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function De(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}const U=globalThis.__sveltekit_xyortz?.base??"",Pt=globalThis.__sveltekit_xyortz?.assets??U,Nt="a529aead48596779c63f6c4711a0c11cf69c0b95",We="sveltekit:snapshot",Ye="sveltekit:scroll",Je="sveltekit:states",Ct="sveltekit:pageurl",V="sveltekit:history",W="sveltekit:navigation",j={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},ce=location.origin;function Xe(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function Ee(){return{x:pageXOffset,y:pageYOffset}}function F(e,t){return e.getAttribute(`data-sveltekit-${t}`)}const Fe={...j,"":j.hover};function Qe(e){let t=e.assignedSlot??e.parentNode;return t?.nodeType===11&&(t=t.host),t}function Ze(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Qe(e)}}function ve(e,t,n){let r;try{if(r=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";r.hash=`#${o}${r.hash}`}}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,s=!r||!!a||le(r,t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=r?.origin===ce&&e.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function ee(e){let t=null,n=null,r=null,a=null,s=null,i=null,o=e;for(;o&&o!==document.documentElement;)r===null&&(r=F(o,"preload-code")),a===null&&(a=F(o,"preload-data")),t===null&&(t=F(o,"keepfocus")),n===null&&(n=F(o,"noscroll")),s===null&&(s=F(o,"reload")),i===null&&(i=F(o,"replacestate")),o=Qe(o);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Fe[r??"off"],preload_data:Fe[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(s),replace_state:c(i)}}function Ve(e){const t=ke(e);let n=!0;function r(){n=!0,t.update(i=>i)}function a(i){n=!1,t.set(i)}function s(i){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}const et={v:()=>{}};function Ot(){const{set:e,subscribe:t}=ke(!1),n=3e4;let r;async function a(){clearTimeout(r),r=setTimeout(a,n);try{const s=await fetch(`${Pt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!s.ok)return!1;const o=(await s.json()).version!==Nt;return o&&(e(!0),et.v(),clearTimeout(r)),o}catch{return!1}}return r=setTimeout(a,n),{subscribe:t,check:a}}function le(e,t,n){return e.origin!==ce||!e.pathname.startsWith(t)?!0:n?!(e.pathname===t+"/"||e.pathname===t+"/index.html"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===t):!1}function wn(e){}function Be(e){const t=$t(e),n=new ArrayBuffer(t.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,t.charCodeAt(a));return n}const jt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function $t(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,r=0;for(let a=0;a<e.length;a++)n<<=6,n|=jt.indexOf(e[a]),r+=6,r===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,t+=String.fromCharCode(n)):r===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const Dt=-1,Ft=-2,Vt=-3,Bt=-4,Mt=-5,qt=-6;function Gt(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function a(s,i=!1){if(s===Dt)return;if(s===Vt)return NaN;if(s===Bt)return 1/0;if(s===Mt)return-1/0;if(s===qt)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],f=t?.[c];if(f)return r[s]=f(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const d=new Set;r[s]=d;for(let l=1;l<o.length;l+=1)d.add(a(o[l]));break;case"Map":const h=new Map;r[s]=h;for(let l=1;l<o.length;l+=2)h.set(a(o[l]),a(o[l+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const u=Object.create(null);r[s]=u;for(let l=1;l<o.length;l+=2)u[o[l]]=a(o[l+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const l=globalThis[c],p=o[1],_=Be(p),m=new l(_);r[s]=m;break}case"ArrayBuffer":{const l=o[1],p=Be(l);r[s]=p;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let f=0;f<o.length;f+=1){const d=o[f];d!==Ft&&(c[f]=a(d))}}else{const c={};r[s]=c;for(const f in o){const d=o[f];c[f]=a(d)}}return r[s]}return a(0)}const tt=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...tt];const Ht=new Set([...tt]);[...Ht];function Kt(e){return e.filter(t=>t!=null)}class fe{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class Re{constructor(t,n){this.status=t,this.location=n}}class Ie extends Error{constructor(t,n,r){super(r),this.status=t,this.text=n}}const zt="x-sveltekit-invalidated",Wt="x-sveltekit-trailing-slash";function te(e){return e instanceof fe||e instanceof Ie?e.status:500}function Yt(e){return e instanceof Ie?e.text:"Internal Error"}let S,Y,_e;const Jt=we.toString().includes("$$")||/function \w+\(\) \{\}/.test(we.toString());Jt?(S={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},Y={current:null},_e={current:!1}):(S=new class{#e=T({});get data(){return x(this.#e)}set data(t){P(this.#e,t)}#t=T(null);get form(){return x(this.#t)}set form(t){P(this.#t,t)}#n=T(null);get error(){return x(this.#n)}set error(t){P(this.#n,t)}#r=T({});get params(){return x(this.#r)}set params(t){P(this.#r,t)}#a=T({id:null});get route(){return x(this.#a)}set route(t){P(this.#a,t)}#o=T({});get state(){return x(this.#o)}set state(t){P(this.#o,t)}#s=T(-1);get status(){return x(this.#s)}set status(t){P(this.#s,t)}#i=T(new URL("https://example.com"));get url(){return x(this.#i)}set url(t){P(this.#i,t)}},Y=new class{#e=T(null);get current(){return x(this.#e)}set current(t){P(this.#e,t)}},_e=new class{#e=T(!1);get current(){return x(this.#e)}set current(t){P(this.#e,t)}},et.v=()=>_e.current=!0);function Xt(e){Object.assign(S,e)}const Qt="/__data.json",Zt=".html__data.json";function en(e){return e.endsWith(".html")?e.replace(/\.html$/,Zt):e.replace(/\/$/,"")+Qt}const tn=new Set(["icon","shortcut icon","apple-touch-icon"]),D=ze(Ye)??{},J=ze(We)??{},O={url:Ve({}),page:Ve({}),navigating:ke(null),updated:Ot()};function Ue(e){D[e]=Ee()}function nn(e,t){let n=e+1;for(;D[n];)delete D[n],n+=1;for(n=t+1;J[n];)delete J[n],n+=1}function q(e){return location.href=e.href,new Promise(()=>{})}async function nt(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(U||"/");e&&await e.update()}}function Me(){}let Le,be,ne,N,Ae,v;const re=[],ae=[];let C=null;const Z=new Map,Te=new Set,rt=new Set,B=new Set;let w={branch:[],error:null,url:null},xe=!1,oe=!1,qe=!0,X=!1,G=!1,at=!1,Pe=!1,ot,A,I,$;const K=new Set;async function kn(e,t,n){document.URL!==location.href&&(location.href=location.href),v=e,await e.hooks.init?.(),Le=xt(e),N=document.documentElement,Ae=t,be=e.nodes[0],ne=e.nodes[1],be(),ne(),A=history.state?.[V],I=history.state?.[W],A||(A=I=Date.now(),history.replaceState({...history.state,[V]:A,[W]:I},""));const r=D[A];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await hn(Ae,n):await z({type:"enter",url:Xe(v.hash?gn(new URL(location.href)):location.href),replace_state:!0}),dn()}function rn(){re.length=0,Pe=!1}function st(e){ae.some(t=>t?.snapshot)&&(J[e]=ae.map(t=>t?.snapshot?.capture()))}function it(e){J[e]?.forEach((t,n)=>{ae[n]?.snapshot?.restore(t)})}function Ge(){Ue(A),De(Ye,D),st(I),De(We,J)}async function ct(e,t,n,r){return z({type:"goto",url:Xe(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(Pe=!0),t.invalidate&&t.invalidate.forEach(un)}})}async function an(e){if(e.id!==C?.id){const t={};K.add(t),C={id:e.id,token:t,promise:ut({...e,preload:t}).then(n=>(K.delete(t),n.type==="loaded"&&n.state.error&&(C=null),n))}}return C.promise}async function ye(e){const t=(await de(e,!1))?.route;t&&await Promise.all([...t.layouts,t.leaf].map(n=>n?.[1]()))}function lt(e,t,n){w=e.state;const r=document.querySelector("style[data-sveltekit]");if(r&&r.remove(),Object.assign(S,e.props.page),ot=new v.root({target:t,props:{...e.props,stores:O,components:ae},hydrate:n,sync:!1}),it(I),n){const a={from:null,to:{params:w.params,route:{id:w.route?.id??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};B.forEach(s=>s(a))}oe=!0}function se({url:e,params:t,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(U&&(e.pathname===U||e.pathname===U+"/"))o="always";else for(const l of n)l?.slash!==void 0&&(o=l.slash);e.pathname=_t(e.pathname,o),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:a,route:s},props:{constructors:Kt(n).map(l=>l.node.component),page:$e(S)}};i!==void 0&&(c.props.form=i);let f={},d=!S,h=0;for(let l=0;l<Math.max(n.length,w.branch.length);l+=1){const p=n[l],_=w.branch[l];p?.data!==_?.data&&(d=!0),p&&(f={...f,...p.data},d&&(c.props[`data_${h}`]=f),h+=1)}return(!w.url||e.href!==w.url.href||w.error!==a||i!==void 0&&i!==S.form||d)&&(c.props.page={error:a,params:t,route:{id:s?.id??null},state:{},status:r,url:new URL(e),form:i??null,data:d?f:S.data}),c}async function Ne({loader:e,parent:t,url:n,params:r,route:a,server_data_node:s}){let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if(f.universal?.load){let d=function(...u){for(const l of u){const{href:p}=new URL(l,n);c.dependencies.add(p)}};const h={route:new Proxy(a,{get:(u,l)=>(o&&(c.route=!0),u[l])}),params:new Proxy(r,{get:(u,l)=>(o&&c.params.add(l),u[l])}),data:s?.data??null,url:vt(n,()=>{o&&(c.url=!0)},u=>{o&&c.search_params.add(u)},v.hash),async fetch(u,l){u instanceof Request&&(l={body:u.method==="GET"||u.method==="HEAD"?void 0:await u.blob(),cache:u.cache,credentials:u.credentials,headers:[...u.headers].length?u.headers:void 0,integrity:u.integrity,keepalive:u.keepalive,method:u.method,mode:u.mode,redirect:u.redirect,referrer:u.referrer,referrerPolicy:u.referrerPolicy,signal:u.signal,...l});const{resolved:p,promise:_}=ft(u,l,n);return o&&d(p.href),_},setHeaders:()=>{},depends:d,parent(){return o&&(c.parent=!0),t()},untrack(u){o=!1;try{return u()}finally{o=!0}}};i=await f.universal.load.call(null,h)??null}return{node:f,loader:e,server:s,universal:f.universal?.load?{type:"data",data:i,uses:c}:null,data:i??s?.data??null,slash:f.universal?.trailingSlash??s?.slash}}function ft(e,t,n){let r=e instanceof Request?e.url:e;const a=new URL(r,n);a.origin===n.origin&&(r=a.href.slice(n.origin.length));const s=oe?Et(r,a.href,t):St(r,t);return{resolved:a,promise:s}}function He(e,t,n,r,a,s){if(Pe)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==w.params[i])return!0;for(const i of a.dependencies)if(re.some(o=>o(new URL(i))))return!0;return!1}function Ce(e,t){return e?.type==="data"?e:e?.type==="skip"?t??null:null}function on(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const a=e.searchParams.getAll(r),s=t.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function Ke({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:$e(S),constructors:[]}}}async function ut({id:e,invalidating:t,url:n,params:r,route:a,preload:s}){if(C?.id===e)return K.delete(C.token),C.promise;const{errors:i,layouts:o,leaf:c}=a,f=[...o,c];i.forEach(g=>g?.().catch(()=>{})),f.forEach(g=>g?.[1]().catch(()=>{}));let d=null;const h=w.url?e!==ie(w.url):!1,u=w.route?a.id!==w.route.id:!1,l=on(w.url,n);let p=!1;const _=f.map((g,y)=>{const b=w.branch[y],k=!!g?.[0]&&(b?.loader!==g[1]||He(p,u,h,l,b.server?.uses,r));return k&&(p=!0),k});if(_.some(Boolean)){try{d=await pt(n,_)}catch(g){const y=await M(g,{url:n,params:r,route:{id:e}});return K.has(s)?Ke({error:y,url:n,params:r,route:a}):ue({status:te(g),error:y,url:n,route:a})}if(d.type==="redirect")return d}const m=d?.nodes;let R=!1;const E=f.map(async(g,y)=>{if(!g)return;const b=w.branch[y],k=m?.[y];if((!k||k.type==="skip")&&g[1]===b?.loader&&!He(R,u,h,l,b.universal?.uses,r))return b;if(R=!0,k?.type==="error")throw k;return Ne({loader:g[1],url:n,params:r,route:a,parent:async()=>{const he={};for(let pe=0;pe<y;pe+=1)Object.assign(he,(await E[pe])?.data);return he},server_data_node:Ce(k===void 0&&g[0]?{type:"skip"}:k??null,g[0]?b?.server:void 0)})});for(const g of E)g.catch(()=>{});const L=[];for(let g=0;g<f.length;g+=1)if(f[g])try{L.push(await E[g])}catch(y){if(y instanceof Re)return{type:"redirect",location:y.location};if(K.has(s))return Ke({error:await M(y,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let b=te(y),k;if(m?.includes(y))b=y.status??b,k=y.error;else if(y instanceof fe)k=y.body;else{if(await O.updated.check())return await nt(),await q(n);k=await M(y,{params:r,url:n,route:{id:a.id}})}const Q=await sn(g,L,i);return Q?se({url:n,params:r,branch:L.slice(0,Q.idx).concat(Q.node),status:b,error:k,route:a}):await ht(n,{id:a.id},k,b)}else L.push(void 0);return se({url:n,params:r,branch:L,status:200,error:null,route:a,form:t?void 0:null})}async function sn(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function ue({status:e,error:t,url:n,route:r}){const a={};let s=null;if(v.server_loads[0]===0)try{const o=await pt(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==ce||n.pathname!==location.pathname||xe)&&await q(n)}try{const o=await Ne({loader:be,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Ce(s)}),c={node:await ne(),loader:ne,universal:null,server:null,data:null};return se({url:n,params:a,branch:[o,c],status:e,error:t,route:null})}catch(o){if(o instanceof Re)return ct(new URL(o.location,location.href),{},0);throw o}}async function cn(e){const t=e.href;if(Z.has(t))return Z.get(t);let n;try{const r=(async()=>{let a=await v.hooks.reroute({url:new URL(e),fetch:async(s,i)=>ft(s,i,e).promise})??e;if(typeof a=="string"){const s=new URL(e);v.hash?s.hash=a:s.pathname=a,a=s}return a})();Z.set(t,r),n=await r}catch{Z.delete(t);return}return n}async function de(e,t){if(e&&!le(e,U,v.hash)){const n=await cn(e);if(!n)return;const r=ln(n);for(const a of Le){const s=a.exec(r);if(s)return{id:ie(e),invalidating:t,route:a,params:wt(s),url:e}}}}function ln(e){return yt(v.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(U.length))||"/"}function ie(e){return(v.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function dt({url:e,type:t,intent:n,delta:r}){let a=!1;const s=je(w,n,e,t);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return X||Te.forEach(o=>o(i)),a?null:s}async function z({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:f=Me,block:d=Me}){const h=$;$=c;const u=await de(t,!1),l=e==="enter"?je(w,u,t,e):dt({url:t,type:e,delta:n?.delta,intent:u});if(!l){d(),$===c&&($=h);return}const p=A,_=I;f(),X=!0,oe&&l.navigation.type!=="enter"&&O.navigating.set(Y.current=l.navigation);let m=u&&await ut(u);if(!m){if(le(t,U,v.hash))return await q(t);m=await ht(t,{id:null},await M(new Ie(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404)}if(t=u?.url||t,$!==c)return l.reject(new Error("navigation aborted")),!1;if(m.type==="redirect")if(o>=20)m=await ue({status:500,error:await M(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return await ct(new URL(m.location,t).href,{},o+1,c),!1;else m.props.page.status>=400&&await O.updated.check()&&(await nt(),await q(t));if(rn(),Ue(p),st(_),m.props.page.url.pathname!==t.pathname&&(t.pathname=m.props.page.url.pathname),i=n?n.state:i,!n){const g=s?0:1,y={[V]:A+=g,[W]:I+=g,[Je]:i};(s?history.replaceState:history.pushState).call(history,y,"",t),s||nn(A,I)}if(C=null,m.props.page.state=i,oe){w=m.state,m.props.page&&(m.props.page.url=t);const g=(await Promise.all(Array.from(rt,y=>y(l.navigation)))).filter(y=>typeof y=="function");if(g.length>0){let y=function(){g.forEach(b=>{B.delete(b)})};g.push(y),g.forEach(b=>{B.add(b)})}ot.$set(m.props),Xt(m.props.page),at=!0}else lt(m,Ae,!1);const{activeElement:R}=document;await mt();const E=n?n.scroll:a?Ee():null;if(qe){const g=t.hash&&document.getElementById(decodeURIComponent(v.hash?t.hash.split("#")[2]??"":t.hash.slice(1)));E?scrollTo(E.x,E.y):g?g.scrollIntoView():scrollTo(0,0)}const L=document.activeElement!==R&&document.activeElement!==document.body;!r&&!L&&pn(),qe=!0,m.props.page&&Object.assign(S,m.props.page),X=!1,e==="popstate"&&it(I),l.fulfil(void 0),B.forEach(g=>g(l.navigation)),O.navigating.set(Y.current=null)}async function ht(e,t,n,r){return e.origin===ce&&e.pathname===location.pathname&&!xe?await ue({status:r,error:n,url:e,route:t}):await q(e)}function fn(){let e,t,n;N.addEventListener("mousemove",o=>{const c=o.target;clearTimeout(e),e=setTimeout(()=>{s(c,j.hover)},20)});function r(o){o.defaultPrevented||s(o.composedPath()[0],j.tap)}N.addEventListener("mousedown",r),N.addEventListener("touchstart",r,{passive:!0});const a=new IntersectionObserver(o=>{for(const c of o)c.isIntersecting&&(ye(new URL(c.target.href)),a.unobserve(c.target))},{threshold:0});async function s(o,c){const f=Ze(o,N),d=f===t&&c>=n;if(!f||d)return;const{url:h,external:u,download:l}=ve(f,U,v.hash);if(u||l)return;const p=ee(f),_=h&&ie(w.url)===ie(h);if(!(p.reload||_))if(c<=p.preload_data){t=f,n=j.tap;const m=await de(h,!1);if(!m)return;an(m)}else c<=p.preload_code&&(t=f,n=c,ye(h))}function i(){a.disconnect();for(const o of N.querySelectorAll("a")){const{url:c,external:f,download:d}=ve(o,U,v.hash);if(f||d)continue;const h=ee(o);h.reload||(h.preload_code===j.viewport&&a.observe(o),h.preload_code===j.eager&&ye(c))}}B.add(i),i()}function M(e,t){if(e instanceof fe)return e.body;const n=te(e),r=Yt(e);return v.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function Oe(e,t){we(()=>(e.add(t),()=>{e.delete(t)}))}function Sn(e){Oe(B,e)}function En(e){Oe(Te,e)}function Rn(e){Oe(rt,e)}function un(e){if(typeof e=="function")re.push(e);else{const{href:t}=new URL(e,location.href);re.push(n=>n.href===t)}}function dn(){history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let n=!1;if(Ge(),!X){const r=je(w,void 0,null,"leave"),a={...r.navigation,cancel:()=>{n=!0,r.reject(new Error("navigation cancelled"))}};Te.forEach(s=>s(a))}n?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&Ge()}),navigator.connection?.saveData||fn(),N.addEventListener("click",async t=>{if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const n=Ze(t.composedPath()[0],N);if(!n)return;const{url:r,external:a,target:s,download:i}=ve(n,U,v.hash);if(!r)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const o=ee(n);if(!(n instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||i)return;const[f,d]=(v.hash?r.hash.replace(/^#/,""):r.href).split("#"),h=f===ge(location);if(a||o.reload&&(!h||!d)){dt({url:r,type:"link"})?X=!0:t.preventDefault();return}if(d!==void 0&&h){const[,u]=w.url.href.split("#");if(u===d){if(t.preventDefault(),d===""||d==="top"&&n.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const l=n.ownerDocument.getElementById(decodeURIComponent(d));l&&(l.scrollIntoView(),l.focus())}return}if(G=!0,Ue(A),e(r),!o.replace_state)return;G=!1}t.preventDefault(),await new Promise(u=>{requestAnimationFrame(()=>{setTimeout(u,0)}),setTimeout(u,100)}),await z({type:"link",url:r,keepfocus:o.keepfocus,noscroll:o.noscroll,replace_state:o.replace_state??r.href===location.href})}),N.addEventListener("submit",t=>{if(t.defaultPrevented)return;const n=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if((r?.formTarget||n.target)==="_blank"||(r?.formMethod||n.method)!=="get")return;const i=new URL(r?.hasAttribute("formaction")&&r?.formAction||n.action);if(le(i,U,!1))return;const o=t.target,c=ee(o);if(c.reload)return;t.preventDefault(),t.stopPropagation();const f=new FormData(o),d=r?.getAttribute("name");d&&f.append(d,r?.getAttribute("value")??""),i.search=new URLSearchParams(f).toString(),z({type:"form",url:i,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??i.href===location.href})}),addEventListener("popstate",async t=>{if(t.state?.[V]){const n=t.state[V];if($={},n===A)return;const r=D[n],a=t.state[Je]??{},s=new URL(t.state[Ct]??location.href),i=t.state[W],o=w.url?ge(location)===ge(w.url):!1;if(i===I&&(at||o)){a!==S.state&&(S.state=a),e(s),D[A]=Ee(),r&&scrollTo(r.x,r.y),A=n;return}const f=n-A;await z({type:"popstate",url:s,popped:{state:a,scroll:r,delta:f},accept:()=>{A=n,I=i},block:()=>{history.go(-f)},nav_token:$})}else if(!G){const n=new URL(location.href);e(n),v.hash&&location.reload()}}),addEventListener("hashchange",()=>{G&&(G=!1,history.replaceState({...history.state,[V]:++A,[W]:I},"",location.href))});for(const t of document.querySelectorAll("link"))tn.has(t.rel)&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&O.navigating.set(Y.current=null)});function e(t){w.url=S.url=t,O.page.set($e(S)),O.page.notify()}}async function hn(e,{status:t=200,error:n,node_ids:r,params:a,route:s,server_route:i,data:o,form:c}){xe=!0;const f=new URL(location.href);let d;({params:a={},route:s={id:null}}=await de(f,!1)||{}),d=Le.find(({id:l})=>l===s.id);let h,u=!0;try{const l=r.map(async(_,m)=>{const R=o[m];return R?.uses&&(R.uses=gt(R.uses)),Ne({loader:v.nodes[_],url:f,params:a,route:s,parent:async()=>{const E={};for(let L=0;L<m;L+=1)Object.assign(E,(await l[L]).data);return E},server_data_node:Ce(R)})}),p=await Promise.all(l);if(d){const _=d.layouts;for(let m=0;m<_.length;m++)_[m]||p.splice(m,0,void 0)}h=se({url:f,params:a,branch:p,status:t,error:n,form:c,route:d??null})}catch(l){if(l instanceof Re){await q(new URL(l.location,location.href));return}h=await ue({status:te(l),error:await M(l,{url:f,params:a,route:s}),url:f,route:s}),e.textContent="",u=!1}h.props.page&&(h.props.page.state={}),lt(h,e,u)}async function pt(e,t){const n=new URL(e);n.pathname=en(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append(Wt,"1"),n.searchParams.append(zt,t.map(s=>s?"1":"0").join(""));const r=window.fetch,a=await r(n.href,{});if(!a.ok){let s;throw a.headers.get("content-type")?.includes("application/json")?s=await a.json():a.status===404?s="Not Found":a.status===500&&(s="Internal Error"),new fe(a.status,s)}return new Promise(async s=>{const i=new Map,o=a.body.getReader(),c=new TextDecoder;function f(h){return Gt(h,{...v.decoders,Promise:u=>new Promise((l,p)=>{i.set(u,{fulfil:l,reject:p})})})}let d="";for(;;){const{done:h,value:u}=await o.read();if(h&&!d)break;for(d+=!u&&d?`
`:c.decode(u,{stream:!0});;){const l=d.indexOf(`
`);if(l===-1)break;const p=JSON.parse(d.slice(0,l));if(d=d.slice(l+1),p.type==="redirect")return s(p);if(p.type==="data")p.nodes?.forEach(_=>{_?.type==="data"&&(_.uses=gt(_.uses),_.data=f(_.data))}),s(p);else if(p.type==="chunk"){const{id:_,data:m,error:R}=p,E=i.get(_);i.delete(_),R?E.reject(f(R)):E.fulfil(f(m))}}}})}function gt(e){return{dependencies:new Set(e?.dependencies??[]),params:new Set(e?.params??[]),parent:!!e?.parent,route:!!e?.route,url:!!e?.url,search_params:new Set(e?.search_params??[])}}function pn(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function je(e,t,n,r){let a,s;const i=new Promise((c,f)=>{a=c,s=f});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:e.route?.id??null},url:e.url},to:n&&{params:t?.params??null,route:{id:t?.route?.id??null},url:n},willUnload:!t,type:r,complete:i},fulfil:a,reject:s}}function $e(e){return{data:e.data,error:e.error,form:e.form,params:e.params,route:e.route,state:e.state,status:e.status,url:e.url}}function gn(e){const t=new URL(e);return t.hash=decodeURIComponent(e.hash),t}export{Sn as a,En as b,kn as c,wn as l,Rn as o,S as p,O as s};
