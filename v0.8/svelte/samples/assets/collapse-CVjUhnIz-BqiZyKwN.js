import{f as T,g as a,h,j as z}from"./dom-BB9jLllr-CeqtqeKx.js";import{c as u}from"./cssTransitions-CkJNk6HC.js";const w=({dimension:s="height",showClasses:i,hideClasses:r,animationPendingClasses:p}={})=>u((o,t,S,g)=>{if(S&&T(o)){let{maxSize:c,minSize:l}=g;c||(a(o,p),a(o,r),h(o,i),c=o.getBoundingClientRect()[s]+"px",g.maxSize=c),l||(a(o,p),a(o,i),h(o,r),l=o.getBoundingClientRect()[s]+"px",g.minSize=l),a(o,i),a(o,r);const f=t==="show"?[l,c]:[c,l];o.style[s]=f[0],z(o),h(o,p),z(o),o.style[s]=f[1]}else a(o,t==="show"?r:i);return()=>{a(o,p),h(o,t==="show"?i:r),o.style[s]=""}}),v={dimension:"height",hideClasses:["collapse"],showClasses:["collapse","show"],animationPendingClasses:["collapsing"]},x={dimension:"width",hideClasses:["collapse","collapse-horizontal"],showClasses:["collapse","collapse-horizontal","show"],animationPendingClasses:["collapsing","collapse-horizontal"]},C=w(v),n=w(x);export{n as a,C as c};
