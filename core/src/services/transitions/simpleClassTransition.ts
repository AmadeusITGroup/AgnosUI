import {createCSSTransition} from './cssTransitions';
import {addClasses, reflow, removeClasses} from '../../utils/internal/dom';

export interface SimpleClassTransitionConfig {
	/**
	 * a list of classes to add to the collapsable element while transitioning
	 */
	animationPendingClasses?: string[];
	/**
	 * a list of classes to add to the collapsable element while transitioning towards the show state
	 */
	animationPendingShowClasses?: string[];
	/**
	 * a list of classes to add to the collapsable element while transitioning towards the hide state
	 */
	animationPendingHideClasses?: string[];
	/**
	 * the list of classes to add to the element when shown
	 */
	showClasses?: string[];
	/**
	 * the list of classes to add to the element when hidden
	 */
	hideClasses?: string[];
}

export interface SimpleClassTransitionContext {
	/**
	 * `true` is the transition has started
	 */
	started?: boolean;
}

export const createSimpleClassTransition = ({
	animationPendingClasses,
	animationPendingShowClasses,
	animationPendingHideClasses,
	showClasses,
	hideClasses,
}: SimpleClassTransitionConfig) =>
	createCSSTransition((element, direction, animation, context: SimpleClassTransitionContext) => {
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
