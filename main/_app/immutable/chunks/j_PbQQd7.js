const n=`import { b as browserDirective, w as addEvent } from "../dom-DD1hAVZy.js";
import { noop } from "../utils/func.js";
function createPointerdownPositionDirective({ onMoveStart, onMove, onMoveEnd } = {}) {
  const pointerdownPositionDirective = browserDirective((element) => {
    let removePointerMoveEvent = noop;
    let removePointerUpEvent = noop;
    let removePointerCancelEvent = noop;
    let position = { xOrigin: 0, yOrigin: 0, dx: 0, dy: 0 };
    function assignPosition(e) {
      return Object.assign(position, {
        dx: e.clientX - position.xOrigin,
        dy: e.clientY - position.yOrigin
      });
    }
    const removePointerDownEvent = addEvent(element, "pointerdown", (e) => {
      e.preventDefault();
      e.target.setPointerCapture(e.pointerId);
      position = { xOrigin: e.clientX, yOrigin: e.clientY, dx: 0, dy: 0 };
      onMoveStart?.(position);
      removePointerMoveEvent = addEvent(document, "pointermove", (e2) => {
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
      removePointerUpEvent = addEvent(document, "pointerup", moveEnd);
      removePointerCancelEvent = addEvent(document, "pointercancel", moveEnd);
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
export {
  createPointerdownPositionDirective
};
`;export{n as default};
