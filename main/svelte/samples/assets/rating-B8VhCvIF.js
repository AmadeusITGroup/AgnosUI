import{H as s,I as D}from"./AppCommon-CEfWotzS.js";import{w as F,c as H,s as N,I as T}from"./stores-Bv6KburJ.js";import{e as $,i as _,t as b,a as c,b as p,d as I}from"./writables-_Hf-xFlO.js";import{n as u}from"./func-fOTgS_tI.js";const h={rating:0,tabindex:0,maxRating:10,disabled:!1,readonly:!1,resettable:!0,ariaValueTextFn:(e,g)=>`${e} out of ${g}`,onHover:u,onLeave:u,onRatingChange:u,className:"",slotStar:({fill:e})=>String.fromCharCode(e===100?9733:9734),ariaLabel:"Rating",ariaLabelledBy:""};function z(){return{...h}}const M={rating:$,tabindex:$,maxRating:{normalizeValue:e=>_(e)?Math.max(0,e):T},disabled:b,readonly:b,resettable:b,ariaValueTextFn:c,onHover:c,onLeave:c,onRatingChange:c,className:p,ariaLabel:p,ariaLabelledBy:p};function K(e){const[{rating$:g,tabindex$:R,ariaValueTextFn$:y,onHover$:v,onLeave$:w,onRatingChange$:x,...f},L]=F(h,e,M),{maxRating$:r,disabled$:m,readonly$:V,resettable$:A}=f,C=s(()=>m()?-1:R()),t=H(g,x,a=>I(a,r())),i=D(0),o=s(()=>!m()&&!V()),d=s(()=>{const a=i();return a!==0?a:t()}),k=s(()=>y()(d(),r())),P=s(()=>{const a=d();return Array.from({length:r()},(l,n)=>({fill:Math.round(Math.max(Math.min(a-n,1),0)*100),index:n}))});return{...N({ariaValueText$:k,interactive$:o,rating$:t,stars$:P,tabindex$:C,visibleRating$:d,...f}),patch:L,actions:{click:a=>{o()&&a>0&&a<=r()&&t.update(l=>l===a&&A()?0:a)},hover:a=>{o()&&a>0&&a<=r()&&(i.set(a),v()(a))},leave:()=>{o()&&(w()(i()),i.set(0))},handleKey(a){if(o()){const{key:l}=a;switch(l){case"ArrowLeft":case"ArrowDown":t.update(n=>n-1);break;case"ArrowRight":case"ArrowUp":t.update(n=>n+1);break;case"Home":case"PageDown":t.set(0);break;case"End":case"PageUp":t.set(r());break;default:return}a.preventDefault(),a.stopPropagation()}}},directives:{},api:{}}}export{K as c,z as g};
