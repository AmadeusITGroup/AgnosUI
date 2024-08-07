import {intersectionApi} from '$lib/stores';
import {afterUpdate} from 'svelte';

const textToLinesRegex = /\r/g;

export function getTitle(title: string, frameworkName = '', packageType = '') {
	return `${title} - ${frameworkName ? `${frameworkName.slice(0, 1).toUpperCase() + frameworkName.slice(1)}${packageType ? ` ${packageType.slice(0, 1).toUpperCase() + packageType.slice(1)}` : ''} - ` : ''}AgnosUI`;
}

/**
 * Split all the lines of a text, so that it can be easily used in a loop
 * @param text text to split
 */
export function textToLines(text: string) {
	return text.replace(textToLinesRegex, '').split('\n\n');
}

const arrowFunctionRegExp = /^\([^(]*\)[^=]*=>/;
const functionRegExp = /^function/;
const slotRegExp = /^Slot/;
export function normalizedType(type: string) {
	return arrowFunctionRegExp.test(type) || functionRegExp.test(type) ? 'function' : slotRegExp.test(type) ? 'slot' : type;
}

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
	let container: HTMLElement;
	function directive(node: HTMLElement) {
		container = node;
	}

	afterUpdate(() => {
		intersectionApi.patch({
			elements: container ? getElements(container) : [],
		});
	});

	return directive;
}
