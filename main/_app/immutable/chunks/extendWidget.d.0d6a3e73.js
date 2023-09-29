const t=`import type { ConfigValidator } from './services/stores';
import type { Widget, WidgetFactory, WidgetProps, WidgetState } from './types';
export declare const extendWidgetProps: <W extends Widget<object, object, object, object, object>, ExtraProps extends object>(factory: WidgetFactory<W>, extraPropsDefaults: ExtraProps, extraPropsConfig?: ConfigValidator<ExtraProps> | undefined) => WidgetFactory<Widget<WidgetProps<W> & ExtraProps, WidgetState<W> & ExtraProps, W["api"], W["actions"], W["directives"]>>;
`;export{t as default};
