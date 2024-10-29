import{ab as p,ac as u,ad as h,ae as A,af as _,ag as v,Y as S,ah as E,ai as b}from"./AppCommon-BIOVedX1.js";const T=()=>{},w=e=>e,g=Symbol();function V(e){return function(t){v(()=>{var n;for(const[s,r]of Object.entries(t))(n=e[`${s}$`])==null||n.set(r)})}}function J(e,t){if(e===t)return null;let n=!1;const s={},r=new Set([...Object.keys(e),...Object.keys(t)]);for(const o of r){const i=t[o];e[o]!==i&&(s[o]=i,n=!0)}return n?s:null}function $(e,t=S(void 0),n={},s=b(void 0)){const{normalizeValue:r=w,equal:o=Object.is}=n,i=()=>e,a=(c,f=i)=>{const y=c===void 0?void 0:r(c);return y===g?(console.error("Not using invalid value",c),f()):y===void 0?f():y},d=u(()=>a(t()),{equal:o}),l=u(()=>a(s(),d),{equal:o});return h(l,c=>{if(c!==void 0){const f=r(c);if(f===g){console.error("Not setting invalid value",c);return}c=f}s.set(c)})}const O=e=>!!(e&&typeof e=="function"&&"subscribe"in e),m=e=>O(e)?e:S(e),L=e=>O(e)?e:b(e),P=(e,t)=>{const n={};if(t){const s=O(t);for(const r of e)n[r]=s?u(()=>t()[r]):m(t[r])}return n},K=(e,t,n)=>{const s={};for(const r of e){const o=t==null?void 0:t[r],i=n==null?void 0:n[r];s[r]=o&&i?u(()=>o()??i()):o||i}return s},j=(e,t,n)=>{const s={},r=Object.keys(e),o=P(r,t==null?void 0:t.config),i=t==null?void 0:t.props;for(const a of r){const d=i==null?void 0:i[a];s[`${a}$`]=$(e[a],o[a],n==null?void 0:n[a],L(d))}return s},Q=(e,t,n)=>{const s=j(e,t,n);return[s,V(s)]},X=e=>{const t=[],n=[],s={};for(const[r,o]of Object.entries(e))r.endsWith("$")&&(t.push(r.substring(0,r.length-1)),n.push(o),s[r]=p(o));return{stores:s,state$:u(()=>{const r=n.map(E),o={};return t.forEach((i,a)=>{o[i]=r[a]}),o})}},Z=(e,t,n=r=>r[0],s=(r,o)=>o===r)=>{let r=t[0]();return h(A(t,{derive(o){const i=n(o),a=!s(o[0],i);return a&&t[0].set(i),(a||!s(r,i))&&(r=i,e()(i)),i},equal:s}),t[0].set.bind(t[0]))},x=(e,t,n=w,s=_)=>h(u(()=>n(e()),{equal:s}),r=>{const o=n(r);s(e(),o)||(e.set(o),t()(o))}),ee=e=>{const t=e.length;if(t===0)return null;let n=e[0];for(let s=1;s<t&&n;s++){const r=e[s];for(;n&&n!==r;){const o=n.compareDocumentPosition(r);if(o&Node.DOCUMENT_POSITION_CONTAINED_BY)break;if(o&Node.DOCUMENT_POSITION_CONTAINS){n=r;break}else if(o&Node.DOCUMENT_POSITION_DISCONNECTED)return null;n=n.parentElement}}return n},te=(e=document.body)=>{N(e)&&e.getBoundingClientRect()},se=(e,t)=>{t&&t.length>0&&e.classList.add(...t)},re=(e,t)=>{t&&t.length>0&&e.classList.remove(...t)};function D(e,t,n,s){return e.addEventListener(t,n,s),function(){e.removeEventListener(t,n,s)}}let q=0;const ne=()=>`auId-${q++}`,C=e=>e!=null&&e!==!1;function z(e,t){let n=new Set;return t.subscribe(s=>{const r=new Set(`${s??""}`.split(" "));r.delete("");const o=e.classList;for(const i of n)r.has(i)||o.remove(i);r.size>0&&o.add(...r),n=r})}function B(e,t,n){return n.subscribe(s=>{C(s)?e.setAttribute(t,""+(s===!0?t:s)):e.removeAttribute(t)})}function W(e,t,n){return t==="class"?z(e,n):B(e,t,n)}function M(e,t,n){return n.subscribe(s=>{const r=e.style;r[t]=""+(C(s)?s:"")})}function U(e,t,n){const s=n.subscribe(r=>{e.classList.toggle(t,r)});return()=>{s(),e.classList.remove(t)}}const N=e=>{var t;const n=((t=e==null?void 0:e.ownerDocument)==null?void 0:t.defaultView)??window;return e instanceof n.HTMLElement},I=e=>(t,n)=>{if(N(t))return e(t,n)},oe=(e,t)=>n=>{let s=!0,r;const o=t.subscribe(i=>{var a;s?(s=!1,r=e(n,i)):(a=r==null?void 0:r.update)==null||a.call(r,i)});return{destroy(){var i;(i=r==null?void 0:r.destroy)==null||i.call(r),o()}}};S(void 0);const ie=(e,t=!0)=>()=>{const n=e.subscribe(T);return{destroy:async()=>{t&&await Promise.resolve(),n()}}},k={equal:Object.is},R=()=>{const e=b([],k);return p(e,{register:t=>{let n=!1;return e.update(s=>[...s,t]),()=>{n||(n=!0,e.update(s=>{const r=s.indexOf(t);if(r>-1){const o=[...s];return o.splice(r,1),o}return s}))}}})},H=()=>{const e=R();return{elements$:p(e),directive:t=>({destroy:e.register(t)})}},ce=()=>{const{directive:e,elements$:t}=H();return{directive:I(e),elements$:t}},Y=()=>{const e=b(null,k);return{element$:p(e),directive:t=>{let n=!1;return e.update(s=>s?(console.error("The directive cannot be used on multiple elements.",s,t),s):(n=!0,t)),n?{destroy(){e.update(s=>t===s?null:s)}}:void 0}}},ae=()=>{const{directive:e,element$:t}=Y();return{directive:I(e),element$:t}},le=(...e)=>(t,n)=>{const s=v(()=>e.map(r=>r(t,n)));return{update(r){v(()=>s.forEach(o=>{var i;return(i=o==null?void 0:o.update)==null?void 0:i.call(o,r)}))},destroy(){v(()=>s.reverse().forEach(r=>{var o;return(o=r==null?void 0:r.destroy)==null?void 0:o.call(r)}))}}},F=e=>(t,n)=>{const s=[],r=b(n),{events:o,attributes:i,styles:a,classNames:d}=e(r);if(N(t))for(const[l,c]of Object.entries(o??{}))typeof c=="function"?s.push(D(t,l,c)):s.push(D(t,l,c.handler,c.options));for(const[l,c]of Object.entries(i??{}))c!=null&&s.push(W(t,l,m(c)));for(const[l,c]of Object.entries(a??{}))c&&s.push(M(t,l,m(c)));for(const[l,c]of Object.entries(d??{}))s.push(U(t,l,m(c)));return{update:l=>r.set(l),destroy:()=>s.forEach(l=>l())}},ue=F(e=>({attributes:{class:e}}));export{ce as A,oe as B,ee as C,g as I,F as a,I as b,ue as c,D as d,K as e,J as f,ie as g,T as h,w as i,ne as j,N as k,re as l,le as m,P as n,se as o,te as p,j as q,R as r,X as s,m as t,O as u,Y as v,Q as w,Z as x,x as y,ae as z};
