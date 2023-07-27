import {AgnosUIAngularModule, provideWidgetsConfig} from '@agnos-ui/angular';
import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule, NgFor, FormsModule],
	providers: [
		provideWidgetsConfig((config) => {
			config.alert = {...config.alert, dismissible: false};
			return config;
		}),
	],
	template: ` <au-alert type="primary">Simple primary alert</au-alert>

		<au-alert type="secondary">Simple secondary alert</au-alert>

		<au-alert type="success">Simple success alert</au-alert>

		<au-alert type="danger">Simple danger alert</au-alert>

		<au-alert type="warning">Simple warning alert</au-alert>

		<au-alert type="info">Simple info alert</au-alert>

		<au-alert type="light">Simple light alert</au-alert>

		<au-alert type="dark">Simple dark alert</au-alert>`,
})
export default class GenericAlertComponent {}
