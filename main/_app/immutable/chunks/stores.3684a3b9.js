const e=`import { batch, computed, derived, get, readable, writable, asReadable } from '@amadeus-it-group/tansu';
import { identity } from '../utils';
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
const update = function (updater) {
    this.set(updater(this()));
};
export const INVALID_VALUE = Symbol();
/* eslint-disable jsdoc/check-param-names, jsdoc/require-param */
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
export function writableWithDefault(defValue, config$ = readable(undefined), { normalizeValue = identity, equal = Object.is } = {}) {
    const own$ = writable(undefined);
    const validatedDefConfig$ = computed(() => {
        const value = config$();
        const normalizedValue = value === undefined ? undefined : normalizeValue(value);
        if (normalizedValue === INVALID_VALUE) {
            console.error('Not using invalid value from default config', value);
            return defValue;
        }
        if (normalizedValue === undefined) {
            return defValue;
        }
        return normalizedValue;
    }, { equal });
    return asReadable(computed(() => {
        const ownValue = own$();
        return ownValue !== undefined ? ownValue : validatedDefConfig$();
    }, { equal }), {
        set(value) {
            const normalizedValue = value === undefined ? undefined : normalizeValue(value);
            if (normalizedValue === INVALID_VALUE) {
                console.error('Not setting invalid value', value);
            }
            else {
                own$.set(normalizedValue);
            }
        },
        update,
    });
}
const isStore = (x) => !!(x && typeof x === 'function' && 'subscribe' in x);
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
export const writablesWithDefault = (defConfig, config, options) => {
    const res = {};
    const configIsStore = isStore(config);
    for (const key of Object.keys(defConfig)) {
        let store = configIsStore ? computed(() => config()[key]) : undefined;
        if (!configIsStore && config) {
            const value = config[key];
            store = isStore(value) ? value : readable(value);
        }
        res[\`\${key}$\`] = writableWithDefault(defConfig[key], store, options?.[key]);
    }
    return res;
};
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
export const writablesForProps = (defConfig, config, options) => {
    const stores = writablesWithDefault(defConfig, config, options);
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
export const bindableDerived = (onChange$, stores, adjustValue) => {
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
`;export{e as default};
