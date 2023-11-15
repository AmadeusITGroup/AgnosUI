import type {ItemCtx, SelectWidget, WidgetState} from '@agnos-ui/angular-headless';
import {UseDirective, auBooleanAttribute, callWidgetFactory, createSelect, patchSimpleChanges, toAngularSignal} from '@agnos-ui/angular-headless';
import {CommonModule} from '@angular/common';
import type {OnChanges, Signal, SimpleChanges} from '@angular/core';
import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
	standalone: true,
	imports: [UseDirective, CommonModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: '[auSelect]',
	templateUrl: './select.component.html',
	host: {
		'[class]': '"au-select dropdown input-group input-group-sm mb-3 d-block" + state$().className',
	},
})
export class SelectComponent<Item> implements OnChanges {
	/**
	 * List of available items for the dropdown
	 */
	@Input('auItems') items: Item[] | undefined;

	/**
	 * true if the select is open
	 */
	@Input({alias: 'auOpened', transform: auBooleanAttribute}) opened: boolean | undefined;

	/**
	 * Filtered text to be display in the filter input
	 */
	@Input('auFilterText') filterText: string | undefined;

	/**
	 * CSS classes to be applied on the widget main container
	 */
	@Input('auClassName') className: string | undefined;

	/**
	 * Callback called when the text filter change
	 */
	@Output('auFilterTextChange') filterTextChange = new EventEmitter<string>();

	/**
	 * true if the select is disabled
	 */
	@Input({alias: 'auDisabled', transform: auBooleanAttribute}) disabled: boolean | undefined;

	/**
	 * Custom function to filter an item.
	 * By default, item is considered as a string, and the function returns true if the text is found
	 */
	@Input('auMatchFn') matchFn: ((item: Item, text: string) => boolean) | undefined;

	/**
	 * Custom function to get the id of an item
	 * By default, the item is returned
	 */
	@Input('auItemId') itemId: ((item: Item) => string) | undefined;

	/**
	 * List of selected items
	 */
	@Input('auSelected') selected: Item[] | undefined;

	/**
	 * true if a loading process is being done
	 */
	@Input({alias: 'auLoading', transform: auBooleanAttribute}) loading: boolean | undefined;

	readonly _widget = callWidgetFactory<SelectWidget<Item>>({
		factory: createSelect,
		widgetName: 'select',
		events: {
			onFilterTextChange: (event) => this.filterTextChange.emit(event),
		},
	});
	readonly api = this._widget.api;

	state$: Signal<WidgetState<SelectWidget<Item>>> = toAngularSignal(this._widget.state$);

	ngOnChanges(changes: SimpleChanges) {
		patchSimpleChanges(this._widget.patch, changes);
	}

	itemCtxTrackBy(_: number, itemCtx: ItemCtx<Item>) {
		return itemCtx.id;
	}
}
