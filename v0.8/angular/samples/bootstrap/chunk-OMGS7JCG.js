import{B as S,T as k}from"./chunk-2YPRFKA5.js";import{na as C,oa as _,pa as x,ra as F,wa as R}from"./chunk-ATBYNP5X.js";import"./chunk-IOV3MBWN.js";import{Ab as s,Jb as i,Kb as g,La as o,Lb as v,Za as c,cb as p,kb as f,ob as u,rb as m,vb as e,wb as n,xb as b}from"./chunk-J5IQVFXP.js";function E(a,r){a&1&&(e(0,"div",3),i(1,"Thanks!"),n())}function h(a,r){a&1&&(e(0,"div",4),i(1,"Please rate us"),n())}var d=class a{constructor(){this.ctrl=new x(0,C.min(1))}toggle(){this.ctrl.disabled?this.ctrl.enable():this.ctrl.disable()}static{this.\u0275fac=function(l){return new(l||a)}}static{this.\u0275cmp=c({type:a,selectors:[["ng-component"]],decls:17,vars:8,consts:[["id","ratingLabel",1,"form-label"],["auAriaLabelledBy","ratingLabel",3,"auRating","formControl"],["id","form-msg",1,"form-text","small"],[1,"text-success"],[1,"text-danger-emphasis"],["id","form-model"],[1,"d-flex","flex-wrap","gap-2"],["id","form-btn-enable",3,"click"],["id","form-btn-clear",1,"btn","btn-sm","btn-outline-primary",3,"click"]],template:function(l,t){l&1&&(e(0,"div",0),i(1,"Rating of your experience"),n(),b(2,"br")(3,"div",1),e(4,"div",2),p(5,E,2,0,"div",3)(6,h,2,0,"div",4),n(),e(7,"pre"),i(8,"Model: "),e(9,"span",5)(10,"b"),i(11),n()()(),e(12,"div",6)(13,"button",7),s("click",function(){return t.toggle()}),i(14),n(),e(15,"button",8),s("click",function(){return t.ctrl.setValue(0)}),i(16,"Clear"),n()()),l&2&&(o(3),f("formControl",t.ctrl),o(2),m(t.ctrl.valid?5:-1),o(),m(t.ctrl.invalid?6:-1),o(5),g(t.ctrl.value),o(2),u("btn btn-sm btn-outline-",t.ctrl.disabled?"danger":"success",""),o(),v(" ",t.ctrl.disabled?"control disabled":" control enabled"," "))},dependencies:[k,S,R,_,F],encapsulation:2})}};export{d as default};
