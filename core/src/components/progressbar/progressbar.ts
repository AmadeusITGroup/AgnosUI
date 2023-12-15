import {clamp} from '../../utils/internal/checks';
import {typeBoolean, typeFunction, typeNumber, typeString} from '../../utils/writables';
import {stateStores, writablesForProps} from '../../utils/stores';
import type {ConfigValidator, PropsConfig, SlotContent, Widget, WidgetSlotContext} from '../../types';
import {computed} from '@amadeus-it-group/tansu';
import type {WidgetsCommonPropsAndState} from '../commonProps';

export type ProgressbarContext = WidgetSlotContext<ProgressbarWidget>;

export interface ProgressbarCommonPropsAndState extends WidgetsCommonPropsAndState {
	/**
	 * The minimum value.
	 * @defaultValue 0
	 */
	min: number;
	/**
	 * The maximum value.
	 * @defaultValue 100
	 */
	max: number;
	/**
	 * The current value.
	 * @defaultValue 0
	 */
	value: number;
	/**
	 * The aria label.
	 */
	ariaLabel: string;
	/**
	 * Global template for the Progressbar content.
	 */
	slotContent: SlotContent<ProgressbarContext>;
	/**
	 * Label of the progress.
	 */
	slotDefault: SlotContent<ProgressbarContext>;
	/**
	 * Height of the progressbar, can be any valid css height value.
	 */
	height: string;
	/**
	 * If `true`, shows a striped progressbar.
	 */
	striped: boolean;
	/**
	 * If `true`, animates a striped progressbar.
	 * Takes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.
	 */
	animated: boolean;
}

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

export interface ProgressbarProps extends ProgressbarCommonPropsAndState {
	/**
	 * Return the value for the 'aria-valuetext' attribute.
	 * @param value - current value
	 * @param minimum - minimum value
	 * @param maximum - maximum value
	 */
	ariaValueTextFn: (value: number, minimum: number, maximum: number) => string | undefined;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProgressbarApi {}

export type ProgressbarWidget = Widget<ProgressbarProps, ProgressbarState, ProgressbarApi, object, object>;

const defaultConfig: ProgressbarProps = {
	min: 0,
	max: 100,
	value: 0,
	ariaLabel: 'Progressbar',
	className: '',
	slotContent: undefined,
	slotDefault: undefined,
	height: '',
	striped: false,
	animated: false,
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
	height: typeString,
	striped: typeBoolean,
	animated: typeBoolean,
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
			...stateProps,
		}),
		patch,
		api: {},
		directives: {},
		actions: {},
	};
}
