import{p as N,s as P,t as k,b as e,f as w,q as r,c as a,l as h,g as C,d as o,a as D,n as H}from"./AppCommon-B-ROr4aU.js";import{T as i}from"./Toast-C9L8a4o8.js";import{a as q}from"./config-lZO9LbO2.js";import"./actions-Cbyr4fVv.js";import"./Slot-DxNJ8UAq.js";import"./snippet-DFOQFhBJ.js";import"./toaster-PwfLC7FH-CIlpbFwZ.js";import"./extendWidget-GeFhB8wc.js";import"./stores-DWJrwGVR.js";import"./dom-gfxqXJpK-CVUkDlT_.js";import"./writables-CgpOQ4hA-BLtlctEd.js";import"./common-BqUjUBPy-CDWYKlVd.js";import"./baseTransitions-BKaaUOED.js";import"./promise-XSP94FjG-CHur0jPm.js";import"./fade-uOobJKgw-BDarYuaK.js";import"./simpleClassTransition-BNF7z2Hu.js";import"./cssTransitions-B5R6pvx9.js";import"./config-ZUzlAODH.js";import"./index-client-hhUEBj_e.js";var B=(p,d)=>h(d,!0),I=k(`<p class="mb-2">Color schemes are based on the Bootstrap classes, in order to have out-of-the-box text accessibility use the helper classes <code>.text-bg-*</code>,
	e.g. <code>.text.bg-primary</code></p> <!> <button class="btn btn-primary my-2">Reset</button> <h3>Variations</h3> <div class="row gy-2 gx-3"><div class="col-auto"><!></div> <div class="col-auto"><!></div> <div class="col-auto"><!></div> <div class="col-auto"><!></div></div>`,1);function Z(p,d){N(d,!0),q().set({toast:{autoHide:!1,dismissible:!1}});let c=P(!0);var m=I(),v=e(w(m),2);i(v,{className:"text-bg-primary",header:"I am header",autoHide:!1,dismissible:!0,get visible(){return C(c)},set visible(t){h(c,t,!0)},children:(t,l)=>{var s=r("Simple primary toast");a(t,s)},$$slots:{default:!0}});var n=e(v,2);n.__click=[B,c];var g=e(n,4),u=o(g),$=o(u);i($,{className:"text-bg-success",children:(t,l)=>{var s=r("This is a success toast");a(t,s)},$$slots:{default:!0}});var b=e(u,2),_=o(b);i(_,{className:"text-bg-danger",children:(t,l)=>{var s=r("This is an error toast");a(t,s)},$$slots:{default:!0}});var f=e(b,2),x=o(f);i(x,{className:"text-bg-info",children:(t,l)=>{var s=r("This is an info toast");a(t,s)},$$slots:{default:!0}});var y=e(f,2),T=o(y);i(T,{className:"text-bg-warning",children:(t,l)=>{var s=r("This is a warning toast");a(t,s)},$$slots:{default:!0}}),a(p,m),D()}H(["click"]);export{Z as default};
