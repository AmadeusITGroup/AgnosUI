import {beforeEach, describe, expect, test, vi} from 'vitest';
import type {PropsConfig} from '../types';
import {createPagination} from './pagination';
import {createRating} from './rating';
import type {SelectState} from './select';
import {createSelect} from './select';
import type {SliderProps} from './slider';
import {createSlider} from './slider';

describe('Callback events', () => {
	describe(`Select widget`, () => {
		let container: HTMLElement;
		let outsideElement: HTMLInputElement;
		let selectInput: HTMLInputElement;
		let selectWidget: ReturnType<typeof createSelect<string>>;
		let state: SelectState<string>;

		function userType(text: string) {
			selectInput.value = text;
			selectWidget.actions.onInput({target: selectInput});
		}

		const callbacks = {
			onFilterTextChange: (text: string) => {},
			onOpenChange: () => {},
		};

		beforeEach(() => {
			container = document.createElement('div');
			container.innerHTML = `
				<input id="outside" />
				<div id="selectContainer">
					<input id="inside" />
				</div>
			`;
			container = document.body.appendChild(container);
			const selectContainer = container.querySelector('#selectContainer') as HTMLElement;
			outsideElement = container.querySelector('#outside') as HTMLInputElement;
			selectInput = container.querySelector('#inside') as HTMLInputElement;

			// Callback with patch
			callbacks.onFilterTextChange = (text: string) => selectWidget.patch({filterText: text.toUpperCase()});
			callbacks.onOpenChange = () => {};

			selectWidget = createSelect({
				props: {
					items: ['a1', 'a2', 'a3'],
					onFilterTextChange: (text: string) => callbacks.onFilterTextChange(text),
					onOpenChange: () => callbacks.onOpenChange(),
				},
			});
			const {directives} = selectWidget;
			const hasFocusDirective = directives.hasFocusDirective(selectContainer);
			const inputContainerDirective = directives.inputContainerDirective(selectContainer);

			// Subscription here to ensure that everything is computed
			const unsubscribe = selectWidget.state$.subscribe((pState) => {
				state = pState;
			});

			return () => {
				unsubscribe();
				container.parentElement?.removeChild(container);
				hasFocusDirective?.destroy?.();
				inputContainerDirective?.destroy?.();
			};
		});

		test('User types in the input', () => {
			const onFilterTextChangeSpy = vi.spyOn(callbacks, 'onFilterTextChange');
			const onOpenChangeSpy = vi.spyOn(callbacks, 'onOpenChange');

			vi.clearAllMocks();
			selectInput.focus();
			userType('a');
			selectWidget.actions.onInput({target: selectInput});
			expect(state.filterText).toBe('A');
			expect(onOpenChangeSpy).toHaveBeenCalledTimes(1);
			expect(onFilterTextChangeSpy).toHaveBeenCalledTimes(2); // ??? Should be 0 here ?

			vi.clearAllMocks();
			outsideElement.focus();
			expect(onOpenChangeSpy).toHaveBeenCalledTimes(1);
			expect(onFilterTextChangeSpy).toHaveBeenCalledTimes(0);

			vi.resetAllMocks();
		});

		test('Close programmatically', () => {
			const onOpenChangeSpy = vi.spyOn(callbacks, 'onOpenChange');

			vi.clearAllMocks();
			selectInput.focus();
			userType('a');
			selectWidget.actions.onInput({target: selectInput});
			expect(onOpenChangeSpy).toHaveBeenCalledTimes(1);

			vi.clearAllMocks();
			selectWidget.api.close();
			expect(onOpenChangeSpy).toHaveBeenCalledTimes(1); // Should be 0, or is it fine ?

			vi.resetAllMocks();
		});
	});

	describe(`Rating widget`, () => {
		let ratingWidget: ReturnType<typeof createRating>;

		const callbacks = {
			onRatingChange: (_value: number) => {},
		};

		beforeEach(() => {
			ratingWidget = createRating({
				props: {
					onRatingChange: (value) => callbacks.onRatingChange(value),
				},
			});
			// Subscription here to ensure that everything is computed
			const unsubscribe = ratingWidget.state$.subscribe(() => {});

			return () => {
				unsubscribe();
			};
		});

		test('Changing rating value', () => {
			const onRatingChangeSpy = vi.spyOn(callbacks, 'onRatingChange');

			ratingWidget.actions.click(10);
			expect(onRatingChangeSpy).toHaveBeenCalledTimes(1);

			vi.clearAllMocks();
			ratingWidget.patch({maxRating: 20});
			expect(onRatingChangeSpy).toHaveBeenCalledTimes(0); // Visual value doesn't change

			vi.clearAllMocks();
			ratingWidget.patch({maxRating: 5});
			expect(onRatingChangeSpy).toHaveBeenCalledTimes(0); // Visual value changed from 10 to 5, should it be emitted ?

			ratingWidget.patch({maxRating: 15});
			expect(onRatingChangeSpy).toHaveBeenCalledTimes(0); // Visual value changed from 5 to 10, should it be emitted ?

			vi.resetAllMocks();
		});
	});

	describe(`Two paginations linked to the same value`, () => {
		let paginationWidget1: ReturnType<typeof createPagination>;
		let paginationWidget2: ReturnType<typeof createPagination>;

		const callbacks1 = {
			onPageChange: (page: number) => {
				paginationWidget2.patch({page});
			},
		};

		const callbacks2 = {
			onPageChange: (page: number) => {
				paginationWidget1.patch({page});
			},
		};

		beforeEach(() => {
			paginationWidget1 = createPagination({
				props: {
					pageSize: 1,
					collectionSize: 10,
					onPageChange: (value) => callbacks1.onPageChange(value),
				},
			});
			paginationWidget2 = createPagination({
				props: {
					pageSize: 1,
					collectionSize: 10,
					onPageChange: (value) => callbacks2.onPageChange(value),
				},
			});
			// Subscription here to ensure that everything is computed
			const unsubscribe1 = paginationWidget1.state$.subscribe(() => {});
			const unsubscribe2 = paginationWidget2.state$.subscribe(() => {});

			return () => {
				unsubscribe1();
				unsubscribe2();
			};
		});

		test('click on page 2', () => {
			const onPageChangeSpy1 = vi.spyOn(callbacks1, 'onPageChange');
			const onPageChangeSpy2 = vi.spyOn(callbacks2, 'onPageChange');

			vi.clearAllMocks();
			paginationWidget1.actions.select(2); // User click on pagination 1, page 2
			expect(paginationWidget1.stores.page$()).toBe(2);
			expect(paginationWidget2.stores.page$()).toBe(2);

			expect(onPageChangeSpy1).toHaveBeenCalledTimes(1); // Should be 0 ?
			expect(onPageChangeSpy2).toHaveBeenCalledTimes(0); // Should be 1 ?
		});
	});

	describe(`Two sliders linked to the same array of values`, () => {
		let sliderWidget1: ReturnType<typeof createSlider>;
		let sliderWidget2: ReturnType<typeof createSlider>;

		const callbacks1 = {
			onValuesChange: (values) => {
				// Simulate that the two sliders are bound to the same values
				sliderWidget2.patch({values});
			},
		};

		const callbacks2 = {
			onValuesChange: (values) => {
				// Simulate that the two sliders are bound to the same values
				sliderWidget1.patch({values});
			},
		};

		function createSliderWidget(propsConfig: PropsConfig<SliderProps>) {
			const sliderElement = document.createElement('div');
			vi.spyOn(sliderElement, 'getBoundingClientRect').mockReturnValue({x: 10, y: 0, width: 100, height: 4, top: 0, left: 0} as DOMRect);
			const minLabel = document.createElement('div');
			vi.spyOn(minLabel, 'getBoundingClientRect').mockReturnValue({x: 10, y: 5, width: 3, height: 4} as DOMRect);
			const maxLabel = document.createElement('div');
			vi.spyOn(maxLabel, 'getBoundingClientRect').mockReturnValue({x: 100, y: 5, width: 3, height: 4} as DOMRect);

			const slider = createSlider(propsConfig);
			const sliderDirective = slider.directives.sliderDirective(sliderElement)!;
			const minLabelDirective = slider.directives.minLabelDirective(minLabel)!;
			const maxLabelDirective = slider.directives.maxLabelDirective(maxLabel)!;
			const unsubscribe = slider.state$.subscribe(() => {});

			return {
				slider,
				destroy() {
					sliderDirective.destroy?.();
					minLabelDirective.destroy?.();
					maxLabelDirective.destroy?.();
					unsubscribe();
				},
			};
		}

		beforeEach(() => {
			const slider1 = createSliderWidget({
				props: {
					min: 0,
					max: 10,
					values: [5],
					onValuesChange: (values) => callbacks1.onValuesChange(values),
				},
			});
			sliderWidget1 = slider1.slider;
			const destroySlider1 = slider1.destroy;

			const slider2 = createSliderWidget({
				props: {
					min: 0,
					max: 10,
					values: [5],
					onValuesChange: (values) => callbacks2.onValuesChange(values),
				},
			});
			sliderWidget2 = slider2.slider;
			const destroySlider2 = slider2.destroy;

			return () => {
				destroySlider1();
				destroySlider2();
			};
		});

		test('change values on slider 1', () => {
			const onValuesChangeSpy1 = vi.spyOn(callbacks1, 'onValuesChange');
			const onValuesChangeSpy2 = vi.spyOn(callbacks2, 'onValuesChange');

			sliderWidget1.actions.click(new MouseEvent('click', {clientX: 10}));
			expect(onValuesChangeSpy1).toHaveBeenCalledTimes(1); // Should be 0 ?
			expect(onValuesChangeSpy2).toHaveBeenCalledTimes(0); // Should be 1 ?
		});
	});
});
