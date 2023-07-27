import {describe, expect, test, beforeEach} from 'vitest';
import {createModal, modalCloseButtonClick, modalOutsideClick} from './modal';

describe('modal', () => {
	const noopTransition = async () => {};

	let testArea: HTMLElement;

	beforeEach(() => {
		testArea = document.body.appendChild(document.createElement('div'));
		return () => {
			testArea.parentElement?.removeChild(testArea);
		};
	});

	test('inert and scrollbar features', async () => {
		testArea.innerHTML = `
			<div id="previousElement"></div>
			<div id="modalElement"></div>
		`;
		expect(document.body.style.overflow).not.toBe('hidden');
		const modal = createModal({
			modalTransition: noopTransition,
		});
		const modalElement = document.getElementById('modalElement')!;
		const directive = modal.directives.modalDirective(modalElement);
		const promise = modal.api.open();
		expect(modal.stores.modalElement$()).toBe(modalElement);
		expect(document.getElementById('previousElement')!.hasAttribute('inert')).toBeTruthy();
		expect(document.body.style.overflow).toBe('hidden');
		expect(modal.stores.visible$()).toBe(true);
		expect(modal.stores.hidden$()).toBe(false);
		modal.api.close();
		expect(modal.stores.visible$()).toBe(false);
		expect(modal.stores.hidden$()).toBe(false);
		await promise;
		expect(modal.stores.hidden$()).toBe(true);
		expect(modal.stores.visible$()).toBe(false);
		directive?.destroy?.();
		expect(document.getElementById('previousElement')!.hasAttribute('inert')).toBeFalsy();
		expect(document.body.style.overflow).not.toBe('hidden');
	});

	test('close on close method call', async () => {
		const element = {} as HTMLElement;
		const modal = createModal({
			modalTransition: noopTransition,
		});
		const directive = modal.directives.modalDirective(element);
		const promise = modal.api.open();
		const resultObject = {};
		modal.api.close(resultObject);
		const result = await promise;
		expect(result).toBe(resultObject);
		directive?.destroy?.();
	});

	test('close on close button click', async () => {
		const element = {} as HTMLElement;
		const modal = createModal({
			modalTransition: noopTransition,
		});
		const directive = modal.directives.modalDirective(element);
		const promise = modal.api.open();
		modal.actions.closeButtonClick({} as any as MouseEvent);
		const result = await promise;
		expect(result).toBe(modalCloseButtonClick);
		directive?.destroy?.();
	});

	test('close on outside click', async () => {
		const element = {} as HTMLElement;
		const modal = createModal({
			modalTransition: noopTransition,
			closeOnOutsideClick: true,
		});
		const directive = modal.directives.modalDirective(element);
		const promise = modal.api.open();
		modal.actions.modalClick({currentTarget: element, target: element} as any as MouseEvent);
		const result = await promise;
		expect(result).toBe(modalOutsideClick);
		directive?.destroy?.();
	});

	test('do not close on outside click', async () => {
		const element = {} as HTMLElement;
		const modal = createModal({
			modalTransition: noopTransition,
			closeOnOutsideClick: false,
		});
		const directive = modal.directives.modalDirective(element);
		let settled = false;
		const promise = modal.api.open();
		// should not close the modal:
		modal.actions.modalClick({currentTarget: element, target: element} as any as MouseEvent);
		promise.finally(() => (settled = true));
		await new Promise((resolve) => setTimeout(resolve, 100));
		directive?.destroy?.();
		expect(settled).toBe(false);
	});

	test('do not close when close is canceled from onBeforeClose', async () => {
		let onBeforeCloseCalled = 0;
		const element = {} as HTMLElement;
		const modal = createModal({
			modalTransition: noopTransition,
			onBeforeClose(event) {
				onBeforeCloseCalled++;
				event.cancel = true;
			},
		});
		const directive = modal.directives.modalDirective(element);
		let settled = false;
		const promise = modal.api.open();
		expect(onBeforeCloseCalled).toBe(0);
		// should not close the modal:
		modal.api.close(null);
		expect(onBeforeCloseCalled).toBe(1);
		promise.finally(() => (settled = true));
		await new Promise((resolve) => setTimeout(resolve, 100));
		directive?.destroy?.();
		expect(settled).toBe(false);
		expect(onBeforeCloseCalled).toBe(1);
	});

	test('change result from onBeforeClose', async () => {
		let onBeforeCloseCalled = 0;
		let resultInOnBeforeClose = null;
		const secondResult = {info: 'secondResult'};
		const element = {} as HTMLElement;
		const modal = createModal({
			modalTransition: noopTransition,
			onBeforeClose(event) {
				onBeforeCloseCalled++;
				resultInOnBeforeClose = event.result;
				event.result = secondResult;
			},
		});
		const directive = modal.directives.modalDirective(element);
		const promise = modal.api.open();
		expect(onBeforeCloseCalled).toBe(0);
		const firstResult = {info: 'firstResult'};
		modal.api.close(firstResult);
		expect(onBeforeCloseCalled).toBe(1);
		expect(resultInOnBeforeClose).toBe(firstResult);
		const result = await promise;
		expect(result).toBe(secondResult);
		directive?.destroy?.();
		expect(onBeforeCloseCalled).toBe(1);
	});
});
