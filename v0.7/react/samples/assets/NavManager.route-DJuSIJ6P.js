import{j as e,r as i}from"./App-C7lISzaa.js";import{c as n}from"./navManager-Diwp7rjP.js";import{u as r}from"./directive-DNXkB1Wc-xckYM9og.js";import"./directive-CKEccryv-BEge1hNH.js";const o=({text:s})=>{const t=i.useMemo(n,[]),a=i.useMemo(()=>({keys:{ArrowLeft:t.focusLeft,ArrowRight:t.focusRight,Home:t.focusFirst,End:t.focusLast,"Meta+ArrowLeft":t.focusFirstLeft,"Meta+ArrowRight":t.focusFirstRight}}),[t]);return e.jsxs("div",{className:"d-flex demo-navmanager-line",children:[e.jsx("input",{type:"text",defaultValue:s,className:"form-control me-1",...r(t.directive,a)}),e.jsx("span",{tabIndex:-1,className:"form-control w-auto me-1",...r(t.directive,a),children:s}),e.jsx("input",{tabIndex:-1,type:"checkbox",className:"form-check-input align-self-center me-1",...r(t.directive,a)}),e.jsx("input",{tabIndex:-1,type:"text",defaultValue:s,disabled:!0,className:"form-control me-1",...r(t.directive,a)}),e.jsx("input",{tabIndex:-1,type:"text",defaultValue:s,className:"form-control me-1",...r(t.directive,a)})]})},f=()=>e.jsxs("div",{className:"demo-navmanager",children:[e.jsxs("div",{dir:"ltr",className:"mt-3 pb-3",children:[e.jsx("h2",{children:"Left-to-right"}),e.jsx(o,{text:"Hello"})]}),e.jsxs("div",{dir:"rtl",className:"mt-3 pb-3",children:[e.jsx("h2",{children:"Right-to-left"}),e.jsx(o,{text:"שָׁלוֹם"})]})]});export{f as default};
