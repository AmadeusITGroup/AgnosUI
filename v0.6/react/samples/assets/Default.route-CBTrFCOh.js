import{j as i,r as l}from"./App-uWCEDvX1.js";import{u as o}from"./config-CrveCMaq.js";import{a as m}from"./directive-DNXkB1Wc-DXs93Lkj.js";import{c as n}from"./slider-DYrwS7Mv-DY7MyluR.js";import"./directive-CKEccryv-BrWl76X8.js";import"./widget-DaA-pe23-DDgilb67.js";import"./stores-B90XF8Sy-CHGO_oWT.js";import"./writables-DCiBdIBK-CaNqvQxH.js";import"./resizeObserver-BeXUZ_dI.js";function d(t){const{state:e,directives:{sliderDirective:a,clickableAreaDirective:s,handleEventsDirective:r}}=o(n,t,"slider");return i.jsx("input",{type:"range",min:e.min,max:e.max,value:e.sortedHandles[0].value,onChange:()=>null,step:e.stepSize,className:"range","aria-label":e.sortedHandles[0].ariaLabel,...m([a,void 0],[s,void 0],[r,{item:{id:0}}])})}const j=()=>{const[t,e]=l.useState([20]);return i.jsxs(i.Fragment,{children:[i.jsx("h2",{className:"text-lg mb-2",children:"DaisyUI Example"}),i.jsx(d,{min:0,max:100,stepSize:1,values:t,onValuesChange:e}),"Value: ",t]})};export{j as default};
