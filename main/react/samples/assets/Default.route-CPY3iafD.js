import{j as s,r as o}from"./App-CMLx6mqi.js";import{u as l}from"./config-BlmzgUJa.js";import{u as c}from"./directive-Kqp31pwt-DbLI8uLM.js";import{S as m}from"./close_icon-CE8uG20h.js";import{c as d}from"./alert-Dlf-BV98-yrPfVMIh.js";import{c as p}from"./simpleClassTransition-DIMydQts.js";import"./directive-DCYlDznf-D2hjAqcK.js";import"./widget-DAs9_HQ1-Cr34IhwO.js";import"./stores-B8YEDwZq-CxCRPylI.js";import"./common-DRdsw5m8-5xWtx3gw.js";import"./baseTransitions-Amn6yFiO.js";import"./writables-DoU_XYTX-Dq9jyVLj.js";import"./promise-CY2U8bTP-ChJZdKFm.js";import"./cssTransitions-DcuCbhSn.js";const a=e=>{const t=p({showClasses:["transition-opacity"],hideClasses:["opacity-0"],animationPendingHideClasses:["opacity-0","transition-opacity"]}),[i,r]=l(d,e,"alert",{transition:t}),n=c(r.directives.transitionDirective);return s.jsx(s.Fragment,{children:!i.hidden&&s.jsxs("div",{role:"alert",className:`flex alert ${i.className}`,...n,children:[e.children,i.dismissible&&s.jsx("button",{className:"btn btn-sm btn-circle btn-ghost ms-auto",onClick:r.api.close,"aria-label":`${i.ariaCloseButtonLabel}`,children:s.jsx(m,{})})]})})},D=()=>{const[e,t]=o.useState(!0);return s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"btn btn-primary",onClick:()=>t(!0),children:"Reset Alert"}),s.jsxs("div",{className:"flex flex-col gap-3 mt-3",children:[s.jsxs(a,{className:"alert-success",visible:e,onVisibleChange:t,children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),s.jsx("span",{children:"Alert is a success!"})]}),s.jsxs(a,{className:"alert-error",dismissible:!1,children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),s.jsx("span",{children:"Alert is an error!"})]})]})]})};export{D as default};