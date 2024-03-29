import{r as y,a as b,e as f,f as l,b as O,g as d}from"./stores-B4F_j8QF.js";const L=e=>{const t=e.length;if(t===0)return null;let r=e[0];for(let s=1;s<t&&r;s++){const n=e[s];for(;r&&r!==n;){const o=r.compareDocumentPosition(n);if(o&Node.DOCUMENT_POSITION_CONTAINED_BY)break;if(o&Node.DOCUMENT_POSITION_CONTAINS){r=n;break}else if(o&Node.DOCUMENT_POSITION_DISCONNECTED)return null;r=r.parentElement}}return r};function $(e=document.body){e.getBoundingClientRect()}const j=(e,t)=>{t&&t.length>0&&e.classList.add(...t)},w=(e,t)=>{t&&t.length>0&&e.classList.remove(...t)};function v(e,t,r,s){return e.addEventListener(t,r,s),function(){e.removeEventListener(t,r,s)}}let g=0;const k=()=>`auId-${g++}`,p=e=>e!=null&&e!==!1;function h(e,t){let r=new Set;return t.subscribe(s=>{const n=new Set(`${s??""}`.split(" "));n.delete("");const o=e.classList;for(const i of r)n.has(i)||o.remove(i);o.add(...n),r=n})}function C(e,t,r){return r.subscribe(s=>{p(s)?e.setAttribute(t,""+(s===!0?"":s)):e.removeAttribute(t)})}function S(e,t,r){return t==="class"?h(e,r):C(e,t,r)}function D(e,t,r){return r.subscribe(s=>{const n=e.style;n[t]=""+(p(s)?s:"")})}function A(e,t,r){const s=r.subscribe(n=>{e.classList.toggle(t,n)});return()=>{s(),e.classList.remove(t)}}const I=(e,t)=>r=>{let s=!0,n;const o=t.subscribe(i=>{var u;s?(s=!1,n=e(r,i)):(u=n==null?void 0:n.update)==null||u.call(n,i)});return{destroy(){var i;(i=n==null?void 0:n.destroy)==null||i.call(n),o()}}},T=y(void 0),P=e=>I(e,T),U=(e,t=!0)=>()=>{const r=e.subscribe(O);return{destroy:async()=>{t&&await 0,r()}}},x=e=>(t,r)=>(e(r),{update:e}),m={equal:Object.is},_=()=>{const e=b([],m);return f(e,{register:t=>{let r=!1;return e.update(s=>[...s,t]),()=>{r||(r=!0,e.update(s=>{const n=s.indexOf(t);if(n>-1){const o=[...s];return o.splice(n,1),o}return s}))}}})},M=()=>{const e=_();return{elements$:f(e),directive:t=>({destroy:e.register(t)})}},R=()=>{const e=b(null,m);return{element$:f(e),directive:t=>{let r=!1;return e.update(s=>s?(console.error("The directive cannot be used on multiple elements.",s,t),s):(r=!0,t)),r?{destroy(){e.update(s=>t===s?null:s)}}:void 0}}},q=(...e)=>(t,r)=>{const s=l(()=>e.map(n=>n(t,r)));return{update(n){l(()=>s.forEach(o=>{var i;return(i=o==null?void 0:o.update)==null?void 0:i.call(o,n)}))},destroy(){l(()=>s.reverse().forEach(n=>{var o;return(o=n==null?void 0:n.destroy)==null?void 0:o.call(n)}))}}},B=e=>(t,r)=>{const s=[],n=b(r),{events:o,attributes:i,styles:u,classNames:N}=e(n);for(const[a,c]of Object.entries(o??{}))typeof c=="function"?s.push(v(t,a,c)):s.push(v(t,a,c.handler,c.options));for(const[a,c]of Object.entries(i??{}))c!=null&&s.push(S(t,a,d(c)));for(const[a,c]of Object.entries(u??{}))c&&s.push(D(t,a,d(c)));for(const[a,c]of Object.entries(N??{}))s.push(A(t,a,d(c)));return{update:a=>n.set(a),destroy:()=>s.forEach(a=>a())}};export{I as a,P as b,M as c,U as d,R as e,x as f,k as g,w as h,j as i,$ as j,B as k,L as l,q as m,_ as r};
