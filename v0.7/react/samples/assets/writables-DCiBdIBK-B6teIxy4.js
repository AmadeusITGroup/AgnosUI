import{I as u}from"./directive-CKEccryv-BEge1hNH.js";function f(e){return typeof e=="number"&&!isNaN(e)&&Number.isFinite(e)}function l(e){return e===!0||e===!1}function y(e){return typeof e=="function"}function p(e){return typeof e=="string"}const N=Array.isArray;function z(e,n,o=0){return Math.max(Math.min(e,n),o)}const V=e=>e instanceof HTMLElement,a=e=>n=>n===null||e(n);function b(e){return n=>e.includes(n)}const r=e=>n=>e(n)?n:u,s=r(f),A={normalizeValue:s};function E(e,n,o={}){const{strict:i=!1,useClamp:c=!0}=o;return{normalizeValue:m=>{let t=s(m);return t!==u&&(!i&&c&&(t=z(t,n,e)),t>=e&&t<=n&&(!i||t!==e&&t!==n))?t:u}}}const F={normalizeValue:r(l)},d={normalizeValue:r(a(l))},h={normalizeValue:r(p)},L={normalizeValue:r(y),equal:Object.is},M={normalizeValue:r(a(V)),equal:Object.is},T={normalizeValue:r(N),equal:(e,n)=>e===n?!0:(e==null?void 0:e.length)!==(n==null?void 0:n.length)?!1:e.every((o,i)=>o===n[i])};function I(e){return{normalizeValue:r(b(e))}}export{L as a,h as b,d as c,I as d,z as e,A as f,M as g,T as h,f as i,E as j,F as t};
