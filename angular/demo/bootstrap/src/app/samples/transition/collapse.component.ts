import {ChangeDetectionStrategy, Component, effect, input, model} from '@angular/core';
import {UseDirective, collapseVerticalTransition, createTransition, toAngularSignal} from '@agnos-ui/angular-bootstrap';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [UseDirective],
	selector: 'app-collapse',
	template: `
		<div class="card">
			<div class="card-header p-0">
				<button
					type="button"
					id="collapse-toggle"
					(click)="transition.api.toggle()"
					class="btn toggle-button"
					aria-controls="collapse-content"
					[attr.aria-expanded]="expanded()"
				>
					{{ headerText() }}
					<span class="ms-1 collapse-icon" [class.expanded]="expanded()">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100">
							<rect class="horizontal" x="20" y="45" width="60" height="10" fill="currentColor" />
							<rect class="vertical" x="45" y="20" width="10" height="60" fill="currentColor" />
						</svg>
					</span>
				</button>
			</div>
			@if (!hidden()) {
				<div [auUse]="transition.directives.directive" id="collapse-content">
					<div class="card-body">
						<ng-content />
					</div>
				</div>
			}
		</div>
	`,
	styles: "@use '@agnos-ui/common/samples/transition/collapse.scss';",
})
export default class CollapseComponent {
	readonly headerText = input<string>();
	readonly expanded = model(false);

	readonly transition = createTransition({
		props: {
			transition: collapseVerticalTransition,
			onVisibleChange: (visible) => this.expanded.set(visible),
		},
	});
	readonly hidden = toAngularSignal(this.transition.stores.hidden$);

	constructor() {
		effect(
			() => {
				this.transition.patch({visible: this.expanded()});
			},
			{allowSignalWrites: true},
		);
	}
}
