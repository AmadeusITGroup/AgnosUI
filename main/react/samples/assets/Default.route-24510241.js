import{r as t,j as e}from"./index-f82834c6.js";import{S as p}from"./Select-e9a7610e.js";import"./index-58f6647a.js";import"./utils-3d1769dc.js";import"./focustrack-d9d6116c.js";import"./pagination-77ff0a3e.js";import"./writables-e06b6bbb.js";import"./fade-cfc2f702.js";import"./baseTransitions-149a0baa.js";import"./types-d19cbc41.js";import"./config-280fe900.js";const n=["apple","apricot","asparagus","astronaut","athletic","autumn","avocado"],b=["banana","baseball","basketball","beautiful","bedroom","bee","bicycle"],d=["cat","caterpillar","cave","chair","cheese","cherry","chicken"],k=()=>{const[s]=t.useState([...n,...b,...d]),[r,o]=t.useState([]),[i,c]=t.useState(void 0),l=t.useCallback(a=>{c(a),o(a?s.filter(m=>m.toLowerCase().startsWith(a)):s.slice(0,10))},[]);return e.jsx("div",{style:{height:"400px"},children:e.jsxs("div",{className:"mb-3",children:[e.jsx("label",{className:"form-label",children:"Start typing with a, b or c"}),e.jsx(p,{items:r,filterText:i,onFilterTextChange:l,badgeClassName:"badge text-bg-light"})]})})};export{k as default};
