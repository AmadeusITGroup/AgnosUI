import {createSimpleClassTransition} from '../simpleClassTransition';

export const fadeTransition = createSimpleClassTransition({
	animationPendingClasses: ['fade'],
	animationPendingShowClasses: ['show'],
	showClasses: ['show', 'fade'],
	hideClasses: ['d-none', 'fade'],
});
