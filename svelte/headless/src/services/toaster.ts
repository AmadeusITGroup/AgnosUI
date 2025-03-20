import {type ToastProps} from '@agnos-ui/core/components/toast';
import type {ToasterToast, ToasterProps, ToastPositions} from '@agnos-ui/core/services/toaster';
import {Toaster as CoreToaster} from '@agnos-ui/core/services/toaster';
import {fromStore} from 'svelte/store';
import type {Directive} from '../generated';

import {defaultToasterProps} from '@agnos-ui/core/services/toaster';
export {defaultToasterProps, ToasterProps};
export type {ToastPositions};

/**
 * Create a toaster provider with helpers and state.
 * @param props Options for the toaster.
 * @template Props Type of the toast properties.
 * @returns {} Helpers and state for the toaster.
 */
export class Toaster<Props extends Partial<ToastProps>> {
	readonly #toaster: CoreToaster<Props>;
	readonly toasts: {current: ToasterToast<Props>[]};
	readonly options: {current: ToasterProps};
	readonly addToast: (props: Props) => void;
	readonly removeToast: (id: number) => void;
	readonly eventsDirective: Directive<number>;
	readonly closeAll: () => void;

	constructor(options?: ToasterProps) {
		this.#toaster = new CoreToaster<Props>(options);
		this.toasts = fromStore(this.#toaster.toasts);
		this.options = fromStore(this.#toaster.options);
		this.addToast = this.#toaster.addToast;
		this.removeToast = this.#toaster.removeToast;
		this.eventsDirective = this.#toaster.eventsDirective;
		this.closeAll = this.#toaster.closeAll;
	}
}
