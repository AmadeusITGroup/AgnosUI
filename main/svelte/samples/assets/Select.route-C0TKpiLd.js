import{p as L,b,S as v,aw as S,ax as A,a1 as h,w as D,g as t,t as O,s as e,f as M,d as o,l,L as R,c as W,a as F,u as P,n as U}from"./AppCommon-BPClzbtl.js";import{a as j}from"./input-OLgIGHcW.js";import{S as q}from"./Select-BfUC3pJe.js";import{a as z}from"./config-bqWcICqI.js";import"./actions-jRLuy1Cj.js";import"./Slot-iJnJNLgu.js";import"./snippet-Cs5kTQO5.js";import"./floatingUI-uSo--7uQ.js";import"./dom-gfxqXJpK-CEZsEgVA.js";import"./promise-XSP94FjG-C9iEdytY.js";import"./stores-D9wF1TRV.js";import"./focustrack-BIziIeWf.js";import"./navManager-CLLXW-Y-.js";import"./extendWidget-BE09QM6m.js";import"./config-DBtJQICV.js";import"./index-client-D1Uj5A1N.js";var B=(n,r)=>l(r,void 0),E=O('<h2>Multiselect example</h2> <div class="mb-3"><label class="form-label">Multiselect</label> <!></div> <div class="demo-select-config"><strong>Default config</strong><br> <label>Default filterText: <input type="text" class="form-control"></label> <br> <button type="button" class="mt-3 btn btn-outline-secondary">Reset widget filterText</button></div>',1);function it(n,r){L(r,!0);const[x,_]=P(),c=()=>D(m,"$widgetsConfig$",x),p=["Action 1","Action 2","Action 3","Other 1","Other 2","Other 3"],m=z(),f=location.hash.split("?")[1],$=new URL(f?`?${f}`:"",location.href);let i=b(v($.searchParams.get("filterText")??""));S(()=>{A(m,h(c).select={filterText:t(i)},h(c))});let s=b(void 0),w=R(()=>t(s)?p.filter(a=>a.toLowerCase().startsWith(t(s)??"")):p.slice(0,10));var u=E(),d=e(M(u),2),T=e(o(d),2);q(T,{get items(){return t(w)},get filterText(){return t(s)},set filterText(a){l(s,v(a))}});var C=e(d,2),g=e(o(C),3),k=e(o(g)),y=e(g,4);y.__click=[B,s],j(k,()=>t(i),a=>l(i,a)),W(n,u),F(),_()}U(["click"]);export{it as default};
