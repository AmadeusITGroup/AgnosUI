import{$ as b,ad as u}from"./AppCommon-B-ROr4aU.js";import{b as h,c as x,s as P}from"./stores-DWJrwGVR.js";const S=(l,p,d,r)=>t=>{const a=h(p,t,d),e=t==null?void 0:t.config,f=x(e)?b(()=>({...r,...e()})):{...r,...e??{}},o=l({props:t==null?void 0:t.props,config:f});return{...o,...P({...o.stores,...a}),patch:m=>u(()=>{let s;for(const[c,i]of Object.entries(m??{})){const n=a[`${c}$`];n?n.set(i):(s||(s={}),s[c]=i)}s&&o.patch(s)})}};export{S as e};
