import {describe, expect, test, vi, vitest} from 'vitest';
import {createResizeObserver} from './resizeObserver';

describe(`ResizeObserver service`, () => {
	test(`Should have original dimensions as intial observed values`, async () => {
		const observedElement = document.body.appendChild(document.createElement('textarea'));
		observedElement.style.height = '100px';
		observedElement.style.width = '100px';
		const {directive, dimensions$} = createResizeObserver();

		let emits = 0;
		let dimensions;
		const unsubscribe = dimensions$.subscribe((dim) => {
			emits++;
			dimensions = dim;
		});

		// store first value
		await vi.waitUntil(() => emits === 1);
		expect(dimensions).toBeUndefined();

		const directiveApplied = directive(observedElement);
		// element default values
		await vi.waitUntil(() => emits === 2);
		expect(dimensions!.contentRect).toMatchObject({width: 100, height: 100});
		// cleanup
		observedElement.parentElement?.removeChild(observedElement);
		unsubscribe();
		directiveApplied?.destroy?.();
	});

	test(`Should give the dimensions of observed element`, async () => {
		const observedElement = document.body.appendChild(document.createElement('div'));
		observedElement.style.height = '100px';
		observedElement.style.width = '100px';
		const {directive, dimensions$} = createResizeObserver();
		let emits = 0;
		let dimensions;
		const unsubscribe = dimensions$.subscribe((dim) => {
			emits++;
			dimensions = dim;
		});
		// store first value
		await vi.waitUntil(() => emits === 1);
		expect(dimensions).toBeUndefined();

		const directiveApplied = directive(observedElement);
		// element default values
		await vi.waitUntil(() => emits === 2);
		expect(dimensions!.contentRect).toMatchObject({width: 100, height: 100});

		// trigger first resize
		observedElement.style.height = '200px';
		observedElement.style.width = '200px';
		await vi.waitUntil(() => emits === 3);
		expect(dimensions!.contentRect).toMatchObject({width: 200, height: 200});

		// trigger second resize
		observedElement.style.width = '300px';
		await vi.waitUntil(() => emits === 4);
		expect(dimensions!.contentRect).toMatchObject({width: 300, height: 200});

		//cleanup
		observedElement.parentElement?.removeChild(observedElement);
		directiveApplied?.destroy?.();
		unsubscribe();
	});

	test(`Should keep current element when trying to add new one to the directive`, async () => {
		const consoleErrorSpy = vitest.spyOn(console, 'error').mockImplementation(() => {});
		const textarea = document.body.appendChild(document.createElement('textarea'));

		textarea.style.height = '100px';
		textarea.style.width = '100px';

		const {directive, dimensions$} = createResizeObserver();

		const div = document.body.appendChild(document.createElement('div'));
		div.style.height = '200px';

		let emits = 0;
		let dimensions;
		const unsubscribe = dimensions$.subscribe((dim) => {
			emits++;
			dimensions = dim;
		});
		// store first value
		await vi.waitUntil(() => emits === 1);
		expect(dimensions).toBeUndefined();

		const directiveTextAreaApplied = directive(textarea);
		const directiveDivApplied = directive(div);

		expect(consoleErrorSpy).toHaveBeenCalledOnce();
		expect(consoleErrorSpy.mock.calls[0][0]).toBe('The directive cannot be used on multiple elements.');

		//textarea default values
		await vi.waitUntil(() => emits === 2);
		expect(dimensions!.contentRect).toMatchObject({width: 100, height: 100});

		// cleanup
		textarea.parentElement?.removeChild(textarea);
		div.parentElement?.removeChild(div);
		unsubscribe();
		directiveDivApplied?.destroy?.();
		directiveTextAreaApplied?.destroy?.();
	});
});
