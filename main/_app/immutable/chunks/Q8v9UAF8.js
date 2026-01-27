const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const utils_directive = require("../dom-R8VxJgdK.cjs");
const utils_func = require("../utils/func.cjs");
const createPointerdownPositionDirective = (onStart) => utils_directive.browserDirective((element, arg) => {
  let activePointerId = null;
  let activeHandlers = null;
  let removePointerMoveEvent = utils_func.noop;
  let removePointerUpEvent = utils_func.noop;
  let removePointerCancelEvent = utils_func.noop;
  const onMove = (e) => {
    if (e.pointerId === activePointerId) {
      e.preventDefault();
      activeHandlers?.onMove?.(e);
    }
  };
  const endCurrent = (e) => {
    removePointerMoveEvent();
    removePointerUpEvent();
    removePointerCancelEvent();
    removePointerMoveEvent = utils_func.noop;
    removePointerUpEvent = utils_func.noop;
    removePointerCancelEvent = utils_func.noop;
    const handlers = activeHandlers;
    activeHandlers = null;
    activePointerId = null;
    handlers?.onEnd?.(e);
  };
  const onEnd = (e) => {
    if (e.pointerId === activePointerId) {
      e.preventDefault();
      endCurrent(e);
    }
  };
  const removePointerDownEvent = utils_directive.addEvent(element, "pointerdown", (e) => {
    if (activeHandlers) {
      endCurrent();
    }
    const pointerId = e.pointerId;
    const startResult = onStart(e, arg);
    if (startResult) {
      e.preventDefault();
      activePointerId = pointerId;
      activeHandlers = startResult;
      removePointerMoveEvent = utils_directive.addEvent(document, "pointermove", onMove);
      removePointerUpEvent = utils_directive.addEvent(document, "pointerup", onEnd);
      removePointerCancelEvent = utils_directive.addEvent(document, "pointercancel", onEnd);
    }
  });
  return {
    update(newArg) {
      arg = newArg;
    },
    destroy() {
      removePointerDownEvent();
      endCurrent();
    }
  };
});
exports.createPointerdownPositionDirective = createPointerdownPositionDirective;
`;export{e as default};
