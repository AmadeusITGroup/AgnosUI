import{r,j as i}from"./App-Z_OzLO2G.js";import{S as d}from"./slot-BVbUe4Ld.js";import{a as o}from"./directive-CEErjM5c-DVieIczM.js";import{n as s,c}from"./dom-gfxqXJpK-DnwY-KAj.js";import{u as m}from"./config-BIKLIhxN.js";import{f as g,g as p,c as x}from"./accordion-BLVIYePx-B1k2qh4p.js";import{c as f}from"./collapse-CVjUhnIz-Bf8v5Raj.js";import{e as j}from"./extendWidget-CRSgS6m7.js";const D={itemStructure:void 0},I={structure:void 0,children:void 0,header:void 0},b={...p(),...D},C={animated:!1,transition:f,destroyOnHide:!1,onShown:s,onHidden:s,onVisibleChange:s,visible:!1,disabled:!1,id:"",headerClassName:"",buttonClassName:"",bodyContainerClassName:"",bodyClassName:"",headingTag:"",className:"",structure:void 0,children:void 0,header:void 0},A=Object.keys(C),y=j(x,I),T={itemTransition:f};function E(){return{...b,...T}}const H=g(y,A,E()),N=H,S=e=>{const a=new RegExp("^h[1-6]$").test(e.headerTag)?e.headerTag:"h2";return i.jsx(a,{...o([c,"accordion-header"],e.directive),children:e.children})},O=e=>i.jsx("div",{...o([c,"accordion-collapse"],e.directives.bodyContainerDirective),children:i.jsx("div",{...o([c,"accordion-body"],e.directives.bodyDirective),children:i.jsx(d,{slotContent:e.state.children,props:e})})}),v=r.createContext({}),P=e=>i.jsxs(i.Fragment,{children:[i.jsx(S,{directive:e.directives.headerDirective,headerTag:e.state.headingTag,children:i.jsx("button",{...o([c,"accordion-button"],e.directives.buttonDirective),children:i.jsx(d,{slotContent:e.state.header,props:e})})}),e.state.shouldBeInDOM&&i.jsx(O,{...e})]});function M(e){const{registerItem:t}=r.useContext(v),a=r.useId(),u=m(t,e,null,{structure:P,id:a}),{state:l,api:n,directives:h}=u;return r.useImperativeHandle(e.ref,()=>n,[n]),r.useEffect(()=>{n.initDone()},[n]),i.jsx("div",{...o([c,`accordion-item ${l.className}`],h.itemDirective),children:i.jsx(d,{slotContent:l.structure,props:u})})}function _(e){const t=m(N,e,"accordion");return r.useImperativeHandle(e.ref,()=>t.api,[t.api]),i.jsx(v,{value:t.api,children:i.jsx("div",{...o([c,"accordion"],t.directives.accordionDirective),children:e.children})})}export{_ as A,M as a};
