import{c as F,j as z,l as T,m as N,n as M,o as f}from"./chunk-E3OLLZLM.js";import{D as g,Db as c,La as v,Pa as S,Ua as C,Va as w,W as _,Za as D,_ as d,_a as m,bb as b,hb as r,ib as l,ka as y,nb as p,pa as o,wb as h,yb as k}from"./chunk-KBDLISNL.js";var x=(()=>{let t=class t extends T{constructor(){super(...arguments),this._zone=_(S),this.disabled=o(void 0,{transform:M}),this.min=o(void 0,{transform:f}),this.max=o(void 0,{transform:f}),this.stepSize=o(void 0,{transform:f}),this.values=C([0]),this.className=o(),this._widget=N({factory:F,widgetName:"slider",events:{onValuesChange:n=>{this.values.set(n)}}})}onKeyDown(n){this.widget.actions.keydown(n,0),this._zone.onStable.pipe(g(1)).subscribe(()=>{n.target.focus()})}};t.\u0275fac=(()=>{let n;return function(e){return(n||(n=y(t)))(e||t)}})(),t.\u0275cmp=d({type:t,selectors:[["app-slider"]],inputs:{disabled:[1,"disabled"],min:[1,"min"],max:[1,"max"],stepSize:[1,"stepSize"],values:[1,"values"],className:[1,"className"]},outputs:{values:"valuesChange"},standalone:!0,features:[w,c],decls:1,vars:8,consts:[["type","range",3,"click","keydown","mousedown","touchstart","auUse","min","max","value","step"]],template:function(a,e){a&1&&(r(0,"input",0),p("click",function(i){return e.widget.actions.click(i)})("keydown",function(i){return e.onKeyDown(i)})("mousedown",function(i){return e.widget.actions.mouseDown(i,0)})("touchstart",function(i){return e.widget.actions.touchStart(i,0)}),l()),a&2&&(b("range"),m("auUse",e.widget.directives.sliderDirective)("min",e.state().min)("max",e.state().max)("value",e.state().sortedHandles[0].value)("step",e.state().stepSize),D("aria-label",e.state().sortedHandles[0].ariaLabel))},dependencies:[z],encapsulation:2,changeDetection:0});let s=t;return s})();var W=(()=>{let t=class t{constructor(){this.values=[20]}valuesChange(n){this.values=n}};t.\u0275fac=function(a){return new(a||t)},t.\u0275cmp=d({type:t,selectors:[["ng-component"]],standalone:!0,features:[c],decls:4,vars:2,consts:[[1,"text-lg","mb-2"],["min","0","max","100","stepSize","1",3,"valuesChange","values"]],template:function(a,e){a&1&&(r(0,"h2",0),h(1,"DaisyUI Example"),l(),r(2,"app-slider",1),p("valuesChange",function(i){return e.valuesChange(i)}),l(),h(3)),a&2&&(v(2),m("values",e.values),v(),k(" Value: ",e.values," "))},dependencies:[x],encapsulation:2});let s=t;return s})();export{W as default};
