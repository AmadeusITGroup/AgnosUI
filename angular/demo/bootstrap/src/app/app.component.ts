import type {OnInit} from '@angular/core';
import {Component, ChangeDetectionStrategy} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: 'app-root',
	standalone: true,
	imports: [RouterModule],
	template: `<router-outlet />`,
})
export class AppComponent implements OnInit {
	ngOnInit() {
		window.addEventListener('storage', (event) => {
			if (event.key === 'theme') {
				if (event.newValue) {
					document.documentElement.setAttribute('data-bs-theme', event.newValue);
				}
			}
		});
	}
}
