import {computed} from '@amadeus-it-group/tansu';
import type {Directive} from '../types';
import {createConditionalBrowserStoreArrayDirective, directiveSubscribe, mergeDirectives} from '../utils/directive';
import {noop} from '../utils/func';

/**
 * Attribute name to mark elements that should be ignored when applying the inert attribute to siblings.
 */
const ignoreInertAttributeName = 'data-agnos-ignore-inert';

/**
 * Internal function to apply inert attribute to siblings recursively up the DOM tree.
 * @param element  The target element whose siblings will be set to inert.
 * @returns A function to revert the inert attributes to their original state.
 */
const applyInertToSiblingsRecursively = (element: Element) => {
	const inertValues = new Map<Element, boolean>();

	const recursiveHelper = (element: Element) => {
		const parent = element.parentElement;
		if (parent && element !== document.body) {
			Array.from(parent.children).forEach((sibling) => {
				if (sibling !== element && sibling.nodeName !== 'SCRIPT' && !sibling.hasAttribute(ignoreInertAttributeName)) {
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

/**
 * Applies the inert attribute to sibling elements of the given element.
 * Always calls the stored internalRevert function before reassigning the function
 * @param element The target element whose siblings will be set to inert.
 */
const setSiblingsInert = (element: HTMLElement | null | undefined) => {
	internalRevert();
	internalRevert = element ? applyInertToSiblingsRecursively(element) : noop;
};

const {directive: storeArrayDirective, elements$} = createConditionalBrowserStoreArrayDirective();

/**
 * Computed store containing the last element to which siblingsInert directive is applied
 */
const lastTrackedElement$ = computed(
	() => {
		const elements = elements$();
		return elements[elements.length - 1];
	},
	{equal: Object.is},
);
/**
 * Computed action to update inert state whenever the last tracked element changes
 */
const updateInertState$ = computed(() => setSiblingsInert(lastTrackedElement$()));

/**
 * Directive to manage focus trapping by setting the `inert` attribute on sibling elements.
 * This is useful for modal dialogs or overlays where interaction should be limited to a specific subtree.
 *
 * - Recursively traverses up the DOM tree.
 * - Sets `inert` on all siblings except the target element and `<script>` tags.
 * - Use `data-agnos-ignore-inert` to avoid inert attribute for a specified element.
 *
 * Takes boolean or undefined as value:
 * - `true` or `undefined`: Apply inert to siblings.
 * - `false`: Do not apply inert to siblings.
 *
 * Automatically reverts when the target element changes or is removed.
 */
export const siblingsInert: Directive<boolean | undefined> = mergeDirectives(storeArrayDirective, directiveSubscribe(updateInertState$));
