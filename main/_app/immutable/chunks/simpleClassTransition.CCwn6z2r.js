const e=`import { createCSSTransition } from './cssTransitions';
import { addClasses, reflow, removeClasses } from '../../utils/internal/dom';
/**
 * Create a transition based on css classes to attach.
 *
 * The config includes the classes that will be attached / removed depending on the transition state.
 * \`animationPendingClasses\` are the classes attached when the transition is in a pending state
 * \`animationPendingShowClasses\` and \`animationPendingHideClasses\` are attached when transitionning towards one direction
 * \`showClasses\` and \`hideClasses\` are attached when the transition has reached the show or hide state respectively
 *
 * @param config - the transition config
 * @returns the simple class transition
 */
export const createSimpleClassTransition = (config) => {
    const { animationPendingClasses, animationPendingShowClasses, animationPendingHideClasses, showClasses, hideClasses } = config;
    return createCSSTransition((element, direction, animated, context) => {
        removeClasses(element, showClasses);
        removeClasses(element, hideClasses);
        if (animated) {
            removeClasses(element, direction === 'show' ? animationPendingHideClasses : animationPendingShowClasses);
            if (!context.started) {
                context.started = true;
                // if the animation is starting, explicitly sets the initial state (reverse of the direction)
                // so that it is not impacted by another reflow done somewhere else before we had time to put
                // the right classes:
                const classes = direction === 'show' ? hideClasses : showClasses;
                addClasses(element, classes);
                reflow(element);
                removeClasses(element, classes);
            }
            addClasses(element, animationPendingClasses);
            reflow(element);
            addClasses(element, direction === 'show' ? animationPendingShowClasses : animationPendingHideClasses);
        }
        return () => {
            removeClasses(element, animationPendingClasses);
            removeClasses(element, animationPendingShowClasses);
            removeClasses(element, animationPendingHideClasses);
            addClasses(element, direction === 'show' ? showClasses : hideClasses);
        };
    });
};
`;export{e as default};
