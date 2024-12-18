import{w as _e,g as i,G as Ee,H as I,f as Re,s as Ne,m as S,a as g,n as ke}from"./directive-CKEccryv-BEge1hNH.js";import{h as ae,f as te,j as Se,t as w,a as W,b as ze}from"./writables-DCiBdIBK-B6teIxy4.js";import{c as He}from"./resizeObserver-DpSXni5r.js";const Oe=/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/;function U(s){var u;const d=(""+s).match(Oe);return Math.max(0,(((u=d[1])==null?void 0:u.length)??0)-(+d[2]||0))}const X={min:0,max:100,stepSize:1,readonly:!1,disabled:!1,vertical:!1,className:"",ariaLabelHandle:s=>""+s,ariaValueText:s=>""+s,onValuesChange:ke,values:[0],showValueLabels:!0,showMinMaxLabels:!0,rtl:!1},Te={min:te,max:te,stepSize:Se(0,1/0,{strict:!0}),readonly:w,disabled:w,vertical:w,ariaLabelHandle:W,ariaValueText:W,onValuesChange:W,values:ae,showValueLabels:w,showMinMaxLabels:w,rtl:w,className:ze},Ae=(s,u,d,v,c)=>{const y=Math.pow(10,c);if(s>=d)return d;if(s<=u)return u;const E=Math.floor((s-u)*y/v);return+(((s-u)*y%v<v/2?E:E+1)*v/y+u).toFixed(c)},z=(s,u,d,v)=>{u.update(c=>(c=[...c],c[s]=c[s]+d*v,c))},H=(s,u,d)=>s&&u?d?1:-1:s&&!u?-1:!s&&u?d?-1:1:!s&&!u?-1:1,b=s=>s!=null?`${s}%`:"";function Ie(s){const[{min$:u,max$:d,stepSize$:v,rtl$:c,values$:y,ariaLabelHandle$:E,ariaValueText$:ie,onValuesChange$:le,showValueLabels$:O,showMinMaxLabels$:T,...A},ne]=_e(X,s,Te),{vertical$:r,disabled$:x,readonly$:Y}=A;let R=-1;const h=i(()=>{const e=u(),t=d();return e===t?X.min:Math.min(e,t)}),D=i(()=>{const e=u(),t=d();return e===t?X.max:Math.max(e,t)}),C=i(()=>Math.max(U(v()),U(h()),U(D()))),re=i(()=>v()*Math.pow(10,C())),m=Ee(y,le,e=>{const t=h(),a=D(),n=re(),l=C();return e.map(o=>Ae(o,t,a,n,l))},ae.equal),{directive:se,element$:oe}=I(),{directive:ce,element$:ue}=I(),{directive:de,element$:me}=I(),{directive:be,dimensions$:B}=He(),V=Re({}),N=i(()=>{var e;return B(),V(),((e=oe())==null?void 0:e.getBoundingClientRect())??{}},{equal:Object.is}),ve=i(()=>{var e;return B(),V(),((e=ue())==null?void 0:e.getBoundingClientRect())??{}},{equal:(e,t)=>Object.is(e,t)}),fe=i(()=>{var e;return B(),V(),((e=me())==null?void 0:e.getBoundingClientRect())??{}},{equal:(e,t)=>Object.is(e,t)}),he=i(()=>r()?N().top:N().left),j=i(()=>r()?N().height:N().width),G=i(()=>[...m()].sort((e,t)=>e-t)),pe=i(()=>m().map((e,t)=>({id:t,value:e})).sort((e,t)=>e.value-t.value)),ge=i(()=>{const e=E(),t=ie();return pe().map((a,n)=>({...a,ariaLabel:e(a.value,n,a.id),ariaValueText:t(a.value,n,a.id)}))}),$=i(()=>m().map(e=>ye(e))),q=i(()=>[...$()].sort((e,t)=>e-t)),De=i(()=>ve().width/j()*100),Le=i(()=>fe().width/j()*100),J=i(()=>{if(T()){if(!O())return!0}else return!1;const e=De();return c()?!$().some(t=>100-t>100-e-1):!$().some(t=>t<e+1)}),K=i(()=>{if(T()){if(!O())return!0}else return!1;const e=Le();return c()?!$().some(t=>100-t<e+1):!$().some(t=>t>100-e-1)}),$e=i(()=>{const e=m();return e.length==2&&Math.abs(e[0]-e[1])*100/(D()-h())<10}),M=i(()=>!x()&&!Y()),Q=i(()=>{const e=q(),t=(e[0]+e[1])/2;return r()||e.length!=2?0:c()?100-t:t}),Z=i(()=>{const e=q(),t=100-(e[0]+e[1])/2;return r()&&e.length==2?c()?100-t:t:0}),P=i(()=>{const e=r(),t=c();return $().map(a=>({left:t?e?null:100-a:e?null:a,top:t?e?a:null:e?100-a:null}))}),we=i(()=>{const e=r(),t=q(),a=c();return t.length===1?[{left:e||a?null:0,right:e?null:a?0:null,bottom:e?a?null:0:null,top:e&&a?0:null,width:e?100:t[0],height:e?t[0]:100,id:0}]:t.map((n,l,o)=>({left:e||a?null:n,right:e?null:a?o[l]:null,bottom:e?a?null:n:null,top:e&&a?o[l]:null,width:e?100:l===o.length-1?n:o[l+1]-n,height:e?l===o.length-1?n:o[l+1]-n:100,id:l})).slice(0,t.length-1)}),ye=e=>{const t=h();return(e-t)*100/(D()-t)},xe=e=>{const t=m();if(t.length===1)return 0;const a=G(),n=a.find(L=>L>e*100),l=n?a.indexOf(n):a.length-1,o=a[l-1]+(a[l]-a[l-1])/2,_=a[e*100<=o?l-1:l];return t.indexOf(_)},F=(e,t)=>{if(M()){const a=j(),n=he();let l=r()?(a-e+n)/a:(e-n)/a;l=c()?1-l:l;const o=t??xe(l),_=l*(D()-h())+h();m.update(L=>(L=[...L],L[o]=_,L))}},f=i(()=>!r()),Ve=g(()=>({attributes:{"aria-disabled":i(()=>x()?"true":void 0),class:A.className$},classNames:{"au-slider":!0,"au-slider-vertical":r,"au-slider-horizontal":f,disabled:x}})),Me=g(()=>({classNames:{"au-slider-label-vertical":r,"au-slider-label-vertical-min":r,"au-slider-label":f,"au-slider-label-min":f,"au-slider-rtl":c,invisible:i(()=>!J())}})),Pe=g(()=>({classNames:{"au-slider-label-vertical":r,"au-slider-label-vertical-max":r,"au-slider-label":f,"au-slider-label-max":f,"au-slider-rtl":c,invisible:i(()=>!K())}})),ee=g(e=>({events:{keydown:t=>{const a=e().item.id,{key:n}=t,l=c(),o=v(),_=h(),L=D(),k=r();if(M()){switch(n){case"ArrowDown":z(a,m,o,H(k,l,!0));break;case"ArrowLeft":z(a,m,o,H(k,l,!1));break;case"ArrowUp":z(a,m,o,-1*H(k,l,!0));break;case"ArrowRight":z(a,m,o,-1*H(k,l,!1));break;case"Home":m.update(p=>(p=[...p],p[a]=_,p));break;case"End":m.update(p=>(p=[...p],p[a]=L,p));break;case"PageUp":break;case"PageDown":break;default:return}t.preventDefault(),t.stopPropagation()}},mousedown:t=>{t.preventDefault();const a=t.target,n=l=>{l.preventDefault();const o=r()?l.clientY:l.clientX;a.focus(),R!==o&&(R=o,F(o,e().item.id))};M()&&(V.set({}),a.focus(),document.addEventListener("mousemove",n),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",n)},{once:!0}))},touchstart:t=>{t.preventDefault();const a=n=>{n.preventDefault();const l=r()?n.touches[0].clientY:n.touches[0].clientX;t.target.focus(),R!==l&&(R=l,F(l,e().item.id))};M()&&(V.set({}),t.target.focus(),document.addEventListener("touchmove",a,{passive:!1}),document.addEventListener("touchend",()=>{document.removeEventListener("touchmove",a),document.removeEventListener("touchcancel",a)},{once:!0}),document.addEventListener("touchcancel",()=>{document.removeEventListener("touchmove",a),document.removeEventListener("touchend",a)},{once:!0}))}}}));return{...Ne({min$:h,max$:D,stepSize$:v,values$:m,sortedValues$:G,sortedHandles$:ge,minValueLabelDisplay$:J,maxValueLabelDisplay$:K,combinedLabelDisplay$:$e,interactive$:M,combinedLabelPositionLeft$:Q,combinedLabelPositionTop$:Z,progressDisplayOptions$:we,handleDisplayOptions$:P,showValueLabels$:O,showMinMaxLabels$:T,rtl$:c,...A}),patch:ne,api:{},directives:{sliderDirective:S(se,be,Ve),progressDisplayDirective:g(e=>({styles:{left:i(()=>b(e().option.left)),right:i(()=>b(e().option.right)),top:i(()=>b(e().option.top)),bottom:i(()=>b(e().option.bottom)),width:i(()=>b(e().option.width)),height:i(()=>b(e().option.height))},classNames:{"au-slider-progress":!0}})),clickableAreaDirective:g(()=>({events:{click:e=>{F(r()?e.clientY:e.clientX)}},classNames:{"au-slider-clickable-area":f,"au-slider-clickable-area-vertical":r}})),handleEventsDirective:ee,handleDirective:S(ee,g(e=>({attributes:{role:"slider","aria-valuemin":h,"aria-valuemax":D,"aria-valuenow":i(()=>e().item.value),"aria-valuetext":i(()=>e().item.ariaValueText),"aria-label":i(()=>e().item.ariaLabel),"aria-orientation":i(()=>r()?"vertical":void 0),"aria-disabled":i(()=>x()?"true":void 0),disabled:x,"aria-readonly":i(()=>Y()?"true":void 0)},styles:{left:i(()=>b(P()[e().item.id].left)),top:i(()=>b(P()[e().item.id].top))},classNames:{"au-slider-handle":!0,"au-slider-handle-vertical":r,"au-slider-handle-horizontal":f}}))),minLabelDirective:S(ce,Me),maxLabelDirective:S(de,Pe),combinedHandleLabelDisplayDirective:g(()=>({classNames:{"au-slider-label-vertical":r,"au-slider-label-vertical-now":r,"au-slider-label":f,"au-slider-label-now":f},styles:{left:i(()=>b(Q())),top:i(()=>b(Z()))}})),handleLabelDisplayDirective:g(e=>({classNames:{"au-slider-label-vertical":r,"au-slider-label-vertical-now":r,"au-slider-label":f,"au-slider-label-now":f},styles:{left:i(()=>b(P()[e().index].left)),top:i(()=>b(P()[e().index].top))}}))}}}export{Ie as c};
