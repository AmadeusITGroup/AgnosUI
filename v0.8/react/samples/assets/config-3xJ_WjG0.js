import{r as f,j as W}from"./App-kURn6ZdU.js";import{i as l,w as a,f as d,g as m}from"./dom-gfxqXJpK-C1tLMV8i.js";import{u as C}from"./widget-BP6z-zfB-DViPobRn.js";import{a as p}from"./stores-DZalyTTa-DxlI3GvK.js";const c=(t,o,i=1/0)=>{if(o!==void 0)if(typeof o=="object"&&o&&i>=1){t||(t={});for(const e of Object.keys(o))Object.prototype.hasOwnProperty.call(o,e)&&(e==="__proto__"||e==="constructor"||(t[e]=c(t[e],o[e],i-1)))}else return o;return t},x=(t,o=l)=>{const i=a({}),e=o===l?t:d(()=>o(c({},t==null?void 0:t(),2)));return m(d(()=>c(c({},e==null?void 0:e(),2),i(),2)),{...i,own$:i,adaptedParent$:e,parent$:t})},y=(t=f.createContext(void 0))=>{const o=(n,u)=>{const s=f.useContext(t),r=p(u);return f.useMemo(()=>d(()=>({...r(),...n?s==null?void 0:s()[n]:void 0})),[r,n,s])};return{WidgetsConfigContext:t,useWidgetContext:o,useWidgetWithConfig:(n,u,s,r)=>C(n,u,{config:o(s,r)}),WidgetsDefaultConfig:({children:n,adaptParentConfig:u,...s})=>{const r=f.useContext(t),g=f.useMemo(()=>x(r,u),[r,u]);return f.useMemo(()=>g.set(s),[s,g]),W.jsx(t,{value:g,children:n})}}},{useWidgetWithConfig:w}=y();export{w as u,y as w};
