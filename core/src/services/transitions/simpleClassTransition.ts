import {createCSSTransition} from './cssTransitions';
import {addClasses, reflow, removeClasses} from '../../utils/internal/dom';
import type {TransitionFn} from './baseTransitions';

/**
 * Configuration interface for simple class-based transitions.
 */
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

/**
 * Represents the context for a simple class transition.
 */
export interface SimpleClassTransitionContext {
	/**
	 * `true` is the transition has started
	 */
	started?: boolean;
}

/**
 * Create a transition based on css classes to attach.
 *
 * The config includes the classes that will be attached / removed depending on the transition state.
 * `animationPendingClasses` are the classes attached when the transition is in a pending state
 * `animationPendingShowClasses` and `animationPendingHideClasses` are attached when transitioning towards one direction
 * `showClasses` and `hideClasses` are attached when the transition has reached the show or hide state respectively
 *
 * @param config - the transition config
 * @returns the simple class transition
 */
export const createSimpleClassTransition = (config: SimpleClassTransitionConfig): TransitionFn => {
	const {animationPendingClasses, animationPendingShowClasses, animationPendingHideClasses, showClasses, hideClasses} = config;
	return createCSSTransition((element, direction, animated, context: SimpleClassTransitionContext) => {
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
