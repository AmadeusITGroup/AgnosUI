import{j as e,R as b}from"./App-DHhP8U0X.js";import{c as y}from"./index-BOQVp3dk.js";import{S as f}from"./slot-Is8FqGrj.js";import{u as h}from"./config-jsbGLsCa.js";function w(t){const[{tabindex:s,maxRating:r,visibleRating:n,ariaValueText:l,readonly:o,disabled:d,interactive:c,stars:x,className:m,slotStar:u,ariaLabel:v,ariaLabelledBy:p},i]=h(y,t,"rating"),g={cursor:c?"pointer":"default"};return e.jsx("div",{role:"slider",className:`d-inline-flex au-rating ${m}`,tabIndex:s,"aria-valuemin":0,"aria-valuemax":r,"aria-valuenow":n,"aria-valuetext":l,"aria-readonly":o||void 0,"aria-disabled":d||void 0,"aria-label":v||void 0,"aria-labelledby":p||void 0,onKeyDown:a=>i.actions.handleKey(a),onMouseLeave:i.actions.leave,children:x.map(a=>e.jsxs(b.Fragment,{children:[e.jsxs("span",{className:"visually-hidden",children:["(",a.index<n?"*":" ",")"]}),e.jsx("span",{className:"au-rating-star",style:g,onMouseEnter:()=>i.actions.hover(a.index+1),onClick:()=>i.actions.click(a.index+1),children:e.jsx(f,{slotContent:u,props:a})})]},a.index))})}export{w as R};
