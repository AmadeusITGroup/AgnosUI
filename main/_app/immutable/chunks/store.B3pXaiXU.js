import{ar as f,ag as d,as as y,M as w,at as E,q as A,x as L,au as M,a9 as O,ao as V,v as g,i as q,O as x}from"./runtime.RTR6NQ9h.js";import{s as I}from"./utils.CT6UXcBv.js";function N(e){var t=y,o=w;f(null),d(null);try{return e()}finally{f(t),d(o)}}const j=new Set,B=new Set;function U(e){if(!L)return;e.onload&&e.removeAttribute("onload"),e.onerror&&e.removeAttribute("onerror");const t=e.__e;t!==void 0&&(e.__e=void 0,queueMicrotask(()=>{e.isConnected&&e.dispatchEvent(t)}))}function C(e,t,o,n){function a(r){if(n.capture||D.call(t,r),!r.cancelBubble)return N(()=>o.call(this,r))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?A(()=>{t.addEventListener(e,a,n)}):t.addEventListener(e,a,n),a}function F(e,t,o,n,a){var r={capture:n,passive:a},u=C(e,t,o,r);(t===document.body||t===window||t===document)&&E(()=>{t.removeEventListener(e,u,r)})}function H(e){for(var t=0;t<e.length;t++)j.add(e[t]);for(var o of B)o(e)}function D(e){var t=this,o=t.ownerDocument,n=e.type,a=e.composedPath?.()||[],r=a[0]||e.target,u=0,v=e.__root;if(v){var _=a.indexOf(v);if(_!==-1&&(t===document||t===window)){e.__root=t;return}var b=a.indexOf(t);if(b===-1)return;_<=b&&(u=_)}if(r=a[u]||e.target,r!==t){M(e,"currentTarget",{configurable:!0,get(){return r||o}});var k=y,S=w;f(null),d(null);try{for(var s,h=[];r!==null;){var p=r.assignedSlot||r.parentNode||r.host||null;try{var i=r["__"+n];if(i!==void 0&&!r.disabled)if(O(i)){var[T,...m]=i;T.apply(r,[e,...m])}else i.call(r,e)}catch(c){s?h.push(c):s=c}if(e.cancelBubble||p===t||p===null)break;r=p}if(s){for(let c of h)queueMicrotask(()=>{throw c});throw s}}finally{e.__root=t,delete e.currentTarget,f(k),d(S)}}}function J(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const W=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function K(e){return W.includes(e)}const P={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function Q(e){return e=e.toLowerCase(),P[e]??e}const z=["touchstart","touchmove"];function X(e){return z.includes(e)}let l=!1;function Y(e,t,o){const n=o[t]??={store:null,source:V(void 0),unsubscribe:g};if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=g;else{var a=!0;n.unsubscribe=I(e,r=>{a?n.source.v=r:x(n.source,r)}),a=!1}return q(n.source)}function Z(){const e={};return E(()=>{for(var t in e)e[t].unsubscribe()}),e}function $(e){var t=l;try{return l=!1,[e(),l]}finally{l=t}}export{Y as a,j as b,$ as c,H as d,J as e,C as f,K as g,D as h,X as i,U as j,F as k,Q as n,B as r,Z as s};
