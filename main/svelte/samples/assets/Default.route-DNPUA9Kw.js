import{p as N,s as e,f as P,g as k,j as f,T as w,r,b as a,a as C,t as D,k as H,e as o,h as j}from"./AppCommon-Cm-6NtnE.js";import{T as i}from"./Toast-BI8AZfHx.js";import{a as B}from"./config-CGoDt1jV.js";import"./actions-gBvwwZne.js";import"./class-CZUVYx7F.js";import"./Slot-HBv0E13p.js";import"./snippet-DaCt2Zif.js";import"./toast-CpvsibAI-DANnJ4lG.js";import"./extendWidget-CKqcYLS9.js";import"./directive-CKEccryv-gyIcW13B.js";import"./writables-DCiBdIBK-BYLEJlA0.js";import"./common-Banw3FYN-B7RGMRwh.js";import"./baseTransitions-B-oSxy54.js";import"./promise-CY2U8bTP-Di3LO9sj.js";import"./fade-uOobJKgw-CA5Q4wdK.js";import"./simpleClassTransition-Ct7U0yg9.js";import"./cssTransitions-Crcz6VTe.js";import"./config-CLQxp5Vy.js";import"./index-client-CP1GwSUe.js";var I=(p,d)=>f(d,!0),R=D(`<p class="mb-2">Color schemes are based on the Bootstrap classes, in order to have out-of-the-box text accessibility use the helper classes <code>.text-bg-*</code>,
	e.g. <code>.text.bg-primary</code></p> <!> <button class="btn btn-primary my-2">Reset</button> <h3>Variations</h3> <div class="row gy-2 gx-3"><div class="col-auto"><!></div> <div class="col-auto"><!></div> <div class="col-auto"><!></div> <div class="col-auto"><!></div></div>`,1);function tt(p,d){N(d,!0),B().set({toast:{autoHide:!1,dismissible:!1}});let c=H(!0);var m=R(),v=e(P(m),2);i(v,{className:"text-bg-primary",header:"I am header",autoHide:!1,dismissible:!0,get visible(){return k(c)},set visible(t){f(c,w(t))},children:(t,l)=>{var s=r("Simple primary toast");a(t,s)},$$slots:{default:!0}});var n=e(v,2);n.__click=[I,c];var g=e(n,4),u=o(g),$=o(u);i($,{className:"text-bg-success",children:(t,l)=>{var s=r("This is a success toast");a(t,s)},$$slots:{default:!0}});var b=e(u,2),x=o(b);i(x,{className:"text-bg-danger",children:(t,l)=>{var s=r("This is an error toast");a(t,s)},$$slots:{default:!0}});var h=e(b,2),_=o(h);i(_,{className:"text-bg-info",children:(t,l)=>{var s=r("This is an info toast");a(t,s)},$$slots:{default:!0}});var y=e(h,2),T=o(y);i(T,{className:"text-bg-warning",children:(t,l)=>{var s=r("This is a warning toast");a(t,s)},$$slots:{default:!0}}),a(p,m),C()}j(["click"]);export{tt as default};