import{r as t,j as i}from"./index-f82834c6.js";import{S as o,c as f}from"./index-58f6647a.js";import{u as l}from"./config-280fe900.js";import{u as n}from"./utils-3d1769dc.js";const m=t.createContext({}),g=e=>{const s=n(e.widget.directives.collapseDirective),r=new RegExp("^h[1-6]$").test(e.state.itemHeadingTag)?e.state.itemHeadingTag:"h2";return i.jsxs(i.Fragment,{children:[i.jsx(r,{className:`accordion-header ${e.state.itemHeaderClass}`,children:i.jsx("button",{type:"button",id:`${e.state.itemId}-toggle`,onClick:e.widget.actions.click,className:`accordion-button ${e.state.itemButtonClass} ${e.state.itemVisible?"":"collapsed"}`,disabled:e.state.itemDisabled,"aria-controls":`${e.state.itemId}-collapse`,"aria-disabled":e.state.itemDisabled,"aria-expanded":e.state.itemVisible,children:i.jsx(o,{slotContent:e.state.slotItemHeader,props:e})})}),e.state.shouldBeInDOM?i.jsx("div",{className:`accordion-collapse ${e.state.itemCollapseClass}`,id:`${e.state.itemId}-collapse`,"aria-labelledby":`${e.state.itemId}-toggle`,ref:s,children:i.jsx("div",{className:`accordion-body ${e.state.itemBodyClass}`,children:i.jsx(o,{slotContent:e.state.slotItemBody,props:e})})}):null]})},I={slotItemStructure:g},$=t.forwardRef(function(s,d){const{registerItem:r}=t.useContext(m),[a,c]=l(r,s,null,{...I}),u={state:a,widget:c},p=n(c.directives.accordionItemDirective);return t.useImperativeHandle(d,()=>c.api,[]),t.useEffect(()=>{c.api.initDone()},[]),i.jsx("div",{className:`accordion-item ${a.itemClass}`,id:a.itemId,ref:p,children:i.jsx(o,{slotContent:a.slotItemStructure,props:u})})}),D=t.forwardRef(function(s,d){const[r,a]=l(f,s,"accordion");t.useImperativeHandle(d,()=>a.api,[]);const c=n(a.directives.accordionDirective);return i.jsx(m.Provider,{value:a.api,children:i.jsx("div",{className:`accordion ${r.className}`,ref:c,children:s.children})})});export{D as A,$ as a};
