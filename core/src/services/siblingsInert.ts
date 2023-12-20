import {computed} from '@amadeus-it-group/tansu';
import {noop} from '../utils/internal/func';
import {createStoreArrayDirective, directiveSubscribe, mergeDirectives} from '../utils/directive';
import type {Directive} from '../types';

const internalSetSiblingsInert = (element: Element) => {
	const inertValues = new Map<Element, boolean>();

	const recursiveHelper = (element: Element) => {
		const parent = element.parentElement;
		if (parent && element !== document.body) {
			Array.from(parent.children).forEach((sibling) => {
				if (sibling !== element && sibling.nodeName !== 'SCRIPT') {
					inertValues.set(sibling, sibling.hasAttribute('inert'));
					sibling.toggleAttribute('inert', true);
				}
			});

			recursiveHelper(parent);
		}
	};

	recursiveHelper(element);

	return () =>
		inertValues.forEach((value, element) => {
			element.toggleAttribute('inert', value);
		});
};

let internalRevert = noop;

const setSiblingsInert = (element: HTMLElement | null | undefined) => {
	internalRevert();
	internalRevert = element ? internalSetSiblingsInert(element) : noop;
};

const {directive: storeArrayDirective, elements$} = createStoreArrayDirective();

const lastElement$ = computed(
	() => {
		const elements = elements$();
		return elements[elements.length - 1];
	},
	{equal: Object.is},
);
const inertAction$ = computed(() => setSiblingsInert(lastElement$()));

/**
 * sliblingsInert directive
 * When used on an element, all siblings of the element and of its ancestors will be inert with the inert attribute.
 * In case it is used on multiple elements, only the last one has an effect (the directive keeps a stack of elements
 * on which it is used, so when the last one disappears, the previous one in the list becomes the one in effect).
 */
export const sliblingsInert: Directive = mergeDirectives(storeArrayDirective, directiveSubscribe(inertAction$));
