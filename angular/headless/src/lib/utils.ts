import type {Widget, WidgetFactory, WidgetProps} from '@agnos-ui/core';
import {toReadableStore} from '@agnos-ui/core';
import type {ReadableSignal} from '@amadeus-it-group/tansu';
import {computed, writable} from '@amadeus-it-group/tansu';
import type {SimpleChanges, TemplateRef} from '@angular/core';
import type {SlotContent} from './slotTypes';

const createPatchSlots = <T extends object>(set: (object: Partial<T>) => void) => {
	let lastValue: Partial<T> = {};
	return (object: T) => {
		const newValue: Partial<T> = {};
		let hasChange = false;
		for (const key of Object.keys(object) as (string & keyof T)[]) {
			const objectKey = (object as any)[key];
			if (objectKey != null) {
				// only use defined slots
				newValue[key] = objectKey;
			}
			if (objectKey != lastValue[key]) {
				hasChange = true;
			}
		}
		if (hasChange) {
			lastValue = newValue;
			set(newValue);
		}
	};
};

export type WithPatchSlots<W extends Widget> = W & {
	patchSlots(slots: {
		[K in keyof WidgetProps<W> & `slot${string}`]: WidgetProps<W>[K] extends SlotContent<infer U> ? TemplateRef<U> | undefined : never;
	}): void;
};

export const callWidgetFactoryWithConfig = <W extends Widget>(
	factory: WidgetFactory<W>,
	defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined>,
	widgetConfig?: null | undefined | ReadableSignal<Partial<WidgetProps<W>> | undefined>
): WithPatchSlots<W> => {
	const defaultConfig$ = toReadableStore(defaultConfig);
	const slots$ = writable({});
	return {
		...factory({
			config: computed(() => ({...defaultConfig$(), ...widgetConfig?.(), ...slots$()})),
		}),
		patchSlots: createPatchSlots(slots$.set),
	};
};

export function patchSimpleChanges(patchFn: (obj: any) => void, changes: SimpleChanges) {
	const obj: any = {};
	for (const [key, simpleChange] of Object.entries(changes)) {
		if (simpleChange !== undefined) {
			obj[key] = simpleChange.currentValue;
		}
	}
	patchFn(obj);
}
