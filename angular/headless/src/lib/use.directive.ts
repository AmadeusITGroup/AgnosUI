import type {OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {Directive, ElementRef, inject, Input} from '@angular/core';
import type {Directive as AgnosUIDirective} from '@agnos-ui/core';

// All calls of the directive in this class are done asynchronously (with await 0)
// in order to avoid ExpressionChangedAfterItHasBeenCheckedError
// or the corresponding issue with signals (https://github.com/angular/angular/issues/50320)
// This is relevant especially if calling the directive changes variables used in a template.

@Directive({
	standalone: true,
	selector: '[auUse]',
})
export class UseDirective<T> implements OnChanges, OnDestroy {
	@Input('auUse')
	use: AgnosUIDirective<T> | undefined;

	@Input('auUseParams')
	params: T | undefined;

	#ref = inject(ElementRef);

	#directive: AgnosUIDirective<T> | undefined;
	#directiveInstance?: ReturnType<AgnosUIDirective<T>>;

	async #destroyDirectiveInstance() {
		const directiveInstance = this.#directiveInstance;
		this.#directiveInstance = undefined;
		if (directiveInstance?.destroy) {
			await 0;
			directiveInstance.destroy?.();
		}
	}

	async ngOnChanges(changes: SimpleChanges): Promise<void> {
		if (this.use !== this.#directive) {
			this.#destroyDirectiveInstance();
			const directive = this.use;
			this.#directive = directive;
			if (directive) {
				await 0;
				// checks that the directive did not change while waiting:
				if (directive === this.#directive && !this.#directiveInstance) {
					this.#directiveInstance = directive(this.#ref.nativeElement, this.params as T);
				}
			}
		} else if (changes['params']) {
			await 0;
			this.#directiveInstance?.update?.(this.params as T);
		}
	}

	ngOnDestroy(): void {
		this.#destroyDirectiveInstance();
		this.#directive = undefined;
	}
}
