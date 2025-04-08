import {computed, type ReadableSignal, writable} from '@amadeus-it-group/tansu';
import type {AfterContentChecked, OnChanges, OnInit, SimpleChanges, TemplateRef} from '@angular/core';
import {Directive, Injector, inject, runInInjectionContext} from '@angular/core';
import type {AngularState, AngularWidget, IsSlotContent, SlotContent, Widget, WidgetFactory, WidgetProps} from '../types';
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
 * @param factory - the widget factory to call
 * @param options - the options
 * @param options.defaultConfig - the default config of the widget
 * @param options.widgetConfig - the config of the widget, overriding the defaultConfig
 * @param options.events - the events of the widget
 * @param options.afterInit - a callback to call after successful setup of the widget
 * @param options.slotTemplates - a function to provide all slot templates using child queries
 * @param options.slotChildren - a function to provide the default children slot using a view query
 * @returns the widget
 */
export const callWidgetFactoryWithConfig = <W extends Widget>(
	factory: WidgetFactory<W>,
	options?: {
		defaultConfig?: Partial<WidgetProps<W>> | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
		widgetConfig?: null | undefined | ReadableSignal<Partial<WidgetProps<W>> | undefined>;
		events?: Partial<Pick<WidgetProps<W>, keyof WidgetProps<W> & `on${string}`>>;
		afterInit?: (widget: AngularWidget<W>) => void;
		slotTemplates?: () => {
			[K in keyof WidgetProps<W> as IsSlotContent<WidgetProps<W>[K]> extends 0 ? never : K]: WidgetProps<W>[K] extends SlotContent<infer U>
				? TemplateRef<U> | undefined
				: never;
		};
		slotChildren?: () => TemplateRef<void> | undefined;
	},
): AngularWidget<W> => {
	let {defaultConfig, widgetConfig, events, afterInit, slotTemplates, slotChildren} = options ?? {};
	const injector = inject(Injector);
	const slots$ = writable({});
	const props = {};
	let initDone: () => void;
	const patchSlots = createPatchSlots(slots$.set);

	const res = {
		initialized: new Promise<void>((resolve) => {
			initDone = resolve;
		}),
		updateSlots: () => {
			if (slotTemplates) {
				patchSlots(slotTemplates());
			}
		},
		patch(newProps: Partial<WidgetProps<W>>) {
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
					config: computed(() => ({
						...defaultConfig$(),
						children: slotChildren?.(),
						...widgetConfig?.(),
						...slots$(),
						...(events as Partial<WidgetProps<W>>),
					})),
					props,
				});
				Object.assign(res, {
					patch: zoneWrapper.outsideNgZone(widget.patch),
					directives: zoneWrapper.outsideNgZoneWrapDirectivesObject(widget.directives),
					api: zoneWrapper.outsideNgZoneWrapFunctionsObject(widget.api),
					state: Object.fromEntries(
						Object.entries<ReadableSignal<unknown>>(widget.stores as any).map(([key, val]) => [key.slice(0, -1), toAngularSignal(val)]),
					),
				});
				afterInit?.(res as AngularWidget<W>);
				initDone();
			});
		},
	};

	return res as AngularWidget<W>;
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

/**
 * An abstract base class for widget directives, providing common functionality
 * for Angular components that interact with widgets.
 *
 * @template W - The type of the widget.
 */
@Directive()
export abstract class BaseWidgetDirective<W extends Widget> implements OnChanges, OnInit, AfterContentChecked {
	constructor(private readonly _widget: AngularWidget<W>) {}

	/**
	 * Retrieves the widget api
	 * @returns the widget api
	 */
	get api(): W['api'] {
		return this._widget.api;
	}

	/**
	 * Retrieves the widget state. Each property of the state is exposed through an Angular {@link https://angular.dev/api/core/Signal | Signal}
	 * @returns the widget state
	 */
	get state(): AngularState<W> {
		return this._widget.state;
	}

	/**
	 * Retrieves the widget directives
	 * @returns the widget directives
	 */
	get directives(): W['directives'] {
		return this._widget.directives;
	}

	/**
	 * @inheritdoc
	 * @internal
	 */
	ngOnChanges(changes: SimpleChanges): void {
		patchSimpleChanges(this._widget.patch, changes);
	}

	/** @internal */
	ngOnInit(): void {
		this._widget.ngInit();
	}

	/** @internal */
	ngAfterContentChecked(): void {
		this._widget.updateSlots();
	}
}
