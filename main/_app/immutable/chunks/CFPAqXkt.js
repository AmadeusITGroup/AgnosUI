import{q as Ee,w as I,aL as Re,ac as Ae,aM as Ve,B as ne,aN as Te}from"./DTamszzQ.js";import{e as $e,f as Ie,d as qe,n as Pe,g as Me}from"./PyBP5pn8.js";import{t as Ne,c as Oe,s as We}from"./BmSbAw8Q.js";import{s as ze}from"./uMpgFYbS.js";function xe(s,e){if(e){const t=document.body;s.autofocus=!0,Ee(()=>{document.activeElement===t&&s.focus()})}}function j(s,e={},t,r){for(var n in t){var i=t[n];e[n]!==i&&(t[n]==null?s.style.removeProperty(n):s.style.setProperty(n,i,r))}}function je(s,e,t,r){var n=s.__style;if(I||n!==e){var i=Ne(e,r);(!I||i!==s.getAttribute("style"))&&(i==null?s.removeAttribute("style"):s.style.cssText=i),s.__style=e}else r&&(Array.isArray(r)?(j(s,t?.[0],r[0]),j(s,t?.[1],r[1],"important")):j(s,t,r));return r}const S=Symbol("class"),D=Symbol("style"),he=Symbol("is custom element"),de=Symbol("is html");function Be(s,e){e?s.hasAttribute("selected")||s.setAttribute("selected",""):s.removeAttribute("selected")}function ie(s,e,t,r){var n=pe(s);I&&(n[e]=s.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&s.nodeName==="LINK")||n[e]!==(n[e]=t)&&(e==="loading"&&(s[Ve]=t),t==null?s.removeAttribute(e):typeof t!="string"&&be(s).includes(e)?s[e]=t:s.setAttribute(e,t))}function Ls(s,e,t,r,n=!1){var i=pe(s),o=i[he],c=!i[de];let g=I&&o;g&&ne(!1);var l=e||{},f=s.tagName==="OPTION";for(var b in e)b in t||(t[b]=null);t.class?t.class=Oe(t.class):(r||t[S])&&(t.class=null),t[D]&&(t.style??=null);var m=be(s);for(const u in t){let a=t[u];if(f&&u==="value"&&a==null){s.value=s.__value="",l[u]=a;continue}if(u==="class"){var z=s.namespaceURI==="http://www.w3.org/1999/xhtml";We(s,z,a,r,e?.[S],t[S]),l[u]=a,l[S]=t[S];continue}if(u==="style"){je(s,a,e?.[D],t[D]),l[u]=a,l[D]=t[D];continue}var se=l[u];if(a!==se){l[u]=a;var te=u[0]+u[1];if(te!=="$$")if(te==="on"){const d={},k="$$"+u;let h=u.slice(2);var x=Me(h);if($e(h)&&(h=h.slice(0,-7),d.capture=!0),!x&&se){if(a!=null)continue;s.removeEventListener(h,l[k],d),l[k]=null}if(a!=null)if(x)s[`__${h}`]=a,qe([h]);else{let De=function(Fe){l[u].call(this,Fe)};l[k]=Ie(h,s,De,d)}else x&&(s[`__${h}`]=void 0)}else if(u==="style")ie(s,u,a);else if(u==="autofocus")xe(s,!!a);else if(!o&&(u==="__value"||u==="value"&&a!=null))s.value=s.__value=a;else if(u==="selected"&&f)Be(s,a);else{var p=u;c||(p=Pe(p));var re=p==="defaultValue"||p==="defaultChecked";if(a==null&&!o&&!re)if(i[u]=null,p==="value"||p==="checked"){let d=s;const k=e===void 0;if(p==="value"){let h=d.defaultValue;d.removeAttribute(p),d.defaultValue=h,d.value=d.__value=k?h:null}else{let h=d.defaultChecked;d.removeAttribute(p),d.defaultChecked=h,d.checked=k?h:!1}}else s.removeAttribute(u);else re||m.includes(p)&&(o||typeof a!="string")?s[p]=a:typeof a!="function"&&ie(s,p,a)}}}return g&&ne(!0),l}function pe(s){return s.__attributes??={[he]:s.nodeName.includes("-"),[de]:s.namespaceURI===Re}}var oe=new Map;function be(s){var e=oe.get(s.nodeName);if(e)return e;oe.set(s.nodeName,e=[]);for(var t,r=s,n=Element.prototype;n!==r;){t=Te(r);for(var i in t)t[i].set&&e.push(i);r=Ae(r)}return e}const Qe=(s,e)=>Object.is(s,e)&&(!s||typeof s!="object")&&typeof s!="function",G=[];let B=!1;const ge=s=>{const e=!B;B=!0;let t=!0,r,n;try{r=s()}finally{if(e){for(;G.length>0;){const i=G.shift();try{i.notify()}catch(o){t&&(t=!1,n=o)}}B=!1}}if(t)return r;throw n},q=s=>{try{if(s.skipMarkDirty=!0,s.producer.updateValue(),s.producer.flags&16)throw new Error("assert failed: store still dirty after updating it")}finally{s.skipMarkDirty=!1}},w=()=>{},Q=(s,e)=>{const t=s?s[e]:null;return typeof t=="function"?t.bind(s):w},H={next:w,pause:w,resume:w},He=s=>({next:typeof s=="function"?s.bind(null):Q(s,"next"),pause:Q(s,"pause"),resume:Q(s,"resume")});class Ge{constructor(e,t){this.dirtyCount=1,this.subscriber=He(t),this.link=e.registerConsumer(e.newLink(this)),this.notify(!0)}unsubscribe(){this.subscriber!==H&&(this.subscriber=H,this.link.producer.unregisterConsumer(this.link))}markDirty(){this.dirtyCount++,G.push(this),this.dirtyCount===1&&this.subscriber.pause()}notify(e=!1){if(this.dirtyCount--,this.dirtyCount===0&&this.subscriber!==H){const t=this.link,r=t.producer;if(q(t),r.isLinkUpToDate(t)&&!e)this.subscriber.resume();else{const n=r.updateLink(t);this.subscriber.next(n)}}}}let y=null;const L=s=>{const e=y;return y=s,e},Y=s=>{let e;const t=L(null);try{e=s()}finally{L(t)}return e};let F=!1;const U=()=>{if(F)throw new Error("Reading or writing a signal is forbidden during the notification phase.")};let T=0;class ve{constructor(e){this.value=e,this.flags=0,this.version=0,this.equalFn=Qe,this.equalCache=null,this.consumerLinks=[]}newLink(e){return{version:-1,value:void 0,producer:this,indexInProducer:0,consumer:e,skipMarkDirty:!1}}isLinkUpToDate(e){if(e.version===this.version)return!0;if(e.version===this.version-1||e.version<0)return!1;let t=this.equalCache;t||(t={},this.equalCache=t);let r=t[e.version];return r===void 0&&(r=this.equal(e.value,this.value),t[e.version]=r),r}updateLink(e){return e.value=this.value,e.version=this.version,this.readValue()}registerConsumer(e){const t=this.consumerLinks,r=t.length;return e.indexInProducer=r,t[r]=e,e}unregisterConsumer(e){const t=this.consumerLinks,r=e.indexInProducer;if(t[r]!==e)throw new Error("assert failed: invalid indexInProducer");const n=t.pop();e===n?r===0&&this.checkUnused():(t[r]=n,n.indexInProducer=r)}checkUnused(){}updateValue(){}equal(e,t){const r=this.equalFn;return r(e,t)}increaseEpoch(){T++,this.markConsumersDirty()}set(e){U(),this.equal(this.value,e)||ge(()=>{this.value=e,this.version++,this.equalCache=null,this.increaseEpoch()})}update(e){this.set(e(this.value))}markConsumersDirty(){const e=F;F=!0;try{const t=this.consumerLinks;for(let r=0,n=t.length;r<n;r++){const i=t[r];i.skipMarkDirty||i.consumer.markDirty()}}finally{F=e}}get(){return U(),y?y.addProducer(this):this.readValue()}readValue(){return this.value}subscribe(e){U();const t=new Ge(this,e),r=()=>t.unsubscribe();return r.unsubscribe=r,r}}let E=null,$=!1;const Ye=()=>{if($)throw new Error("assert failed: recursive flushUnused call");$=!0;try{const s=E;if(s){E=null;for(let e=0,t=s.length;e<t;e++){const r=s[e];r.flags&=-5,r.checkUnused()}}}finally{$=!1}};class K extends ve{constructor(){super(...arguments),this.extraUsages=0}updateValue(){if(!(this.flags&2)){if(!this.extraUsages&&!this.consumerLinks.length)throw new Error("assert failed: untracked producer usage");this.flags|=2,Y(()=>this.startUse())}}checkUnused(){const e=this.flags;e&2&&!this.extraUsages&&!this.consumerLinks.length&&($||e&1?(this.flags&=-3,Y(()=>this.endUse())):e&4||(this.flags|=4,E||(E=[],queueMicrotask(Ye)),E.push(this)))}get(){if(U(),y)return y.addProducer(this);this.extraUsages++;try{if(this.updateValue(),this.flags&16)throw new Error("assert failed: store still dirty after updating it");return this.readValue()}finally{--this.extraUsages===0&&this.checkUnused()}}}const P=()=>{};P.unsubscribe=P;const X=s=>{if(!s)return P;if(s.unsubscribe===s)return s;const e=typeof s=="function"?()=>s():()=>s.unsubscribe();return e.unsubscribe=e,e};class Ke extends K{constructor(e){super(void 0),this.subscribable=e,this.subscriber=this.createSubscriber(),this.unsubscribe=null,this.flags=1}createSubscriber(){const e=t=>this.set(t);return e.next=e,e.pause=()=>{this.markConsumersDirty()},e}startUse(){this.unsubscribe=X(this.subscribable.subscribe(this.subscriber))}endUse(){const e=this.unsubscribe;e&&(this.unsubscribe=null,e())}}const me=typeof Symbol=="function"&&Symbol.observable||"@@observable",Xe=function(){return this},ye=Symbol(),ue=new WeakMap,J=s=>{const e=s[ye];if(e)return e;let t=ue.get(s);if(!t){let r=s;"subscribe"in r||(r=r[me]()),t=new Ke(r),ue.set(s,t)}return t},A=(s,e)=>{const t=s.get.bind(s);return e&&Object.assign(t,e),t.get=t,t.subscribe=s.subscribe.bind(s),t[me]=Xe,t[ye]=s,t},ae=1e3,_=Symbol("UNSET"),R=Symbol("ERRORED"),ce=s=>s===_||s===R;class ke extends K{constructor(){super(...arguments),this.flags=16}equal(e,t){return ce(e)||ce(t)?!1:super.equal(e,t)}markDirty(){this.flags&16||(this.flags|=16,this.markConsumersDirty())}readValue(){const e=this.value;if(e===R)throw this.error;if(e===_)throw new Error("assert failed: computed value is not set");return e}updateValue(){if(this.flags&8)throw new Error("recursive computed");if(super.updateValue(),!(this.flags&16))return;this.flags|=8;const e=L(null);try{let t=0;do{do if(t++,this.flags&=-17,this.areProducersUpToDate())return;while(this.flags&16&&t<ae);this.recompute()}while(this.flags&16&&t<ae);this.flags&16&&(this.flags&=-17,this.error=new Error("reached maximum number of store changes in one shot"),this.set(R))}finally{L(e),this.flags&=-9}}}class Je extends ke{constructor(e){super(_),this.computeFn=e,this.producerIndex=0,this.producerLinks=[],this.epoch=-1}increaseEpoch(){}updateValue(){this.flags&2&&this.epoch===T||(super.updateValue(),this.epoch=T)}get(){return!y&&!F&&this.epoch===T&&(!(this.flags&1)||this.flags&2)?this.readValue():super.get()}addProducer(e){const t=this.producerLinks,r=this.producerIndex;let n=t[r];return n?.producer!==e&&(n&&t.push(n),n=e.registerConsumer(e.newLink(this))),t[r]=n,this.producerIndex=r+1,q(n),e.flags&1&&(this.flags|=1),e.updateLink(n)}startUse(){const e=this.producerLinks;for(let t=0,r=e.length;t<r;t++){const n=e[t];n.producer.registerConsumer(n)}this.flags|=16}endUse(){const e=this.producerLinks;for(let t=0,r=e.length;t<r;t++){const n=e[t];n.producer.unregisterConsumer(n)}}areProducersUpToDate(){if(this.value===_)return!1;const e=this.producerLinks;for(let t=0,r=e.length;t<r;t++){const n=e[t],i=n.producer;if(q(n),!i.isLinkUpToDate(n))return!1}return!0}recompute(){let e;const t=L(this);try{this.producerIndex=0,this.flags&=-2;const i=this.computeFn;e=i(),this.error=null}catch(i){e=R,this.error=i}finally{L(t)}const r=this.producerLinks,n=this.producerIndex;if(n<r.length)for(let i=0,o=r.length-n;i<o;i++){const c=r.pop();c.producer.unregisterConsumer(c)}this.set(e)}}class Ze{constructor(e){this.value=e,this.flags=0}newLink(e){return{producer:this}}registerConsumer(e){return e}unregisterConsumer(e){}updateValue(){}isLinkUpToDate(e){return!0}updateLink(e){return this.value}get(){return U(),this.value}subscribe(e){return U(),typeof e=="function"?e(this.value):e?.next?.(this.value),P}}class we extends ke{constructor(e,t){super(t),this.producerLinks=null,this.cleanUpFn=null,this.flags=17;const r=Array.isArray(e);this.arrayMode=r,this.producers=(r?e:[e]).map(J)}callCleanUpFn(){const e=this.cleanUpFn;e&&(this.cleanUpFn=null,e())}startUse(){this.producerLinks=this.producers.map(e=>e.registerConsumer(e.newLink(this))),this.flags|=16}endUse(){this.callCleanUpFn();const e=this.producerLinks;if(this.producerLinks=null,e)for(let t=0,r=e.length;t<r;t++){const n=e[t];n.producer.unregisterConsumer(n)}}areProducersUpToDate(){const e=this.producerLinks;let t=this.value!==_;for(let r=0,n=e.length;r<n;r++){const i=e[r],o=i.producer;q(i),o.isLinkUpToDate(i)||(t=!1)}return t}recompute(){try{this.callCleanUpFn();const e=this.producerLinks.map(t=>t.producer.updateLink(t));this.cleanUpFn=X(this.derive(this.arrayMode?e:e[0]))}catch(e){this.error=e,this.set(R)}}}class es extends we{constructor(e,t,r){super(e,_),this.deriveFn=r}derive(e){const t=this.deriveFn;this.set(t(e))}}const Ue=s=>{const e=s.set.bind(s);return e.set=e,e.update=s.update.bind(s),e};class ss extends we{constructor(e,t,r){super(e,t),this.deriveFn=r,this.setFn=Ue(this)}derive(e){const t=this.deriveFn;return t(e,this.setFn)}}class ts extends K{constructor(e,t){super(e),this.onUseFn=t,this.cleanUpFn=null,this.flags=1}startUse(){this.cleanUpFn=X(this.onUseFn())}endUse(){const e=this.cleanUpFn;e&&(this.cleanUpFn=null,e())}}function M(s,e){return A(J(s),e)}const le=function(s){this.set(s(Y(()=>this.get())))};function Le(s,e){return M(s,typeof e=="function"?{set:e,update:le}:{...e,set:e?.set??w,update:e?.update??(e?.set?le:w)})}const V=s=>J(s).get(),_e=(s,e)=>{const t=new ts(s,()=>e(r)),r=Ue(t);return t},N=(s,e)=>{if(e){const{equal:t,notEqual:r}=e;t?s.equalFn=t:r&&(s.equalFn=(n,i)=>!r(n,i))}return s};function O(s,e){typeof e=="function"&&(e={onUse:e});const t=e?.onUse;return A(t?N(_e(s,t),e):new Ze(s))}function Ce(s,e){typeof e=="function"&&(e={onUse:e});const t=e?.onUse,r=N(t?_e(s,t):new ve(s),e),n=A(r);return n.set=r.set.bind(r),n.update=r.update.bind(r),n}function rs(s){return s.length<=1}function W(s,e,t){typeof e=="function"&&(e={derive:e});const{derive:r,...n}=e,i=rs(r)?es:ss;return A(N(new i(s,t,r),n))}function v(s,e){return A(N(new Je(s),e))}const Z=()=>{const s=ze;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},C={subscribe(s){return Z().page.subscribe(s)}},_s={subscribe(s){return Z().navigating.subscribe(s)}},ns={subscribe(s){const e=Z().updated;return ns.check=e.check,e.subscribe(s)},check:()=>{throw new Error("Cannot check updated store before subscribing")}},is=()=>{},os=s=>s,fe=Symbol();function us(s){return function(e){ge(()=>{var t;for(const[r,n]of Object.entries(e))(t=s[`${r}$`])==null||t.set(n)})}}function Cs(s,e){if(s===e)return null;let t=!1;const r={},n=new Set([...Object.keys(s),...Object.keys(e)]);for(const i of n){const o=e[i];s[i]!==o&&(r[i]=o,t=!0)}return t?r:null}function as(s,e=O(void 0),t={},r=Ce(void 0)){const{normalizeValue:n=os,equal:i=Object.is}=t,o=()=>s,c=(f,b=o)=>{const m=f===void 0?void 0:n(f);return m===fe?(console.error("Not using invalid value",f),b()):m===void 0?b():m},g=v(()=>c(e()),{equal:i}),l=v(()=>c(r(),g),{equal:i});return Le(l,f=>{if(f!==void 0){const b=n(f);if(b===fe){console.error("Not setting invalid value",f);return}f=b}r.set(f)})}const ee=s=>!!(s&&typeof s=="function"&&"subscribe"in s),cs=s=>ee(s)?s:O(s),ls=s=>ee(s)?s:Ce(s),fs=(s,e)=>{const t={};if(e){const r=ee(e);for(const n of s)t[n]=r?v(()=>e()[n]):cs(e[n])}return t},hs=(s,e,t)=>{const r={},n=Object.keys(s),i=fs(n,e?.config),o=e?.props;for(const c of n){const g=o?.[c];r[`${c}$`]=as(s[c],i[c],t?.[c],ls(g))}return r},ds=(s,e,t)=>{const r=hs(s,e,t);return[r,us(r)]},Ss=s=>{const e=[],t=[],r={};for(const[n,i]of Object.entries(s))n.endsWith("$")&&(e.push(n.substring(0,n.length-1)),t.push(i),r[n]=M(i));return{stores:r,state$:v(()=>{const n=t.map(V),i={};return e.forEach((o,c)=>{i[o]=n[c]}),i})}},Ds=(s,e,t=n=>n[0],r=(n,i)=>i===n)=>{let n=e[0]();return Le(W(e,{derive(i){const o=t(i),c=!r(i[0],o);return c&&e[0].set(o),(c||!r(n,o))&&(n=o,s()(o)),o},equal:r}),e[0].set.bind(e[0]))};O(!0);O(!1);const ps={elements:[],options:void 0},bs=s=>{const[{elements$:e,options$:t},r]=ds(ps,s),n=W([e,t],([i,o],c)=>{if(i.length){const g=new Map,l=new IntersectionObserver(f=>{for(const b of f){const{target:m,isIntersecting:z}=b;z?g.set(m,b):g.delete(m)}c(g)},o);for(const f of i)l.observe(f);return()=>{l.disconnect()}}return is},new Map);return{elements$:M(e),visibleElements$:M(n),patch:r}},gs=v(()=>{const s=V(C);if(!s.route.id)throw new Error("Page error");return s.route.id.split("/").length-2+Object.values(s.params).reduce((e,t)=>e+t.split("/").length-1,0)}),Se=v(()=>{const s=gs();return s?"../".repeat(s):"./"}),Fs=v(()=>new URL(Se(),window.location.href).href),vs="https://www.agnosui.dev/latest/",Es=v(()=>{const s=V(C).url.href,e=new URL(Se(),s).href;return s.replace(e,vs)}),Rs=W(C,(s,e)=>{s.params.framework&&s.params.framework!=="typescript"&&e(s.params.framework)},"angular"),As=W(C,(s,e)=>{s.params.framework&&e(s.params.framework)},"angular"),Vs=v(()=>{const s=V(C);if(s.params.type)return s.params.type;if(s.url.pathname.match(/\/daisyUI\//))return"headless";if(s.url.pathname.match(/\/docs\/[^/]*\/components\//))return"bootstrap"}),ms=/^\/docs\/\[framework\]\/(components|daisyUI)\/[^/]*\/([^/]*)/,Ts=v(()=>ms.exec(V(C).route.id||"")?.[2]),$s=bs();export{$s as A,_s as B,ns as C,Es as D,gs as E,fe as I,Fs as a,Rs as b,Ts as c,Vs as d,je as e,As as f,M as g,ge as h,v as i,W as j,Qe as k,ds as l,Ds as m,is as n,Ss as o,C as p,Ls as q,O as r,ie as s,hs as t,ee as u,os as v,Ce as w,Le as x,cs as y,Cs as z};
