const e=`import {createSimpleClassTransition, createTransition, UseDirective} from '@agnos-ui/angular-headless';
import {ChangeDetectionStrategy, Component, input, output} from '@angular/core';
/**
 * You can create easily your own collapse component with the help of the \`createTransition\` function
 * you will be able to plug the transition event of DaisyUI to your component.
 * The \`createSimpleClassTransition\` is a helper to create a transition that will add a class to the element but you don't have to add classes as this
 * DaisyUI CSS is not using this feature.
 */
@Component({
	selector: 'app-collapse',
	imports: [UseDirective],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: \`
		<div
			tabindex="0"
			class="collapse collapse-arrow bg-base-100 border border-base-300"
			[auUse]="transition.directives.directive"
			(blur)="transition.api.hide()"
			(focus)="transition.api.show()"
		>
			<div class="collapse-title font-semibold">{{ title() }}</div>
			<div class="collapse-content"><ng-content /></div>
		</div>
	\`,
})
export class CollapseDaisyComponent {
	readonly title = input('Focus me to see content');

	// The advantage of AgnosUI here is that it plug the transition state to some possible callbacks
	readonly shown = output();
	readonly hidden = output();

	transition = createTransition({
		props: {
			visible: false, // could be something in an input that also add the collapse-open class
			transition: createSimpleClassTransition({}),
			onShown: () => this.shown.emit(),
			onHidden: () => this.hidden.emit(),
		},
	});
}
`;export{e as default};
