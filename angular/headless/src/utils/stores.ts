import type {ReadableSignal} from '@amadeus-it-group/tansu';
import type {Signal} from '@angular/core';
import {DestroyRef, inject, signal} from '@angular/core';
import {ZoneWrapper} from './zone';

export * from '@agnos-ui/core/utils/stores';

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
