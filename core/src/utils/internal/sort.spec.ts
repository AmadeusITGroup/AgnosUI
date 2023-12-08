import {describe, expect, it} from 'vitest';
import {compareDomOrder} from './sort';

describe('arrayUtils', () => {
	describe('compareDomOrder', () => {
		it('should sort in the right order', () => {
			const element = document.createElement('div');
			const element1 = document.createElement('div');
			element1.id = 'id1';
			const element2 = document.createElement('div');
			element2.id = 'id2';
			const element3 = document.createElement('div');
			element3.id = 'id3';
			element.appendChild(element1);
			element.appendChild(element2);
			element.appendChild(element3);
			expect([element1, element2, element3].sort(compareDomOrder)).toStrictEqual([element1, element2, element3]);
			expect([element1, element3, element2].sort(compareDomOrder)).toStrictEqual([element1, element2, element3]);
			expect([element2, element1, element3].sort(compareDomOrder)).toStrictEqual([element1, element2, element3]);
			expect([element2, element3, element1].sort(compareDomOrder)).toStrictEqual([element1, element2, element3]);
			expect([element3, element1, element2].sort(compareDomOrder)).toStrictEqual([element1, element2, element3]);
			expect([element3, element2, element1].sort(compareDomOrder)).toStrictEqual([element1, element2, element3]);
			expect([element1, element3, element1].sort(compareDomOrder)).toStrictEqual([element1, element1, element3]);
		});
	});
});
