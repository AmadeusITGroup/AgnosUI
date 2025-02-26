import{j as e}from"./App-AO0jOhRY.js";import{u as c}from"./config-C430Xqyb.js";import{u as o}from"./directive-CEErjM5c-iSrC3_Et.js";import{c as d}from"./clsx-B-dksMZM.js";import{c as h}from"./tree-DWv0zwFJ-R1ms8U6o.js";import"./dom-BB9jLllr-Cs0LnZpg.js";import"./widget-6VfcHB3W-CgJr_aqi.js";import"./stores-BWu8V2zY.js";import"./stores-DtfLvXAE-D27zrrdx.js";import"./navManager-MQGcSt_A.js";import"./writables-DCiBdIBK-DMDym_DM.js";function p(r){const{state:s,directives:{navigationDirective:l,itemToggleDirective:n}}=c(h,r,"tree");return e.jsx("ul",{role:"tree",className:d("bg-base-200","rounded-lg","menu","w-[300px]",s.className),...o(l),children:s.normalizedNodes.map((t,i)=>e.jsx(a,{state:s,item:t,itemToggleDirective:n},t.label+t.level+i))})}const m=()=>e.jsx("span",{className:"ms-auto",children:e.jsx("svg",{className:"stroke-base-content transition transform delay-0 duration-300 [.au-tree-expand-icon.au-tree-expand-icon-expanded>span>&]:rotate-180",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 10 10",children:e.jsx("path",{d:"M1 2 L5 7 L9 2",strokeWidth:"2",fill:"none"})})}),a=({state:r,item:s,itemToggleDirective:l})=>e.jsxs("li",{role:"treeitem",children:[e.jsxs("span",{className:"flex flex-wrap items-center",...o(l,{item:s}),children:[e.jsx("span",{className:"me-1",children:e.jsx(x,{item:s})}),e.jsxs("span",{children:[" ",s.label]}),s.children.length>0&&e.jsx(m,{})]}),r.expandedMap.get(s)&&e.jsx("ul",{role:"group",children:s.children.map((n,t)=>e.jsx(a,{state:r,item:n,itemToggleDirective:l},n.label+n.level+t))})]}),x=({item:r})=>{let s;return r.children.length>0?s=e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-4 w-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"})}):r.label.includes(".pdf")?s=e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-4 w-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"})}):r.label.includes(".png")?s=e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-4 w-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"})}):s=e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:"1.5",stroke:"currentColor",className:"h-4 w-4",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"})}),e.jsx(e.Fragment,{children:s})},M=()=>{const r=l=>l.querySelectorAll("span.au-tree-expand-icon"),s=[{label:"resume.pdf"},{label:"My Files",isExpanded:!0,children:[{label:"Project-final.psd"},{label:"Project-final-2.psd"},{label:"Images",children:[{label:"Screenshot1.png"},{label:"Screenshot2.png"},{label:"Others",children:[{label:"Screenshot3.png"}]}]}]},{label:"reports-final-2.pdf"}];return e.jsx("div",{className:"flex justify-center",children:e.jsx(p,{nodes:s,navSelector:r})})};export{M as default};
