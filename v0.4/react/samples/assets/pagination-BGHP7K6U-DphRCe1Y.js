import{r as d,j as s}from"./App-D2FAakDZ.js";import{u as h,S as n}from"./config-87LujZOd.js";import{c as o}from"./index-D735YuCH.js";import{a as p}from"./directive-Kqp31pwt-o0igtPiy.js";import{c as j}from"./pageFactory-C8ZmJXYi-Stx5Iv_l.js";import{c,t as v}from"./directive-3-8yr-ZK-C5h7Dwqe.js";const g=d.forwardRef(({disabled:i,active:t,activeLabel:e,className:r,children:a,directive:u,page:m},x)=>s.jsx("li",{ref:x,className:o("page-item",{active:t,disabled:i}),children:s.jsxs("a",{...p([u,{page:m}],[c,o("page-link",r)]),children:[a,t&&e&&s.jsx("span",{className:"visually-hidden",children:e})]})}));g.displayName="PageItem";const l=d.forwardRef(({disabled:i,className:t,children:e,directive:r},a)=>s.jsx("li",{ref:a,className:o("page-item",{disabled:i}),children:s.jsx("a",{...p(r,[c,o("page-link",t)]),children:s.jsx("span",{"aria-hidden":"true",children:e})})}));l.displayName="NavButton";const f=j;function b(i){const{widget:t,state:e}=i,r=[];for(let a=0;a<e.pages.length;a++)e.pages[a]===-1?r.push(s.jsxs("li",{className:"page-item disabled",children:[s.jsx("div",{className:"page-link au-ellipsis","aria-hidden":"true",children:s.jsx(n,{slotContent:e.slotEllipsis,props:i})}),s.jsx("span",{className:"visually-hidden",children:e.ariaEllipsisLabel})]},"Ellipsis"+a)):r.push(s.jsx(g,{disabled:e.disabled,active:e.pages[a]===e.page,activeLabel:e.activeLabel,directive:t.directives.pageLink,page:e.pages[a],children:s.jsx(n,{slotContent:e.slotNumberLabel,props:{...i,displayedPage:e.pages[a]}})},e.pages[a]));return r.length?s.jsx(s.Fragment,{children:r}):null}const N={slotPages:b,slotStructure:L};function L(i){const{widget:t,state:e}=i,r=[],a=[];return e.boundaryLinks&&r.push(s.jsx(l,{disabled:e.previousDisabled,directive:t.directives.pageFirst,children:s.jsx(n,{slotContent:e.slotFirst,props:i})},"first")),e.directionLinks&&r.push(s.jsx(l,{disabled:e.previousDisabled,directive:t.directives.pagePrev,children:s.jsx(n,{slotContent:e.slotPrevious,props:i})},"prev")),e.directionLinks&&a.push(s.jsx(l,{disabled:e.nextDisabled,directive:t.directives.pageNext,children:s.jsx(n,{slotContent:e.slotNext,props:i})},"next")),e.boundaryLinks&&a.push(s.jsx(l,{disabled:e.nextDisabled,directive:t.directives.pageLast,children:s.jsx(n,{slotContent:e.slotLast,props:i})},"last")),s.jsxs(s.Fragment,{children:[s.jsxs("ul",{className:o("au-pagination","pagination",{[`pagination-${e.size}`]:!!e.size},e.className),children:[r,s.jsx(n,{slotContent:e.slotPages,props:i}),a]}),s.jsx("div",{"aria-live":"polite",className:"visually-hidden",children:`${e.ariaLiveLabelText}`})]})}function C(i){const[t,e]=h(f,i,"pagination",N),r={state:t,widget:v(e)};return s.jsx("nav",{"aria-label":t.ariaLabel,children:s.jsx(n,{slotContent:t.slotStructure,props:r})})}export{C as P};
