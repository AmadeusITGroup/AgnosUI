import{p as T,M as P,t as b,d as e,s as g,e as V,h as f,c as d,a as j,j as q,n as z,S as B,k as D,a2 as F,ar as I,q as M}from"./AppCommon-KjZHMAMw.js";import{h as S}from"./html-b4WUQfli.js";import{s as W}from"./snippet-CJVZFYJd.js";import{a as A}from"./actions-CIpHBM8M.js";import{c as E}from"./baseTransitions-CgsmCdDu.js";import{c as G}from"./collapse-CVjUhnIz-yj8sHjRU.js";import{c as H}from"./config-BTIRu7Sr.js";import"./writables-DCiBdIBK-DK6wySzo.js";import"./stores-Mpux7cdj.js";import"./dom-gfxqXJpK-DP4sFo7c.js";import"./promise-XSP94FjG-BP3vzQ1-.js";import"./cssTransitions-COCM8SQ-.js";import"./config-CyMo55a-.js";import"./index-client-C963V3Zw.js";const J=`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100">
    <rect class="horizontal" x="20" y="45" width="60" height="10" fill="currentColor" />
    <rect class="vertical" x="45" y="20" width="10" height="60" fill="currentColor" />
</svg>`;var K=(s,t)=>t(),L=b('<div><div class="card-body"><!></div></div>'),N=b('<div class="card"><div class="card-header p-0"><button type="button" id="collapse-toggle" class="btn toggle-button" aria-controls="collapse-content"> <span><!></span></button></div> <!></div>');function O(s,t){T(t,!0);let r=P(t,"expanded",15);const{state:a,api:{toggle:x},directives:{directive:l}}=H({factory:E,get props(){return{visible:r(),transition:G}},enablePatchChanged:!0,events:{onVisibleChange:o=>{r(o)}}});var p=N(),v=e(p),n=e(v);n.__click=[K,x];var m=e(n),h=g(m),_=e(h);S(_,()=>J);var w=g(v,2);{var y=o=>{var i=L();let u;var C=e(i),k=e(C);W(k,()=>t.children),A(i,c=>l==null?void 0:l(c)),f(c=>u=q(i,u,{id:"collapse-content",...c}),[()=>({})]),d(o,i)};V(w,o=>{a.hidden||o(y)})}f(()=>{B(n,"aria-expanded",a.visible||void 0),D(m,`${t.headerText??""} `),F(h,1,I(["ms-1 collapse-icon",{expanded:a.visible}]))}),d(s,p),j()}z(["click"]);function lt(s){O(s,{headerText:"Toggle content",expanded:!0,children:(t,r)=>{var a=M("Content to display / hide.");d(t,a)},$$slots:{default:!0}})}export{lt as default};
