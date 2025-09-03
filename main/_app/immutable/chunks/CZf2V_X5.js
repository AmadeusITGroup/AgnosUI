const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tansu = require("@amadeus-it-group/tansu");
const types = require("../types.cjs");
const utils_func = require("./func.cjs");
const utils_directive = require("../dom-Bf99dk3L.cjs");
function createPatch(stores) {
  return function(storesValues) {
    tansu.batch(() => {
      for (const [name, value] of Object.entries(storesValues)) {
        stores[\`\${name}$\`]?.set(value);
      }
    });
  };
}
function findChangedProperties(obj1, obj2) {
  if (obj1 === obj2) {
    return null;
  }
  let hasUpdate = false;
  const changedValues = {};
  const keys = /* @__PURE__ */ new Set([...Object.keys(obj1), ...Object.keys(obj2)]);
  for (const key of keys) {
    const value = obj2[key];
    if (obj1[key] !== value) {
      changedValues[key] = value;
      hasUpdate = true;
    }
  }
  return hasUpdate ? changedValues : null;
}
function writableWithDefault(defValue, config$ = tansu.readable(void 0), options = {}, own$ = tansu.writable(void 0)) {
  const { normalizeValue = utils_func.identity, equal = Object.is } = options;
  const getDefValue = () => defValue;
  const callNormalizeValue = (value, defValue2 = getDefValue) => {
    const normalizedValue = value === void 0 ? void 0 : normalizeValue(value);
    if (normalizedValue === types.INVALID_VALUE) {
      console.error("Not using invalid value", value);
      return defValue2();
    }
    if (normalizedValue === void 0) {
      return defValue2();
    }
    return normalizedValue;
  };
  const validatedDefConfig$ = tansu.computed(() => callNormalizeValue(config$()), { equal });
  const validatedOwnValue$ = tansu.computed(() => callNormalizeValue(own$(), validatedDefConfig$), { equal });
  return tansu.asWritable(validatedOwnValue$, (value) => {
    if (value !== void 0) {
      const normalizedValue = normalizeValue(value);
      if (normalizedValue === types.INVALID_VALUE) {
        console.error("Not setting invalid value", value);
        return;
      }
      value = normalizedValue;
    }
    own$.set(value);
  });
}
const isStore = (x) => !!(x && typeof x === "function" && "subscribe" in x);
const toReadableStore = (x) => isStore(x) ? x : tansu.readable(x);
const toWritableStore = (x) => isStore(x) ? x : tansu.writable(x);
const normalizeConfigStores = (keys, config) => {
  const res = {};
  if (config) {
    const configIsStore = isStore(config);
    for (const key of keys) {
      res[key] = configIsStore ? tansu.computed(() => config()[key]) : toReadableStore(config[key]);
    }
  }
  return res;
};
const mergeConfigStores = (keys, config1, config2) => {
  const res = {};
  for (const key of keys) {
    const config1Store = config1?.[key];
    const config2Store = config2?.[key];
    res[key] = config1Store && config2Store ? tansu.computed(() => config1Store() ?? config2Store()) : config1Store || config2Store;
  }
  return res;
};
const writablesWithDefault = (defConfig, propsConfig, options) => {
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
const writablesForProps = (defConfig, propsConfig, options) => {
  const stores = writablesWithDefault(defConfig, propsConfig, options);
  return [stores, createPatch(stores)];
};
const stateStores = (inputStores) => {
  const storesNames = [];
  const storesArray = [];
  const stores = {};
  for (const [key, store] of Object.entries(inputStores)) {
    if (key.endsWith("$")) {
      storesNames.push(key.substring(0, key.length - 1));
      storesArray.push(store);
      stores[key] = tansu.asReadable(store);
    }
  }
  return {
    stores,
    state$: tansu.computed(() => {
      const values = storesArray.map(tansu.get);
      const res = {};
      storesNames.forEach((name, index) => {
        res[name] = values[index];
      });
      return res;
    })
  };
};
const bindableDerived = (onChange$, stores, adjustValue = (arg) => arg[0], equal = (currentValue, newValue) => newValue === currentValue) => {
  let currentValue = stores[0]();
  return tansu.asWritable(
    tansu.derived(stores, {
      derive(values) {
        const newValue = adjustValue(values);
        const rectifiedValue = !equal(values[0], newValue);
        if (rectifiedValue) {
          stores[0].set(newValue);
        }
        if (rectifiedValue || !equal(currentValue, newValue)) {
          currentValue = newValue;
          onChange$()(newValue);
        }
        return newValue;
      },
      equal
    }),
    stores[0].set.bind(stores[0])
  );
};
const bindableProp = (store$, onChange$, adjustValue = utils_func.identity, equal = tansu.equal) => tansu.asWritable(
  tansu.computed(() => adjustValue(store$()), { equal }),
  (newValue) => {
    const adjustedValue = adjustValue(newValue);
    if (!equal(store$(), adjustedValue)) {
      store$.set(adjustedValue);
      onChange$()(adjustedValue);
    }
  }
);
function idWithDefault(id$) {
  const autoId$ = tansu.computed(() => utils_directive.generateId());
  return tansu.computed(() => id$() || autoId$());
}
const true$ = tansu.readable(true);
const false$ = tansu.readable(false);
exports.bindableDerived = bindableDerived;
exports.bindableProp = bindableProp;
exports.createPatch = createPatch;
exports.false$ = false$;
exports.findChangedProperties = findChangedProperties;
exports.idWithDefault = idWithDefault;
exports.isStore = isStore;
exports.mergeConfigStores = mergeConfigStores;
exports.normalizeConfigStores = normalizeConfigStores;
exports.stateStores = stateStores;
exports.toReadableStore = toReadableStore;
exports.toWritableStore = toWritableStore;
exports.true$ = true$;
exports.writableWithDefault = writableWithDefault;
exports.writablesForProps = writablesForProps;
exports.writablesWithDefault = writablesWithDefault;
`;export{e as default};
