const removeSymbol = Symbol('remove');

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

function _traversal<T>(key: string, value: T, fn: TraversalFn, index?: number) {
	const transformedValue = fn(key, value, {removeSymbol, index});
	const type = Object.prototype.toString.call(transformedValue);
	switch (type) {
		case '[object Object]': {
			const newJson: Record<string, any> = {};
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
			const oldMap = transformedValue as Map<any, any>;
			const newMap = new Map<any, any>();
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
			const ar = transformedValue as any[];
			const newArray: any[] = [];
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
			const oldSet = transformedValue as Set<any>;
			const newSet = new Set<any>();
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
 * ```typescript
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
 * ```
 */
export function createTraversal(fn: TraversalFn): (json: any) => any {
	return (json: any) => _traversal('', json, fn);
}
/**
 * Utility method to create a promise with resolve
 * @returns a promise with resolve
 */
export const promiseWithResolve = (): {
	promise: Promise<void>;
	resolve: (value: void | Promise<void>) => void;
} => {
	let resolve: (value: void | Promise<void>) => void;
	const promise = new Promise<void>((r) => {
		resolve = r;
	});
	return {promise, resolve: resolve!};
};
