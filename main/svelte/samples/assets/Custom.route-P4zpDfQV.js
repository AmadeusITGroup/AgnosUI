import{e as I,p as x,v as z,f as _,c as E,b as u,a as y,s as g,k as d,d as P,a2 as T,t as w,a1 as A,n as L,g as v,h as f,R as b,j as C,r as S,x as R,O as F}from"./AppCommon-C8th3JWG.js";import{P as h}from"./Pagination-ROFagJ3z.js";import"./pageFactory-CZZJDqOh-B02AVgsF.js";import"./extendWidget-DVKkl0o0.js";import"./directive-CKEccryv-CjsmjpgW.js";import"./pagination-DwDRot6q-D8Rc_xyO.js";import"./writables-DCiBdIBK-BMnIMCZ2.js";import"./Slot-CQYwMNWG.js";import"./snippet-DR72IjbS.js";import"./config-DQWobjli.js";import"./config-CC1Dpxee.js";import"./index-client-DZwLQsoi.js";import"./actions-B6To-NSG.js";import"./class-BqF4J3H6.js";function G(s,e){s.key==="Enter"&&e(s)}var j=w('<li class="au-custom-pages-item"><div class="mb-3 d-flex flex-nowrap px-2"><label id="paginationInputLabel" for="paginationInput" class="col-form-label me-2 ms-1">Page</label> <input type="text" inputmode="numeric" pattern="[0-9]*" class="form-control custom-pages-input" id="paginationInput" aria-labelledby="paginationInputLabel paginationDescription" style="width: 2.5rem"> <span id="paginationDescription" class="col-form-label text-nowrap px-2"> </span></div></li>');function B(s,e){x(e,!0);const m=/[^0-9]/g;function n(a){const t=a.currentTarget.value,p=parseInt(t);e.api.select(p),a.currentTarget.value=e.state.page.toString()}function l(a){a.currentTarget.value=a.currentTarget.value.replace(m,"")}var o=z(),c=_(o);{var r=a=>{var t=j(),p=d(t),i=g(d(p),2);i.__keydown=[G,n],i.__input=l;var k=g(i,2),D=d(k);P(()=>{A(i,e.state.page),L(D,`of ${e.state.pages.length??""}`)}),T("blur",i,n),u(a,t)};E(c,a=>{e.state.pages.length>0&&a(r)})}u(s,o),y()}I(["keydown","input"]);var K=w("<p>A pagination with customized links:</p> <!> <hr> <p>A pagination with customized pages:</p> <!>",1);function aa(s,e){x(e,!0);const m=r=>["A","B","C","D","E","F"][r-1];let n=C(4);var l=K(),o=g(_(l),2);h(o,{collectionSize:60,previousPageLabel:"Prev",nextPageLabel:"Next",ariaLabel:"Page navigation with customized links",get page(){return v(n)},set page(a){f(n,b(a))},numberLabel:(a,t)=>{let p=()=>t==null?void 0:t().displayedPage;var i=S();P(()=>L(i,m(p()))),u(a,i)},$$slots:{numberLabel:!0}});var c=g(o,6);h(c,{collectionSize:60,ariaLabel:"Page navigation with customized pages",get page(){return v(n)},set page(a){f(n,b(a))},pagesDisplay:(a,t=F)=>{B(a,R(t))},$$slots:{pagesDisplay:!0}}),u(s,l),y()}export{aa as default};