import type {Directive as AgnosUIDirective} from '@agnos-ui/core';
import type {OnChanges} from '@angular/core';
import {DestroyRef, Directive, ElementRef, inject, Input} from '@angular/core';

export const useDirectiveForHost = <T>(use?: AgnosUIDirective<T>, params?: T) => {
	const ref = inject(ElementRef);

	let instance = use?.(ref.nativeElement, params as T);

	function destroyDirectiveInstance() {
		const oldInstance = instance;
		instance = undefined;
		use = undefined;
		oldInstance?.destroy?.();
	}

	inject(DestroyRef).onDestroy(destroyDirectiveInstance);

	function update(newUse?: AgnosUIDirective<T>, newParams?: T) {
		if (newUse !== use) {
			destroyDirectiveInstance();
			use = newUse;
			params = newParams;
			instance = use?.(ref.nativeElement, params as T);
		} else if (newParams != params) {
			params = newParams;
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
		this.#useDirective.update(this.use, this.params);
	}
}
