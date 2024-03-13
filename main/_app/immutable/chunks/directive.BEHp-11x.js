const e=`import { readable, writable, asReadable, batch } from "@amadeus-it-group/tansu";
import { n as noop } from "../func-DR0n-ShK.js";
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
const noArg = readable(void 0);
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
  const unsubscribe = store.subscribe(noop);
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
  const elements$ = writable([], equalOption);
  return asReadable(elements$, {
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
    elements$: asReadable(elements$),
    directive: (element) => ({ destroy: elements$.register(element) })
  };
};
const createStoreDirective = () => {
  const element$ = writable(null, equalOption);
  return {
    element$: asReadable(element$),
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
  const instances = batch(() => args.map((directive) => directive(element, arg)));
  return {
    update(arg2) {
      batch(() => instances.forEach((instance) => {
        var _a;
        return (_a = instance == null ? void 0 : instance.update) == null ? void 0 : _a.call(instance, arg2);
      }));
    },
    destroy() {
      batch(() => instances.reverse().forEach((instance) => {
        var _a;
        return (_a = instance == null ? void 0 : instance.destroy) == null ? void 0 : _a.call(instance);
      }));
    }
  };
};
export {
  bindDirective,
  bindDirectiveNoArg,
  createStoreArrayDirective,
  createStoreDirective,
  directiveSubscribe,
  directiveUpdate,
  mapDirectiveArg,
  mergeDirectives,
  registrationArray
};
`;export{e as default};