import{aq as l,ai as f,ar as y,P as E,I as k,q as S,x as A,as as L,ab as x}from"./runtime.D3z8aTw2.js";function C(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const m=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function D(e){return m.includes(e)}const q={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function P(e){return e=e.toLowerCase(),q[e]??e}const I=["touchstart","touchmove"];function R(e){return I.includes(e)}const M=["textarea","script","style","title"];function z(e){return M.includes(e)}function N(e){var t=y,n=E;l(null),f(null);try{return e()}finally{l(t),f(n)}}const V=new Set,O=new Set;function G(e){if(!A)return;e.onload&&e.removeAttribute("onload"),e.onerror&&e.removeAttribute("onerror");const t=e.__e;t!==void 0&&(e.__e=void 0,queueMicrotask(()=>{e.isConnected&&e.dispatchEvent(t)}))}function W(e,t,n,o){function a(r){if(o.capture||j.call(t,r),!r.cancelBubble)return N(()=>n.call(this,r))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?S(()=>{t.addEventListener(e,a,o)}):t.addEventListener(e,a,o),a}function U(e,t,n,o,a){var r={capture:o,passive:a},i=W(e,t,n,r);(t===document.body||t===window||t===document)&&k(()=>{t.removeEventListener(e,i,r)})}function X(e){for(var t=0;t<e.length;t++)V.add(e[t]);for(var n of O)n(e)}function j(e){var t=this,n=t.ownerDocument,o=e.type,a=e.composedPath?.()||[],r=a[0]||e.target,i=0,p=e.__root;if(p){var d=a.indexOf(p);if(d!==-1&&(t===document||t===window)){e.__root=t;return}var v=a.indexOf(t);if(v===-1)return;d<=v&&(i=d)}if(r=a[i]||e.target,r!==t){L(e,"currentTarget",{configurable:!0,get(){return r||n}});var b=y,g=E;l(null),f(null);try{for(var u,h=[];r!==null;){var _=r.assignedSlot||r.parentNode||r.host||null;try{var c=r["__"+o];if(c!==void 0&&!r.disabled)if(x(c)){var[w,...T]=c;w.apply(r,[e,...T])}else c.call(r,e)}catch(s){u?h.push(s):u=s}if(e.cancelBubble||_===t||_===null)break;r=_}if(u){for(let s of h)queueMicrotask(()=>{throw s});throw u}}finally{e.__root=t,delete e.currentTarget,l(b),f(g)}}}export{V as a,R as b,C as c,X as d,W as e,D as f,G as g,j as h,z as i,U as j,P as n,O as r};
