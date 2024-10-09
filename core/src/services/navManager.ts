import {computed, type ReadableSignal, writable} from '@amadeus-it-group/tansu';
import {browserDirective, registrationArray} from '../utils/directive';
import {computeCommonAncestor} from '../utils/internal/dom';
import {isFocusable} from '../utils/internal/isFocusable';
import {compareDomOrder} from '../utils/internal/sort';
import {getTextDirection} from '../utils/internal/textDirection';
import type {Directive, SSRHTMLElement} from '../types';

/**
 * A type representing a function that determines the neighboring element to focus on.
 * @returns The next HTMLElement to focus on, or null if no suitable element is found.
 */
export type FocusNeighbour = (arg?: {event?: Event; referenceElement?: HTMLElement | null}) => HTMLElement | null;

/**
 * A type representing a function that focuses on the end element.
 * @returns The HTMLElement that was focused, or null if no element was focused.
 */
export type FocusEnd = (arg?: {event?: Event}) => HTMLElement | null;

/**
 * Represents a navigation manager that handles focusable elements in the DOM.
 *
 * @template T - The type of the configuration for the navigation manager items.
 */
export type NavManager<T> = {
	/**
	 * Store containing the navigable elements in DOM order
	 */
	elementsInDomOrder$: ReadableSignal<HTMLElement[]>;
	/**
	 * Directive to attach the nav manager
	 */
	directive: Directive<NavManagerItemConfig<T>, SSRHTMLElement>;
	/**
	 * Refresh the elements list.
	 * @param now force the instant refresh of the elements
	 */
	refreshElements: (now?: boolean) => void;
	/**
	 * Focus the element at the given idex.
	 * If the element at the given index is not focusable, use the moveDirection to step into the next focusable element.
	 * @param index the index of the element to focus
	 * @param moveDirection a move direction
	 * @returns the new focusable element if found, null otherwise
	 */
	focusIndex: (index: number, moveDirection: -1 | 0 | 1) => HTMLElement | null;
	/**
	 * Focus the previous element, respecting the anscestor direction.
	 */
	focusPrevious: FocusNeighbour;
	/**
	 * Focus the next element, respecting the anscestor direction.
	 */
	focusNext: FocusNeighbour;
	/**
	 * Focus the first element, respecting the anscestor direction.
	 */
	focusFirst: FocusEnd;
	/**
	 * Focus the element at the left-end of the list.
	 */
	focusFirstLeft: FocusEnd;
	/**
	 * Focus the element at the right-end of the list.
	 */
	focusFirstRight: FocusEnd;
	/**
	 * Focus the last element, respecting the anscestor direction.
	 */
	focusLast: FocusEnd;
	/**
	 * Focus the next focusable element to the left of the currently focused element.
	 */
	focusLeft: FocusNeighbour;
	/**
	 * Focus the next focusable element to the right of the currently focused element.
	 */
	focusRight: FocusNeighbour;
};

// cf https://html.spec.whatwg.org/multipage/input.html#concept-input-apply
const textInputTypes = new Set(['text', 'search', 'url', 'tel', 'password']);
const isTextInput = (element: any): element is HTMLInputElement => element instanceof HTMLInputElement && textInputTypes.has(element.type);

/**
 * Returns the key name given the keyboard event. The key name is built using event.key (such as ArrowLeft, PageDown...),
 * prefixed with the modifiers. If present, modifiers are always in the same order: Meta+Ctrl+Alt+Shift+...
 * @param event - keyboard event
 * @returns the name of the key, including modifiers
 */
export const getKeyName = (event: KeyboardEvent): string => {
	let key = event.key;
	if (event.shiftKey) {
		key = `Shift+${key}`;
	}
	if (event.altKey) {
		key = `Alt+${key}`;
	}
	if (event.ctrlKey) {
		key = `Ctrl+${key}`;
	}
	if (event.metaKey) {
		key = `Meta+${key}`;
	}
	return key;
};

