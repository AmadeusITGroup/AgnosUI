import{j as t}from"./index-OUqRjMdI.js";import{R as e}from"./rating-vdrI-fc5.js";import"./rating-ttqvKINO.js";import"./rating-Diyz_oOc.js";import"./func-B0ufEirG.js";import"./stores-ae3sjr2N.js";import"./writables-2MPPUTiC.js";import"./slot-DUWkMZ23.js";import"./config-7S2TRWPR.js";import"./widget-Ah5nJTtZ.js";const a=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/>
</svg>`,x=()=>t.jsx(e,{rating:3.64,readonly:!0,maxRating:5,className:"rating-readonly",slotStar:({fill:s})=>{const r=["star"];s===100&&r.push("full");const n={width:`${s}%`};return t.jsxs("span",{className:r.join(" "),children:[t.jsx("span",{className:"half",style:n,dangerouslySetInnerHTML:{__html:a}}),t.jsx("span",{dangerouslySetInnerHTML:{__html:a}})]})},ariaLabel:"readonly rating"});export{x as default};