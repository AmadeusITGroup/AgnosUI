import{V as n,W as e,b as r,f as c,k as a,n as u,e as v,c as g,t as S,r as d}from"./AppCommon-yQ9GDd-E.js";import{S as f}from"./Slider-DcJAZ_SQ.js";import"./actions-1FJs2NnX.js";import"./slider-DjanPJZz-Cek1HN3h.js";import"./directive-CKEccryv-CIaX9Ntp.js";import"./writables-DoU_XYTX-DICLMg1u.js";import"./resizeObserver-CEU3BjsM.js";import"./extendWidget-DMfSPYhn.js";import"./Slot-QVDHCOJE.js";import"./config-BI14XQLI.js";import"./snippet-CbCRci52.js";var _=S("<h2>Slider with form control</h2> <!> <hr> <h2>Slider with values</h2> <!> ",1);function W(h){let o=n(e([10,40,50,60,90])),s=n(e([10,40]));var i=_(),l=r(c(i),2);f(l,{min:0,max:100,stepSize:1,get values(){return a(o)},set values(t){u(o,e(t))}});var m=r(l);v(()=>{var t;return d(m,` Form control values: ${((t=a(o))==null?void 0:t.join(", "))??""} `)});var p=r(m,5);f(p,{min:0,max:100,stepSize:1,get values(){return a(s)},set values(t){u(s,e(t))}});var x=r(p);v(()=>d(x,` Values: ${a(s).join(", ")??""}`)),g(h,i)}export{W as default};
