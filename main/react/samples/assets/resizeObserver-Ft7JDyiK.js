import{z as i,u as c,n as v}from"./dom-gfxqXJpK-C1tLMV8i.js";const b=()=>{const{element$:s,directive:o}=i();return{dimensions$:c(s,(r,n)=>{if(r===null)return v;const e=new ResizeObserver(t=>{n(t[0])});return e.observe(r),()=>e==null?void 0:e.disconnect()},void 0),directive:o}};export{b as c};
