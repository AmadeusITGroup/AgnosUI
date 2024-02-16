import{S as K,i as Q,s as Y,R as I,e as w,k as y,a as h,T as Z,a1 as M,b as H,r as C,U as q,u as z,t as L,z as E,B as F,d as R,f as S,V as B,x,l as P,W as ee,n as G,$ as te,X as le,c as ne,m as oe,g as ae}from"./AppCommon-PYoYBAGe.js";import{T as se}from"./Toast-6X0CSj_W.js";import{w as ie}from"./index-UgqwpArj.js";import"./Slot-AJGeoSfm.js";import"./config-XiE02CVt.js";import"./func-tK0QDe5R.js";import"./stores-_qVACXog.js";import"./extendWidget-IeqnXfgY.js";import"./baseTransitions-KlLB1gZ_.js";import"./writables-gjFeR4ZI.js";import"./promise-qxS1tbL6.js";import"./directive-JehA4Exg.js";import"./fade-7kO9k0h9.js";import"./cssTransitions-nLsjwgbV.js";import"./dom-2S7XI5EU.js";function T(n,t,c){const a=n.slice();return a[2]=t[c][0],a[9]=t[c][1],a}function U(n,t,c){const a=n.slice();a[12]=t[c];const s=a[12];return a[13]=s.dismissible,a[14]=s.animationOnInit,a[15]=s.animation,a[16]=s.slotDefault,a[17]=s.slotHeader,a}function V(n,t,c){const a=n.slice();return a[20]=t[c].value,a[21]=t[c].label,a}function W(n){let t,c=n[21]+"",a;return{c(){t=w("option"),a=P(c),t.__value=n[20],ee(t,t.__value)},m(s,u){H(s,t,u),C(t,a)},p:G,d(s){s&&S(t)}}}function X(n){let t,c;function a(){return n[6](n[12])}return t=new se({props:{dismissible:n[13],animationOnInit:n[14],animation:n[15],slotDefault:n[16],slotHeader:n[17],onHidden:a}}),{c(){ne(t.$$.fragment)},m(s,u){oe(t,s,u),c=!0},p(s,u){n=s;const e={};u&2&&(e.dismissible=n[13]),u&2&&(e.animationOnInit=n[14]),u&2&&(e.animation=n[15]),u&2&&(e.slotDefault=n[16]),u&2&&(e.slotHeader=n[17]),u&2&&(e.onHidden=a),t.$set(e)},i(s){c||(L(t.$$.fragment,s),c=!0)},o(s){R(t.$$.fragment,s),c=!1},d(s){ae(t,s)}}}function A(n){let t,c,a,s,u=I(n[9]),e=[];for(let i=0;i<u.length;i+=1)e[i]=X(U(n,u,i));const $=i=>R(e[i],1,1,()=>{e[i]=null});return{c(){t=w("div");for(let i=0;i<e.length;i+=1)e[i].c();c=y(),h(t,"class",a=`toast-container p-3 ${n[2]}`)},m(i,f){H(i,t,f);for(let r=0;r<e.length;r+=1)e[r]&&e[r].m(t,null);C(t,c),s=!0},p(i,f){if(f&3){u=I(i[9]);let r;for(r=0;r<u.length;r+=1){const k=U(i,u,r);e[r]?(e[r].p(k,f),L(e[r],1)):(e[r]=X(k),e[r].c(),L(e[r],1),e[r].m(t,c))}for(E(),r=u.length;r<e.length;r+=1)$(r);F()}(!s||f&2&&a!==(a=`toast-container p-3 ${i[2]}`))&&h(t,"class",a)},i(i){if(!s){for(let f=0;f<u.length;f+=1)L(e[f]);s=!0}},o(i){e=e.filter(Boolean);for(let f=0;f<e.length;f+=1)R(e[f]);s=!1},d(i){i&&S(t),B(e,i)}}}function re(n){let t,c,a,s,u,e,$,i,f,r,k,j,g,m,O,v,b=I(n[3]),d=[];for(let l=0;l<b.length;l+=1)d[l]=W(V(n,b,l));let D=I(n[1].entries()),p=[];for(let l=0;l<D.length;l+=1)p[l]=A(T(n,D,l));const J=l=>R(p[l],1,1,()=>{p[l]=null});return{c(){t=w("p"),t.innerHTML="To position toast wherever you want you should have a <code>toast-container</code> with a custom position defined by CSS classes.",c=y(),a=w("p"),a.innerHTML="To <strong>stack</strong> toasts vertically, put them in the same container.",s=y(),u=w("div"),e=w("div"),$=w("label"),$.textContent="Position:",i=y(),f=w("select");for(let l=0;l<d.length;l+=1)d[l].c();r=y(),k=w("button"),k.textContent="Show toast",j=y(),g=w("div");for(let l=0;l<p.length;l+=1)p[l].c();h(t,"class","mb-2"),h(a,"class","mb-2"),h($,"class","me-3"),h($,"for","positionSelect"),h(f,"id","positionSelect"),h(f,"class","form-select w-auto"),n[2]===void 0&&Z(()=>n[4].call(f)),h(k,"class","btn btn-primary addToast ms-2"),h(e,"class","d-flex form-group align-items-center"),h(u,"class","d-flex justify-content-between"),h(g,"class","d-flex position-relative mt-2 w-100"),h(g,"aria-live","polite"),h(g,"aria-atomic","true"),M(g,"height","500px"),M(g,"background-color","gray")},m(l,_){H(l,t,_),H(l,c,_),H(l,a,_),H(l,s,_),H(l,u,_),C(u,e),C(e,$),C(e,i),C(e,f);for(let o=0;o<d.length;o+=1)d[o]&&d[o].m(f,null);q(f,n[2],!0),C(e,r),C(e,k),H(l,j,_),H(l,g,_);for(let o=0;o<p.length;o+=1)p[o]&&p[o].m(g,null);m=!0,O||(v=[z(f,"change",n[4]),z(k,"click",n[5])],O=!0)},p(l,[_]){if(_&8){b=I(l[3]);let o;for(o=0;o<b.length;o+=1){const N=V(l,b,o);d[o]?d[o].p(N,_):(d[o]=W(N),d[o].c(),d[o].m(f,null))}for(;o<d.length;o+=1)d[o].d(1);d.length=b.length}if(_&12&&q(f,l[2]),_&3){D=I(l[1].entries());let o;for(o=0;o<D.length;o+=1){const N=T(l,D,o);p[o]?(p[o].p(N,_),L(p[o],1)):(p[o]=A(N),p[o].c(),L(p[o],1),p[o].m(g,null))}for(E(),o=D.length;o<p.length;o+=1)J(o);F()}},i(l){if(!m){for(let _=0;_<D.length;_+=1)L(p[_]);m=!0}},o(l){p=p.filter(Boolean);for(let _=0;_<p.length;_+=1)R(p[_]);m=!1},d(l){l&&(S(t),S(c),S(a),S(s),S(u),S(j),S(g)),B(d,l),B(p,l),O=!1,x(v)}}}function ce(n,t,c){let a,s=G,u=()=>(s(),s=te(r,m=>c(1,a=m)),r);n.$$.on_destroy.push(()=>s());var e=(m=>(m.topLeft="top-0 start-0",m.topCenter="top-0 start-50 translate-middle-x",m.topRight="top-0 end-0",m.middleLeft="top-50 start-0 translate-middle-y",m.middleCenter="top-50 start-50 translate-middle",m.middleRight="top-50 end-0 translate-middle-y",m.bottomLeft="bottom-0 start-0",m.bottomCenter="bottom-0 start-50 translate-middle-x",m.bottomRight="bottom-0 end-0",m))(e||{});const $=Object.entries(e).map(m=>({value:m[1],label:m[0]}));let i="top-0 start-0";function f(){const{subscribe:m,update:O}=ie(new Map(Object.values(e).map(v=>[v,[]])));return{subscribe:m,add:v=>O(b=>{var d;return(d=b.get(v.className))==null||d.push(v),b}),remove:v=>O(b=>(b.set(v.className,b.get(v.className).filter(d=>d!==v)),b))}}const r=f();u();function k(){i=le(this),c(2,i),c(3,$)}return[r,a,i,$,k,()=>r.add({autohide:!0,delay:3e3,className:i,slotDefault:"Simple toast",slotHeader:"I am header"}),m=>r.remove(m)]}class Ce extends K{constructor(t){super(),Q(this,t,ce,re,Y,{toasts$:0})}get toasts$(){return this.$$.ctx[0]}}export{Ce as default};
