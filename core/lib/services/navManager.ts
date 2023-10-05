import type {Directive} from '../types';
import {compareDomOrder} from './sortUtils';
import {registrationArray} from './directiveUtils';
import {computed} from '@amadeus-it-group/tansu';

export type NavManager = ReturnType<typeof createNavManager>;

// cf https://html.spec.whatwg.org/multipage/input.html#concept-input-apply
const textInputTypes = new Set(['text', 'search', 'url', 'tel', 'password']);
const isTextInput = (element: any): element is HTMLInputElement => element instanceof HTMLInputElement && textInputTypes.has(element.type);

export const createNavManager = () => {
	const array$ = registrationArray<HTMLElement>();
	const sortedArray$ = computed(() => [...array$()].sort(compareDomOrder));
	const directive: Directive = (element) => {
		const onKeyDown = (event: KeyboardEvent) => {
			let move = 0;
			switch (event.key) {
				case 'ArrowLeft':
					move = -1;
					break;
				case 'ArrowRight':
					move = 1;
					break;
			}
			if (isTextInput(event.target)) {
				const cursorPosition = event.target.selectionStart === event.target.selectionEnd ? event.target.selectionStart : null;
				if ((cursorPosition !== 0 && move < 0) || (cursorPosition !== event.target.value.length && move > 0)) {
					move = 0;
				}
			}
			if (move != 0) {
				const array = sortedArray$();
				const currentIndex = array.indexOf(element);
				const newIndex = currentIndex + move;
				if (newIndex < array.length && newIndex >= 0) {
					const newItem = array[newIndex];
					event.preventDefault();
					newItem.focus();
					if (isTextInput(newItem)) {
						const position = move < 0 ? newItem.value.length : 0;
						newItem.setSelectionRange(position, position);
					}
				}
			}
		};
		element.addEventListener('keydown', onKeyDown);
		const unregister = array$.register(element);
		return {
			destroy() {
				element.removeEventListener('keydown', onKeyDown);
				unregister();
			},
		};
	};

	return {directive};
};
