import{r as o,j as e}from"./index-DU6YK2Sv.js";import{R as c}from"./rating-Cvx0qvXU.js";import"./rating-B9mGxnQ6.js";import"./rating-DLkiqepK.js";import"./func-BRtNsj1u.js";import"./stores-aWURyaCH.js";import"./writables-CLHVz3oO.js";import"./config-CEpwxNPi.js";import"./widget-Bl97d6TM.js";const g=()=>{const[a,r]=o.useState({value:0,valid:!1,invalid:!0,disabled:!1});function s(l){const i=l.value??a.value,t=!(l.disabled??a.disabled),n=i>=1,d={...a,...l,value:i,valid:t&&n,invalid:t&&!n};r(d)}return e.jsxs(e.Fragment,{children:[e.jsx("label",{className:"form-label",id:"ratingLabel",children:"Rating of your experience"}),e.jsx("br",{}),e.jsx(c,{rating:a.value,disabled:a.disabled,onRatingChange:l=>s({value:l}),ariaLabelledBy:"ratingLabel"}),e.jsxs("div",{id:"form-msg",className:"form-text small",children:[a.valid&&e.jsx("div",{className:"text-success",children:"Thanks!"}),a.invalid&&e.jsx("div",{className:"text-danger-emphasis",children:"Please rate us"})]}),e.jsxs("pre",{children:["Model:"," ",e.jsx("span",{id:"form-model",children:e.jsx("b",{children:a.value})})]}),e.jsx("button",{id:"form-btn-enable",className:`btn btn-sm btn-outline-${a.disabled?"danger":"success"} me-2`,onClick:()=>s({disabled:!a.disabled}),children:a.disabled?"control disabled":" control enabled"})," ",e.jsx("button",{id:"form-btn-clear",className:"btn btn-sm btn-outline-primary me-2",onClick:()=>s({value:0}),children:"Clear"})]})};export{g as default};
