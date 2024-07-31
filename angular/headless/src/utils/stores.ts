import type {ReadableSignal} from '@amadeus-it-group/tansu';
import type {Signal} from '@angular/core';
import {DestroyRef, inject, signal} from '@angular/core';
import {ZoneWrapper} from './zone';

/**
 * Convert a tansu readable signal into an Angular signal.
 *
 * @param tansuSignal - a tansu readable signal
 * @returns an angular signal
 *
 * @remarks
 * Note that as it uses Angular's `inject`, this can only be called at component construction time.
 */
export const toAngularSignal = <T>(tansuSignal: ReadableSignal<T>): Signal<T> => {
	const zoneWrapper = inject(ZoneWrapper);
	// The equality of objects from 2 sequential emissions is already checked in tansu signal.
	// Here we'll always emit the value received from tansu signal, therefor the equality function
	const res = signal(undefined as any as T, {equal: () => false});
	const subscription = zoneWrapper.outsideNgZone(tansuSignal.subscribe)((value) => {
		res.set(value);
		zoneWrapper.planNgZoneRun();
	});
	inject(DestroyRef).onDestroy(zoneWrapper.outsideNgZone(subscription));
	return res;
};
