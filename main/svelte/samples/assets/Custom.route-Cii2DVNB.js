import{p as _,r as D,f as P,e as I,c as u,a as x,t as y,b as g,d as v,h as w,a5 as z,n as E,a4 as T,k as L,s as A,l as f,g as b,P as C,q as S,v as F}from"./AppCommon-CsXJDRZ3.js";import{P as h}from"./Pagination-CufdcN-8.js";import"./pageFactory-CZZJDqOh-B_YzIu4L.js";import"./extendWidget-Dym7HUbM.js";import"./stores-BElQIA3m.js";import"./dom-gfxqXJpK-BenLeVwg.js";import"./pagination-B97wBLok-B6ofc6i2.js";import"./writables-CgpOQ4hA-DwO4tqpW.js";import"./widget-DeVncyQM.js";import"./Slot-BZUO5b9L.js";import"./snippet-B5aMU-E6.js";import"./config-DPIUpkcO.js";import"./config-TUPcxXVO.js";import"./index-client-BaNbKOMT.js";import"./actions-kl0KjzIn.js";function G(s,t){s.key==="Enter"&&t(s)}var R=y('<li class="au-custom-pages-item"><div class="mb-3 d-flex flex-nowrap px-2"><label id="paginationInputLabel" for="paginationInput" class="col-form-label me-2 ms-1">Page</label> <input type="text" inputmode="numeric" pattern="[0-9]*" class="form-control custom-pages-input" id="paginationInput" aria-labelledby="paginationInputLabel paginationDescription" style="width: 2.5rem"> <span id="paginationDescription" class="col-form-label text-nowrap px-2"> </span></div></li>');function q(s,t){_(t,!0);const m=/[^0-9]/g;function n(e){const a=e.currentTarget.value,p=parseInt(a);t.api.select(p),e.currentTarget.value=t.state.page.toString()}function l(e){e.currentTarget.value=e.currentTarget.value.replace(m,"")}var o=D(),c=P(o);{var r=e=>{var a=R(),p=v(a),i=g(v(p),2);i.__keydown=[G,n],i.__input=l;var d=g(i,2),k=v(d);w(()=>{T(i,t.state.page),L(k,`of ${t.state.pages.length??""}`)}),z("blur",i,n),u(e,a)};I(c,e=>{t.state.pages.length>0&&e(r)})}u(s,o),x()}E(["keydown","input"]);var B=y("<p>A pagination with customized links:</p> <!> <hr> <p>A pagination with customized pages:</p> <!>",1);function ee(s,t){_(t,!0);const m=r=>["A","B","C","D","E","F"][r-1];let n=A(4);var l=B(),o=g(P(l),2);h(o,{collectionSize:60,previousPageLabel:"Prev",nextPageLabel:"Next",ariaLabel:"Page navigation with customized links",get page(){return b(n)},set page(e){f(n,e,!0)},numberLabel:(e,a)=>{let p=()=>a==null?void 0:a().displayedPage;var i=S();w(d=>L(i,d),[()=>m(p())]),u(e,i)},$$slots:{numberLabel:!0}});var c=g(o,6);h(c,{collectionSize:60,ariaLabel:"Page navigation with customized pages",get page(){return b(n)},set page(e){f(n,e,!0)},pagesDisplay:(e,a=C)=>{q(e,F(a))},$$slots:{pagesDisplay:!0}}),u(s,l),x()}export{ee as default};
