import{p as U,j as A,R as _,g as b,P as z,b as v,a as G,t as h,h as D,k as c,f as J,d as L,s as S,r as K,Q as O,S as k,n as x,l as V,q as W}from"./AppCommon-CvTG4iwO.js";import{a as H}from"./actions-LhUqO-Ga.js";import{S as X}from"./Select-Bzw_TagF.js";import{c as Y}from"./directive-CKEccryv-BKNwwjMq.js";import"./class-CIYp1y2F.js";import"./Slot-PdhkTCCx.js";import"./snippet-BkLQeW4l.js";import"./config-BqHMhCCn.js";import"./config-Bb4GyM__.js";import"./index-client-DxeYKk58.js";import"./floatingUI-CgHbMfHe.js";import"./promise-CY2U8bTP-Dsfi2HxK.js";import"./focustrack-DJxvbHa4.js";import"./navManager-Bb_4h7VN.js";import"./extendWidget-JxsCFpbr.js";function Z(m,s){let o;return(...f)=>{o&&clearTimeout(o),o=setTimeout(()=>{m(...f)},s)}}const $=m=>{let s;return(...o)=>(s==null||s.abort(),s=new AbortController,m(s.signal,...o))};var tt=h('<a target="_blank" rel="noreferrer"> </a> <button></button>',1),et=h('<label><div class="fw-bold"> </div> <div class="text-wrap wiki-desc"> </div></label>'),it=h('<a class="pe-2"> </a>'),at=h('<div class="custom-select my-auto mb-3"><!> <span class="fw-bold">Selection:</span> <!></div>');function ht(m,s){U(s,!0);const o="https://en.wikipedia.org/?curid=";let f=A(_([])),T=A(_([]));const I=e=>"page-"+e.pageid;function B(e){const i=document.createElement("div");return i.innerHTML=e,i.innerText}const E=Z($(async(e,i)=>{var r;const t=await(await fetch("https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch="+i,{signal:e})).json();D(f,_(((r=t.query)==null?void 0:r.search.map(n=>({...n,snippet:B(n.snippet)})))??[]))}),200),M=new Intl.Collator("en").compare;function N(e){D(T,_((e||[]).sort((i,a)=>M(i.title,a.title))))}const Q=e=>e.querySelectorAll("a,button,input");var q=at(),j=c(q);X(j,{get items(){return b(f)},itemIdFn:I,onFilterTextChange:E,onSelectedChange:N,navSelector:Q,badgeClassName:"badge text-bg-light d-flex align-items-center",badgeLabel:(a,t)=>{let r=()=>t==null?void 0:t().itemContext,n=()=>t==null?void 0:t().directives;var l=tt(),p=J(l),w=c(p),d=S(p,2);const C=W(()=>({}));let F;H(d,(g,y)=>{var u;return(u=Y)==null?void 0:u(g,y)},()=>"btn-close ms-1 wiki-btn-close"),H(d,(g,y)=>{var u,P;return(P=(u=n()).badgeCloseButtonDirective)==null?void 0:P.call(u,g,y)},r),L(()=>{k(p,"href",`${o}${r().item.pageid}`),x(w,r().item.title),F=V(d,F,{type:"button","aria-label":"Close",...b(C)})}),v(a,l)},itemLabel:(a,t)=>{let r=()=>t==null?void 0:t().itemContext.id,n=()=>t==null?void 0:t().itemContext.item;var l=et(),p=c(l),w=c(p),d=S(p,2),C=c(d);L(()=>{k(l,"for",""+r()),x(w,n().title),x(C,n().snippet)}),v(a,l)},$$slots:{badgeLabel:!0,itemLabel:!0}});var R=S(j,4);z(R,17,()=>b(T),O,(e,i)=>{var a=it(),t=c(a);L(()=>{k(a,"href",`${o}${b(i).pageid}`),x(t,b(i).title)}),v(e,a)},e=>{var i=K("none");v(e,i)}),v(m,q),G()}export{ht as default};