/**
 * Returns true if the keyboard event is an ArrowLeft, ArrowRight, Home or End key press that should make the cursor move inside
 * the input and false otherwise (i.e. the key is not ArrowLeft, ArrowRight, Home or End key, or that would not make the cursor move
 * because it is already at one end of the input)
 * @param event - keyboard event
 * @returns true if the keyboard event is an ArrowLeft, ArrowRight, Home or End key press that should make the cursor move inside
 * the input and false otherwise.
 */
export const isInternalInputNavigation = (event: KeyboardEvent): boolean => {
	const {target, key} = event;
	if (isTextInput(target) && (key === 'ArrowLeft' || key === 'ArrowRight' || key === 'Home' || key === 'End')) {
		let startPosition: boolean;
		if (key === 'ArrowLeft' || key === 'ArrowRight') {
			const direction = getTextDirection(target);
			startPosition = key === (direction === 'ltr' ? 'ArrowLeft' : 'ArrowRight');
		} else {
			startPosition = key === 'Home';
		}
		const cursorPosition = target.selectionStart === target.selectionEnd ? target.selectionStart : null;
		if ((startPosition && cursorPosition !== 0) || (!startPosition && cursorPosition !== target.value.length)) {
			// let the text input process the key
			return true;
		}
	}
	return false;
};

/**
 * Type of a key handler of the navigation manager.
 * A key handler receives an object as its parameter, with the following properties:
 * - event: key event
 * - directiveElement: DOM element which has the navigation manager directive
 * - navManager: navigation manager instance
 * @template T - The type of the context object, defaults to `any`.
 */
export type NavManagerKeyHandler<T = any> = (info: {directiveElement: HTMLElement; event: Event; navManager: NavManager<T>; context?: T}) => void;

/**
 * Configuration object for a navigation manager item.
 *
 * @template T - The type of the context object.
 */
export interface NavManagerItemConfig<T = any> {
	/**
	 * Map of key handlers.
	 * The key in the map should match the result of calling {@link getKeyName} on the key event (for example "ArrowLeft" or "Ctrl+PageDown").
	 * The value in the map is the corresponding key handler.
	 */
	keys?: Record<string, NavManagerKeyHandler<T>>;

	/**
	 * Function returning DOM elements to include in the navigation manager.
	 * It receives as a parameter the DOM element on which the navigation manager directive is used.
	 * If not specified, the default selector function only returns the element on which the navigation manager directive is used.
	 */
	selector?: (directiveElement: HTMLElement) => Iterable<HTMLElement>;

	/**
	 *
	 */
	context?: T;
}

const defaultSelector: NavManagerItemConfig<any>['selector'] = (directiveElement: HTMLElement) => [directiveElement];

/**
 * Returns a new instance of the navigation manager.
 *
 * The navigation manager simplifies keyboard navigation for a set of DOM elements.
 * It provides a directive to use on some DOM elements, both to add the keydown event handler and to specify which elements should be managed
 * (either by directly putting the directive on those elements, or by putting the directive on a parent element and
 * specifying which child elements should be included through a selector function).
 *
 * It provides some utilities to move the focus between those elements (focusFirst/focusLast, focusLeft/focusRight, focusPrevious/focusNext).
 *
 * @template T - The type of the context object used in the navigation manager.
 * @returns {NavManager<T>} An object containing methods and properties for managing focus navigation.
 */
