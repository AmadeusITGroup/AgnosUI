import{ak as b,j as N,p as ft,s as gt,i as yt,b as a,h as n,g as P,e as K,c as x,ar as c,a as xt,t as T,d as s,q as Tt,r as v,k as Q,n as wt,R as At}from"./AppCommon-CC-VkUgW.js";import{a as Vt}from"./actions-D-dhIHRy.js";import{t as k}from"./class-CcTXRr1B.js";import{b as d}from"./input-DacpPey5.js";import{c as w,a as S}from"./collapse-CVjUhnIz-DRbXBDr7.js";import{f as U}from"./fade-uOobJKgw-CGZdjDpc.js";import{c as Ot}from"./baseTransitions-uDH1MRPt.js";import"./shared-DQoMxUaM.js";import"./directive-CKEccryv-BuQmRVBG.js";import"./cssTransitions-DzsLCwoN.js";import"./promise-CY2U8bTP-FiA19x-Q.js";import"./simpleClassTransition-B3bjBBtd.js";import"./writables-DoU_XYTX-slp4MWt3.js";const L=b(w),f=b(!0),g=b(!1),It=b(!0),y=b(!0);var Rt=(o,t)=>t(w),Dt=(o,t)=>t(S),Ft=(o,t)=>t(U),Bt=(o,t)=>t(),zt=(o,t)=>t(void 0,!0),Ht=(o,t)=>t(void 0,!1),jt=T('<div><div class="card" style="width: 300px;"><div class="card-body">You can collapse this card by clicking Toggle</div></div></div>'),qt=T('<div class="transition-inner"><div class="h6 mt-2">Transition:</div> <div class="d-flex flex-wrap gap-2"><button type="button" class="btn btn-sm btn-outline-secondary">Vertical collapse</button> <button type="button" class="btn btn-sm btn-outline-secondary">Horizontal collapse</button> <button type="button" class="btn btn-sm btn-outline-secondary">Fade</button></div> <div class="h6 mt-2">Other properties:</div> <label class="form-check"><input type="checkbox" class="form-check-input">Animated</label> <label class="form-check"><input type="checkbox" class="form-check-input">Animated on init</label> <label class="form-check"><input type="checkbox" class="form-check-input">Remove from DOM</label> <label class="form-check mb-2"><input type="checkbox" class="form-check-input">Visible</label> <div class="d-flex flex-wrap gap-2"><button type="button" class="btn btn-outline-primary">Toggle</button> <button type="button" class="btn btn-outline-primary">Toggle with animation</button> <button type="button" class="btn btn-outline-primary">Toggle without animation</button></div> <ul class="mt-2"><li> </li> <li> </li> <li> </li> <li> </li></ul> <!></div>');function Ct(o,t){ft(t,!1);const e=gt(),l=()=>s(y,"$paramRemoveFromDom$",e),r=()=>s(L,"$paramTransition$",e),m=()=>s(f,"$paramAnimated$",e),W=()=>s(g,"$paramAnimatedOnInit$",e),X=()=>s(O,"$checkBoxVisible$",e),Z=()=>s(V,"$visible$",e),tt=()=>s(it,"$transitioning$",e),at=()=>s(nt,"$shown$",e),A=()=>s(et,"$hidden$",e),{stores:{visible$:V,transitioning$:it,shown$:nt,hidden$:et},api:{toggle:p},directives:{directive:ot},patch:st}=Ot({props:{animatedOnInit:g,animated:f,visible:It}}),O={subscribe:V.subscribe,set:i=>st({visible:i})},u=i=>{p(!1,!1),c(y,!0),c(L,i)};yt();var I=qt(),R=a(n(I),2),_=n(R);_.__click=[Rt,u];var $=a(_,2);$.__click=[Dt,u];var D=a($,2);D.__click=[Ft,u];var F=a(R,4),rt=n(F),B=a(F,2),ct=n(B),z=a(B,2),lt=n(z),H=a(z,2),bt=n(H),j=a(H,2),q=n(j);q.__click=[Bt,p];var C=a(q,2);C.__click=[zt,p];var mt=a(C,2);mt.__click=[Ht,p];var M=a(j,2),Y=n(M),pt=n(Y),E=a(Y,2),vt=n(E),G=a(E,2),dt=n(G),ut=a(G,2),_t=n(ut),$t=a(M,2);P($t,()=>!l()||!A(),i=>{var h=jt();let J;K(()=>J=Tt(h,J,{style:"max-width: 300px;"})),Vt(h,(ht,kt)=>ot(ht,kt),()=>({transition:r(),animated:m()})),x(i,h)}),K(()=>{k(_,"active",r()===w),k($,"active",r()===S),k(D,"active",r()===U),v(pt,`visible = ${Z()??""}`),v(vt,`transitioning = ${tt()??""}`),v(dt,`shown = ${at()??""}`),v(_t,`hidden = ${A()??""}`)}),d(rt,m,i=>c(f,i)),d(ct,W,i=>c(g,i)),d(lt,l,i=>c(y,i)),d(bt,X,i=>c(O,i)),x(o,I),xt()}N(["click"]);var Mt=(o,t)=>wt(t,!Q(t)),Yt=T('<div class="demo-transition mb-3"><button id="toggle-component" class="btn btn-outline-secondary">Toggle component</button> <!></div>');function ta(o){let t=At(!0);var e=Yt(),l=n(e);l.__click=[Mt,t];var r=a(l,2);P(r,()=>Q(t),m=>{Ct(m,{})}),x(o,e)}N(["click"]);export{ta as default};