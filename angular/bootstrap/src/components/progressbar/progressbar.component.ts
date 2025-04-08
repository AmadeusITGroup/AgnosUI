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
import {ChangeDetectionStrategy, Component, Directive, TemplateRef, inject, input, viewChild, contentChild} from '@angular/core';
import type {ProgressbarContext, ProgressbarWidget} from './progressbar.gen';
import {createProgressbar} from './progressbar.gen';

import {callWidgetFactory} from '../../config';
import type {BSContextualClass} from '@agnos-ui/core-bootstrap/types';

/**
 * Directive that provides a template reference for the progress bar context.
 * This directive provides a template reference for the {@link ProgressbarContext}.
 */
@Directive({selector: 'ng-template[auProgressbarBody]'})
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
@Directive({selector: 'ng-template[auProgressbarStructure]'})
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
	readonly structure = viewChild.required<TemplateRef<ProgressbarContext>>('structure');
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
	readonly ariaLabel = input<string>(undefined, {alias: 'auAriaLabel'});

	/**
	 * The minimum value.
	 *
	 * @defaultValue `0`
	 */
	readonly min = input(undefined, {alias: 'auMin', transform: auNumberAttribute});

	/**
	 * The maximum value.
	 *
	 * @defaultValue `100`
	 */
	readonly max = input(undefined, {alias: 'auMax', transform: auNumberAttribute});

	/**
	 * The current value.
	 *
	 * @defaultValue `0`
	 */
	readonly value = input(undefined, {alias: 'auValue', transform: auNumberAttribute});

	/**
	 * CSS classes to be applied on the widget main container
	 *
	 * @defaultValue `''`
	 */
	readonly className = input<string>(undefined, {alias: 'auClassName'});

	/**
	 * Label of the progress.
	 */
	readonly children = input<SlotContent<ProgressbarContext>>(undefined, {alias: 'auChildren'});
	readonly slotDefaultFromContent = contentChild(ProgressbarBodyDirective);

	/**
	 * Global template for the Progressbar.
	 */
	readonly structure = input<SlotContent<ProgressbarContext>>(undefined, {alias: 'auStructure'});
	readonly slotStructureFromContent = contentChild(ProgressbarStructureDirective);

	/**
	 * Height of the progressbar, can be any valid css height value.
	 *
	 * @defaultValue `''`
	 */
	readonly height = input<string>(undefined, {alias: 'auHeight'});

	/**
	 * If `true`, animates a striped progressbar.
	 * Takes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.
	 *
	 * @defaultValue `false`
	 */
	readonly animated = input(undefined, {alias: 'auAnimated', transform: auBooleanAttribute});

	/**
	 * If `true`, shows a striped progressbar.
	 *
	 * @defaultValue `false`
	 */
	readonly striped = input(undefined, {alias: 'auStriped', transform: auBooleanAttribute});

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
	readonly ariaValueTextFn = input<(value: number, minimum: number, maximum: number) => string | undefined>(undefined, {alias: 'auAriaValueTextFn'});

	/**
	 * Type of the progressbar, following bootstrap types.
	 */
	readonly type = input<BSContextualClass>(undefined, {alias: 'auType'});

	readonly slotChildren = viewChild<TemplateRef<void>>('content');

	constructor() {
		super(
			callWidgetFactory(createProgressbar, {
				defaultConfig: {
					structure: progressbarDefaultSlotStructure,
				},
				afterInit: (widget) => useDirectiveForHost(widget.directives.ariaDirective),
				slotTemplates: () => ({
					structure: this.slotStructureFromContent()?.templateRef,
					children: this.slotDefaultFromContent()?.templateRef,
				}),
				slotChildren: () => this.slotChildren(),
			}),
		);
	}
}
