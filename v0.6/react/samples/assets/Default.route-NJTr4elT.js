import{j as s,r as o}from"./App-uWCEDvX1.js";import{u as a}from"./config-CrveCMaq.js";import{u as l}from"./directive-DNXkB1Wc-DXs93Lkj.js";import{S as c}from"./close_icon-CwTWaQVs.js";import{c as m}from"./alert-DJ2l7bcA-7lG4YEx5.js";import{c as d}from"./simpleClassTransition-TUrNxN3_.js";import"./directive-CKEccryv-BrWl76X8.js";import"./widget-DaA-pe23-DDgilb67.js";import"./stores-B90XF8Sy-CHGO_oWT.js";import"./common-Banw3FYN-CBP3awik.js";import"./baseTransitions-dMm0ZLXi.js";import"./writables-DCiBdIBK-CaNqvQxH.js";import"./promise-CY2U8bTP-BBXElGUG.js";import"./cssTransitions-CcrXbQiX.js";const h=({state:e,api:t,directives:r,children:n})=>s.jsxs("div",{role:"alert",className:`flex alert ${e.className}`,...l(r.transitionDirective),children:[n,e.dismissible&&s.jsx("button",{className:"btn btn-sm btn-circle btn-ghost ms-auto",onClick:t.close,"aria-label":`${e.ariaCloseButtonLabel}`,children:s.jsx(c,{})})]}),i=e=>{const t=d({showClasses:["transition-opacity"],hideClasses:["opacity-0"],animationPendingHideClasses:["opacity-0","transition-opacity"]}),r=a(m,e,"alert",{transition:t});return s.jsx(s.Fragment,{children:!r.state.hidden&&s.jsx(h,{...r,children:e.children})})},D=()=>{const[e,t]=o.useState(!0);return s.jsxs(s.Fragment,{children:[s.jsx("button",{className:"btn btn-primary",onClick:()=>t(!0),children:"Reset Alert"}),s.jsxs("div",{className:"flex flex-col gap-3 mt-3",children:[s.jsxs(i,{className:"alert-success",visible:e,onVisibleChange:t,children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"})}),s.jsx("span",{children:"Alert is a success!"})]}),s.jsxs(i,{className:"alert-error",dismissible:!1,children:[s.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:s.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),s.jsx("span",{children:"Alert is an error!"})]})]})]})};export{D as default};
