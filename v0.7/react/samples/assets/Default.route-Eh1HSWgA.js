import{r as s,j as e}from"./App-C7lISzaa.js";import{S as t}from"./slider--K7ri_0l-CLoJmhkO.js";import"./slot-DsTVBY8T.js";import"./directive-DNXkB1Wc-xckYM9og.js";import"./directive-CKEccryv-BEge1hNH.js";import"./config-CGzQn2Ir.js";import"./config-C0UxE6Ct.js";import"./widget-DaA-pe23-CBNYx0lN.js";import"./stores-B90XF8Sy-JmdgB9jW.js";import"./slider-DYrwS7Mv-BNLTT7mU.js";import"./writables-DCiBdIBK-B6teIxy4.js";import"./resizeObserver-DpSXni5r.js";import"./extendWidget-DrHtUD_Z.js";const D=()=>{const[r,n]=s.useState([70]),[h,m]=s.useState([60]),[c,d]=s.useState([20]),[l,u]=s.useState(!0),[a,x]=s.useState(!0),[o,b]=s.useState(!0),[i,p]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Slider with form control"}),e.jsx(t,{min:0,max:100,stepSize:1,values:r,onValuesChange:n,showMinMaxLabels:o,showValueLabels:i}),"Form control value: ",r.join(", "),e.jsx("hr",{}),e.jsx("h2",{children:"Slider with value"}),e.jsx(t,{min:0,max:100,stepSize:1,values:c,onValuesChange:d}),"Value: ",c.join(", "),e.jsx("hr",{}),e.jsx("h2",{children:"Disabled slider"}),e.jsx(t,{min:0,max:100,stepSize:1,values:h,onValuesChange:m,disabled:l,readonly:a}),e.jsxs("div",{className:"form-check form-switch",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"disabled",checked:l,onChange:()=>u(!l)}),e.jsx("label",{className:"form-check-label",htmlFor:"disabled",children:"Disabled"})]}),e.jsxs("div",{className:"form-check form-switch",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"readonly",checked:a,onChange:()=>x(!a)}),e.jsx("label",{className:"form-check-label",htmlFor:"readonly",children:"Readonly"})]}),e.jsxs("div",{className:"form-check form-switch",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"showMinMax",checked:o,onChange:()=>b(!o)}),e.jsx("label",{className:"form-check-label",htmlFor:"showMinMax",children:"Min-Max label visibility"})]}),e.jsxs("div",{className:"form-check form-switch",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"showValues",checked:i,onChange:()=>p(!i)}),e.jsx("label",{className:"form-check-label",htmlFor:"showValues",children:"Value label visibility"})]})]})};export{D as default};
