import{k as n,R as e,s as r,f as x,g as a,j as u,d as v,b as S,t as _,n as d}from"./AppCommon-C_Uz3Ejm.js";import{S as f}from"./Slider-CW4ojWhf.js";import"./actions-CtzdcLql.js";import"./slider-DYrwS7Mv-B9Vm2jDr.js";import"./directive-CKEccryv-Dj2WBjfx.js";import"./writables-DCiBdIBK-COVli6XW.js";import"./resizeObserver-Bvm5X6UH.js";import"./extendWidget-Dy2T1Nx7.js";import"./Slot-Bu-WTpc_.js";import"./snippet-gGBChira.js";import"./config-BR7DENd9.js";import"./config-vsRo1j0h.js";import"./index-client-D5u8RE9d.js";var c=_("<h2>Slider with form control</h2> <!> <hr> <h2>Slider with values</h2> <!> ",1);function B(h){let o=n(e([10,40,50,60,90])),s=n(e([10,40]));var i=c(),m=r(x(i),2);f(m,{min:0,max:100,stepSize:1,get values(){return a(o)},set values(t){u(o,e(t))}});var l=r(m);v(()=>{var t;return d(l,` Form control values: ${((t=a(o))==null?void 0:t.join(", "))??""} `)});var p=r(l,5);f(p,{min:0,max:100,stepSize:1,get values(){return a(s)},set values(t){u(s,e(t))}});var g=r(p);v(()=>d(g,` Values: ${a(s).join(", ")??""}`)),S(h,i)}export{B as default};