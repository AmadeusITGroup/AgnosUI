import{r as i,j as e}from"./App-CMLx6mqi.js";import{u as n,S as o}from"./config-UTOxIG5j.js";import{a as d}from"./directive-Kqp31pwt-CmYlrUyd.js";import{c as m}from"./alert-Dlf-BV98-DqeQkqGT.js";import{a as u}from"./writables-DoU_XYTX-CLq9hDK4.js";import{e as p}from"./extendWidget-DmHfBe22.js";import{f}from"./fade-uOobJKgw-DxMY8pXp.js";import{c as g}from"./directive-DCYlDznf-D6Op6yAr.js";const j={slotStructure:void 0,slotDefault:void 0,type:"primary"},v={transition:f},b={type:u},S=p(m,j,b,v),h=S,y=t=>e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"alert-body",children:e.jsx(o,{slotContent:t.state.slotDefault,props:t})}),t.state.dismissible&&e.jsx("button",{type:"button",className:"btn-close",onClick:t.widget.api.close,"aria-label":t.state.ariaCloseButtonLabel})]}),A={slotStructure:y},D=t=>e.jsx("div",{role:"alert",...d([g,`au-alert alert alert-${t.state.type} ${t.state.className} ${t.state.dismissible?"alert-dismissible":""}`],t.widget.directives.transitionDirective),children:e.jsx(o,{slotContent:t.state.slotStructure,props:t})}),R=i.forwardRef(function(r,l){const[s,a]=n(h,r,"alert",{...A,slotDefault:r.children});i.useImperativeHandle(l,()=>a.api,[]);const c={state:s,widget:a};return e.jsx(e.Fragment,{children:!s.hidden&&e.jsx(D,{...c})})});export{R as A};