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
	selector: 'app-radial-progress',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [UseDirective],
	template: ` <div
		class="radial-progress"
		[class]="state().className"
		[style.--thickness]="'0.4rem'"
		[style.--value]="state().percentage"
		[auUse]="widget.directives.ariaDirective"
	>
		{{ percentFormat.format(state().percentage / 100) }}
	</div>`,
})
export class RadialProgressComponent extends BaseWidgetDirective<ProgressbarWidget> {
	@Input({transform: auNumberAttribute}) min?: ProgressbarProps['min'];
	@Input({transform: auNumberAttribute}) max?: ProgressbarProps['max'];
	@Input({transform: auNumberAttribute}) value?: ProgressbarProps['value'];
	@Input() ariaLabel?: ProgressbarProps['ariaLabel'];
	@Input() className?: ProgressbarProps['className'];
	@Input() ariaValueTextFn?: ProgressbarProps['ariaValueTextFn'];

	readonly _widget = callWidgetFactory({
		factory: createProgressbar,
		widgetName: 'progressbar',
		defaultConfig: {},
		events: {},
	});
	readonly percentFormat = new Intl.NumberFormat('default', {
		style: 'percent',
		minimumFractionDigits: 0,
		maximumFractionDigits: 1,
	});
}
