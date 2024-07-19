import {
	BaseWidgetDirective,
	ComponentTemplate,
	ContentAsSlotDirective,
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
import type {ProgressbarContext, ProgressbarProps, ProgressbarWidget} from './progressbar.gen';
import {createProgressbar} from './progressbar.gen';

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
	structure: progressbarDefaultSlotStructure,
};

@Component({
	selector: '[auProgressbar]',
	standalone: true,
	imports: [SlotDirective, ContentAsSlotDirective],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		'[class]': 'state().className',
	},
	template: `
		<ng-template [auContentAsSlot]="defaultSlots"><ng-content></ng-content></ng-template>
		<ng-template [auSlot]="state().structure" [auSlotProps]="{state: state(), widget}"></ng-template>
	`,
})
export class ProgressbarComponent extends BaseWidgetDirective<ProgressbarWidget> implements AfterContentChecked {
	readonly defaultSlots: WritableSignal<PartialProgressbarProps> = writable(defaultConfig);

	/**
	 * The aria label.
	 *
	 * @defaultValue `'Progressbar'`
	 */
	@Input('auAriaLabel') ariaLabel: string | undefined;

	/**
	 * The minimum value.
	 *
	 * @defaultValue `0`
	 */
	@Input({alias: 'auMin', transform: auNumberAttribute}) min: number | undefined;

	/**
	 * The maximum value.
	 *
	 * @defaultValue `100`
	 */
	@Input({alias: 'auMax', transform: auNumberAttribute}) max: number | undefined;

	/**
	 * The current value.
	 *
	 * @defaultValue `0`
	 */
	@Input({alias: 'auValue', transform: auNumberAttribute}) value: number | undefined;

	/**
	 * CSS classes to be applied on the widget main container
	 *
	 * @defaultValue `''`
	 */
	@Input('auClassName') className: string | undefined;

	/**
	 * Label of the progress.
	 */
	@Input('auChildren') children: SlotContent<ProgressbarContext>;

	/**
	 * Global template for the Progressbar.
	 */
	@Input('auStructure') structure: SlotContent<ProgressbarContext>;
	@ContentChild(ProgressbarStructureDirective, {static: false}) slotStructureFromContent: ProgressbarStructureDirective | undefined;

	/**
	 * Height of the progressbar, can be any valid css height value.
	 *
	 * @defaultValue `''`
	 */
	@Input('auHeight') height: string | undefined;

	/**
	 * If `true`, animates a striped progressbar.
	 * Takes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.
	 *
	 * @defaultValue `false`
	 */
	@Input({alias: 'auAnimated', transform: auBooleanAttribute}) animated: boolean | undefined;

	/**
	 * If `true`, shows a striped progressbar.
	 *
	 * @defaultValue `false`
	 */
	@Input({alias: 'auStriped', transform: auBooleanAttribute}) striped: boolean | undefined;

	/**
	 * Return the value for the 'aria-valuetext' attribute.
	 * @param value - current value
	 * @param minimum - minimum value
	 * @param maximum - maximum value
	 *
	 * @defaultValue
	 * ```ts
	 * () => undefined
	 * ```
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
			structure: this.slotStructureFromContent?.templateRef,
		});
	}
}
