import{w as re,x as C,y as te,g as k,M as se,z as ae,A as q,B as S,C as I,I as L,ae as ne,D as G,F as P,G as ie,av as M,ai as U,a6 as V,aw as $,X as le,ap as X,an as ue,ax as O,ay as oe,ah as fe,az as ce,a1 as ve,aA as z,aB as de,ab as he,a4 as be,a5 as pe,q as _e,aC as W,aD as me,e as we,u as ge,r as ye,h as Ee,a9 as Ce}from"./D-O59TWz.js";import{w as j,f as Ae,g as N,n as xe,r as Le,h as Te}from"./CC43Jbnf.js";function Ye(r,e){return e}function De(r,e,t,s){for(var a=[],i=e.length,l=0;l<i;l++)oe(e[l].e,a,!0);var h=i>0&&a.length===0&&t!==null;if(h){var p=t.parentNode;fe(p),p.append(t),s.clear(),E(r,e[0].prev,e[i-1].next)}ce(a,()=>{for(var c=0;c<i;c++){var u=e[c];h||(s.delete(u.k),E(r,u.prev,u.next)),ve(u.e,!h)}})}function Fe(r,e,t,s,a,i=null){var l=r,h={flags:e,items:new Map,first:null},p=(e&W)!==0;if(p){var c=r;l=C?S(be(c)):c.appendChild(pe())}C&&te();var u=null,A=!1,f=se(()=>{var d=t();return ue(d)?d:d==null?[]:U(d)});re(()=>{var d=k(f),n=d.length;if(A&&n===0)return;A=n===0;let g=!1;if(C){var _=l.data===ae;_!==(n===0)&&(l=q(),S(l),I(!1),g=!0)}if(C){for(var m=null,w,b=0;b<n;b++){if(L.nodeType===8&&L.data===ne){l=L,g=!0,I(!1);break}var o=d[b],v=s(o,b);w=J(L,h,m,null,o,v,b,a,e,t),h.items.set(v,w),m=w}n>0&&S(q())}C||He(d,h,l,a,e,s,t),i!==null&&(n===0?u?G(u):u=P(()=>i(l)):u!==null&&ie(u,()=>{u=null})),g&&I(!0),k(f)}),C&&(l=L)}function He(r,e,t,s,a,i,l){var h=(a&me)!==0,p=(a&(z|O))!==0,c=r.length,u=e.items,A=e.first,f=A,d,n=null,g,_=[],m=[],w,b,o,v;if(h)for(v=0;v<c;v+=1)w=r[v],b=i(w,v),o=u.get(b),o!==void 0&&(o.a?.measure(),(g??=new Set).add(o));for(v=0;v<c;v+=1){if(w=r[v],b=i(w,v),o=u.get(b),o===void 0){var Z=f?f.e.nodes_start:t;n=J(Z,e,n,n===null?e.first:n.next,w,b,v,s,a,l),u.set(b,n),_=[],m=[],f=n.next;continue}if(p&&Se(o,w,v,a),(o.e.f&M)!==0&&(G(o.e),h&&(o.a?.unfix(),(g??=new Set).delete(o))),o!==f){if(d!==void 0&&d.has(o)){if(_.length<m.length){var T=m[0],y;n=T.prev;var R=_[0],D=_[_.length-1];for(y=0;y<_.length;y+=1)Y(_[y],T,t);for(y=0;y<m.length;y+=1)d.delete(m[y]);E(e,R.prev,D.next),E(e,n,R),E(e,D,T),f=T,n=D,v-=1,_=[],m=[]}else d.delete(o),Y(o,f,t),E(e,o.prev,o.next),E(e,o,n===null?e.first:n.next),E(e,n,o),n=o;continue}for(_=[],m=[];f!==null&&f.k!==b;)(f.e.f&M)===0&&(d??=new Set).add(f),m.push(f),f=f.next;if(f===null)continue;o=f}_.push(o),n=o,f=o.next}if(f!==null||d!==void 0){for(var x=d===void 0?[]:U(d);f!==null;)(f.e.f&M)===0&&x.push(f),f=f.next;var H=x.length;if(H>0){var ee=(a&W)!==0&&c===0?t:null;if(h){for(v=0;v<H;v+=1)x[v].a?.measure();for(v=0;v<H;v+=1)x[v].a?.fix()}De(e,x,ee,u)}}h&&_e(()=>{if(g!==void 0)for(o of g)o.a?.apply()}),V.first=e.first&&e.first.e,V.last=n&&n.e}function Se(r,e,t,s){(s&z)!==0&&$(r.v,e),(s&O)!==0?$(r.i,t):r.i=t}function J(r,e,t,s,a,i,l,h,p,c){var u=(p&z)!==0,A=(p&de)===0,f=u?A?le(a):X(a):a,d=(p&O)===0?l:X(l),n={i:d,v:f,k:i,a:null,e:null,prev:t,next:s};try{return n.e=P(()=>h(r,f,d,c),C),n.e.prev=t&&t.e,n.e.next=s&&s.e,t===null?e.first=n:(t.next=n,t.e.next=n.e),s!==null&&(s.prev=n,s.e.prev=n.e),n}finally{}}function Y(r,e,t){for(var s=r.next?r.next.e.nodes_start:t,a=e?e.e.nodes_start:t,i=r.e.nodes_start;i!==s;){var l=he(i);a.before(i),i=l}}function E(r,e,t){e===null?r.first=t:(e.next=t,e.e.next=t&&t.e),t!==null&&(t.prev=e,t.e.prev=e&&e.e)}function Ge(r,e,t){we(()=>{var s=ge(()=>e(r,t?.())||{});if(t&&s?.update){var a=!1,i={};ye(()=>{var l=t();Ee(l),a&&Ce(i,l)&&(i=l,s.update(l))}),a=!0}if(s?.destroy)return()=>s.destroy()})}function K(r){var e,t,s="";if(typeof r=="string"||typeof r=="number")s+=r;else if(typeof r=="object")if(Array.isArray(r)){var a=r.length;for(e=0;e<a;e++)r[e]&&(t=K(r[e]))&&(s&&(s+=" "),s+=t)}else for(t in r)r[t]&&(s&&(s+=" "),s+=t);return s}function Ie(){for(var r,e,t=0,s="",a=arguments.length;t<a;t++)(r=arguments[t])&&(e=K(r))&&(s&&(s+=" "),s+=e);return s}const B=r=>{var e;const t=((e=r?.ownerDocument)==null?void 0:e.defaultView)??window;return r instanceof t.HTMLElement},Me=r=>(e,t)=>{if(B(e))return r(e,t)};Le(void 0);const Pe=(r,e=!0)=>()=>{const t=r.subscribe(xe);return{destroy:async()=>{e&&await Promise.resolve(),t()}}},Ne={equal:Object.is},Oe=()=>{const r=j(null,Ne);return{element$:Ae(r),directive:e=>{let t=!1;return r.update(s=>s?(console.error("The directive cannot be used on multiple elements.",s,e),s):(t=!0,e)),t?{destroy(){r.update(s=>e===s?null:s)}}:void 0}}},Ue=()=>{const{directive:r,element$:e}=Oe();return{directive:Me(r),element$:e}},We=(...r)=>(e,t)=>{const s=N(()=>r.map(a=>a(e,t)));return{update(a){N(()=>s.forEach(i=>{var l;return(l=i?.update)==null?void 0:l.call(i,a)}))},destroy(){N(()=>s.reverse().forEach(a=>{var i;return(i=a?.destroy)==null?void 0:i.call(a)}))}}},ze=r=>(e,t)=>{const s=[],a=j(t),{events:i,attributes:l,styles:h,classNames:p}=r(a);if(B(e))for(const[c,u]of Object.entries(i??{}))typeof u=="function"?s.push(F(e,c,u)):s.push(F(e,c,u.handler,u.options));for(const[c,u]of Object.entries(l??{}))u!=null&&s.push(ke(e,c,u));for(const[c,u]of Object.entries(h??{}))u&&s.push(qe(e,c,u));for(const[c,u]of Object.entries(p??{}))s.push(Ve(e,c,u));return{update:c=>a.set(c),destroy:()=>s.forEach(c=>c())}},je=ze(r=>({attributes:{class:Te(()=>Ie(r()))}})),Je=(r=document.body)=>{B(r)&&r.getBoundingClientRect()},Ke=(r,e)=>{e&&e.length>0&&r.classList.add(...e)},Qe=(r,e)=>{e&&e.length>0&&r.classList.remove(...e)};function F(r,e,t,s){return r.addEventListener(e,t,s),function(){r.removeEventListener(e,t,s)}}const Q=r=>r!=null&&r!==!1;function Be(r,e){let t=new Set;return e.subscribe(s=>{const a=new Set(`${s??""}`.split(" "));a.delete("");const i=r.classList;for(const l of t)a.has(l)||i.remove(l);a.size>0&&i.add(...a),t=a})}function Re(r,e,t){return t.subscribe(s=>{Q(s)?r.setAttribute(e,""+(s===!0?e:s)):r.removeAttribute(e)})}function ke(r,e,t){return e==="class"?Be(r,t):Re(r,e,t)}function qe(r,e,t){return t.subscribe(s=>{const a=r.style;a[e]=""+(Q(s)?s:"")})}function Ve(r,e,t){const s=t.subscribe(a=>{r.classList.toggle(e,a)});return()=>{s(),r.classList.remove(e)}}const Ze='<svg xmlns="http://www.w3.org/2000/svg" width="40" height="32" class="d-block my-1" viewBox="0 0 118 94" role="img"><title>Bootstrap</title><path fill-rule="evenodd" clip-rule="evenodd" d="M24.509 0c-6.733 0-11.715 5.893-11.492 12.284.214 6.14-.064 14.092-2.066 20.577C8.943 39.365 5.547 43.485 0 44.014v5.972c5.547.529 8.943 4.649 10.951 11.153 2.002 6.485 2.28 14.437 2.066 20.577C12.794 88.106 17.776 94 24.51 94H93.5c6.733 0 11.714-5.893 11.491-12.284-.214-6.14.064-14.092 2.066-20.577 2.009-6.504 5.396-10.624 10.943-11.153v-5.972c-5.547-.529-8.934-4.649-10.943-11.153-2.002-6.484-2.28-14.437-2.066-20.577C105.214 5.894 100.233 0 93.5 0H24.508zM80 57.863C80 66.663 73.436 72 62.543 72H44a2 2 0 01-2-2V24a2 2 0 012-2h18.437c9.083 0 15.044 4.92 15.044 12.474 0 5.302-4.01 10.049-9.119 10.88v.277C75.317 46.394 80 51.21 80 57.863zM60.521 28.34H49.948v14.934h8.905c6.884 0 10.68-2.772 10.68-7.727 0-4.643-3.264-7.207-9.012-7.207zM49.948 49.2v16.458H60.91c7.167 0 10.964-2.876 10.964-8.281 0-5.406-3.903-8.178-11.425-8.178H49.948z" fill="currentColor"></path></svg>',er='<svg fill="none" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><rect fill="#3178c6" height="512" rx="50" width="512"/><rect fill="#3178c6" height="512" rx="50" width="512"/><path clip-rule="evenodd" d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c11.999 0 23.397-1.147 34.196-3.442 10.799-2.294 20.268-6.075 28.406-11.342 8.138-5.266 14.581-12.15 19.328-20.65s7.121-19.007 7.121-31.522c0-9.074-1.356-17.026-4.069-23.857s-6.625-12.906-11.738-18.225c-5.112-5.319-11.242-10.091-18.389-14.315s-15.207-8.213-24.18-11.967c-6.573-2.712-12.468-5.345-17.685-7.9-5.217-2.556-9.651-5.163-13.303-7.822-3.652-2.66-6.469-5.476-8.451-8.448-1.982-2.973-2.974-6.336-2.974-10.091 0-3.441.887-6.544 2.661-9.308s4.278-5.136 7.512-7.118c3.235-1.981 7.199-3.52 11.894-4.615 4.696-1.095 9.912-1.642 15.651-1.642 4.173 0 8.581.313 13.224.938 4.643.626 9.312 1.591 14.008 2.894 4.695 1.304 9.259 2.947 13.694 4.928 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 6.886 2.816 13.303 5.579 19.25 8.291s11.086 5.528 15.415 8.448c4.33 2.92 7.747 6.101 10.252 9.543 2.504 3.441 3.756 7.352 3.756 11.733 0 3.233-.783 6.231-2.348 8.995s-3.939 5.162-7.121 7.196-7.147 3.624-11.894 4.771c-4.748 1.148-10.303 1.721-16.668 1.721-10.851 0-21.597-1.903-32.24-5.71-10.642-3.806-20.502-9.516-29.579-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z" fill="#fff" fill-rule="evenodd"/></svg>';export{Me as a,Ze as b,Ue as c,Ge as d,Fe as e,je as f,Pe as g,Oe as h,Ye as i,B as j,Ke as k,Je as l,We as m,Qe as r,er as t};
