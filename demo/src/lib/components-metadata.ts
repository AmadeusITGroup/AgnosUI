import type {WidgetsConfig} from '@agnos-ui/svelte-bootstrap/config';

export type ComponentStatus = 'stable' | 'beta' | 'inprogress' | 'deprecated';
export type ComponentType = 'bootstrap' | 'standalone' | 'daisyUI';

export interface ComponentMetadata<Props> {
	title: string;
	status: ComponentStatus;
	since: string;
	type: ComponentType;
	includeStyles?: undefined | true;
	playgroundProps?: Partial<Props>;
}

// TODO once Select is added to the headless examples, remove the Partial
type Metadata = Partial<{[WidgetName in keyof WidgetsConfig as Capitalize<WidgetName>]: ComponentMetadata<WidgetsConfig[WidgetName]>}>;

/**
 * Metadata for each component
 */
export const componentsMetadata: Metadata = {
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
		playgroundProps: {
			children: 'This is an alert',
		},
	},
	Modal: {
		title: 'Modal',
		status: 'stable',
		since: 'v0.1.1',
		type: 'bootstrap',
		playgroundProps: {
			visible: true,
			children: 'Dialog content',
			title: 'Dialog',
		},
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
		includeStyles: true,
	},
	Toast: {
		title: 'Toast',
		status: 'stable',
		since: 'v0.2.0',
		type: 'bootstrap',
		playgroundProps: {
			children: 'This is a toast',
			autoHide: false,
			className: 'text-bg-primary',
		},
	},
};

/**
 * Metadata for each component
 */
export const daisyUIMetadata: Metadata = {
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
