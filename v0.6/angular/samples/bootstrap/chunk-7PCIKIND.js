import{A as z,B as G,o as $,p as q}from"./chunk-RKNZWUKR.js";import{X as L}from"./chunk-BNWXVAGH.js";import"./chunk-54KPITK7.js";import{Bb as C,Cb as t,Fb as F,Gb as M,Hb as j,Ib as A,Jb as B,La as o,Rb as I,Sa as h,Za as D,_ as N,a as f,b as y,bb as W,cb as g,ha as r,ia as s,lb as n,mb as a,nb as _,pb as x,qb as u}from"./chunk-TWJB344F.js";function J(d,p){if(d&1&&(n(0,"span",9)(1,"span",10),t(2,"\u2665"),a(),t(3,"\u2665 "),a()),d&2){let m=p.fill;g("full",m===100),o(),W("width",m,"%")}}var b=class d{constructor(){this.rating=h(3);this.widgetsConfig$=q();this.widgetsConfig=L(this.widgetsConfig$)}updateRatingConfig(p){this.widgetsConfig$.update(m=>y(f({},m),{rating:f(f({},m.rating),p)}))}static{this.\u0275fac=function(m){return new(m||d)}}static{this.\u0275cmp=N({type:d,selectors:[["ng-component"]],standalone:!0,features:[A([$()]),B],decls:39,vars:25,consts:[["custom",""],["auRatingStar",""],[3,"auRatingChange","auRating"],[1,"mt-3"],["id","btn-config-disabled",1,"btn-group","mb-2"],[1,"btn","btn-sm","btn-outline-secondary",3,"click"],["id","btn-config-maxRating",1,"btn-group","mb-2"],["id","btn-config-className",1,"btn-group","mb-2"],["id","btn-config-slotStar",1,"btn-group","mb-2"],[1,"star"],[1,"half"]],template:function(m,e){if(m&1){let i=x();D(0,J,4,4,"ng-template",1,0,I),n(2,"div",2),j("auRatingChange",function(c){return r(i),M(e.rating,c)||(e.rating=c),s(c)}),a(),n(3,"div",3),t(4," Disabled: "),n(5,"div",4)(6,"button",5),u("click",function(){return r(i),s(e.updateRatingConfig({disabled:!0}))}),t(7," true "),a(),n(8,"button",5),u("click",function(){return r(i),s(e.updateRatingConfig({disabled:!1}))}),t(9," false "),a()(),_(10,"br"),t(11," maxRating: "),n(12,"div",6)(13,"button",5),u("click",function(){return r(i),s(e.updateRatingConfig({maxRating:40}))}),t(14," 40 "),a(),n(15,"button",5),u("click",function(){return r(i),s(e.updateRatingConfig({maxRating:30}))}),t(16," 30 "),a(),n(17,"button",5),u("click",function(){return r(i),s(e.updateRatingConfig({maxRating:20}))}),t(18," 20 "),a(),n(19,"button",5),u("click",function(){return r(i),s(e.updateRatingConfig({maxRating:void 0}))}),t(20," undefined "),a()(),_(21,"br"),t(22," className: "),n(23,"div",7)(24,"button",5),u("click",function(){return r(i),s(e.updateRatingConfig({className:"fs-1"}))}),t(25," fs-1 "),a(),n(26,"button",5),u("click",function(){return r(i),s(e.updateRatingConfig({className:"fs-2"}))}),t(27," fs-2 "),a(),n(28,"button",5),u("click",function(){return r(i),s(e.updateRatingConfig({className:void 0}))}),t(29," undefined "),a()(),_(30,"br"),t(31," slotStar: "),n(32,"div",8)(33,"button",5),u("click",function(){r(i);let c=C(1);return s(e.updateRatingConfig({star:c}))}),t(34," custom "),a(),n(35,"button",5),u("click",function(){return r(i),s(e.updateRatingConfig({star:"*"}))}),t(36," '*' "),a(),n(37,"button",5),u("click",function(){return r(i),s(e.updateRatingConfig({star:void 0}))}),t(38," undefined "),a()()()}if(m&2){let i,l,c,R,w,v,V,k,S,P,E,T,H=C(1);o(2),F("auRating",e.rating),o(4),g("active",((i=e.widgetsConfig().rating)==null?null:i.disabled)===!0),o(2),g("active",((l=e.widgetsConfig().rating)==null?null:l.disabled)!==!0),o(5),g("active",((c=e.widgetsConfig().rating)==null?null:c.maxRating)===40),o(2),g("active",((R=e.widgetsConfig().rating)==null?null:R.maxRating)===30),o(2),g("active",((w=e.widgetsConfig().rating)==null?null:w.maxRating)===20),o(2),g("active",!((v=e.widgetsConfig().rating)!=null&&v.maxRating)),o(5),g("active",((V=e.widgetsConfig().rating)==null?null:V.className)==="fs-1"),o(2),g("active",((k=e.widgetsConfig().rating)==null?null:k.className)==="fs-2"),o(2),g("active",!((S=e.widgetsConfig().rating)!=null&&S.className)),o(5),g("active",((P=e.widgetsConfig().rating)==null?null:P.star)===H),o(2),g("active",((E=e.widgetsConfig().rating)==null?null:E.star)==="*"),o(2),g("active",!((T=e.widgetsConfig().rating)!=null&&T.star))}},dependencies:[G,z],encapsulation:2})}};export{b as default};
