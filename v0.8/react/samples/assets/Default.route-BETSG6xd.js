import{j as s,r as o}from"./App-CsOkU7k8.js";import{u as a}from"./config-C-QG9XGU.js";import{u as l}from"./directive-CEErjM5c-BVE02Lyt.js";import{S as c}from"./close_icon-DaCHuhHz.js";import{c as m}from"./alert-BpepSIHu-BvDgHnNH.js";import{c as d}from"./simpleClassTransition-B_OJxQAR.js";import"./dom-gfxqXJpK-DnwY-KAj.js";import"./widget-BP6z-zfB-Ce_gP_Ht.js";import"./stores-CNc_rSPE.js";import"./stores-DZalyTTa-JtJrTKhC.js";import"./common-BqUjUBPy-4D9Ln06d.js";import"./baseTransitions-CYkbZi0o.js";import"./writables-CgpOQ4hA-Cd7Z63K9.js";import"./promise-XSP94FjG-DQjR-9Gl.js";import"./cssTransitions-Dwy5mKIE.js";const p=({state:e,api:t,directives:r,children:n})=>s.jsxs("div",{role:"alert",className:`alert ${e.className}`,...l(r.transitionDirective),children:[n,e.dismissible&&s.jsx("button",{className:"btn btn-circle btn-ghost btn-xs self-start",onClick:t.close,"aria-label":`${e.ariaCloseButtonLabel}`,children:s.jsx(c,{})})]}),i=e=>{const t=d({showClasses:["transition-opacity"],hideClasses:["opacity-0"],animationPendingHideClasses:["opacity-0","transition-opacity"]}),r=a(m,e,"alert",{transition:t});return s.jsx(s.Fragment,{children:!r.state.hidden&&s.jsx(p,{...r,children:e.children})})},L=()=>{const[e,t]=o.useState(!0);return s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"btn btn-primary",onClick:()=>t(!0),children:"Reset Alert"}),s.jsxs("div",{className:"flex flex-col gap-3 mt-3",children:[s.jsxs(i,{className:"alert-success",visible:e,onVisibleChange:t,children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),s.jsx("span",{children:"Alert is a success!"})]}),s.jsxs(i,{className:"alert-error",dismissible:!1,children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),s.jsx("span",{children:"Alert is an error!"})]})]})]})};export{L as default};
