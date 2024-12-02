var on=e=>{throw TypeError(e)};var St=(e,t,n)=>t.has(e)||on("Cannot "+n);var p=(e,t,n)=>(St(e,t,"read from private field"),n?n.call(e):t.get(e)),k=(e,t,n)=>t.has(e)?on("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),I=(e,t,n,r)=>(St(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),R=(e,t,n)=>(St(e,t,"access private method"),n);var ln=(e,t,n,r)=>({set _(s){I(e,t,s,n)},get _(){return p(e,t,r)}});(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const Ir="modulepreload",Ar=function(e,t){return new URL(e,t).href},an={},Cr=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){const u=document.getElementsByTagName("link"),a=document.querySelector("meta[property=csp-nonce]"),c=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(n.map(o=>{if(o=Ar(o,r),o in an)return;an[o]=!0;const f=o.endsWith(".css"),_=f?'[rel="stylesheet"]':"";if(!!r)for(let v=u.length-1;v>=0;v--){const y=u[v];if(y.href===o&&(!f||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${_}`))return;const d=document.createElement("link");if(d.rel=f?"stylesheet":Ir,f||(d.as="script"),d.crossOrigin="",d.href=o,c&&d.setAttribute("nonce",c),document.head.appendChild(d),f)return new Promise((v,y)=>{d.addEventListener("load",v),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${o}`)))})}))}function i(u){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=u,window.dispatchEvent(a),!a.defaultPrevented)throw u}return s.then(u=>{for(const a of u||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})},Tr="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Tr);let Pe=!1;function kr(){Pe=!0}kr();const Mt=1,Ut=2,Cn=4,Rr=8,Nr=16,Pr=1,Or=2,Lr=4,qr=8,Dr=16,Fr=1,Mr=2,O=Symbol(),mi="http://www.w3.org/2000/svg",Tn=!1;var $t=Array.isArray,jt=Array.from,Ur=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,kn=Object.getOwnPropertyDescriptors,$r=Object.prototype,jr=Array.prototype,rt=Object.getPrototypeOf;function De(e){return typeof e=="function"}const Tt=()=>{};function Vr(e){return typeof(e==null?void 0:e.then)=="function"}function Br(e){return e()}function kt(e){for(var t=0;t<e.length;t++)e[t]()}const j=2,Rn=4,Ye=8,Vt=16,V=32,ze=64,Rt=128,ge=256,st=512,q=1024,ae=2048,Ge=4096,Y=8192,Oe=16384,Hr=32768,dt=65536,Wr=1<<17,Yr=1<<19,Nn=1<<20,te=Symbol("$state"),Pn=Symbol("legacy props"),zr=Symbol("");function On(e){return e===this.v}function Gr(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Ei(e,t){return e!==t}function Bt(e){return!Gr(e,this.v)}function Kr(e){throw new Error("effect_in_teardown")}function Qr(){throw new Error("effect_in_unowned_derived")}function Xr(e){throw new Error("effect_orphan")}function Zr(){throw new Error("effect_update_depth_exceeded")}function Jr(e){throw new Error("props_invalid_value")}function es(){throw new Error("state_descriptors_fixed")}function ts(){throw new Error("state_prototype_fixed")}function ns(){throw new Error("state_unsafe_local_read")}function rs(){throw new Error("state_unsafe_mutation")}function L(e){return{f:0,v:e,reactions:null,equals:On,version:0}}function Si(e){return Ln(L(e))}function ke(e,t=!1){var r;const n=L(e);return t||(n.equals=Bt),Pe&&m!==null&&m.l!==null&&((r=m.l).s??(r.s=[])).push(n),n}function xi(e,t=!1){return Ln(ke(e,t))}function Ln(e){return S!==null&&S.f&j&&(z===null?vs([e]):z.push(e)),e}function B(e,t){return S!==null&&vt()&&S.f&(j|Vt)&&(z===null||!z.includes(e))&&rs(),xe(e,t)}function xe(e,t){return e.equals(t)||(e.v=t,e.version=Zn(),qn(e,ae),vt()&&w!==null&&w.f&q&&!(w.f&V)&&(P!==null&&P.includes(e)?(Q(w,ae),pt(w)):le===null?hs([e]):le.push(e))),t}function qn(e,t){var n=e.reactions;if(n!==null)for(var r=vt(),s=n.length,i=0;i<s;i++){var u=n[i],a=u.f;a&ae||!r&&u===w||(Q(u,t),a&(q|ge)&&(a&j?qn(u,Ge):pt(u)))}}function Re(e){var t=j|ae;w===null?t|=ge:w.f|=Nn;var n=S!==null&&S.f&j?S:null;const r={children:null,ctx:m,deps:null,equals:On,f:t,fn:e,reactions:null,v:null,version:0,parent:n??w};return n!==null&&(n.children??(n.children=[])).push(r),r}function ss(e){const t=Re(e);return t.equals=Bt,t}function Dn(e){var t=e.children;if(t!==null){e.children=null;for(var n=0;n<t.length;n+=1){var r=t[n];r.f&j?Ht(r):we(r)}}}function is(e){for(var t=e.parent;t!==null;){if(!(t.f&j))return t;t=t.parent}return null}function Fn(e){var t,n=w;U(is(e));try{Dn(e),t=Jn(e)}finally{U(n)}return t}function Mn(e){var t=Fn(e),n=(_e||e.f&ge)&&e.deps!==null?Ge:q;Q(e,n),e.equals(t)||(e.v=t,e.version=Zn())}function Ht(e){Dn(e),Ve(e,0),Q(e,Oe),e.v=e.children=e.deps=e.ctx=e.reactions=null}function Un(e){w===null&&S===null&&Xr(),S!==null&&S.f&ge&&Qr(),Yt&&Kr()}function us(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function Le(e,t,n,r=!0){var s=(e&ze)!==0,i=w,u={ctx:m,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|ae,first:null,fn:t,last:null,next:null,parent:s?null:i,prev:null,teardown:null,transitions:null,version:0};if(n){var a=Ie;try{fn(!0),ht(u),u.f|=Hr}catch(f){throw we(u),f}finally{fn(a)}}else t!==null&&pt(u);var c=n&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&Nn)===0;if(!c&&!s&&r&&(i!==null&&us(u,i),S!==null&&S.f&j)){var o=S;(o.children??(o.children=[])).push(u)}return u}function Ii(){return S===null?!1:!_e}function $n(e){const t=Le(Ye,null,!1);return Q(t,q),t.teardown=e,t}function Nt(e){Un();var t=w!==null&&(w.f&V)!==0&&m!==null&&!m.m;if(t){var n=m;(n.e??(n.e=[])).push({fn:e,effect:w,reaction:S})}else{var r=jn(e);return r}}function os(e){return Un(),as(e)}function ls(e){const t=Le(ze,e,!0);return()=>{we(t)}}function jn(e){return Le(Rn,e,!1)}function as(e){return Le(Ye,e,!0)}function fs(e){return Ke(e)}function Ke(e,t=0){return Le(Ye|Vt|t,e,!0)}function ne(e,t=!0){return Le(Ye|V,e,!0,t)}function Vn(e){var t=e.teardown;if(t!==null){const n=Yt,r=S;cn(!0),K(null);try{t.call(null)}finally{cn(n),K(r)}}}function Bn(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var n=0;n<t.length;n+=1)Ht(t[n])}}function Hn(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){var r=n.next;we(n,t),n=r}}function cs(e){for(var t=e.first;t!==null;){var n=t.next;t.f&V||we(t),t=n}}function we(e,t=!0){var n=!1;if((t||e.f&Yr)&&e.nodes_start!==null){for(var r=e.nodes_start,s=e.nodes_end;r!==null;){var i=r===s?null:yt(r);r.remove(),r=i}n=!0}Hn(e,t&&!n),Bn(e),Ve(e,0),Q(e,Oe);var u=e.transitions;if(u!==null)for(const c of u)c.stop();Vn(e);var a=e.parent;a!==null&&a.first!==null&&Wn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function Wn(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function pe(e,t){var n=[];Wt(e,n,!0),Yn(n,()=>{we(e),t&&t()})}function Yn(e,t){var n=e.length;if(n>0){var r=()=>--n||t();for(var s of e)s.out(r)}else t()}function Wt(e,t,n){if(!(e.f&Y)){if(e.f^=Y,e.transitions!==null)for(const u of e.transitions)(u.is_global||n)&&t.push(u);for(var r=e.first;r!==null;){var s=r.next,i=(r.f&dt)!==0||(r.f&V)!==0;Wt(r,t,i?n:!1),r=s}}}function be(e){zn(e,!0)}function zn(e,t){if(e.f&Y){Qe(e)&&ht(e),e.f^=Y;for(var n=e.first;n!==null;){var r=n.next,s=(n.f&dt)!==0||(n.f&V)!==0;zn(n,s?t:!1),n=r}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||t)&&i.in()}}let it=!1,Pt=[];function Gn(){it=!1;const e=Pt.slice();Pt=[],kt(e)}function _t(e){it||(it=!0,queueMicrotask(Gn)),Pt.push(e)}function ds(){it&&Gn()}function Kn(e){throw new Error("lifecycle_outside_component")}const Qn=0,_s=1;let et=!1,tt=Qn,je=!1,Ie=!1,Yt=!1;function fn(e){Ie=e}function cn(e){Yt=e}let de=[],Ae=0;let S=null;function K(e){S=e}let w=null;function U(e){w=e}let z=null;function vs(e){z=e}let P=null,D=0,le=null;function hs(e){le=e}let Xn=0,_e=!1,m=null;function dn(e){m=e}function Zn(){return++Xn}function vt(){return!Pe||m!==null&&m.l===null}function Qe(e){var u,a;var t=e.f;if(t&ae)return!0;if(t&Ge){var n=e.deps,r=(t&ge)!==0;if(n!==null){var s;if(t&st){for(s=0;s<n.length;s++)((u=n[s]).reactions??(u.reactions=[])).push(e);e.f^=st}for(s=0;s<n.length;s++){var i=n[s];if(Qe(i)&&Mn(i),r&&w!==null&&!_e&&!((a=i==null?void 0:i.reactions)!=null&&a.includes(e))&&(i.reactions??(i.reactions=[])).push(e),i.version>e.version)return!0}}r||Q(e,q)}return!1}function ps(e,t){for(var n=t;n!==null;){if(n.f&Rt)try{n.fn(e);return}catch{n.f^=Rt}n=n.parent}throw et=!1,e}function bs(e){return(e.f&Oe)===0&&(e.parent===null||(e.parent.f&Rt)===0)}function zt(e,t,n,r){if(et){if(n===null&&(et=!1),bs(t))throw e;return}n!==null&&(et=!0);{ps(e,t);return}}function Jn(e){var l;var t=P,n=D,r=le,s=S,i=_e,u=z,a=m,c=e.f;P=null,D=0,le=null,S=c&(V|ze)?null:e,_e=!Ie&&(c&ge)!==0,z=null,m=e.ctx;try{var o=(0,e.fn)(),f=e.deps;if(P!==null){var _;if(Ve(e,D),f!==null&&D>0)for(f.length=D+P.length,_=0;_<P.length;_++)f[D+_]=P[_];else e.deps=f=P;if(!_e)for(_=D;_<f.length;_++)((l=f[_]).reactions??(l.reactions=[])).push(e)}else f!==null&&D<f.length&&(Ve(e,D),f.length=D);return o}finally{P=t,D=n,le=r,S=s,_e=i,z=u,m=a}}function ys(e,t){let n=t.reactions;if(n!==null){var r=n.indexOf(e);if(r!==-1){var s=n.length-1;s===0?n=t.reactions=null:(n[r]=n[s],n.pop())}}n===null&&t.f&j&&(P===null||!P.includes(t))&&(Q(t,Ge),t.f&(ge|st)||(t.f^=st),Ve(t,0))}function Ve(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)ys(e,n[r])}function ht(e){var t=e.f;if(!(t&Oe)){Q(e,q);var n=w,r=m;w=e;try{t&Vt?cs(e):Hn(e),Bn(e),Vn(e);var s=Jn(e);e.teardown=typeof s=="function"?s:null,e.version=Xn}catch(i){zt(i,e,n,r||e.ctx)}finally{w=n}}}function er(){Ae>1e3&&(Ae=0,Zr()),Ae++}function tr(e){var t=e.length;if(t!==0){er();var n=Ie;Ie=!0;try{for(var r=0;r<t;r++){var s=e[r];s.f&q||(s.f^=q);var i=[];nr(s,i),gs(i)}}finally{Ie=n}}}function gs(e){var t=e.length;if(t!==0)for(var n=0;n<t;n++){var r=e[n];if(!(r.f&(Oe|Y)))try{Qe(r)&&(ht(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?Wn(r):r.fn=null))}catch(s){zt(s,r,null,r.ctx)}}}function ws(){if(je=!1,Ae>1001)return;const e=de;de=[],tr(e),je||(Ae=0)}function pt(e){tt===Qn&&(je||(je=!0,queueMicrotask(ws)));for(var t=e;t.parent!==null;){t=t.parent;var n=t.f;if(n&(ze|V)){if(!(n&q))return;t.f^=q}}de.push(t)}function nr(e,t){var n=e.first,r=[];e:for(;n!==null;){var s=n.f,i=(s&V)!==0,u=i&&(s&q)!==0,a=n.next;if(!u&&!(s&Y))if(s&Ye){if(i)n.f^=q;else try{Qe(n)&&ht(n)}catch(_){zt(_,n,null,n.ctx)}var c=n.first;if(c!==null){n=c;continue}}else s&Rn&&r.push(n);if(a===null){let _=n.parent;for(;_!==null;){if(e===_)break e;var o=_.next;if(o!==null){n=o;continue e}_=_.parent}}n=a}for(var f=0;f<r.length;f++)c=r[f],t.push(c),nr(c,t)}function Gt(e){var t=tt,n=de;try{er();const s=[];tt=_s,de=s,je=!1,tr(n);var r=e==null?void 0:e();return ds(),(de.length>0||s.length>0)&&Gt(),Ae=0,r}finally{tt=t,de=n}}async function Ai(){await Promise.resolve(),Gt()}function N(e){var f;var t=e.f,n=(t&j)!==0;if(n&&t&Oe){var r=Fn(e);return Ht(e),r}if(S!==null){z!==null&&z.includes(e)&&ns();var s=S.deps;P===null&&s!==null&&s[D]===e?D++:P===null?P=[e]:P.push(e),le!==null&&w!==null&&w.f&q&&!(w.f&V)&&le.includes(e)&&(Q(w,ae),pt(w))}else if(n&&e.deps===null)for(var i=e,u=i.parent,a=i;u!==null;)if(u.f&j){var c=u;a=c,u=c.parent}else{var o=u;(f=o.deriveds)!=null&&f.includes(a)||(o.deriveds??(o.deriveds=[])).push(a);break}return n&&(i=e,Qe(i)&&Mn(i)),e.v}function Be(e){const t=S;try{return S=null,e()}finally{S=t}}const ms=~(ae|Ge|q);function Q(e,t){e.f=e.f&ms|t}function Ci(e){return rr().get(e)}function Ti(e,t){return rr().set(e,t),t}function rr(e){return m===null&&Kn(),m.c??(m.c=new Map(Es(m)||void 0))}function Es(e){let t=e.p;for(;t!==null;){const n=t.c;if(n!==null)return n;t=t.p}return null}function Kt(e,t=!1,n){m={p:m,c:null,e:null,m:!1,s:e,x:null,l:null},Pe&&!t&&(m.l={s:null,u:null,r1:[],r2:L(!1)})}function Qt(e){const t=m;if(t!==null){e!==void 0&&(t.x=e);const u=t.e;if(u!==null){var n=w,r=S;t.e=null;try{for(var s=0;s<u.length;s++){var i=u[s];U(i.effect),K(i.reaction),jn(i.fn)}}finally{U(n),K(r)}}m=t.p,t.m=!0}return e||{}}function Ss(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(te in e)Ot(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&te in n&&Ot(n)}}}function Ot(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{Ot(e[r],t)}catch{}const n=rt(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=kn(n);for(let s in r){const i=r[s].get;if(i)try{i.call(e)}catch{}}}}}function Ee(e,t=null,n){if(typeof e!="object"||e===null||te in e)return e;const r=rt(e);if(r!==$r&&r!==jr)return e;var s=new Map,i=$t(e),u=L(0);i&&s.set("length",L(e.length));var a;return new Proxy(e,{defineProperty(c,o,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&es();var _=s.get(o);return _===void 0?(_=L(f.value),s.set(o,_)):B(_,Ee(f.value,a)),!0},deleteProperty(c,o){var f=s.get(o);if(f===void 0)o in c&&s.set(o,L(O));else{if(i&&typeof o=="string"){var _=s.get("length"),l=Number(o);Number.isInteger(l)&&l<_.v&&B(_,l)}B(f,O),_n(u)}return!0},get(c,o,f){var v;if(o===te)return e;var _=s.get(o),l=o in c;if(_===void 0&&(!l||(v=oe(c,o))!=null&&v.writable)&&(_=L(Ee(l?c[o]:O,a)),s.set(o,_)),_!==void 0){var d=N(_);return d===O?void 0:d}return Reflect.get(c,o,f)},getOwnPropertyDescriptor(c,o){var f=Reflect.getOwnPropertyDescriptor(c,o);if(f&&"value"in f){var _=s.get(o);_&&(f.value=N(_))}else if(f===void 0){var l=s.get(o),d=l==null?void 0:l.v;if(l!==void 0&&d!==O)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return f},has(c,o){var d;if(o===te)return!0;var f=s.get(o),_=f!==void 0&&f.v!==O||Reflect.has(c,o);if(f!==void 0||w!==null&&(!_||(d=oe(c,o))!=null&&d.writable)){f===void 0&&(f=L(_?Ee(c[o],a):O),s.set(o,f));var l=N(f);if(l===O)return!1}return _},set(c,o,f,_){var C;var l=s.get(o),d=o in c;if(i&&o==="length")for(var v=f;v<l.v;v+=1){var y=s.get(v+"");y!==void 0?B(y,O):v in c&&(y=L(O),s.set(v+"",y))}l===void 0?(!d||(C=oe(c,o))!=null&&C.writable)&&(l=L(void 0),B(l,Ee(f,a)),s.set(o,l)):(d=l.v!==O,B(l,Ee(f,a)));var h=Reflect.getOwnPropertyDescriptor(c,o);if(h!=null&&h.set&&h.set.call(_,f),!d){if(i&&typeof o=="string"){var b=s.get("length"),E=Number(o);Number.isInteger(E)&&E>=b.v&&B(b,E+1)}_n(u)}return!0},ownKeys(c){N(u);var o=Reflect.ownKeys(c).filter(l=>{var d=s.get(l);return d===void 0||d.v!==O});for(var[f,_]of s)_.v!==O&&!(f in c)&&o.push(f);return o},setPrototypeOf(){ts()}})}function _n(e,t=1){B(e,e.v+t)}function vn(e){return e!==null&&typeof e=="object"&&te in e?e[te]:e}function ki(e,t){return Object.is(vn(e),vn(t))}var hn,sr,ir;function xs(){if(hn===void 0){hn=window;var e=Element.prototype,t=Node.prototype;sr=oe(t,"firstChild").get,ir=oe(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function bt(e=""){return document.createTextNode(e)}function ut(e){return sr.call(e)}function yt(e){return ir.call(e)}function pn(e,t){return ut(e)}function ot(e,t){{var n=ut(e);return n instanceof Comment&&n.data===""?yt(n):n}}function Is(e,t=1,n=!1){let r=e;for(;t--;)r=yt(r);return r}function As(e){e.textContent=""}let Cs=!1;function Ts(e,t){if(t){const n=document.body;e.autofocus=!0,_t(()=>{document.activeElement===n&&e.focus()})}}let bn=!1;function ks(){bn||(bn=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n.__on_r)==null||t.call(n)})},{capture:!0}))}function ur(e){var t=S,n=w;K(null),U(null);try{return e()}finally{K(t),U(n)}}function Ri(e,t,n,r=n){e.addEventListener(t,()=>ur(n));const s=e.__on_r;s?e.__on_r=()=>{s(),r()}:e.__on_r=r,ks()}const or=new Set,Lt=new Set;function lr(e,t,n,r){function s(i){if(r.capture||Fe.call(t,i),!i.cancelBubble)return ur(()=>n.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?_t(()=>{t.addEventListener(e,s,r)}):t.addEventListener(e,s,r),s}function Ni(e,t,n,r,s){var i={capture:r,passive:s},u=lr(e,t,n,i);(t===document.body||t===window||t===document)&&$n(()=>{t.removeEventListener(e,u,i)})}function Rs(e){for(var t=0;t<e.length;t++)or.add(e[t]);for(var n of Lt)n(e)}function Fe(e){var E;var t=this,n=t.ownerDocument,r=e.type,s=((E=e.composedPath)==null?void 0:E.call(e))||[],i=s[0]||e.target,u=0,a=e.__root;if(a){var c=s.indexOf(a);if(c!==-1&&(t===document||t===window)){e.__root=t;return}var o=s.indexOf(t);if(o===-1)return;c<=o&&(u=c)}if(i=s[u]||e.target,i!==t){Ur(e,"currentTarget",{configurable:!0,get(){return i||n}});var f=S,_=w;K(null),U(null);try{for(var l,d=[];i!==null;){var v=i.assignedSlot||i.parentNode||i.host||null;try{var y=i["__"+r];if(y!==void 0&&!i.disabled)if($t(y)){var[h,...b]=y;h.apply(i,[e,...b])}else y.call(i,e)}catch(C){l?d.push(C):l=C}if(e.cancelBubble||v===t||v===null)break;i=v}if(l){for(let C of d)queueMicrotask(()=>{throw C});throw l}}finally{e.__root=t,delete e.currentTarget,K(f),U(_)}}}function Ns(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function lt(e,t){var n=w;n.nodes_start===null&&(n.nodes_start=e,n.nodes_end=t)}function ar(e,t){var n=(t&Fr)!==0,r=(t&Mr)!==0,s,i=!e.startsWith("<!>");return()=>{s===void 0&&(s=Ns(i?e:"<!>"+e),n||(s=ut(s)));var u=r?document.importNode(s,!0):s.cloneNode(!0);if(n){var a=ut(u),c=u.lastChild;lt(a,c)}else lt(u,u);return u}}function Pi(e=""){{var t=bt(e+"");return lt(t,t),t}}function qt(){var e=document.createDocumentFragment(),t=document.createComment(""),n=bt();return e.append(t,n),lt(t,n),e}function Ue(e,t){e!==null&&e.before(t)}function Ps(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Os=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Ls(e){return Os.includes(e)}const qs={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",srcobject:"srcObject"};function Ds(e){return e=e.toLowerCase(),qs[e]??e}const Fs=["touchstart","touchmove"];function Ms(e){return Fs.includes(e)}function Us(e,t){var n=t==null?"":typeof t=="object"?t+"":t;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function Oi(e,t){return $s(e,t)}const me=new Map;function $s(e,{target:t,anchor:n,props:r={},events:s,context:i,intro:u=!0}){xs();var a=new Set,c=_=>{for(var l=0;l<_.length;l++){var d=_[l];if(!a.has(d)){a.add(d);var v=Ms(d);t.addEventListener(d,Fe,{passive:v});var y=me.get(d);y===void 0?(document.addEventListener(d,Fe,{passive:v}),me.set(d,1)):me.set(d,y+1)}}};c(jt(or)),Lt.add(c);var o=void 0,f=ls(()=>{var _=n??t.appendChild(bt());return ne(()=>{if(i){Kt({});var l=m;l.c=i}s&&(r.$$events=s),o=e(_,r)||{},i&&Qt()}),()=>{var v;for(var l of a){t.removeEventListener(l,Fe);var d=me.get(l);--d===0?(document.removeEventListener(l,Fe),me.delete(l)):me.set(l,d)}Lt.delete(c),Dt.delete(o),_!==n&&((v=_.parentNode)==null||v.removeChild(_))}});return Dt.set(o,f),o}let Dt=new WeakMap;function Li(e){const t=Dt.get(e);t&&t()}const xt=0,Ze=1,It=2;function js(e,t,n,r,s){var i=e,u=vt(),a=m,c=O,o,f,_,l=(u?L:ke)(void 0),d=(u?L:ke)(void 0),v=!1;function y(b,E){v=!0,E&&(U(h),K(h),dn(a));try{b===xt&&n&&(o?be(o):o=ne(()=>n(i))),b===Ze&&r&&(f?be(f):f=ne(()=>r(i,l))),b===It&&s&&(_?be(_):_=ne(()=>s(i,d))),b!==xt&&o&&pe(o,()=>o=null),b!==Ze&&f&&pe(f,()=>f=null),b!==It&&_&&pe(_,()=>_=null)}finally{E&&(dn(null),K(null),U(null),Gt())}}var h=Ke(()=>{if(c!==(c=t())){if(Vr(c)){var b=c;v=!1,b.then(E=>{b===c&&(xe(l,E),y(Ze,!0))},E=>{if(b===c)throw xe(d,E),y(It,!0),d.v}),_t(()=>{v||y(xt,!0)})}else xe(l,c),y(Ze,!1);return()=>c=O}})}function Vs(e,t,n,r=null,s=!1){var i=e,u=null,a=null,c=null,o=s?dt:0;Ke(()=>{c!==(c=!!t())&&(c?(u?be(u):u=ne(()=>n(i)),a&&pe(a,()=>{a=null})):(a?be(a):r&&(a=ne(()=>r(i))),u&&pe(u,()=>{u=null})))},o)}function Bs(e,t){return t}function Hs(e,t,n,r){for(var s=[],i=t.length,u=0;u<i;u++)Wt(t[u].e,s,!0);var a=i>0&&s.length===0&&n!==null;if(a){var c=n.parentNode;As(c),c.append(n),r.clear(),se(e,t[0].prev,t[i-1].next)}Yn(s,()=>{for(var o=0;o<i;o++){var f=t[o];a||(r.delete(f.k),se(e,f.prev,f.next)),we(f.e,!a)}})}function Ws(e,t,n,r,s,i=null){var u=e,a={flags:t,items:new Map,first:null},c=(t&Cn)!==0;if(c){var o=e;u=o.appendChild(bt())}var f=null,_=!1;Ke(()=>{var l=n(),d=$t(l)?l:l==null?[]:jt(l),v=d.length;if(!(_&&v===0)){_=v===0;{var y=S;Ys(d,a,u,s,t,(y.f&Y)!==0,r)}i!==null&&(v===0?f?be(f):f=ne(()=>i(u)):f!==null&&pe(f,()=>{f=null})),n()}})}function Ys(e,t,n,r,s,i,u){var tn,nn,rn,sn;var a=(s&Rr)!==0,c=(s&(Mt|Ut))!==0,o=e.length,f=t.items,_=t.first,l=_,d,v=null,y,h=[],b=[],E,C,g,x;if(a)for(x=0;x<o;x+=1)E=e[x],C=u(E,x),g=f.get(C),g!==void 0&&((tn=g.a)==null||tn.measure(),(y??(y=new Set)).add(g));for(x=0;x<o;x+=1){if(E=e[x],C=u(E,x),g=f.get(C),g===void 0){var X=l?l.e.nodes_start:n;v=Gs(X,t,v,v===null?t.first:v.next,E,C,x,r,s),f.set(C,v),h=[],b=[],l=v.next;continue}if(c&&zs(g,E,x,s),g.e.f&Y&&(be(g.e),a&&((nn=g.a)==null||nn.unfix(),(y??(y=new Set)).delete(g))),g!==l){if(d!==void 0&&d.has(g)){if(h.length<b.length){var fe=b[0],A;v=fe.prev;var Z=h[0],ce=h[h.length-1];for(A=0;A<h.length;A+=1)yn(h[A],fe,n);for(A=0;A<b.length;A+=1)d.delete(b[A]);se(t,Z.prev,ce.next),se(t,v,Z),se(t,ce,fe),l=fe,v=ce,x-=1,h=[],b=[]}else d.delete(g),yn(g,l,n),se(t,g.prev,g.next),se(t,g,v===null?t.first:v.next),se(t,v,g),v=g;continue}for(h=[],b=[];l!==null&&l.k!==C;)(i||!(l.e.f&Y))&&(d??(d=new Set)).add(l),b.push(l),l=l.next;if(l===null)continue;g=l}h.push(g),v=g,l=g.next}if(l!==null||d!==void 0){for(var qe=d===void 0?[]:jt(d);l!==null;)(i||!(l.e.f&Y))&&qe.push(l),l=l.next;var Et=qe.length;if(Et>0){var xr=s&Cn&&o===0?n:null;if(a){for(x=0;x<Et;x+=1)(rn=qe[x].a)==null||rn.measure();for(x=0;x<Et;x+=1)(sn=qe[x].a)==null||sn.fix()}Hs(t,qe,xr,f)}}a&&_t(()=>{var un;if(y!==void 0)for(g of y)(un=g.a)==null||un.apply()}),w.first=t.first&&t.first.e,w.last=v&&v.e}function zs(e,t,n,r){r&Mt&&xe(e.v,t),r&Ut?xe(e.i,n):e.i=n}function Gs(e,t,n,r,s,i,u,a,c){var o=(c&Mt)!==0,f=(c&Nr)===0,_=o?f?ke(s):L(s):s,l=c&Ut?L(u):u,d={i:l,v:_,k:i,a:null,e:null,prev:n,next:r};try{return d.e=ne(()=>a(e,_,l),Cs),d.e.prev=n&&n.e,d.e.next=r&&r.e,n===null?t.first=d:(n.next=d,n.e.next=d.e),r!==null&&(r.prev=d,r.e.prev=d.e),d}finally{}}function yn(e,t,n){for(var r=e.next?e.next.e.nodes_start:n,s=t?t.e.nodes_start:n,i=e.e.nodes_start;i!==r;){var u=yt(i);s.before(i),i=u}}function se(e,t,n){t===null?e.first=n:(t.next=n,t.e.next=n&&n.e),n!==null&&(n.prev=t,n.e.prev=t&&t.e)}function Ks(e,t,n){var r=e,s,i;Ke(()=>{s!==(s=t())&&(i&&(pe(i),i=null),s&&(i=ne(()=>n(r,s))))},dt)}function qi(e,t){var n=e.__attributes??(e.__attributes={});n.value===(n.value=t)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t)}function Di(e,t){var n=e.__attributes??(e.__attributes={});n.checked!==(n.checked=t)&&(e.checked=t)}function fr(e,t,n,r){var s=e.__attributes??(e.__attributes={});s[t]!==(s[t]=n)&&(t==="style"&&"__styles"in e&&(e.__styles={}),t==="loading"&&(e[zr]=n),n==null?e.removeAttribute(t):typeof n!="string"&&cr(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function Fi(e,t,n,r,s=!1,i=!1,u=!1){var a=t||{},c=e.tagName==="OPTION";for(var o in t)o in n||(n[o]=null);var f=cr(e),_=e.__attributes??(e.__attributes={});for(const h in n){let b=n[h];if(c&&h==="value"&&b==null){e.value=e.__value="",a[h]=b;continue}var l=a[h];if(b!==l){a[h]=b;var d=h[0]+h[1];if(d!=="$$"){if(d==="on"){const E={},C="$$"+h;let g=h.slice(2);var v=Ls(g);if(Ps(g)&&(g=g.slice(0,-7),E.capture=!0),!v&&l){if(b!=null)continue;e.removeEventListener(g,a[C],E),a[C]=null}if(b!=null)if(v)e[`__${g}`]=b,Rs([g]);else{let x=function(X){a[h].call(this,X)};a[C]=lr(g,e,x,E)}}else if(h==="style"&&b!=null)e.style.cssText=b+"";else if(h==="autofocus")Ts(e,!!b);else if(h==="__value"||h==="value"&&b!=null)e.value=e[h]=e.__value=b;else{var y=h;s||(y=Ds(y)),b==null&&!i?(_[h]=null,e.removeAttribute(h)):f.includes(y)&&(i||typeof b!="string")?e[y]=b:typeof b!="function"&&fr(e,y,b)}h==="style"&&"__styles"in e&&(e.__styles={})}}}return a}var gn=new Map;function cr(e){var t=gn.get(e.nodeName);if(t)return t;gn.set(e.nodeName,t=[]);for(var n,r=rt(e),s=Element.prototype;s!==r;){n=kn(r);for(var i in n)n[i].set&&t.push(i);r=rt(r)}return t}function Qs(e=!1){const t=m,n=t.l.u;if(!n)return;let r=()=>Ss(t.s);if(e){let s=0,i={};const u=Re(()=>{let a=!1;const c=t.s;for(const o in c)c[o]!==i[o]&&(i[o]=c[o],a=!0);return a&&s++,s});r=()=>N(u)}n.b.length&&os(()=>{wn(t,r),kt(n.b)}),Nt(()=>{const s=Be(()=>n.m.map(Br));return()=>{for(const i of s)typeof i=="function"&&i()}}),n.a.length&&Nt(()=>{wn(t,r),kt(n.a)})}function wn(e,t){if(e.l.s)for(const n of e.l.s)N(n);t()}function Mi(e){m===null&&Kn(),Pe&&m.l!==null?Xs(m).m.push(e):Nt(()=>{const t=Be(e);if(typeof t=="function")return t})}function Xs(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}function Zs(e,t,n){if(e==null)return t(void 0),Tt;const r=Be(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}let Je=!1;function Js(e,t,n){const r=n[t]??(n[t]={store:null,source:ke(void 0),unsubscribe:Tt});if(r.store!==e)if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=Tt;else{var s=!0;r.unsubscribe=Zs(e,i=>{s?r.source.v=i:B(r.source,i)}),s=!1}return N(r.source)}function Ui(e,t){return e.set(t),t}function ei(){const e={};return $n(()=>{for(var t in e)e[t].unsubscribe()}),e}function $i(e,t,n){return e.set(n),t}function ti(e){var t=Je;try{return Je=!1,[e(),Je]}finally{Je=t}}const ni={get(e,t){if(!e.exclude.includes(t))return e.props[t]},set(e,t){return!1},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ji(e,t,n){return new Proxy({props:e,exclude:t},ni)}const ri={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(De(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let s=e.props[r];De(s)&&(s=s());const i=oe(s,t);if(i&&i.set)return i.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(De(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const s=oe(r,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===te||t===Pn)return!1;for(let n of e.props)if(De(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props){De(n)&&(n=n());for(const r in n)t.includes(r)||t.push(r)}return t}};function Vi(...e){return new Proxy({props:e},ri)}function mn(e){for(var t=w,n=w;t!==null&&!(t.f&(V|ze));)t=t.parent;try{return U(t),e()}finally{U(n)}}function si(e,t,n,r){var fe;var s=(n&Pr)!==0,i=!Pe||(n&Or)!==0,u=(n&qr)!==0,a=(n&Dr)!==0,c=!1,o;u?[o,c]=ti(()=>e[t]):o=e[t];var f=te in e||Pn in e,_=((fe=oe(e,t))==null?void 0:fe.set)??(f&&u&&t in e?A=>e[t]=A:void 0),l=r,d=!0,v=!1,y=()=>(v=!0,d&&(d=!1,a?l=Be(r):l=r),l);o===void 0&&r!==void 0&&(_&&i&&Jr(),o=y(),_&&_(o));var h;if(i)h=()=>{var A=e[t];return A===void 0?y():(d=!0,v=!1,A)};else{var b=mn(()=>(s?Re:ss)(()=>e[t]));b.f|=Wr,h=()=>{var A=N(b);return A!==void 0&&(l=void 0),A===void 0?l:A}}if(!(n&Lr))return h;if(_){var E=e.$$legacy;return function(A,Z){return arguments.length>0?((!i||!Z||E||c)&&_(Z?h():A),A):h()}}var C=!1,g=!1,x=ke(o),X=mn(()=>Re(()=>{var A=h(),Z=N(x);return C?(C=!1,g=!0,Z):(g=!1,x.v=A)}));return s||(X.equals=Bt),function(A,Z){if(arguments.length>0){const ce=Z?N(X):i&&u?Ee(A):A;return X.equals(ce)||(C=!0,B(x,ce),v&&l!==void 0&&(l=ce),Be(()=>N(X))),A}return N(X)}}var En;const gt=typeof Symbol=="function"&&Symbol.observable||"@@observable",Xt=Symbol(),re=()=>{},at=()=>{};at.unsubscribe=at;const At=(e,t)=>{const n=e?e[t]:null;return typeof n=="function"?n.bind(e):re},dr=e=>({next:typeof e=="function"?e.bind(null):At(e,"next"),pause:At(e,"pause"),resume:At(e,"resume"),_value:void 0,_valueIndex:0,_paused:!1}),_r=function(){return this},Zt=e=>{if(!e)return at;if(e.unsubscribe===e)return e;const t=typeof e=="function"?()=>e():()=>e.unsubscribe();return t.unsubscribe=t,t},Ft=new WeakSet,ii=e=>{let t=e.subscribe;return Ft.has(t)||(t=(...n)=>Zt(e.subscribe(...n)),Ft.add(t)),t},wt=e=>{const t="subscribe"in e?e:e[gt]();return ii(t)},ui=e=>{let t;return e(n=>t=n)(),t};function Xe(e,t){const n=wt(e),r=Object.assign(()=>pr(r),t,{subscribe:n,[gt]:_r});return r}const Sn=function(e){this.set(e(wr(()=>pr(this))))};function Bi(e,t){return Xe(e,typeof t=="function"?{set:t,update:Sn}:{...t,set:(t==null?void 0:t.set)??re,update:(t==null?void 0:t.update)??(t!=null&&t.set?Sn:re)})}const M=Symbol(),vr=Symbol();let Ct=!1;const $e=new Set,oi=1e3,Jt=e=>{if(e>oi)throw new Error("reached maximum number of store changes in one shot")},ft=e=>{const t=!Ct;t&&(Ct=!0);try{return e()}finally{if(t)try{const n=new Map;for(const r of $e){const s=n.get(r)??0;Jt(s),n.set(r,s+1),$e.delete(r),r[vr]()}}finally{$e.clear(),Ct=!1}}},hr=e=>ui(wt(e));let ye=hr;const pr=e=>ye(e),xn=e=>({[e]:!0,[e-1]:!1,0:!1}),Ne=Symbol(),li=(e,t)=>Object.is(e,t)&&(!e||typeof e!="object")&&typeof e!="function";var H,ve,W,J,ie,he,Ce,G,br,yr,nt;class en{constructor(t){k(this,G);k(this,H);k(this,ve);k(this,W);k(this,J);k(this,ie);k(this,he);k(this,Ce);I(this,H,new Set),I(this,ve,null),I(this,W,!1),I(this,J,1),I(this,he,xn(1)),I(this,Ce,new WeakMap),this[En]=!1,I(this,ie,t)}[(En=Ne,vr)](){const t=p(this,J);for(const n of[...p(this,H)]){if(p(this,W)||p(this,J)!==t)return;n._valueIndex!==0&&R(this,G,nt).call(this,n)}}[M](){}equal(t,n){return!this.notEqual(t,n)}notEqual(t,n){return!li(t,n)}pauseSubscribers(){if(!p(this,W)){I(this,W,!0),$e.delete(this);for(const t of[...p(this,H)])t._valueIndex===0||t._paused||(t._paused=!0,t.pause())}}resumeSubscribers(){p(this,W)&&(I(this,W,!1),ft(()=>{$e.add(this)}))}set(t){const n=this[Ne];if(n||!this.equal(p(this,ie),t)){const r=p(this,J)+1;I(this,J,r),I(this,ie,t),I(this,he,xn(r)),n&&delete p(this,he)[r-1],this.pauseSubscribers()}this.resumeSubscribers()}update(t){this.set(t(p(this,ie)))}onUse(){}subscribe(t){const n=dr(t),r=t==null?void 0:t[Xt];if(r){const i=p(this,Ce).get(r);i&&(n._value=i._value,n._valueIndex=i._valueIndex)}p(this,H).add(n),ft(()=>{p(this,H).size==1?R(this,G,br).call(this):this[M]()}),R(this,G,nt).call(this,n);const s=()=>{const i=p(this,H).delete(n);n.next=re,n.pause=re,n.resume=re,i&&(p(this,Ce).set(s,n),p(this,H).size===0&&R(this,G,yr).call(this))};return s[M]=()=>{this[M](),R(this,G,nt).call(this,n)},s.unsubscribe=s,s}[gt](){return this}}H=new WeakMap,ve=new WeakMap,W=new WeakMap,J=new WeakMap,ie=new WeakMap,he=new WeakMap,Ce=new WeakMap,G=new WeakSet,br=function(){I(this,ve,Zt(this.onUse()))},yr=function(){const t=p(this,ve);t&&(I(this,ve,null),t())},nt=function(t){const n=p(this,he),r=p(this,J),s=p(this,ie);let i=n[t._valueIndex];i==null&&(i=!!this.equal(t._value,s),n[t._valueIndex]=i),t._valueIndex=r,i?!p(this,W)&&t._paused&&(t._paused=!1,t.resume()):(t._value=s,t._paused=!1,t.next(s))};function ai(e){const t=n=>(n!=null&&n[Xt]||dr(n).next(e),at);return Ft.add(t),Object.assign(()=>e,{subscribe:t,[gt]:_r})}class gr extends en{constructor(t){super(t)}set(t){super.set(t)}update(t){super.update(t)}}const mt=(e,t)=>{const{onUse:n,equal:r,notEqual:s}=t;return n&&(e.onUse=function(){const i=u=>this.set(u);return i.set=i,i.update=u=>this.update(u),n(i)}),r&&(e.equal=function(i,u){return r(i,u)}),s&&(e.notEqual=function(i,u){return s(i,u)}),e};function In(e,t={}){return typeof t=="function"&&(t={onUse:t}),t.onUse?Xe(mt(new gr(e),t)):ai(e)}function Hi(e,t={}){typeof t=="function"&&(t={onUse:t});const n=mt(new gr(e),t);return Xe(n,{set:n.set.bind(n),update:n.update.bind(n)})}function fi(e){return e.length<=1}const ci=e=>e();var He,We,$;class An extends en{constructor(n,r){super(r);k(this,He);k(this,We);k(this,$,0);const s=Array.isArray(n);I(this,He,s),I(this,We,(s?[...n]:[n]).map(wt))}resumeSubscribers(){p(this,$)||super.resumeSubscribers()}onUse(){let n=!1,r=0;const s=p(this,He),i=p(this,We),u=new Array(i.length);let a=null;const c=()=>{const l=a;l&&(a=null,l())},o=(l=!1)=>{l&&(n=!0),n&&!p(this,$)&&(r&&(r=0,c(),a=Zt(this.derive(s?u:u[0]))),this.resumeSubscribers())},f=i.map((l,d)=>{const v=y=>{u[d]=y,r|=1<<d,I(this,$,p(this,$)&~(1<<d)),o()};return v.next=v,v.pause=()=>{I(this,$,p(this,$)|1<<d),this.pauseSubscribers()},v.resume=()=>{I(this,$,p(this,$)&~(1<<d)),o()},l(v)}),_=(l,d)=>{var v;p(this,$)&1<<d&&((v=l[M])==null||v.call(l))};return this[M]=()=>{let l=0;for(;p(this,$)&&(Jt(++l),n=!1,f.forEach(_),!p(this,$));)o(!0)},o(!0),this[M](),()=>{this[M]=re,c(),f.forEach(ci)}}}He=new WeakMap,We=new WeakMap,$=new WeakMap;function di(e,t,n){typeof t=="function"&&(t={derive:t});const{derive:r,...s}=t,i=fi(r)?class extends An{constructor(u,a){super(u,a),this[Ne]=!0}derive(u){this.set(r(u)),this[Ne]=!1}}:class extends An{derive(u){const a=c=>this.set(c);return a.set=a,a.update=c=>this.update(c),r(u,a)}};return Xe(mt(new i(e,n),{...s,onUse:void 0}))}const wr=e=>{const t=ye;try{return ye=hr,e()}finally{ye=t}},_i=({unsubscribe:e})=>e(),vi=({resubscribe:e})=>e();var Te,ee,ue,F,ct,T,mr,Er,Me,Se,Sr;class hi extends en{constructor(){super(void 0);k(this,T);k(this,Te,!1);k(this,ee,!1);k(this,ue,0);k(this,F,new Map);k(this,ct,n=>wr(()=>R(this,T,Er).call(this,n)));this[Ne]=!0}resumeSubscribers(){R(this,T,Se).call(this)||super.resumeSubscribers()}[M](){var r;if(p(this,Te))throw new Error("recursive computed");let n=0;for(;R(this,T,Se).call(this);){Jt(++n),I(this,ee,!0);try{for(const[,{pending:s,unsubscribe:i}]of p(this,F))s&&((r=i[M])==null||r.call(i))}finally{I(this,ee,!1)}if(R(this,T,Se).call(this))break;R(this,T,Me).call(this)}}onUse(){return R(this,T,Me).call(this,!0),this[M](),()=>p(this,F).forEach(_i)}}Te=new WeakMap,ee=new WeakMap,ue=new WeakMap,F=new WeakMap,ct=new WeakMap,T=new WeakSet,mr=function(n){const r={versionIndex:p(this,ue),unsubscribe:re,resubscribe:re,pending:!1,usedValueIndex:0,value:void 0,valueIndex:0},s=i=>{r.value=i,r.valueIndex++,r.pending=!1,!p(this,ee)&&!R(this,T,Se).call(this)&&ft(()=>R(this,T,Me).call(this))};return s.next=s,s.pause=()=>{r.pending=!0,this.pauseSubscribers()},s.resume=()=>{r.pending=!1,!p(this,ee)&&!R(this,T,Se).call(this)&&ft(()=>R(this,T,Me).call(this))},r.resubscribe=()=>{r.unsubscribe=n(s),s[Xt]=r.unsubscribe},r.resubscribe(),r},Er=function(n){var s,i;let r=p(this,F).get(n);return r?(r.versionIndex=p(this,ue),(i=(s=r.unsubscribe)[M])==null||i.call(s)):(r=R(this,T,mr).call(this,wt(n)),p(this,F).set(n,r)),r.usedValueIndex=r.valueIndex,r.value},Me=function(n=!1){I(this,Te,!0),I(this,ee,!0);try{if(p(this,ue)>0&&(n&&p(this,F).forEach(vi),!R(this,T,Sr).call(this))){this.resumeSubscribers();return}ln(this,ue)._++;const r=p(this,ue),s=ye;let i;try{ye=p(this,ct),i=this.compute()}finally{ye=s}this.set(i),this[Ne]=!1;for(const[u,a]of p(this,F))a.versionIndex!==r&&(p(this,F).delete(u),a.unsubscribe())}finally{I(this,ee,!1),I(this,Te,!1)}},Se=function(){for(const[,{pending:n}]of p(this,F))if(n)return!0;return!1},Sr=function(){for(const[,{valueIndex:n,usedValueIndex:r}]of p(this,F))if(n!=r)return!0;return!1};function Wi(e,t={}){const n=class extends hi{compute(){return e()}};return Xe(mt(new n,{...t,onUse:void 0}))}const pi=typeof window>"u"?In(""):In("",e=>{function t(){const n=location.hash;e(n?n.substring(1):"")}return window.addEventListener("hashchange",t),t(),()=>window.removeEventListener("hashchange",t)});function bi(e,t){Kt(t,!0);let n=Re(()=>t.component());var r=qt(),s=ot(r);js(s,()=>N(n),null,(i,u)=>{var a=qt();const c=Re(()=>N(u).default);var o=ot(a);Ks(o,()=>N(c),(f,_)=>{_(f,{})}),Ue(i,a)}),Ue(e,r),Qt()}var yi=ar("<div><a> </a></div>"),gi=ar('<h3>Samples:</h3> <div class="sample-links"></div>',1);function Yi(e,t){Kt(t,!1);const n=ei(),r=()=>Js(o,"$component$",n),s=/samples\/([^/]*)\/([^/]*).route.svelte/;let i=si(t,"componentsToBeProcessed",8);function u(l){const d={};for(const[v,y]of Object.entries(l)){const h=v.match(s);h&&(d[`/${h[1]}/${h[2]}`.toLowerCase()]=y)}return d}const a=u(i());let c;const o=di(pi,(l,d)=>{const v=l.split("#")[0].split("?")[0];c!==v&&(c=v,d(l?async()=>{const y=a[l.split("#")[0].split("?")[0]];if(y){const h=await y();return window.parent&&window.parent.postMessage({type:"sampleload"}),h}else return Cr(()=>import("./Page404-DNclOYKP.js"),[],import.meta.url)}:void 0))},void 0);Qs();var f=qt(),_=ot(f);Vs(_,r,l=>{bi(l,{get component(){return r()}})},l=>{var d=gi(),v=Is(ot(d),2);Ws(v,5,()=>Object.keys(a),Bs,(y,h)=>{var b=yi(),E=pn(b),C=pn(E);fs(()=>{fr(E,"href","#"+N(h)),Us(C,N(h))}),Ue(y,b)}),Ue(l,d)}),Ue(e,f),Qt()}export{te as $,Yi as A,ne as B,lt as C,bt as D,dt as E,w as F,pe as G,be as H,we as I,Ti as J,Ci as K,ji as L,si as M,mi as N,Tt as O,Ws as P,Bs as Q,Ee as R,fr as S,Nt as T,Be as U,Di as V,In as W,jn as X,as as Y,_t as Z,Cr as _,Qt as a,Li as a0,qi as a1,Ni as a2,pi as a3,Ii as a4,Ai as a5,Ss as a6,Gr as a7,Cs as a8,Xe as a9,Wi as aa,Bi as ab,di as ac,li as ad,ft as ae,pr as af,Hi as ag,Zs as ah,L as ai,vt as aj,Ei as ak,O as al,Ri as am,ki as an,Ns as ao,ut as ap,Ui as aq,os as ar,$i as as,ss as at,Ue as b,Vs as c,fs as d,pn as e,ot as f,N as g,Rs as h,Qs as i,B as j,Si as k,Fi as l,Oi as m,Us as n,Mi as o,Kt as p,Re as q,Pi as r,Is as s,ar as t,ei as u,qt as v,Vi as w,Js as x,xi as y,Ke as z};
