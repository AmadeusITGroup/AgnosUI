import{V as a,W as i,b as t,f as j,k as l,n as r,e as S,c as F,t as R,r as V,h as s}from"./AppCommon-D_B8a5G6.js";import{b as o}from"./input-CwgdbO8E.js";import{S as p}from"./Slider-l60SwfLl.js";import"./shared-BAgiWxHa.js";import"./actions-B64vG8Da.js";import"./slider-0U0tI55x-xox9t7TE.js";import"./directive-CKEccryv-BAfxyCuh.js";import"./writables-DoU_XYTX-DPIJ9iVk.js";import"./resizeObserver-D0M9EgCw.js";import"./extendWidget-CKD28wu-.js";import"./Slot-Bt2_y6gy.js";import"./snippet-CHDzym81.js";import"./config-BmaADpVL.js";import"./config-CpwOCg7e.js";var W=R('<h2>Slider with form control</h2> <!> <hr> <h2>Slider with value</h2> <!> <hr> <h2>Disabled slider</h2> <!> <div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch" id="disabled"> <label class="form-check-label" for="disabled">Disabled</label></div> <div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch" id="readonly"> <label class="form-check-label" for="readonly">Readonly</label></div> <div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch" id="showMinMax"> <label class="form-check-label" for="showMinMax">Min-Max label visibility</label></div> <div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch" id="showValues"> <label class="form-check-label" for="showValues">Value label visibility</label></div>',1);function X(L){let c=a(i([70])),v=a(i([60])),d=a(i([20])),n=a(!0),m=a(!0),h=a(!0),u=a(!0);var b=W(),f=t(j(b),2);p(f,{min:0,max:100,stepSize:1,get values(){return l(c)},set values(e){r(c,i(e))},get showMinMaxLabels(){return l(h)},get showValueLabels(){return l(u)}});var g=t(f);S(()=>V(g,` Form control value: ${l(c).join(", ")??""} `));var k=t(g,5);p(k,{min:0,max:100,stepSize:1,get values(){return l(d)},set values(e){r(d,i(e))}});var x=t(k),w=t(x,5);p(w,{min:0,max:100,stepSize:1,get values(){return l(v)},set values(e){r(v,i(e))},get disabled(){return l(n)},get readonly(){return l(m)}});var _=t(w,2),T=s(_),y=t(_,2),z=s(y),M=t(y,2),D=s(M),C=t(M,2),$=s(C);S(()=>V(x,` Value:
${l(d)??""} `)),o(T,()=>l(n),e=>r(n,e)),o(z,()=>l(m),e=>r(m,e)),o(D,()=>l(h),e=>r(h,e)),o($,()=>l(u),e=>r(u,e)),F(L,b)}export{X as default};