var Rt=Array.isArray,It=Array.from,Dt=Object.defineProperty,ln=Object.getOwnPropertyDescriptor,Vn=Object.getOwnPropertyDescriptors,Ot=Object.prototype,Ct=Array.prototype,Gn=Object.getPrototypeOf;function kt(n){return typeof n=="function"}const Nt=()=>{};function bt(n){return typeof n?.then=="function"}function Pt(n){return n()}function Kn(n){for(var t=0;t<n.length;t++)n[t]()}const E=2,cn=4,L=8,tn=16,m=32,$=64,D=128,U=256,p=512,x=1024,H=2048,N=4096,Y=8192,$n=16384,vn=32768,Ft=65536,Zn=1<<18,pn=1<<19,on=Symbol("$state"),Mt=Symbol("legacy props"),qt=Symbol("");function dn(n){return n===this.v}function zn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function Lt(n,t){return n!==t}function hn(n){return!zn(n,this.v)}function Jn(n){throw new Error("effect_in_teardown")}function Qn(){throw new Error("effect_in_unowned_derived")}function Wn(n){throw new Error("effect_orphan")}function Xn(){throw new Error("effect_update_depth_exceeded")}function Ht(){throw new Error("hydration_failed")}function Yt(n){throw new Error("props_invalid_value")}function jt(){throw new Error("state_descriptors_fixed")}function Bt(){throw new Error("state_prototype_fixed")}function nt(){throw new Error("state_unsafe_local_read")}function tt(){throw new Error("state_unsafe_mutation")}let Z=!1;function Ut(){Z=!0}function rn(n){return{f:0,v:n,reactions:null,equals:dn,version:0}}function Vt(n){return En(rn(n))}function rt(n,t=!1){const r=rn(n);return t||(r.equals=hn),Z&&i!==null&&i.l!==null&&(i.l.s??=[]).push(r),r}function Gt(n,t=!1){return En(rt(n,t))}function En(n){return u!==null&&u.f&E&&(w===null?yt([n]):w.push(n)),n}function Kt(n,t){return u!==null&&an()&&u.f&(E|tn)&&(w===null||!w.includes(n))&&tt(),et(n,t)}function et(n,t){return n.equals(t)||(n.v=t,n.version=qn(),yn(n,x),an()&&o!==null&&o.f&p&&!(o.f&m)&&(_!==null&&_.includes(n)?(T(o,x),J(o)):A===null?wt([n]):A.push(n))),t}function yn(n,t){var r=n.reactions;if(r!==null)for(var e=an(),s=r.length,l=0;l<s;l++){var a=r[l],f=a.f;f&x||!e&&a===o||(T(a,t),f&(p|D)&&(f&E?yn(a,H):J(a)))}}const $t=1,Zt=2,zt=4,Jt=8,Qt=16,Wt=1,Xt=2,nr=4,tr=8,rr=16,er=1,sr=2,st="[",at="[!",lt="]",wn={},ar=Symbol(),lr="http://www.w3.org/2000/svg";function mn(n){console.warn("hydration_mismatch")}let I=!1;function or(n){I=n}let y;function F(n){if(n===null)throw mn(),wn;return y=n}function ur(){return F(O(y))}function ir(n){if(I){if(O(y)!==null)throw mn(),wn;y=n}}function fr(n=1){if(I){for(var t=n,r=y;t--;)r=O(r);y=r}}function _r(){for(var n=0,t=y;;){if(t.nodeType===8){var r=t.data;if(r===lt){if(n===0)return t;n-=1}else(r===st||r===at)&&(n+=1)}var e=O(t);t.remove(),t=e}}var un,ot,Tn,gn;function cr(){if(un===void 0){un=window,ot=document;var n=Element.prototype,t=Node.prototype;Tn=ln(t,"firstChild").get,gn=ln(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function Q(n=""){return document.createTextNode(n)}function W(n){return Tn.call(n)}function O(n){return gn.call(n)}function vr(n,t){if(!I)return W(n);var r=W(y);if(r===null)r=y.appendChild(Q());else if(t&&r.nodeType!==3){var e=Q();return r?.before(e),F(e),e}return F(r),r}function pr(n,t){if(!I){var r=W(n);return r instanceof Comment&&r.data===""?O(r):r}return y}function dr(n,t=1,r=!1){let e=I?y:n;for(var s;t--;)s=e,e=O(e);if(!I)return e;var l=e?.nodeType;if(r&&l!==3){var a=Q();return e===null?s?.after(a):e.before(a),F(a),a}return F(e),e}function hr(n){n.textContent=""}function ut(n){var t=E|x;o===null?t|=D:o.f|=pn;var r=u!==null&&u.f&E?u:null;const e={children:null,ctx:i,deps:null,equals:dn,f:t,fn:n,reactions:null,v:null,version:0,parent:r??o};return r!==null&&(r.children??=[]).push(e),e}function Er(n){const t=ut(n);return t.equals=hn,t}function An(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&E?en(e):P(e)}}}function it(n){for(var t=n.parent;t!==null;){if(!(t.f&E))return t;t=t.parent}return null}function xn(n){var t,r=o;K(it(n));try{An(n),t=Ln(n)}finally{K(r)}return t}function Sn(n){var t=xn(n),r=(R||n.f&D)&&n.deps!==null?H:p;T(n,r),n.equals(t)||(n.v=t,n.version=qn())}function en(n){An(n),q(n,0),T(n,Y),n.v=n.children=n.deps=n.ctx=n.reactions=null}function Rn(n){o===null&&u===null&&Wn(),u!==null&&u.f&D&&Qn(),sn&&Jn()}function ft(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function b(n,t,r,e=!0){var s=(n&$)!==0,l=o,a={ctx:i,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|x,first:null,fn:t,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var f=C;try{fn(!0),z(a),a.f|=$n}catch(c){throw P(a),c}finally{fn(f)}}else t!==null&&J(a);var h=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&pn)===0;if(!h&&!s&&e&&(l!==null&&ft(a,l),u!==null&&u.f&E)){var g=u;(g.children??=[]).push(a)}return a}function yr(){return u===null?!1:!R}function wr(n){const t=b(L,null,!1);return T(t,p),t.teardown=n,t}function mr(n){Rn();var t=o!==null&&(o.f&m)!==0&&i!==null&&!i.m;if(t){var r=i;(r.e??=[]).push({fn:n,effect:o,reaction:u})}else{var e=In(n);return e}}function Tr(n){return Rn(),_t(n)}function gr(n){const t=b($,n,!0);return()=>{P(t)}}function In(n){return b(cn,n,!1)}function _t(n){return b(L,n,!0)}function Ar(n){return ct(n)}function ct(n,t=0){return b(L|tn|t,n,!0)}function xr(n,t=!0){return b(L|m,n,!0,t)}function Dn(n){var t=n.teardown;if(t!==null){const r=sn,e=u;_n(!0),G(null);try{t.call(null)}finally{_n(r),G(e)}}}function On(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)en(t[r])}}function Cn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;P(r,t),r=e}}function vt(n){for(var t=n.first;t!==null;){var r=t.next;t.f&m||P(t),t=r}}function P(n,t=!0){var r=!1;if((t||n.f&Zn)&&n.nodes_start!==null){for(var e=n.nodes_start,s=n.nodes_end;e!==null;){var l=e===s?null:O(e);e.remove(),e=l}r=!0}Cn(n,t&&!r),On(n),q(n,0),T(n,Y);var a=n.transitions;if(a!==null)for(const h of a)h.stop();Dn(n);var f=n.parent;f!==null&&f.first!==null&&kn(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes_start=n.nodes_end=null}function kn(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function Sr(n,t){var r=[];Nn(n,r,!0),pt(r,()=>{P(n),t&&t()})}function pt(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var s of n)s.out(e)}else t()}function Nn(n,t,r){if(!(n.f&N)){if(n.f^=N,n.transitions!==null)for(const a of n.transitions)(a.is_global||r)&&t.push(a);for(var e=n.first;e!==null;){var s=e.next,l=(e.f&vn)!==0||(e.f&m)!==0;Nn(e,t,l?r:!1),e=s}}}function Rr(n){bn(n,!0)}function bn(n,t){if(n.f&N){j(n)&&z(n),n.f^=N;for(var r=n.first;r!==null;){var e=r.next,s=(r.f&vn)!==0||(r.f&m)!==0;bn(r,s?t:!1),r=e}if(n.transitions!==null)for(const l of n.transitions)(l.is_global||t)&&l.in()}}let V=!1,X=[];function Pn(){V=!1;const n=X.slice();X=[],Kn(n)}function Ir(n){V||(V=!0,queueMicrotask(Pn)),X.push(n)}function dt(){V&&Pn()}function ht(n){throw new Error("lifecycle_outside_component")}const Fn=0,Et=1;let B=Fn,M=!1,C=!1,sn=!1;function fn(n){C=n}function _n(n){sn=n}let S=[],k=0;let u=null;function G(n){u=n}let o=null;function K(n){o=n}let w=null;function yt(n){w=n}let _=null,d=0,A=null;function wt(n){A=n}let Mn=0,R=!1,i=null;function Dr(n){i=n}function qn(){return++Mn}function an(){return!Z||i!==null&&i.l===null}function j(n){var t=n.f;if(t&x)return!0;if(t&H){var r=n.deps,e=(t&D)!==0;if(r!==null){var s;if(t&U){for(s=0;s<r.length;s++)(r[s].reactions??=[]).push(n);n.f^=U}for(s=0;s<r.length;s++){var l=r[s];if(j(l)&&Sn(l),e&&o!==null&&!R&&!l?.reactions?.includes(n)&&(l.reactions??=[]).push(n),l.version>n.version)return!0}}e||T(n,p)}return!1}function mt(n,t,r){throw n}function Ln(n){var t=_,r=d,e=A,s=u,l=R,a=w,f=i,h=n.f;_=null,d=0,A=null,u=h&(m|$)?null:n,R=!C&&(h&D)!==0,w=null,i=n.ctx;try{var g=(0,n.fn)(),c=n.deps;if(_!==null){var v;if(q(n,d),c!==null&&d>0)for(c.length=d+_.length,v=0;v<_.length;v++)c[d+v]=_[v];else n.deps=c=_;if(!R)for(v=d;v<c.length;v++)(c[v].reactions??=[]).push(n)}else c!==null&&d<c.length&&(q(n,d),c.length=d);return g}finally{_=t,d=r,A=e,u=s,R=l,w=a,i=f}}function Tt(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[e]=r[s],r.pop())}}r===null&&t.f&E&&(_===null||!_.includes(t))&&(T(t,H),t.f&(D|U)||(t.f^=U),q(t,0))}function q(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)Tt(n,r[e])}function z(n){var t=n.f;if(!(t&Y)){T(n,p);var r=o;o=n;try{t&tn?vt(n):Cn(n),On(n),Dn(n);var e=Ln(n);n.teardown=typeof e=="function"?e:null,n.version=Mn}catch(s){mt(s)}finally{o=r}}}function Hn(){k>1e3&&(k=0,Xn()),k++}function Yn(n){var t=n.length;if(t!==0){Hn();var r=C;C=!0;try{for(var e=0;e<t;e++){var s=n[e];s.f&p||(s.f^=p);var l=[];jn(s,l),gt(l)}}finally{C=r}}}function gt(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];!(e.f&(Y|N))&&j(e)&&(z(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?kn(e):e.fn=null))}}function At(){if(M=!1,k>1001)return;const n=S;S=[],Yn(n),M||(k=0)}function J(n){B===Fn&&(M||(M=!0,queueMicrotask(At)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&($|m)){if(!(r&p))return;t.f^=p}}S.push(t)}function jn(n,t){var r=n.first,e=[];n:for(;r!==null;){var s=r.f,l=(s&m)!==0,a=l&&(s&p)!==0;if(!a&&!(s&N))if(s&L){l?r.f^=p:j(r)&&z(r);var f=r.first;if(f!==null){r=f;continue}}else s&cn&&e.push(r);var h=r.next;if(h===null){let v=r.parent;for(;v!==null;){if(n===v)break n;var g=v.next;if(g!==null){r=g;continue n}v=v.parent}}r=h}for(var c=0;c<e.length;c++)f=e[c],t.push(f),jn(f,t)}function Bn(n){var t=B,r=S;try{Hn();const s=[];B=Et,S=s,M=!1,Yn(r);var e=n?.();return dt(),(S.length>0||s.length>0)&&Bn(),k=0,e}finally{B=t,S=r}}async function Or(){await Promise.resolve(),Bn()}function Cr(n){var t=n.f,r=(t&E)!==0;if(r&&t&Y){var e=xn(n);return en(n),e}if(u!==null){w!==null&&w.includes(n)&&nt();var s=u.deps;_===null&&s!==null&&s[d]===n?d++:_===null?_=[n]:_.push(n),A!==null&&o!==null&&o.f&p&&!(o.f&m)&&A.includes(n)&&(T(o,x),J(o))}else if(r&&n.deps===null)for(var l=n,a=l.parent,f=l;a!==null;)if(a.f&E){var h=a;f=h,a=h.parent}else{var g=a;g.deriveds?.includes(f)||(g.deriveds??=[]).push(f);break}return r&&(l=n,j(l)&&Sn(l)),n.v}function kr(n){const t=u;try{return u=null,n()}finally{u=t}}const xt=~(x|H|p);function T(n,t){n.f=n.f&xt|t}function Nr(n){return Un().get(n)}function br(n,t){return Un().set(n,t),t}function Un(n){return i===null&&ht(),i.c??=new Map(St(i)||void 0)}function St(n){let t=n.p;for(;t!==null;){const r=t.c;if(r!==null)return r;t=t.p}return null}function Pr(n,t=!1,r){i={p:i,c:null,e:null,m:!1,s:n,x:null,l:null},Z&&!t&&(i.l={s:null,u:null,r1:[],r2:rn(!1)})}function Fr(n){const t=i;if(t!==null){n!==void 0&&(t.x=n);const a=t.e;if(a!==null){var r=o,e=u;t.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];K(l.effect),G(l.reaction),In(l.fn)}}finally{K(r),G(e)}}i=t.p,t.m=!0}return n||{}}function Mr(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(on in n)nn(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&on in r&&nn(r)}}}function nn(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{nn(n[e],t)}catch{}const r=Gn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Vn(r);for(let s in e){const l=e[s].get;if(l)try{l.call(n)}catch{}}}}}export{It as $,I as A,ur as B,_r as C,F as D,vn as E,or as F,y as G,at as H,P as I,Ut as J,W as K,Q as L,o as M,lr as N,Kt as O,Vt as P,fr as Q,Zn as R,on as S,st as T,O as U,cr as V,wn as W,lt as X,mn as Y,Ht as Z,hr as _,Fr as a,gr as a0,Ot as a1,Ct as a2,rn as a3,jt as a4,ar as a5,ln as a6,Bt as a7,Gn as a8,Rt as a9,$t as aA,et as aB,Zt as aC,Nn as aD,pt as aE,zt as aF,Jt as aG,Qt as aH,zn as aI,qt as aJ,Vn as aK,an as aL,bt as aM,Dr as aN,Nr as aO,br as aP,Gt as aQ,Lt as aR,Yt as aa,Ft as ab,nr as ac,hn as ad,m as ae,$ as af,K as ag,Wt as ah,Xt as ai,tr as aj,Mt as ak,Er as al,kt as am,rr as an,rt as ao,er as ap,sr as aq,G as ar,u as as,wr as at,Dt as au,ot as av,Bn as aw,Or as ax,yr as ay,N as az,mr as b,vr as c,i as d,kr as e,pr as f,Pt as g,Kn as h,Cr as i,Mr as j,ut as k,In as l,_t as m,ht as n,Z as o,Pr as p,Ir as q,ir as r,dr as s,Ar as t,Tr as u,Nt as v,ct as w,Rr as x,xr as y,Sr as z};
