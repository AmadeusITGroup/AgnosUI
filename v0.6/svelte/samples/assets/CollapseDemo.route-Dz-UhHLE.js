import{p as k,M as P,s as h,c as V,d as g,b as n,a as q,t as u,e,h as z,l as B,g as D,S as F,n as I,q as M,r as S}from"./AppCommon-C_Uz3Ejm.js";import{h as W}from"./html-DgT0is4o.js";import{s as j}from"./snippet-gGBChira.js";import{a as A}from"./actions-CtzdcLql.js";import{t as E}from"./class-DjsZmGv6.js";import{c as G}from"./baseTransitions-GPSQ6ZzE.js";import{c as H}from"./collapse-CVjUhnIz-B14TZlO7.js";import{c as J}from"./config-BR7DENd9.js";import"./writables-DCiBdIBK-COVli6XW.js";import"./directive-CKEccryv-Dj2WBjfx.js";import"./promise-CY2U8bTP-wBjUimDL.js";import"./cssTransitions-Da5O2FVQ.js";import"./config-vsRo1j0h.js";import"./index-client-D5u8RE9d.js";const K=`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100">
    <rect class="horizontal" x="20" y="45" width="60" height="10" fill="currentColor" />
    <rect class="vertical" x="45" y="20" width="10" height="60" fill="currentColor" />
</svg>`;var L=(i,t)=>t(),N=u('<div><div class="card-body"><!></div></div>'),O=u('<div class="card"><div class="card-header p-0"><button type="button" id="collapse-toggle" class="btn toggle-button" aria-controls="collapse-content"> <span class="ms-1 collapse-icon"><!></span></button></div> <!></div>');function Q(i,t){k(t,!0);let s=P(t,"expanded",15);const{state:a,api:{toggle:f},directives:{directive:_}}=J({factory:G,get props(){return{visible:s(),transition:H}},enablePatchChanged:!0,events:{onVisibleChange:l=>{s(l)}}});var c=O(),d=e(c),r=e(d);r.__click=[L,f];var p=e(r),v=h(p),b=e(v);W(b,()=>K);var x=h(d,2);V(x,()=>!a.hidden,l=>{var o=N();const w=M(()=>({}));let m;var y=e(o),C=e(y);j(C,()=>t.children),A(o,T=>_(T)),g(()=>m=B(o,m,{id:"collapse-content",...D(w)})),n(l,o)}),g(()=>{F(r,"aria-expanded",a.visible||void 0),I(p,`${t.headerText??""} `),E(v,"expanded",a.visible)}),n(i,c),q()}z(["click"]);function nt(i){Q(i,{headerText:"Toggle content",expanded:!0,children:(t,s)=>{var a=S("Content to display / hide.");n(t,a)},$$slots:{default:!0}})}export{nt as default};