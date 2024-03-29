const e=`import {
	BaseWidgetDirective,
	type SliderProps,
	type SliderWidget,
	auBooleanAttribute,
	auNumberAttribute,
	callWidgetFactory,
	createSlider,
	UseDirective,
} from '@agnos-ui/angular-headless';
import {ChangeDetectionStrategy, Component, EventEmitter, Input, NgZone, Output, inject} from '@angular/core';
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

	@Input({transform: auBooleanAttribute}) disabled?: SliderProps['disabled'];
	@Input({transform: auNumberAttribute}) min?: SliderProps['min'];
	@Input({transform: auNumberAttribute}) max?: SliderProps['max'];
	@Input({transform: auNumberAttribute}) stepSize?: SliderProps['stepSize'];
	@Input() values?: SliderProps['values'];
	@Input() className?: SliderProps['className'];
	@Output() valuesChange = new EventEmitter<number[]>();

	readonly _widget = callWidgetFactory({
		factory: createSlider,
		widgetName: 'slider',
		events: {
			onValuesChange: (event) => {
				this.valuesChange.emit(event);
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
