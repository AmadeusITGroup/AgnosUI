import{r,j as t}from"./App-B6FkxJDS.js";import{S as u}from"./select-C2jCf6jT-DLXIJiop.js";import{W as f}from"./config-BOiUz1he.js";import"./slot-Cf_4I5Hr.js";import"./directive-CEErjM5c-BeKRddEc.js";import"./stores-DX-ADOKq-CX8PQfLG.js";import"./clsx-B-dksMZM.js";import"./floatingUI-D87rslMI.js";import"./promise-CBh_HbSK-DXKrhD48.js";import"./focustrack-CALzFI3C.js";import"./navManager-Cj9LlIkd.js";import"./extendWidget-FYujVXJV.js";import"./config-9NeBVkBN.js";import"./widget-6VfcHB3W-CFPzkwew.js";import"./stores-DtfLvXAE-B5M8FFKs.js";function h(){const e=location.hash.split("?")[1];return new URL(e?`?${e}`:"",location.href).searchParams.get("filterText")??""}const l=["Action 1","Action 2","Action 3","Other 1","Other 2","Other 3"],D=()=>{const[e,i]=r.useState(h),a=r.useCallback(s=>i(s.target.value),[]),[n,c]=r.useState([]),[m,o]=r.useState(void 0),x=r.useCallback(s=>{o(s),c(s?l.filter(p=>p.toLowerCase().startsWith(s)):l.slice(0,10))},[]);return t.jsxs(f,{select:{filterText:e},children:[t.jsx("h2",{children:"Multiselect example"}),t.jsxs("div",{className:"mb-3",children:[t.jsx("label",{className:"form-label",children:"Multiselect"}),t.jsx(u,{items:n,filterText:m,onFilterTextChange:x})]}),t.jsxs("div",{className:"demo-select-config",children:[t.jsx("strong",{children:"Default config"}),t.jsx("br",{}),t.jsxs("label",{children:["Default filterText:",t.jsx("input",{type:"text",className:"form-control",value:e,onChange:a})]}),t.jsx("br",{}),t.jsx("button",{type:"button",className:"mt-3 btn btn-outline-secondary",onClick:()=>o(void 0),children:"Reset widget filterText"})]})]})};export{D as default};
