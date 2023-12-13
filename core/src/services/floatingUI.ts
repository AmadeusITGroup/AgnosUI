import {computed, derived} from '@amadeus-it-group/tansu';
import type {ArrowOptions, AutoUpdateOptions, ComputePositionConfig, ComputePositionReturn, Derivable} from '@floating-ui/dom';
import {arrow, autoUpdate, computePosition} from '@floating-ui/dom';
import type {PropsConfig} from '../types';
import {createStoreDirective, directiveSubscribe, mergeDirectives} from '../utils/directive';
import {promiseStoreToValueStore} from '../utils/internal/promise';
import {stateStores, writablesForProps} from '../utils/stores';

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

const defaultConfig: FloatingUIProps = {
	computePositionOptions: {},
	autoUpdateOptions: {},
	arrowOptions: {},
};

export type FloatingUI = ReturnType<typeof createFloatingUI>;

export const createFloatingUI = (propsConfig?: PropsConfig<FloatingUIProps>) => {
	const [{autoUpdateOptions$, computePositionOptions$: computePositionInputOptions$, arrowOptions$: arrowInputOptions$}, patch] = writablesForProps(
		defaultConfig,
		propsConfig,
	);

	const {directive: floatingDirective, element$: floatingElement$} = createStoreDirective();
	const {directive: referenceDirective, element$: referenceElement$} = createStoreDirective();
	const {directive: arrowDirective, element$: arrowElement$} = createStoreDirective();

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
		...stateStores({
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
