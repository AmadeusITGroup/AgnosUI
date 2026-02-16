import type {AccordionWidget, AccordionItemWidget} from './accordion';
import {createAccordion, getAccordionDefaultConfig} from './accordion';
import type {UnsubscribeFunction, WritableSignal} from '@amadeus-it-group/tansu';
import {computed, writable} from '@amadeus-it-group/tansu';
import type {MockInstance} from 'vitest';
import {afterEach, beforeEach, describe, expect, test, vi} from 'vitest';
import type {WidgetProps, WidgetState} from '../../types';
import {promiseWithResolve} from '../../utils/internal/promise';
import {getAttributes} from '../components.spec-utils';

function expectOpenItems(state: WidgetState<AccordionWidget>, expected: boolean[]) {
	const openItems: boolean[] = state.itemWidgets.map((itemWidget) => itemWidget.state$().visible);
	expect(openItems).toMatchObject(expected);
}
function createItems(accordion: AccordionWidget, n = 3): AccordionItemWidget[] {
	const el = document.createElement('div');
	const items: AccordionItemWidget[] = [];
	for (let i = 0; i < n; i++) {
		items.push(accordion.api.registerItem());
	}
	items.forEach((i) => {
		i.directives.itemDirective(el);
		i.directives.bodyContainerDirective(el);
	});
	return items;
}

