import type {SubscribableStore} from '@amadeus-it-group/tansu';
import type {SimpleChanges} from '@angular/core';

export function patchSimpleChanges(patchFn: (obj: any) => void, changes: SimpleChanges) {
	const obj: any = {};
	for (const [key, simpleChange] of Object.entries(changes)) {
		if (simpleChange !== undefined) {
			obj[key] = simpleChange.currentValue;
		}
	}
	patchFn(obj);
}

export type ExtractStoreType<T> = T extends SubscribableStore<infer U> ? U : never;
