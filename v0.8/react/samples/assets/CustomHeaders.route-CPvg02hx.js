import{r as d,j as e}from"./App-AO0jOhRY.js";import{A as h,a}from"./accordion-GX854ooE-Ckl4jn3X.js";import{B as j}from"./body-DBRiX_SX.js";import{u as i}from"./directive-CEErjM5c-iSrC3_Et.js";import"./slot-BNbuKlAZ.js";import"./dom-BB9jLllr-Cs0LnZpg.js";import"./config-Drx5IJGH.js";import"./config-C430Xqyb.js";import"./widget-6VfcHB3W-CgJr_aqi.js";import"./stores-BWu8V2zY.js";import"./stores-DtfLvXAE-D27zrrdx.js";import"./accordion-hVi2XRk--5lunN68h.js";import"./baseTransitions-CPg3mhjR.js";import"./writables-DCiBdIBK-DMDym_DM.js";import"./promise-CBh_HbSK-DvaGkPJc.js";import"./collapse-CVjUhnIz-CBZHTQYj.js";import"./cssTransitions-gJySKltD.js";import"./extendWidget-B0Yau8uj.js";const R=()=>{const c=d.useRef(null),[n,l]=d.useState(!1),m=({slotContext:t})=>e.jsx("div",{className:"accordion-collapse",...i(t.directives.bodyContainerDirective),children:e.jsx("div",{className:"accordion-body",...i(t.directives.bodyDirective),children:j})}),r=({slotContext:t})=>t.state.shouldBeInDOM?e.jsx(m,{slotContext:t}):null,u=t=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`accordion-button accordion-header custom-header justify-content-between ${t.state.visible?"":"collapsed"}`,role:"heading","aria-level":2,...i(t.directives.headerDirective),children:[e.jsxs("p",{className:"m-0",children:["First panel - ",t.state.visible?"opened":"collapsed"]}),e.jsx("button",{type:"button",className:`btn btn-link p-0 ${t.state.buttonClassName} au-accordion-item-button`,...i(t.directives.toggleDirective),children:"Toggle first"})]}),e.jsx(r,{slotContext:t})]}),b=t=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`accordion-button accordion-header custom-header justify-content-between ${t.state.visible?"":"collapsed"}`,role:"heading","aria-level":2,...i(t.directives.headerDirective),children:[e.jsx("p",{className:"m-0",children:"Second panel"}),e.jsxs("div",{className:"d-flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",className:`btn btn-sm btn-outline-primary ${t.state.buttonClassName} au-accordion-item-button`,...i(t.directives.toggleDirective),children:"Toggle second"}),e.jsxs("button",{type:"button",className:"btn btn-sm btn-outline-secondary",onClick:()=>l(s=>!s),children:[n?"En":"Dis","able third"]}),e.jsx("button",{type:"button",className:"btn btn-sm btn-outline-danger",onClick:()=>{var s,o;return(o=(s=c.current)==null?void 0:s.collapseAll)==null?void 0:o.call(s)},children:"Collapse all"})]})]}),e.jsx(r,{slotContext:t})]}),p=t=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`accordion-button accordion-header custom-header justify-content-between ${t.state.visible?"":"collapsed"}`,role:"heading","aria-level":2,...i(t.directives.headerDirective),children:[e.jsx("button",{type:"button",className:`p-0 btn btn-link container-fluid text-start ${t.state.buttonClassName} au-accordion-item-button`,...i(t.directives.toggleDirective),children:"Third panel"}),t.state.disabled&&e.jsx("p",{className:"text-muted m-0 small",children:"[I'm disabled]"})]}),e.jsx(r,{slotContext:t})]});return e.jsxs(h,{ref:c,children:[e.jsx(a,{structure:u}),e.jsx(a,{structure:b}),e.jsx(a,{structure:p,disabled:n})]})};export{R as default};
