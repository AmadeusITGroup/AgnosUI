const e=`import {
	BaseWidgetDirective,
	type SliderWidget,
	auBooleanAttribute,
	auNumberAttribute,
	callWidgetFactory,
	createSlider,
	UseDirective,
} from '@agnos-ui/angular-headless';
import {ChangeDetectionStrategy, Component, NgZone, inject, input, model} from '@angular/core';
import {take} from 'rxjs';

@Component({
	selector: 'app-slider',
	standalone: true,
	imports: [UseDirective],
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './slider.component.html',
})
export class SliderComponent extends BaseWidgetDirective<SliderWidget> {
	private readonly _zone = inject(NgZone);

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

	onKeyDown(event: KeyboardEvent) {
		this.widget.actions.keydown(event, 0);
		this._zone.onStable.pipe(take(1)).subscribe(() => {
			(event.target as HTMLElement).focus();
		});
	}
}
`;export{e as default};
