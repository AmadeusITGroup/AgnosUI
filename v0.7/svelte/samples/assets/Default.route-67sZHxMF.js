import{p as R,M as q,v as D,f as A,c as y,b as i,a as F,L as H,d as $,e as N,t as m,s as h,k as g,S as I,l as T,g as P,q as V,h as j,R as W,j as E}from"./AppCommon-CvTG4iwO.js";import{h as G}from"./html-BIhIs6gz.js";import{s as J}from"./snippet-BkLQeW4l.js";import{a as x}from"./actions-LhUqO-Ga.js";import{c as K}from"./config-Bb4GyM__.js";import{c as O}from"./close_icon-BnSzxVRN.js";import{c as Q}from"./alert-DJ2l7bcA-QvJLdE6t.js";import{c as U}from"./simpleClassTransition-BN7U525T.js";import{c as X}from"./directive-CKEccryv-BKNwwjMq.js";import"./index-client-DxeYKk58.js";import"./common-Banw3FYN-B8SFJ26a.js";import"./baseTransitions-4Xi-Fjr6.js";import"./writables-DCiBdIBK-D_eyNQqr.js";import"./promise-CY2U8bTP-Dsfi2HxK.js";import"./cssTransitions-BAnmEeis.js";var Y=m('<button class="btn btn-sm btn-circle btn-ghost ms-auto"><!></button>'),Z=m("<div><!> <!></div>");function C(v,t){R(t,!0);let o=q(t,"visible",15),d=H(t,["$$slots","$$events","$$legacy","visible","children"]);const b=U({showClasses:["transition-opacity"],hideClasses:["opacity-0"],animationPendingHideClasses:["opacity-0","transition-opacity"]}),{state:s,directives:{transitionDirective:l},api:e}=K({factory:Q,widgetName:"alert",get props(){return{...d,visible:o()}},enablePatchChanged:!0,defaultConfig:{transition:b},events:{onVisibleChange:c=>{o(c)}}});var u=D(),n=A(u);{var B=c=>{var p=Z();const M=V(()=>({}));let _;var k=g(p);J(k,()=>t.children);var S=h(k,2);{var z=a=>{var r=Y();r.__click=function(...L){var w;(w=e.close)==null||w.apply(this,L)};var f=g(r);G(f,()=>O),$(()=>I(r,"aria-label",s.ariaCloseButtonLabel)),i(a,r)};y(S,a=>{s.dismissible&&a(z)})}x(p,(a,r)=>{var f;return(f=X)==null?void 0:f(a,r)},()=>"flex alert "+s.className),x(p,a=>l==null?void 0:l(a)),$(()=>_=T(p,_,{role:"alert",...P(M)})),i(c,p)};y(n,c=>{s.hidden||c(B)})}i(v,u),F()}N(["click"]);var tt=(v,t)=>j(t,!0),st=m('<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Alert is a success!</span>',1),et=m('<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Alert is an error!</span>',1),at=m('<button class="btn btn-primary">Reset Alert</button> <div class="flex flex-col gap-3 mt-3"><!> <!></div>',1);function _t(v){let t=E(!0);var o=at(),d=A(o);d.__click=[tt,t];var b=h(d,2),s=g(b);C(s,{className:"alert-success",get visible(){return P(t)},set visible(e){j(t,W(e))},children:(e,u)=>{var n=st();i(e,n)},$$slots:{default:!0}});var l=h(s,2);C(l,{className:"alert-error",dismissible:!1,children:(e,u)=>{var n=et();i(e,n)},$$slots:{default:!0}}),i(v,o)}N(["click"]);export{_t as default};
