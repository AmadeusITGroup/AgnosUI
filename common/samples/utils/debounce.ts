/**
 * Return a debounced version of provided function
 * @param fn Function to debounced
 * @param time The debounded delay
 */
export function debounce<T extends Array<any>>(fn: (...args: T) => any, time: number) {
	let timer: any;
	return (...params: T) => {
		if (timer) {
			clearTimeout(timer);
		}
		timer = setTimeout(() => {
			fn(...params);
		}, time);
	};
}

export const abortPrevious = <T extends any[]>(fn: (abortSignal: AbortSignal, ...args: T) => void) => {
	let abortController: AbortController | undefined;
	return (...args: T) => {
		abortController?.abort();
		abortController = new AbortController();
		return fn(abortController.signal, ...args);
	};
};
