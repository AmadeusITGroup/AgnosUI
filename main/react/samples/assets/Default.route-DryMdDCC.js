import{r as t,j as a}from"./index-DwQI96OA.js";import{S as p}from"./select-6UTWSYQf.js";import"./func-BWmyfmoa.js";import"./floatingUI-mzJIDHJb.js";import"./directive-C9v-ORad.js";import"./promise-lEn4COE4.js";import"./stores-F1H_Kvbu.js";import"./focustrack-BF9RQDV8.js";import"./navManager-denvY_6t.js";import"./dom-Hs1W5kAC.js";import"./config-B7C5ER0C.js";import"./widget-C8IkmiVm.js";import"./slot-C6u581j2.js";const n=["apple","apricot","asparagus","astronaut","athletic","autumn","avocado"],b=["banana","baseball","basketball","beautiful","bedroom","bee","bicycle"],u=["cat","caterpillar","cave","chair","cheese","cherry","chicken"],F=()=>{const[s]=t.useState([...n,...b,...u]),[r,o]=t.useState([]),[i,c]=t.useState(void 0),l=t.useCallback(e=>{c(e),o(e?s.filter(m=>m.toLowerCase().startsWith(e)):s.slice(0,10))},[]);return a.jsx("div",{style:{height:"400px"},children:a.jsx("div",{className:"mb-3",children:a.jsx(p,{items:r,filterText:i,onFilterTextChange:l,badgeClassName:"badge text-bg-light"})})})};export{F as default};