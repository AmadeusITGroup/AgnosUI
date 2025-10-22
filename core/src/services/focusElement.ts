import type {Directive} from '../types';
import {browserDirective} from '../utils/directive';
import {isFocusable} from '../utils/internal/isFocusable';

interface StackEntry {
	element: HTMLElement | null;
	previousElement: Element | null;
}
const stack: StackEntry[] = [];
let stackProcessPlanned = false;

/**
 * Internal function to process the focus stack and set focus to the appropriate element.
 *
 * Goes through the stack from top to bottom, focusing the first focusable element found.
 */
const processStack = () => {
	stackProcessPlanned = false;
	const candidates: HTMLElement[] = [];
	while (stack.length > 0) {
		const top = stack[stack.length - 1];
		if (top.element) {
			candidates.push(top.element);
			break;
		} else {
			if (top.previousElement) {
				candidates.push(top.previousElement as HTMLElement);
			}
			stack.pop();
		}
	}
	for (const candidate of candidates) {
		if (isFocusable(candidate)) {
			candidate.focus();
			return;
		}
	}
};

const planProcessStack = () => {
	if (!stackProcessPlanned) {
		stackProcessPlanned = true;
		setTimeout(processStack, 0);
	}
};

/**
 * Directive to focus an element and manage focus stack.
 * When the element is destroyed, focus returns to the previous focusable element in the stack.
 *
 * @param element - The HTML element to focus.
 * @returns An object with a destroy method to remove the element from the focus stack.
 */
export const focusElement: Directive = browserDirective((element) => {
	const stackEntry: StackEntry = {element, previousElement: document.activeElement};
	stack.push(stackEntry);
	planProcessStack();
	return {
		destroy() {
			stackEntry.element = null;
			planProcessStack();
		},
	};
});
