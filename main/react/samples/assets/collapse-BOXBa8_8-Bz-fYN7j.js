import{r as Q,j as B}from"./App-B6FkxJDS.js";import{u as G}from"./config-BOiUz1he.js";import{c as X}from"./baseTransitions-CnX84Nem.js";import{w as J,i as K,s as Y,m as Z,a as P,n as y}from"./stores-DX-ADOKq-CX8PQfLG.js";import{t as p,a as C,b as $}from"./writables-DCiBdIBK-BuTInPgN.js";import{a as ee,c as se}from"./collapse-CVjUhnIz-Bmn8kCWb.js";import{a as te}from"./directive-CEErjM5c-BeKRddEc.js";const re=(t,e)=>Object.is(t,e)&&(!t||typeof t!="object")&&typeof t!="function",L=[];let w=!1;const ie=t=>{const e=!w;w=!0;let s=!0,r,i;try{r=t()}finally{if(e){for(;L.length>0;){const n=L.shift();try{n.notify()}catch(l){s&&(s=!1,i=l)}}w=!1}}if(s)return r;throw i},D=t=>{try{if(t.skipMarkDirty=!0,t.producer.updateValue(),t.producer.flags&16)throw new Error("assert failed: store still dirty after updating it")}finally{t.skipMarkDirty=!1}},u=()=>{},x=(t,e)=>{const s=t?t[e]:null;return typeof s=="function"?s.bind(t):u},U={next:u,pause:u,resume:u},ne=t=>({next:typeof t=="function"?t.bind(null):x(t,"next"),pause:x(t,"pause"),resume:x(t,"resume")});class oe{constructor(e,s){this.dirtyCount=1,this.subscriber=ne(s),this.link=e.registerConsumer(e.newLink(this)),this.notify(!0)}unsubscribe(){this.subscriber!==U&&(this.subscriber=U,this.link.producer.unregisterConsumer(this.link))}markDirty(){this.dirtyCount++,L.push(this),this.dirtyCount===1&&this.subscriber.pause()}notify(e=!1){if(this.dirtyCount--,this.dirtyCount===0&&this.subscriber!==U){const s=this.link,r=s.producer;if(D(s),r.isLinkUpToDate(s)&&!e)this.subscriber.resume();else{const i=r.updateLink(s);this.subscriber.next(i)}}}}let a=null;const c=t=>{const e=a;return a=t,e},q=t=>{let e;const s=c(null);try{e=t()}finally{c(s)}return e};let d=!1;const b=()=>{if(d)throw new Error("Reading or writing a signal is forbidden during the notification phase.")};let g=0;class ae{constructor(e){this.value=e,this.flags=0,this.version=0,this.equalFn=re,this.equalCache=null,this.consumerLinks=[]}newLink(e){return{version:-1,value:void 0,producer:this,indexInProducer:0,consumer:e,skipMarkDirty:!1}}isLinkUpToDate(e){if(e.version===this.version)return!0;if(e.version===this.version-1||e.version<0)return!1;let s=this.equalCache;s||(s={},this.equalCache=s);let r=s[e.version];return r===void 0&&(r=this.equal(e.value,this.value),s[e.version]=r),r}updateLink(e){return e.value=this.value,e.version=this.version,this.readValue()}registerConsumer(e){const s=this.consumerLinks,r=s.length;return e.indexInProducer=r,s[r]=e,e}unregisterConsumer(e){const s=this.consumerLinks,r=e.indexInProducer;if(s[r]!==e)throw new Error("assert failed: invalid indexInProducer");const i=s.pop();e===i?r===0&&this.checkUnused():(s[r]=i,i.indexInProducer=r)}checkUnused(){}updateValue(){}equal(e,s){const r=this.equalFn;return r(e,s)}increaseEpoch(){g++,this.markConsumersDirty()}set(e){b(),this.equal(this.value,e)||ie(()=>{this.value=e,this.version++,this.equalCache=null,this.increaseEpoch()})}update(e){this.set(e(this.value))}markConsumersDirty(){const e=d;d=!0;try{const s=this.consumerLinks;for(let r=0,i=s.length;r<i;r++){const n=s[r];n.skipMarkDirty||n.consumer.markDirty()}}finally{d=e}}get(){return b(),a?a.addProducer(this):this.readValue()}readValue(){return this.value}subscribe(e){b();const s=new oe(this,e),r=()=>s.unsubscribe();return r.unsubscribe=r,r}}let f=null,m=!1;const ue=()=>{if(m)throw new Error("assert failed: recursive flushUnused call");m=!0;try{const t=f;if(t){f=null;for(let e=0,s=t.length;e<s;e++){const r=t[e];r.flags&=-5,r.checkUnused()}}}finally{m=!1}};class M extends ae{constructor(){super(...arguments),this.extraUsages=0}updateValue(){if(!(this.flags&2)){if(!this.extraUsages&&!this.consumerLinks.length)throw new Error("assert failed: untracked producer usage");this.flags|=2,q(()=>this.startUse())}}checkUnused(){const e=this.flags;e&2&&!this.extraUsages&&!this.consumerLinks.length&&(m||e&1?(this.flags&=-3,q(()=>this.endUse())):e&4||(this.flags|=4,f||(f=[],queueMicrotask(ue)),f.push(this)))}get(){if(b(),a)return a.addProducer(this);this.extraUsages++;try{if(this.updateValue(),this.flags&16)throw new Error("assert failed: store still dirty after updating it");return this.readValue()}finally{--this.extraUsages===0&&this.checkUnused()}}}const S=()=>{};S.unsubscribe=S;const ce=t=>{if(!t)return S;if(t.unsubscribe===t)return t;const e=typeof t=="function"?()=>t():()=>t.unsubscribe();return e.unsubscribe=e,e};class le extends M{constructor(e){super(void 0),this.subscribable=e,this.subscriber=this.createSubscriber(),this.unsubscribe=null,this.flags=1}createSubscriber(){const e=s=>this.set(s);return e.next=e,e.pause=()=>{this.markConsumersDirty()},e}startUse(){this.unsubscribe=ce(this.subscribable.subscribe(this.subscriber))}endUse(){const e=this.unsubscribe;e&&(this.unsubscribe=null,e())}}const F=typeof Symbol=="function"&&Symbol.observable||"@@observable",he=function(){return this},N=Symbol(),I=new WeakMap,de=t=>{const e=t[N];if(e)return e;let s=I.get(t);if(!s){let r=t;"subscribe"in r||(r=r[F]()),s=new le(r),I.set(t,s)}return s},A=(t,e)=>{const s=t.get.bind(t);return e&&Object.assign(s,e),s.get=s,s.subscribe=t.subscribe.bind(t),s[F]=he,s[N]=t,s},R=1e3,v=Symbol("UNSET"),k=Symbol("ERRORED"),T=t=>t===v||t===k;class fe extends M{constructor(){super(...arguments),this.flags=16}equal(e,s){return T(e)||T(s)?!1:super.equal(e,s)}markDirty(){this.flags&16||(this.flags|=16,this.markConsumersDirty())}readValue(){const e=this.value;if(e===k)throw this.error;if(e===v)throw new Error("assert failed: computed value is not set");return e}updateValue(){if(this.flags&8)throw new Error("recursive computed");if(super.updateValue(),!(this.flags&16))return;this.flags|=8;const e=c(null);try{let s=0;do{do if(s++,this.flags&=-17,this.areProducersUpToDate())return;while(this.flags&16&&s<R);this.recompute()}while(this.flags&16&&s<R);this.flags&16&&(this.flags&=-17,this.error=new Error("reached maximum number of store changes in one shot"),this.set(k))}finally{c(e),this.flags&=-9}}}class pe extends fe{constructor(e){super(v),this.computeFn=e,this.producerIndex=0,this.producerLinks=[],this.epoch=-1}increaseEpoch(){}updateValue(){this.flags&2&&this.epoch===g||(super.updateValue(),this.epoch=g)}get(){return!a&&!d&&this.epoch===g&&(!(this.flags&1)||this.flags&2)?this.readValue():super.get()}addProducer(e){const s=this.producerLinks,r=this.producerIndex;let i=s[r];return(i==null?void 0:i.producer)!==e&&(i&&s.push(i),i=e.registerConsumer(e.newLink(this))),s[r]=i,this.producerIndex=r+1,D(i),e.flags&1&&(this.flags|=1),e.updateLink(i)}startUse(){const e=this.producerLinks;for(let s=0,r=e.length;s<r;s++){const i=e[s];i.producer.registerConsumer(i)}this.flags|=16}endUse(){const e=this.producerLinks;for(let s=0,r=e.length;s<r;s++){const i=e[s];i.producer.unregisterConsumer(i)}}areProducersUpToDate(){if(this.value===v)return!1;const e=this.producerLinks;for(let s=0,r=e.length;s<r;s++){const i=e[s],n=i.producer;if(D(i),!n.isLinkUpToDate(i))return!1}return!0}recompute(){let e;const s=c(this);try{this.producerIndex=0,this.flags&=-2;const n=this.computeFn;e=n(),this.error=null}catch(n){e=k,this.error=n}finally{c(s)}const r=this.producerLinks,i=this.producerIndex;if(i<r.length)for(let n=0,l=r.length-i;n<l;n++){const h=r.pop();h.producer.unregisterConsumer(h)}this.set(e)}}function be(t,e){return A(de(t),e)}function ge(t,e){return be(t,{...e,set:u,update:u})}const me=(t,e)=>t;function O(t,e){return A(me(new pe(t)))}const ve={visible:!0,horizontal:!1,onVisibleChange:y,onShown:y,onHidden:y,animated:!0,animatedOnInit:!1,className:"",id:""},ke={horizontal:p,onVisibleChange:C,onHidden:C,onShown:C,animatedOnInit:p,animated:p,className:$,visible:p,id:$};function ye(t){const[{animatedOnInit$:e,animated$:s,visible$:r,onVisibleChange$:i,onHidden$:n,onShown$:l,horizontal$:h,id$:H,...W},_]=J(ve,t,ke),E=K(H),j=ge(O(()=>h()?ee:se)),o=X({props:{transition:j,visible:r,animated:s,animatedOnInit:e,onVisibleChange:i,onHidden:n,onShown:l}}),V=o.stores.visible$,z=o.stores.hidden$;return{...Y({...W,visible$:V,hidden$:z,horizontal$:h}),patch:_,api:{open:o.api.show,close:o.api.hide,toggle:o.api.toggle},directives:{collapseDirective:Z(o.directives.directive,P(()=>({attributes:{id:E},classNames:{"au-collapse":!0}}))),triggerDirective:P(()=>({attributes:{"aria-expanded":O(()=>`${V()}`),"aria-controls":E},events:{click:()=>o.api.toggle()}}))}}}const Ce=ye;function Ve(t){const{api:e,directives:s}=G(Ce,t,"collapse");return Q.useImperativeHandle(t.ref,()=>e,[e]),B.jsx("div",{...te(s.collapseDirective),children:t.children})}export{Ve as C};
