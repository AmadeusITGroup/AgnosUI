import type {ReadableSignal} from '@amadeus-it-group/tansu';
import {computed, writable} from '@amadeus-it-group/tansu';
import type {ConfigValidator, Directive, PropsConfig, Widget} from '../../types';
import {INVALID_VALUE} from '../../types';
import {createAttributesDirective} from '../../utils/directive';
import {clamp, isNumber} from '../../utils/internal/checks';
import {noop} from '../../utils/internal/func';
import {bindableProp, stateStores, writablesForProps} from '../../utils/stores';
import {typeBoolean, typeFunction, typeNumber, typeString} from '../../utils/writables';
import type {WidgetsCommonPropsAndState} from '../commonProps';

export interface StarContext {
	/**
	 * indicates how much the current star is filled, from 0 to 100
	 */
	fill: number;
	/**
	 * the position of the star in the rating
	 */
	index: number;
}

interface RatingCommonPropsAndState extends WidgetsCommonPropsAndState {
	/**
	 * The current rating. Could be a decimal value like `3.75`.
	 *
	 * @defaultValue `0`
	 */
	rating: number;

	/**
	 * The maximum rating that can be given.
	 *
	 * @defaultValue `10`
	 */
	maxRating: number;

	/**
	 * If `true`, the rating is disabled.
	 *
	 * @defaultValue `false`
	 */
	disabled: boolean;

	/**
	 * If `true`, the rating can't be changed.
	 *
	 * @defaultValue `false`
	 */
	readonly: boolean;

	/**
	 * Define if the rating can be reset.
	 *
	 * If set to true, the user can 'unset' the rating value by cliking on the current rating value.
	 *
	 * @defaultValue `true`
	 */
	resettable: boolean;

	/**
	 * Allows setting a custom rating tabindex.
	 * If the component is disabled, `tabindex` will still be set to `-1`.
	 *
	 * @defaultValue `0`
	 */
	tabindex: number;

	/**
	 * The aria label
	 *
	 * @defaultValue `'Rating'`
	 */
	ariaLabel: string;

	/**
	 * The aria labelled by
	 *
	 * @defaultValue `''`
	 */
	ariaLabelledBy: string;
}

export interface RatingProps extends RatingCommonPropsAndState {
	/**
	 * Return the value for the 'aria-valuetext' attribute.
	 * @param rating - Current rating value.
	 * @param maxRating - maxRating value.
	 *
	 * @defaultValue
	 * ```ts
	 * (rating: number, maxRating: number) => `${rating} out of ${maxRating}`
	 * ```
	 */
	ariaValueTextFn: (rating: number, maxRating: number) => string;

	/**
	 * An event emitted when the rating is changed.
	 *
	 * Event payload is equal to the newly selected rating.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onRatingChange: (rating: number) => void;

	/**
	 * An event emitted when the user is hovering over a given rating.
	 *
	 * Event payload is equal to the rating being hovered over.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onHover: (rating: number) => void;

	/**
	 * An event emitted when the user stops hovering over a given rating.
	 *
	 * Event payload is equal to the rating of the last item being hovered over.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	onLeave: (rating: number) => void;
}

export interface RatingDirectives {
	/**
	 * A directive to be applied to the main container
	 * This will handle the keydown, mouseleave, tabindex and aria attributes
	 */
	containerDirective: Directive;

	/**
	 * A directive to be applied on each star element
	 */
	starDirective: Directive<{index: number}>;
}

export interface RatingState extends RatingCommonPropsAndState {
	/**
	 * the aria value of the rating
	 */
	ariaValueText: string;
	/**
	 * the visible value of the rating (it changes when hovering over the rating even though the real value did not change)
	 */
	visibleRating: number;
	/**
	 * is the rating interactive i.e. listening to hover, click and keyboard events
	 */
	interactive: boolean;
	/**
	 * the list of stars
	 */
	stars: StarContext[];
}

export interface RatingActions {
	/**
	 * Method to be used when a star is clicked.
	 *
	 * To be used in the onclick event of a star
	 * @param index - Star index, starting from 1
	 */
	click(index: number): void;

	/**
	 * Method to be used when the mouse enter in a star.
	 *
	 * To be used in the onmouseenter of a star
	 * @param index - Star index, starting from 1
	 */
	hover(index: number): void;

	/**
	 * Method to be used when the mouse leave the widget.
	 *
	 * To be used in the onmouseleave of the rating container
	 */
	leave(): void;

	/**
	 * Method to be used to handle the keyboard.
	 *
	 * To be used in the onkeydown of the rating container
	 */
	handleKey(event: KeyboardEvent): void;
}

export type RatingWidget = Widget<RatingProps, RatingState, object, RatingActions, RatingDirectives>;

const defaultConfig: RatingProps = {
	rating: 0,
	tabindex: 0,
	maxRating: 10,
	disabled: false,
	readonly: false,
	resettable: true,
	ariaValueTextFn: (rating: number, maxRating: number) => `${rating} out of ${maxRating}`,
	onHover: noop,
	onLeave: noop,
	onRatingChange: noop,
	className: '',
	ariaLabel: 'Rating',
	ariaLabelledBy: '',
};

