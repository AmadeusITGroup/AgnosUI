import{e as y,u as h,r as w,h as g,a9 as L}from"./YLwudSZN.js";import{w as d,e as S,f as u,n as C,r as D,g as j}from"./B89ZIfjF.js";function R(e,t,r){y(()=>{var s=h(()=>t(e,r?.())||{});if(r&&s?.update){var n=!1,i={};w(()=>{var o=r();g(o),n&&L(i,o)&&(i=o,s.update(o))}),n=!0}if(s?.destroy)return()=>s.destroy()})}function b(e){var t,r,s="";if(typeof e=="string"||typeof e=="number")s+=e;else if(typeof e=="object")if(Array.isArray(e)){var n=e.length;for(t=0;t<n;t++)e[t]&&(r=b(e[t]))&&(s&&(s+=" "),s+=r)}else for(r in e)e[r]&&(s&&(s+=" "),s+=r);return s}function A(){for(var e,t,r=0,s="",n=arguments.length;r<n;r++)(e=arguments[r])&&(t=b(e))&&(s&&(s+=" "),s+=t);return s}const l=e=>{var t;const r=((t=e?.ownerDocument)==null?void 0:t.defaultView)??window;return e instanceof r.HTMLElement},E=e=>(t,r)=>{if(l(t))return e(t,r)};D(void 0);const k=(e,t=!0)=>()=>{const r=e.subscribe(C);return{destroy:async()=>{t&&await Promise.resolve(),r()}}},O={equal:Object.is},_=()=>{const e=d(null,O);return{element$:S(e),directive:t=>{let r=!1;return e.update(s=>s?(console.error("The directive cannot be used on multiple elements.",s,t),s):(r=!0,t)),r?{destroy(){e.update(s=>t===s?null:s)}}:void 0}}},z=()=>{const{directive:e,element$:t}=_();return{directive:E(e),element$:t}},P=(...e)=>(t,r)=>{const s=u(()=>e.map(n=>n(t,r)));return{update(n){u(()=>s.forEach(i=>{var o;return(o=i?.update)==null?void 0:o.call(i,n)}))},destroy(){u(()=>s.reverse().forEach(n=>{var i;return(i=n?.destroy)==null?void 0:i.call(n)}))}}},N=e=>(t,r)=>{const s=[],n=d(r),{events:i,attributes:o,styles:p,classNames:m}=e(n);if(l(t))for(const[a,c]of Object.entries(i??{}))typeof c=="function"?s.push(f(t,a,c)):s.push(f(t,a,c.handler,c.options));for(const[a,c]of Object.entries(o??{}))c!=null&&s.push(B(t,a,c));for(const[a,c]of Object.entries(p??{}))c&&s.push(T(t,a,c));for(const[a,c]of Object.entries(m??{}))s.push(x(t,a,c));return{update:a=>n.set(a),destroy:()=>s.forEach(a=>a())}},V=N(e=>({attributes:{class:j(()=>A(e()))}})),W=(e=document.body)=>{l(e)&&e.getBoundingClientRect()},F=(e,t)=>{t&&t.length>0&&e.classList.add(...t)},G=(e,t)=>{t&&t.length>0&&e.classList.remove(...t)};function f(e,t,r,s){return e.addEventListener(t,r,s),function(){e.removeEventListener(t,r,s)}}const v=e=>e!=null&&e!==!1;function $(e,t){let r=new Set;return t.subscribe(s=>{const n=new Set(`${s??""}`.split(" "));n.delete("");const i=e.classList;for(const o of r)n.has(o)||i.remove(o);n.size>0&&i.add(...n),r=n})}function q(e,t,r){return r.subscribe(s=>{v(s)?e.setAttribute(t,""+(s===!0?t:s)):e.removeAttribute(t)})}function B(e,t,r){return t==="class"?$(e,r):q(e,t,r)}function T(e,t,r){return r.subscribe(s=>{const n=e.style;n[t]=""+(v(s)?s:"")})}function x(e,t,r){const s=r.subscribe(n=>{e.classList.toggle(t,n)});return()=>{s(),e.classList.remove(t)}}export{R as a,E as b,z as c,V as d,_ as e,k as f,F as g,W as h,l as i,P as m,G as r};
