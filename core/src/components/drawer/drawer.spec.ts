import {beforeEach, describe, expect, test} from 'vitest';
import {createDrawer} from './drawer';
import {assign} from '../../../../common/utils';

describe(`Drawer`, () => {
	const noopTransition = async () => {};

	let testArea: HTMLElement;

	function prepareTest(minWidth?: string, maxWidth?: string) {
		function dispatchEvent(node: Document | HTMLElement, type: string, clientX: number, clientY: number) {
			node.dispatchEvent(
				new PointerEvent(type, {
					pointerId: 1,
					clientX,
					clientY,
					pointerType: 'mouse',
					isPrimary: true,
					bubbles: true,
					cancelable: true,
				}),
			);
		}

		const state = {
			minEvents: <boolean[]>[],
			maxEvents: <boolean[]>[],
		};
		testArea.innerHTML = `
			<style>
				#drawerElement {
					--drawer-size: 100px;
					width: var(--drawer-size);
					height: 100px;
					${minWidth != null ? `min-width: ${minWidth};` : ''}
					${maxWidth != null ? `max-width: ${maxWidth};` : ''}
				}
				#splitterElement {
					width: 10px;
				}
			</style>
			<div id="backdropElement"></div>
			<div id="drawerElement"></div>
			<div id="splitterElement"></div>
		`;
		const backdropElement = document.getElementById('backdropElement')!;
		const splitterElement = document.getElementById('splitterElement')!;
		const drawerElement = document.getElementById('drawerElement')!;
		const drawer = createDrawer({
			props: {
				className: 'inline-start',
				transition: noopTransition,
				onMinimizedChange: (isMinimized) => {
					state.minEvents.push(isMinimized);
				},
				onMaximizedChange: (isMaximized) => {
					state.maxEvents.push(isMaximized);
				},
			},
		});
		const backdropDirective = drawer.directives.backdropDirective(backdropElement);
		const splitterDirective = drawer.directives.splitterDirective(splitterElement);
		const directive = drawer.directives.drawerDirective(drawerElement);

		const unsubscribe = drawer.stores.size$.subscribe((size) => {
			if (size != null) {
				drawerElement.style.setProperty('--drawer-size', `${size}px`);
			} else {
				drawerElement.style.removeProperty('--drawer-size');
			}
		});

		return {
			drawer,
			mouseDown(x: number, y: number) {
				dispatchEvent(splitterElement, 'pointerdown', x, y);
			},
			mouseMouse(x: number, y: number) {
				dispatchEvent(splitterElement, 'pointermove', x, y);
			},
			mouseUp(x: number, y: number) {
				dispatchEvent(splitterElement, 'pointerup', x, y);
			},
			state() {
				return {
					...state,
					'--drawer-size': drawerElement.style.getPropertyValue('--drawer-size'),
					width: drawerElement.offsetWidth,
					height: drawerElement.offsetHeight,
				};
			},
			destroy() {
				unsubscribe();
				backdropDirective?.destroy?.();
				splitterDirective?.destroy?.();
				directive?.destroy?.();
			},
		};
	}

	beforeEach(() => {
		testArea = document.body.appendChild(document.createElement('div'));
		return () => {
			testArea.parentElement?.removeChild(testArea);
		};
	});

	test('initial state', () => {
		const {destroy, state} = prepareTest();
		expect(state()).toMatchInlineSnapshot(`
			{
			  "--drawer-size": "",
			  "height": 100,
			  "maxEvents": [],
			  "minEvents": [],
			  "width": 100,
			}
		`);
		destroy();
	});

	test('makes everything inert except the drawer', () => {
		testArea.innerHTML = `
			<div id="previousElement"></div>
			<div id="drawerElement"></div>
		`;
		const drawer = createDrawer({
			props: {
				backdropTransition: noopTransition,
				transition: noopTransition,
			},
		});
		const drawerElement = document.getElementById('drawerElement')!;
		const directive = drawer.directives.drawerDirective(drawerElement);
		drawer.api.open();
		expect(document.getElementById('previousElement')!.hasAttribute('inert')).toBeTruthy();
		expect(drawer.stores.visible$()).toBe(true);
		expect(drawer.stores.hidden$()).toBe(false);
		drawer.api.close();
		expect(drawer.stores.visible$()).toBe(false);
		expect(drawer.stores.hidden$()).toBe(false);
		directive?.destroy?.();
		expect(document.getElementById('previousElement')!.hasAttribute('inert')).toBeFalsy();
	});

	test('closes on backdrop click', () => {
		testArea.innerHTML = `
				<div id="backdropElement"></div>
				<div id="drawerElement"></div>
			`;
		const drawerElement = document.getElementById('drawerElement')!;
		const backdropElement = document.getElementById('backdropElement')!;
		const drawer = createDrawer({
			props: {
				transition: noopTransition,
			},
		});
		const backdropDirective = drawer.directives.backdropDirective(backdropElement);
		const directive = drawer.directives.drawerDirective(drawerElement);
		drawer.api.open();
		expect(drawer.stores.visible$()).toBe(true);
		expect(drawer.stores.hidden$()).toBe(false);
		backdropElement.click();
		expect(drawer.stores.visible$()).toBe(false);
		expect(drawer.stores.hidden$()).toBe(false);
		backdropDirective?.destroy?.();
		directive?.destroy?.();
	});

	test('closes on escape click', () => {
		testArea.innerHTML = `
				<div id="drawerElement"></div>
			`;
		const drawerElement = document.getElementById('drawerElement')!;
		const drawer = createDrawer({
			props: {
				transition: noopTransition,
			},
		});
		const directive = drawer.directives.drawerDirective(drawerElement);
		drawer.api.open();
		expect(drawer.stores.visible$()).toBe(true);
		expect(drawer.stores.hidden$()).toBe(false);
		const escEvent = new KeyboardEvent('keydown', {key: 'Escape'});
		drawerElement.dispatchEvent(escEvent);
		expect(drawer.stores.visible$()).toBe(false);
		expect(drawer.stores.hidden$()).toBe(false);
		directive?.destroy?.();
	});

	describe('checks events', () => {
		test('onMinimizedChange when mouse is in the viewport', () => {
			const {destroy, mouseDown, mouseMouse, mouseUp, state} = prepareTest('50px');

			const expectedState = state();

			mouseDown(100, 8);
			mouseMouse(25, 8);
			mouseUp(25, 8);

			expect(state()).toStrictEqual(
				assign(expectedState, {
					'--drawer-size': '50px',
					minEvents: [true],
					width: 50,
				}),
			);

			destroy();
		});

		test('onMinSize when mouse is out of viewport', () => {
			const {destroy, mouseDown, mouseMouse, mouseUp, state} = prepareTest();
			const expectedState = state();

			mouseDown(100, 8);
			mouseMouse(-10, 8);
			mouseUp(-10, 8);

			expect(state()).toStrictEqual(
				assign(expectedState, {
					'--drawer-size': '0px',
					minEvents: [true],
					width: 0,
				}),
			);

			destroy();
		});

		test('onMaxSize when mouse is in the viewport', () => {
			const {destroy, mouseDown, mouseMouse, mouseUp, state} = prepareTest(undefined, '110px');
			const expectedState = state();
			const viewportSize = window.innerWidth;
			const mousePosX = viewportSize - 10;

			mouseDown(100, 8);
			mouseMouse(mousePosX, 8);
			mouseUp(mousePosX, 8);

			expect(state()).toStrictEqual(
				assign(expectedState, {
					'--drawer-size': '110px',
					maxEvents: [true],
					width: 110,
				}),
			);

			destroy();
		});

		test('onMaxSize when mouse is out of viewport', () => {
			const {destroy, mouseDown, mouseMouse, mouseUp, state} = prepareTest(undefined, '110px');
			const expectedState = state();
			const viewportSize = window.innerWidth;
			const mousePosX = viewportSize + 10;

			mouseDown(100, 8);
			mouseMouse(mousePosX, 8);
			mouseUp(mousePosX, 8);

			expect(state()).toStrictEqual(
				assign(expectedState, {
					'--drawer-size': '110px',
					maxEvents: [true],
					width: 110,
				}),
			);

			destroy();
		});
	});
});
