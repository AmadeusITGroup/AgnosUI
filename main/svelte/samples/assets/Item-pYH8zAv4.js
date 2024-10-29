import{y as F,E as M,z as S,B as R,C as V,D as H,F as W,N as O,G as j,H as B,I as G,J as T,K,L as z,p as x,c as h,b as y,a as E,t as I,M as P,l as C,e as D,f as J,s as L,d as Q,g as U,O as q,P as X,o as Y,v as Z,Q as ee}from"./AppCommon-BIOVedX1.js";import{s as te}from"./snippet-C4nDYEhK.js";import{a as u}from"./actions-7pTMrPq9.js";import{c as w}from"./config-C5p3ln_V.js";import{g as ae,f as oe,c as re}from"./accordion-BGv150k9-BePlk1y2.js";import{c as $}from"./collapse-CVjUhnIz-DDpRBmyP.js";import{e as ie}from"./extendWidget-C-nVXE9K.js";import{c as A}from"./directive-CKEccryv-CfUcKfmP.js";import{S as N}from"./Slot-DPwmoMlC.js";function ne(f,d,g,l,v,b){var s,a,c=null,p=f,e,o=T;F(()=>{const t=d()||null;var r=t==="svg"?O:null;if(t!==s){var i=T;S(o),e&&(t===null?j(e,()=>{e=null,a=null}):t===a?B(e):G(e)),t&&t!==a&&(e=R(()=>{if(c=r?document.createElementNS(r,t):document.createElement(t),V(c,c),l){var m=c.appendChild(H());l(c,m)}W.nodes_end=c,p.before(c)})),s=t,s&&(a=s),S(i)}},M)}const se={itemStructure:void 0},ce={structure:void 0,children:void 0,header:void 0},de={...ae(),...se},le={animated:!1,transition:$,destroyOnHide:!1,onShown:()=>{},onHidden:()=>{},onVisibleChange:()=>{},visible:!1,disabled:!1,id:"",headerClassName:"",buttonClassName:"",bodyContainerClassName:"",bodyClassName:"",headingTag:"",className:"",structure:void 0,children:void 0,header:void 0},ue=Object.keys(le),ve=ie(re,ce),fe={itemTransition:$};function pe(){return{...de,...fe}}const me=oe(ve,ue,pe()),ge=me,k=Symbol("accordion-api");function be(f){K(k,f)}function _e(){return z(k)}var he=I("<div><!></div>");function ke(f,d){x(d,!0);let g=P(d,["$$slots","$$events","$$legacy","children"]);const{directives:l,api:v}=w({factory:ge,widgetName:"accordion",props:g,enablePatchChanged:!0}),b=v;be(v);var s=he();let a;h(()=>a=C(s,a,{}));var c=D(s);return te(c,()=>d.children),u(s,(p,e)=>A(p,e),()=>"accordion"),u(s,p=>l.accordionDirective(p)),y(f,s),E({api:b})}var Ce=I("<button><!></button>"),Ae=I("<div><div><!></div></div>"),ye=I("<!> <!>",1);function De(f,d){x(d,!0);let g=P(d,["$$slots","$$events","$$legacy"]);const{state:l,directives:v}=g,b=new RegExp("^h[1-6]$");let s=q(()=>b.test(l.headingTag)?l.headingTag:"h2");var a=ye(),c=J(a);ne(c,()=>U(s),!1,(e,o)=>{let t;h(()=>t=C(e,t,{},void 0,e.namespaceURI!==O,e.nodeName.includes("-"))),u(e,(n,_)=>A(n,_),()=>"accordion-header"),u(e,n=>v.headerDirective(n));var r=Ce();let i;h(()=>i=C(r,i,{}));var m=D(r);N(m,{get content(){return l.header},get props(){return g}}),u(r,n=>v.buttonDirective(n)),u(r,(n,_)=>A(n,_),()=>"accordion-button"),y(o,r)});var p=L(c,2);Q(p,()=>l.shouldBeInDOM,e=>{var o=Ae();let t;h(()=>t=C(o,t,{}));var r=D(o);let i;h(()=>i=C(r,i,{}));var m=D(r);N(m,{get content(){return l.children},get props(){return g}}),u(r,(n,_)=>A(n,_),()=>"accordion-body"),u(r,n=>v.bodyDirective(n)),u(o,(n,_)=>A(n,_),()=>"accordion-collapse"),u(o,n=>v.bodyContainerDirective(n)),y(e,o)}),y(f,a),E()}var Ie=I("<div><!></div>");function Fe(f,d){x(d,!0);const g=(i,m=ee)=>{De(i,Z(m))},l=_e(),{registerItem:v}=l;let b=X(d,"visible",15),s=P(d,["$$slots","$$events","$$legacy","visible"]);const a=w({factory:v,get props(){return{...s,visible:b()}},enablePatchChanged:!0,defaultConfig:{structure:g},events:{onVisibleChange:i=>{b(i)}}}),{state:c,directives:{itemDirective:p}}=a,e=a.api;Y(()=>{a.api.initDone()});var o=Ie();let t;h(()=>t=C(o,t,{}));var r=D(o);return N(r,{get content(){return c.structure},props:a}),u(o,(i,m)=>A(i,m),()=>"accordion-item"),u(o,i=>p(i)),y(f,o),E({api:e})}export{ke as A,Fe as I};