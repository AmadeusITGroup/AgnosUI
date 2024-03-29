const e=`import { createCSSTransition } from "./cssTransitions.js";
import { r as removeClasses, a as addClasses, b as reflow } from "../../dom-CrYSjpIb.js";
const createSimpleClassTransition = (config) => {
  const { animationPendingClasses, animationPendingShowClasses, animationPendingHideClasses, showClasses, hideClasses } = config;
  return createCSSTransition((element, direction, animated, context) => {
    removeClasses(element, showClasses);
    removeClasses(element, hideClasses);
    if (animated) {
      removeClasses(element, direction === "show" ? animationPendingHideClasses : animationPendingShowClasses);
      if (!context.started) {
        context.started = true;
        const classes = direction === "show" ? hideClasses : showClasses;
        addClasses(element, classes);
        reflow(element);
        removeClasses(element, classes);
      }
      addClasses(element, animationPendingClasses);
      reflow(element);
      addClasses(element, direction === "show" ? animationPendingShowClasses : animationPendingHideClasses);
    }
    return () => {
      removeClasses(element, animationPendingClasses);
      removeClasses(element, animationPendingShowClasses);
      removeClasses(element, animationPendingHideClasses);
      addClasses(element, direction === "show" ? showClasses : hideClasses);
    };
  });
};
export {
  createSimpleClassTransition
};
`;export{e as default};
