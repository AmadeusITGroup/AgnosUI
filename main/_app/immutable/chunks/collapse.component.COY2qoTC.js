const t=`import {ChangeDetectionStrategy, Component, booleanAttribute, input} from '@angular/core';
import {UseDirective, collapseVerticalTransition, createTransition, toAngularSignal} from '@agnos-ui/angular-bootstrap';

@Component({
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [UseDirective],
	selector: 'app-collapse',
	template: \`
		<div class="card">
			<div class="card-header p-0">
				<button
					type="button"
					id="collapse-toggle"
					(click)="transition.api.toggle()"
					class="btn toggle-button"
					aria-controls="collapse-content"
					[attr.aria-expanded]="state().visible"
				>
					{{ headerText() }}
					<span class="ms-1 collapse-icon" [class.expanded]="state().visible">
						<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 100 100">
							<rect class="horizontal" x="20" y="45" width="60" height="10" fill="currentColor" />
							<rect class="vertical" x="45" y="20" width="10" height="60" fill="currentColor" />
						</svg>
					</span>
				</button>
			</div>
			@if (!state().hidden) {
				<div [auUse]="[transition.directives.directive, {visible: expanded()}]" id="collapse-content">
					<div class="card-body">
						<ng-content />
					</div>
				</div>
			}
		</div>
	\`,
	styles: "@import './collapse.scss';",
})
export default class CollapseComponent {
	readonly transition = createTransition({
		props: {
			transition: collapseVerticalTransition,
		},
	});
	readonly state = toAngularSignal(this.transition.state$);

	readonly headerText = input<string>();
	readonly expanded = input(false, {transform: booleanAttribute});
}
`;export{t as default};
