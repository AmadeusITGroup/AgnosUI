import{a as T,t as y}from"../chunks/disclose-version.BGQ9DrdY.js";import{p as h,l as o,b as k,f as N,a as w,g as a,s as _,m as i,c as H,r as S,d as m}from"../chunks/runtime.BEOU7zaz.js";import{i as x}from"../chunks/if.imcvzz0d.js";import{s as A,d as C}from"../chunks/misc.CkSTUMx2.js";import{i as F}from"../chunks/lifecycle.BQIQNVl9.js";import{s as I,a as b,p as L}from"../chunks/stores.D0r8cxzd.js";import{H as U}from"../chunks/Header.Ch2pc11G.js";import{S as j}from"../chunks/StatusAlert.SsyOyuLG.js";import{b as q}from"../chunks/stores.B-gqFnsy.js";var z=y('<!> <div class="main-content"><!> <!></div>',1);function Q(v,l){h(l,!1);const d=I(),t=()=>b(L,"$page",d),n=()=>b(q,"$selectedTabName$",d),e=i(),s=i(),p=i();o(()=>t(),()=>{m(e,t().data.tabs??[])}),o(()=>(a(e),n()),()=>{m(s,a(e).find(r=>r.key===n()))}),o(()=>(t(),a(s)),()=>{m(p,`${t().data.title} ${a(s)?.title.toLowerCase()??""}`)}),k(),F();var c=z(),f=N(c);U(f,{get title(){return t().data.title},get pageTitle(){return a(p)},get status(){return t().data.status},cssFramework:"daisyUI"});var g=_(f,2),u=H(g);x(u,()=>t().data.status!=="stable",r=>{j(r,{get status(){return t().data.status}})});var $=_(u,2);A($,C(l),{}),S(g),T(v,c),w()}export{Q as component};
