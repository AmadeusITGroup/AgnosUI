import{g as m,r as f,j as t}from"./index-swMVOEdb.js";import{c as g}from"./pagination-5H9AqSpu.js";import{u as b}from"./config-2-MXpfG2.js";import{S as p}from"./slot-s2Vywk46.js";import{t as h}from"./stores-xGmoBAgM.js";const j=g;var x={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(l){(function(){var e={}.hasOwnProperty;function a(){for(var s="",i=0;i<arguments.length;i++){var o=arguments[i];o&&(s=n(s,r(o)))}return s}function r(s){if(typeof s=="string"||typeof s=="number")return s;if(typeof s!="object")return"";if(Array.isArray(s))return a.apply(null,s);if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]"))return s.toString();var i="";for(var o in s)e.call(s,o)&&s[o]&&(i=n(i,o));return i}function n(s,i){return i?s?s+" "+i:s+i:s}l.exports?(a.default=a,l.exports=a):window.classNames=a})()})(x);var v=x.exports;const u=m(v),d=f.forwardRef(({disabled:l,active:e,ariaLabel:a,activeLabel:r,className:n,children:s,...i},o)=>t.jsx("li",{ref:o,"aria-current":e?"page":void 0,className:u("page-item",{active:e,disabled:l}),children:t.jsxs("a",{className:u("page-link",n),"aria-label":a||void 0,...i,href:"#",tabIndex:l?-1:void 0,"aria-disabled":l||void 0,children:[s,e&&r&&t.jsx("span",{className:"visually-hidden",children:r})]})}));d.displayName="PageItem";const c=f.forwardRef(({children:l,...e},a)=>t.jsx(d,{...e,ref:a,children:t.jsx("span",{"aria-hidden":"true",children:l})}));c.displayName="NavButton";function N(l){const{widget:e,state:a}=l,r=[];for(let n=0;n<a.pages.length;n++)e.api.isEllipsis(a.pages[n])?r.push(t.jsx(c,{disabled:!0,tabIndex:-1,className:"au-ellipsis",children:t.jsx(p,{slotContent:a.slotEllipsis,props:l})},"Ellipsis"+n)):r.push(t.jsx(d,{className:"au-page",disabled:a.disabled,active:a.pages[n]===a.page,onClick:s=>{e.actions.select(a.pages[n]),s.preventDefault()},ariaLabel:a.pagesLabel[n],activeLabel:a.activeLabel,children:t.jsx(p,{slotContent:a.slotNumberLabel,props:{...l,displayedPage:a.pages[n]}})},a.pages[n]));return r.length?t.jsx(t.Fragment,{children:r}):null}const L={slotPages:N};function S(l){const[e,a]=b(j,l,"pagination",L),r={state:e,widget:h(a)},n=[],s=[];return e.boundaryLinks&&n.push(t.jsx(c,{className:"au-first",ariaLabel:e.ariaFirstLabel,onClick:i=>{a.actions.first(),i.preventDefault()},disabled:e.previousDisabled,children:t.jsx(p,{slotContent:e.slotFirst,props:r})},"first")),e.directionLinks&&n.push(t.jsx(c,{className:"au-previous",ariaLabel:e.ariaPreviousLabel,onClick:i=>{a.actions.previous(),i.preventDefault()},disabled:e.previousDisabled,children:t.jsx(p,{slotContent:e.slotPrevious,props:r})},"prev")),e.directionLinks&&s.push(t.jsx(c,{className:"au-next",ariaLabel:e.ariaNextLabel,onClick:i=>{a.actions.next(),i.preventDefault()},disabled:e.nextDisabled,children:t.jsx(p,{slotContent:e.slotNext,props:r})},"next")),e.boundaryLinks&&s.push(t.jsx(c,{className:"au-last",ariaLabel:e.ariaLastLabel,onClick:i=>{a.actions.last(),i.preventDefault()},disabled:e.nextDisabled,children:t.jsx(p,{slotContent:e.slotLast,props:r})},"last")),t.jsxs("nav",{"aria-label":e.ariaLabel,children:[t.jsxs("ul",{className:u("au-pagination","pagination",e.size?`pagination-${e.size}`:"",e.className),children:[n,t.jsx(p,{slotContent:e.slotPages,props:r}),s]}),t.jsx("div",{"aria-live":"polite",className:"visually-hidden",children:e.page&&`Current page is ${e.page}`})]})}export{S as P};