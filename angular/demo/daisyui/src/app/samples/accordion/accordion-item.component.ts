import type {AccordionItemWidget} from '@agnos-ui/angular-headless';
import {
	BaseWidgetDirective,
	UseDirective,
	UseMultiDirective,
	auBooleanAttribute,
	callWidgetFactory,
	createSimpleClassTransition,
} from '@agnos-ui/angular-headless';
import {type AfterViewInit, ChangeDetectionStrategy, Component, inject, input, model, output} from '@angular/core';
import {AccordionComponent} from './accordion.component';

@Component({
	selector: 'app-accordion-item',
	imports: [UseDirective, UseMultiDirective],
	template: `
		<div
			class="collapse collapse-arrow bg-base-100 border border-base-300 has-[:focus-visible]:ring"
			[auUseMulti]="[directives.itemDirective, directives.transitionDirective]"
		>
			<div
				role="button"
				tabindex="0"
				class="collapse-title font-semibold focus-visible:outline-hidden"
				[auUse]="directives.toggleDirective"
				(keydown.enter)="api.toggle()"
			>
				<ng-content select="[header]" />
			</div>
			<div class="collapse-content text-sm" [auUse]="directives.bodyContainerAttrsDirective">
				@if (state.shouldBeInDOM()) {
					<ng-content />
				}
			</div>
		</div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionItemComponent extends BaseWidgetDirective<AccordionItemWidget> implements AfterViewInit {
	readonly className = input<string>();
	readonly destroyOnHide = input(undefined, {transform: auBooleanAttribute});
	readonly visible = model(false);
	readonly id = input<string>();
	readonly shown = output();
	readonly hidden = output();

	constructor() {
		super(
			callWidgetFactory((arg) => inject(AccordionComponent).api.registerItem(arg), {
				defaultConfig: {
					transition: createSimpleClassTransition({
						showClasses: ['collapse-open'],
						animationPendingShowClasses: ['collapse-open'],
					}),
				},
				events: {
					onVisibleChange: (visible) => this.visible.set(visible),
					onHidden: () => this.hidden.emit(),
					onShown: () => this.shown.emit(),
				},
			}),
		);
	}

	ngAfterViewInit() {
		queueMicrotask(() => this.api.initDone());
	}
}
