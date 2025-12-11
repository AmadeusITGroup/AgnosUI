import {computed, type ReadableSignal} from '@amadeus-it-group/tansu';
import {beforeEach, describe, expect, test, vi} from 'vitest';
import {assign} from '../../../../common/utils';
import type {ItemContext, SelectProps, SelectState, SelectWidget} from './select';
import {createSelect, getSelectDefaultConfig} from './select';

type ExtractReadable<T> = T extends ReadableSignal<infer U> ? U : never;
type ExtractState<T> = T extends SelectWidget<infer U> ? ExtractReadable<SelectWidget<U>['state$']> : never;

describe(`Select model`, () => {
	let setMockedFocus: (value: boolean) => void;
	function initMockFocus<Item>(selectWidget: SelectWidget<Item>) {
		const itemInside = document.body.appendChild(document.createElement('div'));
		const itemOutside = document.body.appendChild(document.createElement('div'));
		itemInside.tabIndex = -1;
		itemOutside.tabIndex = -1;
		const hasFocusInstance = selectWidget.directives.hasFocusDirective(itemInside);
		setMockedFocus = (value) => (value ? itemInside : itemOutside).focus();
		setMockedFocus(true);
		return () => {
			hasFocusInstance?.destroy?.();
			itemInside.parentElement?.removeChild(itemInside);
			itemOutside.parentElement?.removeChild(itemOutside);
		};
	}

	const generatedIdRegExp = /^auId-/;
	function createTestContext<T>(selectProps: Partial<SelectProps<T>>) {
		const items = selectProps.items!;
		const selectWidget = createSelect<T>({
			props: selectProps,
		});
		type State = ExtractState<SelectWidget<T>>;
		const states: State[] = [];
		let currentState: State;

		const normalizedState$ = computed(() => {
			const state = selectWidget.state$();
			const {id} = state;
			const normalizedState = {
				...state,
				id: generatedIdRegExp.test(state.id!) ? '(generated)' : id,
			};

			return normalizedState;
		});

		const unsubscribe = normalizedState$.subscribe((value) => {
			states.push(value);
			currentState = value;
		});

		return {
			items,
			selectWidget,
			selectProps,
			getStates: () => states,
			getState(): State {
				return currentState;
			},
			highlightItem(state: State, itemIndex: number) {
				const item = items[itemIndex];
				state.highlighted = {...state.highlighted!, item, id: selectProps.itemIdFn!(item), selected: false};
			},
			unsubscribe,
		};
	}

	describe(`List with strings`, () => {
		let testCtx: ReturnType<typeof createTestContext<string>>;
		const defaultConfig = getSelectDefaultConfig();

		beforeEach(() => {
			testCtx = createTestContext({
				open: false,
				disabled: false,
				filterText: '',
				items: ['aa', 'aabb', 'bb'],
				loading: false,
				selected: [],
				itemIdFn: defaultConfig.itemIdFn,
				onFilterTextChange: (text) => {
					testCtx.selectWidget.patch({items: text ? testCtx.items.filter((item) => item.toLowerCase().includes(text.toLowerCase())) : testCtx.items});
				},
			});
			const unmockFocus = initMockFocus(testCtx.selectWidget);
			return () => {
				testCtx.unsubscribe();
				unmockFocus();
			};
		});

		describe(`simple list`, () => {
			test(`State when 'open' is false`, () => {
				const {getStates, getState} = testCtx;
				expect(getState(), 'State when open is false').toStrictEqual({
					ariaLabel: 'Select',
					badgeClassName: '',
					className: '',
					disabled: false,
					filterText: '',
					highlighted: undefined,
					id: '(generated)',
					loading: false,
					menuClassName: '',
					menuItemClassName: '',
					open: false,
					placement: undefined,
					selected: [],
					selectedContexts: [],
					visibleItems: [],
				});
				expect(getStates().length, 'total number of calls').toBe(1);
			});

			test(`State after opening the dropdown`, () => {
				const {selectWidget, getStates, getState} = testCtx;
				selectWidget.api.open();
				expect(getState(), 'initial state check').toStrictEqual({
					ariaLabel: 'Select',
					badgeClassName: '',
					className: '',
					disabled: false,
					filterText: '',
					highlighted: {item: 'aa', id: 'aa', selected: false},
					id: '(generated)',
					loading: false,
					menuClassName: '',
					menuItemClassName: '',
					open: true,
					placement: undefined,
					selected: [],
					selectedContexts: [],
					visibleItems: [
						{item: 'aa', id: 'aa', selected: false},
						{item: 'aabb', id: 'aabb', selected: false},
						{item: 'bb', id: 'bb', selected: false},
					],
				});
				expect(getStates().length, 'total number of calls').toBe(2);
			});

			test(`closes when losing the focus`, () => {
				const {selectWidget, getState} = testCtx;
				expect(getState().open, 'Initially closed').toBe(false);

				selectWidget.api.open();
				expect(getState().open).toBe(true);

				setMockedFocus(false);
				expect(getState().open).toBe(false);

				setMockedFocus(true);
				expect(getState().open, 'stay close if focus is back').toBe(false);
			});

			test(`toggle open/close with the api`, () => {
				const {selectWidget, getState} = testCtx;
				expect(getState().open, 'Initially closed').toBe(false);

				selectWidget.api.open();
				expect(getState().open).toBe(true);

				selectWidget.api.close();
				expect(getState().open).toBe(false);

				selectWidget.api.toggle();
				expect(getState().open).toBe(true);

				selectWidget.api.toggle(true);
				expect(getState().open, 'Toggle with open forced to true').toBe(true);

				selectWidget.api.toggle();
				expect(getState().open).toBe(false);
			});

			test(`filtering`, () => {
				const {selectWidget, getState} = testCtx;
				selectWidget.api.open();
				const expectedState = getState();
				let text = 'bb';

				assign(expectedState, {
					filterText: text,
					highlighted: {id: 'aabb', item: 'aabb', selected: false},
					visibleItems: expectedState.visibleItems.filter(({item}) => item.includes(text)),
				});

				const input = document.createElement('input');
				const directiveDestroy = selectWidget.directives.inputDirective(input);
				input.value = text;
				input.dispatchEvent(new Event('input'));
				expect(getState(), 'state after text filtering').toStrictEqual(expectedState);

				text = 'Bb';
				assign(expectedState, {
					filterText: text,
				});

				input.value = text;
				input.dispatchEvent(new Event('input'));
				expect(getState(), 'filtering with different case').toEqual(expectedState);
				directiveDestroy?.destroy?.();
			});

			test('typing', () => {
				const {selectWidget, selectProps, getState} = testCtx;
				const expectedState = getState();
				const mock = vi.fn().mockImplementation(selectProps.onFilterTextChange!);
				selectWidget.patch({onFilterTextChange: mock});

				const input = document.createElement('input');
				const directiveDestroy = selectWidget.directives.inputDirective(input);
				input.value = 'aa';
				input.dispatchEvent(new Event('input'));
				assign(expectedState, {
					open: true,
					filterText: 'aa',
					visibleItems: [
						{item: 'aa', id: 'aa', selected: false},
						{item: 'aabb', id: 'aabb', selected: false},
					],
					highlighted: {item: 'aa', id: 'aa', selected: false},
				});
				expect(getState()).toStrictEqual(expectedState);
				expect(mock).toHaveBeenCalledWith('aa');
				input.value = 'aa';
				input.dispatchEvent(new Event('input'));
				expect(mock).toHaveBeenCalledTimes(1);
				vi.resetAllMocks();
				directiveDestroy?.destroy?.();
			});

			test(`Functionnal api for highlighted item`, () => {
				const {selectWidget, highlightItem, getState} = testCtx;
				selectWidget.api.open();
				const expectedState = getState();

				selectWidget.api.highlightLast();
				highlightItem(expectedState, 2);
				expect(getState(), 'highlightLast api').toEqual(expectedState);

				selectWidget.api.highlightFirst();
				highlightItem(expectedState, 0);
				expect(getState(), 'highlightFirst api').toEqual(expectedState);

				selectWidget.api.highlightNext();
				highlightItem(expectedState, 1);
				expect(getState(), 'highlightNext api').toEqual(expectedState);

				selectWidget.api.highlightPrevious();
				highlightItem(expectedState, 0);
				expect(getState(), 'highlightPrevious api').toEqual(expectedState);

				selectWidget.api.highlightPrevious();
				highlightItem(expectedState, 2);
				expect(getState(), 'highlightPrevious api with cycle').toEqual(expectedState);

				selectWidget.api.highlightNext();
				highlightItem(expectedState, 0);
				expect(getState(), 'highlightNext api with cycle').toEqual(expectedState);

				const item = testCtx.items[2];
				selectWidget.api.highlight(item);
				highlightItem(expectedState, 2);
				expect(getState(), 'highlight api').toEqual(expectedState);

				selectWidget.api.highlight('not in list');
				expectedState.highlighted = undefined;
				expect(getState(), 'highlight api with a non existant item').toEqual(expectedState);

				selectWidget.patch({items: []});
				selectWidget.api.highlight('not in list');
				expect(getState(), 'highlight api with a non existant item').toMatchObject({highlighted: undefined});
				selectWidget.api.highlightPrevious();
				expect(getState(), 'highlight api with a non existant item').toMatchObject({highlighted: undefined});
				selectWidget.api.highlightNext();
				expect(getState(), 'highlight api with a non existant item').toMatchObject({highlighted: undefined});
			});
		});

		describe(`Keyboard management`, () => {
			let container: HTMLElement;
			let preventDefaultCall = 0;

			beforeEach(() => {
				preventDefaultCall = 0;
				container = document.body.appendChild(document.createElement('div'));
				return () => {
					container.parentElement?.removeChild(container);
				};
			});

			function triggerKeyboardEvent(key: string, {ctrlKey = false} = {}, node: Element | undefined = document.activeElement!) {
				const event = new KeyboardEvent('keydown', {key, ctrlKey, bubbles: true});
				const originalPreventDefault = event.preventDefault.bind(event);
				event.preventDefault = (...args) => {
					preventDefaultCall++;
					originalPreventDefault(...args);
				};
				node.dispatchEvent(event);
			}

			describe(`Input / menu interactions`, () => {
				let preventDefaultCallNb = 0;
				let input: HTMLElement;
				beforeEach(() => {
					preventDefaultCallNb = 0;
					container.innerHTML = `<input id="input" />`;
					input = container.querySelector('#input')!;
					const selectWidget = testCtx.selectWidget;
					const hasFocusDirective = selectWidget.directives.hasFocusDirective(container)!;
					const containerDirective = selectWidget.directives.inputContainerDirective(container);
					const inputDirective = selectWidget.directives.inputDirective(input);

					return () => {
						containerDirective?.destroy?.();
						hasFocusDirective.destroy?.();
						inputDirective?.destroy?.();
					};
				});

				test('Open/close dropdown', () => {
					const {highlightItem, getState} = testCtx;

					input.focus();
					triggerKeyboardEvent('ArrowDown');
					const expectedState = getState();

					highlightItem(expectedState, 0);
					expect(getState(), 'Menu open with arrow down').toEqual(expectedState);
					expect(preventDefaultCall).toBe(++preventDefaultCallNb);

					triggerKeyboardEvent('ArrowDown');
					highlightItem(expectedState, 1);
					expect(getState(), 'Move to the second item').toEqual(expectedState);
					expect(preventDefaultCall).toBe(++preventDefaultCallNb);

					triggerKeyboardEvent('ArrowUp');
					highlightItem(expectedState, 0);
					expect(getState(), 'Move back to the first item').toEqual(expectedState);
					expect(preventDefaultCall).toBe(++preventDefaultCallNb);

					triggerKeyboardEvent('ArrowUp');
					highlightItem(expectedState, 2);
					expect(getState(), 'Loop to the last item').toEqual(expectedState);
					expect(preventDefaultCall).toBe(++preventDefaultCallNb);

					triggerKeyboardEvent('ArrowDown');
					highlightItem(expectedState, 0);
					expect(getState(), 'Loop back to the first item').toEqual(expectedState);
					expect(preventDefaultCall).toBe(++preventDefaultCallNb);

					triggerKeyboardEvent('A');
					highlightItem(expectedState, 0);
					expect(getState()).toEqual(expectedState);
					expect(preventDefaultCall, 'Random text is not prevented').toBe(preventDefaultCallNb);
				});

				test('Arrow keys with Ctrl', () => {
					const {selectWidget, highlightItem, getState} = testCtx;
					selectWidget.api.open();
					const expectedState = getState();

					input.focus();
					triggerKeyboardEvent('ArrowDown', {ctrlKey: true});
					highlightItem(expectedState, 2);
					expect(getState(), 'Move to the last item').toEqual(expectedState);
					expect(preventDefaultCall).toBe(1);

					triggerKeyboardEvent('ArrowDown', {ctrlKey: true});
					highlightItem(expectedState, 2);
					expect(getState(), 'Second action does not loop').toEqual(expectedState);
					expect(preventDefaultCall).toBe(2);

					triggerKeyboardEvent('ArrowUp', {ctrlKey: true});
					highlightItem(expectedState, 0);
					expect(getState(), 'Move to the first item').toEqual(expectedState);
					expect(preventDefaultCall).toBe(3);

					triggerKeyboardEvent('ArrowUp', {ctrlKey: true});
					highlightItem(expectedState, 0);
					expect(getState(), 'Second action does not loop').toEqual(expectedState);
					expect(preventDefaultCall).toBe(4);
				});

				test('Change the selection with enter', () => {
					const {getState, items} = testCtx;

					input.focus();
					triggerKeyboardEvent('ArrowDown');
					const expectedState = getState();
					expectedState.highlighted = {...expectedState.highlighted!, item: items[0], selected: false};
					expect(getState(), 'Menu open with arrow down').toEqual(expectedState);

					triggerKeyboardEvent('Enter');
					const expectedStateAfterSelection: SelectState<string> = structuredClone(expectedState);
					const itemCtx: ItemContext<string> = expectedStateAfterSelection.highlighted!;
					itemCtx.selected = true;
					assign(expectedStateAfterSelection, {
						selected: [itemCtx.item],
						selectedContexts: [{id: 'aa', item: itemCtx.item, selected: true}],
						highlighted: {...expectedState.highlighted, item: items[0], selected: true},
					});
					expectedStateAfterSelection.visibleItems[0].selected = true;
					expect(getState(), 'First item selected').toEqual(expectedStateAfterSelection);

					triggerKeyboardEvent('Enter');
					expect(getState(), 'Back to first state after un-selection').toEqual(expectedState);
				});

				test('Close with escape', () => {
					const {selectWidget, getState} = testCtx;
					selectWidget.api.open();
					const expectedState = getState();

					input.focus();
					triggerKeyboardEvent('Escape');
					expect(getState(), 'Close on escape').toEqual(
						assign(expectedState, {
							open: false,
							highlighted: undefined,
							visibleItems: [],
						}),
					);
					expect(preventDefaultCall).toBe(1);
				});
			});

			describe(`Input / badges interactions`, () => {
				let input: HTMLInputElement;
				let badgeA: HTMLElement;
				let badgeB: HTMLElement;

				beforeEach(() => {
					const selectWidget = testCtx.selectWidget;
					selectWidget.patch({
						selected: ['aa', 'bb'],
					});
					container.innerHTML = `
						<div id="aa" class="au-select-badge" tabindex="-1">aa</div>
						<div id="bb" class="au-select-badge" tabindex="-1">bb</div>
						<input id="input"/>
					`;
					input = container.querySelector('#input')!;
					badgeA = container.querySelector('#aa')!;
					badgeB = container.querySelector('#bb')!;

					const hasFocusDirective = selectWidget.directives.hasFocusDirective(container)!;
					const containerDirective = selectWidget.directives.inputContainerDirective(container);
					const inputDirective = selectWidget.directives.inputDirective(input);
					const badgeADirective = selectWidget.directives.badgeAttributesDirective(badgeA, testCtx.getState().visibleItems[0]);
					const badgeBDirective = selectWidget.directives.badgeAttributesDirective(badgeB, testCtx.getState().visibleItems[1]);

					return () => {
						containerDirective?.destroy?.();
						hasFocusDirective.destroy?.();
						inputDirective?.destroy?.();
						badgeADirective?.destroy?.();
						badgeBDirective?.destroy?.();
					};
				});

				['Delete', 'Backspace'].forEach((key) => {
					test.todo(`Remove selected with ${key}`, async () => {
						const {getState} = testCtx;
						const expectedState = getState();
						expect(expectedState.selectedContexts).toStrictEqual([
							{item: 'aa', id: 'aa', selected: true},
							{item: 'bb', id: 'bb', selected: true},
						]);

						badgeB.focus();
						triggerKeyboardEvent(key);
						expect(getState()).toStrictEqual(
							assign(expectedState, {
								selected: ['aa'],
								selectedContexts: [{item: 'aa', id: 'aa', selected: true}],
							}),
						);

						await Promise.resolve();
						badgeB.parentElement?.removeChild(badgeB);

						await vi.waitUntil(() => document.activeElement === badgeA);

						triggerKeyboardEvent(key);
						expect(getState()).toStrictEqual(
							assign(expectedState, {
								selected: [],
								selectedContexts: [],
							}),
						);
						await vi.waitUntil(() => document.activeElement === input);
					});
				});

				test(`Arrow left/Arrow right`, () => {
					input.focus();
					triggerKeyboardEvent('ArrowLeft');
					expect(document.activeElement).toBe(badgeB);
					triggerKeyboardEvent('ArrowRight');
					expect(document.activeElement).toBe(input);
				});

				test(`Home/End keys`, () => {
					input.focus();
					triggerKeyboardEvent('Home');
					expect(document.activeElement).toBe(badgeA);
					triggerKeyboardEvent('End');
					expect(document.activeElement).toBe(input);
				});
			});
		});

		describe(`item click`, () => {
			test(`change the selection with the global api`, () => {
				const {selectWidget, getState} = testCtx;
				selectWidget.api.open();
				const expectedState = getState();

				selectWidget.api.select('Not in list');
				expect(getState(), `unknown item don't change the selection`).toEqual(expectedState);

				const item0 = 'aa';
				const item1 = 'aabb';
				selectWidget.api.select(item1);

				expectedState.visibleItems[1].selected = true;
				expect(getState(), 'Select item').toEqual(
					assign(expectedState, {
						selected: [item1],
						selectedContexts: [{item: 'aabb', id: 'aabb', selected: true}],
					}),
				);

				selectWidget.api.select(item1);
				expect(getState(), `Don't duplicate the selected item`).toEqual(expectedState);

				selectWidget.api.select(item0);
				expectedState.visibleItems[0].selected = true;
				expect(getState(), `select two items and keep the selection order`).toEqual(
					assign(expectedState, {
						selected: [item1, item0],
						selectedContexts: [
							{item: 'aabb', id: 'aabb', selected: true},
							{item: 'aa', id: 'aa', selected: true},
						],
						highlighted: {...expectedState.highlighted!, selected: true},
					}),
				);

				selectWidget.api.unselect(item1);
				expectedState.visibleItems[1].selected = false;
				expect(getState(), `Unselect item`).toEqual(
					assign(expectedState, {
						selected: [item0],
						selectedContexts: [{item: 'aa', id: 'aa', selected: true}],
					}),
				);

				selectWidget.api.toggleItem(item0);
				expectedState.visibleItems[0].selected = false;
				expect(getState(), `Toggle item`).toEqual(
					assign(expectedState, {
						selected: [],
						selectedContexts: [],
						highlighted: {...expectedState.highlighted!, selected: false},
					}),
				);

				// Deselect when closed

				// Select an item
				selectWidget.api.toggleItem(item0);
				expectedState.visibleItems[0].selected = true;
				expect(getState()).toEqual(
					assign(expectedState, {
						selected: [item0],
						selectedContexts: [{item: 'aa', id: 'aa', selected: true}],
						highlighted: {...expectedState.highlighted!, selected: true},
					}),
				);
				selectWidget.api.close();
				// Deselect it when closed
				selectWidget.api.toggleItem(item0);
				expect(getState(), `Can deselect an item when the list is closed`).toEqual(
					assign(expectedState, {
						selected: [],
						selectedContexts: [],
						visibleItems: [],
						highlighted: undefined,
						open: false,
					}),
				);
			});

			test(`change the selection with the item api`, () => {
				const {selectWidget, getState} = testCtx;
				const {open, select, unselect, toggleItem} = selectWidget.api;
				open();
				const expectedState = getState();
				const item0 = 'aa';
				const item1 = 'aabb';
				select(getState().visibleItems[1].item);
				expectedState.visibleItems[1].selected = true;
				expect(getState(), 'Select item').toEqual(
					assign(expectedState, {
						selected: [item1],
						selectedContexts: [{item: 'aabb', id: 'aabb', selected: true}],
					}),
				);

				select(getState().visibleItems[1].item);
				expect(getState(), `Don't duplicate the selected item`).toEqual(expectedState);

				select(getState().visibleItems[0].item);
				expectedState.visibleItems[0].selected = true;
				expect(getState(), `select two items and keep the selection order`).toEqual(
					assign(expectedState, {
						selected: [item1, item0],
						selectedContexts: [
							{item: 'aabb', id: 'aabb', selected: true},
							{item: 'aa', id: 'aa', selected: true},
						],
						highlighted: {...expectedState.highlighted!, selected: true},
					}),
				);

				unselect(getState().visibleItems[1].item);
				expectedState.visibleItems[1].selected = false;
				expect(getState(), `Unselect item`).toEqual(
					assign(expectedState, {
						selected: [item0],
						selectedContexts: [{item: 'aa', id: 'aa', selected: true}],
					}),
				);

				toggleItem(getState().visibleItems[0].item);
				expectedState.visibleItems[0].selected = false;
				expect(getState(), `Toggle item`).toEqual(
					assign(expectedState, {
						selected: [],
						selectedContexts: [],
						highlighted: {...expectedState.highlighted!, selected: false},
					}),
				);
			});

			test(`clear the selection`, () => {
				const {selectWidget, getState} = testCtx;
				selectWidget.api.open();
				const expectedState = getState();

				// Select then clear should return to the initial state
				selectWidget.api.select('aabb');
				selectWidget.api.select('aa');
				selectWidget.api.clear();

				expect(getState(), 'After clear').toEqual(expectedState);
			});
		});
	});

	describe(`List with objects`, () => {
		type Item = {id: number; text: string};
		let testCtx: ReturnType<typeof createTestContext<Item>>;

		function getItems() {
			return [
				{id: 1, text: 'aa'},
				{id: 2, text: 'aabb'},
				{id: 3, text: 'bb'},
			];
		}

		beforeEach(() => {
			testCtx = createTestContext({
				open: false,
				disabled: false,
				filterText: '',
				items: getItems(),
				loading: false,
				selected: [],
				itemIdFn: (item) => `${item.id}`,
				onFilterTextChange: (text) => {
					const newList = getItems();
					testCtx.selectWidget.patch({items: text ? newList.filter((item) => item.text.toLowerCase().includes(text.toLowerCase())) : newList});
				},
			});
			const unmockFocus = initMockFocus(testCtx.selectWidget);
			return () => {
				testCtx.unsubscribe();
				unmockFocus();
			};
		});

		test('selection when items list are recreated', () => {
			const {selectWidget, getState} = testCtx;
			const {open, close, toggleItem} = selectWidget.api;
			open();
			const expectedState = getState();
			toggleItem(getState().visibleItems[0].item);
			expectedState.visibleItems[0].selected = true;
			expect(getState()).toStrictEqual(
				assign(expectedState, {
					selected: [{id: 1, text: 'aa'}],
					selectedContexts: [{item: {id: 1, text: 'aa'}, id: '1', selected: true}],
					highlighted: {...expectedState.highlighted!, selected: true},
				}),
			);

			close();
			selectWidget.patch({items: getItems()});
			open();
			expect(getState()).toStrictEqual(expectedState);
		});

		test('manage duplicate ids', () => {
			const {selectWidget, getState} = testCtx;
			const {open} = selectWidget.api;
			const item1 = {id: 1, text: 'a1'};
			const item2 = {id: 1, text: 'a2'};
			selectWidget.patch({items: [item1, item2]});
			open();
			const expectedState: ReturnType<typeof getState> = {
				id: '(generated)',
				ariaLabel: 'Select',
				visibleItems: [{item: item2, id: '1', selected: false}],
				highlighted: {item: item2, id: '1', selected: false},
				open: true,
				selectedContexts: [],
				filterText: '',
				disabled: false,
				loading: false,
				selected: [],
				className: '',
				menuClassName: '',
				menuItemClassName: '',
				badgeClassName: '',
				placement: undefined,
			};
			expect(getState()).toStrictEqual(expectedState);

			selectWidget.patch({itemIdFn: (item) => `${item.id}-${item.text}`});
			expect(getState()).toStrictEqual(
				assign(expectedState, {
					visibleItems: [
						{item: item1, id: '1-a1', selected: false},
						{item: item2, id: '1-a2', selected: false},
					],
					highlighted: {id: '1-a1', item: item1, selected: false},
				}),
			);
		});
	});
});
