import{c as n,j as o}from"./App-D2FAakDZ.js";import{u as c}from"./config-CX1h717Z.js";import{u as s}from"./directive-Kqp31pwt-o0igtPiy.js";import{c as a}from"./modal-CeTI4jxI-GRmunsqm.js";import"./directive-3-8yr-ZK-C5h7Dwqe.js";import"./widget-DAs9_HQ1-B1NkVbjP.js";import"./stores-B8YEDwZq-CVwKZ0x1.js";import"./writables-DoU_XYTX-8sqxFTfY.js";import"./baseTransitions-DgRqyQuv.js";import"./promise-CY2U8bTP-2vXpUa_S.js";const r=({widget:e})=>o.jsx("form",{method:"dialog",children:o.jsx("button",{className:"btn btn-sm btn-circle btn-ghost absolute right-2 top-2",...s(e.directives.closeButtonDirective),children:"✕"})});function d(e){const[i,t]=c(a,e,"modal",{closeButton:!0});return o.jsxs("dialog",{className:"modal modal-bottom sm:modal-middle",onClose:t.api.close,...s(t.directives.dialogDirective),children:[o.jsxs("div",{className:"modal-box",children:[e.children,i.closeButton&&o.jsx(r,{widget:t})]}),e.closeOnOutsideClick&&o.jsx("form",{method:"dialog",className:"modal-backdrop",children:o.jsx("button",{onClick:t.api.close,children:"Close"})})]})}async function m(e){const i=document.createElement("div"),t=n.createRoot(i);try{document.body.append(i),await new Promise(l=>{t.render(o.jsx(d,{...e,visible:!0,onVisibleChange:()=>l()}))}),i.remove()}finally{t.unmount()}}const k=()=>o.jsx("button",{className:"btn","aria-haspopup":"dialog",onClick:()=>m({closeOnOutsideClick:!0,children:o.jsxs(o.Fragment,{children:[o.jsx("h3",{className:"font-bold text-lg",children:"A simple modal"}),o.jsx("p",{className:"py-4",children:"Press ESC key, click on ✕ button or click outside the modal to close"})]})}),children:"Open modal"});export{k as default};
