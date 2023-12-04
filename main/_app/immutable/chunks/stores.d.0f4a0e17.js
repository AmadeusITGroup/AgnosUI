const e=`import type { ReadableSignal, StoreInput, StoreOptions, StoresInputValues, WritableSignal } from '@amadeus-it-group/tansu';
export type ToWritableSignal<P> = {
    [K in keyof P as \`\${K & string}$\`]-?: WritableSignal<P[K], P[K] | undefined>;
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
export type WithoutDollar<S extends \`\${string}$\`> = S extends \`\${infer U}$\` ? U : never;
export type ValueOfStore<S extends ReadableSignal<any>> = S extends ReadableSignal<infer U> ? U : never;
export type ToState<S extends {
    [K in keyof S & \`\${string}$\`]: ReadableSignal<any>;
}> = {
    [K in keyof S & \`\${string}$\` as WithoutDollar<K>]: ValueOfStore<S[K]>;
};
/**
 *
 * Utility function designed to create a \`patch\` function related to the provided stores.
 * Any key given to the patch function which is not in the original object will be ignored.
 *
 * @example
 *
 * \`\`\`typescript
 * const storeA$ = writable(1);
 * const storeB$ = writable(1);
 * const patch = createPatch({a: storeA$, b: storeB$});
 *
 * patch({a: 2}) // will perform storeA$.set(2)
 * patch({a: 2, b: 2}) // will perform storeA$.set(2) and storeB$.set(2) in the same batch.
 * patch({a: 2, c: 2}) // will perform storeA$.set(2), c is ignored.
 *
 * \`\`\`
 * @param stores - object of stores
 * @returns the patch function
 */
export declare function createPatch<T extends object>(stores: ToWritableSignal<T>): <U extends Partial<T>>(storesValues?: void | U | undefined) => void;
/**
 * This utility function is designed to compare the first level of two objects.
 *
 * It returns a new object which has all the keys for which the values in \`obj1\`
 * and \`obj2\` are different, with the values from \`obj2\`, or null if objects
 * are identical.
 *
 * @param obj1 - First object
 * @param obj2 - Second object
 * @returns the object with changed properties
 */
export declare function findChangedProperties<T extends Record<string, any>>(obj1: Partial<T>, obj2: Partial<T>): Partial<T> | null;
export declare const INVALID_VALUE: unique symbol;
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
 * that comes either from the \`config$\` store (when it is not undefined) or from \`defValue\`.
 * If a normalizeValue function is passed in the options, it is called to normalize non-undefined values coming
 * either from the \`config$\` store or from the \`set\` or \`update\` functions. If a value is invalid (i.e. normalizeValue
 * returns the \`invalidValue\` symbol), an error is logged on the console and it is either not set (if it comes from the
 * \`set\` or \`update\` functions), or the \`defValue\` is used instead (if the invalid value comes from the \`config$\` store).
 *
 * @param defValue - Default value used when both the own value and the config$ value are undefined.
 * @param config$ - Store containing the default value used when the own value is undefined
 * @param options - Object which can contain the following optional functions: normalizeValue and equal
 * @param own$ - Store containing the own value
 * @returns a writable store with the extra default value and normalization logic described above
 */
export declare function writableWithDefault<T>(defValue: T, config$?: ReadableSignal<T | undefined>, options?: WritableWithDefaultOptions<T>, own$?: WritableSignal<T | undefined>): WritableSignal<T, T | undefined>;
export type ConfigValidator<T extends object> = {
    [K in keyof T]?: WritableWithDefaultOptions<T[K]>;
};
/**
 * Returns true if the provided argument is a store (ReadableSignal).
 * @param x - argument that is tested
 * @returns true if the argument is a store (ReadableSignal)
 */
export declare const isStore: (x: any) => x is ReadableSignal<any>;
/**
 * If the provided argument is already a store, it is returned as is, otherwise, a readable store is created with the provided argument as its initial value.
 * @param x - either a store or a simple value
 * @returns either x if x is already a store, or readable(x) otherwise
 */
export declare const toReadableStore: <T>(x: T | ReadableSignal<T>) => ReadableSignal<T>;
/**
 * If the provided argument is already a store, it is returned as is, otherwise, a writable store is created with the provided argument as its initial value.
 * @param x - either a writable store or a simple value
 * @returns either x if x is already a store, or writable(x) otherwise
 */
export declare const toWritableStore: <T>(x: T | WritableSignal<T, T>) => WritableSignal<T, T>;
export declare const normalizeConfigStores: <T extends object>(keys: (keyof T)[], config?: ReadableSignal<Partial<T>> | ValuesOrReadableSignals<T> | undefined) => ReadableSignals<T>;
export declare const mergeConfigStores: <T extends object>(keys: (keyof T)[], config1?: ReadableSignals<T> | undefined, config2?: ReadableSignals<T> | undefined) => ReadableSignals<T>;
/**
 * Returns an object containing, for each property of \`defConfig\`, a corresponding writable with the normalization and default value logic
 * described in {@link writableWithDefault}. Keys in the returned object are the same as the ones present in \`defConfig\`,
 * with the exta \`$\` suffix (showing that they are stores).
 *
 * @param defConfig - object containing, for each property, a default value to use in case \`config$\` does not provide the suitable default
 * value for that property
 * @param propsConfig - object defining the config and props
 * @param options - object containing, for each property of \`defConfig\`, an optional object with the following optional functions: normalizeValue and equal
 * @returns an object containing writables
 *
 * @example With a store
 * \`\`\`ts
 * const defConfig = {propA: 1};
 * const validation = {propA: {normalizeValue: value => +value}};
 * const config = writable({propA: 5});
 * const {propA$} = writablesWithDefault(defConfig, {config}, validation);
 * \`\`\`
 *
 * @example With an object containing a value and a store
 * \`\`\`ts
 * const defConfig = {propA: 1, propB: 2};
 * const validation = {propA: {normalizeValue: value => +value}};
 * const config = {propA: 5, propB: writable(3)};
 * const {propA$, propB$} = writablesWithDefault(defConfig, {config}, validation);
 * \`\`\`
 */
export declare const writablesWithDefault: <T extends object>(defConfig: T, propsConfig?: PropsConfig<T> | undefined, options?: ConfigValidator<T> | undefined) => ToWritableSignal<T>;
/**
 * Shortcut for calling both {@link writablesWithDefault} and {@link createPatch} in one call.
 * @param defConfig - object containing, for each property, a default value to use in case \`config\` does not provide the suitable default
 * value for that property
 * @param propsConfig - either a store of objects containing, for each property of \`defConfig\`, the default value or an object containing
 * for each property of \`defConfig\` either a store containing the default value or the default value itself
 * @param options - object containing, for each property of \`defConfig\`, an optional object with the following optional functions: normalizeValue and equal
 * @returns an array with two items: the first one containing the writables (returned by {@link writablesWithDefault}),
 * and the second one containing the patch function (returned by {@link createPatch})
 *
 * @example With a store
 * \`\`\`ts
 * const defConfig = {propA: 1};
 * const validation = {propA: {normalizeValue: value => +value}};
 * const config$ = writable({propA: 5});
 * const [{propA$}, patch] = writablesForProps(defConfig, config$, validation);
 * \`\`\`
 *
 * @example With an object containing a value and a store
 * \`\`\`ts
 * const defConfig = {propA: 1, propB: 2};
 * const validation = {propA: {normalizeValue: value => +value}};
 * const config = {propA: 5, propB: writable(3)};
 * const [{propA$, propB$}, patch] = writablesForProps(defConfig, config, validation);
 * \`\`\`
 */
export declare const writablesForProps: <T extends object>(defConfig: T, propsConfig?: PropsConfig<T> | undefined, options?: { [K in keyof T]?: WritableWithDefaultOptions<T[K]> | undefined; } | undefined) => [ToWritableSignal<T>, <U extends Partial<T>>(storesValues?: void | U | undefined) => void];
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
export declare const stateStores: <A extends {
    [x: \`\${string}$\`]: ReadableSignal<any>;
}>(inputStores: A) => {
    state$: ReadableSignal<ToState<A>>;
    stores: { [key in \`\${string}$\` & keyof A]: ReadableSignal<ValueOfStore<A[key]>>; };
};
/**
 * Creates a computed store that binds to multiple stores and triggers a callback when the value changes.
 * @param onChange$ - A readable signal callback function to execute when the value changes.
 * @param stores - An array of Svelte stores, with the main store at index 0.
 * @param adjustValue - A function to adjust the value of the main store. By default, the value of the main store is returned.
 * @param equal - A function to determine if two values are equal. Used to compare the ajusted value with the current one.
 * @returns The derived store that reflects the combined state of the input stores.
 */
export declare const bindableDerived: <T, U extends [WritableSignal<T, T>, ...StoreInput<any>[]]>(onChange$: ReadableSignal<(value: T) => void>, stores: U, adjustValue?: (arg: StoresInputValues<U>) => T, equal?: (currentValue: T, newValue: T) => boolean) => ReadableSignal<T>;
`;export{e as default};
