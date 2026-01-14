const n=`import { b as browserDirective, w as addEvent } from "../dom-DD1hAVZy.js";
import { noop } from "../utils/func.js";
const createPointerdownPositionDirective = (onStart) => browserDirective((element, arg) => {
  let activePointerId = null;
  let activeHandlers = null;
  let removePointerMoveEvent = noop;
  let removePointerUpEvent = noop;
  let removePointerCancelEvent = noop;
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
    removePointerMoveEvent = noop;
    removePointerUpEvent = noop;
    removePointerCancelEvent = noop;
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
  const removePointerDownEvent = addEvent(element, "pointerdown", (e) => {
    if (activeHandlers) {
      endCurrent();
    }
    const pointerId = e.pointerId;
    const startResult = onStart(e, arg);
    if (startResult) {
      e.preventDefault();
      activePointerId = pointerId;
      activeHandlers = startResult;
      removePointerMoveEvent = addEvent(document, "pointermove", onMove);
      removePointerUpEvent = addEvent(document, "pointerup", onEnd);
      removePointerCancelEvent = addEvent(document, "pointercancel", onEnd);
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
export {
  createPointerdownPositionDirective
};
`;export{n as default};
