import{r as s,j as e}from"./App-B6FkxJDS.js";import{S as t}from"./slider-UQlY3PHn-CumRz0JQ.js";import"./slot-Cf_4I5Hr.js";import"./directive-CEErjM5c-BeKRddEc.js";import"./stores-DX-ADOKq-CX8PQfLG.js";import"./config-BOiUz1he.js";import"./config-9NeBVkBN.js";import"./widget-6VfcHB3W-CFPzkwew.js";import"./stores-DtfLvXAE-B5M8FFKs.js";import"./slider-Br7aVEo8-w3fBfFLD.js";import"./writables-DCiBdIBK-BuTInPgN.js";import"./resizeObserver-k5l2Fb4s.js";import"./extendWidget-FYujVXJV.js";const D=()=>{const[r,n]=s.useState([70]),[h,m]=s.useState([60]),[c,d]=s.useState([20]),[l,u]=s.useState(!0),[a,x]=s.useState(!0),[o,b]=s.useState(!0),[i,p]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Slider with form control"}),e.jsx(t,{min:0,max:100,stepSize:1,values:r,onValuesChange:n,showMinMaxLabels:o,showValueLabels:i}),"Form control value: ",r.join(", "),e.jsx("hr",{}),e.jsx("h2",{children:"Slider with value"}),e.jsx(t,{min:0,max:100,stepSize:1,values:c,onValuesChange:d}),"Value: ",c.join(", "),e.jsx("hr",{}),e.jsx("h2",{children:"Disabled slider"}),e.jsx(t,{min:0,max:100,stepSize:1,values:h,onValuesChange:m,disabled:l,readonly:a}),e.jsxs("div",{className:"form-check form-switch",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"disabled",checked:l,onChange:()=>u(!l)}),e.jsx("label",{className:"form-check-label",htmlFor:"disabled",children:"Disabled"})]}),e.jsxs("div",{className:"form-check form-switch",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"readonly",checked:a,onChange:()=>x(!a)}),e.jsx("label",{className:"form-check-label",htmlFor:"readonly",children:"Readonly"})]}),e.jsxs("div",{className:"form-check form-switch",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"showMinMax",checked:o,onChange:()=>b(!o)}),e.jsx("label",{className:"form-check-label",htmlFor:"showMinMax",children:"Min-Max label visibility"})]}),e.jsxs("div",{className:"form-check form-switch",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"showValues",checked:i,onChange:()=>p(!i)}),e.jsx("label",{className:"form-check-label",htmlFor:"showValues",children:"Value label visibility"})]})]})};export{D as default};
