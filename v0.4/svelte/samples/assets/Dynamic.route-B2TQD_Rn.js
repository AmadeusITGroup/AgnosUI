import{S as J,i as K,s as X,Q as N,k as w,f as I,q as h,R as Y,a1 as q,g as C,v as H,T as D,C as E,t as O,D as z,E as A,a as j,h as S,U as M,B as P,l as x,V as ee,n as F,Z as te,W as le,c as ne,m as ae,d as oe}from"./AppCommon-EGvQgKwz.js";import{T as se}from"./Toast-4cnVKXI6.js";import{w as re}from"./index-DBY58vID.js";import"./Slot-CIXSXyWX.js";import"./config-dcf0MZy6.js";import"./directive-3-8yr-ZK-C23OGezp.js";import"./toast-DN0HwUbs-J5l57KHr.js";import"./extendWidget-8zXnCiQz.js";import"./writables-DoU_XYTX-esNIv65O.js";import"./common-BCEqowKw-BDxW3zpb.js";import"./baseTransitions-o4G_vBWq.js";import"./promise-CY2U8bTP-CDYUm4pL.js";import"./fade-uOobJKgw-RbFJ57K3.js";import"./simpleClassTransition-CTFkEAKQ.js";import"./cssTransitions-DczX0sNo.js";function Q(n,t,c){const o=n.slice();return o[2]=t[c][0],o[9]=t[c][1],o}function T(n,t,c){const o=n.slice();o[12]=t[c];const s=o[12];return o[13]=s.dismissible,o[14]=s.animatedOnInit,o[15]=s.animated,o[16]=s.children,o[17]=s.header,o}function U(n,t,c){const o=n.slice();return o[20]=t[c].value,o[21]=t[c].label,o}function V(n){let t,c=n[21]+"",o;return{c(){t=w("option"),o=x(c),t.__value=n[20],ee(t,t.__value)},m(s,u){C(s,t,u),H(t,o)},p:F,d(s){s&&S(t)}}}function W(n){let t,c;function o(){return n[6](n[12])}return t=new se({props:{dismissible:n[13],animatedOnInit:n[14],animated:n[15],children:n[16],header:n[17],onHidden:o}}),{c(){ne(t.$$.fragment)},m(s,u){ae(t,s,u),c=!0},p(s,u){n=s;const e={};u&2&&(e.dismissible=n[13]),u&2&&(e.animatedOnInit=n[14]),u&2&&(e.animated=n[15]),u&2&&(e.children=n[16]),u&2&&(e.header=n[17]),u&2&&(e.onHidden=o),t.$set(e)},i(s){c||(O(t.$$.fragment,s),c=!0)},o(s){j(t.$$.fragment,s),c=!1},d(s){oe(t,s)}}}function Z(n){let t,c,o,s,u=N(n[9]),e=[];for(let r=0;r<u.length;r+=1)e[r]=W(T(n,u,r));const $=r=>j(e[r],1,1,()=>{e[r]=null});return{c(){t=w("div");for(let r=0;r<e.length;r+=1)e[r].c();c=I(),h(t,"class",o=`toast-container p-3 ${n[2]}`)},m(r,m){C(r,t,m);for(let i=0;i<e.length;i+=1)e[i]&&e[i].m(t,null);H(t,c),s=!0},p(r,m){if(m&3){u=N(r[9]);let i;for(i=0;i<u.length;i+=1){const k=T(r,u,i);e[i]?(e[i].p(k,m),O(e[i],1)):(e[i]=W(k),e[i].c(),O(e[i],1),e[i].m(t,c))}for(z(),i=u.length;i<e.length;i+=1)$(i);A()}(!s||m&2&&o!==(o=`toast-container p-3 ${r[2]}`))&&h(t,"class",o)},i(r){if(!s){for(let m=0;m<u.length;m+=1)O(e[m]);s=!0}},o(r){e=e.filter(Boolean);for(let m=0;m<e.length;m+=1)j(e[m]);s=!1},d(r){r&&S(t),M(e,r)}}}function ie(n){let t,c,o,s,u,e,$,r,m,i,k,B,g,f,y,v,b=N(n[3]),_=[];for(let l=0;l<b.length;l+=1)_[l]=V(U(n,b,l));let L=N(n[1].entries()),d=[];for(let l=0;l<L.length;l+=1)d[l]=Z(Q(n,L,l));const G=l=>j(d[l],1,1,()=>{d[l]=null});return{c(){t=w("p"),t.innerHTML="To position toast wherever you want you should have a <code>toast-container</code> with a custom position defined by CSS classes.",c=I(),o=w("p"),o.innerHTML="To <strong>stack</strong> toasts vertically, put them in the same container.",s=I(),u=w("div"),e=w("div"),$=w("label"),$.textContent="Position:",r=I(),m=w("select");for(let l=0;l<_.length;l+=1)_[l].c();i=I(),k=w("button"),k.textContent="Show toast",B=I(),g=w("div");for(let l=0;l<d.length;l+=1)d[l].c();h(t,"class","mb-2"),h(o,"class","mb-2"),h($,"class","me-3"),h($,"for","positionSelect"),h(m,"id","positionSelect"),h(m,"class","form-select w-auto"),n[2]===void 0&&Y(()=>n[4].call(m)),h(k,"class","btn btn-primary addToast ms-2"),h(e,"class","d-flex form-group align-items-center"),h(u,"class","d-flex justify-content-between"),h(g,"class","d-flex position-relative mt-2 w-100"),h(g,"aria-live","polite"),h(g,"aria-atomic","true"),q(g,"height","500px"),q(g,"background-color","gray")},m(l,p){C(l,t,p),C(l,c,p),C(l,o,p),C(l,s,p),C(l,u,p),H(u,e),H(e,$),H(e,r),H(e,m);for(let a=0;a<_.length;a+=1)_[a]&&_[a].m(m,null);D(m,n[2],!0),H(e,i),H(e,k),C(l,B,p),C(l,g,p);for(let a=0;a<d.length;a+=1)d[a]&&d[a].m(g,null);f=!0,y||(v=[E(m,"change",n[4]),E(k,"click",n[5])],y=!0)},p(l,[p]){if(p&8){b=N(l[3]);let a;for(a=0;a<b.length;a+=1){const R=U(l,b,a);_[a]?_[a].p(R,p):(_[a]=V(R),_[a].c(),_[a].m(m,null))}for(;a<_.length;a+=1)_[a].d(1);_.length=b.length}if(p&12&&D(m,l[2]),p&3){L=N(l[1].entries());let a;for(a=0;a<L.length;a+=1){const R=Q(l,L,a);d[a]?(d[a].p(R,p),O(d[a],1)):(d[a]=Z(R),d[a].c(),O(d[a],1),d[a].m(g,null))}for(z(),a=L.length;a<d.length;a+=1)G(a);A()}},i(l){if(!f){for(let p=0;p<L.length;p+=1)O(d[p]);f=!0}},o(l){d=d.filter(Boolean);for(let p=0;p<d.length;p+=1)j(d[p]);f=!1},d(l){l&&(S(t),S(c),S(o),S(s),S(u),S(B),S(g)),M(_,l),M(d,l),y=!1,P(v)}}}function ce(n,t,c){let o,s=F,u=()=>(s(),s=te(i,f=>c(1,o=f)),i);n.$$.on_destroy.push(()=>s());var e=(f=>(f.topLeft="top-0 start-0",f.topCenter="top-0 start-50 translate-middle-x",f.topRight="top-0 end-0",f.middleLeft="top-50 start-0 translate-middle-y",f.middleCenter="top-50 start-50 translate-middle",f.middleRight="top-50 end-0 translate-middle-y",f.bottomLeft="bottom-0 start-0",f.bottomCenter="bottom-0 start-50 translate-middle-x",f.bottomRight="bottom-0 end-0",f))(e||{});const $=Object.entries(e).map(f=>({value:f[1],label:f[0]}));let r="top-0 start-0";function m(){const{subscribe:f,update:y}=re(new Map(Object.values(e).map(v=>[v,[]])));return{subscribe:f,add:v=>y(b=>{var _;return(_=b.get(v.className))==null||_.push(v),b}),remove:v=>y(b=>(b.set(v.className,b.get(v.className).filter(_=>_!==v)),b))}}const i=m();u();function k(){r=le(this),c(2,r),c(3,$)}return[i,o,r,$,k,()=>i.add({autoHide:!0,delay:3e3,className:r,children:"Simple toast",header:"I am header"}),f=>i.remove(f)]}class He extends J{constructor(t){super(),K(this,t,ce,ie,X,{toasts$:0})}get toasts$(){return this.$$.ctx[0]}}export{He as default};
