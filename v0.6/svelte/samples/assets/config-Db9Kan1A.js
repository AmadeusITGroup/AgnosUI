import{ag as h,aa as i,ab as C,T as W,K as p,J as v}from"./AppCommon-DoiIXO3L.js";import{i as u,t as P,f as j}from"./directive-CKEccryv-BlplZHDT.js";import{f as w}from"./index-client--zrPD8p7.js";const d=(t,e,o=1/0)=>{if(e!==void 0)if(typeof e=="object"&&e&&o>=1){t||(t={});for(const n of Object.keys(e))Object.prototype.hasOwnProperty.call(e,n)&&(n==="__proto__"||n==="constructor"||(t[n]=d(t[n],e[n],o-1)))}else return e;return t},O=(t,e=u)=>{const o=h({}),n=e===u?t:i(()=>e(d({},t==null?void 0:t(),2)));return C(i(()=>d(d({},n==null?void 0:n(),2),o(),2)),{...o,own$:o,adaptedParent$:n,parent$:t})};function x(t,e){return o=>{const n=j(t,o);t=o,n&&e(n)}}const F=(t,e)=>e?(...o)=>{t(...o),e(...o)}:t,_=(t,e)=>{const o=h(e,{equal:Object.is});return C(i(()=>F(t,o())),{set:o.set,update:o.update})},S=t=>{const{factory:e,defaultConfig:o,widgetConfig:n,events:c,enablePatchChanged:s}=t,a=t.props??{},y=P(o),l={...a};if(c)for(const r of Object.keys(c))l[r]=_(c[r],a[r]);const f=e({config:i(()=>({...y(),...n==null?void 0:n()})),props:l}),b=Object.fromEntries(Object.entries(f.stores).map(([r,g])=>[r.slice(0,-1),w(g)]));if(s){const r=x(a,f.patch);W(()=>{r({...t.props})})}return{api:f.api,directives:f.directives,state:new Proxy(b,{get(r,g,m){if(Reflect.has(r,g))return Reflect.get(r,g,m).current}})}},k=(t=Symbol("widgetsConfig"))=>{const e=c=>{const s=p(t),a=O(s,c);return v(t,a),a},o=c=>{const s=p(t);return i(()=>s==null?void 0:s()[c])};return{widgetsDefaultConfigKey:t,createWidgetsDefaultConfig:e,getContextWidgetConfig:o,callWidgetFactory:c=>S({factory:c.factory,defaultConfig:c.defaultConfig,widgetConfig:c.widgetName?o(c.widgetName):null,events:c.events,get props(){return c.props},enablePatchChanged:c.enablePatchChanged})}},{widgetsDefaultConfigKey:I,createWidgetsDefaultConfig:N,getContextWidgetConfig:q,callWidgetFactory:J}=k();export{J as c,k as w};
