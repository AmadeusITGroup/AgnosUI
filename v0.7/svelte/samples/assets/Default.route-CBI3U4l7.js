import{p as x,d,b as v,a as _,t as u,L as $,l as y,g as N,q as w,n as R,k as F,s as n,f as q}from"./AppCommon-CvTG4iwO.js";import{a as p}from"./actions-LhUqO-Ga.js";import{c as P}from"./config-Bb4GyM__.js";import{c as k}from"./progressbar-CGmNq0cS-CkYJpqT_.js";import{c as C}from"./directive-CKEccryv-BKNwwjMq.js";import"./index-client-DxeYKk58.js";import"./writables-DCiBdIBK-D_eyNQqr.js";var I=u("<progress></progress>");function b(m,r){x(r,!0);let o=$(r,["$$slots","$$events","$$legacy"]);const{state:e,directives:{ariaDirective:a}}=P({factory:k,widgetName:"progressbar",props:o,enablePatchChanged:!0});var t=I();const s=w(()=>({}));let c;p(t,i=>a==null?void 0:a(i)),p(t,(i,g)=>{var l;return(l=C)==null?void 0:l(i,g)},()=>"progress "+e.className),d(()=>c=y(t,c,{value:e.value,max:e.max,...N(s)})),v(m,t),_()}var L=u("<div> </div>");function h(m,r){x(r,!0);let o=$(r,["$$slots","$$events","$$legacy"]);const{state:e,directives:{ariaDirective:a}}=P({factory:k,widgetName:"progressbar",props:o,enablePatchChanged:!0}),t=new Intl.NumberFormat("default",{style:"percent",minimumFractionDigits:0,maximumFractionDigits:1});var s=L();const c=w(()=>({}));let i;var g=F(s);d(()=>R(g,t.format(e.percentage/100))),p(s,l=>a==null?void 0:a(l)),p(s,(l,D)=>{var f;return(f=C)==null?void 0:f(l,D)},()=>"radial-progress "+e.className),d(()=>i=y(s,i,{style:`--thickness: 0.4rem; --value:${e.percentage??""};`,...N(c)})),v(m,s),_()}var S=u('<h2 class="text-lg mb-2">Simple progressbars</h2> <!> <!> <h2 class="text-lg mt-4 mb-2">Radial progress</h2> <div class="flex gap-6"><!> <!></div>',1);function H(m){var r=S(),o=n(q(r),2);b(o,{className:"progress-primary",value:20});var e=n(o,2);b(e,{className:"progress-info",value:4,max:5});var a=n(e,4),t=F(a);h(t,{className:"text-primary",min:10,max:20,value:13});var s=n(t,2);h(s,{className:"bg-info text-info-content border-4 border-info",min:9,max:20,value:17}),v(m,r)}export{H as default};