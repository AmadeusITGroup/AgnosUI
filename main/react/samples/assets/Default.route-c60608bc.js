import{r as s,j as e}from"./index-f82834c6.js";import{S as o}from"./Slider-3f5d39ba.js";import"./utils-3d1769dc.js";import"./writables-e06b6bbb.js";import"./config-280fe900.js";const S=()=>{const[r,i]=s.useState([70]),[n,c]=s.useState([60]),[t,d]=s.useState([20]),[l,h]=s.useState(!0),[a,m]=s.useState(!0);return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Slider with form control"}),e.jsx(o,{min:0,max:100,stepSize:1,values:r,onValuesChange:i}),"Form control value: ",r.join(", "),e.jsx("hr",{}),e.jsx("h2",{children:"Slider with value"}),e.jsx(o,{min:0,max:100,stepSize:1,values:t,onValuesChange:d}),"Value: ",t.join(", "),e.jsx("hr",{}),e.jsx("h2",{children:"Disabled slider"}),e.jsx(o,{min:0,max:100,stepSize:1,values:n,onValuesChange:c,disabled:l,readonly:a}),e.jsxs("div",{className:"form-check form-switch",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"disabled",checked:l,onChange:()=>h(!l)}),e.jsx("label",{className:"form-check-label",htmlFor:"disabled",children:"Disabled"})]}),e.jsxs("div",{className:"form-check form-switch",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"readonly",checked:a,onChange:()=>m(!a)}),e.jsx("label",{className:"form-check-label",htmlFor:"readonly",children:"Readonly"})]})]})};export{S as default};
