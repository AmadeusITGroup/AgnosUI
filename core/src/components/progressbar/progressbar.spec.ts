import {beforeEach, describe, expect, test} from 'vitest';
import {createProgressbar, getProgressbarDefaultConfig} from './progressbar';
import type {ProgressbarWidget} from './progressbar';
import type {WidgetState} from '../../types';
import {getAttributes} from '../components.spec-utils';

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
			ariaLabel: 'Progressbar',
			className: '',
			finished: false,
			max: 100,
			min: 0,
			percentage: 0,
			started: false,
			value: 0,
			ariaValueText: undefined,
		});
	});

	test(`should correct the maximum based on minimum`, () => {
		let expectedState = state;

		progressbar.patch({min: 1, max: 5});
		expectedState = {...expectedState, min: 1, max: 5, value: 1};
		expect(state).toStrictEqual(expectedState);

		progressbar.patch({min: 10});
		expectedState = {...expectedState, min: 10, max: 10, value: 10, finished: true};
		expect(state).toStrictEqual(expectedState);

		progressbar.patch({min: 5});
		expectedState = {...expectedState, min: 5, max: 5, value: 5, finished: true};
		expect(state).toStrictEqual(expectedState);

		progressbar.patch({max: 0});
		expectedState = {...expectedState, min: 5, max: 5, value: 5, percentage: 0, started: false};
		expect(state).toStrictEqual(expectedState);
	});

	test(`should correct the value based on minimum and maximum`, () => {
		let expectedState = state;

		progressbar.patch({min: 1, max: 5, value: 4});
		expectedState = {...expectedState, min: 1, max: 5, percentage: 75, value: 4, started: true};
		expect(state).toStrictEqual(expectedState);

		progressbar.patch({max: 3});
		expectedState = {...expectedState, min: 1, max: 3, percentage: 100, value: 3, finished: true};
		expect(state).toStrictEqual(expectedState);

		progressbar.patch({max: 5});
		expectedState = {...expectedState, min: 1, max: 5, percentage: 75, value: 4, finished: false};
		expect(state).toStrictEqual(expectedState);

		progressbar.patch({min: 4});
		expectedState = {...expectedState, min: 4, max: 5, percentage: 0, value: 4, started: false};
		expect(state).toStrictEqual(expectedState);

		progressbar.patch({min: 1});
		expectedState = {...expectedState, min: 1, max: 5, percentage: 75, value: 4, started: true};
		expect(state).toStrictEqual(expectedState);
	});

	test(`should calculate the percentage properly`, () => {
		let expectedState = state;

		progressbar.patch({min: 1, max: 5, value: 4});
		expectedState = {...expectedState, min: 1, max: 5, percentage: 75, value: 4, started: true};
		expect(state).toStrictEqual(expectedState);

		progressbar.patch({min: 10, max: 0});
		expectedState = {...expectedState, min: 10, max: 10, percentage: 0, value: 10, started: false, finished: true};
		expect(state).toStrictEqual(expectedState);
	});

	test(`should set the aria value text based on min, max, value and provided function`, () => {
		let expectedState = state;

		progressbar.patch({min: 1, max: 5, value: 4});
		expectedState = {...expectedState, min: 1, max: 5, percentage: 75, value: 4, started: true};
		expect(state).toStrictEqual(expectedState);

		progressbar.patch({ariaValueTextFn: (val, min, max) => `Starting at ${min} and finishing at ${max}, progress has reached ${val}`});
		expectedState = {...expectedState, ariaValueText: 'Starting at 1 and finishing at 5, progress has reached 4'};
		expect(state).toStrictEqual(expectedState);

		progressbar.patch({min: 4, max: 8, value: 7});
		expectedState = {...expectedState, min: 4, max: 8, value: 7, ariaValueText: 'Starting at 4 and finishing at 8, progress has reached 7'};
		expect(state).toStrictEqual(expectedState);
	});

	test(`default config returns an aria label`, () => {
		expect(getProgressbarDefaultConfig().ariaLabel).toBe('Progressbar');
	});

	test(`ariaDirective`, () => {
		const node = document.createElement('div');
		const directiveInstance = progressbar.directives.ariaDirective(node);
		expect(getAttributes(node)).toStrictEqual({
			role: 'progressbar',
			'aria-label': 'Progressbar',
			'aria-valuenow': '0',
			'aria-valuemin': '0',
			'aria-valuemax': '100',
		});
		directiveInstance?.destroy?.();
	});
});
