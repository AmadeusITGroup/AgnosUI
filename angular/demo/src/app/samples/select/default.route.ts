import {SelectComponent} from '@agnos-ui/angular';
import {Component} from '@angular/core';

@Component({
	standalone: true,
	imports: [SelectComponent],
	template: `
		<div style="height: 400px;">
			<div class="mb-3">
				<label class="form-label">Start typing with a, b or c</label>
				<div
					auSelect
					[auItems]="items"
					[auFilterText]="filterText"
					(auFilterTextChange)="onFilterTextChange($event)"
					auBadgeClassName="badge text-bg-light"
				></div>
			</div>
		</div>
	`,
})
export default class DefaultSelectComponent {
	wordsA = ['apple', 'apricot', 'asparagus', 'astronaut', 'athletic', 'autumn', 'avocado'];
	wordsB = ['banana', 'baseball', 'basketball', 'beautiful', 'bedroom', 'bee', 'bicycle'];
	wordsC = ['cat', 'caterpillar', 'cave', 'chair', 'cheese', 'cherry', 'chicken'];
	mainList = [...this.wordsA, ...this.wordsB, ...this.wordsC];

	items = this.mainList.slice(0, 10);

	filterText: string | undefined;

	onFilterTextChange(filterText: string) {
		const mainList = this.mainList;
		this.items = filterText ? mainList.filter((item) => item.toLowerCase().startsWith(filterText)) : mainList.slice(0, 10);
	}
}
