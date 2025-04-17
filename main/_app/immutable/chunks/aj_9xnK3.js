const e=`import { type ReadableSignal } from '@amadeus-it-group/tansu';
import type { AfterContentChecked, OnChanges, OnInit, SimpleChanges, TemplateRef } from '@angular/core';
import type { AngularState, AngularWidget, IsSlotContent, SlotContent, Widget, WidgetFactory, WidgetProps } from '../types';
import * as i0 from "@angular/core";
/**
 * Call a widget factory using provided configs.
 *
 * The resulting widget can be easily hooked into the lifecycle of an Angular component through {@link BaseWidgetDirective}.
 *
 * @param factory - the widget factory to call
 * @param options - the options
 * @param options.defaultConfig - the default config of the widget
 * @param options.widgetConfig - the config of the widget, overriding the defaultConfig
 * @param options.events - the events of the widget
 * @param options.afterInit - a callback to call after successful setup of the widget
 * @param options.slotTemplates - a function to provide all slot templates using child queries
 * @param options.slotChildren - a function to provide the default children slot using a view query
 * @returns the widget
 */
export declare const callWidgetFactoryWithConfig: <W extends Widget>(factory: WidgetFactory<W>, options?: {
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
     * Retrieves the widget state. Each property of the state is exposed through an Angular {@link https://angular.dev/api/core/Signal | Signal}
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
    static ɵdir: i0.ɵɵDirectiveDeclaration<BaseWidgetDirective<any>, never, never, {}, {}, never, never, true, never>;
}
`;export{e as default};
