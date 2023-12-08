const e=`import { asReadable, asWritable, batch, computed, derived, get, readable, writable } from '@amadeus-it-group/tansu';
import { INVALID_VALUE } from '../types';
import { identity } from './internal/func';
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
export function createPatch(stores) {
    return function (storesValues) {
        batch(() => {
            for (const [name, value] of Object.entries(storesValues ?? {})) {
                stores[\`\${name}$\`]?.set(value);
            }
        });
    };
}
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
export function findChangedProperties(obj1, obj2) {
    if (obj1 === obj2) {
        return null;
    }
    let hasUpdate = false;
    const changedValues = {};
    const keys = new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
    for (const key of keys) {
        const value = obj2[key];
        if (obj1[key] !== value) {
            changedValues[key] = value;
            hasUpdate = true;
        }
    }
    return hasUpdate ? changedValues : null;
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
export function writableWithDefault(defValue, config$ = readable(undefined), options = {}, own$ = writable(undefined)) {
    const { normalizeValue = identity, equal = Object.is } = options;
    const getDefValue = () => defValue;
    const callNormalizeValue = (value, defValue = getDefValue) => {
        const normalizedValue = value === undefined ? undefined : normalizeValue(value);
        if (normalizedValue === INVALID_VALUE) {
            console.error('Not using invalid value', value);
            return defValue();
        }
        if (normalizedValue === undefined) {
            return defValue();
        }
        return normalizedValue;
    };
    const validatedDefConfig$ = computed(() => callNormalizeValue(config$()), { equal });
    const validatedOwnValue$ = computed(() => callNormalizeValue(own$(), validatedDefConfig$), { equal });
    return asWritable(validatedOwnValue$, (value) => {
        if (value !== undefined) {
            const normalizedValue = normalizeValue(value);
            if (normalizedValue === INVALID_VALUE) {
                console.error('Not setting invalid value', value);
                return;
            }
            value = normalizedValue;
        }
        own$.set(value);
    });
}
/**
 * Returns true if the provided argument is a store (ReadableSignal).
 * @param x - argument that is tested
 * @returns true if the argument is a store (ReadableSignal)
 */
export const isStore = (x) => !!(x && typeof x === 'function' && 'subscribe' in x);
/**
 * If the provided argument is already a store, it is returned as is, otherwise, a readable store is created with the provided argument as its initial value.
 * @param x - either a store or a simple value
 * @returns either x if x is already a store, or readable(x) otherwise
 */
export const toReadableStore = (x) => (isStore(x) ? x : readable(x));
/**
 * If the provided argument is already a store, it is returned as is, otherwise, a writable store is created with the provided argument as its initial value.
 * @param x - either a writable store or a simple value
 * @returns either x if x is already a store, or writable(x) otherwise
 */
export const toWritableStore = (x) => (isStore(x) ? x : writable(x));
export const normalizeConfigStores = (keys, config) => {
    const res = {};
    if (config) {
        const configIsStore = isStore(config);
        for (const key of keys) {
            res[key] = configIsStore
                ? computed(() => config()[key])
                : toReadableStore(config[key]);
        }
    }
    return res;
};
export const mergeConfigStores = (keys, config1, config2) => {
    const res = {};
    for (const key of keys) {
        const config1Store = config1?.[key];
        const config2Store = config2?.[key];
        res[key] = config1Store && config2Store ? computed(() => config1Store() ?? config2Store()) : config1Store || config2Store;
    }
    return res;
};
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
export const writablesWithDefault = (defConfig, propsConfig, options) => {
    const res = {};
    const keys = Object.keys(defConfig);
    const configStores = normalizeConfigStores(keys, propsConfig?.config);
    const props = propsConfig?.props;
    for (const key of keys) {
        const propValue = props?.[key];
        res[\`\${key}$\`] = writableWithDefault(defConfig[key], configStores[key], options?.[key], toWritableStore(propValue));
    }
    return res;
};
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
export const writablesForProps = (defConfig, propsConfig, options) => {
    const stores = writablesWithDefault(defConfig, propsConfig, options);
    return [stores, createPatch(stores)];
};
export const stateStores = (inputStores) => {
    const storesNames = [];
    const storesArray = [];
    const stores = {};
    for (const key of Object.keys(inputStores)) {
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
            const res = {};
            storesNames.forEach((name, index) => {
                res[name] = values[index];
            });
            return res;
        }),
    };
};
/**
 * Creates a computed store that binds to multiple stores and triggers a callback when the value changes.
 * @param onChange$ - A readable signal callback function to execute when the value changes.
 * @param stores - An array of Svelte stores, with the main store at index 0.
 * @param adjustValue - A function to adjust the value of the main store. By default, the value of the main store is returned.
 * @param equal - A function to determine if two values are equal. Used to compare the ajusted value with the current one.
 * @returns The derived store that reflects the combined state of the input stores.
 */
export const bindableDerived = (onChange$, stores, adjustValue = (arg) => arg[0], equal = (currentValue, newValue) => newValue === currentValue) => {
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
`;export{e as default};
