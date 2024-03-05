const i=`import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {UseDirective, createSimpleClassTransition, createTransition} from '@agnos-ui/angular';

@Component({
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [UseDirective],
	selector: 'app-flip',
	template: \`
		<div class="flip-card">
			<div class="flip-card-inner" [auUse]="transition.directives.directive">
				<div class="flip-card-front">
					<ng-content />
					<button class="btn btn-outline-secondary" (click)="transition.api.hide()">Hide again.</button>
				</div>
				<div class="flip-card-back">
					<button class="btn btn-outline-primary" (click)="transition.api.show()">{{ hiddenText }}</button>
				</div>
			</div>
		</div>
	\`,
	styles: "@import './flip.scss';",
})
export default class FlipComponent {
	readonly transition = createTransition({
		props: {
			visible: false,
			transition: createSimpleClassTransition({hideClasses: ['hide'], animationPendingHideClasses: ['hide']}),
		},
	});

	@Input()
	hiddenText: string;
}
`;export{i as default};
