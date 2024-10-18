const e=`import {
	BaseWidgetDirective,
	type SliderWidget,
	auBooleanAttribute,
	auNumberAttribute,
	callWidgetFactory,
	createSlider,
	UseMultiDirective,
} from '@agnos-ui/angular-headless';
import {ChangeDetectionStrategy, Component, input, model} from '@angular/core';

@Component({
	selector: 'app-slider',
	standalone: true,
	imports: [UseMultiDirective],
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './slider.component.html',
})
export class SliderComponent extends BaseWidgetDirective<SliderWidget> {
	readonly disabled = input(undefined, {transform: auBooleanAttribute});
	readonly min = input(undefined, {transform: auNumberAttribute});
	readonly max = input(undefined, {transform: auNumberAttribute});
	readonly stepSize = input(undefined, {transform: auNumberAttribute});
	readonly values = model([0]);
	readonly className = input<string>();

	readonly _widget = callWidgetFactory({
		factory: createSlider,
		widgetName: 'slider',
		events: {
			onValuesChange: (event) => {
				this.values.set(event);
			},
		},
	});
}
`;export{e as default};
