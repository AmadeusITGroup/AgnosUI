import{j as a,R as i,s as t,f as R,g as l,h as r,d as S,b as $,t as F,n as V,k as s}from"./AppCommon-CEfp6GOi.js";import{b as o}from"./input-By9-tQuO.js";import{S as p}from"./Slider-B1otKBnX.js";import"./actions-CBYbTGn1.js";import"./slider-Br7aVEo8-D83esSzv.js";import"./stores-DX-ADOKq-D9qbYGXJ.js";import"./writables-DCiBdIBK-CRS_ATRd.js";import"./resizeObserver-Byj047Pk.js";import"./extendWidget-Cst5VrRh.js";import"./Slot-C7JyPn3q.js";import"./snippet-JcY8HOcF.js";import"./config-BVNYqkgi.js";import"./config-DiHukRJf.js";import"./index-client-g8-7jsLH.js";var q=F('<h2>Slider with form control</h2> <!> <hr> <h2>Slider with value</h2> <!> <hr> <h2>Disabled slider</h2> <!> <div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch" id="disabled"> <label class="form-check-label" for="disabled">Disabled</label></div> <div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch" id="readonly"> <label class="form-check-label" for="readonly">Readonly</label></div> <div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch" id="showMinMax"> <label class="form-check-label" for="showMinMax">Min-Max label visibility</label></div> <div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch" id="showValues"> <label class="form-check-label" for="showValues">Value label visibility</label></div>',1);function X(L){let c=a(i([70])),v=a(i([60])),d=a(i([20])),n=a(!0),m=a(!0),h=a(!0),u=a(!0);var b=q(),f=t(R(b),2);p(f,{min:0,max:100,stepSize:1,get showMinMaxLabels(){return l(h)},get showValueLabels(){return l(u)},get values(){return l(c)},set values(e){r(c,i(e))}});var g=t(f);S(()=>V(g,` Form control value: ${l(c).join(", ")??""} `));var k=t(g,5);p(k,{min:0,max:100,stepSize:1,get values(){return l(d)},set values(e){r(d,i(e))}});var x=t(k),w=t(x,5);p(w,{min:0,max:100,stepSize:1,get disabled(){return l(n)},get readonly(){return l(m)},get values(){return l(v)},set values(e){r(v,i(e))}});var _=t(w,2),T=s(_),y=t(_,2),z=s(y),M=t(y,2),D=s(M),j=t(M,2),C=s(j);S(()=>V(x,` Value:
${l(d)??""} `)),o(T,()=>l(n),e=>r(n,e)),o(z,()=>l(m),e=>r(m,e)),o(D,()=>l(h),e=>r(h,e)),o(C,()=>l(u),e=>r(u,e)),$(L,b)}export{X as default};
