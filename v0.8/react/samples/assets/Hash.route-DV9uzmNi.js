import{r as o,j as i}from"./App-CsOkU7k8.js";import{h as n}from"./hashUtil-IQZZ1G04.js";import{P as p}from"./pagination-B1Ho_-r4-BJwUPWqX.js";import{W as m}from"./config-CiSYZ8Ym.js";import{u as l}from"./stores-DZalyTTa-JtJrTKhC.js";import"./dom-gfxqXJpK-DnwY-KAj.js";import"./slot-BtkEMpNN.js";import"./clsx-B-dksMZM.js";import"./directive-CEErjM5c-BVE02Lyt.js";import"./pageFactory-CZZJDqOh-OrBFFyif.js";import"./extendWidget-CRSgS6m7.js";import"./stores-CNc_rSPE.js";import"./pagination-CRAKaOuh-d6y3dYNm.js";import"./writables-CgpOQ4hA-Cd7Z63K9.js";import"./config-C-QG9XGU.js";import"./widget-BP6z-zfB-Ce_gP_Ht.js";const z=()=>{const a=l(n),r=+(a.split("#")[1]??4),e=o.useCallback(t=>location.hash=`#${a.split("#")[0]}#${t}`,[a]),s=o.useCallback(t=>`#${a.split("#")[0]}#${t}`,[a]);return i.jsx(i.Fragment,{children:i.jsxs(m,{pagination:{collectionSize:60},children:[i.jsx("p",{children:"A pagination with hrefs provided for each pagination element:"}),i.jsxs("p",{children:["Page hash: ",i.jsx("small",{children:"#"+a})]}),i.jsx(p,{ariaLabel:"Page navigation with customized hrefs",page:r,boundaryLinks:!0,pageLink:s,onPageChange:e})]})})};export{z as default};
