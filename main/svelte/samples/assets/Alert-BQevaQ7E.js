import{p as y,f as h,c as A,b as m,a as S,t as v,K as C,n as k,s as B,d as w,e as L,S as N,M as O,r as P,w as $,O as V,k as W}from"./AppCommon-CBBtLyuE.js";import{a as _}from"./actions-Dry0yoXS.js";import{S as x}from"./Slot-B_UvH1Q6.js";import{c as D}from"./alert-BgEPCCAt-BX7FYQOY.js";import{d as F}from"./writables-DCiBdIBK-CIOT50Xk.js";import{e as K}from"./extendWidget-CYslR8F4.js";import{f as M}from"./fade-uOobJKgw-BHd2cbPe.js";import{B as U}from"./types-Bw2nvhNr.js";import{c as X}from"./config-VEX93h1Q.js";import{c as j}from"./stores-DX-ADOKq-BfxXclJX.js";const q={structure:void 0,children:void 0,type:"primary"},z={transition:M},G={type:F(U),structure:void 0,children:void 0},H=K(D,q,G,z),I=H;var J=(a,t,e)=>e.api.close(),Q=v('<button type="button" class="btn-close"></button>'),R=v('<div class="alert-body"><!></div> <!>',1);function Y(a,t){y(t,!0);let e=C(t,["$$slots","$$events","$$legacy"]),i=t.state;var s=R(),p=h(s),r=k(p);x(r,{get content(){return i.children},get props(){return e}});var o=B(p,2);{var f=n=>{var l=Q();l.__click=[J,e,t],w(()=>N(l,"aria-label",i.ariaCloseButtonLabel)),m(n,l)};A(o,n=>{i.dismissible&&n(f)})}m(a,s),S()}L(["click"]);const Z=(a,t=V)=>{Y(a,$(t))};var tt=v("<div><!></div>");function ut(a,t){y(t,!0);let e=O(t,"visible",15),i=C(t,["$$slots","$$events","$$legacy","visible"]);const s=X({factory:I,widgetName:"alert",get props(){return{...i,visible:e()}},enablePatchChanged:!0,defaultConfig:{structure:Z},events:{onVisibleChange:c=>{e(c)}}}),p=s.api,{state:r,directives:{transitionDirective:o}}=s;var f=P(),n=h(f);{var l=c=>{var d=tt();let b;var E=k(d);x(E,{get content(){return r.structure},props:s}),_(d,(u,T)=>{var g;return(g=j)==null?void 0:g(u,T)},()=>"au-alert alert alert-"+r.type+" "+r.className+" "+(r.dismissible?"alert-dismissible":"")),_(d,u=>o==null?void 0:o(u)),w(u=>b=W(d,b,{role:"alert",...u}),[()=>({})]),m(c,d)};A(n,c=>{r.hidden||c(l)})}return m(a,f),S({api:p})}export{ut as A};
