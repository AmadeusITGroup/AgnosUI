import{a as l,j as t,r as i,c as m}from"./App-DI9ur9y5.js";import{S as s}from"./slot-Cdz7cIIo.js";import{a as d,u as p}from"./directive-DNXkB1Wc-BlP1YL6e.js";import{c as u}from"./index-DYzswQoO.js";import{u as f}from"./config-BKBdqztu.js";import{c as v,m as j,a as h}from"./modal-BDXtz0q8-C0vArpX1.js";import{f as c}from"./fade-uOobJKgw-DqfTw5Cx.js";import{e as x}from"./extendWidget-DH8OAK3L.js";import{t as g}from"./writables-DCiBdIBK-CaNqvQxH.js";import{c as n}from"./directive-CKEccryv-BrWl76X8.js";const D={contentData:void 0,children:void 0,footer:void 0,header:void 0,structure:void 0,title:void 0,fullscreen:!1},k={backdropTransition:c,modalTransition:c},b={fullscreen:g,contentData:void 0,children:void 0,footer:void 0,header:void 0,structure:void 0,title:void 0},M=x(v,D,b,k),N=({children:e,container:o})=>o?l.createPortal(e,o):t.jsx(t.Fragment,{children:e}),B=M,z=j,A=h,E=({directive:e})=>t.jsx("button",{className:"btn-close",...p(e)}),w=e=>t.jsxs(t.Fragment,{children:[t.jsx("h5",{className:"modal-title",children:t.jsx(s,{slotContent:e.state.title,props:e})}),e.state.closeButton&&t.jsx(E,{directive:e.directives.closeButtonDirective})]}),y=e=>t.jsxs(t.Fragment,{children:[e.state.title&&t.jsx("div",{className:"modal-header",children:t.jsx(s,{slotContent:e.state.header,props:e})}),t.jsx("div",{className:"modal-body",children:t.jsx(s,{slotContent:e.state.children,props:e})}),e.state.footer&&t.jsx("div",{className:"modal-footer",children:t.jsx(s,{slotContent:e.state.footer,props:e})})]}),P={header:w,structure:y},S=({directives:e})=>t.jsx("div",{...d([n,"modal-backdrop"],e.backdropDirective)}),C=e=>{const{fullscreen:o}=e.state;return t.jsx("div",{...d([n,"modal d-block"],e.directives.modalDirective),children:t.jsx("div",{className:u("modal-dialog",{"modal-fullscreen":o}),children:t.jsx("div",{className:"modal-content",children:t.jsx(s,{slotContent:e.state.structure,props:e})})})})},F=i.forwardRef(function(o,r){const a=f(B,o,"modal",P);return i.useImperativeHandle(r,()=>a.api,[]),t.jsxs(N,{container:a.state.container,children:[!a.state.backdropHidden&&t.jsx(S,{...a}),!a.state.hidden&&t.jsx(C,{...a})]})});async function G(e){const o=m.createRoot(document.createElement("div"));try{return await(await new Promise(a=>{o.render(t.jsx(F,{...e,ref:a}))})).open()}finally{o.unmount()}}export{F as M,z as a,A as e,G as o};