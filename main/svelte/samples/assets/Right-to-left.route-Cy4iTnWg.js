import{k as r,T as e,s as i,f as S,g as a,j as s,b as z,t as C,e as o}from"./AppCommon-Cm-6NtnE.js";import{S as l}from"./Slider-CzL3LJKn.js";import"./actions-gBvwwZne.js";import"./slider-DYrwS7Mv-Cl4Whmzg.js";import"./directive-CKEccryv-gyIcW13B.js";import"./writables-DCiBdIBK-BYLEJlA0.js";import"./resizeObserver-uPfEp7Vt.js";import"./extendWidget-CKqcYLS9.js";import"./Slot-HBv0E13p.js";import"./snippet-DaCt2Zif.js";import"./config-CGoDt1jV.js";import"./config-CLQxp5Vy.js";import"./index-client-CP1GwSUe.js";var b=C('<h2>Horizontal slider</h2> <!> <br> <!> <h2>Vertical slider</h2> <div class="d-flex" style="height: 350px"><div class="col-6" style="height: 300px"><!></div> <div class="col-6" style="height: 300px"><!></div></div>',1);function F(h){let m=r(e([30])),v=r(e([30,70])),d=r(e([30])),p=r(e([30,70]));var n=b(),u=i(S(n),2);l(u,{min:0,max:100,stepSize:1,rtl:!0,get values(){return a(m)},set values(t){s(m,e(t))}});var c=i(u,4);l(c,{min:0,max:100,stepSize:1,rtl:!0,get values(){return a(v)},set values(t){s(v,e(t))}});var x=i(c,4),g=o(x),f=o(g);l(f,{min:0,max:100,stepSize:1,rtl:!0,vertical:!0,get values(){return a(d)},set values(t){s(d,e(t))},className:"my-0"});var _=i(g,2),y=o(_);l(y,{min:0,max:100,stepSize:1,rtl:!0,vertical:!0,get values(){return a(p)},set values(t){s(p,e(t))},className:"my-0"}),z(h,n)}export{F as default};