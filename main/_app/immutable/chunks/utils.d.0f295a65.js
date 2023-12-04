const n=`export declare const noop: () => void;
export declare const identity: <T>(x: T) => T;
/**
 * @param number - decimal number
 * @returns the decimal precision of the number
 */
export declare function getDecimalPrecision(number: number): number;
interface TraversalFnOptions {
    /**
     * Remove symbol to return to remove the value
     */
    removeSymbol?: symbol;
    /**
     * index of the array, when looping on the elements
     */
    index?: number;
}
type TraversalFn = (key: string, value: any, options: TraversalFnOptions) => any;
/**
 * Creates a JSON walker function that can be used to traverse and transform
 * the properties of a JSON object.
 *
 * @param fn - The callback function called for each property in the JSON object.
 * @returns A function that takes a JSON object as input and applies the provided
 * callback function to each property.
 *
 * @example
 * \`\`\`typescript
 * const json = {
 *   name: 'John',
 *   age: 30,
 *   address: {
 *     city: 'New York',
 *     country: 'USA',
 *   },
 *   useless: '',
 * };
 *
 * const transform = createTraversal((key, value, {removeSymbol}) => {
 *   if (key === 'age') {
 *     return value * 2; // Double the age
 *   }
 *   if (key === 'useless') {
 * 	   return removeSymbol;
 *   }
 *   return value;
 * });
 *
 * const transformedJson = transform(json);
 * \`\`\`
 */
export declare function createTraversal(fn: TraversalFn): (json: any) => any;
export {};
`;export{n as default};
