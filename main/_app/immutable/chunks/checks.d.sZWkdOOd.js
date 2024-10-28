const e=`/**
 * a number type guard
 * @param value - the value to check
 * @returns true if the value is a number
 */
export declare function isNumber(value: any): value is number;
/**
 * a boolean type guard
 * @param value - the value to check
 * @returns true if the value is a boolean
 */
export declare function isBoolean(value: any): value is boolean;
/**
 * a function type guard
 * @param value - the value to check
 * @returns true if the value is a function
 */
export declare function isFunction(value: any): value is (...args: any[]) => any;
/**
 * a string type guard
 * @param value - the value to check
 * @returns true if the value is a string
 */
export declare function isString(value: any): value is string;
/**
 * an array type guard
 * @returns true if the value is an array
 */
export declare const isArray: (arg: any) => arg is any[];
/**
 * Clamp the value based on a maximum and optional minimum
 * @param value - the value to check
 * @param max - the max to clamp to
 * @param [min] - the min to clamp to
 * @returns the clamped value
 */
export declare function clamp(value: number, max: number, min?: number): number;
/**
 * an html element type guard
 * @param value - the value to check
 * @returns true if the value is an instance of HTMLElement
 */
export declare const isHTMLElement: (value: any) => value is HTMLElement;
/**
 * Returns a new type guard that is based on the provided type guard and also returns true for null values.
 * @param isType - base type guard
 * @returns A type guard function that returns true for null values and calls the provided type guard for other values.
 */
export declare const allowNull: <T>(isType: (value: any) => value is T) => (value: any) => value is T | null;
/**
 * Builds a new type guard to check if an element belongs to an enum list
 * @param list - the list of all enum values
 * @returns the type guard
 */
export declare function isFromEnum<T>(list: T[]): (value: any) => value is T;
`;export{e as default};
