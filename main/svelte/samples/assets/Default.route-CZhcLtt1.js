import{p as _,P as y,d as v,b as f,a as D,t as g,O as S,l as $,g as c,q as V,k,T as u,s as d,f as w,j as z,n as C}from"./AppCommon-D6XzPDt_.js";import{a as l}from"./actions-C5zFepch.js";import{c as E}from"./config-D1K6DXRz.js";import{c as H}from"./slider-DYrwS7Mv-Dv5u7sze.js";import{c as P}from"./directive-CKEccryv-BLJ74ze2.js";import"./index-client-D9YS31ny.js";import"./writables-DCiBdIBK-M3xMKWuL.js";import"./resizeObserver-D1p8hjpO.js";var j=g("<input>");function q(o,a){_(a,!0);let r=y(a,"values",15),i=S(a,["$$slots","$$events","$$legacy","values"]);const{state:t,directives:{sliderDirective:n,clickableAreaDirective:b,handleEventsDirective:h}}=E({factory:H,widgetName:"slider",get props(){return{...i,values:r()}},enablePatchChanged:!0,events:{onValuesChange:e=>{r(e)}}});var s=j();const x=V(()=>({}));let m;l(s,e=>n(e)),l(s,e=>b(e)),l(s,(e,p)=>h(e,p),()=>({item:{id:0}})),l(s,(e,p)=>P(e,p),()=>"range"),v(()=>m=$(s,m,{type:"range",min:t.min,max:t.max,value:t.sortedHandles[0].value,step:t.stepSize,"aria-label":t.sortedHandles[0].ariaLabel,...c(x)})),f(o,s),D()}var A=g('<h2 class="text-lg mb-2">DaisyUI Example</h2> <!> ',1);function B(o){let a=k(u([20]));var r=A(),i=d(w(r),2);q(i,{min:0,max:100,stepSize:1,get values(){return c(a)},set values(n){z(a,u(n))}});var t=d(i);v(()=>C(t,` Value: ${c(a)??""}`)),f(o,r)}export{B as default};