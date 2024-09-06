import {SelectComponent, injectWidgetsConfig, provideWidgetsConfig, toAngularSignal} from '@agnos-ui/angular-bootstrap';
import {Component, computed, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
	standalone: true,
	imports: [FormsModule, SelectComponent],
	providers: [provideWidgetsConfig()],
	template: `
		<h2>Multiselect example</h2>
		<div class="mb-3">
			<!-- eslint-disable-next-line @angular-eslint/template/label-has-associated-control -->
			<label class="form-label">Multiselect</label>
			<div auSelect [auItems]="items()" [(auFilterText)]="filterText"></div>
		</div>
		<div class="demo-select-config">
			<strong>Default config</strong><br />
			<label>
				Default filterText:
				<input
					type="text"
					class="form-control"
					[ngModel]="widgetsConfig().select?.filterText ?? ''"
					(ngModelChange)="widgetsConfig$.set({select: {filterText: $event}})"
				/>
			</label>
			<br />
			<button type="button" class="mt-3 btn btn-outline-secondary" (click)="filterText.set(undefined)">Reset widget filterText</button>
		</div>
	`,
})
export default class SelectSelectComponent {
	readonly mainList = ['Action 1', 'Action 2', 'Action 3', 'Other 1', 'Other 2', 'Other 3'];
	readonly filterText = signal<string | undefined>(undefined);
	readonly items = computed(() =>
		this.filterText() ? this.mainList.filter((item) => item.toLowerCase().startsWith(this.filterText()!)) : this.mainList.slice(0, 10),
	);

	readonly widgetsConfig$ = injectWidgetsConfig();
	readonly widgetsConfig = toAngularSignal(this.widgetsConfig$);

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
