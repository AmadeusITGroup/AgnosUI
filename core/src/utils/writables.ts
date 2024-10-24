import {allowNull, clamp, isArray, isBoolean, isFunction, isHTMLElement, isNumber, isString} from './internal/checks';
import type {WritableWithDefaultOptions} from '../types';
import {INVALID_VALUE} from '../types';

/**
 * Check if a value respects a provided type guard.
 *
 * @template T - The type that the filter function validates.
 * @param filter - A function that takes a value and returns a boolean indicating
 *                 whether the value is of type T.
 * @returns A function that takes a value and returns the value if it passes the filter,
 *          otherwise returns `INVALID_VALUE`.
 */
export const testToNormalizeValue =
	<T>(filter: (value: any) => value is T): ((value: any) => T | typeof INVALID_VALUE) =>
	(value: any) =>
		filter(value) ? value : INVALID_VALUE;

const numberNormalizeFn = testToNormalizeValue(isNumber);

/**
 * A writable object with default options for handling numbers.
 */
export const typeNumber: WritableWithDefaultOptions<number> = {
	normalizeValue: numberNormalizeFn,
};

/**
 * Options for specifying the behavior of number range validation.
 */
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

/**
 * A writable object with default options for boolean values.
 *
 * This object provides a normalized way to handle boolean values
 * using the `WritableWithDefaultOptions` interface. The `normalizeValue`
 * function ensures that the value is properly validated and normalized
 * as a boolean.
 */
export const typeBoolean: WritableWithDefaultOptions<boolean> = {
	normalizeValue: testToNormalizeValue(isBoolean),
};

/**
 * A writable with default options that normalizes its value to a boolean or null.
 *
 * This writable uses a normalization function that allows null values and ensures
 * the value is a boolean.
 */
export const typeBooleanOrNull: WritableWithDefaultOptions<boolean | null> = {
	normalizeValue: testToNormalizeValue(allowNull(isBoolean)),
};

/**
 * A writable object with default options for string values.
 *
 * This object provides a normalized value for strings using the `testToNormalizeValue` function
 * with the `isString` validator.
 */
export const typeString: WritableWithDefaultOptions<string> = {
	normalizeValue: testToNormalizeValue(isString),
};

/**
 * A writable object that holds a function type with default options.
 */
export const typeFunction: WritableWithDefaultOptions<(...args: any[]) => any> = {
	normalizeValue: testToNormalizeValue(isFunction),
	equal: Object.is,
};

/**
 * A writable object with default options for handling values of type `HTMLElement` or `null`.
 *
 * This object provides:
 * - `normalizeValue`: A function to normalize the value, ensuring it is either an `HTMLElement` or `null`.
 * - `equal`: A function to compare two values for equality using `Object.is`.
 */
export const typeHTMLElementOrNull: WritableWithDefaultOptions<HTMLElement | null> = {
	normalizeValue: testToNormalizeValue(allowNull(isHTMLElement)),
	equal: Object.is,
};

/**
 * A writable object with default options for handling arrays.
 */
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
