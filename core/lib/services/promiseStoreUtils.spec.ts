import {writable} from '@amadeus-it-group/tansu';
import {describe, expect, test} from 'vitest';
import type {PromiseState} from './promiseStoreUtils';
import {promisePending, promiseStateStore, promiseStoreToPromiseStateStore, promiseStoreToValueStore} from './promiseStoreUtils';

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
