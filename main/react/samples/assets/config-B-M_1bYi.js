import{r,j as l}from"./App-CsOkU7k8.js";import{f as m,F as W}from"./stores-lycFhSg7.js";import{i as g,w as v,b as d,d as b}from"./dom-gfxqXJpK-DnwY-KAj.js";import{a as x,b as y}from"./stores-DZalyTTa-Bo8fVQaT.js";const f=(e,t,s=1/0)=>{if(t!==void 0)if(typeof t=="object"&&t&&s>=1){e||(e={});for(const o of Object.keys(t))Object.prototype.hasOwnProperty.call(t,o)&&(o==="__proto__"||o==="constructor"||(e[o]=f(e[o],t[o],s-1)))}else return t;return e},p=(e,t=g)=>{const s=v({}),o=t===g?e:d(()=>t(f({},e==null?void 0:e(),2)));return b(d(()=>f(f({},o==null?void 0:o(),2),s(),2)),{...s,own$:s,adaptedParent$:o,parent$:e})};function C(e,t={},s){const o=r.useMemo(()=>e({...s,props:{...s==null?void 0:s.props,...t}}),[]),i=r.useRef(t);return r.useMemo(()=>{const n=m(i.current,t);i.current=t,n&&o.patch(n)},[t]),{state:x(o.stores),api:o.api,directives:o.directives}}const j=(e=r.createContext(void 0))=>{const t=(i,u)=>{const n=r.useContext(e),c=y(u);return r.useMemo(()=>d(()=>({...c(),...i?n==null?void 0:n()[i]:void 0})),[c,i,n])};return{WidgetsConfigContext:e,useWidgetContext:t,useWidget:(i,u,n)=>C(i,u,{config:t(i[W],n)}),WidgetsDefaultConfig:({children:i,adaptParentConfig:u,...n})=>{const c=r.useContext(e),a=r.useMemo(()=>p(c,u),[c,u]);return r.useMemo(()=>a.set(n),[n,a]),l.jsx(e,{value:a,children:i})}}},{useWidget:O}=j();export{O as u,j as w};
