const t=`import biCheckCircleFill from 'bootstrap-icons/icons/check-circle-fill.svg';
import biDashCircleFill from 'bootstrap-icons/icons/dash-circle-fill.svg';
import biExclamationTriangleFill from 'bootstrap-icons/icons/exclamation-triangle-fill.svg';
import biInfoCircleFill from 'bootstrap-icons/icons/info-circle-fill.svg';
import biLightbulb from 'bootstrap-icons/icons/lightbulb.svg';
import type {AlertWidget} from '@agnos-ui/angular-bootstrap';
import {SlotComponent, SlotDirective} from '@agnos-ui/angular-bootstrap';
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
	template: \`
		<span class="d-flex me-2" [innerHTML]="sanitizer.bypassSecurityTrustHtml(typeIcon[state.type])"></span>
		<div class="alert-body">
			<ng-template [auSlot]="state.children" [auSlotProps]="{state, api, directives}"></ng-template>
			@if (state.dismissible) {
				<button type="button" class="btn-close ms-auto" (click)="api.close()" [attr.aria-label]="state.ariaCloseButtonLabel"></button>
			}
		</div>
	\`,
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
`;export{t as default};
