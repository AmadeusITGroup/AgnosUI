import {clamp, isArray, isBoolean, isFunction, isNumber, isString} from './checks';
import type {WritableWithDefaultOptions} from './stores';
import {INVALID_VALUE} from './stores';

export const testToNormalizeValue =
	<T>(filter: (value: T) => boolean) =>
	(value: T) =>
		filter(value) ? value : INVALID_VALUE;

const numberNormalizeFn = testToNormalizeValue(isNumber);

export const typeNumber: WritableWithDefaultOptions<number> = {
	normalizeValue: numberNormalizeFn,
};

/**
 * A factory function that creates a type guard function to check and rectify a value is within a specified range.
 *
 * @param min - The minimum value allowed.
 * @param max - The maximum value allowed.
 * @returns A type guard function that returns the clamp value if the value is a value number, and INVALID_VALUE otherwise.
 */
export function typeNumberInRangeFactory(min: number, max: number) {
	return <WritableWithDefaultOptions<number>>{
		normalizeValue: (value) => {
			const normalizedNumber = numberNormalizeFn(value);
			return normalizedNumber === INVALID_VALUE ? INVALID_VALUE : clamp(normalizedNumber, max, min);
		},
	};
}

export const typeBoolean: WritableWithDefaultOptions<boolean> = {
	normalizeValue: testToNormalizeValue(isBoolean),
};

export const typeString: WritableWithDefaultOptions<string> = {
	normalizeValue: testToNormalizeValue(isString),
};

export const typeFunction: WritableWithDefaultOptions<(...args: any[]) => any> = {
	normalizeValue: testToNormalizeValue(isFunction),
	equal: Object.is,
};

export const typeArray: WritableWithDefaultOptions<any[]> = {
	normalizeValue: testToNormalizeValue(isArray),
	equal: (a, b) => {
		if (a === b) {
			return true;
		} else {
			if (a?.length !== b?.length) {
				return false;
			}
			return a.every((val, index) => val === b[index]);
		}
	},
};
