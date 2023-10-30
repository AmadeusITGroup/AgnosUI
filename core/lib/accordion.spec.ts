import type {AccordionWidget, AccordionItemWidget} from './accordion';
import {createAccordion, getAccordionDefaultConfig} from './accordion';
import type {UnsubscribeFunction, WritableSignal} from '@amadeus-it-group/tansu';
import {computed, writable} from '@amadeus-it-group/tansu';
import type {SpyInstance} from 'vitest';
import {afterEach, beforeEach, describe, expect, test, vi} from 'vitest';
import type {WidgetProps, WidgetState} from './types';

function expectOpenItems(state: WidgetState<AccordionWidget>, expected: boolean[]) {
	const openItems: boolean[] = state.itemsWidget.map((itemWidget) => itemWidget.state$().itemVisible);
	expect(openItems).toMatchObject(expected);
}
function createItems(accordion: AccordionWidget, n = 3): AccordionItemWidget[] {
	const el = document.createElement('div');
	const items: AccordionItemWidget[] = [];
	for (let i = 0; i < n; i++) {
		items.push(accordion.api.registerItem());
	}
	items.forEach((i) => i.directives.accordionItemDirective(el));
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

	const promiseWithResolve = () => {
		let resolve: (value: void | Promise<void>) => void;
		const promise = new Promise<void>((r) => {
			resolve = r;
		});
		return {promise, resolve: resolve!};
	};

	let promiseOnShownItem = promiseWithResolve();
	let promiseOnHiddenItem = promiseWithResolve();
	let promiseOnShown = promiseWithResolve();
	let promiseOnHidden = promiseWithResolve();

	const callbacksAccordion = {
		onShown: (id: string) => {
			promiseOnShown.resolve();
			showns.push(id);
			promiseOnShown = promiseWithResolve();
		},
		onHidden: (id: string) => {
			promiseOnHidden.resolve();
			hiddens.push(id);
			promiseOnHidden = promiseWithResolve();
		},
		onItemShown: () => {
			promiseOnShownItem.resolve();
			itemShown++;
			promiseOnShownItem = promiseWithResolve();
		},
		onItemHidden: () => {
			promiseOnHiddenItem.resolve();
			itemHidden++;
			promiseOnHiddenItem = promiseWithResolve();
		},
	};

	let defConfigAccordion: WritableSignal<Partial<WidgetProps<AccordionWidget>>>;

	let consoleErrorSpy: SpyInstance<Parameters<typeof console.error>, ReturnType<typeof console.error>>;

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
		expect(consoleErrorSpy).not.toHaveBeenCalled();
		consoleErrorSpy.mockRestore();
	});

	test(`should have empty accordion`, () => {
		expect(state).toMatchObject({
			itemsWidget: [],
		});
	});

	test(`should have 2 items`, () => {
		const items = createItems(accordion, 2);
		expect(state).toMatchObject({
			itemsWidget: items,
		});
	});

	test(`should allow to remove items`, () => {
		const items: AccordionItemWidget[] = [];
		const el1 = document.createElement('div');
		const el2: HTMLElement | null = document.createElement('div');
		items.push(accordion.api.registerItem());
		items.push(accordion.api.registerItem());
		items[0].directives.accordionItemDirective(el1);
		const directive = items[1].directives.accordionItemDirective(el2);
		directive!.destroy?.();
		expect(state).toMatchObject({
			itemsWidget: [items[0]],
		});
	});

	test(`itemVisibleState update properly`, () => {
		const i = accordion.api.registerItem();
		expect(i.state$().itemVisible).toBe(false);
		i.actions.click();
		expect(i.state$().itemVisible).toBe(true);
		i.actions.click();
	});

	test(`should have isExpanded return coherent value`, () => {
		const i = accordion.api.registerItem();
		const el = document.createElement('div');
		i.directives.accordionItemDirective(el);
		i.patch({itemVisible: true});

		expect(accordion.api.isExpanded(i.state$().itemId)).toBe(true);
		i.patch({itemVisible: false});
		expect(accordion.api.isExpanded(i.state$().itemId)).toBe(false);
	});

	test(`should have isExpanded return false when using invalid id`, () => {
		const i = accordion.api.registerItem();
		i.patch({itemVisible: true});
		expect(accordion.api.isExpanded('fakeId')).toBe(false);
	});

	test(`should expand all the items and close them`, () => {
		const el = document.createElement('div');
		accordion.api.registerItem().directives.accordionItemDirective(el);
		accordion.api.registerItem().directives.accordionItemDirective(el);
		accordion.api.registerItem().directives.accordionItemDirective(el);
		expectOpenItems(state, [false, false, false]);
		accordion.api.expandAll();
		expectOpenItems(state, [true, true, true]);
		accordion.api.collapseAll();
		expectOpenItems(state, [false, false, false]);
	});

	test(`should toggle items from accordion api`, () => {
		const items = createItems(accordion);
		const itemIds = items.map((i) => i.state$().itemId);
		expectOpenItems(state, [false, false, false]);
		accordion.api.expand(itemIds[0]);
		accordion.api.expand(itemIds[2]);
		expectOpenItems(state, [true, false, true]);
		accordion.api.toggle(itemIds[1]);
		accordion.api.collapse(itemIds[2]);
		expectOpenItems(state, [true, true, false]);
	});

	test(`should toggle items with item api`, () => {
		const items = createItems(accordion);
		expectOpenItems(state, [false, false, false]);
		items[0].api.expand();
		items[2].api.expand();
		expectOpenItems(state, [true, false, true]);
		items[1].api.toggle();
		items[2].api.collapse();
		expectOpenItems(state, [true, true, false]);
	});

	test(`should fire item events`, async () => {
		const i = accordion.api.registerItem();
		const element = document.createElement('div');
		i.directives.accordionItemDirective(element);
		i.directives.collapseDirective(element);
		expectOpenItems(state, [false]);
		//calling it twice to ensure only one event is fired
		i.api.toggle();
		i.api.expand();
		await promiseOnShownItem.promise;
		expectOpenItems(state, [true]);
		i.api.toggle();
		i.api.collapse();
		await promiseOnHiddenItem.promise;
		expectOpenItems(state, [false]);
		expect(itemShown).toBe(1);
		expect(itemHidden).toBe(1);
	});

	test(`should fire accordion events`, async () => {
		const {
			stores: {itemId$},
			directives: {collapseDirective, accordionItemDirective},
		} = accordion.api.registerItem();
		const element = document.createElement('div');
		collapseDirective(element);
		accordionItemDirective(element);
		expectOpenItems(state, [false]);
		accordion.api.toggle(itemId$());
		accordion.api.expand(itemId$());
		await promiseOnShown.promise;
		accordion.api.collapse(itemId$());
		await promiseOnHidden.promise;
		expect(showns).toMatchObject([itemId$()]);
		expect(hiddens).toMatchObject([itemId$()]);
	});

	test(`should toggle items patching items individually`, () => {
		const items = createItems(accordion);
		expectOpenItems(state, [false, false, false]);
		items[0].patch({itemVisible: true});
		items[2].patch({itemVisible: true});
		expectOpenItems(state, [true, false, true]);
		items[1].patch({itemVisible: !items[1].state$().itemVisible});
		items[2].patch({itemVisible: false});
		expectOpenItems(state, [true, true, false]);
	});

	test(`should close the old item if closeOthers`, () => {
		const element = <HTMLElement>{id: 'domEl'};
		accordion.directives.accordionDirective(element);
		const items = createItems(accordion, 2);
		expectOpenItems(state, [false, false]);
		// declarative
		accordion.patch({closeOthers: true});
		items[1].patch({itemVisible: true});
		items[0].patch({itemVisible: true});
		expectOpenItems(state, [true, false]);

		// item api
		items[1].api.expand();
		expectOpenItems(state, [false, true]);

		// accordion api
		accordion.api.expand(items[0].state$().itemId);
		expectOpenItems(state, [true, false]);
	});

	test(`should close the items open but the first one if closeOthers is true`, () => {
		const element = <HTMLElement>{id: 'domEl'};
		accordion.directives.accordionDirective(element);
		const items = createItems(accordion, 4);
		expectOpenItems(state, [false, false, false, false]);
		items[1].patch({itemVisible: true});
		items[2].patch({itemVisible: true});
		items[3].patch({itemVisible: true});
		expectOpenItems(state, [false, true, true, true]);
		accordion.patch({closeOthers: true});
		expectOpenItems(state, [false, true, false, false]);
	});

	test(`should have correct value for shouldBeInDOM`, () => {
		const i = accordion.api.registerItem({props: {itemVisible: true}});
		expect(i.state$().shouldBeInDOM).toBe(true);
		i.api.collapse();
		expect(i.state$().shouldBeInDOM).toBe(false);
		i.patch({itemDestroyOnHide: false});
		expect(i.state$().shouldBeInDOM).toBe(true);
	});

	test(`should closeOthers work when oldOpen is undefined`, () => {
		const element = <HTMLElement>{id: 'domEl'};
		accordion.directives.accordionDirective(element);
		const items = createItems(accordion, 4);
		items[0].api.expand();
		items[1].api.expand();
		expectOpenItems(state, [true, true, false, false]);
		//oldOpenItem is undefined because initially openItems was [] and the first value of
		//oldOpenItem is openItems[0]
		accordion.patch({closeOthers: true});
		expectOpenItems(state, [false, true, false, false]);
	});

	test(`should call initDone to enable the transition on item`, async () => {
		const el = document.createElement('div');
		const itemTransition = vi.fn();
		const itemWidget = accordion.api.registerItem({props: {itemTransition}});
		itemWidget.directives.accordionItemDirective(el);
		itemWidget.directives.collapseDirective(el);
		expectOpenItems(state, [false]);
		itemWidget.api.expand();
		expectOpenItems(state, [true]);
		expect(itemTransition.mock.calls[itemTransition.mock.calls.length - 1].slice(1, 3)).toEqual(['show', false]);
		itemWidget.api.initDone();
		itemWidget.api.collapse();
		expectOpenItems(state, [false]);
		expect(itemTransition.mock.calls[itemTransition.mock.calls.length - 1].slice(1, 3)).toEqual(['hide', true]);
	});

	test(`should not work click when item is disabled`, () => {
		const element = <HTMLElement>{id: 'domEl'};
		const i = accordion.api.registerItem({props: {itemDisabled: true}});
		i.directives.accordionItemDirective(element);
		expectOpenItems(state, [false]);
		i.patch({itemVisible: true});
		expectOpenItems(state, [true]);
		i.actions.click();
		expectOpenItems(state, [true]);
	});

	test(`should have default config`, () => {
		accordion = createAccordion({config: getAccordionDefaultConfig()});
		const {stores} = accordion;
		expect(stores.className$()).toBe('');
		const i = accordion.api.registerItem();
		const {stores: itemStores} = i;
		const itemStoreValues = {
			itemDisabled: itemStores.itemDisabled$(),
			itemVisible: itemStores.itemVisible$(),
			slotItemStructure: itemStores.slotItemStructure$(),
			slotItemBody: itemStores.slotItemBody$(),
			slotItemHeader: itemStores.slotItemHeader$(),
			itemClass: itemStores.itemClass$(),
			itemHeaderClass: itemStores.itemHeaderClass$(),
			itemButtonClass: itemStores.itemButtonClass$(),
			itemCollapseClass: itemStores.itemCollapseClass$(),
			itemBodyClass: itemStores.itemBodyClass$(),
		};
		expect(itemStoreValues).toMatchObject({
			itemDisabled: false,
			itemVisible: false,
			slotItemStructure: undefined,
			slotItemBody: undefined,
			slotItemHeader: undefined,
			itemClass: '',
			itemHeaderClass: '',
			itemButtonClass: '',
			itemCollapseClass: '',
			itemBodyClass: '',
		});
	});
});
