const e=`import {
	BaseWidgetDirective,
	auNumberAttribute,
	callWidgetFactory,
	type ProgressbarWidget,
	createProgressbar,
	UseDirective,
} from '@agnos-ui/angular-headless';
import {ChangeDetectionStrategy, Component, input} from '@angular/core';

@Component({
	selector: 'app-radial-progress',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [UseDirective],
	template: \` <div
		class="radial-progress"
		[class]="state().className"
		[style.--thickness]="'0.4rem'"
		[style.--value]="state().percentage"
		[auUse]="directives.ariaDirective"
	>
		{{ percentFormat.format(state().percentage / 100) }}
	</div>\`,
})
export class RadialProgressComponent extends BaseWidgetDirective<ProgressbarWidget> {
	readonly min = input(undefined, {transform: auNumberAttribute});
	readonly max = input(undefined, {transform: auNumberAttribute});
	readonly value = input(undefined, {transform: auNumberAttribute});
	readonly ariaLabel = input<string>();
	readonly className = input<string>();
	readonly ariaValueTextFn = input<(value: number, minimum: number, maximum: number) => string | undefined>();

	readonly _widget = callWidgetFactory({
		factory: createProgressbar,
		widgetName: 'progressbar',
	});
	readonly percentFormat = new Intl.NumberFormat('default', {
		style: 'percent',
		minimumFractionDigits: 0,
		maximumFractionDigits: 1,
	});
}
`;export{e as default};
