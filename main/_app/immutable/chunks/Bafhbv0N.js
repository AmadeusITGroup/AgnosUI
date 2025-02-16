import{a as Jt,p as Ct}from"./ds9fOU4h.js";import{s as $t,m as Qt,u as Zt}from"./CbmKFJ8g.js";import{a as ot,t as Bt,c as Lt}from"./AF72GVsa.js";import{p as Mt,j as pt,k as gt,s as Vt,t as ht,i as Wt,h as ut,R as te}from"./CCa7hPa2.js";import{d as et,f as ee}from"./Ez_vkthz.js";import{z as Dt,y as wt,j as ne,v as dt,f as T,g as oe,m as ie,q as Tt,t as Pt,x as re,s as St}from"./CR6wMrxq.js";import{s as se,a as ce}from"./n7NBmYyo.js";import{i as le}from"./C064kFT6.js";import{e as ae}from"./sGJAZFO5.js";import{H as fe}from"./CcEIehB5.js";import{S as ue}from"./cDKcb1Z_.js";var de=Bt('<div><div class="tooltip-inner"> </div> <div></div></div>');function me(t,e){Mt(e,!0);const[n,o]=se(),i=()=>ce(e.placement$,"$placement$",n);var r=de();let s;var c=pt(r),l=pt(c,!0);gt(c);var a=Vt(c,2);let d;et(a,f=>e.arrowDirective?.(f)),et(a,(f,p)=>Dt?.(f,p),()=>"tooltip-arrow position-absolute"),gt(r),et(r,f=>e.directive?.(f)),et(r,(f,p)=>Dt?.(f,p),()=>"tooltip bs-tooltip-auto fade show position-absolute"),ht((f,p)=>{s=wt(r,s,{role:"tooltip","data-show":"","data-popper-placement":i(),...f}),$t(l,e.content),d=wt(a,d,{"data-popper-arrow":!0,...p})},[()=>({}),()=>({})]),ot(t,r),Wt(),o()}const X=Math.min,z=Math.max,it=Math.round,nt=Math.floor,F=t=>({x:t,y:t}),pe={left:"right",right:"left",bottom:"top",top:"bottom"},ge={start:"end",end:"start"};function he(t,e,n){return z(t,X(e,n))}function ct(t,e){return typeof t=="function"?t(e):t}function q(t){return t.split("-")[0]}function Z(t){return t.split("-")[1]}function we(t){return t==="x"?"y":"x"}function yt(t){return t==="y"?"height":"width"}function J(t){return["top","bottom"].includes(q(t))?"y":"x"}function bt(t){return we(J(t))}function xe(t,e,n){n===void 0&&(n=!1);const o=Z(t),i=bt(t),r=yt(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=rt(s)),[s,rt(s)]}function ve(t){const e=rt(t);return[xt(t),e,xt(e)]}function xt(t){return t.replace(/start|end/g,e=>ge[e])}function ye(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}function be(t,e,n,o){const i=Z(t);let r=ye(q(t),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(xt)))),r}function rt(t){return t.replace(/left|right|bottom|top/g,e=>pe[e])}function Oe(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ht(t){return typeof t!="number"?Oe(t):{top:t,right:t,bottom:t,left:t}}function st(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function _t(t,e,n){let{reference:o,floating:i}=t;const r=J(e),s=bt(e),c=yt(s),l=q(e),a=r==="y",d=o.x+o.width/2-i.width/2,f=o.y+o.height/2-i.height/2,p=o[c]/2-i[c]/2;let u;switch(l){case"top":u={x:d,y:o.y-i.height};break;case"bottom":u={x:d,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:f};break;case"left":u={x:o.x-i.width,y:f};break;default:u={x:o.x,y:o.y}}switch(Z(e)){case"start":u[s]-=p*(n&&a?-1:1);break;case"end":u[s]+=p*(n&&a?-1:1);break}return u}const Ae=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,c=r.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let a=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:f}=_t(a,o,l),p=o,u={},g=0;for(let h=0;h<c.length;h++){const{name:w,fn:x}=c[h],{x:y,y:O,data:A,reset:b}=await x({x:d,y:f,initialPlacement:o,placement:p,strategy:i,middlewareData:u,rects:a,platform:s,elements:{reference:t,floating:e}});d=y??d,f=O??f,u={...u,[w]:{...u[w],...A}},b&&g<=50&&(g++,typeof b=="object"&&(b.placement&&(p=b.placement),b.rects&&(a=b.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):b.rects),{x:d,y:f}=_t(a,p,l)),h=-1)}return{x:d,y:f,placement:p,strategy:i,middlewareData:u}};async function Re(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:c,strategy:l}=t,{boundary:a="clippingAncestors",rootBoundary:d="viewport",elementContext:f="floating",altBoundary:p=!1,padding:u=0}=ct(e,t),g=Ht(u),w=c[p?f==="floating"?"reference":"floating":f],x=st(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(w)))==null||n?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:a,rootBoundary:d,strategy:l})),y=f==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,O=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),A=await(r.isElement==null?void 0:r.isElement(O))?await(r.getScale==null?void 0:r.getScale(O))||{x:1,y:1}:{x:1,y:1},b=st(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:y,offsetParent:O,strategy:l}):y);return{top:(x.top-b.top+g.top)/A.y,bottom:(b.bottom-x.bottom+g.bottom)/A.y,left:(x.left-b.left+g.left)/A.x,right:(b.right-x.right+g.right)/A.x}}const Ee=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:c,middlewareData:l}=e,{element:a,padding:d=0}=ct(t,e)||{};if(a==null)return{};const f=Ht(d),p={x:n,y:o},u=bt(i),g=yt(u),h=await s.getDimensions(a),w=u==="y",x=w?"top":"left",y=w?"bottom":"right",O=w?"clientHeight":"clientWidth",A=r.reference[g]+r.reference[u]-p[u]-r.floating[g],b=p[u]-r.reference[u],D=await(s.getOffsetParent==null?void 0:s.getOffsetParent(a));let C=D?D[O]:0;(!C||!await(s.isElement==null?void 0:s.isElement(D)))&&(C=c.floating[O]||r.floating[g]);const m=A/2-b/2,v=C/2-h[g]/2-1,R=X(f[x],v),H=X(f[y],v),_=R,I=C-h[g]-H,E=C/2-h[g]/2+m,Y=he(_,E,I),B=!l.arrow&&Z(i)!=null&&E!==Y&&r.reference[g]/2-(E<_?R:H)-h[g]/2<0,k=B?E<_?E-_:E-I:0;return{[u]:p[u]+k,data:{[u]:Y,centerOffset:E-Y-k,...B&&{alignmentOffset:k}},reset:B}}}),Ce=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:s,initialPlacement:c,platform:l,elements:a}=e,{mainAxis:d=!0,crossAxis:f=!0,fallbackPlacements:p,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:h=!0,...w}=ct(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const x=q(i),y=J(c),O=q(c)===c,A=await(l.isRTL==null?void 0:l.isRTL(a.floating)),b=p||(O||!h?[rt(c)]:ve(c)),D=g!=="none";!p&&D&&b.push(...be(c,h,g,A));const C=[c,...b],m=await Re(e,w),v=[];let R=((o=r.flip)==null?void 0:o.overflows)||[];if(d&&v.push(m[x]),f){const E=xe(i,s,A);v.push(m[E[0]],m[E[1]])}if(R=[...R,{placement:i,overflows:v}],!v.every(E=>E<=0)){var H,_;const E=(((H=r.flip)==null?void 0:H.index)||0)+1,Y=C[E];if(Y)return{data:{index:E,overflows:R},reset:{placement:Y}};let B=(_=R.filter(k=>k.overflows[0]<=0).sort((k,M)=>k.overflows[1]-M.overflows[1])[0])==null?void 0:_.placement;if(!B)switch(u){case"bestFit":{var I;const k=(I=R.filter(M=>{if(D){const V=J(M.placement);return V===y||V==="y"}return!0}).map(M=>[M.placement,M.overflows.filter(V=>V>0).reduce((V,Kt)=>V+Kt,0)]).sort((M,V)=>M[1]-V[1])[0])==null?void 0:I[0];k&&(B=k);break}case"initialPlacement":B=c;break}if(i!==B)return{reset:{placement:B}}}return{}}}};async function Le(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=q(n),c=Z(n),l=J(n)==="y",a=["left","top"].includes(s)?-1:1,d=r&&l?-1:1,f=ct(e,t);let{mainAxis:p,crossAxis:u,alignmentAxis:g}=typeof f=="number"?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return c&&typeof g=="number"&&(u=c==="end"?g*-1:g),l?{x:u*d,y:p*a}:{x:p*a,y:u*d}}const De=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:c}=e,l=await Le(e,t);return s===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+l.x,y:r+l.y,data:{...l,placement:s}}}}};function lt(){return typeof window<"u"}function K(t){return It(t)?(t.nodeName||"").toLowerCase():"#document"}function L(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function $(t){var e;return(e=(It(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function It(t){return lt()?t instanceof Node||t instanceof L(t).Node:!1}function P(t){return lt()?t instanceof Element||t instanceof L(t).Element:!1}function N(t){return lt()?t instanceof HTMLElement||t instanceof L(t).HTMLElement:!1}function kt(t){return!lt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof L(t).ShadowRoot}function tt(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=S(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function Te(t){return["table","td","th"].includes(K(t))}function at(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function Ot(t){const e=At(),n=P(t)?S(t):t;return["transform","translate","scale","rotate","perspective"].some(o=>n[o]?n[o]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Pe(t){let e=W(t);for(;N(e)&&!G(e);){if(Ot(e))return e;if(at(e))return null;e=W(e)}return null}function At(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function G(t){return["html","body","#document"].includes(K(t))}function S(t){return L(t).getComputedStyle(t)}function ft(t){return P(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function W(t){if(K(t)==="html")return t;const e=t.assignedSlot||t.parentNode||kt(t)&&t.host||$(t);return kt(e)?e.host:e}function zt(t){const e=W(t);return G(e)?t.ownerDocument?t.ownerDocument.body:t.body:N(e)&&tt(e)?e:zt(e)}function Q(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=zt(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=L(i);if(r){const c=vt(s);return e.concat(s,s.visualViewport||[],tt(i)?i:[],c&&n?Q(c):[])}return e.concat(i,Q(i,[],n))}function vt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function jt(t){const e=S(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=N(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,c=it(n)!==r||it(o)!==s;return c&&(n=r,o=s),{width:n,height:o,$:c}}function Rt(t){return P(t)?t:t.contextElement}function U(t){const e=Rt(t);if(!N(e))return F(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=jt(e);let s=(r?it(n.width):n.width)/o,c=(r?it(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const Se=F(0);function Yt(t){const e=L(t);return!At()||!e.visualViewport?Se:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function _e(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==L(t)?!1:e}function j(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=Rt(t);let s=F(1);e&&(o?P(o)&&(s=U(o)):s=U(t));const c=_e(r,n,o)?Yt(r):F(0);let l=(i.left+c.x)/s.x,a=(i.top+c.y)/s.y,d=i.width/s.x,f=i.height/s.y;if(r){const p=L(r),u=o&&P(o)?L(o):o;let g=p,h=vt(g);for(;h&&o&&u!==g;){const w=U(h),x=h.getBoundingClientRect(),y=S(h),O=x.left+(h.clientLeft+parseFloat(y.paddingLeft))*w.x,A=x.top+(h.clientTop+parseFloat(y.paddingTop))*w.y;l*=w.x,a*=w.y,d*=w.x,f*=w.y,l+=O,a+=A,g=L(h),h=vt(g)}}return st({width:d,height:f,x:l,y:a})}function Et(t,e){const n=ft(t).scrollLeft;return e?e.left+n:j($(t)).left+n}function Ut(t,e,n){n===void 0&&(n=!1);const o=t.getBoundingClientRect(),i=o.left+e.scrollLeft-(n?0:Et(t,o)),r=o.top+e.scrollTop;return{x:i,y:r}}function ke(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r=i==="fixed",s=$(o),c=e?at(e.floating):!1;if(o===s||c&&r)return n;let l={scrollLeft:0,scrollTop:0},a=F(1);const d=F(0),f=N(o);if((f||!f&&!r)&&((K(o)!=="body"||tt(s))&&(l=ft(o)),N(o))){const u=j(o);a=U(o),d.x=u.x+o.clientLeft,d.y=u.y+o.clientTop}const p=s&&!f&&!r?Ut(s,l,!0):F(0);return{width:n.width*a.x,height:n.height*a.y,x:n.x*a.x-l.scrollLeft*a.x+d.x+p.x,y:n.y*a.y-l.scrollTop*a.y+d.y+p.y}}function Fe(t){return Array.from(t.getClientRects())}function Ne(t){const e=$(t),n=ft(t),o=t.ownerDocument.body,i=z(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=z(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+Et(t);const c=-n.scrollTop;return S(o).direction==="rtl"&&(s+=z(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:c}}function $e(t,e){const n=L(t),o=$(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,c=0,l=0;if(i){r=i.width,s=i.height;const a=At();(!a||a&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:r,height:s,x:c,y:l}}function Be(t,e){const n=j(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=N(t)?U(t):F(1),s=t.clientWidth*r.x,c=t.clientHeight*r.y,l=i*r.x,a=o*r.y;return{width:s,height:c,x:l,y:a}}function Ft(t,e,n){let o;if(e==="viewport")o=$e(t,n);else if(e==="document")o=Ne($(t));else if(P(e))o=Be(e,n);else{const i=Yt(t);o={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return st(o)}function Xt(t,e){const n=W(t);return n===e||!P(n)||G(n)?!1:S(n).position==="fixed"||Xt(n,e)}function Me(t,e){const n=e.get(t);if(n)return n;let o=Q(t,[],!1).filter(c=>P(c)&&K(c)!=="body"),i=null;const r=S(t).position==="fixed";let s=r?W(t):t;for(;P(s)&&!G(s);){const c=S(s),l=Ot(s);!l&&c.position==="fixed"&&(i=null),(r?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||tt(s)&&!l&&Xt(t,s))?o=o.filter(d=>d!==s):i=c,s=W(s)}return e.set(t,o),o}function Ve(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?at(e)?[]:Me(e,this._c):[].concat(n),o],c=s[0],l=s.reduce((a,d)=>{const f=Ft(e,d,i);return a.top=z(f.top,a.top),a.right=X(f.right,a.right),a.bottom=X(f.bottom,a.bottom),a.left=z(f.left,a.left),a},Ft(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function We(t){const{width:e,height:n}=jt(t);return{width:e,height:n}}function He(t,e,n){const o=N(e),i=$(e),r=n==="fixed",s=j(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const l=F(0);if(o||!o&&!r)if((K(e)!=="body"||tt(i))&&(c=ft(e)),o){const p=j(e,!0,r,e);l.x=p.x+e.clientLeft,l.y=p.y+e.clientTop}else i&&(l.x=Et(i));const a=i&&!o&&!r?Ut(i,c):F(0),d=s.left+c.scrollLeft-l.x-a.x,f=s.top+c.scrollTop-l.y-a.y;return{x:d,y:f,width:s.width,height:s.height}}function mt(t){return S(t).position==="static"}function Nt(t,e){if(!N(t)||S(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return $(t)===n&&(n=n.ownerDocument.body),n}function qt(t,e){const n=L(t);if(at(t))return n;if(!N(t)){let i=W(t);for(;i&&!G(i);){if(P(i)&&!mt(i))return i;i=W(i)}return n}let o=Nt(t,e);for(;o&&Te(o)&&mt(o);)o=Nt(o,e);return o&&G(o)&&mt(o)&&!Ot(o)?n:o||Pe(t)||n}const Ie=async function(t){const e=this.getOffsetParent||qt,n=this.getDimensions,o=await n(t.floating);return{reference:He(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function ze(t){return S(t).direction==="rtl"}const je={convertOffsetParentRelativeRectToViewportRelativeRect:ke,getDocumentElement:$,getClippingRect:Ve,getOffsetParent:qt,getElementRects:Ie,getClientRects:Fe,getDimensions:We,getScale:U,isElement:P,isRTL:ze};function Gt(t,e){return t.x===e.x&&t.y===e.y&&t.width===e.width&&t.height===e.height}function Ye(t,e){let n=null,o;const i=$(t);function r(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function s(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),r();const a=t.getBoundingClientRect(),{left:d,top:f,width:p,height:u}=a;if(c||e(),!p||!u)return;const g=nt(f),h=nt(i.clientWidth-(d+p)),w=nt(i.clientHeight-(f+u)),x=nt(d),O={rootMargin:-g+"px "+-h+"px "+-w+"px "+-x+"px",threshold:z(0,X(1,l))||1};let A=!0;function b(D){const C=D[0].intersectionRatio;if(C!==l){if(!A)return s();C?s(!1,C):o=setTimeout(()=>{s(!1,1e-7)},1e3)}C===1&&!Gt(a,t.getBoundingClientRect())&&s(),A=!1}try{n=new IntersectionObserver(b,{...O,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,O)}n.observe(t)}return s(!0),r}function Ue(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,a=Rt(t),d=i||r?[...a?Q(a):[],...Q(e)]:[];d.forEach(x=>{i&&x.addEventListener("scroll",n,{passive:!0}),r&&x.addEventListener("resize",n)});const f=a&&c?Ye(a,n):null;let p=-1,u=null;s&&(u=new ResizeObserver(x=>{let[y]=x;y&&y.target===a&&u&&(u.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var O;(O=u)==null||O.observe(e)})),n()}),a&&!l&&u.observe(a),u.observe(e));let g,h=l?j(t):null;l&&w();function w(){const x=j(t);h&&!Gt(h,x)&&n(),h=x,g=requestAnimationFrame(w)}return n(),()=>{var x;d.forEach(y=>{i&&y.removeEventListener("scroll",n),r&&y.removeEventListener("resize",n)}),f?.(),(x=u)==null||x.disconnect(),u=null,l&&cancelAnimationFrame(g)}}const Xe=De,qe=Ce,Ge=Ee,Ke=(t,e,n)=>{const o=new Map,i={platform:je,...n},r={...i.platform,_c:o};return Ae(t,e,{...i,platform:r})},Je={computePositionOptions:{},autoUpdateOptions:{},arrowOptions:{}},Qe=t=>{const[{autoUpdateOptions$:e,computePositionOptions$:n,arrowOptions$:o},i]=ne(Je,t),{directive:r,element$:s}=dt(),{directive:c,element$:l}=dt(),{directive:a,element$:d}=dt(),f=T(()=>{const m=d();if(!m)return null;const v=o();return typeof v=="function"?R=>({...v(R),element:m}):{...v,element:m}}),p=T(()=>{let m=n();const v=f();return v&&(m={...m,middleware:[...m.middleware??[],Ge(v)]}),m}),u=oe([s,l,p,e],([m,v,R,H],_)=>{if(m&&v){const I=Ue(v,m,()=>{_(Ke(v,m,R))},H);return()=>{_(null),I()}}},null),g=ee(u,null),h=T(()=>{var m;return(m=g())==null?void 0:m.placement}),w=T(()=>{var m;return(m=g())==null?void 0:m.middlewareData}),x=T(()=>{var m;return(m=g())==null?void 0:m.x}),y=T(()=>{var m;return(m=g())==null?void 0:m.y}),O=T(()=>{var m;return(m=g())==null?void 0:m.strategy}),A=T(()=>{var m,v;return(v=(m=w())==null?void 0:m.arrow)==null?void 0:v.x}),b=T(()=>{var m,v;return(v=(m=w())==null?void 0:m.arrow)==null?void 0:v.y}),D=T(()=>{const m=s();m&&(m.style.left=`${x()??0}px`,m.style.top=`${y()??0}px`)}),C=T(()=>{const m=d();if(m){const v=A(),R=b();m.style.left=v!=null?`${v}px`:"",m.style.top=R!=null?`${R}px`:""}});return{patch:i,...ie({x$:x,y$:y,strategy$:O,placement$:h,middlewareData$:w}),directives:{referenceDirective:c,floatingDirective:Tt(r,Pt(D)),arrowDirective:Tt(a,Pt(C))},api:{}}},mn=re((t,e)=>{const{directives:{floatingDirective:n,referenceDirective:o,arrowDirective:i},stores:{placement$:r}}=Qe({props:{arrowOptions:{padding:6},computePositionOptions:{placement:"top",middleware:[Xe(8),qe()]}}}),s=Jt({content:e.content,placement$:r,directive:n,arrowDirective:i});let c;const l=o(t);t.addEventListener("mouseenter",a),t.addEventListener("mouseleave",d);function a(){c||(c=Qt(me,{target:document.body,props:s}))}function d(){c&&(Zt(c),c=void 0)}return{update(f){s.content=f.content},destroy(){d(),l?.destroy?.(),t.removeEventListener("mouseenter",a),t.removeEventListener("mouseleave",d)}}}),Ze=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-link-45deg" viewBox="0 0 16 16">
  <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z"/>
  <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z"/>
</svg>`;var tn=Bt(' <a class="anchor-link svelte-1fw63p"><!></a>',1);function pn(t,e){Mt(e,!0);let n=Ct(e,"id",19,()=>e.text.toLowerCase().replace(/\s/g,"-").trim()),o=Ct(e,"headerClassName",3,"");var i=Lt(),r=ut(i);{var s=l=>{var a=Lt(),d=ut(a);ae(d,()=>"h"+e.depth,!1,(f,p)=>{let u;ht(()=>u=wt(f,u,{id:n(),class:`${o()} text-primary-emphasis ${e.depth>1?"mt-2":""}`},"svelte-1fw63p",f.namespaceURI===te,f.nodeName.includes("-")));var g=tn(),h=ut(g),w=Vt(h),x=pt(w);ue(x,{className:"icon-24 align-middle",svg:Ze}),gt(w),ht(()=>{$t(h,`${e.text??""} `),St(w,"href",`#${n()??""}`),St(w,"aria-label",`link to ${e.text??""}`)}),ot(p,g)}),ot(l,a)},c=l=>{fe(l,{get title(){return e.text}})};le(r,l=>{e.depth>1?l(s):l(c,!1)})}ot(t,i),Wt()}export{pn as H,Ze as l,mn as t};
