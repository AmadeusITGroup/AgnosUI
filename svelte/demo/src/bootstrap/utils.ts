import {computed} from '@amadeus-it-group/tansu';
import {createWidgetsDefaultConfig} from '@agnos-ui/svelte-bootstrap/config';
import {hashObject$} from '@agnos-ui/common/utils';
import {getPropValues} from '@agnos-ui/common/propsValues';

export function hashChangeHook(widgetName: string) {
	createWidgetsDefaultConfig(() => {
		return {[widgetName]: getPropValues(hashObject$().config)};
	});
	return computed(() => getPropValues(hashObject$().props));
}
