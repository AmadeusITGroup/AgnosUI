const n=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const utils_directive = require("../../directive-_naLmJ9_.cjs");
const func = require("../../func-Qd3cD9a3.cjs");
const promise = require("../../promise-BMJ8qhA8.cjs");
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
  const endFn = start(element, direction, animated, context) ?? func.noop;
  if (utils_directive.isBrowserHTMLElement(element) && animated && hasTransition(element)) {
    const abort = promise.promiseFromEvent(signal, "abort");
    const transitionEnd = promise.promiseFromEvent(element, "transitionend");
    const timer = promise.promiseFromTimeout(getTransitionDurationMs(element));
    await Promise.race([abort.promise, transitionEnd.promise, timer.promise]);
    abort.unsubscribe();
    transitionEnd.unsubscribe();
    timer.unsubscribe();
  }
  if (!signal.aborted) {
    endFn();
  }
};
exports.createCSSTransition = createCSSTransition;
exports.getTransitionDurationMs = getTransitionDurationMs;
exports.hasTransition = hasTransition;
`;export{n as default};
