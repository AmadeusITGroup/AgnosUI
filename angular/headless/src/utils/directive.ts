import type {Directive as AgnosUIDirective} from '@agnos-ui/core/types';
import type {OnChanges} from '@angular/core';
import {DestroyRef, Directive, ElementRef, Input, inject} from '@angular/core';

export * from '@agnos-ui/core/utils/directive';

// All calls of the directive in this class are done asynchronously (with await 0)
// in order to avoid ExpressionChangedAfterItHasBeenCheckedError
// or the corresponding issue with signals (https://github.com/angular/angular/issues/50320)
// This is relevant especially if calling the directive changes variables used in a template.

/**
 * Set up an agnos-ui directive as an angular host directive.
 *
 * @param directive - the directive
 * @param params - the params to pass to the directive
 * @returns the update function to change the directive or params
 */
export const useDirectiveForHost = <T>(directive?: AgnosUIDirective<T>, params?: T) => {
	const ref = inject(ElementRef);

	let instance = directive?.(ref.nativeElement, params as T);

	async function destroyDirectiveInstance() {
		const oldInstance = instance;
		instance = undefined;
		directive = undefined;
		if (oldInstance?.destroy) {
			await 0;
			oldInstance.destroy?.();
		}
	}

	inject(DestroyRef).onDestroy(destroyDirectiveInstance);

	async function update(newDirective?: AgnosUIDirective<T>, newParams?: T) {
		if (newDirective !== directive) {
			void destroyDirectiveInstance();
			directive = newDirective;
			params = newParams;
			if (newDirective) {
				await 0;
				// checks that the directive did not change while waiting:
				if (directive === newDirective && !instance) {
					instance = directive(ref.nativeElement, params as T);
				}
			}
		} else if (newParams != params) {
			params = newParams;
			await 0;
			instance?.update?.(params as T);
		}
	}

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
		void this.#useDirective.update(this.use, this.params);
	}
}
