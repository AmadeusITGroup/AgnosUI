import{j as e,r as i}from"./App-CsOkU7k8.js";import{u as d}from"./config-B-M_1bYi.js";import{a as c,u as b}from"./directive-CEErjM5c-BVE02Lyt.js";import{a as j}from"./accordion-CoM4efp--DpKTxPhS.js";import{c as a}from"./dom-gfxqXJpK-DnwY-KAj.js";import{c as g}from"./simpleClassTransition-B_OJxQAR.js";import"./stores-lycFhSg7.js";import"./stores-DZalyTTa-Bo8fVQaT.js";import"./baseTransitions-CON7F2UP.js";import"./writables-CgpOQ4hA-RosD9yhs.js";import"./promise-XSP94FjG-DQjR-9Gl.js";import"./widget-CM0nNcys.js";import"./cssTransitions-Dwy5mKIE.js";const l=i.createContext({}),C=t=>{const{api:r,directives:{accordionDirective:o}}=d(j,t);return e.jsx(l,{value:r,children:e.jsx("div",{...c([a,"flex flex-col gap-2"],o),children:t.children})})},n=t=>{const{registerItem:r}=i.useContext(l),o=g({showClasses:["collapse-open"],animationPendingShowClasses:["collapse-open"]}),m=i.useId(),{state:{shouldBeInDOM:h},api:s,directives:{itemDirective:p,transitionDirective:u,toggleDirective:x,bodyContainerAttrsDirective:v}}=d(r,t,{transition:o,id:m});i.useEffect(()=>s.initDone(),[s]);const f=D=>{D.key==="Enter"&&s.toggle()};return e.jsxs("div",{...c([a,"collapse collapse-arrow bg-base-100 border border-base-300 has-[:focus-visible]:ring"],p,u),children:[e.jsx("div",{role:"button",tabIndex:0,...c([a,"collapse-title font-semibold focus-visible:outline-hidden"],x),onKeyDown:f,children:t.header}),e.jsx("div",{className:"collapse-content text-sm",...b(v),children:h&&t.children})]})},M=()=>e.jsxs(C,{closeOthers:!0,itemDestroyOnHide:!0,children:[e.jsx(n,{header:"First header",visible:!0,children:"First content"}),e.jsx(n,{header:"Second header",children:"Second content"}),e.jsx(n,{header:"Third header",children:"Third content"})]});export{M as default};
