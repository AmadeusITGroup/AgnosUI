import{p as M,s as R,P as S,L as U,v as q,f as z,g as k,c as a,a as A,d,M as E,j as C,b as u,e as x,U as G,t as f,h as v,k as H,n as T,W as J,u as y,V as K}from"./AppCommon-yQ9GDd-E.js";import{h as O}from"./html-Cmav2p96.js";import{s as Q}from"./snippet-CbCRci52.js";import{s as X}from"./class-LKf8CrKl.js";import{c as Y}from"./config-BI14XQLI.js";import{c as Z}from"./close_icon-BnSzxVRN.js";import{c as ss}from"./toast-BkJ0zEPx-8aebtfC-.js";import"./directive-CKEccryv-CIaX9Ntp.js";import"./extendWidget-DMfSPYhn.js";import"./writables-DoU_XYTX-DICLMg1u.js";import"./common-B7Hzs2vg-HRn6ysZI.js";import"./baseTransitions-CwYYTE0i.js";import"./promise-CY2U8bTP-Cbak5z1_.js";var ts=f('<button class="btn btn-sm btn-circle btn-ghost"><!></button>'),es=f("<div><!> <!></div>");function N(o,s){M(s,!0);const e=R(),r=()=>d(B,"$hidden$",e),m=()=>d(i,"$className$",e),l=()=>d(L,"$dismissible$",e),p=()=>d(P,"$ariaCloseButtonLabel$",e);let t=S(s,"visible",15),c=E(s,["$$slots","$$events","$$legacy","visible","children"]);const{stores:{className$:i,dismissible$:L,ariaCloseButtonLabel$:P,hidden$:B},patchChangedProps:V,api:W}=Y({factory:ss,widgetName:"toast",props:{...c,visible:t()},events:{onVisibleChange:b=>{t(b)}}});U(()=>V({...c,visible:t()}));var _=q(),j=z(_);k(j,()=>!r(),b=>{var $=es(),h=v($);Q(h,()=>s.children);var w=u(h,2);k(w,l,D=>{var n=ts();n.__click=function(...I){var g;(g=W.close)==null||g.apply(this,I)};var F=v(n);O(F,()=>Z),x(()=>G(n,"aria-label",p())),a(D,n)}),x(()=>X($,`alert ${m()??""} flex`)),a(b,$)}),a(o,_),A()}C(["click"]);var as=(o,s)=>T(s,!0),is=f('<div class="h-[215px]"><button class="btn btn-primary">Reset Toast</button> <div class="toast"><!> <!></div></div>');function _s(o){let s=K(!0);var e=is(),r=v(e);r.__click=[as,s];var m=u(r,2),l=v(m);N(l,{className:"alert-success",get visible(){return H(s)},set visible(t){T(s,J(t))},children:(t,c)=>{var i=y("This is a success toast");a(t,i)},$$slots:{default:!0}});var p=u(l,2);N(p,{className:"alert-error",dismissible:!1,children:(t,c)=>{var i=y("This is an error toast");a(t,i)},$$slots:{default:!0}}),a(o,e)}C(["click"]);export{_s as default};