import type {SliderHandle, SliderWidget} from '@agnos-ui/angular-bootstrap';
import {SlotComponent, UseDirective} from '@agnos-ui/angular-bootstrap';
import {ChangeDetectionStrategy, Component, Input, NgZone, inject} from '@angular/core';
import {take} from 'rxjs';

@Component({
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		style: 'display: contents;',
	},
	imports: [UseDirective],
	template: `
		<button class="custom-handle" [auUse]="widget.directives.handleDirective" [auUseParams]="{item}">
			<svg xmlns="http://www.w3.org/2000/svg" fill="var(--bs-slider-handle-color)" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
				/>
			</svg>
		</button>
	`,
	styles: "@import '@agnos-ui/common/samples/slider/custom.scss';",
})
export default class CustomHandleSliderComponent extends SlotComponent<SliderWidget> {
	private readonly _zone = inject(NgZone);

	@Input() item!: SliderHandle;

	onKeyDown(event: KeyboardEvent, handleId: number, widgetOnKeyDownFn: (event: KeyboardEvent, handleId: number) => void) {
		widgetOnKeyDownFn(event, handleId);
		this._zone.onStable.pipe(take(1)).subscribe(() => {
			(event.target as HTMLElement).focus();
		});
	}
}
