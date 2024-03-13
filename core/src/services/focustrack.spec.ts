import {describe, test, expect, vi} from 'vitest';
import {activeElement$, createHasFocus} from './focustrack';

describe(`Focustrack service`, () => {
	describe('hasFocus', () => {
		test(`Basic functionalities`, () => {
			document.body.innerHTML = `
				<div id="container1" tabindex="0">
					<input id="id1-1">
					<input id="id1-2">
				</div>
				<div id="container2">
					<input id="id2">
				</div>
				<div id="container3">
					<input id="id3">
				</div>
			`;

			const container1 = document.getElementById('container1')!;
			const container2 = document.getElementById('container2')!;
			const container3 = document.getElementById('container3')!;

			const input11 = document.getElementById('id1-1')!;
			const input12 = document.getElementById('id1-2')!;
			const input2 = document.getElementById('id2')!;
			const input3 = document.getElementById('id3')!;

			const {directive, hasFocus$} = createHasFocus();

			let hasFocus: boolean | null = null;
			const unsubscribe = hasFocus$.subscribe((_hasFocus) => {
				hasFocus = _hasFocus;
			});
			expect(hasFocus).toBe(false);

			input11.focus();
			expect(hasFocus).toBe(false);

			let container1Directive = directive(container1);
			expect(hasFocus, 'works with a single container').toBe(true);

			const container2Directive = directive(container2);
			expect(hasFocus, 'works with an array of container').toBe(true);

			input12.focus();
			expect(hasFocus, 'internal change').toBe(true);

			input2.focus();
			expect(hasFocus, 'focus change from container1 to container2').toBe(true);

			input3.focus();
			expect(hasFocus, 'focus change outside').toBe(false);

			container1Directive?.destroy?.();
			container2Directive?.destroy?.();
			const container3Directive = directive(container3);
			expect(hasFocus, 'patch container to the one containg the activeElement').toBe(true);

			container3Directive?.destroy?.();
			container1Directive = directive(container1);
			container1.focus();
			expect(hasFocus, 'focus on the container').toBe(true);

			container1Directive?.destroy?.();
			unsubscribe();
		});
	});
});
