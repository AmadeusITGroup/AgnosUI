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
