import{G as b,ab as u}from"./AppCommon--XJnjPQd.js";import{y as h,z as x,s as P}from"./directive-DCYlDznf-Cmj9bg2S.js";const S=(l,p,f,r)=>t=>{const a=h(p,t,f),e=t==null?void 0:t.config,d=x(e)?b(()=>({...r,...e()})):{...r,...e??{}},o=l({props:t==null?void 0:t.props,config:d});return{...o,...P({...o.stores,...a}),patch:m=>u(()=>{let s;for(const[c,i]of Object.entries(m??{})){const n=a[`${c}$`];n?n.set(i):(s||(s={}),s[c]=i)}s&&o.patch(s)})}};export{S as e};