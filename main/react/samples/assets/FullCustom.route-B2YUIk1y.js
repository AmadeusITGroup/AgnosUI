import{j as e,r}from"./App-DI9ur9y5.js";import{S as t}from"./slider-CxodlRoZ-C4yPY-yv.js";/* empty css               */import{u as l}from"./directive-Kqp31pwt-D1hyVBq_.js";import"./config-YSOSA1FP.js";import"./config-rd69qxGi.js";import"./directive-CKEccryv--USZPHTu.js";import"./widget-DAs9_HQ1-BM4MAb6P.js";import"./stores-B8YEDwZq-CNeJl4J8.js";import"./slider-DjanPJZz-kO3MXorJ.js";import"./writables-DoU_XYTX-CgVcPKwT.js";import"./resizeObserver-Bxx9lDKW.js";import"./extendWidget-DerKog6L.js";const a=s=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"position-relative cup-container",children:e.jsx("div",{className:"cup",children:e.jsx("div",{className:"cup-fill-parent",children:e.jsx("div",{className:"cup-fill",style:{height:`${s.state.progressDisplayOptions[0].height}%`},children:s.state.progressDisplayOptions[0].height>=50?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"bubble bubble-1"}),e.jsx("div",{className:"bubble bubble-2"}),e.jsx("div",{className:"bubble bubble-3"})]}):null})})})}),e.jsx("button",{className:"coffee-indicator",...l(s.widget.directives.handleDirective,{item:s.state.sortedHandles[0]}),children:""+s.state.sortedHandles[0].value})]}),N=()=>{const[s,i]=r.useState([50]);return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Fully custom slider"}),e.jsx(t,{min:0,max:100,stepSize:1,values:s,onValuesChange:i,structure:a,vertical:!0,className:"custom-slider"})]})};export{N as default};