import{r as n,j as t}from"./App-uWCEDvX1.js";import{A as s}from"./alert-CTTuh9t9-DTJmokh5.js";import"./slot-geF0GQ1O.js";import"./directive-DNXkB1Wc-DXs93Lkj.js";import"./directive-CKEccryv-BrWl76X8.js";import"./config-VJ0Gl394.js";import"./config-CrveCMaq.js";import"./widget-DaA-pe23-DDgilb67.js";import"./stores-B90XF8Sy-CHGO_oWT.js";import"./alert-DJ2l7bcA-7lG4YEx5.js";import"./common-Banw3FYN-CBP3awik.js";import"./baseTransitions-dMm0ZLXi.js";import"./writables-DCiBdIBK-CaNqvQxH.js";import"./promise-CY2U8bTP-BBXElGUG.js";import"./extendWidget-DH8OAK3L.js";import"./fade-uOobJKgw-DqfTw5Cx.js";import"./simpleClassTransition-TUrNxN3_.js";import"./cssTransitions-CcrXbQiX.js";import"./types-Bw2nvhNr.js";const d=n.createContext([]),o=n.createContext(null);let a=0;function m(r,e){switch(e.type){case"add":return[...r,{...e.payload,id:a++}];case"remove":return r.filter(i=>i!==e.alert)}}const R=()=>{const[r,e]=n.useReducer(m,[]);return t.jsxs(t.Fragment,{children:[t.jsx("button",{className:"btn btn-primary addError me-1",onClick:()=>e({type:"add",payload:{type:"danger",children:"Error",dismissible:!0,animated:!0}}),children:"Add error"}),t.jsx("button",{className:"btn btn-primary addInfo me-1",onClick:()=>e({type:"add",payload:{type:"info",children:"Info",dismissible:!0,animated:!0}}),children:"Add info"}),t.jsx("button",{className:"btn btn-primary addWarning me-1",onClick:()=>e({type:"add",payload:{type:"warning",children:"Warning",dismissible:!0,animated:!0}}),children:"Add warning"}),t.jsx("br",{}),t.jsxs("div",{className:"alertCount mb-3",children:["Alerts in the service: ",r.length]}),t.jsx(d.Provider,{value:r,children:t.jsx(o.Provider,{value:e,children:t.jsx(p,{})})})]})},p=()=>{const r=n.useContext(d),e=n.useContext(o);return t.jsx(t.Fragment,{children:r==null?void 0:r.map(i=>t.jsx(s,{animatedOnInit:i.animatedOnInit,animated:i.animated,dismissible:i.dismissible,type:i.type,onHidden:()=>e({type:"remove",alert:i}),children:i.children},`${i.id}`))})};export{R as default};
