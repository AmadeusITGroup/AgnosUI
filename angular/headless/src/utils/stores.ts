import type {ReadableSignal, WritableSignal as TansuWritableSignal} from '@amadeus-it-group/tansu';
import type {Signal, WritableSignal} from '@angular/core';
import {DestroyRef, inject, signal} from '@angular/core';

export * from '@agnos-ui/core/utils/stores';

/**
 * Converts a Tansu `ReadableSignal` to an Angular `Signal`.
 *
 * This function wraps the provided Tansu signal in an Angular signal. It subscribes to the
 * Tansu signal and updates the Angular signal with the received values. The equality function
 * for the Angular signal is set to always return false, ensuring that every new value from the
 * Tansu signal triggers an update.
 *
 * @template T - The type of the value emitted by the signals.
 * @param tansuSignal - The Tansu signal to convert.
 * @returns - The resulting Angular signal.
 */
export const toAngularSignal = <T>(tansuSignal: ReadableSignal<T>): Signal<T> => {
	// The equality of objects from 2 sequential emissions is already checked in tansu signal.
	// Here we'll always emit the value received from tansu signal, therefor the equality function
	const res = signal(undefined as any as T, {equal: () => false});
	const subscription = tansuSignal.subscribe((value) => {
		res.set(value);
	});
	inject(DestroyRef).onDestroy(subscription);

	return res.asReadonly();
};

/**
 * Converts a Tansu `WritableSignal` to an Angular `WritableSignal`.
 *
 * This function wraps the provided Tansu signal in an Angular signal. It subscribes to the
 * Tansu signal and updates the Angular signal with the received values. The equality function
 * for the Angular signal is set to always return false, ensuring that every new value from the
 * Tansu signal triggers an update.
 *
 * @template T - The type of the value emitted by the signals.
 * @param tansuSignal - The Tansu signal to convert.
 * @returns - The resulting Angular signal.
 */
export const toAngularWritableSignal = <T>(tansuSignal: TansuWritableSignal<T>): WritableSignal<T> => {
	const res = signal(undefined as any as T, {equal: () => false});
	const set = res.set.bind(res);
	const subscription = tansuSignal.subscribe((value) => {
		set(value);
	});
	inject(DestroyRef).onDestroy(subscription);
	res.set = tansuSignal.set;
	res.update = tansuSignal.update;
	return res;
};
