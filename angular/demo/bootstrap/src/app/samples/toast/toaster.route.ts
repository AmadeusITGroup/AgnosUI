import {ToasterComponent, ToasterService, ToastPositions} from '@agnos-ui/angular-bootstrap';
import {ChangeDetectionStrategy, Component, effect, inject, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
	selector: 'app-toaster',
	imports: [ToasterComponent, FormsModule],
	template: `
		<p class="mb-2">Similar to dynamic stacking, we expose a service to ease the usage of Toasts</p>
		<div class="d-flex flex-column justify-content-between gap-2">
			<div class="d-flex form-group align-items-center gap-3">
				<label class="me-3" for="positionSelect">Position: </label>
				<select id="positionSelect" class="form-select w-auto" [(ngModel)]="position">
					@for (position of positions; track position) {
						<option [value]="position.value">{{ position.label }}</option>
					}
				</select>
				<label class="me-3" for="dismissible">Dismissible: </label>
				<input type="checkbox" class="form-check-input" id="dismissible" [disabled]="duration() === 0" [(ngModel)]="dismissible" />
				<label class="me-3" for="duration">Duration: </label>
				<input id="duration" type="number" class="form-control w-auto" [(ngModel)]="duration" />
			</div>
			<div class="d-flex form-group align-items-center gap-3">
				<label class="me-3" for="limit">Max # of toasts: </label>
				<input id="limit" type="number" class="form-control w-auto" [(ngModel)]="limit" />
				<label class="me-3" for="pause">Pause timer on hover: </label>
				<input type="checkbox" class="form-check-input" id="pause" [(ngModel)]="pauseOnHover" />
				<label class="me-3" for="closeAll">Close all toasts button</label>
				<input type="checkbox" class="form-check-input" id="closeAll" [(ngModel)]="closeAll" />
			</div>
			<div class="d-flex form-group align-items-center gap-3 py-3">
				<button class="btn btn-primary addToast ms-2" (click)="addToast()">Show toast</button>
				<button class="btn btn-primary addToast ms-2" (click)="addToast('error')">Show error toast</button>
			</div>
		</div>
		<au-component
			#toaster
			auToaster
			[auDismissible]="dismissible()"
			[auDuration]="duration()"
			[auPosition]="position()"
			[auLimit]="limit()"
			[auCloseAll]="closeAll()"
		/>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ToasterExampleComponent {
	toasterService = inject(ToasterService);
	readonly dismissible = signal(this.toasterService.options().dismissible);
	readonly duration = signal(this.toasterService.options().duration);
	readonly limit = signal(10);
	readonly pauseOnHover = signal(false);
	readonly closeAll = signal(false);
	positions = Object.entries(ToastPositions).map((entry) => {
		return {
			value: entry[1],
			label: entry[0],
		};
	});
	readonly position = signal(this.toasterService.options().position);
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
