import{p as C,P as j,v as w,f as B,c as _,b as r,a as D,O as F,h as k,s as d,d as h,t as b,e as p,U as I,g as L,j as x,T as O,r as g,k as R}from"./AppCommon-D6XzPDt_.js";import{h as S}from"./html-yYy51nNy.js";import{s as U}from"./snippet-Bt6SC6hZ.js";import{s as V}from"./class-BjsImlqy.js";import{c as W}from"./config-D1K6DXRz.js";import{c as q}from"./close_icon-BnSzxVRN.js";import{c as z}from"./toast-CpvsibAI-fBltagwk.js";import"./directive-CKEccryv-BLJ74ze2.js";import"./index-client-D9YS31ny.js";import"./extendWidget-Cq2v8VqQ.js";import"./writables-DCiBdIBK-M3xMKWuL.js";import"./common-Banw3FYN-SqECcmCx.js";import"./baseTransitions-DhTxxwqe.js";import"./promise-CY2U8bTP-CiDKceh8.js";var A=b('<button class="btn btn-sm btn-circle btn-ghost"><!></button>'),E=b("<div><!> <!></div>");function $(l,t){C(t,!0);let i=j(t,"visible",15),c=F(t,["$$slots","$$events","$$legacy","visible","children"]);const{state:e,api:n}=W({factory:z,widgetName:"toast",get props(){return{...c,visible:i()}},enablePatchChanged:!0,events:{onVisibleChange:o=>{i(o)}}});var v=w(),s=B(v);_(s,()=>!e.hidden,o=>{var a=E(),u=p(a);U(u,()=>t.children);var y=d(u,2);_(y,()=>e.dismissible,T=>{var m=A();m.__click=function(...P){var f;(f=n.close)==null||f.apply(this,P)};var N=p(m);S(N,()=>q),h(()=>I(m,"aria-label",e.ariaCloseButtonLabel)),r(T,m)}),h(()=>V(a,`alert ${e.className??""} flex`)),r(o,a)}),r(l,v),D()}k(["click"]);var G=(l,t)=>x(t,!0),H=b('<div class="h-[215px]"><button class="btn btn-primary">Reset Toast</button> <div class="toast"><!> <!></div></div>');function lt(l){let t=R(!0);var i=H(),c=p(i);c.__click=[G,t];var e=d(c,2),n=p(e);$(n,{className:"alert-success",get visible(){return L(t)},set visible(s){x(t,O(s))},children:(s,o)=>{var a=g("This is a success toast");r(s,a)},$$slots:{default:!0}});var v=d(n,2);$(v,{className:"alert-error",dismissible:!1,children:(s,o)=>{var a=g("This is an error toast");r(s,a)},$$slots:{default:!0}}),r(l,i)}k(["click"]);export{lt as default};