import{p as u,g as e,h as v,R as h,b as f,a as g,t as x,j as w,k as s,q as y}from"./AppCommon-C8th3JWG.js";import{S as k}from"./Select-frzVFACk.js";import"./actions-B6To-NSG.js";import"./class-BqF4J3H6.js";import"./Slot-CQYwMNWG.js";import"./snippet-DR72IjbS.js";import"./config-DQWobjli.js";import"./config-CC1Dpxee.js";import"./directive-CKEccryv-CjsmjpgW.js";import"./index-client-DZwLQsoi.js";import"./floatingUI-ctqsksJ5.js";import"./promise-CY2U8bTP-BShj48_r.js";import"./focustrack-eUMKdjBv.js";import"./navManager-DNZRv7RF.js";import"./extendWidget-DVKkl0o0.js";var C=x('<div style="height: 400px"><div class="mb-3"><!></div></div>');function G(o,p){u(p,!0);const l=["apple","apricot","asparagus","astronaut","athletic","autumn","avocado"],m=["banana","baseball","basketball","beautiful","bedroom","bee","bicycle"],c=["cat","caterpillar","cave","chair","cheese","cherry","chicken"],r=[...l,...m,...c];let t=w(""),d=y(()=>e(t)?r.filter(a=>a.toLowerCase().startsWith(e(t))):r.slice(0,10));var i=C(),n=s(i),b=s(n);k(b,{get items(){return e(d)},badgeClassName:"badge text-bg-light",get filterText(){return e(t)},set filterText(a){v(t,h(a))}}),f(o,i),g()}export{G as default};