import{j as s,r}from"./App-uWCEDvX1.js";import{u as o}from"./config-CrveCMaq.js";import{S as l}from"./close_icon-CwTWaQVs.js";import{c}from"./toast-CpvsibAI-Dt5aU3wv.js";import"./directive-CKEccryv-BrWl76X8.js";import"./widget-DaA-pe23-DDgilb67.js";import"./stores-B90XF8Sy-CHGO_oWT.js";import"./extendWidget-DH8OAK3L.js";import"./writables-DCiBdIBK-CaNqvQxH.js";import"./common-Banw3FYN-CBP3awik.js";import"./baseTransitions-dMm0ZLXi.js";import"./promise-CY2U8bTP-BBXElGUG.js";const i=e=>{const{state:t,api:a}=o(c,e,"toast");return s.jsx(s.Fragment,{children:!t.hidden&&s.jsxs("div",{className:`alert ${t.className} flex`,children:[e.children,t.dismissible&&s.jsx("button",{className:"btn btn-sm btn-circle btn-ghost",onClick:a.close,"aria-label":`${t.ariaCloseButtonLabel}`,children:s.jsx(l,{})})]})})},C=()=>{const[e,t]=r.useState(!0);return s.jsxs("div",{className:"h-[215px]",children:[s.jsx("button",{className:"btn btn-primary",onClick:()=>t(!0),children:"Reset Toast"}),s.jsxs("div",{className:"toast",children:[s.jsx(i,{className:"alert-success",visible:e,onVisibleChange:t,children:"This is a success toast"}),s.jsx(i,{className:"alert-error",dismissible:!1,children:"This is an error toast"})]})]})};export{C as default};
