import{j as e}from"./index-6fb31137.js";import{h as x,S as u}from"./index-99b84c20.js";import{t as b}from"./types-d19cbc41.js";import{u as j}from"./config-16628da2.js";import{u as d}from"./utils-cf5517f1.js";function w(t){t.preventDefault()}function v(t){return e.jsx(e.Fragment,{children:""+t.itemContext.item})}function I(t){return e.jsx(e.Fragment,{children:""+t.itemContext.item})}function C({slotContext:t}){const o=[],s=t.state;for(const a of t.state.selectedContexts)o.push(e.jsx("div",{className:`au-select-badge me-1 ${s.badgeClassName}`,children:e.jsx(u,{slotContent:s.slotBadgeLabel,props:{...t,itemContext:a}})},a.id));return o.length?e.jsx(e.Fragment,{children:o}):null}function N({slotContext:t}){const{widget:o,state:s}=t,a=s.highlighted;return e.jsx(e.Fragment,{children:s.visibleItems.map(n=>{const{id:r}=n,i=["au-select-item dropdown-item position-relative"];return n===a&&i.push("bg-light"),n.selected&&i.push("selected"),e.jsx("li",{className:i.join(" "),onClick:()=>o.api.toggleItem(n.item),children:e.jsx(u,{slotContent:s.slotItem,props:{...t,itemContext:n}})},r)})})}const D={slotBadgeLabel:v,slotItem:I};function W(t){const[o,s]=j(x,t,"select",D),a={state:o,widget:b(s)},{id:n,ariaLabel:r,visibleItems:i,filterText:m,open:l,className:p,menuClassName:f}=o,{directives:{hasFocusDirective:c}}=s,g=d(c),h=d(c);return e.jsxs("div",{className:`au-select dropdown border border-1 p-1 mb-3 d-block ${p}`,children:[e.jsxs("div",{ref:g,role:"combobox",className:"d-flex align-items-center flex-wrap","aria-haspopup":"listbox","aria-expanded":l,children:[e.jsx(C,{slotContext:a}),e.jsx("input",{id:n,"aria-label":r,className:"au-select-input flex-grow-1 border-0",type:"text",value:m,"aria-autocomplete":"list",autoCorrect:"off",autoCapitalize:"none",autoComplete:"off",onKeyDown:s.actions.onInputKeydown,onInput:s.actions.onInput})]}),l&&i.length>0&&e.jsx("ul",{ref:h,className:`dropdown-menu show ${f}`,"data-popper-placement":"bottom-start","data-bs-popper":"static",onMouseDown:w,children:e.jsx(N,{slotContext:a})})]})}export{W as S};
