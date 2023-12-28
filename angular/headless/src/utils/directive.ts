import type {Directive as AgnosUIDirective} from '@agnos-ui/core/types';
import type {OnChanges} from '@angular/core';
import {DestroyRef, Directive, ElementRef, Input, inject} from '@angular/core';

export * from '@agnos-ui/core/utils/directive';

// All calls of the directive in this class are done asynchronously (with await 0)
// in order to avoid ExpressionChangedAfterItHasBeenCheckedError
// or the corresponding issue with signals (https://github.com/angular/angular/issues/50320)
// This is relevant especially if calling the directive changes variables used in a template.

export const useDirectiveForHost = <T>(use?: AgnosUIDirective<T>, params?: T) => {
	const ref = inject(ElementRef);

	let instance = use?.(ref.nativeElement, params as T);

	async function destroyDirectiveInstance() {
		const oldInstance = instance;
		instance = undefined;
		use = undefined;
		if (oldInstance?.destroy) {
			await 0;
			oldInstance.destroy?.();
		}
	}

	inject(DestroyRef).onDestroy(destroyDirectiveInstance);

	async function update(newUse?: AgnosUIDirective<T>, newParams?: T) {
		if (newUse !== use) {
			void destroyDirectiveInstance();
			use = newUse;
			params = newParams;
			if (newUse) {
				await 0;
				// checks that the directive did not change while waiting:
				if (use === newUse && !instance) {
					instance = use(ref.nativeElement, params as T);
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

	ngOnChanges() {
		void this.#useDirective.update(this.use, this.params);
	}
}
