import{an as b,ao as p,aa as v,y as h,F as d,z as m,ap as $,$ as c,a6 as L}from"./AppCommon-B-ROr4aU.js";import{g as r}from"./pageFactory-CZZJDqOh-BNFZl_Rd.js";import{g as n}from"./rating-hovacUx0-CfbXGs4x.js";import{c as V}from"./collapse-CVjUhnIz-Ca4chnWO.js";import{f as I}from"./fade-uOobJKgw-BDarYuaK.js";import{a as R}from"./config-lZO9LbO2.js";function P(a,e,t){var l=a,s=$,o,g=b()?p:v;h(()=>{g(s,s=e())&&(o&&d(o),o=m(()=>t(l)))})}const u=c(()=>{let a=L().split("#").at(-1);(!a||a.at(0)!=="{")&&(a="{}");const{config:e={},props:t={}}=JSON.parse(decodeURIComponent(a));return{config:e,props:t}}),i={log:{value:a=>console.log(a),label:"Log"},noop:{value:()=>{},label:"Noop"},collapse:{value:V,label:"Collapse"},fade:{value:I,label:"Fade"},ratingValueFunction:{value:n().ariaValueTextFn,label:"RatingValue"},heartsRatingValue:{value:(a,e)=>`${a} ${a===1?"heart":"hearts"} out of ${e} ${e===1?"heart":"hearts"}`,label:"HeartsRatingValue"},starRatingValue:{value:(a,e)=>`${a} ${a===1?"star":"stars"} out of ${e} ${e===1?"star":"stars"}`,label:"StarRatingValue"},starIconRating:{value:n().star,label:"StarIconRating"},heartIconRating:{value:({fill:a})=>String.fromCharCode(a===100?9829:9825),label:"HeartIconRating"},defaultPageFactory:{value:r().pagesFactory,label:"DefaultPageFactory"},simpleLabel:{value:r().ariaPageLabel,label:"SimpleLabel"},pageLabel:{value:(a,e)=>`Page ${a} of ${e}`,label:"PageLabel"},numberLabel:{value:r().numberLabel,label:"NumberLabel"},sliderLabelHandleDefault:{value:a=>`${a}`,label:"SliderLabelHandleDefault"},sliderValueTextUnits:{value:a=>`${a} units`,label:"SliderValueTextUnits"}},f=a=>{const e={...a};for(const[t,l]of Object.entries(e))i[l==null?void 0:l.value]!==void 0&&(e[t]=i[l.value].value);return e};function T(a){return R(()=>({[a]:f(u().config)})),c(()=>f(u().props))}export{T as h,P as k};
