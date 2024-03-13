import {computed, type ReadableSignal} from '@amadeus-it-group/tansu';
import {beforeEach, describe, expect, test, vi} from 'vitest';
import {assign} from '../../../../common/utils';
import {addEvent} from '../../utils/internal/dom';
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
			const {id, slotBadgeLabel, slotItem} = state;
			const normalizedState = {
				...state,
				id: generatedIdRegExp.test(state.id!) ? '(generated)' : id,
				slotBadgeLabel: typeof slotBadgeLabel === 'function' ? '(function)' : '(not a function)',
				slotItem: typeof slotItem === 'function' ? '(function)' : '(not a function)',
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
					input = container.querySelector('#input')! as HTMLInputElement;
					badgeA = container.querySelector('#aa')! as HTMLDivElement;
					badgeB = container.querySelector('#bb')! as HTMLDivElement;

					const hasFocusDirective = selectWidget.directives.hasFocusDirective(container)!;
					const containerDirective = selectWidget.directives.inputContainerDirective(container);
					const removeInputEvent = addEvent(input, 'keydown', selectWidget.actions.onInputKeydown);
					const removebadgeAEvent = addEvent(badgeA, 'keydown', (e) => selectWidget.actions.onBadgeKeydown(e, 'aa'));
					const removebadgeBEvent = addEvent(badgeB, 'keydown', (e) => selectWidget.actions.onBadgeKeydown(e, 'bb'));

					return () => {
						containerDirective?.destroy?.();
						hasFocusDirective.destroy?.();
						removeInputEvent();
						removebadgeAEvent();
						removebadgeBEvent();
					};
				});

				// ['Delete', 'Backspace'].forEach((key) => {
				['Delete'].forEach((key) => {
					test(`Remove selected with ${key}`, async () => {
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

						await 0;
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
			});
		});
	});
});
