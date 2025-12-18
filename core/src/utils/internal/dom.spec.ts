import {beforeEach, describe, expect, test, vi} from 'vitest';
import {addEvent, appendHtml, bindAttribute, bindClassName, bindStyle, computeCommonAncestor} from './dom';
import {assign} from '../../../../common/utils';
import {writable} from '@amadeus-it-group/tansu';

function getAttributes(node: HTMLElement) {
	const attributes: Record<string, string> = {};
	for (const {name, value} of [...node.attributes]) {
		attributes[name] = value;
	}
	return attributes;
}

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

	test('bindAttribute', () => {
		const node = document.createElement('div');
		const a$ = writable(<any>'a');

		const unbind = bindAttribute(node, 'a', a$);

		const expectedState: Record<string, string> = {a: 'a'};
		expect(getAttributes(node)).toStrictEqual(expectedState);

		a$.set('b');
		expect(getAttributes(node)).toStrictEqual(assign(expectedState, {a: 'b'}));

		a$.set('');
		expect(getAttributes(node)).toStrictEqual(assign(expectedState, {a: ''}));

		a$.set(true);
		expect(getAttributes(node)).toStrictEqual(assign(expectedState, {a: 'a'}));

		a$.set(false);
		delete expectedState.a;
		expect(getAttributes(node)).toStrictEqual(expectedState);

		a$.set('a');
		a$.set(undefined);
		expect(getAttributes(node)).toStrictEqual(expectedState);

		a$.set('a');
		a$.set(null);
		expect(getAttributes(node)).toStrictEqual(expectedState);

		unbind();

		a$.set('changes');
		expect(getAttributes(node)).toStrictEqual(expectedState);
	});

	test('bindStyle', () => {
		const node = document.createElement('div');
		const a$ = writable(<any>'blue');

		const unbind = bindStyle(node, 'color', a$);

		const expectedState: Record<string, string> = {style: 'color: blue;'};
		expect(getAttributes(node)).toStrictEqual(expectedState);

		a$.set('red');
		expect(getAttributes(node)).toStrictEqual(assign(expectedState, {style: 'color: red;'}));

		a$.set('');
		expect(getAttributes(node)).toStrictEqual(assign(expectedState, {style: ''}));

		a$.set('a');
		a$.set(false);
		expect(getAttributes(node)).toStrictEqual(expectedState);

		a$.set('a');
		a$.set(undefined);
		expect(getAttributes(node)).toStrictEqual(expectedState);

		a$.set('a');
		a$.set(null);
		expect(getAttributes(node)).toStrictEqual(expectedState);

		unbind();

		a$.set('changes');
		expect(getAttributes(node)).toStrictEqual(expectedState);
	});

	test('bindStyle (custom property)', () => {
		const node = document.createElement('div');
		const a$ = writable(<any>'value1');

		const unbind = bindStyle(node, '--my-custom-prop', a$);

		const expectedState: Record<string, string> = {style: '--my-custom-prop: value1;'};
		expect(getAttributes(node)).toStrictEqual(expectedState);

		a$.set('value2');
		expect(getAttributes(node)).toStrictEqual(assign(expectedState, {style: '--my-custom-prop: value2;'}));

		a$.set('');
		expect(getAttributes(node)).toStrictEqual(assign(expectedState, {style: ''}));

		a$.set('a');
		a$.set(false);
		expect(getAttributes(node)).toStrictEqual(expectedState);

		a$.set('a');
		a$.set(undefined);
		expect(getAttributes(node)).toStrictEqual(expectedState);

		a$.set('a');
		a$.set(null);
		expect(getAttributes(node)).toStrictEqual(expectedState);

		unbind();

		a$.set('changes');
		expect(getAttributes(node)).toStrictEqual(expectedState);
	});

	test('bindClassName', () => {
		const node = document.createElement('div');
		const a$ = writable(<boolean>true);
		const b$ = writable(<boolean>false);

		const unbindA = bindClassName(node, 'a', a$);
		const unbindB = bindClassName(node, 'b', b$);

		const expectedState: Record<string, string> = {class: 'a'};
		expect(getAttributes(node)).toStrictEqual(expectedState);

		a$.set(false);
		expect(getAttributes(node)).toStrictEqual(assign(expectedState, {class: ''}));

		a$.set(true);
		b$.set(true);
		expect(getAttributes(node)).toStrictEqual(assign(expectedState, {class: 'a b'}));

		a$.set(false);
		expect(getAttributes(node)).toStrictEqual(assign(expectedState, {class: 'b'}));

		a$.set(true);
		expect(getAttributes(node)).toStrictEqual(assign(expectedState, {class: 'b a'}));

		unbindA();
		unbindB();

		expect(getAttributes(node)).toStrictEqual(assign(expectedState, {class: ''}));
	});

	test('addEvent', () => {
		const node = document.createElement('div');
		const fn = vi.fn().mockImplementation((event) => {
			event.preventDefault();
		});
		const unbind = addEvent(node, 'click', fn);

		node.click();
		expect(fn).toHaveBeenCalledTimes(1);

		unbind();

		node.click();
		expect(fn).toHaveBeenCalledTimes(1);
	});

	test('appendHtml', () => {
		const node = document.createElement('div');

		const child = appendHtml(node, `<div class="div1"></div>`) as Element;
		expect(child.outerHTML).toMatchInlineSnapshot(`"<div class="div1"></div>"`);

		const children = appendHtml(node, `<div class="div2"></div><div class="div3"></div>`) as Element[];
		expect(children.map((el) => el.outerHTML)).toMatchInlineSnapshot(`
			[
			  "<div class="div2"></div>",
			  "<div class="div3"></div>",
			]
		`);
	});
});
