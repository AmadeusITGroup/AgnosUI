import {expect, test, describe, beforeEach, vi} from 'vitest';
import type {ReadableSignal} from '@amadeus-it-group/tansu';
import type {ItemCtx, SelectWidget, SelectProps} from './select';
import {createSelect} from './select';

type ExtractReadable<T> = T extends ReadableSignal<infer U> ? U : never;
type ExtractState<T> = T extends SelectWidget<infer U> ? ExtractReadable<SelectWidget<U>['state$']> : never;
/**
 * Clone the object given in parameters.
 * All props containing a function are removed, to ease object comparison.
 */
function cloneData(objectToBeCloned: any) {
	if (!(objectToBeCloned instanceof Object)) {
		return objectToBeCloned;
	}

	let objectClone;

	const Constructor = objectToBeCloned.constructor;
	switch (Constructor) {
		case RegExp:
			objectClone = new Constructor(objectToBeCloned);
			break;
		case Date:
			objectClone = new Constructor(objectToBeCloned.getTime());
			break;
		default:
			objectClone = new Constructor();
	}

	for (const prop in objectToBeCloned) {
		const value = objectToBeCloned[prop];
		if (typeof value !== 'function') {
			objectClone[prop] = cloneData(value);
		}
	}

	return objectClone;
}

