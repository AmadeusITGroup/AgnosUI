import{p as _,M as h,d as g,b as x,a as y,t as b,K as S,k as $,j as V,R as c,f as w,g as v,h as z,s as C,l as H}from"./AppCommon-wWEJ6LdR.js";import{a as i}from"./actions-Bnx6QvvI.js";import{c as N}from"./config-CzTY2ejt.js";import{c as j}from"./slider-C-BSdQ0b-Dtt9ynmR.js";import{c as F}from"./dom-BB9jLllr-CeqtqeKx.js";import"./stores-CJcu1rl_.js";import"./index-client-QFyY-InH.js";import"./writables-DCiBdIBK-BRdRWZTk.js";import"./resizeObserver-BKJ6ZT34.js";var K=b("<input>");function L(p,e){_(e,!0);let r=h(e,"values",15),o=S(e,["$$slots","$$events","$$legacy","values"]);const{state:t,directives:{sliderDirective:l,clickableAreaDirective:m,handleEventsDirective:u}}=N({factory:j,widgetName:"slider",get props(){return{...o,values:r()}},enablePatchChanged:!0,events:{onValuesChange:a=>{r(a)}}});var s=K();let d;i(s,a=>l==null?void 0:l(a)),i(s,a=>m==null?void 0:m(a)),i(s,(a,n)=>u==null?void 0:u(a,n),()=>({item:{id:0}})),i(s,(a,n)=>{var f;return(f=F)==null?void 0:f(a,n)},()=>"range"),g(a=>d=$(s,d,{type:"range",min:t.min,max:t.max,value:t.sortedHandles[0].value,step:t.stepSize,"aria-label":t.sortedHandles[0].ariaLabel,...a}),[()=>({})]),x(p,s),y()}var M=b("<!> ",1);function O(p){let e=V(c([20]));var r=M(),o=w(r);L(o,{min:0,max:100,stepSize:1,className:"w-full",get values(){return v(e)},set values(l){z(e,c(l))}});var t=C(o);g(()=>H(t,` Value: ${v(e)??""}`)),x(p,r)}export{O as default};
