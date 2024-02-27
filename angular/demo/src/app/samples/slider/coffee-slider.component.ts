import type {SliderWidget} from '@agnos-ui/angular';
import {SlotComponent} from '@agnos-ui/angular';
import {ChangeDetectionStrategy, Component, NgZone, ViewEncapsulation, inject} from '@angular/core';
import {take} from 'rxjs';

@Component({
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		style: 'display: contents;',
	},
	template: `
		<div class="cup-container position-relative">
			<div class="cup">
				<div class="cup-fill-parent">
					<div class="cup-fill" [style.height.%]="state.progressDisplayOptions[0].height">
						@if (state.progressDisplayOptions[0].height >= 50) {
							<div class="bubble bubble-1"></div>
							<div class="bubble bubble-2"></div>
							<div class="bubble bubble-3"></div>
						}
					</div>
				</div>
			</div>
		</div>
		<button
			class="coffee-indicator au-slider-handle-vertical"
			role="slider"
			[attr.aria-valuemin]="state.min"
			[attr.aria-valuemax]="state.max"
			[attr.aria-readonly]="state.readonly ? true : null"
			[attr.aria-disabled]="state.disabled ? true : null"
			[attr.aria-valuenow]="state.sortedHandles[0].value"
			[attr.aria-valuetext]="state.sortedHandles[0].ariaValueText"
			[attr.aria-label]="state.sortedHandles[0].ariaLabel"
			[attr.aria-orientation]="state.vertical ? 'vertical' : null"
			[disabled]="state.disabled"
			[class]="state.vertical ? 'au-slider-handle-vertical' : 'au-slider-handle-horizontal'"
			[style.left.%]="state.handleDisplayOptions[state.sortedHandles[0].id].left"
			[style.top.%]="state.handleDisplayOptions[state.sortedHandles[0].id].top"
			(keydown)="onKeyDown($event, state.sortedHandles[0].id, widget.actions.keydown)"
			(mousedown)="widget.actions.mouseDown($event, state.sortedHandles[0].id)"
			(touchstart)="widget.actions.touchStart($event, state.sortedHandles[0].id)"
		>
			{{ '' + state.sortedHandles[0].value }}
		</button>
	`,
	encapsulation: ViewEncapsulation.None,
})
export default class CoffeeSliderComponent extends SlotComponent<SliderWidget> {
	private _zone = inject(NgZone);

	onKeyDown(event: KeyboardEvent, handleId: number, widgetOnKeyDownFn: (event: KeyboardEvent, handleId: number) => void) {
		widgetOnKeyDownFn(event, handleId);
		this._zone.onStable.pipe(take(1)).subscribe(() => {
			(event.target as HTMLElement).focus();
		});
	}
}
