import{r as p,j as s}from"./App-B6FkxJDS.js";import{S as n}from"./slot-Cf_4I5Hr.js";import{c as d}from"./clsx-B-dksMZM.js";import{u as h}from"./config-CcbAHwh-.js";import{a as o}from"./directive-CEErjM5c-BDOTGebN.js";import{c as j}from"./pageFactory-CZZJDqOh-D3BsK2-T.js";import{c}from"./directive-DrDJkTS5-BSYQXut0.js";const g=p.forwardRef(({disabled:a,active:e,activeLabel:r,className:t,children:i,directive:u,page:m},x)=>s.jsx("li",{ref:x,className:d("page-item",{active:e,disabled:a}),children:s.jsxs("a",{...o([u,{page:m}],[c,["page-link",t]]),children:[i,e&&r&&s.jsx("span",{className:"visually-hidden",children:r})]})}));g.displayName="PageItem";const l=p.forwardRef(({disabled:a,className:e,children:r,directive:t},i)=>s.jsx("li",{ref:i,className:d("page-item",{disabled:a}),children:s.jsx("a",{...o(t,[c,["page-link",e]]),children:s.jsx("span",{"aria-hidden":"true",children:r})})}));l.displayName="NavButton";const f=j,v=a=>{const{state:e,directives:r}=a,t=[];for(let i=0;i<e.pages.length;i++)e.pages[i]===-1?t.push(s.jsxs("li",{className:"page-item disabled",children:[s.jsx("div",{className:"page-link au-ellipsis","aria-hidden":"true",children:s.jsx(n,{slotContent:e.ellipsisLabel,props:a})}),s.jsx("span",{className:"visually-hidden",children:e.ariaEllipsisLabel})]},"Ellipsis"+i)):t.push(s.jsx(g,{disabled:e.disabled,active:e.pages[i]===e.page,activeLabel:e.activeLabel,directive:r.pageLink,page:e.pages[i],children:s.jsx(n,{slotContent:e.numberLabel,props:{...a,displayedPage:e.pages[i]}})},e.pages[i]));return t.length?s.jsx(s.Fragment,{children:t}):null},b=a=>{const{state:e,directives:r}=a,t=[],i=[];return e.boundaryLinks&&t.push(s.jsx(l,{disabled:e.previousDisabled,directive:r.pageFirst,children:s.jsx(n,{slotContent:e.firstPageLabel,props:a})},"first")),e.directionLinks&&t.push(s.jsx(l,{disabled:e.previousDisabled,directive:r.pagePrev,children:s.jsx(n,{slotContent:e.previousPageLabel,props:a})},"prev")),e.directionLinks&&i.push(s.jsx(l,{disabled:e.nextDisabled,directive:r.pageNext,children:s.jsx(n,{slotContent:e.nextPageLabel,props:a})},"next")),e.boundaryLinks&&i.push(s.jsx(l,{disabled:e.nextDisabled,directive:r.pageLast,children:s.jsx(n,{slotContent:e.lastPageLabel,props:a})},"last")),s.jsxs(s.Fragment,{children:[s.jsxs("ul",{className:d("au-pagination","pagination",{[`pagination-${e.size}`]:!!e.size},e.className),children:[t,s.jsx(n,{slotContent:e.pagesDisplay,props:a}),i]}),s.jsx("div",{"aria-live":"polite",className:"visually-hidden",children:`${e.ariaLiveLabelText}`})]})};function S(a){const e=h(f,a,"pagination",{pagesDisplay:v,structure:b});return p.useImperativeHandle(a.ref,()=>e.api,[e.api]),s.jsx("nav",{"aria-label":e.state.ariaLabel,children:s.jsx(n,{slotContent:e.state.structure,props:e})})}export{S as P};
