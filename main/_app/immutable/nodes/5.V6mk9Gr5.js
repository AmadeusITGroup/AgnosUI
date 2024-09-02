import{s as Q,k as L,e as v,a as A,t as N,c as y,b as C,f as $,g as I,d as E,q as Y,m as k,i as O,h as u,j as Z,x,l as tt,u as et,o as at,p as st}from"../chunks/scheduler.BCoUmZgo.js";import{S as U,i as W,c as B,b as q,m as D,t as _,a as h,e as F,d as z,g as J}from"../chunks/index.Dun_Df-H.js";import{H as nt}from"../chunks/Header.C4GKdA2o.js";import{b as ot,S as rt}from"../chunks/StatusAlert.6G9Kumyn.js";import{A as lt}from"../chunks/Alert.DzBT_hYR.js";import{b as it}from"../chunks/info-circle-fill.Bo1vMZ7E.js";import{p as X}from"../chunks/stores.Cbf9IWya.js";import{S as pt}from"../chunks/Svg.JXpwp8Ws.js";import{a as ft}from"../chunks/stores.DEOtweby.js";function ct(a){let t,n,e,s,f,p,i,l,d,r,o,c="without",b,R,V,G,H,T;return s=new pt({props:{svg:a[3][a[2]],className:"icon-16"}}),{c(){t=v("div"),n=v("div"),e=v("span"),B(s.$$.fragment),f=A(),p=v("span"),i=N("This component is a "),l=v("strong"),d=N(a[0]),r=N(" component and can be used "),o=v("strong"),o.textContent=c,b=N(" the Bootstrap CSS."),R=A(),V=v("hr"),G=N(`
		Colors of the component are using the Bootstrap CSS vars (along with a default color) so that if you are using bootstrap the component will take your
		color palette.`),this.h()},l(m){t=y(m,"DIV",{class:!0});var g=C(t);n=y(g,"DIV",{class:!0});var S=C(n);e=y(S,"SPAN",{class:!0});var P=C(e);q(s.$$.fragment,P),P.forEach($),f=I(S),p=y(S,"SPAN",{class:!0});var w=C(p);i=E(w,"This component is a "),l=y(w,"STRONG",{});var j=C(l);d=E(j,a[0]),j.forEach($),r=E(w," component and can be used "),o=y(w,"STRONG",{"data-svelte-h":!0}),Y(o)!=="svelte-1qw6n66"&&(o.textContent=c),b=E(w," the Bootstrap CSS."),w.forEach($),S.forEach($),R=I(g),V=y(g,"HR",{}),G=E(g,`
		Colors of the component are using the Bootstrap CSS vars (along with a default color) so that if you are using bootstrap the component will take your
		color palette.`),g.forEach($),this.h()},h(){k(e,"class","d-flex me-2"),k(p,"class","me-4"),k(n,"class","d-flex align-items-center"),k(t,"class",H="alert-container p-3 border border-"+a[2]+" rounded-end")},m(m,g){O(m,t,g),u(t,n),u(n,e),D(s,e,null),u(n,f),u(n,p),u(p,i),u(p,l),u(l,d),u(p,r),u(p,o),u(p,b),u(t,R),u(t,V),u(t,G),T=!0},p(m,g){const S={};g&4&&(S.svg=m[3][m[2]]),s.$set(S),(!T||g&1)&&Z(d,m[0]),(!T||g&4&&H!==(H="alert-container p-3 border border-"+m[2]+" rounded-end"))&&k(t,"class",H)},i(m){T||(_(s.$$.fragment,m),T=!0)},o(m){h(s.$$.fragment,m),T=!1},d(m){m&&$(t),F(s)}}}function ut(a){let t,n,e={type:a[2],className:"p-0 border-0 border-start border-5 border-"+a[2],$$slots:{default:[ct]},$$scope:{ctx:a}};return t=new lt({props:e}),a[6](t),{c(){B(t.$$.fragment)},l(s){q(t.$$.fragment,s)},m(s,f){D(t,s,f),n=!0},p(s,[f]){const p={};f&4&&(p.type=s[2]),f&4&&(p.className="p-0 border-0 border-start border-5 border-"+s[2]),f&133&&(p.$$scope={dirty:f,ctx:s}),t.$set(p)},i(s){n||(_(t.$$.fragment,s),n=!0)},o(s){h(t.$$.fragment,s),n=!1},d(s){a[6](null),F(t,s)}}}const mt=/\/(components|services)\/([^/]+)/;function dt(a,t,n){let e,s,f;L(a,X,r=>n(5,f=r));const p={info:it,warning:ot};let{componentType:i}=t,l;function d(r){x[r?"unshift":"push"](()=>{l=r,n(1,l)})}return a.$$set=r=>{"componentType"in r&&n(0,i=r.componentType)},a.$$.update=()=>{a.$$.dirty&32&&n(4,s=f.url.pathname.match(mt)?.[2]),a.$$.dirty&18&&l?.api.open()},n(2,e="info"),[i,l,e,p,s,f,d]}class _t extends U{constructor(t){super(),W(this,t,dt,ut,Q,{componentType:0})}}function K(a){let t,n;return t=new rt({props:{status:a[0].data.status}}),{c(){B(t.$$.fragment)},l(e){q(t.$$.fragment,e)},m(e,s){D(t,e,s),n=!0},p(e,s){const f={};s&1&&(f.status=e[0].data.status),t.$set(f)},i(e){n||(_(t.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),n=!1},d(e){F(t,e)}}}function M(a){let t,n;return t=new _t({props:{componentType:a[0].data.type}}),{c(){B(t.$$.fragment)},l(e){q(t.$$.fragment,e)},m(e,s){D(t,e,s),n=!0},p(e,s){const f={};s&1&&(f.componentType=e[0].data.type),t.$set(f)},i(e){n||(_(t.$$.fragment,e),n=!0)},o(e){h(t.$$.fragment,e),n=!1},d(e){F(t,e)}}}function gt(a){let t,n,e,s,f,p;t=new nt({props:{title:a[0].data.title,pageTitle:a[1],status:a[0].data.status,cssFramework:"bootstrap"}});let i=a[0].data.status!=="stable"&&K(a),l=a[0].data.type==="standalone"&&M(a);const d=a[6].default,r=tt(d,a,a[5],null);return{c(){B(t.$$.fragment),n=A(),e=v("div"),i&&i.c(),s=A(),l&&l.c(),f=A(),r&&r.c(),this.h()},l(o){q(t.$$.fragment,o),n=I(o),e=y(o,"DIV",{class:!0});var c=C(e);i&&i.l(c),s=I(c),l&&l.l(c),f=I(c),r&&r.l(c),c.forEach($),this.h()},h(){k(e,"class","main-content")},m(o,c){D(t,o,c),O(o,n,c),O(o,e,c),i&&i.m(e,null),u(e,s),l&&l.m(e,null),u(e,f),r&&r.m(e,null),p=!0},p(o,[c]){const b={};c&1&&(b.title=o[0].data.title),c&2&&(b.pageTitle=o[1]),c&1&&(b.status=o[0].data.status),t.$set(b),o[0].data.status!=="stable"?i?(i.p(o,c),c&1&&_(i,1)):(i=K(o),i.c(),_(i,1),i.m(e,s)):i&&(J(),h(i,1,1,()=>{i=null}),z()),o[0].data.type==="standalone"?l?(l.p(o,c),c&1&&_(l,1)):(l=M(o),l.c(),_(l,1),l.m(e,f)):l&&(J(),h(l,1,1,()=>{l=null}),z()),r&&r.p&&(!p||c&32)&&et(r,d,o,o[5],p?st(d,o[5],c,null):at(o[5]),null)},i(o){p||(_(t.$$.fragment,o),_(i),_(l),_(r,o),p=!0)},o(o){h(t.$$.fragment,o),h(i),h(l),h(r,o),p=!1},d(o){o&&($(n),$(e)),F(t,o),i&&i.d(),l&&l.d(),r&&r.d(o)}}}function ht(a,t,n){let e,s,f,p,i;L(a,X,r=>n(0,p=r)),L(a,ft,r=>n(4,i=r));let{$$slots:l={},$$scope:d}=t;return a.$$set=r=>{"$$scope"in r&&n(5,d=r.$$scope)},a.$$.update=()=>{a.$$.dirty&1&&n(3,e=p.data.tabs??[]),a.$$.dirty&24&&n(2,s=e.find(r=>r.key===i)),a.$$.dirty&5&&n(1,f=`${p.data.title} ${s?.title.toLowerCase()??""}`)},[p,f,s,e,i,d,l]}class Nt extends U{constructor(t){super(),W(this,t,ht,gt,Q,{})}}export{Nt as component};