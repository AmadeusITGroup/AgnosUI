const e=`import type {Directive} from '@agnos-ui/core';

export const createSampleDirective: Directive<string> = (element: HTMLElement, text: string) => {
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
};
`;export{e as default};
