import{j as t}from"./App-AO0jOhRY.js";/* empty css               */import{e}from"./rating-DziC4Tsh-CoHd222Q.js";import{u as m}from"./config-Drx5IJGH.js";import{S as l}from"./slot-BNbuKlAZ.js";import"./directive-CEErjM5c-iSrC3_Et.js";import"./dom-BB9jLllr-Cs0LnZpg.js";import"./rating-hovacUx0-C8vzw33t.js";import"./rating-B1JLZgIR-KaPD9uZe.js";import"./stores-BWu8V2zY.js";import"./writables-DCiBdIBK-DMDym_DM.js";import"./extendWidget-B0Yau8uj.js";import"./config-C430Xqyb.js";import"./widget-6VfcHB3W-CgJr_aqi.js";import"./stores-DtfLvXAE-D27zrrdx.js";function o(a){const{state:{className:r,stars:s,star:n}}=m(e,{...a,readonly:!0},"rating");return t.jsx("div",{className:`d-inline-flex au-rating ${r}`,children:s.map(i=>t.jsx("span",{className:"au-rating-star",children:t.jsx(l,{slotContent:n,props:i})},i.index))})}const p=({fill:a,index:r})=>{const s=["star"];return a===100&&s.push("filled"),r<3&&s.push("bad"),t.jsx("span",{className:s.join(" "),children:"★"})},b=()=>t.jsxs(t.Fragment,{children:[t.jsx("div",{children:"The readonly rating without slot:"}),t.jsx(o,{rating:7,maxRating:10}),t.jsx("div",{className:"mt-2",children:"Using a slot to customize the display:"}),t.jsx(o,{rating:7,maxRating:10,className:"rating-custom",star:p})]});export{b as default};
