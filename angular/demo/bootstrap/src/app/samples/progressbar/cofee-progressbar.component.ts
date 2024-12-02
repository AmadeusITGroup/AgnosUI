import {type ProgressbarWidget, SlotComponent} from '@agnos-ui/angular-bootstrap';
import {Component} from '@angular/core';

@Component({
	standalone: true,
	template: `
		<div class="position-relative" style="height: 300px">
			<div class="cup">
				<div class="cup-fill-parent">
					<div class="cup-fill" [style.height.px]="state.value() * 1.7">
						@if (state.value() >= 50) {
							<div class="bubble bubble-1"></div>
							<div class="bubble bubble-2"></div>
							<div class="bubble bubble-3"></div>
						}
					</div>
				</div>
			</div>
		</div>
	`,
	styles: "@use '@agnos-ui/common/samples/progressbar/custom.scss';",
	host: {
		style: 'display: contents;',
	},
})
export default class CoffeeProgressbarComponent extends SlotComponent<ProgressbarWidget> {}
