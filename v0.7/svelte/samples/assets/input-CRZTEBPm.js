import{aj as h,am as s,U as u,Y as d}from"./AppCommon-C8th3JWG.js";function m(e,a,v=a){var c=h();s(e,"input",l=>{var r=l?e.defaultValue:e.value;if(r=n(e)?f(r):r,v(r),c&&r!==(r=a())){var _=e.selectionStart,o=e.selectionEnd;e.value=r??"",o!==null&&(e.selectionStart=_,e.selectionEnd=Math.min(o,e.value.length))}}),u(a)==null&&e.value&&v(n(e)?f(e.value):e.value),d(()=>{var l=a();n(e)&&l===f(e.value)||e.type==="date"&&!l&&!e.value||l!==e.value&&(e.value=l??"")})}function b(e,a,v=a){s(e,"change",c=>{var l=c?e.defaultChecked:e.checked;v(l)}),u(a)==null&&v(e.checked),d(()=>{var c=a();e.checked=!!c})}function n(e){var a=e.type;return a==="number"||a==="range"}function f(e){return e===""?null:+e}export{m as a,b};
