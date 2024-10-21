import {intersectionApi} from '$lib/stores';
import {navigating as appNavigating} from '$app/stores';
import {fromStore} from 'svelte/store';

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
	const navigating = fromStore(appNavigating);
	function directive(node: HTMLElement) {
		container = node;
	}

	$effect(() => {
		if (!navigating.current) {
			intersectionApi.patch({
				elements: container ? getElements(container) : [],
			});
		}
	});

	return directive;
}
