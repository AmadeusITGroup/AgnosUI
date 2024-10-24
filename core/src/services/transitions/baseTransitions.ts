import {batch, computed, derived, writable} from '@amadeus-it-group/tansu';
import {typeBoolean, typeBooleanOrNull, typeFunction} from '../../utils/writables';
import type {ConfigValidator, Directive, PropsConfig, SSRHTMLElement, Widget} from '../../types';
import {promiseWithResolve} from '../../utils/internal/promise';
import {noop} from '../../utils/internal/func';
import {bindableDerived, stateStores, writablesForProps} from '../../utils/stores';
import {createStoreDirective, directiveSubscribe, directiveUpdate, mergeDirectives} from '../../utils/directive';

/**
 * Function that implements a transition.
 */
export type TransitionFn = (
	/**
	 * Element on which the transition should be applied.
	 */
	element: SSRHTMLElement,

	/**
	 * Whether the element should be shown or hidden.
	 */
	direction: 'show' | 'hide',

	/**
	 * Whether the transition should be animated.
	 */
	animated: boolean,

	/**
	 * Signal allowing to stop the transition while running.
	 */
	signal: AbortSignal,

	/**
	 * Context of the current transition. It is reused between calls if the previous transition was stopped while running on the same element.
	 */
	context: object,
) => Promise<void> | void;

/**
 * Properties for configuring a transition.
 */
export interface TransitionProps {
	/**
	 * Transition to be called.
	 */
	transition: TransitionFn;

	/**
	 * Whether the element should be visible when the transition is completed.
	 */
	visible: boolean;

	/**
	 * Whether the transition should be animated.
	 */
	animated: boolean;

	/**
	 * If the element is initially visible, whether the element should be animated when first displayed.
	 */
	animatedOnInit: boolean;

	/**
	 * Whether initialization is finished. It determines which setting between {@link TransitionProps.animated}
	 * and {@link TransitionProps.animatedOnInit} is used to enable or disable animations.
	 * @remarks
	 * If it is `true`, initialization is considered finished, and {@link TransitionProps.animatedOnInit} is no longer used.
	 * Otherwise, initialization is considered unfinished and {@link TransitionProps.animatedOnInit} is used instead of {@link TransitionProps.animated}.
	 * If it is `null`, it will be set to `true` automatically when the directive is called with a DOM element.
	 * If it is `false`, it will not be updated automatically.
	 */
	initDone: boolean | null;

	/**
	 * Function to be called when the transition is completed and the element is visible.
	 */
	onShown: () => void;

	/**
	 * Function to be called when the transition is completed and the element is not visible.
	 */
	onHidden: () => void;

	/**
	 * Function to be called when the visible property changes.
	 *
	 * @param visible - new value of the visible property
	 */
	onVisibleChange: (visible: boolean) => void;
}

/**
 * Transition state.
 */
export interface TransitionState {
	/**
	 * Whether the element is visible or will be visible when the transition is completed.
	 */
	visible: boolean;

	/**
	 * Whether the element to be animated is present in the DOM.
	 */
	elementPresent: boolean;

	/**
	 * Reference to the DOM element.
	 */
	element: HTMLElement | null;

	/**
	 * Whether a transition is currently running.
	 */
	transitioning: boolean;

	/**
	 * Equals: {@link TransitionState.visible | visible} && ! {@link TransitionState.transitioning | transitioning}
	 */
	shown: boolean;

	/**
	 * Equals: ! {@link TransitionState.visible | visible} && ! {@link TransitionState.transitioning | transitioning}
	 */
	hidden: boolean;
}

/**
 * Interface representing the API for managing transitions of an element.
 */
export interface TransitionApi {
	/**
	 * Runs the transition to show the element. It is equivalent to {@link TransitionApi.toggle | toggle} with true as the first parameter.
	 *
	 * @param animated - whether the transition should be animated. If the parameter is not defined, the {@link TransitionProps.animated | animated } property is used.
	 *
	 * @returns A promise that is fulfilled when the transition is completed. If the transition is canceled, or if the same transition was
	 * already running, the promise never completes.
	 */
	show: (animated?: boolean) => Promise<void>;

	/**
	 * Runs the transition to hide the element. It is equivalent to {@link TransitionApi.toggle | toggle} with false as the first parameter.
	 *
	 * @param animated - whether the transition should be animated. If the parameter is not defined, the {@link TransitionProps.animated | animated } property is used.
	 *
	 * @returns A promise that is fulfilled when the transition is completed. If the transition is canceled, or if the same transition was
	 * already running, the promise never completes.
	 */
	hide: (animated?: boolean) => Promise<void>;

