import{i as w,r as o,a as S,b as T}from"./app.Dx-GQ-qc.js";import{c as x}from"./cssTransitions.ICaSXPeH.js";const y=({dimension:a="height",showClasses:c,hideClasses:i,animationPendingClasses:g}={})=>x((r,s,v,u)=>{if(v&&w(r)){let{maxSize:p,minSize:f}=u;p||(o(r,g),o(r,i),S(r,c),p=r.getBoundingClientRect()[a]+"px",u.maxSize=p),f||(o(r,g),o(r,c),S(r,i),f=r.getBoundingClientRect()[a]+"px",u.minSize=f),o(r,c),o(r,i);const z=s==="show"?[f,p]:[p,f];r.style[a]=z[0],T(r),S(r,g),T(r),r.style[a]=z[1]}else o(r,s==="show"?i:c);return()=>{o(r,g),S(r,s==="show"?c:i),r.style[a]=""}}),B={dimension:"height",hideClasses:["collapse"],showClasses:["collapse","show"],animationPendingClasses:["collapsing"]},b=y(B);export{b as c};
