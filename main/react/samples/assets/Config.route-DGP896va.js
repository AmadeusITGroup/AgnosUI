import{r as i,j as n}from"./App-DlBo9mGL.js";import{R as r}from"./rating-DziC4Tsh-DLR2-_Cg.js";import{W as m}from"./config-E2EdVN2z.js";import"./slot-odLDIc4J.js";import"./directive-CEErjM5c-CCswFnR1.js";import"./stores-DX-ADOKq-MSAn3urh.js";import"./rating-hovacUx0-CX3ocUnV.js";import"./rating-DsCFT_H5-CQC5wf3q.js";import"./writables-DCiBdIBK-0-aBPFP1.js";import"./extendWidget-Cn88CU8Q.js";import"./config-BLDvY6fD.js";import"./widget-6VfcHB3W-bX5YgxWh.js";import"./stores-DtfLvXAE-BsGVyKlw.js";const c=function({fill:t}){const a=["star"];t===100&&a.push("full");const e={width:`${t}%`};return n.jsxs("span",{className:a.join(" "),children:[" ",n.jsx("span",{className:"half",style:e,children:"♥"}),"♥"," "]})},y=()=>{const[t,a]=i.useState({}),[e,o]=i.useState(3);function s(l){a({...t,...l})}return n.jsxs(m,{rating:t,children:[n.jsx(r,{rating:e,onRatingChange:o}),n.jsxs("div",{className:"mt-3",children:["Disabled: ",n.jsxs("div",{id:"btn-config-disabled",className:"btn-group mb-2",children:[n.jsx("button",{className:`btn btn-sm btn-outline-secondary ${t.disabled?"active":""}`,onClick:()=>s({disabled:!0}),children:"true"}),n.jsx("button",{className:`btn btn-sm btn-outline-secondary ${t.disabled?"":"active"}`,onClick:()=>s({disabled:!1}),children:"false"})]}),n.jsx("br",{}),"maxRating: ",n.jsxs("div",{id:"btn-config-maxRating",className:"btn-group mb-2",children:[n.jsx("button",{className:`btn btn-sm btn-outline-secondary ${t.maxRating===40?"active":""}`,onClick:()=>s({maxRating:40}),children:"40"}),n.jsx("button",{className:`btn btn-sm btn-outline-secondary ${t.maxRating===30?"active":""}`,onClick:()=>s({maxRating:30}),children:"30"}),n.jsx("button",{className:`btn btn-sm btn-outline-secondary ${t.maxRating===20?"active":""}`,onClick:()=>s({maxRating:20}),children:"20"}),n.jsx("button",{className:`btn btn-sm btn-outline-secondary ${t.maxRating===void 0?"active":""}`,onClick:()=>s({maxRating:void 0}),children:"undefined"})]}),n.jsx("br",{}),"className: ",n.jsxs("div",{id:"btn-config-className",className:"btn-group mb-2",children:[n.jsx("button",{className:`btn btn-sm btn-outline-secondary ${t.className==="fs-1"?"active":""}`,onClick:()=>s({className:"fs-1"}),children:"fs-1"}),n.jsx("button",{className:`btn btn-sm btn-outline-secondary ${t.className==="fs-2"?"active":""}`,onClick:()=>s({className:"fs-2"}),children:"fs-2"}),n.jsx("button",{className:`btn btn-sm btn-outline-secondary ${t.className===void 0?"active":""}`,onClick:()=>s({className:void 0}),children:"undefined"})]}),n.jsx("br",{}),"slotStar: ",n.jsxs("div",{id:"btn-config-slotStar",className:"btn-group mb-2",children:[n.jsx("button",{className:`btn btn-sm btn-outline-secondary ${t.star===c?"active":""}`,onClick:()=>s({star:c}),children:"custom"}),n.jsx("button",{className:`btn btn-sm btn-outline-secondary ${t.star==="*"?"active":""}`,onClick:()=>s({star:"*"}),children:"'*'"}),n.jsx("button",{className:`btn btn-sm btn-outline-secondary ${t.star===void 0?"active":""}`,onClick:()=>s({star:void 0}),children:"undefined"})]})]})]})};export{y as default};
