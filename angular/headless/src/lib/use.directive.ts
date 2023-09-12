import type {OnChanges, OnDestroy, SimpleChanges} from '@angular/core';
import {Directive, ElementRef, inject, Input} from '@angular/core';
import type {Directive as AgnosUIDirective} from '@agnos-ui/core';

@Directive({
	standalone: true,
	selector: '[auUse]',
})
export class UseDirective<T> implements OnChanges, OnDestroy {
	@Input('auUse')
	use: AgnosUIDirective<T> | undefined;

	@Input('auUseParams')
	params: T | undefined;

	private _ref = inject(ElementRef);

	private _directive: AgnosUIDirective<T> | undefined;
	private _directiveInstance?: ReturnType<AgnosUIDirective<T>>;

	async ngOnChanges(changes: SimpleChanges): Promise<void> {
		if (this.use !== this._directive) {
			this._directiveInstance?.destroy?.();
			this._directiveInstance = undefined;
			const directive = this.use;
			this._directive = directive;
			if (directive) {
				// waiting here is necessary to avoid ExpressionChangedAfterItHasBeenCheckedError
				// in case calling the directive changes variables used in the template
				await Promise.resolve();
				// checks that the directive did not change while waiting:
				if (directive === this._directive && !this._directiveInstance) {
					this._directiveInstance = directive(this._ref.nativeElement, this.params as T);
				}
			}
		} else if (changes['params']) {
			// waiting here is necessary to avoid ExpressionChangedAfterItHasBeenCheckedError
			// in case calling the directive changes variables used in the template
			await Promise.resolve();
			this._directiveInstance?.update?.(this.params as T);
		}
	}

	ngOnDestroy(): void {
		this._directiveInstance?.destroy?.();
		this._directiveInstance = undefined;
		this._directive = undefined;
	}
}
