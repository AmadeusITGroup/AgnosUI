import{$ as L,Ma as l,O as I,Q as u,Qa as p,R as M,Ra as P,T as h,Tb as N,Ub as k,V as c,W as d,_b as m,aa as D,ba as B,dc as C,ga as O,oa as R,sa as g,wa as T}from"./chunk-L7M7XINM.js";var j=null;function F(){return j}function Ze(n){j??=n}var $=class{};var b=new h(""),_=(()=>{class n{historyGo(e){throw new Error("")}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=u({token:n,factory:()=>d(H),providedIn:"platform"})}}return n})(),We=new h(""),H=(()=>{class n extends _{constructor(){super(),this._doc=d(b),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return F().getBaseHref(this._doc)}onPopState(e){let t=F().getGlobalEventTarget(this._doc,"window");return t.addEventListener("popstate",e,!1),()=>t.removeEventListener("popstate",e)}onHashChange(e){let t=F().getGlobalEventTarget(this._doc,"window");return t.addEventListener("hashchange",e,!1),()=>t.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,t,i){this._history.pushState(e,t,i)}replaceState(e,t,i){this._history.replaceState(e,t,i)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=u({token:n,factory:()=>new n,providedIn:"platform"})}}return n})();function v(n,r){if(n.length==0)return r;if(r.length==0)return n;let e=0;return n.endsWith("/")&&e++,r.startsWith("/")&&e++,e==2?n+r.substring(1):e==1?n+r:n+"/"+r}function x(n){let r=n.match(/#|\?|$/),e=r&&r.index||n.length,t=e-(n[e-1]==="/"?1:0);return n.slice(0,t)+n.slice(e)}function a(n){return n&&n[0]!=="?"?"?"+n:n}var f=(()=>{class n{historyGo(e){throw new Error("")}static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275prov=u({token:n,factory:()=>d(Y),providedIn:"root"})}}return n})(),G=new h(""),Y=(()=>{class n extends f{constructor(e,t){super(),this._platformLocation=e,this._removeListenerFns=[],this._baseHref=t??this._platformLocation.getBaseHrefFromDOM()??d(b).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return v(this._baseHref,e)}path(e=!1){let t=this._platformLocation.pathname+a(this._platformLocation.search),i=this._platformLocation.hash;return i&&e?`${t}${i}`:t}pushState(e,t,i,s){let o=this.prepareExternalUrl(i+a(s));this._platformLocation.pushState(e,t,o)}replaceState(e,t,i,s){let o=this.prepareExternalUrl(i+a(s));this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static{this.\u0275fac=function(t){return new(t||n)(c(_),c(G,8))}}static{this.\u0275prov=u({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})(),Ke=(()=>{class n extends f{constructor(e,t){super(),this._platformLocation=e,this._baseHref="",this._removeListenerFns=[],t!=null&&(this._baseHref=t)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let t=this._platformLocation.hash??"#";return t.length>0?t.substring(1):t}prepareExternalUrl(e){let t=v(this._baseHref,e);return t.length>0?"#"+t:t}pushState(e,t,i,s){let o=this.prepareExternalUrl(i+a(s));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.pushState(e,t,o)}replaceState(e,t,i,s){let o=this.prepareExternalUrl(i+a(s));o.length==0&&(o=this._platformLocation.pathname),this._platformLocation.replaceState(e,t,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static{this.\u0275fac=function(t){return new(t||n)(c(_),c(G,8))}}static{this.\u0275prov=u({token:n,factory:n.\u0275fac})}}return n})(),Z=(()=>{class n{constructor(e){this._subject=new R,this._urlChangeListeners=[],this._urlChangeSubscription=null,this._locationStrategy=e;let t=this._locationStrategy.getBaseHref();this._basePath=X(x(U(t))),this._locationStrategy.onPopState(i=>{this._subject.emit({url:this.path(!0),pop:!0,state:i.state,type:i.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,t=""){return this.path()==this.normalize(e+a(t))}normalize(e){return n.stripTrailingSlash(K(this._basePath,U(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,t="",i=null){this._locationStrategy.pushState(i,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+a(t)),i)}replaceState(e,t="",i=null){this._locationStrategy.replaceState(i,"",e,t),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+a(t)),i)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(t=>{this._notifyUrlChangeListeners(t.url,t.state)}),()=>{let t=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(t,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",t){this._urlChangeListeners.forEach(i=>i(e,t))}subscribe(e,t,i){return this._subject.subscribe({next:e,error:t,complete:i})}static{this.normalizeQueryParams=a}static{this.joinWithSlash=v}static{this.stripTrailingSlash=x}static{this.\u0275fac=function(t){return new(t||n)(c(f))}}static{this.\u0275prov=u({token:n,factory:()=>W(),providedIn:"root"})}}return n})();function W(){return new Z(c(f))}function K(n,r){if(!n||!r.startsWith(n))return r;let e=r.substring(n.length);return e===""||["/",";","?","#"].includes(e[0])?e:r}function U(n){return n.replace(/\/index.html$/,"")}function X(n){if(new RegExp("^(https?:)?//").test(n)){let[,e]=n.split(/\/\/[^\/]+/);return e}return n}function Xe(n,r){r=encodeURIComponent(r);for(let e of n.split(";")){let t=e.indexOf("="),[i,s]=t==-1?[e,""]:[e.slice(0,t),e.slice(t+1)];if(i.trim()===r)return decodeURIComponent(s)}return null}var E=/\s+/,z=[],qe=(()=>{class n{constructor(e,t){this._ngEl=e,this._renderer=t,this.initialClasses=z,this.stateMap=new Map}set klass(e){this.initialClasses=e!=null?e.trim().split(E):z}set ngClass(e){this.rawClass=typeof e=="string"?e.trim().split(E):e}ngDoCheck(){for(let t of this.initialClasses)this._updateState(t,!0);let e=this.rawClass;if(Array.isArray(e)||e instanceof Set)for(let t of e)this._updateState(t,!0);else if(e!=null)for(let t of Object.keys(e))this._updateState(t,!!e[t]);this._applyStateDiff()}_updateState(e,t){let i=this.stateMap.get(e);i!==void 0?(i.enabled!==t&&(i.changed=!0,i.enabled=t),i.touched=!0):this.stateMap.set(e,{enabled:t,changed:!0,touched:!0})}_applyStateDiff(){for(let e of this.stateMap){let t=e[0],i=e[1];i.changed?(this._toggleClass(t,i.enabled),i.changed=!1):i.touched||(i.enabled&&this._toggleClass(t,!1),this.stateMap.delete(t)),i.touched=!1}}_toggleClass(e,t){e=e.trim(),e.length>0&&e.split(E).forEach(i=>{t?this._renderer.addClass(this._ngEl.nativeElement,i):this._renderer.removeClass(this._ngEl.nativeElement,i)})}static{this.\u0275fac=function(t){return new(t||n)(l(g),l(p))}}static{this.\u0275dir=D({type:n,selectors:[["","ngClass",""]],inputs:{klass:[0,"class","klass"],ngClass:"ngClass"},standalone:!0})}}return n})();var Je=(()=>{class n{constructor(e){this._viewContainerRef=e,this._viewRef=null,this.ngTemplateOutletContext=null,this.ngTemplateOutlet=null,this.ngTemplateOutletInjector=null}ngOnChanges(e){if(this._shouldRecreateView(e)){let t=this._viewContainerRef;if(this._viewRef&&t.remove(t.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let i=this._createContextForwardProxy();this._viewRef=t.createEmbeddedView(this.ngTemplateOutlet,i,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,t,i)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,t,i):!1,get:(e,t,i)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,t,i)}})}static{this.\u0275fac=function(t){return new(t||n)(l(P))}}static{this.\u0275dir=D({type:n,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},standalone:!0,features:[O]})}}return n})();function q(n,r){return new I(2100,!1)}var y=class{createSubscription(r,e){return C(()=>r.subscribe({next:e,error:t=>{throw t}}))}dispose(r){C(()=>r.unsubscribe())}},w=class{createSubscription(r,e){return r.then(e,t=>{throw t})}dispose(r){}},J=new w,Q=new y,Qe=(()=>{class n{constructor(e){this._latestValue=null,this.markForCheckOnValueUpdate=!0,this._subscription=null,this._obj=null,this._strategy=null,this._ref=e}ngOnDestroy(){this._subscription&&this._dispose(),this._ref=null}transform(e){if(!this._obj){if(e)try{this.markForCheckOnValueUpdate=!1,this._subscribe(e)}finally{this.markForCheckOnValueUpdate=!0}return this._latestValue}return e!==this._obj?(this._dispose(),this.transform(e)):this._latestValue}_subscribe(e){this._obj=e,this._strategy=this._selectStrategy(e),this._subscription=this._strategy.createSubscription(e,t=>this._updateLatestValue(e,t))}_selectStrategy(e){if(N(e))return J;if(k(e))return Q;throw q(n,e)}_dispose(){this._strategy.dispose(this._subscription),this._latestValue=null,this._subscription=null,this._obj=null}_updateLatestValue(e,t){e===this._obj&&(this._latestValue=t,this.markForCheckOnValueUpdate&&this._ref?.markForCheck())}static{this.\u0275fac=function(t){return new(t||n)(l(m,16))}}static{this.\u0275pipe=B({name:"async",type:n,pure:!1,standalone:!0})}}return n})();var et=(()=>{class n{static{this.\u0275fac=function(t){return new(t||n)}}static{this.\u0275mod=L({type:n})}static{this.\u0275inj=M({})}}return n})(),ee="browser",te="server";function ne(n){return n===ee}function tt(n){return n===te}var nt=(()=>{class n{static{this.\u0275prov=u({token:n,providedIn:"root",factory:()=>ne(d(T))?new A(d(b),window):new S})}}return n})(),A=class{constructor(r,e){this.document=r,this.window=e,this.offset=()=>[0,0]}setOffset(r){Array.isArray(r)?this.offset=()=>r:this.offset=r}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(r){this.window.scrollTo(r[0],r[1])}scrollToAnchor(r){let e=ie(this.document,r);e&&(this.scrollToElement(e),e.focus())}setHistoryScrollRestoration(r){this.window.history.scrollRestoration=r}scrollToElement(r){let e=r.getBoundingClientRect(),t=e.left+this.window.pageXOffset,i=e.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(t-s[0],i-s[1])}};function ie(n,r){let e=n.getElementById(r)||n.getElementsByName(r)[0];if(e)return e;if(typeof n.createTreeWalker=="function"&&n.body&&typeof n.body.attachShadow=="function"){let t=n.createTreeWalker(n.body,NodeFilter.SHOW_ELEMENT),i=t.currentNode;for(;i;){let s=i.shadowRoot;if(s){let o=s.getElementById(r)||s.querySelector(`[name="${r}"]`);if(o)return o}i=t.nextNode()}}return null}var S=class{setOffset(r){}getScrollPosition(){return[0,0]}scrollToPosition(r){}scrollToAnchor(r){}setHistoryScrollRestoration(r){}},V=class{};export{F as a,Ze as b,$ as c,b as d,We as e,f,Y as g,Ke as h,Z as i,Xe as j,qe as k,Je as l,Qe as m,et as n,ee as o,tt as p,nt as q,V as r};