import {describe, expect, test} from 'vitest';
import {removeScrollbars, revertScrollbars} from './scrollbars';

describe('scrollbars', () => {
	test('basic feature, restore body overflow to scroll', () => {
		document.body.style.overflow = 'scroll';
		removeScrollbars();
		expect(document.body.style.overflow).toBe('hidden');
		revertScrollbars();
		expect(document.body.style.overflow).toBe('scroll');
	});

	test('basic feature, restore body overflow to auto', () => {
		document.body.style.overflow = 'auto';
		removeScrollbars();
		expect(document.body.style.overflow).toBe('hidden');
		revertScrollbars();
		expect(document.body.style.overflow).toBe('auto');
	});

	test('calling removeScrollbars twice', () => {
		document.body.style.overflow = 'scroll';
		removeScrollbars();
		removeScrollbars();
		expect(document.body.style.overflow).toBe('hidden');
		revertScrollbars();
		expect(document.body.style.overflow).toBe('scroll');
	});

	test('check paddingRight', () => {
		const initialPaddingRight = document.body.style.paddingRight;
		try {
			document.body.style.paddingRight = '10px';
			expect(document.body.style.paddingRight).toBe('10px');
			removeScrollbars();
			// the size of the scrollbar depends on the browser/platfrom:
			const newPaddingRight = Math.abs(window.innerWidth - document.documentElement.clientWidth) + 10;
			expect(document.body.style.paddingRight).toBe(`${newPaddingRight}px`);
			expect(document.body.style.overflow).toBe('hidden');
			revertScrollbars();
			expect(document.body.style.overflow).toBe('scroll');
			expect(document.body.style.paddingRight).toBe('10px');
		} finally {
			document.body.style.paddingRight = initialPaddingRight;
		}
	});
});
