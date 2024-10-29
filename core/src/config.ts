import type {ReadableSignal, WritableSignal} from '@amadeus-it-group/tansu';
import {asWritable, computed, writable} from '@amadeus-it-group/tansu';
import type {ModalProps} from './components/modal/modal';
import type {AlertProps} from './components/alert/alert';
import type {PaginationProps} from './components/pagination/pagination';
import type {RatingProps} from './components/rating/rating';
import type {SelectProps} from './components/select/select';
import type {AccordionProps} from './components/accordion/accordion';
import type {ProgressbarProps} from './components/progressbar/progressbar';
import {identity} from './utils/internal/func';
import type {SliderProps} from './components/slider/slider';
import type {ToastProps} from './components/toast/toast';

/**
 * A utility type that makes all properties of an object type `T` optional,
 * and also makes all properties of the nested objects within `T` optional.
 *
 * @template T - The object type to be transformed.
 */
export type Partial2Levels<T> = Partial<{
	[Level1 in keyof T]: Partial<T[Level1]>;
}>;

/**
 * Represents a store for widget configurations with support for partial updates
 * at two levels of depth. This store includes signals for its own state, an optional
 * parent state, and an optional adapted parent state.
 *
 * @template T - The type of the widget configuration.
 */
export type WidgetsConfigStore<T> = WritableSignal<Partial2Levels<T>> & {
	own$: WritableSignal<Partial2Levels<T>>;
	parent$: undefined | WritableSignal<Partial2Levels<T>>;
	adaptedParent$: undefined | ReadableSignal<Partial2Levels<T>>;
};

/**
 * Merges source object into destination object, up to the provided number of levels.
 * @param destination - destination object
 * @param source - source object
 * @param levels - number of levels to merge
 * @returns the destination object in most cases, or the source in some cases (if the source is not undefined and either levels is smaller than 1
 * or the source is not an object)
 */
export const mergeInto = <T>(destination: T, source: T | undefined, levels: number = Infinity): T => {
	if (source !== undefined) {
		if (typeof source === 'object' && source && levels >= 1) {
			if (!destination) {
				destination = {} as T;
			}
			for (const key of Object.keys(source) as (keyof T)[]) {
				if (!Object.prototype.hasOwnProperty.call(source, key)) continue;
				if (key === '__proto__' || key === 'constructor') continue;
				destination[key] = mergeInto(destination[key], source[key] as any, levels - 1);
			}
		} else {
			return source;
		}
	}
	return destination;
};

/**
 * Creates a new widgets default configuration store, optionally inheriting from a parent store, and containing
 * its own set of widgets configuration properties that override the same properties form the parent configuration.
 *
 * @remarks
 * The resulting store has a value computed from the parent store in two steps:
 * - first step: the parent configuration is transformed by the adaptParentConfig function (if specified).
 * If adaptParentConfig is not specified, this step is skipped.
 * - second step: the configuration from step 1 is merged (2-levels deep) with the own$ store. The own$ store initially contains
 * an empty object (i.e. no property from the parent is overridden). It can be changed by calling set on the store returned by this function.
 *
 * @param parent$ - optional parent widgets default configuration store.
 * @param adaptParentConfig - optional function that receives a 2-levels copy of the widgets default configuration
 * from parent$ (or an empty object if parent$ is not specified) and returns the widgets default configuration to be used.
 * It is called only if the configuration is needed, and was not yet computed for the current value of the parent configuration.
 * It is called in a tansu reactive context, so it can use any tansu store and will be called again if those stores change.
 * @returns the resulting widgets default configuration store, which contains 3 additional properties that are stores:
 * parent$, adaptedParent$ (containing the value computed after the first step), and own$ (that contains only overridding properties).
 * The resulting store is writable, its set function is actually the set function of the own$ store.
 */
export const createWidgetsConfig = <T>(
	parent$?: WidgetsConfigStore<T>,
	adaptParentConfig: (config: Partial2Levels<T>) => Partial2Levels<T> = identity,
): WidgetsConfigStore<T> => {
	const own$ = writable({} as Partial2Levels<T>);
	const adaptedParent$ = adaptParentConfig === identity ? parent$ : computed(() => adaptParentConfig(mergeInto({}, parent$?.(), 2)));
	return asWritable(
		computed(() => mergeInto(mergeInto({}, adaptedParent$?.(), 2), own$(), 2)),
		{
			...own$,
			own$,
			adaptedParent$,
			parent$,
		},
	);
};

/**
 * Configuration for various widgets used in the application.
 */
export type WidgetsConfig = {
	/**
	 * the pagination widget config
	 */
	pagination: PaginationProps;
	/**
	 * the rating widget config
	 */
	rating: RatingProps;
	/**
	 * the select widget config
	 */
	select: SelectProps<any>;
	/**
	 * the modal widget config
	 */
	modal: ModalProps;
	/**
	 * the alert widget config
	 */
	alert: AlertProps;
	/**
	 * the accordion widget config
	 */
	accordion: AccordionProps;
	/**
	 * the progress bar widget config
	 */
	progressbar: ProgressbarProps;
	/**
	 * slider widget config
	 */
	slider: SliderProps;
	/**
	 * toast widget config
	 */
	toast: ToastProps;
};
