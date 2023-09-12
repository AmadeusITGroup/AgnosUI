import {ProgressbarComponent, provideWidgetsConfig} from '@agnos-ui/angular';
import {Component} from '@angular/core';

@Component({
	standalone: true,
	imports: [ProgressbarComponent],
	providers: [
		provideWidgetsConfig((config) => {
			config.progressbar = {...config.progressbar, showValue: true};
			return config;
		}),
	],
	template: `
		<div class="d-flex flex-column gap-2">
			<div au-progressbar [value]="20"></div>
			<div au-progressbar [value]="40" className="text-bg-success"></div>
			<div au-progressbar [value]="60" className="text-bg-info"></div>
			<div au-progressbar [value]="80" className="text-bg-warning"></div>
			<div au-progressbar [value]="100" className="text-bg-danger"></div>
		</div>
	`,
})
export default class DefaultProgressBarComponent {}
