var z=Object.defineProperty;var B=e=>{throw TypeError(e)};var D=(e,s,t)=>s in e?z(e,s,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[s]=t;var y=(e,s,t)=>D(e,typeof s!="symbol"?s+"":s,t),R=(e,s,t)=>s.has(e)||B("Cannot "+t);var i=(e,s,t)=>(R(e,s,"read from private field"),t?t.call(e):s.get(e)),h=(e,s,t)=>s.has(e)?B("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(e):s.set(e,t),m=(e,s,t,l)=>(R(e,s,"write to private field"),l?l.call(e,t):s.set(e,t),t);var k=(e,s,t,l)=>({set _(u){m(e,s,u,t)},get _(){return i(e,s,l)}});import{p as I,c as E,d as M,b as C,a as P,t as V,e as a,U as F,k as S,a6 as G,V as J,g as n,j as w,a7 as K,i as L,s as A,w as O,Q as T,h as W,n as X}from"./AppCommon-D6XzPDt_.js";import{h as j}from"./html-yYy51nNy.js";import{P as Y}from"./Progressbar-DH6Srsgj.js";import"./actions-C5zFepch.js";import"./progressbar-CGmNq0cS-BzkNzhlx.js";import"./writables-DCiBdIBK-M3xMKWuL.js";import"./directive-CKEccryv-BLJ74ze2.js";import"./extendWidget-Cq2v8VqQ.js";import"./types-Bw2nvhNr.js";import"./Slot-DAvQuAHA.js";import"./snippet-Bt6SC6hZ.js";import"./config-BMGCqy3X.js";import"./config-D1K6DXRz.js";import"./index-client-D9YS31ny.js";import"./class-BjsImlqy.js";import"./style-PwPRnE0L.js";var Z=V('<div class="bubble bubble-1"></div> <div class="bubble bubble-2"></div> <div class="bubble bubble-3"></div>',1),tt=V('<div class="position-relative" style="height: 300px"><div class="cup"><div class="cup-fill-parent"><div class="cup-fill"><!></div></div></div></div>');function et(e,s){I(s,!0);var t=tt(),l=a(t),u=a(l),g=a(u),_=a(g);E(_,()=>s.state.percentage>=50,b=>{var o=Z();C(b,o)}),M(()=>F(g,"style",`height: ${1.7*s.state.percentage}px;`)),C(e,t),P()}var v,r,c,p;class st{constructor(){h(this,v,S(!1));h(this,r,S(0));h(this,c);h(this,p,0);y(this,"toggleRunning",()=>{w(i(this,v),!n(i(this,v)))});y(this,"reset",()=>{w(i(this,r),0),w(i(this,v),!1)})}get value(){return G()&&J(()=>(i(this,p)===0&&m(this,c,setInterval(()=>{n(i(this,v))&&n(i(this,r))<100&&w(i(this,r),n(i(this,r))+10)},500)),k(this,p)._++,()=>{K().then(()=>{k(this,p)._--,i(this,p)===0&&(clearInterval(i(this,c)),m(this,c,void 0))})})),n(i(this,r))}get running(){return n(i(this,v))}get started(){return n(i(this,r))>0||n(i(this,v))}get finished(){return n(i(this,r))>=100}}v=new WeakMap,r=new WeakMap,c=new WeakMap,p=new WeakMap;const it=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
</svg>`,at=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
  <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/>
</svg>`,rt=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stop-fill" viewBox="0 0 16 16">
  <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5"/>
</svg>`;var lt=V('<div class="d-flex align-items-center flex-wrap"><div style="width: 350px"><!></div> <div class="d-flex flex-column justify-content-evenly h-100 ms-5"><div class="d-flex gap-1"><button class="btn btn-primary d-flex align-items-center"><!></button> <button class="btn btn-primary d-flex align-items-center" aria-label="stop"><!></button></div> <p class="mt-3"><span> </span></p></div></div>');function At(e,s){I(s,!1);const t=new st;L();var l=lt(),u=a(l),g=a(u);Y(g,{get value(){return t.value},structure:(d,q=T)=>{et(d,O(q))},$$slots:{structure:!0}});var _=A(u,2),b=a(_),o=a(b);o.__click=function(...f){var d;(d=t.toggleRunning)==null||d.apply(this,f)};var H=a(o);j(H,()=>t.running?at:it);var x=A(o,2);x.__click=function(...f){var d;(d=t.reset)==null||d.apply(this,f)};var N=a(x);j(N,()=>rt);var Q=A(b,2),U=a(Q),$=a(U);M(()=>{o.disabled=t.finished,F(o,"aria-label",t.running?"pause":"play"),x.disabled=!t.started,X($,t.started?t.value<100?`Retrieving coffee... ${t.value}%`:"Ready to work !":"Need to wake up.")}),C(e,l),P()}W(["click"]);export{At as default};