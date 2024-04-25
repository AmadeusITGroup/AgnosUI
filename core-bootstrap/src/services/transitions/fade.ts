import type {TransitionFn} from '@agnos-ui/core/services/transitions/baseTransitions';
import {createSimpleClassTransition} from '@agnos-ui/core/services/transitions/simpleClassTransition';

export const fadeTransition: TransitionFn = createSimpleClassTransition({
	animationPendingClasses: ['fade'],
	animationPendingShowClasses: ['show'],
	showClasses: ['show', 'fade'],
	hideClasses: ['d-none', 'fade'],
});
