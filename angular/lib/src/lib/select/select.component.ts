import type {ItemCtx, SelectWidget, WidgetState} from '@agnos-ui/angular-headless';
import {UseDirective, callWidgetFactory, createSelect, patchSimpleChanges} from '@agnos-ui/angular-headless';
import {CommonModule} from '@angular/common';
import type {OnChanges, Signal, SimpleChanges} from '@angular/core';
import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';

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
	@Input('auOpened') opened: boolean | undefined;

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
	@Input('auDisabled') disabled: boolean | undefined;

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
	@Input('auLoading') loading: boolean | undefined;

	readonly _widget = callWidgetFactory<SelectWidget<Item>>(createSelect, 'select');
	readonly api = this._widget.api;

	state$: Signal<WidgetState<SelectWidget<Item>>> = toSignal(this._widget.state$, {requireSync: true});

	constructor() {
		this._widget.patch({
			onFilterTextChange: (event) => this.filterTextChange.emit(event),
		});
	}

	ngOnChanges(changes: SimpleChanges) {
		patchSimpleChanges(this._widget.patch, changes);
	}

	itemCtxTrackBy(_: number, itemCtx: ItemCtx<Item>) {
		return itemCtx.id;
	}
}
