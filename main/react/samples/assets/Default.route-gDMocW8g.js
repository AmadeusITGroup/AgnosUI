import{r as o,j as e}from"./index-OUqRjMdI.js";import{P as a}from"./pagination-AY3qKDZi.js";import"./pagination-esD_T5MO.js";import"./func-B0ufEirG.js";import"./stores-ae3sjr2N.js";import"./writables-2MPPUTiC.js";import"./config-7S2TRWPR.js";import"./widget-Ah5nJTtZ.js";import"./slot-DUWkMZ23.js";const j=()=>{const[i,n]=o.useState(4),[t,s]=o.useState(1);return e.jsxs(e.Fragment,{children:[e.jsx("h5",{children:"Basic pagination:"}),e.jsx(a,{page:i,collectionSize:60,onPageChange:n}),e.jsx("h5",{children:"No direction links:"}),e.jsx(a,{page:i,collectionSize:60,directionLinks:!1,onPageChange:n}),e.jsx("h5",{children:"With boundary links:"}),e.jsx(a,{page:i,collectionSize:60,boundaryLinks:!0,onPageChange:n}),e.jsxs("div",{className:"mb-3",children:["Current page: ",e.jsx("span",{id:"defaultPage",children:i})]}),e.jsx("h5",{children:"Disabled pagination:"}),e.jsx(a,{page:t,collectionSize:60,ariaLabel:"Disabled pagination",disabled:!0,onPageChange:s})]})};export{j as default};