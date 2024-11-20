import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {UseDirective, createSimpleClassTransition, createTransition} from '@agnos-ui/angular-bootstrap';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [UseDirective],
	selector: 'app-flip',
	template: `
		<div class="flip-card">
			<div class="flip-card-inner" [auUse]="transition.directives.directive">
				<div class="flip-card-front">
					<ng-content />
					<button class="btn btn-outline-secondary" (click)="transition.api.hide()">Hide again.</button>
				</div>
				<div class="flip-card-back">
					<button class="btn btn-outline-primary" (click)="transition.api.show()">{{ hiddenText() }}</button>
				</div>
			</div>
		</div>
	`,
	styles: "@use '@agnos-ui/common/samples/transition/flip.scss';",
})
export default class FlipComponent {
	readonly transition = createTransition({
		props: {
			visible: false,
			transition: createSimpleClassTransition({hideClasses: ['hide'], animationPendingHideClasses: ['hide']}),
		},
	});
	readonly hiddenText = input('');
}
