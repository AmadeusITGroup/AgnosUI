import {computed, readable} from '@amadeus-it-group/tansu';

export const hash$ =
	typeof window === 'undefined' || !location.hash
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

export const query$ =
	typeof window === 'undefined' || !location.search
		? readable('')
		: readable('', (set) => {
				function updateFromQuery() {
					const search = location.search;
					set(search ? search.substring(1) : '');
				}

				window.addEventListener('querychange', updateFromQuery);
				updateFromQuery();
				return () => window.removeEventListener('querychange', updateFromQuery);
			});

export const urlJsonObject$ = computed(() => {
	const hashString = hash$();
	const queryString = query$();
	if (!hashString && !queryString) {
		return {};
	}
	if (hashString) {
		const hasStringDecoded = decodeURIComponent(hashString);
		const jsonOpenIndex = hasStringDecoded.indexOf('{');
		const jsonCloseIndex = hasStringDecoded.lastIndexOf('}');
		const jsonString = hasStringDecoded.substring(jsonOpenIndex, jsonCloseIndex + 1);
		try {
			const jsonObj = JSON.parse(jsonString);
			return jsonObj;
		} catch (e) {
			return {};
		}
	}
	if (queryString) {
		const searchParams = new URLSearchParams(decodeURIComponent(queryString));
		const acc: {[key: string]: any} = {};
		searchParams.forEach((val, key) => {
			try {
				acc[key] = JSON.parse(val);
			} catch (e) {
				console.warn(`[URL Json object store] Query param '${key}' is not a JSON. Keeping it as a string.`);
				acc[key] = val;
			}
		});
		return acc;
	}
});

/**
 * Expose the config and props properties from url JSON object
 * Return empty objects for each,if they not exist in the parent url json object
 */
export const urlJsonObjectConfigProps$ = computed(() => {
	const urlJsonObject = urlJsonObject$();
	if (!Object.keys(urlJsonObject).length) {
		return {config: {}, props: {}};
	}
	return {
		config: urlJsonObject.config || {},
		props: urlJsonObject.props || {},
	};
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
