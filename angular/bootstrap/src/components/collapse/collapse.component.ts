import {auBooleanAttribute, BaseWidgetDirective, useDirectiveForHost} from '@agnos-ui/angular-headless';
import type {CollapseWidget} from '@agnos-ui/core-bootstrap/components/collapse';
import {createCollapse} from '@agnos-ui/core-bootstrap/components/collapse';
import {Directive, inject, Injector, input, type OnInit, output, runInInjectionContext} from '@angular/core';
import {callWidgetFactory} from '../../config';

/**
 * Directive to control the collapse behavior of an element.
 */
@Directive({
	selector: '[auCollapse]',

	exportAs: 'auCollapse',
})
export class CollapseDirective extends BaseWidgetDirective<CollapseWidget> {
	/**
	 * If `true`, collapse opening will be animated at init time.
	 *
	 * @defaultValue `false`
	 */
	readonly animatedOnInit = input(undefined, {alias: 'auAnimatedOnInit', transform: auBooleanAttribute});

	/**
	 * If `true`, collapse closing and opening will be animated.
	 *
	 * @defaultValue `true`
	 */
	readonly animated = input(undefined, {alias: 'auAnimated', transform: auBooleanAttribute});

	/**
	 * CSS classes to be applied on the widget main container
	 *
	 * @defaultValue `''`
	 */
	readonly className = input<string>(undefined, {alias: 'auClassName'});

	/**
	 * If `true`, collapse will be done horizontally.
	 *
	 * @defaultValue `false`
	 */
	readonly horizontal = input(undefined, {alias: 'auHorizontal', transform: auBooleanAttribute});

	/**
	 * If `true` the collapse is visible to the user
	 *
	 * @defaultValue `true`
	 */
	readonly visible = input(undefined, {alias: 'auVisible', transform: auBooleanAttribute});

	/**
	 * id of the collapse
	 *
	 * @defaultValue `''`
	 */
	readonly id = input<string>(undefined, {alias: 'auId'});

	/**
	 * Callback called when the collapse visibility changed.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 * @param visible - The new visibility state of the collapse.
	 */
	readonly visibleChange = output<boolean>({alias: 'auVisibleChange'});

	/**
	 * Callback called when the collapse is hidden.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	readonly hidden = output<void>({alias: 'auHidden'});

	/**
	 * Callback called when the collapse is shown.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	readonly shown = output<void>({alias: 'auShown'});

	constructor() {
		super(
			callWidgetFactory(createCollapse, {
				events: {
					onVisibleChange: (event) => this.visibleChange.emit(event),
					onShown: () => this.shown.emit(),
					onHidden: () => this.hidden.emit(),
				},
				afterInit: (widget) => {
					useDirectiveForHost(widget.directives.collapseDirective);
				},
			}),
		);
	}
}

@Directive({
	selector: '[auCollapseTrigger]',
})
export class CollapseTriggerDirective implements OnInit {
	readonly auCollapseTrigger = input.required<CollapseDirective>();
	private readonly injector = inject(Injector);

	async ngOnInit() {
		await this.auCollapseTrigger()['_widget'].initialized;
		runInInjectionContext(this.injector, () => {
			useDirectiveForHost(this.auCollapseTrigger().directives.triggerDirective);
		});
	}
}
