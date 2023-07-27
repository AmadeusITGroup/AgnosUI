import type {ReadableSignal} from '@amadeus-it-group/tansu';

const noop = () => {
	/* nothing to do*/
};

const truthyValue = (value: unknown) => !!value;

export const promiseFromStore = <T>(store: ReadableSignal<T>, condition: (value: T) => boolean = truthyValue) => {
	let resolve: (value: T) => void;
	const promise = new Promise<T>((r) => (resolve = r));
	let unsubscribe = () => {
		storeUnsubscribe();
		unsubscribe = noop;
	};
	let storeUnsubscribe = noop;
	storeUnsubscribe = store.subscribe((value) => {
		if (condition(value)) {
			resolve(value);
			unsubscribe();
		}
	});
	if (unsubscribe === noop) {
		storeUnsubscribe();
	}
	return {
		promise,
		unsubscribe() {
			unsubscribe();
		},
	};
};

export const promiseFromEvent = (element: EventTarget, event: string) => {
	let resolve: (event: Event) => void;
	const promise = new Promise<Event>((r) => (resolve = r));
	let unsubscribe = () => {
		element.removeEventListener(event, eventListener);
		unsubscribe = noop;
	};
	const eventListener = (event: Event) => {
		if (event.target === element) {
			resolve(event);
			unsubscribe();
		}
	};
	element.addEventListener(event, eventListener);
	return {
		promise,
		unsubscribe() {
			unsubscribe();
		},
	};
};

export const promiseFromTimeout = (delay: number) => {
	let timeout: any;
	return {
		promise: new Promise<void>((r) => {
			timeout = setTimeout(() => {
				timeout = undefined;
				r();
			}, delay);
		}),
		unsubscribe() {
			if (timeout) {
				clearTimeout(timeout);
				timeout = undefined;
			}
		},
	};
};

export function reflow(element: HTMLElement = document.body) {
	element.getBoundingClientRect();
}

export const addClasses = (element: HTMLElement, classes?: string[]) => {
	if (classes && classes.length > 0) {
		element.classList.add(...classes);
	}
};
export const removeClasses = (element: HTMLElement, classes?: string[]) => {
	if (classes && classes.length > 0) {
		element.classList.remove(...classes);
	}
};
