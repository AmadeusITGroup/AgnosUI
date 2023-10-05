import {beforeEach, describe, expect, test} from 'vitest';
import {createNavManager} from './navManager';

describe(`navManager`, () => {
	let parentElement: HTMLElement;
	beforeEach(() => {
		parentElement = document.body.appendChild(document.createElement('div'));
		return () => {
			parentElement.parentElement?.removeChild(parentElement);
		};
	});
	const sendKey = (key: 'ArrowLeft' | 'ArrowRight') => document.activeElement!.dispatchEvent(new KeyboardEvent('keydown', {key}));

	test('Basic functionalities', () => {
		parentElement.innerHTML = `
			<span id="element1"></span>
			<input type="checkbox" id="element2">
			<input type="text" id="element3" value="some content">
			<span id="element4"></span>
		`;
		const element1 = document.getElementById('element1')!;
		const element2 = document.getElementById('element2')!;
		const element3 = document.getElementById('element3') as HTMLInputElement;
		const element4 = document.getElementById('element4')!;
		const navManager = createNavManager();
		const directive1 = navManager.directive(element1);
		const directive2 = navManager.directive(element2);
		// intentionnally not called in DOM order to check that the array is properly sorted:
		const directive4 = navManager.directive(element4);
		const directive3 = navManager.directive(element3);
		element1.focus();
		expect(document.activeElement).toBe(element1);
		sendKey('ArrowRight');
		expect(document.activeElement).toBe(element2);
		sendKey('ArrowRight');
		expect(document.activeElement).toBe(element3);
		element3.setSelectionRange(0, 0);
		sendKey('ArrowRight');
		// as the cursor is not at the end yet, the focus did not move
		expect(document.activeElement).toBe(element3);
		element3.setSelectionRange(element3.value.length, element3.value.length);
		sendKey('ArrowRight');
		expect(document.activeElement).toBe(element4);
		sendKey('ArrowRight');
		// last element, the focus cannot move:
		expect(document.activeElement).toBe(element4);
		// now go backward:
		sendKey('ArrowLeft');
		expect(document.activeElement).toBe(element3);
		element3.setSelectionRange(1, 1);
		sendKey('ArrowLeft');
		// as the cursor is not at the beginning yet, the focus did not move
		expect(document.activeElement).toBe(element3);
		element3.setSelectionRange(0, 0);
		sendKey('ArrowLeft');
		expect(document.activeElement).toBe(element2);
		sendKey('ArrowLeft');
		expect(document.activeElement).toBe(element1);
		sendKey('ArrowLeft');
		// first element, the focus cannot move:
		expect(document.activeElement).toBe(element1);
		directive1?.destroy?.();
		directive2?.destroy?.();
		directive3?.destroy?.();
		directive4?.destroy?.();
	});
});
