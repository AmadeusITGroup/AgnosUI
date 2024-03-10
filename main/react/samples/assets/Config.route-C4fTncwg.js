import{r as i,j as e}from"./index-BjtocQEC.js";import{A as h}from"./alert-CDseLg0d.js";import"./extendWidget-35deThr9.js";import"./baseTransitions-QIJg34my.js";import"./func-BRtNsj1u.js";import"./writables-BNxSaSLV.js";import"./stores-m8eykaCI.js";import"./promise-DMV7Hn63.js";import"./directive-DUa5cKFs.js";import"./fade-Z0oyjVmj.js";import"./simpleClassTransition-DHD_E3eD.js";import"./cssTransitions-b4jo4tZj.js";import"./dom-Hs1W5kAC.js";import"./config-1FD0jZZ8.js";import"./widget-_uZ3LlCT.js";import"./stores-0M5MgD8w.js";var l=(t=>(t.success="success",t.info="info",t.warning="warning",t.danger="danger",t.primary="primary",t.secondary="secondary",t.light="light",t.dark="dark",t))(l||{});const E=()=>{const t=i.useRef(null),[n,o]=i.useState(!0),[r,m]=i.useState(!0),[a,d]=i.useState(!0),[c,p]=i.useState("success");return e.jsxs(e.Fragment,{children:[e.jsx("button",{type:"button",className:"btn btn-primary showAlert",onClick:()=>{var s;return(s=t.current)==null?void 0:s.open()},children:"Show alert"}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs("div",{className:"d-flex flex-column",children:[e.jsxs("div",{className:"d-flex form-group",children:[e.jsxs("label",{className:"align-self-center me-3",htmlFor:"typeSelect",children:["Alert type:"," "]}),e.jsx("select",{id:"typeSelect",className:"form-select w-auto",value:c,onChange:s=>p(s.target.value),children:Object.entries(l).map(s=>({value:s[1],label:s[0]})).map(s=>e.jsx("option",{value:s.value,children:s.label},s.value))})]}),e.jsxs("label",{children:[e.jsx("input",{className:"form-check-input me-1",type:"checkbox",defaultChecked:n,onChange:s=>o(s.target.checked)}),"Animated on init"]}),e.jsxs("label",{children:[e.jsx("input",{className:"form-check-input me-1",type:"checkbox",defaultChecked:r,onChange:s=>m(s.target.checked)}),"Animated"]}),e.jsxs("label",{children:[e.jsx("input",{className:"dismissibleInput form-check-input me-1",type:"checkbox",defaultChecked:a,onChange:s=>d(s.target.checked)}),"Dismissible"]})]}),e.jsx("br",{}),e.jsx("br",{}),e.jsxs(h,{ref:t,animatedOnInit:n,animated:r,dismissible:a,type:c,children:[e.jsx("h4",{className:"alert-heading",children:"Well done!"}),e.jsx("p",{children:"Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content."}),e.jsx("hr",{}),e.jsx("p",{className:"mb-0",children:"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."})]})]})};export{l as AlertStatus,E as default};
