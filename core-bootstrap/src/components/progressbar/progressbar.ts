import type {
	ProgressbarDirectives,
	ProgressbarState as CoreState,
	ProgressbarProps as CoreProps,
	ProgressbarApi,
} from '@agnos-ui/core/components/progressbar';
import {createProgressbar as createCoreProgressbar, getProgressbarDefaultConfig as getCoreDefaultConfig} from '@agnos-ui/core/components/progressbar';
import type {ConfigValidator, SlotContent, Widget, WidgetFactory, WidgetSlotContext} from '@agnos-ui/core/types';
import {typeBoolean, typeString} from '@agnos-ui/core/utils/writables';
import {extendWidgetProps} from '@agnos-ui/core/services/extendWidget';
import type {BSContextualClass} from '../../types';

export * from '@agnos-ui/core/components/progressbar';

export type ProgressbarContext = WidgetSlotContext<ProgressbarWidget>;

interface ProgressbarExtraProps {
	/**
	 * Global template for the Progressbar.
	 */
	structure: SlotContent<ProgressbarContext>;
	/**
	 * Label of the progress.
	 */
	children: SlotContent<ProgressbarContext>;
	/**
	 * Height of the progressbar, can be any valid css height value.
	 *
	 * @defaultValue `''`
	 */
	height: string;
	/**
	 * If `true`, shows a striped progressbar.
	 *
	 * @defaultValue `false`
	 */
	striped: boolean;
	/**
	 * If `true`, animates a striped progressbar.
	 * Takes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.
	 *
	 * @defaultValue `false`
	 */
	animated: boolean;
	/**
	 * Type of the progressbar, following bootstrap types.
	 */
	type: BSContextualClass | undefined;
}

export interface ProgressbarState extends CoreState, ProgressbarExtraProps {}
export interface ProgressbarProps extends CoreProps, ProgressbarExtraProps {}

export type ProgressbarWidget = Widget<ProgressbarProps, ProgressbarState, ProgressbarApi, object, ProgressbarDirectives>;

const defaultConfigExtraProps: ProgressbarExtraProps = {
	structure: undefined,
	children: undefined,
	height: '',
	striped: false,
	animated: false,
	type: undefined,
};

const configValidator: ConfigValidator<ProgressbarExtraProps> = {
	height: typeString,
	striped: typeBoolean,
	animated: typeBoolean,
	type: typeString as any,
};

/**
 * Retrieve a shallow copy of the default Progressbar config
 * @returns the default Progressbar config
 */
export function getProgressbarDefaultConfig(): ProgressbarProps {
	return {...getCoreDefaultConfig(), ...defaultConfigExtraProps} as any;
}

/**
 * Create a Progressbar with given config props
 * @param config - an optional progressbar config
 * @returns a ProgressbarWidget
 */

export const createProgressbar: WidgetFactory<ProgressbarWidget> = extendWidgetProps(createCoreProgressbar, defaultConfigExtraProps, configValidator);
