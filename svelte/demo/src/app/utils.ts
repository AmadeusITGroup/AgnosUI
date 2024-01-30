import {computed} from '@amadeus-it-group/tansu';
import {createWidgetsDefaultConfig} from '@agnos-ui/svelte/config';
import {urlJsonObjectConfigProps$} from '@agnos-ui/common/utils';
import {getPropValues} from '@agnos-ui/common/propsValues';

export function hashChangeHook(widgetName: string) {
	createWidgetsDefaultConfig(() => {
		return {[widgetName]: getPropValues(urlJsonObjectConfigProps$().config)};
	});
	return computed(() => getPropValues(urlJsonObjectConfigProps$().props));
}
