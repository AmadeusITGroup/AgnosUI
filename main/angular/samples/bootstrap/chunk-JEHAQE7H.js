import{aa as D,f as b,ma as C,oa as h,qa as M,va as S}from"./chunk-5O32SAQY.js";import"./chunk-IOV3MBWN.js";import{Jb as c,La as m,Mb as g,Nb as f,Ob as v,Sb as y,Za as d,kb as u,qa as p,vb as o,wb as r,xb as s}from"./chunk-J5IQVFXP.js";var E=b((e,i)=>{console.log("Directive has been executed on node ",e.id);let n=t=>{console.log(i,t.target)};return e.addEventListener("click",n),{update:t=>i=t,destroy:()=>{e.removeEventListener("click",n),console.log("Destroy function executed ",e.id)}}});var _=(e,i)=>[e,i],l=class e{constructor(){this.config=p("focus element clicked");this.createSampleDirective=E}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=d({type:e,selectors:[["ng-component"]],decls:10,vars:5,consts:[[3,"auUse"],["id","test",1,"btn","btn-primary"],["id","test2",1,"btn","btn-primary"],["id","clickText","type","text","aria-label","text input to configure the directive",1,"form-control",3,"ngModelChange","ngModel"]],template:function(n,t){n&1&&(o(0,"div",0)(1,"button",1),c(2,"button 1"),r(),o(3,"button",2),c(4,"button 2"),r()(),s(5,"hr"),o(6,"input",3),v("ngModelChange",function(a){return f(t.config,a)||(t.config=a),a}),r(),s(7,"hr"),o(8,"span"),c(9,"(Open the console to see the outputs)"),r()),n&2&&(u("auUse",y(2,_,t.createSampleDirective,t.config())),m(6),g("ngModel",t.config))},dependencies:[D,S,C,h,M],encapsulation:2})}};export{l as default};
