import{j as e,r as f}from"./index-BjtocQEC.js";import{w as s}from"./func-BRtNsj1u.js";import{u as v}from"./widget-_uZ3LlCT.js";import{c as h,a as u}from"./collapse-hyOmdecH.js";import{u as o}from"./stores-0M5MgD8w.js";import{u as k}from"./directive-DUa5cKFs.js";import{f as x}from"./fade-Z0oyjVmj.js";import{c as N}from"./baseTransitions-QIJg34my.js";import"./stores-m8eykaCI.js";import"./cssTransitions-b4jo4tZj.js";import"./promise-DMV7Hn63.js";import"./dom-Hs1W5kAC.js";import"./simpleClassTransition-DHD_E3eD.js";import"./writables-BNxSaSLV.js";const l=s(h),m=s(!0),d=s(!1),y=s(!0),p=s(!0),C=()=>{const n=o(l),a=o(m),b=o(d),c=o(p),[t,i]=v(N,{},{props:{transition:l,animated:m,animatedOnInit:d,visible:y}}),g=k(i.directives.directive),r=j=>{i.api.toggle(!1,!1),p.set(!0),l.set(j)};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"transition-inner",children:[e.jsx("div",{className:"h6 mt-2",children:"Transition:"}),e.jsxs("div",{className:"d-flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",className:`btn btn-sm btn-outline-secondary ${n===h?"active":""}`,onClick:()=>r(h),children:"Vertical collapse"}),e.jsx("button",{type:"button",className:`btn btn-sm btn-outline-secondary ${n===u?"active":""}`,onClick:()=>r(u),children:"Horizontal collapse"}),e.jsx("button",{type:"button",className:`btn btn-sm btn-outline-secondary ${n===x?"active":""}`,onClick:()=>r(x),children:"Fade"})]}),e.jsx("div",{className:"h6 mt-2",children:"Other properties:"}),e.jsxs("label",{className:"form-check",children:[e.jsx("input",{type:"checkbox",className:"form-check-input",checked:a,onChange:()=>m.set(!a)}),"Animated"]}),e.jsxs("label",{className:"form-check",children:[e.jsx("input",{type:"checkbox",className:"form-check-input",checked:b,onChange:()=>d.set(!b)}),"Animated on init"]}),e.jsxs("label",{className:"form-check",children:[e.jsx("input",{type:"checkbox",className:"form-check-input",checked:c,onChange:()=>p.set(!c)}),"Remove from DOM"]}),e.jsxs("label",{className:"form-check mb-2",children:[e.jsx("input",{type:"checkbox",className:"form-check-input",checked:t.visible,onChange:()=>i.patch({visible:!t.visible})}),"Visible"]}),e.jsxs("div",{className:"d-flex flex-wrap gap-2",children:[e.jsx("button",{type:"button",className:"btn btn-outline-primary",onClick:()=>i.api.toggle(),children:"Toggle"}),e.jsx("button",{type:"button",className:"btn btn-outline-primary",onClick:()=>i.api.toggle(void 0,!0),children:"Toggle with animation"}),e.jsx("button",{type:"button",className:"btn btn-outline-primary",onClick:()=>i.api.toggle(void 0,!1),children:"Toggle without animation"})]}),e.jsxs("ul",{className:"mt-2",children:[e.jsxs("li",{children:["visible = ",t.visible+""]}),e.jsxs("li",{children:["transitioning = ",t.transitioning+""]}),e.jsxs("li",{children:["shown = ",t.shown+""]}),e.jsxs("li",{children:["hidden = ",t.hidden+""]})]}),c&&t.hidden?null:e.jsx("div",{ref:g,style:{maxWidth:"300px"},children:e.jsx("div",{className:"card",style:{width:"300px"},children:e.jsx("div",{className:"card-body",children:"You can collapse this card by clicking Toggle"})})})]})})},T=C,M=()=>{const[n,a]=f.useState(!0);return e.jsxs("div",{className:"demo-transition mb-3",children:[e.jsx("button",{id:"toggle-component",className:"btn btn-outline-secondary",onClick:()=>a(!n),children:"Toggle component"}),n&&e.jsx(T,{})]})};export{M as default};
