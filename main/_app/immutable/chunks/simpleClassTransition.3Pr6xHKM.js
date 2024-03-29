const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const services_transitions_cssTransitions = require("./cssTransitions.cjs");
const dom = require("../../dom-DP2NE4Q0.cjs");
const createSimpleClassTransition = (config) => {
  const { animationPendingClasses, animationPendingShowClasses, animationPendingHideClasses, showClasses, hideClasses } = config;
  return services_transitions_cssTransitions.createCSSTransition((element, direction, animated, context) => {
    dom.removeClasses(element, showClasses);
    dom.removeClasses(element, hideClasses);
    if (animated) {
      dom.removeClasses(element, direction === "show" ? animationPendingHideClasses : animationPendingShowClasses);
      if (!context.started) {
        context.started = true;
        const classes = direction === "show" ? hideClasses : showClasses;
        dom.addClasses(element, classes);
        dom.reflow(element);
        dom.removeClasses(element, classes);
      }
      dom.addClasses(element, animationPendingClasses);
      dom.reflow(element);
      dom.addClasses(element, direction === "show" ? animationPendingShowClasses : animationPendingHideClasses);
    }
    return () => {
      dom.removeClasses(element, animationPendingClasses);
      dom.removeClasses(element, animationPendingShowClasses);
      dom.removeClasses(element, animationPendingHideClasses);
      dom.addClasses(element, direction === "show" ? showClasses : hideClasses);
    };
  });
};
exports.createSimpleClassTransition = createSimpleClassTransition;
`;export{e as default};
