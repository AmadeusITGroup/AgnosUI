import{t as m,s as e,f as Z,l as p,R as $,b as x,g as a,e as k,L as d,d as i,h as j,c as v,n as q,k as h,Z as z}from"./AppCommon-DpFUH4-D.js";import{R as A}from"./Rating-C1_S8USG.js";import"./actions-QldAWIid.js";import"./rating.gen-BZSEmtgR.js";import"./rating-hovacUx0-Dl5GE8Am.js";import"./rating-CvTnNxgN-vnnzYFZm.js";import"./stores-rsYdYw9J.js";import"./dom-gfxqXJpK-DWJgb4QK.js";import"./writables-CgpOQ4hA-DSsIStup.js";import"./extendWidget-CuTAzCb6.js";import"./config-Cw4Yudel.js";import"./config-DFeEizj6.js";import"./index-client-BAzIOzv7.js";import"./Slot-wLoV5D_G.js";import"./snippet-D7FZOkeU.js";var D=m('<div class="text-success">Thanks!</div>'),E=m('<div class="text-danger-emphasis">Please rate us</div>'),G=(l,t)=>p(t,!a(t)),H=(l,t)=>p(t,0),I=m('<div class="form-label" id="ratingLabel">Rating of your experience</div> <br> <!> <div id="form-msg" class="form-text small"><!> <!></div> <pre>Model: <span id="form-model"><b> </b></span></pre> <div class="d-flex flex-wrap gap-2"><button id="form-btn-enable"> </button> <button id="form-btn-clear" class="btn btn-sm btn-outline-primary">Clear</button></div>',1);function sa(l){let t=x(!1),s=x(0),c=d(()=>a(s)>=1),y=d(()=>!a(t)&&a(c)),L=d(()=>!a(t)&&!a(c));var b=I(),_=e(Z(b),4);A(_,{get disabled(){return a(t)},ariaLabelledBy:"ratingLabel",get rating(){return a(s)},set rating(r){p(s,$(r))}});var f=e(_,2),u=i(f);{var R=r=>{var n=D();v(r,n)};k(u,r=>{a(y)&&r(R)})}var w=e(u,2);{var B=r=>{var n=E();v(r,n)};k(w,r=>{a(L)&&r(B)})}var g=e(f,2),C=e(i(g)),F=i(C),M=i(F),P=e(g,2),o=i(P);o.__click=[G,t];var T=i(o),V=e(o,2);V.__click=[H,s],j(()=>{h(M,a(s)),z(o,1,`btn btn-sm btn-outline-${(a(t)?"danger":"success")??""}`),h(T,a(t)?"control disabled":" control enabled")}),v(l,b)}q(["click"]);export{sa as default};
