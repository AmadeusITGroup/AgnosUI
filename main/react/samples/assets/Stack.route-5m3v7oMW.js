import{j as o}from"./index-xMq0hjgL.js";import{o as a}from"./modal-ZbB6YTG0.js";import"./func-B0ufEirG.js";import"./writables-Z2vf7llc.js";import"./stores-RmWnK2ql.js";import"./baseTransitions-PhLb9WD4.js";import"./promise-8x5-Wnj7.js";import"./directive-psBnpAQJ.js";import"./fade-I23ZSOQK.js";import"./cssTransitions-uBV_yeX9.js";import"./dom-2S7XI5EU.js";import"./slot-lg8vAPhX.js";import"./config-r2aYHzTj.js";import"./widget-eFPR44fy.js";const l=({widget:t,state:r})=>o.jsxs(o.Fragment,{children:["This is a modal",o.jsx("br",{}),o.jsx("br",{}),o.jsx("button",{className:"btn btn-outline-primary m-1",onClick:()=>a({slotTitle:"Other modal",slotDefault:l,container:r.modalElement}),children:"Launch other modal"}),o.jsx("br",{}),o.jsx("button",{className:"btn btn-outline-secondary m-1",onClick:()=>t.api.patch({backdrop:!0}),children:"Enable backdrop"}),o.jsx("button",{className:"btn btn-outline-secondary m-1",onClick:()=>t.api.patch({backdrop:!1}),children:"Disable backdrop"}),o.jsx("br",{}),o.jsx("button",{className:"btn btn-outline-secondary m-1",onClick:()=>t.api.close(),children:"Close"})]}),f=()=>o.jsx("button",{className:"btn btn-primary",onClick:()=>a({slotTitle:"First modal",className:"modal-sm",slotDefault:l}),children:"Launch demo modal"});export{f as default};