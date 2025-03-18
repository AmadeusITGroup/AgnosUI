const e=`import type { WritableWithDefaultOptions } from '../types';
import { INVALID_VALUE } from '../types';
/**
 * Check if a value respects a provided type guard.
 *
 * @template T - The type that the filter function validates.
 * @param filter - A function that takes a value and returns a boolean indicating
 *                 whether the value is of type T.
 * @returns A function that takes a value and returns the value if it passes the filter,
 *          otherwise returns \`INVALID_VALUE\`.
 */
export declare const testToNormalizeValue: <T>(filter: (value: any) => value is T) => ((value: any) => T | typeof INVALID_VALUE);
/**
 * A writable object with default options for handling numbers.
 */
export declare const typeNumber: WritableWithDefaultOptions<number>;
/**
 * Options for specifying the behavior of number range validation.
 */
export interface TypeNumberInRangeOptions {
    /** If \`true\`, the range checking will be strict, excluding the minimum and maximum values. Default is \`false\`. */
    strict?: boolean;
    /** If \`true\`, values outside the range will be clamped to the minimum or maximum. Default is \`true\`. */
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
export declare function typeNumberInRangeFactory(min: number, max: number, options?: TypeNumberInRangeOptions): WritableWithDefaultOptions<number>;
/**
 * A writable object with default options for boolean values.
 *
 * This object provides a normalized way to handle boolean values
 * using the \`WritableWithDefaultOptions\` interface. The \`normalizeValue\`
 * function ensures that the value is properly validated and normalized
 * as a boolean.
 */
export declare const typeBoolean: WritableWithDefaultOptions<boolean>;
/**
 * A writable with default options that normalizes its value to a boolean or null.
 *
 * This writable uses a normalization function that allows null values and ensures
 * the value is a boolean.
 */
export declare const typeBooleanOrNull: WritableWithDefaultOptions<boolean | null>;
/**
 * A writable object with default options for string values.
 *
 * This object provides a normalized value for strings using the \`testToNormalizeValue\` function
 * with the \`isString\` validator.
 */
export declare const typeString: WritableWithDefaultOptions<string>;
/**
 * A writable with default options that normalizes its value to a string or null.
 *
 * This object provides a normalized value for strings using the \`testToNormalizeValue\` function
 * with the \`isString\` validator.
 */
export declare const typeStringOrNull: WritableWithDefaultOptions<string | null>;
/**
 * A writable object that holds a function type with default options.
 */
export declare const typeFunction: WritableWithDefaultOptions<(...args: any[]) => any>;
/**
 * A writable object with default options for handling values of type \`HTMLElement\` or \`null\`.
 *
 * This object provides:
 * - \`normalizeValue\`: A function to normalize the value, ensuring it is either an \`HTMLElement\` or \`null\`.
 * - \`equal\`: A function to compare two values for equality using \`Object.is\`.
 */
export declare const typeHTMLElementOrNull: WritableWithDefaultOptions<HTMLElement | null>;
/**
 * A writable object with default options for handling arrays.
 */
export declare const typeArray: WritableWithDefaultOptions<any[]>;
/**
 * Build an enum normalizer
 * @template T - the enum type
 * @param enumList - list of enum values to check
 * @returns the enum normalizer
 */
export declare function createTypeEnum<T>(enumList: T[]): WritableWithDefaultOptions<T>;
`;export{e as default};
