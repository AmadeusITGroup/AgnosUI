import{i}from"./stores.8XQXMytZ.js";import{d as r}from"./scheduler.MXnwm5xh.js";const s=/\r/g;function p(t,n=""){return`AgnosUI - ${t}`+(n?` for ${n}`:"")}function l(t,n=""){return`${t} widget of AgnosUI`+(n?` for ${n}`:"")}function x(t){return t.replace(s,"").split(`

`)}const c=/^\([^(]*\)[^=]*=>/,u=/^function/,f=/^Slot/;function d(t){return c.test(t)||u.test(t)?"function":f.test(t)?"slot":t}function T(t){let n;function e(o){n=o}return r(()=>{i.patch({elements:n?t(n):[]})}),e}export{l as a,T as c,p as g,d as n,x as t};
