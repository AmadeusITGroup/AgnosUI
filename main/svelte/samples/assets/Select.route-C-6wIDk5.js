import{p as L,b as v,R as b,av as A,aw as D,Y as h,w as O,g as t,t as R,s as e,f as S,d as o,l,L as M,c as W,a as F,u as P,n as U}from"./AppCommon-BhqekdnF.js";import{a as Y}from"./input-CplpBit1.js";import{S as j}from"./Select-BB9e5MjF.js";import{a as q}from"./config-BFQlyIYN.js";import"./actions-DZjIkt8l.js";import"./Slot-D0aFp3FX.js";import"./snippet-DG4TNrDZ.js";import"./floatingUI-YNFpxWpr.js";import"./dom-gfxqXJpK-Cwq939KW.js";import"./promise-XSP94FjG-UIL1BZH4.js";import"./stores-C9PduWJD.js";import"./focustrack-KpSC-Sg9.js";import"./navManager-CfwrlVrC.js";import"./extendWidget-0hLBEJE1.js";import"./config-D_LJ3MBe.js";import"./index-client-C1tMzqxv.js";var z=(n,a)=>l(a,void 0),B=R('<h2>Multiselect example</h2> <div class="mb-3"><label class="form-label">Multiselect</label> <!></div> <div class="demo-select-config"><strong>Default config</strong><br> <label>Default filterText: <input type="text" class="form-control"></label> <br> <button type="button" class="mt-3 btn btn-outline-secondary">Reset widget filterText</button></div>',1);function it(n,a){L(a,!0);const[_,x]=P(),c=()=>O(m,"$widgetsConfig$",_),p=["Action 1","Action 2","Action 3","Other 1","Other 2","Other 3"],m=q(),f=location.hash.split("?")[1],$=new URL(f?`?${f}`:"",location.href);let i=v(b($.searchParams.get("filterText")??""));A(()=>{D(m,h(c).select={filterText:t(i)},h(c))});let s=v(void 0),w=M(()=>t(s)?p.filter(r=>r.toLowerCase().startsWith(t(s)??"")):p.slice(0,10));var u=B(),d=e(S(u),2),T=e(o(d),2);j(T,{get items(){return t(w)},get filterText(){return t(s)},set filterText(r){l(s,b(r))}});var C=e(d,2),g=e(o(C),3),k=e(o(g)),y=e(g,4);y.__click=[z,s],Y(k,()=>t(i),r=>l(i,r)),W(n,u),F(),x()}U(["click"]);export{it as default};
