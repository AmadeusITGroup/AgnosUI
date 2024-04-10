const n=`import { i as isBrowserHTMLElement } from "../../directive-DDb3YD5o.js";
import { n as noop } from "../../func-DR0n-ShK.js";
import { a as promiseFromEvent, b as promiseFromTimeout } from "../../promise-CY2U8bTP.js";
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
