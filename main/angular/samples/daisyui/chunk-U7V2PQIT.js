import{$ as Mt,Hb as Xt,Ib as Yt,Ma as ct,Na as zt,Pa as Wt,Q as It,T as _t,Va as qt,W as K,Wb as Gt,X as kt,Y as Et,_ as Ft,a as h,b as L,ba as ot,c as G,d as re,e as Se,f as fe,fa as We,g as J,ga as at,ma as qe,nb as Ht,oa as lt,ob as Ut,pa as jt,pb as Bt,qb as Zt,rb as Qt,ua as Tt,yb as Kt}from"./chunk-CPMGEHB6.js";var Jt,Ze=typeof Symbol=="function"&&Symbol.observable||"@@observable",mt=Symbol(),pe=()=>{},He=()=>{};He.unsubscribe=He;var ut=(t,e)=>{let s=t?t[e]:null;return typeof s=="function"?s.bind(t):pe},ss=t=>({next:typeof t=="function"?t.bind(null):ut(t,"next"),pause:ut(t,"pause"),resume:ut(t,"resume"),_value:void 0,_valueIndex:0,_paused:!1}),ns=function(){return this},bt=t=>{if(!t)return He;if(t.unsubscribe===t)return t;let e=typeof t=="function"?()=>t():()=>t.unsubscribe();return e.unsubscribe=e,e},ft=new WeakSet,Ms=t=>{let e=t.subscribe;return ft.has(e)||(e=(...s)=>bt(t.subscribe(...s)),ft.add(e)),e},Qe=t=>{let e="subscribe"in t?t:t[Ze]();return Ms(e)},js=t=>{let e;return t(s=>e=s)(),e};function ce(t,e){let s=Qe(t),n=Object.assign(()=>Ke(n),e,{subscribe:s,[Ze]:ns});return n}var es=function(t){this.set(t(os(()=>Ke(this))))};function $e(t,e){return ce(t,typeof e=="function"?{set:e,update:es}:L(h({},e),{set:e?.set??pe,update:e?.update??(e?.set?es:pe)}))}var ee=Symbol(),is=Symbol(),dt=!1,Ee=new Set,Ts=1e3,ht=t=>{if(t>Ts)throw new Error("reached maximum number of store changes in one shot")},z=t=>{let e=!dt;e&&(dt=!0);try{return t()}finally{if(e)try{let s=new Map;for(let n of Ee){let i=s.get(n)??0;ht(i),s.set(n,i+1),Ee.delete(n),n[is]()}}finally{Ee.clear(),dt=!1}}},rs=t=>js(Qe(t)),ve=rs,Ke=t=>ve(t),ts=t=>({[t]:!0,[t-1]:!1,0:!1}),Ce=Symbol(),Xe=(t,e)=>Object.is(t,e)&&(!t||typeof t!="object")&&typeof t!="function",Fe=class{#s;#n;#e;#t;#i;#o;#l;constructor(e){this.#s=new Set,this.#n=null,this.#e=!1,this.#t=1,this.#o=ts(1),this.#l=new WeakMap,this[Jt]=!1,this.#i=e}#a(){this.#n=bt(this.onUse())}#r(){let e=this.#n;e&&(this.#n=null,e())}[(Jt=Ce,is)](){let e=this.#t;for(let s of[...this.#s]){if(this.#e||this.#t!==e)return;s._valueIndex!==0&&this.#c(s)}}[ee](){}#c(e){let s=this.#o,n=this.#t,i=this.#i,r=s[e._valueIndex];r==null&&(r=!!this.equal(e._value,i),s[e._valueIndex]=r),e._valueIndex=n,r?!this.#e&&e._paused&&(e._paused=!1,e.resume()):(e._value=i,e._paused=!1,e.next(i))}equal(e,s){return!this.notEqual(e,s)}notEqual(e,s){return!Xe(e,s)}pauseSubscribers(){if(!this.#e){this.#e=!0,Ee.delete(this);for(let e of[...this.#s])e._valueIndex===0||e._paused||(e._paused=!0,e.pause())}}resumeSubscribers(){this.#e&&(this.#e=!1,z(()=>{Ee.add(this)}))}set(e){let s=this[Ce];if(s||!this.equal(this.#i,e)){let n=this.#t+1;this.#t=n,this.#i=e,this.#o=ts(n),s&&delete this.#o[n-1],this.pauseSubscribers()}this.resumeSubscribers()}update(e){this.set(e(this.#i))}onUse(){}subscribe(e){let s=ss(e),n=e?.[mt];if(n){let r=this.#l.get(n);r&&(s._value=r._value,s._valueIndex=r._valueIndex)}this.#s.add(s),z(()=>{this.#s.size==1?this.#a():this[ee]()}),this.#c(s);let i=()=>{let r=this.#s.delete(s);s.next=pe,s.pause=pe,s.resume=pe,r&&(this.#l.set(i,s),this.#s.size===0&&this.#r())};return i[ee]=()=>{this[ee](),this.#c(s)},i.unsubscribe=i,i}[Ze](){return this}};function zs(t){let e=s=>(s?.[mt]||ss(s).next(t),He);return ft.add(e),Object.assign(()=>t,{subscribe:e,[Ze]:ns})}var Ue=class extends Fe{constructor(e){super(e)}set(e){super.set(e)}update(e){super.update(e)}},Ye=(t,e)=>{let{onUse:s,equal:n,notEqual:i}=e;return s&&(t.onUse=function(){let r=o=>this.set(o);return r.set=r,r.update=o=>this.update(o),s(r)}),n&&(t.equal=function(r,o){return n(r,o)}),i&&(t.notEqual=function(r,o){return i(r,o)}),t};function Le(t,e={}){return typeof e=="function"&&(e={onUse:e}),e.onUse?ce(Ye(new Ue(t),e)):zs(t)}function F(t,e={}){typeof e=="function"&&(e={onUse:e});let s=Ye(new Ue(t),e);return ce(s,{set:s.set.bind(s),update:s.update.bind(s)})}function Ws(t){return t.length<=1}var qs=t=>t(),Be=class extends Fe{#s;#n;#e=0;constructor(e,s){super(s);let n=Array.isArray(e);this.#s=n,this.#n=(n?[...e]:[e]).map(Qe)}resumeSubscribers(){this.#e||super.resumeSubscribers()}onUse(){let e=!1,s=0,n=this.#s,i=this.#n,r=new Array(i.length),o=null,c=()=>{let v=o;v&&(o=null,v())},m=(v=!1)=>{v&&(e=!0),e&&!this.#e&&(s&&(s=0,c(),o=bt(this.derive(n?r:r[0]))),this.resumeSubscribers())},f=i.map((v,y)=>{let b=I=>{r[y]=I,s|=1<<y,this.#e&=~(1<<y),m()};return b.next=b,b.pause=()=>{this.#e|=1<<y,this.pauseSubscribers()},b.resume=()=>{this.#e&=~(1<<y),m()},v(b)}),d=(v,y)=>{this.#e&1<<y&&v[ee]?.()};return this[ee]=()=>{let v=0;for(;this.#e&&(ht(++v),e=!1,f.forEach(d),!this.#e);)m(!0)},m(!0),this[ee](),()=>{this[ee]=pe,c(),f.forEach(qs)}}};function ye(t,e,s){typeof e=="function"&&(e={derive:e});let o=e,{derive:n}=o,i=G(o,["derive"]),r=Ws(n)?class extends Be{constructor(c,m){super(c,m),this[Ce]=!0}derive(c){this.set(n(c)),this[Ce]=!1}}:class extends Be{derive(c){let m=f=>this.set(f);return m.set=m,m.update=f=>this.update(f),n(c,m)}};return ce(Ye(new r(t,s),L(h({},i),{onUse:void 0})))}var os=t=>{let e=ve;try{return ve=rs,t()}finally{ve=e}},Hs=({unsubscribe:t})=>t(),Us=({resubscribe:t})=>t(),pt=class extends Fe{#s=!1;#n=!1;#e=0;#t=new Map;#i=e=>os(()=>this.#l(e));constructor(){super(void 0),this[Ce]=!0}#o(e){let s={versionIndex:this.#e,unsubscribe:pe,resubscribe:pe,pending:!1,usedValueIndex:0,value:void 0,valueIndex:0},n=i=>{s.value=i,s.valueIndex++,s.pending=!1,!this.#n&&!this.#r()&&z(()=>this.#a())};return n.next=n,n.pause=()=>{s.pending=!0,this.pauseSubscribers()},n.resume=()=>{s.pending=!1,!this.#n&&!this.#r()&&z(()=>this.#a())},s.resubscribe=()=>{s.unsubscribe=e(n),n[mt]=s.unsubscribe},s.resubscribe(),s}#l(e){let s=this.#t.get(e);return s?(s.versionIndex=this.#e,s.unsubscribe[ee]?.()):(s=this.#o(Qe(e)),this.#t.set(e,s)),s.usedValueIndex=s.valueIndex,s.value}#a(e=!1){this.#s=!0,this.#n=!0;try{if(this.#e>0&&(e&&this.#t.forEach(Us),!this.#c())){this.resumeSubscribers();return}this.#e++;let s=this.#e,n=ve,i;try{ve=this.#i,i=this.compute()}finally{ve=n}this.set(i),this[Ce]=!1;for(let[r,o]of this.#t)o.versionIndex!==s&&(this.#t.delete(r),o.unsubscribe())}finally{this.#n=!1,this.#s=!1}}#r(){for(let[,{pending:e}]of this.#t)if(e)return!0;return!1}#c(){for(let[,{valueIndex:e,usedValueIndex:s}]of this.#t)if(e!=s)return!0;return!1}resumeSubscribers(){this.#r()||super.resumeSubscribers()}[ee](){if(this.#s)throw new Error("recursive computed");let e=0;for(;this.#r();){ht(++e),this.#n=!0;try{for(let[,{pending:s,unsubscribe:n}]of this.#t)s&&n[ee]?.()}finally{this.#n=!1}if(this.#r())break;this.#a()}}onUse(){return this.#a(!0),this[ee](),()=>this.#t.forEach(Hs)}};function a(t,e={}){let s=class extends pt{compute(){return t()}};return ce(Ye(new s,L(h({},e),{onUse:void 0})))}var N=()=>{},Ne=t=>t;var as=t=>({actions:t.actions,api:t.api,directives:t.directives,state$:t.state$,stores:t.stores}),oe=Symbol();function Bs(t){return function(e){z(()=>{var s;for(let[n,i]of Object.entries(e??{}))(s=t[`${n}$`])==null||s.set(i)})}}function Zs(t,e=Le(void 0),s={},n=F(void 0)){let{normalizeValue:i=Ne,equal:r=Object.is}=s,o=()=>t,c=(d,v=o)=>{let y=d===void 0?void 0:i(d);return y===oe?(console.error("Not using invalid value",d),v()):y===void 0?v():y},m=a(()=>c(e()),{equal:r}),f=a(()=>c(n(),m),{equal:r});return $e(f,d=>{if(d!==void 0){let v=i(d);if(v===oe){console.error("Not setting invalid value",d);return}d=v}n.set(d)})}var Me=t=>!!(t&&typeof t=="function"&&"subscribe"in t),we=t=>Me(t)?t:Le(t),Qs=t=>Me(t)?t:F(t),Ks=(t,e)=>{let s={};if(e){let n=Me(e);for(let i of t)s[i]=n?a(()=>e()[i]):we(e[i])}return s};var gt=(t,e,s)=>{let n={},i=Object.keys(t),r=Ks(i,e?.config),o=e?.props;for(let c of i){let m=o?.[c];n[`${c}$`]=Zs(t[c],r[c],s?.[c],Qs(m))}return n},te=(t,e,s)=>{let n=gt(t,e,s);return[n,Bs(n)]},U=t=>{let e=[],s=[],n={};for(let[i,r]of Object.entries(t))i.endsWith("$")&&(e.push(i.substring(0,i.length-1)),s.push(r),n[i]=ce(r));return{stores:n,state$:a(()=>{let i=s.map(Ke),r={};return e.forEach((o,c)=>{r[o]=i[c]}),r})}},ls=(t,e,s=i=>i[0],n=(i,r)=>r===i)=>{let i=e[0]();return $e(ye(e,{derive(r){let o=s(r),c=!n(r[0],o);return c&&e[0].set(o),(c||!n(i,o))&&(i=o,t()(o)),o},equal:n}),e[0].set.bind(e[0]))},Ae=(t,e,s=Ne,n=Xe)=>$e(a(()=>s(t()),{equal:n}),i=>{let r=s(i);n(t(),r)||(t.set(r),e()(r))});var yt=!0?(t=document.body)=>{Te(t)&&t.getBoundingClientRect()}:N,je=(t,e)=>{e&&e.length>0&&t.classList.add(...e)},he=(t,e)=>{e&&e.length>0&&t.classList.remove(...e)};function cs(t,e,s,n){return t.addEventListener(e,s,n),function(){t.removeEventListener(e,s,n)}}var us=t=>t!=null&&t!==!1;function Xs(t,e){let s=new Set;return e.subscribe(n=>{let i=new Set(`${n??""}`.split(" "));i.delete("");let r=t.classList;for(let o of s)i.has(o)||r.remove(o);i.size>0&&r.add(...i),s=i})}function Ys(t,e,s){return s.subscribe(n=>{us(n)?t.setAttribute(e,""+(n===!0?e:n)):t.removeAttribute(e)})}function Gs(t,e,s){return e==="class"?Xs(t,s):Ys(t,e,s)}function Js(t,e,s){return s.subscribe(n=>{let i=t.style;i[e]=""+(us(n)?n:"")})}function en(t,e,s){let n=s.subscribe(i=>{t.classList.toggle(e,i)});return()=>{n(),t.classList.remove(e)}}var li=Symbol("attributesAndStyle");var Te=!0?t=>{var e;let s=((e=t?.ownerDocument)==null?void 0:e.defaultView)??window;return t instanceof s.HTMLElement}:t=>!1,tn=!0?t=>(e,s)=>{if(Te(e))return t(e,s)}:t=>()=>{},sn=(t,e)=>s=>{let n=!0,i,r=e.subscribe(o=>{var c;n?(n=!1,i=t(s,o)):(c=i?.update)==null||c.call(i,o)});return{destroy(){var o;(o=i?.destroy)==null||o.call(i),r()}}},nn=Le(void 0),ds=t=>sn(t,nn);var Ge=(t,e=!0)=>()=>{let s=t.subscribe(N);return{destroy:()=>J(void 0,null,function*(){e&&(yield 0),s()})}},fs=t=>(e,s)=>(t(s),{update:t}),rn={equal:Object.is};var wt=()=>{let t=F(null,rn);return{element$:ce(t),directive:e=>{let s=!1;return t.update(n=>n?(console.error("The directive cannot be used on multiple elements.",n,e),n):(s=!0,e)),s?{destroy(){t.update(n=>e===n?null:n)}}:void 0}}},Pe=()=>{let{directive:t,element$:e}=wt();return{directive:tn(t),element$:e}},Ve=(...t)=>(e,s)=>{let n=z(()=>t.map(i=>i(e,s)));return{update(i){z(()=>n.forEach(r=>{var o;return(o=r?.update)==null?void 0:o.call(r,i)}))},destroy(){z(()=>n.reverse().forEach(i=>{var r;return(r=i?.destroy)==null?void 0:r.call(i)}))}}};var P=t=>(e,s)=>{let n=[],i=F(s),{events:r,attributes:o,styles:c,classNames:m}=t(i);if(Te(e))for(let[f,d]of Object.entries(r??{}))typeof d=="function"?n.push(cs(e,f,d)):n.push(cs(e,f,d.handler,d.options));for(let[f,d]of Object.entries(o??{}))d!=null&&n.push(Gs(e,f,we(d)));for(let[f,d]of Object.entries(c??{}))d&&n.push(Js(e,f,we(d)));for(let[f,d]of Object.entries(m??{}))n.push(en(e,f,we(d)));return{update:f=>i.set(f),destroy:()=>n.forEach(f=>f())}};var ci=P(t=>({attributes:{class:t}}));var Dt=(t,e)=>{let s,n=new Promise(o=>s=o),i=()=>{t.removeEventListener(e,r),i=N},r=o=>{o.target===t&&(s(o),i())};return t.addEventListener(e,r),{promise:n,unsubscribe(){i()}}},ps=t=>{let e;return{promise:new Promise(s=>{e=setTimeout(()=>{e=void 0,s()},t)}),unsubscribe(){e&&(clearTimeout(e),e=void 0)}}},xt=()=>{let t;return{promise:new Promise(s=>{t=s}),resolve:t}};function on(t){return window.getComputedStyle(t).transitionProperty!=="none"}function an(t){let{transitionDelay:e,transitionDuration:s}=window.getComputedStyle(t),n=parseFloat(e),i=parseFloat(s);return(n+i)*1e3}var ms=t=>(e,s,n,i,r)=>J(void 0,null,function*(){let o=t(e,s,n,r)??N;if(Te(e)&&n&&on(e)){let c=Dt(i,"abort"),m=Dt(e,"transitionend"),f=ps(an(e));yield Promise.race([c.promise,m.promise,f.promise]),c.unsubscribe(),m.unsubscribe(),f.unsubscribe()}i.aborted||o()});var xi=t=>{let{animationPendingClasses:e,animationPendingShowClasses:s,animationPendingHideClasses:n,showClasses:i,hideClasses:r}=t;return ms((o,c,m,f)=>{if(he(o,i),he(o,r),m){if(he(o,c==="show"?n:s),!f.started){f.started=!0;let d=c==="show"?r:i;je(o,d),yt(o),he(o,d)}je(o,e),yt(o),je(o,c==="show"?s:n)}return()=>{he(o,e),he(o,s),he(o,n),je(o,c==="show"?i:r)}})};var bs=(t,e,s,n)=>i=>{let r=gt(e,i,s),o=i?.config,c=Me(o)?a(()=>h(h({},n),o())):h(h({},n),o??{}),m=t({props:i?.props,config:c});return L(h(h({},m),U(h(h({},m.stores),r))),{patch:f=>z(()=>{let d;for(let[v,y]of Object.entries(f??{})){let b=r[`${v}$`];b?b.set(y):(d||(d={}),d[v]=y)}d&&m.patch(d)})})};function ze(t){return typeof t=="number"&&!isNaN(t)&&Number.isFinite(t)}function hs(t){return t===!0||t===!1}function ln(t){return typeof t=="function"}function cn(t){return typeof t=="string"}var un=Array.isArray;function ge(t,e,s=0){return Math.max(Math.min(t,e),s)}var dn=t=>t instanceof HTMLElement,gs=t=>e=>e===null||t(e),De=t=>e=>t(e)?e:oe,vs=De(ze),B={normalizeValue:vs};function Je(t,e,s={}){let{strict:n=!1,useClamp:i=!0}=s;return{normalizeValue:r=>{let o=vs(r);return o!==oe&&(!n&&i&&(o=ge(o,e,t)),o>=t&&o<=e&&(!n||o!==t&&o!==e))?o:oe}}}var O={normalizeValue:De(hs)},ys={normalizeValue:De(gs(hs))},W={normalizeValue:De(cn)},R={normalizeValue:De(ln),equal:Object.is},Pi={normalizeValue:De(gs(dn)),equal:Object.is},St={normalizeValue:De(un),equal:(t,e)=>t===e?!0:t?.length!==e?.length?!1:t.every((s,n)=>s===e[n])};var ws=new Promise(N),fn=(t,e)=>J(void 0,null,function*(){t.style.display=e==="show"?"":"none"}),pn={animated:!0,animatedOnInit:!1,initDone:null,visible:!0,transition:fn,onShown:N,onHidden:N,onVisibleChange:N},mn={animated:O,animatedOnInit:O,visible:O,transition:R,onShown:R,onHidden:R,onVisibleChange:R,initDone:ys},Ds=t=>{let[{animated$:e,initDone$:s,visible$:n,transition$:i,onShown$:r,onHidden$:o,onVisibleChange$:c,animatedOnInit$:m},f]=te(pn,t,mn),{element$:d,directive:v}=wt(),y=a(()=>!!d()),b=ls(c,[n],([C])=>C),I=F(null),Z=a(()=>!!I()),A=()=>{let C;return I.update(p=>(p?.abort.abort(),C=p?.context,null)),C},w=(C,p,D,k)=>z(()=>{let me=new AbortController,Y=me.signal,le=A()??{},{promise:be,resolve:Oe}=xt(),xe={abort:me,animated:p,visible:C,context:le,element:D,transitionFn:k,promise:be};return I.set(xe),Oe(J(void 0,null,function*(){var ue;try{yield k(D,C?"show":"hide",p,Y,le)}finally{Y.aborted?yield ws:(I.set(null),(ue=(C?r:o)())==null||ue())}})),xe}),_=a(()=>!Z()&&b()&&y()),M=a(()=>!Z()&&!b()),T=a(()=>s()?e():m()),V=F(null),Q,q=n(),j=null,X=ye([b,d,T,V,i,I],([C,p,D,k,me,Y])=>{let le=Q!==p;Q=p;let be=q!==C;if(q=C,p){s()==null&&s.set(!0);let Oe=k!=null&&Y&&Y.animated!=k;if(le||be||Oe){(be||k!=null)&&(j=null);let xe=k??j?.animated??(le&&!C?!1:D);Y=w(C,xe,p,me),j?.resolve(Y.promise),j=null}}else le&&(A(),Y=null),(be||C&&j?.animated!==k)&&(j=C&&k!=null?h({animated:k},xt()):null);return j?.promise??Y?.promise}),H={},S=(...D)=>J(void 0,[...D],function*(C=!n(),p=T()){let k={};H=k;try{yield z(()=>{try{return V.set(p),n.set(C),X()}finally{V.set(null)}})}finally{H!==k&&(yield ws)}}),ae=Ve(v,fs(f),Ge(X));return L(h({},U({visible$:b,element$:d,elementPresent$:y,transitioning$:Z,shown$:_,hidden$:M})),{patch:f,directives:{directive:ae},actions:{},api:{show:S.bind(null,!0),hide:S.bind(null,!1),toggle:S}})};var bn={visible:!0,dismissible:!0,ariaCloseButtonLabel:"Close",onVisibleChange:N,onShown:N,onHidden:N,animated:!0,animatedOnInit:!1,transition:()=>J(void 0,null,function*(){}),className:""};var hn={dismissible:O};function et(t){let[Z,...A]=te(bn,t,hn),w=Z,{transition$:e,animatedOnInit$:s,animated$:n,visible$:i,onVisibleChange$:r,onHidden$:o,onShown$:c}=w,m=G(w,["transition$","animatedOnInit$","animated$","visible$","onVisibleChange$","onHidden$","onShown$"]),[f]=A,d=Ds({props:{transition:e,visible:i,animated:n,animatedOnInit:s,onVisibleChange:r,onHidden:o,onShown:c}}),v=()=>{f({visible:!1})},y=()=>{f({visible:!0})},b=d.stores.visible$,I=d.stores.hidden$;return L(h({},U(L(h({},m),{visible$:b,hidden$:I}))),{patch:f,api:{open:y,close:v},directives:{transitionDirective:ds(d.directives.directive)},actions:{}})}var vn={autoHide:!0,delay:5e3},yn={autoHide:O,delay:Je(0,1/0,{strict:!0})};function wn(t){let e,s=bs(et,vn,yn)(t),n=a(()=>{clearTimeout(e),s.stores.autoHide$()&&(e=setTimeout(()=>s.api.close(),s.stores.delay$()))}),i=P(()=>({attributes:{role:"alert","aria-atomic":"true",class:a(()=>s.stores.className$())},classNames:{"au-toast":!0,toast:!0}})),r=P(()=>({attributes:{type:"button","aria-label":a(()=>s.stores.ariaCloseButtonLabel$())},events:{click:s.api.close}}));return L(h({},s),{directives:L(h({},s.directives),{autoHideDirective:Ge(n),bodyDirective:i,closeButtonDirective:r})})}var xs=()=>{let{element$:t,directive:e}=Pe();return{dimensions$:ye(t,(n,i)=>{if(n===null)return N;let r=new ResizeObserver(o=>{i(o[0])});return r.observe(n),()=>r?.disconnect()},void 0),directive:e}};var Dn=/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/;function Ct(t){var e;let s=(""+t).match(Dn);return Math.max(0,(((e=s[1])==null?void 0:e.length)??0)-(+s[2]||0))}var $t={min:0,max:100,stepSize:1,readonly:!1,disabled:!1,vertical:!1,className:"",ariaLabelHandle:t=>""+t,ariaValueText:t=>""+t,onValuesChange:N,values:[0],showValueLabels:!0,showMinMaxLabels:!0,rtl:!1};var xn={min:B,max:B,stepSize:Je(0,1/0,{strict:!0}),readonly:O,disabled:O,vertical:O,ariaLabelHandle:R,ariaValueText:R,onValuesChange:R,values:St,showValueLabels:O,showMinMaxLabels:O,rtl:O},Sn=(t,e,s,n,i)=>{let r=Math.pow(10,i);if(t>=s)return s;if(t<=e)return e;let o=Math.floor((t-e)*r/n);return+(((t-e)*r%n<n/2?o:o+1)*n/r+e).toFixed(i)},tt=(t,e,s,n)=>{e.update(i=>(i=[...i],i[t]=i[t]+s*n,i))},st=(t,e,s)=>t&&e?s?1:-1:t&&!e?-1:!t&&e?s?-1:1:!t&&!e?-1:1,se=t=>t!=null?`${t}%`:"";function Cn(t){let[Un,...Fs]=te($t,t,xn),Rt=Un,{min$:e,max$:s,stepSize$:n,rtl$:i,values$:r,ariaLabelHandle$:o,ariaValueText$:c,onValuesChange$:m,showValueLabels$:f,showMinMaxLabels$:d}=Rt,v=G(Rt,["min$","max$","stepSize$","rtl$","values$","ariaLabelHandle$","ariaValueText$","onValuesChange$","showValueLabels$","showMinMaxLabels$"]),[y]=Fs,{vertical$:b,disabled$:I,readonly$:Z}=v,A=-1,w=a(()=>{let l=e(),u=s();return l===u?$t.min:Math.min(l,u)}),_=a(()=>{let l=e(),u=s();return l===u?$t.max:Math.max(l,u)}),M=a(()=>Math.max(Ct(n()),Ct(w()),Ct(_()))),T=a(()=>n()*Math.pow(10,M())),V=Ae(r,m,l=>{let u=w(),g=_(),$=T(),x=M();return l.map(E=>Sn(E,u,g,$,x))},St.equal),{directive:Q,element$:q}=Pe(),{directive:j,element$:X}=Pe(),{directive:H,element$:S}=Pe(),{directive:ae,dimensions$:C}=xs(),p=F({}),D=a(()=>{var l;return C(),p(),((l=q())==null?void 0:l.getBoundingClientRect())??{}},{equal:Object.is}),k=a(()=>{var l;return C(),p(),((l=X())==null?void 0:l.getBoundingClientRect())??{}},{equal:(l,u)=>Object.is(l,u)}),me=a(()=>{var l;return C(),p(),((l=S())==null?void 0:l.getBoundingClientRect())??{}},{equal:(l,u)=>Object.is(l,u)}),Y=a(()=>b()?D().top:D().left),le=a(()=>b()?D().height:D().width),be=a(()=>[...V()].sort((l,u)=>l-u)),Oe=a(()=>V().map((l,u)=>({id:u,value:l})).sort((l,u)=>l.value-u.value)),xe=a(()=>{let l=o(),u=c();return Oe().map((g,$)=>L(h({},g),{ariaLabel:l(g.value,$,g.id),ariaValueText:u(g.value,$,g.id)}))}),ue=a(()=>V().map(l=>Rs(l))),it=a(()=>[...ue()].sort((l,u)=>l-u)),As=a(()=>k().width/le()*100),Ps=a(()=>me().width/le()*100),At=a(()=>{if(d()){if(!f())return!0}else return!1;let l=As();return i()?!ue().some(u=>100-u>100-l-1):!ue().some(u=>u<l+1)}),Pt=a(()=>{if(d()){if(!f())return!0}else return!1;let l=Ps();return i()?!ue().some(u=>100-u<l+1):!ue().some(u=>u>100-l-1)}),Vs=a(()=>{let l=V();return l.length==2&&Math.abs(l[0]-l[1])<10}),Re=a(()=>!I()&&!Z()),Vt=a(()=>{let l=it(),u=(l[0]+l[1])/2;return b()||l.length!=2?0:i()?100-u:u}),Ot=a(()=>{let l=it(),u=100-(l[0]+l[1])/2;return b()&&l.length==2?i()?100-u:u:0}),Ie=a(()=>{let l=b(),u=i();return ue().map((g,$)=>({left:u?l?null:100-g:l?null:g,top:u?l?g:null:l?100-g:null}))}),Os=a(()=>{let l=b(),u=it(),g=i();return u.length===1?[{left:l||g?null:0,right:l?null:g?0:null,bottom:l?g?null:0:null,top:l&&g?0:null,width:l?100:u[0],height:l?u[0]:100}]:u.map(($,x,E)=>({left:l||g?null:$,right:l?null:g?E[x]:null,bottom:l?g?null:$:null,top:l&&g?E[x]:null,width:l?100:x===E.length-1?$:E[x+1]-$,height:l?x===E.length-1?$:E[x+1]-$:100})).slice(0,u.length-1)}),Rs=l=>{let u=w();return(l-u)*100/(_()-u)},Is=l=>{let u=V();if(u.length===1)return 0;let g=be(),$=g.find(ie=>ie>l*100),x=$?g.indexOf($):g.length-1,E=g[x-1]+(g[x]-g[x-1])/2,ke=g[l*100<=E?x-1:x];return u.indexOf(ke)},rt=(l,u)=>{if(Re()){let g=le(),$=Y(),x=b()?(g-l+$)/g:(l-$)/g;x=i()?1-x:x;let E=u??Is(x),ke=x*(_()-w())+w();V.update(ie=>(ie=[...ie],ie[E]=ke,ie))}},ne=a(()=>!b()),_s=P(()=>({attributes:{"aria-disabled":a(()=>I()?"true":void 0),class:v.className$},classNames:{"au-slider":!0,"au-slider-vertical":b,"au-slider-horizontal":ne,disabled:I}})),ks=P(()=>({classNames:{"au-slider-label-vertical":b,"au-slider-label-vertical-min":b,"au-slider-label":ne,"au-slider-label-min":ne,"au-slider-rtl":i,invisible:a(()=>!At())}})),Es=P(()=>({classNames:{"au-slider-label-vertical":b,"au-slider-label-vertical-max":b,"au-slider-label":ne,"au-slider-label-max":ne,"au-slider-rtl":i,invisible:a(()=>!Pt())}})),_e=L(h({},U(h({min$:w,max$:_,stepSize$:n,values$:V,sortedValues$:be,sortedHandles$:xe,minValueLabelDisplay$:At,maxValueLabelDisplay$:Pt,combinedLabelDisplay$:Vs,interactive$:Re,combinedLabelPositionLeft$:Vt,combinedLabelPositionTop$:Ot,progressDisplayOptions$:Os,handleDisplayOptions$:Ie,showValueLabels$:f,showMinMaxLabels$:d,rtl$:i},v))),{patch:y,api:{},directives:{sliderDirective:Ve(Q,ae,_s),progressDisplayDirective:P(l=>({styles:{left:a(()=>se(l().option.left)),right:a(()=>se(l().option.right)),top:a(()=>se(l().option.top)),bottom:a(()=>se(l().option.bottom)),width:a(()=>se(l().option.width)),height:a(()=>se(l().option.height))},classNames:{"au-slider-progress":!0}})),clickableAreaDirective:P(()=>({events:{click:l=>_e.actions.click(l)},classNames:{"au-slider-clickable-area":ne,"au-slider-clickable-area-vertical":b}})),handleDirective:P(l=>({events:{keydown:u=>_e.actions.keydown(u,l().item.id),mousedown:u=>_e.actions.mouseDown(u,l().item.id),touchstart:u=>_e.actions.touchStart(u,l().item.id)},attributes:{role:"slider","aria-valuemin":w,"aria-valuemax":_,"aria-valuenow":a(()=>l().item.value),"aria-valuetext":a(()=>l().item.ariaValueText),"aria-label":a(()=>l().item.ariaLabel),"aria-orientation":a(()=>b()?"vertical":void 0),"aria-disabled":a(()=>I()?"true":void 0),disabled:I,"aria-readonly":a(()=>Z()?"true":void 0)},styles:{left:a(()=>se(Ie()[l().item.id].left)),top:a(()=>se(Ie()[l().item.id].top))},classNames:{"au-slider-handle":!0,"au-slider-handle-vertical":b,"au-slider-handle-horizontal":ne}})),minLabelDirective:Ve(j,ks),maxLabelDirective:Ve(H,Es),combinedHandleLabelDisplayDirective:P(()=>({classNames:{"au-slider-label-vertical":b,"au-slider-label-vertical-now":b,"au-slider-label":ne,"au-slider-label-now":ne},styles:{left:a(()=>se(Vt())),top:a(()=>se(Ot()))}})),handleLabelDisplayDirective:P(l=>({classNames:{"au-slider-label-vertical":b,"au-slider-label-vertical-now":b,"au-slider-label":ne,"au-slider-label-now":ne},styles:{left:a(()=>se(Ie()[l().index].left)),top:a(()=>se(Ie()[l().index].top))}}))},actions:{click(l){rt(b()?l.clientY:l.clientX)},keydown(l,u){let{key:g}=l,$=i(),x=n(),E=w(),ke=_(),ie=b();if(Re()){switch(g){case"ArrowDown":tt(u,V,x,st(ie,$,!0));break;case"ArrowLeft":tt(u,V,x,st(ie,$,!1));break;case"ArrowUp":tt(u,V,x,-1*st(ie,$,!0));break;case"ArrowRight":tt(u,V,x,-1*st(ie,$,!1));break;case"Home":V.update(de=>(de=[...de],de[u]=E,de));break;case"End":V.update(de=>(de=[...de],de[u]=ke,de));break;case"PageUp":break;case"PageDown":break;default:return}l.preventDefault(),l.stopPropagation()}},mouseDown(l,u){l.preventDefault();let g=l.target,$=x=>{x.preventDefault();let E=b()?x.clientY:x.clientX;g.focus(),A!==E&&(A=E,rt(E,u))};Re()&&(p.set({}),g.focus(),document.addEventListener("mousemove",$),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",$)},{once:!0}))},touchStart(l,u){l.preventDefault();let g=$=>{$.preventDefault();let x=b()?$.touches[0].clientY:$.touches[0].clientX;l.target.focus(),A!==x&&(A=x,rt(x,u))};Re()&&(p.set({}),l.target.focus(),document.addEventListener("touchmove",g,{passive:!1}),document.addEventListener("touchend",()=>{document.removeEventListener("touchmove",g),document.removeEventListener("touchcancel",g)},{once:!0}),document.addEventListener("touchcancel",()=>{document.removeEventListener("touchmove",g),document.removeEventListener("touchend",g)},{once:!0}))}}});return _e}var $n={rating:0,tabindex:0,maxRating:10,disabled:!1,readonly:!1,resettable:!0,ariaValueTextFn:(t,e)=>`${t} out of ${e}`,onHover:N,onLeave:N,onRatingChange:N,className:"",ariaLabel:"Rating",ariaLabelledBy:""};var Ln={rating:B,tabindex:B,maxRating:{normalizeValue:t=>ze(t)?Math.max(0,t):oe},disabled:O,readonly:O,resettable:O,ariaValueTextFn:R,onHover:R,onLeave:R,onRatingChange:R,className:W,ariaLabel:W,ariaLabelledBy:W};function Nn(t){let[j,...X]=te($n,t,Ln),H=j,{rating$:e,tabindex$:s,ariaValueTextFn$:n,onHover$:i,onLeave$:r,onRatingChange$:o}=H,c=G(H,["rating$","tabindex$","ariaValueTextFn$","onHover$","onLeave$","onRatingChange$"]),[m]=X,{ariaLabel$:f,ariaLabelledBy$:d,className$:v,disabled$:y,maxRating$:b,readonly$:I,resettable$:Z}=c,A=a(()=>y()?-1:s()),w=Ae(e,o,S=>ge(S,b())),_=F(0),M=a(()=>!y()&&!I()),T=a(()=>{let S=_();return S!==0?S:w()}),V=a(()=>n()(T(),b())),Q=a(()=>{let S=T();return Array.from({length:b()},(ae,C)=>({fill:Math.round(Math.max(Math.min(S-C,1),0)*100),index:C}))}),q=L(h({},U(h({ariaValueText$:V,interactive$:M,rating$:w,stars$:Q,tabindex$:A,visibleRating$:T},c))),{patch:m,actions:{click:S=>{M()&&S>0&&S<=b()&&w.update(ae=>ae===S&&Z()?0:S)},hover:S=>{M()&&S>0&&S<=b()&&(_.set(S),i()(S))},leave:()=>{M()&&(r()(_()),_.set(0))},handleKey(S){if(M()){let{key:ae}=S;switch(ae){case"ArrowLeft":case"ArrowDown":w.update(C=>C-1);break;case"ArrowRight":case"ArrowUp":w.update(C=>C+1);break;case"Home":case"PageDown":w.set(0);break;case"End":case"PageUp":w.set(b());break;default:return}S.preventDefault(),S.stopPropagation()}}},directives:{containerDirective:P(()=>({events:{keydown:S=>q.actions.handleKey(S),mouseleave:()=>q.actions.leave()},attributes:{role:"slider",class:v,"aria-valuemin":0,tabindex:A,"aria-valuemax":b,"aria-valuenow":T,"aria-valuetext":V,"aria-readonly":a(()=>I()?"true":void 0),"aria-disabled":a(()=>y()?"true":void 0),"aria-label":f,"aria-labelledby":a(()=>d()||void 0)},classNames:{"au-rating":!0}})),starDirective:P(S=>({events:{mouseenter:()=>q.actions.hover(S().index+1),click:()=>q.actions.click(S().index+1)},styles:{cursor:a(()=>M()?"pointer":"default")},classNames:{"au-rating-star":!0}}))},api:{}});return q}var An={min:0,max:100,value:0,ariaLabel:"Progressbar",className:"",ariaValueTextFn:()=>{}};var Pn={min:B,max:B,value:B,ariaLabel:W,className:W,ariaValueTextFn:R};function Vn(t){let[I,...Z]=te(An,t,Pn),A=I,{max$:e,value$:s,min$:n,ariaValueTextFn$:i,ariaLabel$:r}=A,o=G(A,["max$","value$","min$","ariaValueTextFn$","ariaLabel$"]),[c]=Z,m=a(()=>Math.max(n(),e())),f=a(()=>ge(s(),m(),n())),d=a(()=>{let w=m(),_=n();return w>_?ge((f()-_)*100/(w-_),100,0):0}),v=a(()=>f()>n()),y=a(()=>f()===m()),b=a(()=>i()(f(),n(),m()));return L(h({},U(h({min$:n,max$:m,value$:f,percentage$:d,started$:v,finished$:y,ariaValueText$:b,ariaLabel$:r},o))),{patch:c,api:{},directives:{ariaDirective:P(()=>({attributes:{role:"progressbar","aria-label":r,"aria-valuenow":f,"aria-valuemin":n,"aria-valuemax":m,"aria-valuetext":b}}))},actions:{}})}var Ss="#",On={page:1,collectionSize:0,pageSize:10,disabled:!1,directionLinks:!0,boundaryLinks:!1,size:null,onPageChange:N,pagesFactory:(t,e)=>{let s=[];for(let n=1;n<=e;n++)s.push(n);return s},ariaLabel:"Page navigation",activeLabel:"(current)",ariaPageLabel:(t,e)=>`Page ${t} of ${e}`,ariaFirstLabel:"Action link for first page",ariaPreviousLabel:"Action link for previous page",ariaNextLabel:"Action link for next page",ariaLastLabel:"Action link for last page",ariaEllipsisLabel:"Ellipsis page element",ariaLiveLabel:(t,e)=>`Current page is ${t}`,className:"",pageLink:t=>Ss};var Rn={page:B,collectionSize:B,pageSize:B,disabled:O,directionLinks:O,boundaryLinks:O,size:{normalizeValue:t=>t==="lg"||t==="sm"||t===null?t:oe},onPageChange:R,pagesFactory:R,ariaLabel:W,activeLabel:W,ariaPageLabel:R,ariaFirstLabel:W,ariaPreviousLabel:W,ariaNextLabel:W,ariaLastLabel:W,ariaLiveLabel:R,className:W,pageLink:R};function In(t){let[S,...ae]=te(On,t,Rn),C=S,{page$:e,collectionSize$:s,pageSize$:n,onPageChange$:i,pagesFactory$:r,ariaPageLabel$:o,ariaLiveLabel$:c,pageLink$:m,disabled$:f,ariaFirstLabel$:d,ariaLastLabel$:v,ariaNextLabel$:y,ariaPreviousLabel$:b}=C,I=G(C,["page$","collectionSize$","pageSize$","onPageChange$","pagesFactory$","ariaPageLabel$","ariaLiveLabel$","pageLink$","disabled$","ariaFirstLabel$","ariaLastLabel$","ariaNextLabel$","ariaPreviousLabel$"]),[Z]=ae,A=a(()=>{let p=Math.ceil(s()/n());return(!ze(p)||p<1)&&(p=1),p}),w=Ae(e,i,p=>ge(p,A(),1)),_=a(()=>r()(w(),A())),M=a(()=>w()===A()||f()),T=a(()=>w()===1||f()),V=a(()=>{let p=o(),D=A();return _().map(k=>p(k,D))}),Q=a(()=>{let p=m(),D=A();return Array.from({length:D},(k,me)=>p(me+1))}),q=a(()=>{let p=Q(),D=w()-1;return{previous:p.at(D>0?D-1:0),next:p.at(D+1)??p.at(-1)}}),j=a(()=>c()(w(),A()));function X(p,D,k){Q()[p-1]===Ss&&D?.preventDefault(),(!D||!(D.ctrlKey||D.metaKey))&&(D?.preventDefault(),k?w.update(k):w.set(p))}let H=L(h({},U(h({pageCount$:A,page$:w,pages$:_,nextDisabled$:M,previousDisabled$:T,pagesLabel$:V,pagesHrefs$:Q,directionsHrefs$:q,disabled$:f,ariaFirstLabel$:d,ariaLastLabel$:v,ariaNextLabel$:y,ariaPreviousLabel$:b,ariaLiveLabelText$:j},I))),{patch:Z,actions:{select(p,D){X(p,D)},first(p){X(1,p)},previous(p){X(w()-1,p,D=>D-1)},next(p){X(w()+1,p,D=>D+1)},last(p){X(A(),p)}},api:{},directives:{pageLink:P(p=>({events:{click:D=>H.actions.select(p().page,D)},attributes:{"aria-current":a(()=>w()===p().page?"page":void 0),"aria-label":a(()=>V()[p().page-1]),href:a(()=>Q()[p().page-1]),tabindex:a(()=>f()?"-1":void 0),"aria-disabled":a(()=>f()?"true":void 0)},classNames:{"au-page":!0}})),pageFirst:P(()=>({events:{click:p=>H.actions.first(p)},attributes:{"aria-label":d,href:a(()=>Q()[0]),tabindex:a(()=>T()?"-1":void 0),"aria-disabled":a(()=>T()?"true":void 0)},classNames:{"au-first":!0}})),pagePrev:P(()=>({events:{click:p=>H.actions.previous(p)},attributes:{"aria-label":b,href:a(()=>q().previous),tabindex:a(()=>T()?"-1":void 0),"aria-disabled":a(()=>T()?"true":void 0)},classNames:{"au-previous":!0}})),pageNext:P(()=>({events:{click:p=>H.actions.next(p)},attributes:{"aria-label":y,href:a(()=>q().next),tabindex:a(()=>M()?"-1":void 0),"aria-disabled":a(()=>M()?"true":void 0)},classNames:{"au-next":!0}})),pageLast:P(()=>({events:{click:p=>H.actions.last(p)},attributes:{"aria-label":v,href:a(()=>Q().at(-1)),tabindex:a(()=>M()?"-1":void 0),"aria-disabled":a(()=>M()?"true":void 0)},classNames:{"au-last":!0}}))}});return H}var _n=et;var nt=(t,e,s=1/0)=>{if(e!==void 0)if(typeof e=="object"&&e&&s>=1){t||(t={});for(let n of Object.keys(e))Object.prototype.hasOwnProperty.call(e,n)&&(n==="__proto__"||n==="constructor"||(t[n]=nt(t[n],e[n],s-1)))}else return e;return t},Cs=(t,e=Ne)=>{let s=F({}),n=e===Ne?t:a(()=>e(nt({},t?.(),2)));return $e(a(()=>nt(nt({},n?.(),2),s(),2)),L(h({},s),{own$:s,adaptedParent$:n,parent$:t}))};var $s=()=>{},Ls=t=>t,Lt=t=>e=>{if(!e||typeof e!="object")return e;let s={};for(let n of Object.keys(e))s[n]=t(e[n]);return s},kn=(t,e)=>s=>e(typeof s=="function"?(...n)=>t(s(...n)):s),Ns=(()=>{var e,s,n,i;let r=class r{constructor(){Se(this,e,void 0);Se(this,s,void 0);Se(this,n,void 0);Se(this,i,void 0);fe(this,e,K(ct)),fe(this,s,re(this,e).run(()=>ct.isInAngularZone())),fe(this,n,!1),fe(this,i,!1),this.planNgZoneRun=re(this,s)?()=>{re(this,e).isStable&&(fe(this,n,!0),re(this,i)||(fe(this,i,!0),J(this,null,function*(){yield 0,fe(this,i,!1),re(this,n)&&this.ngZoneRun($s)})))}:$s,this.insideNgZone=re(this,s)?c=>typeof c=="function"?(...m)=>this.ngZoneRun(()=>c(...m)):c:Ls,this.insideNgZoneWrapFunctionsObject=Lt(this.insideNgZone),this.outsideNgZone=re(this,s)?c=>typeof c=="function"?(...m)=>re(this,e).runOutsideAngular(()=>c(...m)):c:Ls,this.outsideNgZoneWrapFunctionsObject=Lt(this.outsideNgZone),this.outsideNgZoneWrapDirective=kn(this.outsideNgZoneWrapFunctionsObject,this.outsideNgZone),this.outsideNgZoneWrapDirectivesObject=Lt(this.outsideNgZoneWrapDirective)}ngZoneRun(c){return fe(this,n,!1),re(this,e).run(c)}};e=new WeakMap,s=new WeakMap,n=new WeakMap,i=new WeakMap,r.\u0275fac=function(m){return new(m||r)},r.\u0275prov=It({token:r,factory:r.\u0275fac,providedIn:"root"});let t=r;return t})(),En=t=>{let e=K(Ns),s=Wt(void 0,{equal:()=>!1}),n=e.outsideNgZone(t.subscribe)(i=>{s.set(i),e.planNgZoneRun()});return K(lt).onDestroy(e.outsideNgZone(n)),s},Fn=(t,e)=>{let s=K(qe),n=K(jt),i=K(Tt),r,o=!1,c=Gt(i)?()=>{r=t?.(n.nativeElement,e)}:()=>{o||!t||(o=!0,We(s,()=>{zt(()=>{o=!1,r=t?.(n.nativeElement,e)})}))};function m(){let d=r;r=void 0,t=void 0,d?.destroy?.()}K(lt).onDestroy(m);function f(d,v){d!==t?(m(),t=d,e=v,c()):v!=e&&(e=v,r?.update?.(e))}return c(),{update:f}},xo=(()=>{var e;let s=class s{constructor(){Se(this,e,Fn())}ngOnChanges(){let i=this.use,[r,o]=Array.isArray(i)?i:[i];re(this,e).update(r,o)}};e=new WeakMap,s.\u0275fac=function(r){return new(r||s)},s.\u0275dir=ot({type:s,selectors:[["","auUse",""]],inputs:{use:[Ft.None,"auUse","use"]},standalone:!0,features:[at]});let t=s;return t})();var Nt=class{constructor(e,s){this.component=e,this.templateProp=s}};var Mn=t=>{let e={};return s=>{let n={},i=!1;for(let r of Object.keys(s)){let o=s[r];o!=null&&(n[r]=o),o!=e[r]&&(i=!0)}i&&(e=n,t(n))}},jn=({factory:t,defaultConfig:e,widgetConfig:s,events:n,afterInit:i})=>{let r=K(qe),o=F({}),c={},m,f={initialized:new Promise(d=>{m=d}),patchSlots:Mn(o.set),patch(d){Object.assign(c,d)},ngInit(){We(r,()=>{let d=K(Ns);t=d.outsideNgZone(t);let v=we(e);n=d.insideNgZoneWrapFunctionsObject(n);let y=t({config:a(()=>h(h(h(h({},v()),s?.()),o()),n)),props:c}),b=L(h({},y),{patch:d.outsideNgZone(y.patch),directives:d.outsideNgZoneWrapDirectivesObject(y.directives),actions:d.outsideNgZoneWrapFunctionsObject(y.actions),api:d.outsideNgZoneWrapFunctionsObject(y.api)});Object.assign(f,b,{widget:as(b),ngState:En(b.state$)}),i?.(),m()})}};return f};function Tn(t,e){let s={};for(let[n,i]of Object.entries(e))i!==void 0&&(s[n]=i.currentValue);t(s)}var So=(()=>{let e=class e{get api(){return this._widget.api}get state(){return this._widget.ngState}get widget(){return this._widget.widget}ngOnChanges(n){Tn(this._widget.patch,n)}ngOnInit(){this._widget.ngInit()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275dir=ot({type:e,features:[at]});let t=e;return t})(),zn=(t=new _t("widgetsConfig"))=>{let e=r=>({provide:t,useFactory:o=>{if(r){let c=K(qe),m=r;r=f=>We(c,()=>m(f))}return Cs(o??void 0,r)},deps:[[new Et,new kt,t]]}),s=r=>{let o=K(t);return r&&o.set(r),o},n=r=>{let o=K(t,{optional:!0});return a(()=>o?.()[r])};return{widgetsConfigInjectionToken:t,provideWidgetsConfig:e,injectWidgetsConfig:s,injectWidgetConfig:n,callWidgetFactory:({factory:r,widgetName:o=null,defaultConfig:c={},events:m,afterInit:f})=>jn({factory:r,widgetConfig:o?n(o):null,defaultConfig:c,events:m,afterInit:f})}},{widgetsConfigInjectionToken:Co,provideWidgetsConfig:$o,injectWidgetConfig:Lo,injectWidgetsConfig:No,callWidgetFactory:Ao}=zn();function Po(t){if(t!==void 0)return Xt(t)}function Vo(t){if(t!==void 0)return Yt(t)}var Wn=["text"];function qn(t,e){if(t&1&&Zt(0),t&2){let s=e.content;Qt(s)}}var Hn=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=Mt({type:e,selectors:[["ng-component"]],viewQuery:function(i,r){if(i&1&&Ht(Wn,7),i&2){let o;Ut(o=Bt())&&(r.text=o.first)}},decls:2,vars:0,consts:[["text",""]],template:function(i,r){i&1&&qt(0,qn,1,1,"ng-template",null,0,Kt)},encapsulation:2});let t=e;return t})(),Oo=new Nt(Hn,"text");export{xi as a,wn as b,Cn as c,Nn as d,Vn as e,In as f,_n as g,xo as h,So as i,Ao as j,Po as k,Vo as l};