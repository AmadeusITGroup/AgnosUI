const e=`import {AgnosUIAngularModule} from '@agnos-ui/angular';
import {abortPrevious, debounce} from './debounce';
import {Component} from '@angular/core';

interface WikiResult {
	pageid: number;
	title: string;
	snippet: string;
}

const compareFn = new Intl.Collator('en').compare;

function getHtmlText(html: string) {
	const template = document.createElement('div');
	template.innerHTML = html;
	return template.innerText;
}

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	template: \`
		<div class="custom-select my-auto mb-3">
			<div
				auSelect
				[auItems]="items"
				[auItemIdFn]="itemIdFn"
				(auFilterTextChange)="onFilterTextChange($event)"
				(auSelectedChange)="onSelectedChange($event)"
				auBadgeClassName="badge text-bg-light d-flex align-items-center"
			>
				<ng-template auSelectBadgeLabel let-itemContext="itemContext" let-widget="widget">
					<a attr.href="{{ basePageUrl + itemContext.item.pageid }}" target="_blank" rel="noreferrer">{{ itemContext.item.title }}</a>
					<button type="button" class="btn-close ms-1 wiki-btn-close" aria-label="Close" (click)="widget.api.unselect(itemContext.item)"></button>
				</ng-template>
				<ng-template auSelectItem let-widget="widget" let-itemContext="itemContext">
					<div class="fw-bold">{{ itemContext.item.title }}</div>
					<div class="text-wrap wiki-desc">{{ itemContext.item.snippet }}</div>
				</ng-template>
			</div>
			<span class="fw-bold">Selection: </span>
			@if (selected.length) {
				@for (item of selected; track item) {
					<a attr.href="{{ basePageUrl + item.pageid }}" class="pe-2">{{ item.title }}</a>
				}
			} @else {
				none
			}
		</div>
	\`,
	styles: ["@import './custom.scss';"],
})
export default class CustomSelectComponent {
	basePageUrl = 'https://en.wikipedia.org/?curid=';

	items: WikiResult[] = [];
	selected: WikiResult[] = [];

	itemIdFn(item: WikiResult) {
		return 'page-' + item.pageid;
	}

	onFilterTextChange = debounce(
		abortPrevious(async (signal: AbortSignal, text: string) => {
			const response = await fetch(
				'https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=5&srsearch=' + text,
				{signal},
			);
			const result = await response.json();
			this.items = result.query?.search.map((item: WikiResult) => ({...item, snippet: getHtmlText(item.snippet)})) ?? [];
		}),
		200,
	);

	onSelectedChange(selected: WikiResult[]) {
		this.selected = (<WikiResult[]>(selected || [])).sort((a, b) => compareFn(a.title, b.title));
	}
}
`;export{e as default};
