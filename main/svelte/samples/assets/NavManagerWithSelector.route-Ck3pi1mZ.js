import{p as N,M as S,d as _,b as L,a as H,t as M,s as e,k as W,a1 as p,l as q,n as o}from"./AppCommon-DE0E2XGg.js";import{a as h}from"./actions-DYuHte2n.js";import{c as C}from"./navManager-CA_zeAke.js";import{c as D}from"./dom-BB9jLllr-DsL3TsuS.js";var E=M('<div><input type="text" aria-label="navigable-input-1" class="form-control me-1"> <span tabindex="-1" class="form-control w-auto me-1"> </span> <input tabindex="-1" type="checkbox" aria-label="navigable-input-2" class="form-check-input align-self-center me-1"> <input tabindex="-1" type="text" aria-label="navigable-input-3" disabled class="form-control me-1"> <input tabindex="-1" type="text" aria-label="navigable-input-4" class="form-control me-1"></div>');function x(l,r){N(r,!0);const{directive:t,focusLeft:c,focusRight:i,focusFirst:d,focusLast:y,focusFirstLeft:w,focusFirstRight:A}=C(),R={keys:{ArrowLeft:c,ArrowRight:i,Home:d,End:y,"Meta+ArrowLeft":w,"Meta+ArrowRight":A},selector:a=>a.querySelectorAll("input,span")};let n=S(r,"text",3,"");var s=E();let v;var f=o(s),m=e(f,2),k=o(m),b=e(m,4),F=e(b,2);h(s,(a,u)=>{var g;return(g=D)==null?void 0:g(a,u)},()=>"d-flex demo-navmanager-line"),h(s,(a,u)=>t==null?void 0:t(a,u),()=>R),_(a=>{v=W(s,v,{...a}),p(f,n()),q(k,n()),p(b,n()),p(F,n())},[()=>({})]),L(l,s),H()}var j=M('<div class="demo-navmanager"><div dir="ltr" class="mt-3 pb-3"><h2>Left-to-right</h2> <!></div> <div dir="rtl" class="mt-3 pb-3"><h2>Right-to-left</h2> <!></div></div>');function J(l){var r=j(),t=o(r),c=e(o(t),2);x(c,{text:"Hello"});var i=e(t,2),d=e(o(i),2);x(d,{text:"שָׁלוֹם"}),_(()=>{t.dir=t.dir,i.dir=i.dir}),L(l,r)}export{J as default};
