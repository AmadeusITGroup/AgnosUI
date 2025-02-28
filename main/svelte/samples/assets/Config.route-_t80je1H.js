import{p as A,t as f,f as B,s as i,d as r,P as E,c as v,g as a,b as o,a as F,l as n,n as G,h as H,k as J,Q as K}from"./AppCommon-DR1c1M0F.js";import{b as h}from"./input-ed-PyCSg.js";import{b as L}from"./select-D4GR1hOL.js";import{b as M}from"./this-C1_jvGPY.js";import{A as N}from"./Alert-CStDq-0m.js";import"./actions-CroD04Qy.js";import"./Slot-BJQWjOdF.js";import"./snippet-DBdFeI9s.js";import"./alert-DH-mO6WX-DpNykjZo.js";import"./common-Bffx1jJO-RoKsr9E2.js";import"./baseTransitions-BWpENLjL.js";import"./writables-DCiBdIBK-BDXIYxAp.js";import"./stores--ikXRI1V.js";import"./dom-gfxqXJpK-BWIOF16w.js";import"./promise-XSP94FjG-BeY49cBm.js";import"./extendWidget-BaZQTsYH.js";import"./fade-uOobJKgw-CqY_1jhq.js";import"./simpleClassTransition-BZasCx_s.js";import"./cssTransitions-CB-RM4jU.js";import"./types-Bw2nvhNr.js";import"./config-1F64LY8-.js";import"./config-fL1zUtMD.js";import"./index-client-TjbitBpq.js";var P=(t=>(t.success="success",t.info="info",t.warning="warning",t.danger="danger",t.primary="primary",t.secondary="secondary",t.light="light",t.dark="dark",t))(P||{}),R=f("<option> </option>"),U=f(`<h4 class="alert-heading">Well done!</h4> <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing
		within an alert works with this kind of content.</p> <hr> <p class="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>`,1),V=f('<button class="btn btn-primary showAlert" type="button">Show alert</button> <br> <br> <div class="d-flex flex-column"><div class="d-flex form-group"><label class="align-self-center me-3" for="typeSelect">Alert type:</label> <select id="typeSelect" class="form-select w-auto"></select></div> <label><input class="form-check-input me-1" type="checkbox">Animated on init</label> <label><input class="form-check-input me-1" type="checkbox">Animated</label> <label><input class="dismissibleInput form-check-input me-1" type="checkbox">Dismissible</label></div> <br> <br> <!>',1);function _e(t,W){A(W,!0);let p,c=o(!0),m=o(!0),u=o(!0),d=o("success");const $=Object.entries(P).map(e=>({value:e[1],label:e[0]}));var g=V(),_=B(g);_.__click=()=>p.api.open();var y=i(_,6),k=r(y),x=i(r(k),2);E(x,21,()=>$,K,(e,b)=>{let l=()=>a(b).value,q=()=>a(b).label;var s=R(),O={},z=r(s);H(()=>{O!==(O=l())&&(s.value=(s.__value=l())==null?"":l()),J(z,q())}),v(e,s)});var w=i(k,2),j=r(w),I=i(w,2),C=r(I),D=i(I,2),Q=r(D),T=i(y,6);M(N(T,{get dismissible(){return a(u)},get animatedOnInit(){return a(c)},get animated(){return a(m)},get type(){return a(d)},children:(e,b)=>{var l=U();v(e,l)},$$slots:{default:!0}}),e=>p=e,()=>p),L(x,()=>a(d),e=>n(d,e)),h(j,()=>a(c),e=>n(c,e)),h(C,()=>a(m),e=>n(m,e)),h(Q,()=>a(u),e=>n(u,e)),v(t,g),F()}G(["click"]);export{_e as default};
