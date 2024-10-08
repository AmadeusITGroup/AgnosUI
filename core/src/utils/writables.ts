import {allowNull, clamp, isArray, isBoolean, isFunction, isHTMLElement, isNumber, isString} from './internal/checks';
import type {WritableWithDefaultOptions} from '../types';
import {INVALID_VALUE} from '../types';

/**
 * Check if a value respects a provided type guard.
 *
 * @param filter - the guard function
 * @returns a function that takes a value as input, checks if it respects the type guard and returns `INVALID_VALUE` otherwise
 */
export const testToNormalizeValue =
	<T>(filter: (value: any) => value is T): ((value: any) => T | typeof INVALID_VALUE) =>
	(value: any) =>
		filter(value) ? value : INVALID_VALUE;

const numberNormalizeFn = testToNormalizeValue(isNumber);

export const typeNumber: WritableWithDefaultOptions<number> = {
	normalizeValue: numberNormalizeFn,
};

export interface TypeNumberInRangeOptions {
	/** If `true`, the range checking will be strict, excluding the minimum and maximum values. Default is `false`. */
	strict?: boolean;

	/** If `true`, values outside the range will be clamped to the minimum or maximum. Default is `true`. */
	useClamp?: boolean;
}

/**
 * Factory function for creating a type constraint for numbers within a specified range.
 *
 * @param min - The minimum value.
 * @param max - The maximum value.
 * @param options - Additional options to customize the behavior.
 *
 * @returns A type guard function that returns the clamp value or INVALID_VALUE depending on the provided options.
 */
export function typeNumberInRangeFactory(min: number, max: number, options: TypeNumberInRangeOptions = {}) {
	const {strict = false, useClamp = true} = options;
	return <WritableWithDefaultOptions<number>>{
		normalizeValue: (value) => {
			let normalizedNumber = numberNormalizeFn(value);
			if (normalizedNumber !== INVALID_VALUE) {
				if (!strict && useClamp) {
					normalizedNumber = clamp(normalizedNumber, max, min);
				}
				if (normalizedNumber >= min && normalizedNumber <= max) {
					if (!strict || (normalizedNumber !== min && normalizedNumber !== max)) {
						return normalizedNumber;
					}
				}
			}
			return INVALID_VALUE;
		},
	};
}

export const typeBoolean: WritableWithDefaultOptions<boolean> = {
	normalizeValue: testToNormalizeValue(isBoolean),
};

export const typeBooleanOrNull: WritableWithDefaultOptions<boolean | null> = {
	normalizeValue: testToNormalizeValue(allowNull(isBoolean)),
};

export const typeString: WritableWithDefaultOptions<string> = {
	normalizeValue: testToNormalizeValue(isString),
};

export const typeFunction: WritableWithDefaultOptions<(...args: any[]) => any> = {
	normalizeValue: testToNormalizeValue(isFunction),
	equal: Object.is,
};

export const typeHTMLElementOrNull: WritableWithDefaultOptions<HTMLElement | null> = {
	normalizeValue: testToNormalizeValue(allowNull(isHTMLElement)),
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
