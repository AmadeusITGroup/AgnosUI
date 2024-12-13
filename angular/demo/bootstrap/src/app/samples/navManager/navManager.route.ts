import {createNavManager, UseDirective, type NavManagerItemConfig} from '@agnos-ui/angular-bootstrap';
import {Component, input} from '@angular/core';

@Component({
	selector: 'app-navmanager-line',
	imports: [UseDirective],
	template: `
		<div class="d-flex demo-navmanager-line">
			<input
				[auUse]="[navManager.directive, navManagerConfig]"
				type="text"
				aria-label="navigable-input-1"
				[value]="text()"
				class="form-control me-1"
			/>
			<span [auUse]="[navManager.directive, navManagerConfig]" tabindex="-1" class="form-control w-auto me-1">{{ text() }}</span>
			<input
				[auUse]="[navManager.directive, navManagerConfig]"
				tabindex="-1"
				type="checkbox"
				aria-label="navigable-input-2"
				class="form-check-input align-self-center me-1"
			/>
			<input
				[auUse]="[navManager.directive, navManagerConfig]"
				tabindex="-1"
				type="text"
				aria-label="navigable-input-3"
				[value]="text()"
				disabled
				class="form-control me-1"
			/>
			<input
				[auUse]="[navManager.directive, navManagerConfig]"
				tabindex="-1"
				type="text"
				aria-label="navigable-input-4"
				[value]="text()"
				class="form-control me-1"
			/>
		</div>
	`,
})
export class NavmanagerLineComponent {
	readonly text = input('');

	readonly navManager = createNavManager();

	readonly navManagerConfig: NavManagerItemConfig = {
		keys: {
			ArrowLeft: this.navManager.focusLeft,
			ArrowRight: this.navManager.focusRight,
			Home: this.navManager.focusFirst,
			End: this.navManager.focusLast,
			'Meta+ArrowLeft': this.navManager.focusFirstLeft,
			'Meta+ArrowRight': this.navManager.focusFirstRight,
		},
	};
}

@Component({
	imports: [NavmanagerLineComponent],
	template: `
		<div class="demo-navmanager">
			<div dir="ltr" class="mt-3 pb-3">
				<h2>Left-to-right</h2>
				<app-navmanager-line text="Hello" />
			</div>

			<div dir="rtl" class="mt-3 pb-3">
				<h2>Right-to-left</h2>
				<app-navmanager-line text="שָׁלוֹם" />
			</div>
		</div>
	`,
})
export default class NavmanagerComponent {}
