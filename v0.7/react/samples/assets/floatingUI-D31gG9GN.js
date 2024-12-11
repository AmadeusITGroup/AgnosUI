import{w as Wt,H as ct,g as L,E as Nt,s as Vt,m as wt,o as xt}from"./directive-CKEccryv-BEge1hNH.js";import{c as kt}from"./promise-CY2U8bTP-COOyouyK.js";const Tt=["top","right","bottom","left"],yt=["start","end"],vt=Tt.reduce((t,e)=>t.concat(e,e+"-"+yt[0],e+"-"+yt[1]),[]),N=Math.min,T=Math.max,Z=Math.round,Q=Math.floor,_=t=>({x:t,y:t}),zt={left:"right",right:"left",bottom:"top",top:"bottom"},It={start:"end",end:"start"};function at(t,e,n){return T(t,N(e,n))}function I(t,e){return typeof t=="function"?t(e):t}function Y(t){return t.split("-")[0]}function B(t){return t.split("-")[1]}function $t(t){return t==="x"?"y":"x"}function ut(t){return t==="y"?"height":"width"}function G(t){return["top","bottom"].includes(Y(t))?"y":"x"}function dt(t){return $t(G(t))}function Yt(t,e,n){n===void 0&&(n=!1);const o=B(t),i=dt(t),s=ut(i);let r=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=bt(r)),[r,bt(r)]}function jt(t){return t.replace(/start|end/g,e=>It[e])}function bt(t){return t.replace(/left|right|bottom|top/g,e=>zt[e])}function Ut(t){return{top:0,right:0,bottom:0,left:0,...t}}function Et(t){return typeof t!="number"?Ut(t):{top:t,right:t,bottom:t,left:t}}function tt(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function Ot(t,e,n){let{reference:o,floating:i}=t;const s=G(e),r=dt(e),c=ut(r),l=Y(e),a=s==="y",f=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,g=o[c]/2-i[c]/2;let d;switch(l){case"top":d={x:f,y:o.y-i.height};break;case"bottom":d={x:f,y:o.y+o.height};break;case"right":d={x:o.x+o.width,y:u};break;case"left":d={x:o.x-i.width,y:u};break;default:d={x:o.x,y:o.y}}switch(B(e)){case"start":d[r]-=g*(n&&a?-1:1);break;case"end":d[r]+=g*(n&&a?-1:1);break}return d}const Xt=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:s=[],platform:r}=n,c=s.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(e));let a=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:f,y:u}=Ot(a,o,l),g=o,d={},m=0;for(let w=0;w<c.length;w++){const{name:x,fn:p}=c[w],{x:y,y:v,data:R,reset:O}=await p({x:f,y:u,initialPlacement:o,placement:g,strategy:i,middlewareData:d,rects:a,platform:r,elements:{reference:t,floating:e}});f=y??f,u=v??u,d={...d,[x]:{...d[x],...R}},O&&m<=50&&(m++,typeof O=="object"&&(O.placement&&(g=O.placement),O.rects&&(a=O.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):O.rects),{x:f,y:u}=Ot(a,g,l)),w=-1)}return{x:f,y:u,placement:g,strategy:i,middlewareData:d}};async function q(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:s,rects:r,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:f="viewport",elementContext:u="floating",altBoundary:g=!1,padding:d=0}=I(e,t),m=Et(d),x=c[g?u==="floating"?"reference":"floating":u],p=tt(await s.getClippingRect({element:(n=await(s.isElement==null?void 0:s.isElement(x)))==null||n?x:x.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:a,rootBoundary:f,strategy:l})),y=u==="floating"?{x:o,y:i,width:r.floating.width,height:r.floating.height}:r.reference,v=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),R=await(s.isElement==null?void 0:s.isElement(v))?await(s.getScale==null?void 0:s.getScale(v))||{x:1,y:1}:{x:1,y:1},O=tt(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:y,offsetParent:v,strategy:l}):y);return{top:(p.top-O.top+m.top)/R.y,bottom:(O.bottom-p.bottom+m.bottom)/R.y,left:(p.left-O.left+m.left)/R.x,right:(O.right-p.right+m.right)/R.x}}const qt=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:s,platform:r,elements:c,middlewareData:l}=e,{element:a,padding:f=0}=I(t,e)||{};if(a==null)return{};const u=Et(f),g={x:n,y:o},d=dt(i),m=ut(d),w=await r.getDimensions(a),x=d==="y",p=x?"top":"left",y=x?"bottom":"right",v=x?"clientHeight":"clientWidth",R=s.reference[m]+s.reference[d]-g[d]-s.floating[m],O=g[d]-s.reference[d],C=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a));let D=C?C[v]:0;(!D||!await(r.isElement==null?void 0:r.isElement(C)))&&(D=c.floating[v]||s.floating[m]);const h=R/2-O/2,b=D/2-w[m]/2-1,A=N(u[p],b),S=N(u[y],b),E=A,W=D-w[m]-S,k=D/2-w[m]/2+h,it=at(E,k,W),rt=!l.arrow&&B(i)!=null&&k!==it&&s.reference[m]/2-(k<E?A:S)-w[m]/2<0,st=rt?k<E?k-E:k-W:0;return{[d]:g[d]+st,data:{[d]:it,centerOffset:k-it-st,...rt&&{alignmentOffset:st}},reset:rt}}});function Kt(t,e,n){return(t?[...n.filter(i=>B(i)===t),...n.filter(i=>B(i)!==t)]:n.filter(i=>Y(i)===i)).filter(i=>t?B(i)===t||(e?jt(i)!==i:!1):!0)}const Gt=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,i;const{rects:s,middlewareData:r,placement:c,platform:l,elements:a}=e,{crossAxis:f=!1,alignment:u,allowedPlacements:g=vt,autoAlignment:d=!0,...m}=I(t,e),w=u!==void 0||g===vt?Kt(u||null,d,g):g,x=await q(e,m),p=((n=r.autoPlacement)==null?void 0:n.index)||0,y=w[p];if(y==null)return{};const v=Yt(y,s,await(l.isRTL==null?void 0:l.isRTL(a.floating)));if(c!==y)return{reset:{placement:w[0]}};const R=[x[Y(y)],x[v[0]],x[v[1]]],O=[...((o=r.autoPlacement)==null?void 0:o.overflows)||[],{placement:y,overflows:R}],C=w[p+1];if(C)return{data:{index:p+1,overflows:O},reset:{placement:C}};const D=O.map(A=>{const S=B(A.placement);return[A.placement,S&&f?A.overflows.slice(0,2).reduce((E,W)=>E+W,0):A.overflows[0],A.overflows]}).sort((A,S)=>A[1]-S[1]),b=((i=D.filter(A=>A[2].slice(0,B(A[0])?2:3).every(S=>S<=0))[0])==null?void 0:i[0])||D[0][0];return b!==c?{data:{index:p+1,overflows:O},reset:{placement:b}}:{}}}};function At(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function Rt(t){return Tt.some(e=>t[e]>=0)}const Jt=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=I(t,e);switch(o){case"referenceHidden":{const s=await q(e,{...i,elementContext:"reference"}),r=At(s,n.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:Rt(r)}}}case"escaped":{const s=await q(e,{...i,altBoundary:!0}),r=At(s,n.floating);return{data:{escapedOffsets:r,escaped:Rt(r)}}}default:return{}}}}};async function Qt(t,e){const{placement:n,platform:o,elements:i}=t,s=await(o.isRTL==null?void 0:o.isRTL(i.floating)),r=Y(n),c=B(n),l=G(n)==="y",a=["left","top"].includes(r)?-1:1,f=s&&l?-1:1,u=I(e,t);let{mainAxis:g,crossAxis:d,alignmentAxis:m}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return c&&typeof m=="number"&&(d=c==="end"?m*-1:m),l?{x:d*f,y:g*a}:{x:g*a,y:d*f}}const Zt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:s,placement:r,middlewareData:c}=e,l=await Qt(e,t);return r===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+l.x,y:s+l.y,data:{...l,placement:r}}}}},te=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:c={fn:x=>{let{x:p,y}=x;return{x:p,y}}},...l}=I(t,e),a={x:n,y:o},f=await q(e,l),u=G(Y(i)),g=$t(u);let d=a[g],m=a[u];if(s){const x=g==="y"?"top":"left",p=g==="y"?"bottom":"right",y=d+f[x],v=d-f[p];d=at(y,d,v)}if(r){const x=u==="y"?"top":"left",p=u==="y"?"bottom":"right",y=m+f[x],v=m-f[p];m=at(y,m,v)}const w=c.fn({...e,[g]:d,[u]:m});return{...w,data:{x:w.x-n,y:w.y-o,enabled:{[g]:s,[u]:r}}}}}},ee=function(t){return t===void 0&&(t={}),{name:"size",options:t,async fn(e){var n,o;const{placement:i,rects:s,platform:r,elements:c}=e,{apply:l=()=>{},...a}=I(t,e),f=await q(e,a),u=Y(i),g=B(i),d=G(i)==="y",{width:m,height:w}=s.floating;let x,p;u==="top"||u==="bottom"?(x=u,p=g===(await(r.isRTL==null?void 0:r.isRTL(c.floating))?"start":"end")?"left":"right"):(p=u,x=g==="end"?"top":"bottom");const y=w-f.top-f.bottom,v=m-f.left-f.right,R=N(w-f[x],y),O=N(m-f[p],v),C=!e.middlewareData.shift;let D=R,h=O;if((n=e.middlewareData.shift)!=null&&n.enabled.x&&(h=v),(o=e.middlewareData.shift)!=null&&o.enabled.y&&(D=y),C&&!g){const A=T(f.left,0),S=T(f.right,0),E=T(f.top,0),W=T(f.bottom,0);d?h=m-2*(A!==0||S!==0?A+S:T(f.left,f.right)):D=w-2*(E!==0||W!==0?E+W:T(f.top,f.bottom))}await l({...e,availableWidth:h,availableHeight:D});const b=await r.getDimensions(c.floating);return m!==b.width||w!==b.height?{reset:{rects:!0}}:{}}}};function et(){return typeof window<"u"}function X(t){return Lt(t)?(t.nodeName||"").toLowerCase():"#document"}function $(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function H(t){var e;return(e=(Lt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Lt(t){return et()?t instanceof Node||t instanceof $(t).Node:!1}function P(t){return et()?t instanceof Element||t instanceof $(t).Element:!1}function M(t){return et()?t instanceof HTMLElement||t instanceof $(t).HTMLElement:!1}function Ct(t){return!et()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof $(t).ShadowRoot}function J(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=F(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function ne(t){return["table","td","th"].includes(X(t))}function nt(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function mt(t){const e=ht(),n=P(t)?F(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function oe(t){let e=V(t);for(;M(e)&&!U(e);){if(mt(e))return e;if(nt(e))return null;e=V(e)}return null}function ht(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function U(t){return["html","body","#document"].includes(X(t))}function F(t){return $(t).getComputedStyle(t)}function ot(t){return P(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function V(t){if(X(t)==="html")return t;const e=t.assignedSlot||t.parentNode||Ct(t)&&t.host||H(t);return Ct(e)?e.host:e}function Pt(t){const e=V(t);return U(e)?t.ownerDocument?t.ownerDocument.body:t.body:M(e)&&J(e)?e:Pt(e)}function K(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Pt(t),s=i===((o=t.ownerDocument)==null?void 0:o.body),r=$(i);if(s){const c=ft(r);return e.concat(r,r.visualViewport||[],J(i)?i:[],c&&n?K(c):[])}return e.concat(i,K(i,[],n))}function ft(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function Ft(t){const e=F(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=M(t),s=i?t.offsetWidth:n,r=i?t.offsetHeight:o,c=Z(n)!==s||Z(o)!==r;return c&&(n=s,o=r),{width:n,height:o,$:c}}function gt(t){return P(t)?t:t.contextElement}function j(t){const e=gt(t);if(!M(e))return _(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:s}=Ft(e);let r=(s?Z(n.width):n.width)/o,c=(s?Z(n.height):n.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!c||!Number.isFinite(c))&&(c=1),{x:r,y:c}}const ie=_(0);function _t(t){const e=$(t);return!ht()||!e.visualViewport?ie:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function re(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==$(t)?!1:e}function z(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),s=gt(t);let r=_(1);e&&(o?P(o)&&(r=j(o)):r=j(t));const c=re(s,n,o)?_t(s):_(0);let l=(i.left+c.x)/r.x,a=(i.top+c.y)/r.y,f=i.width/r.x,u=i.height/r.y;if(s){const g=$(s),d=o&&P(o)?$(o):o;let m=g,w=ft(m);for(;w&&o&&d!==m;){const x=j(w),p=w.getBoundingClientRect(),y=F(w),v=p.left+(w.clientLeft+parseFloat(y.paddingLeft))*x.x,R=p.top+(w.clientTop+parseFloat(y.paddingTop))*x.y;l*=x.x,a*=x.y,f*=x.x,u*=x.y,l+=v,a+=R,m=$(w),w=ft(m)}}return tt({width:f,height:u,x:l,y:a})}function pt(t,e){const n=ot(t).scrollLeft;return e?e.left+n:z(H(t)).left+n}function Bt(t,e,n){n===void 0&&(n=!1);const o=t.getBoundingClientRect(),i=o.left+e.scrollLeft-(n?0:pt(t,o)),s=o.top+e.scrollTop;return{x:i,y:s}}function se(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const s=i==="fixed",r=H(o),c=e?nt(e.floating):!1;if(o===r||c&&s)return n;let l={scrollLeft:0,scrollTop:0},a=_(1);const f=_(0),u=M(o);if((u||!u&&!s)&&((X(o)!=="body"||J(r))&&(l=ot(o)),M(o))){const d=z(o);a=j(o),f.x=d.x+o.clientLeft,f.y=d.y+o.clientTop}const g=r&&!u&&!s?Bt(r,l,!0):_(0);return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-l.scrollLeft*a.x+f.x+g.x,y:n.y*a.y-l.scrollTop*a.y+f.y+g.y}}function ce(t){return Array.from(t.getClientRects())}function le(t){const e=H(t),n=ot(t),o=t.ownerDocument.body,i=T(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),s=T(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let r=-n.scrollLeft+pt(t);const c=-n.scrollTop;return F(o).direction==="rtl"&&(r+=T(e.clientWidth,o.clientWidth)-i),{width:i,height:s,x:r,y:c}}function ae(t,e){const n=$(t),o=H(t),i=n.visualViewport;let s=o.clientWidth,r=o.clientHeight,c=0,l=0;if(i){s=i.width,r=i.height;const a=ht();(!a||a&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:s,height:r,x:c,y:l}}function fe(t,e){const n=z(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,s=M(t)?j(t):_(1),r=t.clientWidth*s.x,c=t.clientHeight*s.y,l=i*s.x,a=o*s.y;return{width:r,height:c,x:l,y:a}}function Dt(t,e,n){let o;if(e==="viewport")o=ae(t,n);else if(e==="document")o=le(H(t));else if(P(e))o=fe(e,n);else{const i=_t(t);o={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return tt(o)}function Mt(t,e){const n=V(t);return n===e||!P(n)||U(n)?!1:F(n).position==="fixed"||Mt(n,e)}function ue(t,e){const n=e.get(t);if(n)return n;let o=K(t,[],!1).filter(c=>P(c)&&X(c)!=="body"),i=null;const s=F(t).position==="fixed";let r=s?V(t):t;for(;P(r)&&!U(r);){const c=F(r),l=mt(r);!l&&c.position==="fixed"&&(i=null),(s?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||J(r)&&!l&&Mt(t,r))?o=o.filter(f=>f!==r):i=c,r=V(r)}return e.set(t,o),o}function de(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[...n==="clippingAncestors"?nt(e)?[]:ue(e,this._c):[].concat(n),o],c=r[0],l=r.reduce((a,f)=>{const u=Dt(e,f,i);return a.top=T(u.top,a.top),a.right=N(u.right,a.right),a.bottom=N(u.bottom,a.bottom),a.left=T(u.left,a.left),a},Dt(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function me(t){const{width:e,height:n}=Ft(t);return{width:e,height:n}}function he(t,e,n){const o=M(e),i=H(e),s=n==="fixed",r=z(t,!0,s,e);let c={scrollLeft:0,scrollTop:0};const l=_(0);if(o||!o&&!s)if((X(e)!=="body"||J(i))&&(c=ot(e)),o){const g=z(e,!0,s,e);l.x=g.x+e.clientLeft,l.y=g.y+e.clientTop}else i&&(l.x=pt(i));const a=i&&!o&&!s?Bt(i,c):_(0),f=r.left+c.scrollLeft-l.x-a.x,u=r.top+c.scrollTop-l.y-a.y;return{x:f,y:u,width:r.width,height:r.height}}function lt(t){return F(t).position==="static"}function St(t,e){if(!M(t)||F(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return H(t)===n&&(n=n.ownerDocument.body),n}function Ht(t,e){const n=$(t);if(nt(t))return n;if(!M(t)){let i=V(t);for(;i&&!U(i);){if(P(i)&&!lt(i))return i;i=V(i)}return n}let o=St(t,e);for(;o&&ne(o)&&lt(o);)o=St(o,e);return o&&U(o)&&lt(o)&&!mt(o)?n:o||oe(t)||n}const ge=async function(t){const e=this.getOffsetParent||Ht,n=this.getDimensions,o=await n(t.floating);return{reference:he(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function pe(t){return F(t).direction==="rtl"}const we={convertOffsetParentRelativeRectToViewportRelativeRect:se,getDocumentElement:H,getClippingRect:de,getOffsetParent:Ht,getElementRects:ge,getClientRects:ce,getDimensions:me,getScale:j,isElement:P,isRTL:pe};function xe(t,e){let n=null,o;const i=H(t);function s(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function r(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),s();const{left:a,top:f,width:u,height:g}=t.getBoundingClientRect();if(c||e(),!u||!g)return;const d=Q(f),m=Q(i.clientWidth-(a+u)),w=Q(i.clientHeight-(f+g)),x=Q(a),y={rootMargin:-d+"px "+-m+"px "+-w+"px "+-x+"px",threshold:T(0,N(1,l))||1};let v=!0;function R(O){const C=O[0].intersectionRatio;if(C!==l){if(!v)return r();C?r(!1,C):o=setTimeout(()=>{r(!1,1e-7)},1e3)}v=!1}try{n=new IntersectionObserver(R,{...y,root:i.ownerDocument})}catch{n=new IntersectionObserver(R,y)}n.observe(t)}return r(!0),s}function ye(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,a=gt(t),f=i||s?[...a?K(a):[],...K(e)]:[];f.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),s&&p.addEventListener("resize",n)});const u=a&&c?xe(a,n):null;let g=-1,d=null;r&&(d=new ResizeObserver(p=>{let[y]=p;y&&y.target===a&&d&&(d.unobserve(e),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var v;(v=d)==null||v.observe(e)})),n()}),a&&!l&&d.observe(a),d.observe(e));let m,w=l?z(t):null;l&&x();function x(){const p=z(t);w&&(p.x!==w.x||p.y!==w.y||p.width!==w.width||p.height!==w.height)&&n(),w=p,m=requestAnimationFrame(x)}return n(),()=>{var p;f.forEach(y=>{i&&y.removeEventListener("scroll",n),s&&y.removeEventListener("resize",n)}),u==null||u(),(p=d)==null||p.disconnect(),d=null,l&&cancelAnimationFrame(m)}}const Ce=Zt,De=Gt,Se=te,Te=ee,$e=Jt,ve=qt,be=(t,e,n)=>{const o=new Map,i={platform:we,...n},s={...i.platform,_c:o};return Xt(t,e,{...i,platform:s})},Oe={computePositionOptions:{},autoUpdateOptions:{},arrowOptions:{}},Ee=t=>{const[{autoUpdateOptions$:e,computePositionOptions$:n,arrowOptions$:o},i]=Wt(Oe,t),{directive:s,element$:r}=ct(),{directive:c,element$:l}=ct(),{directive:a,element$:f}=ct(),u=L(()=>{const h=f();if(!h)return null;const b=o();return typeof b=="function"?A=>({...b(A),element:h}):{...b,element:h}}),g=L(()=>{let h=n();const b=u();return b&&(h={...h,middleware:[...h.middleware??[],ve(b)]}),h}),d=Nt([r,l,g,e],([h,b,A,S],E)=>{if(h&&b){const W=ye(b,h,()=>{E(be(b,h,A))},S);return()=>{E(null),W()}}},null),m=kt(d,null),w=L(()=>{var h;return(h=m())==null?void 0:h.placement}),x=L(()=>{var h;return(h=m())==null?void 0:h.middlewareData}),p=L(()=>{var h;return(h=m())==null?void 0:h.x}),y=L(()=>{var h;return(h=m())==null?void 0:h.y}),v=L(()=>{var h;return(h=m())==null?void 0:h.strategy}),R=L(()=>{var h,b;return(b=(h=x())==null?void 0:h.arrow)==null?void 0:b.x}),O=L(()=>{var h,b;return(b=(h=x())==null?void 0:h.arrow)==null?void 0:b.y}),C=L(()=>{const h=r();h&&(h.style.left=`${p()??0}px`,h.style.top=`${y()??0}px`)}),D=L(()=>{const h=f();if(h){const b=R(),A=O();h.style.left=b!=null?`${b}px`:"",h.style.top=A!=null?`${A}px`:""}});return{patch:i,...Vt({x$:p,y$:y,strategy$:v,placement$:w,middlewareData$:x}),directives:{referenceDirective:c,floatingDirective:wt(s,xt(C)),arrowDirective:wt(a,xt(D))},api:{}}};export{De as a,Te as b,Ee as c,$e as h,Ce as o,Se as s};
