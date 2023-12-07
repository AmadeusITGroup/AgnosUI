const n=`import { batch, computed, derived, writable } from '@amadeus-it-group/tansu';
import { bindableDerived, createStoreDirective, directiveSubscribe, directiveUpdate, mergeDirectives, stateStores, writablesForProps, } from '../services';
import { typeBoolean, typeBooleanOrNull, typeFunction } from '../services/writables';
import { promiseWithResolve } from '../utils';
const noop = () => { };
const neverEndingPromise = new Promise(noop);
export const noAnimation = async (element, direction) => {
    element.style.display = direction === 'show' ? '' : 'none';
};
const defaultValues = {
    animation: true,
    animationOnInit: false,
    initDone: null,
    visible: true,
    transition: noAnimation,
    onShown: noop,
    onHidden: noop,
    onVisibleChange: noop,
};
const configValidator = {
    animation: typeBoolean,
    animationOnInit: typeBoolean,
    visible: typeBoolean,
    transition: typeFunction,
    onShown: typeFunction,
    onHidden: typeFunction,
    onVisibleChange: typeFunction,
    initDone: typeBooleanOrNull,
};
export const createTransition = (config) => {
    const [{ animation$, initDone$, visible$: requestedVisible$, transition$, onShown$, onHidden$, onVisibleChange$, animationOnInit$ }, patch] = writablesForProps(defaultValues, config, configValidator);
    const { element$, directive: storeDirective } = createStoreDirective();
    const elementPresent$ = computed(() => !!element$());
    const visible$ = bindableDerived(onVisibleChange$, [requestedVisible$], ([visible]) => visible);
    const currentTransition$ = writable(null);
    const transitioning$ = computed(() => !!currentTransition$());
    const stop = () => {
        let context;
        currentTransition$.update((currentTransition) => {
            currentTransition?.abort.abort();
            context = currentTransition?.context;
            return null;
        });
        return context;
    };
    const runTransition = (visible, animation, element, transitionFn) => batch(() => {
        const abort = new AbortController();
        const signal = abort.signal;
        const context = stop() ?? {};
        const { promise, resolve } = promiseWithResolve();
        const currentTransition = {
            abort,
            animation,
            visible,
            context,
            element,
            transitionFn,
            promise,
        };
        currentTransition$.set(currentTransition);
        resolve((async () => {
            try {
                await transitionFn(element, visible ? 'show' : 'hide', animation, signal, context);
            }
            finally {
                if (signal.aborted) {
                    await neverEndingPromise;
                }
                else {
                    currentTransition$.set(null);
                    (visible ? onShown$ : onHidden$)()?.();
                }
            }
        })());
        return currentTransition;
    });
    const shown$ = computed(() => !transitioning$() && visible$() && elementPresent$());
    const hidden$ = computed(() => !transitioning$() && !visible$());
    const effectiveAnimation$ = computed(() => (initDone$() ? animation$() : animationOnInit$()));
    const animationFromToggle$ = writable(null);
    let previousElement;
    let previousVisible = requestedVisible$();
    let pendingTransition = null;
    const visibleAction$ = derived([visible$, element$, effectiveAnimation$, animationFromToggle$, transition$, currentTransition$], ([visible, element, animation, animationFromToggle, transition, currentTransition]) => {
        const elementChanged = previousElement !== element;
        previousElement = element;
        const visibleChanged = previousVisible !== visible;
        previousVisible = visible;
        if (element) {
            if (initDone$() == null) {
                initDone$.set(true);
            }
            const interruptAnimation = animationFromToggle != null && currentTransition && currentTransition.animation != animationFromToggle;
            if (elementChanged || visibleChanged || interruptAnimation) {
                if (visibleChanged || animationFromToggle != null) {
                    pendingTransition = null;
                }
                const animate = animationFromToggle ?? pendingTransition?.animation ?? (elementChanged && !visible ? false : animation);
                currentTransition = runTransition(visible, animate, element, transition);
                pendingTransition?.resolve(currentTransition.promise);
                pendingTransition = null;
            }
        }
        else {
            if (elementChanged) {
                // just removed from the DOM: stop animation if any
                stop();
                currentTransition = null;
            }
            if (visibleChanged || (visible && pendingTransition?.animation !== animationFromToggle)) {
                pendingTransition =
                    visible && animationFromToggle != null
                        ? {
                            // toggle was called to display the element, but the element is not yet in the DOM
                            // let's keep the animation setting from toggle and provide the promise for the end of toggle
                            animation: animationFromToggle,
                            ...promiseWithResolve(),
                        }
                        : null;
            }
        }
        return pendingTransition?.promise ?? currentTransition?.promise;
    });
    let lastToggle = {};
    const toggle = async (visible = !requestedVisible$(), animation = effectiveAnimation$()) => {
        const currentToggle = {};
        lastToggle = currentToggle;
        try {
            await batch(() => {
                try {
                    animationFromToggle$.set(animation);
                    requestedVisible$.set(visible);
                    return visibleAction$();
                }
                finally {
                    animationFromToggle$.set(null);
                }
            });
        }
        finally {
            if (lastToggle !== currentToggle) {
                await neverEndingPromise;
            }
        }
    };
    const directive = mergeDirectives(storeDirective, directiveUpdate(patch), directiveSubscribe(visibleAction$));
    return {
        ...stateStores({
            visible$,
            element$,
            elementPresent$,
            transitioning$,
            shown$,
            hidden$,
        }),
        patch,
        directives: {
            directive,
        },
        actions: {},
        api: {
            show: toggle.bind(null, true),
            hide: toggle.bind(null, false),
            toggle,
        },
    };
};
`;export{n as default};
