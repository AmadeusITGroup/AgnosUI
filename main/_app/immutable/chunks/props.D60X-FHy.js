import{S as A,a2 as q,a3 as B,a4 as p,a5 as M,d as w,a6 as c,a7 as R,g as _,O as U,a8 as Y,a9 as Z,n as $,aa as z,ab as C,ac as T,ad as G,ae as V,af as F,ag as H,u as J,ah as K,ai as Q,aj as D,ak as W,al as X,am as L}from"./runtime.DYWd75Tn.js";function I(e,r=null,s){if(typeof e!="object"||e===null||A in e)return e;const t=Z(e);if(t!==q&&t!==B)return e;var u=new Map,b=$(e),g=p(0);b&&u.set("length",p(e.length));var P;return new Proxy(e,{defineProperty(a,n,i){(!("value"in i)||i.configurable===!1||i.enumerable===!1||i.writable===!1)&&M();var f=u.get(n);return f===void 0?(f=p(i.value),u.set(n,f)):w(f,I(i.value,P)),!0},deleteProperty(a,n){var i=u.get(n);return i===void 0?n in a&&u.set(n,p(c)):(w(i,c),N(g)),!0},get(a,n,i){if(n===A)return e;var f=u.get(n),l=n in a;if(f===void 0&&(!l||R(a,n)?.writable)&&(f=p(I(l?a[n]:c,P)),u.set(n,f)),f!==void 0){var o=_(f);return o===c?void 0:o}return Reflect.get(a,n,i)},getOwnPropertyDescriptor(a,n){var i=Reflect.getOwnPropertyDescriptor(a,n);if(i&&"value"in i){var f=u.get(n);f&&(i.value=_(f))}else if(i===void 0){var l=u.get(n),o=l?.v;if(l!==void 0&&o!==c)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return i},has(a,n){if(n===A)return!0;var i=u.get(n),f=i!==void 0&&i.v!==c||Reflect.has(a,n);if(i!==void 0||U!==null&&(!f||R(a,n)?.writable)){i===void 0&&(i=p(f?I(a[n],P):c),u.set(n,i));var l=_(i);if(l===c)return!1}return f},set(a,n,i,f){var l=u.get(n),o=n in a;if(b&&n==="length")for(var v=i;v<l.v;v+=1){var h=u.get(v+"");h!==void 0?w(h,c):v in a&&(h=p(c),u.set(v+"",h))}l===void 0?(!o||R(a,n)?.writable)&&(l=p(void 0),w(l,I(i,P)),u.set(n,l)):(o=l.v!==c,w(l,I(i,P)));var S=Reflect.getOwnPropertyDescriptor(a,n);if(S?.set&&S.set.call(f,i),!o){if(b&&typeof n=="string"){var x=u.get("length"),y=Number(n);Number.isInteger(y)&&y>=x.v&&w(x,y+1)}N(g)}return!0},ownKeys(a){_(g);var n=Reflect.ownKeys(a).filter(l=>{var o=u.get(l);return o===void 0||o.v!==c});for(var[i,f]of u)f.v!==c&&!(i in a)&&n.push(i);return n},setPrototypeOf(){Y()}})}function N(e,r=1){w(e,e.v+r)}const k={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function se(e,r,s){return new Proxy({props:e,exclude:r},k)}const ee={get(e,r){if(!e.exclude.includes(r))return _(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,s){return r in e.special||(e.special[r]=ne({get[r](){return e.props[r]}},r,T)),e.special[r](s),L(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),L(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function te(e,r){return new Proxy({props:e,exclude:r,special:{},version:p(0)},ee)}const re={get(e,r){let s=e.props.length;for(;s--;){let t=e.props[s];if(D(t)&&(t=t()),typeof t=="object"&&t!==null&&r in t)return t[r]}},getOwnPropertyDescriptor(e,r){let s=e.props.length;for(;s--;){let t=e.props[s];if(D(t)&&(t=t()),typeof t=="object"&&t!==null&&r in t){const u=R(t,r);return u&&!u.configurable&&(u.configurable=!0),u}}},has(e,r){for(let s of e.props)if(D(s)&&(s=s()),s!=null&&r in s)return!0;return!1},ownKeys(e){const r=[];for(let s of e.props){D(s)&&(s=s());for(const t in s)r.includes(t)||r.push(t)}return r}};function ue(...e){return new Proxy({props:e},re)}function ne(e,r,s,t){var u=(s&V)!==0,b=(s&F)!==0,g=(s&H)!==0,P=(s&W)!==0,a=e[r],n=R(e,r)?.set,i=t,f=!0,l=!1,o=()=>(l=!0,f&&(f=!1,P?i=J(t):i=t),i);a===void 0&&t!==void 0&&(n&&b&&z(),a=o(),n&&n(a));var v;if(b)v=()=>{var d=e[r];return d===void 0?o():(f=!0,l=!1,d)};else{var h=(u?K:Q)(()=>e[r]);h.f|=C,v=()=>{var d=_(h);return d!==void 0&&(i=void 0),d===void 0?i:d}}if(!(s&T))return v;if(n){var S=e.$$legacy;return function(d,m){return arguments.length>0?((!b||!m||S)&&n(m?v():d),d):v()}}var x=!1,y=X(a),O=K(()=>{var d=v(),m=_(y);return x?(x=!1,m):y.v=d});return u||(O.equals=G),function(d,m){var j=_(O);if(arguments.length>0){const E=m?_(O):b&&g?I(d):d;return O.equals(E)||(x=!0,w(y,E),l&&i!==void 0&&(i=E),_(O)),d}return j}}export{I as a,te as l,ne as p,se as r,ue as s};