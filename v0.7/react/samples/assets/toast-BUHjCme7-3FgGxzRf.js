import{r as o,j as s}from"./App-CbxyQil0.js";import{S as i}from"./slot-B-n0hzfG.js";import{a as r}from"./directive-CEErjM5c-w-h4c8PC.js";import{u as c}from"./config-CrvFEMU-.js";import{c as d}from"./toast-4f-ZdK1Y-CUJvdZqf.js";import{e as n}from"./extendWidget-DxTj0ayL.js";import{f as m}from"./fade-uOobJKgw-CtYJW-II.js";import{c as a}from"./directive-DrDJkTS5-BSYQXut0.js";const u={structure:void 0,children:void 0,header:void 0},v={transition:m},h=n(d,u,{structure:void 0,children:void 0,header:void 0},v),p=h,l=e=>s.jsx("button",{...r([a,"btn-close me-0 ms-auto"],e.directives.closeButtonDirective)}),f=e=>s.jsxs("div",{className:"toast-header",children:[s.jsx(i,{slotContent:e.state.header,props:e}),e.state.dismissible&&s.jsx(l,{...e})]}),j=e=>s.jsx("button",{...r([a,"btn-close btn-close-white me-2 m-auto"],e.directives.closeButtonDirective)}),b=e=>s.jsxs(s.Fragment,{children:[e.state.header&&s.jsx(f,{...e}),s.jsx("div",{className:"toast-body",children:s.jsx(i,{slotContent:e.state.children,props:e})}),e.state.dismissible&&!e.state.header&&s.jsx(j,{...e})]}),T=e=>s.jsx("div",{...r([a,{"toast-dismissible":e.state.dismissible,"d-flex":!e.state.header}],e.directives.transitionDirective,e.directives.autoHideDirective,e.directives.bodyDirective),children:s.jsx(i,{slotContent:e.state.structure,props:e})});function W(e){const t=c(p,e,"toast",{structure:b,children:e.children});return o.useImperativeHandle(e.ref,()=>t.api,[t.api]),s.jsx(s.Fragment,{children:!t.state.hidden&&s.jsx(T,{...t})})}export{W as T};
