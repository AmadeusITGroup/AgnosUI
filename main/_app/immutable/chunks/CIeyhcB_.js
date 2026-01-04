const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const utils_directive = require("../dom-Cm9_uROp.cjs");
const portal = utils_directive.browserDirective((content, newArg) => {
  let arg;
  let replaceComment;
  const removeReplaceComment = () => {
    if (replaceComment) {
      replaceComment.parentNode?.replaceChild(content, replaceComment);
      replaceComment = null;
    }
  };
  const update = (newArg2) => {
    if (newArg2 !== arg && (newArg2?.container !== arg?.container || newArg2?.insertBefore !== arg?.insertBefore)) {
      arg = newArg2;
      const container = arg?.container ?? arg?.insertBefore?.parentElement;
      if (container) {
        const insertBefore = arg?.insertBefore ?? null;
        const moveNeeded = content.parentElement !== container || content.nextSibling !== insertBefore;
        if (moveNeeded) {
          if (!replaceComment) {
            replaceComment = content.parentNode?.insertBefore(content.ownerDocument.createComment("portal"), content);
          }
          container.insertBefore(content, insertBefore);
        }
      } else {
        removeReplaceComment();
      }
    }
  };
  update(newArg);
  return {
    update,
    destroy: () => {
      removeReplaceComment();
      content.parentNode?.removeChild(content);
    }
  };
});
exports.portal = portal;
`;export{e as default};
