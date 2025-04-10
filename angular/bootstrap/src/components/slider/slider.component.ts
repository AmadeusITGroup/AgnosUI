import type {SlotContent} from '@agnos-ui/angular-headless';
import {
	BaseWidgetDirective,
	ComponentTemplate,
	SlotDirective,
	UseDirective,
	auBooleanAttribute,
	auNumberAttribute,
	useDirectiveForHost,
} from '@agnos-ui/angular-headless';
import {
	ChangeDetectionStrategy,
	Component,
	Directive,
	type OnDestroy,
	TemplateRef,
	ViewEncapsulation,
	contentChild,
	forwardRef,
	inject,
	input,
	output,
	viewChild,
} from '@angular/core';
import {type ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';
import {callWidgetFactory} from '../../config';
import type {SliderContext, SliderSlotHandleContext, SliderSlotLabelContext, SliderSlotTickContext, SliderWidget} from './slider.gen';
import {createSlider} from './slider.gen';

/**
 * Directive to provide a template reference for slider labels.
 *
 * This directive uses a template reference to render the {@link SliderSlotLabelContext}.
 */
@Directive({selector: 'ng-template[auSliderLabel]'})
export class SliderLabelDirective {
	public templateRef = inject(TemplateRef<SliderSlotLabelContext>);
	static ngTemplateContextGuard(_dir: SliderLabelDirective, context: unknown): context is SliderSlotLabelContext {
		return true;
	}
}
/**
 * Directive representing a handle for a slider component.
 *
 * This directive uses a template reference to render the {@link SliderSlotHandleContext}.
 */
@Directive({selector: 'ng-template[auSliderHandle]'})
export class SliderHandleDirective {
	public templateRef = inject(TemplateRef<SliderSlotHandleContext>);
	static ngTemplateContextGuard(_dir: SliderHandleDirective, context: unknown): context is SliderSlotHandleContext {
		return true;
	}
}

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [UseDirective, SliderHandleDirective],
	template: `
		<ng-template auSliderHandle #handle let-state="state" let-directives="directives" let-item="item">
			<button [auUse]="[directives.handleDirective, {item}]" (keydown)="onKeyDown($event)"></button>
		</ng-template>
	`,
})
class SliderDefaultHandleSlotComponent implements OnDestroy {
	readonly handle = viewChild.required<TemplateRef<SliderSlotHandleContext>>('handle');

	private updateTimeout?: ReturnType<typeof setTimeout>;

	/**
	 * Key handler that sets the refocus element only on the key strokes that move
	 * the element up the DOM
	 * @param event object containting key stroke and the target element
	 */
	onKeyDown(event: KeyboardEvent) {
		switch (event.key) {
			case 'ArrowDown':
			case 'ArrowLeft':
			case 'Home':
			case 'ArrowUp':
			case 'ArrowRight':
			case 'End':
				clearTimeout(this.updateTimeout);
				this.updateTimeout = setTimeout(() => {
					(event.target as HTMLElement)?.focus();
				});
				break;
			default:
				break;
		}
	}

	ngOnDestroy() {
		clearTimeout(this.updateTimeout);
	}
}

/**
 * A constant representing the default slot handle for the slider component.
 */
export const sliderDefaultSlotHandle: SlotContent<SliderSlotHandleContext> = new ComponentTemplate(SliderDefaultHandleSlotComponent, 'handle');

/**
 * Directive representing a tick for a slider component.
 *
 * This directive uses a template reference to render the {@link SliderSlotTickContext}.
 */
