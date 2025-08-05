import {describe, expect, test} from 'vitest';
import {manageMinMaxRange} from './slider-utils';

describe(`manageMinMaxRange`, () => {
	test(`should work with minRange`, () => {
		const minRange = 10;
		const maxRange = 0;
		const min = 0;
		const max = 100;

		expect(manageMinMaxRange([45, 50, 70], 0, minRange, maxRange, min, max, false), 'adjust current value when pushRange is false').toStrictEqual([
			40, 50, 70,
		]);
		expect(manageMinMaxRange([45, 50, 70], 0, minRange, maxRange, min, max, true), 'adjust current value when pushRange is true').toStrictEqual([
			45, 55, 70,
		]);
		expect(manageMinMaxRange([45, 50, 60], 0, minRange, maxRange, min, max, true), 'push successive values').toStrictEqual([45, 55, 65]);
		expect(manageMinMaxRange([83, 85, 95], 0, minRange, maxRange, min, max, true), 'right edge reached').toStrictEqual([80, 90, 100]);
	});

	test(`should work with maxRange`, () => {
		const minRange = 0;
		const maxRange = 10;
		const min = 0;
		const max = 100;

		expect(manageMinMaxRange([35, 50, 70], 0, minRange, maxRange, min, max, false), 'adjust current value when pushRange is false').toStrictEqual([
			40, 50, 70,
		]);
		expect(manageMinMaxRange([35, 50, 60], 0, minRange, maxRange, min, max, true), 'adjust current value when pushRange is true').toStrictEqual([
			35, 45, 55,
		]);
		// expect(manageMinMaxRange([45, 50, 60], 0, minRange, maxRange, min, max, true), 'push successive values')
		// 	.toStrictEqual([45, 55, 65]);
		// expect(manageMinMaxRange([83, 85, 95], 0, minRange, maxRange, min, max, true), 'right edge reached')
		// 	.toStrictEqual([80, 90, 100]);
	});
});
