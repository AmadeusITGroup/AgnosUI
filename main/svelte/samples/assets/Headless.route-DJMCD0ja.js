import{p as R,P as b,d as c,b as o,a as C,r as N,t as l,L as S,g as m,Q as w,n as P,k,q,s as u,f as z}from"./AppCommon-C8th3JWG.js";import{s as A,t as g}from"./class-BqF4J3H6.js";/* empty css               */import{e as F}from"./rating.gen-DjUverHN.js";import{S as H}from"./Slot-CQYwMNWG.js";import{c as L}from"./config-DQWobjli.js";import"./rating-hovacUx0-DoTzsZky.js";import"./rating-Da38uaZz-C1BvYqgb.js";import"./directive-CKEccryv-CjsmjpgW.js";import"./writables-DCiBdIBK-BMnIMCZ2.js";import"./extendWidget-DVKkl0o0.js";import"./snippet-DR72IjbS.js";import"./config-CC1Dpxee.js";import"./index-client-DZwLQsoi.js";const Q=(r,a)=>{let e=()=>a==null?void 0:a().fill;var s=N();c(()=>P(s,String.fromCharCode(e()===100?9733:9734))),o(r,s)};var T=l('<span class="au-rating-star"><!></span>'),U=l("<div></div>");function x(r,a){R(a,!0);let e=S(a,["$$slots","$$events","$$legacy"]);const{state:s,api:f}=L({factory:F,widgetName:"rating",defaultConfig:{star:Q},get props(){return{...e,readonly:!0}},enablePatchChanged:!0}),p=f;var t=U();return b(t,21,()=>s.stars,w,(d,n)=>{let i=()=>m(n).fill,_=()=>m(n).index;var v=T(),h=k(v),y=q(()=>({fill:i(),index:_()}));H(h,{get content(){return s.star},get props(){return m(y)}}),o(d,v)}),c(()=>A(t,`d-inline-flex au-rating ${s.className??""}`)),o(r,t),C({api:p})}var W=l('<span class="star">&#9733;</span>'),j=l('<div>The readonly rating without slot:</div> <!> <div class="mt-2">Using a slot to customize the display:</div> <!>',1);function tt(r){var a=j(),e=u(z(a),2);x(e,{rating:7,maxRating:10});var s=u(e,4);x(s,{rating:7,maxRating:10,className:"rating-custom",star:(p,t)=>{let d=()=>t==null?void 0:t().index,n=()=>t==null?void 0:t().fill;var i=W();c(()=>{g(i,"filled",n()===100),g(i,"bad",d()<3)}),o(p,i)},$$slots:{star:!0}}),o(r,a)}export{tt as default};