@Directive({selector: 'ng-template[auSliderTick]'})
export class SliderTickDirective {
	public templateRef = inject(TemplateRef<SliderSlotTickContext>);
	static ngTemplateContextGuard(_dir: SliderTickDirective, context: unknown): context is SliderSlotTickContext {
		return true;
	}
}

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [UseDirective, SliderTickDirective],
	template: `
		<ng-template auSliderTick #tick let-state="state" let-directives="directives" let-tick="tick">
			@if (tick.displayLabel) {
				<span [auUse]="[directives.tickLabelDirective, {tick}]">
					{{ tick.value }}
				</span>
			}
			<span [auUse]="[directives.tickDirective, {tick}]">
				<svg xmlns="http://www.w3.org/2000/svg">
					<circle class="au-slider-tick-outer" [class.au-slider-tick-disabled]="state.disabled()" [class.au-slider-tick-selected]="tick.selected" />
					@if (tick.selected) {
						<circle class="au-slider-tick-inner au-slider-tick-selected" />
					}
				</svg>
			</span>
		</ng-template>
	`,
})
class SliderDefaultTickSlotComponent {
	readonly tick = viewChild.required<TemplateRef<SliderSlotTickContext>>('tick');
}

/**
 * A constant representing the default slot tick for the slider component.
 */
export const sliderDefaultSlotTick: SlotContent<SliderSlotTickContext> = new ComponentTemplate(SliderDefaultTickSlotComponent, 'tick');

/**
 * Directive that provides structure for the slider component.
 *
 * This directive uses a `TemplateRef` to handle the context of the slider slot.
 */
@Directive({selector: 'ng-template[auSliderStructure]'})
export class SliderStructureDirective {
	public templateRef = inject(TemplateRef<SliderSlotHandleContext>);
	static ngTemplateContextGuard(_dir: SliderStructureDirective, context: unknown): context is SliderSlotHandleContext {
		return true;
	}
}

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [SlotDirective, SliderStructureDirective, UseDirective],
	template: `
		<ng-template auSliderStructure #structure let-state="state" let-directives="directives" let-api="api">
			@for (option of state.progressDisplayOptions(); track option.id) {
				<div [auUse]="[directives.progressDisplayDirective, {option}]"></div>
			}
			<div [auUse]="directives.clickableAreaDirective"></div>
			@if (state.showMinMaxLabels()) {
				<div [auUse]="directives.minLabelDirective">
					<ng-template [auSlot]="state.label()" [auSlotProps]="{state, api, directives, value: state.min()}" />
				</div>
				<div [auUse]="directives.maxLabelDirective">
					<ng-template [auSlot]="state.label()" [auSlotProps]="{state, api, directives, value: state.max()}" />
				</div>
			}
			@if (state.showValueLabels() && state.combinedLabelDisplay()) {
				<div [auUse]="directives.combinedHandleLabelDisplayDirective">
					@if (state.rtl()) {
						<ng-template [auSlot]="state.label()" [auSlotProps]="{state, api, directives, value: state.sortedValues()[1]}" /> -
						<ng-template [auSlot]="state.label()" [auSlotProps]="{state, api, directives, value: state.sortedValues()[0]}" />
					} @else {
						<ng-template [auSlot]="state.label()" [auSlotProps]="{state, api, directives, value: state.sortedValues()[0]}" /> -
						<ng-template [auSlot]="state.label()" [auSlotProps]="{state, api, directives, value: state.sortedValues()[1]}" />
					}
				</div>
			}
			@for (tick of state.ticks(); track tick.position) {
				<ng-template [auSlot]="state.tick()" [auSlotProps]="{state, api, directives, tick}" />
			}
			@for (item of state.sortedHandles(); track item.id; let i = $index) {
				<ng-template [auSlot]="state.handle()" [auSlotProps]="{state, api, directives, item}" />
				@if (state.showValueLabels() && !state.combinedLabelDisplay()) {
					<div [auUse]="[directives.handleLabelDisplayDirective, {index: i}]">
						<ng-template [auSlot]="state.label()" [auSlotProps]="{state, api, directives, value: state.values()[i]}" />
					</div>
				}
			}
		</ng-template>
	`,
})
class SliderDefaultStructureSlotComponent {
	readonly structure = viewChild.required<TemplateRef<SliderContext>>('structure');
}

