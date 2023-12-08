import {beforeEach, describe, expect, test} from 'vitest';
import {portal} from './portal';

describe(`Portal`, () => {
	let testArea: HTMLElement;

	beforeEach(() => {
		testArea = document.body.appendChild(document.createElement('div'));
		return () => {
			testArea.parentElement?.removeChild(testArea);
		};
	});

	test('should move the element when changing container', () => {
		const initialMarkup = `
			<div id="parentElement">
				<div id="beforeElement"></div>
				<div id="element"></div>
				<div id="afterElement"></div>
			</div>
			<div id="containerElement"></div>
			<div id="otherContainerElement"></div>
		`;
		testArea.innerHTML = initialMarkup;
		const element = document.getElementById('element')!;
		const parentElement = document.getElementById('parentElement')!;
		const beforeElement = document.getElementById('beforeElement')!;
		const afterElement = document.getElementById('afterElement')!;
		const containerElement = document.getElementById('containerElement')!;
		const otherContainerElement = document.getElementById('otherContainerElement')!;
		expect(element.parentElement).toBe(parentElement);
		const instance = portal(element, {container: containerElement});
		expect(element.parentElement).toBe(containerElement);
		instance?.update?.({container: otherContainerElement});
		expect(element.parentElement).toBe(otherContainerElement);
		instance?.update?.(null);
		expect(testArea.innerHTML).toBe(initialMarkup);
		expect(element.parentElement).toBe(parentElement);
		expect(element.previousElementSibling).toBe(beforeElement);
		expect(element.nextElementSibling).toBe(afterElement);
		instance?.destroy?.();
		expect(testArea.innerHTML).toBe(initialMarkup.replace('<div id="element"></div>', ''));
	});

	test('should not keep anything when destroying the item', () => {
		const initialMarkup = `
			<div id="parentElement">
				<div id="element"></div>
			</div>
			<div id="containerElement"></div>
		`;
		testArea.innerHTML = initialMarkup;
		const element = document.getElementById('element')!;
		const parentElement = document.getElementById('parentElement')!;
		const containerElement = document.getElementById('containerElement')!;
		expect(element.parentElement).toBe(parentElement);
		const instance = portal(element, {container: containerElement});
		expect(element.parentElement).toBe(containerElement);
		instance?.destroy?.();
		expect(testArea.innerHTML).toBe(initialMarkup.replace('<div id="element"></div>', ''));
	});

	test('should keep the order when coming back to the initial container', () => {
		const initialMarkup = `
			<div id="parentElement">
				<div id="beforeElement"></div>
				<div id="element1"></div>
				<div id="element2"></div>
				<div id="afterElement"></div>
			</div>
			<div id="containerElement"></div>
		`;
		testArea.innerHTML = initialMarkup;
		const element1 = document.getElementById('element1')!;
		const element2 = document.getElementById('element2')!;
		const parentElement = document.getElementById('parentElement')!;
		const containerElement = document.getElementById('containerElement')!;
		expect(element1.parentElement).toBe(parentElement);
		expect(element2.parentElement).toBe(parentElement);
		const instance1 = portal(element1, {container: containerElement});
		expect(element1.parentElement).toBe(containerElement);
		const instance2 = portal(element2, {container: containerElement});
		expect(element2.parentElement).toBe(containerElement);
		instance2?.update?.(null);
		expect(element2.parentElement).toBe(parentElement);
		instance1?.update?.({});
		expect(element1.parentElement).toBe(parentElement);
		expect(testArea.innerHTML).toBe(initialMarkup);
		instance1?.destroy?.();
		instance2?.destroy?.();
		expect(testArea.innerHTML).toBe(initialMarkup.replace('<div id="element1"></div>', '').replace('<div id="element2"></div>', ''));
	});

	test(`should use the precise position when given (both container and insertBefore)`, () => {
		const initialMarkup = `
			<div id="parentElement">
				<div id="element"></div>
			</div>
			<div id="containerElement">
				<div id="containerSubElement1"></div>
				<div id="containerSubElement2"></div>
				<div id="containerSubElement3"></div>
			</div>
		`;
		testArea.innerHTML = initialMarkup;
		const element = document.getElementById('element')!;
		const parentElement = document.getElementById('parentElement')!;
		const containerSubElement1 = document.getElementById('containerSubElement1')!;
		const containerSubElement2 = document.getElementById('containerSubElement2')!;
		expect(element.parentElement).toBe(parentElement);
		const portalInstance = portal(element, {container: containerSubElement2.parentElement!, insertBefore: containerSubElement2});
		expect(containerSubElement1.nextElementSibling).toBe(element);
		expect(element.nextElementSibling).toBe(containerSubElement2);
		portalInstance?.destroy?.();
		expect(testArea.innerHTML).toBe(initialMarkup.replace('<div id="element"></div>', ''));
	});

	test(`should raise an error when container does not contain the insertBefore node`, () => {
		const initialMarkup = `
			<div id="parentElement">
				<div id="element"></div>
			</div>
			<div id="containerElement">
				<div id="containerSubElement1"></div>
				<div id="containerSubElement2"></div>
				<div id="containerSubElement3"></div>
			</div>
		`;
		testArea.innerHTML = initialMarkup;
		const element = document.getElementById('element')!;
		const parentElement = document.getElementById('parentElement')!;
		const containerSubElement2 = document.getElementById('containerSubElement2')!;
		expect(element.parentElement).toBe(parentElement);
		expect(() => {
			portal(element, {container: parentElement, insertBefore: containerSubElement2});
		}).toThrow('not a child');
	});

	test(`should use the precise position when given (only insertBefore)`, () => {
		const initialMarkup = `
			<div id="parentElement">
				<div id="element"></div>
			</div>
			<div id="containerElement">
				<div id="containerSubElement1"></div>
				<div id="containerSubElement2"></div>
				<div id="containerSubElement3"></div>
			</div>
		`;
		testArea.innerHTML = initialMarkup;
		const element = document.getElementById('element')!;
		const parentElement = document.getElementById('parentElement')!;
		const containerSubElement1 = document.getElementById('containerSubElement1')!;
		const containerSubElement2 = document.getElementById('containerSubElement2')!;
		expect(element.parentElement).toBe(parentElement);
		const portalInstance = portal(element, {insertBefore: containerSubElement2});
		expect(containerSubElement1.nextElementSibling).toBe(element);
		expect(element.nextElementSibling).toBe(containerSubElement2);
		portalInstance?.destroy?.();
		expect(testArea.innerHTML).toBe(initialMarkup.replace('<div id="element"></div>', ''));
	});

	test(`should not move when not needed`, () => {
		const initialMarkup = '<div><iframe id="element"></iframe><div id="nextElement"></div></div>';
		testArea.innerHTML = initialMarkup;
		const element = document.getElementById('element') as HTMLIFrameElement;
		(element.contentWindow as any).something = 1; // when removing an iframe from the DOM, variables on the window are lost
		const nextElement = document.getElementById('nextElement')!;
		expect(element.nextSibling).toBe(nextElement);
		const portalInstance = portal(element, {insertBefore: nextElement});
		expect((element.contentWindow as any).something).toBe(1); // the variable is still here, so the iframe was not removed from the DOM
		expect(testArea.innerHTML).toBe(initialMarkup); // the markup should not have changed
		portalInstance?.destroy?.();
		expect(testArea.innerHTML).toBe(initialMarkup.replace('<iframe id="element"></iframe>', ''));
	});

	test(`should not move a second time when not needed`, () => {
		const initialMarkup = '<div><iframe id="element"></iframe></div><div id="container"></div>';
		testArea.innerHTML = initialMarkup;
		const element = document.getElementById('element') as HTMLIFrameElement;
		const container = document.getElementById('container')!;
		const portalInstance = portal(element, {container});
		expect(element.parentElement).toBe(container);
		(element.contentWindow as any).something = 1; // when removing an iframe from the DOM, variables on the window are lost
		const newElement = document.createElement('div');
		newElement.setAttribute('id', 'newElement');
		container.appendChild(newElement);
		const beforeUpdateMarkup = testArea.innerHTML;
		portalInstance?.update?.({container, insertBefore: newElement}); // should do nothing, as the element is already at the right place
		expect((element.contentWindow as any).something).toBe(1);
		expect(testArea.innerHTML).toBe(beforeUpdateMarkup);
		portalInstance?.destroy?.();
		expect(testArea.innerHTML).toBe('<div></div><div id="container"><div id="newElement"></div></div>');
	});
});
