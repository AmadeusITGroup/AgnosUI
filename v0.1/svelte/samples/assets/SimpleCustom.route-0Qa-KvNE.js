import{S as F,i as N,s as T,e as $,l as g,c,k as A,a as V,b as P,q as a,m as d,t as v,d as _,f as k,g as x}from"./AppCommon-miqw0umw.js";import{P as b}from"./Progressbar-aHOv3-u9.js";import"./Slot-Hr5L000g.js";import"./config-LTqD1tq6.js";import"./func-tK0QDe5R.js";import"./stores-g_eezu9j.js";import"./writables-xJUxUSmr.js";function j(i){let t;return{c(){t=g("Step 4 out of 5")},m(r,m){P(r,t,m)},d(r){r&&k(t)}}}function y(i){let t,r,m,s,h,p,S,n,w,u,C,o,l;return s=new b({props:{min:1,max:5,value:4,ariaValueTextFn:z,$$slots:{default:[j]},$$scope:{ctx:i}}}),n=new b({props:{value:63,className:"text-bg-info",striped:!0,animated:!0}}),o=new b({props:{height:"1.5rem",value:47}}),{c(){t=$("div"),r=$("div"),m=g(`A progressbar using custom values for minimum and maximum:
		`),c(s.$$.fragment),h=A(),p=$("div"),S=g(`A striped animated progress bar:
		`),c(n.$$.fragment),w=A(),u=$("div"),C=g(`Changing the height:
		`),c(o.$$.fragment),V(t,"class","d-flex flex-column gap-2")},m(e,f){P(e,t,f),a(t,r),a(r,m),d(s,r,null),a(t,h),a(t,p),a(p,S),d(n,p,null),a(t,w),a(t,u),a(u,C),d(o,u,null),l=!0},p(e,[f]){const q={};f&1&&(q.$$scope={dirty:f,ctx:e}),s.$set(q)},i(e){l||(v(s.$$.fragment,e),v(n.$$.fragment,e),v(o.$$.fragment,e),l=!0)},o(e){_(s.$$.fragment,e),_(n.$$.fragment,e),_(o.$$.fragment,e),l=!1},d(e){e&&k(t),x(s),x(n),x(o)}}}const z=(i,t,r)=>`Step ${i} out of ${r}`;class K extends F{constructor(t){super(),N(this,t,null,y,T,{})}}export{K as default};
