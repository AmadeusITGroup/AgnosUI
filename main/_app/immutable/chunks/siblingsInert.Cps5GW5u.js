const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tansu = require("@amadeus-it-group/tansu");
const func = require("../func-Qd3cD9a3.cjs");
const utils_directive = require("../directive-BTSEYLF3.cjs");
const internalSetSiblingsInert = (element) => {
  const inertValues = /* @__PURE__ */ new Map();
  const recursiveHelper = (element2) => {
    const parent = element2.parentElement;
    if (parent && element2 !== document.body) {
      Array.from(parent.children).forEach((sibling) => {
        if (sibling !== element2 && sibling.nodeName !== "SCRIPT") {
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
let internalRevert = func.noop;
const setSiblingsInert = (element) => {
  internalRevert();
  internalRevert = element ? internalSetSiblingsInert(element) : func.noop;
};
const { directive: storeArrayDirective, elements$ } = utils_directive.createBrowserStoreArrayDirective();
const lastElement$ = tansu.computed(
  () => {
    const elements = elements$();
    return elements[elements.length - 1];
  },
  { equal: Object.is }
);
const inertAction$ = tansu.computed(() => setSiblingsInert(lastElement$()));
const sliblingsInert = utils_directive.mergeDirectives(storeArrayDirective, utils_directive.directiveSubscribe(inertAction$));
exports.sliblingsInert = sliblingsInert;
`;export{e as default};
