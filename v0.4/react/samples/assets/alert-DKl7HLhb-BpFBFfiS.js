import{r as a,j as e}from"./App-D2FAakDZ.js";import{u as l,S as i}from"./config-87LujZOd.js";import{a as d}from"./directive-Kqp31pwt-o0igtPiy.js";import{c as m}from"./alert-8ilqhLst-Dspk4blN.js";import{a as p}from"./writables-DoU_XYTX-8sqxFTfY.js";import{e as u}from"./extendWidget-CY6dlHOY.js";import{f}from"./fade-uOobJKgw-BJsoKbPR.js";import{c as g}from"./directive-3-8yr-ZK-C5h7Dwqe.js";const j={structure:void 0,children:void 0,type:"primary"},v={transition:f},b={type:p},h=u(m,j,b,v),y=h,A=t=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"alert-body",children:e.jsx(i,{slotContent:t.state.children,props:t})}),t.state.dismissible&&e.jsx("button",{type:"button",className:"btn-close",onClick:t.widget.api.close,"aria-label":t.state.ariaCloseButtonLabel})]}),x={structure:A},S=t=>e.jsx("div",{role:"alert",...d([g,`au-alert alert alert-${t.state.type} ${t.state.className} ${t.state.dismissible?"alert-dismissible":""}`],t.widget.directives.transitionDirective),children:e.jsx(i,{slotContent:t.state.structure,props:t})}),R=a.forwardRef(function(o,c){const[r,s]=l(y,o,"alert",x);a.useImperativeHandle(c,()=>s.api,[]);const n={state:r,widget:s};return e.jsx(e.Fragment,{children:!r.hidden&&e.jsx(S,{...n})})});export{R as A};
