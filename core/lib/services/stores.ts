import {batch, computed, derived, get, readable, writable, asReadable} from '@amadeus-it-group/tansu';
import type {ReadableSignal, Updater, WritableSignal, StoreOptions, StoreInput, StoresInputValues} from '@amadeus-it-group/tansu';
import {identity} from '../utils.js';

export type ToWritableSignal<P, V = P> = {
	[K in keyof P & keyof V as `${K & string}$`]-?: WritableSignal<P[K], V[K] | undefined>;
};

export type ValuesOrStores<T extends object> = {
	[K in keyof T]?: ReadableSignal<T[K]> | T[K];
};

export type WithoutDollar<S extends `${string}$`> = S extends `${infer U}$` ? U : never;
export type ValueOfStore<S extends ReadableSignal<any>> = S extends ReadableSignal<infer U> ? U : never;
export type ToState<S extends {[K in keyof S & `${string}$`]: ReadableSignal<any>}> = {
	[K in keyof S & `${string}$` as WithoutDollar<K>]: ValueOfStore<S[K]>;
};

/**
 *
 * Utility function designed to create a `patch` function related to the provided stores.
 * Any key given to the patch function which is not in the original object will be ignored.
 *
 * @example
 *
 * ```typescript
 * const storeA$ = writable(1);
 * const storeB$ = writable(1);
 * const patch = createPatch({a: storeA$, b: storeB$});
 *
 * patch({a: 2}) // will perform storeA$.set(2)
 * patch({a: 2, b: 2}) // will perform storeA$.set(2) and storeB$.set(2) in the same batch.
 * patch({a: 2, c: 2}) // will perform storeA$.set(2), c is ignored.
 *
 * ```
 * @param stores - object of stores
 * @returns the patch function
 */
export function createPatch<T extends object, V extends object = T>(stores: ToWritableSignal<T, V>) {
	return function <U extends Partial<T>>(storesValues?: U | void) {
		batch(() => {
			for (const [name, value] of Object.entries(storesValues ?? {})) {
				(stores as any)[`${name}$`]?.set(value);
			}
		});
	};
}

/**
 * This utility function is designed to compare the first level of two objects.
 *
 * It returns a new object which has all the keys for which the values in `obj1`
 * and `obj2` are different, with the values from `obj2`, or null if objects
 * are identical.
 *
 * @param obj1 - First object
 * @param obj2 - Second object
 * @returns the object with changed properties
 */
export function findChangedProperties<T extends Record<string, any>>(obj1: Partial<T>, obj2: Partial<T>): Partial<T> | null {
	if (obj1 === obj2) {
		return null;
	}
	let hasUpdate = false;
	const changedValues: Partial<T> = {};
	const keys = new Set<keyof T>([...Object.keys(obj1), ...Object.keys(obj2)]);
	for (const key of keys) {
		const value = obj2[key];
		if (obj1[key] !== value) {
			changedValues[key] = value;
			hasUpdate = true;
		}
	}
	return hasUpdate ? changedValues : null;
}

const update = function <T, U>(this: WritableSignal<T, U>, updater: Updater<T, U>) {
	this.set(updater(this()));
};

export const INVALID_VALUE = Symbol();
export type NormalizeValue<T, U = T> = (value: U) => T | typeof INVALID_VALUE;

export interface WritableWithDefaultOptions<T, U = T> {
	/**
	 * the normalize value function. should return the invalidValue symbol when the provided value is invalid
	 */
	normalizeValue?: NormalizeValue<T, U>;
	/**
	 * the equal function, allowing to compare two values. used to check if a previous and current values are equals.
	 */
	equal?: StoreOptions<T>['equal'];
}

/* eslint-disable jsdoc/check-param-names, jsdoc/require-param */
/**
 * Returns a writable store whose value is either its own value (when it is not undefined) or a default value
 * that comes either from the `config$` store (when it is not undefined) or from `defValue`.
 * If a normalizeValue function is passed in the options, it is called to normalize non-undefined values coming
 * either from the `config$` store or from the `set` or `update` functions. If a value is invalid (i.e. normalizeValue
 * returns the `invalidValue` symbol), an error is logged on the console and it is either not set (if it comes from the
 * `set` or `update` functions), or the `defValue` is used instead (if the invalid value comes from the `config$` store).
 *
 * @param defValue - Default value used when both the own value and the config$ value are undefined.
 * @param config$ - Default value used when the own value is undefined
 * @param options - Object which can contain the following optional functions: normalizeValue and equal
 * @returns a writable store with the extra default value and normalization logic described above
 */
export function writableWithDefault<T, U = T>(
	defValue: T,
	config$: ReadableSignal<U | undefined> = readable(undefined),
	{normalizeValue = identity as any, equal = Object.is}: WritableWithDefaultOptions<T, U> = {}
): WritableSignal<T, U | undefined> {
	const own$ = writable(undefined as T | undefined);
	const validatedDefConfig$ = computed(
		() => {
			const value = config$();
			const normalizedValue = value === undefined ? undefined : normalizeValue(value);
			if (normalizedValue === INVALID_VALUE) {
				console.error('Not using invalid value from default config', value);
				return defValue;
			}
			if (normalizedValue === undefined) {
				return defValue;
			}
			return normalizedValue as T;
		},
		{equal}
	);
	return asReadable(
		computed(
			() => {
				const ownValue = own$();
				return ownValue !== undefined ? ownValue : validatedDefConfig$();
			},
			{equal}
		),
		{
			set(value: U | undefined) {
				const normalizedValue = value === undefined ? undefined : normalizeValue(value);
				if (normalizedValue === INVALID_VALUE) {
					console.error('Not setting invalid value', value);
				} else {
					own$.set(normalizedValue as T);
				}
			},
			update,
		}
	);
}
/* eslint-enable */

