import{S as ee,i as te,s as le,Q as P,k as o,f as k,l as V,c as ne,q as d,R as se,g as a,v as m,T as X,m as ie,C as T,t as oe,a as ae,h as c,U as ce,d as pe,B as re,V as ue,n as S,W as me,e as fe}from"./AppCommon-B0X1wpkD.js";import{A as de}from"./Alert-BaARwzUc.js";import"./Slot-Bd9w0Lo-.js";import"./config-DMyLY0t7.js";import"./directive-CKEccryv-C4vN6gkB.js";import"./alert-Dr0Q8aY8-Cj2UyThP.js";import"./common-B7Hzs2vg-A36r1Cit.js";import"./baseTransitions-BXL-cfKo.js";import"./writables-DoU_XYTX-CvfZwyIc.js";import"./promise-CY2U8bTP-Clg90S-3.js";import"./extendWidget-KHDCpIpg.js";import"./fade-uOobJKgw-DEnnVFGu.js";import"./simpleClassTransition-CfBPAkxw.js";import"./cssTransitions-CJbIklrT.js";function Y(t,l,p){const i=t.slice();return i[13]=l[p].value,i[14]=l[p].label,i}function Z(t){let l,p=t[14]+"",i;return{c(){l=o("option"),i=V(p),l.__value=t[13],ue(l,l.__value)},m(h,b){a(h,l,b),m(l,i)},p:S,d(h){h&&c(l)}}}function he(t){let l,p,i,h,b,w,s;return{c(){l=o("h4"),l.textContent="Well done!",p=k(),i=o("p"),i.textContent=`Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing
		within an alert works with this kind of content.`,h=k(),b=o("hr"),w=k(),s=o("p"),s.textContent="Whenever you need to, be sure to use margin utilities to keep things nice and tidy.",d(l,"class","alert-heading"),d(s,"class","mb-0")},m(r,f){a(r,l,f),a(r,p,f),a(r,i,f),a(r,h,f),a(r,b,f),a(r,w,f),a(r,s,f)},p:S,d(r){r&&(c(l),c(p),c(i),c(h),c(b),c(w),c(s))}}}function _e(t){let l,p,i,h,b,w,s,r,f,j,g,B,W,C,D,u,Q,I,J,K,R,O,L,z,A,E,F,G,$,U,H,M,q=P(t[5]),_=[];for(let e=0;e<q.length;e+=1)_[e]=Z(Y(t,q,e));let x={dismissible:t[3],animatedOnInit:t[1],animated:t[2],type:t[4],$$slots:{default:[he]},$$scope:{ctx:t}};return $=new de({props:x}),t[11]($),{c(){l=o("button"),l.textContent="Show alert",p=k(),i=o("br"),h=k(),b=o("br"),w=k(),s=o("div"),r=o("div"),f=o("label"),f.textContent="Alert type:",j=k(),g=o("select");for(let e=0;e<_.length;e+=1)_[e].c();B=k(),W=o("label"),C=o("input"),D=V("Animated on init"),u=k(),Q=o("label"),I=o("input"),J=V("Animated"),K=k(),R=o("label"),O=o("input"),L=V("Dismissible"),z=k(),A=o("br"),E=k(),F=o("br"),G=k(),ne($.$$.fragment),d(l,"class","btn btn-primary showAlert"),d(l,"type","button"),d(f,"class","align-self-center me-3"),d(f,"for","typeSelect"),d(g,"id","typeSelect"),d(g,"class","form-select w-auto"),t[4]===void 0&&se(()=>t[7].call(g)),d(r,"class","d-flex form-group"),d(C,"class","form-check-input me-1"),d(C,"type","checkbox"),d(I,"class","form-check-input me-1"),d(I,"type","checkbox"),d(O,"class","dismissibleInput form-check-input me-1"),d(O,"type","checkbox"),d(s,"class","d-flex flex-column")},m(e,n){a(e,l,n),a(e,p,n),a(e,i,n),a(e,h,n),a(e,b,n),a(e,w,n),a(e,s,n),m(s,r),m(r,f),m(r,j),m(r,g);for(let v=0;v<_.length;v+=1)_[v]&&_[v].m(g,null);X(g,t[4],!0),m(s,B),m(s,W),m(W,C),C.checked=t[1],m(W,D),m(s,u),m(s,Q),m(Q,I),I.checked=t[2],m(Q,J),m(s,K),m(s,R),m(R,O),O.checked=t[3],m(R,L),a(e,z,n),a(e,A,n),a(e,E,n),a(e,F,n),a(e,G,n),ie($,e,n),U=!0,H||(M=[T(l,"click",t[6]),T(g,"change",t[7]),T(C,"change",t[8]),T(I,"change",t[9]),T(O,"change",t[10])],H=!0)},p(e,[n]){if(n&32){q=P(e[5]);let y;for(y=0;y<q.length;y+=1){const N=Y(e,q,y);_[y]?_[y].p(N,n):(_[y]=Z(N),_[y].c(),_[y].m(g,null))}for(;y<_.length;y+=1)_[y].d(1);_.length=q.length}n&48&&X(g,e[4]),n&2&&(C.checked=e[1]),n&4&&(I.checked=e[2]),n&8&&(O.checked=e[3]);const v={};n&8&&(v.dismissible=e[3]),n&2&&(v.animatedOnInit=e[1]),n&4&&(v.animated=e[2]),n&16&&(v.type=e[4]),n&131072&&(v.$$scope={dirty:n,ctx:e}),$.$set(v)},i(e){U||(oe($.$$.fragment,e),U=!0)},o(e){ae($.$$.fragment,e),U=!1},d(e){e&&(c(l),c(p),c(i),c(h),c(b),c(w),c(s),c(z),c(A),c(E),c(F),c(G)),ce(_,e),t[11](null),pe($,e),H=!1,re(M)}}}function be(t,l,p){let i,[h,b,w]=[!0,!0,!0],s="success";var r=(u=>(u.success="success",u.info="info",u.warning="warning",u.danger="danger",u.primary="primary",u.secondary="secondary",u.light="light",u.dark="dark",u))(r||{});const f=Object.entries(r).map(u=>({value:u[1],label:u[0]})),j=()=>i.api.open();function g(){s=me(this),p(4,s),p(5,f)}function B(){h=this.checked,p(1,h)}function W(){b=this.checked,p(2,b)}function C(){w=this.checked,p(3,w)}function D(u){fe[u?"unshift":"push"](()=>{i=u,p(0,i)})}return[i,h,b,w,s,f,j,g,B,W,C,D]}class De extends ee{constructor(l){super(),te(this,l,be,_e,le,{})}}export{De as default};