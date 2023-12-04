const n=`export const noop = () => { };
export const identity = (x) => x;
const decimalRegExp = /(?:\\.(\\d+))?(?:[eE]([+-]?\\d+))?$/;
/**
 * @param number - decimal number
 * @returns the decimal precision of the number
 */
export function getDecimalPrecision(number) {
    const matches = ('' + number).match(decimalRegExp);
    return Math.max(0, 
    // Number of digits right of decimal point.
    (matches[1]?.length ?? 0) -
        // Adjust for exponential notation.
        (+matches[2] || 0));
}
const removeSymbol = Symbol('remove');
function _traversal(key, value, fn, index) {
    const transformedValue = fn(key, value, { removeSymbol, index });
    const type = Object.prototype.toString.call(transformedValue);
    switch (type) {
        case '[object Object]': {
            const newJson = {};
            const baseKey = key ? key + '.' : '';
            for (const [name, objectValue] of Object.entries(transformedValue)) {
                const newValue = _traversal(baseKey + name, objectValue, fn);
                if (newValue !== removeSymbol) {
                    newJson[name] = newValue;
                }
            }
            return newJson;
        }
        case '[object Map]': {
            const oldMap = transformedValue;
            const newMap = new Map();
            const baseKey = key ? key + '.' : '';
            for (const [mapKey, objectValue] of Object.entries(oldMap)) {
                const newValue = _traversal(baseKey + name, objectValue, fn);
                if (newValue !== removeSymbol) {
                    newMap.set(mapKey, newValue);
                }
            }
            return newMap;
        }
        case '[object Array]': {
            const ar = transformedValue;
            const newArray = [];
            const baseKey = (key ? key : '') + '[]';
            for (let i = 0; i < ar.length; i++) {
                const newValue = _traversal(baseKey, ar[i], fn, i);
                if (newValue !== removeSymbol) {
                    newArray.push(newValue);
                }
            }
            return newArray;
        }
        case '[object Set]': {
            const oldSet = transformedValue;
            const newSet = new Set();
            const baseKey = (key ? key : '') + '[]';
            const ar = [...oldSet];
            for (let i = 0; i < ar.length; i++) {
                const newValue = _traversal(baseKey, ar[i], fn, i);
                if (newValue !== removeSymbol) {
                    newSet.add(newValue);
                }
            }
            return newSet;
        }
        default:
            break;
    }
    return transformedValue;
}
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
export function createTraversal(fn) {
    return (json) => _traversal('', json, fn);
}
`;export{n as default};
