import{A as D,O as L}from"./chunk-W5WXNCR7.js";import"./chunk-HYVDFSYR.js";import"./chunk-6AZTJAM2.js";import{Eb as n,Fb as m,Hb as w,Ib as R,Jb as y,Lb as h,Oa as u,Va as d,ba as c,ka as l,la as s,nb as a,ob as r,pb as f,rb as _,sb as C}from"./chunk-HJDF7RBE.js";var i=class i{constructor(){this.rating=d(3);this.hovered=d(0);this.left=d(0)}};i.\u0275fac=function(o){return new(o||i)},i.\u0275cmp=c({type:i,selectors:[["ng-component"]],standalone:!0,features:[h],decls:14,vars:4,consts:[["rat",""],["auAriaLabel","rating",3,"auRatingChange","auHover","auLeave","auRating"],["id","defaultRating"],["id","defaultHovered"],["id","defaultLeft"]],template:function(o,e){if(o&1){let p=_();a(0,"div",1,0),y("auRatingChange",function(t){return l(p),R(e.rating,t)||(e.rating=t),s(t)}),C("auHover",function(t){return l(p),s(e.hovered.set(t))})("auLeave",function(t){return l(p),s(e.left.set(t))}),r(),a(2,"div"),n(3," Current rate: "),a(4,"span",2),n(5),r(),f(6,"br"),n(7," Hovered: "),a(8,"span",3),n(9),r(),f(10,"br"),n(11," Left: "),a(12,"span",4),n(13),r()()}o&2&&(w("auRating",e.rating),u(5),m(e.rating()),u(4),m(e.hovered()),u(4),m(e.left()))},dependencies:[L,D],encapsulation:2});var g=i;export{g as default};