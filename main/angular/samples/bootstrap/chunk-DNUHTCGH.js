import{O as V,S as R}from"./chunk-BNWOVH73.js";import{la as L,na as j,pa as A,qa as P,ra as B,sa as O}from"./chunk-DPRLPUF2.js";import"./chunk-BSKWKFW2.js";import{Ab as T,Ib as i,Jb as E,Ka as l,Lb as k,Mb as F,Nb as H,Q as h,Ra as w,W as C,Ya as g,ca as M,da as x,jb as v,nb as D,rb as m,sb as c,tb as d,ub as o,vb as n,wb as I,yb as N,zb as _}from"./chunk-X6ZWDPPE.js";var u=(s=>(s.topLeft="top-0 start-0",s.topCenter="top-0 start-50 translate-middle-x",s.topRight="top-0 end-0",s.middleLeft="top-50 start-0 translate-middle-y",s.middleCenter="top-50 start-50 translate-middle",s.middleRight="top-50 end-0 translate-middle-y",s.bottomLeft="bottom-0 start-0",s.bottomCenter="bottom-0 start-50 translate-middle-x",s.bottomRight="bottom-0 end-0",s))(u||{});function W(a,e){if(a&1){let t=N();o(0,"au-component",3),_("auHidden",function(){let y=M(t).$implicit,p=T(2);return x(p.removeToast(y))}),i(1,"Simple toast"),n()}if(a&2){let t=e.$implicit;v("auAutoHide",t.autoHide)("auDelay",t.delay)}}function $(a,e){if(a&1&&(o(0,"div"),c(1,W,2,2,"au-component",2,m),n()),a&2){let t=e.$implicit,r=T();D("toast-container p-3 ",t,""),l(),d(r.toastContainerService.toastMap.get(t))}}function U(a,e){if(a&1&&(o(0,"option",5),i(1),n()),a&2){let t=e.$implicit;v("value",t.value),l(),E(t.label)}}var f=class a{constructor(){this.toastMap=new Map(Object.values(u).map(e=>[e,[]]))}add(e){this.toastMap.get(e.className)?.push(e)}remove(e){this.toastMap.set(e.className,this.toastMap.get(e.className).filter(t=>t!==e))}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275prov=h({token:a,factory:a.\u0275fac,providedIn:"root"})}},b=class a{constructor(){this.toastContainerService=C(f)}removeToast(e){this.toastContainerService.remove(e)}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275cmp=g({type:a,selectors:[["app-toast-container"]],decls:3,vars:0,consts:[["aria-live","polite","aria-atomic","true",1,"d-flex","position-relative","mt-2","w-100",2,"height","500px","background-color","gray"],[3,"class"],["auToast","","auHeader","I am header",3,"auAutoHide","auDelay"],["auToast","","auHeader","I am header",3,"auHidden","auAutoHide","auDelay"]],template:function(t,r){t&1&&(o(0,"div",0),c(1,$,3,3,"div",1,m),n()),t&2&&(l(),d(r.toastContainerService.toastMap.keys()))},dependencies:[V],encapsulation:2})}},S=class a{constructor(){this.toastContainerService=C(f);this.positionList=Object.entries(u).map(e=>({value:e[1],label:e[0]}));this.position=w(this.positionList[0].value)}addToast(){this.toastContainerService.add({autoHide:!0,delay:3e3,className:this.position()})}static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275cmp=g({type:a,selectors:[["ng-component"]],decls:20,vars:1,consts:[[1,"mb-2"],[1,"d-flex","justify-content-between"],[1,"d-flex","form-group","align-items-center"],["for","positionSelect",1,"me-3"],["id","positionSelect",1,"form-select","w-auto",3,"ngModelChange","ngModel"],[3,"value"],[1,"btn","btn-primary","addToast","ms-2",3,"click"]],template:function(t,r){t&1&&(o(0,"p",0),i(1," To position toast wherever you want you should have a "),o(2,"code"),i(3,"toast-container"),n(),i(4," with a custom position defined by CSS classes. "),n(),o(5,"p",0),i(6,"To "),o(7,"strong"),i(8,"stack"),n(),i(9," toasts vertically, put them in the same container."),n(),o(10,"div",1)(11,"div",2)(12,"label",3),i(13,"Position: "),n(),o(14,"select",4),H("ngModelChange",function(p){return F(r.position,p)||(r.position=p),p}),c(15,U,2,2,"option",5,m),n(),o(17,"button",6),_("click",function(){return r.addToast()}),i(18,"Show toast"),n()()(),I(19,"app-toast-container")),t&2&&(l(14),k("ngModel",r.position),l(),d(r.positionList))},dependencies:[R,b,O,P,B,A,L,j],encapsulation:2})}};export{S as default};
