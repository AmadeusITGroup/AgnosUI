import type {ProgressbarContext, ProgressbarProps, ProgressbarState, SlotContent} from '@agnos-ui/angular-headless';
import {
	ComponentTemplate,
	SlotDirective,
	callWidgetFactory,
	createProgressbar,
	patchSimpleChanges,
	toSlotContextWidget,
	SlotDefaultDirective,
} from '@agnos-ui/angular-headless';
import type {AfterContentChecked, OnChanges, Signal, SimpleChanges} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, ContentChild, Directive, Input, TemplateRef, ViewChild, inject} from '@angular/core';
import {writable} from '@amadeus-it-group/tansu';
import {toSignal} from '@angular/core/rxjs-interop';

@Directive({selector: 'ng-template[auProgressbarContent]', standalone: true})
export class ProgressbarContentDirective {
	public templateRef = inject(TemplateRef<ProgressbarContext>);
	static ngTemplateContextGuard(_dir: ProgressbarContentDirective, context: unknown): context is ProgressbarContext {
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
	@ViewChild('content', {static: true}) content: TemplateRef<ProgressbarContext>;
}

export const progressbarDefaultSlotContent = new ComponentTemplate(ProgressbarDefaultSlotsComponent, 'content');

const defaultConfig: Partial<ProgressbarProps> = {
	slotContent: progressbarDefaultSlotContent,
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
		<ng-template [auSlot]="state().slotContent" [auSlotProps]="{state: state(), widget}"></ng-template>
	`,
})
export class ProgressbarComponent implements AfterContentChecked, OnChanges {
	readonly defaultSlots = writable(defaultConfig);

	/**
	 * The aria label.
	 */
	@Input('auAriaLabel') ariaLabel: string | undefined;

	/**
	 * The minimum value.
	 */
	@Input('auMin') min: number | undefined;

	/**
	 * The maximum value.
	 */
	@Input('auMax') max: number | undefined;

	/**
	 * The current value.
	 */
	@Input('auValue') value: number | undefined;

	/**
	 * CSS classes to be applied on the widget main container
	 */
	@Input('auClassName') className: string | undefined;

	@Input('auSlotDefault') slotDefault: SlotContent<ProgressbarContext>;
	@Input('auSlotContent') slotContent: SlotContent<ProgressbarContext>;
	@ContentChild(ProgressbarContentDirective, {static: false}) slotContentFromContent: ProgressbarContentDirective | undefined;

	/**
	 * If `true`, displays the current percentage in the `xx%` format.
	 */
	@Input('auShowValue') showValue: boolean | undefined;

	/**
	 * Height of the progressbar, can be any valid css height value.
	 */
	@Input('auHeight') height: string | undefined;

	/**
	 * If `true`, animates a striped progressbar.
	 */
	@Input('auAnimated') animated: boolean | undefined;

	/**
	 * If `true`, shows a striped progressbar.
	 */
	@Input('auStriped') striped: boolean | undefined;

	/**
	 * Return the value for the 'aria-valuetext' attribute.
	 */
	@Input('auAriaValueTextFn') ariaValueTextFn: ((value: number, minimum: number, maximum: number) => string | undefined) | undefined;

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
