import{p as S,M as j,r as q,f as w,c as g,b as r,a as B,K as D,d as $,e as y,t as f,s as u,n as m,S as F,g as I,h as T,R as K,q as x,j as L}from"./AppCommon-CBBtLyuE.js";import{h as M}from"./html-CUtgpm4c.js";import{s as V}from"./snippet-CjCSaRKf.js";import{s as W}from"./class-DWo-QI8S.js";import{c as z}from"./config-B0GDBsCX.js";import{c as A}from"./close_icon-BnSzxVRN.js";import{c as E}from"./toast-C4Pnm63G-B6yjhOA6.js";import"./stores-DX-ADOKq-BfxXclJX.js";import"./index-client-CgsfcjKG.js";import"./extendWidget-CYslR8F4.js";import"./writables-DCiBdIBK-CIOT50Xk.js";import"./common-CgfScwMQ-CVBwAdIR.js";import"./baseTransitions-BZV_02X6.js";import"./promise-CBh_HbSK-CFrwv3Y-.js";var G=f('<button class="btn btn-sm btn-circle btn-ghost"><!></button>'),H=f("<div><!> <!></div>");function k(o,t){S(t,!0);let i=j(t,"visible",15),l=D(t,["$$slots","$$events","$$legacy","visible","children"]);const{state:e,api:c}=z({factory:E,widgetName:"toast",get props(){return{...l,visible:i()}},enablePatchChanged:!0,events:{onVisibleChange:s=>{i(s)}}});var n=q(),a=w(n);{var p=s=>{var d=H(),_=m(d);V(_,()=>t.children);var N=u(_,2);{var C=b=>{var v=G();v.__click=function(...R){var h;(h=c.close)==null||h.apply(this,R)};var P=m(v);M(P,()=>A),$(()=>F(v,"aria-label",e.ariaCloseButtonLabel)),r(b,v)};g(N,b=>{e.dismissible&&b(C)})}$(()=>W(d,`alert ${e.className??""} flex`)),r(s,d)};g(a,s=>{e.hidden||s(p)})}r(o,n),B()}y(["click"]);var J=(o,t)=>T(t,!0),O=f('<div class="h-[215px]"><button class="btn btn-primary">Reset Toast</button> <div class="toast"><!> <!></div></div>');function nt(o){let t=L(!0);var i=O(),l=m(i);l.__click=[J,t];var e=u(l,2),c=m(e);k(c,{className:"alert-success",get visible(){return I(t)},set visible(a){T(t,K(a))},children:(a,p)=>{var s=x("This is a success toast");r(a,s)},$$slots:{default:!0}});var n=u(c,2);k(n,{className:"alert-error",dismissible:!1,children:(a,p)=>{var s=x("This is an error toast");r(a,s)},$$slots:{default:!0}}),r(o,i)}y(["click"]);export{nt as default};
