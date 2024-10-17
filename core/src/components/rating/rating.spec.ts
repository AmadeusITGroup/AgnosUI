import type {UnsubscribeFunction, WritableSignal} from '@amadeus-it-group/tansu';
import {computed, writable} from '@amadeus-it-group/tansu';
import type {MockInstance} from 'vitest';
import {afterEach, beforeEach, describe, expect, test, vi} from 'vitest';
import type {WidgetState} from '../../types';
import {directiveAttributes} from '../../utils/directive';
import type {RatingProps, RatingWidget} from './rating';
import {createRating} from './rating';
import {attachDirectiveAndClick, attachDirectiveAndSendEvent, getAttributes} from '../components.spec-utils';

function keyboardEvent(key: string): KeyboardEvent {
	const keyboardEvent = new KeyboardEvent('keydown', {key});
	vi.spyOn(keyboardEvent, 'preventDefault');
	vi.spyOn(keyboardEvent, 'stopPropagation');
	return keyboardEvent;
}

describe(`Rating`, () => {
	describe('with subscription on the state', () => {
		let rating: RatingWidget;
		let state: WidgetState<RatingWidget>;
		let unsubscribe: UnsubscribeFunction;
		let stateChangeCount = 0;
		const hovers: number[] = [];
		const leaves: number[] = [];

		const callbacks = {
			onHover: (i: number) => hovers.push(i),
			onLeave: (i: number) => leaves.push(i),
		};

		let defConfig: WritableSignal<Partial<RatingProps>>;
		let consoleErrorSpy: MockInstance<typeof console.error>;

		beforeEach(() => {
			consoleErrorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
			defConfig = writable({});
			rating = createRating({config: computed(() => ({...callbacks, ...defConfig()}))});
			unsubscribe = rating.state$.subscribe((newState) => {
				stateChangeCount++;
				state = newState;
			});
		});

		afterEach(() => {
			stateChangeCount = 0;
			hovers.length = 0;
			leaves.length = 0;
			unsubscribe();
			expect(consoleErrorSpy).not.toHaveBeenCalled();
			consoleErrorSpy.mockRestore();
		});

		const expectLogInvalidValue = () => {
			expect(consoleErrorSpy).toHaveBeenCalledTimes(1);
			expect(consoleErrorSpy.mock.calls[0][0]).toContain('invalid');
			consoleErrorSpy.mockClear();
		};

		test(`should have sensible state`, () => {
			expect(state).toStrictEqual({
				rating: 0,
				ariaLabel: 'Rating',
				ariaLabelledBy: '',
				ariaValueText: `0 out of 10`,
				maxRating: 10,
				visibleRating: 0,
				disabled: false,
				readonly: false,
				resettable: true,
				tabindex: 0,
				interactive: true,
				stars: Array.from({length: 10}, (_, i) => ({fill: 0, index: i})),
				className: '',
			});
		});

		test(`should ignore invalid 'rating' values`, () => {
			expect(state).toMatchObject({rating: 0, maxRating: 10});
			expect(stateChangeCount).toBe(1);

			// note that this is not invalid, it only goes back to the default value
			rating.patch({rating: undefined as any});
			expect(state).toMatchObject({rating: 0});
			expect(stateChangeCount).toBe(1);

			expect(consoleErrorSpy).not.toHaveBeenCalled();

			rating.patch({rating: 'blah' as any});
			expect(state).toMatchObject({rating: 0});
			expect(stateChangeCount).toBe(1);
			expectLogInvalidValue();

			rating.patch({rating: Infinity as any});
			expect(state).toMatchObject({rating: 0});
			expect(stateChangeCount).toBe(1);
			expectLogInvalidValue();

			rating.patch({rating: NaN as any});
			expect(state).toMatchObject({rating: 0});
			expect(stateChangeCount).toBe(1);
			expectLogInvalidValue();

			rating.patch({rating: {} as any});
			expect(state).toMatchObject({rating: 0});
			expect(stateChangeCount).toBe(1);
			expectLogInvalidValue();
		});

		test(`should ignore invalid 'maxRating' values`, () => {
			expect(state).toMatchObject({rating: 0, maxRating: 10});
			expect(stateChangeCount).toBe(1);

			expect(consoleErrorSpy).not.toHaveBeenCalled();
			rating.patch({maxRating: null as any});
			expect(state).toMatchObject({maxRating: 10});
			expect(stateChangeCount).toBe(1);
			expectLogInvalidValue();

			// note that this is not invalid, it only goes back to the default value
			rating.patch({maxRating: undefined as any});
			expect(state).toMatchObject({maxRating: 10});
			expect(stateChangeCount).toBe(1);
			expect(consoleErrorSpy).not.toHaveBeenCalled();

			rating.patch({maxRating: 'blah' as any});
			expect(state).toMatchObject({maxRating: 10});
			expect(stateChangeCount).toBe(1);
			expectLogInvalidValue();

			rating.patch({maxRating: Infinity as any});
			expect(state).toMatchObject({maxRating: 10});
			expect(stateChangeCount).toBe(1);
			expectLogInvalidValue();

			rating.patch({maxRating: NaN as any});
			expect(state).toMatchObject({maxRating: 10});
			expect(stateChangeCount).toBe(1);
			expectLogInvalidValue();

			rating.patch({maxRating: {} as any});
			expect(state).toMatchObject({maxRating: 10});
			expect(stateChangeCount).toBe(1);
			expectLogInvalidValue();
		});

		test(`should ignore invalid 'disabled' values`, () => {
			expect(state).toMatchObject({disabled: false});
			expect(stateChangeCount).toBe(1);

			expect(consoleErrorSpy).not.toHaveBeenCalled();
			rating.patch({disabled: null as any});
			expect(state).toMatchObject({disabled: false});
			expect(stateChangeCount).toBe(1);
			expectLogInvalidValue();

			// note that this is not invalid, it only goes back to the default value
			rating.patch({disabled: undefined as any});
			expect(state).toMatchObject({disabled: false});
			expect(stateChangeCount).toBe(1);
			expect(consoleErrorSpy).not.toHaveBeenCalled();

			rating.patch({disabled: 'blah' as any});
			expect(state).toMatchObject({disabled: false});
			expect(stateChangeCount).toBe(1);
			expectLogInvalidValue();

			rating.patch({disabled: Infinity as any});
			expect(state).toMatchObject({disabled: false});
			expect(stateChangeCount).toBe(1);
			expectLogInvalidValue();

			rating.patch({disabled: NaN as any});
			expect(state).toMatchObject({disabled: false});
			expect(stateChangeCount).toBe(1);
			expectLogInvalidValue();

			rating.patch({disabled: {} as any});
			expect(state).toMatchObject({disabled: false});
			expect(stateChangeCount).toBe(1);
			expectLogInvalidValue();
		});

		test(`should ignore invalid 'readonly' values`, () => {
			expect(state).toMatchObject({readonly: false});
			expect(stateChangeCount).toBe(1);

			expect(consoleErrorSpy).not.toHaveBeenCalled();
			rating.patch({readonly: null as any});
			expect(state).toMatchObject({readonly: false});
			expect(stateChangeCount).toBe(1);
			expectLogInvalidValue();

			// note that this is not invalid, it only goes back to the default value
			rating.patch({readonly: undefined as any});
			expect(state).toMatchObject({readonly: false});
			expect(stateChangeCount).toBe(1);
			expect(consoleErrorSpy).not.toHaveBeenCalled();

			rating.patch({readonly: 'blah' as any});
			expect(state).toMatchObject({readonly: false});
			expect(stateChangeCount).toBe(1);
			expectLogInvalidValue();

			rating.patch({readonly: Infinity as any});
			expect(state).toMatchObject({readonly: false});
			expect(stateChangeCount).toBe(1);
			expectLogInvalidValue();

			rating.patch({readonly: NaN as any});
			expect(state).toMatchObject({readonly: false});
			expect(stateChangeCount).toBe(1);
			expectLogInvalidValue();

			rating.patch({readonly: {} as any});
			expect(state).toMatchObject({readonly: false});
			expect(stateChangeCount).toBe(1);
			expectLogInvalidValue();
		});

		test(`should ignore invalid 'tabindex' values`, () => {
			expect(state).toMatchObject({tabindex: 0});
			expect(stateChangeCount).toBe(1);

			expect(consoleErrorSpy).not.toHaveBeenCalled();
			rating.patch({tabindex: null as any});
			expect(state).toMatchObject({tabindex: 0});
			expect(stateChangeCount).toBe(1);
			expectLogInvalidValue();

			// note that this is not invalid, it only goes back to the default value
			rating.patch({tabindex: undefined as any});
			expect(state).toMatchObject({tabindex: 0});
			expect(stateChangeCount).toBe(1);
			expect(consoleErrorSpy).not.toHaveBeenCalled();

			rating.patch({tabindex: 'blah' as any});
			expect(state).toMatchObject({tabindex: 0});
			expect(stateChangeCount).toBe(1);
			expectLogInvalidValue();

			rating.patch({tabindex: Infinity as any});
			expect(state).toMatchObject({tabindex: 0});
			expect(stateChangeCount).toBe(1);
			expectLogInvalidValue();

			rating.patch({tabindex: NaN as any});
			expect(state).toMatchObject({tabindex: 0});
			expect(stateChangeCount).toBe(1);
			expectLogInvalidValue();

			rating.patch({tabindex: {} as any});
			expect(state).toMatchObject({tabindex: 0});
			expect(stateChangeCount).toBe(1);
			expectLogInvalidValue();
		});

		test(`should allow setting 'tabindex'`, () => {
			expect(state).toMatchObject({disabled: false, tabindex: 0});

			rating.patch({tabindex: 1});
			expect(state).toMatchObject({tabindex: 1});

			rating.patch({disabled: true});
			expect(state).toMatchObject({tabindex: -1});

			rating.patch({disabled: false});
			expect(state).toMatchObject({tabindex: 1});
		});

		test(`should set rating/visibleRating within [0, maxRating]`, () => {
			expect(state).toMatchObject({rating: 0, maxRating: 10});

			rating.patch({rating: 5});
			expect(state).toMatchObject({rating: 5, visibleRating: 5, maxRating: 10});

			rating.patch({rating: 100});
			expect(state).toMatchObject({rating: 10, visibleRating: 10, maxRating: 10});

			rating.patch({maxRating: 11});
			expect(state).toMatchObject({rating: 11, visibleRating: 11, maxRating: 11});

			rating.patch({rating: -100});
			expect(state).toMatchObject({rating: 0, visibleRating: 0, maxRating: 11});
		});

		test(`should generate star contexts correctly when 'rating' changes`, () => {
			rating.patch({rating: 1, maxRating: 2});
			expect(state.stars).toEqual([
				{
					fill: 100,
					index: 0,
				},
				{
					fill: 0,
					index: 1,
				},
			]);

			rating.patch({rating: 2, maxRating: 2});
			expect(state.stars).toEqual([
				{
					fill: 100,
					index: 0,
				},
				{
					fill: 100,
					index: 1,
				},
			]);

			rating.patch({rating: 0, maxRating: 0});
			expect(state.stars).toEqual([]);

			rating.patch({rating: 1.75, maxRating: 2});
			expect(state.stars).toEqual([
				{
					fill: 100,
					index: 0,
				},
				{
					fill: 75,
					index: 1,
				},
			]);
		});

		test(`should generate star contexts and visible rating correctly when 'hover()/leave()' changes`, () => {
			const stars = [
				{
					fill: 75,
					index: 0,
				},
				{
					fill: 0,
					index: 1,
				},
			];

			rating.patch({rating: 0.75, maxRating: 2});
			expect(state.visibleRating).toBe(0.75);
			expect(state.stars).toEqual(stars);
			expect(hovers).toEqual([]);
			expect(leaves).toEqual([]);

			attachDirectiveAndSendEvent(rating.directives.starDirective, {index: 1}, (node) => node.dispatchEvent(new Event('mouseenter')));
			expect(hovers).toEqual([2]);
			expect(leaves).toEqual([]);
			expect(state.visibleRating).toBe(2);
			expect(state.stars).toEqual([
				{
					fill: 100,
					index: 0,
				},
				{
					fill: 100,
					index: 1,
				},
			]);

			// hover 1
			attachDirectiveAndSendEvent(rating.directives.starDirective, {index: 0}, (node) => node.dispatchEvent(new Event('mouseenter')));
			expect(hovers).toEqual([2, 1]);
			expect(leaves).toEqual([]);
			expect(state.visibleRating).toBe(1);
			expect(state.stars).toEqual([
				{
					fill: 100,
					index: 0,
				},
				{
					fill: 0,
					index: 1,
				},
			]);

			// leave
			attachDirectiveAndSendEvent(rating.directives.containerDirective, undefined, (node) => node.dispatchEvent(new Event('mouseleave')));
			expect(hovers).toEqual([2, 1]);
			expect(leaves).toEqual([1]);
			expect(state.visibleRating).toBe(0.75);
			expect(state.stars).toEqual(stars);
			expect(stateChangeCount).toBe(5);

			// hover -1 -> ignored
			attachDirectiveAndSendEvent(rating.directives.starDirective, {index: -1}, (node) => node.dispatchEvent(new Event('mouseenter')));
			expect(hovers).toEqual([2, 1]);
			expect(leaves).toEqual([1]);
			expect(state.visibleRating).toBe(0.75);
			expect(state.stars).toEqual(stars);
			expect(stateChangeCount).toBe(5);

			// hover 5 -> ignored
			attachDirectiveAndSendEvent(rating.directives.starDirective, {index: 4}, (node) => node.dispatchEvent(new Event('mouseenter')));
			expect(hovers).toEqual([2, 1]);
			expect(leaves).toEqual([1]);
			expect(state.visibleRating).toBe(0.75);
			expect(state.stars).toEqual(stars);
			expect(stateChangeCount).toBe(5);
		});

		test(`should use 'ariaValueTextFn' to generate aria value text`, () => {
			expect(state).toMatchObject({rating: 0, maxRating: 10, ariaValueText: '0 out of 10'});

			rating.patch({rating: 5});
			expect(state).toMatchObject({ariaValueText: '5 out of 10'});

			rating.patch({maxRating: 7});
			expect(state).toMatchObject({ariaValueText: '5 out of 7'});

			rating.patch({ariaValueTextFn: (rating: number, maxRating: number) => `${rating}/${maxRating}`});
			expect(state).toMatchObject({ariaValueText: '5/7'});

			expect(consoleErrorSpy).not.toHaveBeenCalled();
			rating.patch({ariaValueTextFn: null as any, rating: 4});
			expect(state).toMatchObject({ariaValueText: '4/7'});
			expectLogInvalidValue();
		});

		test(`should adjust rating within [0, 'maxRating'] when updating 'maxRating'`, () => {
			rating.patch({rating: 5});
			expect(state).toMatchObject({rating: 5, maxRating: 10});

			rating.patch({maxRating: 2});
			expect(state).toMatchObject({rating: 2, maxRating: 2});

			rating.patch({rating: 5, maxRating: 10});
			expect(state).toMatchObject({rating: 5, maxRating: 10});

			rating.patch({maxRating: -100});
			expect(state).toMatchObject({rating: 0, maxRating: 0});
		});

		test(`should update rating when disabled via 'patch()'`, () => {
			rating.patch({disabled: true});
			expect(state).toMatchObject({disabled: true, readonly: false, rating: 0, maxRating: 10});

			// allow values to be set
			rating.patch({rating: 5, maxRating: 7});
			expect(state).toMatchObject({rating: 5, maxRating: 7});
		});

		test(`should update rating when readonly via 'patch()'`, () => {
			rating.patch({readonly: true});
			expect(state).toMatchObject({disabled: false, readonly: true, rating: 0, maxRating: 10});

			// allow values to be set
			rating.patch({rating: 5, maxRating: 7});
			expect(state).toMatchObject({rating: 5, maxRating: 7});
		});

		test(`should handle user 'click()' changes`, () => {
			expect(state).toMatchObject({rating: 0, maxRating: 10, resettable: true});
			expect(stateChangeCount).toBe(1);

			attachDirectiveAndClick(rating.directives.starDirective, {index: 2});
			expect(state).toMatchObject({rating: 3});
			expect(stateChangeCount).toBe(2);

			attachDirectiveAndClick(rating.directives.starDirective, {index: 0});
			expect(state).toMatchObject({rating: 1});
			expect(stateChangeCount).toBe(3);

			attachDirectiveAndClick(rating.directives.starDirective, {index: -1});
			expect(state).toMatchObject({rating: 1});
			expect(stateChangeCount).toBe(3);

			attachDirectiveAndClick(rating.directives.starDirective, {index: 11});
			expect(state).toMatchObject({rating: 1});
			expect(stateChangeCount).toBe(3);
		});

		test(`should be 'resettable' or not`, () => {
			rating.patch({rating: 5});
			expect(state).toMatchObject({rating: 5, maxRating: 10, resettable: true});
			expect(stateChangeCount).toBe(2);

			attachDirectiveAndClick(rating.directives.starDirective, {index: 4});
			expect(state).toMatchObject({rating: 0});
			expect(stateChangeCount).toBe(3);

			rating.patch({rating: 5, resettable: false});
			expect(state).toMatchObject({rating: 5, resettable: false});
			expect(stateChangeCount).toBe(4);

			attachDirectiveAndClick(rating.directives.starDirective, {index: 4});
			expect(state).toMatchObject({rating: 5});
			expect(stateChangeCount).toBe(4);
		});

		test(`should generate correct 'interactive' values`, () => {
			expect(state).toMatchObject({disabled: false, readonly: false, interactive: true});

			rating.patch({disabled: true, readonly: false});
			expect(state).toMatchObject({interactive: false});

			rating.patch({disabled: false, readonly: true});
			expect(state).toMatchObject({interactive: false});

			rating.patch({disabled: true, readonly: true});
			expect(state).toMatchObject({interactive: false});

			rating.patch({disabled: false, readonly: false});
			expect(state).toMatchObject({interactive: true});
		});

		test(`should ignore user rating changes when disabled`, () => {
			rating.patch({disabled: true, rating: 5});
			expect(state).toMatchObject({disabled: true, readonly: false, rating: 5});
			expect(stateChangeCount).toBe(2);

			// user interactions should be ignored
			attachDirectiveAndClick(rating.directives.starDirective, {index: 3});
			expect(state).toMatchObject({rating: 5});
			expect(stateChangeCount).toBe(2);
		});

		test(`should ignore user rating changes when readonly`, () => {
			rating.patch({readonly: true, rating: 5});
			expect(state).toMatchObject({disabled: false, readonly: true, rating: 5});
			expect(stateChangeCount).toBe(2);

			// user interactions should be ignored
			attachDirectiveAndClick(rating.directives.starDirective, {index: 3});
			expect(state).toMatchObject({rating: 5});
			expect(stateChangeCount).toBe(2);
		});

		test(`should handle known keyboard events`, () => {
			rating.patch({rating: 5});
			expect(state).toMatchObject({disabled: false, readonly: false, rating: 5, maxRating: 10});

			let evt = keyboardEvent('ArrowLeft');

			// Known keys
			attachDirectiveAndSendEvent(rating.directives.containerDirective, undefined, (node) => node.dispatchEvent(evt));
			expect(state).toMatchObject({rating: 4});
			expect(evt.preventDefault).toHaveBeenCalledOnce();
			expect(evt.stopPropagation).toHaveBeenCalledOnce();

			evt = keyboardEvent('ArrowDown');
			attachDirectiveAndSendEvent(rating.directives.containerDirective, undefined, (node) => node.dispatchEvent(evt));
			expect(state).toMatchObject({rating: 3});
			expect(evt.preventDefault).toHaveBeenCalledOnce();
			expect(evt.stopPropagation).toHaveBeenCalledOnce();

			evt = keyboardEvent('ArrowUp');
			attachDirectiveAndSendEvent(rating.directives.containerDirective, undefined, (node) => node.dispatchEvent(evt));
			expect(state).toMatchObject({rating: 4});
			expect(evt.preventDefault).toHaveBeenCalledOnce();
			expect(evt.stopPropagation).toHaveBeenCalledOnce();

			evt = keyboardEvent('ArrowRight');
			attachDirectiveAndSendEvent(rating.directives.containerDirective, undefined, (node) => node.dispatchEvent(evt));
			expect(state).toMatchObject({rating: 5});
			expect(evt.preventDefault).toHaveBeenCalledOnce();
			expect(evt.stopPropagation).toHaveBeenCalledOnce();

			evt = keyboardEvent('Home');
			attachDirectiveAndSendEvent(rating.directives.containerDirective, undefined, (node) => node.dispatchEvent(evt));
			expect(state).toMatchObject({rating: 0});
			expect(evt.preventDefault).toHaveBeenCalledOnce();
			expect(evt.stopPropagation).toHaveBeenCalledOnce();

			evt = keyboardEvent('End');
			attachDirectiveAndSendEvent(rating.directives.containerDirective, undefined, (node) => node.dispatchEvent(evt));
			expect(state).toMatchObject({rating: 10});
			expect(evt.preventDefault).toHaveBeenCalledOnce();
			expect(evt.stopPropagation).toHaveBeenCalledOnce();
		});

		test(`should ignore unknown keyboard events`, () => {
			rating.patch({rating: 5});
			expect(state).toMatchObject({disabled: false, readonly: false, rating: 5, maxRating: 10});

			const evt = keyboardEvent('Enter');
			const preventDefault = vi.spyOn(evt, 'preventDefault');
			const stopPropagation = vi.spyOn(evt, 'stopPropagation');

			// Unknown keys
			attachDirectiveAndSendEvent(rating.directives.containerDirective, undefined, (node) => node.dispatchEvent(evt));
			expect(state).toMatchObject({rating: 5});
			expect(preventDefault).not.toHaveBeenCalled();
			expect(stopPropagation).not.toHaveBeenCalled();
		});

		test(`should ignore known keyboard events when disabled or readonly`, () => {
			rating.patch({rating: 5});
			expect(state).toMatchObject({disabled: false, readonly: false, rating: 5, maxRating: 10});

			const evt = keyboardEvent('ArrowLeft');

			// Disabled
			rating.patch({readonly: false, disabled: true});
			attachDirectiveAndSendEvent(rating.directives.containerDirective, undefined, (node) => node.dispatchEvent(evt));
			expect(state).toMatchObject({rating: 5});
			expect(evt.preventDefault).toHaveBeenCalledTimes(0);
			expect(evt.stopPropagation).toHaveBeenCalledTimes(0);

			// Readonly
			rating.patch({readonly: true, disabled: false});
			attachDirectiveAndSendEvent(rating.directives.containerDirective, undefined, (node) => node.dispatchEvent(evt));
			expect(state).toMatchObject({rating: 5});
			expect(evt.preventDefault).toHaveBeenCalledTimes(0);
			expect(evt.stopPropagation).toHaveBeenCalledTimes(0);
		});

		test(`should follow updated default config as long as it is not overridden`, () => {
			defConfig.set({rating: 2});
			expect(state).toMatchObject({rating: 2});
			defConfig.set({});
			expect(state).toMatchObject({rating: 0});
			defConfig.set({rating: 5});
			expect(state).toMatchObject({rating: 5});

			rating.patch({maxRating: 4}); // the rating is corrected to 4, but not written in the prop
			expect(state).toMatchObject({rating: 4});
			defConfig.set({rating: 2}); // so changing the config continues to work
			expect(state).toMatchObject({rating: 2});
		});

		test('containerDirective', () => {
			const expectedState = {
				'aria-valuemin': '0',
				role: 'slider',
				class: 'au-rating',
				tabindex: '0',
				'aria-valuemax': '10',
				'aria-valuenow': '0',
				'aria-valuetext': '0 out of 10',
				'aria-label': 'Rating',
			};

			expect(directiveAttributes(rating.directives.containerDirective)).toStrictEqual(expectedState);

			const node = document.createElement('div');
			const directiveInstance = rating.directives.containerDirective(node);
			expect(getAttributes(node)).toStrictEqual(expectedState);
			directiveInstance?.destroy?.();
		});

		test('starDirective', () => {
			const expectedState = {
				class: 'au-rating-star',
				style: 'cursor: pointer;',
			};
			const arg = {index: 1};

			expect(directiveAttributes([rating.directives.starDirective, arg])).toStrictEqual(expectedState);

			const node = document.createElement('div');
			const directiveInstance = rating.directives.starDirective(node, arg);
			expect(getAttributes(node)).toStrictEqual(expectedState);
			directiveInstance?.destroy?.();
		});
	});

	describe('without subscription on the state', () => {
		test('should work when subscribing on visibleRating$ only', () => {
			const values: number[] = [];
			const visibleRatingValues: number[] = [];
			const ratingWidget = createRating({
				props: {
					maxRating: 10,
					rating: 2,
					onRatingChange(value) {
						values.push(value);
					},
				},
			});
			const unsubscribe = ratingWidget.stores.visibleRating$.subscribe((value) => visibleRatingValues.push(value));
			expect(visibleRatingValues).toEqual([2]);

			attachDirectiveAndSendEvent(ratingWidget.directives.starDirective, {index: 7}, (node) => node.dispatchEvent(new Event('mouseenter')));
			expect(visibleRatingValues).toEqual([2, 8]);
			attachDirectiveAndClick(ratingWidget.directives.starDirective, {index: 7});
			expect(values).toEqual([8]);
			unsubscribe();
		});
	});
});
