const s=`import {createSimpleClassTransition} from '@agnos-ui/core/services/transitions/simpleClassTransition';

export const fadeTransition = createSimpleClassTransition({
	animationPendingClasses: ['fade'],
	animationPendingShowClasses: ['show'],
	showClasses: ['show', 'fade'],
	hideClasses: ['d-none', 'fade'],
});
`;export{s as default};
