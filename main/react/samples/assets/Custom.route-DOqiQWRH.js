import{r as i,j as r}from"./App-CsOkU7k8.js";import{S as h}from"./select-aWj112ds-Fghmo00y.js";import{u as x}from"./directive-CEErjM5c-BVE02Lyt.js";import"./slot-BtkEMpNN.js";import"./clsx-B-dksMZM.js";import"./config-C8WNE-by.js";import"./config-B-M_1bYi.js";import"./stores-lycFhSg7.js";import"./dom-gfxqXJpK-DnwY-KAj.js";import"./stores-DZalyTTa-Bo8fVQaT.js";import"./floatingUI-DOqUmxfF.js";import"./promise-XSP94FjG-DQjR-9Gl.js";import"./focustrack-Dc20EWU1.js";import"./navManager-DPi01Ap_.js";import"./widget-CM0nNcys.js";import"./extendWidget-Dox4Buxj.js";function f(e,t){let s;return(...o)=>{s&&clearTimeout(s),s=setTimeout(()=>{e(...o)},t)}}const j=e=>{let t;return(...s)=>(t==null||t.abort(),t=new AbortController,e(t.signal,...s))},u="https://en.wikipedia.org/?curid=",w=new Intl.Collator("en").compare;function S(e){const t=document.createElement("div");return t.innerHTML=e,t.innerText}const p=e=>"page-"+e.pageid,v=({itemContext:e,directives:t})=>r.jsxs(r.Fragment,{children:[r.jsx("a",{href:u+e.item.pageid,target:"_blank",rel:"noreferrer",children:e.item.title}),r.jsx("button",{type:"button",className:"btn-close ms-1 wiki-btn-close","aria-label":"Close",...x(t.badgeCloseButtonDirective,e)})]}),k=({itemContext:e})=>{const t=e.item;return r.jsxs(r.Fragment,{children:[r.jsx("div",{className:"fw-bold",children:t.title}),r.jsx("div",{className:"text-wrap wiki-desc",children:t.snippet})]})},C=e=>e.querySelectorAll("a,button,input"),U=()=>{const[e,t]=i.useState([]),[s,o]=i.useState([]),d=i.useCallback(f(j(async(n,a)=>{var c;const g=await(await fetch("https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch="+a,{signal:n})).json();t(((c=g.query)==null?void 0:c.search.map(m=>({...m,snippet:S(m.snippet)})))??[])}),200),[]),b=i.useCallback(n=>{o((n||[]).sort((a,l)=>w(a.title,l.title)))},[]);return r.jsxs("div",{className:"custom-select my-auto mb-3",children:[r.jsx(h,{items:e,itemIdFn:p,navSelector:C,onFilterTextChange:d,onSelectedChange:b,badgeLabel:v,itemLabel:k,badgeClassName:"badge text-bg-light d-flex align-items-center"}),r.jsx("span",{className:"fw-bold",children:"Selection: "}),s.map(n=>r.jsx("a",{href:`${u}${n.pageid}`,className:"pe-2",children:n.title},p(n))),!s.length&&r.jsx(r.Fragment,{children:"none"})]})};export{U as default};
