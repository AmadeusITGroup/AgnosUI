import{C as T}from"./chunk-7UZCEIVY.js";import"./chunk-L7LSTPNE.js";import"./chunk-RIVCGYQY.js";import{Bb as s,Db as k,Ib as p,Ma as b,Na as m,T as h,ba as c,bb as _,jb as y,ka as v,kb as I,la as C,lb as g,mb as o,nb as l,ob as u,qb as A,rb as d,sb as S}from"./chunk-DSSB452B.js";function w(i,e){if(i&1){let a=A();o(0,"au-component",1),d("auHidden",function(){let n=v(a).$implicit,r=S();return C(r.removeAlert(n))}),l()}if(i&2){let a=e.$implicit;_("auAnimated",a.animated)("auAnimatedOnInit",a.animatedOnInit)("auDismissible",a.dismissible)("auType",a.type)("auChildren",a.children)}}var E=(()=>{let e=class e{constructor(){this.alerts=[]}add(t){this.alerts.push(t)}remove(t){this.alerts=this.alerts.filter(n=>n!==t)}clear(){this.alerts=[]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275prov=h({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})(),x=(()=>{let e=class e{constructor(t){this.alertContainerService=t}removeAlert(t){this.alertContainerService.remove(t)}};e.\u0275fac=function(n){return new(n||e)(m(E))},e.\u0275cmp=c({type:e,selectors:[["app-alert-child"]],standalone:!0,features:[p],decls:2,vars:0,consts:[["auAlert","",3,"auAnimated","auAnimatedOnInit","auDismissible","auType","auChildren"],["auAlert","",3,"auHidden","auAnimated","auAnimatedOnInit","auDismissible","auType","auChildren"]],template:function(n,r){n&1&&I(0,w,1,5,"au-component",0,y),n&2&&g(r.alertContainerService.alerts)},dependencies:[T],encapsulation:2});let i=e;return i})(),j=(()=>{let e=class e{constructor(t){this.alertContainerService=t}addError(){this.alertContainerService.add({type:"danger",children:"Error",dismissible:!0,animated:!0})}addWarning(){this.alertContainerService.add({type:"warning",children:"Warning",dismissible:!0,animated:!0})}addInfo(){this.alertContainerService.add({type:"info",children:"Info",dismissible:!0,animated:!0})}};e.\u0275fac=function(n){return new(n||e)(m(E))},e.\u0275cmp=c({type:e,selectors:[["ng-component"]],standalone:!0,features:[p],decls:10,vars:1,consts:[[1,"btn","btn-primary","addError","me-1",3,"click"],[1,"btn","btn-primary","addInfo","me-1",3,"click"],[1,"btn","btn-primary","addWarning","me-1",3,"click"],[1,"alertCount","mb-3"]],template:function(n,r){n&1&&(o(0,"button",0),d("click",function(){return r.addError()}),s(1,"Add error"),l(),o(2,"button",1),d("click",function(){return r.addInfo()}),s(3,"Add info"),l(),o(4,"button",2),d("click",function(){return r.addWarning()}),s(5,"Add warning"),l(),u(6,"br"),o(7,"div",3),s(8),l(),u(9,"app-alert-child")),n&2&&(b(8),k("Alerts in the service: ",r.alertContainerService.alerts.length,""))},dependencies:[x],encapsulation:2});let i=e;return i})();export{x as ChildComponent,j as default};
