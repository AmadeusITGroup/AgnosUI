const n=`import { batch, computed, derived, writable } from '@amadeus-it-group/tansu';
import { typeBoolean, typeBooleanOrNull, typeFunction } from '../../utils/writables';
import { promiseWithResolve } from '../../utils/internal/promise';
import { noop } from '../../utils/internal/func';
import { bindableDerived, stateStores, writablesForProps } from '../../utils/stores';
import { createStoreDirective, directiveSubscribe, directiveUpdate, mergeDirectives } from '../../utils/directive';
const neverEndingPromise = new Promise(noop);
/**
 * A transition to show / hide an element without any animated. It uses the HTML \`display\` attribute.
 *
 * @param element - the element to animate
 * @param direction - the direction
 */
export const noAnimation = async (element, direction) => {
    element.style.display = direction === 'show' ? '' : 'none';
};
const defaultValues = {
    animated: true,
    animatedOnInit: false,
    initDone: null,
    visible: true,
    transition: noAnimation,
    onShown: noop,
    onHidden: noop,
    onVisibleChange: noop,
};
const configValidator = {
    animated: typeBoolean,
    animatedOnInit: typeBoolean,
    visible: typeBoolean,
    transition: typeFunction,
    onShown: typeFunction,
    onHidden: typeFunction,
    onVisibleChange: typeFunction,
    initDone: typeBooleanOrNull,
};
/**
 * Create a transition widget.
 *
 * The widget will include a patch function, stores to track the animation states and a directive to apply the animation to an element.
 *
 * @param config - the props config of the transition
 * @returns the transition widget
 */
export const createTransition = (config) => {
    const [{ animated$, initDone$, visible$: requestedVisible$, transition$, onShown$, onHidden$, onVisibleChange$, animatedOnInit$ }, patch] = writablesForProps(defaultValues, config, configValidator);
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
            promise,
        };
        currentTransition$.set(currentTransition);
        resolve((async () => {
            try {
                await transitionFn(element, visible ? 'show' : 'hide', animated, signal, context);
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
    const effectiveAnimation$ = computed(() => (initDone$() ? animated$() : animatedOnInit$()));
    const animationFromToggle$ = writable(null);
    let previousElement;
    let previousVisible = requestedVisible$();
    let pendingTransition = null;
    const visibleAction$ = derived([visible$, element$, effectiveAnimation$, animationFromToggle$, transition$, currentTransition$], ([visible, element, animated, animationFromToggle, transition, currentTransition]) => {
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
        }
        else {
            if (elementChanged) {
                // just removed from the DOM: stop animation if any
                stop();
                currentTransition = null;
            }
            if (visibleChanged || (visible && pendingTransition?.animated !== animationFromToggle)) {
                pendingTransition =
                    visible && animationFromToggle != null
                        ? {
                            // toggle was called to display the element, but the element is not yet in the DOM
                            // let's keep the animation setting from toggle and provide the promise for the end of toggle
                            animated: animationFromToggle,
                            ...promiseWithResolve(),
                        }
                        : null;
            }
        }
        return pendingTransition?.promise ?? currentTransition?.promise;
    });
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
