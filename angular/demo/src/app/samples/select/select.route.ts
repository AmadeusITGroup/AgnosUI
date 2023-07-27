import {AgnosUIAngularModule, injectWidgetsConfig, provideWidgetsConfig} from '@agnos-ui/angular';
import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule, CommonModule, FormsModule],
	providers: [provideWidgetsConfig()],
	template: `
		<h2>Multiselect example</h2>
		<div class="mb-3">
			<label for="select-example" class="form-label">Multiselect</label>
			<au-select id="select-example" [items]="items" [(filterText)]="filterText"></au-select>
		</div>
		<div class="demo-select-config">
			<strong>Default config</strong><br />
			<label>
				Default filterText:
				<input
					type="text"
					class="form-control"
					[ngModel]="(widgetsConfig$ | async)?.select?.filterText ?? ''"
					(ngModelChange)="widgetsConfig$.set({select: {filterText: $event}})"
				/>
			</label>
			<br />
			<button type="button" class="mt-3 btn btn-outline-secondary" (click)="filterText = undefined">Reset widget filterText</button>
		</div>
	`,
})
export default class SelectComponent {
	items = ['Action 1', 'Action 2', 'Action 3', 'Other 1', 'Other 2', 'Other 3'];

	filterText: string | undefined;

	widgetsConfig$ = injectWidgetsConfig();

	constructor() {
		const params = location.hash.split('?')[1];
		const url = new URL(params ? `?${params}` : '', location.href);
		this.widgetsConfig$.set({
			select: {
				filterText: url.searchParams.get('filterText') ?? '',
			},
		});
	}
}