describe(`Select model`, () => {
	let props: Partial<SelectProps<string>> & {items: any[]};
	let selectWidget: SelectWidget<string>;
	let states: Array<Partial<ExtractState<SelectWidget<string>>> | undefined> = [];

	/**
	 * Last state emitted by createSelect (value of createSelect().state$)
	 */
	let currentState: ExtractState<SelectWidget<string>> | undefined;

	/**
	 * currentState cloned (without functions)
	 */
	let currentStateCloned: Partial<ExtractState<SelectWidget<string>>> | undefined;

	function getProps(): Partial<SelectProps<string>> & {items: string[]} {
		return {
			opened: false,
			disabled: false,
			filterText: '',
			items: ['aa', 'aabb', 'bb'],
			loading: false,
			selected: [],
		};
	}

	type State = ExtractState<SelectWidget<string>>;
	function getStateClone(): State {
		const stateClone = cloneData(currentState);
		expect(stateClone).toBeDefined();
		return stateClone!;
	}

	function highlightItem(state: State, itemIndex: number) {
		const item = props.items[itemIndex];
		Object.assign(state.highlighted!, {item, id: item, selected: false});
	}

	beforeEach(() => {
		props = getProps();
		selectWidget = createSelect<string>();
		selectWidget.patch(props);

		states = [];
		currentState = undefined;
		return selectWidget.state$.subscribe((value) => {
			const clonedValue = cloneData(value);
			states.push(clonedValue);
			currentStateCloned = clonedValue;
			currentState = value;
		});
	});

	let setMockedFocus: (value: boolean) => void;
	beforeEach(() => {
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
	});

	describe(`simple list`, () => {
		test(`State when 'opened' is false`, () => {
			expect(currentState, 'State when opened is false').toMatchInlineSnapshot(`
				{
				  "className": "",
				  "disabled": false,
				  "filterText": "",
				  "highlighted": undefined,
				  "loading": false,
				  "opened": false,
				  "selected": [],
				  "visible": [],
				}
			`);
			expect(states.length, 'total number of calls').toBe(1);
		});

		test(`State after opening the dropdown`, () => {
			selectWidget.api.open();
			expect(getStateClone(), 'initial state check').toMatchInlineSnapshot(`
				{
				  "className": "",
				  "disabled": false,
				  "filterText": "",
				  "highlighted": {
				    "id": "aa",
				    "item": "aa",
				    "selected": false,
				  },
				  "loading": false,
				  "opened": true,
				  "selected": [],
				  "visible": [
				    {
				      "id": "aa",
				      "item": "aa",
				      "selected": false,
				    },
				    {
				      "id": "aabb",
				      "item": "aabb",
				      "selected": false,
				    },
				    {
				      "id": "bb",
				      "item": "bb",
				      "selected": false,
				    },
				  ],
				}
			`);

			expect(states.length, 'total number of calls').toBe(2);
		});

		test(`closes when losing the focus`, () => {
			expect(currentState!.opened, 'Initially closed').toBe(false);

			selectWidget.api.open();
			expect(currentState!.opened).toBe(true);

			setMockedFocus(false);
			expect(currentState!.opened).toBe(false);

			setMockedFocus(true);
			expect(currentState!.opened, 'stay close if focus is back').toBe(false);
		});

		test(`toggle open/close with the api`, () => {
			expect(currentState!.opened, 'Initially closed').toBe(false);

			selectWidget.api.open();
			expect(currentState!.opened).toBe(true);

			selectWidget.api.close();
			expect(currentState!.opened).toBe(false);

			selectWidget.api.toggle();
			expect(currentState!.opened).toBe(true);

			selectWidget.api.toggle(true);
			expect(currentState!.opened, 'Toggle with open forced to true').toBe(true);

			selectWidget.api.toggle();
			expect(currentState!.opened).toBe(false);
		});

		test(`filtering`, () => {
			selectWidget.api.open();
			const expectedState = getStateClone();
			let text = 'bb';

			Object.assign(expectedState, {
				filterText: text,
				highlighted: {id: 'aabb', item: 'aabb', selected: false},
				visible: expectedState.visible.filter(({item}) => item.includes(text)),
			});

			selectWidget.patch({filterText: text});
			expect(currentStateCloned, 'state after text filtering').toEqual(expectedState);

			text = 'Bb';
			Object.assign(expectedState, {
				filterText: text,
			});

			selectWidget.patch({filterText: text});
			expect(currentStateCloned, 'filtering with different case').toEqual(expectedState);
		});

		test('typing', () => {
			selectWidget.actions.onInput({target: {value: 'aa'}});
			expect(currentState!.opened).toBe(true);
			expect(currentState!.visible.length).toBe(2);
			const onFilterTextChange = vi.fn();
			const widgetWithFilterChange = createSelect({props: {onFilterTextChange}});
			widgetWithFilterChange.patch(props);
			widgetWithFilterChange.actions.onInput({target: {value: 'aa'}});
			expect(onFilterTextChange).toHaveBeenCalledWith('aa');
		});

		test(`Functionnal api for highlighted item`, () => {
			selectWidget.api.open();
			const expectedState = getStateClone();

			selectWidget.api.highlightLast();
			highlightItem(expectedState, 2);
			expect(currentStateCloned, 'highlightLast api').toEqual(expectedState);

			selectWidget.api.highlightFirst();
			highlightItem(expectedState, 0);
			expect(currentStateCloned, 'highlightFirst api').toEqual(expectedState);

			selectWidget.api.highlightNext();
			highlightItem(expectedState, 1);
			expect(currentStateCloned, 'highlightNext api').toEqual(expectedState);

			selectWidget.api.highlightPrevious();
			highlightItem(expectedState, 0);
			expect(currentStateCloned, 'highlightPrevious api').toEqual(expectedState);

			selectWidget.api.highlightPrevious();
			highlightItem(expectedState, 2);
			expect(currentStateCloned, 'highlightPrevious api with cycle').toEqual(expectedState);

			selectWidget.api.highlightNext();
			highlightItem(expectedState, 0);
			expect(currentStateCloned, 'highlightNext api with cycle').toEqual(expectedState);

			const item = props.items[2];
			selectWidget.api.highlight(item);
			highlightItem(expectedState, 2);
			expect(currentStateCloned, 'highlight api').toEqual(expectedState);

			selectWidget.api.highlight('not in list');
			expectedState.highlighted = undefined;
			expect(currentStateCloned, 'highlight api with a non existant item').toEqual(expectedState);

			selectWidget.patch({items: []});
			selectWidget.api.highlight('not in list');
			expect(currentStateCloned, 'highlight api with a non existant item').toContain({highlighted: undefined});
			selectWidget.api.highlightPrevious();
			expect(currentStateCloned, 'highlight api with a non existant item').toContain({highlighted: undefined});
			selectWidget.api.highlightNext();
			expect(currentStateCloned, 'highlight api with a non existant item').toContain({highlighted: undefined});
		});
	});

	describe(`Keyboard management`, () => {
		let preventDefaultCall = 0;
		function createEvent({ctrlKey = false} = {}) {
			preventDefaultCall = 0;
			return {
				key: '',
				ctrlKey,
				preventDefault() {
					preventDefaultCall++;
				},
			};
		}

		test('Arrow keys', () => {
			const event = createEvent();
			let preventDefaultCallNb = 0;

			event.key = 'ArrowDown';
			selectWidget.actions.onInputKeydown(event);
			const expectedState = getStateClone();

			highlightItem(expectedState, 0);
			expect(currentStateCloned, 'Menu opened with arrow down').toEqual(expectedState);
			expect(preventDefaultCall).toBe(++preventDefaultCallNb);

			event.key = 'ArrowDown';
			selectWidget.actions.onInputKeydown(event);
			highlightItem(expectedState, 1);
			expect(currentStateCloned, 'Move to the second item').toEqual(expectedState);
			expect(preventDefaultCall).toBe(++preventDefaultCallNb);

			event.key = 'ArrowUp';
			selectWidget.actions.onInputKeydown(event);
			highlightItem(expectedState, 0);
			expect(currentStateCloned, 'Move back to the first item').toEqual(expectedState);
			expect(preventDefaultCall).toBe(++preventDefaultCallNb);

			event.key = 'ArrowUp';
			selectWidget.actions.onInputKeydown(event);
			highlightItem(expectedState, 2);
			expect(currentStateCloned, 'Loop to the last item').toEqual(expectedState);
			expect(preventDefaultCall).toBe(++preventDefaultCallNb);

			event.key = 'ArrowDown';
			selectWidget.actions.onInputKeydown(event);
			highlightItem(expectedState, 0);
			expect(currentStateCloned, 'Loop back to the first item').toEqual(expectedState);
			expect(preventDefaultCall).toBe(++preventDefaultCallNb);

			event.key = 'A';
			selectWidget.actions.onInputKeydown(event);
			highlightItem(expectedState, 0);
			expect(currentStateCloned).toEqual(expectedState);
			expect(preventDefaultCall, 'Random text is not prevented').toBe(preventDefaultCallNb);
		});

		test('Arrow keys with Ctrl', () => {
			selectWidget.api.open();
			const expectedState = getStateClone();
			const event = createEvent({ctrlKey: true});

			event.key = 'ArrowDown';
			selectWidget.actions.onInputKeydown(event);
			highlightItem(expectedState, 2);
			expect(currentStateCloned, 'Move to the last item').toEqual(expectedState);
			expect(preventDefaultCall).toBe(1);

			event.key = 'ArrowDown';
			selectWidget.actions.onInputKeydown(event);
			highlightItem(expectedState, 2);
			expect(currentStateCloned, 'Second action does not loop').toEqual(expectedState);
			expect(preventDefaultCall).toBe(2);

			event.key = 'ArrowUp';
			selectWidget.actions.onInputKeydown(event);
			highlightItem(expectedState, 0);
			expect(currentStateCloned, 'Move to the first item').toEqual(expectedState);
			expect(preventDefaultCall).toBe(3);

			event.key = 'ArrowUp';
			selectWidget.actions.onInputKeydown(event);
			highlightItem(expectedState, 0);
			expect(currentStateCloned, 'Second action does not loop').toEqual(expectedState);
			expect(preventDefaultCall).toBe(4);
		});

		test('Change the selection with enter', () => {
			const event = createEvent();
			event.key = 'ArrowDown';
			selectWidget.actions.onInputKeydown(event);
			const expectedState = getStateClone();
			Object.assign(expectedState.highlighted!, {item: props.items[0], selected: false});
			expect(currentStateCloned, 'Menu opened with arrow down').toEqual(expectedState);

			event.key = 'Enter';
			selectWidget.actions.onInputKeydown(event);
			const expectedStateAfterSelection = cloneData(expectedState);
			const itemCtx: ItemCtx<string> = expectedStateAfterSelection.highlighted!;
			itemCtx.selected = true;
			expectedStateAfterSelection.selected = [itemCtx.item];
			expectedStateAfterSelection.visible[0].selected = true;
			Object.assign(expectedStateAfterSelection.highlighted!, {item: props.items[0], selected: true});
			expect(currentStateCloned, 'First item selected').toEqual(expectedStateAfterSelection);

			event.key = 'Enter';
			selectWidget.actions.onInputKeydown(event);
			expect(currentStateCloned, 'Back to first state after un-selection').toEqual(expectedState);
		});

		test('Close with escape', () => {
			selectWidget.api.open();
			const expectedState = getStateClone();
			const event = createEvent();

			event.key = 'Escape';
			Object.assign(expectedState, {
				opened: false,
				highlighted: undefined,
				visible: [],
			});
			selectWidget.actions.onInputKeydown(event);
			expect(currentState, 'Move to the last item').toEqual(expectedState);
			expect(preventDefaultCall).toBe(1);
		});
	});
	describe(`item click`, () => {
		test(`change the selection with the global api`, () => {
			selectWidget.api.open();
			const expectedState = getStateClone();

			selectWidget.api.select('Not in list');
			expect(currentStateCloned, `unknown item don't change the selection`).toEqual(expectedState);

			const item0 = 'aa';
			const item1 = 'aabb';
			selectWidget.api.select(item1);
			expectedState.selected = [item1];
			expectedState.visible[1].selected = true;
			expect(currentStateCloned, 'Select item').toEqual(expectedState);

			selectWidget.api.select(item1);
			expect(currentStateCloned, `Don't duplicate the selected item`).toEqual(expectedState);

			selectWidget.api.select(item0);
			expectedState.selected = [item1, item0];
			expectedState.visible[0].selected = true;
			expectedState.highlighted!.selected = true;
			expect(currentStateCloned, `select two items and keep the selection order`).toEqual(expectedState);

			selectWidget.api.unselect(item1);
			expectedState.selected = [item0];
			expectedState.visible[1].selected = false;
			expect(currentStateCloned, `Unselect item`).toEqual(expectedState);

			selectWidget.api.toggleItem(item0);
			expectedState.selected = [];
			expectedState.visible[0].selected = false;
			expectedState.highlighted!.selected = false;
			expect(currentStateCloned, `Toggle item`).toEqual(expectedState);
		});

		test(`change the selection with the item api`, () => {
			selectWidget.api.open();
			const expectedState = getStateClone();
			const item0 = 'aa';
			const item1 = 'aabb';
			currentState!.visible[1].select();
			expectedState.selected = [item1];
			expectedState.visible[1].selected = true;
			expect(currentStateCloned, 'Select item').toEqual(expectedState);

			currentState!.visible[1].select();
			expect(currentStateCloned, `Don't duplicate the selected item`).toEqual(expectedState);

			currentState!.visible[0].select();
			expectedState.selected = [item1, item0];
			expectedState.visible[0].selected = true;
			expectedState.highlighted!.selected = true;
			expect(currentStateCloned, `select two items and keep the selection order`).toEqual(expectedState);

			currentState!.visible[1].unselect();
			expectedState.selected = [item0];
			expectedState.visible[1].selected = false;
			expect(currentStateCloned, `Unselect item`).toEqual(expectedState);

			currentState!.visible[0].toggle();
			expectedState.selected = [];
			expectedState.visible[0].selected = false;
			expectedState.highlighted!.selected = false;
			expect(currentStateCloned, `Toggle item`).toEqual(expectedState);
		});

		test(`clear the selection`, () => {
			selectWidget.api.open();
			const expectedState = getStateClone();

			// Select then clear should return to the initial state
			selectWidget.api.select('aabb');
			selectWidget.api.select('aa');
			selectWidget.api.clear();

			expect(currentStateCloned, 'After clear').toEqual(expectedState);
		});
	});
});
