import{p as x,t as b,f as S,e as y,d as r,b as D,h as C,Y as k,j as H,k as O,c as m,a as j,s as z,S as F,P as N,l as P,g as Y,v as q}from"./AppCommon-B-ROr4aU.js";import{S as w}from"./Slider-FyzhIrjx.js";import{a as n}from"./actions-Cbyr4fVv.js";/* empty css               */import{c as A}from"./dom-gfxqXJpK-CVUkDlT_.js";import"./slider-BTg5l3XS-CxdIizbZ.js";import"./stores-DWJrwGVR.js";import"./writables-CgpOQ4hA-BLtlctEd.js";import"./resizeObserver-CrJfYtGU.js";import"./extendWidget-GeFhB8wc.js";import"./Slot-DxNJ8UAq.js";import"./snippet-DFOQFhBJ.js";import"./config-lZO9LbO2.js";import"./config-ZUzlAODH.js";import"./index-client-hhUEBj_e.js";var B=b('<div class="bubble bubble-1"></div> <div class="bubble bubble-2"></div> <div class="bubble bubble-3"></div>',1),E=b('<div class="position-relative cup-container"><div class="cup"><div class="cup-fill-parent"><div class="cup-fill"><!></div></div></div></div> <button> </button>',1);function G(l,t){x(t,!0);var v=E(),s=S(v),u=r(s),f=r(u),d=r(f),_=r(d);{var g=e=>{var a=B();m(e,a)};y(_,e=>{t.state.progressDisplayOptions[0].height>=50&&e(g)})}var o=D(s,2);let c;var h=r(o);n(o,(e,a)=>{var i;return(i=A)==null?void 0:i(e,a)},()=>"coffee-indicator"),n(o,(e,a)=>{var i,p;return(p=(i=t.directives).handleDirective)==null?void 0:p.call(i,e,a)},()=>({item:t.state.sortedHandles[0]})),C(e=>{k(d,`height: ${t.state.progressDisplayOptions[0].height}%;`),c=H(o,c,{...e}),O(h,""+t.state.sortedHandles[0].value)},[()=>({})]),m(l,v),j()}function et(l){let t=z(F([50]));w(l,{min:0,max:100,stepSize:1,vertical:!0,className:"custom-slider",get values(){return Y(t)},set values(s){P(t,s,!0)},structure:(s,u=N)=>{G(s,q(u))},$$slots:{structure:!0}})}export{et as default};
