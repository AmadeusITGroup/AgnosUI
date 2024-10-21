import {
	BaseWidgetDirective,
	auNumberAttribute,
	callWidgetFactory,
	type ProgressbarWidget,
	createProgressbar,
	UseDirective,
} from '@agnos-ui/angular-headless';
import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
	selector: 'app-progressbar',
	standalone: true,
	imports: [UseDirective],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<progress
		class="progress"
		[class]="state().className"
		[auUse]="directives.ariaDirective"
		[attr.value]="state().value"
		[attr.max]="state().max"
	></progress>`,
})
export class ProgressbarComponent extends BaseWidgetDirective<ProgressbarWidget> {
	readonly max = input(undefined, {transform: auNumberAttribute});
	readonly value = input(undefined, {transform: auNumberAttribute});
	readonly ariaLabel = input<string>();
	readonly className = input<string>();
	readonly ariaValueTextFn = input<(value: number, minimum: number, maximum: number) => string | undefined>();

	readonly _widget = callWidgetFactory({
		factory: createProgressbar,
		widgetName: 'progressbar',
	});
}
