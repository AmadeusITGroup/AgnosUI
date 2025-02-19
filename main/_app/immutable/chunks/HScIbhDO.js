const e=`import type { ReadableSignal, StoreInput, StoresInputValues, WritableSignal } from '@amadeus-it-group/tansu';
import type { ConfigValidator, PropsConfig, ValuesOrReadableSignals, WritableWithDefaultOptions } from '../types';
/**
 * Transforms the properties of a given type \`P\` into writable signals.
 * Each property key in \`P\` is suffixed with a \`$\` and its type is converted to a \`WritableSignal\`.
 * @template P - The original type whose properties are to be transformed.
 */
export type ToWritableSignal<P> = {
    [K in keyof P as \`\${K & string}$\`]-?: WritableSignal<P[K], P[K] | undefined>;
};
/**
 * Represents a collection of readable signals for an object type \`T\`.
 * Each key in the object corresponds to a key in \`T\`, and the value is an optional \`ReadableSignal\`
 * that can hold the value of the corresponding property in \`T\` or \`undefined\`.
 *
 * @template T - The object type for which the readable signals are defined.
 */
export type ReadableSignals<T extends object> = {
    [K in keyof T]?: ReadableSignal<T[K] | undefined>;
};
/**
 * A utility type that removes the trailing dollar sign (\`$\`) from a string type.
 *
 * @template S - A string type that ends with a dollar sign (\`$\`).
 * @returns The string type without the trailing dollar sign (\`$\`), or \`never\` if the input type does not end with a dollar sign.
 */
export type WithoutDollar<S extends \`\${string}$\`> = S extends \`\${infer U}$\` ? U : never;
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
 * @template T - The type of the object that the stores represent.
 * @param stores - The stores to be updated.
 * @returns - A function that takes partial values of the stores and updates them.
 */
export declare function createPatch<T extends object>(stores: ToWritableSignal<T>): (storesValues: Partial<T>) => void;
/**
 * This utility function is designed to compare the first level of two objects.
 *
 * It returns a new object which has all the keys for which the values in \`obj1\`
 * and \`obj2\` are different, with the values from \`obj2\`, or null if objects
 * are identical.
 *
 * @template T - The type of the objects being compared.
 * @param obj1 - The first partial object to compare.
 * @param obj2 - The second partial object to compare.
 * @returns A partial object containing the properties that have different values, or \`null\` if the objects are identical.
 */
export declare function findChangedProperties<T extends Record<string, any>>(obj1: Partial<T>, obj2: Partial<T>): Partial<T> | null;
/**
 * Returns a writable store whose value is either its own value (when it is not undefined) or a default value
 * that comes either from the \`config$\` store (when it is not undefined) or from \`defValue\`.
 * If a normalizeValue function is passed in the options, it is called to normalize non-undefined values coming
 * either from the \`config$\` store or from the \`set\` or \`update\` functions. If a value is invalid (i.e. normalizeValue
 * returns the \`invalidValue\` symbol), an error is logged on the console and it is either not set (if it comes from the
 * \`set\` or \`update\` functions), or the \`defValue\` is used instead (if the invalid value comes from the \`config$\` store).
 *
 * @template T - The type of the value.
 *
 * @param defValue - Default value used when both the own value and the config$ value are undefined.
 * @param config$ - Store containing the default value used when the own value is undefined
 * @param options - Object which can contain the following optional functions: normalizeValue and equal
 * @param own$ - Store containing the own value
 * @returns a writable store with the extra default value and normalization logic described above
 */
export declare function writableWithDefault<T>(defValue: T, config$?: ReadableSignal<T | undefined>, options?: WritableWithDefaultOptions<T>, own$?: WritableSignal<T | undefined>): WritableSignal<T, T | undefined>;
/**
 * Returns true if the provided argument is a store (ReadableSignal).
 * @param x - argument that is tested
 * @returns true if the argument is a store (ReadableSignal)
 */
export declare const isStore: (x: any) => x is ReadableSignal<any>;
/**
 * If the provided argument is already a store, it is returned as is, otherwise, a readable store is created with the provided argument as its initial value.
 * @template T - The type of the value.
 * @param x - The value to be converted to a readable store.
 * @returns - The readable store containing the value.
 */
export declare const toReadableStore: <T>(x: ReadableSignal<T> | T) => ReadableSignal<T>;
/**
 * Converts a value or a writable signal into a writable signal.
 *
 * @template T - The type of the value or signal.
 * @param x - The value or writable signal to convert.
 * @returns - The resulting writable signal.
 */
export declare const toWritableStore: <T>(x: WritableSignal<T> | T) => WritableSignal<T>;
/**
 * Normalizes configuration stores by converting them into readable signals.
 *
 * @template T - The type of the configuration object.
 * @param keys - An array of keys to normalize from the configuration object.
 * @param [config] - The configuration object or readable signals to normalize.
 * @returns An object containing readable signals for each key in the configuration.
 */
export declare const normalizeConfigStores: <T extends object>(keys: (keyof T)[], config?: ReadableSignal<Partial<T>> | ValuesOrReadableSignals<T>) => ReadableSignals<T>;
/**
 * Merges two configuration stores into one, prioritizing the first store's values
 * when both stores have a value for the same key.
 *
 * @template T - The type of the configuration object.
 * @param keys - The keys to merge from the configuration stores.
 * @param [config1] - The first configuration store.
 * @param [config2] - The second configuration store.
 * @returns - The merged configuration store.
 */
export declare const mergeConfigStores: <T extends object>(keys: (keyof T)[], config1?: ReadableSignals<T>, config2?: ReadableSignals<T>) => ReadableSignals<T>;
/**
 * Returns an object containing, for each property of \`defConfig\`, a corresponding writable with the normalization and default value logic
 * described in {@link writableWithDefault}. Keys in the returned object are the same as the ones present in \`defConfig\`,
 * with the exta \`$\` suffix (showing that they are stores).
 *
 * @template T - The type of the default configuration object.
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
export declare const writablesWithDefault: <T extends object>(defConfig: T, propsConfig?: PropsConfig<T>, options?: ConfigValidator<T>) => ToWritableSignal<T>;
/**
 * Shortcut for calling both {@link writablesWithDefault} and {@link createPatch} in one call.
 *
 * @template T - The type of the properties configuration object.
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
export declare const writablesForProps: <T extends object>(defConfig: T, propsConfig?: PropsConfig<T>, options?: { [K in keyof T]: WritableWithDefaultOptions<T[K]> | undefined; }) => [ToWritableSignal<T>, ReturnType<typeof createPatch<T>>];
/**
 * Using input stores, this function builds an object containing the stores as readable and a global state.
 *
 * @template A - The type of the state object.
 * @param inputStores - the input stores
 * @returns the object containing the stores as readable and the global state
 */
export declare const stateStores: <A extends object>(inputStores: { [K in keyof A as \`\${K & string}$\`]: ReadableSignal<any>; }) => {
    state$: ReadableSignal<A>;
    stores: { [K in keyof A as \`\${K & string}$\`]: ReadableSignal<A[K]>; };
};
/**
 * Creates a writable signal that derives its value from multiple stores and allows for custom adjustment and equality checks.
 *
 * @template T - The type of the derived value.
 * @template U - A tuple type where the first element is a writable signal of type T and the rest are store inputs.
 *
 * @param onChange$ - A readable signal that emits a function to be called when the derived value changes.
 * @param stores - A tuple of stores where the first element is a writable signal of type T and the rest are store inputs.
 * @param adjustValue - A function to adjust the derived value based on the input values from the stores.
 * @param equal - A function to compare the current and new values for equality.
 *
 * @returns A writable signal that derives its value from the provided stores and allows for custom adjustment and equality checks.
 */
export declare const bindableDerived: <T, U extends [WritableSignal<T>, ...StoreInput<any>[]]>(onChange$: ReadableSignal<(value: T) => void>, stores: U, adjustValue?: (arg: StoresInputValues<U>) => T, equal?: (currentValue: T, newValue: T) => boolean) => WritableSignal<T>;
/**
 * Creates a bindable property that synchronizes a writable signal with an optional adjustment function and equality check.
 *
 * @template T - The type of the value being stored.
 * @param store$ - The writable signal that holds the current value.
 * @param onChange$ - A readable signal that triggers a callback when the value changes.
 * @param [adjustValue] - An optional function to adjust the value before storing it. Defaults to the identity function.
 * @param [equal] - An optional function to compare values for equality. Defaults to \`tansuDefaultEqual\`.
 * @returns A writable signal that synchronizes with the provided store and triggers the onChange callback when updated.
 */
export declare const bindableProp: <T>(store$: WritableSignal<T, T | undefined>, onChange$: ReadableSignal<(newValue: T) => void>, adjustValue?: (value: T) => T, equal?: (a: T, b: T) => boolean) => WritableSignal<T>;
/**
 * Wraps an id store in a computed so that undefined and empty values are replaced by a generated id.
 *
 * @param id$ - the id store to use
 * @returns the id store with a default generation if the id is not provided
 */
export declare function idWithDefault(id$: ReadableSignal<string>): ReadableSignal<string>;
export declare const true$: ReadableSignal<true>;
export declare const false$: ReadableSignal<false>;
`;export{e as default};
