import{a9 as l,ac as m,W as p,ad as u,a6 as f,a7 as d}from"./AppCommon-wWEJ6LdR.js";import{n as a}from"./dom-BB9jLllr-CeqtqeKx.js";const b={status:"pending"},S=e=>{const t=typeof e;return t==="object"&&e!==null||t==="function"?typeof e.then=="function":!1},P=e=>{const t=f(b);return Promise.resolve(e).then(s=>t.set({status:"fulfilled",value:s}),s=>t.set({status:"rejected",reason:s})),d(t)},c=new WeakMap,T=e=>{if(!S(e))return p({status:"fulfilled",value:e});let t=c.get(e);return t||(t=P(e),c.set(e,t)),t},v=(e,t)=>Object.is(e,t)||e.status===t.status&&(e.status!=="fulfilled"||u(e.value,t.value))&&(e.status!=="rejected"||u(e.reason,t.reason)),w=e=>l(()=>T(e())(),{equal:v}),h=(e,t,s)=>m(e,{derive:(n,o)=>{n.status==="fulfilled"&&o(n.value)},equal:s},t),y=(e,t,s)=>h(w(e),t,s),g=e=>!!e,E=(e,t=g)=>{let s;const n=new Promise(r=>s=r);let o=()=>{i(),o=a},i=a;return i=e.subscribe(r=>{t(r)&&(s(r),o())}),o===a&&i(),{promise:n,unsubscribe(){o()}}},W=(e,t)=>{let s;const n=new Promise(r=>s=r);let o=()=>{e.removeEventListener(t,i),o=a};const i=r=>{r.target===e&&(s(r),o())};return e.addEventListener(t,i),{promise:n,unsubscribe(){o()}}},F=e=>{let t;return{promise:new Promise(s=>{t=setTimeout(()=>{t=void 0,s()},e)}),unsubscribe(){t&&(clearTimeout(t),t=void 0)}}},L=()=>{let e;return{promise:new Promise(s=>{e=s}),resolve:e}};export{W as a,F as b,y as c,E as d,L as p};
