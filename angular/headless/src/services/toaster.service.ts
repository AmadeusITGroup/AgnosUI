import {type ToastProps} from '@agnos-ui/core/components/toast';
import type {ToasterToast, ToasterProps} from '@agnos-ui/core/services/toaster';
import {Toaster as CoreToaster} from '@agnos-ui/core/services/toaster';
import {toAngularSignal, toAngularWritableSignal, type Directive} from '../generated';
import type {Signal, WritableSignal} from '@angular/core';
import {Inject, Injectable, Optional} from '@angular/core';

/**
 * Create a toaster provider with helpers and state.
 * @param props Options for the toaster.
 * @template Props Type of the toast properties.
 * @returns {} Helpers and state for the toaster.
 */
@Injectable({
	providedIn: 'root',
})
export class ToasterService<Props extends Partial<ToastProps>> {
	readonly #toaster: CoreToaster<Props>;
	readonly toasts: Signal<ToasterToast<Props>[]>;
	readonly options: WritableSignal<ToasterProps>;
	addToast: (props: Props) => void;
	removeToast: (id: number) => void;
	eventsDirective: Directive<number>;
	closeAll: () => void;

	constructor(@Optional() @Inject('ToasterProps') options: ToasterProps) {
		this.#toaster = new CoreToaster<Props>(options);
		this.toasts = toAngularSignal(this.#toaster.toasts);
		this.options = toAngularWritableSignal(this.#toaster.options);
		this.addToast = this.#toaster.addToast;
		this.removeToast = this.#toaster.removeToast;
		this.eventsDirective = this.#toaster.eventsDirective;
		this.closeAll = this.#toaster.closeAll;
	}
}
