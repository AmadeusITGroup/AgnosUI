import{j as e,r as o}from"./App-DHhP8U0X.js";import{c as d}from"./navManager-oDtklvoR.js";import{u as s}from"./directive-CX0hxCpP-DoRNka9I.js";import"./func-DR0n-ShK-BRtNsj1u.js";import"./dom-B9Oy3i4s-Hs1W5kAC.js";const i=({text:a})=>{const t=o.useMemo(d,[]),r=o.useMemo(()=>({keys:{ArrowLeft:t.focusLeft,ArrowRight:t.focusRight,Home:t.focusFirst,End:t.focusLast,"Meta+ArrowLeft":t.focusFirstLeft,"Meta+ArrowRight":t.focusFirstRight}}),[t]),n=s(t.directive,r),c=s(t.directive,r),m=s(t.directive,r),l=s(t.directive,r),f=s(t.directive,r);return e.jsxs("div",{className:"d-flex demo-navmanager-line",children:[e.jsx("input",{ref:n,type:"text",defaultValue:a,className:"form-control me-1"}),e.jsx("span",{ref:c,tabIndex:-1,className:"form-control w-auto me-1",children:a}),e.jsx("input",{ref:m,tabIndex:-1,type:"checkbox",className:"form-check-input align-self-center me-1"}),e.jsx("input",{ref:l,tabIndex:-1,type:"text",defaultValue:a,disabled:!0,className:"form-control me-1"}),e.jsx("input",{ref:f,tabIndex:-1,type:"text",defaultValue:a,className:"form-control me-1"})]})},g=()=>e.jsxs("div",{className:"demo-navmanager",children:[e.jsxs("div",{dir:"ltr",className:"mt-3 pb-3",children:[e.jsx("h2",{children:"Left-to-right"}),e.jsx(i,{text:"Hello"})]}),e.jsxs("div",{dir:"rtl",className:"mt-3 pb-3",children:[e.jsx("h2",{children:"Right-to-left"}),e.jsx(i,{text:"שָׁלוֹם"})]})]});export{g as default};
