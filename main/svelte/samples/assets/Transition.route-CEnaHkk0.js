import{ai as b,h as N,p as ft,r as kt,i as gt,s as a,e as n,d as P,c as L,b as T,ar as r,a as yt,t as w,w as s,l as xt,n as p,g as Q,j as Tt,k as wt}from"./AppCommon-BIOVedX1.js";import{a as At}from"./actions-7pTMrPq9.js";import{t as f}from"./class-DOHDOVt-.js";import{b as v}from"./input-C2sSz9OV.js";import{c as A,a as S}from"./collapse-CVjUhnIz-DDpRBmyP.js";import{f as U}from"./fade-uOobJKgw-Cnt1DNlJ.js";import{c as Vt}from"./baseTransitions-CUi-J3xT.js";import"./shared-BbfWEFtN.js";import"./directive-CKEccryv-CfUcKfmP.js";import"./cssTransitions-BZ3y20qI.js";import"./promise-CY2U8bTP-Vbe46tCH.js";import"./simpleClassTransition-Nf8_9Abk.js";import"./writables-DCiBdIBK-COMn4_un.js";const k=b(A),g=b(!0),y=b(!1),Ot=b(!0),x=b(!0);var It=(e,t)=>t(A),Dt=(e,t)=>t(S),Ft=(e,t)=>t(U),Rt=(e,t)=>t(),Bt=(e,t)=>t(void 0,!0),zt=(e,t)=>t(void 0,!1),Ht=w('<div><div class="card" style="width: 300px;"><div class="card-body">You can collapse this card by clicking Toggle</div></div></div>'),jt=w('<div class="transition-inner"><div class="h6 mt-2">Transition:</div> <div class="d-flex flex-wrap gap-2"><button type="button" class="btn btn-sm btn-outline-secondary">Vertical collapse</button> <button type="button" class="btn btn-sm btn-outline-secondary">Horizontal collapse</button> <button type="button" class="btn btn-sm btn-outline-secondary">Fade</button></div> <div class="h6 mt-2">Other properties:</div> <label class="form-check"><input type="checkbox" class="form-check-input">Animated</label> <label class="form-check"><input type="checkbox" class="form-check-input">Animated on init</label> <label class="form-check"><input type="checkbox" class="form-check-input">Remove from DOM</label> <label class="form-check mb-2"><input type="checkbox" class="form-check-input">Visible</label> <div class="d-flex flex-wrap gap-2"><button type="button" class="btn btn-outline-primary">Toggle</button> <button type="button" class="btn btn-outline-primary">Toggle with animation</button> <button type="button" class="btn btn-outline-primary">Toggle without animation</button></div> <ul class="mt-2"><li> </li> <li> </li> <li> </li> <li> </li></ul> <!></div>');function Ct(e,t){ft(t,!1);const o=kt(),c=()=>s(x,"$paramRemoveFromDom$",o),l=()=>s(k,"$paramTransition$",o),d=()=>s(g,"$paramAnimated$",o),W=()=>s(y,"$paramAnimatedOnInit$",o),X=()=>s(I,"$checkBoxVisible$",o),Z=()=>s(O,"$visible$",o),tt=()=>s(it,"$transitioning$",o),at=()=>s(nt,"$shown$",o),V=()=>s(ot,"$hidden$",o),{stores:{visible$:O,transitioning$:it,shown$:nt,hidden$:ot},api:{toggle:m},directives:{directive:et},patch:st}=Vt({props:{animatedOnInit:y,animated:g,visible:Ot,transition:k}}),I={subscribe:O.subscribe,set:i=>st({visible:i})},u=i=>{m(!1,!1),r(x,!0),r(k,i)};gt();var D=jt(),F=a(n(D),2),_=n(F);_.__click=[It,u];var $=a(_,2);$.__click=[Dt,u];var R=a($,2);R.__click=[Ft,u];var B=a(F,4),rt=n(B),z=a(B,2),ct=n(z),H=a(z,2),lt=n(H),j=a(H,2),bt=n(j),C=a(j,2),M=n(C);M.__click=[Rt,m];var Y=a(M,2);Y.__click=[Bt,m];var mt=a(Y,2);mt.__click=[zt,m];var q=a(C,2),E=n(q),pt=n(E),G=a(E,2),vt=n(G),J=a(G,2),dt=n(J),ut=a(J,2),_t=n(ut),$t=a(q,2);P($t,()=>!c()||!V(),i=>{var h=Ht();let K;L(()=>K=xt(h,K,{style:"max-width: 300px;"})),At(h,ht=>et(ht)),T(i,h)}),L(()=>{f(_,"active",l()===A),f($,"active",l()===S),f(R,"active",l()===U),p(pt,`visible = ${Z()??""}`),p(vt,`transitioning = ${tt()??""}`),p(dt,`shown = ${at()??""}`),p(_t,`hidden = ${V()??""}`)}),v(rt,d,i=>r(g,i)),v(ct,W,i=>r(y,i)),v(lt,c,i=>r(x,i)),v(bt,X,i=>r(I,i)),T(e,D),yt()}N(["click"]);var Mt=(e,t)=>Tt(t,!Q(t)),Yt=w('<div class="demo-transition mb-3"><button id="toggle-component" class="btn btn-outline-secondary">Toggle component</button> <!></div>');function Zt(e){let t=wt(!0);var o=Yt(),c=n(o);c.__click=[Mt,t];var l=a(c,2);P(l,()=>Q(t),d=>{Ct(d,{})}),T(e,o)}N(["click"]);export{Zt as default};