	/**
	 * Runs the transition to show or hide the element depending on the first parameter.
	 *
	 * @param visible - whether the element should be made visible or not. If the parameter is not defined, the opposite of the current {@link TransitionProps.visible | visible } property is used.
	 * @param animated - whether the transition should be animated. If the parameter is not defined, the {@link TransitionProps.animated | animated } property is used.
	 *
	 * @returns A promise that is fulfilled when the transition is completed. If the transition is canceled, or if the same transition was
	 * already running, the promise never completes.
	 */
	toggle: (visible?: boolean, animated?: boolean) => Promise<void>;
}

/**
 * Interface representing transition directives.
 */
export interface TransitionDirectives {
	/**
	 * the transition directive
	 */
	directive: Directive<void | Partial<TransitionProps>>;
}

export type TransitionWidget = Widget<TransitionProps, TransitionState, TransitionApi, TransitionDirectives>;

const neverEndingPromise = new Promise<never>(noop);

/**
 * A transition to show / hide an element without any animated. It uses the HTML `display` attribute.
 *
 * @param element - the element to animate
 * @param direction - the direction
 */
export const noAnimation: TransitionFn = (element, direction) => {
	element.style.display = direction === 'show' ? '' : 'none';
};

const defaultValues: TransitionProps = {
	animated: true,
	animatedOnInit: false,
	initDone: null,
	visible: true,
	transition: noAnimation,
	onShown: noop,
	onHidden: noop,
	onVisibleChange: noop,
};

const configValidator: ConfigValidator<TransitionProps> = {
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
export const createTransition = (config?: PropsConfig<TransitionProps>): TransitionWidget => {
	const [{animated$, initDone$, visible$: requestedVisible$, transition$, onShown$, onHidden$, onVisibleChange$, animatedOnInit$}, patch] =
		writablesForProps(defaultValues, config, configValidator);
	const {element$, directive: storeDirective} = createStoreDirective();
	const elementPresent$ = computed(() => !!element$());
	const visible$ = bindableDerived(onVisibleChange$, [requestedVisible$], ([visible]) => visible);
	const currentTransition$ = writable(
		null as null | {
			abort: AbortController;
			visible: boolean;
			animated: boolean;
			context: object;
			element: SSRHTMLElement;
			transitionFn: TransitionFn;
			promise: Promise<void>;
		},
	);
	const transitioning$ = computed(() => !!currentTransition$());
	const stop = () => {
		let context: object | undefined;
		currentTransition$.update((currentTransition) => {
			currentTransition?.abort.abort();
			context = currentTransition?.context;
			return null;
		});
		return context;
	};

	const runTransition = (visible: boolean, animated: boolean, element: SSRHTMLElement, transitionFn: TransitionFn) =>
		batch(() => {
			const abort = new AbortController();
			const signal = abort.signal;
			const context = stop() ?? {};
			const {promise, resolve} = promiseWithResolve();
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
			resolve(
				(async () => {
					try {
						await transitionFn(element, visible ? 'show' : 'hide', animated, signal, context);
					} finally {
						if (signal.aborted) {
							await neverEndingPromise;
						} else {
							currentTransition$.set(null);
							(visible ? onShown$ : onHidden$)()?.();
						}
					}
				})(),
			);
			return currentTransition;
		});

	const shown$ = computed(() => !transitioning$() && visible$() && elementPresent$());
	const hidden$ = computed(() => !transitioning$() && !visible$());
	const effectiveAnimation$ = computed(() => (initDone$() ? animated$() : animatedOnInit$()));

	const animationFromToggle$ = writable(null as null | boolean);
	let previousElement: SSRHTMLElement | null;
	let previousVisible = requestedVisible$();
	let pendingTransition: null | ({animated: boolean} & ReturnType<typeof promiseWithResolve>) = null;
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
		},
	);

	let lastToggle = {};
	const toggle = async (visible = !requestedVisible$(), animated = effectiveAnimation$()): Promise<void> => {
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

	const directive = mergeDirectives<void | Partial<TransitionProps>>(
		storeDirective,
		directiveUpdate((args: void | Partial<TransitionProps>) => {
			if (args) {
				patch(args);
			}
		}),
		directiveSubscribe(visibleAction$),
	);

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
		api: {
			show: toggle.bind(null, true),
			hide: toggle.bind(null, false),
			toggle,
		},
	};
};
