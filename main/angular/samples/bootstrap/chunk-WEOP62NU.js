import{F as P,S as x}from"./chunk-BNWOVH73.js";import{ia as T,la as v,na as O,pa as L,qa as D,ra as N,sa as B}from"./chunk-DPRLPUF2.js";import"./chunk-BSKWKFW2.js";import{Hb as V,Ib as o,Jb as I,Ka as l,Lb as c,Mb as y,Nb as f,Ra as u,Ya as M,ca as m,da as d,jb as w,rb as A,sb as k,tb as S,ub as i,vb as n,wb as h,yb as W,zb as E}from"./chunk-X6ZWDPPE.js";var b=(r=>(r.success="success",r.info="info",r.warning="warning",r.danger="danger",r.primary="primary",r.secondary="secondary",r.light="light",r.dark="dark",r))(b||{});function F(p,a){if(p&1&&(i(0,"option",6),o(1),n()),p&2){let s=a.$implicit;w("value",s.value),l(),I(s.label)}}var _=class p{constructor(){this.styleList=Object.entries(b).map(a=>({value:a[1],label:a[0]}));this.animatedOnInit=u(!0);this.animated=u(!0);this.dismissible=u(!0);this.type=u(this.styleList[0].value)}showAlert(a){a.api.open()}static{this.\u0275fac=function(s){return new(s||p)}}static{this.\u0275cmp=M({type:p,selectors:[["ng-component"]],decls:31,vars:8,consts:[["alert",""],["type","button",1,"btn","btn-primary","showAlert",3,"click"],[1,"d-flex","flex-column"],[1,"d-flex","form-group"],["for","typeSelect",1,"align-self-center","me-3"],["id","typeSelect",1,"form-select","w-auto",3,"ngModelChange","ngModel"],[3,"value"],["type","checkbox",1,"form-check-input","me-1",3,"ngModelChange","ngModel"],["type","checkbox",1,"dismissibleInput","form-check-input","me-1",3,"ngModelChange","ngModel"],["auAlert","",3,"auAnimated","auAnimatedOnInit","auDismissible","auType"],[1,"alert-heading"],[1,"mb-0"]],template:function(s,e){if(s&1){let g=W();i(0,"button",1),E("click",function(){m(g);let t=V(23);return d(e.showAlert(t))}),o(1,"Show alert"),n(),h(2,"br")(3,"br"),i(4,"div",2)(5,"div",3)(6,"label",4),o(7,"Alert type: "),n(),i(8,"select",5),f("ngModelChange",function(t){return m(g),y(e.type,t)||(e.type=t),d(t)}),k(9,F,2,2,"option",6,A),n()(),i(11,"label")(12,"input",7),f("ngModelChange",function(t){return m(g),y(e.animatedOnInit,t)||(e.animatedOnInit=t),d(t)}),n(),o(13,"Animated on init"),n(),i(14,"label")(15,"input",7),f("ngModelChange",function(t){return m(g),y(e.animated,t)||(e.animated=t),d(t)}),n(),o(16,"Animated"),n(),i(17,"label")(18,"input",8),f("ngModelChange",function(t){return m(g),y(e.dismissible,t)||(e.dismissible=t),d(t)}),n(),o(19,"Dismissible"),n()(),h(20,"br")(21,"br"),i(22,"au-component",9,0)(24,"h4",10),o(25,"Well done!"),n(),i(26,"p"),o(27," Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content. "),n(),h(28,"hr"),i(29,"p",11),o(30,"Whenever you need to, be sure to use margin utilities to keep things nice and tidy."),n()()}s&2&&(l(8),c("ngModel",e.type),l(),S(e.styleList),l(3),c("ngModel",e.animatedOnInit),l(3),c("ngModel",e.animated),l(3),c("ngModel",e.dismissible),l(4),w("auAnimated",e.animated())("auAnimatedOnInit",e.animatedOnInit())("auDismissible",e.dismissible())("auType",e.type()))},dependencies:[x,P,B,D,N,T,L,v,O],encapsulation:2})}};export{_ as default};
