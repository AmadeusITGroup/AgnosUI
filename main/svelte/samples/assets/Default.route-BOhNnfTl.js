import{p as L,s as P,P as W,L as q,e as g,c as _,a as E,t as h,M as F,q as I,d as i,V as M,W as d,b as v,f as N,k as $,n as U,r as j}from"./AppCommon-yQ9GDd-E.js";import{a as f}from"./actions-1FJs2NnX.js";import{c as A}from"./config-BI14XQLI.js";import{c as B}from"./slider-DjanPJZz-Cek1HN3h.js";import{c as G}from"./directive-CKEccryv-CIaX9Ntp.js";import"./writables-DoU_XYTX-DICLMg1u.js";import"./resizeObserver-CEU3BjsM.js";var J=h("<input>");function K(l,t){L(t,!0);const a=P(),r=()=>i(y,"$min$",a),c=()=>i(b,"$max$",a),o=()=>i(w,"$sortedHandles$",a),x=()=>i(S,"$stepSize$",a);let p=W(t,"values",15),m=F(t,["$$slots","$$events","$$legacy","values"]);const s=A({factory:B,widgetName:"slider",props:{...m,values:p()},events:{onValuesChange:e=>{p(e)}}}),{stores:{min$:y,max$:b,stepSize$:S,sortedHandles$:w},directives:{sliderDirective:k},patchChangedProps:D}=s;q(()=>D({...m,values:p()}));var n=J(),z=e=>s.actions.keydown(e,0),V=e=>s.actions.mouseDown(e,0),H=e=>s.actions.touchStart(e,0);let u;g(()=>u=I(n,u,{type:"range",min:r(),max:c(),value:o()[0].value,step:x(),"aria-label":o()[0].ariaLabel,onclick:s.actions.click,onkeydown:z,onmousedown:V,ontouchstart:H})),f(n,e=>k(e)),f(n,(e,C)=>G(e,C),()=>"range"),_(l,n),E()}var O=h('<h2 class="text-lg mb-2">DaisyUI Example</h2> <!> ',1);function te(l){let t=M(d([20]));var a=O(),r=v(N(a),2);K(r,{min:0,max:100,stepSize:1,get values(){return $(t)},set values(o){U(t,d(o))}});var c=v(r);g(()=>j(c,` Value: ${$(t)??""}`)),_(l,a)}export{te as default};
