import{p as z,M as R,r as D,f as A,c as y,b as i,a as F,K as H,d as $,e as N,t as m,s as h,k as I,n as g,S as K,g as L,h as P,R as T,j as V}from"./AppCommon-DE0E2XGg.js";import{h as W}from"./html-CeD1Bg3L.js";import{s as q}from"./snippet-B1GNJ05q.js";import{a as x}from"./actions-DYuHte2n.js";import{c as E}from"./config-BgU-dv5U.js";import{c as G}from"./close_icon-BnSzxVRN.js";import{c as J}from"./alert-BSixS_cz-D1BGdFlW.js";import{c as O}from"./simpleClassTransition-OKOscUbg.js";import{c as Q}from"./dom-BB9jLllr-DsL3TsuS.js";import"./stores-UZEPS6vP.js";import"./index-client-C1bhGAJo.js";import"./common-CuZAeECD-RcAmWgUm.js";import"./baseTransitions-BKMcrwWQ.js";import"./writables-DCiBdIBK-BvUcp8gb.js";import"./promise-CBh_HbSK-wA-CYZai.js";import"./cssTransitions-to_1mWNN.js";var U=m('<button class="btn btn-xs btn-circle btn-ghost"><!></button>'),X=m("<div><!> <!></div>");function C(v,t){z(t,!0);let o=R(t,"visible",15),d=H(t,["$$slots","$$events","$$legacy","visible","children"]);const b=O({showClasses:["transition-opacity"],hideClasses:["opacity-0"],animationPendingHideClasses:["opacity-0","transition-opacity"]}),{state:e,directives:{transitionDirective:l},api:a}=E({factory:J,widgetName:"alert",get props(){return{...d,visible:o()}},enablePatchChanged:!0,defaultConfig:{transition:b},events:{onVisibleChange:c=>{o(c)}}});var u=D(),n=A(u);{var j=c=>{var p=X();let _;var k=g(p);q(k,()=>t.children);var B=h(k,2);{var M=s=>{var r=U();r.__click=function(...S){var w;(w=a.close)==null||w.apply(this,S)};var f=g(r);W(f,()=>G),$(()=>K(r,"aria-label",e.ariaCloseButtonLabel)),i(s,r)};y(B,s=>{e.dismissible&&s(M)})}x(p,(s,r)=>{var f;return(f=Q)==null?void 0:f(s,r)},()=>"alert "+e.className),x(p,s=>l==null?void 0:l(s)),$(s=>_=I(p,_,{role:"alert",...s}),[()=>({})]),i(c,p)};y(n,c=>{e.hidden||c(j)})}i(v,u),F()}N(["click"]);var Y=(v,t)=>P(t,!0),Z=m('<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Alert is a success!</span>',1),tt=m('<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span>Alert is an error!</span>',1),st=m('<button class="btn btn-primary">Reset Alert</button> <div class="flex flex-col gap-3 mt-3"><!> <!></div>',1);function gt(v){let t=V(!0);var o=st(),d=A(o);d.__click=[Y,t];var b=h(d,2),e=g(b);C(e,{className:"alert-success",get visible(){return L(t)},set visible(a){P(t,T(a))},children:(a,u)=>{var n=Z();i(a,n)},$$slots:{default:!0}});var l=h(e,2);C(l,{className:"alert-error",dismissible:!1,children:(a,u)=>{var n=tt();i(a,n)},$$slots:{default:!0}}),i(v,o)}N(["click"]);export{gt as default};
