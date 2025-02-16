const e=`import {SelectComponent} from '@agnos-ui/angular-bootstrap';
import {Component, computed, signal} from '@angular/core';

@Component({
	imports: [SelectComponent],
	template: \`
		<div style="height: 400px;">
			<div class="mb-3">
				<div auSelect [auItems]="items()" [(auFilterText)]="filterText" auBadgeClassName="badge text-bg-light"></div>
			</div>
		</div>
	\`,
})
export default class DefaultSelectComponent {
	readonly wordsA = ['apple', 'apricot', 'asparagus', 'astronaut', 'athletic', 'autumn', 'avocado'];
	readonly wordsB = ['banana', 'baseball', 'basketball', 'beautiful', 'bedroom', 'bee', 'bicycle'];
	readonly wordsC = ['cat', 'caterpillar', 'cave', 'chair', 'cheese', 'cherry', 'chicken'];
	readonly mainList = [...this.wordsA, ...this.wordsB, ...this.wordsC];

	readonly filterText = signal<string | undefined>(undefined);
	readonly items = computed(() =>
		this.filterText() ? this.mainList.filter((item) => item.toLowerCase().startsWith(this.filterText()!)) : this.mainList.slice(0, 10),
	);
}
`;export{e as default};
