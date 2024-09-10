const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tansu = require("@amadeus-it-group/tansu");
const utils_directive = require("../directive-DdlwGFtf.cjs");
const isInertOrInvisible = (element) => {
  let curElement = element;
  while (curElement) {
    const style = getComputedStyle(curElement);
    if (curElement.inert || curElement.hidden || style.display === "none" || style.visibility === "hidden") {
      return true;
    }
    curElement = curElement.parentElement;
  }
  return false;
};
const checkNotDisabled = (element) => {
  var _a;
  if (element.disabled) {
    return false;
  }
  const parentFieldset = (_a = element.parentElement) == null ? void 0 : _a.closest("fieldset");
  return parentFieldset ? checkNotDisabled(parentFieldset) : true;
};
const isFocusableOtherTags = (element) => element.isContentEditable || !!element.hasAttribute("tabindex");
const isFocusableByTagName = {
  INPUT: (element) => element.type !== "hidden" && checkNotDisabled(element),
  SELECT: checkNotDisabled,
  TEXTAREA: checkNotDisabled,
  BUTTON: checkNotDisabled,
  A: (element) => !!element.href || isFocusableOtherTags(element)
};
const isFocusable = (element) => {
  return document.contains(element) && !isInertOrInvisible(element) && (isFocusableByTagName[element.tagName] ?? isFocusableOtherTags)(element);
};
const compareDomOrder = (element1, element2) => {
  if (element1 === element2) {
    return 0;
  }
  const result = element1.compareDocumentPosition(element2);
  if (result & Node.DOCUMENT_POSITION_FOLLOWING) {
    return -1;
  } else if (result & Node.DOCUMENT_POSITION_PRECEDING) {
    return 1;
  }
  throw new Error("failed to compare elements");
};
const getTextDirection = (element) => getComputedStyle(element).direction;
const textInputTypes = /* @__PURE__ */ new Set(["text", "search", "url", "tel", "password"]);
const isTextInput = (element) => element instanceof HTMLInputElement && textInputTypes.has(element.type);
const getKeyName = (event) => {
  let key = event.key;
  if (event.shiftKey) {
    key = \`Shift+\${key}\`;
  }
  if (event.altKey) {
    key = \`Alt+\${key}\`;
  }
  if (event.ctrlKey) {
    key = \`Ctrl+\${key}\`;
  }
  if (event.metaKey) {
    key = \`Meta+\${key}\`;
  }
  return key;
};
const isInternalInputNavigation = (event) => {
  const { target, key } = event;
  if (isTextInput(target) && (key === "ArrowLeft" || key === "ArrowRight" || key === "Home" || key === "End")) {
    let startPosition;
    if (key === "ArrowLeft" || key === "ArrowRight") {
      const direction = getTextDirection(target);
      startPosition = key === (direction === "ltr" ? "ArrowLeft" : "ArrowRight");
    } else {
      startPosition = key === "Home";
    }
    const cursorPosition = target.selectionStart === target.selectionEnd ? target.selectionStart : null;
    if (startPosition && cursorPosition !== 0 || !startPosition && cursorPosition !== target.value.length) {
      return true;
    }
  }
  return false;
};
const defaultSelector = (directiveElement) => [directiveElement];
const createNavManager = () => {
  const directiveInstances$ = utils_directive.registrationArray();
  const elementsRefresh$ = tansu.writable({});
  const refreshElements = (now = true) => {
    elementsRefresh$.set({});
    if (now) {
      commonAncestor$();
      elementsInDomOrder$();
    }
  };
  const elements$ = tansu.computed(() => {
    elementsRefresh$();
    const res = [];
    for (const item of directiveInstances$()) {
      res.push(...item());
    }
    return res;
  });
  const commonAncestor$ = tansu.computed(() => utils_directive.computeCommonAncestor(elements$()), { equal: Object.is });
  const elementsInDomOrder$ = tansu.computed(() => [...elements$()].sort(compareDomOrder));
  const ancestorDirection = () => {
    const commonAncestor = commonAncestor$();
    return commonAncestor ? getTextDirection(commonAncestor) : "ltr";
  };
  const preventDefaultIfRelevant = (value, event) => {
    if (value) {
      event == null ? void 0 : event.preventDefault();
    }
    return value;
  };
  const focusIndex = (index, moveDirection = 0) => {
    const array = elementsInDomOrder$();
    while (index >= 0 && index < array.length) {
      const newItem = array[index];
      if (isFocusable(newItem)) {
        newItem.focus();
        if (moveDirection != 0 && isTextInput(newItem)) {
          const changeDirection = ancestorDirection() !== getTextDirection(newItem);
          const position = moveDirection > 0 !== changeDirection ? 0 : newItem.value.length;
          newItem.setSelectionRange(position, position, position === 0 ? "forward" : "backward");
        }
        return newItem;
      }
      if (moveDirection === 0) {
        break;
      } else {
        index += moveDirection;
      }
    }
    return null;
  };
  const createFocusNeighbour = (moveDirection) => ({
    event,
    referenceElement = (event == null ? void 0 : event.target) ?? document.activeElement
  } = {}) => {
    const curIndex = referenceElement ? elementsInDomOrder$().indexOf(referenceElement) : -1;
    if (curIndex > -1) {
      return preventDefaultIfRelevant(focusIndex(curIndex + moveDirection, moveDirection), event);
    }
    return null;
  };
  const directive = utils_directive.browserDirective((directiveElement, config) => {
    const onKeyDown = (event) => {
      var _a;
      if (isInternalInputNavigation(event)) {
        return;
      }
      const keyName = getKeyName(event);
      const handler = (_a = config.keys) == null ? void 0 : _a[keyName];
      if (handler) {
        refreshElements(false);
        handler({ event, directiveElement, navManager, context: config.context });
      }
    };
    directiveElement.addEventListener("keydown", onKeyDown);
    const unregister = directiveInstances$.register(() => ((config == null ? void 0 : config.selector) ?? defaultSelector)(directiveElement));
    return {
      update(newConfig) {
        config = newConfig;
      },
      destroy() {
        directiveElement.removeEventListener("keydown", onKeyDown);
        unregister();
      }
    };
  });
  const focusPrevious = createFocusNeighbour(-1);
  const focusNext = createFocusNeighbour(1);
  const focusFirst = ({ event } = {}) => preventDefaultIfRelevant(focusIndex(0, 1), event);
  const focusLast = ({ event } = {}) => preventDefaultIfRelevant(focusIndex(elementsInDomOrder$().length - 1, -1), event);
  const focusLeft = (...args) => (ancestorDirection() === "rtl" ? focusNext : focusPrevious)(...args);
  const focusRight = (...args) => (ancestorDirection() === "rtl" ? focusPrevious : focusNext)(...args);
  const focusFirstLeft = (...args) => (ancestorDirection() === "rtl" ? focusLast : focusFirst)(...args);
  const focusFirstRight = (...args) => (ancestorDirection() === "rtl" ? focusFirst : focusLast)(...args);
  const navManager = {
    elementsInDomOrder$,
    directive,
    focusIndex,
    focusPrevious,
    focusNext,
    focusFirst,
    focusFirstLeft,
    focusFirstRight,
    focusLast,
    focusLeft,
    focusRight,
    refreshElements
  };
  return navManager;
};
exports.createNavManager = createNavManager;
exports.getKeyName = getKeyName;
exports.isInternalInputNavigation = isInternalInputNavigation;
`;export{e as default};
