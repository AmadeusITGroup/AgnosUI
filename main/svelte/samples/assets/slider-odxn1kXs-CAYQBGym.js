import{a9 as a,a6 as Ee,W as Re}from"./AppCommon-DE0E2XGg.js";import{o as U,m as k,a as g,n as Ne}from"./dom-BB9jLllr-DsL3TsuS.js";import{w as ke,e as Se,s as ze,t as X}from"./stores-UZEPS6vP.js";import{h as le,f as ie,j as Oe,t as w,a as S,b as Te}from"./writables-DCiBdIBK-BvUcp8gb.js";import{c as Ae}from"./resizeObserver-BNTERY8-.js";const He=/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/;function Y(c){var u;const d=(""+c).match(He);return Math.max(0,(((u=d[1])==null?void 0:u.length)??0)-(+d[2]||0))}const C={min:0,max:100,stepSize:1,readonly:!1,disabled:!1,vertical:!1,className:"",ariaLabel:()=>"Value",ariaLabelledBy:()=>"",ariaValueText:()=>"",onValuesChange:Ne,values:[0],showValueLabels:!0,showMinMaxLabels:!0,rtl:!1},je={min:ie,max:ie,stepSize:Oe(0,1/0,{strict:!0}),readonly:w,disabled:w,vertical:w,ariaLabel:S,ariaLabelledBy:S,ariaValueText:S,onValuesChange:S,values:le,showValueLabels:w,showMinMaxLabels:w,rtl:w,className:Te},We=(c,u,d,f,o)=>{const y=Math.pow(10,o);if(c>=d)return d;if(c<=u)return u;const B=Math.floor((c-u)*y/f);return+(((c-u)*y%f<f/2?B:B+1)*f/y+u).toFixed(o)},z=(c,u,d,f)=>{u.update(o=>(o=[...o],o[c]=o[c]+d*f,o))},O=(c,u,d)=>c&&u?d?1:-1:c&&!u?-1:!c&&u?d?-1:1:!c&&!u?-1:1,b=c=>c!=null?`${c}%`:"";function Ce(c){const[{min$:u,max$:d,stepSize$:f,rtl$:o,values$:y,ariaLabel$:B,ariaLabelledBy$:ne,ariaValueText$:re,onValuesChange$:se,showValueLabels$:T,showMinMaxLabels$:A,...H},oe]=ke(C,c,je),{vertical$:r,disabled$:V,readonly$:G}=H;let E=-1;const p=a(()=>{const e=u(),t=d();return e===t?C.min:Math.min(e,t)}),L=a(()=>{const e=u(),t=d();return e===t?C.max:Math.max(e,t)}),J=a(()=>Math.max(Y(f()),Y(p()),Y(L()))),ce=a(()=>f()*Math.pow(10,J())),m=Se(y,se,e=>{const t=p(),i=L(),n=ce(),l=J();return e.map(s=>We(s,t,i,n,l))},le.equal),{directive:ue,element$:de}=U(),{directive:me,element$:be}=U(),{directive:fe,element$:he}=U(),{directive:pe,dimensions$:j}=Ae(),x=Ee({}),R=a(()=>{var e;return j(),x(),((e=de())==null?void 0:e.getBoundingClientRect())??{}},{equal:Object.is}),ve=a(()=>{var e;return j(),x(),((e=be())==null?void 0:e.getBoundingClientRect())??{}},{equal:(e,t)=>Object.is(e,t)}),ge=a(()=>{var e;return j(),x(),((e=he())==null?void 0:e.getBoundingClientRect())??{}},{equal:(e,t)=>Object.is(e,t)}),Le=a(()=>r()?R().top:R().left),W=a(()=>r()?R().height:R().width),K=a(()=>[...m()].sort((e,t)=>e-t)),De=a(()=>m().map((e,t)=>({id:t,value:e})).sort((e,t)=>e.value-t.value)),$e=a(()=>{const e=B(),t=re(),i=ne();return De().map((n,l)=>({...n,ariaLabel:i(l)?void 0:e(l),ariaLabelledBy:i(l)||void 0,ariaValueText:t(n.value,l)||void 0}))}),$=a(()=>m().map(e=>F(e))),q=a(()=>[...$()].sort((e,t)=>e-t)),we=a(()=>ve().width/W()*100),ye=a(()=>ge().width/W()*100),Q=a(()=>{if(A()){if(!T())return!0}else return!1;const e=we();return o()?!$().some(t=>100-t>100-e-1):!$().some(t=>t<e+1)}),Z=a(()=>{if(A()){if(!T())return!0}else return!1;const e=ye();return o()?!$().some(t=>100-t<e+1):!$().some(t=>t>100-e-1)}),Ve=a(()=>{const e=m();return e.length==2&&Math.abs(e[0]-e[1])*100/(L()-p())<10}),M=a(()=>!V()&&!G()),ee=a(()=>{const e=q(),t=(e[0]+e[1])/2;return r()||e.length!=2?0:o()?100-t:t}),te=a(()=>{const e=q(),t=100-(e[0]+e[1])/2;return r()&&e.length==2?o()?100-t:t:0}),P=a(()=>{const e=r(),t=o();return $().map(i=>({left:t?e?null:100-i:e?null:i,top:t?e?i:null:e?100-i:null}))}),xe=a(()=>{const e=r(),t=q(),i=o();return t.length===1?[{left:e||i?null:0,right:e?null:i?0:null,bottom:e?i?null:0:null,top:e&&i?0:null,width:e?100:t[0],height:e?t[0]:100,id:0}]:t.map((n,l,s)=>({left:e||i?null:n,right:e?null:i?s[l]:null,bottom:e?i?null:n:null,top:e&&i?s[l]:null,width:e?100:l===s.length-1?n:s[l+1]-n,height:e?l===s.length-1?n:s[l+1]-n:100,id:l})).slice(0,t.length-1)}),F=e=>{const t=p();return(e-t)*100/(L()-t)},Me=e=>{const t=m();if(t.length===1)return 0;const i=K(),n=i.find(D=>F(D)>e*100),l=n?i.indexOf(n):i.length-1,s=F(i[l-1]+(i[l]-i[l-1])/2),_=i[e*100<=s?l-1:l];return t.indexOf(_)},I=(e,t)=>{if(M()){const i=W(),n=Le();let l=r()?(i-e+n)/i:(e-n)/i;l=o()?1-l:l;const s=t??Me(l),_=l*(L()-p())+p();m.update(D=>(D=[...D],D[s]=_,D))}},h=a(()=>!r()),Pe=g(()=>({attributes:{"aria-disabled":a(()=>V()?"true":void 0),class:H.className$},classNames:{"au-slider":X,"au-slider-vertical":r,"au-slider-horizontal":h,disabled:V}})),_e=g(()=>({classNames:{"au-slider-label-vertical":r,"au-slider-label-vertical-min":r,"au-slider-label":h,"au-slider-label-min":h,"au-slider-rtl":o,invisible:a(()=>!Q())}})),Be=g(()=>({classNames:{"au-slider-label-vertical":r,"au-slider-label-vertical-max":r,"au-slider-label":h,"au-slider-label-max":h,"au-slider-rtl":o,invisible:a(()=>!Z())}})),ae=g(e=>({events:{keydown:t=>{const i=e().item.id,{key:n}=t,l=o(),s=f(),_=p(),D=L(),N=r();if(M()){switch(n){case"ArrowDown":z(i,m,s,O(N,l,!0));break;case"ArrowLeft":z(i,m,s,O(N,l,!1));break;case"ArrowUp":z(i,m,s,-1*O(N,l,!0));break;case"ArrowRight":z(i,m,s,-1*O(N,l,!1));break;case"Home":m.update(v=>(v=[...v],v[i]=_,v));break;case"End":m.update(v=>(v=[...v],v[i]=D,v));break;case"PageUp":break;case"PageDown":break;default:return}t.preventDefault()}},mousedown:t=>{t.preventDefault();const i=t.target,n=l=>{l.preventDefault();const s=r()?l.clientY:l.clientX;i.focus(),E!==s&&(E=s,I(s,e().item.id))};M()&&(x.set({}),i.focus(),document.addEventListener("mousemove",n),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",n)},{once:!0}))},touchstart:t=>{const i=n=>{n.preventDefault();const l=r()?n.touches[0].clientY:n.touches[0].clientX;t.target.focus(),E!==l&&(E=l,I(l,e().item.id))};M()&&(x.set({}),t.target.focus(),document.addEventListener("touchmove",i,{passive:!1}),document.addEventListener("touchend",()=>{document.removeEventListener("touchmove",i),document.removeEventListener("touchcancel",i)},{once:!0}),document.addEventListener("touchcancel",()=>{document.removeEventListener("touchmove",i),document.removeEventListener("touchend",i)},{once:!0}))}}}));return{...ze({min$:p,max$:L,stepSize$:f,values$:m,sortedValues$:K,sortedHandles$:$e,minValueLabelDisplay$:Q,maxValueLabelDisplay$:Z,combinedLabelDisplay$:Ve,interactive$:M,combinedLabelPositionLeft$:ee,combinedLabelPositionTop$:te,progressDisplayOptions$:xe,handleDisplayOptions$:P,showValueLabels$:T,showMinMaxLabels$:A,rtl$:o,...H}),patch:oe,api:{},directives:{sliderDirective:k(ue,pe,Pe),progressDisplayDirective:g(e=>({styles:{left:a(()=>b(e().option.left)),right:a(()=>b(e().option.right)),top:a(()=>b(e().option.top)),bottom:a(()=>b(e().option.bottom)),width:a(()=>b(e().option.width)),height:a(()=>b(e().option.height))},classNames:{"au-slider-progress":X}})),clickableAreaDirective:g(()=>({events:{click:e=>{I(r()?e.clientY:e.clientX)}},classNames:{"au-slider-clickable-area":h,"au-slider-clickable-area-vertical":r}})),handleEventsDirective:ae,handleDirective:k(ae,g(e=>({attributes:{role:Re("slider"),"aria-valuemin":p,"aria-valuemax":L,"aria-valuenow":a(()=>e().item.value),"aria-valuetext":a(()=>e().item.ariaValueText),"aria-label":a(()=>e().item.ariaLabel),"aria-labelledBy":a(()=>e().item.ariaLabelledBy),"aria-orientation":a(()=>r()?"vertical":void 0),"aria-disabled":a(()=>V()?"true":void 0),disabled:V,"aria-readonly":a(()=>G()?"true":void 0)},styles:{left:a(()=>b(P()[e().item.id].left)),top:a(()=>b(P()[e().item.id].top))},classNames:{"au-slider-handle":X,"au-slider-handle-vertical":r,"au-slider-handle-horizontal":h}}))),minLabelDirective:k(me,_e),maxLabelDirective:k(fe,Be),combinedHandleLabelDisplayDirective:g(()=>({classNames:{"au-slider-label-vertical":r,"au-slider-label-vertical-now":r,"au-slider-label":h,"au-slider-label-now":h},styles:{left:a(()=>b(ee())),top:a(()=>b(te()))}})),handleLabelDisplayDirective:g(e=>({classNames:{"au-slider-label-vertical":r,"au-slider-label-vertical-now":r,"au-slider-label":h,"au-slider-label-now":h},styles:{left:a(()=>b(P()[e().index].left)),top:a(()=>b(P()[e().index].top))}}))}}}export{Ce as c};
