import{j as n,R as e,s as r,f as x,g as a,h as u,d as S,b as _,t as c,l as v}from"./AppCommon-wWEJ6LdR.js";import{S as d}from"./Slider-BgEGiOPD.js";import"./actions-Bnx6QvvI.js";import"./slider-C-BSdQ0b-Dtt9ynmR.js";import"./dom-BB9jLllr-CeqtqeKx.js";import"./stores-CJcu1rl_.js";import"./writables-DCiBdIBK-BRdRWZTk.js";import"./resizeObserver-BKJ6ZT34.js";import"./extendWidget-CP_DRKFm.js";import"./Slot-B1WpcjxW.js";import"./snippet-Drtakk-s.js";import"./config-DHVcL9Rn.js";import"./config-CzTY2ejt.js";import"./index-client-QFyY-InH.js";var j=c("<h2>Slider with form control</h2> <!> <hr> <h2>Slider with values</h2> <!> ",1);function E(f){let o=n(e([10,40,50,60,90])),i=n(e([10,40]));var s=j(),m=r(x(s),2);d(m,{min:0,max:100,stepSize:1,get values(){return a(o)},set values(t){u(o,e(t))}});var l=r(m),p=r(l,5);d(p,{min:0,max:100,stepSize:1,get values(){return a(i)},set values(t){u(i,e(t))}});var h=r(p);S((t,g)=>{v(l,` Form control values: ${t??""} `),v(h,` Values: ${g??""}`)},[()=>{var t;return(t=a(o))==null?void 0:t.join(", ")},()=>a(i).join(", ")]),_(f,s)}export{E as default};
