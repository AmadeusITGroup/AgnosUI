import type {TransitionFn} from '@agnos-ui/core/services/transitions/baseTransitions';
import {createSimpleClassTransition} from '@agnos-ui/core/services/transitions/simpleClassTransition';

/**
 * Defines a fade transition for UI elements.
 *
 * This transition applies specific CSS classes to handle the animation states
 * for showing and hiding elements with a fade effect.
 */
export const fadeTransition: TransitionFn = createSimpleClassTransition({
	animationPendingClasses: ['fade'],
	animationPendingShowClasses: ['show'],
	showClasses: ['show', 'fade'],
	hideClasses: ['d-none', 'fade'],
});
