const n=`/**
 * Manages minimum and maximum range constraints for values in an array by adjusting adjacent values.
 *
 * This function ensures that the value at the specified index maintains proper minimum and maximum
 * distance constraints with its neighboring values. It pushes adjacent handles when necessary to
 * maintain the required range constraints.
 *
 * @param values - Array of numeric values to be managed (typically slider handle positions)
 * @param index - Index of the value in the array that serves as the reference point
 * @param minRange - Minimum allowed distance between adjacent values
 * @param maxRange - Maximum allowed distance between adjacent values
 * @param min - Minimum boundary of the slider
 * @param max - Maximum boundary of the slider
 * @param pushRange - Whether to enable pushing of adjacent values to maintain range constraints
 *
 * @returns The modified values array with range constraints applied
 *
 * @example
 * \`\`\`typescript
 * const values = [10, 20, 30, 40];
 * const result = manageMinMaxRange(values, 1, 5, 15, 0, 50, true);
 * // Result ensures value at index 1 maintains 5-15 unit distance from neighbors
 * \`\`\`
 */
export declare const manageMinMaxRange: (values: number[], index: number, minRange: number, maxRange: number, min: number, max: number, pushRange: boolean) => number[];
`;export{n as default};
