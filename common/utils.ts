import {computed, readable} from '@amadeus-it-group/tansu';

export const hash$ =
	typeof window === 'undefined'
		? readable('')
		: readable('', (set) => {
				function updateFromHash() {
					const hash = location.hash;
					set(hash ? hash.substring(1) : '');
				}

				window.addEventListener('hashchange', updateFromHash);
				updateFromHash();
				return () => window.removeEventListener('hashchange', updateFromHash);
		  });

export const hashObject$ = computed(() => {
	let hashString = hash$().split('#').at(-1);
	if (!hashString || hashString.at(0) !== '{') {
		hashString = '{}';
	}
	const {config = {}, props = {}} = JSON.parse(decodeURIComponent(hashString));
	return {config, props};
});

/**
 * Return undefined if the object is empty, the object otherwise
 */
function undefinedIfEmpty(object: object | undefined) {
	return object ? (Object.entries(object).filter(([, value]) => value !== undefined).length ? object : undefined) : undefined;
}

/**
 * Update the hash url
 * @param type Type of value to be update
 * @param key
 * @param value any value, or undefined to remove the key
 */
export function updateHashValue(type: 'config' | 'props', key: string, value: any) {
	const hashObj = structuredClone(hashObject$());
	const hashObjForType: Record<string, any> = hashObj[type] ?? {};
	hashObjForType[key] = value;
	hashObj['config'] = undefinedIfEmpty(hashObj['config']);
	hashObj['props'] = undefinedIfEmpty(hashObj['props']);
	const hashString = JSON.stringify(undefinedIfEmpty(hashObj));
	// TODO: prevent the navigation to be recorded in the history.
	location.hash = hashString ? `#${hashString}` : '#';
}
