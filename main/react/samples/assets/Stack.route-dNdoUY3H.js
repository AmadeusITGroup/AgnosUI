import{j as o}from"./index-F7Addb0m.js";import{o as a}from"./modal-HpEkPQyi.js";import"./func-B0ufEirG.js";import"./writables-4xnKhXHH.js";import"./stores-sF44c0L5.js";import"./baseTransitions-0jwlsytb.js";import"./promise-8x5-Wnj7.js";import"./directive-KJmZNfSe.js";import"./fade-I23ZSOQK.js";import"./cssTransitions-uBV_yeX9.js";import"./dom-2S7XI5EU.js";import"./slot-SC-cmw7q.js";import"./config-LZ-jRRYB.js";import"./widget-QA7msUcf.js";const l=({widget:t,state:r})=>o.jsxs(o.Fragment,{children:["This is a modal",o.jsx("br",{}),o.jsx("br",{}),o.jsx("button",{className:"btn btn-outline-primary m-1",onClick:()=>a({slotTitle:"Other modal",slotDefault:l,container:r.modalElement}),children:"Launch other modal"}),o.jsx("br",{}),o.jsx("button",{className:"btn btn-outline-secondary m-1",onClick:()=>t.api.patch({backdrop:!0}),children:"Enable backdrop"}),o.jsx("button",{className:"btn btn-outline-secondary m-1",onClick:()=>t.api.patch({backdrop:!1}),children:"Disable backdrop"}),o.jsx("br",{}),o.jsx("button",{className:"btn btn-outline-secondary m-1",onClick:()=>t.api.close(),children:"Close"})]}),f=()=>o.jsx("button",{className:"btn btn-primary",onClick:()=>a({slotTitle:"First modal",className:"modal-sm",slotDefault:l}),children:"Launch demo modal"});export{f as default};