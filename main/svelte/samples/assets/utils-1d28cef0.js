import{ad as o,_ as i}from"./index-31ef738a.js";import{c as g,f as b}from"./fade-d3f9ac74.js";import{g as r,b as t}from"./rating-ae212278.js";import{a as f}from"./config-5661a0ad.js";const s={log:{value:a=>console.log(a),label:"Log"},noop:{value:()=>{},label:"Noop"},collapse:{value:g,label:"Collapse"},fade:{value:b,label:"Fade"},ratingValueFunction:{value:r().ariaValueTextFn,label:"RatingValue"},heartsRatingValue:{value:(a,e)=>`${a} ${a===1?"heart":"hearts"} out of ${e} ${e===1?"heart":"hearts"}`,label:"HeartsRatingValue"},starRatingValue:{value:(a,e)=>`${a} ${a===1?"star":"stars"} out of ${e} ${e===1?"star":"stars"}`,label:"StarRatingValue"},starIconRating:{value:r().slotStar,label:"StarIconRating"},heartIconRating:{value:({fill:a})=>String.fromCharCode(a===100?9829:9825),label:"HeartIconRating"},defaultPageFactory:{value:t().pagesFactory,label:"DefaultPageFactory"},simpleLabel:{value:t().ariaPageLabel,label:"SimpleLabel"},pageLabel:{value:(a,e)=>`Page ${a} of ${e}`,label:"PageLabel"},slotNumberLabel:{value:t().slotNumberLabel,label:"SlotNumberLabel"}},u=a=>{const e={...a};for(const[n,l]of Object.entries(e))s[l==null?void 0:l.value]!==void 0&&(e[n]=s[l.value].value);return e};function m(a){return f(()=>({[a]:u(o().config)})),i(()=>u(o().props))}export{m as h};