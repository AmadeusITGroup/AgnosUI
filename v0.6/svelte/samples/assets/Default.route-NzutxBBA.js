import{p as N,s as e,f as P,g as k,j as f,R as w,r,b as a,a as C,t as D,k as H,e as o,h as R}from"./AppCommon-C_Uz3Ejm.js";import{T as i}from"./Toast-B0Lwcotm.js";import{a as j}from"./config-BR7DENd9.js";import"./actions-CtzdcLql.js";import"./class-DjsZmGv6.js";import"./Slot-Bu-WTpc_.js";import"./snippet-gGBChira.js";import"./toast-CpvsibAI-C6uWvNKx.js";import"./extendWidget-Dy2T1Nx7.js";import"./directive-CKEccryv-Dj2WBjfx.js";import"./writables-DCiBdIBK-COVli6XW.js";import"./common-Banw3FYN-DIL4Zdba.js";import"./baseTransitions-GPSQ6ZzE.js";import"./promise-CY2U8bTP-wBjUimDL.js";import"./fade-uOobJKgw-LiOwWpQc.js";import"./simpleClassTransition-BArNqS_M.js";import"./cssTransitions-Da5O2FVQ.js";import"./config-vsRo1j0h.js";import"./index-client-D5u8RE9d.js";var B=(p,d)=>f(d,!0),I=D(`<p class="mb-2">Color schemes are based on the Bootstrap classes, in order to have out-of-the-box text accessibility use the helper classes <code>.text-bg-*</code>,
	e.g. <code>.text.bg-primary</code></p> <!> <button class="btn btn-primary my-2">Reset</button> <h3>Variations</h3> <div class="row gy-2 gx-3"><div class="col-auto"><!></div> <div class="col-auto"><!></div> <div class="col-auto"><!></div> <div class="col-auto"><!></div></div>`,1);function tt(p,d){N(d,!0),j().set({toast:{autoHide:!1,dismissible:!1}});let c=H(!0);var m=I(),v=e(P(m),2);i(v,{className:"text-bg-primary",header:"I am header",autoHide:!1,dismissible:!0,get visible(){return k(c)},set visible(t){f(c,w(t))},children:(t,l)=>{var s=r("Simple primary toast");a(t,s)},$$slots:{default:!0}});var n=e(v,2);n.__click=[B,c];var g=e(n,4),u=o(g),$=o(u);i($,{className:"text-bg-success",children:(t,l)=>{var s=r("This is a success toast");a(t,s)},$$slots:{default:!0}});var b=e(u,2),x=o(b);i(x,{className:"text-bg-danger",children:(t,l)=>{var s=r("This is an error toast");a(t,s)},$$slots:{default:!0}});var h=e(b,2),_=o(h);i(_,{className:"text-bg-info",children:(t,l)=>{var s=r("This is an info toast");a(t,s)},$$slots:{default:!0}});var y=e(h,2),T=o(y);i(T,{className:"text-bg-warning",children:(t,l)=>{var s=r("This is a warning toast");a(t,s)},$$slots:{default:!0}}),a(p,m),C()}R(["click"]);export{tt as default};