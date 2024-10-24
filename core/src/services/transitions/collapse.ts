import {isBrowserHTMLElement} from '../../utils/directive';
import {addClasses, reflow, removeClasses} from '../../utils/internal/dom';
import type {TransitionFn} from './baseTransitions';
import {createCSSTransition} from './cssTransitions';

/**
 * Represents the context for a collapsible element.
 */
export interface CollapseContext {
	/**
	 * the maximum size of the collapseable content.
	 */
	maxSize?: string;
	/**
	 * the minimum size of the collapseable content
	 */
	minSize?: string;
}

/**
 * Configuration options for the collapse transition.
 */
export interface CollapseConfig {
	/**
	 * the direction in which the collapsing is performed
	 */
	dimension?: 'width' | 'height';
	/**
	 * the list of classes to add to the collapsable element when shown
	 */
	showClasses?: string[];
	/**
	 * the list of classes to add to the collapsable element when collapsed
	 */
	hideClasses?: string[];
	/**
	 * the list of classes to add to the collapsable element while transitioning
	 */
	animationPendingClasses?: string[];
}

/**
 * Create a collapse transition.
 *
 * The transition attaches / removes classes during the different states of the collapse transition.
 * It also updates the dimension value when reaching a non-pending state.
 *
 * @param config - the collapse config
 * @param config.dimension - the dimension, `height` or `width`, on which the collapse applies
 * @param config.showClasses - the classes to attach when the element is fully visible
 * @param config.hideClasses - the classes to attach when the element is fully collapsed
 * @param config.animationPendingClasses - the classes to attach when the transition is pending
 * @returns the collapse transition
 */
export const createCollapseTransition = ({
	dimension = 'height',
	showClasses,
	hideClasses,
	animationPendingClasses,
}: CollapseConfig = {}): TransitionFn =>
	createCSSTransition((element, direction, animated, context: CollapseContext) => {
		if (animated && isBrowserHTMLElement(element)) {
			let {maxSize, minSize} = context;

			if (!maxSize) {
				// measure the element in its show state
				removeClasses(element, animationPendingClasses);
				removeClasses(element, hideClasses);
				addClasses(element, showClasses);
				maxSize = element.getBoundingClientRect()[dimension] + 'px';
				context.maxSize = maxSize;
			}

			if (!minSize) {
				// measure the element in its hide state
				removeClasses(element, animationPendingClasses);
				removeClasses(element, showClasses);
				addClasses(element, hideClasses);
				minSize = element.getBoundingClientRect()[dimension] + 'px';
				context.minSize = minSize;
			}

			removeClasses(element, showClasses);
			removeClasses(element, hideClasses);

			const values = direction === 'show' ? [minSize, maxSize] : [maxSize, minSize];
			element.style[dimension] = values[0];
			reflow(element); // explicitly applies the initial state
			addClasses(element, animationPendingClasses);
			reflow(element);
			element.style[dimension] = values[1];
		} else {
			removeClasses(element, direction === 'show' ? hideClasses : showClasses);
		}
		return () => {
			removeClasses(element, animationPendingClasses);
			addClasses(element, direction === 'show' ? showClasses : hideClasses);
			element.style[dimension] = '';
		};
	});
