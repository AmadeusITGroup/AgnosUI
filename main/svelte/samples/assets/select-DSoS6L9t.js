import{aq as _,a7 as f,ar as d}from"./AppCommon-CiJXSMZM.js";function o(e,u,r){if(e.multiple)return c(e,u);for(var n of e.options){var a=i(n);if(d(a,u)){n.selected=!0;return}}(!r||u!==void 0)&&(e.selectedIndex=-1)}function s(e,u){f(()=>{var r=new MutationObserver(()=>{var n=e.__value;o(e,n)});return r.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{r.disconnect()}})}function m(e,u,r=u){var n=!0;_(e,"change",a=>{var t=a?"[selected]":":checked",v;if(e.multiple)v=[].map.call(e.querySelectorAll(t),i);else{var l=e.querySelector(t)??e.querySelector("option:not([disabled])");v=l&&i(l)}r(v)}),f(()=>{var a=u();if(o(e,a,n),n&&a===void 0){var t=e.querySelector(":checked");t!==null&&(a=i(t),r(a))}e.__value=a,n=!1}),s(e)}function c(e,u){for(var r of e.options)r.selected=~u.indexOf(i(r))}function i(e){return"__value"in e?e.__value:e.value}export{m as b};
