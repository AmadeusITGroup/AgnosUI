const e=`import type {AccordionItemWidget, WidgetFactory} from '@agnos-ui/angular-headless';
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
	template: \`
		<div class="collapse collapse-arrow bg-base-200" [auUseMulti]="[widget.directives.itemDirective, widget.directives.transitionDirective]">
			<div
				role="button"
				tabindex="0"
				class="collapse-title text-xl font-medium focus-visible:outline-none"
				[auUse]="widget.directives.toggleDirective"
				(keydown)="onEnter($event)"
			>
				<ng-content select="[header]" />
			</div>
			<div class="collapse-content" [auUse]="widget.directives.bodyContainerAttrsDirective">
				@if (state().shouldBeInDOM) {
					<ng-content />
				}
			</div>
		</div>
	\`,
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionItemComponent extends BaseWidgetDirective<AccordionItemWidget> implements AfterViewInit {
	readonly className = input<string>();
	readonly destroyOnHide = input(undefined, {transform: auBooleanAttribute});
	readonly visible = model(false);
	readonly id = input<string>();
	readonly shown = output();
	readonly hidden = output();

	readonly accordionComponent = inject(AccordionComponent);
	readonly _widget = callWidgetFactory({
		factory: ((arg) => this.accordionComponent.api.registerItem(arg)) as WidgetFactory<AccordionItemWidget>,
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
	});
	ngAfterViewInit() {
		queueMicrotask(() => this.api.initDone());
	}

	onEnter(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			this.widget.api.toggle();
		}
	}
}
`;export{e as default};
