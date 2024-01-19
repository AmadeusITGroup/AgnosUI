import {computed, writable} from '@amadeus-it-group/tansu';
import {registrationArray} from '../utils/directive';
import {computeCommonAncestor} from '../utils/internal/dom';
import {isFocusable} from '../utils/internal/isFocusable';
import {compareDomOrder} from '../utils/internal/sort';
import {getTextDirection} from '../utils/internal/textDirection';

export type NavManager = ReturnType<typeof createNavManager>;

// cf https://html.spec.whatwg.org/multipage/input.html#concept-input-apply
const textInputTypes = new Set(['text', 'search', 'url', 'tel', 'password']);
const isTextInput = (element: any): element is HTMLInputElement => element instanceof HTMLInputElement && textInputTypes.has(element.type);

/**
 * Returns the key name given the keyboard event. The key name is built using event.key (such as ArrowLeft, PageDown...),
 * prefixed with the modifiers. If present, modifiers are always in the same order: Meta+Ctrl+Alt+Shift+...
 * @param event - keyboard event
 * @returns the name of the key, including modifiers
 */
export const getKeyName = (event: KeyboardEvent) => {
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
export const isInternalInputNavigation = (event: KeyboardEvent) => {
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
 */
export type NavManagerKeyHandler<T = any> = (info: {
	directiveElement: HTMLElement;
	event: KeyboardEvent;
	navManager: NavManager;
	context?: T;
}) => void;

/**
 * Type of the parameter of the navigation manager directive.
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
 * @returns a new instance of the navigation manager
 */
export const createNavManager = () => {
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

	const preventDefaultIfRelevant = (value: HTMLElement | null, event?: KeyboardEvent) => {
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
			event?: KeyboardEvent;
			referenceElement?: HTMLElement | null;
		} = {}): HTMLElement | null => {
			const curIndex = referenceElement ? elementsInDomOrder$().indexOf(referenceElement) : -1;
			if (curIndex > -1) {
				return preventDefaultIfRelevant(focusIndex(curIndex + moveDirection, moveDirection), event);
			}
			return null;
		};

	const directive = <T = any>(directiveElement: HTMLElement, config: NavManagerItemConfig<T>) => {
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
	};

	const focusPrevious = createFocusNeighbour(-1);
	const focusNext = createFocusNeighbour(1);
	const focusFirst = ({event}: {event?: KeyboardEvent} = {}) => preventDefaultIfRelevant(focusIndex(0, 1), event);
	const focusLast = ({event}: {event?: KeyboardEvent} = {}) => preventDefaultIfRelevant(focusIndex(elementsInDomOrder$().length - 1, -1), event);
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
