import{r as n,j as e}from"./index-swMVOEdb.js";import{c as f,o as v,a as u,s as b,h as g}from"./floatingUI-GcKyLlBo.js";import{u as x}from"./stores-xGmoBAgM.js";import{u as r}from"./directive-Tjiq1YGH.js";import"./func-B0ufEirG.js";import"./promise-8x5-Wnj7.js";const h=o=>{o.scrollTo({left:326,top:420})},P=()=>{var i,a;const[o,p]=n.useState(!0),t=n.useMemo(()=>f({props:{arrowOptions:{padding:6},computePositionOptions:{middleware:[v(10),u(),b({padding:5}),g()]}}}),[]),s=x(t.state$),l=r(h),c=r(t.directives.referenceDirective),d=r(t.directives.floatingDirective),m=r(t.directives.arrowDirective);return e.jsxs("div",{ref:l,className:"position-relative overflow-auto border border-primary-subtle demo-floatingui",children:[e.jsx("button",{ref:c,type:"button",className:"btn btn-primary",onClick:()=>p(!o),children:"Toggle popover"}),o?e.jsxs("div",{ref:d,"data-popper-placement":s.placement,className:`popover bs-popover-auto position-absolute ${(a=(i=s.middlewareData)==null?void 0:i.hide)!=null&&a.referenceHidden?"invisible":""}`,role:"tooltip",children:[e.jsx("div",{className:"popover-arrow position-absolute",ref:m}),e.jsx("div",{className:"popover-body text-center",children:"This is a sample popover"})]}):null]})};export{P as default};
