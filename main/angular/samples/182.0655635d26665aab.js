"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[182],{2182:(S,g,l)=>{l.r(g),l.d(g,{default:()=>A});var u=l(1002),b=l(8835);class d extends b.w0{constructor(t,s){super()}schedule(t,s=0){return this}}const f={setInterval(r,t,...s){const{delegate:e}=f;return e?.setInterval?e.setInterval(r,t,...s):setInterval(r,t,...s)},clearInterval(r){const{delegate:t}=f;return(t?.clearInterval||clearInterval)(r)},delegate:void 0};var _=l(6422);const p={now:()=>(p.delegate||Date).now(),delegate:void 0};class h{constructor(t,s=h.now){this.schedulerActionCtor=t,this.now=s}schedule(t,s=0,e){return new this.schedulerActionCtor(this,t).schedule(e,s)}}h.now=p.now;const C=new class x extends h{constructor(t,s=h.now){super(t,s),this.actions=[],this._active=!1}flush(t){const{actions:s}=this;if(this._active)return void s.push(t);let e;this._active=!0;do{if(e=t.execute(t.state,t.delay))break}while(t=s.shift());if(this._active=!1,e){for(;t=s.shift();)t.unsubscribe();throw e}}}(class m extends d{constructor(t,s){super(t,s),this.scheduler=t,this.work=s,this.pending=!1}schedule(t,s=0){var e;if(this.closed)return this;this.state=t;const a=this.id,i=this.scheduler;return null!=a&&(this.id=this.recycleAsyncId(i,a,s)),this.pending=!0,this.delay=s,this.id=null!==(e=this.id)&&void 0!==e?e:this.requestAsyncId(i,this.id,s),this}requestAsyncId(t,s,e=0){return f.setInterval(t.flush.bind(t,this),e)}recycleAsyncId(t,s,e=0){if(null!=e&&this.delay===e&&!1===this.pending)return s;null!=s&&f.clearInterval(s)}execute(t,s){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const e=this._execute(t,s);if(e)return e;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,s){let a,e=!1;try{this.work(t)}catch(i){e=!0,a=i||new Error("Scheduled action threw falsy error")}if(e)return this.unsubscribe(),a}unsubscribe(){if(!this.closed){const{id:t,scheduler:s}=this,{actions:e}=s;this.work=this.state=this.scheduler=null,this.pending=!1,(0,_.P)(e,this),null!=t&&(this.id=this.recycleAsyncId(s,t,null)),this.delay=null,super.unsubscribe()}}}),o=C;var P=l(7531),w=l(9667);var E=l(586),M=l(7509),n=l(6442);function O(r,t){1&r&&n._UZ(0,"div",13)(1,"div",14)(2,"div",15)}function B(r,t){if(1&r&&(n.TgZ(0,"div",9)(1,"div",10)(2,"div",11)(3,"div",12),n.YNc(4,O,3,0),n.qZA()()()()),2&r){const s=n.oxw();n.xp6(3),n.Udp("height",1.7*s.value,"px"),n.xp6(1),n.um2(4,s.value>=50?4:-1)}}let A=(()=>{class r{constructor(){this.value=0}start(){this.subscription||(this.subscription=function y(r=0,t=C){return r<0&&(r=0),function D(r=0,t,s=o){let e=-1;return null!=t&&((0,w.K)(t)?s=t:e=t),new P.y(a=>{let i=function v(r){return r instanceof Date&&!isNaN(r)}(r)?+r-s.now():r;i<0&&(i=0);let c=0;return s.schedule(function(){a.closed||(a.next(c++),0<=e?this.schedule(void 0,e):a.complete())},i)})}(r,r,t)}(500).pipe(function T(r,t=!1){return(0,E.e)((s,e)=>{let a=0;s.subscribe((0,M.x)(e,i=>{const c=r(i,a++);(c||t)&&e.next(i),!c&&e.complete()}))})}(()=>this.value<100)).subscribe(()=>{this.value+=10}))}stop(s=!1){this.subscription?.unsubscribe(),this.subscription=void 0,s&&(this.value=0)}toggleProgress(){this.subscription?this.stop():this.start()}ngOnDestroy(){this.stop()}static#t=this.\u0275fac=function(e){return new(e||r)};static#e=this.\u0275cmp=n.Xpm({type:r,selectors:[["ng-component"]],standalone:!0,features:[n.jDz],decls:16,vars:6,consts:[[1,"d-flex","align-items-center","flex-wrap"],[2,"width","350px"],["auProgressbar","",3,"auValue"],["progressbar",""],["auProgressbarContent",""],[1,"d-flex","flex-column","justify-content-evenly","h-100","ms-5"],["role","group",1,"btn-group"],[1,"btn","btn-outline-primary",3,"disabled","click"],[1,"mt-3"],[1,"position-relative",2,"height","300px"],[1,"cup"],[1,"cup-fill-parent"],[1,"cup-fill"],[1,"bubble","bubble-1"],[1,"bubble","bubble-2"],[1,"bubble","bubble-3"]],template:function(e,a){if(1&e&&(n.TgZ(0,"div",0)(1,"div",1)(2,"div",2,3),n.YNc(4,B,5,3,"ng-template",4),n.qZA()(),n.TgZ(5,"div",5)(6,"div",6)(7,"button",7),n.NdJ("click",function(){return a.start()}),n._uU(8,"Start"),n.qZA(),n.TgZ(9,"button",7),n.NdJ("click",function(){return a.toggleProgress()}),n._uU(10),n.qZA(),n.TgZ(11,"button",7),n.NdJ("click",function(){return a.stop(!0)}),n._uU(12,"Reset"),n.qZA()(),n.TgZ(13,"p",8)(14,"span"),n._uU(15),n.qZA()()()()),2&e){const i=n.MAs(3);n.xp6(2),n.Q6J("auValue",a.value),n.xp6(5),n.Q6J("disabled",i.state().started),n.xp6(2),n.Q6J("disabled",!i.state().started||i.state().finished),n.xp6(1),n.hij(" ",a.subscription?"Pause":"Resume"," "),n.xp6(1),n.Q6J("disabled",!i.state().started),n.xp6(4),n.Oqu(0===a.value?"Need to wake up.":a.value<100?"Retrieving coffee... "+a.value+"%":"Ready to work !")}},dependencies:[u.O1,u.HT],styles:['.cup[_ngcontent-%COMP%]{padding:0;height:210px;width:190px;border:10px solid #030303;position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;border-radius:20px 20px 60px 60px}.cup-fill-parent[_ngcontent-%COMP%]{overflow:hidden;height:100%;position:relative;border-radius:0 0 50px 50px}.cup-fill[_ngcontent-%COMP%]{background-image:url(\'data:image/svg+xml,%3Csvg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="340" height="210" viewBox="0 0 340 210"%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:url(%23linear-gradient);%7D%3C/style%3E%3ClinearGradient id="linear-gradient" x1="170" y1="0" x2="170" y2="220" gradientUnits="userSpaceOnUse"%3E%3Cstop offset="0" stop-color="%23faab2b"/%3E%3Cstop offset="1" stop-color="%23fb8b1b"/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath class="cls-1" d="M0,210V6Q42.5,-6,85,6T170,6T255,6T340,6V210"/%3E%3C/svg%3E\'),url(\'data:image/svg+xml,%3Csvg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="340" height="210" viewBox="0 0 340 210"%3E%3Cdefs%3E%3Cstyle%3E.cls-2%7Bfill:%23fbd383;%7D%3C/style%3E%3C/defs%3E%3Cpath class="cls-2" d="M0,210V6Q42.5,18,85,6T170,6T255,6T340,6V210"/%3E%3C/svg%3E\');background-position:0 0,0 0;background-repeat:repeat-x;background-clip:content-box;animation:_ngcontent-%COMP%_coffee 3s infinite linear;position:absolute;bottom:0;width:100%;transition:height .6s ease;overflow-y:hidden}@keyframes _ngcontent-%COMP%_coffee{to{background-position:-200% 0,-100% 0}}.cup[_ngcontent-%COMP%]:before{content:"";position:absolute;height:80px;width:60px;border:10px solid #030303;border-left:none;right:-70px;top:30px;border-radius:0 30px 80px 0}.cup[_ngcontent-%COMP%]:after{position:absolute;content:"";height:10px;width:260px;background-color:#030303;left:-45px;bottom:-10px;border-radius:10px}.bubble[_ngcontent-%COMP%]{height:15px;width:15px;background-color:#fbbe08;border-radius:50%;position:absolute;animation:_ngcontent-%COMP%_bubbles forwards infinite;opacity:.6}@keyframes _ngcontent-%COMP%_bubbles{to{bottom:calc(100% - 20px);opacity:0}}.bubble-1[_ngcontent-%COMP%]{left:30px;bottom:10px;animation-delay:.5s;animation-duration:3s}.bubble-2[_ngcontent-%COMP%]{left:80px;bottom:35px;animation-delay:1.2s;animation-duration:4s}.bubble-3[_ngcontent-%COMP%]{left:140px;bottom:30px;animation-duration:4s}']})}return r})()},3928:(S,g,l)=>{l.d(g,{i:()=>b});var u=l(6442);let b=(()=>{class d{constructor(){this.templateRef=(0,u.f3M)(u.Rgc)}ngOnInit(){this.auSlotDefault.update(_=>({..._,slotDefault:this.templateRef}))}static#t=this.\u0275fac=function(m){return new(m||d)};static#e=this.\u0275dir=u.lG2({type:d,selectors:[["","auSlotDefault",""]],inputs:{auSlotDefault:"auSlotDefault"},standalone:!0})}return d})()},1002:(S,g,l)=>{l.d(g,{HT:()=>n,O1:()=>r});var u=l(8176),b=l(1358),d=l(267),f=l(1756),_=l(5261),m=l(1177),p=l(9844),h=l(3928),x=l(7947),C=l(6289),o=l(6442);const P=["content"];function w(t,s){}const v=(t,s)=>({state:t,widget:s});function D(t,s){if(1&t&&(o.TgZ(0,"div",2)(1,"div",3),o.YNc(2,w,0,0,"ng-template",4),o.qZA()()),2&t){const e=s.state,a=s.widget;o.Udp("height",e.height),o.xp6(1),o.Udp("width",e.percentage,"%"),o.ekj("progress-bar-striped",e.striped)("progress-bar-animated",e.animated),o.Q6J("ngClass",e.className),o.xp6(1),o.Q6J("auSlot",e.slotDefault)("auSlotProps",o.WLB(11,v,e,a))}}const y=["auProgressbar",""];function E(t,s){1&t&&o.Hsn(0)}function M(t,s){}const T=["*"];let n=(()=>{class t{constructor(){this.templateRef=(0,o.f3M)(o.Rgc)}static ngTemplateContextGuard(e,a){return!0}static#t=this.\u0275fac=function(a){return new(a||t)};static#e=this.\u0275dir=o.lG2({type:t,selectors:[["ng-template","auProgressbarContent",""]],standalone:!0})}return t})();const A={slotContent:new b.T((()=>{class t{static#t=this.\u0275fac=function(a){return new(a||t)};static#e=this.\u0275cmp=o.Xpm({type:t,selectors:[["ng-component"]],viewQuery:function(a,i){if(1&a&&o.Gf(P,7),2&a){let c;o.iGM(c=o.CRH())&&(i.content=c.first)}},standalone:!0,features:[o.jDz],decls:2,vars:0,consts:[["auProgressbarContent",""],["content",""],[1,"progress"],[1,"progress-bar",3,"ngClass"],[3,"auSlot","auSlotProps"]],template:function(a,i){1&a&&o.YNc(0,D,3,14,"ng-template",0,1,o.W1O)},dependencies:[C.mk,u.N,n],encapsulation:2,changeDetection:0})}return t})(),"content")};let r=(()=>{class t{constructor(){this.defaultSlots=(0,x.fZ)(A),this._widget=(0,d.B)({factory:f.HU,widgetName:"progressbar",defaultConfig:this.defaultSlots,events:{}}),this.widget=(0,_.K)(this._widget),this.api=this._widget.api,this.state=(0,m.u6)(this._widget.state$)}ngAfterContentChecked(){this._widget.patch({slotContent:this.slotContentFromContent?.templateRef})}ngOnChanges(e){(0,m.YW)(this._widget.patch,e)}static#t=this.\u0275fac=function(a){return new(a||t)};static#e=this.\u0275cmp=o.Xpm({type:t,selectors:[["","auProgressbar",""]],contentQueries:function(a,i,c){if(1&a&&o.Suo(c,n,5),2&a){let I;o.iGM(I=o.CRH())&&(i.slotContentFromContent=I.first)}},hostAttrs:["role","progressbar"],hostVars:5,hostBindings:function(a,i){2&a&&o.uIk("aria-label",i.state().ariaLabel||void 0)("aria-valuenow",i.state().value)("aria-valuemin",i.state().min)("aria-valuemax",i.state().max)("aria-valuetext",i.state().ariaValueText)},inputs:{ariaLabel:["auAriaLabel","ariaLabel"],min:["auMin","min",p.B],max:["auMax","max",p.B],value:["auValue","value",p.B],className:["auClassName","className"],slotDefault:["auSlotDefault","slotDefault"],slotContent:["auSlotContent","slotContent"],height:["auHeight","height"],animated:["auAnimated","animated",p.P],striped:["auStriped","striped",p.P],ariaValueTextFn:["auAriaValueTextFn","ariaValueTextFn"]},standalone:!0,features:[o.Xq5,o.TTD,o.jDz],attrs:y,ngContentSelectors:T,decls:2,vars:6,consts:[[3,"auSlotDefault"],[3,"auSlot","auSlotProps"]],template:function(a,i){1&a&&(o.F$t(),o.YNc(0,E,1,0,"ng-template",0)(1,M,0,0,"ng-template",1)),2&a&&(o.Q6J("auSlotDefault",i.defaultSlots),o.xp6(1),o.Q6J("auSlot",i.state().slotContent)("auSlotProps",o.WLB(3,v,i.state(),i.widget)))},dependencies:[u.N,h.i],encapsulation:2,changeDetection:0})}return t})()}}]);