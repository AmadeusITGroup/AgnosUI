import{S as D,T as M}from"./chunk-C5QCM6L5.js";import{aa as g}from"./chunk-IAPE5IF4.js";import"./chunk-BSKWKFW2.js";import{Ib as m,Ka as u,Kb as f,W as c,Ya as r,ab as C,fa as d,ub as a,vb as i,zb as p}from"./chunk-X6ZWDPPE.js";var l=class e extends g{static{this.\u0275fac=(()=>{let n;return function(o){return(n||(n=d(e)))(o||e)}})()}static{this.\u0275cmp=r({type:e,selectors:[["ng-component"]],features:[C],decls:4,vars:1,consts:[["type","button",1,"btn","btn-outline-primary",3,"click"]],template:function(t,o){t&1&&(a(0,"p"),m(1),i(),a(2,"button",0),p("click",function(){return o.api().close(!0)}),m(3,"Close"),i()),t&2&&(u(),f("Hello, ",o.state().contentData().name,"!"))},encapsulation:2,changeDetection:0})}};var s=class e{constructor(){this.modalService=c(M)}openModal(){this.modalService.open({title:"Hi there!",children:l,contentData:{name:"World"}})}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=r({type:e,selectors:[["ng-component"]],decls:2,vars:0,consts:[["type","button",1,"btn","btn-primary",3,"click"]],template:function(t,o){t&1&&(a(0,"button",0),p("click",function(){return o.openModal()}),m(1,"Launch demo modal"),i())},dependencies:[D],encapsulation:2})}};export{s as default};