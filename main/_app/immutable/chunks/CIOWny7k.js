const n=`import { computed, writable, derived, batch } from "@amadeus-it-group/tansu";
import { d as typeBooleanOrNull, g as typeFunction, c as typeBoolean } from "../../writables-e0tyaQpe.js";
import { d as promiseWithResolve } from "../../promise-Y53vc4Ia.js";
import { noop } from "../../utils/func.js";
import { writablesForProps, bindableDerived, stateStores } from "../../utils/stores.js";
import { k as createStoreDirective, n as mergeDirectives, d as directiveSubscribe } from "../../dom-DD1hAVZy.js";
const neverEndingPromise = new Promise(noop);
const noAnimation = (element, direction) => {
  element.style.display = direction === "show" ? "" : "none";
};
const defaultValues = {
  animated: true,
  animatedOnInit: false,
  initDone: null,
  visible: true,
  transition: noAnimation,
  onShown: noop,
  onHidden: noop,
  onVisibleChange: noop
};
const configValidator = {
  animated: typeBoolean,
  animatedOnInit: typeBoolean,
  visible: typeBoolean,
  transition: typeFunction,
  onShown: typeFunction,
  onHidden: typeFunction,
  onVisibleChange: typeFunction,
  initDone: typeBooleanOrNull
};
const createTransition = (config) => {
  const [{ animated$, initDone$, visible$: requestedVisible$, transition$, onShown$, onHidden$, onVisibleChange$, animatedOnInit$ }, patch] = writablesForProps(defaultValues, config, configValidator);
  const { element$, directive: storeDirective } = createStoreDirective();
  const elementPresent$ = computed(() => !!element$());
  const visible$ = bindableDerived(onVisibleChange$, [requestedVisible$], ([visible]) => visible);
  const currentTransition$ = writable(
    null
  );
  const stop = () => {
    let context;
    currentTransition$.update((currentTransition) => {
      currentTransition?.abort.abort();
      context = currentTransition?.context;
      return null;
    });
    return context;
  };
  const runTransition = (visible, animated, element, transitionFn) => batch(() => {
    const abort = new AbortController();
    const signal = abort.signal;
    const context = stop() ?? {};
    const { promise, resolve } = promiseWithResolve();
    const currentTransition = {
      abort,
      animated,
      visible,
      context,
      element,
      transitionFn,
      promise
    };
    currentTransition$.set(currentTransition);
    resolve(
      (async () => {
        try {
          await transitionFn(element, visible ? "show" : "hide", animated, signal, context);
        } finally {
          if (signal.aborted) {
            await neverEndingPromise;
          } else {
            currentTransition$.set(null);
            (visible ? onShown$ : onHidden$)()?.();
          }
        }
      })()
    );
    return currentTransition;
  });
  const effectiveAnimation$ = computed(() => initDone$() ? animated$() : animatedOnInit$());
  const animationFromToggle$ = writable(null);
  let previousElement;
  let previousVisible = requestedVisible$();
  let pendingTransition = null;
  const visibleAction$ = derived(
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
          const animate = animationFromToggle ?? pendingTransition?.animated ?? (elementChanged && !visible ? false : animated);
          currentTransition = runTransition(visible, animate, element, transition);
          pendingTransition?.resolve(currentTransition.promise);
          pendingTransition = null;
        }
      } else {
        if (elementChanged) {
          stop();
          currentTransition = null;
        }
        if (visibleChanged || visible && pendingTransition?.animated !== animationFromToggle) {
          pendingTransition = visible && animationFromToggle != null ? {
            // toggle was called to display the element, but the element is not yet in the DOM
            // let's keep the animation setting from toggle and provide the promise for the end of toggle
            animated: animationFromToggle,
            ...promiseWithResolve()
          } : null;
        }
      }
      return pendingTransition?.promise ?? currentTransition?.promise;
    }
  );
  let lastToggle = {};
  const toggle = async (visible = !requestedVisible$(), animated = effectiveAnimation$()) => {
    const currentToggle = {};
    lastToggle = currentToggle;
    try {
      await batch(() => {
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
  const transitioning$ = computed(() => {
    if (elementPresent$()) {
      void visibleAction$();
    }
    return !!currentTransition$();
  });
  const shown$ = computed(() => !transitioning$() && visible$() && elementPresent$());
  const hidden$ = computed(() => !transitioning$() && !visible$());
  const directive = mergeDirectives(storeDirective, directiveSubscribe(visibleAction$));
  return {
    ...stateStores({
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
    api: {
      show: toggle.bind(null, true),
      hide: toggle.bind(null, false),
      toggle
    }
  };
};
export {
  createTransition,
  noAnimation
};
`;export{n as default};
