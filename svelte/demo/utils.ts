import {computed} from '@amadeus-it-group/tansu';
import {createWidgetsDefaultConfig} from '@agnos-ui/svelte';
import {hashObject$} from '@agnos-ui/common/utils';

export function hashChangeHook(widgetName: string) {
	createWidgetsDefaultConfig(() => ({[widgetName]: hashObject$().config}));
	return computed(() => hashObject$().props);
}
