import{c as Q,a as x,t as G}from"./kkEqtGQK.js";import{b as gt,aM as X,aN as wt,p as Ct,j as Y,k as yt,l as Z,s as K,m as tt,t as et}from"./YLwudSZN.js";import{d as $t}from"./i19-Ikdo.js";import{i as U}from"./BVmKWYzz.js";import{h as St}from"./DtD_43R0.js";import{s as nt}from"./BACe7Cuv.js";import{e as _t,m as Pt,f as Vt,i as Ot,r as V,g as L,h as st,a as it,d as At}from"./DQWYQRG-.js";import{I as Dt,n as C,l as ut,g as w,m as It,w as F,k as kt,f as ot,o as ft,q as at,t as pt,u as xt,v as Et,i as Nt,s as Wt}from"./B89ZIfjF.js";import{p as jt,r as Ht}from"./BN-BvsRK.js";import{f as Lt}from"./DvcerL0h.js";function vt(t){return t===!0||t===!1}function Bt(t){return typeof t=="function"}function Ft(t){return typeof t=="string"}const Mt=t=>e=>e===null||t(e),M=t=>e=>t(e)?e:Dt,O={normalizeValue:M(vt)},zt={normalizeValue:M(Mt(vt))},rt={normalizeValue:M(Ft)},S={normalizeValue:M(Bt),equal:Object.is},lt=(t,e)=>{let n;const s=new Promise(o=>n=o);let i=()=>{t.removeEventListener(e,r),i=C};const r=o=>{o.target===t&&(n(o),i())};return t.addEventListener(e,r),{promise:s,unsubscribe(){i()}}},qt=t=>{let e;return{promise:new Promise(n=>{e=setTimeout(()=>{e=void 0,n()},t)}),unsubscribe(){e&&(clearTimeout(e),e=void 0)}}},ct=()=>{let t;return{promise:new Promise(n=>{t=n}),resolve:t}},dt=new Promise(C),Rt=(t,e)=>{t.style.display=e==="show"?"":"none"},Tt={animated:!0,animatedOnInit:!1,initDone:null,visible:!0,transition:Rt,onShown:C,onHidden:C,onVisibleChange:C},Ut={animated:O,animatedOnInit:O,visible:O,transition:S,onShown:S,onHidden:S,onVisibleChange:S,initDone:zt},Gt=t=>{const[{animated$:e,initDone$:n,visible$:s,transition$:i,onShown$:r,onHidden$:o,onVisibleChange$:v,animatedOnInit$:b},f]=ut(Tt,t,Ut),{element$:p,directive:l}=_t(),d=w(()=>!!p()),y=It(v,[s],([u])=>u),$=F(null),E=()=>{let u;return $.update(m=>(m?.abort.abort(),u=m?.context,null)),u},z=(u,m,P,h)=>ot(()=>{const j=new AbortController,g=j.signal,A=E()??{},{promise:k,resolve:T}=ct(),H={abort:j,animated:m,visible:u,context:A,element:P,transitionFn:h,promise:k};return $.set(H),T((async()=>{var J;try{await h(P,u?"show":"hide",m,g,A)}finally{g.aborted?await dt:($.set(null),(J=(u?r:o)())==null||J())}})()),H}),D=w(()=>n()?e():b()),I=F(null);let N,c=s(),a=null;const _=kt([y,p,D,I,i,$],([u,m,P,h,j,g])=>{const A=N!==m;N=m;const k=c!==u;if(c=u,m){n()==null&&n.set(!0);const T=h!=null&&g&&g.animated!=h;if(A||k||T){(k||h!=null)&&(a=null);const H=h??a?.animated??(A&&!u?!1:P);g=z(u,H,m,j),a?.resolve(g.promise),a=null}}else A&&(E(),g=null),(k||u&&a?.animated!==h)&&(a=u&&h!=null?{animated:h,...ct()}:null);return a?.promise??g?.promise});let W={};const q=async(u=!s(),m=D())=>{const P={};W=P;try{await ot(()=>{try{return I.set(m),s.set(u),_()}finally{I.set(null)}})}finally{W!==P&&await dt}},R=w(()=>(d()&&_(),!!$())),bt=w(()=>!R()&&y()&&d()),mt=w(()=>!R()&&!y()),ht=Pt(l,Vt(_));return{...ft({visible$:y,element$:p,elementPresent$:d,transitioning$:R,shown$:bt,hidden$:mt}),patch:f,directives:{directive:ht},api:{show:q.bind(null,!0),hide:q.bind(null,!1),toggle:q}}},Jt={visible:!0,dismissible:!0,ariaCloseButtonLabel:"Close",onVisibleChange:C,onShown:C,onHidden:C,animated:!0,animatedOnInit:!1,transition:C,className:""},Qt={dismissible:O,onVisibleChange:S,onHidden:S,onShown:S,transition:S,animatedOnInit:O,animated:O,visible:O,ariaCloseButtonLabel:rt,className:rt};function Xt(t){const[{transition$:e,animatedOnInit$:n,animated$:s,visible$:i,onVisibleChange$:r,onHidden$:o,onShown$:v,...b},f]=ut(Jt,t,Qt),p=Gt({props:{transition:e,visible:i,animated:s,animatedOnInit:n,onVisibleChange:r,onHidden:o,onShown:v}}),l=p.stores.visible$,d=p.stores.hidden$;return{...ft({...b,visible$:l,hidden$:d}),patch:f,api:{open:p.api.show,close:p.api.hide},directives:{transitionDirective:p.directives.directive}}}const Yt=Xt,B=(t,e,n=1/0)=>{if(e!==void 0)if(typeof e=="object"&&e&&n>=1){t||(t={});for(const s of Object.keys(e))Object.prototype.hasOwnProperty.call(e,s)&&(s==="__proto__"||s==="constructor"||(t[s]=B(t[s],e[s],n-1)))}else return e;return t},Zt=(t,e=at)=>{const n=F({}),s=e===at?t:w(()=>e(B({},t?.(),2)));return pt(w(()=>B(B({},s?.(),2),n(),2)),{...n,own$:n,adaptedParent$:s,parent$:t})};function Kt(t,e){return n=>{const s=Et(t,n);t=n,s&&e(s)}}const te=(t,e)=>e?(...n)=>{t(...n),e(...n)}:t,ee=(t,e)=>{const n=F(e,{equal:Object.is});return pt(w(()=>te(t,n())),{set:n.set,update:n.update})},ne=t=>{const{factory:e,defaultConfig:n,widgetConfig:s,events:i,enablePatchChanged:r}=t,o=t.props??{},v=xt(n),b={...o};if(i)for(const l of Object.keys(i))b[l]=ee(i[l],o[l]);const f=e({config:w(()=>({...v(),...s?.()})),props:b}),p=Object.fromEntries(Object.entries(f.stores).map(([l,d])=>[l.slice(0,-1),Lt(d)]));if(r){const l=Kt(o,f.patch);gt(()=>{l({...t.props})})}return{api:f.api,directives:f.directives,state:new Proxy(p,{get(l,d,y){if(Reflect.has(l,d))return Reflect.get(l,d,y).current}})}},se=(t=Symbol("widgetsConfig"))=>{const e=i=>{const r=X(t),o=Zt(r,i);return wt(t,o),o},n=i=>{const r=X(t);return w(()=>r?.()[i])};return{widgetsDefaultConfigKey:t,createWidgetsDefaultConfig:e,getContextWidgetConfig:n,callWidgetFactory:i=>ne({factory:i.factory,defaultConfig:i.defaultConfig,widgetConfig:i.widgetName?n(i.widgetName):null,events:i.events,get props(){return i.props},enablePatchChanged:i.enablePatchChanged})}},{callWidgetFactory:ie}=se();function oe(t){return window.getComputedStyle(t).transitionProperty!=="none"}function ae(t){const{transitionDelay:e,transitionDuration:n}=window.getComputedStyle(t),s=parseFloat(e),i=parseFloat(n);return(s+i)*1e3}const re=t=>async(e,n,s,i,r)=>{const o=t(e,n,s,r)??C;if(Ot(e)&&s&&oe(e)){const v=lt(i,"abort"),b=lt(e,"transitionend"),f=qt(ae(e));await Promise.race([v.promise,b.promise,f.promise]),v.unsubscribe(),b.unsubscribe(),f.unsubscribe()}i.aborted||o()},le=t=>{const{animationPendingClasses:e,animationPendingShowClasses:n,animationPendingHideClasses:s,showClasses:i,hideClasses:r}=t;return re((o,v,b,f)=>{if(V(o,i),V(o,r),b){if(V(o,v==="show"?s:n),!f.started){f.started=!0;const p=v==="show"?r:i;L(o,p),st(o),V(o,p)}L(o,e),st(o),L(o,v==="show"?n:s)}return()=>{V(o,e),V(o,n),V(o,s),L(o,v==="show"?i:r)}})},ce=`<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
</svg>`;var de=G("<div></div>"),ue=G('<button class="btn btn-circle btn-ghost btn-xs self-start"><!></button>'),fe=G("<div><!> <!> <!></div>");function Se(t,e){Ct(e,!0);let n=jt(e,"visible",15),s=Ht(e,["$$slots","$$events","$$legacy","visible","children","icon"]);const i=le({showClasses:["transition-opacity"],hideClasses:["opacity-0"],animationPendingHideClasses:["opacity-0","transition-opacity"]}),{state:r,directives:{transitionDirective:o},api:v}=ie({factory:Yt,widgetName:"alert",get props(){return{...s,visible:n()}},enablePatchChanged:!0,defaultConfig:{transition:i},events:{onVisibleChange:l=>{n(l)}}});var b=Q(),f=Y(b);{var p=l=>{var d=fe();let y;var $=Z(d);{var E=c=>{var a=Q(),_=Y(a);nt(_,()=>e.icon),x(c,a)},z=c=>{var a=de();x(c,a)};U($,c=>{e.icon?c(E):c(z,!1)})}var D=K($,2);nt(D,()=>e.children);var I=K(D,2);{var N=c=>{var a=ue();a.__click=function(...W){v.close?.apply(this,W)};var _=Z(a);St(_,()=>ce),tt(a),et(()=>Wt(a,"aria-label",r.ariaCloseButtonLabel)),x(c,a)};U(I,c=>{r.dismissible&&c(N)})}tt(d),it(d,(c,a)=>At?.(c,a),()=>"alert "+r.className),it(d,c=>o?.(c)),et(c=>y=Nt(d,y,{role:"alert",...c}),[()=>({})]),x(l,d)};U(f,l=>{r.hidden||l(p)})}x(t,b),yt()}$t(["click"]);const _e=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
</svg>`;export{Se as A,_e as b};
