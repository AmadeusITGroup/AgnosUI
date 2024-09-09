const e=`import type { WritableWithDefaultOptions } from '../types';
import { INVALID_VALUE } from '../types';
/**
 * Check if a value respects a provided type guard.
 *
 * @param filter - the guard function
 * @returns a function that takes a value as input, checks if it respects the type guard and returns \`INVALID_VALUE\` otherwise
 */
export declare const testToNormalizeValue: <T>(filter: (value: any) => value is T) => ((value: any) => T | typeof INVALID_VALUE);
export declare const typeNumber: WritableWithDefaultOptions<number>;
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
export declare const typeBoolean: WritableWithDefaultOptions<boolean>;
export declare const typeBooleanOrNull: WritableWithDefaultOptions<boolean | null>;
export declare const typeString: WritableWithDefaultOptions<string>;
export declare const typeFunction: WritableWithDefaultOptions<(...args: any[]) => any>;
export declare const typeHTMLElementOrNull: WritableWithDefaultOptions<HTMLElement | null>;
export declare const typeArray: WritableWithDefaultOptions<any[]>;
`;export{e as default};
