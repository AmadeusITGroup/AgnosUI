import type {ProgressbarContext, ProgressbarProps, ProgressbarState, SlotContent} from '@agnos-ui/angular-headless';
import {
	ComponentTemplate,
	SlotDefaultDirective,
	SlotDirective,
	callWidgetFactory,
	createProgressbar,
	patchSimpleChanges,
	toAngularSignal,
	toSlotContextWidget,
} from '@agnos-ui/angular-headless';
import {writable} from '@amadeus-it-group/tansu';
import {NgClass} from '@angular/common';
import type {AfterContentChecked, OnChanges, Signal, SimpleChanges} from '@angular/core';
import {ChangeDetectionStrategy, Component, ContentChild, Directive, Input, TemplateRef, ViewChild, inject} from '@angular/core';

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
	imports: [NgClass, SlotDirective, ProgressbarContentDirective],
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
	 * Height of the progressbar, can be any valid css height value.
	 */
	@Input('auHeight') height: string | undefined;

	/**
	 * If `true`, animates a striped progressbar.
	 * Takes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.
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

	readonly _widget = callWidgetFactory({factory: createProgressbar, widgetName: 'progressbar', defaultConfig: this.defaultSlots, events: {}});
	readonly widget = toSlotContextWidget(this._widget);
	readonly api = this._widget.api;
	readonly state: Signal<ProgressbarState> = toAngularSignal(this._widget.state$);

	ngAfterContentChecked(): void {
		this._widget.patch({
			slotContent: this.slotContentFromContent?.templateRef,
		});
	}

	ngOnChanges(changes: SimpleChanges): void {
		patchSimpleChanges(this._widget.patch, changes);
	}
}
