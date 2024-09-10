const n=`"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const tansu = require("@amadeus-it-group/tansu");
const utils_writables = require("../../writables-D46sFgGK.cjs");
const promise = require("../../promise-BMJ8qhA8.cjs");
const func = require("../../func-Qd3cD9a3.cjs");
const utils_stores = require("../../utils/stores.cjs");
const utils_directive = require("../../directive-DdlwGFtf.cjs");
const neverEndingPromise = new Promise(func.noop);
const noAnimation = (element, direction) => {
  element.style.display = direction === "show" ? "" : "none";
};
const defaultValues = {
  animated: true,
  animatedOnInit: false,
  initDone: null,
  visible: true,
  transition: noAnimation,
  onShown: func.noop,
  onHidden: func.noop,
  onVisibleChange: func.noop
};
const configValidator = {
  animated: utils_writables.typeBoolean,
  animatedOnInit: utils_writables.typeBoolean,
  visible: utils_writables.typeBoolean,
  transition: utils_writables.typeFunction,
  onShown: utils_writables.typeFunction,
  onHidden: utils_writables.typeFunction,
  onVisibleChange: utils_writables.typeFunction,
  initDone: utils_writables.typeBooleanOrNull
};
const createTransition = (config) => {
  const [{ animated$, initDone$, visible$: requestedVisible$, transition$, onShown$, onHidden$, onVisibleChange$, animatedOnInit$ }, patch] = utils_stores.writablesForProps(defaultValues, config, configValidator);
  const { element$, directive: storeDirective } = utils_directive.createStoreDirective();
  const elementPresent$ = tansu.computed(() => !!element$());
  const visible$ = utils_stores.bindableDerived(onVisibleChange$, [requestedVisible$], ([visible]) => visible);
  const currentTransition$ = tansu.writable(
    null
  );
  const transitioning$ = tansu.computed(() => !!currentTransition$());
  const stop = () => {
    let context;
    currentTransition$.update((currentTransition) => {
      currentTransition == null ? void 0 : currentTransition.abort.abort();
      context = currentTransition == null ? void 0 : currentTransition.context;
      return null;
    });
    return context;
  };
  const runTransition = (visible, animated, element, transitionFn) => tansu.batch(() => {
    const abort = new AbortController();
    const signal = abort.signal;
    const context = stop() ?? {};
    const { promise: promise$1, resolve } = promise.promiseWithResolve();
    const currentTransition = {
      abort,
      animated,
      visible,
      context,
      element,
      transitionFn,
      promise: promise$1
    };
    currentTransition$.set(currentTransition);
    resolve(
      (async () => {
        var _a;
        try {
          await transitionFn(element, visible ? "show" : "hide", animated, signal, context);
        } finally {
          if (signal.aborted) {
            await neverEndingPromise;
          } else {
            currentTransition$.set(null);
            (_a = (visible ? onShown$ : onHidden$)()) == null ? void 0 : _a();
          }
        }
      })()
    );
    return currentTransition;
  });
  const shown$ = tansu.computed(() => !transitioning$() && visible$() && elementPresent$());
  const hidden$ = tansu.computed(() => !transitioning$() && !visible$());
  const effectiveAnimation$ = tansu.computed(() => initDone$() ? animated$() : animatedOnInit$());
  const animationFromToggle$ = tansu.writable(null);
  let previousElement;
  let previousVisible = requestedVisible$();
  let pendingTransition = null;
  const visibleAction$ = tansu.derived(
    [visible$, element$, effectiveAnimation$, animationFromToggle$, transition$, currentTransition$],
    ([visible, element, animated, animationFromToggle, transition, currentTransition]) => {
      const elementChanged = previousElement !== element;
      previousElement = element;
      const visibleChanged = previousVisible !== visible;
      previousVisible = visible;
      if (element) {
        if (initDone$() == null) {
          initDone$.set(true);
        }
        const interruptAnimation = animationFromToggle != null && currentTransition && currentTransition.animated != animationFromToggle;
        if (elementChanged || visibleChanged || interruptAnimation) {
          if (visibleChanged || animationFromToggle != null) {
            pendingTransition = null;
          }
          const animate = animationFromToggle ?? (pendingTransition == null ? void 0 : pendingTransition.animated) ?? (elementChanged && !visible ? false : animated);
          currentTransition = runTransition(visible, animate, element, transition);
          pendingTransition == null ? void 0 : pendingTransition.resolve(currentTransition.promise);
          pendingTransition = null;
        }
      } else {
        if (elementChanged) {
          stop();
          currentTransition = null;
        }
        if (visibleChanged || visible && (pendingTransition == null ? void 0 : pendingTransition.animated) !== animationFromToggle) {
          pendingTransition = visible && animationFromToggle != null ? {
            // toggle was called to display the element, but the element is not yet in the DOM
            // let's keep the animation setting from toggle and provide the promise for the end of toggle
            animated: animationFromToggle,
            ...promise.promiseWithResolve()
          } : null;
        }
      }
      return (pendingTransition == null ? void 0 : pendingTransition.promise) ?? (currentTransition == null ? void 0 : currentTransition.promise);
    }
  );
  let lastToggle = {};
  const toggle = async (visible = !requestedVisible$(), animated = effectiveAnimation$()) => {
    const currentToggle = {};
    lastToggle = currentToggle;
    try {
      await tansu.batch(() => {
        try {
          animationFromToggle$.set(animated);
          requestedVisible$.set(visible);
          return visibleAction$();
        } finally {
          animationFromToggle$.set(null);
        }
      });
    } finally {
      if (lastToggle !== currentToggle) {
        await neverEndingPromise;
      }
    }
  };
  const directive = utils_directive.mergeDirectives(
    storeDirective,
    utils_directive.directiveUpdate((args) => {
      if (args) {
        patch(args);
      }
    }),
    utils_directive.directiveSubscribe(visibleAction$)
  );
  return {
    ...utils_stores.stateStores({
      visible$,
      element$,
      elementPresent$,
      transitioning$,
      shown$,
      hidden$
    }),
    patch,
    directives: {
      directive
    },
    actions: {},
    api: {
      show: toggle.bind(null, true),
      hide: toggle.bind(null, false),
      toggle
    }
  };
};
exports.createTransition = createTransition;
exports.noAnimation = noAnimation;
`;export{n as default};