/**
 * Returns a shallow copy of the default rating config.
 * @returns a copy of the default config
 */
export function getRatingDefaultConfig() {
	return {...defaultConfig};
}

// TODO export normalize function in utils and test them.
const configValidator: ConfigValidator<RatingProps> = {
	rating: typeNumber,
	tabindex: typeNumber,
	maxRating: {normalizeValue: (value) => (isNumber(value) ? Math.max(0, value) : INVALID_VALUE)},
	disabled: typeBoolean,
	readonly: typeBoolean,
	resettable: typeBoolean,
	ariaValueTextFn: typeFunction,
	onHover: typeFunction,
	onLeave: typeFunction,
	onRatingChange: typeFunction,
	className: typeString,
	ariaLabel: typeString,
	ariaLabelledBy: typeString,
};

/**
 * Create a RatingWidget with given config props
 * @param config - an optional alert config
 * @returns a RatingWidget
 */
export function createRating(config?: PropsConfig<RatingProps>): RatingWidget {
	const [
		{
			// dirty inputs that need adjustment:
			rating$: _dirtyRating$,
			tabindex$: _dirtyTabindex$,

			ariaValueTextFn$,
			onHover$,
			onLeave$,
			onRatingChange$,

			...stateProps
		},
		patch,
	] = writablesForProps(defaultConfig, config, configValidator);

	const {ariaLabel$, ariaLabelledBy$, className$, disabled$, maxRating$, readonly$, resettable$} = stateProps;

	// clean inputs adjustment to valid range
	const tabindex$ = computed(() => (disabled$() ? -1 : _dirtyTabindex$()));

	const rating$ = bindableProp(_dirtyRating$, onRatingChange$, (dirtyRating) => clamp(dirtyRating, maxRating$()));

	// internal inputs
	const _hoveredRating$ = writable(0);

	// computed
	const interactive$ = computed(() => !disabled$() && !readonly$());
	const visibleRating$ = computed(() => {
		const hoveredRating = _hoveredRating$();
		return hoveredRating !== 0 ? hoveredRating : rating$();
	});
	const ariaValueText$ = computed(() => ariaValueTextFn$()(visibleRating$(), maxRating$()));
	const stars$ = computed(() => {
		const visibleRating = visibleRating$();
		return Array.from({length: maxRating$()}, (_v, i) => ({
			fill: Math.round(Math.max(Math.min(visibleRating - i, 1), 0) * 100),
			index: i,
		}));
	});

	const widget: RatingWidget = {
		...stateStores({
			ariaValueText$,
			interactive$,
			rating$,
			stars$,
			tabindex$,
			visibleRating$,
			...stateProps,
		}),
		patch,
		actions: {
			click: (index: number) => {
				if (interactive$() && index > 0 && index <= maxRating$()) {
					rating$.update((rating) => (rating === index && resettable$() ? 0 : index));
				}
			},
			hover: (index: number) => {
				if (interactive$() && index > 0 && index <= maxRating$()) {
					_hoveredRating$.set(index);
					onHover$()(index);
				}
			},
			leave: () => {
				if (interactive$()) {
					onLeave$()(_hoveredRating$());
					_hoveredRating$.set(0);
				}
			},
			handleKey(event: KeyboardEvent) {
				if (interactive$()) {
					const {key} = event;
					switch (key) {
						case 'ArrowLeft':
						case 'ArrowDown':
							rating$.update((rating) => rating - 1);
							break;
						case 'ArrowRight':
						case 'ArrowUp':
							rating$.update((rating) => rating + 1);
							break;
						case 'Home':
						case 'PageDown':
							rating$.set(0);
							break;
						case 'End':
						case 'PageUp':
							rating$.set(maxRating$());
							break;
						default:
							return;
					}
					event.preventDefault();
					event.stopPropagation();
				}
			},
		},
		directives: {
			containerDirective: createAttributesDirective(() => ({
				events: {
					keydown: (e) => widget.actions.handleKey(e),
					mouseleave: () => widget.actions.leave(),
				},
				attributes: {
					role: 'slider',
					class: className$,
					'aria-valuemin': 0,
					tabindex: tabindex$,
					'aria-valuemax': maxRating$,
					'aria-valuenow': visibleRating$,
					'aria-valuetext': ariaValueText$,
					'aria-readonly': computed(() => (readonly$() ? 'true' : undefined)),
					'aria-disabled': computed(() => (disabled$() ? 'true' : undefined)),
					'aria-label': ariaLabel$,
					'aria-labelledby': computed(() => ariaLabelledBy$() || undefined),
				},
				classNames: {
					'au-rating': true,
				},
			})),
			starDirective: createAttributesDirective((starContext$: ReadableSignal<{index: number}>) => {
				return {
					events: {
						mouseenter: () => widget.actions.hover(starContext$().index + 1),
						click: () => widget.actions.click(starContext$().index + 1),
					},
					styles: {
						cursor: computed(() => (interactive$() ? 'pointer' : 'default')),
					},
					classNames: {
						'au-rating-star': true,
					},
				};
			}),
		},
		api: {},
	};

	return widget;
}
