import{j as a,r as i}from"./index-xBtNO7cl.js";import{S as r}from"./slider-DJ1OlC5t.js";/* empty css               */import"./func-BRtNsj1u.js";import"./directive-Bc-vMXgy.js";import"./stores-DEfGgWeX.js";import"./writables-CKVQ7oWP.js";import"./resizeObserver-PET7Ha4Q.js";import"./config-Dw0HWXUQ.js";import"./widget-DtBBXYSJ.js";const l=e=>a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"position-relative cup-container",children:a.jsx("div",{className:"cup",children:a.jsx("div",{className:"cup-fill-parent",children:a.jsx("div",{className:"cup-fill",style:{height:`${e.state.progressDisplayOptions[0].height}%`},children:e.state.progressDisplayOptions[0].height>=50?a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"bubble bubble-1"}),a.jsx("div",{className:"bubble bubble-2"}),a.jsx("div",{className:"bubble bubble-3"})]}):null})})})}),a.jsx("button",{className:`coffee-indicator ${e.state.vertical?"au-slider-handle-vertical":"au-slider-handle-horizontal"}`,role:"slider","aria-valuemin":e.state.min,"aria-valuemax":e.state.max,"aria-valuenow":e.state.sortedHandles[0].value,"aria-valuetext":""+e.state.sortedHandles[0].ariaValueText,"aria-label":e.state.sortedHandles[0].ariaLabel,"aria-readonly":e.state.readonly?"true":void 0,"aria-disabled":e.state.disabled?"true":void 0,"aria-orientation":e.state.vertical?"vertical":void 0,disabled:e.state.disabled,style:{top:`${e.state.handleDisplayOptions[e.state.sortedHandles[0].id].top}%`,left:`${e.state.handleDisplayOptions[e.state.sortedHandles[0].id].left}%`},onKeyDown:s=>e.widget.actions.keydown(s.nativeEvent,e.state.sortedHandles[0].id),onMouseDown:s=>e.widget.actions.mouseDown(s.nativeEvent,e.state.sortedHandles[0].id),onTouchStart:s=>e.widget.actions.touchStart(s.nativeEvent,e.state.sortedHandles[0].id),children:""+e.state.sortedHandles[0].value})]}),t=l,j=()=>{const[e,s]=i.useState([50]);return a.jsxs(a.Fragment,{children:[a.jsx("h2",{children:"Fully custom slider"}),a.jsx(r,{min:0,max:100,stepSize:1,values:e,onValuesChange:s,slotStructure:t,vertical:!0,className:"custom-slider"})]})};export{j as default};
