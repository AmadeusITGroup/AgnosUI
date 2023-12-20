import {batch, computed, derived, writable} from '@amadeus-it-group/tansu';
import {typeBoolean, typeBooleanOrNull, typeFunction} from '../../utils/writables';
import type {ConfigValidator, Directive, PropsConfig, Widget} from '../../types';
import {promiseWithResolve} from '../../utils/internal/promise';
import {noop} from '../../utils/internal/func';
import {stateStores, writablesForProps} from '../../utils/stores';
import {createStoreDirective, directiveSubscribe, directiveUpdate, mergeDirectives} from '../../utils/directive';

/**
 * Function that implements a transition.
 */
export type TransitionFn = (
	/**
	 * Element on which the transition should be applied.
	 */
	element: HTMLElement,

	/**
	 * Whether the element should be shown or hidden.
	 */
	direction: 'show' | 'hide',

	/**
	 * Whether the transition should be animated.
	 */
	animation: boolean,

	/**
	 * Signal allowing to stop the transition while running.
	 */
	signal: AbortSignal,

	/**
	 * Context of the current transition. It is reused between calls if the previous transition was stopped while running on the same element.
	 */
	context: object,
) => Promise<void>;

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
	animation: boolean;

	/**
	 * If the element is initially visible, whether the element should be animated when first displayed.
	 */
	animationOnInit: boolean;

	/**
	 * Whether initialization is finished. It determines which setting between {@link TransitionProps.animation}
	 * and {@link TransitionProps.animationOnInit} is used to enable or disable animations.
	 * @remarks
	 * If it is `true`, initialization is considered finished, and {@link TransitionProps.animationOnInit} is no longer used.
	 * Otherwise, initialization is considered unfinished and {@link TransitionProps.animationOnInit} is used instead of {@link TransitionProps.animation}.
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
	 * @param visible - new value of the visible propery
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

export interface TransitionApi {
	/**
	 * Runs the transition to show the element. It is equivalent to {@link TransitionApi.toggle | toggle} with true as the first parameter.
	 *
	 * @param animation - whether the transition should be animated. If the parameter is not defined, the {@link TransitionProps.animation | animation } property is used.
	 *
	 * @returns A promise that is fulfilled when the transition is completed. If the transition is canceled, or if the same transition was
	 * already running, the promise never completes.
	 */
	show: (animation?: boolean) => Promise<void>;

	/**
	 * Runs the transition to hide the element. It is equivalent to {@link TransitionApi.toggle | toggle} with false as the first parameter.
	 *
	 * @param animation - whether the transition should be animated. If the parameter is not defined, the {@link TransitionProps.animation | animation } property is used.
	 *
	 * @returns A promise that is fulfilled when the transition is completed. If the transition is canceled, or if the same transition was
	 * already running, the promise never completes.
	 */
	hide: (animation?: boolean) => Promise<void>;

	/**
	 * Runs the transition to show or hide the element depending on the first parameter.
	 *
	 * @param visible - whether the element should be made visible or not. If the parameter is not defined, the opposite of the current {@link TransitionProps.visible | visible } property is used.
	 * @param animation - whether the transition should be animated. If the parameter is not defined, the {@link TransitionProps.animation | animation } property is used.
	 *
	 * @returns A promise that is fulfilled when the transition is completed. If the transition is canceled, or if the same transition was
	 * already running, the promise never completes.
	 */
	toggle: (visible?: boolean, animation?: boolean) => Promise<void>;
}

export interface TransitionDirectives {
	/**
	 * the transition directive
	 */
	directive: Directive<void | Partial<TransitionProps>>;
}

export type TransitionWidget = Widget<TransitionProps, TransitionState, TransitionApi, object, TransitionDirectives>;

const neverEndingPromise = new Promise<never>(noop);

export const noAnimation: TransitionFn = async (element, direction) => {
	element.style.display = direction === 'show' ? '' : 'none';
};

const defaultValues: TransitionProps = {
	animation: true,
	animationOnInit: false,
	initDone: null,
	visible: true,
	transition: noAnimation,
	onShown: noop,
	onHidden: noop,
	onVisibleChange: noop,
};

const configValidator: ConfigValidator<TransitionProps> = {
	animation: typeBoolean,
	animationOnInit: typeBoolean,
	visible: typeBoolean,
	transition: typeFunction,
	onShown: typeFunction,
	onHidden: typeFunction,
	onVisibleChange: typeFunction,
	initDone: typeBooleanOrNull,
};

export const createTransition = (config?: PropsConfig<TransitionProps>): TransitionWidget => {
	const [
		{
			animation$,
			initDone$,
			visible$: requestedVisible$,
			transition$,
			onShown$,
			onHidden$,
			// TODO: when should we call onVisibleChange$ ? or should we remove it ?
			// onVisibleChange$,
			animationOnInit$,
		},
		patch,
	] = writablesForProps(defaultValues, config, configValidator);
	const {element$, directive: storeDirective} = createStoreDirective();
	const elementPresent$ = computed(() => !!element$());
	// const visible$ = bindableDerived(onVisibleChange$, [requestedVisible$], ([visible]) => visible);
	const visible$ = requestedVisible$;
	const currentTransition$ = writable(
		null as null | {
			abort: AbortController;
			visible: boolean;
			animation: boolean;
			context: object;
			element: HTMLElement;
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

	const runTransition = (visible: boolean, animation: boolean, element: HTMLElement, transitionFn: TransitionFn) =>
		batch(() => {
			const abort = new AbortController();
			const signal = abort.signal;
			const context = stop() ?? {};
			const {promise, resolve} = promiseWithResolve();
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
			resolve!(
				(async () => {
					try {
						await transitionFn(element, visible ? 'show' : 'hide', animation, signal, context);
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
	const effectiveAnimation$ = computed(() => (initDone$() ? animation$() : animationOnInit$()));

	const animationFromToggle$ = writable(null as null | boolean);
	let previousElement: HTMLElement | null;
	let previousVisible = requestedVisible$();
	let pendingTransition: null | ({animation: boolean} & ReturnType<typeof promiseWithResolve>) = null;
	const visibleAction$ = derived(
		[visible$, element$, effectiveAnimation$, animationFromToggle$, transition$, currentTransition$],
		([visible, element, animation, animationFromToggle, transition, currentTransition]) => {
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
			} else {
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
		},
	);

	let lastToggle = {};
	const toggle = async (visible = !requestedVisible$(), animation = effectiveAnimation$()): Promise<void> => {
		const currentToggle = {};
		lastToggle = currentToggle;
		try {
			await batch(() => {
				try {
					animationFromToggle$.set(animation);
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

	const directive = mergeDirectives<void | Partial<TransitionProps>>(storeDirective, directiveUpdate(patch), directiveSubscribe(visibleAction$));

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
