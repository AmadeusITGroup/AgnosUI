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
			<div auProgressbar [auValue]="20"></div>
			<div auProgressbar [auValue]="40" auClassName="text-bg-success"></div>
			<div auProgressbar [auValue]="60" auClassName="text-bg-info"></div>
			<div auProgressbar [auValue]="80" auClassName="text-bg-warning"></div>
			<div auProgressbar [auValue]="100" auClassName="text-bg-danger"></div>
		</div>
	`,
})
export default class DefaultProgressBarComponent {}
