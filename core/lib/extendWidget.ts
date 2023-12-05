import {batch} from '@amadeus-it-group/tansu';
import type {ConfigValidator} from './services/stores';
import {stateStores, writablesWithDefault} from './services/stores';
import type {PropsConfig, Widget, WidgetFactory, WidgetProps, WidgetState} from './types';

export const extendWidgetProps =
	<W extends Widget, ExtraProps extends object>(
		factory: WidgetFactory<W>,
		extraPropsDefaults: ExtraProps,
		extraPropsConfig?: ConfigValidator<ExtraProps>,
	): WidgetFactory<Widget<WidgetProps<W> & ExtraProps, WidgetState<W> & ExtraProps, W['api'], W['actions'], W['directives']>> =>
	(propsConfig) => {
		const extraPropsWritables = writablesWithDefault(extraPropsDefaults, propsConfig as PropsConfig<ExtraProps>, extraPropsConfig);
		const widget = factory(propsConfig);
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
