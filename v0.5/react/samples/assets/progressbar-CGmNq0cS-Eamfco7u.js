import{e as l,f as s,b as u,a as V}from"./writables-DCiBdIBK-CaNqvQxH.js";import{w as y,g as r,s as F,a as P}from"./directive-CKEccryv-BrWl76X8.js";const T={min:0,max:100,value:0,ariaLabel:"Progressbar",className:"",ariaValueTextFn:()=>{}},h={min:s,max:s,value:s,ariaLabel:u,className:u,ariaValueTextFn:V};function N(m){const[{max$:p,value$:x,min$:a,ariaValueTextFn$:$,ariaLabel$:n,...b},v]=y(T,m,h),e=r(()=>Math.max(a(),p())),t=r(()=>l(x(),e(),a())),d=r(()=>{const c=e(),i=a();return c>i?l((t()-i)*100/(c-i),100,0):0}),f=r(()=>t()>a()),g=r(()=>t()===e()),o=r(()=>$()(t(),a(),e()));return{...F({min$:a,max$:e,value$:t,percentage$:d,started$:f,finished$:g,ariaValueText$:o,ariaLabel$:n,...b}),patch:v,api:{},directives:{ariaDirective:P(()=>({attributes:{role:"progressbar","aria-label":n,"aria-valuenow":t,"aria-valuemin":a,"aria-valuemax":e,"aria-valuetext":o}}))}}}export{N as c};