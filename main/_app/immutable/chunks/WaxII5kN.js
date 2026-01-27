const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tansu = require("@amadeus-it-group/tansu");
const utils_directive = require("../dom-R8VxJgdK.cjs");
const utils_func = require("../utils/func.cjs");
const ignoreInertAttributeName = "data-agnos-ignore-inert";
const applyInertToSiblingsRecursively = (element) => {
  const inertValues = /* @__PURE__ */ new Map();
  const recursiveHelper = (element2) => {
    const parent = element2.parentElement;
    if (parent && element2 !== document.body) {
      Array.from(parent.children).forEach((sibling) => {
        if (sibling !== element2 && sibling.nodeName !== "SCRIPT" && !sibling.hasAttribute(ignoreInertAttributeName)) {
          inertValues.set(sibling, sibling.hasAttribute("inert"));
          sibling.toggleAttribute("inert", true);
        }
      });
      recursiveHelper(parent);
    }
  };
  recursiveHelper(element);
  return () => inertValues.forEach((value, element2) => {
    element2.toggleAttribute("inert", value);
  });
};
let internalRevert = utils_func.noop;
const setSiblingsInert = (element) => {
  internalRevert();
  internalRevert = element ? applyInertToSiblingsRecursively(element) : utils_func.noop;
};
const { directive: storeArrayDirective, elements$ } = utils_directive.createConditionalBrowserStoreArrayDirective();
const lastTrackedElement$ = tansu.computed(
  () => {
    const elements = elements$();
    return elements[elements.length - 1];
  },
  { equal: Object.is }
);
const updateInertState$ = tansu.computed(() => setSiblingsInert(lastTrackedElement$()));
const siblingsInert = utils_directive.mergeDirectives(storeArrayDirective, utils_directive.directiveSubscribe(updateInertState$));
exports.siblingsInert = siblingsInert;
`;export{e as default};
