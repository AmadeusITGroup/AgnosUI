import type {ToastPositions} from '@agnos-ui/core/components/toast';

/**
 * Represents the contextual classes available in Bootstrap.
 * These classes are used to apply different styles to elements
 * based on the context or state they represent.
 *
 * Possible values are:
 * - 'success': Indicates a successful or positive action.
 * - 'info': Represents informational messages or actions.
 * - 'warning': Denotes a warning that might need attention.
 * - 'danger': Signifies a dangerous or potentially negative action.
 * - 'primary': Primary action or information.
 * - 'secondary': Secondary action or information.
 * - 'light': Light background or context.
 * - 'dark': Dark background or context.
 */
export type BSContextualClass = 'success' | 'info' | 'warning' | 'danger' | 'primary' | 'secondary' | 'light' | 'dark';

/**
 * List of all contextual classes, can be used to validate that a specific string is a {@link BSContextualClass}
 */
export const BS_CONTEXTUAL_CLASSES: BSContextualClass[] = Object.values({
	success: 'success',
	info: 'info',
	warning: 'warning',
	danger: 'danger',
	primary: 'primary',
	secondary: 'secondary',
	light: 'light',
	dark: 'dark',
} satisfies {[K in BSContextualClass]: K});

/**
 * A mapping of toast position keys to their corresponding CSS class strings of bootstrap.
 * These classes define the positioning of toast notifications on the screen.
 *
 * The keys represent various positions on the screen, such as top-left, top-center,
 * middle-right, etc., and the values are the CSS classes of bootstrap that apply the respective
 * positioning styles.
 *
 * Example usage:
 * ```typescript
 * const positionClass = toastPositions.topLeft; // "top-0 start-0"
 * ```
 */
export const toastPositions: Record<ToastPositions, string> = {
	topLeft: 'top-0 start-0',
	topCenter: 'top-0 start-50 translate-middle-x',
	topRight: 'top-0 end-0',
	middleLeft: 'top-50 start-0 translate-middle-y',
	middleCenter: 'top-50 start-50 translate-middle',
	middleRight: 'top-50 end-0 translate-middle-y',
	bottomLeft: 'bottom-0 start-0',
	bottomCenter: 'bottom-0 start-50 translate-middle-x',
	bottomRight: 'bottom-0 end-0',
};
