import {ProgressbarComponent} from '@agnos-ui/angular';
import {Component} from '@angular/core';

@Component({
	standalone: true,
	imports: [ProgressbarComponent],
	template: `
		<div class="d-flex flex-column gap-2">
			<div>
				A progressbar using custom values for minimum and maximum:
				<div auProgressbar [auMin]="1" [auMax]="5" [auValue]="4" [auAriaValueTextFn]="valueText">Step 4 out of 5</div>
			</div>
			<div>
				A striped animated progress bar:
				<div auProgressbar auClassName="text-bg-info" [auValue]="63" [auStriped]="true" [auAnimated]="true"></div>
			</div>
			<div>
				Changing the height:
				<div auProgressbar [auHeight]="'1.5rem'" [auValue]="47"></div>
			</div>
		</div>
	`,
})
export default class StripedProgressBarComponent {
	readonly valueText = (val: number, _min: number, max: number) => `Step ${val} out of ${max}`;
}
