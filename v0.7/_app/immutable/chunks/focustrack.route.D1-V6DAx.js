const e=`import {UseDirective, toAngularSignal} from '@agnos-ui/angular-bootstrap';
import {activeElement$, createHasFocus} from '@agnos-ui/core';
import {ChangeDetectionStrategy, Component, linkedSignal} from '@angular/core';

@Component({
	imports: [UseDirective],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: \`
		<div class="demo-focustrack">
			<div [auUse]="hasFocusApi.directive" class="my-2 p-2 border">
				<h5>Container</h5>
				<input class="form-control" type="text" placeholder="Focusable input" id="focusableInput" /><br />
				<input class="form-control" type="text" placeholder="Other focusable input" id="otherFocusableInput" />
			</div>
			<input class="form-control" type="text" placeholder="Disabled input" id="disabledInput" disabled /><br />
			<div class="form-check mb-2">
				<input class="form-check-input" type="checkbox" id="containerHasFocus" [checked]="hasFocus()" disabled />
				<label class="form-check-label" for="containerHasFocus">Focus in container</label>
			</div>
			<div class="d-flex justify-content-between">
				<div>Active element history:</div>
				<button class="btn btn-sm btn-primary" (click)="clear()">Clear</button>
			</div>
			<div class="card my-2">
				<div class="card-body">
					<ul class="mb-0">
						@for (element of activeElements(); track element) {
							<li>
								<strong>{{ element.tagName }}</strong>
								@if (element.id; as id) {
									with id <strong>{{ id }}</strong>
								}
							</li>
						}
					</ul>
				</div>
			</div>
		</div>
	\`,
})
export default class FocustrackComponent {
	public readonly hasFocusApi = createHasFocus();
	public readonly hasFocus = toAngularSignal(this.hasFocusApi.hasFocus$);
	private readonly activeElement = toAngularSignal(activeElement$);
	public readonly activeElements = linkedSignal<Element | null, {tagName?: string; id?: string}[]>({
		source: this.activeElement,
		computation: (activeElement, previous) =>
			(previous?.value ?? []).concat([{tagName: activeElement?.tagName?.toLowerCase(), id: activeElement?.id || undefined}]),
	});

	clear() {
		this.activeElements.set([]);
	}
}
`;export{e as default};
