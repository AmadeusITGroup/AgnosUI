import{a as T}from"./chunk-TO6AFQXH.js";import{I,J as U,K as S,T as E}from"./chunk-D5SB5LKF.js";import{aa as h}from"./chunk-5O32SAQY.js";import"./chunk-IOV3MBWN.js";import{Ab as f,Bb as d,Ib as A,Jb as l,La as n,Lb as m,Za as D,ca as b,cb as s,da as x,kb as c,mb as _,ob as v,qa as g,rb as u,vb as r,wb as a,zb as y}from"./chunk-J5IQVFXP.js";function M(t,o){if(t&1&&(r(0,"div",8)(1,"div",9),l(2),a()()),t&2){let e=d().directives,i=d();c("auUse",e.bodyContainerDirective),n(),c("auUse",e.bodyDirective),n(),m(" ",i.BODY," ")}}function O(t,o){if(t&1&&(r(0,"div",5)(1,"p",6),l(2),a(),r(3,"button",7),l(4," Toggle first "),a()(),s(5,M,3,3,"div",8)),t&2){let e=o.state,i=o.directives;_("collapsed",!e.visible()),c("auUse",i.headerDirective),n(2),m("First panel - ",e.visible()?"opened":"collapsed",""),n(),v("btn btn-link p-0 ",e.buttonClassName()," au-accordion-item-button"),c("auUse",i.toggleDirective),n(2),u(e.shouldBeInDOM()?5:-1)}}function k(t,o){if(t&1&&(r(0,"div",8)(1,"div",9),l(2),a()()),t&2){let e=d().directives,i=d();c("auUse",e.bodyContainerDirective),n(),c("auUse",e.bodyDirective),n(),m(" ",i.BODY," ")}}function w(t,o){if(t&1){let e=y();r(0,"div",5)(1,"p",6),l(2,"Second panel"),a(),r(3,"div",10)(4,"button",7),l(5," Toggle second "),a(),r(6,"button",11),f("click",function(){b(e);let p=d();return x(p.toggleThirdDisabled())}),l(7),a(),r(8,"button",12),f("click",function(){b(e),d();let p=A(1);return x(p.api.collapseAll())}),l(9,"Collapse all"),a()()(),s(10,k,3,3,"div",8)}if(t&2){let e=o.state,i=o.directives,p=d();_("collapsed",!e.visible()),c("auUse",i.headerDirective),n(4),v("btn btn-sm btn-outline-primary ",e.buttonClassName()," au-accordion-item-button"),c("auUse",i.toggleDirective),n(3),m(" ",p.thirdDisabled()?"En":"Dis","able third "),n(3),u(e.shouldBeInDOM()?10:-1)}}function B(t,o){t&1&&(r(0,"p",13),l(1,"[I'm\xA0disabled]"),a())}function N(t,o){if(t&1&&(r(0,"div",8)(1,"div",9),l(2),a()()),t&2){let e=d().directives,i=d();c("auUse",e.bodyContainerDirective),n(),c("auUse",e.bodyDirective),n(),m(" ",i.BODY," ")}}function P(t,o){if(t&1&&(r(0,"div",5)(1,"button",7),l(2," Third panel "),a(),s(3,B,2,0,"p",13),a(),s(4,N,3,3,"div",8)),t&2){let e=o.state,i=o.directives,p=d();_("collapsed",!e.visible()),c("auUse",i.headerDirective),n(),v("p-0 btn btn-link container-fluid text-start au-accordion-item-button ",e.buttonClassName(),""),c("auUse",i.toggleDirective),n(2),u(p.thirdDisabled()?3:-1),n(),u(e.shouldBeInDOM()?4:-1)}}var C=class t{constructor(){this.thirdDisabled=g(!1);this.BODY=T}toggleThirdDisabled(){this.thirdDisabled.update(o=>!o)}static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=D({type:t,selectors:[["ng-component"]],decls:8,vars:1,consts:[["accordion","auAccordion"],["auAccordion",""],["auAccordionItem",""],["auAccordionItemStructure",""],["auAccordionItem","",3,"auDisabled"],["role","heading","aria-level","2",1,"accordion-button","accordion-header","custom-header","justify-content-between",3,"auUse"],[1,"m-0"],["type","button",3,"auUse"],[1,"accordion-collapse",3,"auUse"],[1,"accordion-body",3,"auUse"],[1,"d-flex","flex-wrap","gap-2"],["type","button",1,"btn","btn-sm","btn-outline-secondary",3,"click"],["type","button",1,"btn","btn-sm","btn-outline-danger",3,"click"],[1,"text-muted","m-0","small"]],template:function(e,i){e&1&&(r(0,"div",1,0)(2,"div",2),s(3,O,6,9,"ng-template",3),a(),r(4,"div",2),s(5,w,11,9,"ng-template",3),a(),r(6,"div",4),s(7,P,5,9,"ng-template",3),a()()),e&2&&(n(6),c("auDisabled",i.thirdDisabled()))},dependencies:[E,h,S,U,I],styles:[".custom-header[_ngcontent-%COMP%]:after{content:none!important}"]})}};export{C as default};
