import{r as s,j as r}from"./App-C7lISzaa.js";import{S as i}from"./slot-DsTVBY8T.js";import{a as c}from"./directive-DNXkB1Wc-xckYM9og.js";import{u as n}from"./config-CGzQn2Ir.js";import{c as l}from"./alert-DJ2l7bcA-Bjhgn6QO.js";import{d as m}from"./writables-DCiBdIBK-B6teIxy4.js";import{e as d}from"./extendWidget-DrHtUD_Z.js";import{f as p}from"./fade-uOobJKgw-DeWoxqhP.js";import{B as u}from"./types-Bw2nvhNr.js";import{c as f}from"./directive-CKEccryv-BEge1hNH.js";const v={structure:void 0,children:void 0,type:"primary"},j={transition:p},A={type:m(u),structure:void 0,children:void 0},b=d(l,v,A,j),h=b,g=e=>r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"alert-body",children:r.jsx(i,{slotContent:e.state.children,props:e})}),e.state.dismissible&&r.jsx("button",{type:"button",className:"btn-close",onClick:e.api.close,"aria-label":e.state.ariaCloseButtonLabel})]}),S=e=>r.jsx("div",{role:"alert",...c([f,`au-alert alert alert-${e.state.type} ${e.state.className} ${e.state.dismissible?"alert-dismissible":""}`],e.directives.transitionDirective),children:r.jsx(i,{slotContent:e.state.structure,props:e})}),_=s.forwardRef(function(a,o){const t=n(h,a,"alert",{structure:g});return s.useImperativeHandle(o,()=>t.api,[t.api]),r.jsx(r.Fragment,{children:!t.state.hidden&&r.jsx(S,{...t})})});export{_ as A};