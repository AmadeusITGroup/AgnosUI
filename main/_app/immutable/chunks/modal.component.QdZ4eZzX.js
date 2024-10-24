const e=`import type {ModalWidget} from '@agnos-ui/angular-headless';
import {BaseWidgetDirective, UseDirective, auBooleanAttribute, callWidgetFactory, createModal} from '@agnos-ui/angular-headless';
import {ChangeDetectionStrategy, Component, input, model} from '@angular/core';

@Component({
	selector: 'app-modal',
	imports: [UseDirective],
	template: \`
		<dialog class="modal modal-bottom sm:modal-middle" (close)="api.close()" [auUse]="directives.dialogDirective">
			<div class="modal-box">
				<ng-content />
				@if (state.closeButton()) {
					<form method="dialog">
						<button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" [auUse]="directives.closeButtonDirective">✕</button>
					</form>
				}
			</div>
			@if (closeOnOutsideClick()) {
				<form method="dialog" class="modal-backdrop">
					<button (click)="api.close()">Close</button>
				</form>
			}
		</dialog>
	\`,
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent extends BaseWidgetDirective<ModalWidget> {
	readonly closeOnOutsideClick = input(undefined, {transform: auBooleanAttribute});
	readonly closeButton = input(undefined, {transform: auBooleanAttribute});
	readonly ariaCloseButtonLabel = input<string>();
	readonly visible = model(false);

	constructor() {
		super(
			callWidgetFactory({
				factory: createModal,
				widgetName: 'modal',
				events: {
					onVisibleChange: (event) => this.visible.set(event),
					onShown: () => {},
					onHidden: () => {},
					onBeforeClose: () => {},
				},
				defaultConfig: {closeButton: true},
			}),
		);
	}
}
`;export{e as default};
