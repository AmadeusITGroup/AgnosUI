import{am as _,X as f,an as d}from"./AppCommon-DEH8RU-G.js";function o(e,u,r){if(e.multiple)return c(e,u);for(var t of e.options){var n=i(t);if(d(n,u)){t.selected=!0;return}}(!r||u!==void 0)&&(e.selectedIndex=-1)}function s(e,u){f(()=>{var r=new MutationObserver(()=>{var t=e.__value;o(e,t)});return r.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{r.disconnect()}})}function m(e,u,r=u){var t=!0;_(e,"change",n=>{var a=n?"[selected]":":checked",v;if(e.multiple)v=[].map.call(e.querySelectorAll(a),i);else{var l=e.querySelector(a)??e.querySelector("option:not([disabled])");v=l&&i(l)}r(v)}),f(()=>{var n=u();if(o(e,n,t),t&&n===void 0){var a=e.querySelector(":checked");a!==null&&(n=i(a),r(n))}e.__value=n,t=!1}),s(e)}function c(e,u){for(var r of e.options)r.selected=~u.indexOf(i(r))}function i(e){return"__value"in e?e.__value:e.value}export{m as b};
