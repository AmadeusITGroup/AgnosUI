import{a as B,t as N}from"./AF72GVsa.js";import{p as U,a as C,g as e,b as F,j as t,k as s,s as o,V as v,t as G,i as L,f as a}from"./CCa7hPa2.js";import{s as b}from"./CbmKFJ8g.js";import{p as j,s as q}from"./P0IRpM_s.js";import{S as z,s as E}from"./cDKcb1Z_.js";import{b as H}from"./CbNfpOjF.js";import{s as P,a as V}from"./n7NBmYyo.js";import{A as W,b as D}from"./BBruzSeR.js";const J=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>`;var K=N('<div><div class="d-flex align-items-center"><span class="d-flex me-2"><!></span> <span class="me-4">Warning: component is <strong> </strong><br></span></div> <hr> <br> If you want to contribute, please visit <a target="_blank">the issues on GitHub</a>.</div>');function ae(h,r){U(r,!0);const[x,_]=P(),w=()=>V(j,"$page",x),A=/\/(components|services|daisyUI)\/([^/]+)/,$={info:D,warning:J};let l,i=a(()=>r.status==="inprogress"?"warning":"info"),I=a(()=>r.status==="inprogress"?"In progress":"Beta"),y=a(()=>r.status==="inprogress"?"This component is still under active development. More features will be added in the near future.":"This component has all the basic functionalities implemented. More polishing features might be added in the near future."),u=a(()=>w().url.pathname.match(A)?.[2]),T=a(()=>`https://github.com/AmadeusITGroup/AgnosUI/issues?q=is%3Aopen+is%3Aissue+label%3A%22widget%3A+${e(u)}%22`);C(()=>{e(u),F(()=>l.api.open())}),H(W(h,{get type(){return e(i)},get className(){return`p-0 border-0 border-start border-5 border-${e(i)??""}`},children:(p,O)=>{var n=K(),c=t(n),m=t(c),M=t(m);z(M,{get svg(){return $[e(i)]},className:"icon-16"}),s(m);var d=o(m,2),g=o(t(d)),S=t(g,!0);s(g),v(),s(d),s(c);var f=o(c,3),k=o(f,3);v(),s(n),G(()=>{E(n,`alert-container p-3 border border-${e(i)??""} rounded-end`),b(S,e(I)),b(f,` ${e(y)??""} `),q(k,"href",e(T))}),B(p,n)},$$slots:{default:!0}}),p=>l=p,()=>l),L(),_()}export{ae as S};
