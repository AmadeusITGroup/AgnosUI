import{p as y,f as _,d as D,s as g,c as m,b as d,a as S,t as c,e as r,l as C,U as k,n as F,k as H,T as b,g as O,j,v as z,Q as N}from"./AppCommon-BIOVedX1.js";import{S as Q}from"./Slider-ru8RKV4h.js";import{a as f}from"./actions-7pTMrPq9.js";/* empty css               */import{c as T}from"./directive-CKEccryv-CfUcKfmP.js";import"./slider-DYrwS7Mv-SSKuaQuU.js";import"./writables-DCiBdIBK-COMn4_un.js";import"./resizeObserver-uIwykfLc.js";import"./extendWidget-C-nVXE9K.js";import"./Slot-DPwmoMlC.js";import"./snippet-C4nDYEhK.js";import"./config-C5p3ln_V.js";import"./config-B_1tidZl.js";import"./index-client-BPAxIsiR.js";var U=c('<div class="bubble bubble-1"></div> <div class="bubble bubble-2"></div> <div class="bubble bubble-3"></div>',1),q=c('<div class="position-relative cup-container"><div class="cup"><div class="cup-fill-parent"><div class="cup-fill"><!></div></div></div></div> <button> </button>',1);function w(u,t){y(t,!0);var e=q(),o=_(e),n=r(o),s=r(n),l=r(s),h=r(l);D(h,()=>t.state.progressDisplayOptions[0].height>=50,a=>{var i=U();d(a,i)});var v=g(o,2);let p;m(()=>p=C(v,p,{}));var x=r(v);m(()=>{k(l,"style",`height: ${t.state.progressDisplayOptions[0].height}%;`),F(x,""+t.state.sortedHandles[0].value)}),f(v,(a,i)=>T(a,i),()=>"coffee-indicator"),f(v,(a,i)=>t.directives.handleDirective(a,i),()=>({item:t.state.sortedHandles[0]})),d(u,e),S()}var A=c("<h2>Fully custom slider</h2> <!>",1);function Z(u){let t=H(b([50]));var e=A(),o=g(_(e),2);Q(o,{min:0,max:100,stepSize:1,get values(){return O(t)},set values(s){j(t,b(s))},vertical:!0,className:"custom-slider",structure:(s,l=N)=>{w(s,z(l))},$$slots:{structure:!0}}),d(u,e)}export{Z as default};