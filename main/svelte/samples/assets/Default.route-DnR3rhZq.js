import{p as E,M as G,K as H,t as b,e as _,P as I,h as o,c as d,a as J,s as u,d as p,n as O,S as t,g as r,a0 as $,ar as R,k as m,Q as U}from"./AppCommon-B_pcUxBJ.js";import{c as V}from"./config-BD2vf2Rj.js";import{c as X}from"./pagination-CRAKaOuh-BUdXu7iW.js";import"./dom-gfxqXJpK-CN5zhQdp.js";import"./stores-CtF6dy3A.js";import"./index-client-B2BTts_b.js";import"./writables-CgpOQ4hA-BwKX6lS3.js";var Y=(s,n)=>n(),Z=b('<button class="join-item btn"><span aria-hidden="true">«</span></button>'),aa=(s,n)=>n(),ea=b('<button class="join-item btn"><span aria-hidden="true">‹</span></button>'),ia=b('<span class="sr-only"> </span>'),ta=b("<button> <!></button>"),na=(s,n)=>n(),ra=b('<button class="join-item btn"><span aria-hidden="true">›</span></button>'),sa=(s,n)=>n(),la=b('<button class="join-item btn"><span aria-hidden="true">»</span></button>'),oa=b('<nav><div><!> <!> <!> <!> <!></div> <div aria-live="polite" class="sr-only"> </div></nav>');function da(s,n){E(n,!0);let k=G(n,"page",15),j=H(n,["$$slots","$$events","$$legacy","page"]);const{state:e,api:{first:P,previous:N,next:C,last:F,select:S}}=V({factory:X,widgetName:"pagination",get props(){return{...j,page:k()}},enablePatchChanged:!0,events:{onPageChange:i=>{k(i)}}});var f=oa(),x=p(f),g=p(x);{var w=i=>{var a=Z();a.__click=[Y,P],o(()=>{t(a,"aria-label",e.ariaFirstLabel),a.disabled=e.previousDisabled,t(a,"aria-disabled",e.previousDisabled?"true":null),t(a,"tabindex",e.previousDisabled?-1:void 0)}),d(i,a)};_(g,i=>{e.boundaryLinks&&i(w)})}var L=u(g,2);{var z=i=>{var a=ea();a.__click=[aa,N],o(()=>{a.disabled=e.previousDisabled,t(a,"aria-label",e.ariaPreviousLabel),t(a,"tabindex",e.previousDisabled?-1:void 0),t(a,"aria-disabled",e.previousDisabled?"true":null)}),d(i,a)};_(L,i=>{e.directionLinks&&i(z)})}var D=u(L,2);I(D,17,()=>e.pages,U,(i,a,ba,ua)=>{var l=ta();l.__click=function(...v){var c;(c=r(a)===-1?()=>{}:()=>S(r(a)))==null||c.apply(this,v)};var y=p(l),q=u(y);{var A=v=>{var c=ia(),B=p(c);o(()=>m(B,e.activeLabel)),d(v,c)};_(q,v=>{e.page===r(a)&&v(A)})}o(()=>{$(l,1,R(["join-item btn",r(a)===e.page&&"btn-active"])),t(l,"aria-current",r(a)===e.page?"page":null),t(l,"tabindex",r(a)===-1||e.disabled?-1:void 0),l.disabled=r(a)===-1||e.disabled,m(y,`${r(a)??""} `)}),d(i,l)});var h=u(D,2);{var K=i=>{var a=ra();a.__click=[na,C],o(()=>{a.disabled=e.nextDisabled,t(a,"aria-label",e.ariaNextLabel),t(a,"tabindex",e.nextDisabled?-1:void 0),t(a,"aria-disabled",e.nextDisabled?"true":null)}),d(i,a)};_(h,i=>{e.directionLinks&&i(K)})}var M=u(h,2);{var Q=i=>{var a=la();a.__click=[sa,F],o(()=>{t(a,"aria-label",e.ariaLastLabel),a.disabled=e.nextDisabled,t(a,"tabindex",e.nextDisabled?-1:void 0),t(a,"aria-disabled",e.nextDisabled?"true":null)}),d(i,a)};_(M,i=>{e.boundaryLinks&&i(Q)})}var T=u(x,2),W=p(T);o(()=>{t(f,"aria-label",e.ariaLabel),$(x,1,`join ${e.className??""}`),m(W,`${e.ariaLiveLabelText}`)}),d(s,f),J()}O(["click"]);function ka(s){da(s,{collectionSize:40,boundaryLinks:!0})}export{ka as default};
