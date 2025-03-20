import {createAttributesDirective} from '../utils/directive';
import {type ToastProps} from '../components/toast';
import {computed, writable} from '@amadeus-it-group/tansu';
import type {Directive} from '../types';

/**
 * Represents the possible positions for displaying a toast notification.
 *
 * The positions are defined based on a grid layout with three horizontal
 * alignments (left, center, right) and three vertical alignments (top, middle, bottom).
 *
 * Available positions:
 * - `topLeft`: Top-left corner of the screen.
 * - `topCenter`: Top-center of the screen.
 * - `topRight`: Top-right corner of the screen.
 * - `middleLeft`: Middle-left side of the screen.
 * - `middleCenter`: Center of the screen.
 * - `middleRight`: Middle-right side of the screen.
 * - `bottomLeft`: Bottom-left corner of the screen.
 * - `bottomCenter`: Bottom-center of the screen.
 * - `bottomRight`: Bottom-right corner of the screen.
 */
export type ToastPositions =
	| 'topLeft'
	| 'topCenter'
	| 'topRight'
	| 'middleLeft'
	| 'middleCenter'
	| 'middleRight'
	| 'bottomLeft'
	| 'bottomCenter'
	| 'bottomRight';

/**
 * Props of the toaster
 */
export interface ToasterProps {
	/** How much time (ms) a toast is displayed; 0 means it won't be removed until a manual action */
	duration: number;
	/** Where to position the toasts */
	position: ToastPositions;
	/** Maximum number of toasts displayed */
	limit?: number;
	/**  Pause toast when hover */
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
export interface ToasterToast<Props> {
	/** Identifier of the toasts in the toaster */
	id: number;
	/** Properties of the toast */
	props: Props;
}

/**
 * Represents a timer used by the toaster service.
 */
export interface ToasterTimer {
	/**
	 * The timeout identifier returned by `setTimeout`.
	 */
	timeout: ReturnType<typeof setTimeout> | null;

	/**
	 * The timestamp when the timer was started.
	 */
	started: number;

	/**
	 * The timestamp when the timer was paused (optional).
	 */
	paused?: number;

	/**
	 * The duration for which the timer is set (optional). Used internally to compute the remaining time.
	 */
	duration: number;
}

export const defaultToasterProps: ToasterProps = {
	duration: 5000,
	position: 'bottomRight',
	dismissible: false,
};

/**
 * Create a toaster provider with helpers and state.
 * @param props Options for the toaster.
 * @template Props Type of the toast properties.
 */
export class Toaster<Props extends Partial<ToastProps> = ToastProps> {
	#idCount = 0;
	readonly #toasts = writable<ToasterToast<Props>[]>([]);

	/**
	 * Get the toasts value from the store
	 * @returns The array of toasts.
	 */
	readonly toasts = computed(() =>
			this.#toasts()
				.sort((a, b) => b.id - a.id)
				.slice(0, this.options().limit),
	);

	readonly options = writable<ToasterProps>(defaultToasterProps);

	readonly #timers: Map<number, ToasterTimer> = new Map();

	/**
	 * Get the timers value from the store
	 * @returns The map of timers.
	 */
	get timers(): ReadonlyMap<number, ToasterTimer> {
		return new Map<number, ToasterTimer>(this.#timers);
	}

	constructor(props?: Partial<ToasterProps>) {
		this.options.set({
			...defaultToasterProps,
			...props,
		});
		this.options.subscribe(() => {
			this.updateToasts();
		});
	}

	/**
	 * Add timer for a toast
	 * @param id Id of the toast
	 * @param duration Duration of the timer, by default taken from options
	 */
	readonly addTimer = (id: number, duration: number = this.options().duration): void => {
		if (duration > 0) {
			this.#timers.set(id, {
				timeout: setTimeout(() => this.removeToast(id), duration),
				started: performance.now(),
				duration,
			});
		}
	};

	/**
	 * Pause a timer for a toast
	 * @param id Id of the toast
	 */
	readonly pauseTimer = (id: number): void => {
		if (this.#timers.has(id)) {
			const timer = this.#timers.get(id);
			if (timer && timer.timeout) {
				clearTimeout(timer.timeout);
				timer.timeout = null;
				timer.paused = performance.now();
			}
		}
	};

	/**
	 * Resume a timer for a toast
	 * @param id Id of the toast
	 */
	readonly resumeTimer = (id: number): void => {
		if (this.#timers.has(id)) {
			const timer = this.#timers.get(id);
			if (timer) {
				const paused = timer.paused ?? timer.started;
				const elapsed = paused - timer.started;
				const remaining = (timer.duration ?? 0) - elapsed;
				this.addTimer(id, remaining);
				timer.duration = remaining;
				timer.paused = undefined;
			}
		}
	};

	/**
	 * Events directive is used to set events on the Toast component, to keep track for example of pointer enter/leave,
	 * used to pause / resume the timer in case of duration and pauseOnHover are specified.
	 */
	readonly eventsDirective: Directive<number> = createAttributesDirective<number>((id) => ({
		events: {
			pointerenter: () => this.options().pauseOnHover && this.pauseTimer(id()),
			pointerleave: () => this.options().pauseOnHover && this.resumeTimer(id()),
		},
	}));

	/**
	 * Helper to add a toast to the viewport.
	 * @param props Options for the toast.
	 * @returns The ID of the added toast.
	 */
	addToast = (props: Props): number => {
		const autoHide = props.autoHide ?? this.options().duration > 0;
		this.#toasts.update(toasts => [...toasts, {id: this.#idCount++, props}]);
		if (autoHide) {
			this.addTimer(this.#idCount - 1, props.delay);
		}
		return this.#idCount - 1;
	};

	/**
	 * Helper to remove a toast to the viewport.
	 * @param id Id of the toast to remove.
	 */
	removeToast = (id: number): void => {
		this.#timers.delete(id);
		this.#toasts.update(toasts => toasts.filter(toast => toast.id !== id));
	};

	/** Helper to update toasts when options change */
	readonly updateToasts = (): void => {
		if (this.options().duration === 0) {
			this.options().dismissible = true;
		}
	};

	/** Helper to close all toasts at once */
	readonly closeAll = (): void => {
		this.#toasts.set([]);
		this.#timers.clear();
	};
}
