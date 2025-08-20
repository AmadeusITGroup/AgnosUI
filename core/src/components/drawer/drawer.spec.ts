import {beforeEach, describe, expect, test} from 'vitest';
import {createDrawer} from './drawer';

describe(`Drawer`, () => {
	const noopTransition = async () => {};

	let testArea: HTMLElement;

	beforeEach(() => {
		testArea = document.body.appendChild(document.createElement('div'));
		return () => {
			testArea.parentElement?.removeChild(testArea);
		};
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
});
