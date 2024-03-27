const r=`import {Component} from '@angular/core';
import {ProgressbarComponent} from './progressbar.component';
import {RadialProgressComponent} from './radial-progress.component';
@Component({
	standalone: true,
	imports: [ProgressbarComponent, RadialProgressComponent],
	template: \`
		<h2 class="text-lg mb-2">Simple progressbars</h2>

		<app-progressbar className="progress-primary" [value]="20" />
		<app-progressbar className="progress-info" [value]="4" [max]="5" />

		<h2 class="text-lg mt-4 mb-2">Radial progress</h2>

		<div class="flex gap-6">
			<app-radial-progress className="text-primary" [min]="10" [max]="20" [value]="13" />
			<app-radial-progress className="bg-info text-info-content border-4 border-info" [min]="9" [max]="20" [value]="17" />
		</div>
	\`,
})
export default class DefaultPaginationComponent {}
`;export{r as default};
