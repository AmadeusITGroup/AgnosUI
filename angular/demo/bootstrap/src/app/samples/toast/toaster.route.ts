import type { ToastPositions} from '@agnos-ui/angular-bootstrap';
import {ToasterComponent, ToasterService, toastPositions} from '@agnos-ui/angular-bootstrap';
import {ChangeDetectionStrategy, Component, effect, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
	imports: [ToasterComponent, FormsModule],
	template: `
		<p class="mb-2">Similar to dynamic stacking, we expose a service to ease the usage of Toasts</p>
		<div class="d-flex flex-column justify-content-between gap-2">
			<div class="d-flex flex-column flex-sm-row form-group align-items-center gap-3">
				<div class="d-flex w-100 align-items-center justify-content-between">
					<label class="me-3" for="positionSelect">Position: </label>
					<select id="positionSelect" class="form-select w-auto" [(ngModel)]="position">
						@for (position of positions; track position) {
							<option [value]="position.value">{{ position.label }}</option>
						}
					</select>
				</div>
				<div class="d-flex w-100 align-items-center justify-content-between">
					<label class="me-3" for="dismissible">Dismissible: </label>
					<input type="checkbox" class="form-check-input" id="dismissible" [disabled]="duration() === 0" [(ngModel)]="dismissible" />
				</div>
				<div class="d-flex w-100 align-items-center justify-content-between">
					<label class="me-3" for="duration">Duration: </label>
					<input id="duration" type="number" class="form-control w-50" [(ngModel)]="duration" />
				</div>
			</div>
			<div class="d-flex flex-column flex-sm-row form-group align-items-center gap-3">
				<div class="d-flex w-100 align-items-center justify-content-between">
					<label class="me-3" for="limit">Max # of toasts: </label>
					<input id="limit" type="number" class="form-control w-50" [(ngModel)]="limit" />
				</div>
				<div class="d-flex w-100 align-items-center justify-content-between">
					<label class="me-3" for="pause">Pause timer on hover: </label>
					<input type="checkbox" class="form-check-input" id="pause" [(ngModel)]="pauseOnHover" />
				</div>
				<div class="d-flex w-100 align-items-center justify-content-between">
					<label class="me-3" for="closeAll">Close all toasts button</label>
					<input type="checkbox" class="form-check-input" id="closeAll" [(ngModel)]="closeAll" />
				</div>
			</div>
			<div class="d-flex form-group align-items-center gap-3 py-3">
				<button class="btn btn-primary ms-2" (click)="addToast()">Show toast</button>
				<button class="btn btn-primary ms-2" (click)="addToast('error')">Show error toast</button>
			</div>
		</div>
		<div class="d-flex position-relative mt-2 w-100" style="height: 500px; background-color: gray;"></div>
		<div
			auToaster
			[auDismissible]="dismissible()"
			[auDuration]="duration()"
			[auPosition]="position()"
			[auLimit]="limit()"
			[auCloseAll]="closeAll()"
		></div>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ToasterExampleComponent {
	readonly toasterService = inject(ToasterService);
	readonly dismissible = signal(this.toasterService.options().dismissible);
	readonly duration = signal(this.toasterService.options().duration);
	readonly limit = signal(10);
	readonly pauseOnHover = signal(false);
	readonly closeAll = signal(false);
	readonly positions = Object.entries(toastPositions).map((entry) => {
		return {
			value: entry[1],
			label: entry[0],
		};
	});
	readonly position = signal(toastPositions[this.toasterService.options().position] as ToastPositions);
	index = 0;

	constructor() {
		effect(() => {
			if (this.duration() === 0) {
				this.dismissible.set(true);
			}
		});
	}
	
	addToast(type?: string) {
		let payload = {children: `Simple toast ${this.index++}`, header: 'I am header'};
		if (type === 'error') {
			const errorProps = {className: 'text-bg-danger', dismissible: true, autoHide: true, delay: 10000};
			payload = {...payload, ...errorProps, header: ''};
		}
		this.toasterService.addToast(payload);
	}
}
