import{p as q,M as z,d as F,b as N,a as B,t as H,s as n,k as p,l as G,n as d}from"./AppCommon-CBBtLyuE.js";import{a as i}from"./actions-Dry0yoXS.js";import{c as I}from"./navManager-BVMJWeMV.js";import{c as v}from"./stores-DX-ADOKq-BfxXclJX.js";var J=H('<div class="d-flex demo-navmanager-line"><input> <span> </span> <input> <input> <input></div>');function A(g,o){q(o,!0);const{directive:e,focusLeft:x,focusRight:s,focusFirst:_,focusLast:C,focusFirstLeft:D,focusFirstRight:E}=I(),l={keys:{ArrowLeft:x,ArrowRight:s,Home:_,End:C,"Meta+ArrowLeft":D,"Meta+ArrowRight":E}};let f=z(o,"text",3,"");var L=J(),m=d(L);let M;i(m,(t,a)=>e==null?void 0:e(t,a),()=>l),i(m,(t,a)=>{var r;return(r=v)==null?void 0:r(t,a)},()=>"form-control me-1");var u=n(m,2);let w;var j=d(u);i(u,(t,a)=>e==null?void 0:e(t,a),()=>l),i(u,(t,a)=>{var r;return(r=v)==null?void 0:r(t,a)},()=>"form-control w-auto me-1");var b=n(u,2);let y;i(b,(t,a)=>e==null?void 0:e(t,a),()=>l),i(b,(t,a)=>{var r;return(r=v)==null?void 0:r(t,a)},()=>"form-check-input align-self-center me-1");var c=n(b,2);let R;i(c,(t,a)=>e==null?void 0:e(t,a),()=>l),i(c,(t,a)=>{var r;return(r=v)==null?void 0:r(t,a)},()=>"form-control me-1");var h=n(c,2);let k;i(h,(t,a)=>e==null?void 0:e(t,a),()=>l),i(h,(t,a)=>{var r;return(r=v)==null?void 0:r(t,a)},()=>"form-control me-1"),F((t,a,r)=>{M=p(m,M,{type:"text","aria-label":"navigable-input-1",value:f(),...t}),w=p(u,w,{tabindex:"-1",...a}),G(j,f()),y=p(b,y,{tabindex:"-1",type:"checkbox","aria-label":"navigable-input-2",...r}),R=p(c,R,{tabindex:"-1",type:"text","aria-label":"navigable-input-3",value:f(),disabled:!0,...t}),k=p(h,k,{tabindex:"-1",type:"text","aria-label":"navigable-input-4",value:f(),...t})},[()=>({}),()=>({}),()=>({})]),N(g,L),B()}var K=H('<div class="demo-navmanager"><div dir="ltr" class="mt-3 pb-3"><h2>Left-to-right</h2> <!></div> <div dir="rtl" class="mt-3 pb-3"><h2>Right-to-left</h2> <!></div></div>');function T(g){var o=K(),e=d(o),x=n(d(e),2);A(x,{text:"Hello"});var s=n(e,2),_=n(d(s),2);A(_,{text:"שָׁלוֹם"}),F(()=>{e.dir=e.dir,s.dir=s.dir}),N(g,o)}export{T as default};
