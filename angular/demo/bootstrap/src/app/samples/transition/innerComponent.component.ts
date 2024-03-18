import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AgnosUIAngularModule, toAngularSignal} from '@agnos-ui/angular';
import type {TransitionFn} from '@agnos-ui/core';
import {collapseHorizontalTransition, collapseVerticalTransition, createTransition, fadeTransition} from '@agnos-ui/core';
import {writable} from '@amadeus-it-group/tansu';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

const paramTransition$ = writable(collapseVerticalTransition);
const paramAnimated$ = writable(true);
const paramAnimatedOnInit$ = writable(false);
const paramVisible$ = writable(true);
const paramRemoveFromDom$ = writable(true);

@Component({
	standalone: true,
	selector: 'app-transition-inner',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [AgnosUIAngularModule, FormsModule, CommonModule],
	template: `
		<div class="transition-inner">
			<div class="h6 mt-2">Transition:</div>
			<div class="d-flex flex-wrap gap-2">
				<button
					type="button"
					class="btn btn-sm btn-outline-secondary"
					[class.active]="(paramTransition$ | async) === bootstrap.collapseVerticalTransition"
					(click)="changeTransition(bootstrap.collapseVerticalTransition)"
				>
					Vertical collapse
				</button>
				<button
					type="button"
					class="btn btn-sm btn-outline-secondary"
					[class.active]="(paramTransition$ | async) === bootstrap.collapseHorizontalTransition"
					(click)="changeTransition(bootstrap.collapseHorizontalTransition)"
				>
					Horizontal collapse
				</button>
				<button
					type="button"
					class="btn btn-sm btn-outline-secondary"
					[class.active]="(paramTransition$ | async) === bootstrap.fadeTransition"
					(click)="changeTransition(bootstrap.fadeTransition)"
				>
					Fade
				</button>
			</div>
			<div class="h6 mt-2">Other properties:</div>
			<label class="form-check"
				><input
					type="checkbox"
					class="form-check-input"
					[ngModel]="paramAnimated$ | async"
					(ngModelChange)="paramAnimated$.set($event)"
				/>Animated</label
			>
			<label class="form-check"
				><input
					type="checkbox"
					class="form-check-input"
					[ngModel]="paramAnimatedOnInit$ | async"
					(ngModelChange)="paramAnimatedOnInit$.set($event)"
				/>Animated on init</label
			>
			<label class="form-check"
				><input
					type="checkbox"
					class="form-check-input"
					[ngModel]="paramRemoveFromDom$ | async"
					(ngModelChange)="paramRemoveFromDom$.set($event)"
				/>Remove from DOM</label
			>
			<label class="form-check mb-2"
				><input
					type="checkbox"
					class="form-check-input"
					[ngModel]="transition.stores.visible$ | async"
					(ngModelChange)="transition.patch({visible: $event})"
				/>Visible</label
			>

			<div class="d-flex flex-wrap gap-2">
				<button type="button" class="btn btn-outline-primary" (click)="transition.api.toggle()">Toggle</button>
				<button type="button" class="btn btn-outline-primary" (click)="transition.api.toggle(undefined, true)">Toggle with animation</button>
				<button type="button" class="btn btn-outline-primary" (click)="transition.api.toggle(undefined, false)">Toggle without animation</button>
			</div>
			<ul class="mt-2">
				<li>visible = {{ state().visible }}</li>
				<li>transitioning = {{ state().transitioning }}</li>
				<li>shown = {{ state().shown }}</li>
				<li>hidden = {{ state().hidden }}</li>
			</ul>

			@if ((paramRemoveFromDom$ | async) === false || state().hidden === false) {
				<div
					[auUse]="transition.directives.directive"
					[auUseParams]="{transition: (paramTransition$ | async)!, animated: (paramAnimated$ | async)!}"
					style="max-width: 300px;"
				>
					<div class="card" style="width: 300px;">
						<div class="card-body">You can collapse this card by clicking Toggle</div>
					</div>
				</div>
			}
		</div>
	`,
})
export class InnerComponent {
	bootstrap = {collapseHorizontalTransition, collapseVerticalTransition, fadeTransition};
	paramTransition$ = paramTransition$;
	paramAnimated$ = paramAnimated$;
	paramAnimatedOnInit$ = paramAnimatedOnInit$;
	paramRemoveFromDom$ = paramRemoveFromDom$;
	transition = createTransition({
		props: {
			animatedOnInit: paramAnimatedOnInit$,
			animated: paramAnimated$,
			visible: paramVisible$,
		},
	});
	state = toAngularSignal(this.transition.state$);

	changeTransition(newTransition: TransitionFn) {
		// Make sure the element is removed from the DOM
		// so that it does not keep state from the previous transition
		void this.transition.api.toggle(false, false);
		paramRemoveFromDom$.set(true);
		paramTransition$.set(newTransition);
	}
}
