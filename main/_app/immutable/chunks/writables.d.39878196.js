const e=`import type { WritableWithDefaultOptions } from './stores';
import { INVALID_VALUE } from './stores';
export declare const testToNormalizeValue: <T>(filter: (value: T) => boolean) => (value: T) => typeof INVALID_VALUE | T;
export declare const typeNumber: WritableWithDefaultOptions<number>;
/**
 * A factory function that creates a type guard function to check and rectify a value is within a specified range.
 *
 * @param min - The minimum value allowed.
 * @param max - The maximum value allowed.
 * @returns A type guard function that returns the clamp value if the value is a value number, and INVALID_VALUE otherwise.
 */
export declare function typeNumberInRangeFactory(min: number, max: number): WritableWithDefaultOptions<number>;
export declare const typeBoolean: WritableWithDefaultOptions<boolean>;
export declare const typeString: WritableWithDefaultOptions<string>;
export declare const typeFunction: WritableWithDefaultOptions<(...args: any[]) => any>;
export declare const typeArray: WritableWithDefaultOptions<any[]>;
`;export{e as default};
