const e=`import {AgnosUIAngularModule} from '@agnos-ui/angular-bootstrap';
import {Component, signal} from '@angular/core';

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	template: \`
		<div [(auRating)]="rating" #rat (auHover)="hovered.set($event)" (auLeave)="left.set($event)" auAriaLabel="rating"></div>
		<div>
			Current rate: <span id="defaultRating">{{ rating() }}</span
			><br />
			Hovered: <span id="defaultHovered">{{ hovered() }}</span
			><br />
			Left: <span id="defaultLeft">{{ left() }}</span>
		</div>
	\`,
})
export default class DefaultRatingComponent {
	readonly rating = signal(3);
	readonly hovered = signal(0);
	readonly left = signal(0);
}
`;export{e as default};
