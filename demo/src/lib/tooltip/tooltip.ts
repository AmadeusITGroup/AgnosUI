import Tooltip from '$lib/tooltip/Tooltip.svelte';
import type {Instance} from '@popperjs/core';
import {createPopper} from '@popperjs/core';

export function tooltip(node: HTMLElement, options: {content: string; placement?: 'top' | 'right' | 'bottom' | 'left'}) {
	const button = node;
	const content = options.content;
	const placement = options.placement;

	let popperInstance: Instance | null;
	let componentInstance: Tooltip;

	button.addEventListener('mouseover', show);
	button.addEventListener('mouseout', hide);

	function show() {
		componentInstance = new Tooltip({
			target: document.body,
			props: {content, placement},
		});

		const tooltip = document.querySelector('#tooltip') as HTMLElement;
		popperInstance = createPopper(button, tooltip, {
			modifiers: [
				{
					name: 'offset',
					options: {
						offset: [0, 8],
					},
				},
			],
		});
	}

	function hide() {
		if (popperInstance) {
			popperInstance.destroy();
			popperInstance = null;
		}
		componentInstance.$destroy();
	}

	return {
		destroy() {
			button.removeEventListener('mouseover', show);
			button.removeEventListener('mouseout', hide);
		},
	};
}
