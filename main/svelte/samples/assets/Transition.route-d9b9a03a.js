import{a0 as j,S as $t,i as At,s as Vt,j as a,k as g,f as h,n as o,o as B,g as S,p as e,q as y,u as W,x as vt,h as Y,v as It,b as A,a2 as Ot,w as zt,r as Dt,Y as Tt,t as X,y as Ft,a as ct,z as Ht,c as Rt,m as qt,d as Bt}from"./index-14bf255f.js";import{c as Z,a as rt,f as ut}from"./fade-cfc2f702.js";import{c as Mt}from"./baseTransitions-b669155c.js";import"./writables-8f91fb4c.js";import"./stores-0a381eb7.js";import"./directiveUtils-0f196314.js";function yt(n){let t,i,l,s;return{c(){t=a("div"),t.innerHTML='<div class="card" style="width: 300px;"><div class="card-body">You can collapse this card by clicking Toggle</div></div>',Ot(t,"max-width","300px")},m(b,u){S(b,t,u),l||(s=zt(i=n[14].call(null,t,{transition:n[0],animation:n[2]})),l=!0)},p(b,u){i&&Dt(i.update)&&u&5&&i.update.call(null,{transition:b[0],animation:b[2]})},d(b){b&&Y(t),l=!1,s()}}}function St(n){let t,i,l,s,b,u,v,d,r,p,f,q,M,V,w,I,L,z,T,D,E,F,$,G,J,O,K,H,x,R,c,C,N,mt,tt,pt,P,bt,et,ft,Q,ht,nt,dt,U,_t,it,kt,lt,gt,_=(!n[1]||!n[8])&&yt(n);return{c(){t=a("div"),i=a("p"),l=g(`Transition:
		`),s=a("button"),s.textContent="Vertical collapse",b=h(),u=a("button"),u.textContent="Horizontal collapse",v=h(),d=a("button"),d.textContent="Fade",r=h(),p=a("label"),f=a("input"),q=g("Animation"),M=h(),V=a("label"),w=a("input"),I=g("Animation on init"),L=h(),z=a("label"),T=a("input"),D=g("Remove from DOM"),E=h(),F=a("label"),$=a("input"),G=g("Visible"),J=h(),O=a("button"),O.textContent="Toggle",K=h(),H=a("button"),H.textContent="Toggle with animation",x=h(),R=a("button"),R.textContent="Toggle without animation",c=h(),C=a("ul"),N=a("li"),mt=g("visible = "),tt=g(n[5]),pt=h(),P=a("li"),bt=g("transitioning = "),et=g(n[6]),ft=h(),Q=a("li"),ht=g("shown = "),nt=g(n[7]),dt=h(),U=a("li"),_t=g("hidden = "),it=g(n[8]),kt=h(),_&&_.c(),o(s,"type","button"),o(s,"class","ms-2 btn btn-sm btn-outline-secondary"),B(s,"active",n[0]===Z),o(u,"type","button"),o(u,"class","ms-2 btn btn-sm btn-outline-secondary"),B(u,"active",n[0]===rt),o(d,"type","button"),o(d,"class","ms-2 btn btn-sm btn-outline-secondary"),B(d,"active",n[0]===ut),o(i,"class","mt-2"),o(f,"type","checkbox"),o(f,"class","form-check-input"),o(p,"class","form-check"),o(w,"type","checkbox"),o(w,"class","form-check-input"),o(V,"class","form-check"),o(T,"type","checkbox"),o(T,"class","form-check-input"),o(z,"class","form-check"),o($,"type","checkbox"),o($,"class","form-check-input"),o(F,"class","form-check mb-2"),o(O,"type","button"),o(O,"class","btn btn-outline-primary"),o(H,"type","button"),o(H,"class","ms-2 btn btn-outline-primary"),o(R,"type","button"),o(R,"class","ms-2 btn btn-outline-primary"),o(C,"class","mt-2"),o(t,"class","transition-inner")},m(m,k){S(m,t,k),e(t,i),e(i,l),e(i,s),e(i,b),e(i,u),e(i,v),e(i,d),e(t,r),e(t,p),e(p,f),f.checked=n[2],e(p,q),e(t,M),e(t,V),e(V,w),w.checked=n[3],e(V,I),e(t,L),e(t,z),e(z,T),T.checked=n[1],e(z,D),e(t,E),e(t,F),e(F,$),$.checked=n[4],e(F,G),e(t,J),e(t,O),e(t,K),e(t,H),e(t,x),e(t,R),e(t,c),e(t,C),e(C,N),e(N,mt),e(N,tt),e(C,pt),e(C,P),e(P,bt),e(P,et),e(C,ft),e(C,Q),e(Q,ht),e(Q,nt),e(C,dt),e(C,U),e(U,_t),e(U,it),e(t,kt),_&&_.m(t,null),lt||(gt=[y(s,"click",n[17]),y(u,"click",n[18]),y(d,"click",n[19]),y(f,"change",n[20]),y(w,"change",n[21]),y(T,"change",n[22]),y($,"change",n[23]),y(O,"click",n[24]),y(H,"click",n[25]),y(R,"click",n[26])],lt=!0)},p(m,[k]){k&1&&B(s,"active",m[0]===Z),k&1&&B(u,"active",m[0]===rt),k&1&&B(d,"active",m[0]===ut),k&4&&(f.checked=m[2]),k&8&&(w.checked=m[3]),k&2&&(T.checked=m[1]),k&16&&($.checked=m[4]),k&32&&W(tt,m[5]),k&64&&W(et,m[6]),k&128&&W(nt,m[7]),k&256&&W(it,m[8]),!m[1]||!m[8]?_?_.p(m,k):(_=yt(m),_.c(),_.m(t,null)):_&&(_.d(1),_=null)},i:vt,o:vt,d(m){m&&Y(t),_&&_.d(),lt=!1,It(gt)}}}const wt=j(Z),ot=j(!0),st=j(!1),Yt=j(!0),at=j(!0);function jt(n,t,i){let l,s,b,u,v,d,r,p,f;A(n,wt,c=>i(0,l=c)),A(n,at,c=>i(1,s=c)),A(n,ot,c=>i(2,b=c)),A(n,st,c=>i(3,u=c));const{stores:{visible$:q,transitioning$:M,shown$:V,hidden$:w},api:{toggle:I},directives:{directive:L},patch:z}=Mt({props:{animationOnInit:st,animation:ot,visible:Yt}});A(n,q,c=>i(5,d=c)),A(n,M,c=>i(6,r=c)),A(n,V,c=>i(7,p=c)),A(n,w,c=>i(8,f=c));const T={subscribe:q.subscribe,set:c=>z({visible:c})};A(n,T,c=>i(4,v=c));const D=c=>{I(!1,!1),Tt(at,s=!0,s),Tt(wt,l=c,l)},E=()=>D(Z),F=()=>D(rt),$=()=>D(ut);function G(){b=this.checked,ot.set(b)}function J(){u=this.checked,st.set(u)}function O(){s=this.checked,at.set(s)}function K(){v=this.checked,T.set(v)}return[l,s,b,u,v,d,r,p,f,q,M,V,w,I,L,T,D,E,F,$,G,J,O,K,()=>I(),()=>I(void 0,!0),()=>I(void 0,!1)]}class Lt extends $t{constructor(t){super(),At(this,t,jt,St,Vt,{})}}function Ct(n){let t,i;return t=new Lt({}),{c(){Rt(t.$$.fragment)},m(l,s){qt(t,l,s),i=!0},i(l){i||(X(t.$$.fragment,l),i=!0)},o(l){ct(t.$$.fragment,l),i=!1},d(l){Bt(t,l)}}}function Et(n){let t,i,l,s,b,u,v,d,r=n[0]&&Ct();return{c(){t=a("h2"),t.textContent="Transition example",i=h(),l=a("div"),s=a("button"),s.textContent="Toggle component",b=h(),r&&r.c(),o(s,"id","toggle-component"),o(s,"class","btn btn-outline-secondary"),o(l,"class","demo-transition mb-3")},m(p,f){S(p,t,f),S(p,i,f),S(p,l,f),e(l,s),e(l,b),r&&r.m(l,null),u=!0,v||(d=y(s,"click",n[1]),v=!0)},p(p,[f]){p[0]?r?f&1&&X(r,1):(r=Ct(),r.c(),X(r,1),r.m(l,null)):r&&(Ft(),ct(r,1,1,()=>{r=null}),Ht())},i(p){u||(X(r),u=!0)},o(p){ct(r),u=!1},d(p){p&&(Y(t),Y(i),Y(l)),r&&r.d(),v=!1,d()}}}function Gt(n,t,i){let l=!0;return[l,()=>i(0,l=!l)]}class Wt extends $t{constructor(t){super(),At(this,t,Gt,Et,Vt,{})}}export{Wt as default};
