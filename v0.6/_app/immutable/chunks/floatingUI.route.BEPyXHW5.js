const e=`import {AgnosUIAngularModule, browserDirective, createFloatingUI, toAngularSignal} from '@agnos-ui/angular-bootstrap';
import {ChangeDetectionStrategy, Component, signal} from '@angular/core';
import {autoPlacement, hide, offset, shift} from '@floating-ui/dom';

const scrollToMiddle = browserDirective((element) => {
	element.scrollTo({left: 326, top: 420});
});

@Component({
	standalone: true,
	imports: [AgnosUIAngularModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: \`<div class="position-relative overflow-auto border border-primary-subtle demo-floatingui" [auUse]="scrollToMiddle">
		<button [auUse]="floatingUI.directives.referenceDirective" type="button" class="btn btn-primary" (click)="toggleDisplayPopover()">
			Toggle popover
		</button>
		@if (displayPopover()) {
			<div
				[auUse]="floatingUI.directives.floatingDirective"
				[attr.data-popper-placement]="floatingUIState().placement"
				class="popover bs-popover-auto position-absolute"
				[class.invisible]="floatingUIState().middlewareData?.hide?.referenceHidden"
				role="tooltip"
			>
				<div class="popover-arrow position-absolute" [auUse]="floatingUI.directives.arrowDirective"></div>
				<div class="popover-body text-center">This is a sample popover</div>
			</div>
		}
	</div>\`,

	styles: "@import './floatingui.scss';",
})
export default class FloatingUIComponent {
	readonly displayPopover = signal(true);
	toggleDisplayPopover() {
		this.displayPopover.update((val) => !val);
	}

	readonly floatingUI = createFloatingUI({
		props: {
			arrowOptions: {
				padding: 6,
			},
			computePositionOptions: {
				middleware: [
					offset(10),
					autoPlacement(),
					shift({
						padding: 5,
					}),
					hide(),
				],
			},
		},
	});
	readonly floatingUIState = toAngularSignal(this.floatingUI.state$);
	readonly scrollToMiddle = scrollToMiddle;
}
`;export{e as default};
