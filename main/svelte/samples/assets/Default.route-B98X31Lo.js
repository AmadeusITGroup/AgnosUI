import{p as D,P as M,u as z,f as C,d as w,b as r,a as S,M as T,h as A,c as y,s as b,t as c,l as F,e as h,U as H,g as I,j as P,T as L,k as R}from"./AppCommon-BIOVedX1.js";import{h as U}from"./html-DCB9bQei.js";import{s as V}from"./snippet-C4nDYEhK.js";import{a as $}from"./actions-7pTMrPq9.js";import{c as W}from"./config-BjT5ZD7O.js";import{c as q}from"./close_icon-BnSzxVRN.js";import{c as E}from"./alert-BZyrc6h_-BYWI8dKC.js";import{c as G}from"./simpleClassTransition-C6r75bPs.js";import{c as J}from"./directive-CKEccryv-CY3XbVHQ.js";import"./index-client-BPAxIsiR.js";import"./common-BHk3fJTO-B-YPIlcg.js";import"./baseTransitions-xFRVub8m.js";import"./writables-DoU_XYTX-CjiCaUSA.js";import"./promise-CY2U8bTP-BQtSrxrS.js";import"./cssTransitions-B2H64itF.js";var K=c('<button class="btn btn-sm btn-circle btn-ghost ms-auto"><!></button>'),O=c("<div><!> <!></div>");function x(p,t){D(t,!0);let i=M(t,"visible",15),m=T(t,["$$slots","$$events","$$legacy","visible","children"]);const d=G({showClasses:["transition-opacity"],hideClasses:["opacity-0"],animationPendingHideClasses:["opacity-0","transition-opacity"]}),{state:e,directives:{transitionDirective:u},api:s}=W({factory:E,widgetName:"alert",get props(){return{...m,visible:i()}},enablePatchChanged:!0,defaultConfig:{transition:d},events:{onVisibleChange:f=>{i(f)}}});var v=z(),o=C(v);w(o,()=>!e.hidden,f=>{var l=O();let g;y(()=>g=F(l,g,{role:"alert"}));var _=h(l);V(_,()=>t.children);var N=b(_,2);w(N,()=>e.dismissible,n=>{var a=K();a.__click=function(...B){var k;(k=s.close)==null||k.apply(this,B)};var j=h(a);U(j,()=>q),y(()=>H(a,"aria-label",e.ariaCloseButtonLabel)),r(n,a)}),$(l,(n,a)=>J(n,a),()=>"flex alert "+e.className),$(l,n=>u(n)),r(f,l)}),r(p,v),S()}A(["click"]);var Q=(p,t)=>P(t,!0),X=c('<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Alert is a success!</span>',1),Y=c('<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Alert is an error!</span>',1),Z=c('<button class="btn btn-primary">Reset Alert</button> <div class="flex flex-col gap-3 mt-3"><!> <!></div>',1);function ft(p){let t=R(!0);var i=Z(),m=C(i);m.__click=[Q,t];var d=b(m,2),e=h(d);x(e,{className:"alert-success",get visible(){return I(t)},set visible(s){P(t,L(s))},children:(s,v)=>{var o=X();r(s,o)},$$slots:{default:!0}});var u=b(e,2);x(u,{className:"alert-error",dismissible:!1,children:(s,v)=>{var o=Y();r(s,o)},$$slots:{default:!0}}),r(p,i)}A(["click"]);export{ft as default};
