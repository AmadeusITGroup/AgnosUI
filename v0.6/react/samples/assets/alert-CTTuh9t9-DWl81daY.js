import{r as s,j as r}from"./App-CyvC_5t0.js";import{S as i}from"./slot-Dra5swoq.js";import{a as c}from"./directive-DNXkB1Wc-B0-Q0JWz.js";import{u as n}from"./config-B4y1ZCnE.js";import{c as l}from"./alert-DJ2l7bcA-7lG4YEx5.js";import{d as m}from"./writables-DCiBdIBK-CaNqvQxH.js";import{e as d}from"./extendWidget-DH8OAK3L.js";import{f as p}from"./fade-uOobJKgw-DqfTw5Cx.js";import{B as u}from"./types-Bw2nvhNr.js";import{c as f}from"./directive-CKEccryv-BrWl76X8.js";const v={structure:void 0,children:void 0,type:"primary"},j={transition:p},A={type:m(u),structure:void 0,children:void 0},b=d(l,v,A,j),h=b,g=e=>r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"alert-body",children:r.jsx(i,{slotContent:e.state.children,props:e})}),e.state.dismissible&&r.jsx("button",{type:"button",className:"btn-close",onClick:e.api.close,"aria-label":e.state.ariaCloseButtonLabel})]}),S=e=>r.jsx("div",{role:"alert",...c([f,`au-alert alert alert-${e.state.type} ${e.state.className} ${e.state.dismissible?"alert-dismissible":""}`],e.directives.transitionDirective),children:r.jsx(i,{slotContent:e.state.structure,props:e})}),_=s.forwardRef(function(a,o){const t=n(h,a,"alert",{structure:g});return s.useImperativeHandle(o,()=>t.api,[t.api]),r.jsx(r.Fragment,{children:!t.state.hidden&&r.jsx(S,{...t})})});export{_ as A};