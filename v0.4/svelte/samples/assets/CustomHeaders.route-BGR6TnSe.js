import{S as le,i as ie,s as oe,c as F,m as H,t as Y,a as G,d as J,b as ne,e as se,f as P,g as I,h as w,j as y,k as D,l as T,p as Q,q as U,r as b,u as q,v as _,w as v,x as te,y as A,z as R,B as E,C as W}from"./AppCommon-EGvQgKwz.js";import{B as V}from"./body-DBRiX_SX.js";import{w as ae}from"./index-DBY58vID.js";import{A as re,I as L}from"./Item-CeNeRn4p.js";import{c as M}from"./directive-3-8yr-ZK-C23OGezp.js";import"./Slot-CIXSXyWX.js";import"./config-dcf0MZy6.js";import"./accordion-BnaSamoQ-DY30TNMm.js";import"./baseTransitions-o4G_vBWq.js";import"./writables-DoU_XYTX-esNIv65O.js";import"./promise-CY2U8bTP-CDYUm4pL.js";import"./collapse-CVjUhnIz-BgecqLeD.js";import"./cssTransitions-DczX0sNo.js";import"./extendWidget-8zXnCiQz.js";function X(s){let e,l,c,n,a,u=[{}],t={};for(let i=0;i<u.length;i+=1)t=y(t,u[i]);let o=[{}],r={};for(let i=0;i<o.length;i+=1)r=y(r,o[i]);return{c(){e=D("div"),l=D("div"),c=T(V),b(l,t),b(e,r)},m(i,f){I(i,e,f),_(e,l),_(l,c),n||(a=[v(M.call(null,l,"accordion-body")),v(s[7].directives.bodyDirective(l)),v(M.call(null,e,"accordion-collapse")),v(s[7].directives.bodyContainerDirective(e))],n=!0)},p(i,f){b(l,t=A(u,[f&128&&{}])),b(e,r=A(o,[f&128&&{}]))},d(i){i&&w(e),n=!1,E(a)}}}function ce(s){let e,l,c,n=s[6].visible?"opened":"collapsed",a,u,t,o,r,i,f,N,g,O,S=[{type:"button"},{}],m={};for(let p=0;p<S.length;p+=1)m=y(m,S[p]);let d=[{role:"heading"},{"aria-level":i=2},{}],h={};for(let p=0;p<d.length;p+=1)h=y(h,d[p]);let k=s[6].shouldBeInDOM&&X(s);return{c(){e=D("div"),l=D("p"),c=T("First panel - "),a=T(n),u=P(),t=D("button"),o=T("Toggle first"),f=P(),k&&k.c(),N=Q(),U(l,"class","m-0"),b(t,m),b(e,h),q(e,"collapsed",!s[6].visible)},m(p,C){I(p,e,C),_(e,l),_(l,c),_(l,a),_(e,u),_(e,t),_(t,o),t.autofocus&&t.focus(),I(p,f,C),k&&k.m(p,C),I(p,N,C),g||(O=[v(s[7].directives.toggleDirective(t)),v(r=M.call(null,t,"btn btn-link p-0 "+s[6].buttonClassName+" au-accordion-item-button")),v(s[7].directives.headerDirective(e)),v(M.call(null,e,"accordion-button accordion-header custom-header justify-content-between"))],g=!0)},p(p,C){C&64&&n!==(n=p[6].visible?"opened":"collapsed")&&te(a,n),b(t,m=A(S,[{type:"button"},C&192&&{}])),r&&R(r.update)&&C&64&&r.update.call(null,"btn btn-link p-0 "+p[6].buttonClassName+" au-accordion-item-button"),b(e,h=A(d,[{role:"heading"},{"aria-level":i},C&128&&{}])),q(e,"collapsed",!p[6].visible),p[6].shouldBeInDOM?k?k.p(p,C):(k=X(p),k.c(),k.m(N.parentNode,N)):k&&(k.d(1),k=null)},d(p){p&&(w(e),w(f),w(N)),k&&k.d(p),g=!1,E(O)}}}function Z(s){let e,l,c,n,a,u=[{}],t={};for(let i=0;i<u.length;i+=1)t=y(t,u[i]);let o=[{}],r={};for(let i=0;i<o.length;i+=1)r=y(r,o[i]);return{c(){e=D("div"),l=D("div"),c=T(V),b(l,t),b(e,r)},m(i,f){I(i,e,f),_(e,l),_(l,c),n||(a=[v(M.call(null,l,"accordion-body")),v(s[7].directives.bodyDirective(l)),v(M.call(null,e,"accordion-collapse")),v(s[7].directives.bodyContainerDirective(e))],n=!0)},p(i,f){b(l,t=A(u,[f&128&&{}])),b(e,r=A(o,[f&128&&{}]))},d(i){i&&w(e),n=!1,E(a)}}}function de(s){let e,l,c,n,a,u,t,o,r,i=s[1]?"En":"Dis",f,N,g,O,S,m,d,h,k,p=[{type:"button"},{}],C={};for(let $=0;$<p.length;$+=1)C=y(C,p[$]);let K=[{role:"heading"},{"aria-level":S=2},{}],z={};for(let $=0;$<K.length;$+=1)z=y(z,K[$]);let B=s[6].shouldBeInDOM&&Z(s);return{c(){e=D("div"),l=D("p"),l.textContent="Second panel",c=P(),n=D("div"),a=D("button"),u=T("Toggle second"),o=P(),r=D("button"),f=T(i),N=T("able third"),g=P(),O=D("button"),O.textContent="Collapse all",m=P(),B&&B.c(),d=Q(),U(l,"class","m-0"),b(a,C),U(r,"type","button"),U(r,"class","btn btn-sm btn-outline-secondary"),U(O,"type","button"),U(O,"class","btn btn-sm btn-outline-danger"),U(n,"class","d-flex flex-wrap gap-2"),b(e,z),q(e,"collapsed",!s[6].visible)},m($,j){I($,e,j),_(e,l),_(e,c),_(e,n),_(n,a),_(a,u),a.autofocus&&a.focus(),_(n,o),_(n,r),_(r,f),_(r,N),_(n,g),_(n,O),I($,m,j),B&&B.m($,j),I($,d,j),h||(k=[v(s[7].directives.toggleDirective(a)),v(t=M.call(null,a,"btn btn-sm btn-outline-primary "+s[6].buttonClassName+" au-accordion-item-button")),W(r,"click",s[3]),W(O,"click",s[4]),v(s[7].directives.headerDirective(e)),v(M.call(null,e,"accordion-button accordion-header custom-header justify-content-between"))],h=!0)},p($,j){b(a,C=A(p,[{type:"button"},j&192&&{}])),t&&R(t.update)&&j&64&&t.update.call(null,"btn btn-sm btn-outline-primary "+$[6].buttonClassName+" au-accordion-item-button"),j&2&&i!==(i=$[1]?"En":"Dis")&&te(f,i),b(e,z=A(K,[{role:"heading"},{"aria-level":S},j&128&&{}])),q(e,"collapsed",!$[6].visible),$[6].shouldBeInDOM?B?B.p($,j):(B=Z($),B.c(),B.m(d.parentNode,d)):B&&(B.d(1),B=null)},d($){$&&(w(e),w(m),w(d)),B&&B.d($),h=!1,E(k)}}}function x(s){let e;return{c(){e=D("p"),e.textContent="[I'm disabled]",U(e,"class","text-muted m-0 small")},m(l,c){I(l,e,c)},d(l){l&&w(e)}}}function ee(s){let e,l,c,n,a,u=[{}],t={};for(let i=0;i<u.length;i+=1)t=y(t,u[i]);let o=[{}],r={};for(let i=0;i<o.length;i+=1)r=y(r,o[i]);return{c(){e=D("div"),l=D("div"),c=T(V),b(l,t),b(e,r)},m(i,f){I(i,e,f),_(e,l),_(l,c),n||(a=[v(M.call(null,l,"accordion-body")),v(s[7].directives.bodyDirective(l)),v(M.call(null,e,"accordion-collapse")),v(s[7].directives.bodyContainerDirective(e))],n=!0)},p(i,f){b(l,t=A(u,[f&128&&{}])),b(e,r=A(o,[f&128&&{}]))},d(i){i&&w(e),n=!1,E(a)}}}function ue(s){let e,l,c,n,a,u,t,o,r,i,f=[{type:"button"},{}],N={};for(let d=0;d<f.length;d+=1)N=y(N,f[d]);let g=s[6].disabled&&x(),O=[{role:"heading"},{"aria-level":u=2},{}],S={};for(let d=0;d<O.length;d+=1)S=y(S,O[d]);let m=s[6].shouldBeInDOM&&ee(s);return{c(){e=D("div"),l=D("button"),c=T("Third panel"),a=P(),g&&g.c(),t=P(),m&&m.c(),o=Q(),b(l,N),b(e,S),q(e,"collapsed",!s[6].visible)},m(d,h){I(d,e,h),_(e,l),_(l,c),l.autofocus&&l.focus(),_(e,a),g&&g.m(e,null),I(d,t,h),m&&m.m(d,h),I(d,o,h),r||(i=[v(s[7].directives.toggleDirective(l)),v(n=M.call(null,l,"p-0 btn btn-link container-fluid text-start "+s[6].buttonClassName+" au-accordion-item-button")),v(s[7].directives.headerDirective(e)),v(M.call(null,e,"accordion-header accordion-button custom-header justify-content-between"))],r=!0)},p(d,h){b(l,N=A(f,[{type:"button"},h&192&&{}])),n&&R(n.update)&&h&64&&n.update.call(null,"p-0 btn btn-link container-fluid text-start "+d[6].buttonClassName+" au-accordion-item-button"),d[6].disabled?g||(g=x(),g.c(),g.m(e,null)):g&&(g.d(1),g=null),b(e,S=A(O,[{role:"heading"},{"aria-level":u},h&128&&{}])),q(e,"collapsed",!d[6].visible),d[6].shouldBeInDOM?m?m.p(d,h):(m=ee(d),m.c(),m.m(o.parentNode,o)):m&&(m.d(1),m=null)},d(d){d&&(w(e),w(t),w(o)),g&&g.d(),m&&m.d(d),r=!1,E(i)}}}function fe(s){let e,l,c,n,a,u;return e=new L({props:{$$slots:{structure:[ce,({state:t,widget:o})=>({6:t,7:o}),({state:t,widget:o})=>(t?64:0)|(o?128:0)]},$$scope:{ctx:s}}}),c=new L({props:{$$slots:{structure:[de,({state:t,widget:o})=>({6:t,7:o}),({state:t,widget:o})=>(t?64:0)|(o?128:0)]},$$scope:{ctx:s}}}),a=new L({props:{disabled:s[1],$$slots:{structure:[ue,({state:t,widget:o})=>({6:t,7:o}),({state:t,widget:o})=>(t?64:0)|(o?128:0)]},$$scope:{ctx:s}}}),{c(){F(e.$$.fragment),l=P(),F(c.$$.fragment),n=P(),F(a.$$.fragment)},m(t,o){H(e,t,o),I(t,l,o),H(c,t,o),I(t,n,o),H(a,t,o),u=!0},p(t,o){const r={};o&448&&(r.$$scope={dirty:o,ctx:t}),e.$set(r);const i={};o&451&&(i.$$scope={dirty:o,ctx:t}),c.$set(i);const f={};o&2&&(f.disabled=t[1]),o&448&&(f.$$scope={dirty:o,ctx:t}),a.$set(f)},i(t){u||(Y(e.$$.fragment,t),Y(c.$$.fragment,t),Y(a.$$.fragment,t),u=!0)},o(t){G(e.$$.fragment,t),G(c.$$.fragment,t),G(a.$$.fragment,t),u=!1},d(t){t&&(w(l),w(n)),J(e,t),J(c,t),J(a,t)}}}function pe(s){let e,l,c={$$slots:{default:[fe]},$$scope:{ctx:s}};return e=new re({props:c}),s[5](e),{c(){F(e.$$.fragment)},m(n,a){H(e,n,a),l=!0},p(n,[a]){const u={};a&259&&(u.$$scope={dirty:a,ctx:n}),e.$set(u)},i(n){l||(Y(e.$$.fragment,n),l=!0)},o(n){G(e.$$.fragment,n),l=!1},d(n){s[5](null),J(e,n)}}}function _e(s,e,l){let c,n;const a=ae(!1);ne(s,a,r=>l(1,c=r));const u=()=>a.update(r=>!r),t=()=>n.api.collapseAll();function o(r){se[r?"unshift":"push"](()=>{n=r,l(0,n)})}return[n,c,a,u,t,o]}class ye extends le{constructor(e){super(),ie(this,e,_e,pe,oe,{})}}export{ye as default};
