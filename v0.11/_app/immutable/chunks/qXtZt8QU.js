const e=`import { type ToastProps } from './toast';
import type { Directive } from '../../types';
import type { ReadableSignal, WritableSignal } from '@amadeus-it-group/tansu';
/**
 * Represents the possible positions for displaying a toast notification.
 *
 * The positions are defined based on a grid layout with three horizontal
 * alignments (left, center, right) and three vertical alignments (top, middle, bottom).
 *
 * Available positions:
 * - \`topLeft\`: Top-left corner of the screen.
 * - \`topCenter\`: Top-center of the screen.
 * - \`topRight\`: Top-right corner of the screen.
 * - \`middleLeft\`: Middle-left side of the screen.
 * - \`middleCenter\`: Center of the screen.
 * - \`middleRight\`: Middle-right side of the screen.
 * - \`bottomLeft\`: Bottom-left corner of the screen.
 * - \`bottomCenter\`: Bottom-center of the screen.
 * - \`bottomRight\`: Bottom-right corner of the screen.
 */
export type ToastPositions = 'topLeft' | 'topCenter' | 'topRight' | 'middleLeft' | 'middleCenter' | 'middleRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight';
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
     * The timeout identifier returned by \`setTimeout\`.
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
export declare const defaultToasterProps: ToasterProps;
/**
 * Create a toaster provider with helpers and state.
 * @param props Options for the toaster.
 * @template Props Type of the toast properties.
 */
export declare class Toaster<Props extends Partial<ToastProps> = ToastProps> {
    #private;
    /**
     * Get the toasts value from the store
     * @returns The array of toasts.
     */
    readonly toasts: ReadableSignal<ToasterToast<Props>[]>;
    readonly options: WritableSignal<ToasterProps>;
    /**
     * Get the timers value from the store
     * @returns The map of timers.
     */
    get timers(): ReadonlyMap<number, ToasterTimer>;
    constructor(props?: Partial<ToasterProps>);
    /**
     * Add timer for a toast
     * @param id Id of the toast
     * @param duration Duration of the timer, by default taken from options
     */
    readonly addTimer: (id: number, duration?: number) => void;
    /**
     * Pause a timer for a toast
     * @param id Id of the toast
     */
    readonly pauseTimer: (id: number) => void;
    /**
     * Resume a timer for a toast
     * @param id Id of the toast
     */
    readonly resumeTimer: (id: number) => void;
    /**
     * Events directive is used to set events on the Toast component, to keep track for example of pointer enter/leave,
     * used to pause / resume the timer in case of duration and pauseOnHover are specified.
     */
    readonly eventsDirective: Directive<number>;
    /**
     * Helper to add a toast to the viewport.
     * @param props Options for the toast.
     * @returns The ID of the added toast.
     */
    readonly addToast: (props: Props) => number;
    /**
     * Helper to remove a toast to the viewport.
     * @param id Id of the toast to remove.
     */
    readonly removeToast: (id: number) => void;
    /** Helper to update toasts when options change */
    readonly updateToasts: () => void;
    /** Helper to close all toasts at once */
    readonly closeAll: () => void;
}
`;export{e as default};
