import {
	BaseWidgetDirective,
	ChildrenDirective,
	ComponentTemplate,
	SlotDirective,
	auBooleanAttribute,
	auNumberAttribute,
	useDirectiveForHost,
} from '@agnos-ui/angular-headless';
import type {SlotContent} from '@agnos-ui/angular-headless';
import {type WritableSignal, writable} from '@amadeus-it-group/tansu';
import {NgClass} from '@angular/common';
import type {AfterContentChecked} from '@angular/core';
import {ChangeDetectionStrategy, Component, ContentChild, Directive, Input, TemplateRef, ViewChild, inject} from '@angular/core';
import type {ProgressbarContext, ProgressbarProps, ProgressbarWidget} from './progressbar';
import {createProgressbar} from './progressbar';

import {callWidgetFactory} from '../../config';
import type {BSContextualClass} from '@agnos-ui/core-bootstrap/types';

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
					[ngClass]="state.type ? 'text-bg-' + state.type : undefined"
					[style.width.%]="state.percentage"
				>
					<ng-template [auSlot]="state.children" [auSlotProps]="{state, widget}"></ng-template>
				</div>
			</div>
		</ng-template>
	`,
})
export class ProgressbarDefaultSlotsComponent {
	@ViewChild('structure', {static: true}) structure!: TemplateRef<ProgressbarContext>;
}

export const progressbarDefaultSlotStructure = new ComponentTemplate(ProgressbarDefaultSlotsComponent, 'structure');

export type PartialProgressbarProps = Partial<ProgressbarProps>;
const defaultConfig: PartialProgressbarProps = {
	slotStructure: progressbarDefaultSlotStructure,
};

@Component({
	selector: '[auProgressbar]',
	standalone: true,
	imports: [SlotDirective, ChildrenDirective],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		'[class]': 'state().className',
	},
	template: `
		<ng-template [auChildren]="defaultSlots"><ng-content></ng-content></ng-template>
		<ng-template [auSlot]="state().slotStructure" [auSlotProps]="{state: state(), widget}"></ng-template>
	`,
})
export class ProgressbarComponent extends BaseWidgetDirective<ProgressbarWidget> implements AfterContentChecked {
	readonly defaultSlots: WritableSignal<PartialProgressbarProps> = writable(defaultConfig);

	/**
	 * The aria label.
	 */
	@Input('auAriaLabel') ariaLabel: string | undefined;

	/**
	 * The minimum value.
	 */
	@Input({alias: 'auMin', transform: auNumberAttribute}) min: number | undefined;

	/**
	 * The maximum value.
	 */
	@Input({alias: 'auMax', transform: auNumberAttribute}) max: number | undefined;

	/**
	 * The current value.
	 */
	@Input({alias: 'auValue', transform: auNumberAttribute}) value: number | undefined;

	/**
	 * CSS classes to be applied on the widget main container
	 */
	@Input('auClassName') className: string | undefined;

	@Input('auChildren') children: SlotContent<ProgressbarContext>;

	@Input('auSlotStructure') slotStructure: SlotContent<ProgressbarContext>;
	@ContentChild(ProgressbarStructureDirective, {static: false}) slotStructureFromContent: ProgressbarStructureDirective | undefined;

	/**
	 * Height of the progressbar, can be any valid css height value.
	 */
	@Input('auHeight') height: string | undefined;

	/**
	 * If `true`, animates a striped progressbar.
	 * Takes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.
	 */
	@Input({alias: 'auAnimated', transform: auBooleanAttribute}) animated: boolean | undefined;

	/**
	 * If `true`, shows a striped progressbar.
	 */
	@Input({alias: 'auStriped', transform: auBooleanAttribute}) striped: boolean | undefined;

	/**
	 * Return the value for the 'aria-valuetext' attribute.
	 */
	@Input('auAriaValueTextFn') ariaValueTextFn: ((value: number, minimum: number, maximum: number) => string | undefined) | undefined;

	/**
	 * Type of the progressbar, following bootstrap types.
	 */
	@Input('auType') type: BSContextualClass | undefined;

	readonly _widget = callWidgetFactory({
		factory: createProgressbar,
		widgetName: 'progressbar',
		defaultConfig: this.defaultSlots,
		afterInit: () => {
			useDirectiveForHost(this._widget.directives.ariaDirective);
		},
	});

	ngAfterContentChecked(): void {
		this._widget.patchSlots({
			children: undefined,
			slotStructure: this.slotStructureFromContent?.templateRef,
		});
	}
}
