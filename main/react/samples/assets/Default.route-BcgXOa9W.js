import{j as e,r as i}from"./App-Z_OzLO2G.js";import{u as d}from"./config-Ba5gJYUu.js";import{a as c,u as b}from"./directive-CEErjM5c-DVieIczM.js";import{a as g}from"./accordion-BLVIYePx-B1k2qh4p.js";import{c as a}from"./dom-gfxqXJpK-DnwY-KAj.js";import{c as j}from"./simpleClassTransition-B_OJxQAR.js";import"./widget-BP6z-zfB-gtoCYGER.js";import"./stores-CNc_rSPE.js";import"./stores-DZalyTTa-CmJXqD-S.js";import"./baseTransitions-CYkbZi0o.js";import"./writables-CgpOQ4hA-Cd7Z63K9.js";import"./promise-XSP94FjG-DQjR-9Gl.js";import"./cssTransitions-Dwy5mKIE.js";const l=i.createContext({}),C=t=>{const{api:o,directives:{accordionDirective:r}}=d(g,t,"accordion");return e.jsx(l,{value:o,children:e.jsx("div",{...c([a,"flex flex-col gap-2"],r),children:t.children})})},n=t=>{const{registerItem:o}=i.useContext(l),r=j({showClasses:["collapse-open"],animationPendingShowClasses:["collapse-open"]}),m=i.useId(),{state:{shouldBeInDOM:h},api:s,directives:{itemDirective:p,transitionDirective:u,toggleDirective:x,bodyContainerAttrsDirective:v}}=d(o,t,null,{transition:r,id:m});i.useEffect(()=>s.initDone(),[s]);const f=D=>{D.key==="Enter"&&s.toggle()};return e.jsxs("div",{...c([a,"collapse collapse-arrow bg-base-100 border border-base-300 has-[:focus-visible]:ring"],p,u),children:[e.jsx("div",{role:"button",tabIndex:0,...c([a,"collapse-title font-semibold focus-visible:outline-hidden"],x),onKeyDown:f,children:t.header}),e.jsx("div",{className:"collapse-content text-sm",...b(v),children:h&&t.children})]})},K=()=>e.jsxs(C,{closeOthers:!0,itemDestroyOnHide:!0,children:[e.jsx(n,{header:"First header",visible:!0,children:"First content"}),e.jsx(n,{header:"Second header",children:"Second content"}),e.jsx(n,{header:"Third header",children:"Third content"})]});export{K as default};
