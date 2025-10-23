const e=`import { computed } from "@amadeus-it-group/tansu";
import { j as createConditionalBrowserStoreArrayDirective, n as mergeDirectives, d as directiveSubscribe } from "../dom-Bcg9ORcA.js";
import { noop } from "../utils/func.js";
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
let internalRevert = noop;
const setSiblingsInert = (element) => {
  internalRevert();
  internalRevert = element ? applyInertToSiblingsRecursively(element) : noop;
};
const { directive: storeArrayDirective, elements$ } = createConditionalBrowserStoreArrayDirective();
const lastTrackedElement$ = computed(
  () => {
    const elements = elements$();
    return elements[elements.length - 1];
  },
  { equal: Object.is }
);
const updateInertState$ = computed(() => setSiblingsInert(lastTrackedElement$()));
const siblingsInert = mergeDirectives(storeArrayDirective, directiveSubscribe(updateInertState$));
export {
  siblingsInert
};
`;export{e as default};
