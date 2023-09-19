import {describe, expect, test} from 'vitest';
import {removeScrollbars, revertScrollbars} from './scrollbars.js';

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
		const initialClientWidth = (document.documentElement as any).clientWidth;
		try {
			document.body.style.paddingRight = '10px';
			(document.documentElement as any).clientWidth = window.innerWidth - 32; // simulation of a 32px scrollbar in happy-dom
			expect(document.body.style.paddingRight).toBe('10px');
			removeScrollbars();
			expect(document.body.style.overflow).toBe('hidden');
			expect(document.body.style.paddingRight).toBe('42px'); // 10+32
			revertScrollbars();
			expect(document.body.style.overflow).toBe('scroll');
			expect(document.body.style.paddingRight).toBe('10px');
		} finally {
			document.body.style.paddingRight = initialPaddingRight;
			(document.documentElement as any).clientWidth = initialClientWidth;
		}
	});
});
