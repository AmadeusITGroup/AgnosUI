import type {Directive as AgnosUIDirective, DirectiveAndParam, DirectivesAndOptParam} from '@agnos-ui/core/types';
import {multiDirective} from '@agnos-ui/core/utils/directive';
import {isPlatformServer} from '@angular/common';
import type {OnChanges} from '@angular/core';
import {DestroyRef, Directive, ElementRef, Injector, Input, PLATFORM_ID, afterNextRender, inject, runInInjectionContext} from '@angular/core';

export * from '@agnos-ui/core/utils/directive';

/**
 * A utility function to manage the lifecycle of a directive for a host element.
 *
 * This function handles the creation, updating, and destruction of a directive instance
 * associated with a host element. It ensures that the directive is called appropriately
 * based on the platform (server or client) and manages the directive's lifecycle within
 * the Angular injection context.
 *
 * @template T - The type of parameters that the directive accepts.
 *
 * @param [directive] - The directive to be applied to the host element.
 * @param [params] - The parameters to be passed to the directive.
 *
 * @returns An object containing an `update` function to update the directive and its parameters.
 */
export const useDirectiveForHost = <T>(directive?: AgnosUIDirective<T>, params?: T) => {
	const injector = inject(Injector);
	const ref = inject(ElementRef);
	const platform = inject(PLATFORM_ID);

	let instance: undefined | ReturnType<AgnosUIDirective<T>>;
	let plannedCallDirective = false;

	const callDirective = isPlatformServer(platform)
		? () => {
				instance = directive?.(ref.nativeElement, params as T);
			}
		: () => {
				if (plannedCallDirective || !directive) {
					return;
				}
				plannedCallDirective = true;
				runInInjectionContext(injector, () => {
					afterNextRender(() => {
						plannedCallDirective = false;
						instance = directive?.(ref.nativeElement, params as T);
					});
				});
			};

	function destroyDirectiveInstance() {
		const oldInstance = instance;
		instance = undefined;
		directive = undefined;
		oldInstance?.destroy?.();
	}

	inject(DestroyRef).onDestroy(destroyDirectiveInstance);

	function update(newDirective?: AgnosUIDirective<T>, newParams?: T) {
		if (newDirective !== directive) {
			void destroyDirectiveInstance();
			directive = newDirective;
			params = newParams;
			callDirective();
		} else if (newParams != params) {
			params = newParams;
			instance?.update?.(params as T);
		}
	}

	callDirective();
	return {update};
};

/**
 * A directive that allows the use of another directive with optional parameters.
 *
 * @template T - The type of the parameter that can be passed to the directive.
 *
 * @remarks
 * This directive uses a private instance of `useDirectiveForHost` to manage the directive and its parameter.
 */
@Directive({
	standalone: true,
	selector: '[auUse]',
})
export class UseDirective<T> implements OnChanges {
	@Input('auUse')
	use: AgnosUIDirective | DirectiveAndParam<T> | undefined;

	readonly #useDirective = useDirectiveForHost<T>();

	/** @inheritdoc */
	ngOnChanges() {
		const use = this.use;
		const [directive, param] = Array.isArray(use) ? use : [use as any];
		this.#useDirective.update(directive, param);
	}
}

/**
 * A directive that allows the use of multiple directives on a host element.
 *
 * @template T - A tuple type representing the directives and their optional parameters.
 *
 * @property {DirectivesAndOptParam<T>} useMulti - An input property that takes a tuple of directives and their optional parameters.
 */
@Directive({
	standalone: true,
	selector: '[auUseMulti]',
})
export class UseMultiDirective<T extends any[]> implements OnChanges {
	@Input({alias: 'auUseMulti', required: true})
	useMulti!: DirectivesAndOptParam<T>;

	readonly #useDirective = useDirectiveForHost<DirectivesAndOptParam<T>>();

	/** @inheritdoc */
	ngOnChanges() {
		this.#useDirective.update(multiDirective, this.useMulti);
	}
}
