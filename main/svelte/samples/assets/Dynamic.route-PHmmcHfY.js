var g=Object.defineProperty;var b=r=>{throw TypeError(r)};var k=(r,t,e)=>t in r?g(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var n=(r,t,e)=>k(r,typeof t!="symbol"?t+"":t,e),y=(r,t,e)=>t.has(r)||b("Cannot "+e);var a=(r,t,e)=>(y(r,t,"read from private field"),e?e.call(r):t.get(r)),v=(r,t,e)=>t.has(r)?b("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(r):t.set(r,e);import{s as A,S as x,g as s,l as w,p as S,i as E,t as I,f as W,b as o,Q as C,h as D,c as H,a as O,n as Q,v as $,k as j,d as q}from"./AppCommon-B-ROr4aU.js";import{A as z}from"./Alert-DumMUwj5.js";import"./actions-Cbyr4fVv.js";import"./Slot-DxNJ8UAq.js";import"./snippet-DFOQFhBJ.js";import"./alert-BpepSIHu-B9AYEfze.js";import"./common-BqUjUBPy-CDWYKlVd.js";import"./baseTransitions-BKaaUOED.js";import"./writables-CgpOQ4hA-BLtlctEd.js";import"./stores-DWJrwGVR.js";import"./dom-gfxqXJpK-CVUkDlT_.js";import"./promise-XSP94FjG-CHur0jPm.js";import"./extendWidget-GeFhB8wc.js";import"./fade-uOobJKgw-BDarYuaK.js";import"./simpleClassTransition-BNF7z2Hu.js";import"./cssTransitions-B5R6pvx9.js";import"./types-Bw2nvhNr.js";import"./config-lZO9LbO2.js";import"./config-ZUzlAODH.js";import"./index-client-hhUEBj_e.js";var i;class B{constructor(){v(this,i,A(x([])));n(this,"add",t=>s(a(this,i)).push(t));n(this,"remove",t=>s(a(this,i)).splice(s(a(this,i)).indexOf(t),1));n(this,"reset",()=>w(a(this,i),[],!0))}get alerts(){return s(a(this,i))}}i=new WeakMap;var F=(r,t)=>t.add({type:"danger",children:"Error",dismissible:!0,animated:!0}),G=(r,t)=>t.add({type:"info",children:"Info",dismissible:!0,animated:!0}),J=(r,t)=>t.add({type:"warning",children:"Warning",dismissible:!0,animated:!0}),K=I('<button class="btn btn-primary addError me-1">Add error</button> <button class="btn btn-primary addInfo me-1">Add info</button> <button class="btn btn-primary addWarning me-1">Add warning</button> <br> <div class="alertCount mb-3"> </div> <!>',1);function pt(r,t){S(t,!1);const e=new B;E();var m=K(),p=W(m);p.__click=[F,e];var l=o(p,2);l.__click=[G,e];var c=o(l,2);c.__click=[J,e];var u=o(c,4),h=q(u),f=o(u,2);C(f,1,()=>e.alerts,d=>d,(d,_)=>{z(d,$(()=>s(_),{onHidden:()=>e.remove(s(_))}))}),D(()=>j(h,`Alerts in the service: ${e.alerts.length??""}`)),H(r,m),O()}Q(["click"]);export{pt as default};
