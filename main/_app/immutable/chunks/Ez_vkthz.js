import{v as K,w as b,x as $,g as D,H as j,y as N,z as I,A as k,F as A,B as G,C as Y,D as ee,ay as L,a4 as Q,Q as P,az as B,aA as re,a3 as ae,aB as te,M as se,O as ne,P as ie,am as le,a0 as oe,q as fe,aC as R,aD as q,G as ue,a8 as O,aE as U,ad as ce,aF as ve,aG as de,Z as he,l as pe,b as me,m as _e,e as we,W as ge}from"./CCa7hPa2.js";import{f as Ee,g as Se,r as Te,h as V,w as be,i as xe,n as Ce}from"./CR6wMrxq.js";function Pe(r,e){return e}function Ae(r,e,a,s){for(var o=[],u=e.length,n=0;n<u;n++)re(e[n].e,o,!0);var d=u>0&&o.length===0&&a!==null;if(d){var w=a.parentNode;ae(w),w.append(a),s.clear(),T(r,e[0].prev,e[u-1].next)}te(o,()=>{for(var p=0;p<u;p++){var v=e[p];d||(s.delete(v.k),T(r,v.prev,v.next)),se(v.e,!d)}})}function Be(r,e,a,s,o,u=null){var n=r,d={flags:e,items:new Map,first:null},w=(e&U)!==0;if(w){var p=r;n=b?I(ne(p)):p.appendChild(ie())}b&&$();var v=null,x=!1,l=le(()=>{var c=a();return ce(c)?c:c==null?[]:Q(c)});K(()=>{var c=D(l),t=c.length;if(x&&t===0)return;x=t===0;let E=!1;if(b){var m=n.data===j;m!==(t===0)&&(n=N(),I(n),k(!1),E=!0)}if(b){for(var _=null,g,h=0;h<t;h++){if(A.nodeType===8&&A.data===oe){n=A,E=!0,k(!1);break}var i=c[h],f=s(i,h);g=X(A,d,_,null,i,f,h,o,e,a),d.items.set(f,g),_=g}t>0&&I(N())}b||ye(c,d,n,o,e,s,a),u!==null&&(t===0?v?G(v):v=Y(()=>u(n)):v!==null&&ee(v,()=>{v=null})),E&&k(!0),D(l)}),b&&(n=A)}function ye(r,e,a,s,o,u,n){var d=(o&ve)!==0,w=(o&(R|q))!==0,p=r.length,v=e.items,x=e.first,l=x,c,t=null,E,m=[],_=[],g,h,i,f;if(d)for(f=0;f<p;f+=1)g=r[f],h=u(g,f),i=v.get(h),i!==void 0&&(i.a?.measure(),(E??=new Set).add(i));for(f=0;f<p;f+=1){if(g=r[f],h=u(g,f),i=v.get(h),i===void 0){var Z=l?l.e.nodes_start:a;t=X(Z,e,t,t===null?e.first:t.next,g,h,f,s,o,n),v.set(h,t),m=[],_=[],l=t.next;continue}if(w&&He(i,g,f,o),i.e.f&L&&(G(i.e),d&&(i.a?.unfix(),(E??=new Set).delete(i))),i!==l){if(c!==void 0&&c.has(i)){if(m.length<_.length){var y=_[0],S;t=y.prev;var z=m[0],H=m[m.length-1];for(S=0;S<m.length;S+=1)F(m[S],y,a);for(S=0;S<_.length;S+=1)c.delete(_[S]);T(e,z.prev,H.next),T(e,t,z),T(e,H,y),l=y,t=H,f-=1,m=[],_=[]}else c.delete(i),F(i,l,a),T(e,i.prev,i.next),T(e,i,t===null?e.first:t.next),T(e,t,i),t=i;continue}for(m=[],_=[];l!==null&&l.k!==h;)l.e.f&L||(c??=new Set).add(l),_.push(l),l=l.next;if(l===null)continue;i=l}m.push(i),t=i,l=i.next}if(l!==null||c!==void 0){for(var C=c===void 0?[]:Q(c);l!==null;)l.e.f&L||C.push(l),l=l.next;var M=C.length;if(M>0){var J=o&U&&p===0?a:null;if(d){for(f=0;f<M;f+=1)C[f].a?.measure();for(f=0;f<M;f+=1)C[f].a?.fix()}Ae(e,C,J,v)}}d&&fe(()=>{if(E!==void 0)for(i of E)i.a?.apply()}),P.first=e.first&&e.first.e,P.last=t&&t.e}function He(r,e,a,s){s&R&&B(r.v,e),s&q?B(r.i,a):r.i=a}function X(r,e,a,s,o,u,n,d,w,p){var v=(w&R)!==0,x=(w&de)===0,l=v?x?ue(o):O(o):o,c=w&q?O(n):n,t={i:c,v:l,k:u,a:null,e:null,prev:a,next:s};try{return t.e=Y(()=>d(r,l,c,p),b),t.e.prev=a&&a.e,t.e.next=s&&s.e,a===null?e.first=t:(a.next=t,a.e.next=t.e),s!==null&&(s.prev=t,s.e.prev=t.e),t}finally{}}function F(r,e,a){for(var s=r.next?r.next.e.nodes_start:a,o=e?e.e.nodes_start:a,u=r.e.nodes_start;u!==s;){var n=he(u);o.before(u),u=n}}function T(r,e,a){e===null?r.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}function Oe(r,e,a){pe(()=>{var s=me(()=>e(r,a?.())||{});if(a&&s?.update){var o=!1,u={};_e(()=>{var n=a();we(n),o&&ge(u,n)&&(u=n,s.update(n))}),o=!0}if(s?.destroy)return()=>s.destroy()})}const Me={status:"pending"},Ie=r=>{const e=typeof r;return e==="object"&&r!==null||e==="function"?typeof r.then=="function":!1},ke=r=>{const e=be(Me);return Promise.resolve(r).then(a=>e.set({status:"fulfilled",value:a}),a=>e.set({status:"rejected",reason:a})),xe(e)},W=new WeakMap,Le=r=>{if(!Ie(r))return Te({status:"fulfilled",value:r});let e=W.get(r);return e||(e=ke(r),W.set(r,e)),e},Re=(r,e)=>Object.is(r,e)||r.status===e.status&&(r.status!=="fulfilled"||V(r.value,e.value))&&(r.status!=="rejected"||V(r.reason,e.reason)),qe=r=>Ee(()=>Le(r())(),{equal:Re}),ze=(r,e,a)=>Se(r,{derive:(s,o)=>{s.status==="fulfilled"&&o(s.value)},equal:a},e),Ve=(r,e,a)=>ze(qe(r),e,a),Fe=(r,e)=>{let a;const s=new Promise(n=>a=n);let o=()=>{r.removeEventListener(e,u),o=Ce};const u=n=>{n.target===r&&(a(n),o())};return r.addEventListener(e,u),{promise:s,unsubscribe(){o()}}},We=r=>{let e;return{promise:new Promise(a=>{e=setTimeout(()=>{e=void 0,a()},r)}),unsubscribe(){e&&(clearTimeout(e),e=void 0)}}},Ge=()=>{let r;return{promise:new Promise(a=>{r=a}),resolve:r}},Ye='<svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="d-block my-1" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>',Qe='<svg fill="none" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><rect fill="#3178c6" height="512" rx="50" width="512"/><rect fill="#3178c6" height="512" rx="50" width="512"/><path clip-rule="evenodd" d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z" fill="#fff" fill-rule="evenodd"/></svg>';export{Fe as a,Ye as b,We as c,Oe as d,Be as e,Ve as f,Pe as i,Ge as p,Qe as t};
