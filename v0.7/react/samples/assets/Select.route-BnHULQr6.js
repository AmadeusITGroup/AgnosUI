import{r,j as t}from"./App-C7lISzaa.js";import{S as u}from"./select-BriGqe3k-DBwiI6Qw.js";import{W as f}from"./config-CGzQn2Ir.js";import"./slot-DsTVBY8T.js";import"./directive-DNXkB1Wc-xckYM9og.js";import"./directive-CKEccryv-BEge1hNH.js";import"./index-CXoaXhOQ.js";import"./floatingUI-D31gG9GN.js";import"./promise-CY2U8bTP-COOyouyK.js";import"./focustrack-BhTZ-Ups.js";import"./navManager-Diwp7rjP.js";import"./extendWidget-DrHtUD_Z.js";import"./config-C0UxE6Ct.js";import"./widget-DaA-pe23-CBNYx0lN.js";import"./stores-B90XF8Sy-JmdgB9jW.js";function h(){const e=location.hash.split("?")[1];return new URL(e?`?${e}`:"",location.href).searchParams.get("filterText")??""}const l=["Action 1","Action 2","Action 3","Other 1","Other 2","Other 3"],D=()=>{const[e,i]=r.useState(h),a=r.useCallback(s=>i(s.target.value),[]),[n,c]=r.useState([]),[m,o]=r.useState(void 0),x=r.useCallback(s=>{o(s),c(s?l.filter(p=>p.toLowerCase().startsWith(s)):l.slice(0,10))},[]);return t.jsxs(f,{select:{filterText:e},children:[t.jsx("h2",{children:"Multiselect example"}),t.jsxs("div",{className:"mb-3",children:[t.jsx("label",{className:"form-label",children:"Multiselect"}),t.jsx(u,{items:n,filterText:m,onFilterTextChange:x})]}),t.jsxs("div",{className:"demo-select-config",children:[t.jsx("strong",{children:"Default config"}),t.jsx("br",{}),t.jsxs("label",{children:["Default filterText:",t.jsx("input",{type:"text",className:"form-control",value:e,onChange:a})]}),t.jsx("br",{}),t.jsx("button",{type:"button",className:"mt-3 btn btn-outline-secondary",onClick:()=>o(void 0),children:"Reset widget filterText"})]})]})};export{D as default};