import{r as o,j as a}from"./App-D2FAakDZ.js";import{h as n}from"./hashUtil-nvqqAR81.js";import{P as p}from"./pagination-BGHP7K6U-DphRCe1Y.js";import{W as m}from"./config-87LujZOd.js";import{u as l}from"./stores-B8YEDwZq-CVwKZ0x1.js";import"./directive-3-8yr-ZK-C5h7Dwqe.js";import"./index-D735YuCH.js";import"./directive-Kqp31pwt-o0igtPiy.js";import"./pageFactory-C8ZmJXYi-Stx5Iv_l.js";import"./extendWidget-CY6dlHOY.js";import"./pagination-BpPHKQsH-CR4Lheb-.js";import"./writables-DoU_XYTX-8sqxFTfY.js";import"./config-CX1h717Z.js";import"./widget-DAs9_HQ1-B1NkVbjP.js";const L=()=>{const i=l(n),r=+(i.split("#")[1]??4),e=o.useCallback(t=>location.hash=`#${i.split("#")[0]}#${t}`,[]),s=o.useCallback(t=>`#${i.split("#")[0]}#${t}`,[]);return a.jsx(a.Fragment,{children:a.jsxs(m,{pagination:{collectionSize:60},children:[a.jsx("p",{children:"A pagination with hrefs provided for each pagination element:"}),a.jsxs("p",{children:["Page hash: ",a.jsx("small",{children:"#"+i})]}),a.jsx(p,{ariaLabel:"Page navigation with customized hrefs",page:r,boundaryLinks:!0,pageLink:s,onPageChange:e})]})})};export{L as default};
