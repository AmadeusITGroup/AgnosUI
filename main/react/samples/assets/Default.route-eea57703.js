import{r as t,j as a}from"./index-f80b7099.js";import{S as p}from"./select-0bf51caf.js";import"./func-f2d0b1ef.js";import"./floatingUI-5f7282cc.js";import"./directive-a5d03753.js";import"./promise-c1a9d9a6.js";import"./stores-95180340.js";import"./focustrack-1d1f61bb.js";import"./config-6109f459.js";import"./widget-cc4899d0.js";import"./slot-4a587c74.js";const n=["apple","apricot","asparagus","astronaut","athletic","autumn","avocado"],b=["banana","baseball","basketball","beautiful","bedroom","bee","bicycle"],u=["cat","caterpillar","cave","chair","cheese","cherry","chicken"],y=()=>{const[s]=t.useState([...n,...b,...u]),[r,o]=t.useState([]),[i,c]=t.useState(void 0),l=t.useCallback(e=>{c(e),o(e?s.filter(m=>m.toLowerCase().startsWith(e)):s.slice(0,10))},[]);return a.jsx("div",{style:{height:"400px"},children:a.jsx("div",{className:"mb-3",children:a.jsx(p,{items:r,filterText:i,onFilterTextChange:l,badgeClassName:"badge text-bg-light"})})})};export{y as default};