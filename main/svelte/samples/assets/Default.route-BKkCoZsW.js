import{p as x,e as d,b as H,c as v,a as g,t as m,h as s,q as w,r as S}from"./AppCommon-D_B8a5G6.js";import{s as y}from"./snippet-CHDzym81.js";import{a as c}from"./actions-B64vG8Da.js";import{c as C}from"./baseTransitions-ChaN5dzC.js";import{c as D}from"./directive-CKEccryv-BAfxyCuh.js";import{c as T}from"./simpleClassTransition-B748OgGR.js";import"./writables-DoU_XYTX-DPIJ9iVk.js";import"./promise-CY2U8bTP-Bo1v6H0G.js";import"./cssTransitions-spK9RCdk.js";var q=m('<div><div class="collapse-title font-medium text-xl"> </div> <div class="collapse-content"><!></div></div>');function F(n,t){x(t,!0);const a=C({props:{visible:!1,transition:T({}),onShown:()=>{var e;return(e=t.onShown)==null?void 0:e.call(t)},onHidden:()=>{var e;return(e=t.onHidden)==null?void 0:e.call(t)}}}),o=a.api;var i=q(),u=()=>a.api.hide(),f=()=>a.api.show();let r;d(()=>r=w(i,r,{tabIndex:0,onblur:u,onfocus:f}));var l=s(i),p=s(l),h=H(l,2),b=s(h);return y(b,()=>t.children),d(()=>S(p,t.title??"Focus me to see content")),c(i,(e,_)=>D(e,_),()=>"collapse bg-base-200"),c(i,e=>a.directives.directive(e)),v(n,i),g({api:o})}var I=m("<p>tabindex necessary is already put</p>");function K(n){F(n,{onHidden:()=>console.log("Hidden"),children:(t,a)=>{var o=I();v(t,o)},$$slots:{default:!0}})}export{K as default};