var z=Object.defineProperty;var B=e=>{throw TypeError(e)};var D=(e,s,t)=>s in e?z(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var y=(e,s,t)=>D(e,typeof s!="symbol"?s+"":s,t),R=(e,s,t)=>s.has(e)||B("Cannot "+t);var i=(e,s,t)=>(R(e,s,"read from private field"),t?t.call(e):s.get(e)),u=(e,s,t)=>s.has(e)?B("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(e):s.set(e,t),k=(e,s,t,o)=>(R(e,s,"write to private field"),o?o.call(e,t):s.set(e,t),t);import{p as I,c as E,d as M,b as C,a as P,t as S,k as a,S as F,j as V,g as n,h as f,i as G,x as J,O as K,s as A,e as L,n as Q}from"./AppCommon-Cg6aVWiJ.js";import{h as j}from"./html-D2Fz_A8A.js";import{P as T}from"./Progressbar-DeyI8pz0.js";import{c as U}from"./index-client-BvKYyCNh.js";import"./actions-DDgANA-V.js";import"./progressbar-CGmNq0cS-BqDA7gp9.js";import"./writables-DCiBdIBK-CZAW7EE6.js";import"./directive-CKEccryv-MJlbWsK7.js";import"./extendWidget-CGJbintg.js";import"./types-Bw2nvhNr.js";import"./Slot-BDFzo0gx.js";import"./snippet-bQaf2IEf.js";import"./config-o26kMnp0.js";import"./config-D83CSAZ6.js";import"./class-Cc01UWtI.js";import"./style-PwPRnE0L.js";var W=S('<div class="bubble bubble-1"></div> <div class="bubble bubble-2"></div> <div class="bubble bubble-3"></div>',1),X=S('<div class="position-relative" style="height: 300px"><div class="cup"><div class="cup-fill-parent"><div class="cup-fill"><!></div></div></div></div>');function Y(e,s){I(s,!0);var t=X(),o=a(t),c=a(o),b=a(c),w=a(b);{var g=l=>{var x=W();C(l,x)};E(w,l=>{s.state.percentage>=50&&l(g)})}M(()=>F(b,"style",`height: ${1.7*s.state.percentage}px;`)),C(e,t),P()}var v,r,d,m;class Z{constructor(){u(this,v,V(!1));u(this,r,V(0));u(this,d);u(this,m,U(()=>(k(this,d,setInterval(()=>{n(i(this,v))&&n(i(this,r))<100&&f(i(this,r),n(i(this,r))+10)},500)),()=>{clearInterval(i(this,d)),k(this,d,void 0)})));y(this,"toggleRunning",()=>{f(i(this,v),!n(i(this,v)))});y(this,"reset",()=>{f(i(this,r),0),f(i(this,v),!1)})}get value(){return i(this,m).call(this),n(i(this,r))}get running(){return n(i(this,v))}get started(){return n(i(this,r))>0||n(i(this,v))}get finished(){return n(i(this,r))>=100}}v=new WeakMap,r=new WeakMap,d=new WeakMap,m=new WeakMap;const tt=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
</svg>`,et=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
  <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/>
</svg>`,st=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stop-fill" viewBox="0 0 16 16">
  <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5"/>
</svg>`;var it=S('<div class="d-flex align-items-center flex-wrap"><div style="width: 350px"><!></div> <div class="d-flex flex-column justify-content-evenly h-100 ms-5"><div class="d-flex gap-1"><button class="btn btn-primary d-flex align-items-center"><!></button> <button class="btn btn-primary d-flex align-items-center" aria-label="stop"><!></button></div> <p class="mt-3"><span> </span></p></div></div>');function _t(e,s){I(s,!1);const t=new Z;G();var o=it(),c=a(o),b=a(c);T(b,{get value(){return t.value},structure:(p,q=K)=>{Y(p,J(q))},$$slots:{structure:!0}});var w=A(c,2),g=a(w),l=a(g);l.__click=function(...h){var p;(p=t.toggleRunning)==null||p.apply(this,h)};var x=a(l);j(x,()=>t.running?et:tt);var _=A(l,2);_.__click=function(...h){var p;(p=t.reset)==null||p.apply(this,h)};var H=a(_);j(H,()=>st);var N=A(g,2),O=a(N),$=a(O);M(()=>{l.disabled=t.finished,F(l,"aria-label",t.running?"pause":"play"),_.disabled=!t.started,Q($,t.started?t.value<100?`Retrieving coffee... ${t.value}%`:"Ready to work !":"Need to wake up.")}),C(e,o),P()}L(["click"]);export{_t as default};
