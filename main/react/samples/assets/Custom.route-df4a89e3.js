import{r as a,j as s,R as x}from"./index-a1897422.js";import{S as f}from"./select-69c544de.js";import"./func-f2d0b1ef.js";import"./floatingUI-45cee349.js";import"./directive-b30080a6.js";import"./promise-c1a9d9a6.js";import"./stores-ae26ce61.js";import"./focustrack-2033d9a9.js";import"./config-b1c82cd5.js";import"./widget-e433708a.js";import"./slot-50fa40d8.js";function j(t,e){let r;return(...o)=>{r&&clearTimeout(r),r=setTimeout(()=>{t(...o)},e)}}const w=t=>{let e;return(...r)=>(e==null||e.abort(),e=new AbortController,t(e.signal,...r))};const d="https://en.wikipedia.org/?curid=",S=new Intl.Collator("en").compare;function k(t){const e=document.createElement("div");return e.innerHTML=t,e.innerText}const p=t=>"page-"+t.pageid,F=({itemContext:t,widget:e})=>s.jsxs(s.Fragment,{children:[s.jsx("a",{href:d+t.item.pageid,target:"_blank",rel:"noreferrer",children:t.item.title}),s.jsx("button",{type:"button",className:"btn-close ms-1 wiki-btn-close","aria-label":"Close",onClick:()=>e.api.unselect(t.item)})]}),C=({itemContext:t})=>{const e=t.item;return s.jsxs(s.Fragment,{children:[s.jsx("div",{className:"fw-bold",children:e.title}),s.jsx("div",{className:"text-wrap wiki-desc",children:e.snippet})]})},P=()=>{const[t,e]=a.useState([]),[r,o]=a.useState([]),[,u]=a.useState(void 0),g=a.useCallback(j(w(async(n,i)=>{var c;u(i);const b=await(await fetch("https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch="+i,{signal:n})).json();e(((c=b.query)==null?void 0:c.search.map(m=>({...m,snippet:k(m.snippet)})))??[])}),200),[]),h=a.useCallback(n=>{o((n||[]).sort((i,l)=>S(i.title,l.title)))},[]);return s.jsxs("div",{className:"custom-select my-auto mb-3",children:[s.jsx(f,{items:t,itemIdFn:p,onFilterTextChange:g,onSelectedChange:h,slotBadgeLabel:F,slotItem:C,badgeClassName:"badge text-bg-light d-flex align-items-center"}),s.jsx("span",{className:"fw-bold",children:"Selection: "}),r.map(n=>s.jsx(x.Fragment,{children:s.jsx("a",{href:`${d}${n.pageid}`,className:"pe-2",children:n.title})},p(n))),!r.length&&s.jsx(s.Fragment,{children:"none"})]})};export{P as default};