var B=Object.defineProperty;var C=t=>{throw TypeError(t)};var F=(t,e,r)=>e in t?B(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var _=(t,e,r)=>F(t,typeof e!="symbol"?e+"":e,r),G=(t,e,r)=>e.has(t)||C("Cannot "+r);var m=(t,e,r)=>(G(t,e,"read from private field"),r?r.call(t):e.get(t)),I=(t,e,r)=>e.has(t)?C("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r);import{k as N,R,g as a,p as J,s as v,f as K,e as y,P as x,b as w,a as M,t as S,h as U,d as L,Q as O,j as V,n as W,q as X}from"./AppCommon-C_Uz3Ejm.js";import{s as Y}from"./class-DjsZmGv6.js";import{b as Z}from"./select-CuGBncWd.js";import{T}from"./Toast-B0Lwcotm.js";import"./actions-CtzdcLql.js";import"./Slot-Bu-WTpc_.js";import"./snippet-gGBChira.js";import"./toast-CpvsibAI-C6uWvNKx.js";import"./extendWidget-Dy2T1Nx7.js";import"./directive-CKEccryv-Dj2WBjfx.js";import"./writables-DCiBdIBK-COVli6XW.js";import"./common-Banw3FYN-DIL4Zdba.js";import"./baseTransitions-GPSQ6ZzE.js";import"./promise-CY2U8bTP-wBjUimDL.js";import"./fade-uOobJKgw-LiOwWpQc.js";import"./simpleClassTransition-BArNqS_M.js";import"./cssTransitions-Da5O2FVQ.js";import"./config-BR7DENd9.js";import"./config-vsRo1j0h.js";import"./index-client-D5u8RE9d.js";var u=(t=>(t.topLeft="top-0 start-0",t.topCenter="top-0 start-50 translate-middle-x",t.topRight="top-0 end-0",t.middleLeft="top-50 start-0 translate-middle-y",t.middleCenter="top-50 start-50 translate-middle",t.middleRight="top-50 end-0 translate-middle-y",t.bottomLeft="bottom-0 start-0",t.bottomCenter="bottom-0 start-50 translate-middle-x",t.bottomRight="bottom-0 end-0",t))(u||{}),o;class P{constructor(){I(this,o,N(R(Object.fromEntries(Object.values(u).map(e=>[e,[]])))));_(this,"add",e=>a(m(this,o))[e.className].push(e));_(this,"remove",e=>a(m(this,o))[e.className].splice(a(m(this,o))[e.className].indexOf(e),1))}get toasts(){return a(m(this,o))}}o=new WeakMap;var tt=S("<option> </option>"),et=(t,e,r)=>e.add({autoHide:!0,delay:3e3,className:a(r),children:"Simple toast",header:"I am header"}),at=S("<div></div>"),rt=S('<p class="mb-2">To position toast wherever you want you should have a <code>toast-container</code> with a custom position defined by CSS classes.</p> <p class="mb-2">To <strong>stack</strong> toasts vertically, put them in the same container.</p> <div class="d-flex justify-content-between"><div class="d-flex form-group align-items-center"><label class="me-3" for="positionSelect">Position:</label> <select id="positionSelect" class="form-select w-auto"></select> <button class="btn btn-primary addToast ms-2">Show toast</button></div></div> <div class="d-flex position-relative mt-2 w-100" aria-live="polite" aria-atomic="true" style="height: 500px; background-color: gray;"></div>',1);function kt(t,e){J(e,!0);const r=Object.entries(u).map(i=>({value:i[1],label:i[0]}));let b=N(R(u.topLeft));const h=new P;var j=rt(),k=v(K(j),4),H=y(k),f=v(y(H),2);x(f,21,()=>r,O,(i,l)=>{let n=()=>a(l).value,g=()=>a(l).label;var s=tt(),p={},c=y(s);L(()=>{p!==(p=n())&&(s.value=(s.__value=n())==null?"":n()),W(c,g())}),w(i,s)});var q=v(f,2);q.__click=[et,h,b];var D=v(k,2);x(D,21,()=>Object.entries(h.toasts),O,(i,l)=>{let n=()=>a(l)[0],g=()=>a(l)[1];var s=at();x(s,21,g,O,(p,c)=>{const d=X(()=>{const{dismissible:E,animatedOnInit:Q,animated:$,children:z,header:A}=a(c);return{dismissible:E,animatedOnInit:Q,animated:$,children:z,header:A}});T(p,{get dismissible(){return a(d).dismissible},get animatedOnInit(){return a(d).animatedOnInit},get animated(){return a(d).animated},get children(){return a(d).children},get header(){return a(d).header},onHidden:()=>h.remove(a(c))})}),L(()=>Y(s,`toast-container p-3 ${n()}`)),w(i,s)}),Z(f,()=>a(b),i=>V(b,i)),w(t,j),M()}U(["click"]);export{kt as default};