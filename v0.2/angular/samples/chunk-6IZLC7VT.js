import{c as S,e as b,g as D,l as M}from"./chunk-ZBV2L2DC.js";import{P as y}from"./chunk-DXQXQBD6.js";import"./chunk-KJNIKP2T.js";import{Jb as c,Mb as f,Na as p,Nb as g,Ob as v,Qb as h,X as m,ib as u,tb as o,ub as r,vb as l}from"./chunk-7LGRIDZR.js";var C=(t,e)=>{console.log("Directive has been executed on node ",t.id);let d=n=>{console.log(e,n.target)};return t.addEventListener("click",d),{update:n=>e=n,destroy:()=>{t.removeEventListener("click",d),console.log("Destroy function executed ",t.id)}}};var P=(()=>{let e=class e{constructor(){this.config="focus element clicked",this.createSampleDirective=C}};e.\u0275fac=function(a){return new(a||e)},e.\u0275cmp=m({type:e,selectors:[["ng-component"]],standalone:!0,features:[h],decls:10,vars:3,consts:[[3,"auUse","auUseParams"],["id","test",1,"btn","btn-primary"],["id","test2",1,"btn","btn-primary"],["id","clickText","type","text","aria-label","text input to configure the directive",1,"form-control",3,"ngModel","ngModelChange"]],template:function(a,i){a&1&&(o(0,"div",0)(1,"button",1),c(2,"button 1"),r(),o(3,"button",2),c(4,"button 2"),r()(),l(5,"hr"),o(6,"input",3),v("ngModelChange",function(s){return g(i.config,s)||(i.config=s),s}),r(),l(7,"hr"),o(8,"span"),c(9,"(Open the console to see the outputs)"),r()),a&2&&(u("auUse",i.createSampleDirective)("auUseParams",i.config),p(6),f("ngModel",i.config))},dependencies:[y,M,S,b,D],encapsulation:2});let t=e;return t})();export{P as default};
