import {beforeEach, describe, expect, test} from 'vitest';
import {computeCommonAncestor} from './dom';

describe('computeCommonAncestor', () => {
	let parentElement: HTMLElement;
	beforeEach(() => {
		parentElement = document.body.appendChild(document.createElement('div'));
		return () => {
			parentElement.parentElement?.removeChild(parentElement);
		};
	});

	test('Basic functionalities', () => {
		parentElement.innerHTML = `
			<div id="element1">
				<div id="element2"></div>
				<div id="element3"></div>
			</div>
		`;
		const element1 = document.getElementById('element1')!;
		const element2 = document.getElementById('element2')!;
		const element3 = document.getElementById('element3')!;
		const element4 = document.createElement('div');
		expect(computeCommonAncestor([])).toBe(null);
		expect(computeCommonAncestor([element1])).toBe(element1);
		expect(computeCommonAncestor([element1, element1])).toBe(element1);
		expect(computeCommonAncestor([element1, element1, element1])).toBe(element1);
		expect(computeCommonAncestor([element1, element2])).toBe(element1);
		expect(computeCommonAncestor([element2, element1])).toBe(element1);
		expect(computeCommonAncestor([element1, element3])).toBe(element1);
		expect(computeCommonAncestor([element3, element1])).toBe(element1);
		expect(computeCommonAncestor([element2, element3])).toBe(element1);
		expect(computeCommonAncestor([element3, element2])).toBe(element1);
		expect(computeCommonAncestor([element1, element2, element3])).toBe(element1);
		expect(computeCommonAncestor([element2, element1, element3])).toBe(element1);
		expect(computeCommonAncestor([element2, element3, element1])).toBe(element1);
		expect(computeCommonAncestor([element3, element2, element1])).toBe(element1);
		expect(computeCommonAncestor([element3, element1, element2])).toBe(element1);
		expect(computeCommonAncestor([element4])).toBe(element4);
		expect(computeCommonAncestor([element1, element4])).toBe(null);
		expect(computeCommonAncestor([element4, element1])).toBe(null);
	});
});
