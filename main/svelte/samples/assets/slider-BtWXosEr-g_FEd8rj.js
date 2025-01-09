import{a8 as a,ae as Be}from"./AppCommon-BVB7qvfB.js";import{w as Ee,y as Re,z as U,s as Ne,m as k,a as g,h as ke}from"./directive-CKEccryv-DBVYDcNY.js";import{h as ie,f as ae,j as ze,t as w,a as z,b as Se}from"./writables-DCiBdIBK-Bon2d5Tt.js";import{c as Oe}from"./resizeObserver-BpPSwyTz.js";const Te=/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/;function X(c){var u;const d=(""+c).match(Te);return Math.max(0,(((u=d[1])==null?void 0:u.length)??0)-(+d[2]||0))}const Y={min:0,max:100,stepSize:1,readonly:!1,disabled:!1,vertical:!1,className:"",ariaLabel:()=>"Value",ariaLabelledBy:()=>"",ariaValueText:()=>"",onValuesChange:ke,values:[0],showValueLabels:!0,showMinMaxLabels:!0,rtl:!1},Ae={min:ae,max:ae,stepSize:ze(0,1/0,{strict:!0}),readonly:w,disabled:w,vertical:w,ariaLabel:z,ariaLabelledBy:z,ariaValueText:z,onValuesChange:z,values:ie,showValueLabels:w,showMinMaxLabels:w,rtl:w,className:Se},He=(c,u,d,v,o)=>{const y=Math.pow(10,o);if(c>=d)return d;if(c<=u)return u;const B=Math.floor((c-u)*y/v);return+(((c-u)*y%v<v/2?B:B+1)*v/y+u).toFixed(o)},S=(c,u,d,v)=>{u.update(o=>(o=[...o],o[c]=o[c]+d*v,o))},O=(c,u,d)=>c&&u?d?1:-1:c&&!u?-1:!c&&u?d?-1:1:!c&&!u?-1:1,b=c=>c!=null?`${c}%`:"";function Ue(c){const[{min$:u,max$:d,stepSize$:v,rtl$:o,values$:y,ariaLabel$:B,ariaLabelledBy$:le,ariaValueText$:re,onValuesChange$:se,showValueLabels$:T,showMinMaxLabels$:A,...H},ne]=Ee(Y,c,Ae),{vertical$:s,disabled$:V,readonly$:C}=H;let E=-1;const h=a(()=>{const e=u(),t=d();return e===t?Y.min:Math.min(e,t)}),L=a(()=>{const e=u(),t=d();return e===t?Y.max:Math.max(e,t)}),G=a(()=>Math.max(X(v()),X(h()),X(L()))),oe=a(()=>v()*Math.pow(10,G())),m=Re(y,se,e=>{const t=h(),i=L(),r=oe(),l=G();return e.map(n=>He(n,t,i,r,l))},ie.equal),{directive:ce,element$:ue}=U(),{directive:de,element$:me}=U(),{directive:be,element$:ve}=U(),{directive:fe,dimensions$:j}=Oe(),x=Be({}),R=a(()=>{var e;return j(),x(),((e=ue())==null?void 0:e.getBoundingClientRect())??{}},{equal:Object.is}),he=a(()=>{var e;return j(),x(),((e=me())==null?void 0:e.getBoundingClientRect())??{}},{equal:(e,t)=>Object.is(e,t)}),pe=a(()=>{var e;return j(),x(),((e=ve())==null?void 0:e.getBoundingClientRect())??{}},{equal:(e,t)=>Object.is(e,t)}),ge=a(()=>s()?R().top:R().left),q=a(()=>s()?R().height:R().width),J=a(()=>[...m()].sort((e,t)=>e-t)),Le=a(()=>m().map((e,t)=>({id:t,value:e})).sort((e,t)=>e.value-t.value)),De=a(()=>{const e=B(),t=re(),i=le();return Le().map((r,l)=>({...r,ariaLabel:i(l)?void 0:e(l),ariaLabelledBy:i(l)||void 0,ariaValueText:t(r.value,l)||void 0}))}),$=a(()=>m().map(e=>I(e))),F=a(()=>[...$()].sort((e,t)=>e-t)),$e=a(()=>he().width/q()*100),we=a(()=>pe().width/q()*100),K=a(()=>{if(A()){if(!T())return!0}else return!1;const e=$e();return o()?!$().some(t=>100-t>100-e-1):!$().some(t=>t<e+1)}),Q=a(()=>{if(A()){if(!T())return!0}else return!1;const e=we();return o()?!$().some(t=>100-t<e+1):!$().some(t=>t>100-e-1)}),ye=a(()=>{const e=m();return e.length==2&&Math.abs(e[0]-e[1])*100/(L()-h())<10}),M=a(()=>!V()&&!C()),Z=a(()=>{const e=F(),t=(e[0]+e[1])/2;return s()||e.length!=2?0:o()?100-t:t}),ee=a(()=>{const e=F(),t=100-(e[0]+e[1])/2;return s()&&e.length==2?o()?100-t:t:0}),P=a(()=>{const e=s(),t=o();return $().map(i=>({left:t?e?null:100-i:e?null:i,top:t?e?i:null:e?100-i:null}))}),Ve=a(()=>{const e=s(),t=F(),i=o();return t.length===1?[{left:e||i?null:0,right:e?null:i?0:null,bottom:e?i?null:0:null,top:e&&i?0:null,width:e?100:t[0],height:e?t[0]:100,id:0}]:t.map((r,l,n)=>({left:e||i?null:r,right:e?null:i?n[l]:null,bottom:e?i?null:r:null,top:e&&i?n[l]:null,width:e?100:l===n.length-1?r:n[l+1]-r,height:e?l===n.length-1?r:n[l+1]-r:100,id:l})).slice(0,t.length-1)}),I=e=>{const t=h();return(e-t)*100/(L()-t)},xe=e=>{const t=m();if(t.length===1)return 0;const i=J(),r=i.find(D=>I(D)>e*100),l=r?i.indexOf(r):i.length-1,n=I(i[l-1]+(i[l]-i[l-1])/2),_=i[e*100<=n?l-1:l];return t.indexOf(_)},W=(e,t)=>{if(M()){const i=q(),r=ge();let l=s()?(i-e+r)/i:(e-r)/i;l=o()?1-l:l;const n=t??xe(l),_=l*(L()-h())+h();m.update(D=>(D=[...D],D[n]=_,D))}},f=a(()=>!s()),Me=g(()=>({attributes:{"aria-disabled":a(()=>V()?"true":void 0),class:H.className$},classNames:{"au-slider":!0,"au-slider-vertical":s,"au-slider-horizontal":f,disabled:V}})),Pe=g(()=>({classNames:{"au-slider-label-vertical":s,"au-slider-label-vertical-min":s,"au-slider-label":f,"au-slider-label-min":f,"au-slider-rtl":o,invisible:a(()=>!K())}})),_e=g(()=>({classNames:{"au-slider-label-vertical":s,"au-slider-label-vertical-max":s,"au-slider-label":f,"au-slider-label-max":f,"au-slider-rtl":o,invisible:a(()=>!Q())}})),te=g(e=>({events:{keydown:t=>{const i=e().item.id,{key:r}=t,l=o(),n=v(),_=h(),D=L(),N=s();if(M()){switch(r){case"ArrowDown":S(i,m,n,O(N,l,!0));break;case"ArrowLeft":S(i,m,n,O(N,l,!1));break;case"ArrowUp":S(i,m,n,-1*O(N,l,!0));break;case"ArrowRight":S(i,m,n,-1*O(N,l,!1));break;case"Home":m.update(p=>(p=[...p],p[i]=_,p));break;case"End":m.update(p=>(p=[...p],p[i]=D,p));break;case"PageUp":break;case"PageDown":break;default:return}t.preventDefault()}},mousedown:t=>{t.preventDefault();const i=t.target,r=l=>{l.preventDefault();const n=s()?l.clientY:l.clientX;i.focus(),E!==n&&(E=n,W(n,e().item.id))};M()&&(x.set({}),i.focus(),document.addEventListener("mousemove",r),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",r)},{once:!0}))},touchstart:t=>{t.preventDefault();const i=r=>{r.preventDefault();const l=s()?r.touches[0].clientY:r.touches[0].clientX;t.target.focus(),E!==l&&(E=l,W(l,e().item.id))};M()&&(x.set({}),t.target.focus(),document.addEventListener("touchmove",i,{passive:!1}),document.addEventListener("touchend",()=>{document.removeEventListener("touchmove",i),document.removeEventListener("touchcancel",i)},{once:!0}),document.addEventListener("touchcancel",()=>{document.removeEventListener("touchmove",i),document.removeEventListener("touchend",i)},{once:!0}))}}}));return{...Ne({min$:h,max$:L,stepSize$:v,values$:m,sortedValues$:J,sortedHandles$:De,minValueLabelDisplay$:K,maxValueLabelDisplay$:Q,combinedLabelDisplay$:ye,interactive$:M,combinedLabelPositionLeft$:Z,combinedLabelPositionTop$:ee,progressDisplayOptions$:Ve,handleDisplayOptions$:P,showValueLabels$:T,showMinMaxLabels$:A,rtl$:o,...H}),patch:ne,api:{},directives:{sliderDirective:k(ce,fe,Me),progressDisplayDirective:g(e=>({styles:{left:a(()=>b(e().option.left)),right:a(()=>b(e().option.right)),top:a(()=>b(e().option.top)),bottom:a(()=>b(e().option.bottom)),width:a(()=>b(e().option.width)),height:a(()=>b(e().option.height))},classNames:{"au-slider-progress":!0}})),clickableAreaDirective:g(()=>({events:{click:e=>{W(s()?e.clientY:e.clientX)}},classNames:{"au-slider-clickable-area":f,"au-slider-clickable-area-vertical":s}})),handleEventsDirective:te,handleDirective:k(te,g(e=>({attributes:{role:"slider","aria-valuemin":h,"aria-valuemax":L,"aria-valuenow":a(()=>e().item.value),"aria-valuetext":a(()=>e().item.ariaValueText),"aria-label":a(()=>e().item.ariaLabel),"aria-labelledBy":a(()=>e().item.ariaLabelledBy),"aria-orientation":a(()=>s()?"vertical":void 0),"aria-disabled":a(()=>V()?"true":void 0),disabled:V,"aria-readonly":a(()=>C()?"true":void 0)},styles:{left:a(()=>b(P()[e().item.id].left)),top:a(()=>b(P()[e().item.id].top))},classNames:{"au-slider-handle":!0,"au-slider-handle-vertical":s,"au-slider-handle-horizontal":f}}))),minLabelDirective:k(de,Pe),maxLabelDirective:k(be,_e),combinedHandleLabelDisplayDirective:g(()=>({classNames:{"au-slider-label-vertical":s,"au-slider-label-vertical-now":s,"au-slider-label":f,"au-slider-label-now":f},styles:{left:a(()=>b(Z())),top:a(()=>b(ee()))}})),handleLabelDisplayDirective:g(e=>({classNames:{"au-slider-label-vertical":s,"au-slider-label-vertical-now":s,"au-slider-label":f,"au-slider-label-now":f},styles:{left:a(()=>b(P()[e().index].left)),top:a(()=>b(P()[e().index].top))}}))}}}export{Ue as c};
