import {beforeEach, describe, expect, test, vi} from 'vitest';
import type {NavManagerItemConfig} from './navManager';
import {createNavManager, getKeyName, isInternalInputNavigation} from './navManager';

type ArrowKey = 'ArrowLeft' | 'ArrowRight';
const sendKey = (key: ArrowKey | 'Home' | 'End', altKey = false) =>
	document.activeElement!.dispatchEvent(new KeyboardEvent('keydown', {key, cancelable: true, bubbles: true, altKey}));

describe('getKeyName', () => {
	test('Basic functionalities', () => {
		expect(getKeyName(new KeyboardEvent('keydown', {key: 'ArrowLeft', shiftKey: true}))).toBe('Shift+ArrowLeft');
		expect(getKeyName(new KeyboardEvent('keydown', {key: 'ArrowLeft', altKey: true}))).toBe('Alt+ArrowLeft');
		expect(getKeyName(new KeyboardEvent('keydown', {key: 'ArrowLeft', ctrlKey: true}))).toBe('Ctrl+ArrowLeft');
		expect(getKeyName(new KeyboardEvent('keydown', {key: 'ArrowLeft', metaKey: true}))).toBe('Meta+ArrowLeft');
		expect(getKeyName(new KeyboardEvent('keydown', {key: 'ArrowLeft', shiftKey: true, altKey: true, ctrlKey: true, metaKey: true}))).toBe(
			'Meta+Ctrl+Alt+Shift+ArrowLeft',
		);
	});
});

