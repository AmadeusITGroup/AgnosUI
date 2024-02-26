import {writable} from '@amadeus-it-group/tansu';
import {describe, expect, test, vi} from 'vitest';
import type {PromiseState} from './promise';
import {promisePending, promiseStateStore, promiseStoreToPromiseStateStore, promiseStoreToValueStore} from './promise';
import {promiseFromStore, promiseFromEvent, promiseFromTimeout} from './promise';

const promiseWithResolve = <T>() => {
	let resolve: (value: T | Promise<T>) => void;
	let reject: (value: any) => void;
	const promise = new Promise<T>((a, b) => {
		resolve = a;
		reject = b;
	});
	return {promise, resolve: resolve!, reject: reject!};
};

const wrapInThenable = <T>(promise: PromiseLike<T>): PromiseLike<T> => {
	return {
		then(resolve, reject) {
			return wrapInThenable(promise.then(resolve, reject));
		},
	};
};
wrapInThenable.toString = () => 'custom thenable';
const identity = <T>(a: T) => a;
identity.toString = () => 'promise';

describe('promiseStateStore', () => {
	const testWithValue = <T>(value: T) => {
		test(`test with simple value ${value}`, () => {
			const store = promiseStateStore(value);
			const storeValue = store();
			expect(storeValue.status).toEqual('fulfilled');
			expect((storeValue as PromiseFulfilledResult<T>).value).toBe(value);
		});

		for (const promiseWrapper of [identity, wrapInThenable]) {
			test(`test with ${promiseWrapper} resolving to ${value}`, async () => {
				const {promise, resolve} = promiseWithResolve<T>();
				const thenable = promiseWrapper(promise);
				const store = promiseStateStore(thenable);
				expect(store()).toBe(promisePending);
				resolve(value);
				expect(await thenable).toBe(value);
				let storeValue = store();
				expect(storeValue.status).toBe('fulfilled');
				expect((storeValue as PromiseFulfilledResult<T>).value).toBe(value);
				storeValue = promiseStateStore(thenable)();
				expect(storeValue.status).toBe('fulfilled');
				expect((storeValue as PromiseFulfilledResult<T>).value).toBe(value);
			});

			test(`test with ${promiseWrapper} throwing ${value}`, async () => {
				const {promise, reject} = promiseWithResolve();
				const thenable = promiseWrapper(promise);
				const store = promiseStateStore(thenable);
				expect(store()).toBe(promisePending);
				reject(value);
				try {
					await thenable;
					expect.fail('the promise should be rejected');
				} catch (error) {
					expect(error).toBe(value);
					// should pass here
				}
				let storeValue = store();
				expect(storeValue.status).toBe('rejected');
				expect((storeValue as PromiseRejectedResult).reason).toBe(value);
				storeValue = promiseStateStore(thenable)();
				expect(storeValue.status).toBe('rejected');
				expect((storeValue as PromiseRejectedResult).reason).toBe(value);
			});
		}
	};

	testWithValue(0);
	testWithValue(1);
	testWithValue('ok');
	testWithValue(true);
	testWithValue(null);
	testWithValue(false);
	testWithValue(NaN);
	testWithValue(() => {});
	testWithValue({});
});

