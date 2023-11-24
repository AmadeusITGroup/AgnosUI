import type {Directive as AgnosUIDirective} from '@agnos-ui/core/types';
import type {OnChanges} from '@angular/core';
import {DestroyRef, Directive, ElementRef, Injector, Input, afterNextRender, inject, runInInjectionContext} from '@angular/core';

export * from '@agnos-ui/core/utils/directive';

/**
 * Set up an agnos-ui directive as an angular host directive.
 *
 * @param directive - the directive
 * @param params - the params to pass to the directive
 * @returns the update function to change the directive or params
 */
export const useDirectiveForHost = <T>(directive?: AgnosUIDirective<T>, params?: T) => {
	const injector = inject(Injector);
	const ref = inject(ElementRef);

	let instance: undefined | ReturnType<AgnosUIDirective<T>>;
	let plannedCallDirective = false;

	const callDirective = () => {
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

@Directive({
	standalone: true,
	selector: '[auUse]',
})
export class UseDirective<T> implements OnChanges {
	@Input('auUse')
	use: AgnosUIDirective<T> | undefined;

	@Input('auUseParams')
	params: T | undefined;

	#useDirective = useDirectiveForHost<T>();

	/** @inheritdoc */
	ngOnChanges() {
		this.#useDirective.update(this.use, this.params);
	}
}
