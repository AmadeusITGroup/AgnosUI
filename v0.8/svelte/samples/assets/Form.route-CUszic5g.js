import{s as e,f as V,g as t,h as m,R as $,c as x,d as q,b as d,t as p,j as k,n as i,e as z,L as v,l as h}from"./AppCommon-wWEJ6LdR.js";import{s as A}from"./class-BlZAL10z.js";import{R as D}from"./Rating-CgQVxGTE.js";import"./actions-Bnx6QvvI.js";import"./rating.gen-HAxg5TGM.js";import"./rating-hovacUx0-tV3o1XC7.js";import"./rating-B1JLZgIR-_8PcW05b.js";import"./stores-CJcu1rl_.js";import"./dom-BB9jLllr-CeqtqeKx.js";import"./writables-DCiBdIBK-BRdRWZTk.js";import"./extendWidget-CP_DRKFm.js";import"./config-DHVcL9Rn.js";import"./config-CzTY2ejt.js";import"./index-client-QFyY-InH.js";import"./Slot-B1WpcjxW.js";import"./snippet-Drtakk-s.js";var E=p('<div class="text-success">Thanks!</div>'),G=p('<div class="text-danger-emphasis">Please rate us</div>'),H=(l,a)=>m(a,!t(a)),I=(l,a)=>m(a,0),J=p('<div class="form-label" id="ratingLabel">Rating of your experience</div> <br> <!> <div id="form-msg" class="form-text small"><!> <!></div> <pre>Model: <span id="form-model"><b> </b></span></pre> <div class="d-flex flex-wrap gap-2"><button id="form-btn-enable"> </button> <button id="form-btn-clear" class="btn btn-sm btn-outline-primary">Clear</button></div>',1);function ot(l){let a=k(!1),s=k(0),c=v(()=>t(s)>=1),y=v(()=>!t(a)&&t(c)),L=v(()=>!t(a)&&!t(c));var b=J(),_=e(V(b),4);D(_,{get disabled(){return t(a)},ariaLabelledBy:"ratingLabel",get rating(){return t(s)},set rating(r){m(s,$(r))}});var f=e(_,2),u=i(f);{var R=r=>{var n=E();d(r,n)};x(u,r=>{t(y)&&r(R)})}var j=e(u,2);{var w=r=>{var n=G();d(r,n)};x(j,r=>{t(L)&&r(w)})}var g=e(f,2),B=e(i(g)),C=i(B),F=i(C),M=e(g,2),o=i(M);o.__click=[H,a];var P=i(o),T=e(o,2);T.__click=[I,s],q(()=>{h(F,t(s)),A(o,`btn btn-sm btn-outline-${(t(a)?"danger":"success")??""}`),h(P,t(a)?"control disabled":" control enabled")}),d(l,b)}z(["click"]);export{ot as default};
