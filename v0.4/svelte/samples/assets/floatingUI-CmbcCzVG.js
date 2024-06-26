import{a7 as D,ac as Bt}from"./AppCommon-EGvQgKwz.js";import{w as Mt,C as rt,s as Wt,e as pt,h as gt}from"./directive-3-8yr-ZK-C23OGezp.js";import{c as Ht}from"./promise-CY2U8bTP-CDYUm4pL.js";const Ct=["top","right","bottom","left"],ht=["start","end"],wt=Ct.reduce((t,e)=>t.concat(e,e+"-"+ht[0],e+"-"+ht[1]),[]),P=Math.min,T=Math.max,Z=Math.round,Q=Math.floor,H=t=>({x:t,y:t}),Nt={left:"right",right:"left",bottom:"top",top:"bottom"},Vt={start:"end",end:"start"};function ct(t,e,n){return T(t,P(e,n))}function z(t,e){return typeof t=="function"?t(e):t}function I(t){return t.split("-")[0]}function F(t){return t.split("-")[1]}function St(t){return t==="x"?"y":"x"}function lt(t){return t==="y"?"height":"width"}function G(t){return["top","bottom"].includes(I(t))?"y":"x"}function at(t){return St(G(t))}function kt(t,e,n){n===void 0&&(n=!1);const o=F(t),i=at(t),s=lt(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=yt(r)),[r,yt(r)]}function zt(t){return t.replace(/start|end/g,e=>Vt[e])}function yt(t){return t.replace(/left|right|bottom|top/g,e=>Nt[e])}function It(t){return{top:0,right:0,bottom:0,left:0,...t}}function Et(t){return typeof t!="number"?It(t):{top:t,right:t,bottom:t,left:t}}function tt(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function xt(t,e,n){let{reference:o,floating:i}=t;const s=G(e),r=at(e),l=lt(r),c=I(e),a=s==="y",d=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,h=o[l]/2-i[l]/2;let f;switch(c){case"top":f={x:d,y:o.y-i.height};break;case"bottom":f={x:d,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:u};break;case"left":f={x:o.x-i.width,y:u};break;default:f={x:o.x,y:o.y}}switch(F(e)){case"start":f[r]-=h*(n&&a?-1:1);break;case"end":f[r]+=h*(n&&a?-1:1);break}return f}const Yt=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,l=s.filter(Boolean),c=await(r.isRTL==null?void 0:r.isRTL(e));let a=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:u}=xt(a,o,c),h=o,f={},m=0;for(let w=0;w<l.length;w++){const{name:y,fn:g}=l[w],{x,y:v,data:R,reset:O}=await g({x:d,y:u,initialPlacement:o,placement:h,strategy:i,middlewareData:f,rects:a,platform:r,elements:{reference:t,floating:e}});d=x??d,u=v??u,f={...f,[y]:{...f[y],...R}},O&&m<=50&&(m++,typeof O=="object"&&(O.placement&&(h=O.placement),O.rects&&(a=O.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):O.rects),{x:d,y:u}=xt(a,h,c)),w=-1)}return{x:d,y:u,placement:h,strategy:i,middlewareData:f}};async function q(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:l,strategy:c}=t,{boundary:a="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:h=!1,padding:f=0}=z(e,t),m=Et(f),y=l[h?u==="floating"?"reference":"floating":u],g=tt(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(y)))==null||n?y:y.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(l.floating)),boundary:a,rootBoundary:d,strategy:c})),x=u==="floating"?{x:o,y:i,width:r.floating.width,height:r.floating.height}:r.reference,v=await(s.getOffsetParent==null?void 0:s.getOffsetParent(l.floating)),R=await(s.isElement==null?void 0:s.isElement(v))?await(s.getScale==null?void 0:s.getScale(v))||{x:1,y:1}:{x:1,y:1},O=tt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:x,offsetParent:v,strategy:c}):x);return{top:(g.top-O.top+m.top)/R.y,bottom:(O.bottom-g.bottom+m.bottom)/R.y,left:(g.left-O.left+m.left)/R.x,right:(O.right-g.right+m.right)/R.x}}const Xt=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:s,platform:r,elements:l,middlewareData:c}=e,{element:a,padding:d=0}=z(t,e)||{};if(a==null)return{};const u=Et(d),h={x:n,y:o},f=at(i),m=lt(f),w=await r.getDimensions(a),y=f==="y",g=y?"top":"left",x=y?"bottom":"right",v=y?"clientHeight":"clientWidth",R=s.reference[m]+s.reference[f]-h[f]-s.floating[m],O=h[f]-s.reference[f],C=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a));let S=C?C[v]:0;(!S||!await(r.isElement==null?void 0:r.isElement(C)))&&(S=l.floating[v]||s.floating[m]);const p=R/2-O/2,b=S/2-w[m]/2-1,A=P(u[g],b),E=P(u[x],b),M=A,Y=S-w[m]-E,V=S/2-w[m]/2+p,nt=ct(M,V,Y),ot=!c.arrow&&F(i)!=null&&V!==nt&&s.reference[m]/2-(V<M?A:E)-w[m]/2<0,it=ot?V<M?V-M:V-Y:0;return{[f]:h[f]+it,data:{[f]:nt,centerOffset:V-nt-it,...ot&&{alignmentOffset:it}},reset:ot}}});function jt(t,e,n){return(t?[...n.filter(i=>F(i)===t),...n.filter(i=>F(i)!==t)]:n.filter(i=>I(i)===i)).filter(i=>t?F(i)===t||(e?zt(i)!==i:!1):!0)}const Ut=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;const{rects:s,middlewareData:r,placement:l,platform:c,elements:a}=e,{crossAxis:d=!1,alignment:u,allowedPlacements:h=wt,autoAlignment:f=!0,...m}=z(t,e),w=u!==void 0||h===wt?jt(u||null,f,h):h,y=await q(e,m),g=((n=r.autoPlacement)==null?void 0:n.index)||0,x=w[g];if(x==null)return{};const v=kt(x,s,await(c.isRTL==null?void 0:c.isRTL(a.floating)));if(l!==x)return{reset:{placement:w[0]}};const R=[y[I(x)],y[v[0]],y[v[1]]],O=[...((o=r.autoPlacement)==null?void 0:o.overflows)||[],{placement:x,overflows:R}],C=w[g+1];if(C)return{data:{index:g+1,overflows:O},reset:{placement:C}};const S=O.map(A=>{const E=F(A.placement);return[A.placement,E&&d?A.overflows.slice(0,2).reduce((M,Y)=>M+Y,0):A.overflows[0],A.overflows]}).sort((A,E)=>A[1]-E[1]),b=((i=S.filter(A=>A[2].slice(0,F(A[0])?2:3).every(E=>E<=0))[0])==null?void 0:i[0])||S[0][0];return b!==l?{data:{index:g+1,overflows:O},reset:{placement:b}}:{}}}};function vt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function bt(t){return Ct.some(e=>t[e]>=0)}const qt=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=z(t,e);switch(o){case"referenceHidden":{const s=await q(e,{...i,elementContext:"reference"}),r=vt(s,n.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:bt(r)}}}case"escaped":{const s=await q(e,{...i,altBoundary:!0}),r=vt(s,n.floating);return{data:{escapedOffsets:r,escaped:bt(r)}}}default:return{}}}}};async function Kt(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=I(n),l=F(n),c=G(n)==="y",a=["left","top"].includes(r)?-1:1,d=s&&c?-1:1,u=z(e,t);let{mainAxis:h,crossAxis:f,alignmentAxis:m}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...u};return l&&typeof m=="number"&&(f=l==="end"?m*-1:m),c?{x:f*d,y:h*a}:{x:h*a,y:f*d}}const Gt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:s,placement:r,middlewareData:l}=e,c=await Kt(e,t);return r===((n=l.offset)==null?void 0:n.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+c.x,y:s+c.y,data:{...c,placement:r}}}}},Jt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:l={fn:y=>{let{x:g,y:x}=y;return{x:g,y:x}}},...c}=z(t,e),a={x:n,y:o},d=await q(e,c),u=G(I(i)),h=St(u);let f=a[h],m=a[u];if(s){const y=h==="y"?"top":"left",g=h==="y"?"bottom":"right",x=f+d[y],v=f-d[g];f=ct(x,f,v)}if(r){const y=u==="y"?"top":"left",g=u==="y"?"bottom":"right",x=m+d[y],v=m-d[g];m=ct(x,m,v)}const w=l.fn({...e,[h]:f,[u]:m});return{...w,data:{x:w.x-n,y:w.y-o}}}}},Qt=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:o,platform:i,elements:s}=e,{apply:r=()=>{},...l}=z(t,e),c=await q(e,l),a=I(n),d=F(n),u=G(n)==="y",{width:h,height:f}=o.floating;let m,w;a==="top"||a==="bottom"?(m=a,w=d===(await(i.isRTL==null?void 0:i.isRTL(s.floating))?"start":"end")?"left":"right"):(w=a,m=d==="end"?"top":"bottom");const y=f-c.top-c.bottom,g=h-c.left-c.right,x=P(f-c[m],y),v=P(h-c[w],g),R=!e.middlewareData.shift;let O=x,C=v;if(u?C=d||R?P(v,g):g:O=d||R?P(x,y):y,R&&!d){const p=T(c.left,0),b=T(c.right,0),A=T(c.top,0),E=T(c.bottom,0);u?C=h-2*(p!==0||b!==0?p+b:T(c.left,c.right)):O=f-2*(A!==0||E!==0?A+E:T(c.top,c.bottom))}await r({...e,availableWidth:C,availableHeight:O});const S=await i.getDimensions(s.floating);return h!==S.width||f!==S.height?{reset:{rects:!0}}:{}}}};function U(t){return Tt(t)?(t.nodeName||"").toLowerCase():"#document"}function $(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function W(t){var e;return(e=(Tt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Tt(t){return t instanceof Node||t instanceof $(t).Node}function _(t){return t instanceof Element||t instanceof $(t).Element}function B(t){return t instanceof HTMLElement||t instanceof $(t).HTMLElement}function Ot(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof $(t).ShadowRoot}function J(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=L(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function Zt(t){return["table","td","th"].includes(U(t))}function ft(t){const e=ut(),n=L(t);return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function te(t){let e=N(t);for(;B(e)&&!j(e);){if(ft(e))return e;e=N(e)}return null}function ut(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function j(t){return["html","body","#document"].includes(U(t))}function L(t){return $(t).getComputedStyle(t)}function et(t){return _(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function N(t){if(U(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Ot(t)&&t.host||W(t);return Ot(e)?e.host:e}function $t(t){const e=N(t);return j(e)?t.ownerDocument?t.ownerDocument.body:t.body:B(e)&&J(e)?e:$t(e)}function K(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=$t(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=$(i);return s?e.concat(r,r.visualViewport||[],J(i)?i:[],r.frameElement&&n?K(r.frameElement):[]):e.concat(i,K(i,[],n))}function Dt(t){const e=L(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=B(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,l=Z(n)!==s||Z(o)!==r;return l&&(n=s,o=r),{width:n,height:o,$:l}}function dt(t){return _(t)?t:t.contextElement}function X(t){const e=dt(t);if(!B(e))return H(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=Dt(e);let r=(s?Z(n.width):n.width)/o,l=(s?Z(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!l||!Number.isFinite(l))&&(l=1),{x:r,y:l}}const ee=H(0);function Lt(t){const e=$(t);return!ut()||!e.visualViewport?ee:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ne(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==$(t)?!1:e}function k(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=dt(t);let r=H(1);e&&(o?_(o)&&(r=X(o)):r=X(t));const l=ne(s,n,o)?Lt(s):H(0);let c=(i.left+l.x)/r.x,a=(i.top+l.y)/r.y,d=i.width/r.x,u=i.height/r.y;if(s){const h=$(s),f=o&&_(o)?$(o):o;let m=h,w=m.frameElement;for(;w&&o&&f!==m;){const y=X(w),g=w.getBoundingClientRect(),x=L(w),v=g.left+(w.clientLeft+parseFloat(x.paddingLeft))*y.x,R=g.top+(w.clientTop+parseFloat(x.paddingTop))*y.y;c*=y.x,a*=y.y,d*=y.x,u*=y.y,c+=v,a+=R,m=$(w),w=m.frameElement}}return tt({width:d,height:u,x:c,y:a})}const oe=[":popover-open",":modal"];function mt(t){return oe.some(e=>{try{return t.matches(e)}catch{return!1}})}function ie(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const s=i==="fixed",r=W(o),l=e?mt(e.floating):!1;if(o===r||l&&s)return n;let c={scrollLeft:0,scrollTop:0},a=H(1);const d=H(0),u=B(o);if((u||!u&&!s)&&((U(o)!=="body"||J(r))&&(c=et(o)),B(o))){const h=k(o);a=X(o),d.x=h.x+o.clientLeft,d.y=h.y+o.clientTop}return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-c.scrollLeft*a.x+d.x,y:n.y*a.y-c.scrollTop*a.y+d.y}}function re(t){return Array.from(t.getClientRects())}function Pt(t){return k(W(t)).left+et(t).scrollLeft}function se(t){const e=W(t),n=et(t),o=t.ownerDocument.body,i=T(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=T(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+Pt(t);const l=-n.scrollTop;return L(o).direction==="rtl"&&(r+=T(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:l}}function ce(t,e){const n=$(t),o=W(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,l=0,c=0;if(i){s=i.width,r=i.height;const a=ut();(!a||a&&e==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:s,height:r,x:l,y:c}}function le(t,e){const n=k(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=B(t)?X(t):H(1),r=t.clientWidth*s.x,l=t.clientHeight*s.y,c=i*s.x,a=o*s.y;return{width:r,height:l,x:c,y:a}}function At(t,e,n){let o;if(e==="viewport")o=ce(t,n);else if(e==="document")o=se(W(t));else if(_(e))o=le(e,n);else{const i=Lt(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return tt(o)}function Ft(t,e){const n=N(t);return n===e||!_(n)||j(n)?!1:L(n).position==="fixed"||Ft(n,e)}function ae(t,e){const n=e.get(t);if(n)return n;let o=K(t,[],!1).filter(l=>_(l)&&U(l)!=="body"),i=null;const s=L(t).position==="fixed";let r=s?N(t):t;for(;_(r)&&!j(r);){const l=L(r),c=ft(r);!c&&l.position==="fixed"&&(i=null),(s?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||J(r)&&!c&&Ft(t,r))?o=o.filter(d=>d!==r):i=l,r=N(r)}return e.set(t,o),o}function fe(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?mt(e)?[]:ae(e,this._c):[].concat(n),o],l=r[0],c=r.reduce((a,d)=>{const u=At(e,d,i);return a.top=T(u.top,a.top),a.right=P(u.right,a.right),a.bottom=P(u.bottom,a.bottom),a.left=T(u.left,a.left),a},At(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function ue(t){const{width:e,height:n}=Dt(t);return{width:e,height:n}}function de(t,e,n){const o=B(e),i=W(e),s=n==="fixed",r=k(t,!0,s,e);let l={scrollLeft:0,scrollTop:0};const c=H(0);if(o||!o&&!s)if((U(e)!=="body"||J(i))&&(l=et(e)),o){const u=k(e,!0,s,e);c.x=u.x+e.clientLeft,c.y=u.y+e.clientTop}else i&&(c.x=Pt(i));const a=r.left+l.scrollLeft-c.x,d=r.top+l.scrollTop-c.y;return{x:a,y:d,width:r.width,height:r.height}}function st(t){return L(t).position==="static"}function Rt(t,e){return!B(t)||L(t).position==="fixed"?null:e?e(t):t.offsetParent}function _t(t,e){const n=$(t);if(mt(t))return n;if(!B(t)){let i=N(t);for(;i&&!j(i);){if(_(i)&&!st(i))return i;i=N(i)}return n}let o=Rt(t,e);for(;o&&Zt(o)&&st(o);)o=Rt(o,e);return o&&j(o)&&st(o)&&!ft(o)?n:o||te(t)||n}const me=async function(t){const e=this.getOffsetParent||_t,n=this.getDimensions,o=await n(t.floating);return{reference:de(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function pe(t){return L(t).direction==="rtl"}const ge={convertOffsetParentRelativeRectToViewportRelativeRect:ie,getDocumentElement:W,getClippingRect:fe,getOffsetParent:_t,getElementRects:me,getClientRects:re,getDimensions:ue,getScale:X,isElement:_,isRTL:pe};function he(t,e){let n=null,o;const i=W(t);function s(){var l;clearTimeout(o),(l=n)==null||l.disconnect(),n=null}function r(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),s();const{left:a,top:d,width:u,height:h}=t.getBoundingClientRect();if(l||e(),!u||!h)return;const f=Q(d),m=Q(i.clientWidth-(a+u)),w=Q(i.clientHeight-(d+h)),y=Q(a),x={rootMargin:-f+"px "+-m+"px "+-w+"px "+-y+"px",threshold:T(0,P(1,c))||1};let v=!0;function R(O){const C=O[0].intersectionRatio;if(C!==c){if(!v)return r();C?r(!1,C):o=setTimeout(()=>{r(!1,1e-7)},1e3)}v=!1}try{n=new IntersectionObserver(R,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(R,x)}n.observe(t)}return r(!0),s}function we(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=o,a=dt(t),d=i||s?[...a?K(a):[],...K(e)]:[];d.forEach(g=>{i&&g.addEventListener("scroll",n,{passive:!0}),s&&g.addEventListener("resize",n)});const u=a&&l?he(a,n):null;let h=-1,f=null;r&&(f=new ResizeObserver(g=>{let[x]=g;x&&x.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var v;(v=f)==null||v.observe(e)})),n()}),a&&!c&&f.observe(a),f.observe(e));let m,w=c?k(t):null;c&&y();function y(){const g=k(t);w&&(g.x!==w.x||g.y!==w.y||g.width!==w.width||g.height!==w.height)&&n(),w=g,m=requestAnimationFrame(y)}return n(),()=>{var g;d.forEach(x=>{i&&x.removeEventListener("scroll",n),s&&x.removeEventListener("resize",n)}),u==null||u(),(g=f)==null||g.disconnect(),f=null,c&&cancelAnimationFrame(m)}}const Re=Gt,Ce=Ut,Se=Jt,Ee=Qt,Te=qt,ye=Xt,xe=(t,e,n)=>{const o=new Map,i={platform:ge,...n},s={...i.platform,_c:o};return Yt(t,e,{...i,platform:s})},ve={computePositionOptions:{},autoUpdateOptions:{},arrowOptions:{}},$e=t=>{const[{autoUpdateOptions$:e,computePositionOptions$:n,arrowOptions$:o},i]=Mt(ve,t),{directive:s,element$:r}=rt(),{directive:l,element$:c}=rt(),{directive:a,element$:d}=rt(),u=D(()=>{const p=d();if(!p)return null;const b=o();return typeof b=="function"?A=>({...b(A),element:p}):{...b,element:p}}),h=D(()=>{let p=n();const b=u();return b&&(p={...p,middleware:[...p.middleware??[],ye(b)]}),p}),f=Bt([r,c,h,e],([p,b,A,E],M)=>{if(p&&b){const Y=we(b,p,()=>{M(xe(b,p,A))},E);return()=>{M(null),Y()}}},null),m=Ht(f,null),w=D(()=>{var p;return(p=m())==null?void 0:p.placement}),y=D(()=>{var p;return(p=m())==null?void 0:p.middlewareData}),g=D(()=>{var p;return(p=m())==null?void 0:p.x}),x=D(()=>{var p;return(p=m())==null?void 0:p.y}),v=D(()=>{var p;return(p=m())==null?void 0:p.strategy}),R=D(()=>{var p,b;return(b=(p=y())==null?void 0:p.arrow)==null?void 0:b.x}),O=D(()=>{var p,b;return(b=(p=y())==null?void 0:p.arrow)==null?void 0:b.y}),C=D(()=>{const p=r();p&&(p.style.left=`${g()??0}px`,p.style.top=`${x()??0}px`)}),S=D(()=>{const p=d();if(p){const b=R(),A=O();p.style.left=b!=null?`${b}px`:"",p.style.top=A!=null?`${A}px`:""}});return{patch:i,...Wt({x$:g,y$:x,strategy$:v,placement$:w,middlewareData$:y}),directives:{referenceDirective:l,floatingDirective:pt(s,gt(C)),arrowDirective:pt(a,gt(S))}}};export{Ce as a,Ee as b,$e as c,Te as h,Re as o,Se as s};
