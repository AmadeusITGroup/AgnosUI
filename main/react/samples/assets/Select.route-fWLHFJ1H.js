import{r as e,j as t}from"./index-t8aMvo0T.js";import{S as p}from"./select--aGdI_yk.js";import{W as f}from"./config-6ZqoT7-6.js";import"./func-B0ufEirG.js";import"./floatingUI-rlnKdQVq.js";import"./directive-PXM8j4TB.js";import"./promise-8x5-Wnj7.js";import"./stores-nlsUrLRM.js";import"./focustrack-TV2qj_Wo.js";import"./navManager-UYrv_Qz8.js";import"./dom-2S7XI5EU.js";import"./slot-1HoNutCm.js";import"./widget-dZVM1lRL.js";function h(){const s=location.hash.split("?")[1];return new URL(s?`?${s}`:"",location.href).searchParams.get("filterText")??""}const y=()=>{const[s]=e.useState(["Action 1","Action 2","Action 3","Other 1","Other 2","Other 3"]),[i,l]=e.useState(h),a=e.useCallback(r=>l(r.target.value),[]),[n,c]=e.useState([]),[m,o]=e.useState(void 0),x=e.useCallback(r=>{o(r),c(r?s.filter(u=>u.toLowerCase().startsWith(r)):s.slice(0,10))},[]);return t.jsxs(f,{select:{filterText:i},children:[t.jsx("h2",{children:"Multiselect example"}),t.jsxs("div",{className:"mb-3",children:[t.jsx("label",{className:"form-label",children:"Multiselect"}),t.jsx(p,{items:n,filterText:m,onFilterTextChange:x})]}),t.jsxs("div",{className:"demo-select-config",children:[t.jsx("strong",{children:"Default config"}),t.jsx("br",{}),t.jsxs("label",{children:["Default filterText:",t.jsx("input",{type:"text",className:"form-control",value:i,onChange:a})]}),t.jsx("br",{}),t.jsx("button",{type:"button",className:"mt-3 btn btn-outline-secondary",onClick:()=>o(void 0),children:"Reset widget filterText"})]})]})};export{y as default};
