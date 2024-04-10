const e=`import { readable, writable, asReadable, batch } from "@amadeus-it-group/tansu";
import { BROWSER } from "esm-env";
import { n as noop } from "./func-DR0n-ShK.js";
import { toReadableStore } from "./utils/stores.js";
const computeCommonAncestor = (elements) => {
  const length = elements.length;
  if (length === 0)
    return null;
  let ancestor = elements[0];
  for (let i = 1; i < length && ancestor; i++) {
    const element = elements[i];
    while (ancestor) {
      if (ancestor === element) {
        break;
      }
      const comparison = ancestor.compareDocumentPosition(element);
      if (comparison & Node.DOCUMENT_POSITION_CONTAINED_BY) {
        break;
      } else if (comparison & Node.DOCUMENT_POSITION_CONTAINS) {
        ancestor = element;
        break;
      } else if (comparison & Node.DOCUMENT_POSITION_DISCONNECTED) {
        return null;
      }
      ancestor = ancestor.parentElement;
    }
  }
  return ancestor;
};
const reflow = BROWSER ? (element = document.body) => {
  if (isBrowserHTMLElement(element)) {
    element.getBoundingClientRect();
  }
} : noop;
const addClasses = (element, classes) => {
  if (classes && classes.length > 0) {
    element.classList.add(...classes);
  }
};
const removeClasses = (element, classes) => {
  if (classes && classes.length > 0) {
    element.classList.remove(...classes);
  }
};
function addEvent(element, type, fn, options) {
  element.addEventListener(type, fn, options);
  return function() {
    element.removeEventListener(type, fn, options);
  };
}
let idCount = 0;
const generateId = () => \`auId-\${idCount++}\`;
const notEmpty = (value) => value != null && value !== false;
function classNamesSubscribe(node, classNames$) {
  let currentClassNames = /* @__PURE__ */ new Set();
  return classNames$.subscribe((newClassName) => {
    const classNames = new Set(\`\${newClassName ?? ""}\`.split(" "));
    classNames.delete("");
    const classList = node.classList;
    for (const className of currentClassNames) {
      if (!classNames.has(className)) {
        classList.remove(className);
      }
    }
    classList.add(...classNames);
    currentClassNames = classNames;
  });
}
function attributeSubscribe(node, attributeName, value$) {
  return value$.subscribe((value) => {
    if (notEmpty(value)) {
      node.setAttribute(attributeName, "" + (value === true ? "" : value));
    } else {
      node.removeAttribute(attributeName);
    }
  });
}
function bindAttribute(node, attributeName, value$) {
  const isClass = attributeName === "class";
  return isClass ? classNamesSubscribe(node, value$) : attributeSubscribe(node, attributeName, value$);
}
function bindStyle(node, styleName, value$) {
  return value$.subscribe((value) => {
    const style = node.style;
    style[styleName] = "" + (notEmpty(value) ? value : "");
  });
}
function bindClassName(node, className, value$) {
  const unsubscribe = value$.subscribe((isPresent) => {
    node.classList.toggle(className, isPresent);
  });
  return () => {
    unsubscribe();
    node.classList.remove(className);
  };
}
const ssrHTMLElementAttributesAndStyle = Symbol("attributesAndStyle");
const spaceRegExp = /\\s+/;
const ssrHTMLElement = () => {
  const attributes = {};
  const style = {};
  let classNames = /* @__PURE__ */ new Set();
  const toggleClass = (className, force = !classNames.has(className)) => {
    if (force) {
      classNames.add(className);
    } else {
      classNames.delete(className);
    }
    return !!force;
  };
  const toggleAll = (force) => (...classNames2) => classNames2.forEach((className) => toggleClass(className, force));
  return {
    style,
    classList: {
      add: toggleAll(true),
      remove: toggleAll(false),
      toggle: toggleClass
    },
    setAttribute(name, value) {
      if (name === "class") {
        classNames = new Set(value.trim().split(spaceRegExp));
      } else if (name === "style") {
        throw new Error('setAttribute("style",...) is not implemented in ssrHTMLElement. Use the style property instead.');
      } else {
        attributes[name] = value;
      }
    },
    removeAttribute(name) {
      if (name === "class") {
        classNames = /* @__PURE__ */ new Set();
      } else {
        delete attributes[name];
      }
    },
    [ssrHTMLElementAttributesAndStyle]() {
      return { attributes: { ...attributes }, classNames: [...classNames], style: { ...style } };
    }
  };
};
const isBrowserHTMLElement = BROWSER ? (element) => element instanceof HTMLElement : (element) => false;
const browserDirective = BROWSER ? (directive) => (node, args) => {
  if (isBrowserHTMLElement(node)) {
    return directive(node, args);
  }
} : (directive) => () => {
};
const bindDirective = (directive, directiveArg$) => (element) => {
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
const createBrowserStoreArrayDirective = () => {
  const { directive, elements$ } = createStoreArrayDirective();
  return { directive: browserDirective(directive), elements$ };
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
const createBrowserStoreDirective = () => {
  const { directive, element$ } = createStoreDirective();
  return { directive: browserDirective(directive), element$ };
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
const createAttributesDirective = (propsFn) => (node, args) => {
  const unsubscribers = [];
  const args$ = writable(args);
  const { events, attributes, styles, classNames } = propsFn(args$);
  if (isBrowserHTMLElement(node)) {
    for (const [type, event] of Object.entries(events ?? {})) {
      if (typeof event === "function") {
        unsubscribers.push(addEvent(node, type, event));
      } else {
        unsubscribers.push(addEvent(node, type, event.handler, event.options));
      }
    }
  }
  for (const [attributeName, value] of Object.entries(attributes ?? {})) {
    if (value != null) {
      unsubscribers.push(bindAttribute(node, attributeName, toReadableStore(value)));
    }
  }
  for (const [styleName, value] of Object.entries(styles ?? {})) {
    if (value) {
      unsubscribers.push(bindStyle(node, styleName, toReadableStore(value)));
    }
  }
  for (const [className, value] of Object.entries(classNames ?? {})) {
    unsubscribers.push(bindClassName(node, className, toReadableStore(value)));
  }
  return {
    update: (args2) => args$.set(args2),
    destroy: () => unsubscribers.forEach((fn) => fn())
  };
};
const attributesData = (...directives) => {
  const instances = [];
  try {
    const element = ssrHTMLElement();
    for (const directive of directives) {
      instances.push(Array.isArray(directive) ? directive[0](element, directive[1]) : directive(element));
    }
    return element[ssrHTMLElementAttributesAndStyle]();
  } finally {
    instances.forEach((instance) => {
      var _a;
      return (_a = instance == null ? void 0 : instance.destroy) == null ? void 0 : _a.call(instance);
    });
  }
};
function createClassDirective(className) {
  return createAttributesDirective(() => ({ attributes: { class: className } }));
}
function directiveAttributes(...directives) {
  const { attributes, classNames, style } = attributesData(...directives);
  if (classNames.length) {
    attributes["class"] = classNames.join(" ");
  }
  const stringStyle = Object.entries(style).filter(([, value]) => !!value).map(([name, value]) => \`\${name}: \${value};\`).join("");
  if (stringStyle.length) {
    attributes["style"] = stringStyle;
  }
  return attributes;
}
const ssrAttributes = BROWSER ? () => ({}) : directiveAttributes;
export {
  bindDirective as a,
  browserDirective as b,
  bindDirectiveNoArg as c,
  directiveSubscribe as d,
  directiveUpdate as e,
  createStoreArrayDirective as f,
  createBrowserStoreArrayDirective as g,
  createStoreDirective as h,
  isBrowserHTMLElement as i,
  createBrowserStoreDirective as j,
  mergeDirectives as k,
  createAttributesDirective as l,
  mapDirectiveArg as m,
  attributesData as n,
  createClassDirective as o,
  directiveAttributes as p,
  generateId as q,
  registrationArray as r,
  ssrAttributes as s,
  addEvent as t,
  removeClasses as u,
  addClasses as v,
  reflow as w,
  computeCommonAncestor as x
};
`;export{e as default};
