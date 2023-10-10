import type {NavManagerItemConfig} from '@agnos-ui/angular';
import {AgnosUIAngularModule, createNavManager} from '@agnos-ui/angular';
import {Component, Input} from '@angular/core';

@Component({
	standalone: true,
	selector: 'app-navmanager-line',
	imports: [AgnosUIAngularModule],
	template: `
		<div class="d-flex demo-navmanager-line">
			<input [auUse]="navManager.directive" [auUseParams]="navManagerConfig" type="text" [value]="text" class="form-control me-1" />
			<span [auUse]="navManager.directive" [auUseParams]="navManagerConfig" tabindex="-1" class="form-control w-auto me-1">{{ text }}</span>
			<input
				[auUse]="navManager.directive"
				[auUseParams]="navManagerConfig"
				tabindex="-1"
				type="checkbox"
				class="form-check-input align-self-center me-1"
			/>
			<input
				[auUse]="navManager.directive"
				[auUseParams]="navManagerConfig"
				tabindex="-1"
				type="text"
				[value]="text"
				disabled
				class="form-control me-1"
			/>
			<input [auUse]="navManager.directive" [auUseParams]="navManagerConfig" tabindex="-1" type="text" [value]="text" class="form-control me-1" />
		</div>
	`,
})
export class NavmanagerLineComponent {
	@Input() text = '';

	navManager = createNavManager();

	navManagerConfig: NavManagerItemConfig = {
		keys: {
			ArrowLeft: this.navManager.focusLeft,
			ArrowRight: this.navManager.focusRight,
			Home: this.navManager.focusFirst,
			End: this.navManager.focusLast,
		},
	};
}

@Component({
	standalone: true,
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
