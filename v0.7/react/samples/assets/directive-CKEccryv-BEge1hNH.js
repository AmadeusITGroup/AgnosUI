const Y=(t,e)=>Object.is(t,e)&&(!t||typeof t!="object")&&typeof t!="function",R=[];let A=!1;const b=t=>{const e=!A;A=!0;let s=!0,r,n;try{r=t()}finally{if(e){for(;R.length>0;){const i=R.shift();try{i.notify()}catch(o){s&&(s=!1,n=o)}}A=!1}}if(s)return r;throw n},T=t=>{try{if(t.skipMarkDirty=!0,t.producer.updateValue(),t.producer.flags&16)throw new Error("assert failed: store still dirty after updating it")}finally{t.skipMarkDirty=!1}},v=()=>{},E=(t,e)=>{const s=t?t[e]:null;return typeof s=="function"?s.bind(t):v},O={next:v,pause:v,resume:v},de=t=>({next:typeof t=="function"?t.bind(null):E(t,"next"),pause:E(t,"pause"),resume:E(t,"resume")});class he{constructor(e,s){this.dirtyCount=1,this.subscriber=de(s),this.link=e.registerConsumer(e.newLink(this)),this.notify(!0)}unsubscribe(){this.subscriber!==O&&(this.subscriber=O,this.link.producer.unregisterConsumer(this.link))}markDirty(){this.dirtyCount++,R.push(this),this.dirtyCount===1&&this.subscriber.pause()}notify(e=!1){if(this.dirtyCount--,this.dirtyCount===0&&this.subscriber!==O){const s=this.link,r=s.producer;if(T(s),r.isLinkUpToDate(s)&&!e)this.subscriber.resume();else{const n=r.updateLink(s);this.subscriber.next(n)}}}}let f=null;const m=t=>{const e=f;return f=t,e},M=t=>{let e;const s=m(null);try{e=t()}finally{m(s)}return e};let w=!1;const g=()=>{if(w)throw new Error("Reading or writing a signal is forbidden during the notification phase.")};let N=0;class Z{constructor(e){this.value=e,this.flags=0,this.version=0,this.equalFn=Y,this.equalCache=null,this.consumerLinks=[]}newLink(e){return{version:-1,value:void 0,producer:this,indexInProducer:0,consumer:e,skipMarkDirty:!1}}isLinkUpToDate(e){if(e.version===this.version)return!0;if(e.version===this.version-1||e.version<0)return!1;let s=this.equalCache;s||(s={},this.equalCache=s);let r=s[e.version];return r===void 0&&(r=this.equal(e.value,this.value),s[e.version]=r),r}updateLink(e){return e.value=this.value,e.version=this.version,this.readValue()}registerConsumer(e){const s=this.consumerLinks,r=s.length;return e.indexInProducer=r,s[r]=e,e}unregisterConsumer(e){const s=this.consumerLinks,r=e.indexInProducer;if(s[r]!==e)throw new Error("assert failed: invalid indexInProducer");const n=s.pop();e===n?r===0&&this.checkUnused():(s[r]=n,n.indexInProducer=r)}checkUnused(){}updateValue(){}equal(e,s){const r=this.equalFn;return r(e,s)}increaseEpoch(){N++,this.markConsumersDirty()}set(e){g(),this.equal(this.value,e)||b(()=>{this.value=e,this.version++,this.equalCache=null,this.increaseEpoch()})}update(e){this.set(e(this.value))}markConsumersDirty(){const e=w;w=!0;try{const s=this.consumerLinks;for(let r=0,n=s.length;r<n;r++){const i=s[r];i.skipMarkDirty||i.consumer.markDirty()}}finally{w=e}}get(){return g(),f?f.addProducer(this):this.readValue()}readValue(){return this.value}subscribe(e){g();const s=new he(this,e),r=()=>s.unsubscribe();return r.unsubscribe=r,r}}let C=null,V=!1;const fe=()=>{if(V)throw new Error("assert failed: recursive flushUnused call");V=!0;try{const t=C;if(t){C=null;for(let e=0,s=t.length;e<s;e++){const r=t[e];r.flags&=-5,r.checkUnused()}}}finally{V=!1}};class x extends Z{constructor(){super(...arguments),this.extraUsages=0}updateValue(){if(!(this.flags&2)){if(!this.extraUsages&&!this.consumerLinks.length)throw new Error("assert failed: untracked producer usage");this.flags|=2,M(()=>this.startUse())}}checkUnused(){const e=this.flags;e&2&&!this.extraUsages&&!this.consumerLinks.length&&(V||e&1?(this.flags&=-3,M(()=>this.endUse())):e&4||(this.flags|=4,C||(C=[],queueMicrotask(fe)),C.push(this)))}get(){if(g(),f)return f.addProducer(this);this.extraUsages++;try{if(this.updateValue(),this.flags&16)throw new Error("assert failed: store still dirty after updating it");return this.readValue()}finally{--this.extraUsages===0&&this.checkUnused()}}}const _=()=>{};_.unsubscribe=_;const $=t=>{if(!t)return _;if(t.unsubscribe===t)return t;const e=typeof t=="function"?()=>t():()=>t.unsubscribe();return e.unsubscribe=e,e};class pe extends x{constructor(e){super(void 0),this.subscribable=e,this.subscriber=this.createSubscriber(),this.unsubscribe=null,this.flags=1}createSubscriber(){const e=s=>this.set(s);return e.next=e,e.pause=()=>{this.markConsumersDirty()},e}startUse(){this.unsubscribe=$(this.subscribable.subscribe(this.subscriber))}endUse(){const e=this.unsubscribe;e&&(this.unsubscribe=null,e())}}const ee=typeof Symbol=="function"&&Symbol.observable||"@@observable",be=function(){return this},te=Symbol(),H=new WeakMap,P=t=>{const e=t[te];if(e)return e;let s=H.get(t);if(!s){let r=t;"subscribe"in r||(r=r[ee]()),s=new pe(r),H.set(t,s)}return s},S=(t,e)=>{const s=t.get.bind(t);return e&&Object.assign(s,e),s.get=s,s.subscribe=t.subscribe.bind(t),s[ee]=be,s[te]=t,s},Q=1e3,y=Symbol("UNSET"),L=Symbol("ERRORED"),G=t=>t===y||t===L;class se extends x{constructor(){super(...arguments),this.flags=16}equal(e,s){return G(e)||G(s)?!1:super.equal(e,s)}markDirty(){this.flags&16||(this.flags|=16,this.markConsumersDirty())}readValue(){const e=this.value;if(e===L)throw this.error;if(e===y)throw new Error("assert failed: computed value is not set");return e}updateValue(){if(this.flags&8)throw new Error("recursive computed");if(super.updateValue(),!(this.flags&16))return;this.flags|=8;const e=m(null);try{let s=0;do{do if(s++,this.flags&=-17,this.areProducersUpToDate())return;while(this.flags&16&&s<Q);this.recompute()}while(this.flags&16&&s<Q);this.flags&16&&(this.flags&=-17,this.error=new Error("reached maximum number of store changes in one shot"),this.set(L))}finally{m(e),this.flags&=-9}}}class ve extends se{constructor(e){super(y),this.computeFn=e,this.producerIndex=0,this.producerLinks=[],this.epoch=-1}increaseEpoch(){}updateValue(){this.flags&2&&this.epoch===N||(super.updateValue(),this.epoch=N)}get(){return!f&&!w&&this.epoch===N&&(!(this.flags&1)||this.flags&2)?this.readValue():super.get()}addProducer(e){const s=this.producerLinks,r=this.producerIndex;let n=s[r];return(n==null?void 0:n.producer)!==e&&(n&&s.push(n),n=e.registerConsumer(e.newLink(this))),s[r]=n,this.producerIndex=r+1,T(n),e.flags&1&&(this.flags|=1),e.updateLink(n)}startUse(){const e=this.producerLinks;for(let s=0,r=e.length;s<r;s++){const n=e[s];n.producer.registerConsumer(n)}this.flags|=16}endUse(){const e=this.producerLinks;for(let s=0,r=e.length;s<r;s++){const n=e[s];n.producer.unregisterConsumer(n)}}areProducersUpToDate(){if(this.value===y)return!1;const e=this.producerLinks;for(let s=0,r=e.length;s<r;s++){const n=e[s],i=n.producer;if(T(n),!i.isLinkUpToDate(n))return!1}return!0}recompute(){let e;const s=m(this);try{this.producerIndex=0,this.flags&=-2;const i=this.computeFn;e=i(),this.error=null}catch(i){e=L,this.error=i}finally{m(s)}const r=this.producerLinks,n=this.producerIndex;if(n<r.length)for(let i=0,o=r.length-n;i<o;i++){const u=r.pop();u.producer.unregisterConsumer(u)}this.set(e)}}class ge{constructor(e){this.value=e,this.flags=0}newLink(e){return{producer:this}}registerConsumer(e){return e}unregisterConsumer(e){}updateValue(){}isLinkUpToDate(e){return!0}updateLink(e){return this.value}get(){return g(),this.value}subscribe(e){var s;return g(),typeof e=="function"?e(this.value):(s=e==null?void 0:e.next)==null||s.call(e,this.value),_}}class re extends se{constructor(e,s){super(s),this.producerLinks=null,this.cleanUpFn=null,this.flags=17;const r=Array.isArray(e);this.arrayMode=r,this.producers=(r?e:[e]).map(P)}callCleanUpFn(){const e=this.cleanUpFn;e&&(this.cleanUpFn=null,e())}startUse(){this.producerLinks=this.producers.map(e=>e.registerConsumer(e.newLink(this))),this.flags|=16}endUse(){this.callCleanUpFn();const e=this.producerLinks;if(this.producerLinks=null,e)for(let s=0,r=e.length;s<r;s++){const n=e[s];n.producer.unregisterConsumer(n)}}areProducersUpToDate(){const e=this.producerLinks;let s=this.value!==y;for(let r=0,n=e.length;r<n;r++){const i=e[r],o=i.producer;T(i),o.isLinkUpToDate(i)||(s=!1)}return s}recompute(){try{this.callCleanUpFn();const e=this.producerLinks.map(s=>s.producer.updateLink(s));this.cleanUpFn=$(this.derive(this.arrayMode?e:e[0]))}catch(e){this.error=e,this.set(L)}}}class me extends re{constructor(e,s,r){super(e,y),this.deriveFn=r}derive(e){const s=this.deriveFn;this.set(s(e))}}const ne=t=>{const e=t.set.bind(t);return e.set=e,e.update=t.update.bind(t),e};class ye extends re{constructor(e,s,r){super(e,s),this.deriveFn=r,this.setFn=ne(this)}derive(e){const s=this.deriveFn;return s(e,this.setFn)}}class ke extends x{constructor(e,s){super(e),this.onUseFn=s,this.cleanUpFn=null,this.flags=1}startUse(){this.cleanUpFn=$(this.onUseFn())}endUse(){const e=this.cleanUpFn;e&&(this.cleanUpFn=null,e())}}function D(t,e){return S(P(t),e)}const J=function(t){this.set(t(M(()=>this.get())))};function j(t,e){return D(t,typeof e=="function"?{set:e,update:J}:{...e,set:(e==null?void 0:e.set)??v,update:(e==null?void 0:e.update)??(e!=null&&e.set?J:v)})}const Ue=t=>P(t).get(),ie=(t,e)=>{const s=new ke(t,()=>e(r)),r=ne(s);return s},q=(t,e)=>{if(e){const{equal:s,notEqual:r}=e;s?t.equalFn=s:r&&(t.equalFn=(n,i)=>!r(n,i))}return t};function W(t,e){typeof e=="function"&&(e={onUse:e});const s=e==null?void 0:e.onUse;return S(s?q(ie(t,s),e):new ge(t))}function F(t,e){typeof e=="function"&&(e={onUse:e});const s=e==null?void 0:e.onUse,r=q(s?ie(t,s):new Z(t),e),n=S(r);return n.set=r.set.bind(r),n.update=r.update.bind(r),n}function we(t){return t.length<=1}function Ce(t,e,s){typeof e=="function"&&(e={derive:e});const{derive:r,...n}=e,i=we(r)?me:ye;return S(q(new i(t,s,r),n))}function k(t,e){return S(q(new ve(t),e))}const Le=()=>{},oe=t=>t,K=Symbol();function Se(t){return function(e){b(()=>{var s;for(const[r,n]of Object.entries(e))(s=t[`${r}$`])==null||s.set(n)})}}function $e(t,e){if(t===e)return null;let s=!1;const r={},n=new Set([...Object.keys(t),...Object.keys(e)]);for(const i of n){const o=e[i];t[i]!==o&&(r[i]=o,s=!0)}return s?r:null}function De(t,e=W(void 0),s={},r=F(void 0)){const{normalizeValue:n=oe,equal:i=Object.is}=s,o=()=>t,u=(c,d=o)=>{const h=c===void 0?void 0:n(c);return h===K?(console.error("Not using invalid value",c),d()):h===void 0?d():h},l=k(()=>u(e()),{equal:i}),a=k(()=>u(r(),l),{equal:i});return j(a,c=>{if(c!==void 0){const d=n(c);if(d===K){console.error("Not setting invalid value",c);return}c=d}r.set(c)})}const z=t=>!!(t&&typeof t=="function"&&"subscribe"in t),I=t=>z(t)?t:W(t),Fe=t=>z(t)?t:F(t),Ne=(t,e)=>{const s={};if(e){const r=z(e);for(const n of t)s[n]=r?k(()=>e()[n]):I(e[n])}return s},Pe=(t,e,s)=>{const r={};for(const n of t){const i=e==null?void 0:e[n],o=s==null?void 0:s[n];r[n]=i&&o?k(()=>i()??o()):i||o}return r},Ve=(t,e,s)=>{const r={},n=Object.keys(t),i=Ne(n,e==null?void 0:e.config),o=e==null?void 0:e.props;for(const u of n){const l=o==null?void 0:o[u];r[`${u}$`]=De(t[u],i[u],s==null?void 0:s[u],Fe(l))}return r},je=(t,e,s)=>{const r=Ve(t,e,s);return[r,Se(r)]},We=t=>{const e=[],s=[],r={};for(const[n,i]of Object.entries(t))n.endsWith("$")&&(e.push(n.substring(0,n.length-1)),s.push(i),r[n]=D(i));return{stores:r,state$:k(()=>{const n=s.map(Ue),i={};return e.forEach((o,u)=>{i[o]=n[u]}),i})}},ze=(t,e,s=n=>n[0],r=(n,i)=>i===n)=>{let n=e[0]();return j(Ce(e,{derive(i){const o=s(i),u=!r(i[0],o);return u&&e[0].set(o),(u||!r(n,o))&&(n=o,t()(o)),o},equal:r}),e[0].set.bind(e[0]))},Be=(t,e,s=oe,r=Y)=>j(k(()=>s(t()),{equal:r}),n=>{const i=s(n);r(t(),i)||(t.set(i),e()(i))}),He=t=>{const e=t.length;if(e===0)return null;let s=t[0];for(let r=1;r<e&&s;r++){const n=t[r];for(;s&&s!==n;){const i=s.compareDocumentPosition(n);if(i&Node.DOCUMENT_POSITION_CONTAINED_BY)break;if(i&Node.DOCUMENT_POSITION_CONTAINS){s=n;break}else if(i&Node.DOCUMENT_POSITION_DISCONNECTED)return null;s=s.parentElement}}return s},Qe=(t=document.body)=>{B(t)&&t.getBoundingClientRect()},Ge=(t,e)=>{e&&e.length>0&&t.classList.add(...e)},Je=(t,e)=>{e&&e.length>0&&t.classList.remove(...e)};function X(t,e,s,r){return t.addEventListener(e,s,r),function(){t.removeEventListener(e,s,r)}}let Ie=0;const Ke=()=>`auId-${Ie++}`,ue=t=>t!=null&&t!==!1;function Te(t,e){let s=new Set;return e.subscribe(r=>{const n=new Set(`${r??""}`.split(" "));n.delete("");const i=t.classList;for(const o of s)n.has(o)||i.remove(o);n.size>0&&i.add(...n),s=n})}function _e(t,e,s){return s.subscribe(r=>{ue(r)?t.setAttribute(e,""+(r===!0?e:r)):t.removeAttribute(e)})}function qe(t,e,s){return e==="class"?Te(t,s):_e(t,e,s)}function Ae(t,e,s){return s.subscribe(r=>{const n=t.style;n[e]=""+(ue(r)?r:"")})}function Ee(t,e,s){const r=s.subscribe(n=>{t.classList.toggle(e,n)});return()=>{r(),t.classList.remove(e)}}const B=t=>{var e;const s=((e=t==null?void 0:t.ownerDocument)==null?void 0:e.defaultView)??window;return t instanceof s.HTMLElement},ce=t=>(e,s)=>{if(B(e))return t(e,s)},Xe=(t,e)=>s=>{let r=!0,n;const i=e.subscribe(o=>{var u;r?(r=!1,n=t(s,o)):(u=n==null?void 0:n.update)==null||u.call(n,o)});return{destroy(){var o;(o=n==null?void 0:n.destroy)==null||o.call(n),i()}}};W(void 0);const Ye=(t,e=!0)=>()=>{const s=t.subscribe(Le);return{destroy:async()=>{e&&await Promise.resolve(),s()}}},ae={equal:Object.is},Oe=()=>{const t=F([],ae);return D(t,{register:e=>{let s=!1;return t.update(r=>[...r,e]),()=>{s||(s=!0,t.update(r=>{const n=r.indexOf(e);if(n>-1){const i=[...r];return i.splice(n,1),i}return r}))}}})},Re=()=>{const t=Oe();return{elements$:D(t),directive:e=>({destroy:t.register(e)})}},Ze=()=>{const{directive:t,elements$:e}=Re();return{directive:ce(t),elements$:e}},Me=()=>{const t=F(null,ae);return{element$:D(t),directive:e=>{let s=!1;return t.update(r=>r?(console.error("The directive cannot be used on multiple elements.",r,e),r):(s=!0,e)),s?{destroy(){t.update(r=>e===r?null:r)}}:void 0}}},et=()=>{const{directive:t,element$:e}=Me();return{directive:ce(t),element$:e}},tt=(...t)=>(e,s)=>{const r=b(()=>t.map(n=>n(e,s)));return{update(n){b(()=>r.forEach(i=>{var o;return(o=i==null?void 0:i.update)==null?void 0:o.call(i,n)}))},destroy(){b(()=>r.reverse().forEach(n=>{var i;return(i=n==null?void 0:n.destroy)==null?void 0:i.call(n)}))}}},st=(t,e)=>{const s=[],r=n=>b(()=>{n.forEach((o,u)=>{var l,a,c,d;const[h,U]=Array.isArray(o)?o:[o,void 0],p=s[u];if(p){if(p.directive===h){p.arg!==U&&((a=(l=p.instance)==null?void 0:l.update)==null||a.call(l,U),p.arg=U);return}(d=(c=p.instance)==null?void 0:c.destroy)==null||d.call(c)}const le=h(t,U);s[u]={directive:h,instance:le,arg:U}}),s.splice(n.length).reverse().forEach(({instance:o})=>{var u;return(u=o==null?void 0:o.destroy)==null?void 0:u.call(o)})});return r(e),{update:r,destroy:()=>r([])}},xe=t=>(e,s)=>{const r=[],n=F(s),{events:i,attributes:o,styles:u,classNames:l}=t(n);if(B(e))for(const[a,c]of Object.entries(i??{}))typeof c=="function"?r.push(X(e,a,c)):r.push(X(e,a,c.handler,c.options));for(const[a,c]of Object.entries(o??{}))c!=null&&r.push(qe(e,a,I(c)));for(const[a,c]of Object.entries(u??{}))c&&r.push(Ae(e,a,I(c)));for(const[a,c]of Object.entries(l??{}))r.push(Ee(e,a,I(c)));return{update:a=>n.set(a),destroy:()=>r.forEach(a=>a())}},rt=xe(t=>({attributes:{class:t}}));export{$e as A,D as B,Me as C,ze as D,Ce as E,Y as F,Be as G,et as H,K as I,Ze as J,Xe as K,He as L,xe as a,ce as b,rt as c,X as d,st as e,F as f,k as g,j as h,oe as i,Oe as j,Pe as k,Ne as l,tt as m,Le as n,Ye as o,Ke as p,B as q,W as r,We as s,Je as t,Ge as u,Qe as v,je as w,Ve as x,z as y,b as z};