import{b as p,R as i,t as b,l as c,g as r,d as e,s as o,h as j,k as n,c as k}from"./AppCommon-D7NbxiuO.js";import{S as u}from"./Slider-BSwGQVoG.js";import"./actions-Dpbh0QL9.js";import"./slider-Cs69pziL-k_XBpLgn.js";import"./dom-gfxqXJpK-C4IpTiyS.js";import"./stores-BR_fMUaC.js";import"./writables-DCiBdIBK-CVjuFWTk.js";import"./resizeObserver-Cb8jJOsJ.js";import"./extendWidget-BfiXmsEc.js";import"./Slot-DnDKqXJS.js";import"./snippet-DLbXg7xX.js";import"./config-AhRHUZbV.js";import"./config-Ct7n0YF9.js";import"./index-client-CzxqcrRv.js";var z=b('<div class="d-flex" style="height: 350px"><div class="col-6" style="height: 300px"><!> <div class="mt-3"> </div></div> <div class="col-6" style="height: 300px"><!> <div class="mt-3"> </div></div></div>');function H(x){let a=p(i([10,40])),s=p(i([40]));var l=z(),v=e(l),m=e(v);u(m,{min:0,max:100,stepSize:1,vertical:!0,className:"my-0",get values(){return r(a)},set values(t){c(a,i(t))}});var g=o(m,2),h=e(g),_=o(v,2),d=e(_);u(d,{min:0,max:100,stepSize:25,vertical:!0,className:"my-0",showTicks:!0,get values(){return r(s)},set values(t){c(s,i(t))}});var f=o(d,2),y=e(f);j((t,S)=>{n(h,`Form control values: ${t??""}`),n(y,`From control value: ${S??""}`)},[()=>{var t;return(t=r(a))==null?void 0:t.join(", ")},()=>{var t;return(t=r(s))==null?void 0:t.join(", ")}]),k(x,l)}export{H as default};
