const e=`import type {SliderHandle, SliderWidget} from '@agnos-ui/angular';
import {SlotComponent} from '@agnos-ui/angular';
import {ChangeDetectionStrategy, Component, Input, NgZone, inject} from '@angular/core';
import {take} from 'rxjs';

@Component({
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		style: 'display: contents;',
	},
	template: \`
		<button
			class="au-custom-slider-handle"
			role="slider"
			[attr.aria-valuemin]="state.min"
			[attr.aria-valuemax]="state.max"
			[attr.aria-readonly]="state.readonly ? true : null"
			[attr.aria-disabled]="state.disabled ? true : null"
			[attr.aria-valuenow]="item.value"
			[attr.aria-valuetext]="item.ariaValueText"
			[attr.aria-label]="item.ariaLabel"
			[attr.aria-orientation]="state.vertical ? 'vertical' : null"
			[disabled]="state.disabled"
			[class]="state.vertical ? 'au-custom-slider-handle-vertical' : 'au-custom-slider-handle-horizontal'"
			[style.left.%]="state.handleDisplayOptions[item.id].left"
			[style.top.%]="state.handleDisplayOptions[item.id].top"
			(keydown)="onKeyDown($event, item.id, widget.actions.keydown)"
			(mousedown)="widget.actions.mouseDown($event, item.id)"
			(touchstart)="widget.actions.touchStart($event, item.id)"
		>
			<svg xmlns="http://www.w3.org/2000/svg" fill="var(--bs-slider-handle-color)" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
				/>
			</svg>
		</button>
	\`,
	styles: "@import './custom.scss';",
})
export default class CustomHandleSliderComponent extends SlotComponent<SliderWidget> {
	private _zone = inject(NgZone);

	@Input() item!: SliderHandle;

	onKeyDown(event: KeyboardEvent, handleId: number, widgetOnKeyDownFn: (event: KeyboardEvent, handleId: number) => void) {
		widgetOnKeyDownFn(event, handleId);
		this._zone.onStable.pipe(take(1)).subscribe(() => {
			(event.target as HTMLElement).focus();
		});
	}
}
`;export{e as default};
