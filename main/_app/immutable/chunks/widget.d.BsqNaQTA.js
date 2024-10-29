const e=`import { type ReadableSignal } from '@amadeus-it-group/tansu';
import type { AfterContentChecked, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import type { AngularState, AngularWidget, IsSlotContent, SlotContent, Widget, WidgetFactory, WidgetProps } from '../types';
import * as i0 from "@angular/core";
/**
 * Call a widget factory using provided configs.
 *
 * @param parameter - the parameter
 * @param parameter.factory - the widget factory to call
 * @param parameter.defaultConfig - the default config of the widget
 * @param parameter.widgetConfig - the config of the widget, overriding the defaultConfig
 * @param parameter.events - the events of the widget
 * @param parameter.afterInit - a callback to call after successful setup of the widget
 * @param parameter.slotTemplates - a function to provide all slot templates using child queries
 * @param parameter.slotChildren - a function to provide the default children slot using a view query
 * @returns the widget
 */
export declare const callWidgetFactoryWithConfig: <W extends Widget>({ factory, defaultConfig, widgetConfig, events, afterInit, slotTemplates, slotChildren, }: {
    factory: WidgetFactory<W>;
    defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
    widgetConfig?: null | undefined | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
    events?: Partial<Pick<WidgetProps<W>, keyof WidgetProps<W> & \`on\${string}\`>>;
    afterInit?: (widget: AngularWidget<W>) => void;
    slotTemplates?: () => { [K in keyof WidgetProps<W> as IsSlotContent<WidgetProps<W>[K]> extends 0 ? never : K]: WidgetProps<W>[K] extends SlotContent<infer U> ? TemplateRef<U> | undefined : never; };
    slotChildren?: () => TemplateRef<void> | undefined;
}) => AngularWidget<W>;
/**
 * An abstract base class for widget directives, providing common functionality
 * for Angular components that interact with widgets.
 *
 * @template W - The type of the widget.
 */
export declare abstract class BaseWidgetDirective<W extends Widget> implements OnChanges, OnInit, AfterContentChecked {
    private readonly _widget;
    constructor(_widget: AngularWidget<W>);
    /**
     * Retrieves the widget api
     * @returns the widget api
     */
    get api(): W['api'];
    /**
     * Retrieves the widget state as an Angular {@link https://angular.dev/api/core/Signal | Signal}
     * @returns the widget state
     */
    get state(): AngularState<W>;
    /**
     * Retrieves the widget directives
     * @returns the widget directives
     */
    get directives(): W['directives'];
    /**
     * @inheritdoc
     * @internal
     */
    ngOnChanges(changes: SimpleChanges): void;
    /** @internal */
    ngOnInit(): void;
    /** @internal */
    ngAfterContentChecked(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseWidgetDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BaseWidgetDirective<any>, never, never, {}, {}, never, never, false, never>;
}
`;export{e as default};
