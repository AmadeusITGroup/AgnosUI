import{S as m,i as p,s as c,c as l,m as u,t as f,a as g,d as _,j as $,n as i,o as r,g as d,h}from"./index-c9fcd0ab.js";import{R as b}from"./Rating-56c648f6.js";import"./index-fcbce455.js";import"./config-4dfdcea0.js";import"./directive-0da4d297.js";import"./stores-a6ef8408.js";import"./baseTransitions-2f72768c.js";import"./writables-3b2d98b2.js";import"./promise-641391ac.js";import"./fade-f6e196c6.js";import"./dom-cc7faf10.js";import"./rating-13096607.js";import"./floatingUI-2a63428b.js";import"./focustrack-c3bd0408.js";function C(o){let t;return{c(){t=$("span"),t.textContent="★",i(t,"slot","star"),i(t,"class","star"),r(t,"filled",o[0]===100),r(t,"bad",o[1]<3)},m(s,a){d(s,t,a)},p(s,a){a&1&&r(t,"filled",s[0]===100),a&2&&r(t,"bad",s[1]<3)},d(s){s&&h(t)}}}function R(o){let t,s;return t=new b({props:{className:"rating-custom",rating:7,ariaLabel:"custom rating",$$slots:{star:[C,({fill:a,index:e})=>({0:a,1:e}),({fill:a,index:e})=>(a?1:0)|(e?2:0)]},$$scope:{ctx:o}}}),{c(){l(t.$$.fragment)},m(a,e){u(t,a,e),s=!0},p(a,[e]){const n={};e&7&&(n.$$scope={dirty:e,ctx:a}),t.$set(n)},i(a){s||(f(t.$$.fragment,a),s=!0)},o(a){g(t.$$.fragment,a),s=!1},d(a){_(t,a)}}}class E extends m{constructor(t){super(),p(this,t,null,R,c,{})}}export{E as default};
