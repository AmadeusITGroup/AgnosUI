import {auBooleanAttribute, BaseWidgetDirective, useDirectiveForHost} from '@agnos-ui/angular-headless';
import {createCollapse, type CollapseWidget} from './collapse.gen';
import {Directive, EventEmitter, Input, Output} from '@angular/core';
import {callWidgetFactory} from '../../config';

@Directive({
	selector: '[auCollapse]',
	standalone: true,
	exportAs: 'auCollapse',
})
export class CollapseDirective extends BaseWidgetDirective<CollapseWidget> {
	/**
	 * If `true`, collapse opening will be animated at init time.
	 *
	 * @defaultValue `false`
	 */
	@Input({alias: 'auAnimatedOnInit', transform: auBooleanAttribute}) animatedOnInit: boolean | undefined;

	/**
	 * If `true`, collapse closing and opening will be animated.
	 *
	 * @defaultValue `true`
	 */
	@Input({alias: 'auAnimated', transform: auBooleanAttribute}) animated: boolean | undefined;

	/**
	 * CSS classes to be applied on the widget main container
	 *
	 * @defaultValue `''`
	 */
	@Input('auClassName') className: string | undefined;

	/**
	 * If `true`, collapse will be done horizontally.
	 *
	 * @defaultValue `false`
	 */
	@Input({alias: 'auHorizontal', transform: auBooleanAttribute}) horizontal: boolean | undefined;

	/**
	 * If `true` the collapse is visible to the user
	 *
	 * @defaultValue `true`
	 */
	@Input({alias: 'auVisible', transform: auBooleanAttribute}) visible: boolean | undefined;

	/**
	 * Callback called when the collapse visibility changed.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	@Output('auVisibleChange') visibleChange = new EventEmitter<boolean>();

	/**
	 * Callback called when the collapse is hidden.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	@Output('auHidden') hidden = new EventEmitter<void>();

	/**
	 * Callback called when the collapse is shown.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	@Output('auShown') shown = new EventEmitter<void>();

	readonly _widget = callWidgetFactory({
		factory: createCollapse,
		widgetName: 'collapse',
		events: {
			onVisibleChange: (event) => this.visibleChange.emit(event),
			onShown: () => this.shown.emit(),
			onHidden: () => this.hidden.emit(),
		},
		afterInit: () => {
			useDirectiveForHost(this._widget.directives.transitionDirective);
		},
	});
}
