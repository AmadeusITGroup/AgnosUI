import{j as e}from"./App-AO0jOhRY.js";import{u as o}from"./directive-CEErjM5c-iSrC3_Et.js";import{c as s}from"./baseTransitions-CPg3mhjR.js";import{c as a}from"./simpleClassTransition-wtax_42w.js";import"./dom-BB9jLllr-Cs0LnZpg.js";import"./writables-DCiBdIBK-DMDym_DM.js";import"./stores-BWu8V2zY.js";import"./promise-CBh_HbSK-DvaGkPJc.js";import"./cssTransitions-gJySKltD.js";const r=i=>{const t=s({props:{visible:!1,transition:a({}),onShown:()=>{var n;return(n=i.onShown)==null?void 0:n.call(i)},onHidden:()=>{var n;return(n=i.onHidden)==null?void 0:n.call(i)}}});return e.jsx(e.Fragment,{children:e.jsxs("div",{tabIndex:0,className:"collapse collapse-arrow bg-base-100 border border-base-300",...o(t.directives.directive),onBlur:()=>t.api.hide(),onFocus:()=>t.api.show(),children:[e.jsx("div",{className:"collapse-title font-semibold",children:i.title??"Focus me to see content"}),e.jsx("div",{className:"collapse-content",children:i.children})]})})},f=()=>e.jsx(e.Fragment,{children:e.jsx(r,{onHidden:()=>console.log("Hidden"),children:e.jsx("p",{children:"tabindex necessary is already put"})})});export{f as default};
