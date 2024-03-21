const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tansu = require("@amadeus-it-group/tansu");
const dom = require("../dom-esMGYlP6.cjs");
const func = require("../func-Qd3cD9a3.cjs");
const utils_stores = require("./stores.cjs");
const bindDirective = (directive, directiveArg$) => {
  return (element) => {
    let firstTime = true;
    let instance;
    const unsubscribe = directiveArg$.subscribe((value) => {
      var _a;
      if (firstTime) {
        firstTime = false;
        instance = directive(element, value);
      } else {
        (_a = instance == null ? void 0 : instance.update) == null ? void 0 : _a.call(instance, value);
      }
    });
    return {
      destroy() {
        var _a;
        (_a = instance == null ? void 0 : instance.destroy) == null ? void 0 : _a.call(instance);
        unsubscribe();
      }
    };
  };
};
const noArg = tansu.readable(void 0);
const bindDirectiveNoArg = (directive) => bindDirective(directive, noArg);
const mapDirectiveArg = (directive, fn) => (node, arg) => {
  const instance = directive(node, fn(arg));
  return {
    update: (arg2) => {
      var _a;
      (_a = instance == null ? void 0 : instance.update) == null ? void 0 : _a.call(instance, fn(arg2));
    },
    destroy: () => {
      var _a;
      return (_a = instance == null ? void 0 : instance.destroy) == null ? void 0 : _a.call(instance);
    }
  };
};
const directiveSubscribe = (store, asyncUnsubscribe = true) => () => {
  const unsubscribe = store.subscribe(func.noop);
  return {
    destroy: async () => {
      if (asyncUnsubscribe) {
        await 0;
      }
      unsubscribe();
    }
  };
};
const directiveUpdate = (update) => (element, arg) => {
  update(arg);
  return {
    update
  };
};
const equalOption = { equal: Object.is };
const registrationArray = () => {
  const elements$ = tansu.writable([], equalOption);
  return tansu.asReadable(elements$, {
    /**
     * Add the given element to the array.
     * @param element - Element to be added to the array.
     * @returns A function to remove the element from the array.
     */
    register: (element) => {
      let removed = false;
      elements$.update((currentElements) => [...currentElements, element]);
      return () => {
        if (!removed) {
          removed = true;
          elements$.update((currentElements) => {
            const index = currentElements.indexOf(element);
            if (index > -1) {
              const copy = [...currentElements];
              copy.splice(index, 1);
              return copy;
            }
            return currentElements;
          });
        }
      };
    }
  });
};
const createStoreArrayDirective = () => {
  const elements$ = registrationArray();
  return {
    elements$: tansu.asReadable(elements$),
    directive: (element) => ({ destroy: elements$.register(element) })
  };
};
const createStoreDirective = () => {
  const element$ = tansu.writable(null, equalOption);
  return {
    element$: tansu.asReadable(element$),
    directive: (element) => {
      let valid = false;
      element$.update((currentElement) => {
        if (currentElement) {
          console.error("The directive cannot be used on multiple elements.", currentElement, element);
          return currentElement;
        }
        valid = true;
        return element;
      });
      return valid ? {
        destroy() {
          element$.update((currentElement) => element === currentElement ? null : currentElement);
        }
      } : void 0;
    }
  };
};
const mergeDirectives = (...args) => (element, arg) => {
  const instances = tansu.batch(() => args.map((directive) => directive(element, arg)));
  return {
    update(arg2) {
      tansu.batch(() => instances.forEach((instance) => {
        var _a;
        return (_a = instance == null ? void 0 : instance.update) == null ? void 0 : _a.call(instance, arg2);
      }));
    },
    destroy() {
      tansu.batch(() => instances.reverse().forEach((instance) => {
        var _a;
        return (_a = instance == null ? void 0 : instance.destroy) == null ? void 0 : _a.call(instance);
      }));
    }
  };
};
const createAttributesDirective = (propsFn) => (node, args) => {
  const unsubscribers = [];
  const args$ = tansu.writable(args);
  const { events, attributes, styles, classNames } = propsFn(args$);
  for (const [type, eventFn] of Object.entries(events ?? {})) {
    unsubscribers.push(dom.addEvent(node, type, eventFn));
  }
  for (const [attributeName, value] of Object.entries(attributes ?? {})) {
    if (value != null) {
      unsubscribers.push(dom.bindAttribute(node, attributeName, utils_stores.toReadableStore(value)));
    }
  }
  for (const [styleName, value] of Object.entries(styles ?? {})) {
    if (value) {
      unsubscribers.push(dom.bindStyle(node, styleName, utils_stores.toReadableStore(value)));
    }
  }
  for (const [className, value] of Object.entries(classNames ?? {})) {
    unsubscribers.push(dom.bindClassName(node, className, utils_stores.toReadableStore(value)));
  }
  return {
    update: (args2) => args$.set(args2),
    destroy: () => unsubscribers.forEach((fn) => fn())
  };
};
exports.bindDirective = bindDirective;
exports.bindDirectiveNoArg = bindDirectiveNoArg;
exports.createAttributesDirective = createAttributesDirective;
exports.createStoreArrayDirective = createStoreArrayDirective;
exports.createStoreDirective = createStoreDirective;
exports.directiveSubscribe = directiveSubscribe;
exports.directiveUpdate = directiveUpdate;
exports.mapDirectiveArg = mapDirectiveArg;
exports.mergeDirectives = mergeDirectives;
exports.registrationArray = registrationArray;
`;export{e as default};
