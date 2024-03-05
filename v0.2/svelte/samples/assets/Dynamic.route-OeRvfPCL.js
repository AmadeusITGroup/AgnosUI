import{S as Y,i as Z,s as j,R as S,e as w,k as A,l as W,p as M,a as D,b as c,r as q,u as O,w as F,z as G,Y as J,B as K,t as N,d as R,f,x as L,c as P,m as Q,g as T,Z as U,n as V,$ as X}from"./AppCommon-CtUlaPGQ.js";import{A as x}from"./Alert-M6n-2pIH.js";import{w as tt}from"./index-DbfAhN_-.js";import"./Slot-Cx9Wwqtk.js";import"./config-BNuXnfX3.js";import"./func-fOTgS_tI.js";import"./stores-DkJENpvS.js";import"./extendWidget-DXpqZKrs.js";import"./baseTransitions-BaB7PCC1.js";import"./writables-BSvyD3EG.js";import"./promise-0_7ySYGc.js";import"./directive-C64J9ynN.js";import"./fade-BnT6RpXE.js";import"./simpleClassTransition-DdZbUbcs.js";import"./cssTransitions-CT5aGp8Y.js";import"./dom-Hs1W5kAC.js";function z(a,s,u){const n=a.slice();n[7]=s[u];const l=n[7];return n[8]=l.dismissible,n[9]=l.animationOnInit,n[10]=l.animation,n[11]=l.type,n[12]=l.slotDefault,n}function B(a,s){let u,n,l;function d(){return s[5](s[7])}return n=new x({props:{dismissible:s[8],animationOnInit:s[9],animation:s[10],type:s[11],slotDefault:s[12],onHidden:d}}),{key:a,first:null,c(){u=M(),P(n.$$.fragment),this.first=u},m(r,i){c(r,u,i),Q(n,r,i),l=!0},p(r,i){s=r;const m={};i&2&&(m.dismissible=s[8]),i&2&&(m.animationOnInit=s[9]),i&2&&(m.animation=s[10]),i&2&&(m.type=s[11]),i&2&&(m.slotDefault=s[12]),i&2&&(m.onHidden=d),n.$set(m)},i(r){l||(N(n.$$.fragment,r),l=!0)},o(r){R(n.$$.fragment,r),l=!1},d(r){r&&f(u),T(n,r)}}}function et(a){let s,u,n,l,d,r,i,m,b,C,y=a[1].length+"",p,g,o=[],h=new Map,_,$,I,E,v=S(a[1]);const H=t=>t[7];for(let t=0;t<v.length;t+=1){let e=z(a,v,t),k=H(e);h.set(k,o[t]=B(k,e))}return{c(){s=w("button"),s.textContent="Add error",u=A(),n=w("button"),n.textContent="Add info",l=A(),d=w("button"),d.textContent="Add warning",r=A(),i=w("br"),m=A(),b=w("div"),C=W("Alerts in the service: "),p=W(y),g=A();for(let t=0;t<o.length;t+=1)o[t].c();_=M(),D(s,"class","btn btn-primary addError me-1"),D(n,"class","btn btn-primary addInfo me-1"),D(d,"class","btn btn-primary addWarning me-1"),D(b,"class","alertCount mb-3")},m(t,e){c(t,s,e),c(t,u,e),c(t,n,e),c(t,l,e),c(t,d,e),c(t,r,e),c(t,i,e),c(t,m,e),c(t,b,e),q(b,C),q(b,p),c(t,g,e);for(let k=0;k<o.length;k+=1)o[k]&&o[k].m(t,e);c(t,_,e),$=!0,I||(E=[O(s,"click",a[2]),O(n,"click",a[3]),O(d,"click",a[4])],I=!0)},p(t,[e]){(!$||e&2)&&y!==(y=t[1].length+"")&&F(p,y),e&3&&(v=S(t[1]),G(),o=J(o,e,H,1,t,v,h,_.parentNode,U,B,_,z),K())},i(t){if(!$){for(let e=0;e<v.length;e+=1)N(o[e]);$=!0}},o(t){for(let e=0;e<o.length;e+=1)R(o[e]);$=!1},d(t){t&&(f(s),f(u),f(n),f(l),f(d),f(r),f(i),f(m),f(b),f(g),f(_));for(let e=0;e<o.length;e+=1)o[e].d(t);I=!1,L(E)}}}function nt(a,s,u){let n,l=V,d=()=>(l(),l=X(i,p=>u(1,n=p)),i);a.$$.on_destroy.push(()=>l());function r(){const{subscribe:p,set:g,update:o}=tt([]);return{subscribe:p,add:h=>o(_=>[..._,h]),remove:h=>o(_=>_.filter($=>$!==h)),reset:()=>g([])}}const i=r();return d(),[i,n,()=>i.add({type:"danger",slotDefault:"Error",dismissible:!0,animation:!0}),()=>i.add({type:"info",slotDefault:"Info",dismissible:!0,animation:!0}),()=>i.add({type:"warning",slotDefault:"Warning",dismissible:!0,animation:!0}),p=>i.remove(p)]}class ht extends Y{constructor(s){super(),Z(this,s,nt,et,j,{alerts$:0})}get alerts$(){return this.$$.ctx[0]}}export{ht as default};
