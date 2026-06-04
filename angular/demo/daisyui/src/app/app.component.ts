import type {OnInit} from '@angular/core';
import {Component} from '@angular/core';
import {RouterModule} from '@angular/router';

@Component({
	selector: 'app-root',
	imports: [RouterModule],
	template: `<router-outlet />`,
})
export class AppComponent implements OnInit {
	ngOnInit() {
		window.addEventListener('storage', (event) => {
			if (event.key === 'theme') {
				if (event.newValue) {
					document.documentElement.setAttribute('data-theme', event.newValue);
				}
			}
		});
	}
}
