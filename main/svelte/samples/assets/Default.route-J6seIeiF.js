import{p as R,M as S,v as j,f as w,c as g,b as r,a as B,L as D,d as $,e as y,t as f,s as u,k as m,S as F,g as I,h as T,R as M,r as k,j as V}from"./AppCommon-CEfp6GOi.js";import{h as W}from"./html-CPmKU06O.js";import{s as q}from"./snippet-JcY8HOcF.js";import{s as z}from"./class-LrGThO_m.js";import{c as A}from"./config-DiHukRJf.js";import{c as E}from"./close_icon-BnSzxVRN.js";import{c as G}from"./toast-C4Pnm63G-BXaj4-Pz.js";import"./stores-DX-ADOKq-D9qbYGXJ.js";import"./index-client-g8-7jsLH.js";import"./extendWidget-Cst5VrRh.js";import"./writables-DCiBdIBK-CRS_ATRd.js";import"./common-CgfScwMQ-C0WmZP3C.js";import"./baseTransitions-BWqY4yn9.js";import"./promise-CBh_HbSK-C5gb27iI.js";var H=f('<button class="btn btn-sm btn-circle btn-ghost"><!></button>'),J=f("<div><!> <!></div>");function x(o,t){R(t,!0);let i=S(t,"visible",15),l=D(t,["$$slots","$$events","$$legacy","visible","children"]);const{state:e,api:c}=A({factory:G,widgetName:"toast",get props(){return{...l,visible:i()}},enablePatchChanged:!0,events:{onVisibleChange:s=>{i(s)}}});var n=j(),a=w(n);{var p=s=>{var d=J(),_=m(d);q(_,()=>t.children);var N=u(_,2);{var C=b=>{var v=H();v.__click=function(...L){var h;(h=c.close)==null||h.apply(this,L)};var P=m(v);W(P,()=>E),$(()=>F(v,"aria-label",e.ariaCloseButtonLabel)),r(b,v)};g(N,b=>{e.dismissible&&b(C)})}$(()=>z(d,`alert ${e.className??""} flex`)),r(s,d)};g(a,s=>{e.hidden||s(p)})}r(o,n),B()}y(["click"]);var K=(o,t)=>T(t,!0),O=f('<div class="h-[215px]"><button class="btn btn-primary">Reset Toast</button> <div class="toast"><!> <!></div></div>');function nt(o){let t=V(!0);var i=O(),l=m(i);l.__click=[K,t];var e=u(l,2),c=m(e);x(c,{className:"alert-success",get visible(){return I(t)},set visible(a){T(t,M(a))},children:(a,p)=>{var s=k("This is a success toast");r(a,s)},$$slots:{default:!0}});var n=u(c,2);x(n,{className:"alert-error",dismissible:!1,children:(a,p)=>{var s=k("This is an error toast");r(a,s)},$$slots:{default:!0}}),r(o,i)}y(["click"]);export{nt as default};
