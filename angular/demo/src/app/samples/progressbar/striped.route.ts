import {ProgressbarComponent} from '@agnos-ui/angular';
import {Component} from '@angular/core';

@Component({
	standalone: true,
	imports: [ProgressbarComponent],
	template: `
		<div class="d-flex flex-column gap-2">
			<div>
				A progressbar using custom values for minimum and maximum:
				<div au-progressbar [min]="1" [max]="5" [value]="4" ariaLabel="Step 4 out of 5">Step 4 out of 5</div>
			</div>
			<div>
				A striped animated progress bar:
				<div au-progressbar className="text-bg-info" [value]="63" [striped]="true" [animated]="true"></div>
			</div>
			<div>
				Changing the height:
				<div au-progressbar [height]="'1.5rem'" [value]="47"></div>
			</div>
		</div>
	`,
})
export default class StripedProgressBarComponent {}
