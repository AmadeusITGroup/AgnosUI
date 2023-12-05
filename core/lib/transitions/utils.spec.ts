import {writable} from '@amadeus-it-group/tansu';
import {describe, test, expect, vi} from 'vitest';
import {promiseFromStore, promiseFromEvent, promiseFromTimeout} from './utils';

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
		res.promise.finally(() => {
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
		expect(actualTime).toBeLessThan(150);
		res.unsubscribe();
		expect(clearTimeoutSpy).not.toHaveBeenCalled();
	});

	test(`calling unsubscribe`, async () => {
		clearTimeoutSpy.mockClear();
		const res = promiseFromTimeout(100);
		res.promise.finally(() => {
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
		res.promise.finally(() => {
			throw new Error('res.promise is expected not to resolve');
		});
		res.unsubscribe();
		expect(removeEventListener).toHaveBeenCalledOnce();
		target.dispatchEvent(new Event('something'));
		await new Promise((resolve) => setTimeout(resolve, 200));
	});
});
