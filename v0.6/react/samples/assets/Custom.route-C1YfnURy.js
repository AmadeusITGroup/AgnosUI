import{r as a,j as r,a as h}from"./App-CyvC_5t0.js";import{S as x}from"./select-BriGqe3k-BoLY4y-W.js";import{u as f}from"./directive-DNXkB1Wc-B0-Q0JWz.js";import"./slot-Dra5swoq.js";import"./index-RliMuNdx.js";import"./config-B4y1ZCnE.js";import"./config-DyC-BDse.js";import"./directive-CKEccryv-BrWl76X8.js";import"./widget-DaA-pe23-17JDiM7P.js";import"./stores-B90XF8Sy-CKPsorV2.js";import"./floatingUI-E_ciQKEJ.js";import"./promise-CY2U8bTP-BBXElGUG.js";import"./focustrack-BHGf0Wsc.js";import"./navManager-BJWTxkCt.js";import"./extendWidget-DH8OAK3L.js";function j(e,t){let s;return(...i)=>{s&&clearTimeout(s),s=setTimeout(()=>{e(...i)},t)}}const w=e=>{let t;return(...s)=>(t==null||t.abort(),t=new AbortController,e(t.signal,...s))},u="https://en.wikipedia.org/?curid=",S=new Intl.Collator("en").compare;function v(e){const t=document.createElement("div");return t.innerHTML=e,t.innerText}const p=e=>"page-"+e.pageid,k=({itemContext:e,directives:t})=>r.jsxs(r.Fragment,{children:[r.jsx("a",{href:u+e.item.pageid,target:"_blank",rel:"noreferrer",children:e.item.title}),r.jsx("button",{type:"button",className:"btn-close ms-1 wiki-btn-close","aria-label":"Close",...f(t.badgeCloseButtonDirective,e)})]}),C=({itemContext:e})=>{const t=e.item;return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"fw-bold",children:t.title}),r.jsx("div",{className:"text-wrap wiki-desc",children:t.snippet})]})},F=e=>e.querySelectorAll("a,button,input"),U=()=>{const[e,t]=a.useState([]),[s,i]=a.useState([]),d=a.useCallback(j(w(async(n,o)=>{var c;const b=await(await fetch("https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch="+o,{signal:n})).json();t(((c=b.query)==null?void 0:c.search.map(m=>({...m,snippet:v(m.snippet)})))??[])}),200),[]),g=a.useCallback(n=>{i((n||[]).sort((o,l)=>S(o.title,l.title)))},[]);return r.jsxs("div",{className:"custom-select my-auto mb-3",children:[r.jsx(x,{items:e,itemIdFn:p,navSelector:F,onFilterTextChange:d,onSelectedChange:g,badgeLabel:k,itemLabel:C,badgeClassName:"badge text-bg-light d-flex align-items-center"}),r.jsx("span",{className:"fw-bold",children:"Selection: "}),s.map(n=>r.jsx(h.Fragment,{children:r.jsx("a",{href:`${u}${n.pageid}`,className:"pe-2",children:n.title})},p(n))),!s.length&&r.jsx(r.Fragment,{children:"none"})]})};export{U as default};