import{j as e}from"./App-C7lISzaa.js";import{u as s}from"./directive-DNXkB1Wc-xckYM9og.js";import{c as a}from"./baseTransitions-DL6kGSv2.js";import{c as o}from"./simpleClassTransition-CEh8zDAi.js";import"./directive-CKEccryv-BEge1hNH.js";import"./writables-DCiBdIBK-B6teIxy4.js";import"./promise-CY2U8bTP-COOyouyK.js";import"./cssTransitions-AlfUkfjs.js";const l=i=>{const t=a({props:{visible:!1,transition:o({}),onShown:()=>{var n;return(n=i.onShown)==null?void 0:n.call(i)},onHidden:()=>{var n;return(n=i.onHidden)==null?void 0:n.call(i)}}});return e.jsx(e.Fragment,{children:e.jsxs("div",{tabIndex:0,className:"collapse bg-base-200",...s(t.directives.directive),onBlur:()=>t.api.hide(),onFocus:()=>t.api.show(),children:[e.jsx("div",{className:"collapse-title font-medium text-xl",children:i.title??"Focus me to see content"}),e.jsx("div",{className:"collapse-content",children:i.children})]})})},f=()=>e.jsx(e.Fragment,{children:e.jsx(l,{onHidden:()=>console.log("Hidden"),children:e.jsx("p",{children:"tabindex necessary is already put"})})});export{f as default};