describe('promiseStoreToPromiseStateStore', () => {
	test('Basic functionalities', async () => {
		const firstResolvedValue = {};
		const promiseStore$ = writable(Promise.resolve(firstResolvedValue));
		const promiseStateStore$ = promiseStoreToPromiseStateStore(promiseStore$);
		let state = promiseStateStore$();
		expect(state).toBe(promisePending);
		await 0;
		state = promiseStateStore$();
		expect(state.status).toBe('fulfilled');
		expect((state as PromiseFulfilledResult<any>).value).toBe(firstResolvedValue);
	});

	test('second promise resolving before the first one', async () => {
		const first = promiseWithResolve();
		const second = promiseWithResolve();
		const states: PromiseState<any>[] = [];
		const promiseStore$ = writable(first.promise);
		const promiseStateStore$ = promiseStoreToPromiseStateStore(promiseStore$);
		promiseStateStore$.subscribe((state) => {
			states.push(state);
		});
		expect(states.length).toBe(1);
		expect(states[0]).toBe(promisePending);
		await 0;
		promiseStore$.set(second.promise);
		expect(states.length).toBe(1);
		second.resolve('second');
		await 0;
		expect(states.length).toBe(2);
		expect(states[1]).toEqual({status: 'fulfilled', value: 'second'});
		first.resolve('first'); // the first promise is ignored
		await 0;
		expect(states.length).toBe(2);
		await 0;
		expect(states.length).toBe(2);
		// now let's come back to the first promise:
		promiseStore$.set(first.promise);
		// the result should be synchronous:
		expect(states.length).toBe(3);
		expect(states[2]).toEqual({status: 'fulfilled', value: 'first'});
	});

	test('promises resolving with the same value', async () => {
		const firstPromise = Promise.resolve('value');
		const secondPromise = Promise.resolve('value');
		expect(firstPromise).not.toBe(secondPromise); // different objects but same resolved value
		const states: PromiseState<any>[] = [];
		const promiseStore$ = writable(firstPromise);
		const promiseStateStore$ = promiseStoreToPromiseStateStore(promiseStore$);
		promiseStateStore$.subscribe((state) => {
			states.push(state);
		});
		expect(states.length).toBe(1);
		expect(states[0]).toBe(promisePending);
		await 0;
		expect(states.length).toBe(2);
		expect(states[1]).toEqual({status: 'fulfilled', value: 'value'});
		promiseStore$.set(secondPromise);
		// the promise status cannot be known synchronously
		expect(states.length).toBe(3);
		expect(states[2]).toBe(promisePending);
		await 0;
		expect(states.length).toBe(4);
		expect(states[3]).toEqual({status: 'fulfilled', value: 'value'});
		// now let's come back to the first promise, which has the same value as the second:
		promiseStore$.set(firstPromise);
		expect(states.length).toBe(4); // no change
		await 0;
		expect(states.length).toBe(4); // no change
	});

	test('promises rejected with the same reason', async () => {
		const firstPromise = Promise.reject('reason');
		const secondPromise = Promise.reject('reason');
		expect(firstPromise).not.toBe(secondPromise); // different objects but same rejected value
		const states: PromiseState<any>[] = [];
		const promiseStore$ = writable(firstPromise);
		const promiseStateStore$ = promiseStoreToPromiseStateStore(promiseStore$);
		promiseStateStore$.subscribe((state) => {
			states.push(state);
		});
		expect(states.length).toBe(1);
		expect(states[0]).toBe(promisePending);
		await 0;
		expect(states.length).toBe(2);
		expect(states[1]).toEqual({status: 'rejected', reason: 'reason'});
		promiseStore$.set(secondPromise);
		// the promise status cannot be known synchronously
		expect(states.length).toBe(3);
		expect(states[2]).toBe(promisePending);
		await 0;
		expect(states.length).toBe(4);
		expect(states[3]).toEqual({status: 'rejected', reason: 'reason'});
		// now let's come back to the first promise, which has the same value as the second:
		promiseStore$.set(firstPromise);
		expect(states.length).toBe(4); // no change
		await 0;
		expect(states.length).toBe(4); // no change
	});
});

describe('promiseStoreToValueStore', () => {
	test('Basic functionalities', async () => {
		const firstPromise = Promise.resolve('value');
		const states: string[] = [];
		const promiseStore$ = writable(firstPromise);
		const promiseStateStore$ = promiseStoreToValueStore(promiseStore$, 'initial');
		promiseStateStore$.subscribe((state) => {
			states.push(state);
		});
		expect(states.length).toBe(1);
		expect(states[0]).toBe('initial');
		await 0;
		expect(states.length).toBe(2);
		expect(states[1]).toBe('value');
		promiseStore$.set(Promise.reject('ignored-rejection'));
		expect(states.length).toBe(2);
		await 0;
		expect(states.length).toBe(2);
		promiseStore$.set(Promise.resolve('other'));
		expect(states.length).toBe(2); // the new value cannot be known synchronously
		await 0;
		expect(states.length).toBe(3);
		expect(states[2]).toBe('other');
		promiseStore$.set(firstPromise); // the old value is already known
		expect(states.length).toBe(4);
		expect(states[3]).toBe('value');
	});
});

const clearTimeoutSpy = vi.spyOn(globalThis, 'clearTimeout');

