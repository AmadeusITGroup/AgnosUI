import{j as e,R as v}from"./index-Dax5Jokt.js";import{c as b}from"./rating-CL3JXV7s.js";import{u as y,S as h}from"./config-CNDNVnKa.js";function S(s){const[{tabindex:t,maxRating:l,visibleRating:n,ariaValueText:r,readonly:d,disabled:o,isInteractive:c,stars:u,className:x,slotStar:m,ariaLabel:f,ariaLabelledBy:g},i]=y(b,s,"rating"),p={cursor:c?"pointer":"default"};return e.jsx("div",{role:"slider",className:`d-inline-flex au-rating ${x}`,tabIndex:t,"aria-valuemin":0,"aria-valuemax":l,"aria-valuenow":n,"aria-valuetext":r,"aria-readonly":d||void 0,"aria-disabled":o||void 0,"aria-label":f||void 0,"aria-labelledby":g||void 0,onKeyDown:a=>i.actions.handleKey(a),onMouseLeave:i.actions.leave,children:u.map(a=>e.jsxs(v.Fragment,{children:[e.jsxs("span",{className:"visually-hidden",children:["(",a.index<n?"*":" ",")"]}),e.jsx("span",{className:"au-rating-star",style:p,onMouseEnter:()=>i.actions.hover(a.index+1),onClick:()=>i.actions.click(a.index+1),children:e.jsx(h,{slotContent:m,props:a})})]},a.index))})}export{S as R};
