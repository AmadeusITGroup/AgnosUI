import{s as k,f as u,t as p,r as d,q as v,g as m,u as w,i as S,v as D,w as V,x as O}from"./dom-BB9jLllr-Cs0LnZpg.js";const h=Symbol();function I(e){return function(t){v(()=>{var o;for(const[s,n]of Object.entries(t))(o=e[`${s}$`])==null||o.set(n)})}}function A(e,t){if(e===t)return null;let o=!1;const s={},n=new Set([...Object.keys(e),...Object.keys(t)]);for(const r of n){const a=t[r];e[r]!==a&&(s[r]=a,o=!0)}return o?s:null}function W(e,t=d(void 0),o={},s=V(void 0)){const{normalizeValue:n=S,equal:r=Object.is}=o,a=()=>e,i=(c,l=a)=>{const b=c===void 0?void 0:n(c);return b===h?(console.error("Not using invalid value",c),l()):b===void 0?l():b},f=u(()=>i(t()),{equal:r}),g=u(()=>i(s(),f),{equal:r});return m(g,c=>{if(c!==void 0){const l=n(c);if(l===h){console.error("Not setting invalid value",c);return}c=l}s.set(c)})}const y=e=>!!(e&&typeof e=="function"&&"subscribe"in e),$=e=>y(e)?e:d(e),q=e=>y(e)?e:V(e),z=(e,t)=>{const o={};if(t){const s=y(t);for(const n of e)o[n]=s?u(()=>t()[n]):$(t[n])}return o},j=(e,t,o)=>{const s={};for(const n of e){const r=t==null?void 0:t[n],a=o==null?void 0:o[n];s[n]=r&&a?u(()=>r()??a()):r||a}return s},N=(e,t,o)=>{const s={},n=Object.keys(e),r=z(n,t==null?void 0:t.config),a=t==null?void 0:t.props;for(const i of n){const f=a==null?void 0:a[i];s[`${i}$`]=W(e[i],r[i],o==null?void 0:o[i],q(f))}return s},E=(e,t,o)=>{const s=N(e,t,o);return[s,I(s)]},L=e=>{const t=[],o=[],s={};for(const[n,r]of Object.entries(e))n.endsWith("$")&&(t.push(n.substring(0,n.length-1)),o.push(r),s[n]=k(r));return{stores:s,state$:u(()=>{const n=o.map(p),r={};return t.forEach((a,i)=>{r[a]=n[i]}),r})}},R=(e,t,o=n=>n[0],s=(n,r)=>r===n)=>{let n=t[0]();return m(w(t,{derive(r){const a=o(r),i=!s(r[0],a);return i&&t[0].set(a),(i||!s(n,a))&&(n=a,e()(a)),a},equal:s}),t[0].set.bind(t[0]))},U=(e,t,o=S,s=D)=>m(u(()=>o(e()),{equal:s}),n=>{const r=o(n);s(e(),r)||(e.set(r),t()(r))});function _(e){const t=u(()=>O());return u(()=>e()||t())}const F=d(!0);d(!1);export{h as I,N as a,y as b,R as c,U as d,A as f,_ as i,j as m,z as n,L as s,F as t,E as w};
