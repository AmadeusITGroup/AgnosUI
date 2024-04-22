const e=`import { computed } from "@amadeus-it-group/tansu";
import { n as noop } from "../func-DR0n-ShK.js";
import { g as createBrowserStoreArrayDirective, k as mergeDirectives, d as directiveSubscribe } from "../directive-ClyvktyQ.js";
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
let internalRevert = noop;
const setSiblingsInert = (element) => {
  internalRevert();
  internalRevert = element ? internalSetSiblingsInert(element) : noop;
};
const { directive: storeArrayDirective, elements$ } = createBrowserStoreArrayDirective();
const lastElement$ = computed(
  () => {
    const elements = elements$();
    return elements[elements.length - 1];
  },
  { equal: Object.is }
);
const inertAction$ = computed(() => setSiblingsInert(lastElement$()));
const sliblingsInert = mergeDirectives(storeArrayDirective, directiveSubscribe(inertAction$));
export {
  sliblingsInert
};
`;export{e as default};
