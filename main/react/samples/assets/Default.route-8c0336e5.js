import{r as t,j as a}from"./index-36fc15f3.js";import{S as p}from"./Select-22b88f39.js";import"./index-e97c328e.js";import"./utils-32bfe757.js";import"./baseTransitions-235ceda1.js";import"./writables-69b35f47.js";import"./promise-f5ff916a.js";import"./fade-570ca3b2.js";import"./dom-cc7faf10.js";import"./rating-56e35eae.js";import"./floatingUI-25151740.js";import"./focustrack-50a9cf82.js";import"./config-599933b9.js";const n=["apple","apricot","asparagus","astronaut","athletic","autumn","avocado"],b=["banana","baseball","basketball","beautiful","bedroom","bee","bicycle"],u=["cat","caterpillar","cave","chair","cheese","cherry","chicken"],F=()=>{const[s]=t.useState([...n,...b,...u]),[r,o]=t.useState([]),[i,c]=t.useState(void 0),l=t.useCallback(e=>{c(e),o(e?s.filter(m=>m.toLowerCase().startsWith(e)):s.slice(0,10))},[]);return a.jsx("div",{style:{height:"400px"},children:a.jsx("div",{className:"mb-3",children:a.jsx(p,{items:r,filterText:i,onFilterTextChange:l,badgeClassName:"badge text-bg-light"})})})};export{F as default};
