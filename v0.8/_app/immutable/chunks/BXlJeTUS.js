import{v as ue,w as E,x as ce,g as P,ag as fe,H as ve,y as $,z as N,A as I,F as T,a0 as de,B as Q,C as U,D as pe,ay as O,a4 as X,R as V,az as j,J as he,a8 as W,ad as me,aA as R,aB as be,a3 as _e,aC as ge,M as we,aD as k,aE as ye,Z as Se,P as Ee,Q as Ae,q as Ce,aF as Z,aG as Te,l as xe,b as Le,m as De,e as He,W as Me}from"./wub7L5-0.js";import{f as L,w as D,r as K,g as q,n as ee,h as te,i as Ne,j as F}from"./BA9RmJUk.js";function tt(t,e){return e}function Ie(t,e,r,s){for(var n=[],a=e.length,i=0;i<a;i++)be(e[i].e,n,!0);var p=a>0&&n.length===0&&r!==null;if(p){var m=r.parentNode;_e(m),m.append(r),s.clear(),S(t,e[0].prev,e[a-1].next)}ge(n,()=>{for(var f=0;f<a;f++){var l=e[f];p||(s.delete(l.k),S(t,l.prev,l.next)),we(l.e,!p)}})}function rt(t,e,r,s,n,a=null){var i=t,p={flags:e,items:new Map,first:null},m=(e&Z)!==0;if(m){var f=t;i=E?N(Ee(f)):f.appendChild(Ae())}E&&ce();var l=null,A=!1,c=fe(()=>{var d=r();return me(d)?d:d==null?[]:X(d)});ue(()=>{var d=P(c),o=d.length;if(A&&o===0)return;A=o===0;let w=!1;if(E){var b=i.data===ve;b!==(o===0)&&(i=$(),N(i),I(!1),w=!0)}if(E){for(var _=null,g,h=0;h<o;h++){if(T.nodeType===8&&T.data===de){i=T,w=!0,I(!1);break}var u=d[h],v=s(u,h);g=re(T,p,_,null,u,v,h,n,e,r),p.items.set(v,g),_=g}o>0&&N($())}E||Oe(d,p,i,n,e,s,r),a!==null&&(o===0?l?Q(l):l=U(()=>a(i)):l!==null&&pe(l,()=>{l=null})),w&&I(!0),P(c)}),E&&(i=T)}function Oe(t,e,r,s,n,a,i){var p=(n&Te)!==0,m=(n&(k|R))!==0,f=t.length,l=e.items,A=e.first,c=A,d,o=null,w,b=[],_=[],g,h,u,v;if(p)for(v=0;v<f;v+=1)g=t[v],h=a(g,v),u=l.get(h),u!==void 0&&(u.a?.measure(),(w??=new Set).add(u));for(v=0;v<f;v+=1){if(g=t[v],h=a(g,v),u=l.get(h),u===void 0){var oe=c?c.e.nodes_start:r;o=re(oe,e,o,o===null?e.first:o.next,g,h,v,s,n,i),l.set(h,o),b=[],_=[],c=o.next;continue}if(m&&qe(u,g,v,n),(u.e.f&O)!==0&&(Q(u.e),p&&(u.a?.unfix(),(w??=new Set).delete(u))),u!==c){if(d!==void 0&&d.has(u)){if(b.length<_.length){var x=_[0],y;o=x.prev;var z=b[0],H=b[b.length-1];for(y=0;y<b.length;y+=1)Y(b[y],x,r);for(y=0;y<_.length;y+=1)d.delete(_[y]);S(e,z.prev,H.next),S(e,o,z),S(e,H,x),c=x,o=H,v-=1,b=[],_=[]}else d.delete(u),Y(u,c,r),S(e,u.prev,u.next),S(e,u,o===null?e.first:o.next),S(e,o,u),o=u;continue}for(b=[],_=[];c!==null&&c.k!==h;)(c.e.f&O)===0&&(d??=new Set).add(c),_.push(c),c=c.next;if(c===null)continue;u=c}b.push(u),o=u,c=u.next}if(c!==null||d!==void 0){for(var C=d===void 0?[]:X(d);c!==null;)(c.e.f&O)===0&&C.push(c),c=c.next;var M=C.length;if(M>0){var le=(n&Z)!==0&&f===0?r:null;if(p){for(v=0;v<M;v+=1)C[v].a?.measure();for(v=0;v<M;v+=1)C[v].a?.fix()}Ie(e,C,le,l)}}p&&Ce(()=>{if(w!==void 0)for(u of w)u.a?.apply()}),V.first=e.first&&e.first.e,V.last=o&&o.e}function qe(t,e,r,s){(s&k)!==0&&j(t.v,e),(s&R)!==0?j(t.i,r):t.i=r}function re(t,e,r,s,n,a,i,p,m,f){var l=(m&k)!==0,A=(m&ye)===0,c=l?A?he(n):W(n):n,d=(m&R)===0?i:W(i),o={i:d,v:c,k:a,a:null,e:null,prev:r,next:s};try{return o.e=U(()=>p(t,c,d,f),E),o.e.prev=r&&r.e,o.e.next=s&&s.e,r===null?e.first=o:(r.next=o,r.e.next=o.e),s!==null&&(s.prev=o,s.e.prev=o.e),o}finally{}}function Y(t,e,r){for(var s=t.next?t.next.e.nodes_start:r,n=e?e.e.nodes_start:r,a=t.e.nodes_start;a!==s;){var i=Se(a);n.before(a),a=i}}function S(t,e,r){e===null?t.first=r:(e.next=r,e.e.next=r&&r.e),r!==null&&(r.prev=e,r.e.prev=e&&e.e)}function st(t,e,r){xe(()=>{var s=Le(()=>e(t,r?.())||{});if(r&&s?.update){var n=!1,a={};De(()=>{var i=r();He(i),n&&Me(a,i)&&(a=i,s.update(i))}),n=!0}if(s?.destroy)return()=>s.destroy()})}function se(t){var e,r,s="";if(typeof t=="string"||typeof t=="number")s+=t;else if(typeof t=="object")if(Array.isArray(t)){var n=t.length;for(e=0;e<n;e++)t[e]&&(r=se(t[e]))&&(s&&(s+=" "),s+=r)}else for(r in t)t[r]&&(s&&(s+=" "),s+=r);return s}function Re(){for(var t,e,r=0,s="",n=arguments.length;r<n;r++)(t=arguments[r])&&(e=se(t))&&(s&&(s+=" "),s+=e);return s}const B=t=>{var e;const r=((e=t?.ownerDocument)==null?void 0:e.defaultView)??window;return t instanceof r.HTMLElement},ne=t=>(e,r)=>{if(B(e))return t(e,r)};K(void 0);const nt=(t,e=!0)=>()=>{const r=t.subscribe(ee);return{destroy:async()=>{e&&await Promise.resolve(),r()}}},ae={equal:Object.is},ke=()=>{const t=D([],ae);return L(t,{register:e=>{let r=!1;return t.update(s=>[...s,e]),()=>{r||(r=!0,t.update(s=>{const n=s.indexOf(e);if(n>-1){const a=[...s];return a.splice(n,1),a}return s}))}}})},Be=()=>{const t=ke();return{elements$:L(t),directive:e=>({destroy:t.register(e)})}},at=()=>{const{directive:t,elements$:e}=Be();return{directive:ne(t),elements$:e}},ze=()=>{const t=D(null,ae);return{element$:L(t),directive:e=>{let r=!1;return t.update(s=>s?(console.error("The directive cannot be used on multiple elements.",s,e),s):(r=!0,e)),r?{destroy(){t.update(s=>e===s?null:s)}}:void 0}}},it=()=>{const{directive:t,element$:e}=ze();return{directive:ne(t),element$:e}},ot=(...t)=>(e,r)=>{const s=q(()=>t.map(n=>n(e,r)));return{update(n){q(()=>s.forEach(a=>{var i;return(i=a?.update)==null?void 0:i.call(a,n)}))},destroy(){q(()=>s.reverse().forEach(n=>{var a;return(a=n?.destroy)==null?void 0:a.call(n)}))}}},Pe=t=>(e,r)=>{const s=[],n=D(r),{events:a,attributes:i,styles:p,classNames:m}=t(n);if(B(e))for(const[f,l]of Object.entries(a??{}))typeof l=="function"?s.push(G(e,f,l)):s.push(G(e,f,l.handler,l.options));for(const[f,l]of Object.entries(i??{}))l!=null&&s.push(je(e,f,l));for(const[f,l]of Object.entries(p??{}))l&&s.push(We(e,f,l));for(const[f,l]of Object.entries(m??{}))s.push(Fe(e,f,l));return{update:f=>n.set(f),destroy:()=>s.forEach(f=>f())}},lt=Pe(t=>({attributes:{class:te(()=>Re(t()))}})),ut=(t=document.body)=>{B(t)&&t.getBoundingClientRect()},ct=(t,e)=>{e&&e.length>0&&t.classList.add(...e)},ft=(t,e)=>{e&&e.length>0&&t.classList.remove(...e)};function G(t,e,r,s){return t.addEventListener(e,r,s),function(){t.removeEventListener(e,r,s)}}const ie=t=>t!=null&&t!==!1;function $e(t,e){let r=new Set;return e.subscribe(s=>{const n=new Set(`${s??""}`.split(" "));n.delete("");const a=t.classList;for(const i of r)n.has(i)||a.remove(i);n.size>0&&a.add(...n),r=n})}function Ve(t,e,r){return r.subscribe(s=>{ie(s)?t.setAttribute(e,""+(s===!0?e:s)):t.removeAttribute(e)})}function je(t,e,r){return e==="class"?$e(t,r):Ve(t,e,r)}function We(t,e,r){return r.subscribe(s=>{const n=t.style;n[e]=""+(ie(s)?s:"")})}function Fe(t,e,r){const s=r.subscribe(n=>{t.classList.toggle(e,n)});return()=>{s(),t.classList.remove(e)}}const Ye={status:"pending"},Ge=t=>{const e=typeof t;return e==="object"&&t!==null||e==="function"?typeof t.then=="function":!1},Je=t=>{const e=D(Ye);return Promise.resolve(t).then(r=>e.set({status:"fulfilled",value:r}),r=>e.set({status:"rejected",reason:r})),L(e)},J=new WeakMap,Qe=t=>{if(!Ge(t))return K({status:"fulfilled",value:t});let e=J.get(t);return e||(e=Je(t),J.set(t,e)),e},Ue=(t,e)=>Object.is(t,e)||t.status===e.status&&(t.status!=="fulfilled"||F(t.value,e.value))&&(t.status!=="rejected"||F(t.reason,e.reason)),Xe=t=>te(()=>Qe(t())(),{equal:Ue}),Ze=(t,e,r)=>Ne(t,{derive:(s,n)=>{s.status==="fulfilled"&&n(s.value)},equal:r},e),vt=(t,e,r)=>Ze(Xe(t),e,r),dt=(t,e)=>{let r;const s=new Promise(i=>r=i);let n=()=>{t.removeEventListener(e,a),n=ee};const a=i=>{i.target===t&&(r(i),n())};return t.addEventListener(e,a),{promise:s,unsubscribe(){n()}}},pt=t=>{let e;return{promise:new Promise(r=>{e=setTimeout(()=>{e=void 0,r()},t)}),unsubscribe(){e&&(clearTimeout(e),e=void 0)}}},ht=()=>{let t;return{promise:new Promise(r=>{t=r}),resolve:t}},mt='<svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="d-block my-1" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>',bt='<svg fill="none" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><rect fill="#3178c6" height="512" rx="50" width="512"/><rect fill="#3178c6" height="512" rx="50" width="512"/><path clip-rule="evenodd" d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z" fill="#fff" fill-rule="evenodd"/></svg>';export{B as a,mt as b,ze as c,nt as d,rt as e,dt as f,pt as g,it as h,tt as i,ne as j,st as k,lt as l,ot as m,vt as n,ct as o,ht as p,ut as q,ft as r,at as s,bt as t};
