import{c as Q,a as W,t as Y}from"./kkEqtGQK.js";import{b as wt,aM as X,aN as Ct,p as yt,j as Z,k as $t,l as K,s as tt,m as et,t as nt}from"./YLwudSZN.js";import{d as _t}from"./i19-Ikdo.js";import{i as G}from"./BVmKWYzz.js";import{h as St}from"./DtD_43R0.js";import{s as st}from"./BACe7Cuv.js";import{e as Vt,m as Pt,f as Ot,i as At,r as P,g as L,h as it,a as ot,d as Dt}from"./DoENr2Su.js";import{I as It,n as C,l as ft,g as w,m as Et,w as N,k as Wt,f as rt,o as pt,F as U,q as at,t as vt,u as kt,v as xt,i as Ft,s as jt}from"./Ow8i-sMZ.js";import{p as Ht,r as Lt}from"./BN-BvsRK.js";import{f as Bt}from"./DvcerL0h.js";function mt(e){return e===!0||e===!1}function Nt(e){return typeof e=="function"}function Mt(e){return typeof e=="string"}const zt=e=>t=>t===null||e(t),M=e=>t=>e(t)?t:It,O={normalizeValue:M(mt)},qt={normalizeValue:M(zt(mt))},lt={normalizeValue:M(Mt)},_={normalizeValue:M(Nt),equal:Object.is},ct=(e,t)=>{let n;const s=new Promise(i=>n=i);let o=()=>{e.removeEventListener(t,r),o=C};const r=i=>{i.target===e&&(n(i),o())};return e.addEventListener(t,r),{promise:s,unsubscribe(){o()}}},Rt=e=>{let t;return{promise:new Promise(n=>{t=setTimeout(()=>{t=void 0,n()},e)}),unsubscribe(){t&&(clearTimeout(t),t=void 0)}}},dt=()=>{let e;return{promise:new Promise(n=>{e=n}),resolve:e}},ut=new Promise(C),Tt=(e,t)=>{e.style.display=t==="show"?"":"none"},Gt={animated:!0,animatedOnInit:!1,initDone:null,visible:!0,transition:Tt,onShown:C,onHidden:C,onVisibleChange:C},Ut={animated:O,animatedOnInit:O,visible:O,transition:_,onShown:_,onHidden:_,onVisibleChange:_,initDone:qt},Yt=e=>{const[{animated$:t,initDone$:n,visible$:s,transition$:o,onShown$:r,onHidden$:i,onVisibleChange$:f,animatedOnInit$:p},b]=ft(Gt,e,Ut),{element$:v,directive:c}=Vt(),d=w(()=>!!v()),y=Et(f,[s],([u])=>u),$=N(null),k=()=>{let u;return $.update(m=>(m?.abort.abort(),u=m?.context,null)),u},z=(u,m,V,g)=>rt(()=>{const j=new AbortController,h=j.signal,A=k()??{},{promise:E,resolve:T}=dt(),H={abort:j,animated:m,visible:u,context:A,element:V,transitionFn:g,promise:E};return $.set(H),T((async()=>{var J;try{await g(V,u?"show":"hide",m,h,A)}finally{h.aborted?await ut:($.set(null),(J=(u?r:i)())==null||J())}})()),H}),D=w(()=>n()?t():p()),I=N(null);let x,l=s(),a=null;const S=Wt([y,v,D,I,o,$],([u,m,V,g,j,h])=>{const A=x!==m;x=m;const E=l!==u;if(l=u,m){n()==null&&n.set(!0);const T=g!=null&&h&&h.animated!=g;if(A||E||T){(E||g!=null)&&(a=null);const H=g??a?.animated??(A&&!u?!1:V);h=z(u,H,m,j),a?.resolve(h.promise),a=null}}else A&&(k(),h=null),(E||u&&a?.animated!==g)&&(a=u&&g!=null?{animated:g,...dt()}:null);return a?.promise??h?.promise});let F={};const q=async(u=!s(),m=D())=>{const V={};F=V;try{await rt(()=>{try{return I.set(m),s.set(u),S()}finally{I.set(null)}})}finally{F!==V&&await ut}},R=w(()=>(d()&&S(),!!$())),bt=w(()=>!R()&&y()&&d()),gt=w(()=>!R()&&!y()),ht=Pt(c,Ot(S));return{...pt({visible$:y,element$:v,elementPresent$:d,transitioning$:R,shown$:bt,hidden$:gt}),patch:b,directives:{directive:ht},api:{show:q.bind(null,!0),hide:q.bind(null,!1),toggle:q}}},Jt={visible:!0,dismissible:!0,ariaCloseButtonLabel:"Close",onVisibleChange:C,onShown:C,onHidden:C,animated:!0,animatedOnInit:!1,transition:C,className:""},Qt={dismissible:O,onVisibleChange:_,onHidden:_,onShown:_,transition:_,animatedOnInit:O,animated:O,visible:O,ariaCloseButtonLabel:lt,className:lt};function Xt(e){const[{transition$:t,animatedOnInit$:n,animated$:s,visible$:o,onVisibleChange$:r,onHidden$:i,onShown$:f,...p},b]=ft(Jt,e,Qt),v=Yt({props:{transition:t,visible:o,animated:s,animatedOnInit:n,onVisibleChange:r,onHidden:i,onShown:f}}),c=v.stores.visible$,d=v.stores.hidden$;return{...pt({...p,visible$:c,hidden$:d}),patch:b,api:{open:v.api.show,close:v.api.hide},directives:{transitionDirective:v.directives.directive}}}function Zt(e,t){return t[U]=e,t}const Kt=Zt("alert",Xt),B=(e,t,n=1/0)=>{if(t!==void 0)if(typeof t=="object"&&t&&n>=1){e||(e={});for(const s of Object.keys(t))Object.prototype.hasOwnProperty.call(t,s)&&(s==="__proto__"||s==="constructor"||(e[s]=B(e[s],t[s],n-1)))}else return t;return e},te=(e,t=at)=>{const n=N({}),s=t===at?e:w(()=>t(B({},e?.(),2)));return vt(w(()=>B(B({},s?.(),2),n(),2)),{...n,own$:n,adaptedParent$:s,parent$:e})};function ee(e,t){return n=>{const s=xt(e,n);e=n,s&&t(s)}}const ne=(e,t)=>t?(...n)=>{e(...n),t(...n)}:e,se=(e,t)=>{const n=N(t,{equal:Object.is});return vt(w(()=>ne(e,n())),{set:n.set,update:n.update})},ie=(e,t)=>{const{defaultConfig:n,widgetConfig:s,events:o}=t??{},r=t?.props??{},i=kt(n),f={...r};if(o)for(const c of Object.keys(o))f[c]=se(o[c],r[c]);const p=e({config:w(()=>({...i(),...s?.()})),props:f}),b=Object.fromEntries(Object.entries(p.stores).map(([c,d])=>[c.slice(0,-1),Bt(d)])),v=ee(r,p.patch);return wt(()=>{v({...t?.props})}),{api:p.api,directives:p.directives,state:new Proxy(b,{get(c,d,y){if(Reflect.has(c,d))return Reflect.get(c,d,y).current}})}},oe=(e=Symbol("widgetsConfig"))=>{const t=o=>{const r=X(e),i=te(r,o);return Ct(e,i),i},n=o=>{const r=X(e);return w(()=>r?.()[o])};return{widgetsDefaultConfigKey:e,createWidgetsDefaultConfig:t,getContextWidgetConfig:n,callWidgetFactory:(o,r)=>ie(o,{defaultConfig:r?.defaultConfig,widgetConfig:o[U]?n(o[U]):null,events:r?.events,get props(){return r?.props}})}},{callWidgetFactory:re}=oe();function ae(e){return window.getComputedStyle(e).transitionProperty!=="none"}function le(e){const{transitionDelay:t,transitionDuration:n}=window.getComputedStyle(e),s=parseFloat(t),o=parseFloat(n);return(s+o)*1e3}const ce=e=>async(t,n,s,o,r)=>{const i=e(t,n,s,r)??C;if(At(t)&&s&&ae(t)){const f=ct(o,"abort"),p=ct(t,"transitionend"),b=Rt(le(t));await Promise.race([f.promise,p.promise,b.promise]),f.unsubscribe(),p.unsubscribe(),b.unsubscribe()}o.aborted||i()},de=e=>{const{animationPendingClasses:t,animationPendingShowClasses:n,animationPendingHideClasses:s,showClasses:o,hideClasses:r}=e;return ce((i,f,p,b)=>{if(P(i,o),P(i,r),p){if(P(i,f==="show"?s:n),!b.started){b.started=!0;const v=f==="show"?r:o;L(i,v),it(i),P(i,v)}L(i,t),it(i),L(i,f==="show"?n:s)}return()=>{P(i,t),P(i,n),P(i,s),L(i,f==="show"?o:r)}})},ue=`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>`;var fe=Y("<div></div>"),pe=Y('<button class="btn btn-circle btn-ghost btn-xs self-start"><!></button>'),ve=Y("<div><!> <!> <!></div>");function Ve(e,t){yt(t,!0);let n=Ht(t,"visible",15),s=Lt(t,["$$slots","$$events","$$legacy","visible","children","icon"]);const o=de({showClasses:["transition-opacity"],hideClasses:["opacity-0"],animationPendingHideClasses:["opacity-0","transition-opacity"]}),{state:r,directives:{transitionDirective:i},api:f}=re(Kt,{get props(){return{...s,visible:n()}},defaultConfig:{transition:o},events:{onVisibleChange:c=>{n(c)}}});var p=Q(),b=Z(p);{var v=c=>{var d=ve();let y;var $=K(d);{var k=l=>{var a=Q(),S=Z(a);st(S,()=>t.icon),W(l,a)},z=l=>{var a=fe();W(l,a)};G($,l=>{t.icon?l(k):l(z,!1)})}var D=tt($,2);st(D,()=>t.children);var I=tt(D,2);{var x=l=>{var a=pe();a.__click=function(...F){f.close?.apply(this,F)};var S=K(a);St(S,()=>ue),et(a),nt(()=>jt(a,"aria-label",r.ariaCloseButtonLabel)),W(l,a)};G(I,l=>{r.dismissible&&l(x)})}et(d),ot(d,(l,a)=>Dt?.(l,a),()=>"alert "+r.className),ot(d,l=>i?.(l)),nt(l=>y=Ft(d,y,{role:"alert",...l}),[()=>({})]),W(c,d)};G(b,c=>{r.hidden||c(v)})}W(e,p),$t()}_t(["click"]);const Pe=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
</svg>`;export{Ve as A,Pe as b};
