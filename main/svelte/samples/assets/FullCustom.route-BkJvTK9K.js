var $=Object.defineProperty;var V=e=>{throw TypeError(e)};var q=(e,t,s)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var y=(e,t,s)=>q(e,typeof t!="symbol"?t+"":t,s),B=(e,t,s)=>t.has(e)||V("Cannot "+s);var i=(e,t,s)=>(B(e,t,"read from private field"),s?s.call(e):t.get(e)),h=(e,t,s)=>t.has(e)?V("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),m=(e,t,s,l)=>(B(e,t,"write to private field"),l?l.call(e,s):t.set(e,s),s);var k=(e,t,s,l)=>({set _(c){m(e,t,c,s)},get _(){return i(e,t,l)}});import{p as z,g as D,e as j,c as C,a as E,t as R,h as a,T as I,R as P,a6 as G,V as J,k as n,n as w,a7 as K,b as A,w as L,P as O,j as Q,r as U}from"./AppCommon-CC-VkUgW.js";import{h as S}from"./html-CP2N8rir.js";import{P as W}from"./Progressbar-D3Z7VIMB.js";import"./actions-D-dhIHRy.js";import"./progressbar-SWdDtjxf-BtUkBTnR.js";import"./writables-DoU_XYTX-slp4MWt3.js";import"./directive-CKEccryv-BuQmRVBG.js";import"./extendWidget-wveUl8Yn.js";import"./Slot-9PryA5S7.js";import"./snippet-hepiiy-w.js";import"./config-DXyDsFs3.js";import"./config-BOSa1FB8.js";import"./index-client-CGLt60GO.js";import"./class-CcTXRr1B.js";import"./style-Bk7ejTAN.js";var X=R('<div class="bubble bubble-1"></div> <div class="bubble bubble-2"></div> <div class="bubble bubble-3"></div>',1),Y=R('<div class="position-relative" style="height: 300px"><div class="cup"><div class="cup-fill-parent"><div class="cup-fill"><!></div></div></div></div>');function Z(e,t){z(t,!0);var s=Y(),l=a(s),c=a(l),g=a(c),b=a(g);D(b,()=>t.state.percentage>=50,o=>{var _=X();C(o,_)}),j(()=>I(g,"style",`height: ${1.7*t.state.percentage}px;`)),C(e,s),E()}var v,r,u,p;class tt{constructor(){h(this,v,P(!1));h(this,r,P(0));h(this,u);h(this,p,0);y(this,"toggleRunning",()=>{w(i(this,v),!n(i(this,v)))});y(this,"reset",()=>{w(i(this,r),0),w(i(this,v),!1)})}get value(){return G()&&J(()=>(i(this,p)===0&&m(this,u,setInterval(()=>{n(i(this,v))&&n(i(this,r))<100&&w(i(this,r),n(i(this,r))+10)},500)),k(this,p)._++,()=>{K().then(()=>{k(this,p)._--,i(this,p)===0&&(clearInterval(i(this,u)),m(this,u,void 0))})})),n(i(this,r))}get running(){return n(i(this,v))}get started(){return n(i(this,r))>0||n(i(this,v))}get finished(){return n(i(this,r))>=100}}v=new WeakMap,r=new WeakMap,u=new WeakMap,p=new WeakMap;const et=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
  <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393"/>
</svg>`,st=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
  <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5m5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5"/>
</svg>`,it=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-stop-fill" viewBox="0 0 16 16">
  <path d="M5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5A1.5 1.5 0 0 1 5 3.5"/>
</svg>`;var at=R('<div class="d-flex align-items-center flex-wrap"><div style="width: 350px"><!></div> <div class="d-flex flex-column justify-content-evenly h-100 ms-5"><div class="d-flex gap-1"><button class="btn btn-primary d-flex align-items-center"><!></button> <button class="btn btn-primary d-flex align-items-center" aria-label="stop"><!></button></div> <p class="mt-3"><span> </span></p></div></div>');function xt(e){const t=new tt;var s=at(),l=a(s),c=a(l);W(c,{get value(){return t.value},structure:(d,T=O)=>{Z(d,L(T))},$$slots:{structure:!0}});var g=A(l,2),b=a(g),o=a(b);o.__click=function(...f){var d;(d=t.toggleRunning)==null||d.apply(this,f)};var _=a(o);S(_,()=>t.running?st:et);var x=A(o,2);x.__click=function(...f){var d;(d=t.reset)==null||d.apply(this,f)};var M=a(x);S(M,()=>it);var F=A(b,2),H=a(F),N=a(H);j(()=>{o.disabled=t.finished,I(o,"aria-label",t.running?"pause":"play"),x.disabled=!t.started,U(N,t.started?t.value<100?`Retrieving coffee... ${t.value}%`:"Ready to work !":"Need to wake up.")}),C(e,s)}Q(["click"]);export{xt as default};