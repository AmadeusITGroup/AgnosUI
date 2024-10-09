import{ai as b,j as N,p as kt,s as gt,i as yt,b as a,h as n,g as P,e as K,q as xt,c as x,r as v,ap as c,a as Tt,t as T,d as s,k as Q,n as wt,V as At}from"./AppCommon-yQ9GDd-E.js";import{a as Vt}from"./actions-1FJs2NnX.js";import{t as f}from"./class-LKf8CrKl.js";import{b as d}from"./input-CAUn0_iv.js";import{c as w,a as S}from"./collapse-CVjUhnIz-DN3Hv6ZW.js";import{f as U}from"./fade-uOobJKgw-DWHl4M2u.js";import{c as Ot}from"./baseTransitions-CwYYTE0i.js";import"./shared-C4xr_70V.js";import"./directive-CKEccryv-CIaX9Ntp.js";import"./cssTransitions-BkpW2sWC.js";import"./promise-CY2U8bTP-Cbak5z1_.js";import"./simpleClassTransition-BTQ_Bx7N.js";import"./writables-DoU_XYTX-DICLMg1u.js";const L=b(w),k=b(!0),g=b(!1),It=b(!0),y=b(!0);var Dt=(o,t)=>t(w),Ft=(o,t)=>t(S),Rt=(o,t)=>t(U),Bt=(o,t)=>t(),zt=(o,t)=>t(void 0,!0),Ht=(o,t)=>t(void 0,!1),jt=T('<div><div class="card" style="width: 300px;"><div class="card-body">You can collapse this card by clicking Toggle</div></div></div>'),qt=T('<div class="transition-inner"><div class="h6 mt-2">Transition:</div> <div class="d-flex flex-wrap gap-2"><button type="button" class="btn btn-sm btn-outline-secondary">Vertical collapse</button> <button type="button" class="btn btn-sm btn-outline-secondary">Horizontal collapse</button> <button type="button" class="btn btn-sm btn-outline-secondary">Fade</button></div> <div class="h6 mt-2">Other properties:</div> <label class="form-check"><input type="checkbox" class="form-check-input">Animated</label> <label class="form-check"><input type="checkbox" class="form-check-input">Animated on init</label> <label class="form-check"><input type="checkbox" class="form-check-input">Remove from DOM</label> <label class="form-check mb-2"><input type="checkbox" class="form-check-input">Visible</label> <div class="d-flex flex-wrap gap-2"><button type="button" class="btn btn-outline-primary">Toggle</button> <button type="button" class="btn btn-outline-primary">Toggle with animation</button> <button type="button" class="btn btn-outline-primary">Toggle without animation</button></div> <ul class="mt-2"><li> </li> <li> </li> <li> </li> <li> </li></ul> <!></div>');function Ct(o,t){kt(t,!1);const e=gt(),l=()=>s(y,"$paramRemoveFromDom$",e),r=()=>s(L,"$paramTransition$",e),m=()=>s(k,"$paramAnimated$",e),W=()=>s(g,"$paramAnimatedOnInit$",e),X=()=>s(O,"$checkBoxVisible$",e),Z=()=>s(V,"$visible$",e),tt=()=>s(it,"$transitioning$",e),at=()=>s(nt,"$shown$",e),A=()=>s(et,"$hidden$",e),{stores:{visible$:V,transitioning$:it,shown$:nt,hidden$:et},api:{toggle:p},directives:{directive:ot},patch:st}=Ot({props:{animatedOnInit:g,animated:k,visible:It}}),O={subscribe:V.subscribe,set:i=>st({visible:i})},u=i=>{p(!1,!1),c(y,!0),c(L,i)};yt();var I=qt(),D=a(n(I),2),_=n(D);_.__click=[Dt,u];var $=a(_,2);$.__click=[Ft,u];var F=a($,2);F.__click=[Rt,u];var R=a(D,4),rt=n(R),B=a(R,2),ct=n(B),z=a(B,2),lt=n(z),H=a(z,2),bt=n(H),j=a(H,2),q=n(j);q.__click=[Bt,p];var C=a(q,2);C.__click=[zt,p];var mt=a(C,2);mt.__click=[Ht,p];var M=a(j,2),Y=n(M),pt=n(Y),E=a(Y,2),vt=n(E),G=a(E,2),dt=n(G),ut=a(G,2),_t=n(ut),$t=a(M,2);P($t,()=>!l()||!A(),i=>{var h=jt();let J;K(()=>J=xt(h,J,{style:"max-width: 300px;"})),Vt(h,(ht,ft)=>ot(ht,ft),()=>({transition:r(),animated:m()})),x(i,h)}),K(()=>{f(_,"active",r()===w),f($,"active",r()===S),f(F,"active",r()===U),v(pt,`visible = ${Z()??""}`),v(vt,`transitioning = ${tt()??""}`),v(dt,`shown = ${at()??""}`),v(_t,`hidden = ${A()??""}`)}),d(rt,m,i=>c(k,i)),d(ct,W,i=>c(g,i)),d(lt,l,i=>c(y,i)),d(bt,X,i=>c(O,i)),x(o,I),Tt()}N(["click"]);var Mt=(o,t)=>wt(t,!Q(t)),Yt=T('<div class="demo-transition mb-3"><button id="toggle-component" class="btn btn-outline-secondary">Toggle component</button> <!></div>');function ta(o){let t=At(!0);var e=Yt(),l=n(e);l.__click=[Mt,t];var r=a(l,2);P(r,()=>Q(t),m=>{Ct(m,{})}),x(o,e)}N(["click"]);export{ta as default};