import{a as N}from"./chunk-OLUGLI4Z.js";import{c as E}from"./chunk-ZR6FVPKE.js";import{F as H,o as B}from"./chunk-NJSLVR43.js";import{aa as L,ga as z}from"./chunk-ZIA7Z5CU.js";import"./chunk-EUXCPVXS.js";import{$a as I,Cb as r,Ia as v,Ib as M,Jb as m,La as p,Nb as D,Va as y,W as b,Za as x,_ as c,a as g,ab as u,b as h,ha as w,hb as S,ia as C,ka as A,lb as o,mb as a,nb as _,pb as T,qb as F,rb as d}from"./chunk-L7M7XINM.js";var P=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle-fill" viewBox="0 0 16 16">
  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1z"/>
</svg>`;var k=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
</svg>`;var V=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-info-circle-fill" viewBox="0 0 16 16">
  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2"/>
</svg>`;var W=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-lightbulb" viewBox="0 0 16 16">
  <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1"/>
</svg>`;var O=(t,n,e)=>({state:t,api:n,directives:e});function Q(t,n){}function U(t,n){if(t&1){let e=T();o(0,"button",4),F("click",function(){w(e);let i=d();return C(i.api.close())}),a()}if(t&2){let e=d();I("aria-label",e.state.ariaCloseButtonLabel())}}var s=class t extends L{constructor(){super(...arguments);this.sanitizer=b(E);this.typeIcon={success:N,info:V,warning:k,danger:P,light:W}}static{this.\u0275fac=(()=>{let e;return function(i){return(e||(e=A(t)))(i||t)}})()}static{this.\u0275cmp=c({type:t,selectors:[["app-icon-structure"]],hostAttrs:[2,"display","contents"],standalone:!0,features:[y,m],decls:4,vars:8,consts:[[1,"d-flex","me-2",3,"innerHTML"],[1,"alert-body"],[3,"auSlot","auSlotProps"],["type","button",1,"btn-close","ms-auto"],["type","button",1,"btn-close","ms-auto",3,"click"]],template:function(l,i){l&1&&(_(0,"span",0),o(1,"div",1),x(2,Q,0,0,"ng-template",2)(3,U,1,1,"button",3),a()),l&2&&(u("innerHTML",i.sanitizer.bypassSecurityTrustHtml(i.typeIcon[i.state.type()]),v),p(2),u("auSlot",i.state.children())("auSlotProps",D(4,O,i.state,i.api,i.directives)),p(),S(i.state.dismissible()?3:-1))},dependencies:[z],encapsulation:2,changeDetection:0})}};var f=class t{static{this.\u0275fac=function(e){return new(e||t)}}static{this.\u0275cmp=c({type:t,selectors:[["ng-component"]],standalone:!0,features:[M([B(n=>(n.alert=h(g({},n.alert),{dismissible:!1,className:"d-flex align-items-center",structure:s}),n))]),m],decls:10,vars:0,consts:[["auAlert","","auType","success"],["auAlert","","auType","warning"],["auAlert","","auType","danger"],["auAlert","","auType","info"],["auAlert","","auType","light"]],template:function(e,l){e&1&&(o(0,"au-component",0),r(1,"Alert success with a customisable icon"),a(),o(2,"au-component",1),r(3,"Alert warning with a customisable icon"),a(),o(4,"au-component",2),r(5,"Alert danger with a customisable icon"),a(),o(6,"au-component",3),r(7,"Alert info with a customisable icon"),a(),o(8,"au-component",4),r(9,"Alert light with a customisable icon"),a())},dependencies:[H],encapsulation:2})}};export{f as default};
