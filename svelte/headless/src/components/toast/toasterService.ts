import type {Directive} from '../../generated';
import type {ToastProps, ToasterToast, ToasterProps, ToastPositions} from '@agnos-ui/core/components/toast';
import {Toaster as CoreToaster} from '@agnos-ui/core/components/toast';
import {fromStore} from 'svelte/store';
export {defaultToasterProps} from '@agnos-ui/core/components/toast';

export {ToasterProps};
export type {ToastPositions};

/**
 * Create a toaster provider with helpers and state.
 * @param props Options for the toaster.
 * @template Props Type of the toast properties.
 */
export class Toaster<Props extends Partial<ToastProps>> {
	readonly #toaster: CoreToaster<Props>;
	readonly toasts: {current: ToasterToast<Props>[]};
	readonly options: {current: ToasterProps};
	readonly addToast: (props: Props) => number;
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
