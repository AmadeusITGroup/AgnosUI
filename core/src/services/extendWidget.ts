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
 */
export type ExtendWidgetProps<W extends Widget, ExtraProps extends object, ExtraDirectives extends object = object> = Widget<
	ExtendWidgetAdaptSlotWidgetProps<WidgetProps<W>, ExtraProps, ExtraDirectives>,
	ExtendWidgetAdaptSlotWidgetProps<WidgetState<W>, ExtraProps, ExtraDirectives>,
	W['api'],
	W['actions'],
	ExtendWidgetInterfaces<W['directives'], ExtraDirectives>
>;

/**
 * Type merging the passed interfaces together
 */
export type ExtendWidgetInterfaces<Interfaces, ExtraInterfaces> = Interfaces & ExtraInterfaces;

/**
 * Type replacing the original Props with WidgetSlotContext contaning ExtraProps
 */
export type ExtendWidgetAdaptSlotContentProps<Props extends Record<string, any>, ExtraProps extends object, ExtraDirectives extends object> =
	Props extends WidgetSlotContext<infer U>
		? WidgetSlotContext<ExtendWidgetProps<U, ExtraProps, ExtraDirectives>> & Omit<Props, keyof WidgetSlotContext<any>>
		: Props;

/**
 * Type enriching the original widget slot Props with ExtraProps slots
 */
export type ExtendWidgetAdaptSlotWidgetProps<Props, ExtraProps extends object, ExtraDirectives extends object> = ExtraProps & {
	[K in keyof Props]: IsSlotContent<Props[K]> extends SlotContent<infer U>
		? SlotContent<ExtendWidgetAdaptSlotContentProps<U, ExtraProps, ExtraDirectives>>
		: Props[K];
};

/**
 * Method to extend the original widget with extra props with validator
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
