import{a as S}from"./chunk-TO6AFQXH.js";import{F as A,G as w,H as I,M as U}from"./chunk-XXOOVFKV.js";import{S as h}from"./chunk-NOFNVHQY.js";import"./chunk-PTAQICO2.js";import{$a as p,Ab as D,Bb as l,Db as m,Ib as y,Ma as o,bb as c,ca as f,db as _,fb as v,ib as u,la as b,ma as x,mb as r,nb as a,qb as C,rb as g,sb as s}from"./chunk-G54KZPDD.js";function T(t,i){if(t&1&&(r(0,"div",8)(1,"div",9),l(2),a()()),t&2){let e=s().widget,n=s();c("auUse",e.directives.bodyContainerDirective),o(),c("auUse",e.directives.bodyDirective),o(),m(" ",n.BODY," ")}}function B(t,i){if(t&1&&(r(0,"div",5)(1,"p",6),l(2),a(),r(3,"button",7),l(4," Toggle first "),a()(),p(5,T,3,3,"div",8)),t&2){let e=i.state,n=i.widget;_("collapsed",!e.itemVisible),c("auUse",n.directives.headerDirective),o(2),m("First panel - ",e.itemVisible?"opened":"collapsed",""),o(),v("btn btn-link p-0 ",e.itemButtonClass," au-accordion-item-button"),c("auUse",n.directives.toggleDirective),o(2),u(5,e.shouldBeInDOM?5:-1)}}function M(t,i){if(t&1&&(r(0,"div",8)(1,"div",9),l(2),a()()),t&2){let e=s().widget,n=s();c("auUse",e.directives.bodyContainerDirective),o(),c("auUse",e.directives.bodyDirective),o(),m(" ",n.BODY," ")}}function O(t,i){if(t&1){let e=C();r(0,"div",5)(1,"p",6),l(2,"Second panel"),a(),r(3,"div",10)(4,"button",7),l(5," Toggle second "),a(),r(6,"button",11),g("click",function(){b(e);let d=s();return x(d.thirdDisabled=!d.thirdDisabled)}),l(7),a(),r(8,"button",12),g("click",function(){b(e),s();let d=D(1);return x(d.api.collapseAll())}),l(9,"Collapse all"),a()()(),p(10,M,3,3,"div",8)}if(t&2){let e=i.state,n=i.widget,d=s();_("collapsed",!e.itemVisible),c("auUse",n.directives.headerDirective),o(4),v("btn btn-sm btn-outline-primary ",e.itemButtonClass," au-accordion-item-button"),c("auUse",n.directives.toggleDirective),o(3),m(" ",d.thirdDisabled?"En":"Dis","able third "),o(3),u(10,e.shouldBeInDOM?10:-1)}}function V(t,i){t&1&&(r(0,"p",13),l(1,"[I'm\xA0disabled]"),a())}function k(t,i){if(t&1&&(r(0,"div",8)(1,"div",9),l(2),a()()),t&2){let e=s().widget,n=s();c("auUse",e.directives.bodyContainerDirective),o(),c("auUse",e.directives.bodyDirective),o(),m(" ",n.BODY," ")}}function Y(t,i){if(t&1&&(r(0,"div",5)(1,"button",7),l(2," Third panel "),a(),p(3,V,2,0,"p",13),a(),p(4,k,3,3,"div",8)),t&2){let e=i.state,n=i.widget,d=s();_("collapsed",!e.itemVisible),c("auUse",n.directives.headerDirective),o(),v("p-0 btn btn-link container-fluid text-start au-accordion-item-button ",e.itemButtonClass,""),c("auUse",n.directives.toggleDirective),o(2),u(3,d.thirdDisabled?3:-1),o(),u(4,e.shouldBeInDOM?4:-1)}}var H=(()=>{let i=class i{constructor(){this.thirdDisabled=!1,this.BODY=S}};i.\u0275fac=function(d){return new(d||i)},i.\u0275cmp=f({type:i,selectors:[["ng-component"]],standalone:!0,features:[y],decls:8,vars:1,consts:[["accordion","auAccordion"],["auAccordion",""],["auAccordionItem",""],["auAccordionItemStructure",""],["auAccordionItem","",3,"auItemDisabled"],["role","heading","aria-level","2",1,"accordion-button","accordion-header","custom-header","justify-content-between",3,"auUse"],[1,"m-0"],["type","button",3,"auUse"],[1,"accordion-collapse",3,"auUse"],[1,"accordion-body",3,"auUse"],[1,"d-flex","flex-wrap","gap-2"],["type","button",1,"btn","btn-sm","btn-outline-secondary",3,"click"],["type","button",1,"btn","btn-sm","btn-outline-danger",3,"click"],[1,"text-muted","m-0","small"]],template:function(d,E){d&1&&(r(0,"div",1,0)(2,"div",2),p(3,B,6,9,"ng-template",3),a(),r(4,"div",2),p(5,O,11,9,"ng-template",3),a(),r(6,"div",4),p(7,Y,5,9,"ng-template",3),a()()),d&2&&(o(6),c("auItemDisabled",E.thirdDisabled))},dependencies:[U,h,I,w,A],styles:[".custom-header[_ngcontent-%COMP%]:after{content:none!important}"]});let t=i;return t})();export{H as default};