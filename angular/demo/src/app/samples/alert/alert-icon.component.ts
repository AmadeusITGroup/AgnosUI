import biCheckCircleFill from '!raw-loader!bootstrap-icons/icons/check-circle-fill.svg';
import biDashCircleFill from '!raw-loader!bootstrap-icons/icons/dash-circle-fill.svg';
import biExclamationTriangleFill from '!raw-loader!bootstrap-icons/icons/exclamation-triangle-fill.svg';
import biInfoCircleFill from '!raw-loader!bootstrap-icons/icons/info-circle-fill.svg';
import biLightbulb from '!raw-loader!bootstrap-icons/icons/lightbulb.svg';
import type {AlertWidget} from '@agnos-ui/angular';
import {SlotComponent, SlotDirective} from '@agnos-ui/angular';
import {Component, inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
	standalone: true,
	imports: [SlotDirective],
	providers: [SlotDirective],
	selector: 'app-icon-structure',
	host: {
		style: 'display: contents;',
	},
	template: `
		<span class="d-flex align-items-center me-2" [innerHTML]="sanitizer.bypassSecurityTrustHtml(typeIcon[state.type])"></span>
		<div class="d-flex w-100 alert-body">
			<ng-template [auSlot]="state.slotDefault" [auSlotProps]="{widget, state}"></ng-template>
			@if (state.dismissible) {
				<button type="button" class="btn-close ms-auto" (click)="widget.api.close()" [attr.aria-label]="state.ariaCloseButtonLabel"></button>
			}
		</div>
	`,
})
export default class AlertIconComponent extends SlotComponent<AlertWidget> {
	sanitizer = inject(DomSanitizer);

	typeIcon: Record<string, string> = {
		success: biCheckCircleFill,
		info: biInfoCircleFill,
		warning: biExclamationTriangleFill,
		danger: biDashCircleFill,
		light: biLightbulb,
	};
}
