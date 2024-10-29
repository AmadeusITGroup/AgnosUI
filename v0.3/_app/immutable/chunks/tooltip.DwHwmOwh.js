import{s as Wt,K as G,F as bt,e as at,t as Mt,a as Ht,c as ft,b as ut,d as zt,f as J,g as Xt,m as Yt,X as Q,i as jt,h as tt,Y as et,j as Ut,n as mt,I as qt,Z as Kt}from"./scheduler.Bus5bagK.js";import{q as Ot,l as Et,s as dt,v as Zt,m as Rt,e as Dt,w as Gt}from"./app.CA5c7Z0I.js";import{S as Jt,i as Qt}from"./index.hvgIYORv.js";import{w as te,c as _,f as ee,b as ne}from"./stores.BHziVshQ.js";function oe(t){let e,o,n,i,r,s,c,a=[{"data-popper-arrow":""},{}],l={};for(let m=0;m<a.length;m+=1)l=bt(l,a[m]);let f=[{role:"tooltip"},{"data-show":""},{"data-popper-placement":t[4]},{}],d={};for(let m=0;m<f.length;m+=1)d=bt(d,f[m]);return{c(){e=at("div"),o=at("div"),n=Mt(t[0]),i=Ht(),r=at("div"),this.h()},l(m){e=ft(m,"DIV",{role:!0,"data-show":!0,"data-popper-placement":!0});var u=ut(e);o=ft(u,"DIV",{class:!0});var g=ut(o);n=zt(g,t[0]),g.forEach(J),i=Xt(u),r=ft(u,"DIV",{"data-popper-arrow":!0}),ut(r).forEach(J),u.forEach(J),this.h()},h(){Yt(o,"class","tooltip-inner"),Q(r,l),Q(e,d)},m(m,u){jt(m,e,u),tt(e,o),tt(o,n),tt(e,i),tt(e,r),s||(c=[et(t[3].call(null,r)),et(Ot.call(null,r,"tooltip-arrow position-absolute")),et(t[2].call(null,e)),et(Ot.call(null,e,"tooltip bs-tooltip-auto fade show position-absolute"))],s=!0)},p(m,[u]){u&1&&Ut(n,m[0]),Q(r,l=Et(a,[{"data-popper-arrow":""},u&8&&{}])),Q(e,d=Et(f,[{role:"tooltip"},{"data-show":""},u&16&&{"data-popper-placement":m[4]},u&4&&{}]))},i:mt,o:mt,d(m){m&&J(e),s=!1,qt(c)}}}function ie(t,e,o){let n,i=mt,r=()=>(i(),i=Kt(c,f=>o(4,n=f)),c);t.$$.on_destroy.push(()=>i());let{content:s}=e,{placement$:c}=e;r();let{directive:a}=e,{arrowDirective:l}=e;return t.$$set=f=>{"content"in f&&o(0,s=f.content),"placement$"in f&&r(o(1,c=f.placement$)),"directive"in f&&o(2,a=f.directive),"arrowDirective"in f&&o(3,l=f.arrowDirective)},[s,c,a,l,n]}class re extends Jt{constructor(e){super(),Qt(this,e,ie,oe,Wt,{content:0,placement$:1,directive:2,arrowDirective:3})}get content(){return this.$$.ctx[0]}set content(e){this.$$set({content:e}),G()}get placement$(){return this.$$.ctx[1]}set placement$(e){this.$$set({placement$:e}),G()}get directive(){return this.$$.ctx[2]}set directive(e){this.$$set({directive:e}),G()}get arrowDirective(){return this.$$.ctx[3]}set arrowDirective(e){this.$$set({arrowDirective:e}),G()}}const Y=Math.min,H=Math.max,ot=Math.round,nt=Math.floor,N=t=>({x:t,y:t}),se={left:"right",right:"left",bottom:"top",top:"bottom"},ce={start:"end",end:"start"};function le(t,e,o){return H(t,Y(e,o))}function st(t,e){return typeof t=="function"?t(e):t}function j(t){return t.split("-")[0]}function K(t){return t.split("-")[1]}function ae(t){return t==="x"?"y":"x"}function gt(t){return t==="y"?"height":"width"}function ht(t){return["top","bottom"].includes(j(t))?"y":"x"}function wt(t){return ae(ht(t))}function fe(t,e,o){o===void 0&&(o=!1);const n=K(t),i=wt(t),r=gt(i);let s=i==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=it(s)),[s,it(s)]}function ue(t){const e=it(t);return[pt(t),e,pt(e)]}function pt(t){return t.replace(/start|end/g,e=>ce[e])}function de(t,e,o){const n=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return o?e?i:n:e?n:i;case"left":case"right":return e?r:s;default:return[]}}function me(t,e,o,n){const i=K(t);let r=de(j(t),o==="start",n);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(pt)))),r}function it(t){return t.replace(/left|right|bottom|top/g,e=>se[e])}function pe(t){return{top:0,right:0,bottom:0,left:0,...t}}function Tt(t){return typeof t!="number"?pe(t):{top:t,right:t,bottom:t,left:t}}function rt(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function At(t,e,o){let{reference:n,floating:i}=t;const r=ht(e),s=wt(e),c=gt(s),a=j(e),l=r==="y",f=n.x+n.width/2-i.width/2,d=n.y+n.height/2-i.height/2,m=n[c]/2-i[c]/2;let u;switch(a){case"top":u={x:f,y:n.y-i.height};break;case"bottom":u={x:f,y:n.y+n.height};break;case"right":u={x:n.x+n.width,y:d};break;case"left":u={x:n.x-i.width,y:d};break;default:u={x:n.x,y:n.y}}switch(K(e)){case"start":u[s]-=m*(o&&l?-1:1);break;case"end":u[s]+=m*(o&&l?-1:1);break}return u}const ge=async(t,e,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:r=[],platform:s}=o,c=r.filter(Boolean),a=await(s.isRTL==null?void 0:s.isRTL(e));let l=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:f,y:d}=At(l,n,a),m=n,u={},g=0;for(let h=0;h<c.length;h++){const{name:v,fn:w}=c[h],{x,y:b,data:E,reset:O}=await w({x:f,y:d,initialPlacement:n,placement:m,strategy:i,middlewareData:u,rects:l,platform:s,elements:{reference:t,floating:e}});f=x??f,d=b??d,u={...u,[v]:{...u[v],...E}},O&&g<=50&&(g++,typeof O=="object"&&(O.placement&&(m=O.placement),O.rects&&(l=O.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):O.rects),{x:f,y:d}=At(l,m,a)),h=-1)}return{x:f,y:d,placement:m,strategy:i,middlewareData:u}};async function he(t,e){var o;e===void 0&&(e={});const{x:n,y:i,platform:r,rects:s,elements:c,strategy:a}=t,{boundary:l="clippingAncestors",rootBoundary:f="viewport",elementContext:d="floating",altBoundary:m=!1,padding:u=0}=st(e,t),g=Tt(u),v=c[m?d==="floating"?"reference":"floating":d],w=rt(await r.getClippingRect({element:(o=await(r.isElement==null?void 0:r.isElement(v)))==null||o?v:v.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:l,rootBoundary:f,strategy:a})),x=d==="floating"?{...s.floating,x:n,y:i}:s.reference,b=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),E=await(r.isElement==null?void 0:r.isElement(b))?await(r.getScale==null?void 0:r.getScale(b))||{x:1,y:1}:{x:1,y:1},O=rt(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:x,offsetParent:b,strategy:a}):x);return{top:(w.top-O.top+g.top)/E.y,bottom:(O.bottom-w.bottom+g.bottom)/E.y,left:(w.left-O.left+g.left)/E.x,right:(O.right-w.right+g.right)/E.x}}const we=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:n,placement:i,rects:r,platform:s,elements:c,middlewareData:a}=e,{element:l,padding:f=0}=st(t,e)||{};if(l==null)return{};const d=Tt(f),m={x:o,y:n},u=wt(i),g=gt(u),h=await s.getDimensions(l),v=u==="y",w=v?"top":"left",x=v?"bottom":"right",b=v?"clientHeight":"clientWidth",E=r.reference[g]+r.reference[u]-m[u]-r.floating[g],O=m[u]-r.reference[u],D=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l));let L=D?D[b]:0;(!L||!await(s.isElement==null?void 0:s.isElement(D)))&&(L=c.floating[b]||r.floating[g]);const p=E/2-O/2,y=L/2-h[g]/2-1,$=Y(d[w],y),W=Y(d[x],y),R=$,M=L-h[g]-W,A=L/2-h[g]/2+p,P=le(R,A,M),S=!a.arrow&&K(i)!=null&&A!==P&&r.reference[g]/2-(A<R?$:W)-h[g]/2<0,k=S?A<R?A-R:A-M:0;return{[u]:m[u]+k,data:{[u]:P,centerOffset:A-P-k,...S&&{alignmentOffset:k}},reset:S}}}),ve=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:i,middlewareData:r,rects:s,initialPlacement:c,platform:a,elements:l}=e,{mainAxis:f=!0,crossAxis:d=!0,fallbackPlacements:m,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:h=!0,...v}=st(t,e);if((o=r.arrow)!=null&&o.alignmentOffset)return{};const w=j(i),x=j(c)===c,b=await(a.isRTL==null?void 0:a.isRTL(l.floating)),E=m||(x||!h?[it(c)]:ue(c));!m&&g!=="none"&&E.push(...me(c,h,g,b));const O=[c,...E],D=await he(e,v),L=[];let p=((n=r.flip)==null?void 0:n.overflows)||[];if(f&&L.push(D[w]),d){const R=fe(i,s,b);L.push(D[R[0]],D[R[1]])}if(p=[...p,{placement:i,overflows:L}],!L.every(R=>R<=0)){var y,$;const R=(((y=r.flip)==null?void 0:y.index)||0)+1,M=O[R];if(M)return{data:{index:R,overflows:p},reset:{placement:M}};let A=($=p.filter(P=>P.overflows[0]<=0).sort((P,S)=>P.overflows[1]-S.overflows[1])[0])==null?void 0:$.placement;if(!A)switch(u){case"bestFit":{var W;const P=(W=p.map(S=>[S.placement,S.overflows.filter(k=>k>0).reduce((k,It)=>k+It,0)]).sort((S,k)=>S[1]-k[1])[0])==null?void 0:W[0];P&&(A=P);break}case"initialPlacement":A=c;break}if(i!==A)return{reset:{placement:A}}}return{}}}};async function ye(t,e){const{placement:o,platform:n,elements:i}=t,r=await(n.isRTL==null?void 0:n.isRTL(i.floating)),s=j(o),c=K(o),a=ht(o)==="y",l=["left","top"].includes(s)?-1:1,f=r&&a?-1:1,d=st(e,t);let{mainAxis:m,crossAxis:u,alignmentAxis:g}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return c&&typeof g=="number"&&(u=c==="end"?g*-1:g),a?{x:u*f,y:m*l}:{x:m*l,y:u*f}}const xe=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,n;const{x:i,y:r,placement:s,middlewareData:c}=e,a=await ye(e,t);return s===((o=c.offset)==null?void 0:o.placement)&&(n=c.arrow)!=null&&n.alignmentOffset?{}:{x:i+a.x,y:r+a.y,data:{...a,placement:s}}}}};function I(t){return _t(t)?(t.nodeName||"").toLowerCase():"#document"}function C(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function B(t){var e;return(e=(_t(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function _t(t){return t instanceof Node||t instanceof C(t).Node}function V(t){return t instanceof Element||t instanceof C(t).Element}function F(t){return t instanceof HTMLElement||t instanceof C(t).HTMLElement}function Ct(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof C(t).ShadowRoot}function Z(t){const{overflow:e,overflowX:o,overflowY:n,display:i}=T(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(i)}function be(t){return["table","td","th"].includes(I(t))}function vt(t){const e=yt(),o=T(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function Oe(t){let e=U(t);for(;F(e)&&!ct(e);){if(vt(e))return e;e=U(e)}return null}function yt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function ct(t){return["html","body","#document"].includes(I(t))}function T(t){return C(t).getComputedStyle(t)}function lt(t){return V(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function U(t){if(I(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Ct(t)&&t.host||B(t);return Ct(e)?e.host:e}function Pt(t){const e=U(t);return ct(e)?t.ownerDocument?t.ownerDocument.body:t.body:F(e)&&Z(e)?e:Pt(e)}function q(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const i=Pt(t),r=i===((n=t.ownerDocument)==null?void 0:n.body),s=C(i);return r?e.concat(s,s.visualViewport||[],Z(i)?i:[],s.frameElement&&o?q(s.frameElement):[]):e.concat(i,q(i,[],o))}function St(t){const e=T(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const i=F(t),r=i?t.offsetWidth:o,s=i?t.offsetHeight:n,c=ot(o)!==r||ot(n)!==s;return c&&(o=r,n=s),{width:o,height:n,$:c}}function xt(t){return V(t)?t:t.contextElement}function X(t){const e=xt(t);if(!F(e))return N(1);const o=e.getBoundingClientRect(),{width:n,height:i,$:r}=St(e);let s=(r?ot(o.width):o.width)/n,c=(r?ot(o.height):o.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const Ee=N(0);function Ft(t){const e=C(t);return!yt()||!e.visualViewport?Ee:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Re(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==C(t)?!1:e}function z(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),r=xt(t);let s=N(1);e&&(n?V(n)&&(s=X(n)):s=X(t));const c=Re(r,o,n)?Ft(r):N(0);let a=(i.left+c.x)/s.x,l=(i.top+c.y)/s.y,f=i.width/s.x,d=i.height/s.y;if(r){const m=C(r),u=n&&V(n)?C(n):n;let g=m,h=g.frameElement;for(;h&&n&&u!==g;){const v=X(h),w=h.getBoundingClientRect(),x=T(h),b=w.left+(h.clientLeft+parseFloat(x.paddingLeft))*v.x,E=w.top+(h.clientTop+parseFloat(x.paddingTop))*v.y;a*=v.x,l*=v.y,f*=v.x,d*=v.y,a+=b,l+=E,g=C(h),h=g.frameElement}}return rt({width:f,height:d,x:a,y:l})}const De=[":popover-open",":modal"];function kt(t){return De.some(e=>{try{return t.matches(e)}catch{return!1}})}function Ae(t){let{elements:e,rect:o,offsetParent:n,strategy:i}=t;const r=i==="fixed",s=B(n),c=e?kt(e.floating):!1;if(n===s||c&&r)return o;let a={scrollLeft:0,scrollTop:0},l=N(1);const f=N(0),d=F(n);if((d||!d&&!r)&&((I(n)!=="body"||Z(s))&&(a=lt(n)),F(n))){const m=z(n);l=X(n),f.x=m.x+n.clientLeft,f.y=m.y+n.clientTop}return{width:o.width*l.x,height:o.height*l.y,x:o.x*l.x-a.scrollLeft*l.x+f.x,y:o.y*l.y-a.scrollTop*l.y+f.y}}function Ce(t){return Array.from(t.getClientRects())}function Vt(t){return z(B(t)).left+lt(t).scrollLeft}function Le(t){const e=B(t),o=lt(t),n=t.ownerDocument.body,i=H(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),r=H(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let s=-o.scrollLeft+Vt(t);const c=-o.scrollTop;return T(n).direction==="rtl"&&(s+=H(e.clientWidth,n.clientWidth)-i),{width:i,height:r,x:s,y:c}}function $e(t,e){const o=C(t),n=B(t),i=o.visualViewport;let r=n.clientWidth,s=n.clientHeight,c=0,a=0;if(i){r=i.width,s=i.height;const l=yt();(!l||l&&e==="fixed")&&(c=i.offsetLeft,a=i.offsetTop)}return{width:r,height:s,x:c,y:a}}function Te(t,e){const o=z(t,!0,e==="fixed"),n=o.top+t.clientTop,i=o.left+t.clientLeft,r=F(t)?X(t):N(1),s=t.clientWidth*r.x,c=t.clientHeight*r.y,a=i*r.x,l=n*r.y;return{width:s,height:c,x:a,y:l}}function Lt(t,e,o){let n;if(e==="viewport")n=$e(t,o);else if(e==="document")n=Le(B(t));else if(V(e))n=Te(e,o);else{const i=Ft(t);n={...e,x:e.x-i.x,y:e.y-i.y}}return rt(n)}function Bt(t,e){const o=U(t);return o===e||!V(o)||ct(o)?!1:T(o).position==="fixed"||Bt(o,e)}function _e(t,e){const o=e.get(t);if(o)return o;let n=q(t,[],!1).filter(c=>V(c)&&I(c)!=="body"),i=null;const r=T(t).position==="fixed";let s=r?U(t):t;for(;V(s)&&!ct(s);){const c=T(s),a=vt(s);!a&&c.position==="fixed"&&(i=null),(r?!a&&!i:!a&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Z(s)&&!a&&Bt(t,s))?n=n.filter(f=>f!==s):i=c,s=U(s)}return e.set(t,n),n}function Pe(t){let{element:e,boundary:o,rootBoundary:n,strategy:i}=t;const s=[...o==="clippingAncestors"?_e(e,this._c):[].concat(o),n],c=s[0],a=s.reduce((l,f)=>{const d=Lt(e,f,i);return l.top=H(d.top,l.top),l.right=Y(d.right,l.right),l.bottom=Y(d.bottom,l.bottom),l.left=H(d.left,l.left),l},Lt(e,c,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function Se(t){const{width:e,height:o}=St(t);return{width:e,height:o}}function Fe(t,e,o){const n=F(e),i=B(e),r=o==="fixed",s=z(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const a=N(0);if(n||!n&&!r)if((I(e)!=="body"||Z(i))&&(c=lt(e)),n){const d=z(e,!0,r,e);a.x=d.x+e.clientLeft,a.y=d.y+e.clientTop}else i&&(a.x=Vt(i));const l=s.left+c.scrollLeft-a.x,f=s.top+c.scrollTop-a.y;return{x:l,y:f,width:s.width,height:s.height}}function $t(t,e){return!F(t)||T(t).position==="fixed"?null:e?e(t):t.offsetParent}function Nt(t,e){const o=C(t);if(!F(t)||kt(t))return o;let n=$t(t,e);for(;n&&be(n)&&T(n).position==="static";)n=$t(n,e);return n&&(I(n)==="html"||I(n)==="body"&&T(n).position==="static"&&!vt(n))?o:n||Oe(t)||o}const ke=async function(t){const e=this.getOffsetParent||Nt,o=this.getDimensions;return{reference:Fe(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,...await o(t.floating)}}};function Ve(t){return T(t).direction==="rtl"}const Be={convertOffsetParentRelativeRectToViewportRelativeRect:Ae,getDocumentElement:B,getClippingRect:Pe,getOffsetParent:Nt,getElementRects:ke,getClientRects:Ce,getDimensions:Se,getScale:X,isElement:V,isRTL:Ve};function Ne(t,e){let o=null,n;const i=B(t);function r(){var c;clearTimeout(n),(c=o)==null||c.disconnect(),o=null}function s(c,a){c===void 0&&(c=!1),a===void 0&&(a=1),r();const{left:l,top:f,width:d,height:m}=t.getBoundingClientRect();if(c||e(),!d||!m)return;const u=nt(f),g=nt(i.clientWidth-(l+d)),h=nt(i.clientHeight-(f+m)),v=nt(l),x={rootMargin:-u+"px "+-g+"px "+-h+"px "+-v+"px",threshold:H(0,Y(1,a))||1};let b=!0;function E(O){const D=O[0].intersectionRatio;if(D!==a){if(!b)return s();D?s(!1,D):n=setTimeout(()=>{s(!1,1e-7)},100)}b=!1}try{o=new IntersectionObserver(E,{...x,root:i.ownerDocument})}catch{o=new IntersectionObserver(E,x)}o.observe(t)}return s(!0),r}function Ie(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:a=!1}=n,l=xt(t),f=i||r?[...l?q(l):[],...q(e)]:[];f.forEach(w=>{i&&w.addEventListener("scroll",o,{passive:!0}),r&&w.addEventListener("resize",o)});const d=l&&c?Ne(l,o):null;let m=-1,u=null;s&&(u=new ResizeObserver(w=>{let[x]=w;x&&x.target===l&&u&&(u.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var b;(b=u)==null||b.observe(e)})),o()}),l&&!a&&u.observe(l),u.observe(e));let g,h=a?z(t):null;a&&v();function v(){const w=z(t);h&&(w.x!==h.x||w.y!==h.y||w.width!==h.width||w.height!==h.height)&&o(),h=w,g=requestAnimationFrame(v)}return o(),()=>{var w;f.forEach(x=>{i&&x.removeEventListener("scroll",o),r&&x.removeEventListener("resize",o)}),d?.(),(w=u)==null||w.disconnect(),u=null,a&&cancelAnimationFrame(g)}}const We=ve,Me=we,He=(t,e,o)=>{const n=new Map,i={platform:Be,...o},r={...i.platform,_c:n};return ge(t,e,{...i,platform:r})},ze={computePositionOptions:{},autoUpdateOptions:{},arrowOptions:{}},Xe=t=>{const[{autoUpdateOptions$:e,computePositionOptions$:o,arrowOptions$:n},i]=te(ze,t),{directive:r,element$:s}=dt(),{directive:c,element$:a}=dt(),{directive:l,element$:f}=dt(),d=_(()=>{const p=f();if(!p)return null;const y=n();return typeof y=="function"?$=>({...y($),element:p}):{...y,element:p}}),m=_(()=>{let p=o();const y=d();return y&&(p={...p,middleware:[...p.middleware??[],Me(y)]}),p}),u=ee([s,a,m,e],([p,y,$,W],R)=>{if(p&&y){const M=Ie(y,p,()=>{R(He(y,p,$))},W);return()=>{R(null),M()}}},null),g=Zt(u,null),h=_(()=>{var p;return(p=g())==null?void 0:p.placement}),v=_(()=>{var p;return(p=g())==null?void 0:p.middlewareData}),w=_(()=>{var p;return(p=g())==null?void 0:p.x}),x=_(()=>{var p;return(p=g())==null?void 0:p.y}),b=_(()=>{var p;return(p=g())==null?void 0:p.strategy}),E=_(()=>{var p,y;return(y=(p=v())==null?void 0:p.arrow)==null?void 0:y.x}),O=_(()=>{var p,y;return(y=(p=v())==null?void 0:p.arrow)==null?void 0:y.y}),D=_(()=>{const p=s();p&&(p.style.left=`${w()??0}px`,p.style.top=`${x()??0}px`)}),L=_(()=>{const p=f();if(p){const y=E(),$=O();p.style.left=y!=null?`${y}px`:"",p.style.top=$!=null?`${$}px`:""}});return{patch:i,...ne({x$:w,y$:x,strategy$:b,placement$:h,middlewareData$:v}),directives:{referenceDirective:c,floatingDirective:Rt(r,Dt(D)),arrowDirective:Rt(l,Dt(L))}}},Ke=Gt((t,e)=>{const o=e.content;let n;const{directives:{floatingDirective:i,referenceDirective:r,arrowDirective:s},stores:{placement$:c}}=Xe({props:{arrowOptions:{padding:6},computePositionOptions:{placement:"top",middleware:[xe(8),We()]}}}),a=r(t);t.addEventListener("mouseenter",l),t.addEventListener("mouseleave",f);function l(){n||(n=new re({target:document.body,props:{content:o,placement$:c,directive:i,arrowDirective:s}}))}function f(){n?.$destroy(),n=void 0}return{update(d){n&&(n.content=d.content)},destroy(){f(),a?.destroy?.(),t.removeEventListener("mouseenter",l),t.removeEventListener("mouseleave",f)}}});export{Ke as t};