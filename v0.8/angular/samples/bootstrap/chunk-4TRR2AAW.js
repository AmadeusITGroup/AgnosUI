import{T as W,m as N,n as Y,s as A,t as I}from"./chunk-2YPRFKA5.js";import{la as V,oa as x,qa as S,va as F,wa as E}from"./chunk-ATBYNP5X.js";import"./chunk-IOV3MBWN.js";import{Ab as d,Bb as _,Ib as p,Jb as i,Kb as k,La as u,Mb as D,Nb as T,Ob as v,Za as M,ca as r,cb as b,d as h,da as s,kb as w,qa as f,vb as o,wb as n,xb as y,zb as g}from"./chunk-J5IQVFXP.js";function L(c,m){if(c&1){let e=g();o(0,"button",8),d("click",function(){r(e),_();let l=p(10);return s(l.api.close(!0))}),i(1,"Yes"),n(),o(2,"button",9),d("click",function(){r(e),_();let l=p(10);return s(l.api.close(!1))}),i(3,"No"),n()}}var C=class c{constructor(){this.message=f("");this.fullscreenToggle=f(!1)}show(m){return h(this,null,function*(){this.message.set("");let e=yield m.api.open();e===Y?this.message.set("You clicked on the close button."):e===N?this.message.set("You clicked outside the modal."):this.message.set(`You answered the question with "${e?"Yes":"No"}".`)})}static{this.\u0275fac=function(e){return new(e||c)}}static{this.\u0275cmp=M({type:c,selectors:[["ng-component"]],decls:13,vars:3,consts:[["modal",""],["type","button",1,"btn","btn-primary",3,"click"],[1,"form-check","form-switch","mt-3"],["type","checkbox","role","switch","id","fullscreen",1,"form-check-input",3,"ngModelChange","ngModel"],["for","fullscreen",1,"form-check-label"],["data-testid","message"],["auModal","","auTitle","Save changes",3,"auFullscreen"],["auModalFooter",""],["type","button",1,"btn","btn-outline-primary",3,"click"],["type","button",1,"btn","btn-outline-danger",3,"click"]],template:function(e,t){if(e&1){let l=g();o(0,"button",1),d("click",function(){r(l);let a=p(10);return s(t.show(a))}),i(1,"Launch demo modal"),n(),o(2,"div",2)(3,"input",3),v("ngModelChange",function(a){return r(l),T(t.fullscreenToggle,a)||(t.fullscreenToggle=a),s(a)}),n(),o(4,"label",4),i(5,"Fullscreen"),n()(),y(6,"hr"),o(7,"div",5),i(8),n(),o(9,"au-component",6,0),i(11," Do you want to save your changes? "),b(12,L,4,0,"ng-template",7),n()}e&2&&(u(3),D("ngModel",t.fullscreenToggle),u(5),k(t.message()),u(),w("auFullscreen",t.fullscreenToggle()))},dependencies:[W,I,A,E,V,x,F,S],encapsulation:2})}};export{C as default};