for (const {direction, arrowNext, arrowPrevious} of [
	{direction: 'ltr', arrowNext: 'ArrowRight' as ArrowKey, arrowPrevious: 'ArrowLeft' as ArrowKey},
	{direction: 'rtl', arrowNext: 'ArrowLeft' as ArrowKey, arrowPrevious: 'ArrowRight' as ArrowKey},
]) {
	describe(`navManager (${direction})`, () => {
		let parentElement: HTMLElement;
		beforeEach(() => {
			parentElement = document.body.appendChild(document.createElement('div'));
			parentElement.setAttribute('dir', direction);
			return () => {
				parentElement.parentElement?.removeChild(parentElement);
			};
		});

		test('Basic functionalities', () => {
			parentElement.innerHTML = `
				<span id="element1" tabindex="-1"></span>
				<input type="checkbox" id="element2">
				<input type="text" id="element3" value="some content">
				<input type="checkbox" id="elementSkipped" disabled>
				<span id="element4" tabindex="-1"></span>
			`;
			const element1 = document.getElementById('element1')!;
			const element2 = document.getElementById('element2')!;
			const element3 = document.getElementById('element3') as HTMLInputElement;
			const elementSkipped = document.getElementById('elementSkipped')!; // disabled element, should be skipped
			const element4 = document.getElementById('element4')!;
			const navManager = createNavManager();
			const navManagerParams: NavManagerItemConfig = {
				keys: {
					ArrowRight: navManager.focusRight,
					ArrowLeft: navManager.focusLeft,
					'Alt+ArrowLeft': navManager.focusFirstLeft,
					'Alt+ArrowRight': navManager.focusFirstRight,
				},
			};
			const directive1 = navManager.directive(element1, navManagerParams);
			const directive2 = navManager.directive(element2, navManagerParams);
			// intentionnally not called in DOM order to check that the array is properly sorted:
			const directive4 = navManager.directive(element4, navManagerParams);
			const directiveElementSkipped = navManager.directive(elementSkipped, navManagerParams);
			const directive3 = navManager.directive(element3, navManagerParams);
			expect(navManager.focusLast()).toBe(element4);
			expect(document.activeElement).toBe(element4);
			expect(navManager.focusFirst()).toBe(element1);
			expect(document.activeElement).toBe(element1);
			expect(sendKey(arrowNext, true)).toBe(false);
			expect(document.activeElement).toBe(element4);
			expect(sendKey(arrowPrevious, true)).toBe(false);
			expect(document.activeElement).toBe(element1);
			expect(sendKey(arrowNext)).toBe(false);
			expect(document.activeElement).toBe(element2);
			expect(sendKey(arrowNext)).toBe(false);
			expect(document.activeElement).toBe(element3);
			element3.setSelectionRange(0, 0);
			expect(sendKey(arrowNext)).toBe(true);
			// as the cursor is not at the end yet, the focus did not move
			expect(document.activeElement).toBe(element3);
			element3.setSelectionRange(element3.value.length, element3.value.length);
			expect(sendKey(arrowNext)).toBe(false);
			expect(document.activeElement).toBe(element4);
			expect(sendKey(arrowNext)).toBe(true);
			// last element, the focus cannot move:
			expect(document.activeElement).toBe(element4);
			// now go backward:
			expect(sendKey(arrowPrevious)).toBe(false);
			expect(document.activeElement).toBe(element3);
			element3.setSelectionRange(1, 1);
			expect(sendKey(arrowPrevious)).toBe(true);
			// as the cursor is not at the beginning yet, the focus did not move
			expect(document.activeElement).toBe(element3);
			element3.setSelectionRange(0, 0);
			expect(sendKey(arrowPrevious)).toBe(false);
			expect(document.activeElement).toBe(element2);
			expect(sendKey(arrowPrevious)).toBe(false);
			expect(document.activeElement).toBe(element1);
			expect(sendKey(arrowPrevious)).toBe(true);
			// first element, the focus cannot move:
			expect(document.activeElement).toBe(element1);
			directive4?.destroy?.();
			expect(navManager.focusLast()).toBe(element3);
			expect(document.activeElement).toBe(element3);
			expect(navManager.focusPrevious()).toBe(element2);
			expect(document.activeElement).toBe(element2);
			expect(navManager.focusNext()).toBe(element3);
			expect(document.activeElement).toBe(element3);
			expect(navManager.focusNext()).toBe(null);
			expect(document.activeElement).toBe(element3);
			directive1?.destroy?.();
			directive2?.destroy?.();
			directive3?.destroy?.();
			directiveElementSkipped?.destroy?.();
		});

		test('Using selectors', () => {
			parentElement.innerHTML = `
				<div>
					<span id="element1" tabindex="-1"></span>
					<input type="checkbox" id="element2">
					<input type="text" id="element3" value="some content">
					<span id="element4" tabindex="-1"></span>
					<input type="checkbox" disabled>
				</div>
			`;
			const divElement = parentElement.firstElementChild as HTMLElement;
			const element1 = document.getElementById('element1')!;
			const element2 = document.getElementById('element2')!;
			const element3 = document.getElementById('element3') as HTMLInputElement;
			const element4 = document.getElementById('element4')!;
			const navManager = createNavManager();
			const selector = vi.fn(
				(divElement: HTMLElement) => divElement.querySelectorAll('span,input') as NodeListOf<HTMLSpanElement | HTMLInputElement>,
			);
			const directive = navManager.directive(divElement, {
				keys: {
					ArrowRight: navManager.focusRight,
					ArrowLeft: navManager.focusLeft,
				},
				selector,
			});
			expect(selector).not.to.toHaveBeenCalled();
			expect(navManager.focusLast()).toBe(element4);
			expect(selector).to.toHaveBeenCalledTimes(1); // called because it is the first time the elements list is needed
			expect(selector.mock.lastCall?.[0]).toBe(divElement);
			selector.mockClear();
			expect(document.activeElement).toBe(element4);
			expect(navManager.focusFirst()).toBe(element1);
			expect(document.activeElement).toBe(element1);
			expect(navManager.focusFirst()).toBe(element1);
			expect(selector).not.to.toHaveBeenCalled(); // not called because it was already computed
			navManager.refreshElements(); // will trigger the call to selector next time it is needed
			expect(selector).not.to.toHaveBeenCalled(); // it was not yet needed
			expect(navManager.focusFirst()).toBe(element1);
			expect(selector).to.toHaveBeenCalledTimes(1); // it was needed by focusFirst
			selector.mockClear();
			expect(document.activeElement).toBe(element1);
			expect(sendKey(arrowNext)).toBe(false);
			expect(selector).to.toHaveBeenCalledTimes(1); // the key handler automatically called refreshElements
			selector.mockClear();
			expect(document.activeElement).toBe(element2);
			expect(sendKey(arrowNext)).toBe(false);
			expect(selector).to.toHaveBeenCalledTimes(1);
			selector.mockClear();
			expect(document.activeElement).toBe(element3);
			element3.setSelectionRange(0, 0);
			expect(sendKey(arrowNext)).toBe(true);
			// as the cursor is not at the end yet, the focus did not move
			expect(selector).not.to.toHaveBeenCalled(); // the elements list did not need to be computed
			expect(document.activeElement).toBe(element3);
			element3.setSelectionRange(element3.value.length, element3.value.length);
			expect(sendKey(arrowNext)).toBe(false);
			expect(selector).to.toHaveBeenCalledTimes(1);
			selector.mockClear();
			expect(document.activeElement).toBe(element4);
			expect(sendKey(arrowNext)).toBe(true);
			// last element, the focus cannot move:
			expect(document.activeElement).toBe(element4);
			expect(selector).to.toHaveBeenCalledTimes(1);
			selector.mockClear();
			// now go backward:
			expect(sendKey(arrowPrevious)).toBe(false);
			expect(document.activeElement).toBe(element3);
			expect(selector).to.toHaveBeenCalledTimes(1);
			selector.mockClear();
			element3.setSelectionRange(1, 1);
			expect(sendKey(arrowPrevious)).toBe(true);
			// as the cursor is not at the beginning yet, the focus did not move
			expect(selector).not.to.toHaveBeenCalled(); // the elements list did not need to be computed
			expect(document.activeElement).toBe(element3);
			element3.setSelectionRange(0, 0);
			expect(sendKey(arrowPrevious)).toBe(false);
			expect(document.activeElement).toBe(element2);
			expect(selector).to.toHaveBeenCalledTimes(1);
			selector.mockClear();
			expect(sendKey(arrowPrevious)).toBe(false);
			expect(document.activeElement).toBe(element1);
			expect(selector).to.toHaveBeenCalledTimes(1);
			selector.mockClear();
			expect(sendKey(arrowPrevious)).toBe(true);
			expect(selector).to.toHaveBeenCalledTimes(1);
			selector.mockClear();
			directive?.destroy?.();
		});
	});
}

