import{j as o}from"./App-XNADZBio.js";import{o as a}from"./modal-CbAezjxK-B8-ajI2P.js";import"./config-CU1Tiraw.js";import"./config-BTRBURgK.js";import"./stores-CbKlqneq.js";import"./widget-DAs9_HQ1-B1ddsW-J.js";import"./stores-B8YEDwZq-BRy6vnb9.js";import"./directive-Cyub5FqM-DuBiUSMn.js";import"./directive-DoO5xP7d-DPc41jcO.js";import"./writables-DoU_XYTX-dxvvE_8w.js";import"./baseTransitions-CEt0tH4X.js";import"./promise-CY2U8bTP-DyoYE_Xk.js";import"./fade-uOobJKgw-DdimkWw7.js";import"./simpleClassTransition-BohE_cHn.js";import"./cssTransitions-D624oDyw.js";import"./extendWidget-DH6bFaPr.js";const r=({widget:t,state:l})=>o.jsxs(o.Fragment,{children:["This is a modal",o.jsx("br",{}),o.jsx("br",{}),o.jsx("button",{className:"btn btn-outline-primary m-1",onClick:()=>a({slotTitle:"Other modal",slotDefault:r,container:l.modalElement}),children:"Launch other modal"}),o.jsx("br",{}),o.jsx("button",{className:"btn btn-outline-secondary m-1",onClick:()=>t.api.patch({backdrop:!0}),children:"Enable backdrop"}),o.jsx("button",{className:"btn btn-outline-secondary m-1",onClick:()=>t.api.patch({backdrop:!1}),children:"Disable backdrop"}),o.jsx("br",{}),o.jsx("button",{className:"btn btn-outline-secondary m-1",onClick:()=>t.api.close(),children:"Close"})]}),C=()=>o.jsx("button",{className:"btn btn-primary",onClick:()=>a({slotTitle:"First modal",className:"modal-sm",slotDefault:r}),children:"Launch demo modal"});export{C as default};