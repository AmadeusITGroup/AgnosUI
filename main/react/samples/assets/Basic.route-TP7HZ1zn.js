import{j as r}from"./App-BipCQRdI.js";import{S as s}from"./slot-85VGLfmL.js";import{u as l}from"./directive-CEErjM5c-CRdN9CRF.js";import{u as m}from"./config-XWAEQJj1.js";import{c}from"./tree-C_goOyCv-BrRm5_bS.js";import{e as p}from"./extendWidget-DI7ZkDcv.js";import{c as u}from"./clsx-B-dksMZM.js";import"./dom-gfxqXJpK-C1tLMV8i.js";import"./config-CavktGoz.js";import"./widget-BP6z-zfB-Dyo7sKuE.js";import"./stores-DmFkKWJa.js";import"./stores-DZalyTTa-BThqti7y.js";import"./navManager-KYKbUJxU.js";import"./writables-DCiBdIBK-BiZSR1O4.js";const d={structure:void 0,item:void 0,itemContent:void 0,itemToggle:void 0},g=p(c,d,{structure:void 0,item:void 0,itemContent:void 0,itemToggle:void 0}),x=g,v=({directive:e,item:t})=>r.jsx("button",{...l(e,{item:t}),children:r.jsx("span",{className:"au-tree-expand-icon-svg"})}),f=e=>{const{directives:t,item:o}=e;return o.children.length>0?r.jsx(v,{directive:t.itemToggleDirective,item:o}):r.jsx("span",{className:"au-tree-expand-icon-placeholder"})},j=e=>{const{state:t,item:o}=e;return r.jsxs("span",{className:"au-tree-item",children:[r.jsx(s,{slotContent:t.itemToggle,props:{...e}}),o.label]})},T=e=>{const{state:t,directives:o,item:i}=e;return r.jsxs("li",{...l(o.itemAttributesDirective,{item:i}),children:[r.jsx(s,{slotContent:t.itemContent,props:{...e,item:i}}),t.expandedMap.get(i)&&r.jsx("ul",{role:"group",children:i.children.map((n,a)=>r.jsx(s,{slotContent:t.item,props:{...e,item:n}},n.label+n.level+a))})]})},h=e=>{const{state:t}=e;return r.jsx("ul",{role:"tree",className:u("au-tree",t.className),...l(e.directives.navigationDirective),children:t.normalizedNodes.map((o,i)=>r.jsx(s,{slotContent:t.item,props:{item:o,...e}},o.label+o.level+i))})},N={structure:h,item:T,itemContent:j,itemToggle:f};function b(e){const t=m(x,e,"tree",{...N});return r.jsx(s,{slotContent:t.state.structure,props:t})}const _=()=>{const e=[{label:"Node 1",isExpanded:!0,children:[{label:"Node 1.1",children:[{label:"Node 1.1.1"}]},{label:"Node 1.2",children:[{label:"Node 1.2.1"}]}]}];return r.jsx(b,{nodes:e})};export{_ as default};
