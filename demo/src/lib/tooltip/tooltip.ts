import Tooltip from '$lib/tooltip/Tooltip.svelte';
import {createFloatingUI} from '@agnos-ui/core/services/floatingUI';
import {flip, offset} from '@floating-ui/dom';

export function tooltip(button: HTMLElement, options: {content: string}) {
	const content = options.content;

	let componentInstance: Tooltip | undefined;

	const {
		directives: {floatingDirective, referenceDirective, arrowDirective},
		stores: {placement$},
	} = createFloatingUI({
		props: {
			arrowOptions: {
				padding: 6,
			},
			computePositionOptions: {
				placement: 'top',
				middleware: [offset(8), flip()],
			},
		},
	});

	const directiveInstance = referenceDirective(button);

	button.addEventListener('mouseenter', show);
	button.addEventListener('mouseleave', hide);

	function show() {
		if (!componentInstance) {
			componentInstance = new Tooltip({
				target: document.body,
				props: {content, placement$, directive: floatingDirective, arrowDirective},
			});
		}
	}

	function hide() {
		componentInstance?.$destroy();
		componentInstance = undefined;
	}

	return {
		destroy() {
			hide();
			directiveInstance?.destroy?.();
			button.removeEventListener('mouseenter', show);
			button.removeEventListener('mouseleave', hide);
		},
	};
}
