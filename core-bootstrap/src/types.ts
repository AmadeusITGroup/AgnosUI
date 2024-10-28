// Enumeration of all eight bootstrap contextual classes
export type BSContextualClass = 'success' | 'info' | 'warning' | 'danger' | 'primary' | 'secondary' | 'light' | 'dark';

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
