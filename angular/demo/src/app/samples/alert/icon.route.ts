import biCheckCircleFill from '!raw-loader!bootstrap-icons/icons/check-circle-fill.svg';
import biDashCircleFill from '!raw-loader!bootstrap-icons/icons/dash-circle-fill.svg';
import biExclamationTriangleFill from '!raw-loader!bootstrap-icons/icons/exclamation-triangle-fill.svg';
import biInfoCircleFill from '!raw-loader!bootstrap-icons/icons/info-circle-fill.svg';
import biLightbulb from '!raw-loader!bootstrap-icons/icons/lightbulb.svg';
import type {AlertComponent} from '@agnos-ui/angular';
import {AgnosUIAngularModule, ComponentTemplate, provideWidgetsConfig, SlotDirective} from '@agnos-ui/angular';
import {AsyncPipe, NgFor, NgIf} from '@angular/common';
import {Component, inject, ViewChild} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule, NgFor, FormsModule],
	providers: [
		provideWidgetsConfig((config) => {
			config.alert = {...config.alert, dismissible: false, slotStructure: new ComponentTemplate(AlertIconComponent, 'iconDemo')};
			return config;
		}),
	],
	template: `
		<au-alert type="success">Alert success with a customisable icon</au-alert>
		<au-alert type="warning">Alert warning with a customisable icon</au-alert>
		<au-alert type="danger">Alert danger with a customisable icon</au-alert>
		<au-alert type="info">Alert info with a customisable icon</au-alert>
		<au-alert type="light">Alert light with a customisable icon</au-alert>
	`,
})
export default class IconAlertComponent {
	async showAlert(alert: AlertComponent) {
		alert.api.open();
	}
}

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule, NgIf, AsyncPipe, NgFor, SlotDirective],
	providers: [SlotDirective],
	template: `
		<ng-template #iconDemo let-state="state" let-widget="widget">
			<span class="d-flex align-items-center me-1" [innerHTML]="sanitizer.bypassSecurityTrustHtml(typeIcon[state.type])"> </span>
			<div class="d-flex w-100 alert-body">
				<ng-template [auSlot]="state.slotDefault" [auSlotProps]="{widget, state}"></ng-template>
				<button
					*ngIf="state.dismissible"
					type="button"
					class="btn-close ms-auto"
					(click)="widget.api.close()"
					[attr.aria-label]="state.ariaCloseButtonLabel"
				></button>
			</div>
		</ng-template>
	`,
})
export class AlertIconComponent {
	sanitizer = inject(DomSanitizer);

	@ViewChild('iconDemo', {static: true}) iconDemo: any;

	typeIcon: Record<string, string> = {
		success: biCheckCircleFill,
		info: biInfoCircleFill,
		warning: biExclamationTriangleFill,
		danger: biDashCircleFill,
		light: biLightbulb,
	};
}
