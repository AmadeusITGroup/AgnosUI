import{am as l,X as v,an as o}from"./AppCommon-C_Uz3Ejm.js";function f(e,n,u){if(e.multiple)return d(e,n);for(var a of e.options){var r=i(a);if(o(r,n)){a.selected=!0;return}}(!u||n!==void 0)&&(e.selectedIndex=-1)}function _(e,n){v(()=>{var u=new MutationObserver(()=>{var a=e.__value;f(e,a)});return u.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),()=>{u.disconnect()}})}function s(e,n,u=n){var a=!0;l(e,"change",()=>{var r;if(e.multiple)r=[].map.call(e.querySelectorAll(":checked"),i);else{var t=e.querySelector(":checked");r=t&&i(t)}u(r)}),v(()=>{var r=n();if(f(e,r,a),a&&r===void 0){var t=e.querySelector(":checked");t!==null&&(r=i(t),u(r))}e.__value=r,a=!1}),_(e)}function d(e,n){for(var u of e.options)u.selected=~n.indexOf(i(u))}function i(e){return"__value"in e?e.__value:e.value}export{s as b};