export const createNavManager = <T>(): NavManager<T> => {
	const directiveInstances$ = registrationArray<() => Iterable<HTMLElement>>();
	const elementsRefresh$ = writable({});
	const refreshElements = (now = true) => {
		elementsRefresh$.set({});
		if (now) {
			commonAncestor$();
			elementsInDomOrder$();
		}
	};
	const elements$ = computed(() => {
		elementsRefresh$();
		const res: HTMLElement[] = [];
		for (const item of directiveInstances$()) {
			res.push(...item());
		}
		return res;
	});
	const commonAncestor$ = computed(() => computeCommonAncestor(elements$()), {equal: Object.is});
	const elementsInDomOrder$ = computed(() => [...elements$()].sort(compareDomOrder));

	const ancestorDirection = () => {
		const commonAncestor = commonAncestor$();
		return commonAncestor ? getTextDirection(commonAncestor) : 'ltr';
	};

	const preventDefaultIfRelevant = (value: HTMLElement | null, event?: Event) => {
		if (value) {
			event?.preventDefault();
		}
		return value;
	};

	const focusIndex = (index: number, moveDirection: -1 | 0 | 1 = 0): HTMLElement | null => {
		const array = elementsInDomOrder$();
		while (index >= 0 && index < array.length) {
			const newItem = array[index];
			if (isFocusable(newItem)) {
				newItem.focus();
				if (moveDirection != 0 && isTextInput(newItem)) {
					const changeDirection = ancestorDirection() !== getTextDirection(newItem);
					const position = moveDirection > 0 !== changeDirection ? 0 : newItem.value.length;
					newItem.setSelectionRange(position, position, position === 0 ? 'forward' : 'backward');
				}
				return newItem;
			}
			if (moveDirection === 0) {
				break;
			} else {
				index += moveDirection;
			}
		}
		return null;
	};

	const createFocusNeighbour =
		(moveDirection: 1 | -1) =>
		({
			event,
			referenceElement = (event?.target as HTMLElement) ?? document.activeElement,
		}: {
			event?: Event;
			referenceElement?: HTMLElement | null;
		} = {}): HTMLElement | null => {
			const curIndex = referenceElement ? elementsInDomOrder$().indexOf(referenceElement) : -1;
			if (curIndex > -1) {
				return preventDefaultIfRelevant(focusIndex(curIndex + moveDirection, moveDirection), event);
			}
			return null;
		};

	const directive = browserDirective((directiveElement: HTMLElement, config: NavManagerItemConfig<T>) => {
		const onKeyDown = (event: KeyboardEvent) => {
			if (isInternalInputNavigation(event)) {
				return;
			}
			const keyName = getKeyName(event);
			const handler = config.keys?.[keyName];
			if (handler) {
				refreshElements(false);
				handler({event, directiveElement, navManager, context: config.context});
			}
		};
		directiveElement.addEventListener('keydown', onKeyDown);
		const unregister = directiveInstances$.register(() => (config?.selector ?? defaultSelector)(directiveElement));
		return {
			update(newConfig: NavManagerItemConfig<T>) {
				config = newConfig;
			},
			destroy() {
				directiveElement.removeEventListener('keydown', onKeyDown);
				unregister();
			},
		};
	});

	const focusPrevious = createFocusNeighbour(-1);
	const focusNext = createFocusNeighbour(1);
	const focusFirst = ({event}: {event?: Event} = {}) => preventDefaultIfRelevant(focusIndex(0, 1), event);
	const focusLast = ({event}: {event?: Event} = {}) => preventDefaultIfRelevant(focusIndex(elementsInDomOrder$().length - 1, -1), event);
	const focusLeft = (...args: Parameters<typeof focusNext>) => (ancestorDirection() === 'rtl' ? focusNext : focusPrevious)(...args);
	const focusRight = (...args: Parameters<typeof focusNext>) => (ancestorDirection() === 'rtl' ? focusPrevious : focusNext)(...args);
	const focusFirstLeft = (...args: Parameters<typeof focusLast>) => (ancestorDirection() === 'rtl' ? focusLast : focusFirst)(...args);
	const focusFirstRight = (...args: Parameters<typeof focusLast>) => (ancestorDirection() === 'rtl' ? focusFirst : focusLast)(...args);

	const navManager = {
		elementsInDomOrder$,
		directive,
		focusIndex,
		focusPrevious,
		focusNext,
		focusFirst,
		focusFirstLeft,
		focusFirstRight,
		focusLast,
		focusLeft,
		focusRight,
		refreshElements,
	};
	return navManager;
};
