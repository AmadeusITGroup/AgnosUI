import{Q as a,ao as i,g as o,ap as b,r as g,u as l,aq as m}from"./D-O59TWz.js";import{g as d}from"./BACwCppb.js";function p(e){a(e,e.v+1)}function k(e){let r=0,n=b(0),t;return()=>{i()&&(o(n),g(()=>(r===0&&(t=l(()=>e(()=>p(n)))),r+=1,()=>{m().then(()=>{r-=1,r===0&&(t?.(),t=void 0)})})))}}function _(e){let r;const n=k(u=>{let s=!1;const c=e.subscribe(f=>{r=f,s&&u()});return s=!0,c});function t(){return i()?(n(),r):d(e)}return"set"in e?{get current(){return t()},set current(u){e.set(u)}}:{get current(){return t()}}}export{_ as f};
