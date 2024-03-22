import{s as tt,w as A,i as v,f as p,l as O,u as P,o as y,p as M,t as D,d as E,j as Q,n as Y,e as k,a as H,c as S,b as B,g as z,m as $,D as Z,a1 as It,G as R,a6 as ft,a5 as Nt,k as X,a0 as ut,X as Wt,a7 as Dt,h as b,C as Et}from"./scheduler.-4Rzn4Bj.js";import{S as et,i as st,g as nt,a as d,d as ot,t as _,c as T,b as V,m as j,e as F}from"./index.BbxhXv5b.js";import{g as K,a as x}from"./spread.CgU5AtxT.js";import{t as Bt,e as U,l as Tt,g as Ct,m as kt,o as ct}from"./stores.D5imDdYm.js";import{c as jt}from"./alert-L1xBl4NT.CWGIykdV.js";import{p as Ft}from"./stores.BV7vNDLu.js";import{S as Ot}from"./Svg.kH6Cw7g-.js";const St=Symbol("useSvelteSlot");function Pt(n,t){return o=>{const e=Tt(n,o);n=o,e&&t(e)}}const yt=(n,t)=>t?(...o)=>{n(...o),t(...o)}:n,Mt=(n,t)=>{const o=Ct(t,{equal:Object.is});return kt(U(()=>yt(n,o())),{set:o.set,update:o.update})},Gt=({factory:n,$$slots:t,defaultConfig:o,widgetConfig:e,events:s,$$props:r})=>{const f=Bt(o),l={};for(const[u,c]of Object.entries(t))c&&(l[`slot${u[0].toUpperCase()}${u.substring(1)}`]=St);const i={...r};for(const u of Object.keys(s))i[u]=Mt(s[u],r[u]);const a=n({config:U(()=>({...f(),...e?.(),...l})),props:i});return{...a,patchChangedProps:Pt(r,a.patch)}},Rt=n=>typeof n=="function"&&!!n.prototype&&(n.prototype.$set||/^Proxy</.test(n.name))||typeof n?.render=="function",Vt=n=>({component:n&1,props:n&2}),_t=n=>({component:n[0],props:n[1]}),Lt=n=>({props:n&2}),pt=n=>({props:n[1]});function Ut(n){let t;const o=n[3].default,e=O(o,n,n[2],_t);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,r){e&&e.m(s,r),t=!0},p(s,r){e&&e.p&&(!t||r&7)&&P(e,o,s,s[2],t?M(o,s[2],r,Vt):y(s[2]),_t)},i(s){t||(_(e,s),t=!0)},o(s){d(e,s),t=!1},d(s){e&&e.d(s)}}}function qt(n){let t=n[0](n[1])+"",o;return{c(){o=D(t)},l(e){o=E(e,t)},m(e,s){v(e,o,s)},p(e,s){s&3&&t!==(t=e[0](e[1])+"")&&Q(o,t)},i:Y,o:Y,d(e){e&&p(o)}}}function Ht(n){let t;return{c(){t=D(n[0])},l(o){t=E(o,n[0])},m(o,e){v(o,t,e)},p(o,e){e&1&&Q(t,o[0])},i:Y,o:Y,d(o){o&&p(t)}}}function zt(n){let t;const o=n[3].slot,e=O(o,n,n[2],pt);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,r){e&&e.m(s,r),t=!0},p(s,r){e&&e.p&&(!t||r&6)&&P(e,o,s,s[2],t?M(o,s[2],r,Lt):y(s[2]),pt)},i(s){t||(_(e,s),t=!0)},o(s){d(e,s),t=!1},d(s){e&&e.d(s)}}}function Xt(n){let t,o,e,s,r;const f=[zt,Ht,qt,Ut],l=[];function i(a,u){return u&1&&(t=null),a[0]===St?0:typeof a[0]=="string"?1:(t==null&&(t=!!(a[0]&&!Rt(a[0]))),t?2:a[0]?3:-1)}return~(o=i(n,-1))&&(e=l[o]=f[o](n)),{c(){e&&e.c(),s=A()},l(a){e&&e.l(a),s=A()},m(a,u){~o&&l[o].m(a,u),v(a,s,u),r=!0},p(a,[u]){let c=o;o=i(a,u),o===c?~o&&l[o].p(a,u):(e&&(nt(),d(l[c],1,1,()=>{l[c]=null}),ot()),~o?(e=l[o],e?e.p(a,u):(e=l[o]=f[o](a),e.c()),_(e,1),e.m(s.parentNode,s)):e=null)},i(a){r||(_(e),r=!0)},o(a){d(e),r=!1},d(a){a&&p(s),~o&&l[o].d(a)}}}function Jt(n,t,o){let{$$slots:e={},$$scope:s}=t,{slotContent:r=null}=t,{props:f}=t;return n.$$set=l=>{"slotContent"in l&&o(0,r=l.slotContent),"props"in l&&o(1,f=l.props),"$$scope"in l&&o(2,s=l.$$scope)},[r,f,s,e]}class Qt extends et{constructor(t){super(),st(this,t,Jt,Xt,tt,{slotContent:0,props:1})}}const At=Qt,Yt=n=>({state:n&1,widget:n&2}),dt=n=>({state:n[0],widget:n[1]}),Zt=n=>({state:n&1,widget:n&2}),gt=n=>({state:n[0],widget:n[1]}),Kt=n=>n&64,xt=n=>({}),mt=n=>({...n[6]});function te(n){let t;const o=n[3].default,e=O(o,n,n[5],dt);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,r){e&&e.m(s,r),t=!0},p(s,r){e&&e.p&&(!t||r&35)&&P(e,o,s,s[5],t?M(o,s[5],r,Yt):y(s[5]),dt)},i(s){t||(_(e,s),t=!0)},o(s){d(e,s),t=!1},d(s){e&&e.d(s)}}}function ee(n){let t;const o=n[3].structure,e=O(o,n,n[5],gt);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,r){e&&e.m(s,r),t=!0},p(s,r){e&&e.p&&(!t||r&35)&&P(e,o,s,s[5],t?M(o,s[5],r,Zt):y(s[5]),gt)},i(s){t||(_(e,s),t=!0)},o(s){d(e,s),t=!1},d(s){e&&e.d(s)}}}function se(n){let t,o,e;const s=[n[6]];var r=n[7];function f(l,i){let a={$$slots:{structure:[ee,({state:u,widget:c})=>({0:u,1:c}),({state:u,widget:c})=>(u?1:0)|(c?2:0)],default:[te,({state:u,widget:c})=>({0:u,1:c}),({state:u,widget:c})=>(u?1:0)|(c?2:0)]},$$scope:{ctx:l}};for(let u=0;u<s.length;u+=1)a=R(a,s[u]);return i!==void 0&&i&64&&(a=R(a,K(s,[x(l[6])]))),{props:a}}return r&&(t=Z(r,f(n))),{c(){t&&T(t.$$.fragment),o=A()},l(l){t&&V(t.$$.fragment,l),o=A()},m(l,i){t&&j(t,l,i),v(l,o,i),e=!0},p(l,i){if(i&128&&r!==(r=l[7])){if(t){nt();const a=t;d(a.$$.fragment,1,0,()=>{F(a,1)}),ot()}r?(t=Z(r,f(l,i)),T(t.$$.fragment),_(t.$$.fragment,1),j(t,o.parentNode,o)):t=null}else if(r){const a=i&64?K(s,[x(l[6])]):{};i&35&&(a.$$scope={dirty:i,ctx:l}),t.$set(a)}},i(l){e||(t&&_(t.$$.fragment,l),e=!0)},o(l){t&&d(t.$$.fragment,l),e=!1},d(l){l&&p(o),t&&F(t,l)}}}function ne(n){let t;const o=n[3].default,e=O(o,n,n[5],mt);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,r){e&&e.m(s,r),t=!0},p(s,r){e&&e.p&&(!t||r&96)&&P(e,o,s,s[5],Kt(r)||!t?y(s[5]):M(o,s[5],r,xt),mt)},i(s){t||(_(e,s),t=!0)},o(s){d(e,s),t=!1},d(s){e&&e.d(s)}}}function ht(n){let t,o,e,s;return{c(){t=k("button"),this.h()},l(r){t=S(r,"BUTTON",{type:!0,class:!0,"aria-label":!0}),B(t).forEach(p),this.h()},h(){$(t,"type","button"),$(t,"class","btn-close"),$(t,"aria-label",o=n[0].ariaCloseButtonLabel)},m(r,f){v(r,t,f),e||(s=It(t,"click",n[4]),e=!0)},p(r,f){f&1&&o!==(o=r[0].ariaCloseButtonLabel)&&$(t,"aria-label",o)},d(r){r&&p(t),e=!1,s()}}}function oe(n){let t,o,e,s,r;o=new At({props:{slotContent:n[0].slotDefault,props:n[2],$$slots:{slot:[ne,({props:l})=>({6:l}),({props:l})=>l?64:0],default:[se,({component:l,props:i})=>({7:l,6:i}),({component:l,props:i})=>(l?128:0)|(i?64:0)]},$$scope:{ctx:n}}});let f=n[0].dismissible&&ht(n);return{c(){t=k("div"),T(o.$$.fragment),e=H(),f&&f.c(),s=A(),this.h()},l(l){t=S(l,"DIV",{class:!0});var i=B(t);V(o.$$.fragment,i),i.forEach(p),e=z(l),f&&f.l(l),s=A(),this.h()},h(){$(t,"class","alert-body")},m(l,i){v(l,t,i),j(o,t,null),v(l,e,i),f&&f.m(l,i),v(l,s,i),r=!0},p(l,[i]){const a={};i&1&&(a.slotContent=l[0].slotDefault),i&4&&(a.props=l[2]),i&227&&(a.$$scope={dirty:i,ctx:l}),o.$set(a),l[0].dismissible?f?f.p(l,i):(f=ht(l),f.c(),f.m(s.parentNode,s)):f&&(f.d(1),f=null)},i(l){r||(_(o.$$.fragment,l),r=!0)},o(l){d(o.$$.fragment,l),r=!1},d(l){l&&(p(t),p(e),p(s)),F(o),f&&f.d(l)}}}function le(n,t,o){let e,{$$slots:s={},$$scope:r}=t,{state:f}=t,{widget:l}=t;const i=()=>l.api.close();return n.$$set=a=>{"state"in a&&o(0,f=a.state),"widget"in a&&o(1,l=a.widget),"$$scope"in a&&o(5,r=a.$$scope)},n.$$.update=()=>{n.$$.dirty&3&&o(2,e={widget:l,state:f})},[f,l,e,s,i,r]}class re extends et{constructor(t){super(),st(this,t,le,oe,tt,{state:0,widget:1})}}const ie=re,J=(n,t,o=1/0)=>{if(t!==void 0)if(typeof t=="object"&&t&&o>=1){n||(n={});for(const e of Object.keys(t))Object.prototype.hasOwnProperty.call(t,e)&&(e==="__proto__"||e==="constructor"||(n[e]=J(n[e],t[e],o-1)))}else return t;return n},ae=(n,t=ct)=>{const o=Ct({}),e=t===ct?n:U(()=>t(J({},n?.(),2)));return kt(U(()=>J(J({},e?.(),2),o(),2)),{...o,own$:o,adaptedParent$:e,parent$:n})},fe=(n=Symbol("widgetsConfig"))=>{const t=s=>{const r=ft(n),f=ae(r,s);return Nt(n,f),f},o=s=>{const r=ft(n);return U(()=>r?.()[s])};return{widgetsDefaultConfigKey:n,createWidgetsDefaultConfig:t,getContextWidgetConfig:o,callWidgetFactory:({factory:s,widgetName:r=null,$$slots:f,defaultConfig:l={},events:i,$$props:a})=>Gt({factory:s,$$slots:f,defaultConfig:l,widgetConfig:r?o(r):null,events:i,$$props:a})}},{widgetsDefaultConfigKey:ye,createWidgetsDefaultConfig:Me,getContextWidgetConfig:Ge,callWidgetFactory:ue}=fe(),ce=jt,_e=n=>({state:n&131072,widget:n&256}),bt=n=>({state:n[17],widget:n[8]}),pe=n=>({state:n&131072,widget:n&256}),$t=n=>({state:n[17],widget:n[8]}),de=n=>n&32768,ge=n=>({}),wt=n=>({...n[15]});function vt(n){let t,o,e,s,r,f;return o=new At({props:{slotContent:n[3],props:n[1],$$slots:{slot:[$e,({props:l})=>({15:l}),({props:l})=>l?32768:0],default:[be,({component:l,props:i})=>({16:l,15:i}),({component:l,props:i})=>(l?65536:0)|(i?32768:0)]},$$scope:{ctx:n}}}),{c(){t=k("div"),T(o.$$.fragment),this.h()},l(l){t=S(l,"DIV",{class:!0,role:!0});var i=B(t);V(o.$$.fragment,i),i.forEach(p),this.h()},h(){$(t,"class",e="au-alert alert alert-"+n[0].type+" "+n[0].className+" "+(n[0].dismissible?"alert-dismissible":"")),$(t,"role","alert")},m(l,i){v(l,t,i),j(o,t,null),s=!0,r||(f=Wt(n[6].call(null,t)),r=!0)},p(l,i){const a={};i&8&&(a.slotContent=l[3]),i&2&&(a.props=l[1]),i&102400&&(a.$$scope={dirty:i,ctx:l}),o.$set(a),(!s||i&1&&e!==(e="au-alert alert alert-"+l[0].type+" "+l[0].className+" "+(l[0].dismissible?"alert-dismissible":"")))&&$(t,"class",e)},i(l){s||(_(o.$$.fragment,l),s=!0)},o(l){d(o.$$.fragment,l),s=!1},d(l){l&&p(t),F(o),r=!1,f()}}}function me(n){let t;const o=n[11].default,e=O(o,n,n[12],bt);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,r){e&&e.m(s,r),t=!0},p(s,r){e&&e.p&&(!t||r&135424)&&P(e,o,s,s[12],t?M(o,s[12],r,_e):y(s[12]),bt)},i(s){t||(_(e,s),t=!0)},o(s){d(e,s),t=!1},d(s){e&&e.d(s)}}}function he(n){let t;const o=n[11].structure,e=O(o,n,n[12],$t);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,r){e&&e.m(s,r),t=!0},p(s,r){e&&e.p&&(!t||r&135424)&&P(e,o,s,s[12],t?M(o,s[12],r,pe):y(s[12]),$t)},i(s){t||(_(e,s),t=!0)},o(s){d(e,s),t=!1},d(s){e&&e.d(s)}}}function be(n){let t,o,e;const s=[n[15]];var r=n[16];function f(l,i){let a={$$slots:{structure:[he,({state:u,widget:c})=>({17:u,8:c}),({state:u,widget:c})=>(u?131072:0)|(c?256:0)],default:[me,({state:u,widget:c})=>({17:u,8:c}),({state:u,widget:c})=>(u?131072:0)|(c?256:0)]},$$scope:{ctx:l}};for(let u=0;u<s.length;u+=1)a=R(a,s[u]);return i!==void 0&&i&32768&&(a=R(a,K(s,[x(l[15])]))),{props:a}}return r&&(t=Z(r,f(n))),{c(){t&&T(t.$$.fragment),o=A()},l(l){t&&V(t.$$.fragment,l),o=A()},m(l,i){t&&j(t,l,i),v(l,o,i),e=!0},p(l,i){if(i&65536&&r!==(r=l[16])){if(t){nt();const a=t;d(a.$$.fragment,1,0,()=>{F(a,1)}),ot()}r?(t=Z(r,f(l,i)),T(t.$$.fragment),_(t.$$.fragment,1),j(t,o.parentNode,o)):t=null}else if(r){const a=i&32768?K(s,[x(l[15])]):{};i&135424&&(a.$$scope={dirty:i,ctx:l}),t.$set(a)}},i(l){e||(t&&_(t.$$.fragment,l),e=!0)},o(l){t&&d(t.$$.fragment,l),e=!1},d(l){l&&p(o),t&&F(t,l)}}}function $e(n){let t;const o=n[11].structure,e=O(o,n,n[12],wt);return{c(){e&&e.c()},l(s){e&&e.l(s)},m(s,r){e&&e.m(s,r),t=!0},p(s,r){e&&e.p&&(!t||r&36864)&&P(e,o,s,s[12],de(r)||!t?y(s[12]):M(o,s[12],r,ge),wt)},i(s){t||(_(e,s),t=!0)},o(s){d(e,s),t=!1},d(s){e&&e.d(s)}}}function we(n){let t,o,e=!n[2]&&vt(n);return{c(){e&&e.c(),t=A()},l(s){e&&e.l(s),t=A()},m(s,r){e&&e.m(s,r),v(s,t,r),o=!0},p(s,[r]){s[2]?e&&(nt(),d(e,1,1,()=>{e=null}),ot()):e?(e.p(s,r),r&4&&_(e,1)):(e=vt(s),e.c(),_(e,1),e.m(t.parentNode,t))},i(s){o||(_(e),o=!0)},o(s){d(e),o=!1},d(s){s&&p(t),e&&e.d(s)}}}const ve={slotStructure:ie};function Ce(n,t,o){let e,s,r,f,{$$slots:l={},$$scope:i}=t;const a=Dt(l),u=ue({factory:ce,widgetName:"alert",$$slots:a,$$props:t,defaultConfig:ve,events:{onVisibleChange:m=>{o(9,c=m)}}});let{visible:c=void 0}=t;const I=u.api,{stores:{slotStructure$:w,hidden$:G},directives:{transitionDirective:L},state$:C}=u;return X(n,w,m=>o(3,f=m)),X(n,G,m=>o(2,r=m)),X(n,C,m=>o(0,s=m)),n.$$set=m=>{o(13,t=R(R({},t),ut(m))),"visible"in m&&o(9,c=m.visible),"$$scope"in m&&o(12,i=m.$$scope)},n.$$.update=()=>{u.patchChangedProps(t),n.$$.dirty&1&&o(1,e={widget:u,state:s})},t=ut(t),[s,e,r,f,w,G,L,C,u,c,I,l,i]}class ke extends et{constructor(t){super(),st(this,t,Ce,we,tt,{visible:9,api:10})}get api(){return this.$$.ctx[10]}}const Se=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
</svg>`,Ae=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>`;function Ie(n){let t,o,e,s,r,f,l,i,a,u,c,I,w,G,L,C,m,lt,q,N;return s=new Ot({props:{svg:n[5][n[4]]}}),{c(){t=k("div"),o=k("div"),e=k("span"),T(s.$$.fragment),r=D(`
			Warning: component is `),f=k("strong"),l=D(n[3]),i=k("br"),a=H(),u=k("hr"),c=H(),I=D(n[2]),w=H(),G=k("br"),L=D(`
		If you want to contribute, please visit
		`),C=k("a"),m=D("the issues on GitHub"),lt=D("."),this.h()},l(h){t=S(h,"DIV",{class:!0});var g=B(t);o=S(g,"DIV",{class:!0});var W=B(o);e=S(W,"SPAN",{class:!0});var rt=B(e);V(s.$$.fragment,rt),rt.forEach(p),r=E(W,`
			Warning: component is `),f=S(W,"STRONG",{class:!0});var it=B(f);l=E(it,n[3]),it.forEach(p),i=S(W,"BR",{}),W.forEach(p),a=z(g),u=S(g,"HR",{}),c=z(g),I=E(g,n[2]),w=z(g),G=S(g,"BR",{}),L=E(g,`
		If you want to contribute, please visit
		`),C=S(g,"A",{href:!0,target:!0});var at=B(C);m=E(at,"the issues on GitHub"),at.forEach(p),lt=E(g,"."),g.forEach(p),this.h()},h(){$(e,"class","d-flex me-2"),$(f,"class","ms-1"),$(o,"class","d-flex align-items-center"),$(C,"href",n[1]),$(C,"target","_blank"),$(t,"class",q="alert-container p-3 border border-"+n[4]+" rounded-end")},m(h,g){v(h,t,g),b(t,o),b(o,e),j(s,e,null),b(o,r),b(o,f),b(f,l),b(o,i),b(t,a),b(t,u),b(t,c),b(t,I),b(t,w),b(t,G),b(t,L),b(t,C),b(C,m),b(t,lt),N=!0},p(h,g){const W={};g&16&&(W.svg=h[5][h[4]]),s.$set(W),(!N||g&8)&&Q(l,h[3]),(!N||g&4)&&Q(I,h[2]),(!N||g&2)&&$(C,"href",h[1]),(!N||g&16&&q!==(q="alert-container p-3 border border-"+h[4]+" rounded-end"))&&$(t,"class",q)},i(h){N||(_(s.$$.fragment,h),N=!0)},o(h){d(s.$$.fragment,h),N=!1},d(h){h&&p(t),F(s)}}}function Ne(n){let t,o,e={type:n[4],className:"p-0 border-0 border-start border-5 border-"+n[4],$$slots:{default:[Ie]},$$scope:{ctx:n}};return t=new ke({props:e}),n[9](t),{c(){T(t.$$.fragment)},l(s){V(t.$$.fragment,s)},m(s,r){j(t,s,r),o=!0},p(s,[r]){const f={};r&16&&(f.type=s[4]),r&16&&(f.className="p-0 border-0 border-start border-5 border-"+s[4]),r&1054&&(f.$$scope={dirty:r,ctx:s}),t.$set(f)},i(s){o||(_(t.$$.fragment,s),o=!0)},o(s){d(t.$$.fragment,s),o=!1},d(s){n[9](null),F(t,s)}}}const We=/\/(components|services)\/([^/]+)/;function De(n,t,o){let e,s,r,f,l,i;X(n,Ft,w=>o(8,i=w));const a={info:Se,warning:Ae};let{status:u}=t,c;function I(w){Et[w?"unshift":"push"](()=>{c=w,o(0,c)})}return n.$$set=w=>{"status"in w&&o(6,u=w.status)},n.$$.update=()=>{n.$$.dirty&64&&o(4,e=u==="inprogress"?"warning":"info"),n.$$.dirty&64&&o(3,s=u==="inprogress"?"In progress":"Beta"),n.$$.dirty&64&&o(2,r=u==="inprogress"?"This component is still under active development. More features will be added in the near future.":"This component has all the basic functionalities implemented. More polishing features might be added in the near future."),n.$$.dirty&256&&o(7,f=i.url.pathname.match(We)?.[2]),n.$$.dirty&128&&o(1,l=`https://github.com/AmadeusITGroup/AgnosUI/issues?q=is%3Aopen+is%3Aissue+label%3A%22widget%3A+${f}%22`),n.$$.dirty&129&&c?.api.open()},[c,l,r,s,e,a,u,f,i,I]}class Re extends et{constructor(t){super(),st(this,t,De,Ne,tt,{status:6})}}export{Re as S};
