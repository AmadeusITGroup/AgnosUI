import{N as oe,v as le,av as X,w as E,z as O,x as ce,n as ue,ao as G,H as fe,y as k,A as I,E as A,B as K,C as Q,D as de,aw as P,q as ve,O as V,ax as R,d as U,ay as q,az as pe,aa as he,V as W,aA as be,an as me,aB as _e,L as we,M as ge,ak as ye,aC as Se,ah as Ee,e as Ce,u as Ae,h as Te,J as xe,aD as Le}from"./runtime.BEOU7zaz.js";import{r as Z,k as L,f as D,t as N,i as $,n as ee,d as De,g as He,l as j,m as Me}from"./stores.B-gqFnsy.js";import{a as Oe}from"./index-client.BoGQsvAy.js";let x=null;function rt(t){x=t}function nt(t,e){return e}function Ie(t,e,s,r){for(var n=[],a=e.length,i=0;i<a;i++)be(e[i].e,n,!0);var p=a>0&&n.length===0&&s!==null;if(p){var b=s.parentNode;me(b),b.append(s),r.clear(),S(t,e[0].prev,e[a-1].next)}_e(n,()=>{for(var u=0;u<a;u++){var l=e[u];p||(r.delete(l.k),S(t,l.prev,l.next)),we(l.e,!p)}})}function it(t,e,s,r,n,a=null){var i=t,p={flags:e,items:new Map,first:null},b=(e&X)!==0;if(b){var u=t;i=E?O(ge(u)):u.appendChild(oe())}E&&ce();var l=null;le(()=>{var c=s(),h=ue(c)?c:c==null?[]:G(c),f=h.length;let v=!1;if(E){var _=i.data===fe;_!==(f===0)&&(i=k(),O(i),I(!1),v=!0)}if(E){for(var w=null,g,m=0;m<f;m++){if(A.nodeType===8&&A.data===ye){i=A,v=!0,I(!1);break}var o=h[m],d=r(o,m);g=te(A,p,w,null,o,d,m,n,e),p.items.set(d,g),w=g}f>0&&O(k())}E||Ne(h,p,i,n,e,r),a!==null&&(f===0?l?K(l):l=Q(()=>a(i)):l!==null&&de(l,()=>{l=null})),v&&I(!0)}),E&&(i=A)}function Ne(t,e,s,r,n,a){var i=(n&Se)!==0,p=(n&(R|q))!==0,b=t.length,u=e.items,l=e.first,c=l,h,f=null,v,_=[],w=[],g,m,o,d;if(i)for(d=0;d<b;d+=1)g=t[d],m=a(g,d),o=u.get(m),o!==void 0&&(o.a?.measure(),(v??=new Set).add(o));for(d=0;d<b;d+=1){if(g=t[d],m=a(g,d),o=u.get(m),o===void 0){var ie=c?c.e.nodes_start:s;f=te(ie,e,f,f===null?e.first:f.next,g,m,d,r,n),u.set(m,f),_=[],w=[],c=f.next;continue}if(p&&$e(o,g,d,n),o.e.f&P&&(K(o.e),i&&(o.a?.unfix(),(v??=new Set).delete(o))),o!==c){if(h!==void 0&&h.has(o)){if(_.length<w.length){var T=w[0],y;f=T.prev;var B=_[0],H=_[_.length-1];for(y=0;y<_.length;y+=1)F(_[y],T,s);for(y=0;y<w.length;y+=1)h.delete(w[y]);S(e,B.prev,H.next),S(e,f,B),S(e,H,T),c=T,f=H,d-=1,_=[],w=[]}else h.delete(o),F(o,c,s),S(e,o.prev,o.next),S(e,o,f===null?e.first:f.next),S(e,f,o),f=o;continue}for(_=[],w=[];c!==null&&c.k!==m;)c.e.f&P||(h??=new Set).add(c),w.push(c),c=c.next;if(c===null)continue;o=c}_.push(o),f=o,c=o.next}if(c!==null||h!==void 0){for(var C=h===void 0?[]:G(h);c!==null;)C.push(c),c=c.next;var M=C.length;if(M>0){var ae=n&X&&b===0?s:null;if(i){for(d=0;d<M;d+=1)C[d].a?.measure();for(d=0;d<M;d+=1)C[d].a?.fix()}Ie(e,C,ae,u)}}i&&ve(()=>{if(v!==void 0)for(o of v)o.a?.apply()}),V.first=e.first&&e.first.e,V.last=f&&f.e}function $e(t,e,s,r){r&R&&U(t.v,e),r&q?U(t.i,s):t.i=s}function te(t,e,s,r,n,a,i,p,b){var u=x;try{var l=(b&R)!==0,c=(b&pe)===0,h=l?c?he(n):W(n):n,f=b&q?W(i):i,v={i:f,v:h,k:a,a:null,e:null,prev:s,next:r};return x=v,v.e=Q(()=>p(t,h,f),E),v.e.prev=s&&s.e,v.e.next=r&&r.e,s===null?e.first=v:(s.next=v,s.e.next=v.e),r!==null&&(r.prev=v,r.e.prev=v.e),v}finally{x=u}}function F(t,e,s){for(var r=t.next?t.next.e.nodes_start:s,n=e?e.e.nodes_start:s,a=t.e.nodes_start;a!==r;){var i=Ee(a);n.before(a),a=i}}function S(t,e,s){e===null?t.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function at(t,e,s){Ce(()=>{var r=Ae(()=>e(t,s?.())||{});if(s&&r?.update){var n=!1,a={};Te(()=>{var i=s();xe(i),n&&Le(a,i)&&(a=i,r.update(i))}),n=!0}if(r?.destroy)return()=>r.destroy()})}const ot=(t=document.body)=>{z(t)&&t.getBoundingClientRect()},lt=(t,e)=>{e&&e.length>0&&t.classList.add(...e)},ct=(t,e)=>{e&&e.length>0&&t.classList.remove(...e)};function Y(t,e,s,r){return t.addEventListener(e,s,r),function(){t.removeEventListener(e,s,r)}}const se=t=>t!=null&&t!==!1;function Re(t,e){let s=new Set;return e.subscribe(r=>{const n=new Set(`${r??""}`.split(" "));n.delete("");const a=t.classList;for(const i of s)n.has(i)||a.remove(i);n.size>0&&a.add(...n),s=n})}function qe(t,e,s){return s.subscribe(r=>{se(r)?t.setAttribute(e,""+(r===!0?e:r)):t.removeAttribute(e)})}function ze(t,e,s){return e==="class"?Re(t,s):qe(t,e,s)}function Be(t,e,s){return s.subscribe(r=>{const n=t.style;n[e]=""+(se(r)?r:"")})}function ke(t,e,s){const r=s.subscribe(n=>{t.classList.toggle(e,n)});return()=>{r(),t.classList.remove(e)}}const z=t=>{var e;const s=((e=t?.ownerDocument)==null?void 0:e.defaultView)??window;return t instanceof s.HTMLElement},re=t=>(e,s)=>{if(z(e))return t(e,s)},Pe=(t,e)=>s=>{let r=!0,n;const a=e.subscribe(i=>{var p;r?(r=!1,n=t(s,i)):(p=n?.update)==null||p.call(n,i)});return{destroy(){var i;(i=n?.destroy)==null||i.call(n),a()}}},Ve=Z(void 0),ut=t=>Pe(t,Ve),ft=(t,e=!0)=>()=>{const s=t.subscribe(ee);return{destroy:async()=>{e&&await Promise.resolve(),s()}}},dt=t=>(e,s)=>(t(s),{update:t}),ne={equal:Object.is},Ue=()=>{const t=D([],ne);return L(t,{register:e=>{let s=!1;return t.update(r=>[...r,e]),()=>{s||(s=!0,t.update(r=>{const n=r.indexOf(e);if(n>-1){const a=[...r];return a.splice(n,1),a}return r}))}}})},We=()=>{const t=Ue();return{elements$:L(t),directive:e=>({destroy:t.register(e)})}},vt=()=>{const{directive:t,elements$:e}=We();return{directive:re(t),elements$:e}},je=()=>{const t=D(null,ne);return{element$:L(t),directive:e=>{let s=!1;return t.update(r=>r?(console.error("The directive cannot be used on multiple elements.",r,e),r):(s=!0,e)),s?{destroy(){t.update(r=>e===r?null:r)}}:void 0}}},pt=()=>{const{directive:t,element$:e}=je();return{directive:re(t),element$:e}},ht=(...t)=>(e,s)=>{const r=$(()=>t.map(n=>n(e,s)));return{update(n){$(()=>r.forEach(a=>{var i;return(i=a?.update)==null?void 0:i.call(a,n)}))},destroy(){$(()=>r.reverse().forEach(n=>{var a;return(a=n?.destroy)==null?void 0:a.call(n)}))}}},Fe=t=>(e,s)=>{const r=[],n=D(s),{events:a,attributes:i,styles:p,classNames:b}=t(n);if(z(e))for(const[u,l]of Object.entries(a??{}))typeof l=="function"?r.push(Y(e,u,l)):r.push(Y(e,u,l.handler,l.options));for(const[u,l]of Object.entries(i??{}))l!=null&&r.push(ze(e,u,N(l)));for(const[u,l]of Object.entries(p??{}))l&&r.push(Be(e,u,N(l)));for(const[u,l]of Object.entries(b??{}))r.push(ke(e,u,N(l)));return{update:u=>n.set(u),destroy:()=>r.forEach(u=>u())}},bt=Fe(t=>({attributes:{class:t}})),Ye={status:"pending"},Je=t=>{const e=typeof t;return e==="object"&&t!==null||e==="function"?typeof t.then=="function":!1},Xe=t=>{const e=D(Ye);return Promise.resolve(t).then(s=>e.set({status:"fulfilled",value:s}),s=>e.set({status:"rejected",reason:s})),L(e)},J=new WeakMap,Ge=t=>{if(!Je(t))return Z({status:"fulfilled",value:t});let e=J.get(t);return e||(e=Xe(t),J.set(t,e)),e},Ke=(t,e)=>Object.is(t,e)||t.status===e.status&&(t.status!=="fulfilled"||j(t.value,e.value))&&(t.status!=="rejected"||j(t.reason,e.reason)),Qe=t=>De(()=>Ge(t())(),{equal:Ke}),Ze=(t,e,s)=>He(t,{derive:(r,n)=>{r.status==="fulfilled"&&n(r.value)},equal:s},e),mt=(t,e,s)=>Ze(Qe(t),e,s),_t=(t,e)=>{let s;const r=new Promise(i=>s=i);let n=()=>{t.removeEventListener(e,a),n=ee};const a=i=>{i.target===t&&(s(i),n())};return t.addEventListener(e,a),{promise:r,unsubscribe(){n()}}},wt=t=>{let e;return{promise:new Promise(s=>{e=setTimeout(()=>{e=void 0,s()},t)}),unsubscribe(){e&&(clearTimeout(e),e=void 0)}}},gt=()=>{let t;return{promise:new Promise(s=>{t=s}),resolve:t}},yt='<svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="d-block my-1" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>',St='<svg fill="none" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><rect fill="#3178c6" height="512" rx="50" width="512"/><rect fill="#3178c6" height="512" rx="50" width="512"/><path clip-rule="evenodd" d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z" fill="#fff" fill-rule="evenodd"/></svg>';function Et(t,e="",s=""){return`${t} - ${e?`${e.slice(0,1).toUpperCase()+e.slice(1)}${s?` ${s.slice(0,1).toUpperCase()+s.slice(1)}`:""} - `:""}AgnosUI`}function Ct(t){let e;function s(r){e=r}return Oe(()=>{Me.patch({elements:e?t(e):[]})}),s}export{je as a,dt as b,x as c,ft as d,it as e,_t as f,wt as g,yt as h,z as i,nt as j,Et as k,pt as l,ht as m,re as n,at as o,gt as p,bt as q,mt as r,rt as s,St as t,ct as u,lt as v,ot as w,ut as x,vt as y,Ct as z};
