import{p as S,f,c as D,s as _,d as C,b as u,a as O,t as c,e as r,S as k,l as F,g as h,n as H,q as j,k as q,R as m,j as w,v as z,O as N}from"./AppCommon-DP2utHPF.js";import{S as R}from"./Slider-R72t_w2E.js";import{a as b}from"./actions-DrwIzhOO.js";/* empty css               */import{c as A}from"./directive-CKEccryv-BFmMCvZ2.js";import"./slider-DYrwS7Mv-Dhmnm7nU.js";import"./writables-DCiBdIBK-DCvGaMs2.js";import"./resizeObserver-C7ivY69P.js";import"./extendWidget-DLAum1ZF.js";import"./Slot-BeSQduvJ.js";import"./snippet-CpZ0a9Mm.js";import"./config-CDoJPohr.js";import"./config-B5mXcbCA.js";import"./index-client-U6W4bQpJ.js";var B=c('<div class="bubble bubble-1"></div> <div class="bubble bubble-2"></div> <div class="bubble bubble-3"></div>',1),E=c('<div class="position-relative cup-container"><div class="cup"><div class="cup-fill-parent"><div class="cup-fill"><!></div></div></div></div> <button> </button>',1);function G(d,t){S(t,!0);var e=E(),o=f(e),n=r(o),s=r(n),l=r(s),g=r(l);D(g,()=>t.state.progressDisplayOptions[0].height>=50,a=>{var i=B();u(a,i)});var v=_(o,2);const x=j(()=>({}));let p;var y=r(v);b(v,(a,i)=>A(a,i),()=>"coffee-indicator"),b(v,(a,i)=>t.directives.handleDirective(a,i),()=>({item:t.state.sortedHandles[0]})),C(()=>{k(l,"style",`height: ${t.state.progressDisplayOptions[0].height}%;`),p=F(v,p,{...h(x)}),H(y,""+t.state.sortedHandles[0].value)}),u(d,e),O()}var I=c("<h2>Fully custom slider</h2> <!>",1);function tt(d){let t=q(m([50]));var e=I(),o=_(f(e),2);R(o,{min:0,max:100,stepSize:1,get values(){return h(t)},set values(s){w(t,m(s))},vertical:!0,className:"custom-slider",structure:(s,l=N)=>{G(s,z(l))},$$slots:{structure:!0}}),u(d,e)}export{tt as default};