/**
 * Represents the default slot structure for the slider component.
 */
export const sliderDefaultSlotStructure: SlotContent<SliderContext> = new ComponentTemplate(SliderDefaultStructureSlotComponent, 'structure');

/**
 * SliderComponent is an Angular component that extends the BaseWidgetDirective
 * to provide a customizable slider widget. This component allows for various
 * configurations and customizations through its inputs and outputs.
 */
@Component({
	selector: '[auSlider]',
	changeDetection: ChangeDetectionStrategy.OnPush,
	encapsulation: ViewEncapsulation.None,
	providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => SliderComponent), multi: true}],
	imports: [SlotDirective],
	host: {
		'(blur)': 'handleBlur()',
	},
	template: ` <ng-template [auSlot]="state.structure()" [auSlotProps]="{state, api, directives}" /> `,
})
export class SliderComponent extends BaseWidgetDirective<SliderWidget> implements ControlValueAccessor {
	/**
	 * CSS classes to be applied on the widget main container
	 *
	 * @defaultValue `''`
	 */
	readonly className = input<string>(undefined, {alias: 'auClassName'});

	/**
	 * Minimum value that can be assigned to the slider
	 *
	 * @defaultValue `0`
	 */
	readonly min = input(undefined, {alias: 'auMin', transform: auNumberAttribute});

	/**
	 * Maximum value that can be assigned to the slider
	 *
	 * @defaultValue `100`
	 */
	readonly max = input(undefined, {alias: 'auMax', transform: auNumberAttribute});

	/**
	 * Unit value between slider steps
	 *
	 * @defaultValue `1`
	 */
	readonly stepSize = input(undefined, {alias: 'auStepSize', transform: auNumberAttribute});

	/**
	 * Current slider values
	 *
	 * @defaultValue `[0]`
	 */
	readonly values = input<number[]>(undefined, {alias: 'auValues'});

	/**
	 * It `true` slider display is inversed
	 *
	 * @defaultValue `false`
	 */
	readonly rtl = input(undefined, {alias: 'auRtl', transform: auBooleanAttribute});

	/**
	 * If `true` the value labels are displayed on the slider
	 *
	 * @defaultValue `true`
	 */
	readonly showValueLabels = input(undefined, {alias: 'auShowValueLabels', transform: auBooleanAttribute});

	/**
	 * If `true` the min and max labels are displayed on the slider
	 *
	 * @defaultValue `true`
	 */
	readonly showMinMaxLabels = input(undefined, {alias: 'auShowMinMaxLabels', transform: auBooleanAttribute});

	/**
	 * Return the value for the 'aria-label' attribute for the handle
	 * @param sortedIndex - index of the handle in the sorted list
	 *
	 * @defaultValue
	 * ```ts
	 * () => 'Value'
	 * ```
	 */
	readonly ariaLabel = input<(sortedIndex: number) => string>(undefined, {alias: 'auAriaLabel'});

	/**
	 * Return the value for the 'aria-labelledBy' attribute for the handle
	 * @param sortedIndex - index of the handle in the sorted list
	 *
	 * @defaultValue
	 * ```ts
	 * () => ''
	 * ```
	 */
	readonly ariaLabelledBy = input<(sortedIndex: number) => string>(undefined, {alias: 'auAriaLabelledBy'});

	/**
	 * Return the value for the 'aria-valuetext' attribute for the handle
	 * @param value - value of the handle
	 * @param sortedIndex - index of the handle in the sorted list
	 *
	 * @defaultValue
	 * ```ts
	 * (value: number) => ''
	 * ```
	 */
	readonly ariaValueText = input<(value: number, sortedIndex: number) => string>(undefined, {alias: 'auAriaValueText'});

	/**
	 * If `true` slider value cannot be changed but the slider is still focusable
	 *
	 * @defaultValue `false`
	 */
	readonly readonly = input(undefined, {alias: 'auReadonly', transform: auBooleanAttribute});

