import {batch, computed} from '@amadeus-it-group/tansu';
import {isStore, stateStores, writablesWithDefault} from '../utils/stores';
import type {
	ConfigValidator,
	IsSlotContent,
	PropsConfig,
	SlotContent,
	Widget,
	WidgetFactory,
	WidgetProps,
	WidgetSlotContext,
	WidgetState,
} from '../types';

/**
 * Type extending the original Widget props and state with ExtraProps
 *
 * @template W - The base widget type to be extended.
 * @template ExtraProps - Additional properties to be added to the widget.
 * @template ExtraDirectives - Additional directives to be added to the widget. Defaults to an empty object.
 */
export type ExtendWidgetProps<W extends Widget, ExtraProps extends object, ExtraDirectives extends object = object> = Widget<
	ExtendWidgetAdaptSlotWidgetProps<WidgetProps<W>, ExtraProps, ExtraDirectives>,
	ExtendWidgetAdaptSlotWidgetProps<WidgetState<W>, ExtraProps, ExtraDirectives>,
	W['api'],
	ExtendWidgetInterfaces<W['directives'], ExtraDirectives>
>;

/**
 * Combines two interface types into a single type.
 *
 * @template Interfaces - The base interface type.
 * @template ExtraInterfaces - The additional interface type to extend the base interface.
 * @typedef {Interfaces & ExtraInterfaces} ExtendWidgetInterfaces - The resulting type that includes properties from both Interfaces and ExtraInterfaces.
 */
export type ExtendWidgetInterfaces<Interfaces, ExtraInterfaces> = Interfaces & ExtraInterfaces;

/**
 * Type to adapt the slot content properties of a widget by extending its props, extra props, and extra directives.
 *
 * @template Props - The original properties of the widget slot context.
 * @template ExtraProps - Additional properties to extend the widget slot context.
 * @template ExtraDirectives - Additional directives to extend the widget slot context.
 *
 * @remarks
 * This type conditionally checks if `Props` extends `WidgetSlotContext` and, if so, extends the widget slot context
 * with additional properties and directives while omitting the original widget slot context properties.
 */
export type ExtendWidgetAdaptSlotContentProps<Props extends Record<string, any>, ExtraProps extends object, ExtraDirectives extends object> =
	Props extends WidgetSlotContext<infer U>
		? WidgetSlotContext<ExtendWidgetProps<U, ExtraProps, ExtraDirectives>> & Omit<Props, keyof WidgetSlotContext<any>>
		: Props;

/**
 * Type definition for extending widget properties with additional properties and directives.
 *
 * This type takes three generic parameters:
 * - `Props`: The original properties of the widget.
 * - `ExtraProps`: Additional properties to be merged with the original properties.
 * - `ExtraDirectives`: Additional directives to be merged with the original properties.
 *
 * The resulting type combines `ExtraProps` with the original `Props`. For each property in `Props`,
 * if the property is of type `SlotContent`, it will be extended with the additional properties and directives.
 *
 * @template Props - The original properties of the widget.
 * @template ExtraProps - Additional properties to be merged with the original properties.
 * @template ExtraDirectives - Additional directives to be merged with the original properties.
 */
export type ExtendWidgetAdaptSlotWidgetProps<Props, ExtraProps extends object, ExtraDirectives extends object> = ExtraProps & {
	[K in keyof Props]: IsSlotContent<Props[K]> extends SlotContent<infer U>
		? SlotContent<ExtendWidgetAdaptSlotContentProps<U, ExtraProps, ExtraDirectives>>
		: Props[K];
};

/**
 * Method to extend the original widget with extra props with validator
 *
 * @template W - The type of the widget.
 * @template ExtraProps - The type of the additional properties.
 * @template ExtraDirectives - The type of the additional directives (default is an empty object).
 *
 * @param factory - original widget factory
 * @param extraPropsDefaults - object containing default value for each extra prop
 * @param extraPropsConfig - object verifying the type of each extra prop
 * @param overrideDefaults - object overriding some default props of the widget to extend
 * @returns widget factory with the extra props
 */
export const extendWidgetProps =
	<W extends Widget, ExtraProps extends object, ExtraDirectives extends object = object>(
		factory: WidgetFactory<W>,
		extraPropsDefaults: ExtraProps,
		extraPropsConfig?: ConfigValidator<ExtraProps>,
		overrideDefaults?: Partial<WidgetState<W>>,
	): WidgetFactory<ExtendWidgetProps<W, ExtraProps, ExtraDirectives>> =>
	(propsConfig) => {
		const extraPropsWritables = writablesWithDefault(extraPropsDefaults, propsConfig as PropsConfig<ExtraProps>, extraPropsConfig);
		const propsConfigConfig = propsConfig?.config;
		const config = isStore(propsConfigConfig)
			? computed(() => ({...overrideDefaults, ...propsConfigConfig()}))
			: {...overrideDefaults, ...(propsConfigConfig ?? {})};
		const widget = factory({props: propsConfig?.props as any, config});
		return {
			...widget,
			...(stateStores({...widget.stores, ...extraPropsWritables}) as any),
			patch: (storesValues) =>
				batch(() => {
					let widgetProps: any;
					for (const [name, value] of Object.entries(storesValues ?? {})) {
						const extraPropsStore = (extraPropsWritables as any)[`${name}$`];
						if (extraPropsStore) {
							extraPropsStore.set(value);
						} else {
							if (!widgetProps) {
								widgetProps = {};
							}
							widgetProps[name] = value;
						}
					}
					if (widgetProps) {
						widget.patch(widgetProps);
					}
				}),
		};
	};
