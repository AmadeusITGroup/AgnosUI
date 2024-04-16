const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const services_transitions_cssTransitions = require("./cssTransitions.cjs");
const utils_directive = require("../../directive-xtKkZIlP.cjs");
const createSimpleClassTransition = (config) => {
  const { animationPendingClasses, animationPendingShowClasses, animationPendingHideClasses, showClasses, hideClasses } = config;
  return services_transitions_cssTransitions.createCSSTransition((element, direction, animated, context) => {
    utils_directive.removeClasses(element, showClasses);
    utils_directive.removeClasses(element, hideClasses);
    if (animated) {
      utils_directive.removeClasses(element, direction === "show" ? animationPendingHideClasses : animationPendingShowClasses);
      if (!context.started) {
        context.started = true;
        const classes = direction === "show" ? hideClasses : showClasses;
        utils_directive.addClasses(element, classes);
        utils_directive.reflow(element);
        utils_directive.removeClasses(element, classes);
      }
      utils_directive.addClasses(element, animationPendingClasses);
      utils_directive.reflow(element);
      utils_directive.addClasses(element, direction === "show" ? animationPendingShowClasses : animationPendingHideClasses);
    }
    return () => {
      utils_directive.removeClasses(element, animationPendingClasses);
      utils_directive.removeClasses(element, animationPendingShowClasses);
      utils_directive.removeClasses(element, animationPendingHideClasses);
      utils_directive.addClasses(element, direction === "show" ? showClasses : hideClasses);
    };
  });
};
exports.createSimpleClassTransition = createSimpleClassTransition;
`;export{e as default};
