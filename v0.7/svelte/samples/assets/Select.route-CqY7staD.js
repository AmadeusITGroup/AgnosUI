import{p as y,u as A,j as b,R as v,ar as D,s as t,f as L,g as e,h as l,b as O,a as R,t as S,e as M,k as o,as as U,U as h,q as W,w as j}from"./AppCommon-CvTG4iwO.js";import{a as q}from"./input-6Nd4hSYe.js";import{S as F}from"./Select-Bzw_TagF.js";import{a as P}from"./config-BqHMhCCn.js";import"./actions-LhUqO-Ga.js";import"./class-CIYp1y2F.js";import"./Slot-PdhkTCCx.js";import"./snippet-BkLQeW4l.js";import"./floatingUI-CgHbMfHe.js";import"./directive-CKEccryv-BKNwwjMq.js";import"./promise-CY2U8bTP-Dsfi2HxK.js";import"./focustrack-DJxvbHa4.js";import"./navManager-Bb_4h7VN.js";import"./extendWidget-JxsCFpbr.js";import"./config-Bb4GyM__.js";import"./index-client-DxeYKk58.js";var z=(n,a)=>l(a,void 0),B=S('<h2>Multiselect example</h2> <div class="mb-3"><label class="form-label">Multiselect</label> <!></div> <div class="demo-select-config"><strong>Default config</strong><br> <label>Default filterText: <input type="text" class="form-control"></label> <br> <button type="button" class="mt-3 btn btn-outline-secondary">Reset widget filterText</button></div>',1);function at(n,a){y(a,!0);const _=A(),c=()=>j(m,"$widgetsConfig$",_),f=["Action 1","Action 2","Action 3","Other 1","Other 2","Other 3"],m=P(),p=location.hash.split("?")[1],x=new URL(p?`?${p}`:"",location.href);let i=b(v(x.searchParams.get("filterText")??""));D(()=>{U(m,h(c).select={filterText:e(i)},h(c))});let s=b(void 0),T=W(()=>e(s)?f.filter(r=>r.toLowerCase().startsWith(e(s)??"")):f.slice(0,10));var u=B(),d=t(L(u),2),$=t(o(d),2);F($,{get items(){return e(T)},get filterText(){return e(s)},set filterText(r){l(s,v(r))}});var w=t(d,2),g=t(o(w),3),k=t(o(g)),C=t(g,4);C.__click=[z,s],q(k,()=>e(i),r=>l(i,r)),O(n,u),R()}M(["click"]);export{at as default};
