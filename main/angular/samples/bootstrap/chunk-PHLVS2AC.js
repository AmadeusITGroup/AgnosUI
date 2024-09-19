import{N as U,O as q}from"./chunk-W5WXNCR7.js";import{ea as B,ga as O,ia as V,ja as R,ka as W,la as $}from"./chunk-HYVDFSYR.js";import"./chunk-6AZTJAM2.js";import{Eb as n,Fb as L,Hb as j,Ib as A,Jb as P,Lb as M,Oa as p,T as D,Va as N,Z as _,ba as b,cb as S,gb as E,ka as I,kb as u,la as F,lb as f,mb as y,nb as a,ob as o,pb as k,rb as H,sb as h,tb as T}from"./chunk-HJDF7RBE.js";var g=(r=>(r.topLeft="top-0 start-0",r.topCenter="top-0 start-50 translate-middle-x",r.topRight="top-0 end-0",r.middleLeft="top-50 start-0 translate-middle-y",r.middleCenter="top-50 start-50 translate-middle",r.middleRight="top-50 end-0 translate-middle-y",r.bottomLeft="bottom-0 start-0",r.bottomCenter="bottom-0 start-50 translate-middle-x",r.bottomRight="bottom-0 end-0",r))(g||{});function z(s,e){if(s&1){let t=H();a(0,"au-component",3),h("auHidden",function(){let v=I(t).$implicit,c=T(2);return F(c.removeToast(v))}),n(1,"Simple toast"),o()}if(s&2){let t=e.$implicit;S("auAutoHide",t.autoHide)("auDelay",t.delay)}}function G(s,e){if(s&1&&(a(0,"div"),f(1,z,2,2,"au-component",2,u),o()),s&2){let t=e.$implicit,i=T();E("toast-container p-3 ",t,""),p(),y(i.toastContainerService.toastMap.get(t))}}function J(s,e){if(s&1&&(a(0,"option",5),n(1),o()),s&2){let t=e.$implicit;S("value",t.value),p(),L(t.label)}}var l=class l{constructor(){this.toastMap=new Map(Object.values(g).map(e=>[e,[]]))}add(e){this.toastMap.get(e.className)?.push(e)}remove(e){this.toastMap.set(e.className,this.toastMap.get(e.className).filter(t=>t!==e))}};l.\u0275fac=function(t){return new(t||l)},l.\u0275prov=D({token:l,factory:l.\u0275fac,providedIn:"root"});var C=l,m=class m{constructor(){this.toastContainerService=_(C)}removeToast(e){this.toastContainerService.remove(e)}};m.\u0275fac=function(t){return new(t||m)},m.\u0275cmp=b({type:m,selectors:[["app-toast-container"]],standalone:!0,features:[M],decls:3,vars:0,consts:[["aria-live","polite","aria-atomic","true",1,"d-flex","position-relative","mt-2","w-100",2,"height","500px","background-color","gray"],[3,"class"],["auToast","","auHeader","I am header",3,"auAutoHide","auDelay"],["auToast","","auHeader","I am header",3,"auHidden","auAutoHide","auDelay"]],template:function(t,i){t&1&&(a(0,"div",0),f(1,G,3,3,"div",1,u),o()),t&2&&(p(),y(i.toastContainerService.toastMap.keys()))},dependencies:[U],encapsulation:2});var x=m,d=class d{constructor(){this.toastContainerService=_(C);this.positionList=Object.entries(g).map(e=>({value:e[1],label:e[0]}));this.position=N(this.positionList[0].value)}addToast(){this.toastContainerService.add({autoHide:!0,delay:3e3,className:this.position()})}};d.\u0275fac=function(t){return new(t||d)},d.\u0275cmp=b({type:d,selectors:[["ng-component"]],standalone:!0,features:[M],decls:20,vars:1,consts:[[1,"mb-2"],[1,"d-flex","justify-content-between"],[1,"d-flex","form-group","align-items-center"],["for","positionSelect",1,"me-3"],["id","positionSelect",1,"form-select","w-auto",3,"ngModelChange","ngModel"],[3,"value"],[1,"btn","btn-primary","addToast","ms-2",3,"click"]],template:function(t,i){t&1&&(a(0,"p",0),n(1," To position toast wherever you want you should have a "),a(2,"code"),n(3,"toast-container"),o(),n(4," with a custom position defined by CSS classes. "),o(),a(5,"p",0),n(6,"To "),a(7,"strong"),n(8,"stack"),o(),n(9," toasts vertically, put them in the same container."),o(),a(10,"div",1)(11,"div",2)(12,"label",3),n(13,"Position: "),o(),a(14,"select",4),P("ngModelChange",function(c){return A(i.position,c)||(i.position=c),c}),f(15,J,2,2,"option",5,u),o(),a(17,"button",6),h("click",function(){return i.addToast()}),n(18,"Show toast"),o()()(),k(19,"app-toast-container")),t&2&&(p(14),j("ngModel",i.position),p(),y(i.positionList))},dependencies:[q,x,$,R,W,V,B,O],encapsulation:2});var w=d;export{w as default};