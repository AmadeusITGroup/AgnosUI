import{p as y,u as A,j as b,R as v,ar as D,s as t,f as L,g as e,h as l,b as O,a as R,t as S,e as M,k as o,as as U,U as h,q as W,w as j}from"./AppCommon-DEH8RU-G.js";import{a as q}from"./input-YF9bLRLi.js";import{S as F}from"./Select-CoPRgYt9.js";import{a as P}from"./config-B4Vdu6jy.js";import"./actions-CP4C70UC.js";import"./class-B1IIvcqz.js";import"./Slot-wDo5Mtvg.js";import"./snippet-nVqf6gO5.js";import"./floatingUI-BXp4Vj7H.js";import"./directive-CKEccryv-DBKI-Evx.js";import"./promise-CY2U8bTP-C6wZmHfC.js";import"./focustrack-DETjqDGW.js";import"./navManager-CDWJ2gS4.js";import"./extendWidget-DqMS619R.js";import"./config-DEaKTmPq.js";import"./index-client-BxXxtrCi.js";var z=(n,a)=>l(a,void 0),B=S('<h2>Multiselect example</h2> <div class="mb-3"><label class="form-label">Multiselect</label> <!></div> <div class="demo-select-config"><strong>Default config</strong><br> <label>Default filterText: <input type="text" class="form-control"></label> <br> <button type="button" class="mt-3 btn btn-outline-secondary">Reset widget filterText</button></div>',1);function at(n,a){y(a,!0);const _=A(),c=()=>j(m,"$widgetsConfig$",_),f=["Action 1","Action 2","Action 3","Other 1","Other 2","Other 3"],m=P(),p=location.hash.split("?")[1],x=new URL(p?`?${p}`:"",location.href);let i=b(v(x.searchParams.get("filterText")??""));D(()=>{U(m,h(c).select={filterText:e(i)},h(c))});let s=b(void 0),T=W(()=>e(s)?f.filter(r=>r.toLowerCase().startsWith(e(s)??"")):f.slice(0,10));var u=B(),d=t(L(u),2),$=t(o(d),2);F($,{get items(){return e(T)},get filterText(){return e(s)},set filterText(r){l(s,v(r))}});var w=t(d,2),g=t(o(w),3),k=t(o(g)),C=t(g,4);C.__click=[z,s],q(k,()=>e(i),r=>l(i,r)),O(n,u),R()}M(["click"]);export{at as default};
