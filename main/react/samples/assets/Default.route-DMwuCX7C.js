import{r as o,j as e}from"./App-DI9ur9y5.js";import{P as a}from"./pagination-BDq1dOoH-CEDtgDDB.js";import"./config-D3v6G0iM.js";import"./config-C0ibonqk.js";import"./directive-CKEccryv-B1ye-Yy0.js";import"./widget-DAs9_HQ1-7RGw_aKa.js";import"./stores-B8YEDwZq-rhLwL-y_.js";import"./index-DYzswQoO.js";import"./directive-Kqp31pwt-Z1XipxII.js";import"./pageFactory-BMdGxeJT-DE2GdZV9.js";import"./extendWidget-X8VLvE1U.js";import"./pagination-dkNo_5ex-CIPC3aOO.js";import"./writables-DoU_XYTX-CPJYVIsx.js";const S=()=>{const[i,n]=o.useState(4),[t,r]=o.useState(1);return e.jsxs(e.Fragment,{children:[e.jsx("h5",{children:"Basic pagination:"}),e.jsx(a,{page:i,collectionSize:60,onPageChange:n}),e.jsx("h5",{children:"No direction links:"}),e.jsx(a,{page:i,collectionSize:60,directionLinks:!1,onPageChange:n}),e.jsx("h5",{children:"With boundary links:"}),e.jsx(a,{page:i,collectionSize:60,boundaryLinks:!0,onPageChange:n}),e.jsxs("div",{className:"mb-3",children:["Current page: ",e.jsx("span",{id:"defaultPage",children:i})]}),e.jsx("h5",{children:"Disabled pagination:"}),e.jsx(a,{page:t,collectionSize:60,ariaLabel:"Disabled pagination",disabled:!0,onPageChange:r})]})};export{S as default};