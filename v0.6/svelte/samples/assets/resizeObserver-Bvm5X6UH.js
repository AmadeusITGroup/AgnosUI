import{ac as i}from"./AppCommon-C_Uz3Ejm.js";import{z as c,h as v}from"./directive-CKEccryv-Dj2WBjfx.js";const b=()=>{const{element$:o,directive:s}=c();return{dimensions$:i(o,(r,t)=>{if(r===null)return v;const e=new ResizeObserver(n=>{t(n[0])});return e.observe(r),()=>e==null?void 0:e.disconnect()},void 0),directive:s}};export{b as c};