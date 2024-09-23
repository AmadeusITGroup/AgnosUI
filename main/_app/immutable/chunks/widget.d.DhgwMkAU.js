const e=`import { type ReadableSignal } from '@amadeus-it-group/tansu';
import type { OnChanges, OnInit, Signal, SimpleChanges } from '@angular/core';
import { type AngularWidget, type ContextWidget, type Widget, type WidgetFactory, type WidgetProps, type WidgetState } from '../types';
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
 * @returns the widget
 */
export declare const callWidgetFactoryWithConfig: <W extends Widget>({ factory, defaultConfig, widgetConfig, events, afterInit, }: {
    factory: WidgetFactory<W>;
    defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
    widgetConfig?: null | undefined | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
    events?: Partial<Pick<WidgetProps<W>, keyof WidgetProps<W> & \`on\${string}\`>>;
    afterInit?: () => void;
}) => AngularWidget<W>;
export declare abstract class BaseWidgetDirective<W extends Widget> implements OnChanges, OnInit {
    protected abstract readonly _widget: AngularWidget<W>;
    /**
     * Retrieves the widget api
     * @returns the widget api
     */
    get api(): W['api'];
    /**
     * Retrieves the widget state as an Angular {@link Signal}
     * @returns the widget state
     */
    get state(): Signal<WidgetState<W>>;
    /**
     * Retrieves the widget
     * @returns the widget
     */
    get widget(): ContextWidget<W>;
    /** @inheritdoc */
    ngOnChanges(changes: SimpleChanges): void;
    /** @inheritdoc */
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<BaseWidgetDirective<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<BaseWidgetDirective<any>, never, never, {}, {}, never, never, false, never>;
}
`;export{e as default};
