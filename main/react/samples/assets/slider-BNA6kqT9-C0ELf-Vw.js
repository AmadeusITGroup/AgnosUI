import{f as i,z as Z,w as qe,m as j,a as f,r as y,n as Fe}from"./dom-gfxqXJpK-C1tLMV8i.js";import{w as We,d as Xe,t as z,s as Ye}from"./stores-DmFkKWJa.js";import{h as be,t as Ue,a as $,j as ue,b as q,e as de}from"./writables-DCiBdIBK-BiZSR1O4.js";import{c as Ge}from"./resizeObserver-Ft7JDyiK.js";const Je=/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/;function C(c){var u;const m=(""+c).match(Je);return Math.max(0,(((u=m[1])==null?void 0:u.length)??0)-(+m[2]||0))}const ee={min:0,max:100,stepSize:1,readonly:!1,disabled:!1,vertical:!1,className:"",ariaLabel:()=>"Value",ariaLabelledBy:()=>"",ariaValueText:()=>"",onValuesChange:Fe,values:[0],showValueLabels:!0,showMinMaxLabels:!0,showTicks:!1,showTickValues:!0,tickInterval:0,rtl:!1},Ke={min:de,max:de,stepSize:ue(0,1/0,{strict:!0}),readonly:$,disabled:$,vertical:$,ariaLabel:q,ariaLabelledBy:q,ariaValueText:q,onValuesChange:q,values:be,showValueLabels:$,showMinMaxLabels:$,showTicks:$,showTickValues:$,tickInterval:ue(0,1/0,{strict:!0}),rtl:$,className:Ue},me=(c,u,m,h,o)=>{const P=Math.pow(10,o);if(c>=m)return m;if(c<=u)return u;const B=Math.floor((c-u)*P/h);return+(((c-u)*P%h<h/2?B:B+1)*h/P+u).toFixed(o)},F=(c,u,m,h)=>{u.update(o=>(o=[...o],o[c]=o[c]+m*h,o))},W=(c,u,m)=>c&&u?m?1:-1:c&&!u?-1:!c&&u?m?-1:1:!c&&!u?-1:1,d=c=>c!=null?`${c}%`:"";function at(c){const[{min$:u,max$:m,stepSize$:h,rtl$:o,values$:P,ariaLabel$:B,ariaLabelledBy$:he,ariaValueText$:ve,onValuesChange$:pe,showValueLabels$:X,showMinMaxLabels$:Y,showTicks$:k,showTickValues$:E,tickInterval$:te,...U},fe]=We(ee,c,Ke),{vertical$:s,disabled$:T,readonly$:ae}=U;let R=-1;const L=i(()=>{const e=u(),t=m();return e===t?ee.min:Math.min(e,t)}),w=i(()=>{const e=u(),t=m();return e===t?ee.max:Math.max(e,t)}),G=i(()=>Math.max(C(h()),C(L()),C(w()))),ie=i(()=>h()*Math.pow(10,G())),b=Xe(P,pe,e=>{const t=L(),a=w(),r=ie(),l=G();return e.map(n=>me(n,t,a,r,l))},be.equal),{directive:Le,element$:ge}=Z(),{directive:we,element$:De}=Z(),{directive:$e,element$:ye}=Z(),{directive:ke,dimensions$:J}=Ge(),S=qe({}),O=i(()=>{var e;return J(),S(),((e=ge())==null?void 0:e.getBoundingClientRect())??{}},{equal:Object.is}),Ve=i(()=>{var e;return J(),S(),((e=De())==null?void 0:e.getBoundingClientRect())??{}},{equal:(e,t)=>Object.is(e,t)}),Me=i(()=>{var e;return J(),S(),((e=ye())==null?void 0:e.getBoundingClientRect())??{}},{equal:(e,t)=>Object.is(e,t)}),xe=i(()=>s()?O().top:O().left),K=i(()=>s()?O().height:O().width),I=i(()=>[...b()].sort((e,t)=>e-t)),Pe=i(()=>b().map((e,t)=>({id:t,value:e})).sort((e,t)=>e.value-t.value)),Te=i(()=>{const e=B(),t=ve(),a=he();return Pe().map((r,l)=>({...r,ariaLabel:a(l)?void 0:e(l),ariaLabelledBy:a(l)||void 0,ariaValueText:t(r.value,l)||void 0}))}),V=i(()=>b().map(e=>A(e))),Q=i(()=>[...V()].sort((e,t)=>e-t)),Se=i(()=>Ve().width/K()*100),Ne=i(()=>Me().width/K()*100),_e=i(()=>X()&&(!k()||!E())),le=i(()=>{if(!Y()||k()&&E())return!1;if(!X())return!0;const e=Se();return o()?!V().some(t=>100-t>100-e-1):!V().some(t=>t<e+1)}),se=i(()=>{if(!Y()||k()&&E())return!1;if(!X())return!0;const e=Ne();return o()?!V().some(t=>100-t<e+1):!V().some(t=>t>100-e-1)}),ze=i(()=>{const e=b();return e.length==2&&Math.abs(e[0]-e[1])*100/(w()-L())<10}),N=i(()=>!T()&&!ae()),re=i(()=>{const e=Q(),t=(e[0]+e[1])/2;return s()||e.length!=2?0:o()?100-t:t}),ne=i(()=>{const e=Q(),t=100-(e[0]+e[1])/2;return s()&&e.length==2?o()?100-t:t:0}),_=i(()=>{const e=s(),t=o();return V().map(a=>({left:t?e?null:100-a:e?null:a,top:t?e?a:null:e?100-a:null}))}),Be=i(()=>{const e=s(),t=Q(),a=o();return t.length===1?[{left:e||a?null:0,right:e?null:a?0:null,bottom:e?a?null:0:null,top:e&&a?0:null,width:e?100:t[0],height:e?t[0]:100,id:0}]:t.map((r,l,n)=>({left:e||a?null:r,right:e?null:a?n[l]:null,bottom:e?a?null:r:null,top:e&&a?n[l]:null,width:e?100:l===n.length-1?r:n[l+1]-r,height:e?l===n.length-1?r:n[l+1]-r:100,id:l})).slice(0,t.length-1)}),Ee=i(()=>{if(!k())return[];const e=s(),t=L(),a=w(),r=o(),l=E(),n=te()||h(),D=[],g=ie(),M=G(),p=x=>!!r!=!!e?100-x:x;for(let x=t;x<a;x+=n){const ce=me(x,t,a,g,M),je=A(ce);D.push({position:p(je),selected:!1,value:ce,displayLabel:l})}return D.push({position:p(100),selected:!1,value:a,displayLabel:l}),D}),Re=i(()=>{const e=I(),t=a=>{const r=e.length>1,l=r?e[e.length-1]:e[0],n=r?e[0]:0;return a<=l&&a>=n};return Ee().map(a=>({...a,selected:t(a.value)}))}),A=e=>{const t=L(),a=w();return(e-t)*100/(a-t)},Oe=e=>{const t=b();if(t.length===1)return 0;const a=I(),r=a.find(g=>A(g)>e*100),l=r?a.indexOf(r):a.length-1,n=A(a[l-1]+(a[l]-a[l-1])/2),D=a[e*100<=n?l-1:l];return t.indexOf(D)},H=(e,t)=>{if(N()){const a=K(),r=xe();let l=s()?(a-e+r)/a:(e-r)/a;l=o()?1-l:l;const n=t??Oe(l),D=l*(w()-L())+L();b.update(g=>(g=[...g],g[n]=D,g))}},v=i(()=>!s()),Ie=f(()=>({attributes:{"aria-disabled":i(()=>T()?"true":void 0),class:U.className$},classNames:{"au-slider":z,"au-slider-vertical":s,"au-slider-horizontal":v,disabled:T}})),Ae=f(()=>({classNames:{"au-slider-label-vertical":s,"au-slider-label-vertical-min":s,"au-slider-label":v,"au-slider-label-min":v,"au-slider-rtl":o,invisible:i(()=>!le())},attributes:{"aria-hidden":y("true")}})),He=f(()=>({classNames:{"au-slider-label-vertical":s,"au-slider-label-vertical-max":s,"au-slider-label":v,"au-slider-label-max":v,"au-slider-rtl":o,invisible:i(()=>!se())},attributes:{"aria-hidden":y("true")}})),oe=f(e=>({events:{keydown:t=>{const a=e().item.id,{key:r}=t,l=o(),n=h(),D=L(),g=w(),M=s();if(N()){switch(r){case"ArrowDown":F(a,b,n,W(M,l,!0));break;case"ArrowLeft":F(a,b,n,W(M,l,!1));break;case"ArrowUp":F(a,b,n,-1*W(M,l,!0));break;case"ArrowRight":F(a,b,n,-1*W(M,l,!1));break;case"Home":b.update(p=>(p=[...p],p[a]=D,p));break;case"End":b.update(p=>(p=[...p],p[a]=g,p));break;case"PageUp":break;case"PageDown":break;default:return}t.preventDefault()}},mousedown:t=>{t.preventDefault();const a=t.target,r=l=>{l.preventDefault();const n=s()?l.clientY:l.clientX;a.focus(),R!==n&&(R=n,H(n,e().item.id))};N()&&(S.set({}),a.focus(),document.addEventListener("mousemove",r),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",r)},{once:!0}))},touchstart:t=>{const a=r=>{r.preventDefault();const l=s()?r.touches[0].clientY:r.touches[0].clientX;t.target.focus(),R!==l&&(R=l,H(l,e().item.id))};N()&&(S.set({}),t.target.focus(),document.addEventListener("touchmove",a,{passive:!1}),document.addEventListener("touchend",()=>{document.removeEventListener("touchmove",a),document.removeEventListener("touchcancel",a)},{once:!0}),document.addEventListener("touchcancel",()=>{document.removeEventListener("touchmove",a),document.removeEventListener("touchend",a)},{once:!0}))}}}));return{...Ye({min$:L,max$:w,stepSize$:h,values$:b,sortedValues$:I,sortedHandles$:Te,minValueLabelDisplay$:le,maxValueLabelDisplay$:se,combinedLabelDisplay$:ze,interactive$:N,combinedLabelPositionLeft$:re,combinedLabelPositionTop$:ne,progressDisplayOptions$:Be,handleDisplayOptions$:_,showValueLabels$:_e,showMinMaxLabels$:Y,showTicks$:k,rtl$:o,ticks$:Re,...U}),patch:fe,api:{},directives:{sliderDirective:j(Le,ke,Ie),progressDisplayDirective:f(e=>({styles:{left:i(()=>d(e().option.left)),right:i(()=>d(e().option.right)),top:i(()=>d(e().option.top)),bottom:i(()=>d(e().option.bottom)),width:i(()=>d(e().option.width)),height:i(()=>d(e().option.height))},classNames:{"au-slider-progress":z}})),clickableAreaDirective:f(()=>({events:{click:e=>{H(s()?e.clientY:e.clientX)}},classNames:{"au-slider-clickable-area":v,"au-slider-clickable-area-vertical":s,"au-slider-clickable-area-with-ticks":i(()=>k()&&te()===0)}})),handleEventsDirective:oe,handleDirective:j(oe,f(e=>({attributes:{role:y("slider"),"aria-valuemin":L,"aria-valuemax":w,"aria-valuenow":i(()=>e().item.value),"aria-valuetext":i(()=>e().item.ariaValueText),"aria-label":i(()=>e().item.ariaLabel),"aria-labelledBy":i(()=>e().item.ariaLabelledBy),"aria-orientation":i(()=>s()?"vertical":void 0),"aria-disabled":i(()=>T()?"true":void 0),disabled:T,"aria-readonly":i(()=>ae()?"true":void 0)},styles:{left:i(()=>d(_()[e().item.id].left)),top:i(()=>d(_()[e().item.id].top))},classNames:{"au-slider-handle":z,"au-slider-handle-vertical":s,"au-slider-handle-horizontal":v}}))),minLabelDirective:j(we,Ae),maxLabelDirective:j($e,He),combinedHandleLabelDisplayDirective:f(()=>({classNames:{"au-slider-label-vertical":s,"au-slider-label-vertical-now":s,"au-slider-label":v,"au-slider-label-now":v},styles:{left:i(()=>d(re())),top:i(()=>d(ne()))},attributes:{"aria-hidden":y("true")}})),handleLabelDisplayDirective:f(e=>({classNames:{"au-slider-label-vertical":s,"au-slider-label-vertical-now":s,"au-slider-label":v,"au-slider-label-now":v},styles:{left:i(()=>d(_()[e().index].left)),top:i(()=>d(_()[e().index].top))},attributes:{"aria-hidden":y("true")}})),tickDirective:f(e=>({classNames:{"au-slider-tick":z,"au-slider-tick-horizontal":v,"au-slider-tick-vertical":s},styles:{left:i(()=>s()?null:d(e().tick.position)),top:i(()=>s()?d(e().tick.position):null)},events:{click:t=>{H(s()?t.clientY:t.clientX)}},attributes:{"aria-hidden":y("true")}})),tickLabelDirective:f(e=>({classNames:{"au-slider-tick-label":z,"au-slider-tick-label-vertical":s,"au-slider-tick-label-now":i(()=>I().some(t=>t===e().tick.value))},styles:{left:i(()=>s()?null:d(e().tick.position)),top:i(()=>s()?d(e().tick.position):null)},attributes:{"aria-hidden":y("true")}}))}}}export{at as c};
