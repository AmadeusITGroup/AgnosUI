import{j as t,R as o}from"./App-DI9ur9y5.js";/* empty css               */import{e as m}from"./rating-CTfRQGGu-C_xoaIGN.js";import{u as l}from"./config-aYUxiFUz.js";import{S as p}from"./slot-Cdz7cIIo.js";import"./directive-DNXkB1Wc-BT0zWdco.js";import"./directive-CKEccryv-BXYvEkQs.js";import"./rating-C1UqlpFs-B8LD5BYY.js";import"./rating-D6x1NWZU-CMLbWLZp.js";import"./writables-DoU_XYTX-CmGvgT4E.js";import"./extendWidget-BdAld2Yx.js";import"./config-nOnPRMsC.js";import"./stores-B8YEDwZq-BE6uiFF1.js";function e(a){const{state:{className:r,stars:s,star:n}}=l(m,{...a,readonly:!0},"rating");return t.jsx("div",{className:`d-inline-flex au-rating ${r}`,children:s.map(i=>t.jsx(o.Fragment,{children:t.jsx("span",{className:"au-rating-star",children:t.jsx(p,{slotContent:n,props:i})})},i.index))})}const c=({fill:a,index:r})=>{const s=["star"];return a===100&&s.push("filled"),r<3&&s.push("bad"),t.jsx("span",{className:s.join(" "),children:"★"})},F=()=>t.jsxs(t.Fragment,{children:[t.jsx("div",{children:"The readonly rating without slot:"}),t.jsx(e,{rating:7,maxRating:10}),t.jsx("div",{className:"mt-2",children:"Using a slot to customize the display:"}),t.jsx(e,{rating:7,maxRating:10,className:"rating-custom",star:c})]});export{F as default};