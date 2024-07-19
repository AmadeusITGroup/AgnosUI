import{a as W,t as z}from"./index.DS88fdNR.js";import{I as F,A as U}from"./scheduler.Hr4oCa1m.js";import{r as R,d as g,h as w,t as A,g as j,n as q,c as V,e as H,i as x,j as I}from"./stores.D7Tj7WDX.js";function he(e){return e?.length!==void 0?e:Array.from(e)}function ge(e,t){e.d(1),t.delete(e.key)}function we(e,t){W(e,1,1,()=>{t.delete(e.key)})}function Se(e,t,s,n,r,i,o,f,u,l,a,N){let b=e.length,m=i.length,v=b;const S={};for(;v--;)S[e[v].key]=v;const y=[],_=new Map,T=new Map,k=[];for(v=m;v--;){const c=N(r,i,v),d=s(c);let p=o.get(d);p?k.push(()=>p.p(c,t)):(p=l(d,c),p.c()),_.set(d,y[v]=p),d in S&&T.set(d,Math.abs(v-S[d]))}const D=new Set,E=new Set;function L(c){z(c,1),c.m(f,a),o.set(c.key,c),a=c.first,m--}for(;b&&m;){const c=y[m-1],d=e[b-1],p=c.key,h=d.key;c===d?(a=c.first,b--,m--):_.has(h)?!o.has(p)||D.has(p)?L(c):E.has(h)?b--:T.get(p)>T.get(h)?(E.add(p),L(c)):(D.add(h),b--):(u(d,o),b--)}for(;b--;){const c=e[b];_.has(c.key)||u(c,o)}for(;m;)L(y[m-1]);return F(k),y}function _e(e,t){const s={},n={},r={$$scope:1};let i=e.length;for(;i--;){const o=e[i],f=t[i];if(f){for(const u in o)u in f||(n[u]=1);for(const u in f)r[u]||(s[u]=f[u],r[u]=1);e[i]=f}else for(const u in o)r[u]=1}for(const o in n)o in s||(s[o]=void 0);return s}function Te(e){return typeof e=="object"&&e!==null?e:{}}const Le=(e=document.body)=>{$(e)&&e.getBoundingClientRect()},Ae=(e,t)=>{t&&t.length>0&&e.classList.add(...t)},je=(e,t)=>{t&&t.length>0&&e.classList.remove(...t)};function O(e,t,s,n){return e.addEventListener(t,s,n),function(){e.removeEventListener(t,s,n)}}const M=e=>e!=null&&e!==!1;function G(e,t){let s=new Set;return t.subscribe(n=>{const r=new Set(`${n??""}`.split(" "));r.delete("");const i=e.classList;for(const o of s)r.has(o)||i.remove(o);r.size>0&&i.add(...r),s=r})}function J(e,t,s){return s.subscribe(n=>{M(n)?e.setAttribute(t,""+(n===!0?t:n)):e.removeAttribute(t)})}function K(e,t,s){return t==="class"?G(e,s):J(e,t,s)}function Q(e,t,s){return s.subscribe(n=>{const r=e.style;r[t]=""+(M(n)?n:"")})}function X(e,t,s){const n=s.subscribe(r=>{e.classList.toggle(t,r)});return()=>{n(),e.classList.remove(t)}}const $=e=>{var t;const s=((t=e?.ownerDocument)==null?void 0:t.defaultView)??window;return e instanceof s.HTMLElement},P=e=>(t,s)=>{if($(t))return e(t,s)},Y=(e,t)=>s=>{let n=!0,r;const i=t.subscribe(o=>{var f;n?(n=!1,r=e(s,o)):(f=r?.update)==null||f.call(r,o)});return{destroy(){var o;(o=r?.destroy)==null||o.call(r),i()}}},Z=R(void 0),$e=e=>Y(e,Z),ke=(e,t=!0)=>()=>{const s=e.subscribe(q);return{destroy:async()=>{t&&await 0,s()}}},De=e=>(t,s)=>(e(s),{update:e}),B={equal:Object.is},ee=()=>{const e=g([],B);return w(e,{register:t=>{let s=!1;return e.update(n=>[...n,t]),()=>{s||(s=!0,e.update(n=>{const r=n.indexOf(t);if(r>-1){const i=[...n];return i.splice(r,1),i}return n}))}}})},te=()=>{const e=ee();return{elements$:w(e),directive:t=>({destroy:e.register(t)})}},Ee=()=>{const{directive:e,elements$:t}=te();return{directive:P(e),elements$:t}},se=()=>{const e=g(null,B);return{element$:w(e),directive:t=>{let s=!1;return e.update(n=>n?(console.error("The directive cannot be used on multiple elements.",n,t),n):(s=!0,t)),s?{destroy(){e.update(n=>t===n?null:n)}}:void 0}}},xe=()=>{const{directive:e,element$:t}=se();return{directive:P(e),element$:t}},Oe=(...e)=>(t,s)=>{const n=j(()=>e.map(r=>r(t,s)));return{update(r){j(()=>n.forEach(i=>{var o;return(o=i?.update)==null?void 0:o.call(i,r)}))},destroy(){j(()=>n.reverse().forEach(r=>{var i;return(i=r?.destroy)==null?void 0:i.call(r)}))}}},ne=e=>(t,s)=>{const n=[],r=g(s),{events:i,attributes:o,styles:f,classNames:u}=e(r);if($(t))for(const[l,a]of Object.entries(i??{}))typeof a=="function"?n.push(O(t,l,a)):n.push(O(t,l,a.handler,a.options));for(const[l,a]of Object.entries(o??{}))a!=null&&n.push(K(t,l,A(a)));for(const[l,a]of Object.entries(f??{}))a&&n.push(Q(t,l,A(a)));for(const[l,a]of Object.entries(u??{}))n.push(X(t,l,A(a)));return{update:l=>r.set(l),destroy:()=>n.forEach(l=>l())}},Ce=ne(e=>({attributes:{class:e}})),re={status:"pending"},oe=e=>{const t=typeof e;return t==="object"&&e!==null||t==="function"?typeof e.then=="function":!1},ie=e=>{const t=g(re);return Promise.resolve(e).then(s=>t.set({status:"fulfilled",value:s}),s=>t.set({status:"rejected",reason:s})),w(t)},C=new WeakMap,ce=e=>{if(!oe(e))return R({status:"fulfilled",value:e});let t=C.get(e);return t||(t=ie(e),C.set(e,t)),t},ae=(e,t)=>Object.is(e,t)||e.status===t.status&&(e.status!=="fulfilled"||x(e.value,t.value))&&(e.status!=="rejected"||x(e.reason,t.reason)),ue=e=>V(()=>ce(e())(),{equal:ae}),le=(e,t,s)=>H(e,{derive:(n,r)=>{n.status==="fulfilled"&&r(n.value)},equal:s},t),Re=(e,t,s)=>le(ue(e),t,s),qe=(e,t)=>{let s;const n=new Promise(o=>s=o);let r=()=>{e.removeEventListener(t,i),r=q};const i=o=>{o.target===e&&(s(o),r())};return e.addEventListener(t,i),{promise:n,unsubscribe(){r()}}},Me=e=>{let t;return{promise:new Promise(s=>{t=setTimeout(()=>{t=void 0,s()},e)}),unsubscribe(){t&&(clearTimeout(t),t=void 0)}}},Pe=()=>{let e;return{promise:new Promise(s=>{e=s}),resolve:e}},fe=/\r/g;function Be(e,t=""){return`AgnosUI - ${e}`+(t?` for ${t}`:"")}function Ne(e){return e.replace(fe,"").split(`

`)}const de=/^\([^(]*\)[^=]*=>/,pe=/^function/,be=/^Slot/;function We(e){return de.test(e)||pe.test(e)?"function":be.test(e)?"slot":e}function ze(e){let t;function s(n){t=n}return U(()=>{I.patch({elements:t?e(t):[]})}),s}export{ge as A,ze as B,Ae as a,Le as b,se as c,ke as d,he as e,De as f,Be as g,qe as h,$ as i,Me as j,_e as k,ee as l,Oe as m,Ce as n,we as o,Pe as p,xe as q,je as r,Re as s,Ne as t,Se as u,P as v,Te as w,$e as x,We as y,Ee as z};
