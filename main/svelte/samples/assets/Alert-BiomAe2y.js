import{p as g,f as _,b as D,g as y,c as d,a as h,t as m,L as A,h as w,e as C,j as $,T as L,O as N,v as O,w as T,P as V,q as W}from"./AppCommon-CC-VkUgW.js";import{a as b}from"./actions-D-dhIHRy.js";import{S as k}from"./Slot-9PryA5S7.js";import{c as j}from"./alert-BZyrc6h_-opiM1DRI.js";import{b as q}from"./writables-DoU_XYTX-slp4MWt3.js";import{e as B}from"./extendWidget-wveUl8Yn.js";import{f as E}from"./fade-uOobJKgw-CGZdjDpc.js";import{c as F}from"./config-DXyDsFs3.js";import{c as z}from"./directive-CKEccryv-BuQmRVBG.js";const G={structure:void 0,children:void 0,type:"primary"},H={transition:E},I={type:q},J=B(j,G,I,H),K=J;var M=(l,t,a)=>a.api.close(),Q=m('<button type="button" class="btn-close"></button>'),R=m('<div class="alert-body"><!></div> <!>',1);function U(l,t){g(t,!0);let a=A(t,["$$slots","$$events","$$legacy"]),s=t.state;var c=R(),i=_(c),p=w(i);k(p,{get content(){return s.children},get props(){return a}});var e=D(i,2);y(e,()=>s.dismissible,v=>{var o=Q();o.__click=[M,a,t],C(()=>L(o,"aria-label",s.ariaCloseButtonLabel)),d(v,o)}),d(l,c),h()}$(["click"]);var X=m("<div><!></div>");function nt(l,t){g(t,!0);const a=(n,r=V)=>{U(n,T(r))};let s=N(t,"visible",15),c=A(t,["$$slots","$$events","$$legacy","visible"]);const i=F({factory:K,widgetName:"alert",get props(){return{...c,visible:s()}},enablePatchChanged:!0,defaultConfig:{structure:a},events:{onVisibleChange:n=>{s(n)}}}),p=i.api,{state:e,directives:{transitionDirective:v}}=i;var o=O(),x=_(o);return y(x,()=>!e.hidden,n=>{var r=X();let f;C(()=>f=W(r,f,{role:"alert"}));var P=w(r);k(P,{get content(){return e.structure},props:i}),b(r,(u,S)=>z(u,S),()=>"au-alert alert alert-"+e.type+" "+e.className+" "+(e.dismissible?"alert-dismissible":"")),b(r,u=>v(u)),d(n,r)}),d(l,o),h({api:p})}export{nt as A};