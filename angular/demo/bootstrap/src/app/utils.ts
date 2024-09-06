import type {WidgetsConfig} from '@agnos-ui/angular-bootstrap';
import {provideWidgetsConfig, toAngularSignal} from '@agnos-ui/angular-bootstrap';
import {getPropValues} from '@agnos-ui/common/propsValues';
import type {ReadableSignal} from '@amadeus-it-group/tansu';
import {computed, get} from '@amadeus-it-group/tansu';
import type {Provider} from '@angular/core';
import {InjectionToken, effect, inject} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

function getJsonHash(json: string) {
	const {config = {}, props = {}} = JSON.parse(json ?? '{}');
	return {config, props};
}

export const hashConfigToken = new InjectionToken<ReadableSignal<ReturnType<typeof getJsonHash>>>('hashconfig');

export function provideHashConfig(widgetName: keyof WidgetsConfig): Provider[] {
	return [
		{
			provide: hashConfigToken,
			useFactory: () => {
				const activeRoute = inject(ActivatedRoute);
				return computed(() => {
					const fragment = get(activeRoute.fragment);
					return getJsonHash(fragment == null ? '{}' : fragment);
				});
			},
		},
		provideWidgetsConfig((parentConfig) => {
			parentConfig[widgetName] = getPropValues(inject(hashConfigToken)().config);
			return parentConfig;
		}),
	];
}

export function hashChangeHook(propsCallback: (props: any) => void) {
	const hashConfig$ = toAngularSignal(inject(hashConfigToken));
	let lastProps;

	async function callPropsCallback(props: any) {
		lastProps = props;
		await Promise.resolve();
		if (lastProps === props) {
			propsCallback(props);
		}
	}

	effect(() => {
		void callPropsCallback(getPropValues(hashConfig$().props));
	});
}

/**
 * Transform all the values of a <string, any> json object to
 */
export function getUndefinedValues<T extends object>(defaultConfig: T) {
	const undefinedObj: Record<string, undefined> = {};
	for (const key of Object.keys(defaultConfig)) {
		undefinedObj[key] = undefined;
	}
	return undefinedObj as Record<keyof T, undefined>;
}
