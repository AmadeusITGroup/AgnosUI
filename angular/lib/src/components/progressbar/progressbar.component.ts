import type {ProgressbarContext, ProgressbarProps, ProgressbarWidget, SlotContent} from '@agnos-ui/angular-headless';
import {
	BaseWidgetDirective,
	ComponentTemplate,
	SlotDefaultDirective,
	SlotDirective,
	auBooleanAttribute,
	auNumberAttribute,
	callWidgetFactory,
	createProgressbar,
} from '@agnos-ui/angular-headless';
import {type WritableSignal, writable} from '@amadeus-it-group/tansu';
import {NgClass} from '@angular/common';
import type {AfterContentChecked} from '@angular/core';
import {ChangeDetectionStrategy, Component, Directive, TemplateRef, contentChild, inject, input, viewChild} from '@angular/core';

@Directive({selector: 'ng-template[auProgressbarStructure]', standalone: true})
export class ProgressbarStructureDirective {
	public templateRef = inject(TemplateRef<ProgressbarContext>);
	static ngTemplateContextGuard(_dir: ProgressbarStructureDirective, context: unknown): context is ProgressbarContext {
		return true;
	}
}

@Component({
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NgClass, SlotDirective, ProgressbarStructureDirective],
	template: `
		<ng-template auProgressbarStructure #structure let-state="state" let-widget="widget">
			<div class="progress" [style.height]="state.height">
				<div
					class="progress-bar"
					[class.progress-bar-striped]="state.striped"
					[class.progress-bar-animated]="state.animated"
					[ngClass]="state.className"
					[style.width.%]="state.percentage"
				>
					<ng-template [auSlot]="state.slotDefault" [auSlotProps]="{state, widget}"></ng-template>
				</div>
			</div>
		</ng-template>
	`,
})
export class ProgressbarDefaultSlotsComponent {
	structure = viewChild.required<TemplateRef<ProgressbarContext>>('structure');
}

export const progressbarDefaultSlotStructure = new ComponentTemplate(ProgressbarDefaultSlotsComponent, 'structure');

export type PartialProgressbarProps = Partial<ProgressbarProps>;
const defaultConfig: PartialProgressbarProps = {
	slotStructure: progressbarDefaultSlotStructure,
};

@Component({
	selector: '[auProgressbar]',
	standalone: true,
	imports: [SlotDirective, SlotDefaultDirective],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		role: 'progressbar',
		'[attr.aria-label]': 'state().ariaLabel || undefined',
		'[attr.aria-valuenow]': 'state().value',
		'[attr.aria-valuemin]': 'state().min',
		'[attr.aria-valuemax]': 'state().max',
		'[attr.aria-valuetext]': 'state().ariaValueText',
	},
	template: `
		<ng-template [auSlotDefault]="defaultSlots"><ng-content></ng-content></ng-template>
		<ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template>
	`,
})
export class ProgressbarComponent extends BaseWidgetDirective<ProgressbarWidget> implements AfterContentChecked {
	readonly defaultSlots: WritableSignal<PartialProgressbarProps> = writable(defaultConfig);

	/**
	 * The aria label.
	 */
	ariaLabel = input<string | undefined>(undefined, {alias: 'auAriaLabel'});

	/**
	 * The minimum value.
	 */
	min = input(undefined, {alias: 'auMin', transform: auNumberAttribute});

	/**
	 * The maximum value.
	 */
	max = input(undefined, {alias: 'auMax', transform: auNumberAttribute});

	/**
	 * The current value.
	 */
	value = input(undefined, {alias: 'auValue', transform: auNumberAttribute});

	/**
	 * CSS classes to be applied on the widget main container
	 */
	className = input<string | undefined>(undefined, {alias: 'auClassName'});

	slotDefault = input<SlotContent<ProgressbarContext> | undefined>(undefined, {alias: 'auSlotDefault'});

	slotStructure = input<SlotContent<ProgressbarContext> | undefined>(undefined, {alias: 'auSlotStructure'});

	slotStructureFromContent = contentChild(ProgressbarStructureDirective);

	/**
	 * Height of the progressbar, can be any valid css height value.
	 */
	height = input<string | undefined>(undefined, {alias: 'auHeight'});

	/**
	 * If `true`, animates a striped progressbar.
	 * Takes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.
	 */
	animated = input(undefined, {alias: 'auAnimated', transform: auBooleanAttribute});

	/**
	 * If `true`, shows a striped progressbar.
	 */
	striped = input(undefined, {alias: 'auStriped', transform: auBooleanAttribute});

	/**
	 * Return the value for the 'aria-valuetext' attribute.
	 */
	ariaValueTextFn = input<((value: number, minimum: number, maximum: number) => string | undefined) | undefined>(undefined, {
		alias: 'auAriaValueTextFn',
	});

	// eslint-disable-next-line @agnos-ui/angular-check-props
	readonly _widget = callWidgetFactory({factory: createProgressbar, widgetName: 'progressbar', defaultConfig: this.defaultSlots, events: {}});

	ngAfterContentChecked(): void {
		this._widget.patchSlots({
			slotDefault: undefined,
			slotStructure: this.slotStructureFromContent()?.templateRef,
		});
	}
}
