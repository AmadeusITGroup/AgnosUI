import{p as _,M as h,K as y,t as g,h as x,c as b,a as S,j as $,b as V,R as d,f as w,l as z,g as v,s as C,k as H}from"./AppCommon-DR1c1M0F.js";import{a as i}from"./actions-CroD04Qy.js";import{c as N}from"./config-fL1zUtMD.js";import{c as j}from"./slider-Cs69pziL-DTtGgwoL.js";import{c as F}from"./dom-gfxqXJpK-BWIOF16w.js";import"./stores--ikXRI1V.js";import"./index-client-TjbitBpq.js";import"./writables-DCiBdIBK-BDXIYxAp.js";import"./resizeObserver-BAr7UISU.js";var K=g("<input>");function L(p,e){_(e,!0);let r=h(e,"values",15),o=y(e,["$$slots","$$events","$$legacy","values"]);const{state:t,directives:{sliderDirective:l,clickableAreaDirective:m,handleEventsDirective:u}}=N({factory:j,widgetName:"slider",get props(){return{...o,values:r()}},enablePatchChanged:!0,events:{onValuesChange:a=>{r(a)}}});var s=K();let f;i(s,a=>l==null?void 0:l(a)),i(s,a=>m==null?void 0:m(a)),i(s,(a,n)=>u==null?void 0:u(a,n),()=>({item:{id:0}})),i(s,(a,n)=>{var c;return(c=F)==null?void 0:c(a,n)},()=>"range"),x(a=>f=$(s,f,{type:"range",min:t.min,max:t.max,value:t.sortedHandles[0].value,step:t.stepSize,"aria-label":t.sortedHandles[0].ariaLabel,...a}),[()=>({})]),b(p,s),S()}var M=g("<!> ",1);function O(p){let e=V(d([20]));var r=M(),o=w(r);L(o,{min:0,max:100,stepSize:1,className:"w-full",get values(){return v(e)},set values(l){z(e,d(l))}});var t=C(o);x(()=>H(t,` Value: ${v(e)??""}`)),b(p,r)}export{O as default};
