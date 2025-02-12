import {computed} from '@amadeus-it-group/tansu';
import {noop} from '../utils/func';
import {createBrowserStoreArrayDirective, directiveSubscribe, mergeDirectives} from '../utils/directive';
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

const {directive: storeArrayDirective, elements$} = createBrowserStoreArrayDirective();

const lastElement$ = computed(
	() => {
		const elements = elements$();
		return elements[elements.length - 1];
	},
	{equal: Object.is},
);
const inertAction$ = computed(() => setSiblingsInert(lastElement$()));

/**
 * A directive that sets the `inert` attribute on all sibling elements of the given element recursively up the DOM tree,
 * excluding the element itself and any `<script>` elements.
 */
export const siblingsInert: Directive = mergeDirectives(storeArrayDirective, directiveSubscribe(inertAction$));
