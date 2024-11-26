import type {WidgetsConfig} from '@agnos-ui/svelte-bootstrap/config';
// eslint-disable-next-line @agnos-ui/check-replace-imports
import type {WidgetsConfig as HeadlessConfig} from '@agnos-ui/svelte-headless/config';

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

type Metadata = {[WidgetName in keyof WidgetsConfig as Capitalize<WidgetName>]: ComponentMetadata<WidgetsConfig[WidgetName]>};
// TODO once Select is added to the headless examples, remove the Partial
// The collapse is not in the code config but only an example is in the demo headless with daisyUI.
// So I add to manually add it here.
type DaisyMetadata = Partial<
	{[WidgetName in keyof HeadlessConfig as Capitalize<WidgetName>]: ComponentMetadata<HeadlessConfig[WidgetName]>} & {
		Collapse: ComponentMetadata<'COLLAPSE'>;
	}
>;

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
	Collapse: {
		title: 'Collapse',
		status: 'beta',
		since: 'v0.5.0',
		type: 'bootstrap',
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
	Tree: {
		title: 'Tree',
		status: 'beta',
		since: 'v0.6.0',
		type: 'standalone',
		includeStyles: true,
	},
};

/**
 * Metadata for each component
 */
export const daisyUIMetadata: DaisyMetadata = {
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
	Collapse: {
		title: 'Collapse',
		status: 'beta',
		since: 'v0.5.0',
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
