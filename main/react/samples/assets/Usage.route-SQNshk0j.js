import{r as n,j as e}from"./App-AO0jOhRY.js";import{b as i}from"./dom-BB9jLllr-Cs0LnZpg.js";import{u as c}from"./directive-CEErjM5c-iSrC3_Et.js";const a=i((t,s)=>{console.log("Directive has been executed on node ",t.id);const r=o=>{console.log(s,o.target)};return t.addEventListener("click",r),{update:o=>s=o,destroy:()=>{t.removeEventListener("click",r),console.log("Destroy function executed ",t.id)}}}),x=()=>{const[t,s]=n.useState("focus element clicked");return e.jsxs(e.Fragment,{children:[e.jsxs("div",{...c(a,t),children:[e.jsx("button",{className:"btn btn-primary",id:"test",children:"button 1"}),e.jsx("button",{className:"btn btn-primary",id:"test2",children:"button 2"})]}),e.jsx("hr",{}),e.jsx("input",{className:"form-control",id:"clickText",type:"text",defaultValue:t,"aria-label":"text input to configure the directive",onChange:r=>s(r.target.value)}),e.jsx("hr",{}),e.jsx("span",{children:"(Open the console to see the outputs)"})]})};export{x as default};
