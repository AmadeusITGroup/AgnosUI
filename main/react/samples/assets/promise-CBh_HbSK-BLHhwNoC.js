import{h as l,E as m,r as p,F as a,n as u,f,B as d}from"./stores-DX-ADOKq-MSAn3urh.js";const b={status:"pending"},S=e=>{const s=typeof e;return s==="object"&&e!==null||s==="function"?typeof e.then=="function":!1},P=e=>{const s=f(b);return Promise.resolve(e).then(t=>s.set({status:"fulfilled",value:t}),t=>s.set({status:"rejected",reason:t})),d(s)},c=new WeakMap,T=e=>{if(!S(e))return p({status:"fulfilled",value:e});let s=c.get(e);return s||(s=P(e),c.set(e,s)),s},h=(e,s)=>Object.is(e,s)||e.status===s.status&&(e.status!=="fulfilled"||a(e.value,s.value))&&(e.status!=="rejected"||a(e.reason,s.reason)),v=e=>l(()=>T(e())(),{equal:h}),w=(e,s,t)=>m(e,{derive:(n,r)=>{n.status==="fulfilled"&&r(n.value)},equal:t},s),j=(e,s,t)=>w(v(e),s,t),E=e=>!!e,q=(e,s=E)=>{let t;const n=new Promise(o=>t=o);let r=()=>{i(),r=u},i=u;return i=e.subscribe(o=>{s(o)&&(t(o),r())}),r===u&&i(),{promise:n,unsubscribe(){r()}}},y=(e,s)=>{let t;const n=new Promise(o=>t=o);let r=()=>{e.removeEventListener(s,i),r=u};const i=o=>{o.target===e&&(t(o),r())};return e.addEventListener(s,i),{promise:n,unsubscribe(){r()}}},F=e=>{let s;return{promise:new Promise(t=>{s=setTimeout(()=>{s=void 0,t()},e)}),unsubscribe(){s&&(clearTimeout(s),s=void 0)}}},L=()=>{let e;return{promise:new Promise(t=>{e=t}),resolve:e}};export{y as a,F as b,j as c,q as d,L as p};
