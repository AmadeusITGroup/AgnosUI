import{r as t,j as r}from"./App-DI9ur9y5.js";import{S as s}from"./slot-Cdz7cIIo.js";import{a as i}from"./directive-DNXkB1Wc-BT0zWdco.js";import{c as o}from"./directive-CKEccryv-BXYvEkQs.js";import{u as m}from"./config-aYUxiFUz.js";import{g,f as p,c as x}from"./accordion-BTu1y5n6-CexpYQHH.js";import{c as f}from"./collapse-CVjUhnIz-CoejpXEV.js";import{e as j}from"./extendWidget-BdAld2Yx.js";const D={itemStructure:void 0},C={structure:void 0,children:void 0,header:void 0},b={...g(),...D},A={animated:!1,transition:f,destroyOnHide:!1,onShown:()=>{},onHidden:()=>{},onVisibleChange:()=>{},visible:!1,disabled:!1,id:"",headerClassName:"",buttonClassName:"",bodyContainerClassName:"",bodyClassName:"",headingTag:"",className:"",structure:void 0,children:void 0,header:void 0},I=Object.keys(A),y=j(x,C),T={itemTransition:f};function w(){return{...b,...T}}const E=p(y,I,w()),H=E,N=e=>{const n=new RegExp("^h[1-6]$").test(e.headerTag)?e.headerTag:"h2";return r.jsx(n,{...i([o,"accordion-header"],e.directive),children:e.children})},P=e=>r.jsx("div",{...i([o,"accordion-collapse"],e.directives.bodyContainerDirective),children:r.jsx("div",{...i([o,"accordion-body"],e.directives.bodyDirective),children:r.jsx(s,{slotContent:e.state.children,props:e})})}),v=t.createContext({}),S=e=>r.jsxs(r.Fragment,{children:[r.jsx(N,{directive:e.directives.headerDirective,headerTag:e.state.headingTag,children:r.jsx("button",{...i([o,"accordion-button"],e.directives.buttonDirective),children:r.jsx(s,{slotContent:e.state.header,props:e})})}),e.state.shouldBeInDOM&&r.jsx(P,{...e})]}),O={structure:S},_=t.forwardRef(function(c,n){const{registerItem:a}=t.useContext(v),d=m(a,c,null,O),{state:l,api:u,directives:h}=d;return t.useImperativeHandle(n,()=>u,[]),t.useEffect(()=>{u.initDone()},[]),r.jsx("div",{...i([o,`accordion-item ${l.className}`],h.itemDirective),children:r.jsx(s,{slotContent:l.structure,props:d})})}),q=t.forwardRef(function(c,n){const a=m(H,c,"accordion");return t.useImperativeHandle(n,()=>a.api,[]),r.jsx(v.Provider,{value:a.api,children:r.jsx("div",{...i([o,"accordion"],a.directives.accordionDirective),children:c.children})})});export{q as A,_ as a};