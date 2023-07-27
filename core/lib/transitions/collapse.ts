import {createCSSTransition} from './cssTransitions';
import {addClasses, reflow, removeClasses} from './utils';

export interface CollapseContext {
	maxSize?: string;
	minSize?: string;
}

export interface CollapseConfig {
	dimension?: 'width' | 'height';
	showClasses?: string[];
	hideClasses?: string[];
	animationPendingClasses?: string[];
}

export const createCollapseTransition = ({dimension = 'height', showClasses, hideClasses, animationPendingClasses}: CollapseConfig = {}) =>
	createCSSTransition((element: HTMLElement, direction, animation, context: CollapseContext) => {
		if (animation) {
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
