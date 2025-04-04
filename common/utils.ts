import {computed} from '@amadeus-it-group/tansu';
import {hash$} from './samples/utils/hashUtil';

export const hashObject$ = computed(() => {
	let hashString = hash$().split('#').at(-1);
	if (!hashString || hashString.at(0) !== '{') {
		hashString = '{}';
	}
	const {config = {}, props = {}} = JSON.parse(decodeURIComponent(hashString));
	return {config, props};
});

/**
 * Assigns the properties of `partial` to `json`, overwriting any existing properties in `json`.
 * This function is useful to keep the type of `partial` as a Partial of `json`
 * Returns a new object with the combined properties of `json` and `partial`.
 *
 * @param json The object to assign properties to.
 * @param partial The object to assign properties from.
 * @returns A new object with the combined properties of `json` and `partial`.
 */
export function assign<T extends object>(json: T, partial: Partial<T>) {
	return Object.assign(json, partial);
}
