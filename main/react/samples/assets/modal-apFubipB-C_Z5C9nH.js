import{b as i,j as t,r as c,R as l}from"./App-DlBo9mGL.js";import{S as s}from"./slot-odLDIc4J.js";import{a as r,u as m}from"./directive-CEErjM5c-CCswFnR1.js";import{c as u}from"./clsx-B-dksMZM.js";import{u as f}from"./config-E2EdVN2z.js";import{c as p,m as j,a as x}from"./modal-CYBg4zXu-BS0dNPDS.js";import{f as o}from"./fade-uOobJKgw-DWhX-frm.js";import{e as h}from"./extendWidget-Cn88CU8Q.js";import{t as v}from"./writables-DCiBdIBK-0-aBPFP1.js";import{c as n}from"./stores-DX-ADOKq-MSAn3urh.js";const D={contentData:void 0,children:void 0,footer:void 0,header:void 0,structure:void 0,title:void 0,fullscreen:!1},g={backdropTransition:o,modalTransition:o},k={fullscreen:v,contentData:void 0,children:void 0,footer:void 0,header:void 0,structure:void 0,title:void 0},M=h(p,D,k,g),b=({children:e,container:a})=>a?i.createPortal(e,a):t.jsx(t.Fragment,{children:e}),B=M,q=j,z=x,E=({directive:e})=>t.jsx("button",{className:"btn-close",...m(e)}),N=e=>t.jsxs(t.Fragment,{children:[t.jsx("h5",{className:"modal-title",children:t.jsx(s,{slotContent:e.state.title,props:e})}),e.state.closeButton&&t.jsx(E,{directive:e.directives.closeButtonDirective})]}),y=e=>t.jsxs(t.Fragment,{children:[e.state.title&&t.jsx("div",{className:"modal-header",children:t.jsx(s,{slotContent:e.state.header,props:e})}),t.jsx("div",{className:"modal-body",children:t.jsx(s,{slotContent:e.state.children,props:e})}),e.state.footer&&t.jsx("div",{className:"modal-footer",children:t.jsx(s,{slotContent:e.state.footer,props:e})})]}),P=({directives:e})=>t.jsx("div",{...r([n,"modal-backdrop"],e.backdropDirective)}),S=e=>{const{fullscreen:a}=e.state;return t.jsx("div",{...r([n,"modal d-block"],e.directives.modalDirective),children:t.jsx("div",{className:u("modal-dialog",{"modal-fullscreen":a}),children:t.jsx("div",{className:"modal-content",children:t.jsx(s,{slotContent:e.state.structure,props:e})})})})};function w(e){const a=f(B,e,"modal",{header:N,structure:y});return c.useImperativeHandle(e.ref,()=>a.api,[a.api]),t.jsxs(b,{container:a.state.container,children:[!a.state.backdropHidden&&t.jsx(P,{...a}),!a.state.hidden&&t.jsx(S,{...a})]})}async function A(e){const a=l.createRoot(document.createElement("div"));try{return await(await new Promise(d=>{a.render(t.jsx(w,{...e,ref:d}))})).open()}finally{a.unmount()}}export{w as M,q as a,z as e,A as o};
