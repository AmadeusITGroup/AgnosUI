import{r as e,j as t}from"./index-f82834c6.js";import{W as r}from"./config-280fe900.js";import{R as m}from"./Rating-369bd4ea.js";import"./utils-3d1769dc.js";import"./index-58f6647a.js";import"./focustrack-d9d6116c.js";import"./pagination-77ff0a3e.js";import"./writables-e06b6bbb.js";import"./fade-cfc2f702.js";import"./baseTransitions-149a0baa.js";const o=function({fill:n}){const a=["star"];n===100&&a.push("full");const i={width:`${n}%`};return t.jsxs("span",{className:a.join(" "),children:[" ",t.jsx("span",{className:"half",style:i,children:"♥"}),"♥"," "]})},p=()=>{const[n,a]=e.useState({}),[i,c]=e.useState(3);function s(l){a({...n,...l})}return t.jsxs(r,{rating:n,children:[t.jsx(m,{rating:i,onRatingChange:c}),t.jsxs("div",{className:"mt-3",children:["Disabled: ",t.jsxs("div",{id:"btn-config-disabled",className:"btn-group mb-2",children:[t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.disabled?"active":""}`,onClick:()=>s({disabled:!0}),children:"true"}),t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.disabled?"":"active"}`,onClick:()=>s({disabled:!1}),children:"false"})]}),t.jsx("br",{}),"maxRating: ",t.jsxs("div",{id:"btn-config-maxRating",className:"btn-group mb-2",children:[t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.maxRating===40?"active":""}`,onClick:()=>s({maxRating:40}),children:"40"}),t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.maxRating===30?"active":""}`,onClick:()=>s({maxRating:30}),children:"30"}),t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.maxRating===20?"active":""}`,onClick:()=>s({maxRating:20}),children:"20"}),t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.maxRating===void 0?"active":""}`,onClick:()=>s({maxRating:void 0}),children:"undefined"})]}),t.jsx("br",{}),"className: ",t.jsxs("div",{id:"btn-config-className",className:"btn-group mb-2",children:[t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.className==="fs-1"?"active":""}`,onClick:()=>s({className:"fs-1"}),children:"fs-1"}),t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.className==="fs-2"?"active":""}`,onClick:()=>s({className:"fs-2"}),children:"fs-2"}),t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.className===void 0?"active":""}`,onClick:()=>s({className:void 0}),children:"undefined"})]}),t.jsx("br",{}),"slotStar: ",t.jsxs("div",{id:"btn-config-slotStar",className:"btn-group mb-2",children:[t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.slotStar===o?"active":""}`,onClick:()=>s({slotStar:o}),children:"custom"}),t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.slotStar==="*"?"active":""}`,onClick:()=>s({slotStar:"*"}),children:"'*'"}),t.jsx("button",{className:`btn btn-sm btn-outline-secondary ${n.slotStar===void 0?"active":""}`,onClick:()=>s({slotStar:void 0}),children:"undefined"})]})]})]})};export{p as default};
