import{p as V,s as W,V as q,W as z,b as m,f as A,h as b,R as f,k as a,c as h,a as B,t as _,j as E,n as F,e as w,r as G,T as g,d as J,O as K}from"./AppCommon-yQ9GDd-E.js";import{s as Q}from"./class-LKf8CrKl.js";import{b as U}from"./select-CJEv2RHk.js";import{T as X}from"./Toast-Bsux_DCL.js";import{w as Y}from"./index-abk9h5zK.js";import"./shared-C4xr_70V.js";import"./actions-1FJs2NnX.js";import"./Slot-QVDHCOJE.js";import"./config-BI14XQLI.js";import"./directive-CKEccryv-CIaX9Ntp.js";import"./snippet-CbCRci52.js";import"./toast-BkJ0zEPx-8aebtfC-.js";import"./extendWidget-DMfSPYhn.js";import"./writables-DoU_XYTX-DICLMg1u.js";import"./common-B7Hzs2vg-HRn6ysZI.js";import"./baseTransitions-CwYYTE0i.js";import"./promise-CY2U8bTP-Cbak5z1_.js";import"./fade-uOobJKgw-DWHl4M2u.js";import"./simpleClassTransition-BTQ_Bx7N.js";import"./cssTransitions-BkpW2sWC.js";var p=(r=>(r.topLeft="top-0 start-0",r.topCenter="top-0 start-50 translate-middle-x",r.topRight="top-0 end-0",r.middleLeft="top-50 start-0 translate-middle-y",r.middleCenter="top-50 start-50 translate-middle",r.middleRight="top-50 end-0 translate-middle-y",r.bottomLeft="bottom-0 start-0",r.bottomCenter="bottom-0 start-50 translate-middle-x",r.bottomRight="bottom-0 end-0",r))(p||{}),Z=_("<option> </option>"),T=_("<div></div>"),P=_('<p class="mb-2">To position toast wherever you want you should have a <code>toast-container</code> with a custom position defined by CSS classes.</p> <p class="mb-2">To <strong>stack</strong> toasts vertically, put them in the same container.</p> <div class="d-flex justify-content-between"><div class="d-flex form-group align-items-center"><label class="me-3" for="positionSelect">Position:</label> <select id="positionSelect" class="form-select w-auto"></select> <button class="btn btn-primary addToast ms-2">Show toast</button></div></div> <div class="d-flex position-relative mt-2 w-100" aria-live="polite" aria-atomic="true" style="height: 500px; background-color: gray;"></div>',1);function xt(r,$){V($,!0);const O=W(),S=()=>J(u,"$toasts$",O),k=Object.entries(p).map(s=>({value:s[1],label:s[0]}));let c=q(z(p.topLeft));function j(){const{subscribe:s,update:i}=Y(new Map(Object.values(p).map(t=>[t,[]])));return{subscribe:s,add:t=>i(o=>{var e;return(e=o.get(t.className))==null||e.push(t),o}),remove:t=>i(o=>(o.set(t.className,o.get(t.className).filter(e=>e!==t)),o))}}const u=j();var y=P(),x=m(A(y),4),C=b(x),v=m(b(C),2);f(v,21,()=>k,g,(s,i)=>{let t=()=>a(i).value,o=()=>a(i).label;var e=Z(),n={},d=b(e);w(()=>{n!==(n=t())&&(e.value=(e.__value=t())==null?"":t()),G(d,o())}),h(s,e)});var I=m(v,2);I.__click=()=>u.add({autoHide:!0,delay:3e3,className:a(c),children:"Simple toast",header:"I am header"});var L=m(x,2);f(L,5,()=>S().entries(),g,(s,i)=>{let t=()=>a(i)[0],o=()=>a(i)[1];var e=T();f(e,21,o,g,(n,d)=>{const l=K(()=>{const{dismissible:N,animatedOnInit:R,animated:H,children:D,header:M}=a(d);return{dismissible:N,animatedOnInit:R,animated:H,children:D,header:M}});X(n,{get dismissible(){return a(l).dismissible},get animatedOnInit(){return a(l).animatedOnInit},get animated(){return a(l).animated},get children(){return a(l).children},get header(){return a(l).header},onHidden:()=>u.remove(a(d))})}),w(()=>Q(e,`toast-container p-3 ${t()}`)),h(s,e)}),U(v,()=>a(c),s=>F(c,s)),h(r,y),B()}E(["click"]);export{xt as default};
