var q=Object.defineProperty;var B=e=>{throw TypeError(e)};var z=(e,s,t)=>s in e?q(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var y=(e,s,t)=>z(e,typeof s!="symbol"?s+"":s,t),R=(e,s,t)=>s.has(e)||B("Cannot "+t);var i=(e,s,t)=>(R(e,s,"read from private field"),t?t.call(e):s.get(e)),u=(e,s,t)=>s.has(e)?B("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(e):s.set(e,t),k=(e,s,t,o)=>(R(e,s,"write to private field"),o?o.call(e,t):s.set(e,t),t);import{p as M,t as S,e as D,d as a,h as P,c as C,a as j,as as E,b as V,g as n,l as f,i as G,O as J,s as A,v as K,n as L,S as Q,k as T}from"./AppCommon-BhqekdnF.js";import{h as I}from"./html-CX2b64yE.js";import{P as U}from"./Progressbar-Auyt7BR1.js";import{c as W}from"./index-client-C1tMzqxv.js";import"./actions-DZjIkt8l.js";import"./progressbar-Csnqx_Pk-Bw1v32-z.js";import"./writables-CgpOQ4hA-BIau_gmo.js";import"./stores-C9PduWJD.js";import"./dom-gfxqXJpK-Cwq939KW.js";import"./extendWidget-0hLBEJE1.js";import"./types-Bw2nvhNr.js";import"./Slot-D0aFp3FX.js";import"./snippet-DG4TNrDZ.js";import"./config-BFQlyIYN.js";import"./config-D_LJ3MBe.js";var X=S('<div class="bubble bubble-1"></div> <div class="bubble bubble-2"></div> <div class="bubble bubble-3"></div>',1),Y=S('<div class="position-relative" style="height: 300px"><div class="cup"><div class="cup-fill-parent"><div class="cup-fill"><!></div></div></div></div>');function Z(e,s){M(s,!0);var t=Y(),o=a(t),c=a(o),b=a(c),w=a(b);{var g=l=>{var _=X();C(l,_)};D(w,l=>{s.state.percentage>=50&&l(g)})}P(()=>E(b,`height: ${1.7*s.state.percentage}px;`)),C(e,t),j()}var v,r,p,m;class tt{constructor(){u(this,v,V(!1));u(this,r,V(0));u(this,p);u(this,m,W(()=>(k(this,p,setInterval(()=>{n(i(this,v))&&n(i(this,r))<100&&f(i(this,r),n(i(this,r))+10)},500)),()=>{clearInterval(i(this,p)),k(this,p,void 0)})));y(this,"toggleRunning",()=>{f(i(this,v),!n(i(this,v)))});y(this,"reset",()=>{f(i(this,r),0),f(i(this,v),!1)})}get value(){return i(this,m).call(this),n(i(this,r))}get running(){return n(i(this,v))}get started(){return n(i(this,r))>0||n(i(this,v))}get finished(){return n(i(this,r))>=100}}v=new WeakMap,r=new WeakMap,p=new WeakMap,m=new WeakMap;const et=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
</svg>`,st=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
  <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/>
</svg>`,it=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stop-fill" viewBox="0 0 16 16">
  <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5"/>
</svg>`;var at=S('<div class="d-flex align-items-center flex-wrap"><div style="width: 350px"><!></div> <div class="d-flex flex-column justify-content-evenly h-100 ms-5"><div class="d-flex gap-1"><button class="btn btn-primary d-flex align-items-center"><!></button> <button class="btn btn-primary d-flex align-items-center" aria-label="stop"><!></button></div> <p class="mt-3"><span> </span></p></div></div>');function xt(e,s){M(s,!1);const t=new tt;G();var o=at(),c=a(o),b=a(c);U(b,{get value(){return t.value},structure:(d,$=J)=>{Z(d,K($))},$$slots:{structure:!0}});var w=A(c,2),g=a(w),l=a(g);l.__click=function(...h){var d;(d=t.toggleRunning)==null||d.apply(this,h)};var _=a(l);I(_,()=>t.running?st:et);var x=A(l,2);x.__click=function(...h){var d;(d=t.reset)==null||d.apply(this,h)};var F=a(x);I(F,()=>it);var H=A(g,2),N=a(H),O=a(N);P(()=>{l.disabled=t.finished,Q(l,"aria-label",t.running?"pause":"play"),x.disabled=!t.started,T(O,t.started?t.value<100?`Retrieving coffee... ${t.value}%`:"Ready to work !":"Need to wake up.")}),C(e,o),j()}L(["click"]);export{xt as default};
