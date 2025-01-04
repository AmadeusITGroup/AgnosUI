import Tooltip from '$lib/tooltip/Tooltip.svelte';
import {browserDirective} from '@agnos-ui/svelte-bootstrap/utils/directive';
import {createFloatingUI} from '@agnos-ui/svelte-bootstrap/services/floatingUI';
import {flip, offset} from '@floating-ui/dom';
import {mount, unmount} from 'svelte';

export const tooltip = browserDirective((button: HTMLElement, options: {content: string}) => {
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
	const props = $state({
		content: options.content,
		placement$,
		directive: floatingDirective,
		arrowDirective,
	});
	let componentInstance: Record<string, any> | undefined;

	const directiveInstance = referenceDirective(button);

	button.addEventListener('mouseenter', show);
	button.addEventListener('mouseleave', hide);

	function show() {
		if (!componentInstance) {
			componentInstance = mount(Tooltip, {
				target: document.body,
				props,
			});
		}
	}

	function hide() {
		if (componentInstance) {
			void unmount(componentInstance);
			componentInstance = undefined;
		}
	}

	return {
		update(options: {content: string}) {
			props.content = options.content;
		},
		destroy() {
			hide();
			directiveInstance?.destroy?.();
			button.removeEventListener('mouseenter', show);
			button.removeEventListener('mouseleave', hide);
		},
	};
});
