import{j as t,R as o}from"./index-qoEqhzEW.js";/* empty css               */import{u as l,S as m}from"./config-HaG-qiNL.js";import{c}from"./rating-BOQVp3dk.js";import"./func-DR0n-ShK-BRtNsj1u.js";import"./widget-DynDwSkR.js";import"./stores-CeiBlAbJ.js";import"./stores-rnmv_L1X.js";import"./rating--0-uTXnS-5JfPX3i4.js";import"./writables-DoU_XYTX-Cc045fOB.js";function n(a){const[{className:i,stars:s,slotStar:e}]=l(c,{...a,readonly:!0},"rating");return t.jsx("div",{className:`d-inline-flex au-rating ${i}`,children:s.map(r=>t.jsx(o.Fragment,{children:t.jsx("span",{className:"au-rating-star",children:t.jsx(m,{slotContent:e,props:r})})},r.index))})}const d=({fill:a,index:i})=>{const s=["star"];return a===100&&s.push("filled"),i<3&&s.push("bad"),t.jsx("span",{className:s.join(" "),children:"★"})},y=()=>t.jsxs(t.Fragment,{children:[t.jsx("div",{children:"The readonly rating without slot:"}),t.jsx(n,{rating:7,maxRating:10}),t.jsx("div",{className:"mt-2",children:"Using a slot to customize the display:"}),t.jsx(n,{rating:7,maxRating:10,className:"rating-custom",slotStar:d})]});export{y as default};