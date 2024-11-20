import {
	BaseWidgetDirective,
	ComponentTemplate,
	SlotDirective,
	auBooleanAttribute,
	auNumberAttribute,
	useDirectiveForHost,
} from '@agnos-ui/angular-headless';
import type {SlotContent} from '@agnos-ui/angular-headless';
import {NgClass} from '@angular/common';
import {ChangeDetectionStrategy, Component, ContentChild, Directive, Input, TemplateRef, ViewChild, inject} from '@angular/core';
import type {ProgressbarContext, ProgressbarWidget} from './progressbar.gen';
import {createProgressbar} from './progressbar.gen';

import {callWidgetFactory} from '../../config';
import type {BSContextualClass} from '@agnos-ui/core-bootstrap/types';

/**
 * Directive that provides a template reference for the progress bar context.
 * This directive provides a template reference for the {@link ProgressbarContext}.
 */
@Directive({selector: 'ng-template[auProgressbarBody]', standalone: true})
export class ProgressbarBodyDirective {
	public templateRef = inject(TemplateRef<ProgressbarContext>);
	static ngTemplateContextGuard(_dir: ProgressbarStructureDirective, context: unknown): context is ProgressbarContext {
		return true;
	}
}

/**
 * Directive to define the structure of a progress bar.
 *
 * This directive provides a template reference for the {@link ProgressbarContext}.
 */
@Directive({selector: 'ng-template[auProgressbarStructure]', standalone: true})
export class ProgressbarStructureDirective {
	public templateRef = inject(TemplateRef<ProgressbarContext>);
	static ngTemplateContextGuard(_dir: ProgressbarStructureDirective, context: unknown): context is ProgressbarContext {
		return true;
	}
}

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NgClass, SlotDirective, ProgressbarStructureDirective],
	template: `
		<ng-template auProgressbarStructure #structure let-state="state" let-api="api" let-directives="directives">
			<div class="progress" [style.height]="state.height()">
				<div
					class="progress-bar"
					[class.progress-bar-striped]="state.striped()"
					[class.progress-bar-animated]="state.animated()"
					[ngClass]="state.type() ? 'text-bg-' + state.type() : undefined"
					[style.width.%]="state.percentage()"
				>
					<ng-template [auSlot]="state.children()" [auSlotProps]="{state, api, directives}" />
				</div>
			</div>
		</ng-template>
	`,
})
class ProgressbarDefaultSlotsComponent {
	@ViewChild('structure', {static: true}) structure!: TemplateRef<ProgressbarContext>;
}

/**
 * Represents the default slot structure for the progress bar component.
 */
export const progressbarDefaultSlotStructure: SlotContent<ProgressbarContext> = new ComponentTemplate(ProgressbarDefaultSlotsComponent, 'structure');

/**
 * ProgressbarComponent is a UI component that extends the BaseWidgetDirective
 * to create a customizable progress bar widget. It provides various inputs
 * to configure the appearance and behavior of the progress bar.
 *
 */
@Component({
	selector: '[auProgressbar]',
	imports: [SlotDirective],
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		'[class]': 'state.className()',
	},
	template: `
		<ng-template #content><ng-content /></ng-template>
		<ng-template [auSlot]="state.structure()" [auSlotProps]="{state, api, directives}" />
	`,
})
export class ProgressbarComponent extends BaseWidgetDirective<ProgressbarWidget> {
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
	@ContentChild(ProgressbarBodyDirective, {static: false})
	slotDefaultFromContent: ProgressbarBodyDirective | undefined;

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

	@ViewChild('content', {static: true})
	slotChildren?: TemplateRef<void>;

	constructor() {
		super(
			callWidgetFactory({
				factory: createProgressbar,
				widgetName: 'progressbar',
				defaultConfig: {
					structure: progressbarDefaultSlotStructure,
				},
				afterInit: (widget) => useDirectiveForHost(widget.directives.ariaDirective),
				slotTemplates: () => ({
					structure: this.slotStructureFromContent?.templateRef,
					children: this.slotDefaultFromContent?.templateRef,
				}),
				slotChildren: () => this.slotChildren,
			}),
		);
	}
}
