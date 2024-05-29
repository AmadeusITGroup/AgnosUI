export type ComponentStatus = 'stable' | 'beta' | 'inprogress' | 'deprecated';
export type ComponentType = 'bootstrap' | 'standalone' | 'daisyUI';

export interface ComponentMetadata {
	title: string;
	status: ComponentStatus;
	since: string;
	type: ComponentType;
}

/**
 * Metadata for each component
 */
export const componentsMetadata: {[key: string]: ComponentMetadata} = {
	Accordion: {
		title: 'Accordion',
		status: 'stable',
		since: 'v0.1.1',
		type: 'bootstrap',
	},
	Alert: {
		title: 'Alert',
		status: 'stable',
		since: 'v0.1.1',
		type: 'bootstrap',
	},
	Modal: {
		title: 'Modal',
		status: 'stable',
		since: 'v0.1.1',
		type: 'bootstrap',
	},
	Pagination: {
		title: 'Pagination',
		status: 'stable',
		since: 'v0.1.1',
		type: 'bootstrap',
	},
	Progressbar: {
		title: 'Progressbar',
		status: 'stable',
		since: 'v0.1.1',
		type: 'bootstrap',
	},
	Rating: {
		title: 'Rating',
		status: 'stable',
		since: 'v0.1.1',
		type: 'standalone',
	},
	Select: {
		title: 'Select',
		status: 'inprogress',
		since: 'v0.1.1',
		type: 'standalone',
	},
	Slider: {
		title: 'Slider',
		status: 'stable',
		since: 'v0.1.1',
		type: 'standalone',
	},
	Toast: {
		title: 'Toast',
		status: 'stable',
		since: 'v0.2.0',
		type: 'bootstrap',
	},
};

/**
 * Metadata for each component
 */
export const daisyUIMetadata: {[key: string]: ComponentMetadata} = {
	Accordion: {
		title: 'Accordion',
		status: 'stable',
		since: 'v0.4.0',
		type: 'daisyUI',
	},
	Alert: {
		title: 'Alert',
		status: 'stable',
		since: 'v0.3.0',
		type: 'daisyUI',
	},
	Modal: {
		title: 'Modal',
		status: 'stable',
		since: 'v0.4.0',
		type: 'daisyUI',
	},
	Pagination: {
		title: 'Pagination',
		status: 'stable',
		since: 'v0.3.0',
		type: 'daisyUI',
	},
	Progressbar: {
		title: 'Progressbar',
		status: 'stable',
		since: 'v0.3.0',
		type: 'daisyUI',
	},
	Rating: {
		title: 'Rating',
		status: 'stable',
		since: 'v0.3.0',
		type: 'daisyUI',
	},
	Slider: {
		title: 'Slider',
		status: 'stable',
		since: 'v0.3.0',
		type: 'daisyUI',
	},
	Toast: {
		title: 'Toast',
		status: 'stable',
		since: 'v0.3.0',
		type: 'daisyUI',
	},
};
