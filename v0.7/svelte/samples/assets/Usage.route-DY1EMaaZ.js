import{p,f as b,d as f,b as v,a as m,t as g,g as i,s as h,h as _,j as x,l as k,q as y}from"./AppCommon-CvTG4iwO.js";import{a as L}from"./actions-LhUqO-Ga.js";import{a as w}from"./input-6Nd4hSYe.js";import{b as D}from"./directive-CKEccryv-BKNwwjMq.js";const n=D((t,o)=>{console.log("Directive has been executed on node ",t.id);const e=s=>{console.log(o,s.target)};return t.addEventListener("click",e),{update:s=>o=s,destroy:()=>{t.removeEventListener("click",e),console.log("Destroy function executed ",t.id)}}});var E=g('<div><button class="btn btn-primary" id="test">button 1</button> <button class="btn btn-primary" id="test2">button 2</button></div> <hr> <input class="form-control" id="clickText" type="text" aria-label="text input to configure the directive"> <hr> <span>(Open the console to see the outputs)</span>',1);function U(t,o){p(o,!0);let e=x("focus element clicked");var s=E(),a=b(s);const l=y(()=>({}));let c;L(a,(r,d)=>n==null?void 0:n(r,d),()=>i(e));var u=h(a,4);f(()=>c=k(a,c,{...i(l)})),w(u,()=>i(e),r=>_(e,r)),v(t,s),m()}export{U as default};
