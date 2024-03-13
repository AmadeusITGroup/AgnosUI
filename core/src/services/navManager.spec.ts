import {beforeEach, describe, expect, test, vi} from 'vitest';
import type {NavManagerItemConfig} from './navManager';
import {createNavManager, getKeyName, isInternalInputNavigation} from './navManager';

type ArrowKey = 'ArrowLeft' | 'ArrowRight';
const sendKey = (key: ArrowKey | 'Home' | 'End', altKey = false) =>
	document.activeElement!.dispatchEvent(new KeyboardEvent('keydown', {key, cancelable: true, bubbles: true, altKey}));

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
	});
}
