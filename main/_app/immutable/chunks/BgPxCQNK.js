const e=`import { type ToastProps } from '@agnos-ui/core/components/toast';
import type { ToasterToast, ToasterProps } from '@agnos-ui/core/components/toast';
import type { Signal, WritableSignal } from '@angular/core';
import { InjectionToken } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Injection token used to provide configuration properties for the toaster service.
 *
 * This token is associated with the \`ToasterProps\` interface, which defines the
 * structure of the configuration object. It allows dependency injection to supply
 * custom properties for the toaster service, such as default settings or behavior.
 */
export declare const ToastPropsToken: InjectionToken<ToasterProps>;
/**
 * Create a toaster provider with helpers and state.
 * @param props Options for the toaster.
 * @template Props Type of the toast properties.
 */
export declare class ToasterService<Props extends Partial<ToastProps>> {
    #private;
    readonly optionsCore: ToasterProps | null;
    readonly toasts: Signal<ToasterToast<Props>[]>;
    readonly options: WritableSignal<ToasterProps>;
    readonly addToast: (props: Props) => number;
    readonly removeToast: (id: number) => void;
    readonly eventsDirective: import("@agnos-ui/angular-headless").Directive<number>;
    readonly closeAll: () => void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ToasterService<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ToasterService<any>>;
}
`;export{e as default};
