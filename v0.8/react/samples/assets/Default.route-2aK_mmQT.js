import{j as s,r as a}from"./App-CsOkU7k8.js";import{u as o}from"./config-C-QG9XGU.js";import{S as l}from"./close_icon-DaCHuhHz.js";import{c}from"./toaster-PwfLC7FH-DTVCKcgc.js";import"./dom-gfxqXJpK-DnwY-KAj.js";import"./widget-BP6z-zfB-Ce_gP_Ht.js";import"./stores-CNc_rSPE.js";import"./stores-DZalyTTa-JtJrTKhC.js";import"./extendWidget-CRSgS6m7.js";import"./writables-CgpOQ4hA-Cd7Z63K9.js";import"./common-BqUjUBPy-4D9Ln06d.js";import"./baseTransitions-CYkbZi0o.js";import"./promise-XSP94FjG-DQjR-9Gl.js";const i=e=>{const{state:t,api:r}=o(c,e,"toast");return s.jsx(s.Fragment,{children:!t.hidden&&s.jsxs("div",{className:`alert ${t.className}`,children:[e.children,t.dismissible&&s.jsx("button",{className:"btn btn-circle btn-ghost btn-xs",onClick:r.close,"aria-label":`${t.ariaCloseButtonLabel}`,children:s.jsx(l,{})})]})})},v=()=>{const[e,t]=a.useState(!0);return s.jsxs("div",{className:"h-[215px]",children:[s.jsx("button",{className:"btn btn-primary",onClick:()=>t(!0),children:"Reset Toast"}),s.jsxs("div",{className:"toast",children:[s.jsx(i,{className:"alert-success",visible:e,onVisibleChange:t,children:"This is a success toast"}),s.jsx(i,{className:"alert-error",dismissible:!1,children:"This is an error toast"})]})]})};export{v as default};
