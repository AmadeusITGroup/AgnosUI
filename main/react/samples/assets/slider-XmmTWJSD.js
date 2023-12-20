import{j as n,R as pe}from"./index-ciQdpp3Z.js";import{u as $e}from"./config-S60larZO.js";import{c as r,e as he,w as ge,n as ve}from"./func-B0ufEirG.js";import{w as xe,c as we,s as Le}from"./stores-NvXR8f3f.js";import{e as X,m as De,d as ye,u as Y}from"./directive--oVYA7-O.js";import{g as ee,e as Q,h as Ve,t as C,a as Z}from"./writables-z-KApZ1P.js";const Re=/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/;function K(u){var d;const o=(""+u).match(Re);return Math.max(0,(((d=o[1])==null?void 0:d.length)??0)-(+o[2]||0))}const G={min:0,max:100,stepSize:1,readonly:!1,disabled:!1,vertical:!1,className:"",ariaLabelHandle:(u,o)=>""+u,onValuesChange:ve,values:[0],showValueLabels:!0,showMinMaxLabels:!0},Me={min:Q,max:Q,stepSize:Ve(0,1/0,{strict:!0}),readonly:C,disabled:C,vertical:C,ariaLabelHandle:Z,onValuesChange:Z,values:ee,showValueLabels:C,showMinMaxLabels:C},je=(u,o,d,m,b)=>{const $=Math.pow(10,b);if(u>=d)return d;if(u<=o)return o;const h=Math.floor((u-o)*$/m);return+(((u-o)*$%m<m/2?h:h+1)*m/$+o).toFixed(b)};function Pe(u){const[{min$:o,max$:d,stepSize$:m,values$:b,ariaLabelHandle$:$,onValuesChange$:h,showValueLabels$:x,showMinMaxLabels$:D,...y},N]=xe(G,u,Me),{vertical$:f,disabled$:H,readonly$:z}=y;let V=-1;const g=r(()=>o()===d()?G.min:Math.min(o(),d())),c=r(()=>o()===d()?G.max:Math.max(o(),d())),R=r(()=>Math.max(K(m()),K(g()),K(c()))),F=r(()=>m()*Math.pow(10,R())),p=we(h,[b,g,c,F,R],([e,t,s,a,l])=>e.map(P=>je(P,t,s,a,l)),ee.equal),{directive:_,element$:S}=X(),{directive:E,element$:A}=X(),{directive:B,element$:W}=X(),w=he(S,(e,t)=>{if(!e){t({});return}const s=new ResizeObserver(()=>{t({})});return s.observe(e),()=>s.disconnect()},{}),M=ge({}),i=r(()=>{var e;return w(),M(),((e=S())==null?void 0:e.getBoundingClientRect())??{}},{equal:Object.is}),v=r(()=>{var e;return w(),M(),((e=A())==null?void 0:e.getBoundingClientRect())??{}},{equal:(e,t)=>Object.is(e,t)}),j=r(()=>{var e;return w(),M(),((e=W())==null?void 0:e.getBoundingClientRect())??{}},{equal:(e,t)=>Object.is(e,t)}),te=r(()=>f()?i().top:i().left),q=r(()=>f()?i().height:i().width),I=r(()=>[...p()].sort((e,t)=>e-t)),ae=r(()=>p().map((e,t)=>({id:t,value:e})).sort((e,t)=>e.value-t.value)),se=r(()=>{const e=$();return ae().map((t,s)=>({...t,ariaLabel:e(t.value,s,t.id)}))}),k=r(()=>p().map(e=>be(e))),T=r(()=>[...k()].sort((e,t)=>e-t)),re=r(()=>v().width/q()*100),ie=r(()=>j().width/q()*100),le=r(()=>{if(D()){if(!x())return!0}else return!1;const e=re();return!k().some(t=>t<e+1)}),ne=r(()=>{if(D()){if(!x())return!0}else return!1;const e=ie();return!k().some(t=>t>100-e-1)}),oe=r(()=>{const e=p();return e.length==2&&Math.abs(e[0]-e[1])<10}),O=r(()=>!H()&&!z()),ce=r(()=>{const e=T();return f()||e.length!=2?0:(e[0]+e[1])/2}),de=r(()=>{const e=T();return f()&&e.length==2?100-(e[0]+e[1])/2:0}),ue=r(()=>{const e=f();return k().map((t,s)=>({left:e?0:t,top:e?100-t:0}))}),me=r(()=>{const e=f(),t=T();return t.length===1?[{left:0,bottom:0,width:e?100:t[0],height:e?t[0]:100}]:t.map((s,a,l)=>({left:e?0:s,bottom:e?s:0,width:e?100:a===l.length-1?s:l[a+1]-s,height:e?a===l.length-1?s:l[a+1]-s:100})).slice(0,t.length-1)}),be=e=>{const t=g();return(e-t)*100/(c()-t)},fe=e=>{const t=p();if(t.length===1)return 0;const s=I(),a=s.find(L=>L>e*100),l=a?s.indexOf(a):s.length-1,P=s[l-1]+(s[l]-s[l-1])/2,U=s[e*100<=P?l-1:l];return t.indexOf(U)},J=(e,t)=>{if(O()){const s=q(),a=te(),l=f()?(s-e+a)/s:(e-a)/s,P=t??fe(l),U=l*(c()-g())+g();b.update(L=>(L=[...L],L[P]=U,L))}};return{...Le({min$:g,max$:c,stepSize$:m,values$:p,sortedValues$:I,sortedHandles$:se,minValueLabelDisplay$:le,maxValueLabelDisplay$:ne,combinedLabelDisplay$:oe,isInteractable$:O,combinedLabelPositionLeft$:ce,combinedLabelPositionTop$:de,progressDisplayOptions$:me,handleDisplayOptions$:ue,showValueLabels$:x,showMinMaxLabels$:D,...y}),patch:N,api:{},directives:{sliderDirective:De(_,ye(w)),minLabelDirective:E,maxLabelDirective:B},actions:{click(e){J(f()?e.clientY:e.clientX)},keydown(e,t){const{key:s}=e;if(O()){switch(s){case"ArrowDown":case"ArrowLeft":b.update(a=>(a=[...a],a[t]=p()[t]-m(),a));break;case"ArrowUp":case"ArrowRight":b.update(a=>(a=[...a],a[t]=p()[t]+m(),a));break;case"Home":b.update(a=>(a=[...a],a[t]=g(),a));break;case"End":b.update(a=>(a=[...a],a[t]=c(),a));break;case"PageUp":break;case"PageDown":break;default:return}e.preventDefault(),e.stopPropagation()}},mouseDown(e,t){e.preventDefault();const s=a=>{a.preventDefault();const l=f()?a.clientY:a.clientX;e.target.focus(),V!==l&&(V=l,J(l,t))};O()&&(e.target.focus(),document.addEventListener("mousemove",s),document.addEventListener("mouseup",()=>{document.removeEventListener("mousemove",s)},{once:!0}))}}}}function ze(u){const[{className:o,combinedLabelDisplay:d,combinedLabelPositionLeft:m,combinedLabelPositionTop:b,disabled:$,handleDisplayOptions:h,max:x,maxValueLabelDisplay:D,min:y,minValueLabelDisplay:N,progressDisplayOptions:f,readonly:H,sortedHandles:z,sortedValues:V,values:g,vertical:c,showValueLabels:R,showMinMaxLabels:F},{actions:{click:p,keydown:_,mouseDown:S},directives:{sliderDirective:E,minLabelDirective:A,maxLabelDirective:B}}]=$e(Pe,u,"slider"),W=Y(E),w=Y(A),M=Y(B);return n.jsxs("div",{ref:W,className:`au-slider ${c?"au-slider-vertical":"au-slider-horizontal"} ${o} ${$?" disabled":""}`,children:[f.map((i,v)=>n.jsx("div",{className:"au-slider-progress",style:{left:`${i.left}%`,bottom:`${i.bottom}%`,width:`${i.width}%`,height:`${i.height}%`}},v)),n.jsx("div",{className:c?"au-slider-clickable-area-vertical":"au-slider-clickable-area",onClick:i=>p(i)}),F?n.jsxs(n.Fragment,{children:[n.jsx("div",{ref:w,className:`${c?"au-slider-label-vertical au-slider-label-vertical-min":"au-slider-label au-slider-label-min"} ${N?"":" invisible"}
						`,children:y}),n.jsx("div",{ref:M,className:`${c?"au-slider-label-vertical au-slider-label-vertical-max":"au-slider-label au-slider-label-max"} ${D?"":" invisible"}`,children:x})]}):n.jsx(n.Fragment,{}),R&&d?n.jsxs("div",{className:c?"au-slider-label-vertical au-slider-label-vertical-now":"au-slider-label au-slider-label-now",style:{left:`${m}%`,top:`${b}%`},children:[V[0]," - ",V[1]]}):n.jsx(n.Fragment,{}),z.map((i,v)=>n.jsxs(pe.Fragment,{children:[n.jsx("button",{className:`au-slider-handle ${c?"au-slider-handle-vertical":"au-slider-handle-horizontal"}`,role:"slider","aria-valuemin":y,"aria-valuemax":x,"aria-valuenow":i.value,"aria-valuetext":""+i.value,"aria-label":i.ariaLabel,"aria-readonly":H?"true":void 0,"aria-disabled":$?"true":void 0,"aria-orientation":c?"vertical":void 0,disabled:$,style:c?{top:`${h[i.id].top}%`}:{left:`${h[i.id].left}%`},onKeyDown:j=>_(j,i.id),onMouseDown:j=>S(j,i.id),children:" "}),R&&!d?n.jsx("div",{className:c?"au-slider-label-vertical au-slider-label-vertical-now":"au-slider-label au-slider-label-now",style:{left:`${h[v].left}%`,top:`${h[v].top}%`},children:g[v]}):n.jsx(n.Fragment,{})]},i.id))]})}export{ze as S};