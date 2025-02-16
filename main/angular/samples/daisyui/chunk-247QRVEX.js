import{i as L,l as W,n as A,o as z,p as x}from"./chunk-ZE4BNUW6.js";import{d as F}from"./chunk-R3ZJ3ARL.js";import{$ as C,$a as V,Ha as v,Ja as B,Kb as U,M as T,Pa as S,Rb as w,S as d,Sa as _,Va as R,Wa as p,X as j,_ as f,bb as M,d as O,gb as D,ka as y,kb as l,lb as r,qb as b,rb as u,sb as k,tb as I,ub as N,yb as P,zb as c}from"./chunk-KSJWKYT7.js";var J=["*"];function K(e,o){if(e&1&&(l(0,"form",2)(1,"button",4),c(2,"\u2715"),r()()),e&2){let t=k();v(),M("auUse",t.directives.closeButtonDirective)}}function Q(e,o){if(e&1){let t=b();l(0,"form",3)(1,"button",5),u("click",function(){f(t);let n=k();return C(n.api.close())}),c(2,"Close"),r()()}}var g=class e extends A{constructor(){super(z({factory:L,widgetName:"modal",events:{onVisibleChange:t=>this.visible.set(t),onShown:()=>{},onHidden:()=>{},onBeforeClose:()=>{}},defaultConfig:{closeButton:!0}}));this.closeOnOutsideClick=y(void 0,{transform:x});this.closeButton=y(void 0,{transform:x});this.ariaCloseButtonLabel=y();this.visible=S(!1)}static{this.\u0275fac=function(i){return new(i||e)}}static{this.\u0275cmp=_({type:e,selectors:[["app-modal"]],inputs:{closeOnOutsideClick:[1,"closeOnOutsideClick"],closeButton:[1,"closeButton"],ariaCloseButtonLabel:[1,"ariaCloseButtonLabel"],visible:[1,"visible"]},outputs:{visible:"visibleChange"},features:[R],ngContentSelectors:J,decls:5,vars:3,consts:[[1,"modal","modal-bottom","sm:modal-middle",3,"close","auUse"],[1,"modal-box"],["method","dialog"],["method","dialog",1,"modal-backdrop"],[1,"btn","btn-sm","btn-circle","btn-ghost","absolute","right-2","top-2",3,"auUse"],[3,"click"]],template:function(i,n){i&1&&(I(),l(0,"dialog",0),u("close",function(){return n.api.close()}),l(1,"div",1),N(2),p(3,K,3,1,"form",2),r(),p(4,Q,3,0,"form",3),r()),i&2&&(M("auUse",n.directives.dialogDirective),v(3),D(n.state.closeButton()?3:-1),v(),D(n.closeOnOutsideClick()?4:-1))},dependencies:[W],encapsulation:2,changeDetection:0})}};var h=class e{constructor(){this._applicationRef=d(V);this._injector=d(j);this._document=d(F)}open(o,t){return O(this,null,function*(){let i=[],n;if(o instanceof B){let a=o.createEmbeddedView({});this._applicationRef.attachView(a),i=a.rootNodes,n=a.destroy.bind(a)}else{let a=w(o,{environmentInjector:this._injector});i=[a.location.nativeElement],n=a.destroy.bind(a)}let m=this._document.createElement("div");this._document.body.append(m);let s=w(g,{hostElement:m,environmentInjector:this._injector,projectableNodes:[i]});try{for(let a of Object.keys(t)){let q=t[a];s.setInput(a,q)}this._applicationRef.attachView(s.hostView),yield s.instance._widget.initialized,yield s.instance.api.open()}finally{m.remove(),n(),s.destroy()}})}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"})}};function X(e,o){e&1&&(l(0,"h3",2),c(1,"A simple modal"),r(),l(2,"p",3),c(3,"Press ESC key, click on \u2715 button or click outside the modal to close"),r())}var E=class e{constructor(){this.modalService=d(h)}openModal(o){this.modalService.open(o,{closeOnOutsideClick:!0})}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=_({type:e,selectors:[["ng-component"]],decls:4,vars:0,consts:[["modalContent",""],["aria-haspopup","dialog",1,"btn",3,"click"],[1,"font-bold","text-lg"],[1,"py-4"]],template:function(t,i){if(t&1){let n=b();p(0,X,4,0,"ng-template",null,0,U),l(2,"button",1),u("click",function(){f(n);let s=P(1);return C(i.openModal(s))}),c(3,"Open modal"),r()}},encapsulation:2})}};export{E as default};
