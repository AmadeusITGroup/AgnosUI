import{p as b,s as v,L as h,g as e,t as f,l as g,d as s,c as x,a as w}from"./AppCommon-CsXJDRZ3.js";import{S as y}from"./Select-BC6YD3rR.js";import"./actions-kl0KjzIn.js";import"./Slot-BZUO5b9L.js";import"./snippet-B5aMU-E6.js";import"./config-DPIUpkcO.js";import"./config-TUPcxXVO.js";import"./dom-gfxqXJpK-BenLeVwg.js";import"./stores-BElQIA3m.js";import"./index-client-BaNbKOMT.js";import"./floatingUI-BjOnL2vv.js";import"./promise-XSP94FjG-Bz_ckb1K.js";import"./focustrack-UpNoKNdY.js";import"./navManager-DXxk70la.js";import"./widget-DeVncyQM.js";import"./extendWidget-Dym7HUbM.js";var C=f('<div style="height: 400px"><div class="mb-3"><!></div></div>');function H(o,p){b(p,!0);const l=["apple","apricot","asparagus","astronaut","athletic","autumn","avocado"],m=["banana","baseball","basketball","beautiful","bedroom","bee","bicycle"],c=["cat","caterpillar","cave","chair","cheese","cherry","chicken"],r=[...l,...m,...c];let t=v(""),d=h(()=>e(t)?r.filter(a=>a.toLowerCase().startsWith(e(t))):r.slice(0,10));var i=C(),n=s(i),u=s(n);y(u,{get items(){return e(d)},badgeClassName:"badge text-bg-light",get filterText(){return e(t)},set filterText(a){g(t,a,!0)}}),x(o,i),w()}export{H as default};
