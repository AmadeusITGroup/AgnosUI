export type ComponentStatus = 'stable' | 'beta' | 'inprogress' | 'deprecated';

export interface ComponentMetadata {
	title: string;
	status: ComponentStatus;
	since: string;
}

/**
 * Metadata for each component
 */
export const componentsMetadata: {[key: string]: ComponentMetadata} = {
	Accordion: {
		title: 'Accordion',
		status: 'stable',
		since: 'v0.1.1',
	},
	Alert: {
		title: 'Alert',
		status: 'stable',
		since: 'v0.1.1',
	},
	Modal: {
		title: 'Modal',
		status: 'stable',
		since: 'v0.1.1',
	},
	Pagination: {
		title: 'Pagination',
		status: 'stable',
		since: 'v0.1.1',
	},
	Progressbar: {
		title: 'Progressbar',
		status: 'stable',
		since: 'v0.1.1',
	},
	Rating: {
		title: 'Rating',
		status: 'stable',
		since: 'v0.1.1',
	},
	Select: {
		title: 'Select',
		status: 'inprogress',
		since: 'v0.1.1',
	},
	Slider: {
		title: 'Slider',
		status: 'stable',
		since: 'v0.1.1',
	},
	Toast: {
		title: 'Toast',
		status: 'stable',
		since: 'v0.2.0',
	},
};

/**
 * Metadata for each component
 */
export const daisyUIMetadata: {[key: string]: ComponentMetadata} = {
	Alert: {
		title: 'Alert',
		status: 'stable',
		since: 'v0.3.0',
	},
	Pagination: {
		title: 'Pagination',
		status: 'stable',
		since: 'v0.3.0',
	},
	Progressbar: {
		title: 'Progressbar',
		status: 'stable',
		since: 'v0.3.0',
	},
	Rating: {
		title: 'Rating',
		status: 'stable',
		since: 'v0.3.0',
	},
	Slider: {
		title: 'Slider',
		status: 'stable',
		since: 'v0.3.0',
	},
};
