import{x as h,y as x,h as b,s as m,z as P}from"./stores-DX-ADOKq-MSAn3urh.js";const w=(l,d,f,n)=>t=>{const a=h(d,t,f),s=t==null?void 0:t.config,p=x(s)?b(()=>({...n,...s()})):{...n,...s??{}},o=l({props:t==null?void 0:t.props,config:p});return{...o,...m({...o.stores,...a}),patch:u=>P(()=>{let e;for(const[r,c]of Object.entries(u??{})){const i=a[`${r}$`];i?i.set(c):(e||(e={}),e[r]=c)}e&&o.patch(e)})}};export{w as e};
