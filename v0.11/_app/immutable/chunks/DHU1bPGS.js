const e=`"use strict";
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
  if (element.disabled) {
    return false;
  }
  const parentFieldset = element.parentElement?.closest("fieldset");
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
exports.isFocusable = isFocusable;
`;export{e as default};
