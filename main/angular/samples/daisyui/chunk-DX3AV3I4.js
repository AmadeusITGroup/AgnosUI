import{e as T,m as G,n as j,p as B}from"./chunk-3QUHHR7T.js";import"./chunk-W27Z4RXD.js";import{$ as d,$a as F,Ab as O,Bb as P,Cb as R,Db as k,Ha as l,M as v,Oa as M,Q as A,Ra as p,Ua as E,a as D,aa as c,ab as w,b,db as I,hb as S,ib as N,jb as o,ka as y,kb as s,la as f,lb as C,ob as x,pb as g,qb as u,xb as a,yb as m}from"./chunk-D5UE22AC.js";var U=new A("");var H={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},pe=b(D({},H),{"[class.ng-submitted]":"isSubmitted"});function W(r,h){if(r&1){let e=x();o(0,"input",2),g("blur",function(){d(e);let n=u();return c(n.onTouched())})("mouseleave",function(){d(e);let n=u();return c(n.api.leave())})("mouseenter",function(){let n=d(e).$index,i=u();return c(i.api.setHoveredRating(n+1))})("click",function(){let n=d(e).$index,i=u();return c(i.api.setRating(n+1))}),s()}if(r&2){let e=h.$index,t=u();w("checked",e+1===t.state.visibleRating()),F("aria-label",t.getAriaLabel(e))}}var _=class r extends G{constructor(){super(j({factory:T,widgetName:"rating",events:{onHover:e=>this.hover.emit(e),onLeave:e=>this.leave.emit(e),onRatingChange:e=>{this.rating.set(e),this.onChange(e)}}}));this.maxRating=f(void 0,{transform:B});this.rating=M(0);this.ariaLabel=f();this.className=f();this.hover=y();this.leave=y();this.onChange=e=>{};this.onTouched=()=>{}}writeValue(e){this._widget.patch({rating:e})}registerOnChange(e){this.onChange=e}registerOnTouched(e){this.onTouched=e}setDisabledState(e){this._widget.patch({disabled:e})}trackByIndex(e){return e}getAriaLabel(e){return`${this.state.ariaLabel()} star ${e+1}`}static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275cmp=p({type:r,selectors:[["app-rating"]],inputs:{maxRating:[1,"maxRating"],rating:[1,"rating"],ariaLabel:[1,"ariaLabel"],className:[1,"className"]},outputs:{rating:"ratingChange",hover:"hover",leave:"leave"},features:[k([{provide:U,useExisting:v(()=>r),multi:!0}]),E],decls:3,vars:2,consts:[[1,"rating"],["type","radio","name","rating-1",1,"mask","mask-star",3,"checked"],["type","radio","name","rating-1",1,"mask","mask-star",3,"blur","mouseleave","mouseenter","click","checked"]],template:function(t,n){t&1&&(o(0,"div",0),S(1,W,1,2,"input",1,n.trackByIndex,!0),s()),t&2&&(I(n.state.className()),l(),N(n.state.stars()))},encapsulation:2,changeDetection:0})}};var V=class r{constructor(){this.rating=3;this.hovered=0;this.left=0}static{this.\u0275fac=function(e){return new(e||r)}}static{this.\u0275cmp=p({type:r,selectors:[["ng-component"]],decls:13,vars:4,consts:[[3,"ratingChange","hover","leave","rating"],["id","defaultRating"],["id","defaultHovered"],["id","defaultLeft"]],template:function(e,t){e&1&&(o(0,"app-rating",0),R("ratingChange",function(i){return P(t.rating,i)||(t.rating=i),i}),g("hover",function(i){return t.hovered=i})("leave",function(i){return t.left=i}),s(),o(1,"div"),a(2," Current rate: "),o(3,"span",1),a(4),s(),C(5,"br"),a(6," Hovered: "),o(7,"span",2),a(8),s(),C(9,"br"),a(10," Left: "),o(11,"span",3),a(12),s()()),e&2&&(O("rating",t.rating),l(4),m(t.rating),l(4),m(t.hovered),l(4),m(t.left))},dependencies:[_],encapsulation:2})}};export{V as default};
