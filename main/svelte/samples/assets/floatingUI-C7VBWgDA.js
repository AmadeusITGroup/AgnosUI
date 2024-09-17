import{a7 as L,ac as Wt}from"./AppCommon-B0X1wpkD.js";import{w as Ht,C as ct,s as Nt,e as wt,h as xt}from"./directive-CKEccryv-C4vN6gkB.js";import{c as Vt}from"./promise-CY2U8bTP-Clg90S-3.js";const $t=["top","right","bottom","left"],yt=["start","end"],vt=$t.reduce((t,e)=>t.concat(e,e+"-"+yt[0],e+"-"+yt[1]),[]),H=Math.min,$=Math.max,Z=Math.round,Q=Math.floor,N=t=>({x:t,y:t}),kt={left:"right",right:"left",bottom:"top",top:"bottom"},zt={start:"end",end:"start"};function at(t,e,n){return $(t,H(e,n))}function I(t,e){return typeof t=="function"?t(e):t}function Y(t){return t.split("-")[0]}function _(t){return t.split("-")[1]}function Et(t){return t==="x"?"y":"x"}function dt(t){return t==="y"?"height":"width"}function G(t){return["top","bottom"].includes(Y(t))?"y":"x"}function mt(t){return Et(G(t))}function It(t,e,n){n===void 0&&(n=!1);const o=_(t),i=mt(t),s=dt(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=bt(r)),[r,bt(r)]}function Yt(t){return t.replace(/start|end/g,e=>zt[e])}function bt(t){return t.replace(/left|right|bottom|top/g,e=>kt[e])}function Xt(t){return{top:0,right:0,bottom:0,left:0,...t}}function Tt(t){return typeof t!="number"?Xt(t):{top:t,right:t,bottom:t,left:t}}function tt(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function Ot(t,e,n){let{reference:o,floating:i}=t;const s=G(e),r=mt(e),c=dt(r),a=Y(e),l=s==="y",u=o.x+o.width/2-i.width/2,d=o.y+o.height/2-i.height/2,h=o[c]/2-i[c]/2;let f;switch(a){case"top":f={x:u,y:o.y-i.height};break;case"bottom":f={x:u,y:o.y+o.height};break;case"right":f={x:o.x+o.width,y:d};break;case"left":f={x:o.x-i.width,y:d};break;default:f={x:o.x,y:o.y}}switch(_(e)){case"start":f[r]-=h*(n&&l?-1:1);break;case"end":f[r]+=h*(n&&l?-1:1);break}return f}const jt=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,c=s.filter(Boolean),a=await(r.isRTL==null?void 0:r.isRTL(e));let l=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:d}=Ot(l,o,a),h=o,f={},m=0;for(let w=0;w<c.length;w++){const{name:x,fn:g}=c[w],{x:y,y:v,data:R,reset:O}=await g({x:u,y:d,initialPlacement:o,placement:h,strategy:i,middlewareData:f,rects:l,platform:r,elements:{reference:t,floating:e}});u=y??u,d=v??d,f={...f,[x]:{...f[x],...R}},O&&m<=50&&(m++,typeof O=="object"&&(O.placement&&(h=O.placement),O.rects&&(l=O.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):O.rects),{x:u,y:d}=Ot(l,h,a)),w=-1)}return{x:u,y:d,placement:h,strategy:i,middlewareData:f}};async function q(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:c,strategy:a}=t,{boundary:l="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:h=!1,padding:f=0}=I(e,t),m=Tt(f),x=c[h?d==="floating"?"reference":"floating":d],g=tt(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(x)))==null||n?x:x.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:l,rootBoundary:u,strategy:a})),y=d==="floating"?{x:o,y:i,width:r.floating.width,height:r.floating.height}:r.reference,v=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),R=await(s.isElement==null?void 0:s.isElement(v))?await(s.getScale==null?void 0:s.getScale(v))||{x:1,y:1}:{x:1,y:1},O=tt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:y,offsetParent:v,strategy:a}):y);return{top:(g.top-O.top+m.top)/R.y,bottom:(O.bottom-g.bottom+m.bottom)/R.y,left:(g.left-O.left+m.left)/R.x,right:(O.right-g.right+m.right)/R.x}}const Ut=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:s,platform:r,elements:c,middlewareData:a}=e,{element:l,padding:u=0}=I(t,e)||{};if(l==null)return{};const d=Tt(u),h={x:n,y:o},f=mt(i),m=dt(f),w=await r.getDimensions(l),x=f==="y",g=x?"top":"left",y=x?"bottom":"right",v=x?"clientHeight":"clientWidth",R=s.reference[m]+s.reference[f]-h[f]-s.floating[m],O=h[f]-s.reference[f],C=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l));let S=C?C[v]:0;(!S||!await(r.isElement==null?void 0:r.isElement(C)))&&(S=c.floating[v]||s.floating[m]);const p=R/2-O/2,b=S/2-w[m]/2-1,A=H(d[g],b),D=H(d[y],b),T=A,W=S-w[m]-D,k=S/2-w[m]/2+p,it=at(T,k,W),rt=!a.arrow&&_(i)!=null&&k!==it&&s.reference[m]/2-(k<T?A:D)-w[m]/2<0,st=rt?k<T?k-T:k-W:0;return{[f]:h[f]+st,data:{[f]:it,centerOffset:k-it-st,...rt&&{alignmentOffset:st}},reset:rt}}});function qt(t,e,n){return(t?[...n.filter(i=>_(i)===t),...n.filter(i=>_(i)!==t)]:n.filter(i=>Y(i)===i)).filter(i=>t?_(i)===t||(e?Yt(i)!==i:!1):!0)}const Kt=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;const{rects:s,middlewareData:r,placement:c,platform:a,elements:l}=e,{crossAxis:u=!1,alignment:d,allowedPlacements:h=vt,autoAlignment:f=!0,...m}=I(t,e),w=d!==void 0||h===vt?qt(d||null,f,h):h,x=await q(e,m),g=((n=r.autoPlacement)==null?void 0:n.index)||0,y=w[g];if(y==null)return{};const v=It(y,s,await(a.isRTL==null?void 0:a.isRTL(l.floating)));if(c!==y)return{reset:{placement:w[0]}};const R=[x[Y(y)],x[v[0]],x[v[1]]],O=[...((o=r.autoPlacement)==null?void 0:o.overflows)||[],{placement:y,overflows:R}],C=w[g+1];if(C)return{data:{index:g+1,overflows:O},reset:{placement:C}};const S=O.map(A=>{const D=_(A.placement);return[A.placement,D&&u?A.overflows.slice(0,2).reduce((T,W)=>T+W,0):A.overflows[0],A.overflows]}).sort((A,D)=>A[1]-D[1]),b=((i=S.filter(A=>A[2].slice(0,_(A[0])?2:3).every(D=>D<=0))[0])==null?void 0:i[0])||S[0][0];return b!==c?{data:{index:g+1,overflows:O},reset:{placement:b}}:{}}}};function At(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Rt(t){return $t.some(e=>t[e]>=0)}const Gt=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=I(t,e);switch(o){case"referenceHidden":{const s=await q(e,{...i,elementContext:"reference"}),r=At(s,n.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:Rt(r)}}}case"escaped":{const s=await q(e,{...i,altBoundary:!0}),r=At(s,n.floating);return{data:{escapedOffsets:r,escaped:Rt(r)}}}default:return{}}}}};async function Jt(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=Y(n),c=_(n),a=G(n)==="y",l=["left","top"].includes(r)?-1:1,u=s&&a?-1:1,d=I(e,t);let{mainAxis:h,crossAxis:f,alignmentAxis:m}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return c&&typeof m=="number"&&(f=c==="end"?m*-1:m),a?{x:f*u,y:h*l}:{x:h*l,y:f*u}}const Qt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:s,placement:r,middlewareData:c}=e,a=await Jt(e,t);return r===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+a.x,y:s+a.y,data:{...a,placement:r}}}}},Zt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:c={fn:x=>{let{x:g,y}=x;return{x:g,y}}},...a}=I(t,e),l={x:n,y:o},u=await q(e,a),d=G(Y(i)),h=Et(d);let f=l[h],m=l[d];if(s){const x=h==="y"?"top":"left",g=h==="y"?"bottom":"right",y=f+u[x],v=f-u[g];f=at(y,f,v)}if(r){const x=d==="y"?"top":"left",g=d==="y"?"bottom":"right",y=m+u[x],v=m-u[g];m=at(y,m,v)}const w=c.fn({...e,[h]:f,[d]:m});return{...w,data:{x:w.x-n,y:w.y-o,enabled:{[h]:s,[d]:r}}}}}},te=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,o;const{placement:i,rects:s,platform:r,elements:c}=e,{apply:a=()=>{},...l}=I(t,e),u=await q(e,l),d=Y(i),h=_(i),f=G(i)==="y",{width:m,height:w}=s.floating;let x,g;d==="top"||d==="bottom"?(x=d,g=h===(await(r.isRTL==null?void 0:r.isRTL(c.floating))?"start":"end")?"left":"right"):(g=d,x=h==="end"?"top":"bottom");const y=w-u.top-u.bottom,v=m-u.left-u.right,R=H(w-u[x],y),O=H(m-u[g],v),C=!e.middlewareData.shift;let S=R,p=O;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(p=v),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(S=y),C&&!h){const A=$(u.left,0),D=$(u.right,0),T=$(u.top,0),W=$(u.bottom,0);f?p=m-2*(A!==0||D!==0?A+D:$(u.left,u.right)):S=w-2*(T!==0||W!==0?T+W:$(u.top,u.bottom))}await a({...e,availableWidth:p,availableHeight:S});const b=await r.getDimensions(c.floating);return m!==b.width||w!==b.height?{reset:{rects:!0}}:{}}}};function et(){return typeof window<"u"}function U(t){return Lt(t)?(t.nodeName||"").toLowerCase():"#document"}function E(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function M(t){var e;return(e=(Lt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Lt(t){return et()?t instanceof Node||t instanceof E(t).Node:!1}function P(t){return et()?t instanceof Element||t instanceof E(t).Element:!1}function B(t){return et()?t instanceof HTMLElement||t instanceof E(t).HTMLElement:!1}function Ct(t){return!et()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof E(t).ShadowRoot}function J(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=F(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function ee(t){return["table","td","th"].includes(U(t))}function nt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function pt(t){const e=ht(),n=P(t)?F(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function ne(t){let e=V(t);for(;B(e)&&!j(e);){if(pt(e))return e;if(nt(e))return null;e=V(e)}return null}function ht(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function j(t){return["html","body","#document"].includes(U(t))}function F(t){return E(t).getComputedStyle(t)}function ot(t){return P(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function V(t){if(U(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Ct(t)&&t.host||M(t);return Ct(e)?e.host:e}function Pt(t){const e=V(t);return j(e)?t.ownerDocument?t.ownerDocument.body:t.body:B(e)&&J(e)?e:Pt(e)}function K(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Pt(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=E(i);if(s){const c=ft(r);return e.concat(r,r.visualViewport||[],J(i)?i:[],c&&n?K(c):[])}return e.concat(i,K(i,[],n))}function ft(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Ft(t){const e=F(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=B(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,c=Z(n)!==s||Z(o)!==r;return c&&(n=s,o=r),{width:n,height:o,$:c}}function gt(t){return P(t)?t:t.contextElement}function X(t){const e=gt(t);if(!B(e))return N(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=Ft(e);let r=(s?Z(n.width):n.width)/o,c=(s?Z(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!c||!Number.isFinite(c))&&(c=1),{x:r,y:c}}const oe=N(0);function _t(t){const e=E(t);return!ht()||!e.visualViewport?oe:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function ie(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==E(t)?!1:e}function z(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=gt(t);let r=N(1);e&&(o?P(o)&&(r=X(o)):r=X(t));const c=ie(s,n,o)?_t(s):N(0);let a=(i.left+c.x)/r.x,l=(i.top+c.y)/r.y,u=i.width/r.x,d=i.height/r.y;if(s){const h=E(s),f=o&&P(o)?E(o):o;let m=h,w=ft(m);for(;w&&o&&f!==m;){const x=X(w),g=w.getBoundingClientRect(),y=F(w),v=g.left+(w.clientLeft+parseFloat(y.paddingLeft))*x.x,R=g.top+(w.clientTop+parseFloat(y.paddingTop))*x.y;a*=x.x,l*=x.y,u*=x.x,d*=x.y,a+=v,l+=R,m=E(w),w=ft(m)}}return tt({width:u,height:d,x:a,y:l})}function re(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const s=i==="fixed",r=M(o),c=e?nt(e.floating):!1;if(o===r||c&&s)return n;let a={scrollLeft:0,scrollTop:0},l=N(1);const u=N(0),d=B(o);if((d||!d&&!s)&&((U(o)!=="body"||J(r))&&(a=ot(o)),B(o))){const h=z(o);l=X(o),u.x=h.x+o.clientLeft,u.y=h.y+o.clientTop}return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-a.scrollLeft*l.x+u.x,y:n.y*l.y-a.scrollTop*l.y+u.y}}function se(t){return Array.from(t.getClientRects())}function ut(t,e){const n=ot(t).scrollLeft;return e?e.left+n:z(M(t)).left+n}function ce(t){const e=M(t),n=ot(t),o=t.ownerDocument.body,i=$(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=$(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+ut(t);const c=-n.scrollTop;return F(o).direction==="rtl"&&(r+=$(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:c}}function le(t,e){const n=E(t),o=M(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,c=0,a=0;if(i){s=i.width,r=i.height;const l=ht();(!l||l&&e==="fixed")&&(c=i.offsetLeft,a=i.offsetTop)}return{width:s,height:r,x:c,y:a}}function ae(t,e){const n=z(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=B(t)?X(t):N(1),r=t.clientWidth*s.x,c=t.clientHeight*s.y,a=i*s.x,l=o*s.y;return{width:r,height:c,x:a,y:l}}function St(t,e,n){let o;if(e==="viewport")o=le(t,n);else if(e==="document")o=ce(M(t));else if(P(e))o=ae(e,n);else{const i=_t(t);o={...e,x:e.x-i.x,y:e.y-i.y}}return tt(o)}function Bt(t,e){const n=V(t);return n===e||!P(n)||j(n)?!1:F(n).position==="fixed"||Bt(n,e)}function fe(t,e){const n=e.get(t);if(n)return n;let o=K(t,[],!1).filter(c=>P(c)&&U(c)!=="body"),i=null;const s=F(t).position==="fixed";let r=s?V(t):t;for(;P(r)&&!j(r);){const c=F(r),a=pt(r);!a&&c.position==="fixed"&&(i=null),(s?!a&&!i:!a&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||J(r)&&!a&&Bt(t,r))?o=o.filter(u=>u!==r):i=c,r=V(r)}return e.set(t,o),o}function ue(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?nt(e)?[]:fe(e,this._c):[].concat(n),o],c=r[0],a=r.reduce((l,u)=>{const d=St(e,u,i);return l.top=$(d.top,l.top),l.right=H(d.right,l.right),l.bottom=H(d.bottom,l.bottom),l.left=$(d.left,l.left),l},St(e,c,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function de(t){const{width:e,height:n}=Ft(t);return{width:e,height:n}}function me(t,e,n){const o=B(e),i=M(e),s=n==="fixed",r=z(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const a=N(0);if(o||!o&&!s)if((U(e)!=="body"||J(i))&&(c=ot(e)),o){const f=z(e,!0,s,e);a.x=f.x+e.clientLeft,a.y=f.y+e.clientTop}else i&&(a.x=ut(i));let l=0,u=0;if(i&&!o&&!s){const f=i.getBoundingClientRect();u=f.top+c.scrollTop,l=f.left+c.scrollLeft-ut(i,f)}const d=r.left+c.scrollLeft-a.x-l,h=r.top+c.scrollTop-a.y-u;return{x:d,y:h,width:r.width,height:r.height}}function lt(t){return F(t).position==="static"}function Dt(t,e){if(!B(t)||F(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return M(t)===n&&(n=n.ownerDocument.body),n}function Mt(t,e){const n=E(t);if(nt(t))return n;if(!B(t)){let i=V(t);for(;i&&!j(i);){if(P(i)&&!lt(i))return i;i=V(i)}return n}let o=Dt(t,e);for(;o&&ee(o)&&lt(o);)o=Dt(o,e);return o&&j(o)&&lt(o)&&!pt(o)?n:o||ne(t)||n}const pe=async function(t){const e=this.getOffsetParent||Mt,n=this.getDimensions,o=await n(t.floating);return{reference:me(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function he(t){return F(t).direction==="rtl"}const ge={convertOffsetParentRelativeRectToViewportRelativeRect:re,getDocumentElement:M,getClippingRect:ue,getOffsetParent:Mt,getElementRects:pe,getClientRects:se,getDimensions:de,getScale:X,isElement:P,isRTL:he};function we(t,e){let n=null,o;const i=M(t);function s(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function r(c,a){c===void 0&&(c=!1),a===void 0&&(a=1),s();const{left:l,top:u,width:d,height:h}=t.getBoundingClientRect();if(c||e(),!d||!h)return;const f=Q(u),m=Q(i.clientWidth-(l+d)),w=Q(i.clientHeight-(u+h)),x=Q(l),y={rootMargin:-f+"px "+-m+"px "+-w+"px "+-x+"px",threshold:$(0,H(1,a))||1};let v=!0;function R(O){const C=O[0].intersectionRatio;if(C!==a){if(!v)return r();C?r(!1,C):o=setTimeout(()=>{r(!1,1e-7)},1e3)}v=!1}try{n=new IntersectionObserver(R,{...y,root:i.ownerDocument})}catch{n=new IntersectionObserver(R,y)}n.observe(t)}return r(!0),s}function xe(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:a=!1}=o,l=gt(t),u=i||s?[...l?K(l):[],...K(e)]:[];u.forEach(g=>{i&&g.addEventListener("scroll",n,{passive:!0}),s&&g.addEventListener("resize",n)});const d=l&&c?we(l,n):null;let h=-1,f=null;r&&(f=new ResizeObserver(g=>{let[y]=g;y&&y.target===l&&f&&(f.unobserve(e),cancelAnimationFrame(h),h=requestAnimationFrame(()=>{var v;(v=f)==null||v.observe(e)})),n()}),l&&!a&&f.observe(l),f.observe(e));let m,w=a?z(t):null;a&&x();function x(){const g=z(t);w&&(g.x!==w.x||g.y!==w.y||g.width!==w.width||g.height!==w.height)&&n(),w=g,m=requestAnimationFrame(x)}return n(),()=>{var g;u.forEach(y=>{i&&y.removeEventListener("scroll",n),s&&y.removeEventListener("resize",n)}),d==null||d(),(g=f)==null||g.disconnect(),f=null,a&&cancelAnimationFrame(m)}}const Ce=Qt,Se=Kt,De=Zt,$e=te,Ee=Gt,ye=Ut,ve=(t,e,n)=>{const o=new Map,i={platform:ge,...n},s={...i.platform,_c:o};return jt(t,e,{...i,platform:s})},be={computePositionOptions:{},autoUpdateOptions:{},arrowOptions:{}},Te=t=>{const[{autoUpdateOptions$:e,computePositionOptions$:n,arrowOptions$:o},i]=Ht(be,t),{directive:s,element$:r}=ct(),{directive:c,element$:a}=ct(),{directive:l,element$:u}=ct(),d=L(()=>{const p=u();if(!p)return null;const b=o();return typeof b=="function"?A=>({...b(A),element:p}):{...b,element:p}}),h=L(()=>{let p=n();const b=d();return b&&(p={...p,middleware:[...p.middleware??[],ye(b)]}),p}),f=Wt([r,a,h,e],([p,b,A,D],T)=>{if(p&&b){const W=xe(b,p,()=>{T(ve(b,p,A))},D);return()=>{T(null),W()}}},null),m=Vt(f,null),w=L(()=>{var p;return(p=m())==null?void 0:p.placement}),x=L(()=>{var p;return(p=m())==null?void 0:p.middlewareData}),g=L(()=>{var p;return(p=m())==null?void 0:p.x}),y=L(()=>{var p;return(p=m())==null?void 0:p.y}),v=L(()=>{var p;return(p=m())==null?void 0:p.strategy}),R=L(()=>{var p,b;return(b=(p=x())==null?void 0:p.arrow)==null?void 0:b.x}),O=L(()=>{var p,b;return(b=(p=x())==null?void 0:p.arrow)==null?void 0:b.y}),C=L(()=>{const p=r();p&&(p.style.left=`${g()??0}px`,p.style.top=`${y()??0}px`)}),S=L(()=>{const p=u();if(p){const b=R(),A=O();p.style.left=b!=null?`${b}px`:"",p.style.top=A!=null?`${A}px`:""}});return{patch:i,...Nt({x$:g,y$:y,strategy$:v,placement$:w,middlewareData$:x}),directives:{referenceDirective:c,floatingDirective:wt(s,xt(C)),arrowDirective:wt(l,xt(S))}}};export{Se as a,$e as b,Te as c,Ee as h,Ce as o,De as s};
