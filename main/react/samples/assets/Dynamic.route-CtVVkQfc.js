import{r as n,j as e}from"./App-DI9ur9y5.js";import{A as s}from"./alert-0W1n8ahW-BMyVMeYX.js";import"./config-D3v6G0iM.js";import"./config-C0ibonqk.js";import"./directive-CKEccryv-B1ye-Yy0.js";import"./widget-DAs9_HQ1-7RGw_aKa.js";import"./stores-B8YEDwZq-rhLwL-y_.js";import"./directive-Kqp31pwt-Z1XipxII.js";import"./alert-Dr0Q8aY8-iXA30lIP.js";import"./common-B7Hzs2vg-B_-881K7.js";import"./baseTransitions-DZKc2Zuo.js";import"./writables-DoU_XYTX-CPJYVIsx.js";import"./promise-CY2U8bTP-C0h_X4yL.js";import"./extendWidget-X8VLvE1U.js";import"./fade-uOobJKgw-Bf-N6q4C.js";import"./simpleClassTransition-DM5VzvLh.js";import"./cssTransitions-Pg2qqAzo.js";const d=n.createContext([]),o=n.createContext(null);let a=0;function m(r,t){switch(t.type){case"add":return[...r,{...t.payload,id:a++}];case"remove":return r.filter(i=>i!==t.alert)}}const w=()=>{const[r,t]=n.useReducer(m,[]);return e.jsxs(e.Fragment,{children:[e.jsx("button",{className:"btn btn-primary addError me-1",onClick:()=>t({type:"add",payload:{type:"danger",children:"Error",dismissible:!0,animated:!0}}),children:"Add error"}),e.jsx("button",{className:"btn btn-primary addInfo me-1",onClick:()=>t({type:"add",payload:{type:"info",children:"Info",dismissible:!0,animated:!0}}),children:"Add info"}),e.jsx("button",{className:"btn btn-primary addWarning me-1",onClick:()=>t({type:"add",payload:{type:"warning",children:"Warning",dismissible:!0,animated:!0}}),children:"Add warning"}),e.jsx("br",{}),e.jsxs("div",{className:"alertCount mb-3",children:["Alerts in the service: ",r.length]}),e.jsx(d.Provider,{value:r,children:e.jsx(o.Provider,{value:t,children:e.jsx(p,{})})})]})},p=()=>{const r=n.useContext(d),t=n.useContext(o);return e.jsx(e.Fragment,{children:r==null?void 0:r.map(i=>e.jsx(s,{animatedOnInit:i.animatedOnInit,animated:i.animated,dismissible:i.dismissible,type:i.type,onHidden:()=>t({type:"remove",alert:i}),children:i.children},`${i.id}`))})};export{w as default};