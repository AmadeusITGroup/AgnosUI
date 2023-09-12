import {beforeEach, describe, expect, test} from 'vitest';
import {createProgressbar, getProgressbarDefaultConfig} from './progressbar';
import type {ProgressbarWidget} from './progressbar';
import type {WidgetState} from './types';

describe(`Progressbar`, () => {
	let progressbar: ProgressbarWidget;
	let state: WidgetState<ProgressbarWidget>;

	beforeEach(() => {
		progressbar = createProgressbar();
		progressbar.state$.subscribe((newState) => {
			state = newState;
		});
	});

	test(`should create progressbar with a default state`, () => {
		expect(state).toEqual({
			animated: false,
			ariaLabel: 'Progressbar',
			className: '',
			finished: false,
			height: '',
			max: 100,
			min: 0,
			percentage: 0,
			showValue: false,
			slotContent: undefined,
			slotDefault: undefined,
			started: false,
			striped: false,
			value: 0,
		});
	});

	test(`should calculate the percentage properly`, () => {
		progressbar.patch({min: 1, max: 5, value: 4});
		expect(state).toContain({percentage: 75, value: 4});
		progressbar.patch({min: 10, max: 0});
		expect(state).toContain({percentage: 0, min: 10, max: 10, value: 10});
	});

	test(`should correct maximum and minimum value`, () => {
		progressbar.patch({min: 1, max: 5, value: 4});
		expect(state).toContain({value: 4});

		progressbar.patch({max: 3});
		expect(state).toContain({min: 1, max: 3, value: 3});

		progressbar.patch({max: 5});
		expect(state).toContain({min: 1, max: 5, value: 3});
	});

	test(`default config returns an aria label`, () => {
		expect(getProgressbarDefaultConfig().ariaLabel).toBe('Progressbar');
	});
});
