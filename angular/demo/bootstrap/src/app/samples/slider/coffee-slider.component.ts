import type {SliderWidget} from '@agnos-ui/angular-bootstrap';
import {SlotComponent, UseDirective} from '@agnos-ui/angular-bootstrap';
import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	host: {
		style: 'display: contents;',
	},
	imports: [UseDirective],
	template: `
		<div class="cup-container position-relative">
			<div class="cup">
				<div class="cup-fill-parent">
					<div class="cup-fill" [style.height.%]="state().progressDisplayOptions()[0].height">
						@if (state().progressDisplayOptions()[0].height >= 50) {
							<div class="bubble bubble-1"></div>
							<div class="bubble bubble-2"></div>
							<div class="bubble bubble-3"></div>
						}
					</div>
				</div>
			</div>
		</div>
		<button class="coffee-indicator" [auUse]="[directives().handleDirective, {item: state().sortedHandles()[0]}]">
			{{ '' + state().sortedHandles()[0].value }}
		</button>
	`,
	encapsulation: ViewEncapsulation.None,
})
export default class CoffeeSliderComponent extends SlotComponent<SliderWidget> {}
