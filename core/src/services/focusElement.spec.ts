import {describe, expect, test} from 'vitest';
import {focusElement} from './focusElement';

describe('focus element', () => {
	test('should focus the given element', async () => {
		document.body = document.createElement('body');
		const focusableDiv = document.createElement('div');
		focusableDiv.tabIndex = -1;
		focusableDiv.id = 'elementToFocus';
		document.body.tabIndex = -1;

		document.body.appendChild(focusableDiv);

		await expect.poll(() => document.activeElement).toStrictEqual(document.body);
		const instance = focusElement(document.getElementById('elementToFocus')!);
		await expect.poll(() => document.activeElement).toStrictEqual(focusableDiv);
		instance?.destroy?.();
		await expect.poll(() => document.activeElement).toStrictEqual(document.body);
	});

	test('should focus the next focusable element in the stack when the current one is destroyed', async () => {
		document.body = document.createElement('body');
		const firstDiv = document.createElement('div');
		firstDiv.tabIndex = -1;
		firstDiv.id = 'firstElementToFocus';
		const secondDiv = document.createElement('div');
		secondDiv.tabIndex = -1;
		secondDiv.id = 'secondElementToFocus';
		document.body.tabIndex = -1;
		document.body.appendChild(firstDiv);
		document.body.appendChild(secondDiv);
		await expect.poll(() => document.activeElement).toStrictEqual(document.body);

		const firstInstance = focusElement(document.getElementById('firstElementToFocus')!);
		await expect.poll(() => document.activeElement).toStrictEqual(firstDiv);
		const secondInstance = focusElement(document.getElementById('secondElementToFocus')!);
		await expect.poll(() => document.activeElement).toStrictEqual(secondDiv);
		secondInstance?.destroy?.();
		await expect.poll(() => document.activeElement).toStrictEqual(firstDiv);
		firstInstance?.destroy?.();
		await expect.poll(() => document.activeElement).toStrictEqual(document.body);
	});

	test('should focus the next focusable element in the stack when one of them is closed', async () => {
		document.body = document.createElement('body');
		const firstDiv = document.createElement('div');
		firstDiv.tabIndex = -1;
		firstDiv.id = 'firstElementToFocus';
		const secondDiv = document.createElement('div');
		secondDiv.tabIndex = -1;
		secondDiv.id = 'secondElementToFocus';
		const thirdDiv = document.createElement('div');
		thirdDiv.tabIndex = -1;
		thirdDiv.id = 'thirdElementToFocus';
		document.body.tabIndex = -1;
		document.body.appendChild(firstDiv);
		document.body.appendChild(secondDiv);
		document.body.appendChild(thirdDiv);
		await expect.poll(() => document.activeElement).toBe(document.body);
		const firstInstance = focusElement(document.getElementById('firstElementToFocus')!);
		await expect.poll(() => document.activeElement).toStrictEqual(firstDiv);
		const secondInstance = focusElement(document.getElementById('secondElementToFocus')!);
		await expect.poll(() => document.activeElement).toStrictEqual(secondDiv);
		const thirdInstance = focusElement(document.getElementById('thirdElementToFocus')!);
		await expect.poll(() => document.activeElement).toStrictEqual(thirdDiv);
		secondInstance?.destroy?.();
		document.body.removeChild(secondDiv);
		await expect.poll(() => document.activeElement).toStrictEqual(thirdDiv);
		thirdInstance?.destroy?.();
		document.body.removeChild(thirdDiv);
		await expect.poll(() => document.activeElement).toStrictEqual(firstDiv);
		firstInstance?.destroy?.();
		await expect.poll(() => document.activeElement).toStrictEqual(document.body);
	});
});
