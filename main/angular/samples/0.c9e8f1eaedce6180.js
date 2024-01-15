"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[0],{7e3:(Z,d,l)=>{l.r(d),l.d(d,{default:()=>I});var h=l(6937),b=l(8870);class g extends b.w0{constructor(t,e){super()}schedule(t,e=0){return this}}const u={setInterval(i,t,...e){const{delegate:n}=u;return n?.setInterval?n.setInterval(i,t,...e):setInterval(i,t,...e)},clearInterval(i){const{delegate:t}=u;return(t?.clearInterval||clearInterval)(i)},delegate:void 0};var x=l(7676);const p={now:()=>(p.delegate||Date).now(),delegate:void 0};class a{constructor(t,e=a.now){this.schedulerActionCtor=t,this.now=e}schedule(t,e=0,n){return new this.schedulerActionCtor(this,t).schedule(n,e)}}a.now=p.now;const f=new class m extends a{constructor(t,e=a.now){super(t,e),this.actions=[],this._active=!1}flush(t){const{actions:e}=this;if(this._active)return void e.push(t);let n;this._active=!0;do{if(n=t.execute(t.state,t.delay))break}while(t=e.shift());if(this._active=!1,n){for(;t=e.shift();)t.unsubscribe();throw n}}}(class v extends g{constructor(t,e){super(t,e),this.scheduler=t,this.work=e,this.pending=!1}schedule(t,e=0){var n;if(this.closed)return this;this.state=t;const o=this.id,r=this.scheduler;return null!=o&&(this.id=this.recycleAsyncId(r,o,e)),this.pending=!0,this.delay=e,this.id=null!==(n=this.id)&&void 0!==n?n:this.requestAsyncId(r,this.id,e),this}requestAsyncId(t,e,n=0){return u.setInterval(t.flush.bind(t,this),n)}recycleAsyncId(t,e,n=0){if(null!=n&&this.delay===n&&!1===this.pending)return e;null!=e&&u.clearInterval(e)}execute(t,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;const n=this._execute(t,e);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))}_execute(t,e){let o,n=!1;try{this.work(t)}catch(r){n=!0,o=r||new Error("Scheduled action threw falsy error")}if(n)return this.unsubscribe(),o}unsubscribe(){if(!this.closed){const{id:t,scheduler:e}=this,{actions:n}=e;this.work=this.state=this.scheduler=null,this.pending=!1,(0,x.P)(n,this),null!=t&&(this.id=this.recycleAsyncId(e,t,null)),this.delay=null,super.unsubscribe()}}}),C=f;var w=l(7815),y=l(2042);var A=l(5849),_=l(6735),s=l(6985);function M(i,t){1&i&&s._UZ(0,"div",13)(1,"div",14)(2,"div",15)}function O(i,t){if(1&i&&(s.TgZ(0,"div",9)(1,"div",10)(2,"div",11)(3,"div",12),s.YNc(4,M,3,0),s.qZA()()()()),2&i){const e=s.oxw();s.xp6(3),s.Udp("height",1.7*e.value,"px"),s.xp6(),s.um2(4,e.value>=50?4:-1)}}let I=(()=>{class i{constructor(){this.value=0}start(){this.subscription||(this.subscription=function E(i=0,t=f){return i<0&&(i=0),function k(i=0,t,e=C){let n=-1;return null!=t&&((0,y.K)(t)?e=t:n=t),new w.y(o=>{let r=function P(i){return i instanceof Date&&!isNaN(i)}(i)?+i-e.now():i;r<0&&(r=0);let c=0;return e.schedule(function(){o.closed||(o.next(c++),0<=n?this.schedule(void 0,n):o.complete())},r)})}(i,i,t)}(500).pipe(function T(i,t=!1){return(0,A.e)((e,n)=>{let o=0;e.subscribe((0,_.x)(n,r=>{const c=i(r,o++);(c||t)&&n.next(r),!c&&n.complete()}))})}(()=>this.value<100)).subscribe(()=>{this.value+=10}))}stop(e=!1){this.subscription?.unsubscribe(),this.subscription=void 0,e&&(this.value=0)}toggleProgress(){this.subscription?this.stop():this.start()}ngOnDestroy(){this.stop()}static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275cmp=s.Xpm({type:i,selectors:[["ng-component"]],standalone:!0,features:[s.jDz],decls:16,vars:6,consts:[[1,"d-flex","align-items-center","flex-wrap"],[2,"width","350px"],["auProgressbar","",3,"auValue"],["progressbar",""],["auProgressbarContent",""],[1,"d-flex","flex-column","justify-content-evenly","h-100","ms-5"],["role","group",1,"btn-group"],[1,"btn","btn-outline-primary",3,"disabled","click"],[1,"mt-3"],[1,"position-relative",2,"height","300px"],[1,"cup"],[1,"cup-fill-parent"],[1,"cup-fill"],[1,"bubble","bubble-1"],[1,"bubble","bubble-2"],[1,"bubble","bubble-3"]],template:function(n,o){if(1&n&&(s.TgZ(0,"div",0)(1,"div",1)(2,"div",2,3),s.YNc(4,O,5,3,"ng-template",4),s.qZA()(),s.TgZ(5,"div",5)(6,"div",6)(7,"button",7),s.NdJ("click",function(){return o.start()}),s._uU(8,"Start"),s.qZA(),s.TgZ(9,"button",7),s.NdJ("click",function(){return o.toggleProgress()}),s._uU(10),s.qZA(),s.TgZ(11,"button",7),s.NdJ("click",function(){return o.stop(!0)}),s._uU(12,"Reset"),s.qZA()(),s.TgZ(13,"p",8)(14,"span"),s._uU(15),s.qZA()()()()),2&n){const r=s.MAs(3);s.xp6(2),s.Q6J("auValue",o.value),s.xp6(5),s.Q6J("disabled",r.state().started),s.xp6(2),s.Q6J("disabled",!r.state().started||r.state().finished),s.xp6(),s.hij(" ",o.subscription?"Pause":"Resume"," "),s.xp6(),s.Q6J("disabled",!r.state().started),s.xp6(4),s.Oqu(0===o.value?"Need to wake up.":o.value<100?"Retrieving coffee... "+o.value+"%":"Ready to work !")}},dependencies:[h.O1,h.HT],styles:['.cup[_ngcontent-%COMP%]{padding:0;height:210px;width:190px;border:10px solid #030303;position:absolute;transform:translate(-50%,-50%);top:50%;left:50%;border-radius:20px 20px 60px 60px}.cup-fill-parent[_ngcontent-%COMP%]{overflow:hidden;height:100%;position:relative;border-radius:0 0 50px 50px}.cup-fill[_ngcontent-%COMP%]{background-image:url(\'data:image/svg+xml,%3Csvg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="340" height="210" viewBox="0 0 340 210"%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:url(%23linear-gradient);%7D%3C/style%3E%3ClinearGradient id="linear-gradient" x1="170" y1="0" x2="170" y2="220" gradientUnits="userSpaceOnUse"%3E%3Cstop offset="0" stop-color="%23faab2b"/%3E%3Cstop offset="1" stop-color="%23fb8b1b"/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath class="cls-1" d="M0,210V6Q42.5,-6,85,6T170,6T255,6T340,6V210"/%3E%3C/svg%3E\'),url(\'data:image/svg+xml,%3Csvg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="340" height="210" viewBox="0 0 340 210"%3E%3Cdefs%3E%3Cstyle%3E.cls-2%7Bfill:%23fbd383;%7D%3C/style%3E%3C/defs%3E%3Cpath class="cls-2" d="M0,210V6Q42.5,18,85,6T170,6T255,6T340,6V210"/%3E%3C/svg%3E\');background-position:0 0,0 0;background-repeat:repeat-x;background-clip:content-box;animation:_ngcontent-%COMP%_coffee 3s infinite linear;position:absolute;bottom:0;width:100%;transition:height .6s ease;overflow-y:hidden}@keyframes _ngcontent-%COMP%_coffee{to{background-position:-200% 0,-100% 0}}.cup[_ngcontent-%COMP%]:before{content:"";position:absolute;height:80px;width:60px;border:10px solid #030303;border-left:none;right:-70px;top:30px;border-radius:0 30px 80px 0}.cup[_ngcontent-%COMP%]:after{position:absolute;content:"";height:10px;width:260px;background-color:#030303;left:-45px;bottom:-10px;border-radius:10px}.bubble[_ngcontent-%COMP%]{height:15px;width:15px;background-color:#fbbe08;border-radius:50%;position:absolute;animation:_ngcontent-%COMP%_bubbles forwards infinite;opacity:.6}@keyframes _ngcontent-%COMP%_bubbles{to{bottom:calc(100% - 20px);opacity:0}}.bubble-1[_ngcontent-%COMP%]{left:30px;bottom:10px;animation-delay:.5s;animation-duration:3s}.bubble-2[_ngcontent-%COMP%]{left:80px;bottom:35px;animation-delay:1.2s;animation-duration:4s}.bubble-3[_ngcontent-%COMP%]{left:140px;bottom:30px;animation-duration:4s}']})}return i})()}}]);