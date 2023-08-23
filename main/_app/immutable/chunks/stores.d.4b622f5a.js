const e=`import type { ReadableSignal, WritableSignal, StoreOptions, StoreInput, StoresInputValues } from '@amadeus-it-group/tansu';
export type ToWritableSignal<P, V = P> = {
    [K in keyof P & keyof V as \`\${K & string}$\`]-?: WritableSignal<P[K], V[K] | undefined>;
};
export type ValuesOrStores<T extends object> = {
    [K in keyof T]?: ReadableSignal<T[K]> | T[K];
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
export declare function createPatch<T extends object, V extends object = T>(stores: ToWritableSignal<T, V>): <U extends Partial<T>>(storesValues?: void | U | undefined) => void;
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
/**
 * Returns a writable store whose value is either its own value (when it is not undefined) or a default value
 * that comes either from the \`config$\` store (when it is not undefined) or from \`defValue\`.
 * If a normalizeValue function is passed in the options, it is called to normalize non-undefined values coming
 * either from the \`config$\` store or from the \`set\` or \`update\` functions. If a value is invalid (i.e. normalizeValue
 * returns the \`invalidValue\` symbol), an error is logged on the console and it is either not set (if it comes from the
 * \`set\` or \`update\` functions), or the \`defValue\` is used instead (if the invalid value comes from the \`config$\` store).
 *
 * @param defValue - Default value used when both the own value and the config$ value are undefined.
 * @param config$ - Default value used when the own value is undefined
 * @param options - Object which can contain the following optional functions: normalizeValue and equal
 * @returns a writable store with the extra default value and normalization logic described above
 */
export declare function writableWithDefault<T, U = T>(defValue: T, config$?: ReadableSignal<U | undefined>, { normalizeValue, equal }?: WritableWithDefaultOptions<T, U>): WritableSignal<T, U | undefined>;
export type ConfigValidator<T extends object, U extends object = T> = {
    [K in keyof T & keyof U]?: WritableWithDefaultOptions<T[K], U[K]>;
};
/**
 * Returns an object containing, for each property of \`defConfig\`, a corresponding writable with the normalization and default value logic
 * described in {@link writableWithDefault}. Keys in the returned object are the same as the ones present in \`defConfig\`,
 * with the exta \`$\` suffix (showing that they are stores).
 *
 * @param defConfig - object containing, for each property, a default value to use in case \`config$\` does not provide the suitable default
 * value for that property
 * @param config - either a store of objects containing, for each property of \`defConfig\`, the default value or an object containing
 * for each property of \`defConfig\` either a store containing the default value or the default value itself
 * @param options - object containing, for each property of \`defConfig\`, an optional object with the following optional functions: normalizeValue and equal
 * @returns an object containing writables
 *
 * @example With a store
 * \`\`\`ts
 * const defConfig = {propA: 1};
 * const validation = {propA: {normalizeValue: value => +value}};
 * const config$ = writable({propA: 5});
 * const {propA$} = writablesWithDefault(defConfig, config$, validation);
 * \`\`\`
 *
 * @example With an object containing a value and a store
 * \`\`\`ts
 * const defConfig = {propA: 1, propB: 2};
 * const validation = {propA: {normalizeValue: value => +value}};
 * const config = {propA: 5, propB: writable(3)};
 * const {propA$, propB$} = writablesWithDefault(defConfig, config, validation);
 * \`\`\`
 */
export declare const writablesWithDefault: <T extends object, U extends object = T>(defConfig: T, config?: PropsConfig<U> | undefined, options?: ConfigValidator<T, U> | undefined) => ToWritableSignal<T, U>;
/**
 * Shortcut for calling both {@link writablesWithDefault} and {@link createPatch} in one call.
 * @param defConfig - object containing, for each property, a default value to use in case \`config\` does not provide the suitable default
 * value for that property
 * @param config - either a store of objects containing, for each property of \`defConfig\`, the default value or an object containing
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
export declare const writablesForProps: <T extends object, U extends object = T>(defConfig: T, config?: PropsConfig<U> | undefined, options?: { [K in keyof T & keyof U]?: WritableWithDefaultOptions<T[K], U[K]> | undefined; } | undefined) => [ToWritableSignal<T, U>, <U_1 extends Partial<T>>(storesValues?: void | U_1 | undefined) => void];
export type PropsConfig<T extends object> = ReadableSignal<Partial<T>> | ValuesOrStores<T>;
export declare const stateStores: <A extends {
    [x: \`\${string}$\`]: ReadableSignal<any>;
}>(inputStores: A) => {
    state$: ReadableSignal<ToState<A>>;
    stores: { [key in \`\${string}$\` & keyof A]: ReadableSignal<ValueOfStore<A[key]>>; };
};
export declare const bindableDerived: <T, U extends [WritableSignal<T, T>, ...StoreInput<any>[]]>(onChange$: ReadableSignal<(value: T) => void>, stores: U, adjustValue: (arg: StoresInputValues<U>) => T) => ReadableSignal<T>;
`;export{e as default};
