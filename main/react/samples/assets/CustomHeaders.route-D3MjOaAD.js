import{r as d,j as e}from"./App-DSl1jU8i.js";import{A as h,a}from"./accordion-GX854ooE-DsZk4kOP.js";import{B as j}from"./body-DBRiX_SX.js";import{u as i}from"./directive-CEErjM5c-DClKN2Tv.js";import"./slot-DCyaBoo1.js";import"./directive-CKEccryv-BEge1hNH.js";import"./config-Dmr0Of-f.js";import"./config-FG_E5HMF.js";import"./widget-6VfcHB3W-Cqqyd0Y-.js";import"./stores-DtfLvXAE-CSxI-bHc.js";import"./accordion-BGv150k9-BhPwcLCc.js";import"./baseTransitions-DL6kGSv2.js";import"./writables-DCiBdIBK-B6teIxy4.js";import"./promise-CY2U8bTP-COOyouyK.js";import"./collapse-CVjUhnIz-D5ZVU_7a.js";import"./cssTransitions-AlfUkfjs.js";import"./extendWidget-DrHtUD_Z.js";const O=()=>{const c=d.useRef(null),[n,l]=d.useState(!1),m=({slotContext:t})=>e.jsx("div",{className:"accordion-collapse",...i(t.directives.bodyContainerDirective),children:e.jsx("div",{className:"accordion-body",...i(t.directives.bodyDirective),children:j})}),r=({slotContext:t})=>t.state.shouldBeInDOM?e.jsx(m,{slotContext:t}):null,u=t=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`accordion-button accordion-header custom-header justify-content-between ${t.state.visible?"":"collapsed"}`,role:"heading","aria-level":2,...i(t.directives.headerDirective),children:[e.jsxs("p",{className:"m-0",children:["First panel - ",t.state.visible?"opened":"collapsed"]}),e.jsx("button",{type:"button",className:`btn btn-link p-0 ${t.state.buttonClassName} au-accordion-item-button`,...i(t.directives.toggleDirective),children:"Toggle first"})]}),e.jsx(r,{slotContext:t})]}),b=t=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`accordion-button accordion-header custom-header justify-content-between ${t.state.visible?"":"collapsed"}`,role:"heading","aria-level":2,...i(t.directives.headerDirective),children:[e.jsx("p",{className:"m-0",children:"Second panel"}),e.jsxs("div",{className:"d-flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",className:`btn btn-sm btn-outline-primary ${t.state.buttonClassName} au-accordion-item-button`,...i(t.directives.toggleDirective),children:"Toggle second"}),e.jsxs("button",{type:"button",className:"btn btn-sm btn-outline-secondary",onClick:()=>l(s=>!s),children:[n?"En":"Dis","able third"]}),e.jsx("button",{type:"button",className:"btn btn-sm btn-outline-danger",onClick:()=>{var s,o;return(o=(s=c.current)==null?void 0:s.collapseAll)==null?void 0:o.call(s)},children:"Collapse all"})]})]}),e.jsx(r,{slotContext:t})]}),p=t=>e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`accordion-button accordion-header custom-header justify-content-between ${t.state.visible?"":"collapsed"}`,role:"heading","aria-level":2,...i(t.directives.headerDirective),children:[e.jsx("button",{type:"button",className:`p-0 btn btn-link container-fluid text-start ${t.state.buttonClassName} au-accordion-item-button`,...i(t.directives.toggleDirective),children:"Third panel"}),t.state.disabled&&e.jsx("p",{className:"text-muted m-0 small",children:"[I'm disabled]"})]}),e.jsx(r,{slotContext:t})]});return e.jsxs(h,{ref:c,children:[e.jsx(a,{structure:u}),e.jsx(a,{structure:b}),e.jsx(a,{structure:p,disabled:n})]})};export{O as default};