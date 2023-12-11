export type ComponentStatus = 'stable' | 'beta' | 'inprogress' | 'deprecated';

export interface ComponentMetadata {
	title: string;
	status: ComponentStatus;
}

/**
 * Metadata for each component
 */
export const componentsMetadata: {[key: string]: ComponentMetadata} = {
	Accordion: {
		title: 'Accordion',
		status: 'stable',
	},
	Alert: {
		title: 'Alert',
		status: 'stable',
	},
	Modal: {
		title: 'Modal',
		status: 'stable',
	},
	Pagination: {
		title: 'Pagination',
		status: 'beta',
	},
	Progressbar: {
		title: 'Progressbar',
		status: 'stable',
	},
	Rating: {
		title: 'Rating',
		status: 'stable',
	},
	Select: {
		title: 'Select',
		status: 'inprogress',
	},
	Slider: {
		title: 'Slider',
		status: 'stable',
	},
	Toast: {
		title: 'Toast',
		status: 'beta',
	},
};
