const n=`/**
 * a number type guard
 * @param value the value to check
 * @returns true if the value is a number
 */
export function isNumber(value) {
    return typeof value === 'number' && !isNaN(value) && Number.isFinite(value);
}
/**
 * a boolean type guard
 * @param value the value to check
 * @returns true if the value is a boolean
 */
export function isBoolean(value) {
    return value === true || value === false;
}
/**
 * a function type guard
 * @param value the value to check
 * @returns true if the value is a function
 */
export function isFunction(value) {
    return typeof value === 'function';
}
/**
 * a string type guard
 * @param value the value to check
 * @returns true if the value is a string
 */
export function isString(value) {
    return typeof value === 'string';
}
/**
 * an array type guard
 * @returns true if the value is an array
 */
export const isArray = Array.isArray;
// TODO should we check that max > min?
/**
 * Clamp the value based on a maximum and optional minimum
 * @param value the value to check
 * @param max the max to clamp to
 * @param [min] the min to clamp to
 * @returns the clamped value
 */
export function clamp(value, max, min = 0) {
    return Math.max(Math.min(value, max), min);
}
`;export{n as default};
