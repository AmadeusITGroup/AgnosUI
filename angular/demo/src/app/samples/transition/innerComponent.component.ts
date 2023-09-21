import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AgnosUIAngularModule} from '@agnos-ui/angular';
import type {TransitionFn} from '@agnos-ui/core';
import {bootstrap, createTransition} from '@agnos-ui/core';
import {writable} from '@amadeus-it-group/tansu';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

const paramTransition$ = writable(bootstrap.collapseVerticalTransition);
const paramAnimation$ = writable(true);
const paramAnimationOnInit$ = writable(false);
const paramVisible$ = writable(true);
const paramRemoveFromDom$ = writable(true);

@Component({
	standalone: true,
	selector: 'app-transition-inner',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [AgnosUIAngularModule, FormsModule, CommonModule],
	template: `
		<div class="transition-inner">
			<p class="mt-2">
				Transition:
				<button
					type="button"
					class="ms-2 btn btn-sm btn-outline-secondary"
					[class.active]="(paramTransition$ | async) === bootstrap.collapseVerticalTransition"
					(click)="changeTransition(bootstrap.collapseVerticalTransition)"
				>
					Vertical collapse
				</button>
				<button
					type="button"
					class="ms-2 btn btn-sm btn-outline-secondary"
					[class.active]="(paramTransition$ | async) === bootstrap.collapseHorizontalTransition"
					(click)="changeTransition(bootstrap.collapseHorizontalTransition)"
				>
					Horizontal collapse
				</button>
				<button
					type="button"
					class="ms-2 btn btn-sm btn-outline-secondary"
					[class.active]="(paramTransition$ | async) === bootstrap.fadeTransition"
					(click)="changeTransition(bootstrap.fadeTransition)"
				>
					Fade
				</button>
			</p>
			<label class="form-check"
				><input
					type="checkbox"
					class="form-check-input"
					[ngModel]="paramAnimation$ | async"
					(ngModelChange)="paramAnimation$.set($event)"
				/>Animation</label
			>
			<label class="form-check"
				><input
					type="checkbox"
					class="form-check-input"
					[ngModel]="paramAnimationOnInit$ | async"
					(ngModelChange)="paramAnimationOnInit$.set($event)"
				/>Animation on init</label
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

			<button type="button" class="btn btn-outline-primary" (click)="transition.api.toggle()">Toggle</button>
			<button type="button" class="ms-2 btn btn-outline-primary" (click)="transition.api.toggle(undefined, true)">Toggle with animation</button>
			<button type="button" class="ms-2 btn btn-outline-primary" (click)="transition.api.toggle(undefined, false)">Toggle without animation</button>
			<ul class="mt-2">
				<li>visible = {{ transition.stores.visible$ | async }}</li>
				<li>transitioning = {{ transition.stores.transitioning$ | async }}</li>
				<li>shown = {{ transition.stores.shown$ | async }}</li>
				<li>hidden = {{ transition.stores.hidden$ | async }}</li>
			</ul>

			<div
				*ngIf="(paramRemoveFromDom$ | async) === false || (transition.stores.hidden$ | async) === false"
				[auUse]="transition.directives.directive"
				[auUseParams]="{transition: (paramTransition$ | async)!, animation: (paramAnimation$ | async)!}"
				style="max-width: 300px;"
			>
				<div class="card" style="width: 300px;">
					<div class="card-body">You can collapse this card by clicking Toggle</div>
				</div>
			</div>
		</div>
	`,
})
export class InnerComponent {
	bootstrap = bootstrap;
	paramTransition$ = paramTransition$;
	paramAnimation$ = paramAnimation$;
	paramAnimationOnInit$ = paramAnimationOnInit$;
	paramVisible$ = paramVisible$;
	paramRemoveFromDom$ = paramRemoveFromDom$;
	transition = createTransition({
		props: {
			animationOnInit: paramAnimationOnInit$,
			animation: paramAnimation$,
			visible: paramVisible$,
		},
	});

	changeTransition(newTransition: TransitionFn) {
		// Make sure the element is removed from the DOM
		// so that it does not keep state from the previous transition
		this.transition.api.toggle(false, false);
		paramRemoveFromDom$.set(true);
		paramTransition$.set(newTransition);
	}
}
