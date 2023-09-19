import {describe, expect, test, vi} from 'vitest';
import {extendWidgetProps} from './extendWidget';
import {createRating} from './rating';
import {typeNumber, typeString} from './services/writables';
import {writable} from '@amadeus-it-group/tansu';

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
			}
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
		expect(originalState).toContain({className: 'otherCustomClass'});
		expect(customWidget.state$()).toEqual({
			...originalState,
			myNewProp: 6,
			myOtherNewProp: 'other',
		});
	});
});
