import{r as s,j as e}from"./App-CsOkU7k8.js";import{S as i}from"./slider-Dyr7A6pJ-C9nOtnqV.js";import"./slot-BtkEMpNN.js";import"./directive-CEErjM5c-BVE02Lyt.js";import"./dom-gfxqXJpK-DnwY-KAj.js";import"./clsx-B-dksMZM.js";import"./config-C8WNE-by.js";import"./config-B-M_1bYi.js";import"./stores-lycFhSg7.js";import"./stores-DZalyTTa-Bo8fVQaT.js";import"./slider-DVthNbSG-uDGBbNcJ.js";import"./writables-CgpOQ4hA-RosD9yhs.js";import"./resizeObserver-DU9tiOkX.js";import"./widget-CM0nNcys.js";import"./extendWidget-Dox4Buxj.js";const R=()=>{const[o,r]=s.useState([30]),[l,a]=s.useState([30,70]),[t,c]=s.useState(!1),[n,m]=s.useState([30,70]);return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Ticks as steps"}),e.jsx(i,{min:0,max:100,stepSize:25,values:l,onValuesChange:a,disabled:t,showTicks:!0}),e.jsxs("div",{className:"form-check form-switch mb-2",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"disabled",checked:t,onChange:()=>c(!t)}),e.jsx("label",{className:"form-check-label",htmlFor:"disabled",children:"Disabled"})]}),e.jsx("h2",{children:"With intermediate steps"}),e.jsx(i,{min:0,max:100,stepSize:1,values:o,onValuesChange:r,showTicks:!0,tickInterval:25}),e.jsx("br",{}),e.jsx("h2",{children:"Without tick labels"}),e.jsx(i,{min:0,max:100,stepSize:25,values:n,onValuesChange:m,showTicks:!0,showTickValues:!1}),e.jsxs("p",{children:[" ","If ",e.jsx("code",{children:"showTickValues"})," is set to ",e.jsx("code",{children:"false"})," the min/max/current label display is automatically put to ",e.jsx("code",{children:"true"})]})]})};export{R as default};
