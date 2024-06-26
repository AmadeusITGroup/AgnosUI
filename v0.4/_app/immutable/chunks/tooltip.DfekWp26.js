import{s as Mt,K as J,F as Dt,e as at,t as Ht,a as zt,c as ft,b as ut,d as Xt,f as Q,g as Yt,m as jt,X as tt,i as Ut,h as et,Y as nt,j as qt,n as pt,I as Kt,Z as Zt}from"./scheduler.DDKLfDno.js";import{n as Et,k as Rt,q as dt,s as Gt,m as At,d as Ct,v as Jt}from"./app.Dx-GQ-qc.js";import{S as Qt,i as te}from"./index.DMnRV_Lo.js";import{w as ee,c as T,e as ne,f as oe}from"./stores.CtR383IN.js";function ie(t){let e,o,n,i,r,s,c,a=[{"data-popper-arrow":""},{}],l={};for(let m=0;m<a.length;m+=1)l=Dt(l,a[m]);let f=[{role:"tooltip"},{"data-show":""},{"data-popper-placement":t[4]},{}],d={};for(let m=0;m<f.length;m+=1)d=Dt(d,f[m]);return{c(){e=at("div"),o=at("div"),n=Ht(t[0]),i=zt(),r=at("div"),this.h()},l(m){e=ft(m,"DIV",{role:!0,"data-show":!0,"data-popper-placement":!0});var u=ut(e);o=ft(u,"DIV",{class:!0});var g=ut(o);n=Xt(g,t[0]),g.forEach(Q),i=Yt(u),r=ft(u,"DIV",{"data-popper-arrow":!0}),ut(r).forEach(Q),u.forEach(Q),this.h()},h(){jt(o,"class","tooltip-inner"),tt(r,l),tt(e,d)},m(m,u){Ut(m,e,u),et(e,o),et(o,n),et(e,i),et(e,r),s||(c=[nt(t[3].call(null,r)),nt(Et.call(null,r,"tooltip-arrow position-absolute")),nt(t[2].call(null,e)),nt(Et.call(null,e,"tooltip bs-tooltip-auto fade show position-absolute"))],s=!0)},p(m,[u]){u&1&&qt(n,m[0]),tt(r,l=Rt(a,[{"data-popper-arrow":""},u&8&&{}])),tt(e,d=Rt(f,[{role:"tooltip"},{"data-show":""},u&16&&{"data-popper-placement":m[4]},u&4&&{}]))},i:pt,o:pt,d(m){m&&Q(e),s=!1,Kt(c)}}}function re(t,e,o){let n,i=pt,r=()=>(i(),i=Zt(c,f=>o(4,n=f)),c);t.$$.on_destroy.push(()=>i());let{content:s}=e,{placement$:c}=e;r();let{directive:a}=e,{arrowDirective:l}=e;return t.$$set=f=>{"content"in f&&o(0,s=f.content),"placement$"in f&&r(o(1,c=f.placement$)),"directive"in f&&o(2,a=f.directive),"arrowDirective"in f&&o(3,l=f.arrowDirective)},[s,c,a,l,n]}class se extends Qt{constructor(e){super(),te(this,e,re,ie,Mt,{content:0,placement$:1,directive:2,arrowDirective:3})}get content(){return this.$$.ctx[0]}set content(e){this.$$set({content:e}),J()}get placement$(){return this.$$.ctx[1]}set placement$(e){this.$$set({placement$:e}),J()}get directive(){return this.$$.ctx[2]}set directive(e){this.$$set({directive:e}),J()}get arrowDirective(){return this.$$.ctx[3]}set arrowDirective(e){this.$$set({arrowDirective:e}),J()}}const Y=Math.min,H=Math.max,it=Math.round,ot=Math.floor,N=t=>({x:t,y:t}),ce={left:"right",right:"left",bottom:"top",top:"bottom"},le={start:"end",end:"start"};function ae(t,e,o){return H(t,Y(e,o))}function ct(t,e){return typeof t=="function"?t(e):t}function j(t){return t.split("-")[0]}function Z(t){return t.split("-")[1]}function fe(t){return t==="x"?"y":"x"}function ht(t){return t==="y"?"height":"width"}function wt(t){return["top","bottom"].includes(j(t))?"y":"x"}function vt(t){return fe(wt(t))}function ue(t,e,o){o===void 0&&(o=!1);const n=Z(t),i=vt(t),r=ht(i);let s=i==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=rt(s)),[s,rt(s)]}function de(t){const e=rt(t);return[gt(t),e,gt(e)]}function gt(t){return t.replace(/start|end/g,e=>le[e])}function me(t,e,o){const n=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?i:n:e?n:i;case"left":case"right":return e?r:s;default:return[]}}function pe(t,e,o,n){const i=Z(t);let r=me(j(t),o==="start",n);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(gt)))),r}function rt(t){return t.replace(/left|right|bottom|top/g,e=>ce[e])}function ge(t){return{top:0,right:0,bottom:0,left:0,...t}}function Pt(t){return typeof t!="number"?ge(t):{top:t,right:t,bottom:t,left:t}}function st(t){const{x:e,y:o,width:n,height:i}=t;return{width:n,height:i,top:o,left:e,right:e+n,bottom:o+i,x:e,y:o}}function $t(t,e,o){let{reference:n,floating:i}=t;const r=wt(e),s=vt(e),c=ht(s),a=j(e),l=r==="y",f=n.x+n.width/2-i.width/2,d=n.y+n.height/2-i.height/2,m=n[c]/2-i[c]/2;let u;switch(a){case"top":u={x:f,y:n.y-i.height};break;case"bottom":u={x:f,y:n.y+n.height};break;case"right":u={x:n.x+n.width,y:d};break;case"left":u={x:n.x-i.width,y:d};break;default:u={x:n.x,y:n.y}}switch(Z(e)){case"start":u[s]-=m*(o&&l?-1:1);break;case"end":u[s]+=m*(o&&l?-1:1);break}return u}const he=async(t,e,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:s}=o,c=r.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(e));let l=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:f,y:d}=$t(l,n,a),m=n,u={},g=0;for(let h=0;h<c.length;h++){const{name:v,fn:w}=c[h],{x,y:b,data:D,reset:O}=await w({x:f,y:d,initialPlacement:n,placement:m,strategy:i,middlewareData:u,rects:l,platform:s,elements:{reference:t,floating:e}});f=x??f,d=b??d,u={...u,[v]:{...u[v],...D}},O&&g<=50&&(g++,typeof O=="object"&&(O.placement&&(m=O.placement),O.rects&&(l=O.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):O.rects),{x:f,y:d}=$t(l,m,a)),h=-1)}return{x:f,y:d,placement:m,strategy:i,middlewareData:u}};async function we(t,e){var o;e===void 0&&(e={});const{x:n,y:i,platform:r,rects:s,elements:c,strategy:a}=t,{boundary:l="clippingAncestors",rootBoundary:f="viewport",elementContext:d="floating",altBoundary:m=!1,padding:u=0}=ct(e,t),g=Pt(u),v=c[m?d==="floating"?"reference":"floating":d],w=st(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(v)))==null||o?v:v.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:l,rootBoundary:f,strategy:a})),x=d==="floating"?{x:n,y:i,width:s.floating.width,height:s.floating.height}:s.reference,b=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),D=await(r.isElement==null?void 0:r.isElement(b))?await(r.getScale==null?void 0:r.getScale(b))||{x:1,y:1}:{x:1,y:1},O=st(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:x,offsetParent:b,strategy:a}):x);return{top:(w.top-O.top+g.top)/D.y,bottom:(O.bottom-w.bottom+g.bottom)/D.y,left:(w.left-O.left+g.left)/D.x,right:(O.right-w.right+g.right)/D.x}}const ve=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:n,placement:i,rects:r,platform:s,elements:c,middlewareData:a}=e,{element:l,padding:f=0}=ct(t,e)||{};if(l==null)return{};const d=Pt(f),m={x:o,y:n},u=vt(i),g=ht(u),h=await s.getDimensions(l),v=u==="y",w=v?"top":"left",x=v?"bottom":"right",b=v?"clientHeight":"clientWidth",D=r.reference[g]+r.reference[u]-m[u]-r.floating[g],O=m[u]-r.reference[u],R=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let $=R?R[b]:0;(!$||!await(s.isElement==null?void 0:s.isElement(R)))&&($=c.floating[b]||r.floating[g]);const p=D/2-O/2,y=$/2-h[g]/2-1,L=Y(d[w],y),W=Y(d[x],y),E=L,M=$-h[g]-W,A=$/2-h[g]/2+p,P=ae(E,A,M),S=!a.arrow&&Z(i)!=null&&A!==P&&r.reference[g]/2-(A<E?L:W)-h[g]/2<0,V=S?A<E?A-E:A-M:0;return{[u]:m[u]+V,data:{[u]:P,centerOffset:A-P-V,...S&&{alignmentOffset:V}},reset:S}}}),ye=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:i,middlewareData:r,rects:s,initialPlacement:c,platform:a,elements:l}=e,{mainAxis:f=!0,crossAxis:d=!0,fallbackPlacements:m,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:h=!0,...v}=ct(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const w=j(i),x=j(c)===c,b=await(a.isRTL==null?void 0:a.isRTL(l.floating)),D=m||(x||!h?[rt(c)]:de(c));!m&&g!=="none"&&D.push(...pe(c,h,g,b));const O=[c,...D],R=await we(e,v),$=[];let p=((n=r.flip)==null?void 0:n.overflows)||[];if(f&&$.push(R[w]),d){const E=ue(i,s,b);$.push(R[E[0]],R[E[1]])}if(p=[...p,{placement:i,overflows:$}],!$.every(E=>E<=0)){var y,L;const E=(((y=r.flip)==null?void 0:y.index)||0)+1,M=O[E];if(M)return{data:{index:E,overflows:p},reset:{placement:M}};let A=(L=p.filter(P=>P.overflows[0]<=0).sort((P,S)=>P.overflows[1]-S.overflows[1])[0])==null?void 0:L.placement;if(!A)switch(u){case"bestFit":{var W;const P=(W=p.map(S=>[S.placement,S.overflows.filter(V=>V>0).reduce((V,Wt)=>V+Wt,0)]).sort((S,V)=>S[1]-V[1])[0])==null?void 0:W[0];P&&(A=P);break}case"initialPlacement":A=c;break}if(i!==A)return{reset:{placement:A}}}return{}}}};async function xe(t,e){const{placement:o,platform:n,elements:i}=t,r=await(n.isRTL==null?void 0:n.isRTL(i.floating)),s=j(o),c=Z(o),a=wt(o)==="y",l=["left","top"].includes(s)?-1:1,f=r&&a?-1:1,d=ct(e,t);let{mainAxis:m,crossAxis:u,alignmentAxis:g}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return c&&typeof g=="number"&&(u=c==="end"?g*-1:g),a?{x:u*f,y:m*l}:{x:m*l,y:u*f}}const be=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,n;const{x:i,y:r,placement:s,middlewareData:c}=e,a=await xe(e,t);return s===((o=c.offset)==null?void 0:o.placement)&&(n=c.arrow)!=null&&n.alignmentOffset?{}:{x:i+a.x,y:r+a.y,data:{...a,placement:s}}}}};function q(t){return St(t)?(t.nodeName||"").toLowerCase():"#document"}function C(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function B(t){var e;return(e=(St(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function St(t){return t instanceof Node||t instanceof C(t).Node}function F(t){return t instanceof Element||t instanceof C(t).Element}function k(t){return t instanceof HTMLElement||t instanceof C(t).HTMLElement}function Lt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof C(t).ShadowRoot}function G(t){const{overflow:e,overflowX:o,overflowY:n,display:i}=_(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(i)}function Oe(t){return["table","td","th"].includes(q(t))}function yt(t){const e=xt(),o=_(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function De(t){let e=I(t);for(;k(e)&&!U(e);){if(yt(e))return e;e=I(e)}return null}function xt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function U(t){return["html","body","#document"].includes(q(t))}function _(t){return C(t).getComputedStyle(t)}function lt(t){return F(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function I(t){if(q(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Lt(t)&&t.host||B(t);return Lt(e)?e.host:e}function Ft(t){const e=I(t);return U(e)?t.ownerDocument?t.ownerDocument.body:t.body:k(e)&&G(e)?e:Ft(e)}function K(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const i=Ft(t),r=i===((n=t.ownerDocument)==null?void 0:n.body),s=C(i);return r?e.concat(s,s.visualViewport||[],G(i)?i:[],s.frameElement&&o?K(s.frameElement):[]):e.concat(i,K(i,[],o))}function kt(t){const e=_(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const i=k(t),r=i?t.offsetWidth:o,s=i?t.offsetHeight:n,c=it(o)!==r||it(n)!==s;return c&&(o=r,n=s),{width:o,height:n,$:c}}function bt(t){return F(t)?t:t.contextElement}function X(t){const e=bt(t);if(!k(e))return N(1);const o=e.getBoundingClientRect(),{width:n,height:i,$:r}=kt(e);let s=(r?it(o.width):o.width)/n,c=(r?it(o.height):o.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const Ee=N(0);function Vt(t){const e=C(t);return!xt()||!e.visualViewport?Ee:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Re(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==C(t)?!1:e}function z(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),r=bt(t);let s=N(1);e&&(n?F(n)&&(s=X(n)):s=X(t));const c=Re(r,o,n)?Vt(r):N(0);let a=(i.left+c.x)/s.x,l=(i.top+c.y)/s.y,f=i.width/s.x,d=i.height/s.y;if(r){const m=C(r),u=n&&F(n)?C(n):n;let g=m,h=g.frameElement;for(;h&&n&&u!==g;){const v=X(h),w=h.getBoundingClientRect(),x=_(h),b=w.left+(h.clientLeft+parseFloat(x.paddingLeft))*v.x,D=w.top+(h.clientTop+parseFloat(x.paddingTop))*v.y;a*=v.x,l*=v.y,f*=v.x,d*=v.y,a+=b,l+=D,g=C(h),h=g.frameElement}}return st({width:f,height:d,x:a,y:l})}const Ae=[":popover-open",":modal"];function Ot(t){return Ae.some(e=>{try{return t.matches(e)}catch{return!1}})}function Ce(t){let{elements:e,rect:o,offsetParent:n,strategy:i}=t;const r=i==="fixed",s=B(n),c=e?Ot(e.floating):!1;if(n===s||c&&r)return o;let a={scrollLeft:0,scrollTop:0},l=N(1);const f=N(0),d=k(n);if((d||!d&&!r)&&((q(n)!=="body"||G(s))&&(a=lt(n)),k(n))){const m=z(n);l=X(n),f.x=m.x+n.clientLeft,f.y=m.y+n.clientTop}return{width:o.width*l.x,height:o.height*l.y,x:o.x*l.x-a.scrollLeft*l.x+f.x,y:o.y*l.y-a.scrollTop*l.y+f.y}}function $e(t){return Array.from(t.getClientRects())}function Bt(t){return z(B(t)).left+lt(t).scrollLeft}function Le(t){const e=B(t),o=lt(t),n=t.ownerDocument.body,i=H(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=H(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let s=-o.scrollLeft+Bt(t);const c=-o.scrollTop;return _(n).direction==="rtl"&&(s+=H(e.clientWidth,n.clientWidth)-i),{width:i,height:r,x:s,y:c}}function Te(t,e){const o=C(t),n=B(t),i=o.visualViewport;let r=n.clientWidth,s=n.clientHeight,c=0,a=0;if(i){r=i.width,s=i.height;const l=xt();(!l||l&&e==="fixed")&&(c=i.offsetLeft,a=i.offsetTop)}return{width:r,height:s,x:c,y:a}}function _e(t,e){const o=z(t,!0,e==="fixed"),n=o.top+t.clientTop,i=o.left+t.clientLeft,r=k(t)?X(t):N(1),s=t.clientWidth*r.x,c=t.clientHeight*r.y,a=i*r.x,l=n*r.y;return{width:s,height:c,x:a,y:l}}function Tt(t,e,o){let n;if(e==="viewport")n=Te(t,o);else if(e==="document")n=Le(B(t));else if(F(e))n=_e(e,o);else{const i=Vt(t);n={...e,x:e.x-i.x,y:e.y-i.y}}return st(n)}function Nt(t,e){const o=I(t);return o===e||!F(o)||U(o)?!1:_(o).position==="fixed"||Nt(o,e)}function Pe(t,e){const o=e.get(t);if(o)return o;let n=K(t,[],!1).filter(c=>F(c)&&q(c)!=="body"),i=null;const r=_(t).position==="fixed";let s=r?I(t):t;for(;F(s)&&!U(s);){const c=_(s),a=yt(s);!a&&c.position==="fixed"&&(i=null),(r?!a&&!i:!a&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||G(s)&&!a&&Nt(t,s))?n=n.filter(f=>f!==s):i=c,s=I(s)}return e.set(t,n),n}function Se(t){let{element:e,boundary:o,rootBoundary:n,strategy:i}=t;const s=[...o==="clippingAncestors"?Ot(e)?[]:Pe(e,this._c):[].concat(o),n],c=s[0],a=s.reduce((l,f)=>{const d=Tt(e,f,i);return l.top=H(d.top,l.top),l.right=Y(d.right,l.right),l.bottom=Y(d.bottom,l.bottom),l.left=H(d.left,l.left),l},Tt(e,c,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Fe(t){const{width:e,height:o}=kt(t);return{width:e,height:o}}function ke(t,e,o){const n=k(e),i=B(e),r=o==="fixed",s=z(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const a=N(0);if(n||!n&&!r)if((q(e)!=="body"||G(i))&&(c=lt(e)),n){const d=z(e,!0,r,e);a.x=d.x+e.clientLeft,a.y=d.y+e.clientTop}else i&&(a.x=Bt(i));const l=s.left+c.scrollLeft-a.x,f=s.top+c.scrollTop-a.y;return{x:l,y:f,width:s.width,height:s.height}}function mt(t){return _(t).position==="static"}function _t(t,e){return!k(t)||_(t).position==="fixed"?null:e?e(t):t.offsetParent}function It(t,e){const o=C(t);if(Ot(t))return o;if(!k(t)){let i=I(t);for(;i&&!U(i);){if(F(i)&&!mt(i))return i;i=I(i)}return o}let n=_t(t,e);for(;n&&Oe(n)&&mt(n);)n=_t(n,e);return n&&U(n)&&mt(n)&&!yt(n)?o:n||De(t)||o}const Ve=async function(t){const e=this.getOffsetParent||It,o=this.getDimensions,n=await o(t.floating);return{reference:ke(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function Be(t){return _(t).direction==="rtl"}const Ne={convertOffsetParentRelativeRectToViewportRelativeRect:Ce,getDocumentElement:B,getClippingRect:Se,getOffsetParent:It,getElementRects:Ve,getClientRects:$e,getDimensions:Fe,getScale:X,isElement:F,isRTL:Be};function Ie(t,e){let o=null,n;const i=B(t);function r(){var c;clearTimeout(n),(c=o)==null||c.disconnect(),o=null}function s(c,a){c===void 0&&(c=!1),a===void 0&&(a=1),r();const{left:l,top:f,width:d,height:m}=t.getBoundingClientRect();if(c||e(),!d||!m)return;const u=ot(f),g=ot(i.clientWidth-(l+d)),h=ot(i.clientHeight-(f+m)),v=ot(l),x={rootMargin:-u+"px "+-g+"px "+-h+"px "+-v+"px",threshold:H(0,Y(1,a))||1};let b=!0;function D(O){const R=O[0].intersectionRatio;if(R!==a){if(!b)return s();R?s(!1,R):n=setTimeout(()=>{s(!1,1e-7)},1e3)}b=!1}try{o=new IntersectionObserver(D,{...x,root:i.ownerDocument})}catch{o=new IntersectionObserver(D,x)}o.observe(t)}return s(!0),r}function We(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:a=!1}=n,l=bt(t),f=i||r?[...l?K(l):[],...K(e)]:[];f.forEach(w=>{i&&w.addEventListener("scroll",o,{passive:!0}),r&&w.addEventListener("resize",o)});const d=l&&c?Ie(l,o):null;let m=-1,u=null;s&&(u=new ResizeObserver(w=>{let[x]=w;x&&x.target===l&&u&&(u.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var b;(b=u)==null||b.observe(e)})),o()}),l&&!a&&u.observe(l),u.observe(e));let g,h=a?z(t):null;a&&v();function v(){const w=z(t);h&&(w.x!==h.x||w.y!==h.y||w.width!==h.width||w.height!==h.height)&&o(),h=w,g=requestAnimationFrame(v)}return o(),()=>{var w;f.forEach(x=>{i&&x.removeEventListener("scroll",o),r&&x.removeEventListener("resize",o)}),d?.(),(w=u)==null||w.disconnect(),u=null,a&&cancelAnimationFrame(g)}}const Me=be,He=ye,ze=ve,Xe=(t,e,o)=>{const n=new Map,i={platform:Ne,...o},r={...i.platform,_c:n};return he(t,e,{...i,platform:r})},Ye={computePositionOptions:{},autoUpdateOptions:{},arrowOptions:{}},je=t=>{const[{autoUpdateOptions$:e,computePositionOptions$:o,arrowOptions$:n},i]=ee(Ye,t),{directive:r,element$:s}=dt(),{directive:c,element$:a}=dt(),{directive:l,element$:f}=dt(),d=T(()=>{const p=f();if(!p)return null;const y=n();return typeof y=="function"?L=>({...y(L),element:p}):{...y,element:p}}),m=T(()=>{let p=o();const y=d();return y&&(p={...p,middleware:[...p.middleware??[],ze(y)]}),p}),u=ne([s,a,m,e],([p,y,L,W],E)=>{if(p&&y){const M=We(y,p,()=>{E(Xe(y,p,L))},W);return()=>{E(null),M()}}},null),g=Gt(u,null),h=T(()=>{var p;return(p=g())==null?void 0:p.placement}),v=T(()=>{var p;return(p=g())==null?void 0:p.middlewareData}),w=T(()=>{var p;return(p=g())==null?void 0:p.x}),x=T(()=>{var p;return(p=g())==null?void 0:p.y}),b=T(()=>{var p;return(p=g())==null?void 0:p.strategy}),D=T(()=>{var p,y;return(y=(p=v())==null?void 0:p.arrow)==null?void 0:y.x}),O=T(()=>{var p,y;return(y=(p=v())==null?void 0:p.arrow)==null?void 0:y.y}),R=T(()=>{const p=s();p&&(p.style.left=`${w()??0}px`,p.style.top=`${x()??0}px`)}),$=T(()=>{const p=f();if(p){const y=D(),L=O();p.style.left=y!=null?`${y}px`:"",p.style.top=L!=null?`${L}px`:""}});return{patch:i,...oe({x$:w,y$:x,strategy$:b,placement$:h,middlewareData$:v}),directives:{referenceDirective:c,floatingDirective:At(r,Ct(R)),arrowDirective:At(l,Ct($))}}},Ge=Jt((t,e)=>{const o=e.content;let n;const{directives:{floatingDirective:i,referenceDirective:r,arrowDirective:s},stores:{placement$:c}}=je({props:{arrowOptions:{padding:6},computePositionOptions:{placement:"top",middleware:[Me(8),He()]}}}),a=r(t);t.addEventListener("mouseenter",l),t.addEventListener("mouseleave",f);function l(){n||(n=new se({target:document.body,props:{content:o,placement$:c,directive:i,arrowDirective:s}}))}function f(){n?.$destroy(),n=void 0}return{update(d){n&&(n.content=d.content)},destroy(){f(),a?.destroy?.(),t.removeEventListener("mouseenter",l),t.removeEventListener("mouseleave",f)}}});export{Ge as t};