	/**
	 * If `true` slider value cannot be changed and the slider cannot be focused
	 *
	 * @defaultValue `false`
	 */
	readonly disabled = input(undefined, {alias: 'auDisabled', transform: auBooleanAttribute});

	/**
	 * If `true` is vertically positioned otherwise it is horizontal
	 *
	 * @defaultValue `false`
	 */
	readonly vertical = input(undefined, {alias: 'auVertical', transform: auBooleanAttribute});

	/**
	 * If `true` the ticks are displayed on the slider
	 *
	 * @defaultValue `false`
	 */
	readonly showTicks = input(undefined, {alias: 'auShowTicks', transform: auBooleanAttribute});

	/**
	 * Unit value between the ticks
	 * If value is set to `0` the {@link stepSize} is used to space the ticks
	 *
	 * @defaultValue `0`
	 */
	readonly tickInterval = input(undefined, {alias: 'auTickInterval', transform: auNumberAttribute});

	/**
	 * If `true` the tick values are displayed on the slider
	 *
	 * @defaultValue `true`
	 */
	readonly showTickValues = input(undefined, {alias: 'auShowTickValues', transform: auBooleanAttribute});

	/**
	 * An event emitted when slider values are changed
	 *
	 * Event payload equals to the updated slider values
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	readonly valuesChange = output<number[]>({alias: 'auValuesChange'});

	/**
	 * Slot to change the default labels of the slider
	 *
	 * @defaultValue
	 * ```ts
	 * ({value}: SliderSlotLabelContext) => '' + value
	 * ```
	 */
	readonly label = input<SlotContent<SliderSlotLabelContext>>(undefined, {alias: 'auLabel'});
	readonly slotLabelFromContent = contentChild(SliderLabelDirective);

	/**
	 * Slot to change the default display of the slider
	 */
	readonly structure = input<SlotContent<SliderContext>>(undefined, {alias: 'auStructure'});
	readonly slotStructureFromContent = contentChild(SliderStructureDirective);

	/**
	 * Slot to change the handlers
	 */
	readonly handle = input<SlotContent<SliderSlotHandleContext>>(undefined, {alias: 'auHandle'});
	readonly slotHandleFromContent = contentChild(SliderHandleDirective);

	/**
	 * Slot to change the ticks
	 */
	readonly tick = input<SlotContent<SliderSlotTickContext>>(undefined, {alias: 'auTick'});
	readonly slotTickFromContent = contentChild(SliderTickDirective);

	constructor() {
		super(
			callWidgetFactory(createSlider, {
				defaultConfig: {
					structure: sliderDefaultSlotStructure,
					handle: sliderDefaultSlotHandle,
					tick: sliderDefaultSlotTick,
				},
				events: {
					onValuesChange: (event) => {
						this.onChange(event);
						this.onTouched();
						this.valuesChange.emit(event);
					},
				},
				afterInit: (widget) => {
					useDirectiveForHost(widget.directives.sliderDirective);
				},
				slotTemplates: () => ({
					structure: this.slotStructureFromContent()?.templateRef,
					handle: this.slotHandleFromContent()?.templateRef,
					label: this.slotLabelFromContent()?.templateRef,
					tick: this.slotTickFromContent()?.templateRef,
				}),
			}),
		);
	}

	/**
	 * Control value accessor methods
	 */
	onChange = (_: any) => {};

	onTouched = () => {};

	registerOnChange(fn: (value: any) => any): void {
		this.onChange = fn;
	}

	registerOnTouched(fn: () => any): void {
		this.onTouched = fn;
	}

	writeValue(value: any): void {
		if (Array.isArray(value)) {
			this['_widget'].patch({
				values: value,
			});
		} else {
			this['_widget'].patch({
				values: [value],
			});
		}
	}

	setDisabledState(isDisabled: boolean) {
		this['_widget'].patch({
			disabled: isDisabled,
		});
	}

	handleBlur() {
		this.onTouched();
	}
}
