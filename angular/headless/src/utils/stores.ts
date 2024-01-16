import type {ReadableSignal} from '@amadeus-it-group/tansu';
import type {Signal} from '@angular/core';
import {DestroyRef, inject, signal} from '@angular/core';
import {ZoneWrapper} from './zone';

export * from '@agnos-ui/core/utils/stores';

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
	const res = signal(undefined as any as T);
	const subscription = zoneWrapper.outsideNgZone(tansuSignal.subscribe)((value) => {
		res.set(value);
		zoneWrapper.planNgZoneRun();
	});
	inject(DestroyRef).onDestroy(zoneWrapper.outsideNgZone(subscription));
	return res;
};
