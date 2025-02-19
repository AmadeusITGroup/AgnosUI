const e=`"use strict";
const esmEnv = require("esm-env");
const utils_func = require("./utils/func.cjs");
const tansu = require("@amadeus-it-group/tansu");
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
const isBrowserHTMLElement = esmEnv.BROWSER ? (element) => {
  var _a;
  const contentWindow = ((_a = element == null ? void 0 : element.ownerDocument) == null ? void 0 : _a.defaultView) ?? window;
  return element instanceof contentWindow.HTMLElement;
} : (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (element) => false
);
const browserDirective = esmEnv.BROWSER ? (directive) => (node, args) => {
  if (isBrowserHTMLElement(node)) {
    return directive(node, args);
  }
} : (
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  (directive) => utils_func.noop
);
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
  const unsubscribe = store.subscribe(utils_func.noop);
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
const createBrowserStoreArrayDirective = () => {
  const { directive, elements$ } = createStoreArrayDirective();
  return { directive: browserDirective(directive), elements$ };
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
const createBrowserStoreDirective = () => {
  const { directive, element$ } = createStoreDirective();
  return { directive: browserDirective(directive), element$ };
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
const multiDirective = (element, directives) => {
  const instances = [];
  const update = (directives2) => tansu.batch(() => {
    directives2.forEach((directiveWithArg, index) => {
      var _a, _b, _c, _d;
      const [directive, arg] = Array.isArray(directiveWithArg) ? directiveWithArg : [directiveWithArg, void 0];
      const oldInstance = instances[index];
      if (oldInstance) {
        if (oldInstance.directive === directive) {
          if (oldInstance.arg !== arg) {
            (_b = (_a = oldInstance.instance) == null ? void 0 : _a.update) == null ? void 0 : _b.call(_a, arg);
            oldInstance.arg = arg;
          }
          return;
        }
        (_d = (_c = oldInstance.instance) == null ? void 0 : _c.destroy) == null ? void 0 : _d.call(_c);
      }
      const instance = directive(element, arg);
      instances[index] = { directive, instance, arg };
    });
    const extraInstances = instances.splice(directives2.length);
    extraInstances.reverse().forEach(({ instance }) => {
      var _a;
      return (_a = instance == null ? void 0 : instance.destroy) == null ? void 0 : _a.call(instance);
    });
  });
  update(directives);
  return {
    update,
    destroy: () => update([])
  };
};
const createAttributesDirective = (propsFn) => (node, args) => {
  const unsubscribers = [];
  const args$ = tansu.writable(args);
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
    instances.forEach((instance) => {
      var _a;
      return (_a = instance == null ? void 0 : instance.destroy) == null ? void 0 : _a.call(instance);
    });
  }
};
const classDirective = createAttributesDirective((className$) => ({
  attributes: { class: tansu.computed(() => clsx(className$())) }
}));
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
const ssrAttributes = esmEnv.BROWSER ? () => ({}) : directiveAttributes;
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
const reflow = esmEnv.BROWSER ? (element = document.body) => {
  if (isBrowserHTMLElement(element)) {
    element.getBoundingClientRect();
  }
} : utils_func.noop;
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
exports.addClasses = addClasses;
exports.addEvent = addEvent;
exports.attributesData = attributesData;
exports.bindDirective = bindDirective;
exports.bindDirectiveNoArg = bindDirectiveNoArg;
exports.browserDirective = browserDirective;
exports.classDirective = classDirective;
exports.computeCommonAncestor = computeCommonAncestor;
exports.createAttributesDirective = createAttributesDirective;
exports.createBrowserStoreArrayDirective = createBrowserStoreArrayDirective;
exports.createBrowserStoreDirective = createBrowserStoreDirective;
exports.createStoreArrayDirective = createStoreArrayDirective;
exports.createStoreDirective = createStoreDirective;
exports.directiveAttributes = directiveAttributes;
exports.directiveSubscribe = directiveSubscribe;
exports.directiveUpdate = directiveUpdate;
exports.generateId = generateId;
exports.isBrowserHTMLElement = isBrowserHTMLElement;
exports.mapDirectiveArg = mapDirectiveArg;
exports.mergeDirectives = mergeDirectives;
exports.multiDirective = multiDirective;
exports.reflow = reflow;
exports.registrationArray = registrationArray;
exports.removeClasses = removeClasses;
exports.ssrAttributes = ssrAttributes;
`;export{e as default};
