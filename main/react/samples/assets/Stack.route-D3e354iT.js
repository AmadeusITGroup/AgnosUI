import{j as o}from"./App-DI9ur9y5.js";import{o as r}from"./modal-qidZ4ghL-B_GIE9Ss.js";import"./config-D3v6G0iM.js";import"./config-C0ibonqk.js";import"./directive-CKEccryv-B1ye-Yy0.js";import"./widget-DAs9_HQ1-7RGw_aKa.js";import"./stores-B8YEDwZq-rhLwL-y_.js";import"./directive-Kqp31pwt-Z1XipxII.js";import"./index-DYzswQoO.js";import"./modal-BYYLGdn5-DX0ywCO3.js";import"./writables-DoU_XYTX-CPJYVIsx.js";import"./baseTransitions-DZKc2Zuo.js";import"./promise-CY2U8bTP-C0h_X4yL.js";import"./fade-uOobJKgw-Bf-N6q4C.js";import"./simpleClassTransition-DM5VzvLh.js";import"./cssTransitions-Pg2qqAzo.js";import"./extendWidget-X8VLvE1U.js";const a=({widget:t,state:n})=>o.jsxs(o.Fragment,{children:["This is a modal",o.jsx("br",{}),o.jsx("br",{}),o.jsx("button",{className:"btn btn-outline-primary m-1",onClick:()=>r({title:"Other modal",children:a,container:n.modalElement}),children:"Launch other modal"}),o.jsx("br",{}),o.jsx("button",{className:"btn btn-outline-secondary m-1",onClick:()=>t.api.patch({backdrop:!0}),children:"Enable backdrop"}),o.jsx("button",{className:"btn btn-outline-secondary m-1",onClick:()=>t.api.patch({backdrop:!1}),children:"Disable backdrop"}),o.jsx("br",{}),o.jsx("button",{className:"btn btn-outline-secondary m-1",onClick:()=>t.api.close(),children:"Close"})]}),f=()=>o.jsx("button",{className:"btn btn-primary",onClick:()=>r({title:"First modal",className:"modal-sm",children:a}),children:"Launch demo modal"});export{f as default};