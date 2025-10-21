import {beforeEach, describe, expect, test} from 'vitest';
import {siblingsInert} from './siblingsInert';

describe('sliblingsInert', () => {
	let testArea: HTMLElement;

	beforeEach(() => {
		testArea = document.body.appendChild(document.createElement('div'));
		return () => {
			testArea.parentElement?.removeChild(testArea);
		};
	});

	test('sliblingsInert', () => {
		const initialMarkup = `
			<div id="parentElement">
				<div id="beforeElement"></div>
				<div id="element"></div>
				<div id="afterElement"></div>
			</div>
			<div id="containerElement" inert=""></div>
			<div id="otherContainerElement"></div>
		`;
		testArea.innerHTML = initialMarkup;
		const instance = siblingsInert(document.getElementById('element')!, true);
		expect(testArea.innerHTML).toBe(`
			<div id="parentElement">
				<div id="beforeElement" inert=""></div>
				<div id="element"></div>
				<div id="afterElement" inert=""></div>
			</div>
			<div id="containerElement" inert=""></div>
			<div id="otherContainerElement" inert=""></div>
		`);
		instance?.destroy?.();
		expect(testArea.innerHTML).toBe(initialMarkup);
	});

	test('usage on two items, second destroyed first', () => {
		const initialMarkup = `
			<div id="parentElement1">
				<div id="beforeElement1"></div>
				<div id="element1"></div>
				<div id="afterElement1"></div>
			</div>
			<div id="parentElement2">
				<div id="beforeElement2"></div>
				<div id="element2"></div>
				<div id="afterElement2"></div>
				<div id="alreadyHidden" inert=""></div>
			</div>
		`;
		testArea.innerHTML = initialMarkup;
		const instance1 = siblingsInert(document.getElementById('element1')!, true);
		const only1Markup = `
			<div id="parentElement1">
				<div id="beforeElement1" inert=""></div>
				<div id="element1"></div>
				<div id="afterElement1" inert=""></div>
			</div>
			<div id="parentElement2" inert="">
				<div id="beforeElement2"></div>
				<div id="element2"></div>
				<div id="afterElement2"></div>
				<div id="alreadyHidden" inert=""></div>
			</div>
		`;
		expect(testArea.innerHTML).toBe(only1Markup);
		const instance2 = siblingsInert(document.getElementById('element2')!, true);
		expect(testArea.innerHTML).toBe(`
			<div id="parentElement1" inert="">
				<div id="beforeElement1"></div>
				<div id="element1"></div>
				<div id="afterElement1"></div>
			</div>
			<div id="parentElement2">
				<div id="beforeElement2" inert=""></div>
				<div id="element2"></div>
				<div id="afterElement2" inert=""></div>
				<div id="alreadyHidden" inert=""></div>
			</div>
		`);
		instance2?.destroy?.();
		expect(testArea.innerHTML).toBe(only1Markup);
		instance1?.destroy?.();
		expect(testArea.innerHTML).toBe(initialMarkup);
	});

	test('usage on two items, first destroyed first', () => {
		const initialMarkup = `
			<div id="parentElement1">
				<div id="beforeElement1"></div>
				<div id="element1"></div>
				<div id="afterElement1"></div>
			</div>
			<div id="parentElement2">
				<div id="beforeElement2"></div>
				<div id="element2"></div>
				<div id="afterElement2"></div>
				<div id="alreadyHidden" inert=""></div>
			</div>
		`;
		testArea.innerHTML = initialMarkup;
		const instance1 = siblingsInert(document.getElementById('element1')!, true);
		expect(testArea.innerHTML).toBe(`
			<div id="parentElement1">
				<div id="beforeElement1" inert=""></div>
				<div id="element1"></div>
				<div id="afterElement1" inert=""></div>
			</div>
			<div id="parentElement2" inert="">
				<div id="beforeElement2"></div>
				<div id="element2"></div>
				<div id="afterElement2"></div>
				<div id="alreadyHidden" inert=""></div>
			</div>
		`);
		const instance2 = siblingsInert(document.getElementById('element2')!, true);
		const markup2 = `
			<div id="parentElement1" inert="">
				<div id="beforeElement1"></div>
				<div id="element1"></div>
				<div id="afterElement1"></div>
			</div>
			<div id="parentElement2">
				<div id="beforeElement2" inert=""></div>
				<div id="element2"></div>
				<div id="afterElement2" inert=""></div>
				<div id="alreadyHidden" inert=""></div>
			</div>
		`;
		expect(testArea.innerHTML).toBe(markup2);
		instance1?.destroy?.();
		expect(testArea.innerHTML).toBe(markup2);
		instance2?.destroy?.();
		expect(testArea.innerHTML).toBe(initialMarkup);
	});

	test('case with 3 items', () => {
		const initialMarkup = `
			<div id="element1"></div>
			<div id="element2"></div>
			<div id="element3"></div>
		`;
		testArea.innerHTML = initialMarkup;
		const instance1 = siblingsInert(document.getElementById('element1')!, true);
		expect(testArea.innerHTML).toBe(`
			<div id="element1"></div>
			<div id="element2" inert=""></div>
			<div id="element3" inert=""></div>
		`);
		const instance2 = siblingsInert(document.getElementById('element2')!, true);
		const markup2 = `
			<div id="element1" inert=""></div>
			<div id="element2"></div>
			<div id="element3" inert=""></div>
		`;
		expect(testArea.innerHTML).toBe(markup2);
		instance1?.destroy?.();
		expect(testArea.innerHTML).toBe(markup2);
		instance2?.destroy?.();
		expect(testArea.innerHTML).toBe(initialMarkup);
	});

	test('case with 3 items, one already having inert', () => {
		const initialMarkup = `
			<div id="element1"></div>
			<div id="element2"></div>
			<div id="element3" inert=""></div>
		`;
		testArea.innerHTML = initialMarkup;
		const instance1 = siblingsInert(document.getElementById('element1')!, true);
		expect(testArea.innerHTML).toBe(`
			<div id="element1"></div>
			<div id="element2" inert=""></div>
			<div id="element3" inert=""></div>
		`);
		const instance2 = siblingsInert(document.getElementById('element2')!, true);
		const markup2 = `
			<div id="element1" inert=""></div>
			<div id="element2"></div>
			<div id="element3" inert=""></div>
		`;
		expect(testArea.innerHTML).toBe(markup2);
		instance1?.destroy?.();
		expect(testArea.innerHTML).toBe(markup2);
		instance2?.destroy?.();
		expect(testArea.innerHTML).toBe(initialMarkup);
	});

	test('ignoreInertAttributeName', () => {
		const initialMarkup = `
			<div id="parentElement">
				<div id="ignored" data-agnos-ignore-inert="true"></div>
				<div id="element"></div>
			</div>
			<div id="containerElement" inert=""></div>
			<div id="otherContainerElement"></div>
		`;
		testArea.innerHTML = initialMarkup;
		const instance = siblingsInert(document.getElementById('element')!, true);
		expect(testArea.innerHTML).toBe(`
			<div id="parentElement">
				<div id="ignored" data-agnos-ignore-inert="true"></div>
				<div id="element"></div>
			</div>
			<div id="containerElement" inert=""></div>
			<div id="otherContainerElement" inert=""></div>
		`);
		instance?.destroy?.();
		expect(testArea.innerHTML).toBe(initialMarkup);
	});

	test('should not apply the directive when the conditional parameter is false', () => {
		const initialMarkup = `
			<div id="parentElement">
				<div id="beforeElement"></div>
				<div id="element"></div>
				<div id="afterElement"></div>
			</div>
			<div id="containerElement" inert=""></div>
			<div id="otherContainerElement"></div>
		`;
		testArea.innerHTML = initialMarkup;
		const instance = siblingsInert(document.getElementById('element')!, false);
		expect(testArea.innerHTML).toBe(`
			<div id="parentElement">
				<div id="beforeElement"></div>
				<div id="element"></div>
				<div id="afterElement"></div>
			</div>
			<div id="containerElement" inert=""></div>
			<div id="otherContainerElement"></div>
		`);
		instance?.destroy?.();
		expect(testArea.innerHTML).toBe(initialMarkup);
	});
});
