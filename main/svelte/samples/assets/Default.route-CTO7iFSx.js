import{p as B,M as E,K as G,t as b,e as _,P as H,h as o,c as d,a as I,s as u,d as p,n as J,S as t,g as r,Z as $,ar as O,k as m,Q as R}from"./AppCommon-DpFUH4-D.js";import{c as U}from"./config-DFeEizj6.js";import{c as V}from"./pagination-CRAKaOuh-DG8PJCTI.js";import"./dom-gfxqXJpK-DWJgb4QK.js";import"./stores-rsYdYw9J.js";import"./index-client-BAzIOzv7.js";import"./writables-CgpOQ4hA-DSsIStup.js";var X=(s,n)=>n(),Y=b('<button class="join-item btn"><span aria-hidden="true">«</span></button>'),aa=(s,n)=>n(),ea=b('<button class="join-item btn"><span aria-hidden="true">‹</span></button>'),ia=b('<span class="sr-only"> </span>'),ta=b("<button> <!></button>"),na=(s,n)=>n(),ra=b('<button class="join-item btn"><span aria-hidden="true">›</span></button>'),sa=(s,n)=>n(),la=b('<button class="join-item btn"><span aria-hidden="true">»</span></button>'),oa=b('<nav><div><!> <!> <!> <!> <!></div> <div aria-live="polite" class="sr-only"> </div></nav>');function da(s,n){B(n,!0);let k=E(n,"page",15),j=G(n,["$$slots","$$events","$$legacy","page"]);const{state:e,api:{first:P,previous:N,next:C,last:F,select:S}}=U({factory:V,widgetName:"pagination",get props(){return{...j,page:k()}},enablePatchChanged:!0,events:{onPageChange:i=>{k(i)}}});var f=oa(),x=p(f),g=p(x);{var w=i=>{var a=Y();a.__click=[X,P],o(()=>{t(a,"aria-label",e.ariaFirstLabel),a.disabled=e.previousDisabled,t(a,"aria-disabled",e.previousDisabled?"true":null),t(a,"tabindex",e.previousDisabled?-1:void 0)}),d(i,a)};_(g,i=>{e.boundaryLinks&&i(w)})}var L=u(g,2);{var z=i=>{var a=ea();a.__click=[aa,N],o(()=>{a.disabled=e.previousDisabled,t(a,"aria-label",e.ariaPreviousLabel),t(a,"tabindex",e.previousDisabled?-1:void 0),t(a,"aria-disabled",e.previousDisabled?"true":null)}),d(i,a)};_(L,i=>{e.directionLinks&&i(z)})}var D=u(L,2);H(D,17,()=>e.pages,R,(i,a,ba,ua)=>{var l=ta();l.__click=function(...v){var c;(c=r(a)===-1?()=>{}:()=>S(r(a)))==null||c.apply(this,v)};var y=p(l),Z=u(y);{var q=v=>{var c=ia(),A=p(c);o(()=>m(A,e.activeLabel)),d(v,c)};_(Z,v=>{e.page===r(a)&&v(q)})}o(()=>{$(l,1,O(["join-item btn",r(a)===e.page&&"btn-active"])),t(l,"aria-current",r(a)===e.page?"page":null),t(l,"tabindex",r(a)===-1||e.disabled?-1:void 0),l.disabled=r(a)===-1||e.disabled,m(y,`${r(a)??""} `)}),d(i,l)});var h=u(D,2);{var K=i=>{var a=ra();a.__click=[na,C],o(()=>{a.disabled=e.nextDisabled,t(a,"aria-label",e.ariaNextLabel),t(a,"tabindex",e.nextDisabled?-1:void 0),t(a,"aria-disabled",e.nextDisabled?"true":null)}),d(i,a)};_(h,i=>{e.directionLinks&&i(K)})}var M=u(h,2);{var Q=i=>{var a=la();a.__click=[sa,F],o(()=>{t(a,"aria-label",e.ariaLastLabel),a.disabled=e.nextDisabled,t(a,"tabindex",e.nextDisabled?-1:void 0),t(a,"aria-disabled",e.nextDisabled?"true":null)}),d(i,a)};_(M,i=>{e.boundaryLinks&&i(Q)})}var T=u(x,2),W=p(T);o(()=>{t(f,"aria-label",e.ariaLabel),$(x,1,`join ${e.className??""}`),m(W,`${e.ariaLiveLabelText}`)}),d(s,f),I()}J(["click"]);function ka(s){da(s,{collectionSize:40,boundaryLinks:!0})}export{ka as default};
