import{s as r,S as h,t as $,b as l,f as j,l as a,g as t,h as F,k as S,d as i,c as R}from"./AppCommon-CsXJDRZ3.js";import{b as s}from"./input-Cc6iIBp0.js";import{S as p}from"./Slider-BpnzYOV4.js";import"./actions-kl0KjzIn.js";import"./slider-DVthNbSG-ptKYA_D1.js";import"./dom-gfxqXJpK-BenLeVwg.js";import"./stores-BElQIA3m.js";import"./writables-CgpOQ4hA-DwO4tqpW.js";import"./resizeObserver-CKSARFF6.js";import"./widget-DeVncyQM.js";import"./extendWidget-Dym7HUbM.js";import"./Slot-BZUO5b9L.js";import"./snippet-B5aMU-E6.js";import"./config-DPIUpkcO.js";import"./config-TUPcxXVO.js";import"./index-client-BaNbKOMT.js";var q=$('<h2>Slider with form control</h2> <!> <hr> <h2>Slider with value</h2> <!> <hr> <h2>Disabled slider</h2> <!> <div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch" id="disabled"> <label class="form-check-label" for="disabled">Disabled</label></div> <div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch" id="readonly"> <label class="form-check-label" for="readonly">Readonly</label></div> <div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch" id="showMinMax"> <label class="form-check-label" for="showMinMax">Min-Max label visibility</label></div> <div class="form-check form-switch"><input class="form-check-input" type="checkbox" role="switch" id="showValues"> <label class="form-check-label" for="showValues">Value label visibility</label></div>',1);function Z(V){let o=r(h([70])),v=r(h([60])),c=r(h([20])),d=r(!0),m=r(!0),n=r(!0),u=r(!0);var b=q(),f=l(j(b),2);p(f,{min:0,max:100,stepSize:1,get showMinMaxLabels(){return t(n)},get showValueLabels(){return t(u)},get values(){return t(o)},set values(e){a(o,e,!0)}});var g=l(f),k=l(g,5);p(k,{min:0,max:100,stepSize:1,get values(){return t(c)},set values(e){a(c,e,!0)}});var x=l(k),w=l(x,5);p(w,{min:0,max:100,stepSize:1,get disabled(){return t(d)},get readonly(){return t(m)},get values(){return t(v)},set values(e){a(v,e,!0)}});var _=l(w,2),L=i(_),y=l(_,2),T=i(y),M=l(y,2),z=i(M),D=l(M,2),C=i(D);F(e=>{S(g,` Form control value: ${e??""} `),S(x,` Value:
${t(c)??""} `)},[()=>t(o).join(", ")]),s(L,()=>t(d),e=>a(d,e)),s(T,()=>t(m),e=>a(m,e)),s(z,()=>t(n),e=>a(n,e)),s(C,()=>t(u),e=>a(u,e)),R(V,b)}export{Z as default};
