import type {ConfigValidator, PropsConfig, Widget, WidgetFactory} from '@agnos-ui/core/types';
import {true$, writablesForProps} from '@agnos-ui/core/utils/stores';
import {createAttributesDirective, mergeDirectives} from '@agnos-ui/core/utils/directive';
import {typeBoolean, typeString} from '@agnos-ui/core/utils/writables';
import {collapseHorizontalTransition, collapseVerticalTransition} from '../../services/transitions/collapse';
import {asWritable, batch, computed} from '@amadeus-it-group/tansu';
import {createWidgetFactory} from '@agnos-ui/core/utils/widget';
import {createCollapse as coreCreateCollapse, getCollapseDefaultConfig as getCoreDefaultConfig} from '@agnos-ui/core/components/collapse';
import type {CollapseProps as CoreCollapseProps, CollapseApi, CollapseState, CollapseDirectives} from '@agnos-ui/core/components/collapse';

export * from '@agnos-ui/core/components/collapse';

interface CollapseExtraProps {
	/**
	 * CSS classes to be applied on the widget main container
	 *
	 * @defaultValue `''`
	 */
	className: string;
	/**
	 * If `true`, collapse will be done horizontally.
	 *
	 * @defaultValue `false`
	 */
	horizontal: boolean;
}

/**
 * Properties for the Collapse component.
 */
export interface CollapseProps extends Omit<CoreCollapseProps, 'transition'>, CollapseExtraProps {}

/**
 * Represents a widget for handling collapse functionality.
 *
 * This type defines the structure of a CollapseWidget, which includes properties, state, API, and directives
 * necessary for managing the collapse behavior in the UI.
 *
 * @type {Widget<CollapseProps, CollapseState, CollapseApi, CollapseDirectives>}
 */
export type CollapseWidget = Widget<CollapseProps, CollapseState, CollapseApi, CollapseDirectives>;

const defaultConfigExtraProps: CollapseExtraProps = {
	className: '',
	horizontal: false,
};

const configValidator: ConfigValidator<CollapseExtraProps> = {
	horizontal: typeBoolean,
	className: typeString,
};

/**
 * Retrieve a shallow copy of the default collapse config
 * @returns the default collapse config
 */
export function getCollapseDefaultConfig(): CollapseProps {
	return {...getCoreDefaultConfig(), ...defaultConfigExtraProps} as any;
}

/**
 * Create an CollapseWidget with given config props
 * @param config - an optional collapse config
 * @returns an CollapseWidget
 */
export const createCollapse: WidgetFactory<CollapseWidget> = createWidgetFactory('collapse', (config?: PropsConfig<CollapseProps>) => {
	const [{horizontal$, className$}, patch] = writablesForProps(defaultConfigExtraProps, config as PropsConfig<CollapseExtraProps>, configValidator);

	const transitionFn$ = asWritable(computed(() => (horizontal$() ? collapseHorizontalTransition : collapseVerticalTransition)));

	const widget = coreCreateCollapse({...(config ?? {}), props: {...(config?.props ?? {}), transition: transitionFn$}});

	return {
		...widget,
		patch: (storesValues) =>
			batch(() => {
				widget.patch(storesValues);
				patch(storesValues);
			}),
		directives: {
			...widget.directives,
			collapseDirective: mergeDirectives(
				widget.directives.collapseDirective,
				createAttributesDirective(() => ({
					attributes: {
						class: className$,
					},
					classNames: {
						'au-collapse': true$,
					},
				})),
			),
		},
	};
});
