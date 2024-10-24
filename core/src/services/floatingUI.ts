import {computed, derived} from '@amadeus-it-group/tansu';
import type {
	ArrowOptions,
	AutoUpdateOptions,
	ComputePositionConfig,
	ComputePositionReturn,
	Derivable,
	MiddlewareData,
	Placement,
	Strategy,
} from '@floating-ui/dom';
import {arrow, autoUpdate, computePosition} from '@floating-ui/dom';
import type {Directive, PropsConfig, SSRHTMLElement, Widget} from '../types';
import {createBrowserStoreDirective, directiveSubscribe, mergeDirectives} from '../utils/directive';
import {promiseStoreToValueStore} from '../utils/internal/promise';
import {stateStores, writablesForProps} from '../utils/stores';

/**
 * Interface representing the properties for configuring Floating UI.
 */
export interface FloatingUIProps {
	/**
	 * Options to use when calling computePosition from Floating UI
	 */
	computePositionOptions: ComputePositionConfig;

	/**
	 * Options to use when calling autoUpdate from Floating UI
	 */
	autoUpdateOptions: AutoUpdateOptions;

	/**
	 * Options to use when calling the arrow middleware from Floating UI
	 */
	arrowOptions: Omit<ArrowOptions, 'element'> | Derivable<Omit<ArrowOptions, 'element'>>;
}

/**
 * Represents the state of a floating UI element.
 */
export interface FloatingUIState {
	/**
	 * The x coordinate of the floating ui
	 */
	x: number | undefined;
	/**
	 * The y coordinate of the floating ui
	 */
	y: number | undefined;
	/**
	 * The strategy used to position the floating element
	 */
	strategy: Strategy | undefined;
	/**
	 * The final chosen placement of the floating element
	 */
	placement: Placement | undefined;
	/**
	 * Object containing data returned from all middleware, keyed by their name
	 */
	middlewareData: MiddlewareData | undefined;
}

export interface FloatingUIDirectives {
	/**
	 * Directive to attach to the reference element
	 */
	referenceDirective: Directive<void, SSRHTMLElement>;
	/**
	 * Directive to attach to the floating element
	 */
	floatingDirective: Directive<void, SSRHTMLElement>;
	/**
	 * Directive to attach to the arrow element
	 */
	arrowDirective: Directive<void, SSRHTMLElement>;
}

const defaultConfig: FloatingUIProps = {
	computePositionOptions: {},
	autoUpdateOptions: {},
	arrowOptions: {},
};

/**
 * Represents the type returned by the `createFloatingUI` function.
 *
 * This type is used to define the structure and behavior of the Floating UI component.
 */
export type FloatingUI = Omit<Widget<FloatingUIProps, FloatingUIState, object, FloatingUIDirectives>, 'api'>;

/**
 * Create a floating UI service.
 *
 * The returned service includes the patch method to patch the states, the stores to track the states and directives to apply.
 *
 * @param propsConfig - the props config for the floating UI service
 * @returns the floating UI service
 */
export const createFloatingUI = (propsConfig?: PropsConfig<FloatingUIProps>): FloatingUI => {
	const [{autoUpdateOptions$, computePositionOptions$: computePositionInputOptions$, arrowOptions$: arrowInputOptions$}, patch] = writablesForProps(
		defaultConfig,
		propsConfig,
	);

	const {directive: floatingDirective, element$: floatingElement$} = createBrowserStoreDirective();
	const {directive: referenceDirective, element$: referenceElement$} = createBrowserStoreDirective();
	const {directive: arrowDirective, element$: arrowElement$} = createBrowserStoreDirective();

	const arrowOptions$ = computed((): null | ArrowOptions | Derivable<ArrowOptions> => {
		const arrowElement = arrowElement$();
		if (!arrowElement) {
			return null;
		}
		const arrowInputOptions = arrowInputOptions$();
		return typeof arrowInputOptions === 'function'
			? (state) => ({...arrowInputOptions(state), element: arrowElement})
			: {...arrowInputOptions, element: arrowElement};
	});

	const computePositionOptions$ = computed(() => {
		let options = computePositionInputOptions$();
		const arrowOptions = arrowOptions$();
		if (arrowOptions) {
			options = {
				...options,
				middleware: [...(options.middleware ?? []), arrow(arrowOptions)],
			};
		}
		return options;
	});

	const promisePosition$ = derived(
		[floatingElement$, referenceElement$, computePositionOptions$, autoUpdateOptions$],
		([floatingElement, referenceElement, computePositionOptions, autoUpdateOptions], set) => {
			if (floatingElement && referenceElement) {
				const clean = autoUpdate(
					referenceElement,
					floatingElement,
					() => {
						set(computePosition(referenceElement, floatingElement, computePositionOptions));
					},
					autoUpdateOptions,
				);
				return () => {
					set(null);
					clean();
				};
			}
			return undefined;
		},
		null as null | Promise<ComputePositionReturn>,
	);
	const position$ = promiseStoreToValueStore(promisePosition$, null);

	const placement$ = computed(() => position$()?.placement);
	const middlewareData$ = computed(() => position$()?.middlewareData);
	const x$ = computed(() => position$()?.x);
	const y$ = computed(() => position$()?.y);
	const strategy$ = computed(() => position$()?.strategy);
	const arrowX$ = computed(() => middlewareData$()?.arrow?.x);
	const arrowY$ = computed(() => middlewareData$()?.arrow?.y);

	const floatingStyleApplyAction$ = computed(() => {
		const floatingElement = floatingElement$();
		if (floatingElement) {
			floatingElement.style.left = `${x$() ?? 0}px`;
			floatingElement.style.top = `${y$() ?? 0}px`;
		}
	});

	const arrowStyleApplyAction$ = computed(() => {
		const arrowElement = arrowElement$();
		if (arrowElement) {
			const arrowX = arrowX$();
			const arrowY = arrowY$();
			arrowElement.style.left = arrowX != null ? `${arrowX}px` : '';
			arrowElement.style.top = arrowY != null ? `${arrowY}px` : '';
		}
	});

	return {
		patch,
		...stateStores<FloatingUIState>({
			x$,
			y$,
			strategy$,
			placement$,
			middlewareData$,
		}),
		directives: {
			/**
			 * Directive to be used on the reference element from where the floating element will be positioned
			 */
			referenceDirective,
			/**
			 * Directive to be used on the floating element
			 */
			floatingDirective: mergeDirectives(floatingDirective, directiveSubscribe(floatingStyleApplyAction$)),

			/**
			 * Directive to be used on the arrow element, if any
			 */
			arrowDirective: mergeDirectives(arrowDirective, directiveSubscribe(arrowStyleApplyAction$)),
		},
	};
};
