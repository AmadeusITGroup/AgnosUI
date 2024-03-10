const t=`import type {ToastWidget} from '@agnos-ui/angular';
import {AgnosUIAngularModule, SlotComponent, SlotDirective, provideWidgetsConfig} from '@agnos-ui/angular';
import {Component, inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import biArrowCounterClockwise from 'bootstrap-icons/icons/arrow-counterclockwise.svg';
import biCheckCircleFill from 'bootstrap-icons/icons/check-circle-fill.svg';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	providers: [
		provideWidgetsConfig((config) => {
			config.toast = {...config.toast, className: 'text-bg-success', autoHide: false, dismissible: true, slotStructure: ToastIconComponent};
			return config;
		}),
	],
	template: \`
		<p>To put the action in the toast simply create custom contents.</p>
		<p><strong>Note:</strong> When header is not present default display is <code>flex</code></p>
		<div class="col-auto col-md-6">
			<au-component #toast auToast>This is a toast with action</au-component>
		</div>
		<button class="btn btn-primary mt-2" (click)="toast.api.open()">Reset</button>
	\`,
})
export default class ActionToastComponent {}

@Component({
	standalone: true,
	imports: [SlotDirective],
	providers: [SlotDirective],
	selector: 'app-icon-structure',
	host: {
		style: 'display: contents;',
	},
	template: \`
		<div class="d-flex w-100">
			<div class="d-flex align-items-center flex-grow-1 toast-body">
				<span class="d-flex me-2" [innerHTML]="sanitizer.bypassSecurityTrustHtml(biCheckCircleFill)"></span>
				<ng-template [auSlot]="state.slotDefault" [auSlotProps]="{widget, state}"></ng-template>
				<button type="button" class="btn btn-sm ms-auto text-bg-success" (click)="actionDemo()">
					<span class="me-2" [innerHTML]="sanitizer.bypassSecurityTrustHtml(biArrowCounterClockwise)"></span>Undo
				</button>
			</div>
			@if (state.dismissible) {
				<button
					type="button"
					class="btn-close btn-close-white me-2 m-auto"
					(click)="widget.api.close()"
					[attr.aria-label]="state.ariaCloseButtonLabel"
				></button>
			}
		</div>
	\`,
})
export class ToastIconComponent extends SlotComponent<ToastWidget> {
	sanitizer = inject(DomSanitizer);

	biCheckCircleFill = biCheckCircleFill;
	biArrowCounterClockwise = biArrowCounterClockwise;

	actionDemo() {
		window.alert('Undo');
	}
}
`;export{t as default};
