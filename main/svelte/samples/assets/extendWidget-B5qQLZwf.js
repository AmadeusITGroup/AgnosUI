import{ac as u,ag as b}from"./AppCommon-BIOVedX1.js";import{u as g,v as h,s as x}from"./directive-CKEccryv-CY3XbVHQ.js";const w=(l,p,f,a)=>t=>{const r=g(p,t,f),e=t==null?void 0:t.config,d=h(e)?u(()=>({...a,...e()})):{...a,...e??{}},o=l({props:t==null?void 0:t.props,config:d});return{...o,...x({...o.stores,...r}),patch:m=>b(()=>{let s;for(const[c,i]of Object.entries(m??{})){const n=r[`${c}$`];n?n.set(i):(s||(s={}),s[c]=i)}s&&o.patch(s)})}};export{w as e};
