import{r as l,j as e}from"./index-DwQI96OA.js";import{c as d}from"./func-BWmyfmoa.js";import{e as u,c as m}from"./extendWidget-CJmyIOSZ.js";import{d as f,g as p}from"./directive-C9v-ORad.js";import{t as b,h}from"./writables-Lk7BoF9B.js";import{u as g}from"./config-B7C5ER0C.js";import{S as r}from"./slot-C6u581j2.js";const v={autohide:!0,delay:5e3,slotHeader:void 0},j={autohide:b,delay:h(0,1/0,{strict:!0})};function y(t){let i;const a=u(m,v,j)(t),s=d(()=>{clearTimeout(i),a.stores.autohide$()&&(i=setTimeout(()=>a.api.close(),a.stores.delay$()))});return{...a,directives:{...a.directives,autohideDirective:f(s)}}}const D=y,T=t=>e.jsxs(e.Fragment,{children:[t.state.slotHeader?e.jsxs("div",{className:"toast-header",children:[e.jsx(r,{slotContent:t.state.slotHeader,props:t}),t.state.dismissible?e.jsx("button",{type:"button",className:"btn-close me-0 ms-auto",onClick:t.widget.api.close,"aria-label":t.state.ariaCloseButtonLabel}):null]}):null,e.jsx("div",{className:"toast-body",children:e.jsx(r,{slotContent:t.state.slotDefault,props:t})}),t.state.dismissible&&!t.state.slotHeader?e.jsx("button",{type:"button",className:"btn-close btn-close-white me-2 m-auto",onClick:t.widget.api.close,"aria-label":t.state.ariaCloseButtonLabel}):null]}),x={slotStructure:T},I=l.forwardRef(function(i,a){const[s,o]=g(D,i,"toast",{...x,slotDefault:i.children}),c=p([o.directives.transitionDirective,o.directives.autohideDirective]);l.useImperativeHandle(a,()=>o.api,[]);const n={state:s,widget:o};return e.jsx(e.Fragment,{children:s.hidden?null:e.jsx("div",{className:`au-toast toast ${s.className} ${s.dismissible?"toast-dismissible":""} ${s.slotHeader?"":"d-flex"}`,role:"alert",ref:c,"aria-atomic":"true",children:e.jsx(r,{slotContent:s.slotStructure,props:n})})})});export{I as T};