import{I as s}from"./stores-g_eezu9j.js";function f(e){return typeof e=="number"&&!isNaN(e)&&Number.isFinite(e)}function l(e){return e===!0||e===!1}function y(e){return typeof e=="function"}function p(e){return typeof e=="string"}const N=Array.isArray;function z(e,n,o=0){return Math.max(Math.min(e,n),o)}const V=e=>e instanceof HTMLElement,a=e=>n=>n===null||e(n),r=e=>n=>e(n)?n:s,u=r(f),A={normalizeValue:u};function h(e,n,o={}){const{strict:i=!1,useClamp:c=!0}=o;return{normalizeValue:m=>{let t=u(m);return t!==s&&(!i&&c&&(t=z(t,n,e)),t>=e&&t<=n&&(!i||t!==e&&t!==n))?t:s}}}const F={normalizeValue:r(l)},L={normalizeValue:r(a(l))},M={normalizeValue:r(p)},b={normalizeValue:r(y),equal:Object.is},E={normalizeValue:r(a(V)),equal:Object.is},I={normalizeValue:r(N),equal:(e,n)=>e===n?!0:(e==null?void 0:e.length)!==(n==null?void 0:n.length)?!1:e.every((o,i)=>o===n[i])};export{b as a,M as b,E as c,z as d,A as e,L as f,I as g,h,f as i,F as t};