describe(`promiseFromStore`, () => {
	test(`already truthy store`, async () => {
		const value = {};
		const onUnsubscribe = vi.fn();
		const onUse = vi.fn(() => onUnsubscribe);
		const store = writable(value, onUse); // already truthy store
		const res = promiseFromStore(store);
		expect(onUse).toHaveBeenCalledTimes(1);
		expect(onUnsubscribe).toHaveBeenCalledTimes(1);
		expect(await res.promise).toBe(value);
	});

	test(`not calling unsubscribe in time`, async () => {
		const value = {};
		const onUnsubscribe = vi.fn();
		const onUse = vi.fn(() => onUnsubscribe);
		const store = writable(null as any, onUse);
		const res = promiseFromStore(store);
		expect(onUse).toHaveBeenCalledTimes(1);
		expect(onUnsubscribe).not.toHaveBeenCalled();
		// non-truthy values should not trigger resolve:
		store.set(0);
		store.set(false);
		// this value will trigger resolve:
		store.set(value);
		expect(onUse).toHaveBeenCalledTimes(1);
		expect(onUnsubscribe).toHaveBeenCalledTimes(1);
		expect(await res.promise).toBe(value);
		res.unsubscribe();
		expect(onUse).toHaveBeenCalledTimes(1);
		expect(onUnsubscribe).toHaveBeenCalledTimes(1);
	});

	test(`calling unsubscribe`, async () => {
		const value = {};
		const onUnsubscribe = vi.fn();
		const onUse = vi.fn(() => onUnsubscribe);
		const store = writable(null as any, onUse);
		const res = promiseFromStore(store);
		expect(onUse).toHaveBeenCalledTimes(1);
		expect(onUnsubscribe).not.toHaveBeenCalled();
		void res.promise.finally(() => {
			throw new Error('res.promise is expected not to resolve');
		});
		// non-truthy values should not trigger promise resolution:
		store.set(0);
		store.set(false);
		// calling unsubscribe
		res.unsubscribe();
		expect(onUse).toHaveBeenCalledTimes(1);
		expect(onUnsubscribe).toHaveBeenCalledTimes(1);
		store.set(value); // it is now too late to set the truthy value, the promise will not be resolved
		await new Promise((resolve) => setTimeout(resolve, 200));
	});
});

describe(`promiseFromTimeout`, () => {
	test(`not calling unsubscribe in time`, async () => {
		clearTimeoutSpy.mockClear();
		const timeBefore = performance.now();
		const res = promiseFromTimeout(100);
		await res.promise;
		const timeAfter = performance.now();
		const actualTime = Math.round(timeAfter - timeBefore);
		expect(actualTime).toBeGreaterThanOrEqual(100);
		// FIXME investigate why the toBeLessThan are not reliable
		// expect(actualTime).toBeLessThan(150);
		res.unsubscribe();
		expect(clearTimeoutSpy).not.toHaveBeenCalled();
	});

	test(`calling unsubscribe`, async () => {
		clearTimeoutSpy.mockClear();
		const res = promiseFromTimeout(100);
		void res.promise.finally(() => {
			throw new Error('res.promise is expected not to resolve');
		});
		await new Promise((resolve) => setTimeout(resolve, 20));
		res.unsubscribe();
		expect(clearTimeoutSpy).toHaveBeenCalledOnce();
		await new Promise((resolve) => setTimeout(resolve, 200));
		res.unsubscribe();
		expect(clearTimeoutSpy).toHaveBeenCalledOnce();
	});
});

describe(`promiseFromEvent`, () => {
	test(`not calling unsubscribe in time`, async () => {
		const target = document.createElement('div');
		const removeEventListener = vi.spyOn(target, 'removeEventListener');
		const res = promiseFromEvent(target, 'something');
		const event = new Event('something');
		target.dispatchEvent(event);
		expect(removeEventListener).toHaveBeenCalledOnce();
		res.unsubscribe();
		const value = await res.promise;
		expect(value).toBe(event);
		expect(removeEventListener).toHaveBeenCalledOnce();
	});

	test(`calling unsubscribe in time`, async () => {
		const target = document.createElement('div');
		const otherTarget = target.appendChild(document.createElement('div'));
		const removeEventListener = vi.spyOn(target, 'removeEventListener');
		const res = promiseFromEvent(target, 'something');
		otherTarget.dispatchEvent(new Event('something', {bubbles: true})); // not the right target, should be ignored
		void res.promise.finally(() => {
			throw new Error('res.promise is expected not to resolve');
		});
		res.unsubscribe();
		expect(removeEventListener).toHaveBeenCalledOnce();
		target.dispatchEvent(new Event('something'));
		await new Promise((resolve) => setTimeout(resolve, 200));
	});
});
