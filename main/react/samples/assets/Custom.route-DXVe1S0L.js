import{j as e,r as o}from"./App-XNADZBio.js";import{S as r}from"./slider-CQ6rMcxW-CcH0Xjwb.js";/* empty css               */import{u as a}from"./directive-CX0hxCpP-srOUdzTw.js";import"./stores-B4F_j8QF.js";import"./directive-GSGkMcBJ.js";import"./writables-DoU_XYTX-DoV7pQAs.js";import"./resizeObserver-CD0IU7t2.js";import"./config-DQAExDHC.js";import"./widget-DAs9_HQ1-DwZAIgDx.js";import"./stores-B8YEDwZq-C-BlpjsT.js";import"./slot-DrPnuT9k.js";const m=t=>{const s=a(t.widget.directives.handleDirective,{item:t.item});return e.jsx("button",{className:"custom-handle",ref:s,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"var(--bs-slider-handle-color)",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"})})})},d=m,b=()=>{const[t,s]=o.useState([70]),[i,l]=o.useState([50]);return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Slider with custom labels"}),e.jsx(r,{min:0,max:100,stepSize:1,values:t,onValuesChange:s,slotLabel:({value:n})=>""+n+"%",className:"au-custom-slider-container"}),e.jsx("hr",{}),e.jsx("h2",{children:"Slider with custom handle"}),e.jsx(r,{min:0,max:100,stepSize:1,values:i,onValuesChange:l,slotHandle:d,className:"au-custom-slider-container"})]})};export{b as default};