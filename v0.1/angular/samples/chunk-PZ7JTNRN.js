import{a as y,b as M,v}from"./chunk-MLLV2MEV.js";import"./chunk-4CHY45IH.js";import{k,l as x}from"./chunk-NUOOYY3O.js";import"./chunk-Z7SX3R6A.js";import{Eb as m,Fb as o,Gb as w,Mb as C,Oa as b,_a as h,ba as g,g as _,ga as s,ha as r,mb as n,nb as i,qb as u,ub as c,vb as d}from"./chunk-CDYQJW4G.js";function V(a,t){if(a&1){let p=u();n(0,"button",5),c("click",function(){s(p),d();let e=m(5);return r(e.api.close(!0))}),o(1,"Yes"),i(),n(2,"button",6),c("click",function(){s(p),d();let e=m(5);return r(e.api.close(!1))}),o(3,"No"),i()}}var A=(()=>{let t=class t{constructor(){this.message=""}show(l){return _(this,null,function*(){this.message="";let e=yield l.api.open();e===x?this.message="You clicked on the close button.":e===k?this.message="You clicked outside the modal.":this.message=`You answered the question with "${e?"Yes":"No"}".`})}};t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=g({type:t,selectors:[["ng-component"]],standalone:!0,features:[C],decls:8,vars:1,consts:[["type","button",1,"btn","btn-primary",3,"click"],["data-testid","message",1,"mt-3"],["auModal","","auSlotTitle","Save changes"],["modal",""],["auModalFooter",""],["type","button",1,"btn","btn-outline-primary",3,"click"],["type","button",1,"btn","btn-outline-danger",3,"click"]],template:function(e,f){if(e&1){let D=u();n(0,"button",0),c("click",function(){s(D);let S=m(5);return r(f.show(S))}),o(1,"Launch demo modal"),i(),n(2,"div",1),o(3),i(),n(4,"au-component",2,3),o(6," Do you want to save your changes? "),h(7,V,4,0,"ng-template",4),i()}e&2&&(b(3),w(f.message))},dependencies:[v,M,y],encapsulation:2});let a=t;return a})();export{A as default};
