import{m as k}from"./chunk-H6ZKA5JJ.js";import"./chunk-24AZX5Q5.js";import"./chunk-UQV7GR2W.js";import{$a as _,Cb as c,Eb as D,Jb as f,Ma as b,Na as m,U as v,ba as u,fa as h,ga as C,hb as y,ib as S,jb as I,kb as o,lb as l,mb as p,ob as g,rb as s,sb as A}from"./chunk-HHNAUMXU.js";function x(n,e){if(n&1){let a=g();o(0,"au-component",0),s("auHidden",function(){let r=h(a).$implicit,d=A();return C(d.removeAlert(r))}),l()}if(n&2){let a=e.$implicit;_("auAnimation",a.animation)("auAnimationOnInit",a.animationOnInit)("auDismissible",a.dismissible)("auType",a.type)("auSlotDefault",a.slotDefault)}}var T=(()=>{let e=class e{constructor(){this.alerts=[]}add(t){this.alerts.push(t)}remove(t){this.alerts=this.alerts.filter(i=>i!==t)}clear(){this.alerts=[]}};e.\u0275fac=function(i){return new(i||e)},e.\u0275prov=v({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})(),E=(()=>{let e=class e{constructor(t){this.alertContainerService=t}removeAlert(t){this.alertContainerService.remove(t)}};e.\u0275fac=function(i){return new(i||e)(m(T))},e.\u0275cmp=u({type:e,selectors:[["app-alert-child"]],standalone:!0,features:[f],decls:2,vars:0,consts:[["auAlert","",3,"auAnimation","auAnimationOnInit","auDismissible","auType","auSlotDefault","auHidden"],["auAlert","",3,"auAnimation","auAnimationOnInit","auDismissible","auType","auSlotDefault"]],template:function(i,r){i&1&&S(0,x,1,5,"au-component",1,y),i&2&&I(r.alertContainerService.alerts)},dependencies:[k],encapsulation:2});let n=e;return n})(),j=(()=>{let e=class e{constructor(t){this.alertContainerService=t}addError(){this.alertContainerService.add({type:"danger",slotDefault:"Error",dismissible:!0,animation:!0})}addWarning(){this.alertContainerService.add({type:"warning",slotDefault:"Warning",dismissible:!0,animation:!0})}addInfo(){this.alertContainerService.add({type:"info",slotDefault:"Info",dismissible:!0,animation:!0})}};e.\u0275fac=function(i){return new(i||e)(m(T))},e.\u0275cmp=u({type:e,selectors:[["ng-component"]],standalone:!0,features:[f],decls:10,vars:1,consts:[[1,"btn","btn-primary","addError","me-1",3,"click"],[1,"btn","btn-primary","addInfo","me-1",3,"click"],[1,"btn","btn-primary","addWarning","me-1",3,"click"],[1,"alertCount","mb-3"]],template:function(i,r){i&1&&(o(0,"button",0),s("click",function(){return r.addError()}),c(1,"Add error"),l(),o(2,"button",1),s("click",function(){return r.addInfo()}),c(3,"Add info"),l(),o(4,"button",2),s("click",function(){return r.addWarning()}),c(5,"Add warning"),l(),p(6,"br"),o(7,"div",3),c(8),l(),p(9,"app-alert-child")),i&2&&(b(8),D("Alerts in the service: ",r.alertContainerService.alerts.length,""))},dependencies:[E],encapsulation:2});let n=e;return n})();export{E as ChildComponent,j as default};
