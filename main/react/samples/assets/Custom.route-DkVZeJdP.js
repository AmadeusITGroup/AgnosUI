import{j as e,r}from"./App-DHhP8U0X.js";import{S as s}from"./slider-DMIinwEC-KQFJULUX.js";/* empty css               */import"./func-DR0n-ShK-BRtNsj1u.js";import"./directive-CX0hxCpP-DoRNka9I.js";import"./stores-CeiBlAbJ.js";import"./writables-DoU_XYTX-Cc045fOB.js";import"./resizeObserver-C--itYOB.js";import"./config-jsbGLsCa.js";import"./widget-DAs9_HQ1-CbiAEhyH.js";import"./stores-B8YEDwZq-DwZpK94w.js";import"./slot-Is8FqGrj.js";const o=a=>e.jsx("button",{className:`au-custom-slider-handle ${a.state.vertical?"au-custom-slider-handle-vertical":"au-custom-slider-handle-horizontal"}`,role:"slider","aria-valuemin":a.state.min,"aria-valuemax":a.state.max,"aria-valuenow":a.item.value,"aria-valuetext":""+a.item.ariaValueText,"aria-label":a.item.ariaLabel,"aria-readonly":a.state.readonly?"true":void 0,"aria-disabled":a.state.disabled?"true":void 0,"aria-orientation":a.state.vertical?"vertical":void 0,disabled:a.state.disabled,style:{top:`${a.state.handleDisplayOptions[a.item.id].top}%`,left:`${a.state.handleDisplayOptions[a.item.id].left}%`},onKeyDown:i=>a.widget.actions.keydown(i.nativeEvent,a.item.id),onMouseDown:i=>a.widget.actions.mouseDown(i.nativeEvent,a.item.id),onTouchStart:i=>a.widget.actions.touchStart(i.nativeEvent,a.item.id),children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"var(--bs-slider-handle-color)",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"})})}),n=o,L=()=>{const[a,i]=r.useState([70]),[t,l]=r.useState([50]);return e.jsxs(e.Fragment,{children:[e.jsx("h2",{children:"Slider with custom labels"}),e.jsx(s,{min:0,max:100,stepSize:1,values:a,onValuesChange:i,slotLabel:({value:d})=>""+d+"%",className:"au-custom-slider-container"}),e.jsx("hr",{}),e.jsx("h2",{children:"Slider with custom handle"}),e.jsx(s,{min:0,max:100,stepSize:1,values:t,onValuesChange:l,slotHandle:n,className:"au-custom-slider-container"})]})};export{L as default};