describe(`Accordion`, () => {
	let accordion: AccordionWidget;
	let state: WidgetState<AccordionWidget>;
	let unsubscribe: UnsubscribeFunction;

	const showns: string[] = [];
	const hiddens: string[] = [];

	let itemShown = 0;
	let itemHidden = 0;

	let promiseOnShownItem = promiseWithResolve();
	let promiseOnHiddenItem = promiseWithResolve();
	let promiseOnShown = promiseWithResolve();
	let promiseOnHidden = promiseWithResolve();

	const callbacksAccordion = {
		onItemShown: (id: string) => {
			promiseOnShown.resolve();
			showns.push(id);
			promiseOnShown = promiseWithResolve();
		},
		onItemHidden: (id: string) => {
			promiseOnHidden.resolve();
			hiddens.push(id);
			promiseOnHidden = promiseWithResolve();
		},
	};
	const callbacksAccordionItem = {
		onShown: () => {
			promiseOnShownItem.resolve();
			itemShown++;
			promiseOnShownItem = promiseWithResolve();
		},
		onHidden: () => {
			promiseOnHiddenItem.resolve();
			itemHidden++;
			promiseOnHiddenItem = promiseWithResolve();
		},
	};

	let defConfigAccordion: WritableSignal<Partial<WidgetProps<AccordionWidget>>>;

	let consoleErrorSpy: MockInstance<typeof console.error>;

	beforeEach(() => {
		consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
		defConfigAccordion = writable({});
		accordion = createAccordion({config: computed(() => ({...callbacksAccordion, ...defConfigAccordion()}))});
		unsubscribe = accordion.state$.subscribe((newState) => {
			state = newState;
		});
	});

	afterEach(() => {
		showns.length = 0;
		hiddens.length = 0;
		itemShown = 0;
		itemHidden = 0;
		unsubscribe();
		// FIXME should be a text fixture instead, reused by all unit tests under core
		// eslint-disable-next-line vitest/no-standalone-expect
		expect(consoleErrorSpy).not.toHaveBeenCalled();
		consoleErrorSpy.mockRestore();
	});

	test(`should have empty accordion`, () => {
		expect(state).toMatchObject({
			itemWidgets: [],
		});
	});

	test(`should have 2 items`, () => {
		const items = createItems(accordion, 2);
		expect(state).toMatchObject({
			itemWidgets: items,
		});
	});

	test(`should allow to remove items`, () => {
		const items: AccordionItemWidget[] = [];
		const el1 = document.createElement('div');
		const el2: HTMLElement | null = document.createElement('div');
		items.push(accordion.api.registerItem());
		items.push(accordion.api.registerItem());
		items[0].directives.itemDirective(el1);
		const directive = items[1].directives.itemDirective(el2);
		directive!.destroy?.();
		expect(state).toMatchObject({
			itemWidgets: [items[0]],
		});
	});

	test(`itemVisibleState update properly`, () => {
		const button = document.createElement('button');
		const i = accordion.api.registerItem();
		i.directives.buttonDirective(button);
		expect(i.state$().visible).toBe(false);
		button.click();
		expect(i.state$().visible).toBe(true);
		button.click();
	});

	test(`should expand all the items and close them`, async () => {
		const el = document.createElement('div');
		const item1 = accordion.api.registerItem();
		const item2 = accordion.api.registerItem();
		const item3 = accordion.api.registerItem();
		item1.directives.itemDirective(el);
		item1.directives.bodyContainerDirective(el);
		item2.directives.itemDirective(el);
		item2.directives.bodyContainerDirective(el);
		item3.directives.itemDirective(el);
		item3.directives.bodyContainerDirective(el);
		expectOpenItems(state, [false, false, false]);
		await accordion.api.expandAll();
		expectOpenItems(state, [true, true, true]);
		await accordion.api.collapseAll();
		expectOpenItems(state, [false, false, false]);
	});

	test(`should toggle items from accordion api`, async () => {
		const items = createItems(accordion);
		const itemIds = items.map((i) => i.state$().id);
		expectOpenItems(state, [false, false, false]);
		await accordion.api.expand(itemIds[0]);
		await accordion.api.expand(itemIds[2]);
		expectOpenItems(state, [true, false, true]);
		await accordion.api.toggle(itemIds[1]);
		await accordion.api.collapse(itemIds[2]);
		expectOpenItems(state, [true, true, false]);
	});

	test(`should toggle items with item api`, async () => {
		const items = createItems(accordion);
		expectOpenItems(state, [false, false, false]);
		await items[0].api.expand();
		await items[2].api.expand();
		expectOpenItems(state, [true, false, true]);
		await items[1].api.toggle();
		await items[2].api.collapse();
		expectOpenItems(state, [true, true, false]);
	});

	test(`should fire item events`, async () => {
		const i = accordion.api.registerItem({config: computed(() => ({...callbacksAccordionItem}))});
		const element = document.createElement('div');
		i.directives.itemDirective(element);
		i.directives.bodyContainerDirective(element);
		expectOpenItems(state, [false]);
		//calling it twice to ensure only one event is fired
		void i.api.toggle();
		void i.api.expand();
		await promiseOnShownItem.promise;
		expectOpenItems(state, [true]);
		void i.api.toggle();
		void i.api.collapse();
		await promiseOnHiddenItem.promise;
		expectOpenItems(state, [false]);
		expect(itemShown).toBe(1);
		expect(itemHidden).toBe(1);
	});

	test(`should fire accordion events`, async () => {
		const {
			stores: {id$},
			directives: {bodyContainerDirective, itemDirective},
		} = accordion.api.registerItem();
		const element = document.createElement('div');
		bodyContainerDirective(element);
		itemDirective(element);
		expectOpenItems(state, [false]);
		void accordion.api.toggle(id$());
		void accordion.api.expand(id$());
		await promiseOnShown.promise;
		void accordion.api.collapse(id$());
		await promiseOnHidden.promise;
		expect(showns).toMatchObject([id$()]);
		expect(hiddens).toMatchObject([id$()]);
	});

	test(`should toggle items patching items individually`, () => {
		const items = createItems(accordion);
		expectOpenItems(state, [false, false, false]);
		items[0].patch({visible: true});
		items[2].patch({visible: true});
		expectOpenItems(state, [true, false, true]);
		items[1].patch({visible: !items[1].state$().visible});
		items[2].patch({visible: false});
		expectOpenItems(state, [true, true, false]);
	});

	test(`should close the old item if closeOthers`, async () => {
		const element = document.createElement('div');
		accordion.directives.accordionDirective(element);
		const items = createItems(accordion, 2);
		expectOpenItems(state, [false, false]);
		// declarative
		accordion.patch({closeOthers: true});
		items[1].patch({visible: true});
		items[0].patch({visible: true});
		expectOpenItems(state, [true, false]);

		// item api
		await items[1].api.expand();
		expectOpenItems(state, [false, true]);

		// accordion api
		await accordion.api.expand(items[0].state$().id);
		expectOpenItems(state, [true, false]);
	});

	test(`should close the items open but the first one if closeOthers is true`, () => {
		const element = document.createElement('div');
		accordion.directives.accordionDirective(element);
		const items = createItems(accordion, 4);
		expectOpenItems(state, [false, false, false, false]);
		items[1].patch({visible: true});
		items[2].patch({visible: true});
		items[3].patch({visible: true});
		expectOpenItems(state, [false, true, true, true]);
		accordion.patch({closeOthers: true});
		expectOpenItems(state, [false, true, false, false]);
	});

	test(`should have correct value for shouldBeInDOM`, async () => {
		const el = document.createElement('div');
		const i = accordion.api.registerItem({props: {visible: true}});
		i.directives.bodyContainerDirective(el);
		expect(i.state$().shouldBeInDOM).toBe(true);
		await i.api.collapse();
		expect(i.state$().shouldBeInDOM).toBe(false);
		i.patch({destroyOnHide: false});
		expect(i.state$().shouldBeInDOM).toBe(true);
	});

	test(`should closeOthers work when oldOpen is undefined`, async () => {
		const element = document.createElement('div');
		accordion.directives.accordionDirective(element);
		const items = createItems(accordion, 4);
		await items[0].api.expand();
		await items[1].api.expand();
		expectOpenItems(state, [true, true, false, false]);
		//oldOpenItem is undefined because initially openItems was [] and the first value of
		//oldOpenItem is openItems[0]
		accordion.patch({closeOthers: true});
		expectOpenItems(state, [false, true, false, false]);
	});

	test(`should call initDone to enable the transition on item`, async () => {
		const el = document.createElement('div');
		const transition = vi.fn();
		const itemWidget = accordion.api.registerItem({props: {transition}});
		itemWidget.directives.itemDirective(el);
		itemWidget.directives.bodyContainerDirective(el);
		expectOpenItems(state, [false]);
		await itemWidget.api.expand();
		expectOpenItems(state, [true]);
		expect(transition.mock.calls[transition.mock.calls.length - 1].slice(1, 3)).toEqual(['show', false]);
		itemWidget.api.initDone();
		await itemWidget.api.collapse();
		expectOpenItems(state, [false]);
		expect(transition.mock.calls[transition.mock.calls.length - 1].slice(1, 3)).toEqual(['hide', true]);
	});

	test(`should not work click when item is disabled`, () => {
		const element = document.createElement('div');
		const button = document.createElement('button');
		const i = accordion.api.registerItem({props: {disabled: true}});
		i.directives.itemDirective(element);
		i.directives.buttonDirective(button);
		expectOpenItems(state, [false]);
		i.patch({visible: true});
		expectOpenItems(state, [true]);
		button.click();
		expectOpenItems(state, [true]);
	});

	test(`should have default config`, () => {
		accordion = createAccordion({config: getAccordionDefaultConfig()});
		const {stores} = accordion;
		expect(stores.className$()).toBe('');
		const i = accordion.api.registerItem();
		const {stores: itemStores} = i;
		const itemStoreValues = {
			itemDisabled: itemStores.disabled$(),
			itemVisible: itemStores.visible$(),
			itemClass: itemStores.className$(),
			itemHeaderClass: itemStores.headerClassName$(),
			itemButtonClass: itemStores.buttonClassName$(),
			itemBodyContainerClass: itemStores.bodyContainerClassName$(),
			itemBodyClass: itemStores.bodyClassName$(),
		};
		expect(itemStoreValues).toMatchObject({
			itemDisabled: false,
			itemVisible: false,
			itemClass: '',
			itemHeaderClass: '',
			itemButtonClass: '',
			itemBodyContainerClass: '',
			itemBodyClass: '',
		});
	});

	test(`directives`, () => {
		defConfigAccordion.set({
			className: 'my-accordion',
			itemClassName: 'my-item',
			itemHeaderClassName: 'my-header',
			itemButtonClassName: 'my-button',
			itemBodyContainerClassName: 'my-body-container',
			itemBodyClassName: 'my-body',
		});

		const item = accordion.api.registerItem({props: {id: 'my-id'}});

		const accordionNode = document.createElement('div');
		const itemNode = document.createElement('div');
		const bodyContainerNode = document.createElement('div');
		const bodyNode = document.createElement('div');
		const headerNode = document.createElement('div');
		const buttonNode = document.createElement('div');

		accordion.directives.accordionDirective(accordionNode);
		item.directives.itemDirective(itemNode);
		item.directives.bodyContainerDirective(bodyContainerNode);
		item.directives.bodyDirective(bodyNode);
		item.directives.headerDirective(headerNode);
		item.directives.buttonDirective(buttonNode);

		expect(getAttributes(accordionNode)).toStrictEqual({
			class: 'my-accordion au-accordion',
		});
		expect(getAttributes(itemNode)).toStrictEqual({class: 'my-item', id: 'my-id'});
		expect(getAttributes(bodyContainerNode)).toStrictEqual({
			class: 'my-body-container',
			id: 'my-id-body-container',
			'aria-labelledby': 'my-id-toggle',
			role: 'region',
		});
		expect(getAttributes(bodyNode)).toStrictEqual({class: 'my-body'});
		expect(getAttributes(headerNode)).toStrictEqual({class: 'my-header'});
		expect(getAttributes(buttonNode)).toStrictEqual({
			class: 'collapsed my-button',
			type: 'button',
			id: 'my-id-toggle',
			'aria-controls': 'my-id-body-container',
			'aria-expanded': 'false',
			'aria-disabled': 'false',
		});

		// it tests the click event on the button node
		buttonNode.click();

		expect(getAttributes(bodyContainerNode)).toStrictEqual({
			class: 'my-body-container',
			id: 'my-id-body-container',
			'aria-labelledby': 'my-id-toggle',
			role: 'region',
		});
		expect(getAttributes(buttonNode)).toStrictEqual({
			class: 'my-button',
			type: 'button',
			id: 'my-id-toggle',
			'aria-controls': 'my-id-body-container',
			'aria-expanded': 'true',
			'aria-disabled': 'false',
		});
	});
});
