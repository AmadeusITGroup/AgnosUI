import{p as W,k as X,T as w,V as z,W as B,s,e as a,R as G,d as n,b as d,a as J,j as K,t as v,h as M,g as r,c as P,f as Q,S as U,n as x,l as Y,X as Z,q as $}from"./AppCommon-D6XzPDt_.js";import{a as y}from"./actions-C5zFepch.js";import{f as F}from"./index-client-D9YS31ny.js";import{c as tt,a as at}from"./focustrack-1RBV_tjs.js";import{c as et}from"./directive-CKEccryv-BLJ74ze2.js";var st=(u,i)=>K(i,w([])),rt=v("with id <strong> </strong>",1),ct=v("<li><strong> </strong> <!></li>"),it=v('<div class="demo-focustrack"><div><h5>Container</h5> <input class="form-control" type="text" placeholder="Focusable input" id="focusableInput"><br> <input class="form-control" type="text" placeholder="Other focusable input" id="otherFocusableInput"></div> <input class="form-control" type="text" placeholder="Disabled input" id="disabledInput" disabled><br> <div class="form-check mb-2"><input class="form-check-input" type="checkbox" id="containerHasFocus" disabled> <label class="form-check-label" for="containerHasFocus">Focus in container</label></div> <div class="d-flex justify-content-between"><div>Active element history:</div> <button class="btn btn-sm btn-primary">Clear</button></div> <div class="card my-2"><div class="card-body"><ul class="mb-0"></ul></div></div></div>');function ut(u,i){W(i,!0);const{hasFocus$:N,directive:C}=tt(),E=F(N),o=F(at);let l=X(w([]));z(()=>{o.current,B(()=>{var t,e;return r(l).push({tagName:(t=o.current)==null?void 0:t.tagName.toLowerCase(),id:((e=o.current)==null?void 0:e.id)||void 0})})});var p=it(),c=a(p);const H=$(()=>({}));let m;y(c,t=>C(t)),y(c,(t,e)=>et(t,e),()=>"my-2 p-2 border");var b=s(c,5),I=a(b),f=s(b,2),j=s(a(f),2);j.__click=[st,l];var D=s(f,2),S=a(D),q=a(S);G(q,21,()=>r(l),U,(t,e)=>{let A=()=>r(e).tagName,h=()=>r(e).id;var _=ct(),g=a(_),L=a(g),O=s(g,2);P(O,h,R=>{var k=rt(),T=s(Q(k)),V=a(T);n(()=>x(V,h())),d(R,k)}),n(()=>x(L,A())),d(t,_)}),n(()=>{m=Y(c,m,{...r(H)}),Z(I,E.current)}),d(u,p),J()}M(["click"]);export{ut as default};