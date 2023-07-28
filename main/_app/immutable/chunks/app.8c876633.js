function i(t,n=""){return`AgnosUI - ${t}`+(n?` for ${n}`:"")}function c(t,n=""){return`${t} widget of AgnosUI`+(n?` for ${n}`:"")}function r(t){return t.replaceAll("\r","").split(`

`)}const o=/^\([^(]*\)[^=]*=>/,s=/^function/,e=/^Slot/;function u(t){return o.test(t)||s.test(t)?"function":e.test(t)?"slot":t}export{c as a,i as g,u as n,r as t};
