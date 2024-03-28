import {
	BaseWidgetDirective,
	auNumberAttribute,
	callWidgetFactory,
	type ProgressbarWidget,
	createProgressbar,
	type ProgressbarProps,
	UseDirective,
} from '@agnos-ui/angular-headless';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
	selector: 'app-progressbar',
	standalone: true,
	imports: [UseDirective],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `<progress
		class="progress"
		[class]="state().className"
		[auUse]="widget.directives.ariaDirective"
		[attr.value]="state().value"
		[attr.max]="state().max"
	></progress>`,
})
export class ProgressbarComponent extends BaseWidgetDirective<ProgressbarWidget> {
	@Input({transform: auNumberAttribute}) max?: ProgressbarProps['max'];
	@Input({transform: auNumberAttribute}) value?: ProgressbarProps['value'];
	@Input() ariaLabel?: ProgressbarProps['ariaLabel'];
	@Input() className?: ProgressbarProps['className'];
	@Input() ariaValueTextFn?: ProgressbarProps['ariaValueTextFn'];

	readonly _widget = callWidgetFactory({
		factory: createProgressbar,
		widgetName: 'progressbar',
	});
}
