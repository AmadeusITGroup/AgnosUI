import{r as t,j as e}from"./index-B29O70O5.js";import{S as s}from"./slider-C0xlHYW0.js";import"./func-BRtNsj1u.js";import"./directive-anNBcl_e.js";import"./stores-DSW_lZw9.js";import"./writables-DLhYofQX.js";import"./config-B1-4rr6r.js";import"./widget-uJvCk3AQ.js";const C=()=>{const[r,l]=t.useState([30]),[a,i]=t.useState([30,70]),[o,n]=t.useState([30]),[m,c]=t.useState([30,70]);return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Horizontal slider"}),e.jsx(s,{min:0,max:100,stepSize:1,values:r,onValuesChange:l,rtl:!0}),e.jsx("br",{}),e.jsx(s,{min:0,max:100,stepSize:1,values:a,onValuesChange:i,rtl:!0}),e.jsx("h2",{children:"Vertical slider"}),e.jsxs("div",{className:"d-flex",style:{height:"350px"},children:[e.jsx("div",{className:"col-6",style:{height:"300px"},children:e.jsx(s,{min:0,max:100,rtl:!0,stepSize:1,vertical:!0,values:o,onValuesChange:n,className:"my-0"})}),e.jsx("div",{className:"col-6",style:{height:"300px"},children:e.jsx(s,{min:0,max:100,rtl:!0,stepSize:1,vertical:!0,values:m,onValuesChange:c,className:"my-0"})})]})]})};export{C as default};