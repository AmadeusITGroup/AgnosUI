import{R as n,j as o}from"./App-CsOkU7k8.js";import{u as a}from"./config-B-M_1bYi.js";import{u as i}from"./directive-CEErjM5c-BVE02Lyt.js";import{c}from"./modal-D3wGIDlj-aZ_R0huJ.js";import"./stores-lycFhSg7.js";import"./dom-gfxqXJpK-DnwY-KAj.js";import"./stores-DZalyTTa-Bo8fVQaT.js";import"./writables-CgpOQ4hA-RosD9yhs.js";import"./baseTransitions-CON7F2UP.js";import"./promise-XSP94FjG-DQjR-9Gl.js";import"./widget-CM0nNcys.js";const r=({directives:e})=>o.jsx("form",{method:"dialog",children:o.jsx("button",{className:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2",...i(e.closeButtonDirective),children:"✕"})});function d(e){const{state:t,api:s,directives:l}=a(c,e,{closeButton:!0});return o.jsxs("dialog",{className:"modal modal-bottom sm:modal-middle",onClose:s.close,...i(l.dialogDirective),children:[o.jsxs("div",{className:"modal-box",children:[e.children,t.closeButton&&o.jsx(r,{directives:l})]}),e.closeOnOutsideClick&&o.jsx("form",{method:"dialog",className:"modal-backdrop",children:o.jsx("button",{onClick:s.close,children:"Close"})})]})}async function m(e){const t=document.createElement("div"),s=n.createRoot(t);try{document.body.append(t),await new Promise(l=>{s.render(o.jsx(d,{...e,visible:!0,onVisibleChange:()=>l()}))}),t.remove()}finally{s.unmount()}}const N=()=>o.jsx("button",{className:"btn","aria-haspopup":"dialog",onClick:()=>m({closeOnOutsideClick:!0,children:o.jsxs(o.Fragment,{children:[o.jsx("h3",{className:"font-bold text-lg",children:"A simple modal"}),o.jsx("p",{className:"py-4",children:"Press ESC key, click on ✕ button or click outside the modal to close"})]})}),children:"Open modal"});export{N as default};