export type ConfigValidator<T extends object, U extends object = T> = {[K in keyof T & keyof U]?: WritableWithDefaultOptions<T[K], U[K]>};

const isStore = (x: any): x is ReadableSignal<any> => !!(x && typeof x === 'function' && 'subscribe' in x);

/**
 * Returns an object containing, for each property of `defConfig`, a corresponding writable with the normalization and default value logic
 * described in {@link writableWithDefault}. Keys in the returned object are the same as the ones present in `defConfig`,
 * with the exta `$` suffix (showing that they are stores).
 *
 * @param defConfig - object containing, for each property, a default value to use in case `config$` does not provide the suitable default
 * value for that property
 * @param config - either a store of objects containing, for each property of `defConfig`, the default value or an object containing
 * for each property of `defConfig` either a store containing the default value or the default value itself
 * @param options - object containing, for each property of `defConfig`, an optional object with the following optional functions: normalizeValue and equal
 * @returns an object containing writables
 *
 * @example With a store
 * ```ts
 * const defConfig = {propA: 1};
 * const validation = {propA: {normalizeValue: value => +value}};
 * const config$ = writable({propA: 5});
 * const {propA$} = writablesWithDefault(defConfig, config$, validation);
 * ```
 *
 * @example With an object containing a value and a store
 * ```ts
 * const defConfig = {propA: 1, propB: 2};
 * const validation = {propA: {normalizeValue: value => +value}};
 * const config = {propA: 5, propB: writable(3)};
 * const {propA$, propB$} = writablesWithDefault(defConfig, config, validation);
 * ```
 */
export const writablesWithDefault = <T extends object, U extends object = T>(
	defConfig: T,
	config?: PropsConfig<U>,
	options?: ConfigValidator<T, U>
): ToWritableSignal<T, U> => {
	const res: any = {};
	const configIsStore = isStore(config);
	for (const key of Object.keys(defConfig) as (string & keyof T & keyof U)[]) {
		let store: ReadableSignal<any> | undefined = configIsStore ? computed(() => config()[key]) : undefined;
		if (!configIsStore && config) {
			const value = config[key];
			store = isStore(value) ? value : readable(value);
		}
		res[`${key}$`] = writableWithDefault(defConfig[key], store, options?.[key]);
	}
	return res as ToWritableSignal<T, U>;
};

/**
 * Shortcut for calling both {@link writablesWithDefault} and {@link createPatch} in one call.
 * @param defConfig - object containing, for each property, a default value to use in case `config` does not provide the suitable default
 * value for that property
 * @param config - either a store of objects containing, for each property of `defConfig`, the default value or an object containing
 * for each property of `defConfig` either a store containing the default value or the default value itself
 * @param options - object containing, for each property of `defConfig`, an optional object with the following optional functions: normalizeValue and equal
 * @returns an array with two items: the first one containing the writables (returned by {@link writablesWithDefault}),
 * and the second one containing the patch function (returned by {@link createPatch})
 *
 * @example With a store
 * ```ts
 * const defConfig = {propA: 1};
 * const validation = {propA: {normalizeValue: value => +value}};
 * const config$ = writable({propA: 5});
 * const [{propA$}, patch] = writablesForProps(defConfig, config$, validation);
 * ```
 *
 * @example With an object containing a value and a store
 * ```ts
 * const defConfig = {propA: 1, propB: 2};
 * const validation = {propA: {normalizeValue: value => +value}};
 * const config = {propA: 5, propB: writable(3)};
 * const [{propA$, propB$}, patch] = writablesForProps(defConfig, config, validation);
 * ```
 */
export const writablesForProps = <T extends object, U extends object = T>(
	defConfig: T,
	config?: PropsConfig<U>,
	options?: {[K in keyof T & keyof U]?: WritableWithDefaultOptions<T[K], U[K]>}
): [ToWritableSignal<T, U>, ReturnType<typeof createPatch<T, U>>] => {
	const stores = writablesWithDefault(defConfig, config, options);
	return [stores, createPatch(stores)];
};

export type PropsConfig<T extends object> = ReadableSignal<Partial<T>> | ValuesOrStores<T>;

export const stateStores = <A extends {[key in `${string}$`]: ReadableSignal<any>}>(
	inputStores: A
): {state$: ReadableSignal<ToState<A>>; stores: {[key in `${string}$` & keyof A]: ReadableSignal<ValueOfStore<A[key]>>}} => {
	const storesNames: string[] = [];
	const storesArray: any = [];
	const stores: any = {};
	for (const key of Object.keys(inputStores) as (`${string}$` & keyof A)[]) {
		if (key.endsWith('$')) {
			const store = inputStores[key];
			storesNames.push(key.substring(0, key.length - 1));
			storesArray.push(store);
			stores[key] = asReadable(store);
		}
	}
	return {
		stores,
		state$: computed(() => {
			const values = storesArray.map(get);
			const res: any = {};
			storesNames.forEach((name, index) => {
				res[name] = values[index];
			});
			return res;
		}),
	};
};

export const bindableDerived = <T, U extends [WritableSignal<T>, ...StoreInput<any>[]]>(
	onChange$: ReadableSignal<(value: T) => void>,
	stores: U,
	adjustValue: (arg: StoresInputValues<U>) => T
) => {
	let currentValue = stores[0]();
	return derived(stores, (values) => {
		const newValue = adjustValue(values);
		const rectifiedValue = newValue !== values[0];
		if (rectifiedValue) {
			stores[0].set(newValue);
		}
		if (rectifiedValue || newValue !== currentValue) {
			currentValue = newValue;
			// TODO check if we should do this async to avoid issue
			// with angular and react only when rectifiedValue is true?
			onChange$()(newValue);
		}
		return newValue;
	});
};
