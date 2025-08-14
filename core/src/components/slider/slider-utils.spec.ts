import {describe, expect, test} from 'vitest';
import {manageMinMaxRange} from './slider-utils';

describe(`manageMinMaxRange`, () => {
	test(`should work with minRange`, () => {
		const minRange = 10;
		const maxRange = 0;
		const min = 0;
		const max = 100;

		expect(manageMinMaxRange([45, 50, 70], 0, minRange, maxRange, min, max, false), 'adjust current value (pushRange = false)').toStrictEqual([
			40, 50, 70,
		]);
		expect(manageMinMaxRange([45, 50, 70], 0, minRange, maxRange, min, max, true), 'push values (pushRange = true)').toStrictEqual([45, 55, 70]);
		expect(manageMinMaxRange([45, 50, 60], 0, minRange, maxRange, min, max, true), 'push successive values').toStrictEqual([45, 55, 65]);
		expect(manageMinMaxRange([83, 85, 95], 0, minRange, maxRange, min, max, true), 'right edge reached').toStrictEqual([80, 90, 100]);

		expect(manageMinMaxRange([55, 50, 70], 0, minRange, maxRange, min, max, false), 'unsorted values (pushRange = false)').toStrictEqual([
			40, 50, 70,
		]);

		expect(manageMinMaxRange([55, 50, 70], 0, minRange, maxRange, min, max, true), 'unsorted values (pushRange = true)').toStrictEqual([50, 60, 70]);

		expect(manageMinMaxRange([45, 50, 70], 1, minRange, maxRange, min, max, false), 'middle value changed (pushRange = false)').toStrictEqual([
			45, 55, 70,
		]);
		expect(manageMinMaxRange([45, 50, 55], 1, minRange, maxRange, min, max, true), 'middle value changed (pushRange = true)').toStrictEqual([
			40, 50, 60,
		]);
	});

	test(`should work with maxRange`, () => {
		const minRange = 0;
		const maxRange = 10;
		const min = 0;
		const max = 100;

		expect(manageMinMaxRange([35, 50, 70], 0, minRange, maxRange, min, max, false), 'adjust current value (pushRange = false)').toStrictEqual([
			40, 50, 70,
		]);
		expect(manageMinMaxRange([35, 50, 60], 0, minRange, maxRange, min, max, true), 'pull values (pushRange = true)').toStrictEqual([35, 45, 55]);
		expect(manageMinMaxRange([35, 50, 60], 0, minRange, maxRange, min, max, true), 'pull successive values').toStrictEqual([35, 45, 55]);

		expect(manageMinMaxRange([50, 20, 70], 1, minRange, maxRange, min, max, false), 'middle value changed (pushRange = false)').toStrictEqual([
			50, 60, 70,
		]);

		expect(manageMinMaxRange([55, 20, 30], 0, minRange, maxRange, min, max, false), 'unsorted values (pushRange = false)').toStrictEqual([
			20, 20, 30,
		]);

		expect(manageMinMaxRange([55, 20, 30], 0, minRange, maxRange, min, max, true), 'unsorted values (pushRange = true)').toStrictEqual([20, 20, 30]);

		expect(manageMinMaxRange([35, 50, 70], 1, minRange, maxRange, min, max, true), 'middle value changed (pushRange = true)').toStrictEqual([
			40, 50, 60,
		]);
	});

	test(`should work with minRange and maxRange`, () => {
		const minRange = 10;
		const maxRange = 20;
		const min = 0;
		const max = 100;

		expect(manageMinMaxRange([20, 50, 60], 1, minRange, maxRange, min, max, false), 'adjust current value (pushRange = false)').toStrictEqual([
			20, 40, 60,
		]);
		expect(manageMinMaxRange([20, 50, 60], 1, minRange, maxRange, min, max, true), 'adjust current value (pushRange = false)').toStrictEqual([
			30, 50, 60,
		]);
		expect(manageMinMaxRange([45, 50, 80], 1, minRange, maxRange, min, max, false), 'middle value changed (pushRange = false)').toStrictEqual([
			45, 60, 80,
		]);
		expect(manageMinMaxRange([45, 50, 80], 1, minRange, maxRange, min, max, true), 'middle value changed (pushRange = true)').toStrictEqual([
			40, 50, 70,
		]);
	});

	test(`problematic cases`, () => {
		const min = 0;
		const max = 100;

		expect(manageMinMaxRange([45, 50, 54], 1, 10, 20, min, max, false), 'cannot respect both sides').toStrictEqual([45, 55, 54]);
	});
});
