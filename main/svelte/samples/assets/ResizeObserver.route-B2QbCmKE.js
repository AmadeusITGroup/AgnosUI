import{p as k,s as o,e as l,d as R,b as w,a as O,j as g,g as e,T,t as D,q as b,k as j,h as q,l as M,n as S}from"./AppCommon-D6XzPDt_.js";import{a as f}from"./actions-C5zFepch.js";import{t as V}from"./class-BjsImlqy.js";import{s as $}from"./style-PwPRnE0L.js";import{f as A}from"./index-client-D9YS31ny.js";import{c as B}from"./resizeObserver-D1p8hjpO.js";import{c as C}from"./directive-CKEccryv-BLJ74ze2.js";function E(n,i,t){g(i,e(t)+50)}function F(n,i,t){g(i,T(e(t)?e(t)-50:0))}var G=D('<div class="demo-resize-observer"><label for="resizable">Resizable textarea:</label> <textarea></textarea> <div>Textarea content height: <span id="dynamic-height"> </span>px</div> <button type="button" class="btn btn-primary m-2" id="decreaseHeight">Height --</button> <button type="button" class="btn btn-primary m-2" id="increaseHeight">Height ++</button></div>');function U(n,i){k(i,!0);const{dimensions$:t,directive:u}=B(),v=A(t);let r=b(()=>{var s;return((s=v.current)==null?void 0:s.contentRect.height)??0}),c=j(180);var h=G(),a=o(l(h),2);const _=b(()=>({}));let m;f(a,s=>u(s)),f(a,(s,H)=>C(s,H),()=>"form-control");var p=o(a,2),x=o(l(p)),z=l(x),d=o(p,2);d.__click=[F,c,r];var y=o(d,2);y.__click=[E,c,r],R(()=>{m=M(a,m,{name:"resizable",id:"resizable",rows:"6",cols:"50",value:`This simple example is using the resizeObserver feature from @agnos-ui/core and displays the height of the textarea below it.
Modify the height to more than 200 px and see the font size changing.`,...e(_)}),V(a,"fontsize",e(r)&&e(r)>200),$(a,"height",e(c)+"px"),S(z,e(r))}),w(n,h),O()}q(["click"]);export{U as default};