import{S as D,i as T,s as q,l as M,k as u,f as w,q as _,g as l,C,n as p,h as n,B}from"./AppCommon-C1X_0L7p.js";import{o as E}from"./modalService-azPwrYTe.js";import"./Modal-WwGWbJLf.js";import"./Slot-AcyzYqVT.js";import"./config-actRtC2N.js";import"./directive-DCYlDznf-BLyioqVS.js";import"./modal-Bcc7Xh5d-NlsdOTpq.js";import"./writables-DoU_XYTX-gpfTGoGn.js";import"./baseTransitions-CMZe44Vw.js";import"./promise-CY2U8bTP-C0Pa2v4R.js";import"./fade-uOobJKgw-B-q-cbUv.js";import"./simpleClassTransition-DQ6xmoDI.js";import"./cssTransitions-DKRKCc02.js";import"./extendWidget-BmexbiiK.js";function F(i){let t,r,o,a,m,f,k,d,c,h,x,b,y,S;return{c(){t=M("This is a modal"),r=u("br"),o=u("br"),a=w(),m=u("button"),m.textContent="Launch other modal",f=u("br"),k=w(),d=u("button"),d.textContent="Enable backdrop",c=u("button"),c.textContent="Disable backdrop",h=u("br"),x=w(),b=u("button"),b.textContent="Close",_(m,"class","btn btn-outline-primary m-1"),_(d,"class","btn btn-outline-secondary m-1"),_(c,"class","btn btn-outline-secondary m-1"),_(b,"class","btn btn-outline-secondary m-1")},m(e,s){l(e,t,s),l(e,r,s),l(e,o,s),l(e,a,s),l(e,m,s),l(e,f,s),l(e,k,s),l(e,d,s),l(e,c,s),l(e,h,s),l(e,x,s),l(e,b,s),y||(S=[C(m,"click",i[2]),C(d,"click",i[3]),C(c,"click",i[4]),C(b,"click",i[5])],y=!0)},p,i:p,o:p,d(e){e&&(n(t),n(r),n(o),n(a),n(m),n(f),n(k),n(d),n(c),n(h),n(x),n(b)),y=!1,B(S)}}}function N(i,t,r){let{widget:o}=t,{state:a}=t;const m=()=>E({slotTitle:"Other modal",slotDefault:L,container:a.modalElement}),f=()=>o.api.patch({backdrop:!0}),k=()=>o.api.patch({backdrop:!1}),d=()=>o.api.close();return i.$$set=c=>{"widget"in c&&r(0,o=c.widget),"state"in c&&r(1,a=c.state)},[o,a,m,f,k,d]}class L extends D{constructor(t){super(),T(this,t,N,F,q,{widget:0,state:1})}}function O(i){let t,r,o;return{c(){t=u("button"),t.textContent="Launch demo modal",_(t,"class","btn btn-primary")},m(a,m){l(a,t,m),r||(o=C(t,"click",i[0]),r=!0)},p,i:p,o:p,d(a){a&&n(t),r=!1,o()}}}function j(i){return[()=>E({slotTitle:"First modal",className:"modal-sm",slotDefault:L})]}class X extends D{constructor(t){super(),T(this,t,j,O,q,{})}}export{X as default};