import {describe, expect, test, vi} from 'vitest';
import {extendWidgetProps} from './extendWidget';
import {type RatingProps, createRating} from '../components/rating/rating';
import {typeNumber, typeString} from '../utils/writables';
import {writable} from '@amadeus-it-group/tansu';
import type {PropsConfig} from '../types';

describe(`extendWidgetProps`, () => {
	test('Basic functionalities', () => {
		const spyErrorLog = vi.spyOn(console, 'error').mockImplementation(() => {});
		const classNameConfig$ = writable('customClassName');
		const myOtherNewPropConfig$ = writable(undefined as undefined | string);
		const createCustomizedRating = extendWidgetProps(
			createRating,
			{
				myNewProp: 5,
				myOtherNewProp: 'something',
			},
			{
				myNewProp: typeNumber,
				myOtherNewProp: typeString,
			},
		);
		const originalWidget = createRating({
			config: {
				className: classNameConfig$,
			},
			props: {
				rating: 1,
			},
		});
		const customWidget = createCustomizedRating({
			config: {
				className: classNameConfig$,
				myOtherNewProp: myOtherNewPropConfig$,
			},
			props: {
				rating: 1,
				myOtherNewProp: 'value',
			},
		});
		expect(Object.keys(customWidget.actions)).toEqual(Object.keys(originalWidget.actions));
		expect(Object.keys(customWidget.api)).toEqual(Object.keys(originalWidget.api));
		expect(Object.keys(customWidget.directives)).toEqual(Object.keys(originalWidget.directives));
		expect(Object.keys(customWidget.stores)).toEqual([...Object.keys(originalWidget.stores), 'myNewProp$', 'myOtherNewProp$']);
		let originalState = originalWidget.state$();
		expect(customWidget.state$()).toEqual({
			...originalState,
			myNewProp: 5,
			myOtherNewProp: 'value',
		});
		expect(customWidget.stores.myNewProp$()).toEqual(5);
		expect(customWidget.stores.myOtherNewProp$()).toEqual('value');
		customWidget.patch({
			myNewProp: 6,
			myOtherNewProp: undefined,
			rating: 2,
			maxRating: 11,
		});
		originalWidget.patch({rating: 2, maxRating: 11});
		originalState = originalWidget.state$();
		expect(customWidget.state$()).toEqual({
			...originalState,
			myNewProp: 6,
			myOtherNewProp: 'something',
		});
		expect(customWidget.stores.myNewProp$()).toEqual(6);
		expect(customWidget.stores.myOtherNewProp$()).toEqual('something');
		expect(spyErrorLog).not.toBeCalled();
		customWidget.patch({
			myNewProp: 'invalid' as any,
		});
		expect(customWidget.state$()).toEqual({
			...originalState,
			myNewProp: 6,
			myOtherNewProp: 'something',
		});
		expect(spyErrorLog).toBeCalledTimes(1);
		expect(spyErrorLog.mock.calls[0][0]).to.match(/invalid value/i);
		spyErrorLog.mockReset();
		myOtherNewPropConfig$.set('other');
		classNameConfig$.set('otherCustomClass');
		originalState = originalWidget.state$();
		expect(originalState).toMatchObject({className: 'otherCustomClass'});
		expect(customWidget.state$()).toEqual({
			...originalState,
			myNewProp: 6,
			myOtherNewProp: 'other',
		});
	});

	describe('Overriding default values', () => {
		const createCustomizedRating = extendWidgetProps(
			createRating,
			{},
			{},
			{
				maxRating: 10,
			},
		);
		const maxRatingOfNewCustomizedRating = (config?: PropsConfig<RatingProps>) => createCustomizedRating(config).state$().maxRating;

		test('default value is well overriden', () => {
			expect(maxRatingOfNewCustomizedRating()).toBe(10);
			expect(maxRatingOfNewCustomizedRating({props: {maxRating: 15}})).toBe(15);
			expect(maxRatingOfNewCustomizedRating({config: {maxRating: 15}})).toBe(15);
			expect(maxRatingOfNewCustomizedRating({config: {maxRating: writable(15)}})).toBe(15);
			expect(maxRatingOfNewCustomizedRating({config: writable({maxRating: 15})})).toBe(15);
		});

		test('patching to undefined will go back to the default value', () => {
			const checkPatchToUndefined = (defaultValue: number, config?: PropsConfig<RatingProps>) => {
				const customizedRating = createCustomizedRating(config);
				customizedRating.patch({maxRating: 20});
				expect(customizedRating.state$().maxRating).toBe(20);
				customizedRating.patch({maxRating: undefined});
				expect(customizedRating.state$().maxRating).toBe(defaultValue);
			};

			checkPatchToUndefined(10);
			checkPatchToUndefined(10, {props: {maxRating: 15}});
			checkPatchToUndefined(15, {config: {maxRating: 15}});
			checkPatchToUndefined(15, {config: {maxRating: writable(15)}});
			checkPatchToUndefined(15, {config: writable({maxRating: 15})});
		});
	});
});