describe('isInternalInputNavigation', () => {
	let inputElement: HTMLInputElement;
	let events: boolean[] = [];

	beforeEach(() => {
		events = [];
		inputElement = document.createElement('input');
		inputElement.setAttribute('type', 'text');
		inputElement.setAttribute('dir', 'auto');
		document.body.appendChild(inputElement);
		inputElement.addEventListener('keydown', (event) => {
			events.push(isInternalInputNavigation(event));
		});
		return () => {
			inputElement.parentElement?.removeChild(inputElement);
		};
	});

	const expectEventsToBeAndReset = (internal: boolean) => {
		expect(events).toEqual([internal]);
		events = [];
	};

	test('left-to-right', () => {
		inputElement.value = 'hello';
		inputElement.focus();
		inputElement.setSelectionRange(0, 0);
		sendKey('ArrowLeft');
		expectEventsToBeAndReset(false);
		sendKey('ArrowRight');
		expectEventsToBeAndReset(true);
		sendKey('Home');
		expectEventsToBeAndReset(false);
		sendKey('End');
		expectEventsToBeAndReset(true);
		inputElement.setSelectionRange(2, 2);
		sendKey('ArrowLeft');
		expectEventsToBeAndReset(true);
		sendKey('ArrowRight');
		expectEventsToBeAndReset(true);
		sendKey('Home');
		expectEventsToBeAndReset(true);
		sendKey('End');
		expectEventsToBeAndReset(true);
		inputElement.setSelectionRange(5, 5);
		sendKey('ArrowRight');
		expectEventsToBeAndReset(false);
		sendKey('ArrowLeft');
		expectEventsToBeAndReset(true);
		sendKey('Home');
		expectEventsToBeAndReset(true);
		sendKey('End');
		expectEventsToBeAndReset(false);
		inputElement.setSelectionRange(0, 5);
		sendKey('ArrowRight');
		expectEventsToBeAndReset(true);
		sendKey('ArrowLeft');
		expectEventsToBeAndReset(true);
		sendKey('Home');
		expectEventsToBeAndReset(true);
		sendKey('End');
		expectEventsToBeAndReset(true);
	});

	test('right-to-left', () => {
		inputElement.value = '\u05e9\u05c1\u05b8\u05dc\u05d5\u05b9\u05dd';
		inputElement.focus();
		inputElement.setSelectionRange(0, 0);
		sendKey('ArrowRight');
		expectEventsToBeAndReset(false);
		sendKey('ArrowLeft');
		expectEventsToBeAndReset(true);
		sendKey('Home');
		expectEventsToBeAndReset(false);
		sendKey('End');
		expectEventsToBeAndReset(true);
		inputElement.setSelectionRange(2, 2);
		sendKey('ArrowLeft');
		expectEventsToBeAndReset(true);
		sendKey('ArrowRight');
		expectEventsToBeAndReset(true);
		sendKey('Home');
		expectEventsToBeAndReset(true);
		sendKey('End');
		expectEventsToBeAndReset(true);
		inputElement.setSelectionRange(7, 7);
		sendKey('ArrowLeft');
		expectEventsToBeAndReset(false);
		sendKey('ArrowRight');
		expectEventsToBeAndReset(true);
		sendKey('Home');
		expectEventsToBeAndReset(true);
		sendKey('End');
		expectEventsToBeAndReset(false);
		inputElement.setSelectionRange(0, 7);
		sendKey('ArrowRight');
		expectEventsToBeAndReset(true);
		sendKey('ArrowLeft');
		expectEventsToBeAndReset(true);
		sendKey('Home');
		expectEventsToBeAndReset(true);
		sendKey('End');
		expectEventsToBeAndReset(true);
	});
});
