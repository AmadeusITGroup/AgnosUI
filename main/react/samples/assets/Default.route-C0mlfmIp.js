import{j as e,r as x}from"./App-XNADZBio.js";import{c as o}from"./index-Dx-ylbPs.js";import{u as c}from"./config-DQAExDHC.js";import{u as n}from"./directive-CX0hxCpP-BC0sPI_1.js";import{c as l}from"./index-Bh3NuAq4.js";import"./writables-DoU_XYTX-DoV7pQAs.js";import"./stores-B4F_j8QF.js";import"./directive-BdyRzOoi.js";import"./widget-DAs9_HQ1-DwZAIgDx.js";import"./stores-B8YEDwZq-C-BlpjsT.js";function i(r){const[s,a]=c(o,r,"progressbar"),t=n(a.directives.ariaDirective);return e.jsx("progress",{ref:t,className:l("progress",s.className),value:s.value,max:s.max})}function m(r){const[s,a]=c(o,r,"progressbar"),t=n(a.directives.ariaDirective),p=x.useMemo(()=>new Intl.NumberFormat("default",{style:"percent",minimumFractionDigits:0,maximumFractionDigits:1}),[]),g={"--thickness":"0.4rem","--value":s.percentage};return e.jsx("div",{ref:t,className:l("radial-progress",s.className),style:g,children:p.format(s.percentage/100)})}const F=()=>e.jsxs(e.Fragment,{children:[e.jsx("h2",{className:"text-lg mb-2",children:"Simple progressbars"}),e.jsx(i,{className:"progress-primary",value:20}),e.jsx(i,{className:"progress-info",value:4,max:5}),e.jsx("h2",{className:"text-lg mt-4 mb-2",children:"Radial progress"}),e.jsxs("div",{className:"flex gap-6",children:[e.jsx(m,{className:"text-primary",min:10,max:20,value:13}),e.jsx(m,{className:"bg-info text-info-content border-4 border-info",min:9,max:20,value:17})]})]});export{F as default};
