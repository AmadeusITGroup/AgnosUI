import{S as te,i as le,s as ne,Q as P,k as o,f as b,l as U,c as se,q as m,R as ie,g as a,v as u,T as X,m as oe,C as T,t as ae,a as ce,h as c,U as pe,d as re,B as ue,V as me,n as S,W as fe,e as de}from"./AppCommon-B0X1wpkD.js";import{A as he}from"./Alert-BaARwzUc.js";import"./Slot-Bd9w0Lo-.js";import"./config-DMyLY0t7.js";import"./directive-CKEccryv-C4vN6gkB.js";import"./alert-Dr0Q8aY8-Cj2UyThP.js";import"./common-B7Hzs2vg-A36r1Cit.js";import"./baseTransitions-BXL-cfKo.js";import"./writables-DoU_XYTX-CvfZwyIc.js";import"./promise-CY2U8bTP-Clg90S-3.js";import"./extendWidget-KHDCpIpg.js";import"./fade-uOobJKgw-DEnnVFGu.js";import"./simpleClassTransition-CfBPAkxw.js";import"./cssTransitions-CJbIklrT.js";var x=(t=>(t.success="success",t.info="info",t.warning="warning",t.danger="danger",t.primary="primary",t.secondary="secondary",t.light="light",t.dark="dark",t))(x||{});function Y(t,l,p){const i=t.slice();return i[12]=l[p].value,i[13]=l[p].label,i}function Z(t){let l,p=t[13]+"",i;return{c(){l=o("option"),i=U(p),l.__value=t[12],me(l,l.__value)},m(f,_){a(f,l,_),u(l,i)},p:S,d(f){f&&c(l)}}}function _e(t){let l,p,i,f,_,y,s;return{c(){l=o("h4"),l.textContent="Well done!",p=b(),i=o("p"),i.textContent=`Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing
		within an alert works with this kind of content.`,f=b(),_=o("hr"),y=b(),s=o("p"),s.textContent="Whenever you need to, be sure to use margin utilities to keep things nice and tidy.",m(l,"class","alert-heading"),m(s,"class","mb-0")},m(r,d){a(r,l,d),a(r,p,d),a(r,i,d),a(r,f,d),a(r,_,d),a(r,y,d),a(r,s,d)},p:S,d(r){r&&(c(l),c(p),c(i),c(f),c(_),c(y),c(s))}}}function be(t){let l,p,i,f,_,y,s,r,d,j,k,B,W,v,C,H,D,I,J,K,Q,O,L,V,z,A,E,F,$,R,G,M,q=P(t[5]),h=[];for(let e=0;e<q.length;e+=1)h[e]=Z(Y(t,q,e));let ee={dismissible:t[3],animatedOnInit:t[1],animated:t[2],type:t[4],$$slots:{default:[_e]},$$scope:{ctx:t}};return $=new he({props:ee}),t[11]($),{c(){l=o("button"),l.textContent="Show alert",p=b(),i=o("br"),f=b(),_=o("br"),y=b(),s=o("div"),r=o("div"),d=o("label"),d.textContent="Alert type:",j=b(),k=o("select");for(let e=0;e<h.length;e+=1)h[e].c();B=b(),W=o("label"),v=o("input"),C=U("Animated on init"),H=b(),D=o("label"),I=o("input"),J=U("Animated"),K=b(),Q=o("label"),O=o("input"),L=U("Dismissible"),V=b(),z=o("br"),A=b(),E=o("br"),F=b(),se($.$$.fragment),m(l,"class","btn btn-primary showAlert"),m(l,"type","button"),m(d,"class","align-self-center me-3"),m(d,"for","typeSelect"),m(k,"id","typeSelect"),m(k,"class","form-select w-auto"),t[4]===void 0&&ie(()=>t[7].call(k)),m(r,"class","d-flex form-group"),m(v,"class","form-check-input me-1"),m(v,"type","checkbox"),m(I,"class","form-check-input me-1"),m(I,"type","checkbox"),m(O,"class","dismissibleInput form-check-input me-1"),m(O,"type","checkbox"),m(s,"class","d-flex flex-column")},m(e,n){a(e,l,n),a(e,p,n),a(e,i,n),a(e,f,n),a(e,_,n),a(e,y,n),a(e,s,n),u(s,r),u(r,d),u(r,j),u(r,k);for(let w=0;w<h.length;w+=1)h[w]&&h[w].m(k,null);X(k,t[4],!0),u(s,B),u(s,W),u(W,v),v.checked=t[1],u(W,C),u(s,H),u(s,D),u(D,I),I.checked=t[2],u(D,J),u(s,K),u(s,Q),u(Q,O),O.checked=t[3],u(Q,L),a(e,V,n),a(e,z,n),a(e,A,n),a(e,E,n),a(e,F,n),oe($,e,n),R=!0,G||(M=[T(l,"click",t[6]),T(k,"change",t[7]),T(v,"change",t[8]),T(I,"change",t[9]),T(O,"change",t[10])],G=!0)},p(e,[n]){if(n&32){q=P(e[5]);let g;for(g=0;g<q.length;g+=1){const N=Y(e,q,g);h[g]?h[g].p(N,n):(h[g]=Z(N),h[g].c(),h[g].m(k,null))}for(;g<h.length;g+=1)h[g].d(1);h.length=q.length}n&48&&X(k,e[4]),n&2&&(v.checked=e[1]),n&4&&(I.checked=e[2]),n&8&&(O.checked=e[3]);const w={};n&8&&(w.dismissible=e[3]),n&2&&(w.animatedOnInit=e[1]),n&4&&(w.animated=e[2]),n&16&&(w.type=e[4]),n&65536&&(w.$$scope={dirty:n,ctx:e}),$.$set(w)},i(e){R||(ae($.$$.fragment,e),R=!0)},o(e){ce($.$$.fragment,e),R=!1},d(e){e&&(c(l),c(p),c(i),c(f),c(_),c(y),c(s),c(V),c(z),c(A),c(E),c(F)),pe(h,e),t[11](null),re($,e),G=!1,ue(M)}}}function ke(t,l,p){let i,[f,_,y]=[!0,!0,!0],s="success";const r=Object.entries(x).map(C=>({value:C[1],label:C[0]})),d=()=>i.api.open();function j(){s=fe(this),p(4,s),p(5,r)}function k(){f=this.checked,p(1,f)}function B(){_=this.checked,p(2,_)}function W(){y=this.checked,p(3,y)}function v(C){de[C?"unshift":"push"](()=>{i=C,p(0,i)})}return[i,f,_,y,s,r,d,j,k,B,W,v]}class Qe extends te{constructor(l){super(),le(this,l,ke,be,ne,{})}}export{Qe as default};
