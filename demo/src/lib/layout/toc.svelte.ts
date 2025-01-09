import {intersectionApi} from '$lib/stores';
import {navigating} from '$app/state';

/**
 * Create a directive to facilitate the interception usage in Svelte
 * @param getElements function that will retrieve the elements to observe
 * @returns the directive to be used in the main container to observe
 *
 * @example
 *
 * ```typescript
 * const tocDirective = createTOC((node) => [...node.querySelectorAll('section')] as HTMLElement[]);
 * ```
 *
 * ```html
 * <div use:tocDirective>...</div>
 * ```
 */
export function createTOC(getElements: (node: HTMLElement) => HTMLElement[]) {
	let container = $state<HTMLElement>();
	function directive(node: HTMLElement) {
		container = node;
	}

	$effect(() => {
		if (!navigating.to) {
			intersectionApi.patch({
				elements: container ? getElements(container) : [],
			});
		}
	});

	return directive;
}
