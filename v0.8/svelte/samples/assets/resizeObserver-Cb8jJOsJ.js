import{af as i}from"./AppCommon-D7NbxiuO.js";import{o as c,n as v}from"./dom-gfxqXJpK-C4IpTiyS.js";const b=()=>{const{element$:o,directive:s}=c();return{dimensions$:i(o,(r,n)=>{if(r===null)return v;const e=new ResizeObserver(t=>{n(t[0])});return e.observe(r),()=>e==null?void 0:e.disconnect()},void 0),directive:s}};export{b as c};
