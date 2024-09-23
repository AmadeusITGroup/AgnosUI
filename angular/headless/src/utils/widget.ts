import {computed, writable, type ReadableSignal} from '@amadeus-it-group/tansu';
import type {OnChanges, OnInit, Signal, SimpleChanges} from '@angular/core';
import {Directive, Injector, inject, runInInjectionContext} from '@angular/core';
import {
	toSlotContextWidget,
	type AngularWidget,
	type ContextWidget,
	type Widget,
	type WidgetFactory,
	type WidgetProps,
	type WidgetState,
} from '../types';
import {toAngularSignal, toReadableStore} from './stores';
import {ZoneWrapper} from './zone';

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

/**
 * Call a widget factory using provided configs.
 *
 * @param parameter - the parameter
 * @param parameter.factory - the widget factory to call
 * @param parameter.defaultConfig - the default config of the widget
 * @param parameter.widgetConfig - the config of the widget, overriding the defaultConfig
 * @param parameter.events - the events of the widget
 * @param parameter.afterInit - a callback to call after successful setup of the widget
 * @returns the widget
 */
export const callWidgetFactoryWithConfig = <W extends Widget>({
	factory,
	defaultConfig,
	widgetConfig,
	events,
	afterInit,
}: {
	factory: WidgetFactory<W>;
	defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
	widgetConfig?: null | undefined | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
	events?: Partial<Pick<WidgetProps<W>, keyof WidgetProps<W> & `on${string}`>>;
	afterInit?: () => void;
}): AngularWidget<W> => {
	const injector = inject(Injector);
	const slots$ = writable({});
	const props = {};
	let initDone: () => void;
	const res = {
		initialized: new Promise((resolve) => {
			initDone = resolve;
		}),
		patchSlots: createPatchSlots(slots$.set),
		patch(newProps) {
			// temporary function replaced in ngInit
			Object.assign(props, newProps);
		},
		ngInit() {
			runInInjectionContext(injector, () => {
				const zoneWrapper = inject(ZoneWrapper);
				factory = zoneWrapper.outsideNgZone(factory);
				const defaultConfig$ = toReadableStore(defaultConfig);
				events = zoneWrapper.insideNgZoneWrapFunctionsObject(events);
				const widget = factory({
					config: computed(() => ({...defaultConfig$(), ...widgetConfig?.(), ...slots$(), ...(events as Partial<WidgetProps<W>>)})),
					props,
				});
				const wrappedWidget: W = {
					...widget,
					patch: zoneWrapper.outsideNgZone(widget.patch),
					directives: zoneWrapper.outsideNgZoneWrapDirectivesObject(widget.directives),
					actions: zoneWrapper.outsideNgZoneWrapFunctionsObject(widget.actions),
					api: zoneWrapper.outsideNgZoneWrapFunctionsObject(widget.api),
				};
				Object.assign(res, wrappedWidget, {
					widget: toSlotContextWidget(wrappedWidget),
					ngState: toAngularSignal(wrappedWidget.state$ as ReadableSignal<WidgetState<W>>),
				});
				afterInit?.();
				initDone();
			});
		},
	} as AngularWidget<W>;

	return res;
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
export abstract class BaseWidgetDirective<W extends Widget> implements OnChanges, OnInit {
	protected abstract readonly _widget: AngularWidget<W>;

	/**
	 * Retrieves the widget api
	 * @returns the widget api
	 */
	get api(): W['api'] {
		return this._widget.api;
	}

	/**
	 * Retrieves the widget state as an Angular {@link Signal}
	 * @returns the widget state
	 */
	get state(): Signal<WidgetState<W>> {
		return this._widget.ngState;
	}

	/**
	 * Retrieves the widget
	 * @returns the widget
	 */
	get widget(): ContextWidget<W> {
		return this._widget.widget;
	}

	/** @inheritdoc */
	ngOnChanges(changes: SimpleChanges): void {
		patchSimpleChanges(this._widget.patch, changes);
	}

	/** @inheritdoc */
	ngOnInit(): void {
		this._widget.ngInit();
	}
}
