import{j as e,r as i}from"./App-C7lISzaa.js";import{S as t}from"./slider--K7ri_0l-CLoJmhkO.js";/* empty css               */import{u as l}from"./directive-DNXkB1Wc-xckYM9og.js";import"./slot-DsTVBY8T.js";import"./config-CGzQn2Ir.js";import"./config-C0UxE6Ct.js";import"./directive-CKEccryv-BEge1hNH.js";import"./widget-DaA-pe23-CBNYx0lN.js";import"./stores-B90XF8Sy-JmdgB9jW.js";import"./slider-DYrwS7Mv-BNLTT7mU.js";import"./writables-DCiBdIBK-B6teIxy4.js";import"./resizeObserver-DpSXni5r.js";import"./extendWidget-DrHtUD_Z.js";const a=s=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"position-relative cup-container",children:e.jsx("div",{className:"cup",children:e.jsx("div",{className:"cup-fill-parent",children:e.jsx("div",{className:"cup-fill",style:{height:`${s.state.progressDisplayOptions[0].height}%`},children:s.state.progressDisplayOptions[0].height>=50?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bubble bubble-1"}),e.jsx("div",{className:"bubble bubble-2"}),e.jsx("div",{className:"bubble bubble-3"})]}):null})})})}),e.jsx("button",{className:"coffee-indicator",...l(s.directives.handleDirective,{item:s.state.sortedHandles[0]}),children:""+s.state.sortedHandles[0].value})]}),f=()=>{const[s,r]=i.useState([50]);return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Fully custom slider"}),e.jsx(t,{min:0,max:100,stepSize:1,values:s,onValuesChange:r,structure:a,vertical:!0,className:"custom-slider"})]})};export{f as default};
