const e=`import { b as browserDirective } from "../directive-CKEccryv.js";
const portal = browserDirective((content, newArg) => {
  let arg;
  let replaceComment;
  const removeReplaceComment = () => {
    var _a;
    if (replaceComment) {
      (_a = replaceComment.parentNode) == null ? void 0 : _a.replaceChild(content, replaceComment);
      replaceComment = null;
    }
  };
  const update = (newArg2) => {
    var _a, _b;
    if (newArg2 !== arg && ((newArg2 == null ? void 0 : newArg2.container) !== (arg == null ? void 0 : arg.container) || (newArg2 == null ? void 0 : newArg2.insertBefore) !== (arg == null ? void 0 : arg.insertBefore))) {
      arg = newArg2;
      const container = (arg == null ? void 0 : arg.container) ?? ((_a = arg == null ? void 0 : arg.insertBefore) == null ? void 0 : _a.parentElement);
      if (container) {
        const insertBefore = (arg == null ? void 0 : arg.insertBefore) ?? null;
        const moveNeeded = content.parentElement !== container || content.nextSibling !== insertBefore;
        if (moveNeeded) {
          if (!replaceComment) {
            replaceComment = (_b = content.parentNode) == null ? void 0 : _b.insertBefore(content.ownerDocument.createComment("portal"), content);
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
      var _a;
      removeReplaceComment();
      (_a = content.parentNode) == null ? void 0 : _a.removeChild(content);
    }
  };
});
export {
  portal
};
`;export{e as default};
