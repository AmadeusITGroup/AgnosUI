import type {OnChanges, Signal, SimpleChanges} from '@angular/core';
import {Directive, inject} from '@angular/core';
import {
	toSlotContextWidget,
	type AngularWidget,
	type ContextWidget,
	type Widget,
	type WidgetFactory,
	type WidgetProps,
	type WidgetState,
} from '../types';
import {writable, type ReadableSignal, computed} from '@amadeus-it-group/tansu';
import {ZoneWrapper} from './zone';
import {toAngularSignal, toReadableStore} from './stores';

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

export const callWidgetFactoryWithConfig = <W extends Widget>({
	factory,
	defaultConfig,
	widgetConfig,
	events,
}: {
	factory: WidgetFactory<W>;
	defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
	widgetConfig?: null | undefined | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
	events: Pick<WidgetProps<W>, keyof WidgetProps<W> & `on${string}`>;
}): AngularWidget<W> => {
	const zoneWrapper = inject(ZoneWrapper);
	factory = zoneWrapper.outsideNgZone(factory);
	const defaultConfig$ = toReadableStore(defaultConfig);
	const slots$ = writable({});
	events = zoneWrapper.insideNgZoneWrapFunctionsObject(events);
	const widget = factory({
		config: computed(() => ({...defaultConfig$(), ...widgetConfig?.(), ...slots$(), ...(events as Partial<WidgetProps<W>>)})),
	});
	const wrappedWidget: W = {
		...widget,
		patch: zoneWrapper.outsideNgZone(widget.patch),
		directives: zoneWrapper.outsideNgZoneWrapDirectivesObject(widget.directives),
		actions: zoneWrapper.outsideNgZoneWrapFunctionsObject(widget.actions),
		api: zoneWrapper.outsideNgZoneWrapFunctionsObject(widget.api),
	};
	return {
		...wrappedWidget,
		patchSlots: createPatchSlots(slots$.set),
		widget: toSlotContextWidget(wrappedWidget),
		ngState: toAngularSignal(wrappedWidget.state$ as ReadableSignal<WidgetState<W>>),
	};
};

function patchSimpleChanges(patchFn: (obj: any) => void, changes: SimpleChanges) {
	const obj: any = {};
	for (const [key, simpleChange] of Object.entries(changes)) {
		if (simpleChange !== undefined) {
			obj[key] = simpleChange.currentValue;
		}
	}
	patchFn(obj);
}

@Directive()
export abstract class BaseWidgetDirective<W extends Widget> implements OnChanges {
	protected abstract readonly _widget: AngularWidget<W>;

	get api(): W['api'] {
		return this._widget.api;
	}

	get state(): Signal<WidgetState<W>> {
		return this._widget.ngState;
	}

	get widget(): ContextWidget<W> {
		return this._widget.widget;
	}

	ngOnChanges(changes: SimpleChanges): void {
		patchSimpleChanges(this._widget.patch, changes);
	}
}
