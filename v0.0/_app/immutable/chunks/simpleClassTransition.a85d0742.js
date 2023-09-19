const e=`import { createCSSTransition } from './cssTransitions';
import { addClasses, reflow, removeClasses } from './utils';
export const createSimpleClassTransition = ({ animationPendingClasses, animationPendingShowClasses, animationPendingHideClasses, showClasses, hideClasses, }) => createCSSTransition((element, direction, animation, context) => {
    removeClasses(element, showClasses);
    removeClasses(element, hideClasses);
    if (animation) {
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
`;export{e as default};
