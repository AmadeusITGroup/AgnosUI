import{h as _,p as g,s as c,c as C,b as d,a as h,t as b,O as $,e as a,d as A,U as T,f as S,g as U,j as w,T as B,r as L,w as M,Q as N,k as W}from"./AppCommon-D6XzPDt_.js";import{T as j}from"./Toast-DgaM0wxn.js";import{h as f}from"./html-yYy51nNy.js";import{b as z}from"./check-circle-fill-BFB53SSU.js";import{S as D}from"./Slot-DAvQuAHA.js";import{a as F}from"./config-BMGCqy3X.js";import"./actions-C5zFepch.js";import"./class-BjsImlqy.js";import"./toast-CpvsibAI-fBltagwk.js";import"./extendWidget-Cq2v8VqQ.js";import"./directive-CKEccryv-BLJ74ze2.js";import"./writables-DCiBdIBK-M3xMKWuL.js";import"./common-Banw3FYN-SqECcmCx.js";import"./baseTransitions-DhTxxwqe.js";import"./promise-CY2U8bTP-CiDKceh8.js";import"./fade-uOobJKgw-Doh8uNF0.js";import"./simpleClassTransition-BrNXnl2v.js";import"./cssTransitions-1ZcI4GgD.js";import"./snippet-Bt6SC6hZ.js";import"./config-D1K6DXRz.js";import"./index-client-D9YS31ny.js";const H=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2z"/>
  <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466"/>
</svg>`;var O=()=>window.alert("Undo"),P=(r,t,o)=>o.api.close(),Q=b('<button type="button" class="btn-close btn-close-white me-2 m-auto"></button>'),R=b('<div class="d-flex w-100"><div class="d-flex align-items-center flex-grow-1 toast-body"><span class="d-flex me-2"><!></span> <!> <button type="button" class="btn btn-sm ms-auto text-bg-success"><span class="me-2"><!></span>Undo</button></div> <!></div>');function V(r,t){g(t,!0);let o=$(t,["$$slots","$$events","$$legacy"]),s=t.state;var i=R(),l=a(i),p=a(l),m=a(p);f(m,()=>z);var e=c(p,2);D(e,{get content(){return s.children},get props(){return o}});var n=c(e,2);n.__click=[O];var u=a(n),k=a(u);f(k,()=>H);var x=c(l,2);C(x,()=>s.dismissible,y=>{var v=Q();v.__click=[P,o,t],A(()=>T(v,"aria-label",s.ariaCloseButtonLabel)),d(y,v)}),d(r,i),h()}_(["click"]);var q=(r,t)=>w(t,!0),E=b('<p>To put the action in the toast simply create custom contents.</p> <p><strong>Note:</strong> When header is not present default display is <code>flex</code></p> <div class="col-auto col-md-6"><!></div> <button class="btn btn-primary mt-2">Reset</button>',1);function vt(r,t){g(t,!0);const o=(e,n=N)=>{V(e,M(n))};F().set({toast:{autoHide:!1,dismissible:!0,className:"text-bg-success",structure:o}});let s=W(!0);var i=E(),l=c(S(i),4),p=a(l);j(p,{get visible(){return U(s)},set visible(e){w(s,B(e))},children:(e,n)=>{var u=L("This is a toast with action");d(e,u)},$$slots:{default:!0}});var m=c(l,2);m.__click=[q,s],d(r,i),h()}_(["click"]);export{vt as default};