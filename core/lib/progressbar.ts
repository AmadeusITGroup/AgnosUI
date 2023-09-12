import {clamp} from './services/checks';
import type {ConfigValidator, PropsConfig} from './services';
import {bindableDerived, stateStores, typeBoolean, typeNumber, typeString, writablesForProps} from './services';
import type {SlotContent, Widget, WidgetSlotContext} from './types';
import {computed, readable} from '@amadeus-it-group/tansu';
import {noop} from './utils';
import type {WidgetsCommonPropsAndState} from './commonProps';

export type ProgressbarContext = WidgetSlotContext<ProgressbarWidget>;

export interface ProgressbarCommonPropsAndState extends WidgetsCommonPropsAndState {
	/**
	 * the minimum value
	 * @defaultValue 0
	 */
	min: number;
	/**
	 * the maximum value
	 * @defaultValue 100
	 */
	max: number;
	/**
	 * the current value
	 * @defaultValue 0
	 */
	value: number;
	/**
	 * the aria label
	 */
	ariaLabel: string;
	/**
	 * global template for the Progressbar content
	 */
	slotContent: SlotContent<ProgressbarContext>;
	/**
	 * label of the progress
	 */
	slotDefault: SlotContent<ProgressbarContext>;
	/**
	 * height of the progressbar, can be any valid css height value
	 */
	height: string;
	/**
	 * if `true`, display the current percentage in the `xx%` format
	 */
	showValue: boolean;
	/**
	 * if `true`, shows a striped progressbar
	 */
	striped: boolean;
	/**
	 * if `true`, animates a striped progressbar
	 */
	animated: boolean;
}

export interface ProgressbarState extends ProgressbarCommonPropsAndState {
	/**
	 * percentage of completion
	 */
	percentage: number;
	/**
	 * `true` if the value is above its minimum value
	 */
	started: boolean;
	/**
	 * `true` if the value has reached its maximum value
	 */
	finished: boolean;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProgressbarProps extends ProgressbarCommonPropsAndState {}

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
	showValue: false,
	striped: false,
	animated: false,
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
	showValue: typeBoolean,
	striped: typeBoolean,
	animated: typeBoolean,
};

/**
 * Create an ProgressbarWidget with given config props
 * @param config - an optional progress bar config
 * @returns an ProgressbarWidget
 */
export function createProgressbar(config?: PropsConfig<ProgressbarProps>): ProgressbarWidget {
	const [
		{
			min$,
			max$: _dirtyMaximum$,
			// dirty value that needs adjustment:
			value$: _dirtyValue$,
			...stateProps
		},
		patch,
	] = writablesForProps(defaultConfig, config, configValidator);

	const max$ = bindableDerived(readable(noop), [_dirtyMaximum$, min$], ([dirtyMaximum, minimum]) => Math.max(minimum, dirtyMaximum));
	const value$ = bindableDerived(readable(noop), [_dirtyValue$, min$, max$], ([dirtyValue, min, max]) => clamp(dirtyValue, max, min));
	const percentage$ = computed(() => (max$() > min$() ? clamp(((value$() - min$()) * 100) / (max$() - min$()), 100, 0) : 0));
	const started$ = computed(() => value$() > min$());
	const finished$ = computed(() => value$() === max$());

	return {
		...stateStores({
			min$,
			max$,
			value$,
			percentage$,
			started$,
			finished$,
			...stateProps,
		}),
		patch,
		api: {},
		directives: {},
		actions: {},
	};
}
