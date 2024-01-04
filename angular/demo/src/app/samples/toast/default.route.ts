import {AgnosUIAngularModule, provideWidgetsConfig} from '@agnos-ui/angular';
import {Component} from '@angular/core';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	providers: [
		provideWidgetsConfig((config) => {
			config.toast = {...config.toast};
			return config;
		}),
	],
	template: `
		<au-component auToast auClassName="text-bg-primary" auSlotHeader="I am header" auAutohide="false" auDismissible="true"
			>Simple primary toast</au-component
		>
	`,
})
export default class DefaultToastComponent {}
