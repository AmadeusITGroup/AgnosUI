import{j as k,p as h,v as I,f as _,g as z,c as g,a as y,b as u,h as d,e as w,X as D,r as x,a5 as E,t as P,i as T,k as v,n as f,u as A,w as C,Q as S,l as F}from"./AppCommon-yQ9GDd-E.js";import{P as b}from"./Pagination-uzS9wlYH.js";import"./pageFactory-BMdGxeJT-BbjEmsUh.js";import"./extendWidget-DMfSPYhn.js";import"./directive-CKEccryv-CIaX9Ntp.js";import"./pagination-dkNo_5ex-CJG14QCp.js";import"./writables-DoU_XYTX-DICLMg1u.js";import"./Slot-QVDHCOJE.js";import"./config-BI14XQLI.js";import"./snippet-CbCRci52.js";import"./actions-1FJs2NnX.js";import"./class-LKf8CrKl.js";function G(o,t){o.key==="Enter"&&t(o)}var R=P('<li class="au-custom-pages-item"><div class="mb-3 d-flex flex-nowrap px-2"><label id="paginationInputLabel" for="paginationInput" class="col-form-label me-2 ms-1">Page</label> <input type="text" inputmode="numeric" pattern="[0-9]*" class="form-control custom-pages-input" id="paginationInput" aria-labelledby="paginationInputLabel paginationDescription" style="width: 2.5rem"> <span id="paginationDescription" class="col-form-label text-nowrap px-2"> </span></div></li>');function X(o,t){h(t,!0);const c=/[^0-9]/g;function n(a){const e=a.currentTarget.value,i=parseInt(e);t.widget.actions.select(i),a.currentTarget.value=t.widget.stores.page$().toString()}function l(a){a.currentTarget.value=a.currentTarget.value.replace(c,"")}var r=I(),m=_(r);z(m,()=>t.state.pages.length>0,a=>{var e=R(),i=d(e),s=u(d(i),2);s.__keydown=[G,n],s.__input=l;var p=u(s,2),L=d(p);w(()=>{D(s,t.state.page),x(L,`of ${t.state.pages.length??""}`)}),E("blur",s,n),g(a,e)}),g(o,r),y()}k(["keydown","input"]);var j=P("<p>A pagination with customized links:</p> <!> <hr> <p>A pagination with customized pages:</p> <!>",1);function Y(o,t){h(t,!1);const c=a=>["A","B","C","D","E","F"][a-1];let n=F(4);T();var l=j(),r=u(_(l),2);b(r,{get page(){return v(n)},set page(e){f(n,e)},collectionSize:60,previousPageLabel:"Prev",nextPageLabel:"Next",ariaLabel:"Page navigation with customized links",numberLabel:(e,i)=>{let s=()=>i==null?void 0:i().displayedPage;var p=A();w(()=>x(p,c(s()))),g(e,p)},$$legacy:!0});var m=u(r,6);b(m,{get page(){return v(n)},set page(e){f(n,e)},collectionSize:60,ariaLabel:"Page navigation with customized pages",pagesDisplay:(e,i=S)=>{X(e,C(i))},$$legacy:!0}),g(o,l),y()}export{Y as default};
