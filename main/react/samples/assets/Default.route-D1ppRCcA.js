import{j as a}from"./App-CsOkU7k8.js";import{u as b}from"./config-B-M_1bYi.js";import{c as s}from"./clsx-B-dksMZM.js";import{c}from"./pagination-B97wBLok-CjYdHjky.js";import"./stores-lycFhSg7.js";import"./dom-gfxqXJpK-DnwY-KAj.js";import"./stores-DZalyTTa-Bo8fVQaT.js";import"./writables-CgpOQ4hA-RosD9yhs.js";import"./widget-CM0nNcys.js";function x(n){const{state:i,api:{first:r,last:d,next:t,previous:l,select:o}}=b(c,n);return a.jsxs("nav",{"aria-label":i.ariaLabel,children:[a.jsxs("div",{className:s("join",i.className),children:[i.boundaryLinks&&a.jsx("button",{className:"join-item btn","aria-label":i.ariaFirstLabel,onClick:()=>r(),disabled:i.previousDisabled,"aria-disabled":i.previousDisabled?"true":void 0,tabIndex:i.previousDisabled?-1:void 0,children:a.jsx("span",{"aria-hidden":"true",children:" « "})}),i.directionLinks&&a.jsx("button",{className:"join-item btn",disabled:i.previousDisabled,"aria-label":i.ariaPreviousLabel,onClick:()=>l(),tabIndex:i.previousDisabled?-1:void 0,"aria-disabled":i.previousDisabled?"true":void 0,children:a.jsx("span",{"aria-hidden":"true",children:" ‹ "})}),i.pages.map(e=>a.jsxs("button",{className:s("join-item","btn",e===i.page&&"btn-active"),"aria-current":e===i.page?"page":void 0,tabIndex:e===-1||i.disabled?-1:void 0,onClick:e===-1?()=>{}:()=>o(e),disabled:e===-1||i.disabled,children:[e,i.page===e&&a.jsx("span",{className:"sr-only",children:i.activeLabel})]},e)),i.directionLinks&&a.jsx("button",{className:"join-item btn",disabled:i.nextDisabled,"aria-label":i.ariaNextLabel,onClick:()=>t(),tabIndex:i.nextDisabled?-1:void 0,"aria-disabled":i.nextDisabled?"true":void 0,children:a.jsx("span",{"aria-hidden":"true",children:" › "})}),i.boundaryLinks&&a.jsx("button",{className:"join-item btn","aria-label":i.ariaLastLabel,onClick:()=>d(),disabled:i.nextDisabled,tabIndex:i.nextDisabled?-1:void 0,"aria-disabled":i.nextDisabled?"true":void 0,children:a.jsx("span",{"aria-hidden":"true",children:" » "})})]}),a.jsx("div",{"aria-live":"polite",className:"sr-only",children:`${i.ariaLiveLabelText}`})]})}const N=()=>a.jsx(a.Fragment,{children:a.jsx(x,{collectionSize:40,boundaryLinks:!0})});export{N as default};
