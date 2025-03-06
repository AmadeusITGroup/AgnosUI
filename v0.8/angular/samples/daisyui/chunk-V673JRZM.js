import{La as y,M as u,Na as E,P as l,R as c,S as d,Ua as w,Z as F,i as C}from"./chunk-7MKQPDNV.js";var v=null;function h(){return v}function ke(t){v??=t}var A=class{};var D=new l(""),p=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:()=>d(B),providedIn:"platform"})}return t})(),$e=new l(""),B=(()=>{class t extends p{_location;_history;_doc=d(D);constructor(){super(),this._location=window.location,this._history=window.history}getBaseHrefFromDOM(){return h().getBaseHref(this._doc)}onPopState(e){let n=h().getGlobalEventTarget(this._doc,"window");return n.addEventListener("popstate",e,!1),()=>n.removeEventListener("popstate",e)}onHashChange(e){let n=h().getGlobalEventTarget(this._doc,"window");return n.addEventListener("hashchange",e,!1),()=>n.removeEventListener("hashchange",e)}get href(){return this._location.href}get protocol(){return this._location.protocol}get hostname(){return this._location.hostname}get port(){return this._location.port}get pathname(){return this._location.pathname}get search(){return this._location.search}get hash(){return this._location.hash}set pathname(e){this._location.pathname=e}pushState(e,n,r){this._history.pushState(e,n,r)}replaceState(e,n,r){this._history.replaceState(e,n,r)}forward(){this._history.forward()}back(){this._history.back()}historyGo(e=0){this._history.go(e)}getState(){return this._history.state}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:()=>new t,providedIn:"platform"})}return t})();function m(t,i){return t?i?t.endsWith("/")?i.startsWith("/")?t+i.slice(1):t+i:i.startsWith("/")?t+i:`${t}/${i}`:t:i}function S(t){let i=t.search(/#|\?|$/);return t[i-1]==="/"?t.slice(0,i-1)+t.slice(i):t}function a(t){return t&&t[0]!=="?"?`?${t}`:t}var f=(()=>{class t{historyGo(e){throw new Error("")}static \u0275fac=function(n){return new(n||t)};static \u0275prov=u({token:t,factory:()=>d(R),providedIn:"root"})}return t})(),I=new l(""),R=(()=>{class t extends f{_platformLocation;_baseHref;_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,this._baseHref=n??this._platformLocation.getBaseHrefFromDOM()??d(D).location?.origin??""}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}prepareExternalUrl(e){return m(this._baseHref,e)}path(e=!1){let n=this._platformLocation.pathname+a(this._platformLocation.search),r=this._platformLocation.hash;return r&&e?`${n}${r}`:n}pushState(e,n,r,s){let o=this.prepareExternalUrl(r+a(s));this._platformLocation.pushState(e,n,o)}replaceState(e,n,r,s){let o=this.prepareExternalUrl(r+a(s));this._platformLocation.replaceState(e,n,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(c(p),c(I,8))};static \u0275prov=u({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),xe=(()=>{class t extends f{_platformLocation;_baseHref="";_removeListenerFns=[];constructor(e,n){super(),this._platformLocation=e,n!=null&&(this._baseHref=n)}ngOnDestroy(){for(;this._removeListenerFns.length;)this._removeListenerFns.pop()()}onPopState(e){this._removeListenerFns.push(this._platformLocation.onPopState(e),this._platformLocation.onHashChange(e))}getBaseHref(){return this._baseHref}path(e=!1){let n=this._platformLocation.hash??"#";return n.length>0?n.substring(1):n}prepareExternalUrl(e){let n=m(this._baseHref,e);return n.length>0?"#"+n:n}pushState(e,n,r,s){let o=this.prepareExternalUrl(r+a(s))||this._platformLocation.pathname;this._platformLocation.pushState(e,n,o)}replaceState(e,n,r,s){let o=this.prepareExternalUrl(r+a(s))||this._platformLocation.pathname;this._platformLocation.replaceState(e,n,o)}forward(){this._platformLocation.forward()}back(){this._platformLocation.back()}getState(){return this._platformLocation.getState()}historyGo(e=0){this._platformLocation.historyGo?.(e)}static \u0275fac=function(n){return new(n||t)(c(p),c(I,8))};static \u0275prov=u({token:t,factory:t.\u0275fac})}return t})(),O=(()=>{class t{_subject=new C;_basePath;_locationStrategy;_urlChangeListeners=[];_urlChangeSubscription=null;constructor(e){this._locationStrategy=e;let n=this._locationStrategy.getBaseHref();this._basePath=k(S(_(n))),this._locationStrategy.onPopState(r=>{this._subject.next({url:this.path(!0),pop:!0,state:r.state,type:r.type})})}ngOnDestroy(){this._urlChangeSubscription?.unsubscribe(),this._urlChangeListeners=[]}path(e=!1){return this.normalize(this._locationStrategy.path(e))}getState(){return this._locationStrategy.getState()}isCurrentPathEqualTo(e,n=""){return this.path()==this.normalize(e+a(n))}normalize(e){return t.stripTrailingSlash(N(this._basePath,_(e)))}prepareExternalUrl(e){return e&&e[0]!=="/"&&(e="/"+e),this._locationStrategy.prepareExternalUrl(e)}go(e,n="",r=null){this._locationStrategy.pushState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+a(n)),r)}replaceState(e,n="",r=null){this._locationStrategy.replaceState(r,"",e,n),this._notifyUrlChangeListeners(this.prepareExternalUrl(e+a(n)),r)}forward(){this._locationStrategy.forward()}back(){this._locationStrategy.back()}historyGo(e=0){this._locationStrategy.historyGo?.(e)}onUrlChange(e){return this._urlChangeListeners.push(e),this._urlChangeSubscription??=this.subscribe(n=>{this._notifyUrlChangeListeners(n.url,n.state)}),()=>{let n=this._urlChangeListeners.indexOf(e);this._urlChangeListeners.splice(n,1),this._urlChangeListeners.length===0&&(this._urlChangeSubscription?.unsubscribe(),this._urlChangeSubscription=null)}}_notifyUrlChangeListeners(e="",n){this._urlChangeListeners.forEach(r=>r(e,n))}subscribe(e,n,r){return this._subject.subscribe({next:e,error:n??void 0,complete:r??void 0})}static normalizeQueryParams=a;static joinWithSlash=m;static stripTrailingSlash=S;static \u0275fac=function(n){return new(n||t)(c(f))};static \u0275prov=u({token:t,factory:()=>P(),providedIn:"root"})}return t})();function P(){return new O(c(f))}function N(t,i){if(!t||!i.startsWith(t))return i;let e=i.substring(t.length);return e===""||["/",";","?","#"].includes(e[0])?e:i}function _(t){return t.replace(/\/index.html$/,"")}function k(t){if(new RegExp("^(https?:)?//").test(t)){let[,e]=t.split(/\/\/[^\/]+/);return e}return t}function Ue(t,i){i=encodeURIComponent(i);for(let e of t.split(";")){let n=e.indexOf("="),[r,s]=n==-1?[e,""]:[e.slice(0,n),e.slice(n+1)];if(r.trim()===i)return decodeURIComponent(s)}return null}var ze=(()=>{class t{_viewContainerRef;_viewRef=null;ngTemplateOutletContext=null;ngTemplateOutlet=null;ngTemplateOutletInjector=null;constructor(e){this._viewContainerRef=e}ngOnChanges(e){if(this._shouldRecreateView(e)){let n=this._viewContainerRef;if(this._viewRef&&n.remove(n.indexOf(this._viewRef)),!this.ngTemplateOutlet){this._viewRef=null;return}let r=this._createContextForwardProxy();this._viewRef=n.createEmbeddedView(this.ngTemplateOutlet,r,{injector:this.ngTemplateOutletInjector??void 0})}}_shouldRecreateView(e){return!!e.ngTemplateOutlet||!!e.ngTemplateOutletInjector}_createContextForwardProxy(){return new Proxy({},{set:(e,n,r)=>this.ngTemplateOutletContext?Reflect.set(this.ngTemplateOutletContext,n,r):!1,get:(e,n,r)=>{if(this.ngTemplateOutletContext)return Reflect.get(this.ngTemplateOutletContext,n,r)}})}static \u0275fac=function(n){return new(n||t)(y(E))};static \u0275dir=w({type:t,selectors:[["","ngTemplateOutlet",""]],inputs:{ngTemplateOutletContext:"ngTemplateOutletContext",ngTemplateOutlet:"ngTemplateOutlet",ngTemplateOutletInjector:"ngTemplateOutletInjector"},features:[F]})}return t})();var Ve="browser",$="server";function je(t){return t===$}var Ge=(()=>{class t{static \u0275prov=u({token:t,providedIn:"root",factory:()=>new g(d(D),window)})}return t})(),g=class{document;window;offset=()=>[0,0];constructor(i,e){this.document=i,this.window=e}setOffset(i){Array.isArray(i)?this.offset=()=>i:this.offset=i}getScrollPosition(){return[this.window.scrollX,this.window.scrollY]}scrollToPosition(i){this.window.scrollTo(i[0],i[1])}scrollToAnchor(i){let e=x(this.document,i);e&&(this.scrollToElement(e),e.focus())}setHistoryScrollRestoration(i){this.window.history.scrollRestoration=i}scrollToElement(i){let e=i.getBoundingClientRect(),n=e.left+this.window.pageXOffset,r=e.top+this.window.pageYOffset,s=this.offset();this.window.scrollTo(n-s[0],r-s[1])}};function x(t,i){let e=t.getElementById(i)||t.getElementsByName(i)[0];if(e)return e;if(typeof t.createTreeWalker=="function"&&t.body&&typeof t.body.attachShadow=="function"){let n=t.createTreeWalker(t.body,NodeFilter.SHOW_ELEMENT),r=n.currentNode;for(;r;){let s=r.shadowRoot;if(s){let o=s.getElementById(i)||s.querySelector(`[name="${i}"]`);if(o)return o}r=n.nextNode()}}return null}var b=class{};export{h as a,ke as b,A as c,D as d,$e as e,f,R as g,xe as h,O as i,Ue as j,ze as k,Ve as l,je as m,Ge as n,b as o};
