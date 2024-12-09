import type {NormalizedTreeItem, TreeItem, TreeWidget} from '@agnos-ui/angular-headless';
import {BaseWidgetDirective, UseDirective, callWidgetFactory, createTree} from '@agnos-ui/angular-headless';
import {NgTemplateOutlet} from '@angular/common';

import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';

@Component({
	selector: 'app-tree',
	imports: [UseDirective, NgTemplateOutlet],
	template: `
		<ul role="tree" class="bg-base-200 rounded-lg menu w-[300px] {{ state.className() }}" [auUse]="directives.navigationDirective">
			@for (node of state.normalizedNodes(); track node.label + node.level + $index) {
				<ng-container [ngTemplateOutlet]="treeItem" [ngTemplateOutletContext]="{item: node}" />
			}
		</ul>

		<ng-template #treeItem let-item="item">
			<!-- eslint-disable-next-line @angular-eslint/template/role-has-required-aria -->
			<li role="treeitem">
				<span class="flex flex-wrap items-center" [auUse]="[directives.itemToggleDirective, {item}]">
					<span class="me-1">
						<ng-container [ngTemplateOutlet]="itemIcon" [ngTemplateOutletContext]="{item}" />
					</span>
					<span>{{ item.label }}</span>
					@if (item.children.length > 0) {
						<span class="ms-auto">
							<svg
								class="stroke-base-content transition transform delay-0 duration-300 [.au-tree-expand-icon.au-tree-expand-icon-expanded>span>&]:rotate-180"
								xmlns="http://www.w3.org/2000/svg"
								width="14"
								height="14"
								viewBox="0 0 10 10"
							>
								<path d="M1 2 L5 7 L9 2" stroke-width="2" fill="none" />
							</svg>
						</span>
					}
				</span>

				@if (state.expandedMap().get(item)) {
					<ul role="group">
						@for (child of item.children; track child.label + child.level + $index) {
							<ng-container [ngTemplateOutlet]="treeItem" [ngTemplateOutletContext]="{item: child}" />
						}
					</ul>
				}
			</li>
		</ng-template>

		<ng-template #itemIcon let-item="item">
			@if (item.children.length > 0) {
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
					/>
				</svg>
			} @else {
				@if (item.label.includes('.pdf')) {
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
						/>
					</svg>
				} @else if (item.label.includes('.png')) {
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
						/>
					</svg>
				} @else {
					<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-4 w-4">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
						/>
					</svg>
				}
			}
		</ng-template>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeComponent extends BaseWidgetDirective<TreeWidget> {
	readonly nodes = input<TreeItem[]>();
	readonly className = input<string>();
	readonly expandToggle = output<NormalizedTreeItem>();
	readonly navSelector = input<(node: HTMLElement) => NodeListOf<HTMLElement>>();

	constructor() {
		super(
			callWidgetFactory({
				factory: createTree,
				widgetName: 'tree',
				events: {
					onExpandToggle: (item: NormalizedTreeItem) => this.expandToggle.emit(item),
				},
			}),
		);
	}
}
