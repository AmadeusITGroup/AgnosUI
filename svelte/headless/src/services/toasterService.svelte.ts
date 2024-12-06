import {createAttributesDirective} from '@agnos-ui/core/utils/directive';
import {type ToastProps} from '@agnos-ui/core/components/toast';

export enum ToastPositions {
	topLeft = 'top-0 start-0',
	topCenter = 'top-0 start-50 translate-middle-x',
	topRight = 'top-0 end-0',
	middleLeft = 'top-50 start-0 translate-middle-y',
	middleCenter = 'top-50 start-50 translate-middle',
	middleRight = 'top-50 end-0 translate-middle-y',
	bottomLeft = 'bottom-0 start-0',
	bottomCenter = 'bottom-0 start-50 translate-middle-x',
	bottomRight = 'bottom-0 end-0',
}

/**
 * Props of the toaster
 */
export interface ToasterProps {
	/** How much time a toast is displayed; 0 means it won't be removed until a manual action */
	duration: number;
	/** Where to position the toasts */
	position: ToastPositions;
	/** Limit the number of toasts at the same time */
	limit?: number;
	/**  Pause toast when hover??? */
	pauseOnHover?: boolean;
	/** Display a dismiss button on each toast. When duration = 0, this is enforced to true */
	dismissible: boolean;
	/** Add a button to close all the toasts at once */
	closeAll?: boolean;
	/** Close all label */
	closeAllLabel?: string;
}

/**
 * Toast object
 * @template Props Type of the toast properties.
 */
export interface Toast<Props> {
	/** Identifier of the toasts in the toaster */
	id: number;
	/** Properties of the toast */
	props: Props;
}

const defaults: ToasterProps = {
	duration: 5000,
	position: ToastPositions.bottomRight,
	dismissible: false,
};

/**
 * Create a toaster provider with helpers and state.
 * @param props Options for the toaster.
 * @template Props Type of the toast properties.
 * @returns {} Helpers and state for the toaster.
 */
export class Toaster<Props = ToastProps> {
	idCount = 0;
	readonly #toasts: Toast<Props>[] = $state([]);
	options: ToasterProps = $state(defaults);
	readonly #timers = $state(new Map<number, {timeout: ReturnType<typeof setTimeout>; started: number; paused?: number; duration?: number}>());
	constructor(props?: Partial<ToasterProps>) {
		this.options = {
			...defaults,
			...props,
		};
		$effect.root(() => {
			$effect(() => this.updateToasts());
		});
	}

	/**
	 * Get the toasts in the toaster
	 * @returns Toasts
	 */
	get toasts() {
		return this.#toasts;
	}

	/**
	 * Add timer for a toast
	 * @param id Id of the toast
	 * @param duration Duration of the timer, by default taken from options
	 */
	addTimer = (id: number, duration = this.options.duration) => {
		if (duration > 0) {
			this.#timers.set(id, {
				timeout: setTimeout(() => this.removeToast(id), duration),
				started: performance.now(),
			});
		}
	};

	/**
	 * Pause a timer for a toast
	 * @param id Id of the toast
	 */
	pauseTimer = (id: number) => {
		if (this.#timers.has(id)) {
			const timer = this.#timers.get(id);
			if (timer) {
				clearTimeout(timer.timeout);
				timer.paused = performance.now();
			}
		}
	};

	/**
	 * Resume a timer for a toast
	 * @param id Id of the toast
	 */
	resumeTimer = (id: number) => {
		if (this.#timers.has(id)) {
			const timer = this.#timers.get(id);
			if (timer) {
				const paused = timer.paused ?? timer.started;
				const elapsed = paused - timer.started - (timer.duration ?? 0);
				const remaining = this.options.duration - elapsed;
				this.addTimer(id, remaining);
				timer.duration = (timer.duration ?? 0) + performance.now() - paused;
				timer.paused = undefined;
			}
		}
	};

	/**
	 * Events directive is used to set events on the Toast component, to keep track for example of pointer enter/leave,
	 * used to pause / resume the timer in case of duration and pauseOnHover are specified.
	 */
	eventsDirective = createAttributesDirective<number>((id) => ({
		events: {
			pointerenter: () => this.options.pauseOnHover && this.pauseTimer(id()),
			pointerleave: () => this.options.pauseOnHover && this.resumeTimer(id()),
		},
	}));

	/**
	 * Helper to add a toast to the viewport.
	 * @param props Options for the toast. //TODO: Simplify ans expose only useful properties to avoid re-exporting the service
	 */
	addToast = (props: Props) => {
		this.#toasts.push({id: this.idCount++, props});
		this.addTimer(this.idCount - 1);
	};

	/**
	 * Helper to remove a toast to the viewport.
	 * @param id Id of the toast to remove.
	 */
	removeToast = (id: number) => {
		this.#toasts.splice(
			this.#toasts.findIndex((t) => t.id === id),
			1,
		);
	};

	/** Helper to update toasts when options change */
	updateToasts = () => {
		if (this.options.duration === 0) {
			this.options.dismissible = true;
		}
	};

	/** Helper to close all toasts at once */
	closeAll() {
		this.#toasts.splice(0, this.#toasts.length);
	}
}
