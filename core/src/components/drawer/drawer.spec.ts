import {beforeEach, describe, expect, test} from 'vitest';
import {createDrawer} from './drawer';
import {assign} from '../../../../common/utils';
import {userEvent} from 'vitest/browser';

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
			mouseMove(x: number, y: number) {
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

	test('makes everything inert except the drawer', async () => {
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
		await drawer.api.open();
		expect(document.getElementById('previousElement')!.hasAttribute('inert')).toBeTruthy();
		expect(drawer.stores.visible$()).toBe(true);
		expect(drawer.stores.hidden$()).toBe(false);
		await drawer.api.close();
		expect(drawer.stores.visible$()).toBe(false);
		expect(drawer.stores.hidden$()).toBe(true);
		directive?.destroy?.();
		expect(document.getElementById('previousElement')!.hasAttribute('inert')).toBeFalsy();
	});

	test('closes on backdrop click', async () => {
		testArea.innerHTML = `
				<div id="backdropElement"></div>
				<div id="drawerElement"></div>
			`;
		const drawerElement = document.getElementById('drawerElement')!;
		const backdropElement = document.getElementById('backdropElement')!;
		const drawer = createDrawer({
			props: {
				transition: noopTransition,
				backdropTransition: noopTransition,
			},
		});
		const backdropDirective = drawer.directives.backdropDirective(backdropElement);
		const directive = drawer.directives.drawerDirective(drawerElement);
		await drawer.api.open();
		expect(drawer.stores.visible$()).toBe(true);
		expect(drawer.stores.hidden$()).toBe(false);
		backdropElement.click();
		await expect.poll(() => drawer.stores.visible$()).toBe(false);
		await expect.poll(() => drawer.stores.hidden$()).toBe(true);
		backdropDirective?.destroy?.();
		directive?.destroy?.();
	});

	test('closes on escape click', async () => {
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
		await drawer.api.open();
		await expect.poll(() => document.activeElement).toBe(drawerElement);
		expect(drawer.stores.visible$()).toBe(true);
		expect(drawer.stores.hidden$()).toBe(false);
		await userEvent.keyboard('{Escape}');
		expect(drawer.stores.visible$()).toBe(false);
		expect(drawer.stores.hidden$()).toBe(true);
		directive?.destroy?.();
	});

	test(`should resize the drawer with keyboard`, async () => {
		testArea.innerHTML = `
				<div id="drawerElement">
					<div id="drawerSplitter" tabindex="0"></div>
				</div>
			`;
		const drawerElement = document.getElementById('drawerElement')!;
		const splitterElement = document.getElementById('drawerSplitter')!;
		const drawer = createDrawer({
			props: {
				transition: noopTransition,
			},
		});
		const drawerSize = drawer.stores.size$;
		const directive = drawer.directives.drawerDirective(drawerElement);
		const splitterDirective = drawer.directives.splitterDirective(splitterElement);
		await drawer.api.open();
		await expect.poll(() => document.activeElement).toBe(drawerElement);
		await userEvent.keyboard('{Tab}');
		await expect.poll(() => document.activeElement).toBe(splitterElement);
		expect(drawerSize()).toBeNull();
		await userEvent.keyboard('{ArrowRight}');
		expect(drawerSize()).toBe(10);
		await userEvent.keyboard('{ArrowUp}');
		expect(drawerSize()).toBe(20);
		await userEvent.keyboard('{ArrowLeft}');
		expect(drawerSize()).toBe(10);
		await userEvent.keyboard('{ArrowDown}');
		expect(drawerSize()).toBe(0);
		directive?.destroy?.();
		splitterDirective?.destroy?.();
	});

	test(`should hide backdrop when specified`, () => {
		document.body.style.overflow = 'auto';
		const drawer = createDrawer({
			props: {
				bodyScroll: false,
				backdrop: true,
			},
		});

		const backdropHidden = drawer.stores.backdropHidden$;
		expect(backdropHidden()).toBe(true);
		expect(document.body.style.overflow).toBe('auto');
		// Api test only (no dom element), so it can't be awaited
		void drawer.api.open();
		expect(backdropHidden()).toBe(false);
		expect(document.body.style.overflow).toBe('hidden');
		void drawer.api.close();

		document.body.style.overflow = 'auto';
		drawer.patch({backdrop: false});

		expect(backdropHidden()).toBe(true);
		expect(document.body.style.overflow).toBe('auto');
		void drawer.api.open();
		expect(backdropHidden()).toBe(true);
		expect(document.body.style.overflow).toBe('hidden');
		void drawer.api.close();

		document.body.style.overflow = 'auto';
		drawer.patch({backdrop: true, bodyScroll: true});

		expect(backdropHidden()).toBe(true);
		expect(document.body.style.overflow).toBe('auto');
		void drawer.api.open();
		expect(backdropHidden()).toBe(false);
		expect(document.body.style.overflow).toBe('auto');
	});

	test(`should focus the drawer on init when the option is true`, async () => {
		testArea.tabIndex = -1;
		testArea.focus();
		const drawerElement = document.createElement('div');
		drawerElement.setAttribute('id', 'drawerElement');
		testArea.appendChild(drawerElement);
		await expect.poll(() => document.activeElement).toBe(testArea);
		const drawer = createDrawer({
			props: {
				transition: noopTransition,
				bodyScroll: false,
				backdrop: true,
			},
		});
		const directive = drawer.directives.drawerDirective(drawerElement);
		await expect.poll(() => document.activeElement).toBe(drawerElement);

		directive?.destroy?.();
		testArea.removeChild(drawerElement);
	});

	test(`should not focus the drawer on init when the option is false`, async () => {
		testArea.tabIndex = -1;
		testArea.focus();
		const drawerElement = document.createElement('div');
		drawerElement.setAttribute('id', 'drawerElement');
		testArea.appendChild(drawerElement);
		await expect.poll(() => document.activeElement).toBe(testArea);
		const drawer = createDrawer({
			props: {
				transition: noopTransition,
				bodyScroll: false,
				backdrop: true,
				focusOnInit: false,
			},
		});
		const directive = drawer.directives.drawerDirective(drawerElement);
		await expect.poll(() => document.activeElement).toBe(testArea);

		directive?.destroy?.();
		testArea.removeChild(drawerElement);
	});

	describe('checks events', () => {
		test('onMinimizedChange when mouse is in the viewport', () => {
			const {destroy, mouseDown, mouseMove, mouseUp, state} = prepareTest('50px');

			const expectedState = state();

			mouseDown(100, 8);
			mouseMove(25, 8);
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
			const {destroy, mouseDown, mouseMove, mouseUp, state} = prepareTest();
			const expectedState = state();

			mouseDown(100, 8);
			mouseMove(-10, 8);
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
			const {destroy, mouseDown, mouseMove, mouseUp, state} = prepareTest(undefined, '110px');
			const expectedState = state();
			const viewportSize = window.innerWidth;
			const mousePosX = viewportSize - 10;

			mouseDown(100, 8);
			mouseMove(mousePosX, 8);
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
			const {destroy, mouseDown, mouseMove, mouseUp, state} = prepareTest(undefined, '110px');
			const expectedState = state();
			const viewportSize = window.innerWidth;
			const mousePosX = viewportSize + 10;

			mouseDown(100, 8);
			mouseMove(mousePosX, 8);
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

		test('should properly resize the inline drawer in RTL layout', () => {
			document.documentElement.dir = 'rtl';

			const {destroy, mouseDown, mouseMove, mouseUp, state} = prepareTest();
			const expectedState = state();

			expect(state()).toStrictEqual(expectedState);

			mouseDown(100, 8);
			mouseMove(150, 8);
			mouseUp(150, 8);

			expect(state()).toStrictEqual(
				assign(expectedState, {
					'--drawer-size': '50px',
					width: 50,
				}),
			);

			mouseDown(150, 8);
			mouseMove(100, 8);
			mouseUp(100, 8);

			expect(state()).toStrictEqual(
				assign(expectedState, {
					'--drawer-size': '100px',
					width: 100,
				}),
			);

			destroy();

			document.documentElement.dir = 'ltr';
		});

		test('should resize the vertical drawer the same way in both LTR and RTL layout', () => {
			document.documentElement.dir = 'ltr';
			const {drawer, destroy, mouseDown, mouseMove, mouseUp, state} = prepareTest();

			// Update CSS to bind --drawer-size to height instead of width for vertical drawer
			testArea.querySelector('style')!.textContent = `
				#drawerElement {
					--drawer-size: 100px;
					width: 100px;
					height: var(--drawer-size);
				}
				#splitterElement {
					height: 10px;
				}
			`;

			drawer.patch({className: 'block-start'});

			const expectedState = state();

			// Moving down should increase size
			mouseDown(8, 100);
			mouseMove(8, 150);
			mouseUp(8, 150);

			expect(state()).toStrictEqual(
				assign(expectedState, {
					'--drawer-size': '150px',
					width: 100,
					height: 150,
				}),
			);

			// Moving up should decrease size
			mouseDown(8, 150);
			mouseMove(8, 100);
			mouseUp(8, 100);

			expect(state()).toStrictEqual(
				assign(expectedState, {
					'--drawer-size': '100px',
					width: 100,
					height: 100,
				}),
			);

			document.documentElement.dir = 'rtl';

			// Moving down should increase size (same as LTR)
			mouseDown(8, 100);
			mouseMove(8, 150);
			mouseUp(8, 150);

			expect(state()).toStrictEqual(
				assign(expectedState, {
					'--drawer-size': '150px',
					width: 100,
					height: 150,
				}),
			);

			// Moving up should decrease size (same as LTR)
			mouseDown(8, 150);
			mouseMove(8, 100);
			mouseUp(8, 100);

			expect(state()).toStrictEqual(
				assign(expectedState, {
					'--drawer-size': '100px',
					width: 100,
					height: 100,
				}),
			);

			destroy();
			document.documentElement.dir = 'ltr';
		});
	});
});
