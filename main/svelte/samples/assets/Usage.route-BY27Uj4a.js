import{p,f as d,d as b,b as f,a as v,t as m,g as c,s as g,k as h,h as k,j as x}from"./AppCommon-CBBtLyuE.js";import{a as y}from"./actions-Dry0yoXS.js";import{a as _}from"./input-B9SqBibp.js";import{b as L}from"./stores-DX-ADOKq-BfxXclJX.js";const i=L((t,a)=>{console.log("Directive has been executed on node ",t.id);const e=s=>{console.log(a,s.target)};return t.addEventListener("click",e),{update:s=>a=s,destroy:()=>{t.removeEventListener("click",e),console.log("Destroy function executed ",t.id)}}});var D=m('<div><button class="btn btn-primary" id="test">button 1</button> <button class="btn btn-primary" id="test2">button 2</button></div> <hr> <input class="form-control" id="clickText" type="text" aria-label="text input to configure the directive"> <hr> <span>(Open the console to see the outputs)</span>',1);function T(t,a){p(a,!0);let e=x("focus element clicked");var s=D(),r=d(s);let n;y(r,(o,l)=>i==null?void 0:i(o,l),()=>c(e));var u=g(r,4);b(o=>n=h(r,n,{...o}),[()=>({})]),_(u,()=>c(e),o=>k(e,o)),f(t,s),v()}export{T as default};
