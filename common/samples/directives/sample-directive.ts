import type {Directive} from '@agnos-ui/core/types';
import {browserDirective} from '@agnos-ui/core/utils';

export const createSampleDirective: Directive<string> = browserDirective((element: HTMLElement, text: string) => {
	console.log('Directive has been executed on node ', element.id);
	const clickListener = (event: Event) => {
		console.log(text, event.target);
	};
	element.addEventListener('click', clickListener);
	return {
		update: (newText) => (text = newText),
		destroy: () => {
			element.removeEventListener('click', clickListener);
			console.log('Destroy function executed ', element.id);
		},
	};
});
