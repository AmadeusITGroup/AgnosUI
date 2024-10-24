import {clamp} from '../../utils/internal/checks';
import {typeFunction, typeNumber, typeString} from '../../utils/writables';
import {stateStores, writablesForProps} from '../../utils/stores';
import type {ConfigValidator, Directive, PropsConfig, Widget} from '../../types';
import {computed} from '@amadeus-it-group/tansu';
import type {WidgetsCommonPropsAndState} from '../commonProps';
import {createAttributesDirective} from '../../utils/directive';

interface ProgressbarCommonPropsAndState extends WidgetsCommonPropsAndState {
	/**
	 * The minimum value.
	 *
	 * @defaultValue `0`
	 */
	min: number;
	/**
	 * The maximum value.
	 *
	 * @defaultValue `100`
	 */
	max: number;
	/**
	 * The current value.
	 *
	 * @defaultValue `0`
	 */
	value: number;
	/**
	 * The aria label.
	 *
	 * @defaultValue `'Progressbar'`
	 */
	ariaLabel: string;
}

/**
 * Interface representing directives for a progress bar component.
 */
export interface ProgressbarDirectives {
	/**
	 * A directive to be applied to the main container that handles aria attributes.
	 */
	ariaDirective: Directive;
}

/**
 * Represents the state of a progress bar component.
 */
export interface ProgressbarState extends ProgressbarCommonPropsAndState {
	/**
	 * Percentage of completion.
	 */
	percentage: number;
	/**
	 * `true` if the value is above its minimum value.
	 */
	started: boolean;
	/**
	 * `true` if the value has reached its maximum value.
	 */
	finished: boolean;
	/**
	 * The aria value text.
	 */
	ariaValueText: string | undefined;
}

/**
 * Interface representing the properties for the Progressbar component.
 */
export interface ProgressbarProps extends ProgressbarCommonPropsAndState {
	/**
	 * Return the value for the 'aria-valuetext' attribute.
	 * @param value - current value
	 * @param minimum - minimum value
	 * @param maximum - maximum value
	 *
	 * @defaultValue
	 * ```ts
	 * () => undefined
	 * ```
	 */
	ariaValueTextFn: (value: number, minimum: number, maximum: number) => string | undefined;
}

/**
 * Represents a Progressbar widget with specific properties, state, API, and directives.
 */
export type ProgressbarWidget = Widget<ProgressbarProps, ProgressbarState, object, ProgressbarDirectives>;

const defaultConfig: ProgressbarProps = {
	min: 0,
	max: 100,
	value: 0,
	ariaLabel: 'Progressbar',
	className: '',
	ariaValueTextFn: () => undefined,
};

/**
 * Retrieve a shallow copy of the default Progressbar config
 * @returns the default Progressbar config
 */
export function getProgressbarDefaultConfig(): ProgressbarProps {
	return {...defaultConfig};
}

const configValidator: ConfigValidator<ProgressbarProps> = {
	min: typeNumber,
	max: typeNumber,
	value: typeNumber,
	ariaLabel: typeString,
	className: typeString,
	ariaValueTextFn: typeFunction,
};

/**
 * Create an ProgressbarWidget with given config props
 * @param config - an optional progress bar config
 * @returns an ProgressbarWidget
 */
export function createProgressbar(config?: PropsConfig<ProgressbarProps>): ProgressbarWidget {
	const [
		{
			// dirty inputs that need adjustment:
			max$: _dirtyMaximum$,
			value$: _dirtyValue$,
			// clean inputs
			min$,
			ariaValueTextFn$,
			ariaLabel$,
			...stateProps
		},
		patch,
	] = writablesForProps(defaultConfig, config, configValidator);

	const max$ = computed(() => Math.max(min$(), _dirtyMaximum$()));
	const value$ = computed(() => clamp(_dirtyValue$(), max$(), min$()));
	const percentage$ = computed(() => {
		const max = max$();
		const min = min$();
		if (max > min) {
			return clamp(((value$() - min) * 100) / (max - min), 100, 0);
		} else {
			return 0;
		}
	});
	const started$ = computed(() => value$() > min$());
	const finished$ = computed(() => value$() === max$());
	const ariaValueText$ = computed(() => ariaValueTextFn$()(value$(), min$(), max$()));

	return {
		...stateStores({
			min$,
			max$,
			value$,
			percentage$,
			started$,
			finished$,
			ariaValueText$,
			ariaLabel$,
			...stateProps,
		}),
		patch,
		api: {},
		directives: {
			ariaDirective: createAttributesDirective(() => ({
				attributes: {
					role: 'progressbar',
					'aria-label': ariaLabel$,
					'aria-valuenow': value$,
					'aria-valuemin': min$,
					'aria-valuemax': max$,
					'aria-valuetext': ariaValueText$,
				},
			})),
		},
	};
}
