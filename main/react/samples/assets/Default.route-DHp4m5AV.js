import{r as l,j as e}from"./App-B6FkxJDS.js";import{M as a,e as i,a as m}from"./modal-apFubipB-DubhJ8Pe.js";import"./slot-Cf_4I5Hr.js";import"./directive-CEErjM5c-BDOTGebN.js";import"./directive-DrDJkTS5-BSYQXut0.js";import"./clsx-B-dksMZM.js";import"./config-CcbAHwh-.js";import"./config-C3v1HFbw.js";import"./widget-6VfcHB3W-CaeXE84E.js";import"./stores-DtfLvXAE-BkznY11Z.js";import"./modal-Qr4sHBFG-DFj1vinW.js";import"./writables-DCiBdIBK-CPde5tB_.js";import"./baseTransitions-s7NE8vzu.js";import"./promise-CY2U8bTP-BxBeZldg.js";import"./fade-uOobJKgw-CtYJW-II.js";import"./simpleClassTransition-D4cq0zW3.js";import"./cssTransitions-DFsayVtQ.js";import"./extendWidget-DxTj0ayL.js";const M=()=>{const t=l.useRef(null),[n,o]=l.useState(""),[s,c]=l.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(a,{ref:t,title:"Save changes",footer:e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:"btn btn-outline-primary",onClick:()=>t.current.close(!0),children:"Yes"}),e.jsx("button",{type:"button",className:"btn btn-outline-danger",onClick:()=>t.current.close(!1),children:"No"})]}),fullscreen:s,children:"Do you want to save your changes?"}),e.jsx("button",{type:"button",className:"btn btn-primary",onClick:async()=>{o("");const r=await t.current.open();o(r===i?"You clicked on the close button.":r===m?"You clicked outside the modal.":`You answered the question with "${r?"Yes":"No"}".`)},children:"Launch demo modal"}),e.jsxs("div",{className:"form-check form-switch mt-3",children:[e.jsx("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"fullscreen",checked:s,onChange:()=>c(!s)}),e.jsx("label",{className:"form-check-label",htmlFor:"fullscreen",children:"Fullscreen"})]}),e.jsx("hr",{}),e.jsx("div",{"data-testid":"message",children:n})]})};export{M as default};
