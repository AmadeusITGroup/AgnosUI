import{h as D,p as _,v as I,f as x,c as z,b as u,a as y,s as g,e as d,d as P,a2 as E,t as w,a1 as T,n as L,g as v,j as b,R as f,k as A,r as C,w as S,O as R}from"./AppCommon-C_Uz3Ejm.js";import{P as h}from"./Pagination-nGORNiRX.js";import"./pageFactory-CZZJDqOh-CXhaXj0q.js";import"./extendWidget-Dy2T1Nx7.js";import"./directive-CKEccryv-Dj2WBjfx.js";import"./pagination-DwDRot6q-BqdsXN2t.js";import"./writables-DCiBdIBK-COVli6XW.js";import"./Slot-Bu-WTpc_.js";import"./snippet-gGBChira.js";import"./config-BR7DENd9.js";import"./config-vsRo1j0h.js";import"./index-client-D5u8RE9d.js";import"./actions-CtzdcLql.js";import"./class-DjsZmGv6.js";function F(o,t){o.key==="Enter"&&t(o)}var G=w('<li class="au-custom-pages-item"><div class="mb-3 d-flex flex-nowrap px-2"><label id="paginationInputLabel" for="paginationInput" class="col-form-label me-2 ms-1">Page</label> <input type="text" inputmode="numeric" pattern="[0-9]*" class="form-control custom-pages-input" id="paginationInput" aria-labelledby="paginationInputLabel paginationDescription" style="width: 2.5rem"> <span id="paginationDescription" class="col-form-label text-nowrap px-2"> </span></div></li>');function j(o,t){_(t,!0);const m=/[^0-9]/g;function i(e){const a=e.currentTarget.value,n=parseInt(a);t.api.select(n),e.currentTarget.value=t.state.page.toString()}function p(e){e.currentTarget.value=e.currentTarget.value.replace(m,"")}var r=I(),c=x(r);z(c,()=>t.state.pages.length>0,e=>{var a=G(),n=d(a),s=g(d(n),2);s.__keydown=[F,i],s.__input=p;var l=g(s,2),k=d(l);P(()=>{T(s,t.state.page),L(k,`of ${t.state.pages.length??""}`)}),E("blur",s,i),u(e,a)}),u(o,r),y()}D(["keydown","input"]);var B=w("<p>A pagination with customized links:</p> <!> <hr> <p>A pagination with customized pages:</p> <!>",1);function $(o,t){_(t,!0);const m=e=>["A","B","C","D","E","F"][e-1];let i=A(4);var p=B(),r=g(x(p),2);h(r,{get page(){return v(i)},set page(a){b(i,f(a))},collectionSize:60,previousPageLabel:"Prev",nextPageLabel:"Next",ariaLabel:"Page navigation with customized links",numberLabel:(a,n)=>{let s=()=>n==null?void 0:n().displayedPage;var l=C();P(()=>L(l,m(s()))),u(a,l)},$$slots:{numberLabel:!0}});var c=g(r,6);h(c,{get page(){return v(i)},set page(a){b(i,f(a))},collectionSize:60,ariaLabel:"Page navigation with customized pages",pagesDisplay:(a,n=R)=>{j(a,S(n))},$$slots:{pagesDisplay:!0}}),u(o,p),y()}export{$ as default};