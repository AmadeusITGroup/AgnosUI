import{Z as M}from"./chunk-DGYGZKIC.js";import{ba as D,da as w,g as y,s as I,t as C,u as _,v as h,w as P}from"./chunk-A2CCJBKM.js";import"./chunk-LO63LCNI.js";import{Ab as U,Bb as b,Jb as p,La as a,Za as c,cb as m,jb as g,kb as i,mb as u,qa as d,rb as f,vb as l,wb as r,xb as v}from"./chunk-SSC4ISQO.js";function x(o,n){if(o&1&&(l(0,"div",3),v(1,"div",4),l(2,"div",5),p(3,"This is a sample popover"),r()()),o&2){let t,e=b();u("invisible",(t=e.floatingUIState().middlewareData)==null||t.hide==null?null:t.hide.referenceHidden),i("auUse",e.floatingUI.directives.floatingDirective),g("data-popper-placement",e.floatingUIState().placement),a(),i("auUse",e.floatingUI.directives.arrowDirective)}}var T=y(o=>{o.scrollTo({left:326,top:420})}),s=class o{constructor(){this.displayPopover=d(!0);this.floatingUI=P({props:{arrowOptions:{padding:6},computePositionOptions:{middleware:[I(10),C(),_({padding:5}),h()]}}});this.floatingUIState=D(this.floatingUI.state$);this.scrollToMiddle=T}toggleDisplayPopover(){this.displayPopover.update(n=>!n)}static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=c({type:o,selectors:[["ng-component"]],decls:4,vars:3,consts:[[1,"position-relative","overflow-auto","border","border-primary-subtle","demo-floatingui",3,"auUse"],["type","button",1,"btn","btn-primary",3,"click","auUse"],["role","tooltip",1,"popover","bs-popover-auto","position-absolute",3,"auUse","invisible"],["role","tooltip",1,"popover","bs-popover-auto","position-absolute",3,"auUse"],[1,"popover-arrow","position-absolute",3,"auUse"],[1,"popover-body","text-center"]],template:function(t,e){t&1&&(l(0,"div",0)(1,"button",1),U("click",function(){return e.toggleDisplayPopover()}),p(2," Toggle popover "),r(),m(3,x,4,5,"div",2),r()),t&2&&(i("auUse",e.scrollToMiddle),a(),i("auUse",e.floatingUI.directives.referenceDirective),a(2),f(e.displayPopover()?3:-1))},dependencies:[M,w],styles:["div.demo-floatingui[_ngcontent-%COMP%]{width:500px;height:200px}div.demo-floatingui[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:500px;width:150px}div.demo-floatingui[_ngcontent-%COMP%]   .popover[_ngcontent-%COMP%]{width:250px}"],changeDetection:0})}};export{s as default};
