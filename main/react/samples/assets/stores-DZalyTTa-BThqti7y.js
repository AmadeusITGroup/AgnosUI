import{f as d}from"./stores-DmFkKWJa.js";import{f as l,w as h,s as p}from"./dom-gfxqXJpK-C1tLMV8i.js";import{r as u}from"./App-BipCQRdI.js";let f;const S=()=>{if(f)try{for(let s=0;s<f.length;s++){const{rerender:t,state:e,obj:r}=f[s];e.notified===r&&e.hasEffect&&t(r)}}finally{f=void 0}},b=(s,t)=>()=>{if(t.changed&&!t.notified){const e={};t.notified=e,f||(queueMicrotask(S),f=[]),f.push({rerender:s,state:t,obj:e})}};function x(s){const[,t]=u.useState({}),e=u.useMemo(()=>{const n={hasEffect:!1,changed:!1,notified:!1,store$:l(()=>(n.changed=!0,s()))};return n},[s]);u.useEffect(()=>{e.hasEffect=!0;const n=e.store$.subscribe(b(t,e));return()=>{e.hasEffect=!1,n()}},[e]);const r=e.store$();return e.changed=!1,e.notified=!1,r}const g=(s,t)=>{let e=!0;return l(()=>(e?e=!1:t.changed=!0,s()))};function I(s){const[,t]=u.useState({}),e=u.useMemo(()=>{const r={hasEffect:!1,notified:!1,changed:!1,storeInfo:{},checkStoreSubscribed:a=>{const c=s[`${a}$`];if(c){let o=r.storeInfo[a];if(!o||o.store!==c){const i=o==null?void 0:o.unsubscribe;o={store:c,computedStore:g(c,r),unsubscribe:null},r.storeInfo[a]=o,i==null||i()}return r.hasEffect&&!o.unsubscribe&&(o.unsubscribe=o.computedStore.subscribe(n)),o.computedStore}},proxy:new Proxy({},{get(a,c){const o=typeof c=="string"?r.checkStoreSubscribed(c):null;return o==null?void 0:o()}})},n=b(t,r);return r},[]);return e.notified=!1,e.changed=!1,u.useEffect(()=>{e.hasEffect=!0;for(const r of Object.keys(e.storeInfo))e.checkStoreSubscribed(r);return()=>{e.hasEffect=!1;for(const r of Object.values(e.storeInfo)){const n=r.unsubscribe;r.unsubscribe=null,n==null||n()}}},[s]),e.proxy}const m=(s,t)=>!d(s,t),C=s=>{const t=u.useRef(void 0);return t.current?t.current.set({...s}):t.current=h({...s},{equal:m}),u.useMemo(()=>p(t.current),[t.current])};export{C as a,I as b,x as u};
