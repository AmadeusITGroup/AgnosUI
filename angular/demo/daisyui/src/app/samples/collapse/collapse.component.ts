import {createSimpleClassTransition, createTransition, UseDirective} from '@agnos-ui/angular-headless';
import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
/**
 * You can create easily your own collapse component with the help of the `createTransition` function
 * you will be able to plug the transition event of DaisyUI to your component.
 * The `createSimpleClassTransition` is a helper to create a transition that will add a class to the element but you don't have to add classes as this
 * DaisyUI CSS is not using this feature.
 */
@Component({
	selector: 'app-collapse',
	imports: [UseDirective],
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div
			tabindex="0"
			class="collapse bg-base-200"
			[auUse]="transition.directives.directive"
			(blur)="transition.api.hide()"
			(focus)="transition.api.show()"
		>
			<div class="collapse-title font-medium text-xl">{{ title() }}</div>
			<div class="collapse-content"><ng-content /></div>
		</div>
	`,
})
export class CollapseDaisyComponent {
	readonly title = input('Focus me to see content');

	// The advantage of AgnosUI here is that it plug the transition state to some possible callbacks
	onShown = output();
	onHidden = output();

	transition = createTransition({
		props: {
			visible: false, // could be something in an input that also add the collapse-open class
			transition: createSimpleClassTransition({}),
			onShown: () => this.onShown.emit(),
			onHidden: () => this.onHidden.emit(),
		},
	});
}
