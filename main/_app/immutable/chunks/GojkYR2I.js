const n=`import { q as isBrowserHTMLElement } from "../../dom-Bb5ZCr_a.js";
import { noop } from "../../utils/func.js";
import { c as promiseFromEvent, d as promiseFromTimeout } from "../../promise-CkIc0KKt.js";
function hasTransition(element) {
  return window.getComputedStyle(element).transitionProperty !== "none";
}
function getTransitionDurationMs(element) {
  const { transitionDelay, transitionDuration } = window.getComputedStyle(element);
  const transitionDelaySec = parseFloat(transitionDelay);
  const transitionDurationSec = parseFloat(transitionDuration);
  return (transitionDelaySec + transitionDurationSec) * 1e3;
}
const createCSSTransition = (start) => async (element, direction, animated, signal, context) => {
  const endFn = start(element, direction, animated, context) ?? noop;
  if (isBrowserHTMLElement(element) && animated && hasTransition(element)) {
    const abort = promiseFromEvent(signal, "abort");
    const transitionEnd = promiseFromEvent(element, "transitionend");
    const timer = promiseFromTimeout(getTransitionDurationMs(element));
    await Promise.race([abort.promise, transitionEnd.promise, timer.promise]);
    abort.unsubscribe();
    transitionEnd.unsubscribe();
    timer.unsubscribe();
  }
  if (!signal.aborted) {
    endFn();
  }
};
export {
  createCSSTransition,
  getTransitionDurationMs,
  hasTransition
};
`;export{n as default};
