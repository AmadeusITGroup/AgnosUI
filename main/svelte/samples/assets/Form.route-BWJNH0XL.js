import{s as x,L as d,g as t,t as m,b as e,f as W,l as c,e as k,d as i,h as $,c as v,n as j,k as h,W as q}from"./AppCommon-B-ROr4aU.js";import{R as z}from"./Rating-CUgSmmiV.js";import"./actions-Cbyr4fVv.js";import"./rating.gen-BMGuUPDL.js";import"./rating-hovacUx0-CfbXGs4x.js";import"./rating-CvTnNxgN-B9uXe9dY.js";import"./stores-DWJrwGVR.js";import"./dom-gfxqXJpK-CVUkDlT_.js";import"./writables-CgpOQ4hA-BLtlctEd.js";import"./extendWidget-GeFhB8wc.js";import"./config-lZO9LbO2.js";import"./config-ZUzlAODH.js";import"./index-client-hhUEBj_e.js";import"./Slot-DxNJ8UAq.js";import"./snippet-DFOQFhBJ.js";var A=m('<div class="text-success">Thanks!</div>'),D=m('<div class="text-danger-emphasis">Please rate us</div>'),E=(o,a)=>c(a,!t(a)),G=(o,a)=>c(a,0),H=m('<div class="form-label" id="ratingLabel">Rating of your experience</div> <br> <!> <div id="form-msg" class="form-text small"><!> <!></div> <pre>Model: <span id="form-model"><b> </b></span></pre> <div class="d-flex flex-wrap gap-2"><button id="form-btn-enable"> </button> <button id="form-btn-clear" class="btn btn-sm btn-outline-primary">Clear</button></div>',1);function it(o){let a=x(!1),s=x(0),p=d(()=>t(s)>=1),L=d(()=>!t(a)&&t(p)),y=d(()=>!t(a)&&!t(p));var b=H(),_=e(W(b),4);z(_,{get disabled(){return t(a)},ariaLabelledBy:"ratingLabel",get rating(){return t(s)},set rating(r){c(s,r,!0)}});var f=e(_,2),u=i(f);{var R=r=>{var n=A();v(r,n)};k(u,r=>{t(L)&&r(R)})}var w=e(u,2);{var B=r=>{var n=D();v(r,n)};k(w,r=>{t(y)&&r(B)})}var g=e(f,2),C=e(i(g)),F=i(C),M=i(F),P=e(g,2),l=i(P);l.__click=[E,a];var T=i(l),V=e(l,2);V.__click=[G,s],$(()=>{h(M,t(s)),q(l,1,`btn btn-sm btn-outline-${(t(a)?"danger":"success")??""}`),h(T,t(a)?"control disabled":" control enabled")}),v(o,b)}j(["click"]);export{it as default};
