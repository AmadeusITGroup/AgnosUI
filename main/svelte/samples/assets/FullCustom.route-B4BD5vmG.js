import{p as D,f,c as S,s as _,d as C,b as u,a as k,t as c,e as r,U as w,l as F,g as h,n as H,q as O,k as j,T as m,j as q,w as z,Q as N}from"./AppCommon-D6XzPDt_.js";import{S as Q}from"./Slider-CO6JF7AW.js";import{a as b}from"./actions-C5zFepch.js";/* empty css               */import{c as T}from"./directive-CKEccryv-BLJ74ze2.js";import"./slider-DYrwS7Mv-Dv5u7sze.js";import"./writables-DCiBdIBK-M3xMKWuL.js";import"./resizeObserver-D1p8hjpO.js";import"./extendWidget-Cq2v8VqQ.js";import"./Slot-DAvQuAHA.js";import"./snippet-Bt6SC6hZ.js";import"./config-BMGCqy3X.js";import"./config-D1K6DXRz.js";import"./index-client-D9YS31ny.js";var U=c('<div class="bubble bubble-1"></div> <div class="bubble bubble-2"></div> <div class="bubble bubble-3"></div>',1),A=c('<div class="position-relative cup-container"><div class="cup"><div class="cup-fill-parent"><div class="cup-fill"><!></div></div></div></div> <button> </button>',1);function B(v,t){D(t,!0);var e=A(),o=f(e),n=r(o),s=r(n),l=r(s),g=r(l);S(g,()=>t.state.progressDisplayOptions[0].height>=50,a=>{var i=U();u(a,i)});var d=_(o,2);const x=O(()=>({}));let p;var y=r(d);b(d,(a,i)=>T(a,i),()=>"coffee-indicator"),b(d,(a,i)=>t.directives.handleDirective(a,i),()=>({item:t.state.sortedHandles[0]})),C(()=>{w(l,"style",`height: ${t.state.progressDisplayOptions[0].height}%;`),p=F(d,p,{...h(x)}),H(y,""+t.state.sortedHandles[0].value)}),u(v,e),k()}var E=c("<h2>Fully custom slider</h2> <!>",1);function tt(v){let t=j(m([50]));var e=E(),o=_(f(e),2);Q(o,{min:0,max:100,stepSize:1,get values(){return h(t)},set values(s){q(t,m(s))},vertical:!0,className:"custom-slider",structure:(s,l=N)=>{B(s,z(l))},$$slots:{structure:!0}}),u(v,e)}export{tt as default};