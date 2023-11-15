import type {ReadableSignal, StoreInput, StoreOptions, StoresInputValues, Updater, WritableSignal} from '@amadeus-it-group/tansu';
import {asReadable, batch, computed, derived, get, readable, writable} from '@amadeus-it-group/tansu';
import {identity} from '../utils';

export type ToWritableSignal<P> = {
	[K in keyof P as `${K & string}$`]-?: WritableSignal<P[K], P[K] | undefined>;
};

export type ReadableSignals<T extends object> = {
	[K in keyof T]?: ReadableSignal<T[K] | undefined>;
};

export type ValuesOrReadableSignals<T extends object> = {
	[K in keyof T]?: ReadableSignal<T[K] | undefined> | T[K];
};

export type ValuesOrWritableSignals<T extends object> = {
	[K in keyof T]?: WritableSignal<T[K] | undefined> | T[K];
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
export function createPatch<T extends object>(stores: ToWritableSignal<T>) {
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
export type NormalizeValue<T> = (value: T) => T | typeof INVALID_VALUE;

export interface WritableWithDefaultOptions<T> {
	/**
	 * the normalize value function. should return the invalidValue symbol when the provided value is invalid
	 */
	normalizeValue?: NormalizeValue<T>;
	/**
	 * the equal function, allowing to compare two values. used to check if a previous and current values are equals.
	 */
	equal?: StoreOptions<T>['equal'];
}

/**
 * Returns a writable store whose value is either its own value (when it is not undefined) or a default value
 * that comes either from the `config$` store (when it is not undefined) or from `defValue`.
 * If a normalizeValue function is passed in the options, it is called to normalize non-undefined values coming
 * either from the `config$` store or from the `set` or `update` functions. If a value is invalid (i.e. normalizeValue
 * returns the `invalidValue` symbol), an error is logged on the console and it is either not set (if it comes from the
 * `set` or `update` functions), or the `defValue` is used instead (if the invalid value comes from the `config$` store).
 *
 * @param defValue - Default value used when both the own value and the config$ value are undefined.
 * @param config$ - Store containing the default value used when the own value is undefined
 * @param options - Object which can contain the following optional functions: normalizeValue and equal
 * @param own$ - Store containing the own value
 * @returns a writable store with the extra default value and normalization logic described above
 */
export function writableWithDefault<T>(
	defValue: T,
	config$: ReadableSignal<T | undefined> = readable(undefined),
	options: WritableWithDefaultOptions<T> = {},
	own$: WritableSignal<T | undefined> = writable(undefined),
): WritableSignal<T, T | undefined> {
	const {normalizeValue = identity, equal = Object.is} = options;
	const getDefValue = () => defValue;
	const callNormalizeValue = (value: T | undefined, defValue = getDefValue) => {
		const normalizedValue = value === undefined ? undefined : normalizeValue(value);
		if (normalizedValue === INVALID_VALUE) {
			console.error('Not using invalid value', value);
			return defValue();
		}
		if (normalizedValue === undefined) {
			return defValue();
		}
		return normalizedValue as T;
	};
	const validatedDefConfig$ = computed(() => callNormalizeValue(config$()), {equal});
	const validatedOwnValue$ = computed(() => callNormalizeValue(own$(), validatedDefConfig$), {equal});
	return asReadable(validatedOwnValue$, {
		set(value: T | undefined) {
			if (value !== undefined) {
				const normalizedValue = normalizeValue(value);
				if (normalizedValue === INVALID_VALUE) {
					console.error('Not setting invalid value', value);
					return;
				}
				value = normalizedValue as T;
			}
			own$.set(value);
		},
		update,
	});
}

export type ConfigValidator<T extends object> = {[K in keyof T]?: WritableWithDefaultOptions<T[K]>};

/**
 * Returns true if the provided argument is a store (ReadableSignal).
 * @param x - argument that is tested
 * @returns true if the argument is a store (ReadableSignal)
 */
export const isStore = (x: any): x is ReadableSignal<any> => !!(x && typeof x === 'function' && 'subscribe' in x);

/**
 * If the provided argument is already a store, it is returned as is, otherwise, a readable store is created with the provided argument as its initial value.
 * @param x - either a store or a simple value
 * @returns either x if x is already a store, or readable(x) otherwise
 */
export const toReadableStore = <T>(x: ReadableSignal<T> | T) => (isStore(x) ? x : readable(x));

/**
 * If the provided argument is already a store, it is returned as is, otherwise, a writable store is created with the provided argument as its initial value.
 * @param x - either a writable store or a simple value
 * @returns either x if x is already a store, or writable(x) otherwise
 */
export const toWritableStore = <T>(x: WritableSignal<T> | T) => (isStore(x) ? x : writable(x));

export const normalizeConfigStores = <T extends object>(
	keys: (keyof T)[],
	config?: ReadableSignal<Partial<T>> | ValuesOrReadableSignals<T>,
): ReadableSignals<T> => {
	const res: ReadableSignals<T> = {};
	if (config) {
		const configIsStore = isStore(config);
		for (const key of keys) {
			res[key] = configIsStore
				? computed(() => config()[key])
				: toReadableStore(config[key] as ReadableSignal<T[typeof key] | undefined> | T[typeof key] | undefined);
		}
	}
	return res;
};
export const mergeConfigStores = <T extends object>(keys: (keyof T)[], config1?: ReadableSignals<T>, config2?: ReadableSignals<T>) => {
	const res: ReadableSignals<T> = {};
	for (const key of keys) {
		const config1Store = config1?.[key];
		const config2Store = config2?.[key];
		res[key] = config1Store && config2Store ? computed(() => config1Store() ?? config2Store()) : config1Store || config2Store;
	}
	return res;
};

/**
 * Returns an object containing, for each property of `defConfig`, a corresponding writable with the normalization and default value logic
 * described in {@link writableWithDefault}. Keys in the returned object are the same as the ones present in `defConfig`,
 * with the exta `$` suffix (showing that they are stores).
 *
 * @param defConfig - object containing, for each property, a default value to use in case `config$` does not provide the suitable default
 * value for that property
 * @param propsConfig - object defining the config and props
 * @param options - object containing, for each property of `defConfig`, an optional object with the following optional functions: normalizeValue and equal
 * @returns an object containing writables
 *
 * @example With a store
 * ```ts
 * const defConfig = {propA: 1};
 * const validation = {propA: {normalizeValue: value => +value}};
 * const config = writable({propA: 5});
 * const {propA$} = writablesWithDefault(defConfig, {config}, validation);
 * ```
 *
 * @example With an object containing a value and a store
 * ```ts
 * const defConfig = {propA: 1, propB: 2};
 * const validation = {propA: {normalizeValue: value => +value}};
 * const config = {propA: 5, propB: writable(3)};
 * const {propA$, propB$} = writablesWithDefault(defConfig, {config}, validation);
 * ```
 */
export const writablesWithDefault = <T extends object>(
	defConfig: T,
	propsConfig?: PropsConfig<T>,
	options?: ConfigValidator<T>,
): ToWritableSignal<T> => {
	const res: any = {};
	const keys = Object.keys(defConfig) as (string & keyof T)[];
	const configStores = normalizeConfigStores<T>(keys, propsConfig?.config);
	const props = propsConfig?.props;
	for (const key of keys) {
		const propValue = props?.[key] as undefined | WritableSignal<T[typeof key] | undefined> | T[typeof key];
		res[`${key}$`] = writableWithDefault(defConfig[key], configStores[key], options?.[key], toWritableStore(propValue));
	}
	return res as ToWritableSignal<T>;
};

/**
 * Shortcut for calling both {@link writablesWithDefault} and {@link createPatch} in one call.
 * @param defConfig - object containing, for each property, a default value to use in case `config` does not provide the suitable default
 * value for that property
 * @param propsConfig - either a store of objects containing, for each property of `defConfig`, the default value or an object containing
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
export const writablesForProps = <T extends object>(
	defConfig: T,
	propsConfig?: PropsConfig<T>,
	options?: {[K in keyof T]?: WritableWithDefaultOptions<T[K]>},
): [ToWritableSignal<T>, ReturnType<typeof createPatch<T>>] => {
	const stores = writablesWithDefault(defConfig, propsConfig, options);
	return [stores, createPatch(stores)];
};

export interface PropsConfig<U extends object> {
	/**
	 * Object containing, for each property, either its initial value, or a store that will contain the value at any time.
	 * When the value of a property is undefined or invalid, the value from the config is used.
	 */
	props?: ValuesOrWritableSignals<U>;

	/**
	 * Either a store of objects containing, for each property, the default value,
	 * or an object containing, for each property, either a store containing the default value or the default value itself.
	 */
	config?: ReadableSignal<Partial<U>> | ValuesOrReadableSignals<Partial<U>>;
}

export const stateStores = <A extends {[key in `${string}$`]: ReadableSignal<any>}>(
	inputStores: A,
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
	adjustValue: (arg: StoresInputValues<U>) => T,
	equal = (currentValue: T, newValue: T) => newValue === currentValue,
) => {
	let currentValue = stores[0]();
	return derived(stores, {
		derive(values) {
			const newValue = adjustValue(values);
			const rectifiedValue = !equal(values[0], newValue);
			if (rectifiedValue) {
				stores[0].set(newValue);
			}
			if (rectifiedValue || !equal(currentValue, newValue)) {
				currentValue = newValue;
				// TODO check if we should do this async to avoid issue
				// with angular and react only when rectifiedValue is true?
				onChange$()(newValue);
			}
			return newValue;
		},
		equal,
	});
};
