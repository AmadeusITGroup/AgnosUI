import{v as oe,z as E,C as N,J as le,A as ce,a6 as ue,X as K,H as fe,B as V,D as O,F as T,w as U,x as Q,y as ve,ax as k,q as de,K as j,ay as B,az as W,aA as z,aB as pe,am as he,$ as F,aC as be,W as me,aD as _e,G as we,aE as Z,I as ge,T as ye,aF as Se,P as Ee,l as Ce,e as Te,m as Ae,j as xe,aG as Le}from"./runtime.D-xWURpp.js";import{r as ee,k as D,g as H,t as R,j as q,n as te,e as De,h as He,l as G}from"./stores.BFJS-g1n.js";let L=null;function Qe(t){L=t}function Ze(t,e){return e}function Me(t,e,s,r){for(var n=[],i=e.length,a=0;a<i;a++)be(e[a].e,n,!0);var m=i>0&&n.length===0&&s!==null;if(m){var h=s.parentNode;me(h),h.append(s),r.clear(),S(t,e[0].prev,e[i-1].next)}_e(n,()=>{for(var u=0;u<i;u++){var l=e[u];m||(r.delete(l.k),S(t,l.prev,l.next)),we(l.e,!m)}})}function et(t,e,s,r,n,i=null){var a=t,m={flags:e,items:new Map,first:null},h=(e&Z)!==0;if(h){var u=t;a=E?N(ge(u)):u.appendChild(le())}E&&ce();var l=null,c=!1;oe(()=>{var p=s(),v=ue(p)?p:p==null?[]:K(p),d=v.length;if(c&&d===0)return;c=d===0;let b=!1;if(E){var w=a.data===fe;w!==(d===0)&&(a=V(),N(a),O(!1),b=!0)}if(E){for(var g=null,_,o=0;o<d;o++){if(T.nodeType===8&&T.data===ye){a=T,b=!0,O(!1);break}var f=v[o],A=r(f,o);_=se(T,m,g,null,f,A,o,n,e),m.items.set(A,_),g=_}d>0&&N(V())}E||Ie(v,m,a,n,e,r),i!==null&&(d===0?l?U(l):l=Q(()=>i(a)):l!==null&&ve(l,()=>{l=null})),b&&O(!0),s()}),E&&(a=T)}function Ie(t,e,s,r,n,i){var a=(n&Se)!==0,m=(n&(B|z))!==0,h=t.length,u=e.items,l=e.first,c=l,p,v=null,d,b=[],w=[],g,_,o,f;if(a)for(f=0;f<h;f+=1)g=t[f],_=i(g,f),o=u.get(_),o!==void 0&&(o.a?.measure(),(d??=new Set).add(o));for(f=0;f<h;f+=1){if(g=t[f],_=i(g,f),o=u.get(_),o===void 0){var A=c?c.e.nodes_start:s;v=se(A,e,v,v===null?e.first:v.next,g,_,f,r,n),u.set(_,v),b=[],w=[],c=v.next;continue}if(m&&Ne(o,g,f,n),o.e.f&k&&(U(o.e),a&&(o.a?.unfix(),(d??=new Set).delete(o))),o!==c){if(p!==void 0&&p.has(o)){if(b.length<w.length){var x=w[0],y;v=x.prev;var $=b[0],M=b[b.length-1];for(y=0;y<b.length;y+=1)X(b[y],x,s);for(y=0;y<w.length;y+=1)p.delete(w[y]);S(e,$.prev,M.next),S(e,v,$),S(e,M,x),c=x,v=M,f-=1,b=[],w=[]}else p.delete(o),X(o,c,s),S(e,o.prev,o.next),S(e,o,v===null?e.first:v.next),S(e,v,o),v=o;continue}for(b=[],w=[];c!==null&&c.k!==_;)c.e.f&k||(p??=new Set).add(c),w.push(c),c=c.next;if(c===null)continue;o=c}b.push(o),v=o,c=o.next}if(c!==null||p!==void 0){for(var C=p===void 0?[]:K(p);c!==null;)c.e.f&k||C.push(c),c=c.next;var I=C.length;if(I>0){var ie=n&Z&&h===0?s:null;if(a){for(f=0;f<I;f+=1)C[f].a?.measure();for(f=0;f<I;f+=1)C[f].a?.fix()}Me(e,C,ie,u)}}a&&de(()=>{if(d!==void 0)for(o of d)o.a?.apply()}),j.first=e.first&&e.first.e,j.last=v&&v.e}function Ne(t,e,s,r){r&B&&W(t.v,e),r&z?W(t.i,s):t.i=s}function se(t,e,s,r,n,i,a,m,h){var u=L;try{var l=(h&B)!==0,c=(h&pe)===0,p=l?c?he(n):F(n):n,v=h&z?F(a):a,d={i:v,v:p,k:i,a:null,e:null,prev:s,next:r};return L=d,d.e=Q(()=>m(t,p,v),E),d.e.prev=s&&s.e,d.e.next=r&&r.e,s===null?e.first=d:(s.next=d,s.e.next=d.e),r!==null&&(r.prev=d,r.e.prev=d.e),d}finally{L=u}}function X(t,e,s){for(var r=t.next?t.next.e.nodes_start:s,n=e?e.e.nodes_start:s,i=t.e.nodes_start;i!==r;){var a=Ee(i);n.before(i),i=a}}function S(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function tt(t,e,s){Ce(()=>{var r=Te(()=>e(t,s?.())||{});if(s&&r?.update){var n=!1,i={};Ae(()=>{var a=s();xe(a),n&&Le(i,a)&&(i=a,r.update(a))}),n=!0}if(r?.destroy)return()=>r.destroy()})}const st=(t=document.body)=>{P(t)&&t.getBoundingClientRect()},rt=(t,e)=>{e&&e.length>0&&t.classList.add(...e)},nt=(t,e)=>{e&&e.length>0&&t.classList.remove(...e)};function Y(t,e,s,r){return t.addEventListener(e,s,r),function(){t.removeEventListener(e,s,r)}}const re=t=>t!=null&&t!==!1;function Oe(t,e){let s=new Set;return e.subscribe(r=>{const n=new Set(`${r??""}`.split(" "));n.delete("");const i=t.classList;for(const a of s)n.has(a)||i.remove(a);n.size>0&&i.add(...n),s=n})}function ke(t,e,s){return s.subscribe(r=>{re(r)?t.setAttribute(e,""+(r===!0?e:r)):t.removeAttribute(e)})}function Re(t,e,s){return e==="class"?Oe(t,s):ke(t,e,s)}function qe(t,e,s){return s.subscribe(r=>{const n=t.style;n[e]=""+(re(r)?r:"")})}function Be(t,e,s){const r=s.subscribe(n=>{t.classList.toggle(e,n)});return()=>{r(),t.classList.remove(e)}}const P=t=>{var e;const s=((e=t?.ownerDocument)==null?void 0:e.defaultView)??window;return t instanceof s.HTMLElement},ne=t=>(e,s)=>{if(P(e))return t(e,s)};ee(void 0);const at=(t,e=!0)=>()=>{const s=t.subscribe(te);return{destroy:async()=>{e&&await Promise.resolve(),s()}}},ae={equal:Object.is},ze=()=>{const t=H([],ae);return D(t,{register:e=>{let s=!1;return t.update(r=>[...r,e]),()=>{s||(s=!0,t.update(r=>{const n=r.indexOf(e);if(n>-1){const i=[...r];return i.splice(n,1),i}return r}))}}})},Pe=()=>{const t=ze();return{elements$:D(t),directive:e=>({destroy:t.register(e)})}},it=()=>{const{directive:t,elements$:e}=Pe();return{directive:ne(t),elements$:e}},$e=()=>{const t=H(null,ae);return{element$:D(t),directive:e=>{let s=!1;return t.update(r=>r?(console.error("The directive cannot be used on multiple elements.",r,e),r):(s=!0,e)),s?{destroy(){t.update(r=>e===r?null:r)}}:void 0}}},ot=()=>{const{directive:t,element$:e}=$e();return{directive:ne(t),element$:e}},lt=(...t)=>(e,s)=>{const r=q(()=>t.map(n=>n(e,s)));return{update(n){q(()=>r.forEach(i=>{var a;return(a=i?.update)==null?void 0:a.call(i,n)}))},destroy(){q(()=>r.reverse().forEach(n=>{var i;return(i=n?.destroy)==null?void 0:i.call(n)}))}}},Ve=t=>(e,s)=>{const r=[],n=H(s),{events:i,attributes:a,styles:m,classNames:h}=t(n);if(P(e))for(const[u,l]of Object.entries(i??{}))typeof l=="function"?r.push(Y(e,u,l)):r.push(Y(e,u,l.handler,l.options));for(const[u,l]of Object.entries(a??{}))l!=null&&r.push(Re(e,u,R(l)));for(const[u,l]of Object.entries(m??{}))l&&r.push(qe(e,u,R(l)));for(const[u,l]of Object.entries(h??{}))r.push(Be(e,u,R(l)));return{update:u=>n.set(u),destroy:()=>r.forEach(u=>u())}},ct=Ve(t=>({attributes:{class:t}})),je={status:"pending"},We=t=>{const e=typeof t;return e==="object"&&t!==null||e==="function"?typeof t.then=="function":!1},Fe=t=>{const e=H(je);return Promise.resolve(t).then(s=>e.set({status:"fulfilled",value:s}),s=>e.set({status:"rejected",reason:s})),D(e)},J=new WeakMap,Ge=t=>{if(!We(t))return ee({status:"fulfilled",value:t});let e=J.get(t);return e||(e=Fe(t),J.set(t,e)),e},Xe=(t,e)=>Object.is(t,e)||t.status===e.status&&(t.status!=="fulfilled"||G(t.value,e.value))&&(t.status!=="rejected"||G(t.reason,e.reason)),Ye=t=>De(()=>Ge(t())(),{equal:Xe}),Je=(t,e,s)=>He(t,{derive:(r,n)=>{r.status==="fulfilled"&&n(r.value)},equal:s},e),ut=(t,e,s)=>Je(Ye(t),e,s),ft=(t,e)=>{let s;const r=new Promise(a=>s=a);let n=()=>{t.removeEventListener(e,i),n=te};const i=a=>{a.target===t&&(s(a),n())};return t.addEventListener(e,i),{promise:r,unsubscribe(){n()}}},vt=t=>{let e;return{promise:new Promise(s=>{e=setTimeout(()=>{e=void 0,s()},t)}),unsubscribe(){e&&(clearTimeout(e),e=void 0)}}},dt=()=>{let t;return{promise:new Promise(s=>{t=s}),resolve:t}},pt='<svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="d-block my-1" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>',ht='<svg fill="none" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><rect fill="#3178c6" height="512" rx="50" width="512"/><rect fill="#3178c6" height="512" rx="50" width="512"/><path clip-rule="evenodd" d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z" fill="#fff" fill-rule="evenodd"/></svg>';export{$e as a,pt as b,L as c,at as d,et as e,P as f,ft as g,vt as h,Ze as i,ot as j,ne as k,tt as l,lt as m,ct as n,ut as o,dt as p,rt as q,nt as r,Qe as s,ht as t,st as u,it as v};