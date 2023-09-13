import type {AdaptSlotContentProps, AdaptWidgetSlots, SlotContent} from '../slot.directive';
import {ComponentTemplate, SlotDirective, callWidgetFactory} from '../slot.directive';
import type {AfterContentChecked, OnChanges, Signal, SimpleChanges} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, ContentChild, Directive, Input, TemplateRef, ViewChild, inject} from '@angular/core';
import type {ProgressbarContext as ProgressbarCoreContext, WidgetProps, WidgetState} from '@agnos-ui/core';
import {createProgressbar, toSlotContextWidget} from '@agnos-ui/core';
import {writable} from '@amadeus-it-group/tansu';
import {toSignal} from '@angular/core/rxjs-interop';
import {patchSimpleChanges} from '../utils';
import {SlotDefaultDirective} from '../slotDefault.directive';

export type ProgressbarWidget = AdaptWidgetSlots<ReturnType<typeof createProgressbar>>;
export type ProgressbarState = WidgetState<ProgressbarWidget>;
export type ProgressbarProps = WidgetProps<ProgressbarWidget>;

export type ProgressbarContext = AdaptSlotContentProps<ProgressbarCoreContext>;

@Directive({selector: 'ng-template[auProgressbarContent]', standalone: true})
export class ProgressbarContentDirective {
	public templateRef = inject(TemplateRef<ProgressbarContext>);
	static ngTemplateContextGuard(_dir: ProgressbarContentDirective, context: unknown): context is ProgressbarCoreContext {
		return true;
	}
}

@Component({
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NgClass, NgIf, SlotDirective, ProgressbarContentDirective],
	template: `
		<ng-template auProgressbarContent #content let-state="state" let-widget="widget">
			<div class="progress" [style.height]="state.height">
				<div
					class="progress-bar"
					[class.progress-bar-striped]="state.striped"
					[class.progress-bar-animated]="state.animated"
					[ngClass]="state.className"
					[style.width.%]="state.percentage"
				>
					<ng-template [auSlot]="state.slotDefault" [auSlotProps]="{state, widget}"></ng-template>
					<ng-container *ngIf="state.showValue">{{ state.percentage }}%</ng-container>
				</div>
			</div>
		</ng-template>
	`,
})
export class ProgressbarDefaultSlotsComponent {
	@ViewChild('content', {static: true}) content: TemplateRef<ProgressbarCoreContext>;
}

export const progressbarDefaultSlotContent = new ComponentTemplate(ProgressbarDefaultSlotsComponent, 'content');

const defaultConfig: Partial<ProgressbarProps> = {
	slotContent: progressbarDefaultSlotContent,
};

@Component({
	// eslint-disable-next-line @angular-eslint/component-selector
	selector: 'div[au-progressbar]',
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
		<ng-template [auSlot]="state().slotContent" [auSlotProps]="{state: state(), widget}"></ng-template>
	`,
})
export class ProgressbarComponent implements AfterContentChecked, OnChanges {
	readonly defaultSlots = writable(defaultConfig);

	/**
	 * The aria label.
	 */
	@Input() ariaLabel: string | undefined;

	/**
	 * The minimum value.
	 */
	@Input() min: number | undefined;

	/**
	 * The maximum value.
	 */
	@Input() max: number | undefined;

	/**
	 * The current value.
	 */
	@Input() value: number | undefined;

	/**
	 * CSS classes to be applied on the widget main container
	 */
	@Input() className: string | undefined;

	@Input() slotDefault: SlotContent<AdaptSlotContentProps<ProgressbarCoreContext>>;
	@Input() slotContent: SlotContent<AdaptSlotContentProps<ProgressbarCoreContext>>;
	@ContentChild(ProgressbarContentDirective, {static: false}) slotContentFromContent: ProgressbarContentDirective | undefined;

	/**
	 * If `true`, displays the current percentage in the `xx%` format.
	 */
	@Input() showValue: boolean | undefined;

	/**
	 * Height of the progressbar, can be any valid css height value.
	 */
	@Input() height: string | undefined;

	/**
	 * If `true`, animates a striped progressbar.
	 */
	@Input() animated: boolean | undefined;

	/**
	 * If `true`, shows a striped progressbar.
	 */
	@Input() striped: boolean | undefined;

	/**
	 * Return the value for the 'aria-valuetext' attribute.
	 */
	@Input() ariaValueTextFn: ((value: number, minimum: number, maximum: number) => string | undefined) | undefined;

	readonly _widget = callWidgetFactory(createProgressbar, 'progressbar', this.defaultSlots);
	readonly widget = toSlotContextWidget(this._widget);
	readonly api = this._widget.api;
	readonly state: Signal<ProgressbarState> = toSignal(this._widget.state$, {requireSync: true});

	ngAfterContentChecked(): void {
		this._widget.patch({
			slotContent: this.slotContentFromContent?.templateRef,
		});
	}

	ngOnChanges(changes: SimpleChanges): void {
		patchSimpleChanges(this._widget.patch, changes);
	}
}
