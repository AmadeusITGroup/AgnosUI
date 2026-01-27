const e=`import { BROWSER } from "esm-env";
import { readable, batch, asReadable, writable, derived, computed } from "@amadeus-it-group/tansu";
import { noop } from "./utils/func.js";
const importantSuffixRegExp = /\\s*!important$/;
const withoutImportant = (value) => value?.replace(importantSuffixRegExp, "") ?? "";
const toKebabCase = (str) => str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
const getStyleKeyFromDirectProp = (str) => {
  if (typeof str !== "string" || str.startsWith("--")) {
    return void 0;
  }
  return toKebabCase(str);
};
const getStyleKeyFromMethods = (str) => {
  if (!str.startsWith("--") && str !== toKebabCase(str)) {
    return void 0;
  }
  return str;
};
const ssrHTMLElementStyle = /* @__PURE__ */ Symbol("style");
class SSRStyle {
  // all styles in kebab-case, including custom properties:
  [ssrHTMLElementStyle] = {};
  constructor() {
    return new Proxy(this, {
      get: (target, prop) => {
        const styleKey = prop in target ? void 0 : getStyleKeyFromDirectProp(prop);
        if (styleKey) {
          return withoutImportant(target[ssrHTMLElementStyle][styleKey]);
        } else {
          return target[prop];
        }
      },
      set: (target, prop, value) => {
        const styleKey = prop in target ? void 0 : getStyleKeyFromDirectProp(prop);
        if (styleKey) {
          target.setProperty(styleKey, value);
        } else {
          target[prop] = value;
        }
        return true;
      }
    });
  }
  setProperty(property, value, priority) {
    if (!value) {
      this.removeProperty(property);
      return;
    }
    const key = getStyleKeyFromMethods(property);
    if (!key || priority !== "important" && priority !== "" && priority != null || importantSuffixRegExp.test(value)) {
      return;
    }
    this[ssrHTMLElementStyle][key] = value + (priority ? " !important" : "");
  }
  removeProperty(property) {
    const key = getStyleKeyFromMethods(property);
    if (!key) {
      return "";
    }
    const style = this[ssrHTMLElementStyle];
    const value = style[key];
    delete style[key];
    return withoutImportant(value);
  }
}
const ssrHTMLElementAttributesAndStyle = /* @__PURE__ */ Symbol("attributesAndStyle");
const spaceRegExp = /\\s+/;
const ssrHTMLElement = () => {
  const attributes = {};
  const style = new SSRStyle();
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
      return { attributes: { ...attributes }, classNames: [...classNames], style: { ...style[ssrHTMLElementStyle] } };
    }
  };
};
const cssEscapeStyleName = (styleName) => styleName.replace(/([^\\w-])/gi, "\\\\$1");
const cssTextFromObject = (style) => Object.entries(style).filter(([, value]) => !!value).map(([name, value]) => \`\${cssEscapeStyleName(name)}: \${value};\`).join("");
function r(e) {
  var t, f, n = "";
  if ("string" == typeof e || "number" == typeof e) n += e;
  else if ("object" == typeof e) if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
  } else for (f in e) e[f] && (n && (n += " "), n += f);
  return n;
}
function clsx() {
  for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
  return n;
}
const isBrowserHTMLElement = BROWSER ? ((element) => {
  const contentWindow = element?.ownerDocument?.defaultView ?? window;
  return element instanceof contentWindow.HTMLElement;
}) : (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ((element) => false)
);
const browserDirective = BROWSER ? (directive) => (node, args) => {
  if (isBrowserHTMLElement(node)) {
    return directive(node, args);
  }
} : (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  ((directive) => noop)
);
const bindDirective = (directive, directiveArg$) => (element) => {
  let firstTime = true;
  let instance;
  const unsubscribe = directiveArg$.subscribe((value) => {
    if (firstTime) {
      firstTime = false;
      instance = directive(element, value);
    } else {
      instance?.update?.(value);
    }
  });
  return {
    destroy() {
      instance?.destroy?.();
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
      instance?.update?.(fn(arg2));
    },
    destroy: () => instance?.destroy?.()
  };
};
const directiveSubscribe = (store, asyncUnsubscribe = true) => () => {
  const unsubscribe = store.subscribe(noop);
  return {
    destroy: async () => {
      if (asyncUnsubscribe) {
        await Promise.resolve();
      }
      unsubscribe();
    }
  };
};
const directiveUpdate = (update) => (_element, arg) => {
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
const createConditionalStoreArrayDirective = () => {
  const elements$ = registrationArray();
  return {
    elements$: asReadable(elements$),
    directive: (element, enabled = true) => {
      let destroyElements;
      const update = (newEnabled = true) => {
        if (!!newEnabled != !!destroyElements) {
          if (newEnabled) {
            destroyElements = elements$.register(element);
          } else {
            destroyElements?.();
            destroyElements = void 0;
          }
        }
      };
      update(enabled);
      return {
        destroy: () => update(false),
        update
      };
    }
  };
};
const createStoreArrayDirective = () => {
  const { directive, elements$ } = createConditionalStoreArrayDirective();
  return {
    directive: bindDirectiveNoArg(directive),
    elements$
  };
};
const createBrowserStoreArrayDirective = () => {
  const { directive, elements$ } = createStoreArrayDirective();
  return { directive: browserDirective(directive), elements$ };
};
const createConditionalBrowserStoreArrayDirective = () => {
  const { directive, elements$ } = createConditionalStoreArrayDirective();
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
const conditionalDirective = (directive, condition) => (element, arg) => {
  const instance$ = derived(
    condition,
    (enabled, set) => {
      const instance = enabled ? directive(element, arg) : void 0;
      set(instance);
      return () => instance?.destroy?.();
    },
    void 0
  );
  const destroy = instance$.subscribe(() => {
  });
  return {
    update(newArg) {
      arg = newArg;
      instance$()?.update?.(newArg);
    },
    destroy
  };
};
const mergeDirectives = (...args) => (element, arg) => {
  const instances = batch(() => args.map((directive) => directive(element, arg)));
  return {
    update(arg2) {
      batch(() => instances.forEach((instance) => instance?.update?.(arg2)));
    },
    destroy() {
      batch(() => instances.reverse().forEach((instance) => instance?.destroy?.()));
    }
  };
};
const multiDirective = (element, directives) => {
  const instances = [];
  const update = (directives2) => batch(() => {
    directives2.forEach((directiveWithArg, index) => {
      const [directive, arg] = Array.isArray(directiveWithArg) ? directiveWithArg : [directiveWithArg, void 0];
      const oldInstance = instances[index];
      if (oldInstance) {
        if (oldInstance.directive === directive) {
          if (oldInstance.arg !== arg) {
            oldInstance.instance?.update?.(arg);
            oldInstance.arg = arg;
          }
          return;
        }
        oldInstance.instance?.destroy?.();
      }
      const instance = directive(element, arg);
      instances[index] = { directive, instance, arg };
    });
    const extraInstances = instances.splice(directives2.length);
    extraInstances.reverse().forEach(({ instance }) => instance?.destroy?.());
  });
  update(directives);
  return {
    update,
    destroy: () => update([])
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
      unsubscribers.push(bindAttribute(node, attributeName, value));
    }
  }
  for (const [styleName, value] of Object.entries(styles ?? {})) {
    if (value) {
      unsubscribers.push(bindStyle(node, styleName, value));
    }
  }
  for (const [className, value] of Object.entries(classNames ?? {})) {
    unsubscribers.push(bindClassName(node, className, value));
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
    instances.forEach((instance) => instance?.destroy?.());
  }
};
const classDirective = createAttributesDirective((className$) => ({
  attributes: { class: computed(() => clsx(className$())) }
}));
function directiveAttributes(...directives) {
  const { attributes, classNames, style } = attributesData(...directives);
  if (classNames.length) {
    attributes["class"] = classNames.join(" ");
  }
  const stringStyle = cssTextFromObject(style);
  if (stringStyle.length) {
    attributes["style"] = stringStyle;
  }
  return attributes;
}
const ssrAttributes = BROWSER ? () => ({}) : directiveAttributes;
const computeCommonAncestor = (elements) => {
  const length = elements.length;
  if (length === 0) return null;
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
    if (classNames.size > 0) {
      classList.add(...classNames);
    }
    currentClassNames = classNames;
  });
}
function attributeSubscribe(node, attributeName, value$) {
  return value$.subscribe((value) => {
    if (notEmpty(value)) {
      node.setAttribute(attributeName, "" + (value === true ? attributeName : value));
    } else {
      node.removeAttribute(attributeName);
    }
  });
}
function bindAttribute(node, attributeName, value$) {
  const isClass = attributeName === "class";
  return isClass ? classNamesSubscribe(node, value$) : attributeSubscribe(node, attributeName, value$);
}
const isCustomProperty = (styleName) => styleName.startsWith("--");
function bindStyle(node, styleName, value$) {
  return value$.subscribe((value) => {
    const style = node.style;
    value = "" + (notEmpty(value) ? value : "");
    if (isCustomProperty(styleName)) {
      style.setProperty(styleName, value);
    } else {
      style[styleName] = value;
    }
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
export {
  reflow as A,
  computeCommonAncestor as B,
  bindDirective as a,
  browserDirective as b,
  bindDirectiveNoArg as c,
  directiveSubscribe as d,
  directiveUpdate as e,
  createConditionalStoreArrayDirective as f,
  createStoreArrayDirective as g,
  createBrowserStoreArrayDirective as h,
  isBrowserHTMLElement as i,
  createConditionalBrowserStoreArrayDirective as j,
  createStoreDirective as k,
  createBrowserStoreDirective as l,
  mapDirectiveArg as m,
  conditionalDirective as n,
  mergeDirectives as o,
  multiDirective as p,
  createAttributesDirective as q,
  registrationArray as r,
  attributesData as s,
  classDirective as t,
  directiveAttributes as u,
  ssrAttributes as v,
  generateId as w,
  addEvent as x,
  removeClasses as y,
  addClasses as z
};
`;export{e as default};
