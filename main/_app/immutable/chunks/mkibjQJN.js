const e=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const utils_directive = require("../dom-Cm9_uROp.cjs");
const utils_func = require("../utils/func.cjs");
function createPointerdownPositionDirective({ onMoveStart, onMove, onMoveEnd } = {}) {
  const pointerdownPositionDirective = utils_directive.browserDirective((element) => {
    let removePointerMoveEvent = utils_func.noop;
    let removePointerUpEvent = utils_func.noop;
    let removePointerCancelEvent = utils_func.noop;
    let position = { xOrigin: 0, yOrigin: 0, dx: 0, dy: 0 };
    function assignPosition(e) {
      return Object.assign(position, {
        dx: e.clientX - position.xOrigin,
        dy: e.clientY - position.yOrigin
      });
    }
    const removePointerDownEvent = utils_directive.addEvent(element, "pointerdown", (e) => {
      e.preventDefault();
      e.target.setPointerCapture(e.pointerId);
      position = { xOrigin: e.clientX, yOrigin: e.clientY, dx: 0, dy: 0 };
      onMoveStart?.(position);
      removePointerMoveEvent = utils_directive.addEvent(document, "pointermove", (e2) => {
        e2.preventDefault();
        onMove?.(assignPosition(e2));
      });
      function moveEnd(e2) {
        e2.preventDefault();
        removePointerMoveEvent();
        removePointerUpEvent();
        removePointerCancelEvent();
        onMoveEnd?.(assignPosition(e2));
      }
      removePointerUpEvent = utils_directive.addEvent(document, "pointerup", moveEnd);
      removePointerCancelEvent = utils_directive.addEvent(document, "pointercancel", moveEnd);
    });
    return {
      destroy() {
        removePointerDownEvent();
        removePointerMoveEvent();
        removePointerUpEvent();
        removePointerCancelEvent();
      }
    };
  });
  return pointerdownPositionDirective;
}
exports.createPointerdownPositionDirective = createPointerdownPositionDirective;
`;export{e as default};
