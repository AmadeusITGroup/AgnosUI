import Tooltip from '$lib/tooltip/Tooltip.svelte';
import {browserDirective} from '@agnos-ui/svelte-bootstrap/utils';
import {createFloatingUI} from '@agnos-ui/svelte-bootstrap/services';
import {flip, offset} from '@floating-ui/dom';

export const tooltip = browserDirective((button: HTMLElement, options: {content: string}) => {
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
		update(options: {content: string}) {
			if (componentInstance) {
				componentInstance.content = options.content;
			}
		},
		destroy() {
			hide();
			directiveInstance?.destroy?.();
			button.removeEventListener('mouseenter', show);
			button.removeEventListener('mouseleave', hide);
		},
	};
});
