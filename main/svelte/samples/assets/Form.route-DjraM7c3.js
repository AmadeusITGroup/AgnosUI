import{b as e,f as M,k as a,n as m,W as O,g as x,e as P,c as d,t as c,V as k,h as r,j as T,r as h,O as v}from"./AppCommon-yQ9GDd-E.js";import{s as W}from"./class-LKf8CrKl.js";import{R as $}from"./Rating-Dwhmbtij.js";import"./actions-1FJs2NnX.js";import"./rating.gen-BcAGJJkc.js";import"./rating-C1UqlpFs-ChRcCLvq.js";import"./rating-4xKtMTud-DqA3f4HC.js";import"./directive-CKEccryv-CIaX9Ntp.js";import"./writables-DoU_XYTX-DICLMg1u.js";import"./extendWidget-DMfSPYhn.js";import"./Slot-QVDHCOJE.js";import"./config-BI14XQLI.js";import"./snippet-CbCRci52.js";var q=c('<div class="text-success">Thanks!</div>'),z=c('<div class="text-danger-emphasis">Please rate us</div>'),A=(l,t)=>m(t,!a(t)),D=(l,t)=>m(t,0),E=c('<div class="form-label" id="ratingLabel">Rating of your experience</div> <br> <!> <div id="form-msg" class="form-text small"><!> <!></div> <pre>Model: <span id="form-model"><b> </b></span></pre> <div class="d-flex flex-wrap gap-2"><button id="form-btn-enable"> </button> <button id="form-btn-clear" class="btn btn-sm btn-outline-primary">Clear</button></div>',1);function ta(l){let t=k(!1),i=k(0),p=v(()=>a(i)>=1),y=v(()=>!a(t)&&a(p)),L=v(()=>!a(t)&&!a(p));var b=E(),_=e(M(b),4);$(_,{get rating(){return a(i)},set rating(s){m(i,O(s))},get disabled(){return a(t)},ariaLabelledBy:"ratingLabel"});var f=e(_,2),u=r(f);x(u,()=>a(y),s=>{var n=q();d(s,n)});var R=e(u,2);x(R,()=>a(L),s=>{var n=z();d(s,n)});var g=e(f,2),V=e(r(g)),j=r(V),w=r(j),B=e(g,2),o=r(B);o.__click=[A,t];var C=r(o),F=e(o,2);F.__click=[D,i],P(()=>{h(w,a(i)),W(o,`btn btn-sm btn-outline-${(a(t)?"danger":"success")??""}`),h(C,a(t)?"control disabled":" control enabled")}),d(l,b)}T(["click"]);export{ta as default};
