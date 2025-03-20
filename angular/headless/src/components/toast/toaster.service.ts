import {type ToastProps} from '@agnos-ui/core/components/toast';
import type {ToasterToast, ToasterProps} from '@agnos-ui/core/components/toast';
import {Toaster as CoreToaster} from '@agnos-ui/core/components/toast';
import {toAngularSignal, toAngularWritableSignal} from '../../generated';
import type {Signal, WritableSignal} from '@angular/core';
import {inject, Injectable, InjectionToken} from '@angular/core';

import type {ToastPositions} from '@agnos-ui/core/components/toast';
export type {ToastPositions};

export const ToastPropsToken = new InjectionToken<ToasterProps>('ToasterProps');

/**
 * Create a toaster provider with helpers and state.
 * @param props Options for the toaster.
 * @template Props Type of the toast properties.
 */
@Injectable({
	providedIn: 'root',
})
export class ToasterService<Props extends Partial<ToastProps>> {
	readonly optionsCore = inject(ToastPropsToken, {optional: true});
	readonly #toaster: CoreToaster<Props> = new CoreToaster<Props>(this.optionsCore ?? undefined);
	readonly toasts: Signal<ToasterToast<Props>[]> = toAngularSignal(this.#toaster.toasts);
	readonly options: WritableSignal<ToasterProps> = toAngularWritableSignal(this.#toaster.options);
	readonly addToast = this.#toaster.addToast;
	readonly removeToast = this.#toaster.removeToast;
	readonly eventsDirective = this.#toaster.eventsDirective;
	readonly closeAll = this.#toaster.closeAll;
}
