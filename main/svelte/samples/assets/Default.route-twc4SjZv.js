import{k as a,T as i,s as t,f as $,g as l,j as r,d as S,b as F,t as R,n as V,e as s}from"./AppCommon-D6XzPDt_.js";import{b as o}from"./input-Bm0Wck4U.js";import{S as p}from"./Slider-CO6JF7AW.js";import"./shared--R83F3HE.js";import"./actions-C5zFepch.js";import"./slider-DYrwS7Mv-Dv5u7sze.js";import"./directive-CKEccryv-BLJ74ze2.js";import"./writables-DCiBdIBK-M3xMKWuL.js";import"./resizeObserver-D1p8hjpO.js";import"./extendWidget-Cq2v8VqQ.js";import"./Slot-DAvQuAHA.js";import"./snippet-Bt6SC6hZ.js";import"./config-BMGCqy3X.js";import"./config-D1K6DXRz.js";import"./index-client-D9YS31ny.js";var q=R('<h2>Slider with form control</h2> <!> <hr> <h2>Slider with value</h2> <!> <hr> <h2>Disabled slider</h2> <!> <div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch" id="disabled"> <label class="form-check-label" for="disabled">Disabled</label></div> <div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch" id="readonly"> <label class="form-check-label" for="readonly">Readonly</label></div> <div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch" id="showMinMax"> <label class="form-check-label" for="showMinMax">Min-Max label visibility</label></div> <div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch" id="showValues"> <label class="form-check-label" for="showValues">Value label visibility</label></div>',1);function Y(T){let c=a(i([70])),v=a(i([60])),d=a(i([20])),n=a(!0),m=a(!0),h=a(!0),u=a(!0);var b=q(),f=t($(b),2);p(f,{min:0,max:100,stepSize:1,get values(){return l(c)},set values(e){r(c,i(e))},get showMinMaxLabels(){return l(h)},get showValueLabels(){return l(u)}});var g=t(f);S(()=>V(g,` Form control value: ${l(c).join(", ")??""} `));var k=t(g,5);p(k,{min:0,max:100,stepSize:1,get values(){return l(d)},set values(e){r(d,i(e))}});var x=t(k),w=t(x,5);p(w,{min:0,max:100,stepSize:1,get values(){return l(v)},set values(e){r(v,i(e))},get disabled(){return l(n)},get readonly(){return l(m)}});var _=t(w,2),L=s(_),y=t(_,2),z=s(y),M=t(y,2),D=s(M),j=t(M,2),C=s(j);S(()=>V(x,` Value:
${l(d)??""} `)),o(L,()=>l(n),e=>r(n,e)),o(z,()=>l(m),e=>r(m,e)),o(D,()=>l(h),e=>r(h,e)),o(C,()=>l(u),e=>r(u,e)),F(T,b)}export{Y as default};