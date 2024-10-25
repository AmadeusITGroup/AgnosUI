import {ToastPositions} from '@agnos-ui/common/samples/toast/toast-positions.enum';
import type {ToastProps} from '@agnos-ui/svelte-bootstrap/components/toast';

export class ToastService {
	// eslint-disable-next-line @typescript-eslint/prefer-readonly
	#toasts = $state(Object.fromEntries(Object.values(ToastPositions).map((entry) => [entry as string, [] as Partial<ToastProps>[]])));

	get toasts() {
		return this.#toasts;
	}

	readonly add = (toast: Partial<ToastProps>) => this.#toasts[toast.className!].push(toast);
	readonly remove = (toast: Partial<ToastProps>) => this.#toasts[toast.className!].splice(this.#toasts[toast.className!].indexOf(toast), 1);
}
