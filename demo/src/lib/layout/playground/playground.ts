import {computed, writable} from '@amadeus-it-group/tansu';
import {getContext, setContext} from 'svelte';
import {hashObject$, updateHashValue} from '@agnos-ui/common/utils';
import type {WidgetDoc} from '@agnos-ui/doc/types';
import {normalizedType, textToLines} from '../../../app';
import type {PropsValues} from '@agnos-ui/common/propsValues';

type Playground = ReturnType<typeof createPlayground>;

const playgroundSymbol = Symbol('playground');
function setPlaygroundContext(context: Playground) {
	setContext(playgroundSymbol, context);
}

export function getPlaygroundContext(): Playground {
	return getContext(playgroundSymbol);
}

interface PlaygroundProps {
	config: Record<string, any>;
	types: Record<string, string>;
	doc: WidgetDoc;
	listPropsValues: Record<string, PropsValues[]>;
}

function createSingleValueContext(valueType: 'config' | 'props', key: string, value: any, type: string, selectValues?: PropsValues[]) {
	function getTargetValue({target}: any) {
		let value: any;
		const targetValue = target.value.trim();
		if (selectValues) {
			return {value: targetValue};
		}
		switch (type) {
			case 'boolean':
				value = target.checked;
				break;
			case 'number':
				value = +targetValue;
				break;
			default:
				value = target.value;
				break;
		}
		return value;
	}

	const api = {
		value: value ?? '',
		selectValue: value?.value,
		isEmpty: value === undefined,
		onChange(e: any) {
			updateHashValue(valueType, key, getTargetValue(e));
		},
		selectValues: selectValues,
		clear() {
			updateHashValue(valueType, key, undefined);
		},
	};

	return api;
}

function createValueContext(
	key: string,
	defaultValue: any,
	configValue: any,
	propValue: any,
	type: string = typeof defaultValue,
	selectValues?: PropsValues[],
) {
	const api = {
		key,
		defaultValue,
		config: createSingleValueContext('config', key, configValue, type, selectValues),
		prop: createSingleValueContext('props', key, propValue, type, selectValues),
		type,
		selectValues,
	};

	return api;
}

export type SingleValueContextApi = ReturnType<typeof createSingleValueContext>;
export type ValueContextApi = ReturnType<typeof createValueContext>;

export function createPlayground({config: defaultConfig, types, doc, listPropsValues = {}}: PlaygroundProps) {
	const docByProps: Record<string, WidgetDoc['props'][0]> = {};
	for (const propDoc of doc.props) {
		docByProps[propDoc.name] = propDoc;
	}
	const values$ = computed(() => {
		const values: ReturnType<typeof createValueContext>[] = [];
		const {config, props} = hashObject$();
		for (const [key, value] of Object.entries(defaultConfig)) {
			values.push(createValueContext(key, value, config[key], props[key], types[key], listPropsValues[key]));
		}
		return values;
	});

	const sampleParameters$ = computed(() => {
		const configParams: Record<string, any> = {};
		const propsParams: Record<string, any> = {};
		let hasConfig = false;
		let hasValues = false;
		for (const contextValue of values$()) {
			const {key, config, prop} = contextValue;
			if (!config.isEmpty) {
				configParams[key] = config.value;
				hasConfig = true;
			}
			if (!prop.isEmpty) {
				propsParams[key] = prop.value;
				hasValues = true;
			}
		}
		const params: {config?: any; props?: any} | undefined = hasConfig || hasValues ? {} : undefined;
		if (hasConfig) {
			params!.config = configParams;
		}
		if (hasValues) {
			params!.props = propsParams;
		}
		return params;
	});

	const noHelp = {
		key: '',
		type: '',
		defaultValue: <any>'',
		description: <string[]>[],
	};
	const helpKey$ = writable(<string | undefined>undefined);
	const help$ = computed(() => {
		const key = helpKey$();
		if (key) {
			const propDoc = docByProps[key];
			return {
				key,
				type: propDoc.type,
				defaultValue: propDoc.defaultValue ? normalizedType(propDoc.defaultValue) : '',
				description: textToLines(propDoc.description),
			};
		} else {
			return noHelp;
		}
	});

	const api = {
		values$,
		sampleParameters$,
		help$,
		showHelp(key: string) {
			helpKey$.update((helpKey) => (helpKey === key ? undefined : key));
		},
	};
	setPlaygroundContext(api);

	return api;
}
