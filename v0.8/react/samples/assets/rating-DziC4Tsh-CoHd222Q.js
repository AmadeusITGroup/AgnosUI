import{r as a,j as i}from"./App-AO0jOhRY.js";import{S as c}from"./slot-BNbuKlAZ.js";import{a as d,u as m}from"./directive-CEErjM5c-iSrC3_Et.js";import{u as x}from"./config-Drx5IJGH.js";import{c as p}from"./rating-hovacUx0-C8vzw33t.js";import{c as l}from"./dom-BB9jLllr-Cs0LnZpg.js";const u=p;function f({star:e,state:t,directive:r}){return i.jsxs(a.Fragment,{children:[i.jsxs("span",{className:"visually-hidden",children:["(",e.index<t.visibleRating?"*":" ",")"]}),i.jsx("span",{...m(r,{index:e.index}),children:i.jsx(c,{slotContent:t.star,props:e})})]},e.index)}function S(e){const{state:t,directives:{containerDirective:r,starDirective:o},api:s}=x(u,e,"rating");return a.useImperativeHandle(e.ref,()=>s,[s]),i.jsx("div",{...d([l,"d-inline-flex"],r),children:t.stars.map(n=>i.jsx(f,{star:n,state:t,directive:o},n.index))})}export{S as R,u as e};
