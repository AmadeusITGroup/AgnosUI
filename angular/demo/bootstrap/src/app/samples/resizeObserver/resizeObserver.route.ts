import {AgnosUIAngularModule, createResizeObserver, toAngularSignal} from '@agnos-ui/angular-bootstrap';
import {UseDirective} from '@agnos-ui/angular-headless';
import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';

@Component({
	standalone: true,
	imports: [UseDirective, AgnosUIAngularModule],
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
		<div class="demo-resize-observer">
			<label for="resizable">Resizable textarea:</label>
			<textarea
				[auUse]="resizeDirective"
				name="resizable"
				id="resizable"
				rows="6"
				cols="50"
				class="form-control"
				[class.fontsize]="observedHeight$() && observedHeight$()! > 200"
				[style.height.px]="heightValue()"
			>
This simple example is using the resizeObserver feature from @agnos-ui/core and displays the height of the textarea below it.
Modify the height to more than 200 px and see the font size changing.
	</textarea
			>
			<div>
				Textarea content height: <span id="dynamic-height">{{ observedHeight$() }}</span
				>px
			</div>
			<button type="button" class="btn btn-primary m-2" id="decreaseHeight" (click)="decreaseHeight()">Height --</button>
			<button type="button" class="btn btn-primary m-2" id="increaseHeight" (click)="increaseHeight()">Height ++</button>
		</div>
	`,
	styles: "@use '@agnos-ui/common/samples/resizeobserver/resizeobserver.scss';",
})
export default class ResizeObserverComponent {
	readonly heightValue = signal(180);

	readonly resizeObserver = createResizeObserver();

	readonly resizeDirective = this.resizeObserver.directive;

	readonly dimensions$ = toAngularSignal(this.resizeObserver.dimensions$);

	readonly observedHeight$ = computed(() => this.dimensions$()?.contentRect?.height);

	increaseHeight() {
		this.heightValue.set((this.observedHeight$() || 0) + 50);
	}

	decreaseHeight() {
		this.heightValue.set(this.observedHeight$() ? this.observedHeight$()! - 50 : 0);
	}
}
