import {createSimpleClassTransition, type TransitionFn} from '@agnos-ui/core/transitions';

export const fadeTransition: TransitionFn = createSimpleClassTransition({
	animationPendingClasses: ['fade'],
	animationPendingShowClasses: ['show'],
	showClasses: ['show', 'fade'],
	hideClasses: ['d-none', 'fade'],
});
