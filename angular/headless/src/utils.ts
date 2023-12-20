import type {ContextWidget, Widget, WidgetFactory, WidgetProps, WidgetState} from '@agnos-ui/core';
import {toReadableStore, toSlotContextWidget} from '@agnos-ui/core';
import type {ReadableSignal} from '@amadeus-it-group/tansu';
import {computed, writable} from '@amadeus-it-group/tansu';
import type {OnChanges, Signal, SimpleChanges, TemplateRef} from '@angular/core';
import {DestroyRef, Directive, Injectable, NgZone, inject, signal} from '@angular/core';
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

const noop = () => {};
const identity = <T>(a: T) => a;

type Wrapper = <T>(fn: T) => T;

const createObjectWrapper =
	(wrap: Wrapper): Wrapper =>
	(object) => {
		if (!object || typeof object !== 'object') {
			return object;
		}
		const res = {} as any;
		for (const key of Object.keys(object)) {
			res[key] = wrap((object as any)[key]);
		}
		return res;
	};

const createReturnValueWrapper =
	(wrapReturnValue: Wrapper, wrapResult: Wrapper): Wrapper =>
	(fn) =>
		wrapResult(typeof fn === 'function' ? (((...args: any[]) => wrapReturnValue(fn(...args))) as any) : fn);

@Injectable({
	providedIn: 'root',
})
class ZoneWrapper {
	readonly #zone = inject(NgZone);
	readonly #hasZone = this.#zone.run(() => NgZone.isInAngularZone()); // check if zone is enabled (can be NoopZone, cf https://angular.io/guide/zone#noopzone)
	#runNeeded = false;
	#runPlanned = false;

	planNgZoneRun = this.#hasZone
		? () => {
				if (this.#zone.isStable) {
					this.#runNeeded = true;
					if (!this.#runPlanned) {
						this.#runPlanned = true;
						(async () => {
							await 0;
							this.#runPlanned = false;
							if (this.#runNeeded) {
								this.ngZoneRun(noop);
							}
						})();
					}
				}
			}
		: noop;

	ngZoneRun<T>(fn: () => T): T {
		this.#runNeeded = false;
		return this.#zone.run(fn);
	}

	insideNgZone: Wrapper = this.#hasZone
		? (fn) => (typeof fn === 'function' ? (((...args: any[]) => this.ngZoneRun(() => fn(...args))) as any) : fn)
		: identity;
	insideNgZoneWrapFunctionsObject = createObjectWrapper(this.insideNgZone);

	outsideNgZone: Wrapper = this.#hasZone
		? (fn) => (typeof fn === 'function' ? (((...args: any[]) => this.#zone.runOutsideAngular(() => fn(...args))) as any) : fn)
		: identity;

	outsideNgZoneWrapFunctionsObject = createObjectWrapper(this.outsideNgZone);
	outsideNgZoneWrapDirective = createReturnValueWrapper(this.outsideNgZoneWrapFunctionsObject, this.outsideNgZone);
	outsideNgZoneWrapDirectivesObject = createObjectWrapper(this.outsideNgZoneWrapDirective);
}

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

export type AngularWidget<W extends Widget> = W & {
	widget: ContextWidget<W>;
	ngState: Signal<WidgetState<W>>;
	patchSlots(slots: {
		[K in keyof WidgetProps<W> & `slot${string}`]: WidgetProps<W>[K] extends SlotContent<infer U> ? TemplateRef<U> | undefined : never;
	}): void;
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

export function patchSimpleChanges(patchFn: (obj: any) => void, changes: SimpleChanges) {
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
