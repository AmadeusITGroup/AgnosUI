import type {ReadableSignal} from '@amadeus-it-group/tansu';
import {computed, get} from '@amadeus-it-group/tansu';
import type {WidgetsConfig} from '@agnos-ui/angular';
import {provideWidgetsConfig} from '@agnos-ui/angular';
import type {Provider} from '@angular/core';
import {InjectionToken, effect, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
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
			parentConfig[widgetName] = inject(hashConfigToken)().config;
			return parentConfig;
		}),
	];
}

export function hashChangeHook(propsCallback: (props: any) => void) {
	const hashConfig$ = toSignal(inject(hashConfigToken), {requireSync: true});
	let lastProps;

	async function callPropsCallback(props: any) {
		lastProps = props;
		await 0;
		if (lastProps === props) {
			propsCallback(props);
		}
	}

	effect(() => {
		callPropsCallback(hashConfig$().props);
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
