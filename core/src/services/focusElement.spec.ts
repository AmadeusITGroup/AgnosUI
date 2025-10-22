import {beforeEach, describe, expect, test} from 'vitest';
import {focusElement} from './focusElement';

describe('focus element', () => {
	let testArea: HTMLElement;

	beforeEach(() => {
		testArea = document.body.appendChild(document.createElement('div'));
		testArea.tabIndex = -1;
		testArea.focus();
		return () => {
			testArea.parentElement?.removeChild(testArea);
		};
	});

	test('should focus the given element', async () => {
		const focusableDiv = document.createElement('div');
		focusableDiv.tabIndex = -1;
		focusableDiv.id = 'elementToFocus';

		testArea.appendChild(focusableDiv);

		await expect.poll(() => document.activeElement).toBe(testArea);
		const instance = focusElement(document.getElementById('elementToFocus')!);
		await expect.poll(() => document.activeElement).toBe(focusableDiv);
		instance?.destroy?.();
		await expect.poll(() => document.activeElement).toBe(testArea);
	});

	test('should focus the next focusable element in the stack when the current one is destroyed', async () => {
		const firstDiv = document.createElement('div');
		firstDiv.tabIndex = -1;
		firstDiv.id = 'firstElementToFocus';
		const secondDiv = document.createElement('div');
		secondDiv.tabIndex = -1;
		secondDiv.id = 'secondElementToFocus';
		testArea.appendChild(firstDiv);
		testArea.appendChild(secondDiv);
		await expect.poll(() => document.activeElement).toBe(testArea);

		const firstInstance = focusElement(document.getElementById('firstElementToFocus')!);
		await expect.poll(() => document.activeElement).toBe(firstDiv);
		const secondInstance = focusElement(document.getElementById('secondElementToFocus')!);
		await expect.poll(() => document.activeElement).toBe(secondDiv);
		secondInstance?.destroy?.();
		await expect.poll(() => document.activeElement).toBe(firstDiv);
		firstInstance?.destroy?.();
		await expect.poll(() => document.activeElement).toBe(testArea);
	});

	test('should focus the next focusable element in the stack when one of them is closed', async () => {
		const firstDiv = document.createElement('div');
		firstDiv.tabIndex = -1;
		firstDiv.id = 'firstElementToFocus';
		const secondDiv = document.createElement('div');
		secondDiv.tabIndex = -1;
		secondDiv.id = 'secondElementToFocus';
		const thirdDiv = document.createElement('div');
		thirdDiv.tabIndex = -1;
		thirdDiv.id = 'thirdElementToFocus';
		testArea.appendChild(firstDiv);
		testArea.appendChild(secondDiv);
		testArea.appendChild(thirdDiv);
		await expect.poll(() => document.activeElement).toBe(testArea);
		const firstInstance = focusElement(document.getElementById('firstElementToFocus')!);
		await expect.poll(() => document.activeElement).toBe(firstDiv);
		const secondInstance = focusElement(document.getElementById('secondElementToFocus')!);
		await expect.poll(() => document.activeElement).toBe(secondDiv);
		const thirdInstance = focusElement(document.getElementById('thirdElementToFocus')!);
		await expect.poll(() => document.activeElement).toBe(thirdDiv);
		secondInstance?.destroy?.();
		testArea.removeChild(secondDiv);
		await expect.poll(() => document.activeElement).toBe(thirdDiv);
		thirdInstance?.destroy?.();
		testArea.removeChild(thirdDiv);
		await expect.poll(() => document.activeElement).toBe(firstDiv);
		firstInstance?.destroy?.();
		await expect.poll(() => document.activeElement).toBe(testArea);
	});
});
