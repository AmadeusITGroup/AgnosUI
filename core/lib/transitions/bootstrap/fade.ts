import {createSimpleClassTransition} from '../simpleClassTransition.js';

export const fadeTransition = createSimpleClassTransition({
	animationPendingClasses: ['fade'],
	animationPendingShowClasses: ['show'],
	showClasses: ['show'],
	hideClasses: ['d-none'],
});
