import{p as z,s as o,t as f,f as A,b as i,d as r,Q as B,c as v,g as a,l as n,a as E,n as F,h as G,k as H,R as J}from"./AppCommon-CsXJDRZ3.js";import{b as h}from"./input-Cc6iIBp0.js";import{b as K}from"./select-CTPr5Ph7.js";import{b as L}from"./this-DCZ6uhGz.js";import{A as M}from"./Alert-C6wyhIYr.js";import"./actions-kl0KjzIn.js";import"./Slot-BZUO5b9L.js";import"./snippet-B5aMU-E6.js";import"./alert-YIlqdEPO-DDarYC_X.js";import"./common-BqUjUBPy-CaOfR52U.js";import"./baseTransitions-Bdi_u5YA.js";import"./writables-CgpOQ4hA-DwO4tqpW.js";import"./stores-BElQIA3m.js";import"./dom-gfxqXJpK-BenLeVwg.js";import"./promise-XSP94FjG-Bz_ckb1K.js";import"./widget-DeVncyQM.js";import"./extendWidget-Dym7HUbM.js";import"./fade-uOobJKgw-83NLz7d-.js";import"./simpleClassTransition-DcitWHdq.js";import"./cssTransitions-D71ShtyF.js";import"./types-Bw2nvhNr.js";import"./config-DPIUpkcO.js";import"./config-TUPcxXVO.js";import"./index-client-BaNbKOMT.js";var W=(t=>(t.success="success",t.info="info",t.warning="warning",t.danger="danger",t.primary="primary",t.secondary="secondary",t.light="light",t.dark="dark",t))(W||{}),N=f("<option> </option>"),U=f(`<h4 class="alert-heading">Well done!</h4> <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing
		within an alert works with this kind of content.</p> <hr> <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>`,1),V=f('<button class="btn btn-primary showAlert" type="button">Show alert</button> <br> <br> <div class="d-flex flex-column"><div class="d-flex form-group"><label class="align-self-center me-3" for="typeSelect">Alert type:</label> <select id="typeSelect" class="form-select w-auto"></select></div> <label><input class="form-check-input me-1" type="checkbox">Animated on init</label> <label><input class="form-check-input me-1" type="checkbox">Animated</label> <label><input class="dismissibleInput form-check-input me-1" type="checkbox">Dismissible</label></div> <br> <br> <!>',1);function ye(t,$){z($,!0);let p,m=o(!0),c=o(!0),u=o(!0),d=o("success");const j=Object.entries(W).map(e=>({value:e[1],label:e[0]}));var g=V(),_=A(g);_.__click=()=>p.api.open();var y=i(_,6),k=r(y),x=i(r(k),2);B(x,21,()=>j,J,(e,b)=>{let l=()=>a(b).value,T=()=>a(b).label;var s=N(),O={},q=r(s);G(()=>{O!==(O=l())&&(s.value=(s.__value=l())==null?"":l()),H(q,T())}),v(e,s)});var w=i(k,2),C=r(w),I=i(w,2),D=r(I),P=i(I,2),Q=r(P),R=i(y,6);L(M(R,{get dismissible(){return a(u)},get animatedOnInit(){return a(m)},get animated(){return a(c)},get type(){return a(d)},children:(e,b)=>{var l=U();v(e,l)},$$slots:{default:!0}}),e=>p=e,()=>p),K(x,()=>a(d),e=>n(d,e)),h(C,()=>a(m),e=>n(m,e)),h(D,()=>a(c),e=>n(c,e)),h(Q,()=>a(u),e=>n(u,e)),v(t,g),E()}F(["click"]);export{ye as default};
