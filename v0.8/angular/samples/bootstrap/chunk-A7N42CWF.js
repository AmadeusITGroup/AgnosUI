import{q as H,z as I}from"./chunk-2YPRFKA5.js";import{ea as P,ja as W}from"./chunk-ATBYNP5X.js";import"./chunk-IOV3MBWN.js";import{$a as x,Bb as T,Fb as w,Hb as E,Jb as g,La as r,Na as R,V as C,Va as S,Za as m,bb as v,bc as f,cb as d,fc as M,kb as p,mb as _,nb as b,oa as l,sb as D,tb as h,ub as F,vb as i,wb as o,xb as N}from"./chunk-J5IQVFXP.js";function z(e,a){}function A(e,a){if(e&1&&(i(0,"span",1),d(1,z,0,0,"ng-template",2),o()),e&2){let t=a.$implicit,n=T();r(),p("auSlot",n.state.star())("auSlotProps",t)}}var s=class e{constructor(){this.templateRef=C(R)}static ngTemplateContextGuard(a,t){return!0}static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275dir=x({type:e,selectors:[["ng-template","appRatingStar",""]]})}},u=class e extends P{constructor(){let t=H({factory:I,widgetName:"rating",defaultConfig:{readonly:!0},slotTemplates:()=>({star:this.slotStarFromContent()?.templateRef})});super(t);this.className=l();this.rating=l.required({transform:f});this.maxRating=l.required({transform:f});this.star=l();this.slotStarFromContent=S(s);M(()=>{t.updateSlots()},{allowSignalWrites:!0})}static{this.\u0275fac=function(n){return new(n||e)}}static{this.\u0275cmp=m({type:e,selectors:[["app-rating-readonly"]],contentQueries:function(n,c,q){n&1&&w(q,c.slotStarFromContent,s,5),n&2&&E()},inputs:{className:[1,"className"],rating:[1,"rating"],maxRating:[1,"maxRating"],star:[1,"star"]},features:[v],decls:3,vars:2,consts:[[1,"d-inline-flex","au-rating"],[1,"au-rating-star"],[3,"auSlot","auSlotProps"]],template:function(n,c){n&1&&(i(0,"div",0),h(1,A,2,2,"span",1,D),o()),n&2&&(b(c.state.className()),r(),F(c.state.stars()))},dependencies:[W],encapsulation:2,changeDetection:0})}};function B(e,a){if(e&1&&(i(0,"span",4),g(1,"\u2605"),o()),e&2){let t=a.fill,n=a.index;_("filled",t===100)("bad",n<3)}}var y=class e{static{this.\u0275fac=function(t){return new(t||e)}}static{this.\u0275cmp=m({type:e,selectors:[["ng-component"]],decls:7,vars:4,consts:[[3,"rating","maxRating"],[1,"mt-2"],["className","rating-custom",3,"rating","maxRating"],["appRatingStar",""],[1,"star"]],template:function(t,n){t&1&&(i(0,"div"),g(1,"The readonly rating without slot:"),o(),N(2,"app-rating-readonly",0),i(3,"div",1),g(4,"Using a slot to customize the display:"),o(),i(5,"app-rating-readonly",2),d(6,B,2,4,"ng-template",3),o()),t&2&&(r(2),p("rating",7)("maxRating",10),r(3),p("rating",7)("maxRating",10))},dependencies:[u,s],styles:[`.rating-custom .star{font-size:150%;color:#b0c4de}.rating-custom .filled{color:#1e90ff}.rating-custom .bad{color:#deb0b0}.rating-custom .filled.bad{color:#ff1e1e}
`],encapsulation:2})}};export{y as default};
