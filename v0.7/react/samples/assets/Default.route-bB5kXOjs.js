import{j as s,r}from"./App-C7lISzaa.js";import{u as o}from"./config-C0UxE6Ct.js";import{S as l}from"./close_icon-C7zL7BUp.js";import{c}from"./toast-CpvsibAI-C_Mmh54u.js";import"./directive-CKEccryv-BEge1hNH.js";import"./widget-DaA-pe23-CBNYx0lN.js";import"./stores-B90XF8Sy-JmdgB9jW.js";import"./extendWidget-DrHtUD_Z.js";import"./writables-DCiBdIBK-B6teIxy4.js";import"./common-Banw3FYN-DW2kZfW9.js";import"./baseTransitions-DL6kGSv2.js";import"./promise-CY2U8bTP-COOyouyK.js";const i=e=>{const{state:t,api:a}=o(c,e,"toast");return s.jsx(s.Fragment,{children:!t.hidden&&s.jsxs("div",{className:`alert ${t.className} flex`,children:[e.children,t.dismissible&&s.jsx("button",{className:"btn btn-sm btn-circle btn-ghost",onClick:a.close,"aria-label":`${t.ariaCloseButtonLabel}`,children:s.jsx(l,{})})]})})},C=()=>{const[e,t]=r.useState(!0);return s.jsxs("div",{className:"h-[215px]",children:[s.jsx("button",{className:"btn btn-primary",onClick:()=>t(!0),children:"Reset Toast"}),s.jsxs("div",{className:"toast",children:[s.jsx(i,{className:"alert-success",visible:e,onVisibleChange:t,children:"This is a success toast"}),s.jsx(i,{className:"alert-error",dismissible:!1,children:"This is an error toast"})]})]})};export{C as default};