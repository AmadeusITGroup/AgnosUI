import{S as R,i as S,s as k,e as m,k as h,l as F,a as e,b as C,q as r,x as N,v as H,n as _,f as q,c as b,m as w,t as L,d as M,g as y}from"./AppCommon-_nqecaAx.js";import{c as W}from"./navManager-4Gs0HO_0.js";import"./directive-wvgaRA5q.js";import"./func-tK0QDe5R.js";import"./dom-2S7XI5EU.js";function E(u){let t,n,d,p,i,g,l,v,o,c,s,a,x;return{c(){t=m("div"),n=m("input"),d=h(),p=m("span"),i=F(u[0]),g=h(),l=m("input"),v=h(),o=m("input"),c=h(),s=m("input"),e(n,"type","text"),n.value=u[0],e(n,"class","form-control me-1"),e(p,"tabindex","-1"),e(p,"class","form-control w-auto me-1"),e(l,"tabindex","-1"),e(l,"type","checkbox"),e(l,"class","form-check-input align-self-center me-1"),e(o,"tabindex","-1"),e(o,"type","text"),o.value=u[0],o.disabled=!0,e(o,"class","form-control me-1"),e(s,"tabindex","-1"),e(s,"type","text"),s.value=u[0],e(s,"class","form-control me-1"),e(t,"class","d-flex demo-navmanager-line")},m(f,$){C(f,t,$),r(t,n),r(t,d),r(t,p),r(p,i),r(t,g),r(t,l),r(t,v),r(t,o),r(t,c),r(t,s),a||(x=N(u[1].call(null,t,u[2])),a=!0)},p(f,[$]){$&1&&n.value!==f[0]&&(n.value=f[0]),$&1&&H(i,f[0]),$&1&&o.value!==f[0]&&(o.value=f[0]),$&1&&s.value!==f[0]&&(s.value=f[0])},i:_,o:_,d(f){f&&q(t),a=!1,x()}}}function j(u,t,n){const{directive:d,focusLeft:p,focusRight:i,focusFirst:g,focusLast:l,focusFirstLeft:v,focusFirstRight:o}=W(),c={keys:{ArrowLeft:p,ArrowRight:i,Home:g,End:l,"Meta+ArrowLeft":v,"Meta+ArrowRight":o},selector:a=>a.querySelectorAll("input,span")};let{text:s=""}=t;return u.$$set=a=>{"text"in a&&n(0,s=a.text)},[s,d,c]}class A extends R{constructor(t){super(),S(this,t,j,E,k,{text:0})}}function z(u){let t,n,d,p,i,g,l,v,o,c,s;return i=new A({props:{text:"Hello"}}),c=new A({props:{text:"שָׁלוֹם"}}),{c(){t=m("div"),n=m("div"),d=m("h2"),d.textContent="Left-to-right",p=h(),b(i.$$.fragment),g=h(),l=m("div"),v=m("h2"),v.textContent="Right-to-left",o=h(),b(c.$$.fragment),e(n,"dir","ltr"),e(n,"class","mt-3 pb-3"),e(l,"dir","rtl"),e(l,"class","mt-3 pb-3"),e(t,"class","demo-navmanager")},m(a,x){C(a,t,x),r(t,n),r(n,d),r(n,p),w(i,n,null),r(t,g),r(t,l),r(l,v),r(l,o),w(c,l,null),s=!0},p:_,i(a){s||(L(i.$$.fragment,a),L(c.$$.fragment,a),s=!0)},o(a){M(i.$$.fragment,a),M(c.$$.fragment,a),s=!1},d(a){a&&q(t),y(i),y(c)}}}class K extends R{constructor(t){super(),S(this,t,null,z,k,{})}}export{K as default};