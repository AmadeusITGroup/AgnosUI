const t=`import type { ConfigValidator, SlotContent, Widget, WidgetFactory, WidgetProps, WidgetSlotContext, WidgetState } from '../types';
/**
 * Type extending the original Widget props and state with ExtraProps
 */
export type ExtendWidgetProps<W extends Widget, ExtraProps extends object> = Widget<ExtendWidgetAdaptSlotWidgetProps<WidgetProps<W>, ExtraProps>, ExtendWidgetAdaptSlotWidgetProps<WidgetState<W>, ExtraProps>, W['api'], W['actions'], W['directives']>;
/**
 * Type replacing the original Props with WidgetSlotContext contaning ExtraProps
 */
export type ExtendWidgetAdaptSlotContentProps<Props extends Record<string, any>, ExtraProps extends object> = Props extends WidgetSlotContext<infer U> ? WidgetSlotContext<ExtendWidgetProps<U, ExtraProps>> & Omit<Props, keyof WidgetSlotContext<any>> : Props;
/**
 * Type enriching the original widget slot Props with ExtraProps slots
 */
export type ExtendWidgetAdaptSlotWidgetProps<Props, ExtraProps extends object> = Omit<Props, \`slot\${string}\`> & ExtraProps & {
    [K in keyof Props & \`slot\${string}\`]: Props[K] extends SlotContent<infer U> ? SlotContent<ExtendWidgetAdaptSlotContentProps<U, ExtraProps>> : Props[K];
};
/**
 * Method to extend the original widget with extra props with validator
 * @param factory - original widget factory
 * @param extraPropsDefaults - object containing default value for each extra prop
 * @param extraPropsConfig - object verifying the type of each extra prop
 * @returns widget factory with the extra props
 */
export declare const extendWidgetProps: <W extends Widget<object, object, object, object, object>, ExtraProps extends object>(factory: WidgetFactory<W>, extraPropsDefaults: ExtraProps, extraPropsConfig?: ConfigValidator<ExtraProps> | undefined) => WidgetFactory<ExtendWidgetProps<W, ExtraProps>>;
`;export{t as default};
