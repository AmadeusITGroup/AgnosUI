import{r as e,j as a}from"./App-DSl1jU8i.js";import{S as l}from"./select-VhhSuDsJ-CqWQr2GY.js";import"./slot-DCyaBoo1.js";import"./directive-CEErjM5c-DClKN2Tv.js";import"./directive-CKEccryv-BEge1hNH.js";import"./index-BYGrCQsn.js";import"./config-Dmr0Of-f.js";import"./config-FG_E5HMF.js";import"./widget-6VfcHB3W-Cqqyd0Y-.js";import"./stores-DtfLvXAE-CSxI-bHc.js";import"./floatingUI-D31gG9GN.js";import"./promise-CY2U8bTP-COOyouyK.js";import"./focustrack-BhTZ-Ups.js";import"./navManager-Diwp7rjP.js";import"./extendWidget-DrHtUD_Z.js";const n=["apple","apricot","asparagus","astronaut","athletic","autumn","avocado"],b=["banana","baseball","basketball","beautiful","bedroom","bee","bicycle"],d=["cat","caterpillar","cave","chair","cheese","cherry","chicken"],r=[...n,...b,...d],N=()=>{const[s,o]=e.useState([]),[i,c]=e.useState(void 0),m=e.useCallback(t=>{c(t),o(t?r.filter(p=>p.toLowerCase().startsWith(t)):r.slice(0,10))},[]);return a.jsx("div",{style:{height:"400px"},children:a.jsx("div",{className:"mb-3",children:a.jsx(l,{items:s,filterText:i,onFilterTextChange:m,badgeClassName:"badge text-bg-light"})})})};export{N as default};