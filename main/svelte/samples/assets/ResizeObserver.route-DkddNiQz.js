import{p as H,d as R,b as k,a as O,h as g,g as t,R as w,t as T,L as j,j as L,s as o,e as M,n as h,k as S,l as V}from"./AppCommon-CBBtLyuE.js";import{a as f}from"./actions-Dry0yoXS.js";import{s as $}from"./style-PwPRnE0L.js";import{f as q}from"./index-client-CgsfcjKG.js";import{c as A}from"./resizeObserver-C-lrMv1Y.js";import{c as B}from"./stores-DX-ADOKq-BfxXclJX.js";function C(n,s,a){g(s,t(a)+50)}function D(n,s,a){g(s,w(t(a)?t(a)-50:0))}var E=T('<div class="demo-resize-observer"><label for="resizable">Resizable textarea:</label> <textarea></textarea> <div>Textarea content height: <span id="dynamic-height"> </span>px</div> <button type="button" class="btn btn-primary m-2" id="decreaseHeight">Height --</button> <button type="button" class="btn btn-primary m-2" id="increaseHeight">Height ++</button></div>');function P(n,s){H(s,!0);const{dimensions$:a,directive:c}=A(),v=q(a);let i=j(()=>{var e;return((e=v.current)==null?void 0:e.contentRect.height)??0}),l=L(180);var m=E(),r=o(h(m),2);let p;f(r,e=>c==null?void 0:c(e)),f(r,(e,z)=>{var u;return(u=B)==null?void 0:u(e,z)},()=>["form-control",{fontsize:t(i)&&t(i)>200}]);var d=o(r,2),x=o(h(d)),_=h(x),b=o(d,2);b.__click=[D,l,i];var y=o(b,2);y.__click=[C,l,i],R(e=>{p=S(r,p,{name:"resizable",id:"resizable",rows:"6",cols:"50",value:`This simple example is using the resizeObserver feature from @agnos-ui/core and displays the height of the textarea below it.
Modify the height to more than 200 px and see the font size changing.`,...e}),$(r,"height",t(l)+"px"),V(_,t(i))},[()=>({})]),k(n,m),O()}M(["click"]);export{P as default};
