import{r as d,j as a}from"./index-f82834c6.js";import{u as p}from"./utils-3d1769dc.js";import{A as h,a as r}from"./Accordion-0ba08519.js";import{B as j}from"./body-92e21e3d.js";import"./index-58f6647a.js";import"./focustrack-d9d6116c.js";import"./pagination-77ff0a3e.js";import"./writables-e06b6bbb.js";import"./fade-cfc2f702.js";import"./baseTransitions-149a0baa.js";import"./config-280fe900.js";const w=()=>{const l=d.useRef(),[c,n]=d.useState(!1),t=e=>{const{state:i,widget:s}=e.slotContext,u=p(s.directives.collapseDirective);return a.jsx(a.Fragment,{children:i.shouldBeInDOM?a.jsx("div",{className:`accordion-collapse ${i.itemCollapseClass}`,id:`${i.itemId}-collapse`,"aria-labelledby":`${i.itemId}-toggle`,ref:u,children:a.jsx("div",{className:`accordion-body ${i.itemBodyClass}`,children:j})}):null})},m=e=>a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:`${e.state.itemHeaderClass} accordion-button accordion-header custom-header justify-content-between ${e.state.itemVisible?"":"collapsed"}`,role:"heading","aria-level":2,children:[a.jsxs("p",{className:"m-0",children:["First panel - ",e.state.itemVisible?"opened":"collapsed"]}),a.jsx("button",{type:"button",id:`${e.state.itemId}-toggle`,onClick:e.widget.actions.click,className:`btn btn-link p-0 ${e.state.itemButtonClass} ${e.state.itemVisible?"":"collapsed"}`,disabled:e.state.itemDisabled,"aria-controls":`${e.state.itemId}-collapse`,"aria-disabled":e.state.itemDisabled,"aria-expanded":e.state.itemVisible,children:"Toggle first"})]}),a.jsx(t,{slotContext:e})]}),o=e=>a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:`${e.state.itemHeaderClass} accordion-button accordion-header custom-header justify-content-between ${e.state.itemVisible?"":"collapsed"}`,role:"heading","aria-level":2,children:[a.jsx("p",{className:"m-0",children:"Second panel"}),a.jsxs("div",{children:[a.jsx("button",{type:"button",className:`btn btn-sm btn-outline-primary me-2 ${e.state.itemButtonClass} ${e.state.itemVisible?"":"collapsed"}`,id:`${e.state.itemId}-toggle`,onClick:e.widget.actions.click,disabled:e.state.itemDisabled,"aria-controls":`${e.state.itemId}-collapse`,"aria-disabled":e.state.itemDisabled,"aria-expanded":e.state.itemVisible,children:"Toggle second"}),a.jsxs("button",{type:"button",className:"btn btn-sm btn-outline-secondary me-2",onClick:()=>n(i=>!i),children:[c?"En":"Dis","able third"]}),a.jsx("button",{type:"button",className:"btn btn-sm btn-outline-danger me-2",onClick:()=>{var i,s;return(s=(i=l.current)==null?void 0:i.collapseAll)==null?void 0:s.call(i)},children:"Collapse all"})]})]}),a.jsx(t,{slotContext:e})]}),b=e=>a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:`${e.state.itemHeaderClass} accordion-button accordion-header custom-header justify-content-between ${e.state.itemVisible?"":"collapsed"}`,role:"heading","aria-level":2,children:[a.jsx("button",{type:"button",className:`p-0 btn btn-link container-fluid text-start ${e.state.itemButtonClass} ${e.state.itemVisible?"":"collapsed"} `,id:`${e.state.itemId}-toggle`,onClick:e.widget.actions.click,disabled:e.state.itemDisabled,"aria-disabled":e.state.itemDisabled,"aria-controls":`${e.state.itemId}-collapse`,"aria-expanded":e.state.itemVisible,children:"Third panel"}),e.state.itemDisabled?a.jsx("p",{className:"text-muted m-0 small",children:"[I'm disabled]"}):a.jsx(a.Fragment,{})]}),a.jsx(t,{slotContext:e})]});return a.jsxs(h,{ref:l,children:[a.jsx(r,{slotItemStructure:m}),a.jsx(r,{slotItemStructure:o}),a.jsx(r,{slotItemStructure:b,itemDisabled:c})]})};export{w as default};
