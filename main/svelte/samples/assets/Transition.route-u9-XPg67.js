import{ad as m,e as U,p as xt,u as yt,i as Tt,c as W,d as S,b as V,a as wt,t as O,w as s,ar as r,s as a,k as n,l as At,g as I,aq as g,n as v,aw as Vt,h as Ot,j as It}from"./AppCommon-TeUJQW-I.js";import{a as Dt}from"./actions-5gDoQV-V.js";import{s as x}from"./class-UsYCyg2K.js";import{b as d}from"./input-YvuDUbeK.js";import{c as D,a as X}from"./collapse-CVjUhnIz-hA2Y34UP.js";import{f as Z}from"./fade-uOobJKgw-CF88_MbS.js";import{c as Ft}from"./baseTransitions-BB_-5mEt.js";import"./directive-DrDJkTS5-DUdLAntD.js";import"./cssTransitions-DKMfbn0f.js";import"./promise-CY2U8bTP-XimWww1g.js";import"./simpleClassTransition-Dnu1-M_V.js";import"./writables-DCiBdIBK-43mrhbqD.js";const y=m(D),T=m(!0),w=m(!1),Rt=m(!0),A=m(!0);var Bt=(o,t)=>t(D),qt=(o,t)=>t(X),zt=(o,t)=>t(Z),Ht=(o,t)=>t(),jt=(o,t)=>t(void 0,!0),Ct=(o,t)=>t(void 0,!1),Mt=O('<div><div class="card" style="width: 300px;"><div class="card-body">You can collapse this card by clicking Toggle</div></div></div>'),Yt=O('<div class="transition-inner"><div class="h6 mt-2">Transition:</div> <div class="d-flex flex-wrap gap-2"><button type="button">Vertical collapse</button> <button type="button">Horizontal collapse</button> <button type="button">Fade</button></div> <div class="h6 mt-2">Other properties:</div> <label class="form-check"><input type="checkbox" class="form-check-input">Animated</label> <label class="form-check"><input type="checkbox" class="form-check-input">Animated on init</label> <label class="form-check"><input type="checkbox" class="form-check-input">Remove from DOM</label> <label class="form-check mb-2"><input type="checkbox" class="form-check-input">Visible</label> <div class="d-flex flex-wrap gap-2"><button type="button" class="btn btn-outline-primary">Toggle</button> <button type="button" class="btn btn-outline-primary">Toggle with animation</button> <button type="button" class="btn btn-outline-primary">Toggle without animation</button></div> <ul class="mt-2"><li> </li> <li> </li> <li> </li> <li> </li></ul> <!></div>');function Et(o,t){xt(t,!1);const e=yt(),c=()=>s(A,"$paramRemoveFromDom$",e),l=()=>s(y,"$paramTransition$",e),_=()=>s(T,"$paramAnimated$",e),b=()=>s(w,"$paramAnimatedOnInit$",e),tt=()=>s(B,"$checkBoxVisible$",e),at=()=>s(R,"$visible$",e),it=()=>s(et,"$transitioning$",e),nt=()=>s(ot,"$shown$",e),F=()=>s(st,"$hidden$",e),{stores:{visible$:R,transitioning$:et,shown$:ot,hidden$:st},api:{toggle:p},directives:{directive:u},patch:rt}=Ft({props:{animatedOnInit:w,animated:T,visible:Rt,transition:y}}),B={subscribe:R.subscribe,set:i=>rt({visible:i})},$=i=>{p(!1,!1),r(A,!0),r(y,i)};Tt();var q=Yt(),z=a(n(q),2),f=n(z);f.__click=[Bt,$];var h=a(f,2);h.__click=[qt,$];var H=a(h,2);H.__click=[zt,$];var j=a(z,4),ct=n(j),C=a(j,2),lt=n(C),M=a(C,2),bt=n(M),Y=a(M,2),mt=n(Y),E=a(Y,2),G=n(E);G.__click=[Ht,p];var J=a(G,2);J.__click=[jt,p];var pt=a(J,2);pt.__click=[Ct,p];var K=a(E,2),L=n(K),vt=n(L),N=a(L,2),dt=n(N),P=a(N,2),_t=n(P),ut=a(P,2),$t=n(ut),ft=a(K,2);{var ht=i=>{var k=Mt();const kt=Vt(()=>({}));let Q;Dt(k,gt=>u==null?void 0:u(gt)),S(()=>Q=At(k,Q,{style:"max-width: 300px;",...I(kt)})),V(i,k)};W(ft,i=>{(!c()||!F())&&i(ht)})}S(()=>{x(f,g(["btn btn-sm btn-outline-secondary",{active:l()===D}]),""),x(h,g(["btn btn-sm btn-outline-secondary",{active:l()===X}]),""),x(H,g(["btn btn-sm btn-outline-secondary",{active:l()===Z}]),""),v(vt,`visible = ${at()??""}`),v(dt,`transitioning = ${it()??""}`),v(_t,`shown = ${nt()??""}`),v($t,`hidden = ${F()??""}`)}),d(ct,_,i=>r(T,i)),d(lt,b,i=>r(w,i)),d(bt,c,i=>r(A,i)),d(mt,tt,i=>r(B,i)),V(o,q),wt()}U(["click"]);var Gt=(o,t)=>Ot(t,!I(t)),Jt=O('<div class="demo-transition mb-3"><button id="toggle-component" class="btn btn-outline-secondary">Toggle component</button> <!></div>');function ia(o){let t=It(!0);var e=Jt(),c=n(e);c.__click=[Gt,t];var l=a(c,2);{var _=b=>{Et(b,{})};W(l,b=>{I(t)&&b(_)})}V(o,e)}U(["click"]);export{ia as default};
