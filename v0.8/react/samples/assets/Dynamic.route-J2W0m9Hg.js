import{r as n,j as t}from"./App-AO0jOhRY.js";import{A as s}from"./alert-BM4ImSpO-5lMo2QJr.js";import"./slot-BNbuKlAZ.js";import"./directive-CEErjM5c-iSrC3_Et.js";import"./dom-BB9jLllr-Cs0LnZpg.js";import"./config-Drx5IJGH.js";import"./config-C430Xqyb.js";import"./widget-6VfcHB3W-CgJr_aqi.js";import"./stores-BWu8V2zY.js";import"./stores-DtfLvXAE-D27zrrdx.js";import"./alert-BSixS_cz-DbIQl8Cy.js";import"./common-CuZAeECD-BHAKrs5n.js";import"./baseTransitions-CPg3mhjR.js";import"./writables-DCiBdIBK-DMDym_DM.js";import"./promise-CBh_HbSK-DvaGkPJc.js";import"./extendWidget-B0Yau8uj.js";import"./fade-uOobJKgw-Dv9Ezbv2.js";import"./simpleClassTransition-wtax_42w.js";import"./cssTransitions-gJySKltD.js";import"./types-Bw2nvhNr.js";const o=n.createContext([]),d=n.createContext(null);let a=0;function m(r,e){switch(e.type){case"add":return[...r,{...e.payload,id:a++}];case"remove":return r.filter(i=>i!==e.alert)}}const F=()=>{const[r,e]=n.useReducer(m,[]);return t.jsxs(t.Fragment,{children:[t.jsx("button",{className:"btn btn-primary addError me-1",onClick:()=>e({type:"add",payload:{type:"danger",children:"Error",dismissible:!0,animated:!0}}),children:"Add error"}),t.jsx("button",{className:"btn btn-primary addInfo me-1",onClick:()=>e({type:"add",payload:{type:"info",children:"Info",dismissible:!0,animated:!0}}),children:"Add info"}),t.jsx("button",{className:"btn btn-primary addWarning me-1",onClick:()=>e({type:"add",payload:{type:"warning",children:"Warning",dismissible:!0,animated:!0}}),children:"Add warning"}),t.jsx("br",{}),t.jsxs("div",{className:"alertCount mb-3",children:["Alerts in the service: ",r.length]}),t.jsx(o,{value:r,children:t.jsx(d,{value:e,children:t.jsx(p,{})})})]})},p=()=>{const r=n.useContext(o),e=n.useContext(d);return t.jsx(t.Fragment,{children:r==null?void 0:r.map(i=>t.jsx(s,{animatedOnInit:i.animatedOnInit,animated:i.animated,dismissible:i.dismissible,type:i.type,onHidden:()=>e({type:"remove",alert:i}),children:i.children},`${i.id}`))})};export{F as default};
